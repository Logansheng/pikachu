// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n  /*\u9996\u5148\u51C6\u5907\u76AE\u5361\u4E18\u7684\u76AE\u80A4*/\n .skin * {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\nbody {\n  background: #ffe600;\n  padding: 0;\n  margin: 0;\n}\n.skin {\n  position: relative;\n}\n/*\u7136\u540E\u56FA\u5B9A\u76AE\u5361\u4E18\u7684\u9F3B\u5B50*/\n.nose {\n  width: 0;\n  height: 0;\n  border: 10px solid transparent;\n  border-top: 10px solid black;\n  position: relative;\n  left: 50%;\n  top: 300px;\n  margin-left: -10px;\n}\n.nose .yuan {\n  border: 1px solid black;\n  width: 20px;\n  height: 10px;\n  position: absolute;\n  top: -16px;\n  right: -10px;\n  border-radius: 50%;\n  background-color: black;\n}\n/*\u7D27\u63A5\u7740\u662F\u773C\u775B*/\n.eyes {\n  height: 64px;\n  width: 64px;\n  border: 2px solid black;\n  background: #2e2e2e;\n  position: absolute;\n  left: 50%;\n  top: 260px;\n  margin-left: -32px;\n  border-radius: 50%;\n}\n/*\u4F2A\u5143\u7D20\u9AD8\u5149*/\n.eyes::after {\n  content: '';\n  z-index: 10;\n  width: 28px;\n  height: 28px;\n  border: 2px solid black;\n  background: white;\n  position: absolute;\n  border-radius: 50%;\n  right: 22px;\n  top: 2px;\n  animation: look-around 3000ms  infinite;\n\n}\n/*\u6DFB\u52A0\u52A8\u753B*/\n@-webkit-keyframes look-around {\n  0% {\n    -webkit-transform: translate(0);\n    transform: translate(0);\n  }\n  5% {\n    -webkit-transform: translate(50%, -25%);\n    transform: translate(50%, -25%);\n  }\n  10% {\n    -webkit-transform: translate(50%, -25%);\n    transform: translate(50%, -25%);\n  }\n  15% {\n    -webkit-transform: translate(-100%, -25%);\n    transform: translate(-100%, -25%);\n  }\n  20% {\n    -webkit-transform: translate(-100%, -25%);\n    transform: translate(-100%, -25%);\n  }\n  25% {\n    -webkit-transform: translate(0, 0);\n    transform: translate(0, 0);\n  }\n  100% {\n    -webkit-transform: translate(0, 0);\n    transform: translate(0, 0);\n  }\n}\n@keyframes look-around {\n  0% {\n    transform: translate(0);\n  }\n\n  50% {\n\n    transform: translate(40%, 20%);\n  }\n  100% {\n\n    transform: translate(0, 0);\n  }\n}\n/* \u4E0B\u9762\u662F\u52A0\u9F3B\u5B50\u6447\u52A8\u7684\u52A8\u753B */\n@keyframes wave {\n  0% {\n    transform: rotate(-10deg);\n  }\n  33% {\n    transform: rotate(10deg);\n  }\n  66% {\n    transform: rotate(-10deg);\n  }\n  100% {\n    transform: rotate(10deg);\n  }\n}\n\n.eyes.Right {\n  transform: translateX(120px);\n\n}\n.eyes.Left {\n  transform: translateX(-120px);\n\n}\n/*\u63A5\u7740\u662F\u76AE\u5361\u4E18\u7684\u5C0F\u5634\u5DF4*/\n.mouth {\n  height: 200px;\n  width: 180px;\n  position: absolute;\n  right: 50%;\n  margin-right: -90px;\n  top: 320px;\n  overflow: hidden;\n}\n.kua {\n  height: 10px;\n  width: 180px;\n  background: #ffe600;\n  z-index: 0;\n}\n\n.mouth .up .r {\n  height: 30px;\n  width: 90px;\n  border: 4px solid black;\n  border-top: transparent;\n  border-right: transparent;\n  border-radius: 0 0 0 90%;\n  transform: rotate(-26deg);\n  position: absolute;\n  background: #ffe600;\n  top: 0;\n}\n.mouth .up .l {\n  position: absolute;\n  height: 30px;\n  width: 90px;\n  border: 4px solid #000000;\n  border-top: transparent;\n  border-left: transparent;\n  border-radius: 0 0 90% 0;\n  transform: rotate(26deg);\n  top: 0;\n  left: 90px;\n  background: #ffe600;\n}\n.mouth .down {\n  height: 400px;\n  width: 120px;\n  border: 3px solid black;\n  border-radius: 50%;\n  position: absolute;\n  left: 30px;\n  top: -230px;\n  overflow: hidden;\n  background: #9b000a;\n  z-index: -1;\n}\n.mouth .down .pink {\n  height: 400px;\n  width: 200px;\n  border-radius: 50%;\n  position: absolute;\n  right: -43px;\n  top: 260px;\n  background: #ff485f;\n  z-index: 0;\n}\n/*\u6700\u540E\u662F\u4E24\u4E2A\u7EA2\u7EA2\u7684\u5C0F\u8138\u86CB*/\n.face {\n  width: 88px;\n  height: 88px;\n  position: absolute;\n  border: 3px solid black;\n  right: 50%;\n  margin-right: -44px;\n  border-radius: 50%;\n  background: #ff0000;\n}\n.face.Rf {\n  transform: translateX(180px);\n  top: 360px;\n}\n.face.Lf {\n  transform: translateX(-180px);\n  top: 360px;\n}\n\n.nose:hover {\n  animation: wave 250ms infinite;\n}\n/*\u6700\u7EC8\u5B8C\u6210\u4E86\uFF0C\u7528\u7535\u8111\u9884\u89C8\u6548\u679C\u66F4\u4F73*/\n";
var _default = string;
exports.default = _default;
},{}],"mian.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 30,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2")
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 100;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 75;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"css.js"}],"../../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56048" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","mian.js"], null)
//# sourceMappingURL=/mian.9670d4b3.js.map