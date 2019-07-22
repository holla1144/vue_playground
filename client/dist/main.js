/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83);
/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87);
/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tachyons__WEBPACK_IMPORTED_MODULE_3__);




new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  store: _store__WEBPACK_IMPORTED_MODULE_2__["default"],
  el: '#root',
  render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"])
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "none" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "none" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "none" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       true && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     true && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ( true && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ( true &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        true
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ( true &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2), __webpack_require__(3).setImmediate))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(4);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2), __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("main", [
        _vm.component === "collections"
          ? _c(
              "div",
              [
                _c("Collections", {
                  attrs: {
                    collections: _vm.collections,
                    "handle-click": _vm.handleAddCollectionClick
                  }
                })
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.component === "editCollection"
          ? _c(
              "div",
              [
                _c("CollectionEditor", {
                  attrs: { collection: _vm.selectedCollection },
                  on: { collectionAdded: _vm.handleAddCollection }
                })
              ],
              1
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("Header")
  }
]
render._withStripped = true



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _classes_Collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _components_collectionEditor_CollectionEditor_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _components_Collections_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);
/* harmony import */ var _components_header_Header_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    collections() {
      return this.$store.state.collections;
    },

    selectedCollection() {
      return this.$store.state.collectionEditor.collection;
    }

  },

  data() {
    return {
      component: "collections"
    };
  },

  methods: {
    handleAddCollectionClick() {
      const newCollection = new _classes_Collection__WEBPACK_IMPORTED_MODULE_1__["default"]("", "", [new _classes_Card__WEBPACK_IMPORTED_MODULE_0__["default"]("Lemon", "A Yellow Fruit"), new _classes_Card__WEBPACK_IMPORTED_MODULE_0__["default"]()]);
      this.$store.commit("collectionEditor/setCollection", newCollection);
      this.component = 'editCollection';
    },

    handleAddCollection() {
      this.component = "collections";
    }

  },
  components: {
    Collections: _components_Collections_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    CollectionEditor: _components_collectionEditor_CollectionEditor_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Header: _components_header_Header_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Card {
  constructor(term = "", definition = "") {
    this.createdAt = Date.now();
    this.definition = definition;
    this.id = this.createdAt + Math.random().toString();
    this.term = term;
  }

  validate() {
    return !!this.definition && !!this.term;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Collection {
  constructor(name = "", description = "", cards = []) {
    this.name = name;
    this.description = description;
    this.cards = cards;
  }

  addCard(card) {
    this.cards.push(card);
  }

  validate() {
    return !!this.name && !!this.description && !this.cards.map(card => card.validate()).includes(false);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Collection);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CollectionEditor_vue_vue_type_template_id_e3ce1b62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _CollectionEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CollectionEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CollectionEditor_vue_vue_type_template_id_e3ce1b62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CollectionEditor_vue_vue_type_template_id_e3ce1b62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e3ce1b62",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/collectionEditor/CollectionEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEditor_vue_vue_type_template_id_e3ce1b62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEditor_vue_vue_type_template_id_e3ce1b62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEditor_vue_vue_type_template_id_e3ce1b62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("TextInput", {
        attrs: {
          id: "collectionName",
          label: "Collection Name",
          placeholder: "Ex. JS Terms",
          isValid: _vm.collectionName.length > 0,
          showValidations: _vm.showValidations
        },
        on: { input: _vm.updateField },
        model: {
          value: _vm.collectionName,
          callback: function($$v) {
            _vm.collectionName = $$v
          },
          expression: "collectionName"
        }
      }),
      _vm._v(" "),
      _c("TextInput", {
        attrs: {
          id: "collectionDescription",
          label: "Description",
          placeholder: "Describe your collection",
          isValid: _vm.collectionDescription.length > 0,
          showValidations: _vm.showValidations
        },
        model: {
          value: _vm.collectionDescription,
          callback: function($$v) {
            _vm.collectionDescription = $$v
          },
          expression: "collectionDescription"
        }
      }),
      _vm._v(" "),
      _c("h2", [_vm._v("Add Some Cards")]),
      _vm._v(" "),
      _c("CardEditor", {
        attrs: { cards: _vm.cards, showValidations: _vm.showValidations }
      }),
      _vm._v(" "),
      _c("button", { on: { click: _vm.handleSave } }, [
        _vm._v("Save Collection")
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _classes_Collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _CardEditor_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _shared_TextInput_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      showValidations: false
    };
  },

  methods: {
    updateField($event) {
      console.log($event);
      const name = $event.target.name;
      const value = $event.target.value;
      console.log(target);
      name === "collectionDescription" ? this.updateDescription(value) : this.updateName(value);
    },

    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("collectionEditor", ["updateDescription", "updateName"]),

    handleSave() {
      const candidateCollection = new _classes_Collection__WEBPACK_IMPORTED_MODULE_1__["default"](this.collectionName, this.collectionDescription, this.cards);
      const isCollectionValid = candidateCollection.validate();

      if (isCollectionValid) {
        this.$store.commit("addCollection", candidateCollection);
        this.$emit("collectionAdded");
        return;
      }

      this.showValidations = true;
      alert("Sorry, your new collection is invalid");
    }

  },
  props: {
    collection: {
      required: true,
      validator: collection => collection instanceof _classes_Collection__WEBPACK_IMPORTED_MODULE_1__["default"]
    }
  },
  components: {
    CardEditor: _CardEditor_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    TextInput: _shared_TextInput_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.1.1
 * (c) 2019 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if (true) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
     true &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if (true) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return result.then(function (res) {
    try {
      this$1._actionSubscribers
        .filter(function (sub) { return sub.after; })
        .forEach(function (sub) { return sub.after(action, this$1.state); });
    } catch (e) {
      if (true) {
        console.warn("[vuex] error in after action subscribers: ");
        console.error(e);
      }
    }
    return res
  })
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure enviroment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ( true && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.1.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};

/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardEditor_vue_vue_type_template_id_4cb3f141_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _CardEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* empty/unused harmony star reexport *//* harmony import */ var _CardEditor_vue_vue_type_style_index_0_id_4cb3f141_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CardEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardEditor_vue_vue_type_template_id_4cb3f141_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardEditor_vue_vue_type_template_id_4cb3f141_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4cb3f141",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/collectionEditor/CardEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditor_vue_vue_type_template_id_4cb3f141_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditor_vue_vue_type_template_id_4cb3f141_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditor_vue_vue_type_template_id_4cb3f141_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._l(_vm.cards, function(card, index) {
        return _c("CardEditorRow", {
          key: card.id,
          attrs: {
            card: card,
            cardIndex: index,
            showValidations: _vm.showValidations
          }
        })
      }),
      _vm._v(" "),
      _c("div", { staticClass: "EditorActions" }, [
        _c("button", { on: { click: _vm.handleCardAdd } }, [
          _vm._v("Add a card")
        ])
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardEditorRow_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    handleCardAdd() {
      this.$store.commit("collectionEditor/addCard");
    }

  },
  props: {
    "cards": {
      type: Array,
      required: true
    },
    "showValidations": {
      type: Boolean,
      required: true
    }
  },
  components: {
    CardEditorRow: _CardEditorRow_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardEditorRow_vue_vue_type_template_id_648b5c09_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _CardEditorRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* empty/unused harmony star reexport *//* harmony import */ var _CardEditorRow_vue_vue_type_style_index_0_id_648b5c09_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CardEditorRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardEditorRow_vue_vue_type_template_id_648b5c09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardEditorRow_vue_vue_type_template_id_648b5c09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "648b5c09",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/collectionEditor/CardEditorRow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditorRow_vue_vue_type_template_id_648b5c09_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditorRow_vue_vue_type_template_id_648b5c09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditorRow_vue_vue_type_template_id_648b5c09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "CardEditorRow br4" }, [
    _c("div", { staticClass: "CardEditorRow-remove" }, [
      _vm.showRemoveButton
        ? _c("button", { on: { click: _vm.handleCardRemove } }, [_vm._v("X")])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "CardEditorRow-input" },
      [
        _c("TextInput", {
          attrs: {
            label: "Term",
            id: "term" + _vm.cardIndex,
            isValid: _vm.term.length > 0,
            showValidations: _vm.showValidations
          },
          model: {
            value: _vm.term,
            callback: function($$v) {
              _vm.term = $$v
            },
            expression: "term"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "CardEditorRow-input" },
      [
        _c("TextInput", {
          attrs: {
            label: "Definition",
            id: "definition" + _vm.cardIndex,
            isValid: _vm.definition.length > 0,
            showValidations: _vm.showValidations
          },
          model: {
            value: _vm.definition,
            callback: function($$v) {
              _vm.definition = $$v
            },
            expression: "definition"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditorRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditorRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _classes_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _shared_TextInput_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    showRemoveButton: function () {
      return this.card.validate();
    }
  },

  data() {
    return {
      definition: this.card.definition,
      term: this.card.term
    };
  },

  methods: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("collectionEditor", ["removeCard", "updateCard"]),

    handleCardRemove() {
      this.removeCard(this.cardIndex);
    }

  },
  watch: {
    term: function () {
      const mutationPayload = {
        cardIndex: this.cardIndex,
        field: "term",
        value: this.term
      };
      this.updateCard(mutationPayload);
    },
    definition: function () {
      const mutationPayload = {
        cardIndex: this.cardIndex,
        field: "definition",
        value: this.definition
      };
      this.updateCard(mutationPayload);
    }
  },
  props: {
    "card": {
      validator: function (candidate) {
        return candidate instanceof _classes_Card__WEBPACK_IMPORTED_MODULE_1__["default"];
      },
      required: true
    },
    "cardIndex": {
      type: Number,
      required: true
    },
    "showValidations": {
      type: Boolean,
      required: true
    }
  },
  components: {
    TextInput: _shared_TextInput_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextInput_vue_vue_type_template_id_0e805fe3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _TextInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* empty/unused harmony star reexport *//* harmony import */ var _TextInput_vue_vue_type_style_index_0_id_0e805fe3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TextInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TextInput_vue_vue_type_template_id_0e805fe3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TextInput_vue_vue_type_template_id_0e805fe3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0e805fe3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/shared/TextInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextInput_vue_vue_type_template_id_0e805fe3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextInput_vue_vue_type_template_id_0e805fe3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextInput_vue_vue_type_template_id_0e805fe3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("fieldset", [
    _c(
      "label",
      {
        class: { active: _vm.isFocused, error: _vm.isInvalid },
        attrs: { for: _vm.id }
      },
      [_vm._v(_vm._s(_vm.label))]
    ),
    _vm._v(" "),
    _c("input", {
      staticClass: "Form-input Form-input--text",
      class: { active: _vm.isFocused, error: _vm.isInvalid },
      attrs: { type: "text", id: _vm.id, placeholder: _vm.placeholder },
      domProps: { value: _vm.value },
      on: {
        blur: _vm.handleBlur,
        focus: _vm.handleFocus,
        input: _vm.handleInput
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    isInvalid: function () {
      return this.showValidations && !this.isValid;
    }
  },

  data() {
    return {
      isFocused: false
    };
  },

  methods: {
    handleBlur() {
      this.isFocused = false;
    },

    handleFocus() {
      this.isFocused = true;
    },

    handleInput($event) {
      this.$emit("input", $event.target.value);
    }

  },
  props: {
    id: {
      type: String,
      required: true
    },
    isValid: {
      type: Boolean,
      required: true,
      default: true
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String
    },
    showValidations: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ""
    }
  }
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextInput_vue_vue_type_style_index_0_id_0e805fe3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextInput_vue_vue_type_style_index_0_id_0e805fe3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextInput_vue_vue_type_style_index_0_id_0e805fe3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextInput_vue_vue_type_style_index_0_id_0e805fe3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextInput_vue_vue_type_style_index_0_id_0e805fe3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextInput_vue_vue_type_style_index_0_id_0e805fe3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(38).default
var update = add("7cec8eda", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(false);
// Module
exports.push([module.i, "fieldset[data-v-0e805fe3] {\n  border: 0;\n  padding: 0 0 1em 0;\n}\nlabel[data-v-0e805fe3] {\n  display: block;\n  font-weight: bold;\n  padding: .25em 0;\n  text-transform: uppercase;\n}\nlabel.active[data-v-0e805fe3] {\n    color: #357edd;\n    transition: color 2s;\n}\nlabel.error[data-v-0e805fe3] {\n    color: red;\n}\ninput[data-v-0e805fe3] {\n  background: transparent;\n  display: block;\n  border: 0;\n  border-bottom: 1px solid black;\n  outline: none;\n  padding: .5em;\n  width: 100%;\n}\ninput.active[data-v-0e805fe3] {\n    border-color: #357edd;\n    transition: background-color 2s;\n}\ninput.error[data-v-0e805fe3] {\n    border-color: red;\n}\n", ""]);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditorRow_vue_vue_type_style_index_0_id_648b5c09_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditorRow_vue_vue_type_style_index_0_id_648b5c09_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditorRow_vue_vue_type_style_index_0_id_648b5c09_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditorRow_vue_vue_type_style_index_0_id_648b5c09_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditorRow_vue_vue_type_style_index_0_id_648b5c09_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditorRow_vue_vue_type_style_index_0_id_648b5c09_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(38).default
var update = add("594d2b6d", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(false);
// Module
exports.push([module.i, ".CardEditorRow[data-v-648b5c09] {\n  display: flex;\n  margin: 1em 0;\n  padding: 1em;\n}\n.CardEditorRow[data-v-648b5c09]:nth-child(odd) {\n    background-color: #f6fffe;\n}\n.CardEditorRow-input[data-v-648b5c09] {\n    flex-basis: 48%;\n    padding: 0 0 0 1.5em;\n}\n.CardEditorRow-remove[data-v-648b5c09] {\n    display: flex;\n    width: 15px;\n}\n.CardEditorRow-remove button[data-v-648b5c09] {\n      background: 0;\n      border: 0;\n}\n", ""]);


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditor_vue_vue_type_style_index_0_id_4cb3f141_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditor_vue_vue_type_style_index_0_id_4cb3f141_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditor_vue_vue_type_style_index_0_id_4cb3f141_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditor_vue_vue_type_style_index_0_id_4cb3f141_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditor_vue_vue_type_style_index_0_id_4cb3f141_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardEditor_vue_vue_type_style_index_0_id_4cb3f141_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(38).default
var update = add("f4081bcc", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(false);
// Module
exports.push([module.i, ".EditorActions[data-v-4cb3f141] {\n  display: flex;\n  justify-content: space-between;\n}\n", ""]);


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Collections_vue_vue_type_template_id_32809115_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _Collections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* empty/unused harmony star reexport *//* harmony import */ var _Collections_vue_vue_type_style_index_0_id_32809115_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Collections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Collections_vue_vue_type_template_id_32809115_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Collections_vue_vue_type_template_id_32809115_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "32809115",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Collections.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collections_vue_vue_type_template_id_32809115_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collections_vue_vue_type_template_id_32809115_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collections_vue_vue_type_template_id_32809115_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "CardSets" },
      _vm._l(_vm.collections, function(cardSet) {
        return _c("CardSet", { key: cardSet.name, attrs: { cardSet: cardSet } })
      }),
      1
    ),
    _vm._v(" "),
    _c(
      "button",
      { staticClass: "br4 pointer", on: { click: _vm.handleClick } },
      [_vm._v("add")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Collections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Collections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardSet_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["collections", "handleClick"],
  components: {
    CardSet: _CardSet_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardSet_vue_vue_type_template_id_2e1a7832_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _CardSet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* empty/unused harmony star reexport *//* harmony import */ var _CardSet_vue_vue_type_style_index_0_id_2e1a7832_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CardSet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardSet_vue_vue_type_template_id_2e1a7832_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardSet_vue_vue_type_template_id_2e1a7832_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2e1a7832",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/CardSet.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSet_vue_vue_type_template_id_2e1a7832_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSet_vue_vue_type_template_id_2e1a7832_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSet_vue_vue_type_template_id_2e1a7832_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "CardSet pointer" }, [
    _c("div", { staticClass: "CardSet-body br4" }, [
      _c("div", { staticClass: "CardSet-decoration" }, [
        _c("div", {
          staticClass: "CardSet-colorBlock br4",
          style: { backgroundColor: _vm.backgroundColor }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "CardSet-information" }, [
        _c("p", [_vm._v(_vm._s(_vm.cardSet.name))]),
        _vm._v(" "),
        _c("span", [_vm._v(_vm._s(_vm.cardSet.cards.length) + " cards")])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    backgroundColor() {
      const randomColorIndex = Math.floor(Math.random() * Math.floor(_variables_colors__WEBPACK_IMPORTED_MODULE_0__["default"].length));
      return _variables_colors__WEBPACK_IMPORTED_MODULE_0__["default"][randomColorIndex];
    }

  },
  props: ["cardSet"]
});

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (["#a463f2", "#d5008f", "#19a974", "#00449e", "#96ccff", "#ff725c", "#ffb700", "#ffa3d7", "#137752", "#001b44", "#e8fdf5"]);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSet_vue_vue_type_style_index_0_id_2e1a7832_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSet_vue_vue_type_style_index_0_id_2e1a7832_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSet_vue_vue_type_style_index_0_id_2e1a7832_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSet_vue_vue_type_style_index_0_id_2e1a7832_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSet_vue_vue_type_style_index_0_id_2e1a7832_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSet_vue_vue_type_style_index_0_id_2e1a7832_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(38).default
var update = add("8c2774d6", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(false);
// Module
exports.push([module.i, ".CardSet[data-v-2e1a7832] {\n  min-width: 320px;\n  padding-left: 2em;\n}\n.CardSet:hover .CardSet-body[data-v-2e1a7832] {\n    box-shadow: 7px 7px 8px grey;\n}\n.CardSet:hover .CardSet-colorBlock[data-v-2e1a7832] {\n    left: -43px;\n}\n.CardSet-body[data-v-2e1a7832] {\n    box-shadow: 4px 5px 12px grey;\n    display: flex;\n    padding: 1.5em 1em;\n    position: relative;\n    transition: box-shadow 500ms;\n}\n.CardSet-decoration[data-v-2e1a7832] {\n    flex-basis: calc(100% / 3);\n    min-width: 120px;\n    position: relative;\n}\n.CardSet-colorBlock[data-v-2e1a7832] {\n    background-color: red;\n    height: 150px;\n    left: -40px;\n    position: absolute;\n    transition: left 500ms;\n    width: 150px;\n}\n.CardSet-information[data-v-2e1a7832] {\n    height: 150px;\n    padding-left: 1em;\n}\n", ""]);


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Collections_vue_vue_type_style_index_0_id_32809115_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Collections_vue_vue_type_style_index_0_id_32809115_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Collections_vue_vue_type_style_index_0_id_32809115_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Collections_vue_vue_type_style_index_0_id_32809115_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Collections_vue_vue_type_style_index_0_id_32809115_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Collections_vue_vue_type_style_index_0_id_32809115_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(38).default
var update = add("a23b22f6", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(false);
// Module
exports.push([module.i, ".CardSets[data-v-32809115] {\n  display: grid;\n  grid-gap: 1.5em;\n  grid-template-columns: auto;\n}\n@media (min-width: 700px) {\n.CardSets[data-v-32809115] {\n      grid-template-columns: auto auto;\n}\n}\n@media (min-width: 980px) {\n.CardSets[data-v-32809115] {\n      grid-template-columns: auto auto auto;\n}\n}\nbutton[data-v-32809115] {\n  box-shadow: 4px 2px 4px 2px lightgrey;\n  border: 0;\n  bottom: 50px;\n  font-size: 3em;\n  font-weight: bold;\n  height: 150px;\n  position: fixed;\n  right: 20px;\n  text-transform: uppercase;\n  width: 150px;\n}\n", ""]);


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_ed558de2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* empty/unused harmony star reexport *//* harmony import */ var _Header_vue_vue_type_style_index_0_id_ed558de2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_ed558de2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_ed558de2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ed558de2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/header/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_ed558de2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_ed558de2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_ed558de2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "header",
    { staticClass: "w-100 bb" },
    [_c("Logo"), _vm._v(" "), _vm._m(0)],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("ul", [
        _c("li", [_vm._v("Blog")]),
        _vm._v(" "),
        _c("li", [_vm._v("About")]),
        _vm._v(" "),
        _c("li", [_vm._v("Contact")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Logo: _Logo_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo_vue_vue_type_template_id_688defad_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
/* harmony import */ var _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Logo_vue_vue_type_style_index_0_id_688defad_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Logo_vue_vue_type_template_id_688defad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Logo_vue_vue_type_template_id_688defad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "688defad",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/header/Logo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_688defad_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_688defad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_688defad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "/" } }, [
      _c("h2", { staticClass: "f2" }, [_vm._v("Study Buddy")])
    ])
  }
]
render._withStripped = true



/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 73 */
/***/ (function(module, exports) {

//
//
//

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_id_688defad_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_id_688defad_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_id_688defad_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_id_688defad_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_id_688defad_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_id_688defad_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(38).default
var update = add("0df6123c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(false);
// Module
exports.push([module.i, "h2[data-v-688defad] {\n  padding: .3em;\n}\n", ""]);


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_ed558de2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_ed558de2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_ed558de2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_ed558de2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_ed558de2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_ed558de2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(38).default
var update = add("c3ec07f0", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(false);
// Module
exports.push([module.i, "header[data-v-ed558de2] {\n  align-content: center;\n  display: flex;\n}\nheader nav[data-v-ed558de2] {\n    margin-left: auto;\n}\nheader nav ul[data-v-ed558de2] {\n      display: flex;\n      height: 100%;\n      list-style-type: none;\n}\nheader nav ul li[data-v-ed558de2] {\n        align-items: center;\n        display: flex;\n        padding: 0 20px;\n}\n", ""]);


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(38).default
var update = add("36417da0", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(false);
// Module
exports.push([module.i, "* {\n  box-sizing: border-box;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\nmain {\n  padding: 1em;\n}\n", ""]);


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _collectionEditorModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84);
/* harmony import */ var _root_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85);
/* harmony import */ var _dummyData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86);





vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
const store = new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: {
    collections: Object(_dummyData__WEBPACK_IMPORTED_MODULE_4__["default"])()
  },
  mutations: _root_mutations__WEBPACK_IMPORTED_MODULE_3__["default"],
  modules: {
    collectionEditor: _collectionEditorModule__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _classes_Collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);


const collectionEditor = {
  namespaced: true,
  state: {
    collection: new _classes_Collection__WEBPACK_IMPORTED_MODULE_1__["default"]()
  },
  mutations: {
    addCard(state) {
      state.collection.addCard(new _classes_Card__WEBPACK_IMPORTED_MODULE_0__["default"]());
    },

    removeCard(state, index) {
      console.log("removing card", index);
      state.collection.cards.splice(index, 1);
    },

    setCollection(state, newCollection) {
      state.collection = newCollection;
    },

    updateCard(state, {
      cardIndex,
      field,
      value
    }) {
      state.collection.cards[cardIndex][field] = value;
    },

    updateDescription(state, description) {
      state.collection.description = description;
    },

    updateName(state, name) {
      state.collection.name = name;
    }

  }
};
/* harmony default export */ __webpack_exports__["default"] = (collectionEditor);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  addCollection(state, collection) {
    state.collections.push(collection);
  }

});

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


const createCollections = () => {
  const collections = [];

  for (let i = 0; i < 7; i++) {
    const collection = new _classes_Collection__WEBPACK_IMPORTED_MODULE_0__["default"](`Card Set ${i + 1}`);
    collections.push(collection);
  }

  return collections;
};

/* harmony default export */ __webpack_exports__["default"] = (createCollections);

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(38).default
var update = add("14290aa6", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(false);
// Module
exports.push([module.i, "/*! TACHYONS v4.9.1 | http://tachyons.io */\n/*\n *\n *      ________            ______\n *      ___  __/_____ _________  /______  ______________________\n *      __  /  _  __ `/  ___/_  __ \\_  / / /  __ \\_  __ \\_  ___/\n *      _  /   / /_/ // /__ _  / / /  /_/ // /_/ /  / / /(__  )\n *      /_/    \\__,_/ \\___/ /_/ /_/_\\__, / \\____//_/ /_//____/\n *                                 /____/\n *\n *    TABLE OF CONTENTS\n *\n *    1. External Library Includes\n *       - Normalize.css | http://normalize.css.github.io\n *    2. Tachyons Modules\n *    3. Variables\n *       - Media Queries\n *       - Colors\n *    4. Debugging\n *       - Debug all\n *       - Debug children\n *\n */\n/* External Library Includes */\n/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml { line-height: 1.15; /* 1 */ -webkit-text-size-adjust: 100%; /* 2 */ }\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody { margin: 0; }\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 { font-size: 2em; margin: .67em 0; }\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr { box-sizing: content-box; /* 1 */ height: 0; /* 1 */ overflow: visible; /* 2 */ }\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre { font-family: monospace, monospace; /* 1 */ font-size: 1em; /* 2 */ }\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na { background-color: transparent; }\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] { border-bottom: none; /* 1 */ text-decoration: underline; /* 2 */ -webkit-text-decoration: underline dotted; text-decoration: underline dotted; /* 2 */ }\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb, strong { font-weight: bolder; }\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode, kbd, samp { font-family: monospace, monospace; /* 1 */ font-size: 1em; /* 2 */ }\n/**\n * Add the correct font size in all browsers.\n */\nsmall { font-size: 80%; }\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub, sup { font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }\nsub { bottom: -0.25em; }\nsup { top: -0.5em; }\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg { border-style: none; }\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton, input, optgroup, select, textarea { font-family: inherit; /* 1 */ font-size: 100%; /* 1 */ line-height: 1.15; /* 1 */ margin: 0; /* 2 */ }\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton, input {/* 1 */ overflow: visible; }\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton, select {/* 1 */ text-transform: none; }\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { -webkit-appearance: button; }\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner, [type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner, [type=\"submit\"]::-moz-focus-inner { border-style: none; padding: 0; }\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring, [type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring, [type=\"submit\"]:-moz-focusring { outline: 1px dotted ButtonText; }\n/**\n * Correct the padding in Firefox.\n */\nfieldset { padding: .35em .75em .625em; }\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend { box-sizing: border-box; /* 1 */ color: inherit; /* 2 */ display: table; /* 1 */ max-width: 100%; /* 1 */ padding: 0; /* 3 */ white-space: normal; /* 1 */ }\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress { vertical-align: baseline; }\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea { overflow: auto; }\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; /* 1 */ padding: 0; /* 2 */ }\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button { height: auto; }\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] { -webkit-appearance: textfield; /* 1 */ outline-offset: -2px; /* 2 */ }\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration { -webkit-appearance: none; }\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button { -webkit-appearance: button; /* 1 */ font: inherit; /* 2 */ }\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails { display: block; }\n/*\n * Add the correct display in all browsers.\n */\nsummary { display: list-item; }\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate { display: none; }\n/**\n * Add the correct display in IE 10.\n */\n[hidden] { display: none; }\n/* Modules */\n/*\n \n  BOX SIZING\n\n*/\nhtml, body, div, article, aside, section, main, nav, footer, header, form,\nfieldset, legend, pre, code, a, h1, h2, h3, h4, h5, h6, p, ul, ol, li, dl, dt,\ndd, blockquote, figcaption, figure, textarea, table, td, th, tr,\ninput[type=\"email\"], input[type=\"number\"], input[type=\"password\"],\ninput[type=\"tel\"], input[type=\"text\"], input[type=\"url\"], .border-box { box-sizing: border-box; }\n/*\n\n   ASPECT RATIOS\n\n*/\n/* This is for fluid media that is embedded from third party sites like youtube, vimeo etc.\n * Wrap the outer element in aspect-ratio and then extend it with the desired ratio i.e\n * Make sure there are no height and width attributes on the embedded media.\n * Adapted from: https://github.com/suitcss/components-flex-embed\n *\n * Example:\n *\n * <div class=\"aspect-ratio aspect-ratio--16x9\">\n *  <iframe class=\"aspect-ratio--object\"></iframe>\n * </div>\n *\n * */\n.aspect-ratio { height: 0; position: relative; }\n.aspect-ratio--16x9 { padding-bottom: 56.25%; }\n.aspect-ratio--9x16 { padding-bottom: 177.77%; }\n.aspect-ratio--4x3 { padding-bottom: 75%; }\n.aspect-ratio--3x4 { padding-bottom: 133.33%; }\n.aspect-ratio--6x4 { padding-bottom: 66.6%; }\n.aspect-ratio--4x6 { padding-bottom: 150%; }\n.aspect-ratio--8x5 { padding-bottom: 62.5%; }\n.aspect-ratio--5x8 { padding-bottom: 160%; }\n.aspect-ratio--7x5 { padding-bottom: 71.42%; }\n.aspect-ratio--5x7 { padding-bottom: 140%; }\n.aspect-ratio--1x1 { padding-bottom: 100%; }\n.aspect-ratio--object { position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; z-index: 100; }\n/*\n\n   IMAGES\n   Docs: http://tachyons.io/docs/elements/images/\n\n*/\n/* Responsive images! */\nimg { max-width: 100%; }\n/*\n\n   BACKGROUND SIZE\n   Docs: http://tachyons.io/docs/themes/background-size/\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n/*\n  Often used in combination with background image set as an inline style\n  on an html element.\n*/\n.cover { background-size: cover !important; }\n.contain { background-size: contain !important; }\n/*\n\n    BACKGROUND POSITION\n\n    Base:\n    bg = background\n\n    Modifiers:\n    -center = center center\n    -top = top center\n    -right = center right\n    -bottom = bottom center\n    -left = center left\n\n    Media Query Extensions:\n      -ns = not-small\n      -m  = medium\n      -l  = large\n\n */\n.bg-center { background-repeat: no-repeat; background-position: center center; }\n.bg-top { background-repeat: no-repeat; background-position: top center; }\n.bg-right { background-repeat: no-repeat; background-position: center right; }\n.bg-bottom { background-repeat: no-repeat; background-position: bottom center; }\n.bg-left { background-repeat: no-repeat; background-position: center left; }\n/*\n\n   OUTLINES\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.outline { outline: 1px solid; }\n.outline-transparent { outline: 1px solid transparent; }\n.outline-0 { outline: 0; }\n/*\n\n    BORDERS\n    Docs: http://tachyons.io/docs/themes/borders/\n\n    Base:\n      b = border\n\n    Modifiers:\n      a = all\n      t = top\n      r = right\n      b = bottom\n      l = left\n      n = none\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.ba { border-style: solid; border-width: 1px; }\n.bt { border-top-style: solid; border-top-width: 1px; }\n.br { border-right-style: solid; border-right-width: 1px; }\n.bb { border-bottom-style: solid; border-bottom-width: 1px; }\n.bl { border-left-style: solid; border-left-width: 1px; }\n.bn { border-style: none; border-width: 0; }\n/*\n\n   BORDER COLORS\n   Docs: http://tachyons.io/docs/themes/borders/\n\n   Border colors can be used to extend the base\n   border classes ba,bt,bb,br,bl found in the _borders.css file.\n\n   The base border class by default will set the color of the border\n   to that of the current text color. These classes are for the cases\n   where you desire for the text and border colors to be different.\n\n   Base:\n     b = border\n\n   Modifiers:\n   --color-name = each color variable name is also a border color name\n\n*/\n.b--black { border-color: #000; }\n.b--near-black { border-color: #111; }\n.b--dark-gray { border-color: #333; }\n.b--mid-gray { border-color: #555; }\n.b--gray { border-color: #777; }\n.b--silver { border-color: #999; }\n.b--light-silver { border-color: #aaa; }\n.b--moon-gray { border-color: #ccc; }\n.b--light-gray { border-color: #eee; }\n.b--near-white { border-color: #f4f4f4; }\n.b--white { border-color: #fff; }\n.b--white-90 { border-color: rgba( 255, 255, 255, .9 ); }\n.b--white-80 { border-color: rgba( 255, 255, 255, .8 ); }\n.b--white-70 { border-color: rgba( 255, 255, 255, .7 ); }\n.b--white-60 { border-color: rgba( 255, 255, 255, .6 ); }\n.b--white-50 { border-color: rgba( 255, 255, 255, .5 ); }\n.b--white-40 { border-color: rgba( 255, 255, 255, .4 ); }\n.b--white-30 { border-color: rgba( 255, 255, 255, .3 ); }\n.b--white-20 { border-color: rgba( 255, 255, 255, .2 ); }\n.b--white-10 { border-color: rgba( 255, 255, 255, .1 ); }\n.b--white-05 { border-color: rgba( 255, 255, 255, .05 ); }\n.b--white-025 { border-color: rgba( 255, 255, 255, .025 ); }\n.b--white-0125 { border-color: rgba( 255, 255, 255, .0125 ); }\n.b--black-90 { border-color: rgba( 0, 0, 0, .9 ); }\n.b--black-80 { border-color: rgba( 0, 0, 0, .8 ); }\n.b--black-70 { border-color: rgba( 0, 0, 0, .7 ); }\n.b--black-60 { border-color: rgba( 0, 0, 0, .6 ); }\n.b--black-50 { border-color: rgba( 0, 0, 0, .5 ); }\n.b--black-40 { border-color: rgba( 0, 0, 0, .4 ); }\n.b--black-30 { border-color: rgba( 0, 0, 0, .3 ); }\n.b--black-20 { border-color: rgba( 0, 0, 0, .2 ); }\n.b--black-10 { border-color: rgba( 0, 0, 0, .1 ); }\n.b--black-05 { border-color: rgba( 0, 0, 0, .05 ); }\n.b--black-025 { border-color: rgba( 0, 0, 0, .025 ); }\n.b--black-0125 { border-color: rgba( 0, 0, 0, .0125 ); }\n.b--dark-red { border-color: #e7040f; }\n.b--red { border-color: #ff4136; }\n.b--light-red { border-color: #ff725c; }\n.b--orange { border-color: #ff6300; }\n.b--gold { border-color: #ffb700; }\n.b--yellow { border-color: #ffd700; }\n.b--light-yellow { border-color: #fbf1a9; }\n.b--purple { border-color: #5e2ca5; }\n.b--light-purple { border-color: #a463f2; }\n.b--dark-pink { border-color: #d5008f; }\n.b--hot-pink { border-color: #ff41b4; }\n.b--pink { border-color: #ff80cc; }\n.b--light-pink { border-color: #ffa3d7; }\n.b--dark-green { border-color: #137752; }\n.b--green { border-color: #19a974; }\n.b--light-green { border-color: #9eebcf; }\n.b--navy { border-color: #001b44; }\n.b--dark-blue { border-color: #00449e; }\n.b--blue { border-color: #357edd; }\n.b--light-blue { border-color: #96ccff; }\n.b--lightest-blue { border-color: #cdecff; }\n.b--washed-blue { border-color: #f6fffe; }\n.b--washed-green { border-color: #e8fdf5; }\n.b--washed-yellow { border-color: #fffceb; }\n.b--washed-red { border-color: #ffdfdf; }\n.b--transparent { border-color: transparent; }\n.b--inherit { border-color: inherit; }\n/*\n\n   BORDER RADIUS\n   Docs: http://tachyons.io/docs/themes/border-radius/\n\n   Base:\n     br   = border-radius\n\n   Modifiers:\n     0    = 0/none\n     1    = 1st step in scale\n     2    = 2nd step in scale\n     3    = 3rd step in scale\n     4    = 4th step in scale\n\n   Literal values:\n     -100 = 100%\n     -pill = 9999px\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.br0 { border-radius: 0; }\n.br1 { border-radius: .125rem; }\n.br2 { border-radius: .25rem; }\n.br3 { border-radius: .5rem; }\n.br4 { border-radius: 1rem; }\n.br-100 { border-radius: 100%; }\n.br-pill { border-radius: 9999px; }\n.br--bottom { border-top-left-radius: 0; border-top-right-radius: 0; }\n.br--top { border-bottom-left-radius: 0; border-bottom-right-radius: 0; }\n.br--right { border-top-left-radius: 0; border-bottom-left-radius: 0; }\n.br--left { border-top-right-radius: 0; border-bottom-right-radius: 0; }\n/*\n\n   BORDER STYLES\n   Docs: http://tachyons.io/docs/themes/borders/\n\n   Depends on base border module in _borders.css\n\n   Base:\n     b = border-style\n\n   Modifiers:\n     --none   = none\n     --dotted = dotted\n     --dashed = dashed\n     --solid  = solid\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n */\n.b--dotted { border-style: dotted; }\n.b--dashed { border-style: dashed; }\n.b--solid { border-style: solid; }\n.b--none { border-style: none; }\n/*\n\n   BORDER WIDTHS\n   Docs: http://tachyons.io/docs/themes/borders/\n\n   Base:\n     bw = border-width\n\n   Modifiers:\n     0 = 0 width border\n     1 = 1st step in border-width scale\n     2 = 2nd step in border-width scale\n     3 = 3rd step in border-width scale\n     4 = 4th step in border-width scale\n     5 = 5th step in border-width scale\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.bw0 { border-width: 0; }\n.bw1 { border-width: .125rem; }\n.bw2 { border-width: .25rem; }\n.bw3 { border-width: .5rem; }\n.bw4 { border-width: 1rem; }\n.bw5 { border-width: 2rem; }\n/* Resets */\n.bt-0 { border-top-width: 0; }\n.br-0 { border-right-width: 0; }\n.bb-0 { border-bottom-width: 0; }\n.bl-0 { border-left-width: 0; }\n/*\n\n  BOX-SHADOW\n  Docs: http://tachyons.io/docs/themes/box-shadow/\n\n  Media Query Extensions:\n   -ns = not-small\n   -m  = medium\n   -l  = large\n\n */\n.shadow-1 { box-shadow: 0 0 4px 2px rgba( 0, 0, 0, .2 ); }\n.shadow-2 { box-shadow: 0 0 8px 2px rgba( 0, 0, 0, .2 ); }\n.shadow-3 { box-shadow: 2px 2px 4px 2px rgba( 0, 0, 0, .2 ); }\n.shadow-4 { box-shadow: 2px 2px 8px 0 rgba( 0, 0, 0, .2 ); }\n.shadow-5 { box-shadow: 4px 4px 8px 0 rgba( 0, 0, 0, .2 ); }\n/*\n\n   CODE\n\n*/\n.pre { overflow-x: auto; overflow-y: hidden; overflow: scroll; }\n/*\n\n   COORDINATES\n   Docs: http://tachyons.io/docs/layout/position/\n\n   Use in combination with the position module.\n\n   Base:\n     top\n     bottom\n     right\n     left\n\n   Modifiers:\n     -0  = literal value 0\n     -1  = literal value 1\n     -2  = literal value 2\n     --1 = literal value -1\n     --2 = literal value -2\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.top-0 { top: 0; }\n.right-0 { right: 0; }\n.bottom-0 { bottom: 0; }\n.left-0 { left: 0; }\n.top-1 { top: 1rem; }\n.right-1 { right: 1rem; }\n.bottom-1 { bottom: 1rem; }\n.left-1 { left: 1rem; }\n.top-2 { top: 2rem; }\n.right-2 { right: 2rem; }\n.bottom-2 { bottom: 2rem; }\n.left-2 { left: 2rem; }\n.top--1 { top: -1rem; }\n.right--1 { right: -1rem; }\n.bottom--1 { bottom: -1rem; }\n.left--1 { left: -1rem; }\n.top--2 { top: -2rem; }\n.right--2 { right: -2rem; }\n.bottom--2 { bottom: -2rem; }\n.left--2 { left: -2rem; }\n.absolute--fill { top: 0; right: 0; bottom: 0; left: 0; }\n/*\n\n   CLEARFIX\n   http://tachyons.io/docs/layout/clearfix/\n\n*/\n/* Nicolas Gallaghers Clearfix solution\n   Ref: http://nicolasgallagher.com/micro-clearfix-hack/ */\n.cf:before, .cf:after { content: \" \"; display: table; }\n.cf:after { clear: both; }\n.cf { *zoom: 1; }\n.cl { clear: left; }\n.cr { clear: right; }\n.cb { clear: both; }\n.cn { clear: none; }\n/*\n\n   DISPLAY\n   Docs: http://tachyons.io/docs/layout/display\n\n   Base:\n    d = display\n\n   Modifiers:\n    n     = none\n    b     = block\n    ib    = inline-block\n    it    = inline-table\n    t     = table\n    tc    = table-cell\n    t-row          = table-row\n    t-columm       = table-column\n    t-column-group = table-column-group\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.dn { display: none; }\n.di { display: inline; }\n.db { display: block; }\n.dib { display: inline-block; }\n.dit { display: inline-table; }\n.dt { display: table; }\n.dtc { display: table-cell; }\n.dt-row { display: table-row; }\n.dt-row-group { display: table-row-group; }\n.dt-column { display: table-column; }\n.dt-column-group { display: table-column-group; }\n/*\n  This will set table to full width and then\n  all cells will be equal width\n*/\n.dt--fixed { table-layout: fixed; width: 100%; }\n/*\n\n  FLEXBOX\n\n  Media Query Extensions:\n   -ns = not-small\n   -m  = medium\n   -l  = large\n\n*/\n.flex { display: flex; }\n.inline-flex { display: inline-flex; }\n/* 1. Fix for Chrome 44 bug.\n * https://code.google.com/p/chromium/issues/detail?id=506893 */\n.flex-auto { flex: 1 1 auto; min-width: 0; /* 1 */ min-height: 0; /* 1 */ }\n.flex-none { flex: none; }\n.flex-column { flex-direction: column; }\n.flex-row { flex-direction: row; }\n.flex-wrap { flex-wrap: wrap; }\n.flex-nowrap { flex-wrap: nowrap; }\n.flex-wrap-reverse { flex-wrap: wrap-reverse; }\n.flex-column-reverse { flex-direction: column-reverse; }\n.flex-row-reverse { flex-direction: row-reverse; }\n.items-start { align-items: flex-start; }\n.items-end { align-items: flex-end; }\n.items-center { align-items: center; }\n.items-baseline { align-items: baseline; }\n.items-stretch { align-items: stretch; }\n.self-start { align-self: flex-start; }\n.self-end { align-self: flex-end; }\n.self-center { align-self: center; }\n.self-baseline { align-self: baseline; }\n.self-stretch { align-self: stretch; }\n.justify-start { justify-content: flex-start; }\n.justify-end { justify-content: flex-end; }\n.justify-center { justify-content: center; }\n.justify-between { justify-content: space-between; }\n.justify-around { justify-content: space-around; }\n.content-start { align-content: flex-start; }\n.content-end { align-content: flex-end; }\n.content-center { align-content: center; }\n.content-between { align-content: space-between; }\n.content-around { align-content: space-around; }\n.content-stretch { align-content: stretch; }\n.order-0 { order: 0; }\n.order-1 { order: 1; }\n.order-2 { order: 2; }\n.order-3 { order: 3; }\n.order-4 { order: 4; }\n.order-5 { order: 5; }\n.order-6 { order: 6; }\n.order-7 { order: 7; }\n.order-8 { order: 8; }\n.order-last { order: 99999; }\n.flex-grow-0 { flex-grow: 0; }\n.flex-grow-1 { flex-grow: 1; }\n.flex-shrink-0 { flex-shrink: 0; }\n.flex-shrink-1 { flex-shrink: 1; }\n/*\n\n   FLOATS\n   http://tachyons.io/docs/layout/floats/\n\n   1. Floated elements are automatically rendered as block level elements.\n      Setting floats to display inline will fix the double margin bug in\n      ie6. You know... just in case.\n\n   2. Don't forget to clearfix your floats with .cf\n\n   Base:\n     f = float\n\n   Modifiers:\n     l = left\n     r = right\n     n = none\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.fl { float: left; _display: inline; }\n.fr { float: right; _display: inline; }\n.fn { float: none; }\n/*\n\n   FONT FAMILY GROUPS\n   Docs: http://tachyons.io/docs/typography/font-family/\n\n*/\n.sans-serif { font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif; }\n.serif { font-family: georgia, times, serif; }\n.system-sans-serif { font-family: sans-serif; }\n.system-serif { font-family: serif; }\n/* Monospaced Typefaces (for code) */\n/* From http://cssfontstack.com */\ncode, .code { font-family: Consolas, monaco, monospace; }\n.courier { font-family: 'Courier Next', courier, monospace; }\n/* Sans-Serif Typefaces */\n.helvetica { font-family: 'helvetica neue', helvetica, sans-serif; }\n.avenir { font-family: 'avenir next', avenir, sans-serif; }\n/* Serif Typefaces */\n.athelas { font-family: athelas, georgia, serif; }\n.georgia { font-family: georgia, serif; }\n.times { font-family: times, serif; }\n.bodoni { font-family: \"Bodoni MT\", serif; }\n.calisto { font-family: \"Calisto MT\", serif; }\n.garamond { font-family: garamond, serif; }\n.baskerville { font-family: baskerville, serif; }\n/*\n\n   FONT STYLE\n   Docs: http://tachyons.io/docs/typography/font-style/\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.i { font-style: italic; }\n.fs-normal { font-style: normal; }\n/*\n\n   FONT WEIGHT\n   Docs: http://tachyons.io/docs/typography/font-weight/\n\n   Base\n     fw = font-weight\n\n   Modifiers:\n     1 = literal value 100\n     2 = literal value 200\n     3 = literal value 300\n     4 = literal value 400\n     5 = literal value 500\n     6 = literal value 600\n     7 = literal value 700\n     8 = literal value 800\n     9 = literal value 900\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.normal { font-weight: normal; }\n.b { font-weight: bold; }\n.fw1 { font-weight: 100; }\n.fw2 { font-weight: 200; }\n.fw3 { font-weight: 300; }\n.fw4 { font-weight: 400; }\n.fw5 { font-weight: 500; }\n.fw6 { font-weight: 600; }\n.fw7 { font-weight: 700; }\n.fw8 { font-weight: 800; }\n.fw9 { font-weight: 900; }\n/*\n\n   FORMS\n   \n*/\n.input-reset { -webkit-appearance: none; -moz-appearance: none; }\n.button-reset::-moz-focus-inner, .input-reset::-moz-focus-inner { border: 0; padding: 0; }\n/*\n\n   HEIGHTS\n   Docs: http://tachyons.io/docs/layout/heights/\n\n   Base:\n     h = height\n     min-h = min-height\n     min-vh = min-height vertical screen height\n     vh = vertical screen height\n\n   Modifiers\n     1 = 1st step in height scale\n     2 = 2nd step in height scale\n     3 = 3rd step in height scale\n     4 = 4th step in height scale\n     5 = 5th step in height scale\n\n     -25   = literal value 25%\n     -50   = literal value 50%\n     -75   = literal value 75%\n     -100  = literal value 100%\n\n     -auto = string value of auto\n     -inherit = string value of inherit\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n/* Height Scale */\n.h1 { height: 1rem; }\n.h2 { height: 2rem; }\n.h3 { height: 4rem; }\n.h4 { height: 8rem; }\n.h5 { height: 16rem; }\n/* Height Percentages - Based off of height of parent */\n.h-25 { height: 25%; }\n.h-50 { height: 50%; }\n.h-75 { height: 75%; }\n.h-100 { height: 100%; }\n.min-h-100 { min-height: 100%; }\n/* Screen Height Percentage */\n.vh-25 { height: 25vh; }\n.vh-50 { height: 50vh; }\n.vh-75 { height: 75vh; }\n.vh-100 { height: 100vh; }\n.min-vh-100 { min-height: 100vh; }\n/* String Properties */\n.h-auto { height: auto; }\n.h-inherit { height: inherit; }\n/*\n\n   LETTER SPACING\n   Docs: http://tachyons.io/docs/typography/tracking/\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.tracked { letter-spacing: .1em; }\n.tracked-tight { letter-spacing: -.05em; }\n.tracked-mega { letter-spacing: .25em; }\n/*\n\n   LINE HEIGHT / LEADING\n   Docs: http://tachyons.io/docs/typography/line-height\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.lh-solid { line-height: 1; }\n.lh-title { line-height: 1.25; }\n.lh-copy { line-height: 1.5; }\n/*\n\n   LINKS\n   Docs: http://tachyons.io/docs/elements/links/\n\n*/\n.link { text-decoration: none; transition: color .15s ease-in; }\n.link:link, .link:visited { transition: color .15s ease-in; }\n.link:hover { transition: color .15s ease-in; }\n.link:active { transition: color .15s ease-in; }\n.link:focus { transition: color .15s ease-in; outline: 1px dotted currentColor; }\n/*\n\n   LISTS\n   http://tachyons.io/docs/elements/lists/\n\n*/\n.list { list-style-type: none; }\n/*\n\n   MAX WIDTHS\n   Docs: http://tachyons.io/docs/layout/max-widths/\n\n   Base:\n     mw = max-width\n\n   Modifiers\n     1 = 1st step in width scale\n     2 = 2nd step in width scale\n     3 = 3rd step in width scale\n     4 = 4th step in width scale\n     5 = 5th step in width scale\n     6 = 6st step in width scale\n     7 = 7nd step in width scale\n     8 = 8rd step in width scale\n     9 = 9th step in width scale\n\n     -100 = literal value 100%\n\n     -none  = string value none\n\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n/* Max Width Percentages */\n.mw-100 { max-width: 100%; }\n/* Max Width Scale */\n.mw1 { max-width: 1rem; }\n.mw2 { max-width: 2rem; }\n.mw3 { max-width: 4rem; }\n.mw4 { max-width: 8rem; }\n.mw5 { max-width: 16rem; }\n.mw6 { max-width: 32rem; }\n.mw7 { max-width: 48rem; }\n.mw8 { max-width: 64rem; }\n.mw9 { max-width: 96rem; }\n/* Max Width String Properties */\n.mw-none { max-width: none; }\n/*\n\n   WIDTHS\n   Docs: http://tachyons.io/docs/layout/widths/\n\n   Base:\n     w = width\n\n   Modifiers\n     1 = 1st step in width scale\n     2 = 2nd step in width scale\n     3 = 3rd step in width scale\n     4 = 4th step in width scale\n     5 = 5th step in width scale\n\n     -10  = literal value 10%\n     -20  = literal value 20%\n     -25  = literal value 25%\n     -30  = literal value 30%\n     -33  = literal value 33%\n     -34  = literal value 34%\n     -40  = literal value 40%\n     -50  = literal value 50%\n     -60  = literal value 60%\n     -70  = literal value 70%\n     -75  = literal value 75%\n     -80  = literal value 80%\n     -90  = literal value 90%\n     -100 = literal value 100%\n\n     -third      = 100% / 3 (Not supported in opera mini or IE8)\n     -two-thirds = 100% / 1.5 (Not supported in opera mini or IE8)\n     -auto       = string value auto\n\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n/* Width Scale */\n.w1 { width: 1rem; }\n.w2 { width: 2rem; }\n.w3 { width: 4rem; }\n.w4 { width: 8rem; }\n.w5 { width: 16rem; }\n.w-10 { width: 10%; }\n.w-20 { width: 20%; }\n.w-25 { width: 25%; }\n.w-30 { width: 30%; }\n.w-33 { width: 33%; }\n.w-34 { width: 34%; }\n.w-40 { width: 40%; }\n.w-50 { width: 50%; }\n.w-60 { width: 60%; }\n.w-70 { width: 70%; }\n.w-75 { width: 75%; }\n.w-80 { width: 80%; }\n.w-90 { width: 90%; }\n.w-100 { width: 100%; }\n.w-third { width: calc( 100% / 3 ); }\n.w-two-thirds { width: calc( 100% / 1.5 ); }\n.w-auto { width: auto; }\n/*\n\n    OVERFLOW\n\n    Media Query Extensions:\n      -ns = not-small\n      -m  = medium\n      -l  = large\n\n */\n.overflow-visible { overflow: visible; }\n.overflow-hidden { overflow: hidden; }\n.overflow-scroll { overflow: scroll; }\n.overflow-auto { overflow: auto; }\n.overflow-x-visible { overflow-x: visible; }\n.overflow-x-hidden { overflow-x: hidden; }\n.overflow-x-scroll { overflow-x: scroll; }\n.overflow-x-auto { overflow-x: auto; }\n.overflow-y-visible { overflow-y: visible; }\n.overflow-y-hidden { overflow-y: hidden; }\n.overflow-y-scroll { overflow-y: scroll; }\n.overflow-y-auto { overflow-y: auto; }\n/*\n\n   POSITIONING\n   Docs: http://tachyons.io/docs/layout/position/\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.static { position: static; }\n.relative { position: relative; }\n.absolute { position: absolute; }\n.fixed { position: fixed; }\n/*\n\n    OPACITY\n    Docs: http://tachyons.io/docs/themes/opacity/\n\n*/\n.o-100 { opacity: 1; }\n.o-90 { opacity: .9; }\n.o-80 { opacity: .8; }\n.o-70 { opacity: .7; }\n.o-60 { opacity: .6; }\n.o-50 { opacity: .5; }\n.o-40 { opacity: .4; }\n.o-30 { opacity: .3; }\n.o-20 { opacity: .2; }\n.o-10 { opacity: .1; }\n.o-05 { opacity: .05; }\n.o-025 { opacity: .025; }\n.o-0 { opacity: 0; }\n/*\n\n   ROTATIONS\n\n*/\n.rotate-45 { -webkit-transform: rotate( 45deg ); transform: rotate( 45deg ); }\n.rotate-90 { -webkit-transform: rotate( 90deg ); transform: rotate( 90deg ); }\n.rotate-135 { -webkit-transform: rotate( 135deg ); transform: rotate( 135deg ); }\n.rotate-180 { -webkit-transform: rotate( 180deg ); transform: rotate( 180deg ); }\n.rotate-225 { -webkit-transform: rotate( 225deg ); transform: rotate( 225deg ); }\n.rotate-270 { -webkit-transform: rotate( 270deg ); transform: rotate( 270deg ); }\n.rotate-315 { -webkit-transform: rotate( 315deg ); transform: rotate( 315deg ); }\n/*\n\n   SKINS\n   Docs: http://tachyons.io/docs/themes/skins/\n\n   Classes for setting foreground and background colors on elements.\n   If you haven't declared a border color, but set border on an element, it will \n   be set to the current text color. \n\n*/\n/* Text colors */\n.black-90 { color: rgba( 0, 0, 0, .9 ); }\n.black-80 { color: rgba( 0, 0, 0, .8 ); }\n.black-70 { color: rgba( 0, 0, 0, .7 ); }\n.black-60 { color: rgba( 0, 0, 0, .6 ); }\n.black-50 { color: rgba( 0, 0, 0, .5 ); }\n.black-40 { color: rgba( 0, 0, 0, .4 ); }\n.black-30 { color: rgba( 0, 0, 0, .3 ); }\n.black-20 { color: rgba( 0, 0, 0, .2 ); }\n.black-10 { color: rgba( 0, 0, 0, .1 ); }\n.black-05 { color: rgba( 0, 0, 0, .05 ); }\n.white-90 { color: rgba( 255, 255, 255, .9 ); }\n.white-80 { color: rgba( 255, 255, 255, .8 ); }\n.white-70 { color: rgba( 255, 255, 255, .7 ); }\n.white-60 { color: rgba( 255, 255, 255, .6 ); }\n.white-50 { color: rgba( 255, 255, 255, .5 ); }\n.white-40 { color: rgba( 255, 255, 255, .4 ); }\n.white-30 { color: rgba( 255, 255, 255, .3 ); }\n.white-20 { color: rgba( 255, 255, 255, .2 ); }\n.white-10 { color: rgba( 255, 255, 255, .1 ); }\n.black { color: #000; }\n.near-black { color: #111; }\n.dark-gray { color: #333; }\n.mid-gray { color: #555; }\n.gray { color: #777; }\n.silver { color: #999; }\n.light-silver { color: #aaa; }\n.moon-gray { color: #ccc; }\n.light-gray { color: #eee; }\n.near-white { color: #f4f4f4; }\n.white { color: #fff; }\n.dark-red { color: #e7040f; }\n.red { color: #ff4136; }\n.light-red { color: #ff725c; }\n.orange { color: #ff6300; }\n.gold { color: #ffb700; }\n.yellow { color: #ffd700; }\n.light-yellow { color: #fbf1a9; }\n.purple { color: #5e2ca5; }\n.light-purple { color: #a463f2; }\n.dark-pink { color: #d5008f; }\n.hot-pink { color: #ff41b4; }\n.pink { color: #ff80cc; }\n.light-pink { color: #ffa3d7; }\n.dark-green { color: #137752; }\n.green { color: #19a974; }\n.light-green { color: #9eebcf; }\n.navy { color: #001b44; }\n.dark-blue { color: #00449e; }\n.blue { color: #357edd; }\n.light-blue { color: #96ccff; }\n.lightest-blue { color: #cdecff; }\n.washed-blue { color: #f6fffe; }\n.washed-green { color: #e8fdf5; }\n.washed-yellow { color: #fffceb; }\n.washed-red { color: #ffdfdf; }\n.color-inherit { color: inherit; }\n.bg-black-90 { background-color: rgba( 0, 0, 0, .9 ); }\n.bg-black-80 { background-color: rgba( 0, 0, 0, .8 ); }\n.bg-black-70 { background-color: rgba( 0, 0, 0, .7 ); }\n.bg-black-60 { background-color: rgba( 0, 0, 0, .6 ); }\n.bg-black-50 { background-color: rgba( 0, 0, 0, .5 ); }\n.bg-black-40 { background-color: rgba( 0, 0, 0, .4 ); }\n.bg-black-30 { background-color: rgba( 0, 0, 0, .3 ); }\n.bg-black-20 { background-color: rgba( 0, 0, 0, .2 ); }\n.bg-black-10 { background-color: rgba( 0, 0, 0, .1 ); }\n.bg-black-05 { background-color: rgba( 0, 0, 0, .05 ); }\n.bg-white-90 { background-color: rgba( 255, 255, 255, .9 ); }\n.bg-white-80 { background-color: rgba( 255, 255, 255, .8 ); }\n.bg-white-70 { background-color: rgba( 255, 255, 255, .7 ); }\n.bg-white-60 { background-color: rgba( 255, 255, 255, .6 ); }\n.bg-white-50 { background-color: rgba( 255, 255, 255, .5 ); }\n.bg-white-40 { background-color: rgba( 255, 255, 255, .4 ); }\n.bg-white-30 { background-color: rgba( 255, 255, 255, .3 ); }\n.bg-white-20 { background-color: rgba( 255, 255, 255, .2 ); }\n.bg-white-10 { background-color: rgba( 255, 255, 255, .1 ); }\n/* Background colors */\n.bg-black { background-color: #000; }\n.bg-near-black { background-color: #111; }\n.bg-dark-gray { background-color: #333; }\n.bg-mid-gray { background-color: #555; }\n.bg-gray { background-color: #777; }\n.bg-silver { background-color: #999; }\n.bg-light-silver { background-color: #aaa; }\n.bg-moon-gray { background-color: #ccc; }\n.bg-light-gray { background-color: #eee; }\n.bg-near-white { background-color: #f4f4f4; }\n.bg-white { background-color: #fff; }\n.bg-transparent { background-color: transparent; }\n.bg-dark-red { background-color: #e7040f; }\n.bg-red { background-color: #ff4136; }\n.bg-light-red { background-color: #ff725c; }\n.bg-orange { background-color: #ff6300; }\n.bg-gold { background-color: #ffb700; }\n.bg-yellow { background-color: #ffd700; }\n.bg-light-yellow { background-color: #fbf1a9; }\n.bg-purple { background-color: #5e2ca5; }\n.bg-light-purple { background-color: #a463f2; }\n.bg-dark-pink { background-color: #d5008f; }\n.bg-hot-pink { background-color: #ff41b4; }\n.bg-pink { background-color: #ff80cc; }\n.bg-light-pink { background-color: #ffa3d7; }\n.bg-dark-green { background-color: #137752; }\n.bg-green { background-color: #19a974; }\n.bg-light-green { background-color: #9eebcf; }\n.bg-navy { background-color: #001b44; }\n.bg-dark-blue { background-color: #00449e; }\n.bg-blue { background-color: #357edd; }\n.bg-light-blue { background-color: #96ccff; }\n.bg-lightest-blue { background-color: #cdecff; }\n.bg-washed-blue { background-color: #f6fffe; }\n.bg-washed-green { background-color: #e8fdf5; }\n.bg-washed-yellow { background-color: #fffceb; }\n.bg-washed-red { background-color: #ffdfdf; }\n.bg-inherit { background-color: inherit; }\n/* \n  \n   SKINS:PSEUDO\n\n   Customize the color of an element when\n   it is focused or hovered over.\n \n */\n.hover-black:hover { color: #000; }\n.hover-black:focus { color: #000; }\n.hover-near-black:hover { color: #111; }\n.hover-near-black:focus { color: #111; }\n.hover-dark-gray:hover { color: #333; }\n.hover-dark-gray:focus { color: #333; }\n.hover-mid-gray:hover { color: #555; }\n.hover-mid-gray:focus { color: #555; }\n.hover-gray:hover { color: #777; }\n.hover-gray:focus { color: #777; }\n.hover-silver:hover { color: #999; }\n.hover-silver:focus { color: #999; }\n.hover-light-silver:hover { color: #aaa; }\n.hover-light-silver:focus { color: #aaa; }\n.hover-moon-gray:hover { color: #ccc; }\n.hover-moon-gray:focus { color: #ccc; }\n.hover-light-gray:hover { color: #eee; }\n.hover-light-gray:focus { color: #eee; }\n.hover-near-white:hover { color: #f4f4f4; }\n.hover-near-white:focus { color: #f4f4f4; }\n.hover-white:hover { color: #fff; }\n.hover-white:focus { color: #fff; }\n.hover-black-90:hover { color: rgba( 0, 0, 0, .9 ); }\n.hover-black-90:focus { color: rgba( 0, 0, 0, .9 ); }\n.hover-black-80:hover { color: rgba( 0, 0, 0, .8 ); }\n.hover-black-80:focus { color: rgba( 0, 0, 0, .8 ); }\n.hover-black-70:hover { color: rgba( 0, 0, 0, .7 ); }\n.hover-black-70:focus { color: rgba( 0, 0, 0, .7 ); }\n.hover-black-60:hover { color: rgba( 0, 0, 0, .6 ); }\n.hover-black-60:focus { color: rgba( 0, 0, 0, .6 ); }\n.hover-black-50:hover { color: rgba( 0, 0, 0, .5 ); }\n.hover-black-50:focus { color: rgba( 0, 0, 0, .5 ); }\n.hover-black-40:hover { color: rgba( 0, 0, 0, .4 ); }\n.hover-black-40:focus { color: rgba( 0, 0, 0, .4 ); }\n.hover-black-30:hover { color: rgba( 0, 0, 0, .3 ); }\n.hover-black-30:focus { color: rgba( 0, 0, 0, .3 ); }\n.hover-black-20:hover { color: rgba( 0, 0, 0, .2 ); }\n.hover-black-20:focus { color: rgba( 0, 0, 0, .2 ); }\n.hover-black-10:hover { color: rgba( 0, 0, 0, .1 ); }\n.hover-black-10:focus { color: rgba( 0, 0, 0, .1 ); }\n.hover-white-90:hover { color: rgba( 255, 255, 255, .9 ); }\n.hover-white-90:focus { color: rgba( 255, 255, 255, .9 ); }\n.hover-white-80:hover { color: rgba( 255, 255, 255, .8 ); }\n.hover-white-80:focus { color: rgba( 255, 255, 255, .8 ); }\n.hover-white-70:hover { color: rgba( 255, 255, 255, .7 ); }\n.hover-white-70:focus { color: rgba( 255, 255, 255, .7 ); }\n.hover-white-60:hover { color: rgba( 255, 255, 255, .6 ); }\n.hover-white-60:focus { color: rgba( 255, 255, 255, .6 ); }\n.hover-white-50:hover { color: rgba( 255, 255, 255, .5 ); }\n.hover-white-50:focus { color: rgba( 255, 255, 255, .5 ); }\n.hover-white-40:hover { color: rgba( 255, 255, 255, .4 ); }\n.hover-white-40:focus { color: rgba( 255, 255, 255, .4 ); }\n.hover-white-30:hover { color: rgba( 255, 255, 255, .3 ); }\n.hover-white-30:focus { color: rgba( 255, 255, 255, .3 ); }\n.hover-white-20:hover { color: rgba( 255, 255, 255, .2 ); }\n.hover-white-20:focus { color: rgba( 255, 255, 255, .2 ); }\n.hover-white-10:hover { color: rgba( 255, 255, 255, .1 ); }\n.hover-white-10:focus { color: rgba( 255, 255, 255, .1 ); }\n.hover-inherit:hover, .hover-inherit:focus { color: inherit; }\n.hover-bg-black:hover { background-color: #000; }\n.hover-bg-black:focus { background-color: #000; }\n.hover-bg-near-black:hover { background-color: #111; }\n.hover-bg-near-black:focus { background-color: #111; }\n.hover-bg-dark-gray:hover { background-color: #333; }\n.hover-bg-dark-gray:focus { background-color: #333; }\n.hover-bg-mid-gray:hover { background-color: #555; }\n.hover-bg-mid-gray:focus { background-color: #555; }\n.hover-bg-gray:hover { background-color: #777; }\n.hover-bg-gray:focus { background-color: #777; }\n.hover-bg-silver:hover { background-color: #999; }\n.hover-bg-silver:focus { background-color: #999; }\n.hover-bg-light-silver:hover { background-color: #aaa; }\n.hover-bg-light-silver:focus { background-color: #aaa; }\n.hover-bg-moon-gray:hover { background-color: #ccc; }\n.hover-bg-moon-gray:focus { background-color: #ccc; }\n.hover-bg-light-gray:hover { background-color: #eee; }\n.hover-bg-light-gray:focus { background-color: #eee; }\n.hover-bg-near-white:hover { background-color: #f4f4f4; }\n.hover-bg-near-white:focus { background-color: #f4f4f4; }\n.hover-bg-white:hover { background-color: #fff; }\n.hover-bg-white:focus { background-color: #fff; }\n.hover-bg-transparent:hover { background-color: transparent; }\n.hover-bg-transparent:focus { background-color: transparent; }\n.hover-bg-black-90:hover { background-color: rgba( 0, 0, 0, .9 ); }\n.hover-bg-black-90:focus { background-color: rgba( 0, 0, 0, .9 ); }\n.hover-bg-black-80:hover { background-color: rgba( 0, 0, 0, .8 ); }\n.hover-bg-black-80:focus { background-color: rgba( 0, 0, 0, .8 ); }\n.hover-bg-black-70:hover { background-color: rgba( 0, 0, 0, .7 ); }\n.hover-bg-black-70:focus { background-color: rgba( 0, 0, 0, .7 ); }\n.hover-bg-black-60:hover { background-color: rgba( 0, 0, 0, .6 ); }\n.hover-bg-black-60:focus { background-color: rgba( 0, 0, 0, .6 ); }\n.hover-bg-black-50:hover { background-color: rgba( 0, 0, 0, .5 ); }\n.hover-bg-black-50:focus { background-color: rgba( 0, 0, 0, .5 ); }\n.hover-bg-black-40:hover { background-color: rgba( 0, 0, 0, .4 ); }\n.hover-bg-black-40:focus { background-color: rgba( 0, 0, 0, .4 ); }\n.hover-bg-black-30:hover { background-color: rgba( 0, 0, 0, .3 ); }\n.hover-bg-black-30:focus { background-color: rgba( 0, 0, 0, .3 ); }\n.hover-bg-black-20:hover { background-color: rgba( 0, 0, 0, .2 ); }\n.hover-bg-black-20:focus { background-color: rgba( 0, 0, 0, .2 ); }\n.hover-bg-black-10:hover { background-color: rgba( 0, 0, 0, .1 ); }\n.hover-bg-black-10:focus { background-color: rgba( 0, 0, 0, .1 ); }\n.hover-bg-white-90:hover { background-color: rgba( 255, 255, 255, .9 ); }\n.hover-bg-white-90:focus { background-color: rgba( 255, 255, 255, .9 ); }\n.hover-bg-white-80:hover { background-color: rgba( 255, 255, 255, .8 ); }\n.hover-bg-white-80:focus { background-color: rgba( 255, 255, 255, .8 ); }\n.hover-bg-white-70:hover { background-color: rgba( 255, 255, 255, .7 ); }\n.hover-bg-white-70:focus { background-color: rgba( 255, 255, 255, .7 ); }\n.hover-bg-white-60:hover { background-color: rgba( 255, 255, 255, .6 ); }\n.hover-bg-white-60:focus { background-color: rgba( 255, 255, 255, .6 ); }\n.hover-bg-white-50:hover { background-color: rgba( 255, 255, 255, .5 ); }\n.hover-bg-white-50:focus { background-color: rgba( 255, 255, 255, .5 ); }\n.hover-bg-white-40:hover { background-color: rgba( 255, 255, 255, .4 ); }\n.hover-bg-white-40:focus { background-color: rgba( 255, 255, 255, .4 ); }\n.hover-bg-white-30:hover { background-color: rgba( 255, 255, 255, .3 ); }\n.hover-bg-white-30:focus { background-color: rgba( 255, 255, 255, .3 ); }\n.hover-bg-white-20:hover { background-color: rgba( 255, 255, 255, .2 ); }\n.hover-bg-white-20:focus { background-color: rgba( 255, 255, 255, .2 ); }\n.hover-bg-white-10:hover { background-color: rgba( 255, 255, 255, .1 ); }\n.hover-bg-white-10:focus { background-color: rgba( 255, 255, 255, .1 ); }\n.hover-dark-red:hover { color: #e7040f; }\n.hover-dark-red:focus { color: #e7040f; }\n.hover-red:hover { color: #ff4136; }\n.hover-red:focus { color: #ff4136; }\n.hover-light-red:hover { color: #ff725c; }\n.hover-light-red:focus { color: #ff725c; }\n.hover-orange:hover { color: #ff6300; }\n.hover-orange:focus { color: #ff6300; }\n.hover-gold:hover { color: #ffb700; }\n.hover-gold:focus { color: #ffb700; }\n.hover-yellow:hover { color: #ffd700; }\n.hover-yellow:focus { color: #ffd700; }\n.hover-light-yellow:hover { color: #fbf1a9; }\n.hover-light-yellow:focus { color: #fbf1a9; }\n.hover-purple:hover { color: #5e2ca5; }\n.hover-purple:focus { color: #5e2ca5; }\n.hover-light-purple:hover { color: #a463f2; }\n.hover-light-purple:focus { color: #a463f2; }\n.hover-dark-pink:hover { color: #d5008f; }\n.hover-dark-pink:focus { color: #d5008f; }\n.hover-hot-pink:hover { color: #ff41b4; }\n.hover-hot-pink:focus { color: #ff41b4; }\n.hover-pink:hover { color: #ff80cc; }\n.hover-pink:focus { color: #ff80cc; }\n.hover-light-pink:hover { color: #ffa3d7; }\n.hover-light-pink:focus { color: #ffa3d7; }\n.hover-dark-green:hover { color: #137752; }\n.hover-dark-green:focus { color: #137752; }\n.hover-green:hover { color: #19a974; }\n.hover-green:focus { color: #19a974; }\n.hover-light-green:hover { color: #9eebcf; }\n.hover-light-green:focus { color: #9eebcf; }\n.hover-navy:hover { color: #001b44; }\n.hover-navy:focus { color: #001b44; }\n.hover-dark-blue:hover { color: #00449e; }\n.hover-dark-blue:focus { color: #00449e; }\n.hover-blue:hover { color: #357edd; }\n.hover-blue:focus { color: #357edd; }\n.hover-light-blue:hover { color: #96ccff; }\n.hover-light-blue:focus { color: #96ccff; }\n.hover-lightest-blue:hover { color: #cdecff; }\n.hover-lightest-blue:focus { color: #cdecff; }\n.hover-washed-blue:hover { color: #f6fffe; }\n.hover-washed-blue:focus { color: #f6fffe; }\n.hover-washed-green:hover { color: #e8fdf5; }\n.hover-washed-green:focus { color: #e8fdf5; }\n.hover-washed-yellow:hover { color: #fffceb; }\n.hover-washed-yellow:focus { color: #fffceb; }\n.hover-washed-red:hover { color: #ffdfdf; }\n.hover-washed-red:focus { color: #ffdfdf; }\n.hover-bg-dark-red:hover { background-color: #e7040f; }\n.hover-bg-dark-red:focus { background-color: #e7040f; }\n.hover-bg-red:hover { background-color: #ff4136; }\n.hover-bg-red:focus { background-color: #ff4136; }\n.hover-bg-light-red:hover { background-color: #ff725c; }\n.hover-bg-light-red:focus { background-color: #ff725c; }\n.hover-bg-orange:hover { background-color: #ff6300; }\n.hover-bg-orange:focus { background-color: #ff6300; }\n.hover-bg-gold:hover { background-color: #ffb700; }\n.hover-bg-gold:focus { background-color: #ffb700; }\n.hover-bg-yellow:hover { background-color: #ffd700; }\n.hover-bg-yellow:focus { background-color: #ffd700; }\n.hover-bg-light-yellow:hover { background-color: #fbf1a9; }\n.hover-bg-light-yellow:focus { background-color: #fbf1a9; }\n.hover-bg-purple:hover { background-color: #5e2ca5; }\n.hover-bg-purple:focus { background-color: #5e2ca5; }\n.hover-bg-light-purple:hover { background-color: #a463f2; }\n.hover-bg-light-purple:focus { background-color: #a463f2; }\n.hover-bg-dark-pink:hover { background-color: #d5008f; }\n.hover-bg-dark-pink:focus { background-color: #d5008f; }\n.hover-bg-hot-pink:hover { background-color: #ff41b4; }\n.hover-bg-hot-pink:focus { background-color: #ff41b4; }\n.hover-bg-pink:hover { background-color: #ff80cc; }\n.hover-bg-pink:focus { background-color: #ff80cc; }\n.hover-bg-light-pink:hover { background-color: #ffa3d7; }\n.hover-bg-light-pink:focus { background-color: #ffa3d7; }\n.hover-bg-dark-green:hover { background-color: #137752; }\n.hover-bg-dark-green:focus { background-color: #137752; }\n.hover-bg-green:hover { background-color: #19a974; }\n.hover-bg-green:focus { background-color: #19a974; }\n.hover-bg-light-green:hover { background-color: #9eebcf; }\n.hover-bg-light-green:focus { background-color: #9eebcf; }\n.hover-bg-navy:hover { background-color: #001b44; }\n.hover-bg-navy:focus { background-color: #001b44; }\n.hover-bg-dark-blue:hover { background-color: #00449e; }\n.hover-bg-dark-blue:focus { background-color: #00449e; }\n.hover-bg-blue:hover { background-color: #357edd; }\n.hover-bg-blue:focus { background-color: #357edd; }\n.hover-bg-light-blue:hover { background-color: #96ccff; }\n.hover-bg-light-blue:focus { background-color: #96ccff; }\n.hover-bg-lightest-blue:hover { background-color: #cdecff; }\n.hover-bg-lightest-blue:focus { background-color: #cdecff; }\n.hover-bg-washed-blue:hover { background-color: #f6fffe; }\n.hover-bg-washed-blue:focus { background-color: #f6fffe; }\n.hover-bg-washed-green:hover { background-color: #e8fdf5; }\n.hover-bg-washed-green:focus { background-color: #e8fdf5; }\n.hover-bg-washed-yellow:hover { background-color: #fffceb; }\n.hover-bg-washed-yellow:focus { background-color: #fffceb; }\n.hover-bg-washed-red:hover { background-color: #ffdfdf; }\n.hover-bg-washed-red:focus { background-color: #ffdfdf; }\n.hover-bg-inherit:hover, .hover-bg-inherit:focus { background-color: inherit; }\n/* Variables */\n/*\n   SPACING\n   Docs: http://tachyons.io/docs/layout/spacing/\n\n   An eight step powers of two scale ranging from 0 to 16rem.\n\n   Base:\n     p = padding\n     m = margin\n\n   Modifiers:\n     a = all\n     h = horizontal\n     v = vertical\n     t = top\n     r = right\n     b = bottom\n     l = left\n\n     0 = none\n     1 = 1st step in spacing scale\n     2 = 2nd step in spacing scale\n     3 = 3rd step in spacing scale\n     4 = 4th step in spacing scale\n     5 = 5th step in spacing scale\n     6 = 6th step in spacing scale\n     7 = 7th step in spacing scale\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.pa0 { padding: 0; }\n.pa1 { padding: .25rem; }\n.pa2 { padding: .5rem; }\n.pa3 { padding: 1rem; }\n.pa4 { padding: 2rem; }\n.pa5 { padding: 4rem; }\n.pa6 { padding: 8rem; }\n.pa7 { padding: 16rem; }\n.pl0 { padding-left: 0; }\n.pl1 { padding-left: .25rem; }\n.pl2 { padding-left: .5rem; }\n.pl3 { padding-left: 1rem; }\n.pl4 { padding-left: 2rem; }\n.pl5 { padding-left: 4rem; }\n.pl6 { padding-left: 8rem; }\n.pl7 { padding-left: 16rem; }\n.pr0 { padding-right: 0; }\n.pr1 { padding-right: .25rem; }\n.pr2 { padding-right: .5rem; }\n.pr3 { padding-right: 1rem; }\n.pr4 { padding-right: 2rem; }\n.pr5 { padding-right: 4rem; }\n.pr6 { padding-right: 8rem; }\n.pr7 { padding-right: 16rem; }\n.pb0 { padding-bottom: 0; }\n.pb1 { padding-bottom: .25rem; }\n.pb2 { padding-bottom: .5rem; }\n.pb3 { padding-bottom: 1rem; }\n.pb4 { padding-bottom: 2rem; }\n.pb5 { padding-bottom: 4rem; }\n.pb6 { padding-bottom: 8rem; }\n.pb7 { padding-bottom: 16rem; }\n.pt0 { padding-top: 0; }\n.pt1 { padding-top: .25rem; }\n.pt2 { padding-top: .5rem; }\n.pt3 { padding-top: 1rem; }\n.pt4 { padding-top: 2rem; }\n.pt5 { padding-top: 4rem; }\n.pt6 { padding-top: 8rem; }\n.pt7 { padding-top: 16rem; }\n.pv0 { padding-top: 0; padding-bottom: 0; }\n.pv1 { padding-top: .25rem; padding-bottom: .25rem; }\n.pv2 { padding-top: .5rem; padding-bottom: .5rem; }\n.pv3 { padding-top: 1rem; padding-bottom: 1rem; }\n.pv4 { padding-top: 2rem; padding-bottom: 2rem; }\n.pv5 { padding-top: 4rem; padding-bottom: 4rem; }\n.pv6 { padding-top: 8rem; padding-bottom: 8rem; }\n.pv7 { padding-top: 16rem; padding-bottom: 16rem; }\n.ph0 { padding-left: 0; padding-right: 0; }\n.ph1 { padding-left: .25rem; padding-right: .25rem; }\n.ph2 { padding-left: .5rem; padding-right: .5rem; }\n.ph3 { padding-left: 1rem; padding-right: 1rem; }\n.ph4 { padding-left: 2rem; padding-right: 2rem; }\n.ph5 { padding-left: 4rem; padding-right: 4rem; }\n.ph6 { padding-left: 8rem; padding-right: 8rem; }\n.ph7 { padding-left: 16rem; padding-right: 16rem; }\n.ma0 { margin: 0; }\n.ma1 { margin: .25rem; }\n.ma2 { margin: .5rem; }\n.ma3 { margin: 1rem; }\n.ma4 { margin: 2rem; }\n.ma5 { margin: 4rem; }\n.ma6 { margin: 8rem; }\n.ma7 { margin: 16rem; }\n.ml0 { margin-left: 0; }\n.ml1 { margin-left: .25rem; }\n.ml2 { margin-left: .5rem; }\n.ml3 { margin-left: 1rem; }\n.ml4 { margin-left: 2rem; }\n.ml5 { margin-left: 4rem; }\n.ml6 { margin-left: 8rem; }\n.ml7 { margin-left: 16rem; }\n.mr0 { margin-right: 0; }\n.mr1 { margin-right: .25rem; }\n.mr2 { margin-right: .5rem; }\n.mr3 { margin-right: 1rem; }\n.mr4 { margin-right: 2rem; }\n.mr5 { margin-right: 4rem; }\n.mr6 { margin-right: 8rem; }\n.mr7 { margin-right: 16rem; }\n.mb0 { margin-bottom: 0; }\n.mb1 { margin-bottom: .25rem; }\n.mb2 { margin-bottom: .5rem; }\n.mb3 { margin-bottom: 1rem; }\n.mb4 { margin-bottom: 2rem; }\n.mb5 { margin-bottom: 4rem; }\n.mb6 { margin-bottom: 8rem; }\n.mb7 { margin-bottom: 16rem; }\n.mt0 { margin-top: 0; }\n.mt1 { margin-top: .25rem; }\n.mt2 { margin-top: .5rem; }\n.mt3 { margin-top: 1rem; }\n.mt4 { margin-top: 2rem; }\n.mt5 { margin-top: 4rem; }\n.mt6 { margin-top: 8rem; }\n.mt7 { margin-top: 16rem; }\n.mv0 { margin-top: 0; margin-bottom: 0; }\n.mv1 { margin-top: .25rem; margin-bottom: .25rem; }\n.mv2 { margin-top: .5rem; margin-bottom: .5rem; }\n.mv3 { margin-top: 1rem; margin-bottom: 1rem; }\n.mv4 { margin-top: 2rem; margin-bottom: 2rem; }\n.mv5 { margin-top: 4rem; margin-bottom: 4rem; }\n.mv6 { margin-top: 8rem; margin-bottom: 8rem; }\n.mv7 { margin-top: 16rem; margin-bottom: 16rem; }\n.mh0 { margin-left: 0; margin-right: 0; }\n.mh1 { margin-left: .25rem; margin-right: .25rem; }\n.mh2 { margin-left: .5rem; margin-right: .5rem; }\n.mh3 { margin-left: 1rem; margin-right: 1rem; }\n.mh4 { margin-left: 2rem; margin-right: 2rem; }\n.mh5 { margin-left: 4rem; margin-right: 4rem; }\n.mh6 { margin-left: 8rem; margin-right: 8rem; }\n.mh7 { margin-left: 16rem; margin-right: 16rem; }\n/*\n   NEGATIVE MARGINS\n\n   Base:\n     n = negative\n\n   Modifiers:\n     a = all\n     t = top\n     r = right\n     b = bottom\n     l = left\n\n     1 = 1st step in spacing scale\n     2 = 2nd step in spacing scale\n     3 = 3rd step in spacing scale\n     4 = 4th step in spacing scale\n     5 = 5th step in spacing scale\n     6 = 6th step in spacing scale\n     7 = 7th step in spacing scale\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.na1 { margin: -.25rem; }\n.na2 { margin: -.5rem; }\n.na3 { margin: -1rem; }\n.na4 { margin: -2rem; }\n.na5 { margin: -4rem; }\n.na6 { margin: -8rem; }\n.na7 { margin: -16rem; }\n.nl1 { margin-left: -.25rem; }\n.nl2 { margin-left: -.5rem; }\n.nl3 { margin-left: -1rem; }\n.nl4 { margin-left: -2rem; }\n.nl5 { margin-left: -4rem; }\n.nl6 { margin-left: -8rem; }\n.nl7 { margin-left: -16rem; }\n.nr1 { margin-right: -.25rem; }\n.nr2 { margin-right: -.5rem; }\n.nr3 { margin-right: -1rem; }\n.nr4 { margin-right: -2rem; }\n.nr5 { margin-right: -4rem; }\n.nr6 { margin-right: -8rem; }\n.nr7 { margin-right: -16rem; }\n.nb1 { margin-bottom: -.25rem; }\n.nb2 { margin-bottom: -.5rem; }\n.nb3 { margin-bottom: -1rem; }\n.nb4 { margin-bottom: -2rem; }\n.nb5 { margin-bottom: -4rem; }\n.nb6 { margin-bottom: -8rem; }\n.nb7 { margin-bottom: -16rem; }\n.nt1 { margin-top: -.25rem; }\n.nt2 { margin-top: -.5rem; }\n.nt3 { margin-top: -1rem; }\n.nt4 { margin-top: -2rem; }\n.nt5 { margin-top: -4rem; }\n.nt6 { margin-top: -8rem; }\n.nt7 { margin-top: -16rem; }\n/*\n\n  TABLES\n  Docs: http://tachyons.io/docs/elements/tables/\n\n*/\n.collapse { border-collapse: collapse; border-spacing: 0; }\n.striped--light-silver:nth-child(odd) { background-color: #aaa; }\n.striped--moon-gray:nth-child(odd) { background-color: #ccc; }\n.striped--light-gray:nth-child(odd) { background-color: #eee; }\n.striped--near-white:nth-child(odd) { background-color: #f4f4f4; }\n.stripe-light:nth-child(odd) { background-color: rgba( 255, 255, 255, .1 ); }\n.stripe-dark:nth-child(odd) { background-color: rgba( 0, 0, 0, .1 ); }\n/*\n\n   TEXT DECORATION\n   Docs: http://tachyons.io/docs/typography/text-decoration/\n\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.strike { text-decoration: line-through; }\n.underline { text-decoration: underline; }\n.no-underline { text-decoration: none; }\n/*\n\n  TEXT ALIGN\n  Docs: http://tachyons.io/docs/typography/text-align/\n\n  Base\n    t = text-align\n\n  Modifiers\n    l = left\n    r = right\n    c = center\n    j = justify\n\n  Media Query Extensions:\n    -ns = not-small\n    -m  = medium\n    -l  = large\n\n*/\n.tl { text-align: left; }\n.tr { text-align: right; }\n.tc { text-align: center; }\n.tj { text-align: justify; }\n/*\n\n   TEXT TRANSFORM\n   Docs: http://tachyons.io/docs/typography/text-transform/\n\n   Base:\n     tt = text-transform\n\n   Modifiers\n     c = capitalize\n     l = lowercase\n     u = uppercase\n     n = none\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.ttc { text-transform: capitalize; }\n.ttl { text-transform: lowercase; }\n.ttu { text-transform: uppercase; }\n.ttn { text-transform: none; }\n/*\n\n   TYPE SCALE\n   Docs: http://tachyons.io/docs/typography/scale/\n\n   Base:\n    f = font-size\n\n   Modifiers\n     1 = 1st step in size scale\n     2 = 2nd step in size scale\n     3 = 3rd step in size scale\n     4 = 4th step in size scale\n     5 = 5th step in size scale\n     6 = 6th step in size scale\n     7 = 7th step in size scale\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n*/\n/*\n * For Hero/Marketing Titles\n *\n * These generally are too large for mobile\n * so be careful using them on smaller screens.\n * */\n.f-6, .f-headline { font-size: 6rem; }\n.f-5, .f-subheadline { font-size: 5rem; }\n/* Type Scale */\n.f1 { font-size: 3rem; }\n.f2 { font-size: 2.25rem; }\n.f3 { font-size: 1.5rem; }\n.f4 { font-size: 1.25rem; }\n.f5 { font-size: 1rem; }\n.f6 { font-size: .875rem; }\n.f7 { font-size: .75rem; }\n/* Small and hard to read for many people so use with extreme caution */\n/*\n\n   TYPOGRAPHY\n   http://tachyons.io/docs/typography/measure/\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n/* Measure is limited to ~66 characters */\n.measure { max-width: 30em; }\n/* Measure is limited to ~80 characters */\n.measure-wide { max-width: 34em; }\n/* Measure is limited to ~45 characters */\n.measure-narrow { max-width: 20em; }\n/* Book paragraph style - paragraphs are indented with no vertical spacing. */\n.indent { text-indent: 1em; margin-top: 0; margin-bottom: 0; }\n.small-caps { font-variant: small-caps; }\n/* Combine this class with a width to truncate text (or just leave as is to truncate at width of containing element. */\n.truncate { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n/*\n\n   UTILITIES\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n/* Equivalent to .overflow-y-scroll */\n.overflow-container { overflow-y: scroll; }\n.center { margin-right: auto; margin-left: auto; }\n.mr-auto { margin-right: auto; }\n.ml-auto { margin-left: auto; }\n/*\n\n   VISIBILITY\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n/*\n    Text that is hidden but accessible\n    Ref: http://snook.ca/archives/html_and_css/hiding-content-for-accessibility\n*/\n.clip { position: fixed !important; _position: absolute !important; clip: rect( 1px 1px 1px 1px ); /* IE6, IE7 */ clip: rect( 1px, 1px, 1px, 1px ); }\n/*\n\n   WHITE SPACE\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.ws-normal { white-space: normal; }\n.nowrap { white-space: nowrap; }\n.pre { white-space: pre; }\n/*\n\n   VERTICAL ALIGN\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.v-base { vertical-align: baseline; }\n.v-mid { vertical-align: middle; }\n.v-top { vertical-align: top; }\n.v-btm { vertical-align: bottom; }\n/*\n\n  HOVER EFFECTS\n  Docs: http://tachyons.io/docs/themes/hovers/\n\n    - Dim\n    - Glow\n    - Hide Child\n    - Underline text\n    - Grow\n    - Pointer\n    - Shadow\n\n*/\n/*\n\n  Dim element on hover by adding the dim class.\n\n*/\n.dim { opacity: 1; transition: opacity .15s ease-in; }\n.dim:hover, .dim:focus { opacity: .5; transition: opacity .15s ease-in; }\n.dim:active { opacity: .8; transition: opacity .15s ease-out; }\n/*\n\n  Animate opacity to 100% on hover by adding the glow class.\n\n*/\n.glow { transition: opacity .15s ease-in; }\n.glow:hover, .glow:focus { opacity: 1; transition: opacity .15s ease-in; }\n/*\n\n  Hide child & reveal on hover:\n\n  Put the hide-child class on a parent element and any nested element with the\n  child class will be hidden and displayed on hover or focus.\n\n  <div class=\"hide-child\">\n    <div class=\"child\"> Hidden until hover or focus </div>\n    <div class=\"child\"> Hidden until hover or focus </div>\n    <div class=\"child\"> Hidden until hover or focus </div>\n    <div class=\"child\"> Hidden until hover or focus </div>\n  </div>\n*/\n.hide-child .child { opacity: 0; transition: opacity .15s ease-in; }\n.hide-child:hover  .child, .hide-child:focus  .child, .hide-child:active .child { opacity: 1; transition: opacity .15s ease-in; }\n.underline-hover:hover, .underline-hover:focus { text-decoration: underline; }\n/* Can combine this with overflow-hidden to make background images grow on hover\n * even if you are using background-size: cover */\n.grow { -moz-osx-font-smoothing: grayscale; -webkit-backface-visibility: hidden; backface-visibility: hidden; -webkit-transform: translateZ( 0 ); transform: translateZ( 0 ); transition: -webkit-transform .25s ease-out; transition: transform .25s ease-out; transition: transform .25s ease-out, -webkit-transform .25s ease-out; }\n.grow:hover, .grow:focus { -webkit-transform: scale( 1.05 ); transform: scale( 1.05 ); }\n.grow:active { -webkit-transform: scale( .90 ); transform: scale( .90 ); }\n.grow-large { -moz-osx-font-smoothing: grayscale; -webkit-backface-visibility: hidden; backface-visibility: hidden; -webkit-transform: translateZ( 0 ); transform: translateZ( 0 ); transition: -webkit-transform .25s ease-in-out; transition: transform .25s ease-in-out; transition: transform .25s ease-in-out, -webkit-transform .25s ease-in-out; }\n.grow-large:hover, .grow-large:focus { -webkit-transform: scale( 1.2 ); transform: scale( 1.2 ); }\n.grow-large:active { -webkit-transform: scale( .95 ); transform: scale( .95 ); }\n/* Add pointer on hover */\n.pointer:hover { cursor: pointer; }\n/* \n   Add shadow on hover.\n\n   Performant box-shadow animation pattern from \n   http://tobiasahlin.com/blog/how-to-animate-box-shadow/ \n*/\n.shadow-hover { cursor: pointer; position: relative; transition: all .5s cubic-bezier( .165, .84, .44, 1 ); }\n.shadow-hover::after { content: ''; box-shadow: 0 0 16px 2px rgba( 0, 0, 0, .2 ); border-radius: inherit; opacity: 0; position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; transition: opacity .5s cubic-bezier( .165, .84, .44, 1 ); }\n.shadow-hover:hover::after, .shadow-hover:focus::after { opacity: 1; }\n/* Combine with classes in skins and skins-pseudo for \n * many different transition possibilities. */\n.bg-animate, .bg-animate:hover, .bg-animate:focus { transition: background-color .15s ease-in-out; }\n/*\n\n  Z-INDEX\n\n  Base\n    z = z-index\n\n  Modifiers\n    -0 = literal value 0\n    -1 = literal value 1\n    -2 = literal value 2\n    -3 = literal value 3\n    -4 = literal value 4\n    -5 = literal value 5\n    -999 = literal value 999\n    -9999 = literal value 9999\n\n    -max = largest accepted z-index value as integer\n\n    -inherit = string value inherit\n    -initial = string value initial\n    -unset = string value unset\n\n  MDN: https://developer.mozilla.org/en/docs/Web/CSS/z-index\n  Spec: http://www.w3.org/TR/CSS2/zindex.html\n  Articles:\n    https://philipwalton.com/articles/what-no-one-told-you-about-z-index/\n\n  Tips on extending:\n  There might be a time worth using negative z-index values.\n  Or if you are using tachyons with another project, you might need to\n  adjust these values to suit your needs.\n\n*/\n.z-0 { z-index: 0; }\n.z-1 { z-index: 1; }\n.z-2 { z-index: 2; }\n.z-3 { z-index: 3; }\n.z-4 { z-index: 4; }\n.z-5 { z-index: 5; }\n.z-999 { z-index: 999; }\n.z-9999 { z-index: 9999; }\n.z-max { z-index: 2147483647; }\n.z-inherit { z-index: inherit; }\n.z-initial { z-index: initial; }\n.z-unset { z-index: unset; }\n/*\n\n    NESTED\n    Tachyons module for styling nested elements\n    that are generated by a cms.\n\n*/\n.nested-copy-line-height p, .nested-copy-line-height ul,\n.nested-copy-line-height ol { line-height: 1.5; }\n.nested-headline-line-height h1, .nested-headline-line-height h2,\n.nested-headline-line-height h3, .nested-headline-line-height h4,\n.nested-headline-line-height h5, .nested-headline-line-height h6 { line-height: 1.25; }\n.nested-list-reset ul, .nested-list-reset ol { padding-left: 0; margin-left: 0; list-style-type: none; }\n.nested-copy-indent p+p { text-indent: 1em; margin-top: 0; margin-bottom: 0; }\n.nested-copy-separator p+p { margin-top: 1.5em; }\n.nested-img img { width: 100%; max-width: 100%; display: block; }\n.nested-links a { color: #357edd; transition: color .15s ease-in; }\n.nested-links a:hover { color: #96ccff; transition: color .15s ease-in; }\n.nested-links a:focus { color: #96ccff; transition: color .15s ease-in; }\n/*\n\n  STYLES\n\n  Add custom styles here.\n\n*/\n/* Variables */\n/* Importing here will allow you to override any variables in the modules */\n/*\n\n   Tachyons\n   COLOR VARIABLES\n\n   Grayscale\n   - Solids\n   - Transparencies\n   Colors\n\n*/\n/*\n\n  CUSTOM MEDIA QUERIES\n\n  Media query values can be changed to fit your own content.\n  There are no magic bullets when it comes to media query width values.\n  They should be declared in em units - and they should be set to meet\n  the needs of your content. You can also add additional media queries,\n  or remove some of the existing ones.\n\n  These media queries can be referenced like so:\n\n  @media (--breakpoint-not-small) {\n    .medium-and-larger-specific-style {\n      background-color: red;\n    }\n  }\n\n  @media (--breakpoint-medium) {\n    .medium-screen-specific-style {\n      background-color: red;\n    }\n  }\n\n  @media (--breakpoint-large) {\n    .large-and-larger-screen-specific-style {\n      background-color: red;\n    }\n  }\n\n*/\n/* Media Queries */\n/* Debugging */\n/*\n\n  DEBUG CHILDREN\n  Docs: http://tachyons.io/docs/debug/\n\n  Just add the debug class to any element to see outlines on its\n  children.\n\n*/\n.debug * { outline: 1px solid gold; }\n.debug-white * { outline: 1px solid white; }\n.debug-black * { outline: 1px solid black; }\n/*\n\n   DEBUG GRID\n   http://tachyons.io/docs/debug-grid/\n\n   Can be useful for debugging layout issues\n   or helping to make sure things line up perfectly.\n   Just tack one of these classes onto a parent element.\n\n*/\n.debug-grid { background: transparent url( data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFElEQVR4AWPAC97/9x0eCsAEPgwAVLshdpENIxcAAAAASUVORK5CYII= ) repeat top left; }\n.debug-grid-16 { background: transparent url( data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMklEQVR4AWOgCLz/b0epAa6UGuBOqQHOQHLUgFEDnAbcBZ4UGwDOkiCnkIhdgNgNxAYAiYlD+8sEuo8AAAAASUVORK5CYII= ) repeat top left; }\n.debug-grid-8-solid { background: white url( data:image/gif;base64,R0lGODdhCAAIAPEAAADw/wDx/////wAAACwAAAAACAAIAAACDZQvgaeb/lxbAIKA8y0AOw== ) repeat top left; }\n.debug-grid-16-solid { background: white url( data:image/gif;base64,R0lGODdhEAAQAPEAAADw/wDx/xXy/////ywAAAAAEAAQAAACIZyPKckYDQFsb6ZqD85jZ2+BkwiRFKehhqQCQgDHcgwEBQA7 ) repeat top left; }\n/* Uncomment out the line below to help debug layout issues */\n/* @import './_debug'; */\n@media screen and (min-width: 30em) {\n .aspect-ratio-ns { height: 0; position: relative; }\n .aspect-ratio--16x9-ns { padding-bottom: 56.25%; }\n .aspect-ratio--9x16-ns { padding-bottom: 177.77%; }\n .aspect-ratio--4x3-ns { padding-bottom: 75%; }\n .aspect-ratio--3x4-ns { padding-bottom: 133.33%; }\n .aspect-ratio--6x4-ns { padding-bottom: 66.6%; }\n .aspect-ratio--4x6-ns { padding-bottom: 150%; }\n .aspect-ratio--8x5-ns { padding-bottom: 62.5%; }\n .aspect-ratio--5x8-ns { padding-bottom: 160%; }\n .aspect-ratio--7x5-ns { padding-bottom: 71.42%; }\n .aspect-ratio--5x7-ns { padding-bottom: 140%; }\n .aspect-ratio--1x1-ns { padding-bottom: 100%; }\n .aspect-ratio--object-ns { position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; z-index: 100; }\n .cover-ns { background-size: cover !important; }\n .contain-ns { background-size: contain !important; }\n .bg-center-ns { background-repeat: no-repeat; background-position: center center; }\n .bg-top-ns { background-repeat: no-repeat; background-position: top center; }\n .bg-right-ns { background-repeat: no-repeat; background-position: center right; }\n .bg-bottom-ns { background-repeat: no-repeat; background-position: bottom center; }\n .bg-left-ns { background-repeat: no-repeat; background-position: center left; }\n .outline-ns { outline: 1px solid; }\n .outline-transparent-ns { outline: 1px solid transparent; }\n .outline-0-ns { outline: 0; }\n .ba-ns { border-style: solid; border-width: 1px; }\n .bt-ns { border-top-style: solid; border-top-width: 1px; }\n .br-ns { border-right-style: solid; border-right-width: 1px; }\n .bb-ns { border-bottom-style: solid; border-bottom-width: 1px; }\n .bl-ns { border-left-style: solid; border-left-width: 1px; }\n .bn-ns { border-style: none; border-width: 0; }\n .br0-ns { border-radius: 0; }\n .br1-ns { border-radius: .125rem; }\n .br2-ns { border-radius: .25rem; }\n .br3-ns { border-radius: .5rem; }\n .br4-ns { border-radius: 1rem; }\n .br-100-ns { border-radius: 100%; }\n .br-pill-ns { border-radius: 9999px; }\n .br--bottom-ns { border-top-left-radius: 0; border-top-right-radius: 0; }\n .br--top-ns { border-bottom-left-radius: 0; border-bottom-right-radius: 0; }\n .br--right-ns { border-top-left-radius: 0; border-bottom-left-radius: 0; }\n .br--left-ns { border-top-right-radius: 0; border-bottom-right-radius: 0; }\n .b--dotted-ns { border-style: dotted; }\n .b--dashed-ns { border-style: dashed; }\n .b--solid-ns { border-style: solid; }\n .b--none-ns { border-style: none; }\n .bw0-ns { border-width: 0; }\n .bw1-ns { border-width: .125rem; }\n .bw2-ns { border-width: .25rem; }\n .bw3-ns { border-width: .5rem; }\n .bw4-ns { border-width: 1rem; }\n .bw5-ns { border-width: 2rem; }\n .bt-0-ns { border-top-width: 0; }\n .br-0-ns { border-right-width: 0; }\n .bb-0-ns { border-bottom-width: 0; }\n .bl-0-ns { border-left-width: 0; }\n .shadow-1-ns { box-shadow: 0 0 4px 2px rgba( 0, 0, 0, .2 ); }\n .shadow-2-ns { box-shadow: 0 0 8px 2px rgba( 0, 0, 0, .2 ); }\n .shadow-3-ns { box-shadow: 2px 2px 4px 2px rgba( 0, 0, 0, .2 ); }\n .shadow-4-ns { box-shadow: 2px 2px 8px 0 rgba( 0, 0, 0, .2 ); }\n .shadow-5-ns { box-shadow: 4px 4px 8px 0 rgba( 0, 0, 0, .2 ); }\n .top-0-ns { top: 0; }\n .left-0-ns { left: 0; }\n .right-0-ns { right: 0; }\n .bottom-0-ns { bottom: 0; }\n .top-1-ns { top: 1rem; }\n .left-1-ns { left: 1rem; }\n .right-1-ns { right: 1rem; }\n .bottom-1-ns { bottom: 1rem; }\n .top-2-ns { top: 2rem; }\n .left-2-ns { left: 2rem; }\n .right-2-ns { right: 2rem; }\n .bottom-2-ns { bottom: 2rem; }\n .top--1-ns { top: -1rem; }\n .right--1-ns { right: -1rem; }\n .bottom--1-ns { bottom: -1rem; }\n .left--1-ns { left: -1rem; }\n .top--2-ns { top: -2rem; }\n .right--2-ns { right: -2rem; }\n .bottom--2-ns { bottom: -2rem; }\n .left--2-ns { left: -2rem; }\n .absolute--fill-ns { top: 0; right: 0; bottom: 0; left: 0; }\n .cl-ns { clear: left; }\n .cr-ns { clear: right; }\n .cb-ns { clear: both; }\n .cn-ns { clear: none; }\n .dn-ns { display: none; }\n .di-ns { display: inline; }\n .db-ns { display: block; }\n .dib-ns { display: inline-block; }\n .dit-ns { display: inline-table; }\n .dt-ns { display: table; }\n .dtc-ns { display: table-cell; }\n .dt-row-ns { display: table-row; }\n .dt-row-group-ns { display: table-row-group; }\n .dt-column-ns { display: table-column; }\n .dt-column-group-ns { display: table-column-group; }\n .dt--fixed-ns { table-layout: fixed; width: 100%; }\n .flex-ns { display: flex; }\n .inline-flex-ns { display: inline-flex; }\n .flex-auto-ns { flex: 1 1 auto; min-width: 0; /* 1 */ min-height: 0; /* 1 */ }\n .flex-none-ns { flex: none; }\n .flex-column-ns { flex-direction: column; }\n .flex-row-ns { flex-direction: row; }\n .flex-wrap-ns { flex-wrap: wrap; }\n .flex-nowrap-ns { flex-wrap: nowrap; }\n .flex-wrap-reverse-ns { flex-wrap: wrap-reverse; }\n .flex-column-reverse-ns { flex-direction: column-reverse; }\n .flex-row-reverse-ns { flex-direction: row-reverse; }\n .items-start-ns { align-items: flex-start; }\n .items-end-ns { align-items: flex-end; }\n .items-center-ns { align-items: center; }\n .items-baseline-ns { align-items: baseline; }\n .items-stretch-ns { align-items: stretch; }\n .self-start-ns { align-self: flex-start; }\n .self-end-ns { align-self: flex-end; }\n .self-center-ns { align-self: center; }\n .self-baseline-ns { align-self: baseline; }\n .self-stretch-ns { align-self: stretch; }\n .justify-start-ns { justify-content: flex-start; }\n .justify-end-ns { justify-content: flex-end; }\n .justify-center-ns { justify-content: center; }\n .justify-between-ns { justify-content: space-between; }\n .justify-around-ns { justify-content: space-around; }\n .content-start-ns { align-content: flex-start; }\n .content-end-ns { align-content: flex-end; }\n .content-center-ns { align-content: center; }\n .content-between-ns { align-content: space-between; }\n .content-around-ns { align-content: space-around; }\n .content-stretch-ns { align-content: stretch; }\n .order-0-ns { order: 0; }\n .order-1-ns { order: 1; }\n .order-2-ns { order: 2; }\n .order-3-ns { order: 3; }\n .order-4-ns { order: 4; }\n .order-5-ns { order: 5; }\n .order-6-ns { order: 6; }\n .order-7-ns { order: 7; }\n .order-8-ns { order: 8; }\n .order-last-ns { order: 99999; }\n .flex-grow-0-ns { flex-grow: 0; }\n .flex-grow-1-ns { flex-grow: 1; }\n .flex-shrink-0-ns { flex-shrink: 0; }\n .flex-shrink-1-ns { flex-shrink: 1; }\n .fl-ns { float: left; _display: inline; }\n .fr-ns { float: right; _display: inline; }\n .fn-ns { float: none; }\n .i-ns { font-style: italic; }\n .fs-normal-ns { font-style: normal; }\n .normal-ns { font-weight: normal; }\n .b-ns { font-weight: bold; }\n .fw1-ns { font-weight: 100; }\n .fw2-ns { font-weight: 200; }\n .fw3-ns { font-weight: 300; }\n .fw4-ns { font-weight: 400; }\n .fw5-ns { font-weight: 500; }\n .fw6-ns { font-weight: 600; }\n .fw7-ns { font-weight: 700; }\n .fw8-ns { font-weight: 800; }\n .fw9-ns { font-weight: 900; }\n .h1-ns { height: 1rem; }\n .h2-ns { height: 2rem; }\n .h3-ns { height: 4rem; }\n .h4-ns { height: 8rem; }\n .h5-ns { height: 16rem; }\n .h-25-ns { height: 25%; }\n .h-50-ns { height: 50%; }\n .h-75-ns { height: 75%; }\n .h-100-ns { height: 100%; }\n .min-h-100-ns { min-height: 100%; }\n .vh-25-ns { height: 25vh; }\n .vh-50-ns { height: 50vh; }\n .vh-75-ns { height: 75vh; }\n .vh-100-ns { height: 100vh; }\n .min-vh-100-ns { min-height: 100vh; }\n .h-auto-ns { height: auto; }\n .h-inherit-ns { height: inherit; }\n .tracked-ns { letter-spacing: .1em; }\n .tracked-tight-ns { letter-spacing: -.05em; }\n .tracked-mega-ns { letter-spacing: .25em; }\n .lh-solid-ns { line-height: 1; }\n .lh-title-ns { line-height: 1.25; }\n .lh-copy-ns { line-height: 1.5; }\n .mw-100-ns { max-width: 100%; }\n .mw1-ns { max-width: 1rem; }\n .mw2-ns { max-width: 2rem; }\n .mw3-ns { max-width: 4rem; }\n .mw4-ns { max-width: 8rem; }\n .mw5-ns { max-width: 16rem; }\n .mw6-ns { max-width: 32rem; }\n .mw7-ns { max-width: 48rem; }\n .mw8-ns { max-width: 64rem; }\n .mw9-ns { max-width: 96rem; }\n .mw-none-ns { max-width: none; }\n .w1-ns { width: 1rem; }\n .w2-ns { width: 2rem; }\n .w3-ns { width: 4rem; }\n .w4-ns { width: 8rem; }\n .w5-ns { width: 16rem; }\n .w-10-ns { width: 10%; }\n .w-20-ns { width: 20%; }\n .w-25-ns { width: 25%; }\n .w-30-ns { width: 30%; }\n .w-33-ns { width: 33%; }\n .w-34-ns { width: 34%; }\n .w-40-ns { width: 40%; }\n .w-50-ns { width: 50%; }\n .w-60-ns { width: 60%; }\n .w-70-ns { width: 70%; }\n .w-75-ns { width: 75%; }\n .w-80-ns { width: 80%; }\n .w-90-ns { width: 90%; }\n .w-100-ns { width: 100%; }\n .w-third-ns { width: calc( 100% / 3 ); }\n .w-two-thirds-ns { width: calc( 100% / 1.5 ); }\n .w-auto-ns { width: auto; }\n .overflow-visible-ns { overflow: visible; }\n .overflow-hidden-ns { overflow: hidden; }\n .overflow-scroll-ns { overflow: scroll; }\n .overflow-auto-ns { overflow: auto; }\n .overflow-x-visible-ns { overflow-x: visible; }\n .overflow-x-hidden-ns { overflow-x: hidden; }\n .overflow-x-scroll-ns { overflow-x: scroll; }\n .overflow-x-auto-ns { overflow-x: auto; }\n .overflow-y-visible-ns { overflow-y: visible; }\n .overflow-y-hidden-ns { overflow-y: hidden; }\n .overflow-y-scroll-ns { overflow-y: scroll; }\n .overflow-y-auto-ns { overflow-y: auto; }\n .static-ns { position: static; }\n .relative-ns { position: relative; }\n .absolute-ns { position: absolute; }\n .fixed-ns { position: fixed; }\n .rotate-45-ns { -webkit-transform: rotate( 45deg ); transform: rotate( 45deg ); }\n .rotate-90-ns { -webkit-transform: rotate( 90deg ); transform: rotate( 90deg ); }\n .rotate-135-ns { -webkit-transform: rotate( 135deg ); transform: rotate( 135deg ); }\n .rotate-180-ns { -webkit-transform: rotate( 180deg ); transform: rotate( 180deg ); }\n .rotate-225-ns { -webkit-transform: rotate( 225deg ); transform: rotate( 225deg ); }\n .rotate-270-ns { -webkit-transform: rotate( 270deg ); transform: rotate( 270deg ); }\n .rotate-315-ns { -webkit-transform: rotate( 315deg ); transform: rotate( 315deg ); }\n .pa0-ns { padding: 0; }\n .pa1-ns { padding: .25rem; }\n .pa2-ns { padding: .5rem; }\n .pa3-ns { padding: 1rem; }\n .pa4-ns { padding: 2rem; }\n .pa5-ns { padding: 4rem; }\n .pa6-ns { padding: 8rem; }\n .pa7-ns { padding: 16rem; }\n .pl0-ns { padding-left: 0; }\n .pl1-ns { padding-left: .25rem; }\n .pl2-ns { padding-left: .5rem; }\n .pl3-ns { padding-left: 1rem; }\n .pl4-ns { padding-left: 2rem; }\n .pl5-ns { padding-left: 4rem; }\n .pl6-ns { padding-left: 8rem; }\n .pl7-ns { padding-left: 16rem; }\n .pr0-ns { padding-right: 0; }\n .pr1-ns { padding-right: .25rem; }\n .pr2-ns { padding-right: .5rem; }\n .pr3-ns { padding-right: 1rem; }\n .pr4-ns { padding-right: 2rem; }\n .pr5-ns { padding-right: 4rem; }\n .pr6-ns { padding-right: 8rem; }\n .pr7-ns { padding-right: 16rem; }\n .pb0-ns { padding-bottom: 0; }\n .pb1-ns { padding-bottom: .25rem; }\n .pb2-ns { padding-bottom: .5rem; }\n .pb3-ns { padding-bottom: 1rem; }\n .pb4-ns { padding-bottom: 2rem; }\n .pb5-ns { padding-bottom: 4rem; }\n .pb6-ns { padding-bottom: 8rem; }\n .pb7-ns { padding-bottom: 16rem; }\n .pt0-ns { padding-top: 0; }\n .pt1-ns { padding-top: .25rem; }\n .pt2-ns { padding-top: .5rem; }\n .pt3-ns { padding-top: 1rem; }\n .pt4-ns { padding-top: 2rem; }\n .pt5-ns { padding-top: 4rem; }\n .pt6-ns { padding-top: 8rem; }\n .pt7-ns { padding-top: 16rem; }\n .pv0-ns { padding-top: 0; padding-bottom: 0; }\n .pv1-ns { padding-top: .25rem; padding-bottom: .25rem; }\n .pv2-ns { padding-top: .5rem; padding-bottom: .5rem; }\n .pv3-ns { padding-top: 1rem; padding-bottom: 1rem; }\n .pv4-ns { padding-top: 2rem; padding-bottom: 2rem; }\n .pv5-ns { padding-top: 4rem; padding-bottom: 4rem; }\n .pv6-ns { padding-top: 8rem; padding-bottom: 8rem; }\n .pv7-ns { padding-top: 16rem; padding-bottom: 16rem; }\n .ph0-ns { padding-left: 0; padding-right: 0; }\n .ph1-ns { padding-left: .25rem; padding-right: .25rem; }\n .ph2-ns { padding-left: .5rem; padding-right: .5rem; }\n .ph3-ns { padding-left: 1rem; padding-right: 1rem; }\n .ph4-ns { padding-left: 2rem; padding-right: 2rem; }\n .ph5-ns { padding-left: 4rem; padding-right: 4rem; }\n .ph6-ns { padding-left: 8rem; padding-right: 8rem; }\n .ph7-ns { padding-left: 16rem; padding-right: 16rem; }\n .ma0-ns { margin: 0; }\n .ma1-ns { margin: .25rem; }\n .ma2-ns { margin: .5rem; }\n .ma3-ns { margin: 1rem; }\n .ma4-ns { margin: 2rem; }\n .ma5-ns { margin: 4rem; }\n .ma6-ns { margin: 8rem; }\n .ma7-ns { margin: 16rem; }\n .ml0-ns { margin-left: 0; }\n .ml1-ns { margin-left: .25rem; }\n .ml2-ns { margin-left: .5rem; }\n .ml3-ns { margin-left: 1rem; }\n .ml4-ns { margin-left: 2rem; }\n .ml5-ns { margin-left: 4rem; }\n .ml6-ns { margin-left: 8rem; }\n .ml7-ns { margin-left: 16rem; }\n .mr0-ns { margin-right: 0; }\n .mr1-ns { margin-right: .25rem; }\n .mr2-ns { margin-right: .5rem; }\n .mr3-ns { margin-right: 1rem; }\n .mr4-ns { margin-right: 2rem; }\n .mr5-ns { margin-right: 4rem; }\n .mr6-ns { margin-right: 8rem; }\n .mr7-ns { margin-right: 16rem; }\n .mb0-ns { margin-bottom: 0; }\n .mb1-ns { margin-bottom: .25rem; }\n .mb2-ns { margin-bottom: .5rem; }\n .mb3-ns { margin-bottom: 1rem; }\n .mb4-ns { margin-bottom: 2rem; }\n .mb5-ns { margin-bottom: 4rem; }\n .mb6-ns { margin-bottom: 8rem; }\n .mb7-ns { margin-bottom: 16rem; }\n .mt0-ns { margin-top: 0; }\n .mt1-ns { margin-top: .25rem; }\n .mt2-ns { margin-top: .5rem; }\n .mt3-ns { margin-top: 1rem; }\n .mt4-ns { margin-top: 2rem; }\n .mt5-ns { margin-top: 4rem; }\n .mt6-ns { margin-top: 8rem; }\n .mt7-ns { margin-top: 16rem; }\n .mv0-ns { margin-top: 0; margin-bottom: 0; }\n .mv1-ns { margin-top: .25rem; margin-bottom: .25rem; }\n .mv2-ns { margin-top: .5rem; margin-bottom: .5rem; }\n .mv3-ns { margin-top: 1rem; margin-bottom: 1rem; }\n .mv4-ns { margin-top: 2rem; margin-bottom: 2rem; }\n .mv5-ns { margin-top: 4rem; margin-bottom: 4rem; }\n .mv6-ns { margin-top: 8rem; margin-bottom: 8rem; }\n .mv7-ns { margin-top: 16rem; margin-bottom: 16rem; }\n .mh0-ns { margin-left: 0; margin-right: 0; }\n .mh1-ns { margin-left: .25rem; margin-right: .25rem; }\n .mh2-ns { margin-left: .5rem; margin-right: .5rem; }\n .mh3-ns { margin-left: 1rem; margin-right: 1rem; }\n .mh4-ns { margin-left: 2rem; margin-right: 2rem; }\n .mh5-ns { margin-left: 4rem; margin-right: 4rem; }\n .mh6-ns { margin-left: 8rem; margin-right: 8rem; }\n .mh7-ns { margin-left: 16rem; margin-right: 16rem; }\n .na1-ns { margin: -.25rem; }\n .na2-ns { margin: -.5rem; }\n .na3-ns { margin: -1rem; }\n .na4-ns { margin: -2rem; }\n .na5-ns { margin: -4rem; }\n .na6-ns { margin: -8rem; }\n .na7-ns { margin: -16rem; }\n .nl1-ns { margin-left: -.25rem; }\n .nl2-ns { margin-left: -.5rem; }\n .nl3-ns { margin-left: -1rem; }\n .nl4-ns { margin-left: -2rem; }\n .nl5-ns { margin-left: -4rem; }\n .nl6-ns { margin-left: -8rem; }\n .nl7-ns { margin-left: -16rem; }\n .nr1-ns { margin-right: -.25rem; }\n .nr2-ns { margin-right: -.5rem; }\n .nr3-ns { margin-right: -1rem; }\n .nr4-ns { margin-right: -2rem; }\n .nr5-ns { margin-right: -4rem; }\n .nr6-ns { margin-right: -8rem; }\n .nr7-ns { margin-right: -16rem; }\n .nb1-ns { margin-bottom: -.25rem; }\n .nb2-ns { margin-bottom: -.5rem; }\n .nb3-ns { margin-bottom: -1rem; }\n .nb4-ns { margin-bottom: -2rem; }\n .nb5-ns { margin-bottom: -4rem; }\n .nb6-ns { margin-bottom: -8rem; }\n .nb7-ns { margin-bottom: -16rem; }\n .nt1-ns { margin-top: -.25rem; }\n .nt2-ns { margin-top: -.5rem; }\n .nt3-ns { margin-top: -1rem; }\n .nt4-ns { margin-top: -2rem; }\n .nt5-ns { margin-top: -4rem; }\n .nt6-ns { margin-top: -8rem; }\n .nt7-ns { margin-top: -16rem; }\n .strike-ns { text-decoration: line-through; }\n .underline-ns { text-decoration: underline; }\n .no-underline-ns { text-decoration: none; }\n .tl-ns { text-align: left; }\n .tr-ns { text-align: right; }\n .tc-ns { text-align: center; }\n .tj-ns { text-align: justify; }\n .ttc-ns { text-transform: capitalize; }\n .ttl-ns { text-transform: lowercase; }\n .ttu-ns { text-transform: uppercase; }\n .ttn-ns { text-transform: none; }\n .f-6-ns, .f-headline-ns { font-size: 6rem; }\n .f-5-ns, .f-subheadline-ns { font-size: 5rem; }\n .f1-ns { font-size: 3rem; }\n .f2-ns { font-size: 2.25rem; }\n .f3-ns { font-size: 1.5rem; }\n .f4-ns { font-size: 1.25rem; }\n .f5-ns { font-size: 1rem; }\n .f6-ns { font-size: .875rem; }\n .f7-ns { font-size: .75rem; }\n .measure-ns { max-width: 30em; }\n .measure-wide-ns { max-width: 34em; }\n .measure-narrow-ns { max-width: 20em; }\n .indent-ns { text-indent: 1em; margin-top: 0; margin-bottom: 0; }\n .small-caps-ns { font-variant: small-caps; }\n .truncate-ns { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n .center-ns { margin-right: auto; margin-left: auto; }\n .mr-auto-ns { margin-right: auto; }\n .ml-auto-ns { margin-left: auto; }\n .clip-ns { position: fixed !important; _position: absolute !important; clip: rect( 1px 1px 1px 1px ); /* IE6, IE7 */ clip: rect( 1px, 1px, 1px, 1px ); }\n .ws-normal-ns { white-space: normal; }\n .nowrap-ns { white-space: nowrap; }\n .pre-ns { white-space: pre; }\n .v-base-ns { vertical-align: baseline; }\n .v-mid-ns { vertical-align: middle; }\n .v-top-ns { vertical-align: top; }\n .v-btm-ns { vertical-align: bottom; }\n}\n@media screen and (min-width: 30em) and (max-width: 60em) {\n .aspect-ratio-m { height: 0; position: relative; }\n .aspect-ratio--16x9-m { padding-bottom: 56.25%; }\n .aspect-ratio--9x16-m { padding-bottom: 177.77%; }\n .aspect-ratio--4x3-m { padding-bottom: 75%; }\n .aspect-ratio--3x4-m { padding-bottom: 133.33%; }\n .aspect-ratio--6x4-m { padding-bottom: 66.6%; }\n .aspect-ratio--4x6-m { padding-bottom: 150%; }\n .aspect-ratio--8x5-m { padding-bottom: 62.5%; }\n .aspect-ratio--5x8-m { padding-bottom: 160%; }\n .aspect-ratio--7x5-m { padding-bottom: 71.42%; }\n .aspect-ratio--5x7-m { padding-bottom: 140%; }\n .aspect-ratio--1x1-m { padding-bottom: 100%; }\n .aspect-ratio--object-m { position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; z-index: 100; }\n .cover-m { background-size: cover !important; }\n .contain-m { background-size: contain !important; }\n .bg-center-m { background-repeat: no-repeat; background-position: center center; }\n .bg-top-m { background-repeat: no-repeat; background-position: top center; }\n .bg-right-m { background-repeat: no-repeat; background-position: center right; }\n .bg-bottom-m { background-repeat: no-repeat; background-position: bottom center; }\n .bg-left-m { background-repeat: no-repeat; background-position: center left; }\n .outline-m { outline: 1px solid; }\n .outline-transparent-m { outline: 1px solid transparent; }\n .outline-0-m { outline: 0; }\n .ba-m { border-style: solid; border-width: 1px; }\n .bt-m { border-top-style: solid; border-top-width: 1px; }\n .br-m { border-right-style: solid; border-right-width: 1px; }\n .bb-m { border-bottom-style: solid; border-bottom-width: 1px; }\n .bl-m { border-left-style: solid; border-left-width: 1px; }\n .bn-m { border-style: none; border-width: 0; }\n .br0-m { border-radius: 0; }\n .br1-m { border-radius: .125rem; }\n .br2-m { border-radius: .25rem; }\n .br3-m { border-radius: .5rem; }\n .br4-m { border-radius: 1rem; }\n .br-100-m { border-radius: 100%; }\n .br-pill-m { border-radius: 9999px; }\n .br--bottom-m { border-top-left-radius: 0; border-top-right-radius: 0; }\n .br--top-m { border-bottom-left-radius: 0; border-bottom-right-radius: 0; }\n .br--right-m { border-top-left-radius: 0; border-bottom-left-radius: 0; }\n .br--left-m { border-top-right-radius: 0; border-bottom-right-radius: 0; }\n .b--dotted-m { border-style: dotted; }\n .b--dashed-m { border-style: dashed; }\n .b--solid-m { border-style: solid; }\n .b--none-m { border-style: none; }\n .bw0-m { border-width: 0; }\n .bw1-m { border-width: .125rem; }\n .bw2-m { border-width: .25rem; }\n .bw3-m { border-width: .5rem; }\n .bw4-m { border-width: 1rem; }\n .bw5-m { border-width: 2rem; }\n .bt-0-m { border-top-width: 0; }\n .br-0-m { border-right-width: 0; }\n .bb-0-m { border-bottom-width: 0; }\n .bl-0-m { border-left-width: 0; }\n .shadow-1-m { box-shadow: 0 0 4px 2px rgba( 0, 0, 0, .2 ); }\n .shadow-2-m { box-shadow: 0 0 8px 2px rgba( 0, 0, 0, .2 ); }\n .shadow-3-m { box-shadow: 2px 2px 4px 2px rgba( 0, 0, 0, .2 ); }\n .shadow-4-m { box-shadow: 2px 2px 8px 0 rgba( 0, 0, 0, .2 ); }\n .shadow-5-m { box-shadow: 4px 4px 8px 0 rgba( 0, 0, 0, .2 ); }\n .top-0-m { top: 0; }\n .left-0-m { left: 0; }\n .right-0-m { right: 0; }\n .bottom-0-m { bottom: 0; }\n .top-1-m { top: 1rem; }\n .left-1-m { left: 1rem; }\n .right-1-m { right: 1rem; }\n .bottom-1-m { bottom: 1rem; }\n .top-2-m { top: 2rem; }\n .left-2-m { left: 2rem; }\n .right-2-m { right: 2rem; }\n .bottom-2-m { bottom: 2rem; }\n .top--1-m { top: -1rem; }\n .right--1-m { right: -1rem; }\n .bottom--1-m { bottom: -1rem; }\n .left--1-m { left: -1rem; }\n .top--2-m { top: -2rem; }\n .right--2-m { right: -2rem; }\n .bottom--2-m { bottom: -2rem; }\n .left--2-m { left: -2rem; }\n .absolute--fill-m { top: 0; right: 0; bottom: 0; left: 0; }\n .cl-m { clear: left; }\n .cr-m { clear: right; }\n .cb-m { clear: both; }\n .cn-m { clear: none; }\n .dn-m { display: none; }\n .di-m { display: inline; }\n .db-m { display: block; }\n .dib-m { display: inline-block; }\n .dit-m { display: inline-table; }\n .dt-m { display: table; }\n .dtc-m { display: table-cell; }\n .dt-row-m { display: table-row; }\n .dt-row-group-m { display: table-row-group; }\n .dt-column-m { display: table-column; }\n .dt-column-group-m { display: table-column-group; }\n .dt--fixed-m { table-layout: fixed; width: 100%; }\n .flex-m { display: flex; }\n .inline-flex-m { display: inline-flex; }\n .flex-auto-m { flex: 1 1 auto; min-width: 0; /* 1 */ min-height: 0; /* 1 */ }\n .flex-none-m { flex: none; }\n .flex-column-m { flex-direction: column; }\n .flex-row-m { flex-direction: row; }\n .flex-wrap-m { flex-wrap: wrap; }\n .flex-nowrap-m { flex-wrap: nowrap; }\n .flex-wrap-reverse-m { flex-wrap: wrap-reverse; }\n .flex-column-reverse-m { flex-direction: column-reverse; }\n .flex-row-reverse-m { flex-direction: row-reverse; }\n .items-start-m { align-items: flex-start; }\n .items-end-m { align-items: flex-end; }\n .items-center-m { align-items: center; }\n .items-baseline-m { align-items: baseline; }\n .items-stretch-m { align-items: stretch; }\n .self-start-m { align-self: flex-start; }\n .self-end-m { align-self: flex-end; }\n .self-center-m { align-self: center; }\n .self-baseline-m { align-self: baseline; }\n .self-stretch-m { align-self: stretch; }\n .justify-start-m { justify-content: flex-start; }\n .justify-end-m { justify-content: flex-end; }\n .justify-center-m { justify-content: center; }\n .justify-between-m { justify-content: space-between; }\n .justify-around-m { justify-content: space-around; }\n .content-start-m { align-content: flex-start; }\n .content-end-m { align-content: flex-end; }\n .content-center-m { align-content: center; }\n .content-between-m { align-content: space-between; }\n .content-around-m { align-content: space-around; }\n .content-stretch-m { align-content: stretch; }\n .order-0-m { order: 0; }\n .order-1-m { order: 1; }\n .order-2-m { order: 2; }\n .order-3-m { order: 3; }\n .order-4-m { order: 4; }\n .order-5-m { order: 5; }\n .order-6-m { order: 6; }\n .order-7-m { order: 7; }\n .order-8-m { order: 8; }\n .order-last-m { order: 99999; }\n .flex-grow-0-m { flex-grow: 0; }\n .flex-grow-1-m { flex-grow: 1; }\n .flex-shrink-0-m { flex-shrink: 0; }\n .flex-shrink-1-m { flex-shrink: 1; }\n .fl-m { float: left; _display: inline; }\n .fr-m { float: right; _display: inline; }\n .fn-m { float: none; }\n .i-m { font-style: italic; }\n .fs-normal-m { font-style: normal; }\n .normal-m { font-weight: normal; }\n .b-m { font-weight: bold; }\n .fw1-m { font-weight: 100; }\n .fw2-m { font-weight: 200; }\n .fw3-m { font-weight: 300; }\n .fw4-m { font-weight: 400; }\n .fw5-m { font-weight: 500; }\n .fw6-m { font-weight: 600; }\n .fw7-m { font-weight: 700; }\n .fw8-m { font-weight: 800; }\n .fw9-m { font-weight: 900; }\n .h1-m { height: 1rem; }\n .h2-m { height: 2rem; }\n .h3-m { height: 4rem; }\n .h4-m { height: 8rem; }\n .h5-m { height: 16rem; }\n .h-25-m { height: 25%; }\n .h-50-m { height: 50%; }\n .h-75-m { height: 75%; }\n .h-100-m { height: 100%; }\n .min-h-100-m { min-height: 100%; }\n .vh-25-m { height: 25vh; }\n .vh-50-m { height: 50vh; }\n .vh-75-m { height: 75vh; }\n .vh-100-m { height: 100vh; }\n .min-vh-100-m { min-height: 100vh; }\n .h-auto-m { height: auto; }\n .h-inherit-m { height: inherit; }\n .tracked-m { letter-spacing: .1em; }\n .tracked-tight-m { letter-spacing: -.05em; }\n .tracked-mega-m { letter-spacing: .25em; }\n .lh-solid-m { line-height: 1; }\n .lh-title-m { line-height: 1.25; }\n .lh-copy-m { line-height: 1.5; }\n .mw-100-m { max-width: 100%; }\n .mw1-m { max-width: 1rem; }\n .mw2-m { max-width: 2rem; }\n .mw3-m { max-width: 4rem; }\n .mw4-m { max-width: 8rem; }\n .mw5-m { max-width: 16rem; }\n .mw6-m { max-width: 32rem; }\n .mw7-m { max-width: 48rem; }\n .mw8-m { max-width: 64rem; }\n .mw9-m { max-width: 96rem; }\n .mw-none-m { max-width: none; }\n .w1-m { width: 1rem; }\n .w2-m { width: 2rem; }\n .w3-m { width: 4rem; }\n .w4-m { width: 8rem; }\n .w5-m { width: 16rem; }\n .w-10-m { width: 10%; }\n .w-20-m { width: 20%; }\n .w-25-m { width: 25%; }\n .w-30-m { width: 30%; }\n .w-33-m { width: 33%; }\n .w-34-m { width: 34%; }\n .w-40-m { width: 40%; }\n .w-50-m { width: 50%; }\n .w-60-m { width: 60%; }\n .w-70-m { width: 70%; }\n .w-75-m { width: 75%; }\n .w-80-m { width: 80%; }\n .w-90-m { width: 90%; }\n .w-100-m { width: 100%; }\n .w-third-m { width: calc( 100% / 3 ); }\n .w-two-thirds-m { width: calc( 100% / 1.5 ); }\n .w-auto-m { width: auto; }\n .overflow-visible-m { overflow: visible; }\n .overflow-hidden-m { overflow: hidden; }\n .overflow-scroll-m { overflow: scroll; }\n .overflow-auto-m { overflow: auto; }\n .overflow-x-visible-m { overflow-x: visible; }\n .overflow-x-hidden-m { overflow-x: hidden; }\n .overflow-x-scroll-m { overflow-x: scroll; }\n .overflow-x-auto-m { overflow-x: auto; }\n .overflow-y-visible-m { overflow-y: visible; }\n .overflow-y-hidden-m { overflow-y: hidden; }\n .overflow-y-scroll-m { overflow-y: scroll; }\n .overflow-y-auto-m { overflow-y: auto; }\n .static-m { position: static; }\n .relative-m { position: relative; }\n .absolute-m { position: absolute; }\n .fixed-m { position: fixed; }\n .rotate-45-m { -webkit-transform: rotate( 45deg ); transform: rotate( 45deg ); }\n .rotate-90-m { -webkit-transform: rotate( 90deg ); transform: rotate( 90deg ); }\n .rotate-135-m { -webkit-transform: rotate( 135deg ); transform: rotate( 135deg ); }\n .rotate-180-m { -webkit-transform: rotate( 180deg ); transform: rotate( 180deg ); }\n .rotate-225-m { -webkit-transform: rotate( 225deg ); transform: rotate( 225deg ); }\n .rotate-270-m { -webkit-transform: rotate( 270deg ); transform: rotate( 270deg ); }\n .rotate-315-m { -webkit-transform: rotate( 315deg ); transform: rotate( 315deg ); }\n .pa0-m { padding: 0; }\n .pa1-m { padding: .25rem; }\n .pa2-m { padding: .5rem; }\n .pa3-m { padding: 1rem; }\n .pa4-m { padding: 2rem; }\n .pa5-m { padding: 4rem; }\n .pa6-m { padding: 8rem; }\n .pa7-m { padding: 16rem; }\n .pl0-m { padding-left: 0; }\n .pl1-m { padding-left: .25rem; }\n .pl2-m { padding-left: .5rem; }\n .pl3-m { padding-left: 1rem; }\n .pl4-m { padding-left: 2rem; }\n .pl5-m { padding-left: 4rem; }\n .pl6-m { padding-left: 8rem; }\n .pl7-m { padding-left: 16rem; }\n .pr0-m { padding-right: 0; }\n .pr1-m { padding-right: .25rem; }\n .pr2-m { padding-right: .5rem; }\n .pr3-m { padding-right: 1rem; }\n .pr4-m { padding-right: 2rem; }\n .pr5-m { padding-right: 4rem; }\n .pr6-m { padding-right: 8rem; }\n .pr7-m { padding-right: 16rem; }\n .pb0-m { padding-bottom: 0; }\n .pb1-m { padding-bottom: .25rem; }\n .pb2-m { padding-bottom: .5rem; }\n .pb3-m { padding-bottom: 1rem; }\n .pb4-m { padding-bottom: 2rem; }\n .pb5-m { padding-bottom: 4rem; }\n .pb6-m { padding-bottom: 8rem; }\n .pb7-m { padding-bottom: 16rem; }\n .pt0-m { padding-top: 0; }\n .pt1-m { padding-top: .25rem; }\n .pt2-m { padding-top: .5rem; }\n .pt3-m { padding-top: 1rem; }\n .pt4-m { padding-top: 2rem; }\n .pt5-m { padding-top: 4rem; }\n .pt6-m { padding-top: 8rem; }\n .pt7-m { padding-top: 16rem; }\n .pv0-m { padding-top: 0; padding-bottom: 0; }\n .pv1-m { padding-top: .25rem; padding-bottom: .25rem; }\n .pv2-m { padding-top: .5rem; padding-bottom: .5rem; }\n .pv3-m { padding-top: 1rem; padding-bottom: 1rem; }\n .pv4-m { padding-top: 2rem; padding-bottom: 2rem; }\n .pv5-m { padding-top: 4rem; padding-bottom: 4rem; }\n .pv6-m { padding-top: 8rem; padding-bottom: 8rem; }\n .pv7-m { padding-top: 16rem; padding-bottom: 16rem; }\n .ph0-m { padding-left: 0; padding-right: 0; }\n .ph1-m { padding-left: .25rem; padding-right: .25rem; }\n .ph2-m { padding-left: .5rem; padding-right: .5rem; }\n .ph3-m { padding-left: 1rem; padding-right: 1rem; }\n .ph4-m { padding-left: 2rem; padding-right: 2rem; }\n .ph5-m { padding-left: 4rem; padding-right: 4rem; }\n .ph6-m { padding-left: 8rem; padding-right: 8rem; }\n .ph7-m { padding-left: 16rem; padding-right: 16rem; }\n .ma0-m { margin: 0; }\n .ma1-m { margin: .25rem; }\n .ma2-m { margin: .5rem; }\n .ma3-m { margin: 1rem; }\n .ma4-m { margin: 2rem; }\n .ma5-m { margin: 4rem; }\n .ma6-m { margin: 8rem; }\n .ma7-m { margin: 16rem; }\n .ml0-m { margin-left: 0; }\n .ml1-m { margin-left: .25rem; }\n .ml2-m { margin-left: .5rem; }\n .ml3-m { margin-left: 1rem; }\n .ml4-m { margin-left: 2rem; }\n .ml5-m { margin-left: 4rem; }\n .ml6-m { margin-left: 8rem; }\n .ml7-m { margin-left: 16rem; }\n .mr0-m { margin-right: 0; }\n .mr1-m { margin-right: .25rem; }\n .mr2-m { margin-right: .5rem; }\n .mr3-m { margin-right: 1rem; }\n .mr4-m { margin-right: 2rem; }\n .mr5-m { margin-right: 4rem; }\n .mr6-m { margin-right: 8rem; }\n .mr7-m { margin-right: 16rem; }\n .mb0-m { margin-bottom: 0; }\n .mb1-m { margin-bottom: .25rem; }\n .mb2-m { margin-bottom: .5rem; }\n .mb3-m { margin-bottom: 1rem; }\n .mb4-m { margin-bottom: 2rem; }\n .mb5-m { margin-bottom: 4rem; }\n .mb6-m { margin-bottom: 8rem; }\n .mb7-m { margin-bottom: 16rem; }\n .mt0-m { margin-top: 0; }\n .mt1-m { margin-top: .25rem; }\n .mt2-m { margin-top: .5rem; }\n .mt3-m { margin-top: 1rem; }\n .mt4-m { margin-top: 2rem; }\n .mt5-m { margin-top: 4rem; }\n .mt6-m { margin-top: 8rem; }\n .mt7-m { margin-top: 16rem; }\n .mv0-m { margin-top: 0; margin-bottom: 0; }\n .mv1-m { margin-top: .25rem; margin-bottom: .25rem; }\n .mv2-m { margin-top: .5rem; margin-bottom: .5rem; }\n .mv3-m { margin-top: 1rem; margin-bottom: 1rem; }\n .mv4-m { margin-top: 2rem; margin-bottom: 2rem; }\n .mv5-m { margin-top: 4rem; margin-bottom: 4rem; }\n .mv6-m { margin-top: 8rem; margin-bottom: 8rem; }\n .mv7-m { margin-top: 16rem; margin-bottom: 16rem; }\n .mh0-m { margin-left: 0; margin-right: 0; }\n .mh1-m { margin-left: .25rem; margin-right: .25rem; }\n .mh2-m { margin-left: .5rem; margin-right: .5rem; }\n .mh3-m { margin-left: 1rem; margin-right: 1rem; }\n .mh4-m { margin-left: 2rem; margin-right: 2rem; }\n .mh5-m { margin-left: 4rem; margin-right: 4rem; }\n .mh6-m { margin-left: 8rem; margin-right: 8rem; }\n .mh7-m { margin-left: 16rem; margin-right: 16rem; }\n .na1-m { margin: -.25rem; }\n .na2-m { margin: -.5rem; }\n .na3-m { margin: -1rem; }\n .na4-m { margin: -2rem; }\n .na5-m { margin: -4rem; }\n .na6-m { margin: -8rem; }\n .na7-m { margin: -16rem; }\n .nl1-m { margin-left: -.25rem; }\n .nl2-m { margin-left: -.5rem; }\n .nl3-m { margin-left: -1rem; }\n .nl4-m { margin-left: -2rem; }\n .nl5-m { margin-left: -4rem; }\n .nl6-m { margin-left: -8rem; }\n .nl7-m { margin-left: -16rem; }\n .nr1-m { margin-right: -.25rem; }\n .nr2-m { margin-right: -.5rem; }\n .nr3-m { margin-right: -1rem; }\n .nr4-m { margin-right: -2rem; }\n .nr5-m { margin-right: -4rem; }\n .nr6-m { margin-right: -8rem; }\n .nr7-m { margin-right: -16rem; }\n .nb1-m { margin-bottom: -.25rem; }\n .nb2-m { margin-bottom: -.5rem; }\n .nb3-m { margin-bottom: -1rem; }\n .nb4-m { margin-bottom: -2rem; }\n .nb5-m { margin-bottom: -4rem; }\n .nb6-m { margin-bottom: -8rem; }\n .nb7-m { margin-bottom: -16rem; }\n .nt1-m { margin-top: -.25rem; }\n .nt2-m { margin-top: -.5rem; }\n .nt3-m { margin-top: -1rem; }\n .nt4-m { margin-top: -2rem; }\n .nt5-m { margin-top: -4rem; }\n .nt6-m { margin-top: -8rem; }\n .nt7-m { margin-top: -16rem; }\n .strike-m { text-decoration: line-through; }\n .underline-m { text-decoration: underline; }\n .no-underline-m { text-decoration: none; }\n .tl-m { text-align: left; }\n .tr-m { text-align: right; }\n .tc-m { text-align: center; }\n .tj-m { text-align: justify; }\n .ttc-m { text-transform: capitalize; }\n .ttl-m { text-transform: lowercase; }\n .ttu-m { text-transform: uppercase; }\n .ttn-m { text-transform: none; }\n .f-6-m, .f-headline-m { font-size: 6rem; }\n .f-5-m, .f-subheadline-m { font-size: 5rem; }\n .f1-m { font-size: 3rem; }\n .f2-m { font-size: 2.25rem; }\n .f3-m { font-size: 1.5rem; }\n .f4-m { font-size: 1.25rem; }\n .f5-m { font-size: 1rem; }\n .f6-m { font-size: .875rem; }\n .f7-m { font-size: .75rem; }\n .measure-m { max-width: 30em; }\n .measure-wide-m { max-width: 34em; }\n .measure-narrow-m { max-width: 20em; }\n .indent-m { text-indent: 1em; margin-top: 0; margin-bottom: 0; }\n .small-caps-m { font-variant: small-caps; }\n .truncate-m { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n .center-m { margin-right: auto; margin-left: auto; }\n .mr-auto-m { margin-right: auto; }\n .ml-auto-m { margin-left: auto; }\n .clip-m { position: fixed !important; _position: absolute !important; clip: rect( 1px 1px 1px 1px ); /* IE6, IE7 */ clip: rect( 1px, 1px, 1px, 1px ); }\n .ws-normal-m { white-space: normal; }\n .nowrap-m { white-space: nowrap; }\n .pre-m { white-space: pre; }\n .v-base-m { vertical-align: baseline; }\n .v-mid-m { vertical-align: middle; }\n .v-top-m { vertical-align: top; }\n .v-btm-m { vertical-align: bottom; }\n}\n@media screen and (min-width: 60em) {\n .aspect-ratio-l { height: 0; position: relative; }\n .aspect-ratio--16x9-l { padding-bottom: 56.25%; }\n .aspect-ratio--9x16-l { padding-bottom: 177.77%; }\n .aspect-ratio--4x3-l { padding-bottom: 75%; }\n .aspect-ratio--3x4-l { padding-bottom: 133.33%; }\n .aspect-ratio--6x4-l { padding-bottom: 66.6%; }\n .aspect-ratio--4x6-l { padding-bottom: 150%; }\n .aspect-ratio--8x5-l { padding-bottom: 62.5%; }\n .aspect-ratio--5x8-l { padding-bottom: 160%; }\n .aspect-ratio--7x5-l { padding-bottom: 71.42%; }\n .aspect-ratio--5x7-l { padding-bottom: 140%; }\n .aspect-ratio--1x1-l { padding-bottom: 100%; }\n .aspect-ratio--object-l { position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; z-index: 100; }\n .cover-l { background-size: cover !important; }\n .contain-l { background-size: contain !important; }\n .bg-center-l { background-repeat: no-repeat; background-position: center center; }\n .bg-top-l { background-repeat: no-repeat; background-position: top center; }\n .bg-right-l { background-repeat: no-repeat; background-position: center right; }\n .bg-bottom-l { background-repeat: no-repeat; background-position: bottom center; }\n .bg-left-l { background-repeat: no-repeat; background-position: center left; }\n .outline-l { outline: 1px solid; }\n .outline-transparent-l { outline: 1px solid transparent; }\n .outline-0-l { outline: 0; }\n .ba-l { border-style: solid; border-width: 1px; }\n .bt-l { border-top-style: solid; border-top-width: 1px; }\n .br-l { border-right-style: solid; border-right-width: 1px; }\n .bb-l { border-bottom-style: solid; border-bottom-width: 1px; }\n .bl-l { border-left-style: solid; border-left-width: 1px; }\n .bn-l { border-style: none; border-width: 0; }\n .br0-l { border-radius: 0; }\n .br1-l { border-radius: .125rem; }\n .br2-l { border-radius: .25rem; }\n .br3-l { border-radius: .5rem; }\n .br4-l { border-radius: 1rem; }\n .br-100-l { border-radius: 100%; }\n .br-pill-l { border-radius: 9999px; }\n .br--bottom-l { border-top-left-radius: 0; border-top-right-radius: 0; }\n .br--top-l { border-bottom-left-radius: 0; border-bottom-right-radius: 0; }\n .br--right-l { border-top-left-radius: 0; border-bottom-left-radius: 0; }\n .br--left-l { border-top-right-radius: 0; border-bottom-right-radius: 0; }\n .b--dotted-l { border-style: dotted; }\n .b--dashed-l { border-style: dashed; }\n .b--solid-l { border-style: solid; }\n .b--none-l { border-style: none; }\n .bw0-l { border-width: 0; }\n .bw1-l { border-width: .125rem; }\n .bw2-l { border-width: .25rem; }\n .bw3-l { border-width: .5rem; }\n .bw4-l { border-width: 1rem; }\n .bw5-l { border-width: 2rem; }\n .bt-0-l { border-top-width: 0; }\n .br-0-l { border-right-width: 0; }\n .bb-0-l { border-bottom-width: 0; }\n .bl-0-l { border-left-width: 0; }\n .shadow-1-l { box-shadow: 0 0 4px 2px rgba( 0, 0, 0, .2 ); }\n .shadow-2-l { box-shadow: 0 0 8px 2px rgba( 0, 0, 0, .2 ); }\n .shadow-3-l { box-shadow: 2px 2px 4px 2px rgba( 0, 0, 0, .2 ); }\n .shadow-4-l { box-shadow: 2px 2px 8px 0 rgba( 0, 0, 0, .2 ); }\n .shadow-5-l { box-shadow: 4px 4px 8px 0 rgba( 0, 0, 0, .2 ); }\n .top-0-l { top: 0; }\n .left-0-l { left: 0; }\n .right-0-l { right: 0; }\n .bottom-0-l { bottom: 0; }\n .top-1-l { top: 1rem; }\n .left-1-l { left: 1rem; }\n .right-1-l { right: 1rem; }\n .bottom-1-l { bottom: 1rem; }\n .top-2-l { top: 2rem; }\n .left-2-l { left: 2rem; }\n .right-2-l { right: 2rem; }\n .bottom-2-l { bottom: 2rem; }\n .top--1-l { top: -1rem; }\n .right--1-l { right: -1rem; }\n .bottom--1-l { bottom: -1rem; }\n .left--1-l { left: -1rem; }\n .top--2-l { top: -2rem; }\n .right--2-l { right: -2rem; }\n .bottom--2-l { bottom: -2rem; }\n .left--2-l { left: -2rem; }\n .absolute--fill-l { top: 0; right: 0; bottom: 0; left: 0; }\n .cl-l { clear: left; }\n .cr-l { clear: right; }\n .cb-l { clear: both; }\n .cn-l { clear: none; }\n .dn-l { display: none; }\n .di-l { display: inline; }\n .db-l { display: block; }\n .dib-l { display: inline-block; }\n .dit-l { display: inline-table; }\n .dt-l { display: table; }\n .dtc-l { display: table-cell; }\n .dt-row-l { display: table-row; }\n .dt-row-group-l { display: table-row-group; }\n .dt-column-l { display: table-column; }\n .dt-column-group-l { display: table-column-group; }\n .dt--fixed-l { table-layout: fixed; width: 100%; }\n .flex-l { display: flex; }\n .inline-flex-l { display: inline-flex; }\n .flex-auto-l { flex: 1 1 auto; min-width: 0; /* 1 */ min-height: 0; /* 1 */ }\n .flex-none-l { flex: none; }\n .flex-column-l { flex-direction: column; }\n .flex-row-l { flex-direction: row; }\n .flex-wrap-l { flex-wrap: wrap; }\n .flex-nowrap-l { flex-wrap: nowrap; }\n .flex-wrap-reverse-l { flex-wrap: wrap-reverse; }\n .flex-column-reverse-l { flex-direction: column-reverse; }\n .flex-row-reverse-l { flex-direction: row-reverse; }\n .items-start-l { align-items: flex-start; }\n .items-end-l { align-items: flex-end; }\n .items-center-l { align-items: center; }\n .items-baseline-l { align-items: baseline; }\n .items-stretch-l { align-items: stretch; }\n .self-start-l { align-self: flex-start; }\n .self-end-l { align-self: flex-end; }\n .self-center-l { align-self: center; }\n .self-baseline-l { align-self: baseline; }\n .self-stretch-l { align-self: stretch; }\n .justify-start-l { justify-content: flex-start; }\n .justify-end-l { justify-content: flex-end; }\n .justify-center-l { justify-content: center; }\n .justify-between-l { justify-content: space-between; }\n .justify-around-l { justify-content: space-around; }\n .content-start-l { align-content: flex-start; }\n .content-end-l { align-content: flex-end; }\n .content-center-l { align-content: center; }\n .content-between-l { align-content: space-between; }\n .content-around-l { align-content: space-around; }\n .content-stretch-l { align-content: stretch; }\n .order-0-l { order: 0; }\n .order-1-l { order: 1; }\n .order-2-l { order: 2; }\n .order-3-l { order: 3; }\n .order-4-l { order: 4; }\n .order-5-l { order: 5; }\n .order-6-l { order: 6; }\n .order-7-l { order: 7; }\n .order-8-l { order: 8; }\n .order-last-l { order: 99999; }\n .flex-grow-0-l { flex-grow: 0; }\n .flex-grow-1-l { flex-grow: 1; }\n .flex-shrink-0-l { flex-shrink: 0; }\n .flex-shrink-1-l { flex-shrink: 1; }\n .fl-l { float: left; _display: inline; }\n .fr-l { float: right; _display: inline; }\n .fn-l { float: none; }\n .i-l { font-style: italic; }\n .fs-normal-l { font-style: normal; }\n .normal-l { font-weight: normal; }\n .b-l { font-weight: bold; }\n .fw1-l { font-weight: 100; }\n .fw2-l { font-weight: 200; }\n .fw3-l { font-weight: 300; }\n .fw4-l { font-weight: 400; }\n .fw5-l { font-weight: 500; }\n .fw6-l { font-weight: 600; }\n .fw7-l { font-weight: 700; }\n .fw8-l { font-weight: 800; }\n .fw9-l { font-weight: 900; }\n .h1-l { height: 1rem; }\n .h2-l { height: 2rem; }\n .h3-l { height: 4rem; }\n .h4-l { height: 8rem; }\n .h5-l { height: 16rem; }\n .h-25-l { height: 25%; }\n .h-50-l { height: 50%; }\n .h-75-l { height: 75%; }\n .h-100-l { height: 100%; }\n .min-h-100-l { min-height: 100%; }\n .vh-25-l { height: 25vh; }\n .vh-50-l { height: 50vh; }\n .vh-75-l { height: 75vh; }\n .vh-100-l { height: 100vh; }\n .min-vh-100-l { min-height: 100vh; }\n .h-auto-l { height: auto; }\n .h-inherit-l { height: inherit; }\n .tracked-l { letter-spacing: .1em; }\n .tracked-tight-l { letter-spacing: -.05em; }\n .tracked-mega-l { letter-spacing: .25em; }\n .lh-solid-l { line-height: 1; }\n .lh-title-l { line-height: 1.25; }\n .lh-copy-l { line-height: 1.5; }\n .mw-100-l { max-width: 100%; }\n .mw1-l { max-width: 1rem; }\n .mw2-l { max-width: 2rem; }\n .mw3-l { max-width: 4rem; }\n .mw4-l { max-width: 8rem; }\n .mw5-l { max-width: 16rem; }\n .mw6-l { max-width: 32rem; }\n .mw7-l { max-width: 48rem; }\n .mw8-l { max-width: 64rem; }\n .mw9-l { max-width: 96rem; }\n .mw-none-l { max-width: none; }\n .w1-l { width: 1rem; }\n .w2-l { width: 2rem; }\n .w3-l { width: 4rem; }\n .w4-l { width: 8rem; }\n .w5-l { width: 16rem; }\n .w-10-l { width: 10%; }\n .w-20-l { width: 20%; }\n .w-25-l { width: 25%; }\n .w-30-l { width: 30%; }\n .w-33-l { width: 33%; }\n .w-34-l { width: 34%; }\n .w-40-l { width: 40%; }\n .w-50-l { width: 50%; }\n .w-60-l { width: 60%; }\n .w-70-l { width: 70%; }\n .w-75-l { width: 75%; }\n .w-80-l { width: 80%; }\n .w-90-l { width: 90%; }\n .w-100-l { width: 100%; }\n .w-third-l { width: calc( 100% / 3 ); }\n .w-two-thirds-l { width: calc( 100% / 1.5 ); }\n .w-auto-l { width: auto; }\n .overflow-visible-l { overflow: visible; }\n .overflow-hidden-l { overflow: hidden; }\n .overflow-scroll-l { overflow: scroll; }\n .overflow-auto-l { overflow: auto; }\n .overflow-x-visible-l { overflow-x: visible; }\n .overflow-x-hidden-l { overflow-x: hidden; }\n .overflow-x-scroll-l { overflow-x: scroll; }\n .overflow-x-auto-l { overflow-x: auto; }\n .overflow-y-visible-l { overflow-y: visible; }\n .overflow-y-hidden-l { overflow-y: hidden; }\n .overflow-y-scroll-l { overflow-y: scroll; }\n .overflow-y-auto-l { overflow-y: auto; }\n .static-l { position: static; }\n .relative-l { position: relative; }\n .absolute-l { position: absolute; }\n .fixed-l { position: fixed; }\n .rotate-45-l { -webkit-transform: rotate( 45deg ); transform: rotate( 45deg ); }\n .rotate-90-l { -webkit-transform: rotate( 90deg ); transform: rotate( 90deg ); }\n .rotate-135-l { -webkit-transform: rotate( 135deg ); transform: rotate( 135deg ); }\n .rotate-180-l { -webkit-transform: rotate( 180deg ); transform: rotate( 180deg ); }\n .rotate-225-l { -webkit-transform: rotate( 225deg ); transform: rotate( 225deg ); }\n .rotate-270-l { -webkit-transform: rotate( 270deg ); transform: rotate( 270deg ); }\n .rotate-315-l { -webkit-transform: rotate( 315deg ); transform: rotate( 315deg ); }\n .pa0-l { padding: 0; }\n .pa1-l { padding: .25rem; }\n .pa2-l { padding: .5rem; }\n .pa3-l { padding: 1rem; }\n .pa4-l { padding: 2rem; }\n .pa5-l { padding: 4rem; }\n .pa6-l { padding: 8rem; }\n .pa7-l { padding: 16rem; }\n .pl0-l { padding-left: 0; }\n .pl1-l { padding-left: .25rem; }\n .pl2-l { padding-left: .5rem; }\n .pl3-l { padding-left: 1rem; }\n .pl4-l { padding-left: 2rem; }\n .pl5-l { padding-left: 4rem; }\n .pl6-l { padding-left: 8rem; }\n .pl7-l { padding-left: 16rem; }\n .pr0-l { padding-right: 0; }\n .pr1-l { padding-right: .25rem; }\n .pr2-l { padding-right: .5rem; }\n .pr3-l { padding-right: 1rem; }\n .pr4-l { padding-right: 2rem; }\n .pr5-l { padding-right: 4rem; }\n .pr6-l { padding-right: 8rem; }\n .pr7-l { padding-right: 16rem; }\n .pb0-l { padding-bottom: 0; }\n .pb1-l { padding-bottom: .25rem; }\n .pb2-l { padding-bottom: .5rem; }\n .pb3-l { padding-bottom: 1rem; }\n .pb4-l { padding-bottom: 2rem; }\n .pb5-l { padding-bottom: 4rem; }\n .pb6-l { padding-bottom: 8rem; }\n .pb7-l { padding-bottom: 16rem; }\n .pt0-l { padding-top: 0; }\n .pt1-l { padding-top: .25rem; }\n .pt2-l { padding-top: .5rem; }\n .pt3-l { padding-top: 1rem; }\n .pt4-l { padding-top: 2rem; }\n .pt5-l { padding-top: 4rem; }\n .pt6-l { padding-top: 8rem; }\n .pt7-l { padding-top: 16rem; }\n .pv0-l { padding-top: 0; padding-bottom: 0; }\n .pv1-l { padding-top: .25rem; padding-bottom: .25rem; }\n .pv2-l { padding-top: .5rem; padding-bottom: .5rem; }\n .pv3-l { padding-top: 1rem; padding-bottom: 1rem; }\n .pv4-l { padding-top: 2rem; padding-bottom: 2rem; }\n .pv5-l { padding-top: 4rem; padding-bottom: 4rem; }\n .pv6-l { padding-top: 8rem; padding-bottom: 8rem; }\n .pv7-l { padding-top: 16rem; padding-bottom: 16rem; }\n .ph0-l { padding-left: 0; padding-right: 0; }\n .ph1-l { padding-left: .25rem; padding-right: .25rem; }\n .ph2-l { padding-left: .5rem; padding-right: .5rem; }\n .ph3-l { padding-left: 1rem; padding-right: 1rem; }\n .ph4-l { padding-left: 2rem; padding-right: 2rem; }\n .ph5-l { padding-left: 4rem; padding-right: 4rem; }\n .ph6-l { padding-left: 8rem; padding-right: 8rem; }\n .ph7-l { padding-left: 16rem; padding-right: 16rem; }\n .ma0-l { margin: 0; }\n .ma1-l { margin: .25rem; }\n .ma2-l { margin: .5rem; }\n .ma3-l { margin: 1rem; }\n .ma4-l { margin: 2rem; }\n .ma5-l { margin: 4rem; }\n .ma6-l { margin: 8rem; }\n .ma7-l { margin: 16rem; }\n .ml0-l { margin-left: 0; }\n .ml1-l { margin-left: .25rem; }\n .ml2-l { margin-left: .5rem; }\n .ml3-l { margin-left: 1rem; }\n .ml4-l { margin-left: 2rem; }\n .ml5-l { margin-left: 4rem; }\n .ml6-l { margin-left: 8rem; }\n .ml7-l { margin-left: 16rem; }\n .mr0-l { margin-right: 0; }\n .mr1-l { margin-right: .25rem; }\n .mr2-l { margin-right: .5rem; }\n .mr3-l { margin-right: 1rem; }\n .mr4-l { margin-right: 2rem; }\n .mr5-l { margin-right: 4rem; }\n .mr6-l { margin-right: 8rem; }\n .mr7-l { margin-right: 16rem; }\n .mb0-l { margin-bottom: 0; }\n .mb1-l { margin-bottom: .25rem; }\n .mb2-l { margin-bottom: .5rem; }\n .mb3-l { margin-bottom: 1rem; }\n .mb4-l { margin-bottom: 2rem; }\n .mb5-l { margin-bottom: 4rem; }\n .mb6-l { margin-bottom: 8rem; }\n .mb7-l { margin-bottom: 16rem; }\n .mt0-l { margin-top: 0; }\n .mt1-l { margin-top: .25rem; }\n .mt2-l { margin-top: .5rem; }\n .mt3-l { margin-top: 1rem; }\n .mt4-l { margin-top: 2rem; }\n .mt5-l { margin-top: 4rem; }\n .mt6-l { margin-top: 8rem; }\n .mt7-l { margin-top: 16rem; }\n .mv0-l { margin-top: 0; margin-bottom: 0; }\n .mv1-l { margin-top: .25rem; margin-bottom: .25rem; }\n .mv2-l { margin-top: .5rem; margin-bottom: .5rem; }\n .mv3-l { margin-top: 1rem; margin-bottom: 1rem; }\n .mv4-l { margin-top: 2rem; margin-bottom: 2rem; }\n .mv5-l { margin-top: 4rem; margin-bottom: 4rem; }\n .mv6-l { margin-top: 8rem; margin-bottom: 8rem; }\n .mv7-l { margin-top: 16rem; margin-bottom: 16rem; }\n .mh0-l { margin-left: 0; margin-right: 0; }\n .mh1-l { margin-left: .25rem; margin-right: .25rem; }\n .mh2-l { margin-left: .5rem; margin-right: .5rem; }\n .mh3-l { margin-left: 1rem; margin-right: 1rem; }\n .mh4-l { margin-left: 2rem; margin-right: 2rem; }\n .mh5-l { margin-left: 4rem; margin-right: 4rem; }\n .mh6-l { margin-left: 8rem; margin-right: 8rem; }\n .mh7-l { margin-left: 16rem; margin-right: 16rem; }\n .na1-l { margin: -.25rem; }\n .na2-l { margin: -.5rem; }\n .na3-l { margin: -1rem; }\n .na4-l { margin: -2rem; }\n .na5-l { margin: -4rem; }\n .na6-l { margin: -8rem; }\n .na7-l { margin: -16rem; }\n .nl1-l { margin-left: -.25rem; }\n .nl2-l { margin-left: -.5rem; }\n .nl3-l { margin-left: -1rem; }\n .nl4-l { margin-left: -2rem; }\n .nl5-l { margin-left: -4rem; }\n .nl6-l { margin-left: -8rem; }\n .nl7-l { margin-left: -16rem; }\n .nr1-l { margin-right: -.25rem; }\n .nr2-l { margin-right: -.5rem; }\n .nr3-l { margin-right: -1rem; }\n .nr4-l { margin-right: -2rem; }\n .nr5-l { margin-right: -4rem; }\n .nr6-l { margin-right: -8rem; }\n .nr7-l { margin-right: -16rem; }\n .nb1-l { margin-bottom: -.25rem; }\n .nb2-l { margin-bottom: -.5rem; }\n .nb3-l { margin-bottom: -1rem; }\n .nb4-l { margin-bottom: -2rem; }\n .nb5-l { margin-bottom: -4rem; }\n .nb6-l { margin-bottom: -8rem; }\n .nb7-l { margin-bottom: -16rem; }\n .nt1-l { margin-top: -.25rem; }\n .nt2-l { margin-top: -.5rem; }\n .nt3-l { margin-top: -1rem; }\n .nt4-l { margin-top: -2rem; }\n .nt5-l { margin-top: -4rem; }\n .nt6-l { margin-top: -8rem; }\n .nt7-l { margin-top: -16rem; }\n .strike-l { text-decoration: line-through; }\n .underline-l { text-decoration: underline; }\n .no-underline-l { text-decoration: none; }\n .tl-l { text-align: left; }\n .tr-l { text-align: right; }\n .tc-l { text-align: center; }\n .tj-l { text-align: justify; }\n .ttc-l { text-transform: capitalize; }\n .ttl-l { text-transform: lowercase; }\n .ttu-l { text-transform: uppercase; }\n .ttn-l { text-transform: none; }\n .f-6-l, .f-headline-l { font-size: 6rem; }\n .f-5-l, .f-subheadline-l { font-size: 5rem; }\n .f1-l { font-size: 3rem; }\n .f2-l { font-size: 2.25rem; }\n .f3-l { font-size: 1.5rem; }\n .f4-l { font-size: 1.25rem; }\n .f5-l { font-size: 1rem; }\n .f6-l { font-size: .875rem; }\n .f7-l { font-size: .75rem; }\n .measure-l { max-width: 30em; }\n .measure-wide-l { max-width: 34em; }\n .measure-narrow-l { max-width: 20em; }\n .indent-l { text-indent: 1em; margin-top: 0; margin-bottom: 0; }\n .small-caps-l { font-variant: small-caps; }\n .truncate-l { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n .center-l { margin-right: auto; margin-left: auto; }\n .mr-auto-l { margin-right: auto; }\n .ml-auto-l { margin-left: auto; }\n .clip-l { position: fixed !important; _position: absolute !important; clip: rect( 1px 1px 1px 1px ); /* IE6, IE7 */ clip: rect( 1px, 1px, 1px, 1px ); }\n .ws-normal-l { white-space: normal; }\n .nowrap-l { white-space: nowrap; }\n .pre-l { white-space: pre; }\n .v-base-l { vertical-align: baseline; }\n .v-mid-l { vertical-align: middle; }\n .v-top-l { vertical-align: top; }\n .v-btm-l { vertical-align: bottom; }\n}\n\n", ""]);


/***/ })
/******/ ]);