// ========== Firebase Firestore 共享数据同步模块 ==========
// 替代原有的 REST API 调用，实现多用户实时数据共享
//
// 使用前：替换下方 FIREBASE_CONFIG 为你自己的 Firebase 项目配置
//   Firebase Console → 项目设置 → 添加 Web 应用 → 复制配置对象

var FIREBASE_CONFIG = {
  apiKey: "AIzaSyDubbiGSODAZbvN2_Q3kBonWfiGf3XHXm0",
  authDomain: "gkclyz.firebaseapp.com",
  projectId: "gkclyz",
  storageBucket: "gkclyz.firebasestorage.app",
  messagingSenderId: "56041482320",
  appId: "1:56041482320:web:2615598f46ebb592aac955"
};

var _firebaseConfigured = FIREBASE_CONFIG.apiKey.indexOf('PLACEHOLDER') === -1;
var _firebaseReady = false;
var _db = null;
var _loadPromise = null;  // 防止并行调用重复加载 SDK

// 加载 Firebase SDK（兼容模块版本）
// 多次调用安全：共享同一个 Promise，不会重复创建 script 标签
function loadFirebaseSDK() {
  if (_loadPromise) return _loadPromise;

  _loadPromise = new Promise(function(resolve, reject) {
    if (!_firebaseConfigured) {
      reject(new Error('Firebase not configured'));
      return;
    }

    if (window.firebase && window.firebase.firestore) {
      _initFirebase();
      if (_firebaseReady) { resolve(); } else { reject(new Error('Firebase init failed')); }
      return;
    }

    var scripts = [
      'https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js',
      'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js'
    ];

    var loaded = 0;
    var failed = false;

    scripts.forEach(function(src) {
      var script = document.createElement('script');
      script.src = src;
      script.onload = function() {
        if (failed) return;
        loaded++;
        if (loaded === scripts.length) {
          _initFirebase();
          if (_firebaseReady) {
            resolve();
          } else {
            reject(new Error('Firebase init failed'));
          }
        }
      };
      script.onerror = function() {
        if (failed) return;
        failed = true;
        reject(new Error('Failed to load: ' + src));
      };
      document.head.appendChild(script);
    });
  });

  return _loadPromise;
}

function _initFirebase() {
  try {
    firebase.initializeApp(FIREBASE_CONFIG);
    _db = firebase.firestore();
    _firebaseReady = true;
  } catch (e) {
    if (e.code === 'app/duplicate-app') {
      _db = firebase.firestore();
      _firebaseReady = true;
    } else {
      console.warn('Firebase init error:', e);
    }
  }
}

// 等待 Firebase 就绪（最多等待 5 秒）
function waitForFirebase() {
  return new Promise(function(resolve, reject) {
    if (_firebaseReady && _db) { resolve(_db); return; }
    var start = Date.now();
    var timer = setInterval(function() {
      if (_firebaseReady && _db) {
        clearInterval(timer);
        resolve(_db);
      } else if (Date.now() - start > 5000) {
        clearInterval(timer);
        reject(new Error('Firebase not ready after 5s'));
      }
    }, 100);
  });
}

// ========== 共享数据读写 ==========

// 从 Firestore 拉取某个高校的共享数据
function firebasePull(uniId) {
  return waitForFirebase().then(function(db) {
    return db.collection('shared_data').doc('uni_' + uniId).get()
      .then(function(doc) {
        if (!doc.exists) return null;
        var data = doc.data();
        delete data.updatedAt;  // 不暴露内部时间戳
        return data;
      });
  });
}

// 将本地数据推送到 Firestore
function firebasePush(uniId, data) {
  if (!data || Object.keys(data).length === 0) return Promise.resolve();
  return waitForFirebase().then(function(db) {
    data.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
    return db.collection('shared_data').doc('uni_' + uniId)
      .set(data, { merge: true });
  });
}

// 实时监听某个高校的数据变化（其他用户修改时自动同步）
// 返回 unsubscribe 函数
function firebaseListen(uniId, onUpdate) {
  return waitForFirebase().then(function(db) {
    return db.collection('shared_data').doc('uni_' + uniId)
      .onSnapshot(function(doc) {
        if (doc.exists) {
          var data = doc.data();
          delete data.updatedAt;
          onUpdate(data);
        }
      }, function(err) {
        console.warn('Firestore listen error:', err);
      });
  });
}

// 列出所有有共享数据的高校
function firebaseListAll() {
  return waitForFirebase().then(function(db) {
    return db.collection('shared_data').get()
      .then(function(snapshot) {
        var result = {};
        snapshot.forEach(function(doc) {
          result[doc.id.replace('uni_', '')] = doc.data();
        });
        return result;
      });
  });
}
