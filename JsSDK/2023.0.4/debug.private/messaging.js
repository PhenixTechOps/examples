(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["phenix"] = factory();
	else
		root["phenix"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var Promise = __webpack_require__(/*! ./src/promise/Promise */ "./src/promise/Promise.ts")["default"];
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports.default = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js").default;
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var Promise = __webpack_require__(/*! ./src/promise/Promise */ "./src/promise/Promise.ts")["default"];
var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js").default;
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports.default = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports.default = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js").default;
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!**************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js").default;
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/toPrimitive.js");
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports.default = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/dom/ApplicationActivityMonitor.ts":
/*!***********************************************!*
  !*** ./src/dom/ApplicationActivityMonitor.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ ApplicationActivityMonitor
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lang_Disposable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lang/Disposable */ "./src/lang/Disposable.ts");
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rx/Subject */ "./src/rx/Subject.ts");
/* harmony import */ var _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rx/ReadOnlySubject */ "./src/rx/ReadOnlySubject.ts");
/* harmony import */ var _lang_DisposableList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lang/DisposableList */ "./src/lang/DisposableList.ts");




/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */




var defaultDocumentFocusIntervalTimeout = 3000;
var ApplicationActivityMonitor = /*#__PURE__*/function () {
  function ApplicationActivityMonitor() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, ApplicationActivityMonitor);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_disposables", new _lang_DisposableList__WEBPACK_IMPORTED_MODULE_7__.default());
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyIsForeground", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_isForeground", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_timeOfLastTabFocusChange", Date.now());
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_documentFocusInterval", void 0);
    this._isForeground = new _rx_Subject__WEBPACK_IMPORTED_MODULE_5__.default(true);
    this._readOnlyIsForeground = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__.default(this._isForeground);
    this.detectTabFocusChange();
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(ApplicationActivityMonitor, [{
    key: "isForeground",
    get: function get() {
      return this._readOnlyIsForeground;
    }
  }, {
    key: "getTimeSinceLastChange",
    value: function getTimeSinceLastChange() {
      return Date.now() - this._timeOfLastTabFocusChange;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._disposables.dispose();
    }
  }, {
    key: "detectTabFocusChange",
    value: function detectTabFocusChange() {
      var _this = this;
      var hidden;
      var visibilityChange;
      if ((typeof document === "undefined" ? "undefined" : _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0___default()(document)) !== 'object') {
        return;
      }

      // Due to typescript not having a definition for 'msHidden' or 'webkitHidden' types
      // Required to @ts-ignore to prevent typescript errors
      /* eslint-disable @typescript-eslint/ban-ts-comment */
      // @ts-ignore
      if (typeof document.msHidden !== 'undefined') {
        hidden = 'msHidden';
        visibilityChange = 'msvisibilitychange';
        // @ts-ignore
      } else if (typeof document.webkitHidden !== 'undefined') {
        hidden = 'webkitHidden';
        visibilityChange = 'webkitvisibilitychange';
      } else if (typeof document.hidden !== 'undefined') {
        // Opera 12.10 and Firefox 18 and later support
        hidden = 'hidden';
        visibilityChange = 'visibilitychange';
      }
      /* eslint-enable @typescript-eslint/ban-ts-comment */

      var handleVisibilityChange = function handleVisibilityChange() {
        var isForeground = !document[hidden];
        _this.setFocusState(isForeground);
      };
      if (typeof document.addEventListener !== 'undefined' && typeof document[hidden] !== 'undefined') {
        document.addEventListener(visibilityChange, handleVisibilityChange, false);
        this._disposables.add(new _lang_Disposable__WEBPACK_IMPORTED_MODULE_4__.default(function () {
          document.removeEventListener(visibilityChange, handleVisibilityChange, false);
        }));
      } else {
        this.listenForDocumentFocus.call(this);
      }
    }
  }, {
    key: "listenForDocumentFocus",
    value: function listenForDocumentFocus() {
      var _this2 = this;
      this._documentFocusInterval = window.setInterval(function () {
        var isForeground = document.hasFocus();
        _this2.setFocusState(isForeground);
      }, defaultDocumentFocusIntervalTimeout);
      this._disposables.add(new _lang_Disposable__WEBPACK_IMPORTED_MODULE_4__.default(function () {
        if (_this2._documentFocusInterval) {
          clearInterval(_this2._documentFocusInterval);
        }
        _this2._documentFocusInterval = null;
      }));
    }
  }, {
    key: "setFocusState",
    value: function setFocusState(isForeground) {
      if (this._isForeground === isForeground) {
        return;
      }
      this._isForeground.value = isForeground;
    }
  }]);
  return ApplicationActivityMonitor;
}();


/***/ }),

/***/ "./src/dom/BrowserDetector.ts":
/*!************************************!*
  !*** ./src/dom/BrowserDetector.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ BrowserDetector
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var BrowserDetector = /*#__PURE__*/function () {
  function BrowserDetector() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, BrowserDetector);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(BrowserDetector, null, [{
    key: "browserNameAndVersion",
    get: function get() {
      return BrowserDetector._browserNameAndVersion;
    }
  }, {
    key: "browserName",
    get: function get() {
      return this._browserName;
    }
  }, {
    key: "browserMajorVersion",
    get: function get() {
      return this._browserMajorVersion;
    }
  }, {
    key: "isChrome69",
    get: function get() {
      return BrowserDetector._isChrome69;
    }
  }, {
    key: "isChrome70",
    get: function get() {
      return BrowserDetector._isChrome70;
    }
  }, {
    key: "isChrome71",
    get: function get() {
      return BrowserDetector._isChrome71;
    }
  }, {
    key: "isChrome72",
    get: function get() {
      return BrowserDetector._isChrome72;
    }
  }, {
    key: "isChrome74",
    get: function get() {
      return BrowserDetector._isChrome74;
    }
  }, {
    key: "isChrome75",
    get: function get() {
      return BrowserDetector._isChrome75;
    }
  }, {
    key: "isChrome76",
    get: function get() {
      return BrowserDetector._isChrome76;
    }
  }, {
    key: "isChrome77",
    get: function get() {
      return BrowserDetector._isChrome77;
    }
  }, {
    key: "parseBrowserNameAndVersion",
    value: function parseBrowserNameAndVersion() {
      if (!navigator || !navigator.userAgent) {
        return '';
      }
      var browserNameAndVersion = navigator.userAgent.match(BrowserDetector._browserNameAndVersionRegex);
      if (browserNameAndVersion && browserNameAndVersion[0]) {
        return browserNameAndVersion[0];
      }
      return BrowserDetector.parseBrowserNameAndVersionForIE();
    }
  }, {
    key: "parseBrowserName",
    value: function parseBrowserName() {
      if (!BrowserDetector._browserNameAndVersion) {
        return '';
      }
      var browserNameList = BrowserDetector._browserNameAndVersion.split('/');
      if (!browserNameList || !browserNameList[0]) {
        return '';
      }
      return browserNameList[0];
    }
  }, {
    key: "parseBrowserMajorVersion",
    value: function parseBrowserMajorVersion() {
      if (!BrowserDetector._browserNameAndVersion) {
        return 0;
      }
      var browserVersionList = BrowserDetector._browserNameAndVersion.split('/');
      if (!browserVersionList || !browserVersionList[1]) {
        return 0;
      }
      var fullVersion = browserVersionList[1];
      if (!fullVersion) {
        return 0;
      }
      return Number(fullVersion.split('.')[0]) || 0;
    }
  }, {
    key: "parseBrowserNameAndVersionForIE",
    value: function parseBrowserNameAndVersionForIE() {
      if (!navigator || !navigator.userAgent) {
        return '';
      }
      var userAgent = navigator.userAgent;
      var msie = userAgent.indexOf('MSIE ');
      if (msie > 0) {
        // IE 10 or older => return version number
        return "IE/".concat(parseInt(userAgent.substring(msie + 5, userAgent.indexOf('.', msie)), 10));
      }
      var trident = userAgent.indexOf('Trident/');
      if (trident > 0) {
        // IE 11 => return version number
        var version = userAgent.indexOf('rv:');
        return "IE/".concat(parseInt(userAgent.substring(version + 3, userAgent.indexOf('.', version)), 10));
      }
      return '';
    }
  }]);
  return BrowserDetector;
}();
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_browserNameAndVersionRegex", /(MSIE|(?!Gecko.+)Firefox|(?!AppleWebKit.+Chrome.+)Safari|(?!AppleWebKit.+)Chrome|AppleWebKit(?!.+Chrome|.+Safari)|Gecko(?!.+Firefox))(?: |\/)([\d.apre]+)/g);
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_browserNameAndVersion", BrowserDetector.parseBrowserNameAndVersion());
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_browserName", BrowserDetector.parseBrowserName());
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_browserMajorVersion", BrowserDetector.parseBrowserMajorVersion());
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_isChrome69", BrowserDetector._browserNameAndVersion.includes('Chrome/69.'));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_isChrome70", BrowserDetector._browserNameAndVersion.includes('Chrome/70.'));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_isChrome71", BrowserDetector._browserNameAndVersion.includes('Chrome/71.'));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_isChrome72", BrowserDetector._browserNameAndVersion.includes('Chrome/72.'));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_isChrome74", BrowserDetector._browserNameAndVersion.includes('Chrome/74.'));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_isChrome75", BrowserDetector._browserNameAndVersion.includes('Chrome/75.'));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_isChrome76", BrowserDetector._browserNameAndVersion.includes('Chrome/76.'));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(BrowserDetector, "_isChrome77", BrowserDetector._browserNameAndVersion.includes('Chrome/77.'));


/***/ }),

/***/ "./src/dom/ConfigurationParameterReader.ts":
/*!*************************************************!*
  !*** ./src/dom/ConfigurationParameterReader.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ PlainConfigurationParameterReader
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _metrics_TelemetricLevelMapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../metrics/TelemetricLevelMapping */ "./src/metrics/TelemetricLevelMapping.ts");
/* harmony import */ var _metrics_TelemetryDefault__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../metrics/TelemetryDefault */ "./src/metrics/TelemetryDefault.ts");
/* harmony import */ var _logger_LoggingLevelMapping__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logger/LoggingLevelMapping */ "./src/logger/LoggingLevelMapping.ts");
/* harmony import */ var _logger_LoggerDefaults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logger/LoggerDefaults */ "./src/logger/LoggerDefaults.ts");


/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */





// This file is used only for the silent build to mock ConfigurationParameterReader class
var PlainConfigurationParameterReader = /*#__PURE__*/function () {
  function PlainConfigurationParameterReader() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, PlainConfigurationParameterReader);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(PlainConfigurationParameterReader, [{
    key: "getStringValue",
    value: function getStringValue(name) {
      return this.defaultStringValue[name];
    }
  }, {
    key: "getBooleanValue",
    value: function getBooleanValue(name) {
      return this.defaultBooleanValue[name];
    }
  }, {
    key: "defaultStringValue",
    get: function get() {
      return {
        'phenix-metrics-level': _metrics_TelemetricLevelMapping__WEBPACK_IMPORTED_MODULE_2__.default.convertTelemetryLevelToTelemetryLevelType(_metrics_TelemetryDefault__WEBPACK_IMPORTED_MODULE_3__.default.defaultTelemetryLevel),
        'phenix-logging-level': _logger_LoggingLevelMapping__WEBPACK_IMPORTED_MODULE_4__.default.convertLoggingLevelToLoggingLevelType(_logger_LoggerDefaults__WEBPACK_IMPORTED_MODULE_5__.default.defaultLoggingLevel),
        'phenix-console-logging-level': _logger_LoggingLevelMapping__WEBPACK_IMPORTED_MODULE_4__.default.convertLoggingLevelToLoggingLevelType(_logger_LoggerDefaults__WEBPACK_IMPORTED_MODULE_5__.default.defaultConsoleLoggingLevel),
        'phenix-telemetry-logging-level': _logger_LoggingLevelMapping__WEBPACK_IMPORTED_MODULE_4__.default.convertLoggingLevelToLoggingLevelType(_logger_LoggerDefaults__WEBPACK_IMPORTED_MODULE_5__.default.defaultTelemetryLoggingLevel),
        'phenix-channel-token': '',
        'phenix-uri': '',
        'phenix-base-uri': ''
      };
    }
  }, {
    key: "defaultBooleanValue",
    get: function get() {
      return {
        'phenix-automatically-retry-on-failure': true,
        'phenix-automatically-reconnect-peer-connection': true
      };
    }
  }]);
  return PlainConfigurationParameterReader;
}();


/***/ }),

/***/ "./src/dom/PrivacyMode.ts":
/*!********************************!*
  !*** ./src/dom/PrivacyMode.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ PrivacyMode
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var PrivacyMode = /*#__PURE__*/function () {
  function PrivacyMode() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, PrivacyMode);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(PrivacyMode, null, [{
    key: "isPrivate",
    get: function get() {
      return this._isPrivate;
    }
  }, {
    key: "applyIsPrivate",
    value: function applyIsPrivate() {
      try {
        this._isPrivate = true;
      } catch (e) {
        this._isPrivate = false;
      }
    }
  }]);
  return PrivacyMode;
}();
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(PrivacyMode, "_isPrivate", void 0);

PrivacyMode.applyIsPrivate();

/***/ }),

/***/ "./src/lang/Disposable.ts":
/*!********************************!*
  !*** ./src/lang/Disposable.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Disposable
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var Disposable = /*#__PURE__*/function () {
  function Disposable(disposable) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, Disposable);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_disposed", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_disposable", void 0);
    this._disposed = false;
    this._disposable = disposable;
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(Disposable, [{
    key: "dispose",
    value: function dispose() {
      if (this._disposed) {
        return;
      }
      this._disposed = true;
      return this._disposable.call(this);
    }
  }]);
  return Disposable;
}();


/***/ }),

/***/ "./src/lang/DisposableList.ts":
/*!************************************!*
  !*** ./src/lang/DisposableList.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ DisposableList
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var DisposableList = /*#__PURE__*/function () {
  function DisposableList() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, DisposableList);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_list", []);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(DisposableList, [{
    key: "add",
    value: function add(disposable) {
      this._list.push(disposable);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._list.forEach(function (disposable) {
        return disposable.dispose();
      });
      this._list.length = 0;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "DisposableList[disposables=".concat(this._list.length, "]");
    }
  }]);
  return DisposableList;
}();


/***/ }),

/***/ "./src/lang/Strings.ts":
/*!*****************************!*
  !*** ./src/lang/Strings.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Strings
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var Strings = /*#__PURE__*/function () {
  function Strings() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, Strings);
    throw new Error('Strings is a static class that may not be instantiated');
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(Strings, null, [{
    key: "random",
    value: function random(length) {
      var random13Characters = function random13Characters() {
        return Math.random().toString(16).substring(2, 15);
      };
      var loops = Math.ceil(length / 13);
      return new Array(loops).fill(random13Characters).reduce(function (string, func) {
        return string + func();
      }, '').substring(0, length);
    }
  }]);
  return Strings;
}();


/***/ }),

/***/ "./src/lang/assertUnreachable.ts":
/*!***************************************!*
  !*** ./src/lang/assertUnreachable.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export assertUnreachable */
/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
function assertUnreachable(x) {
  throw new Error("Unexpected value [".concat(x, "]. This should never be reached"));
}
/* harmony default export */ __webpack_exports__["default"] = (assertUnreachable);

/***/ }),

/***/ "./src/logger/Appenders.ts":
/*!*********************************!*
  !*** ./src/logger/Appenders.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Appenders
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var Appenders = /*#__PURE__*/function () {
  function Appenders() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, Appenders);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_appenders", []);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(Appenders, [{
    key: "value",
    get: function get() {
      return this._appenders;
    }
  }, {
    key: "add",
    value: function add(appender) {
      this._appenders.push(appender);
    }
  }, {
    key: "remove",
    value: function remove(appender) {
      this._appenders = this._appenders.reduce(function (items, item) {
        if (!(item === appender)) {
          items.push(item);
        }
        return items;
      }, []);
    }
  }]);
  return Appenders;
}();


/***/ }),

/***/ "./src/logger/ConsoleAppender.ts":
/*!***************************************!*
  !*** ./src/logger/ConsoleAppender.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ ConsoleAppender
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logger */ "./src/logger/Logger.ts");



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var ConsoleAppender = /*#__PURE__*/function () {
  function ConsoleAppender(threshold) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, ConsoleAppender);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_threshold", void 0);
    this._threshold = threshold;
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(ConsoleAppender, [{
    key: "log",
    value: function log(logLevel, message, category, date) {
      if (logLevel < this._threshold) {
        return;
      }
      var fullMessage = "".concat(date.toISOString(), " [").concat(category, "] [").concat(_Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel[logLevel], "] ").concat(message);
      if (logLevel < _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Warn) {
        console.log(fullMessage);
        return;
      }
      console.error(fullMessage);
    }
  }]);
  return ConsoleAppender;
}();


/***/ }),

/***/ "./src/logger/Logger.ts":
/*!******************************!*
  !*** ./src/logger/Logger.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggingLevel": () => /* binding */ LoggingLevel,
/* harmony export */   "default": () => /* binding */ Logger
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */

var LoggingLevel;
(function (LoggingLevel) {
  LoggingLevel[LoggingLevel["All"] = -1] = "All";
  LoggingLevel[LoggingLevel["Trace"] = 10] = "Trace";
  LoggingLevel[LoggingLevel["Debug"] = 20] = "Debug";
  LoggingLevel[LoggingLevel["Info"] = 30] = "Info";
  LoggingLevel[LoggingLevel["Warn"] = 40] = "Warn";
  LoggingLevel[LoggingLevel["Error"] = 50] = "Error";
  LoggingLevel[LoggingLevel["Fatal"] = 60] = "Fatal";
  LoggingLevel[LoggingLevel["Off"] = 100] = "Off";
})(LoggingLevel || (LoggingLevel = {}));
var Logger = /*#__PURE__*/function () {
  function Logger(category, appenders, threshold) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, Logger);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_category", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_appenders", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_threshold", void 0);
    this._category = category;
    this._appenders = appenders;
    this._threshold = threshold;
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(Logger, [{
    key: "category",
    get: function get() {
      return this._category;
    }
  }, {
    key: "appenders",
    get: function get() {
      return this._appenders;
    }
  }, {
    key: "threshold",
    get: function get() {
      return this._threshold;
    }
  }, {
    key: "trace",
    value: function trace() {
      if (!this._threshold.value || this._threshold.value > LoggingLevel.Trace) {
        return;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      this.log(LoggingLevel.Trace, args);
    }
  }, {
    key: "debug",
    value: function debug() {
      if (!this._threshold.value || this._threshold.value > LoggingLevel.Debug) {
        return;
      }
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      this.log(LoggingLevel.Debug, args);
    }
  }, {
    key: "info",
    value: function info() {
      if (!this._threshold.value || this._threshold.value > LoggingLevel.Info) {
        return;
      }
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      this.log(LoggingLevel.Info, args);
    }
  }, {
    key: "warn",
    value: function warn() {
      if (!this._threshold.value || this._threshold.value > LoggingLevel.Warn) {
        return;
      }
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      this.log(LoggingLevel.Warn, args);
    }
  }, {
    key: "error",
    value: function error() {
      if (!this._threshold.value || this._threshold.value > LoggingLevel.Error) {
        return;
      }
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      this.log(LoggingLevel.Error, args);
    }
  }, {
    key: "fatal",
    value: function fatal() {
      if (!this._threshold.value || this._threshold.value > LoggingLevel.Fatal) {
        return;
      }
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      this.log(LoggingLevel.Fatal, args);
    }
  }, {
    key: "log",
    value: function log(level, args) {
      var _this = this;
      var date = new Date();
      var message = this.replacePlaceholders(args);
      this._appenders.value.forEach(function (appender) {
        appender.log(level, message, _this.category, date);
      });
    }
  }, {
    key: "replacePlaceholders",
    value: function replacePlaceholders(args) {
      var _this2 = this;
      var replacePlaceholdersString = args[0];
      var index = 0;
      while (replacePlaceholdersString.indexOf && args.length > 1 && index >= 0) {
        index = replacePlaceholdersString.indexOf('%', index);
        if (index > 0) {
          var type = replacePlaceholdersString.substring(index + 1, index + 2);
          switch (type) {
            case '%':
              // Escaped '%%' turns into '%'
              replacePlaceholdersString = replacePlaceholdersString.substring(0, index) + replacePlaceholdersString.substring(index + 1);
              index++;
              break;
            case 's':
            case 'd':
              // Replace '%d' or '%s' with the argument
              args[0] = replacePlaceholdersString = this.replaceArgument(this.toString(args[1]), replacePlaceholdersString, index);
              args.splice(1, 1);
              break;
            case 'j':
              // Replace %j' with the argument
              args[0] = replacePlaceholdersString = this.replaceArgument(this.stringify(args[1]), replacePlaceholdersString, index);
              args.splice(1, 1);
              break;
            default:
              return args.toString();
          }
        }
      }
      if (args.length > 1) {
        args = args.reduce(function (accumulator, currentValue, index, array) {
          if (index + 1 === array.length && currentValue instanceof Error) {
            return accumulator + '\n' + _this2.toString(currentValue.stack);
          }
          return accumulator + "[".concat(_this2.toString(currentValue), "]");
        });
      }
      return args.toString();
    }
  }, {
    key: "stringify",
    value: function stringify(arg) {
      var cache = [];
      try {
        return JSON.stringify(arg instanceof Error ? this.toString(arg) : arg, function (key, value) {
          if (!!value && value instanceof Object) {
            if (cache.includes(value)) {
              return '<recursive>';
            }
            cache.push(value);
          }
          return value;
        }, 2);
      } catch (e) {
        return '[object invalid JSON.stringify]';
      }
    }
  }, {
    key: "replaceArgument",
    value: function replaceArgument(argument, replacePlaceholdersString, index) {
      return replacePlaceholdersString.substring(0, index) + this.toString(argument) + replacePlaceholdersString.substring(index + 2);
    }
  }, {
    key: "toString",
    value: function toString(data) {
      if (typeof data === 'string') {
        return data;
      }
      if (typeof data === 'boolean') {
        return data ? 'true' : 'false';
      }
      if (typeof data === 'number') {
        return data.toString();
      }
      var toStringStr = '';
      if (data) {
        if (typeof data === 'function') {
          toStringStr = data.toString();
        } else if (data instanceof Object) {
          try {
            toStringStr = data.toString();
          } catch (e) {
            toStringStr = '[object invalid toString()]';
          }
        }
      }
      return toStringStr;
    }
  }]);
  return Logger;
}();


/***/ }),

/***/ "./src/logger/LoggerDefaults.ts":
/*!**************************************!*
  !*** ./src/logger/LoggerDefaults.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ LoggerDefaults
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dom_PrivacyMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/PrivacyMode */ "./src/dom/PrivacyMode.ts");
/* harmony import */ var _logger_Logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger/Logger */ "./src/logger/Logger.ts");


/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var LoggerDefaults = /*#__PURE__*/function () {
  function LoggerDefaults() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, LoggerDefaults);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(LoggerDefaults, null, [{
    key: "defaultLoggingLevel",
    get: function get() {
      return _dom_PrivacyMode__WEBPACK_IMPORTED_MODULE_2__.default.isPrivate ? _logger_Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Off : _logger_Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.All;
    }
  }, {
    key: "defaultConsoleLoggingLevel",
    get: function get() {
      return _dom_PrivacyMode__WEBPACK_IMPORTED_MODULE_2__.default.isPrivate ? _logger_Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Off : _logger_Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.All;
    }
  }, {
    key: "defaultTelemetryLoggingLevel",
    get: function get() {
      return _logger_Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Info;
    }
  }]);
  return LoggerDefaults;
}();


/***/ }),

/***/ "./src/logger/LoggerFactory.ts":
/*!*************************************!*
  !*** ./src/logger/LoggerFactory.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ LoggerFactory
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logger */ "./src/logger/Logger.ts");
/* harmony import */ var _Appenders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Appenders */ "./src/logger/Appenders.ts");
/* harmony import */ var _LoggingThreshold__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoggingThreshold */ "./src/logger/LoggingThreshold.ts");
/* harmony import */ var _ConsoleAppender__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ConsoleAppender */ "./src/logger/ConsoleAppender.ts");
/* harmony import */ var _telemetry_TelemetryApender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../telemetry/TelemetryApender */ "./src/telemetry/TelemetryApender.ts");
/* harmony import */ var _telemetry_TelemetryConfiguration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../telemetry/TelemetryConfiguration */ "./src/telemetry/TelemetryConfiguration.ts");
/* harmony import */ var _dom_ConfigurationParameterReader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom/ConfigurationParameterReader */ "./src/dom/ConfigurationParameterReader.ts");
/* harmony import */ var _LoggerDefaults__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LoggerDefaults */ "./src/logger/LoggerDefaults.ts");



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */









var LoggerFactory = /*#__PURE__*/function () {
  function LoggerFactory() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, LoggerFactory);
    throw new Error('LoggerFactory is a static class that may not be instantiated');
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(LoggerFactory, null, [{
    key: "telemetryConfiguration",
    get: function get() {
      return LoggerFactory._telemetryConfiguration;
    }
  }, {
    key: "getLogger",
    value: function getLogger(category) {
      if (typeof category !== 'string') {
        category = 'SDK';
      }
      var logger = LoggerFactory._loggers[category];
      if (logger) {
        return logger;
      }
      return LoggerFactory._loggers[category] = new _Logger__WEBPACK_IMPORTED_MODULE_3__.default(category, this._appenders, this._threshold);
    }
  }, {
    key: "applyLoggerConfigFromParameterConfiguration",
    value: function applyLoggerConfigFromParameterConfiguration() {
      LoggerFactory.applyLoggingLevel();
      LoggerFactory.applyAppenderLoggingLevel('console', LoggerFactory.applyConsoleLogger.bind(this));
      LoggerFactory.applyAppenderLoggingLevel('telemetry', LoggerFactory.applyTelemetryLogger.bind(this));
    }
  }, {
    key: "applyLoggingLevel",
    value: function applyLoggingLevel() {
      var parameterValue = this._configurationParameterReader.getStringValue('phenix-logging-level');
      if (_Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel[parameterValue]) {
        this._threshold.setThreshold(_Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel[parameterValue]);
      }
      return;
    }
  }, {
    key: "applyAppenderLoggingLevel",
    value: function applyAppenderLoggingLevel(name, applyAppender) {
      var parameterValue = this._configurationParameterReader.getStringValue("phenix-".concat(name, "-logging-level"));
      if (parameterValue === 'Off') {
        return;
      }
      applyAppender(_Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel[parameterValue]);
    }
  }, {
    key: "applyConsoleLogger",
    value: function applyConsoleLogger(level) {
      this._appenders.add(new _ConsoleAppender__WEBPACK_IMPORTED_MODULE_6__.default(level || _LoggerDefaults__WEBPACK_IMPORTED_MODULE_10__.default.defaultConsoleLoggingLevel));
    }
  }, {
    key: "applyTelemetryLogger",
    value: function applyTelemetryLogger(level) {
      this._telemetryConfiguration.threshold = level || _LoggerDefaults__WEBPACK_IMPORTED_MODULE_10__.default.defaultTelemetryLoggingLevel;
      this._appenders.add(new _telemetry_TelemetryApender__WEBPACK_IMPORTED_MODULE_7__.default(this._telemetryConfiguration));
    }
  }]);
  return LoggerFactory;
}();
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(LoggerFactory, "_configurationParameterReader", new _dom_ConfigurationParameterReader__WEBPACK_IMPORTED_MODULE_9__.default());
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(LoggerFactory, "_loggers", {});
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(LoggerFactory, "_appenders", new _Appenders__WEBPACK_IMPORTED_MODULE_4__.default());
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(LoggerFactory, "_threshold", new _LoggingThreshold__WEBPACK_IMPORTED_MODULE_5__.default());
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(LoggerFactory, "_telemetryConfiguration", new _telemetry_TelemetryConfiguration__WEBPACK_IMPORTED_MODULE_8__.default());

LoggerFactory.applyLoggerConfigFromParameterConfiguration();

/***/ }),

/***/ "./src/logger/LoggingLevelMapping.ts":
/*!*******************************************!*
  !*** ./src/logger/LoggingLevelMapping.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ LoggingLevelMapping
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lang/assertUnreachable */ "./src/lang/assertUnreachable.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logger */ "./src/logger/Logger.ts");


/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var LoggingLevelMapping = /*#__PURE__*/function () {
  function LoggingLevelMapping() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, LoggingLevelMapping);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(LoggingLevelMapping, null, [{
    key: "convertLoggingLevelToLoggingLevelType",
    value: function convertLoggingLevelToLoggingLevelType(loggingLevel) {
      switch (loggingLevel) {
        case _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Off:
          return 'Off';
        case _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Trace:
          return 'Trace';
        case _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Debug:
          return 'Debug';
        case _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Info:
          return 'Trace';
        case _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Warn:
          return 'Warn';
        case _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Error:
          return 'Error';
        case _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Fatal:
          return 'Fatal';
        case _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.All:
          return 'All';
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_2__.default)(loggingLevel);
      }
    }
  }, {
    key: "convertLoggingLevelTypeToLoggingLevel",
    value: function convertLoggingLevelTypeToLoggingLevel(loggingLevelType) {
      switch (loggingLevelType) {
        case 'Off':
          return _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Off;
        case 'Trace':
          return _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Trace;
        case 'Debug':
          return _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Debug;
        case 'Info':
          return _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Info;
        case 'Warn':
          return _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Warn;
        case 'Error':
          return _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Error;
        case 'Fatal':
          return _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.Fatal;
        case 'All':
          return _Logger__WEBPACK_IMPORTED_MODULE_3__.LoggingLevel.All;
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_2__.default)(loggingLevelType);
      }
    }
  }]);
  return LoggingLevelMapping;
}();


/***/ }),

/***/ "./src/logger/LoggingThreshold.ts":
/*!****************************************!*
  !*** ./src/logger/LoggingThreshold.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ LoggingThreshold
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LoggerDefaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoggerDefaults */ "./src/logger/LoggerDefaults.ts");



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var LoggingThreshold = /*#__PURE__*/function () {
  function LoggingThreshold() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, LoggingThreshold);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_threshold", _LoggerDefaults__WEBPACK_IMPORTED_MODULE_3__.default.defaultLoggingLevel);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(LoggingThreshold, [{
    key: "value",
    get: function get() {
      return this._threshold;
    }
  }, {
    key: "setThreshold",
    value: function setThreshold(threshold) {
      this._threshold = threshold;
    }
  }]);
  return LoggingThreshold;
}();


/***/ }),

/***/ "./src/metrics/MetricType.ts":
/*!***********************************!*
  !*** ./src/metrics/MetricType.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ MetricType
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MetricsConfiguration */ "./src/metrics/MetricsConfiguration.ts");
/* harmony import */ var _lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lang/assertUnreachable */ "./src/lang/assertUnreachable.ts");
/* harmony import */ var _MetricsType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MetricsType */ "./src/metrics/MetricsType.ts");



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */



var MetricType = /*#__PURE__*/function () {
  function MetricType(metrics) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, MetricType);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_metrics", void 0);
    this._metrics = metrics;
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(MetricType, [{
    key: "getName",
    value: function getName() {
      return _MetricsType__WEBPACK_IMPORTED_MODULE_5__.default[this._metrics];
    }
  }, {
    key: "getTelemetryLevel",
    value: function getTelemetryLevel() {
      switch (this._metrics) {
        case _MetricsType__WEBPACK_IMPORTED_MODULE_5__.default.TimeToFirstFrame:
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.Essential;
        case _MetricsType__WEBPACK_IMPORTED_MODULE_5__.default.ChannelCreationTimeToFirstFrame:
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.Essential;
        case _MetricsType__WEBPACK_IMPORTED_MODULE_5__.default.Stalled:
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.All;
        case _MetricsType__WEBPACK_IMPORTED_MODULE_5__.default.Buffering:
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.All;
        case _MetricsType__WEBPACK_IMPORTED_MODULE_5__.default.SetupCompleted:
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.All;
        case _MetricsType__WEBPACK_IMPORTED_MODULE_5__.default.SetupFailed:
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.All;
        case _MetricsType__WEBPACK_IMPORTED_MODULE_5__.default.RoundTripTime:
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.All;
        case _MetricsType__WEBPACK_IMPORTED_MODULE_5__.default.DownlinkThroughputCapacity:
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.All;
        case _MetricsType__WEBPACK_IMPORTED_MODULE_5__.default.NetworkType:
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.All;
        case _MetricsType__WEBPACK_IMPORTED_MODULE_5__.default.ResolutionChanged:
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.All;
        case _MetricsType__WEBPACK_IMPORTED_MODULE_5__.default.ApplicationForeground:
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.All;
        case _MetricsType__WEBPACK_IMPORTED_MODULE_5__.default.ApplicationBackground:
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.All;
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_4__.default)(this._metrics);
      }
    }
  }]);
  return MetricType;
}();


/***/ }),

/***/ "./src/metrics/MetricsConfiguration.ts":
/*!*********************************************!*
  !*** ./src/metrics/MetricsConfiguration.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelemetryLevel": () => /* binding */ TelemetryLevel,
/* harmony export */   "default": () => /* binding */ MetricsConfiguration
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TelemetryDefault__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TelemetryDefault */ "./src/metrics/TelemetryDefault.ts");



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var TelemetryLevel;
(function (TelemetryLevel) {
  TelemetryLevel[TelemetryLevel["Off"] = 100] = "Off";
  TelemetryLevel[TelemetryLevel["Essential"] = 10] = "Essential";
  TelemetryLevel[TelemetryLevel["All"] = -1] = "All";
})(TelemetryLevel || (TelemetryLevel = {}));
var MetricsConfiguration = /*#__PURE__*/function () {
  function MetricsConfiguration() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, MetricsConfiguration);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_url", 'https://telemetry.phenixrts.com/telemetry/metrics');
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_tenancy", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_sessionId", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_environment", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_threshold", _TelemetryDefault__WEBPACK_IMPORTED_MODULE_3__.default.defaultTelemetryLevel);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(MetricsConfiguration, [{
    key: "url",
    get: function get() {
      return this._url;
    },
    set: function set(url) {
      var metricsUrl = new URL(url);
      metricsUrl.pathname = metricsUrl.pathname + '/metrics';
      this._url = metricsUrl.toString();
    }
  }, {
    key: "environment",
    get: function get() {
      return this._environment;
    },
    set: function set(environment) {
      this._environment = environment;
    }
  }, {
    key: "tenancy",
    get: function get() {
      return this._tenancy;
    },
    set: function set(tenancy) {
      this._tenancy = tenancy;
    }
  }, {
    key: "sessionId",
    get: function get() {
      return this._sessionId;
    },
    set: function set(sessionId) {
      this._sessionId = sessionId;
    }
  }, {
    key: "threshold",
    get: function get() {
      return this._threshold;
    },
    set: function set(threshold) {
      this._threshold = threshold;
    }
  }]);
  return MetricsConfiguration;
}();


/***/ }),

/***/ "./src/metrics/MetricsFactory.ts":
/*!***************************************!*
  !*** ./src/metrics/MetricsFactory.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ MetricsFactory
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MetricsService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MetricsService */ "./src/metrics/MetricsService.ts");
/* harmony import */ var _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MetricsConfiguration */ "./src/metrics/MetricsConfiguration.ts");
/* harmony import */ var _sdk_SDK__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sdk/SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _sdk_TelemetryUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sdk/TelemetryUrl */ "./src/sdk/TelemetryUrl.ts");
/* harmony import */ var _sdk_Environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sdk/Environment */ "./src/sdk/Environment.ts");
/* harmony import */ var _TelemetricLevelMapping__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TelemetricLevelMapping */ "./src/metrics/TelemetricLevelMapping.ts");



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */







var MetricsFactory = /*#__PURE__*/function () {
  function MetricsFactory() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, MetricsFactory);
    throw new Error('LoggerFactory is a static class that may not be instantiated');
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(MetricsFactory, null, [{
    key: "getMetricsService",
    value: function getMetricsService(url) {
      if (typeof url !== 'string') {
        throw new Error('ur');
      }
      var metricsServices = MetricsFactory._metricsServices[url];
      if (metricsServices) {
        return metricsServices;
      }
      var metricsConfiguration = new _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_4__.default();
      metricsConfiguration.sessionId = _sdk_SDK__WEBPACK_IMPORTED_MODULE_5__.default.clientSessionId;
      metricsConfiguration.tenancy = _sdk_SDK__WEBPACK_IMPORTED_MODULE_5__.default.tenancy.value;
      metricsConfiguration.url = _sdk_TelemetryUrl__WEBPACK_IMPORTED_MODULE_6__.default.getTelemetryUrl(url);
      metricsConfiguration.environment = _sdk_Environment__WEBPACK_IMPORTED_MODULE_7__.default.getEnvironmentFromUrl(url);
      metricsConfiguration.threshold = _TelemetricLevelMapping__WEBPACK_IMPORTED_MODULE_8__.default.convertTelemetryLevelTypeToTelemetryLevel(_sdk_SDK__WEBPACK_IMPORTED_MODULE_5__.default.telemetryLevel);
      return MetricsFactory._metricsServices[url] = new _MetricsService__WEBPACK_IMPORTED_MODULE_3__.default(metricsConfiguration);
    }
  }, {
    key: "setTelemetryLevel",
    value: function setTelemetryLevel(telemetryLevel) {
      var metricsServices = Object.values(MetricsFactory._metricsServices);
      if (metricsServices && metricsServices.length) {
        metricsServices.forEach(function (metricsService) {
          var metricsConfiguration = metricsService.metricsConfiguration;
          metricsConfiguration.threshold = telemetryLevel;
        });
      }
    }
  }]);
  return MetricsFactory;
}();
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(MetricsFactory, "_metricsServices", {});


/***/ }),

/***/ "./src/metrics/MetricsService.ts":
/*!***************************************!*
  !*** ./src/metrics/MetricsService.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ MetricsService
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sdk_version_VersionManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sdk/version/VersionManager */ "./src/sdk/version/VersionManager.ts");
/* harmony import */ var _MetricType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MetricType */ "./src/metrics/MetricType.ts");





/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var requestSizeLimit = 1024;
var MetricsService = /*#__PURE__*/function () {
  function MetricsService(metricsConfiguration) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, MetricsService);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_metricsConfiguration", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_metrics", []);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_isSending", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_domain", location.hostname);
    this._metricsConfiguration = metricsConfiguration;
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(MetricsService, [{
    key: "metricsConfiguration",
    get: function get() {
      return this._metricsConfiguration;
    }
  }, {
    key: "push",
    value: function push(metric) {
      var streamId = metric.streamId,
        value = metric.value,
        previousValue = metric.previousValue,
        runtime = metric.runtime,
        resource = metric.resource,
        kind = metric.kind;
      var metricType = new _MetricType__WEBPACK_IMPORTED_MODULE_6__.default(metric.metricType);
      if (this._metricsConfiguration.threshold > metricType.getTelemetryLevel()) {
        return;
      }
      var metricRecord = {
        timestamp: new Date().toISOString(),
        tenancy: this._metricsConfiguration.tenancy,
        sessionId: this._metricsConfiguration.sessionId,
        streamId: streamId,
        metric: metricType.getName(),
        value: value,
        previousValue: previousValue,
        fullQualifiedName: this._domain,
        environment: this._metricsConfiguration.environment,
        version: _sdk_version_VersionManager__WEBPACK_IMPORTED_MODULE_5__.default.sdkVersion,
        runtime: runtime,
        resource: resource,
        kind: kind
      };
      this._metrics.push(metricRecord);
      var ignored = this.sendMetricsIfAble();
    }
  }, {
    key: "sendMetrics",
    value: function () {
      var _sendMetrics = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(metricsMessages) {
        var formData;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              formData = new FormData();
              formData.append('jsonBody', JSON.stringify({
                records: metricsMessages
              }));
              _context.next = 4;
              return fetch(this._metricsConfiguration.url, {
                method: 'POST',
                body: formData
              });
            case 4:
              return _context.abrupt("return", _context.sent);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function sendMetrics(_x) {
        return _sendMetrics.apply(this, arguments);
      }
      return sendMetrics;
    }()
  }, {
    key: "sendMetricsIfAble",
    value: function () {
      var _sendMetricsIfAble = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
        var _this = this;
        var metricsMessages;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(this._metrics.length <= 0 || this._isSending)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              this._isSending = true;
              metricsMessages = this._metrics.slice(0, requestSizeLimit);
              this._metrics = this._metrics.slice(requestSizeLimit);
              return _context2.abrupt("return", this.sendMetrics(metricsMessages).then(function (response) {
                _this._isSending = false;
                var ignored = _this.sendMetricsIfAble();
                return response;
              }).catch(function () {
                _this._isSending = false;
                var ignored = _this.sendMetricsIfAble();
              }));
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function sendMetricsIfAble() {
        return _sendMetricsIfAble.apply(this, arguments);
      }
      return sendMetricsIfAble;
    }()
  }]);
  return MetricsService;
}();


/***/ }),

/***/ "./src/metrics/MetricsType.ts":
/*!************************************!*
  !*** ./src/metrics/MetricsType.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__) => {

"use strict";
/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var MetricsType;
(function (MetricsType) {
  MetricsType[MetricsType["TimeToFirstFrame"] = 0] = "TimeToFirstFrame";
  MetricsType[MetricsType["ChannelCreationTimeToFirstFrame"] = 1] = "ChannelCreationTimeToFirstFrame";
  MetricsType[MetricsType["Stalled"] = 2] = "Stalled";
  MetricsType[MetricsType["Buffering"] = 3] = "Buffering";
  MetricsType[MetricsType["SetupCompleted"] = 4] = "SetupCompleted";
  MetricsType[MetricsType["SetupFailed"] = 5] = "SetupFailed";
  MetricsType[MetricsType["RoundTripTime"] = 6] = "RoundTripTime";
  MetricsType[MetricsType["DownlinkThroughputCapacity"] = 7] = "DownlinkThroughputCapacity";
  MetricsType[MetricsType["NetworkType"] = 8] = "NetworkType";
  MetricsType[MetricsType["ResolutionChanged"] = 9] = "ResolutionChanged";
  MetricsType[MetricsType["ApplicationForeground"] = 10] = "ApplicationForeground";
  MetricsType[MetricsType["ApplicationBackground"] = 11] = "ApplicationBackground";
})(MetricsType || (MetricsType = {}));
/* harmony default export */ __webpack_exports__["default"] = (MetricsType);

/***/ }),

/***/ "./src/metrics/TelemetricLevelMapping.ts":
/*!***********************************************!*
  !*** ./src/metrics/TelemetricLevelMapping.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ TelemetryLevelMapping
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MetricsConfiguration */ "./src/metrics/MetricsConfiguration.ts");
/* harmony import */ var _lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lang/assertUnreachable */ "./src/lang/assertUnreachable.ts");


/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var TelemetryLevelMapping = /*#__PURE__*/function () {
  function TelemetryLevelMapping() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, TelemetryLevelMapping);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(TelemetryLevelMapping, null, [{
    key: "convertTelemetryLevelToTelemetryLevelType",
    value: function convertTelemetryLevelToTelemetryLevelType(telemetryLevel) {
      switch (telemetryLevel) {
        case _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_2__.TelemetryLevel.Off:
          return 'Off';
        case _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_2__.TelemetryLevel.Essential:
          return 'Essential';
        case _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_2__.TelemetryLevel.All:
          return 'All';
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_3__.default)(telemetryLevel);
      }
    }
  }, {
    key: "convertTelemetryLevelTypeToTelemetryLevel",
    value: function convertTelemetryLevelTypeToTelemetryLevel(telemetryLevelType) {
      switch (telemetryLevelType) {
        case 'Off':
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_2__.TelemetryLevel.Off;
        case 'Essential':
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_2__.TelemetryLevel.Essential;
        case 'All':
          return _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_2__.TelemetryLevel.All;
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_3__.default)(telemetryLevelType);
      }
    }
  }]);
  return TelemetryLevelMapping;
}();


/***/ }),

/***/ "./src/metrics/TelemetryDefault.ts":
/*!*****************************************!*
  !*** ./src/metrics/TelemetryDefault.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ TelemetryDefault
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dom_PrivacyMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/PrivacyMode */ "./src/dom/PrivacyMode.ts");
/* harmony import */ var _metrics_MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../metrics/MetricsConfiguration */ "./src/metrics/MetricsConfiguration.ts");


/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var TelemetryDefault = /*#__PURE__*/function () {
  function TelemetryDefault() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, TelemetryDefault);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(TelemetryDefault, null, [{
    key: "defaultTelemetryLevel",
    get: function get() {
      return _dom_PrivacyMode__WEBPACK_IMPORTED_MODULE_2__.default.isPrivate ? _metrics_MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.Essential : _metrics_MetricsConfiguration__WEBPACK_IMPORTED_MODULE_3__.TelemetryLevel.All;
    }
  }]);
  return TelemetryDefault;
}();


/***/ }),

/***/ "./src/promise/Promise.ts":
/*!********************************!*
  !*** ./src/promise/Promise.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PromiseHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PromiseHandler */ "./src/promise/PromiseHandler.ts");




/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var Promise = /*#__PURE__*/function () {
  function Promise(callback) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, Promise);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_state", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_handled", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_value", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_deferreds", void 0);
    if (!(this instanceof Promise)) {
      throw new TypeError('Promises must be constructed via new');
    }
    if (typeof callback !== 'function') {
      throw new TypeError('not a function');
    }
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];
    this.doResolve(callback);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(Promise, [{
    key: "doResolve",
    value: function doResolve(callback) {
      var _this = this;
      var done = false;
      try {
        callback(function (value) {
          if (done) {
            return;
          }
          done = true;
          _this.promiseResolve(value);
        }, function (reason) {
          if (done) {
            return;
          }
          done = true;
          _this.promiseReject(reason);
        });
      } catch (error) {
        if (done) {
          return;
        }
        done = true;
        this.promiseReject(error);
      }
    }
  }, {
    key: "promiseResolve",
    value: function promiseResolve(newValue) {
      var promise = this;
      try {
        // Promise Resolution Procedure: https://github.com/Promises-aplus/Promises-spec#the-Promise-resolution-procedure
        if (newValue === promise) {
          throw new TypeError('A Promise cannot be resolved with it self.');
        }
        if (newValue && (_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0___default()(newValue) === 'object' || typeof newValue === 'function')) {
          var _then = newValue.then;
          if (newValue instanceof Promise) {
            promise._state = 3;
            promise._value = newValue;
            promise.finale();
            return;
          } else if (typeof _then === 'function') {
            promise.doResolve(function () {
              // eslint-disable-next-line prefer-rest-params
              _then.apply(newValue, arguments);
            });
            return;
          }
        }
        promise._state = 1;
        promise._value = newValue;
        promise.finale();
      } catch (e) {
        promise.promiseReject(e);
      }
    }
  }, {
    key: "promiseReject",
    value: function promiseReject(newValue) {
      this._state = 2;
      this._value = newValue;
      this.finale();
    }
  }, {
    key: "finale",
    value: function finale() {
      var _this2 = this;
      if (this._state === 2 && this._deferreds.length === 0) {
        Promise._immediate(function () {
          if (!_this2._handled) {
            Promise._unhandledRejection(_this2._value);
          }
        });
      }
      for (var i = 0, len = this._deferreds.length; i < len; i++) {
        this.handle(this._deferreds[i]);
      }
      this._deferreds = null;
    }
  }, {
    key: "handle",
    value: function handle(deferred) {
      var promise = this;
      while (promise._state === 3) {
        promise = promise._value;
      }
      if (promise._state === 0) {
        promise._deferreds.push(deferred);
        return;
      }
      promise._handled = true;
      Promise._immediate(function () {
        var callback = promise._state === 1 ? deferred.onFulfilled : deferred.onRejected;
        if (callback === null) {
          if (promise._state === 1) {
            deferred.promise.promiseResolve(promise._value);
          } else {
            deferred.promise.promiseReject(promise._value);
          }
          return;
        }
        var result;
        try {
          result = callback(promise._value);
        } catch (e) {
          deferred.promise.promiseReject(e);
          return;
        }
        deferred.promise.promiseResolve(result);
      });
    }
  }], [{
    key: "all",
    value: function all(arr) {
      return new Promise(function (resolve, reject) {
        if (!Array.isArray(arr)) {
          return reject(new TypeError('Promise.all accepts an array'));
        }
        var args = Array.prototype.slice.call(arr);
        if (args.length === 0) {
          return resolve([]);
        }
        var remaining = args.length;
        var manageResponse = function manageResponse(i, value) {
          try {
            if (value && (_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object' || typeof value === 'function')) {
              var _then2 = value.then;
              if (typeof _then2 === 'function') {
                _then2.call(value, function (value) {
                  return manageResponse(i, value);
                }, reject);
                return;
              }
            }
            args[i] = value;
            if (--remaining === 0) {
              resolve(args);
            }
          } catch (error) {
            reject(error);
          }
        };
        for (var i = 0; i < args.length; i++) {
          manageResponse(i, args[i]);
        }
      });
    }
  }, {
    key: "resolve",
    value: function resolve(value) {
      if (value && _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object' && value.constructor === Promise) {
        return value;
      }
      return new Promise(function (resolve) {
        return resolve(value);
      });
    }
  }, {
    key: "reject",
    value: function reject(value) {
      return new Promise(function (_, reject) {
        return reject(value);
      });
    }
  }, {
    key: "race",
    value: function race(arr) {
      return new Promise(function (resolve, reject) {
        if (!Array.isArray(arr)) {
          return reject(new TypeError('Promise.race accepts an array'));
        }
        for (var i = 0, len = arr.length; i < len; i++) {
          Promise.resolve(arr[i]).then(resolve, reject);
        }
      });
    }
  }, {
    key: "_immediate",
    value: function _immediate(callback) {
      var ignored = setTimeout(callback, 0);
    }
  }, {
    key: "_unhandledRejection",
    value: function _unhandledRejection(error) {
      if (typeof console !== 'undefined' && console) {
        console.warn('Possible Unhandled Promise Rejection:', error); // eslint-disable-line no-console
      }
    }
  }]);
  return Promise;
}();
Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype['then'] = function (onFulfilled, onRejected) {
  var promise = new this.constructor(function () {
    return null;
  });
  this.handle(new _PromiseHandler__WEBPACK_IMPORTED_MODULE_4__.default(onFulfilled, onRejected, promise));
  return promise;
};
Promise.prototype['finally'] = function (callback) {
  var constructor = this.constructor;
  return this.then(function (value) {
    return constructor.resolve(callback()).then(function () {
      return value;
    });
  }, function (reason) {
    return constructor.resolve(callback()).then(function () {
      return constructor.reject(reason);
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Promise);

/***/ }),

/***/ "./src/promise/PromiseHandler.ts":
/*!***************************************!*
  !*** ./src/promise/PromiseHandler.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ PromiseHandler
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var PromiseHandler = /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0___default()(function PromiseHandler(onFulfilled, onRejected, promise) {
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, PromiseHandler);
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "onFulfilled", void 0);
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "onRejected", void 0);
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "promise", void 0);
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
});


/***/ }),

/***/ "./src/rtc/VanillaPeerConnection.ts":
/*!******************************************!*
  !*** ./src/rtc/VanillaPeerConnection.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _sdk_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sdk/feature/FeatureEnablement */ "./src/sdk/feature/FeatureEnablement.ts");
/* provided dependency */ var Promise = __webpack_require__(/*! ./src/promise/Promise */ "./src/promise/Promise.ts")["default"];





/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var VanillaPeerConnection = /*#__PURE__*/function () {
  function VanillaPeerConnection(configuration) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, VanillaPeerConnection);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_5__.default.getLogger('VanillaPeerConnection'));
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_peerConnection", void 0);
    if (_sdk_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_6__.default.webkitRTCPeerConnectionEnabled) {
      this._peerConnection = new webkitRTCPeerConnection(configuration);
      return;
    }
    this._peerConnection = new RTCPeerConnection(configuration);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(VanillaPeerConnection, [{
    key: "native",
    get: function get() {
      return this._peerConnection;
    }
  }, {
    key: "currentLocalDescription",
    get: function get() {
      return this._peerConnection.currentLocalDescription;
    }
  }, {
    key: "currentRemoteDescription",
    get: function get() {
      return this._peerConnection.currentRemoteDescription;
    }
  }, {
    key: "iceConnectionState",
    get: function get() {
      return this._peerConnection.iceConnectionState;
    }
  }, {
    key: "supportsGetConfiguration",
    get: function get() {
      return typeof this._peerConnection.getConfiguration === 'function';
    }
  }, {
    key: "supportsSetConfiguration",
    get: function get() {
      return typeof this._peerConnection.setConfiguration === 'function';
    }
  }, {
    key: "supportsAddTransceiver",
    get: function get() {
      return !_sdk_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_6__.default.addTranceiverDisabled && typeof this._peerConnection.addTransceiver === 'function';
    }
  }, {
    key: "createOffer",
    value: function () {
      var _createOffer = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(options) {
        var _this = this;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!_sdk_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_6__.default.promiseBasedPCMethodsDisabled) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", new Promise(function (resolve, reject) {
                return _this._peerConnection.createOffer(resolve, reject, options);
              }));
            case 2:
              return _context.abrupt("return", this._peerConnection.createOffer(options));
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createOffer(_x) {
        return _createOffer.apply(this, arguments);
      }
      return createOffer;
    }()
  }, {
    key: "createAnswer",
    value: function () {
      var _createAnswer = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2(options) {
        var _this2 = this;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!_sdk_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_6__.default.promiseBasedPCMethodsDisabled) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return", new Promise(function (resolve, reject) {
                return _this2._peerConnection.createAnswer(resolve, reject, options);
              }));
            case 2:
              return _context2.abrupt("return", this._peerConnection.createAnswer(options));
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createAnswer(_x2) {
        return _createAnswer.apply(this, arguments);
      }
      return createAnswer;
    }()
  }, {
    key: "setLocalDescription",
    value: function () {
      var _setLocalDescription = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3(description) {
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this._peerConnection.setLocalDescription(_sdk_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_6__.default.promiseBasedPCMethodsDisabled ? new RTCSessionDescription(description) : description));
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function setLocalDescription(_x3) {
        return _setLocalDescription.apply(this, arguments);
      }
      return setLocalDescription;
    }()
  }, {
    key: "setRemoteDescription",
    value: function () {
      var _setRemoteDescription = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee4(description) {
        var _description$sdp;
        var hasCrypto;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              hasCrypto = (_description$sdp = description.sdp) === null || _description$sdp === void 0 ? void 0 : _description$sdp.match(/a=crypto:/i);
              if (hasCrypto) {
                this._logger.warn('SDP a=crypto is not supported');
              }
              return _context4.abrupt("return", this._peerConnection.setRemoteDescription(_sdk_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_6__.default.promiseBasedPCMethodsDisabled ? new RTCSessionDescription(description) : description));
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function setRemoteDescription(_x4) {
        return _setRemoteDescription.apply(this, arguments);
      }
      return setRemoteDescription;
    }()
  }, {
    key: "getSenders",
    value: function getSenders() {
      return this._peerConnection.getSenders();
    }
  }, {
    key: "getStats",
    value: function getStats(selector) {
      return this._peerConnection.getStats(selector);
    }
  }, {
    key: "getStatsLegacy",
    value: function getStatsLegacy() {
      var _this3 = this;
      return new Promise(function (resolve) {
        // Ignored due to typescript not having legacy 'getStats' method type definition
        // This was a Chrome specific implementation of the 'getStats' method for
        // Chrome@<= 66 detailed here: https://bugs.chromium.org/p/chromium/issues/detail?id=627816
        // Requires a ts-ignore directive to prevent typescript errors
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        var ignored = _this3._peerConnection.getStats(resolve);
      });
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, listener, options) {
      this._peerConnection.addEventListener(type, listener, options);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, listener, options) {
      this._peerConnection.removeEventListener(type, listener, options);
    }
  }, {
    key: "addTransceiver",
    value: function addTransceiver(name, options) {
      return this._peerConnection.addTransceiver(name, options);
    }
  }, {
    key: "addStream",
    value: function addStream(mediaStream) {
      var _this4 = this;
      mediaStream.getTracks().forEach(function (track) {
        _this4._peerConnection.addTrack(track);
      });
    }
  }, {
    key: "getConfiguration",
    value: function getConfiguration() {
      return this._peerConnection.getConfiguration();
    }
  }, {
    key: "setConfiguration",
    value: function setConfiguration(configuration) {
      this._peerConnection.setConfiguration(configuration);
    }
  }, {
    key: "ontrack",
    get: function get() {
      return this._peerConnection.ontrack;
    },
    set: function set(handler) {
      this._peerConnection.ontrack = handler;
    }
  }, {
    key: "onicecandidate",
    get: function get() {
      return this._peerConnection.onicecandidate;
    },
    set: function set(handler) {
      this._peerConnection.onicecandidate = handler;
    }
  }, {
    key: "oniceconnectionstatechange",
    get: function get() {
      return this._peerConnection.oniceconnectionstatechange;
    },
    set: function set(handler) {
      this._peerConnection.oniceconnectionstatechange = handler;
    }
  }, {
    key: "close",
    value: function close() {
      this._peerConnection.close();
    }
  }]);
  return VanillaPeerConnection;
}();
/* harmony default export */ __webpack_exports__["default"] = (VanillaPeerConnection);

/***/ }),

/***/ "./src/rtc/VanillaPeerConnectionFactory.ts":
/*!*************************************************!*
  !*** ./src/rtc/VanillaPeerConnectionFactory.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _VanillaPeerConnection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VanillaPeerConnection */ "./src/rtc/VanillaPeerConnection.ts");




/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var VanillaPeerConnectionFactory = /*#__PURE__*/function () {
  function VanillaPeerConnectionFactory() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, VanillaPeerConnectionFactory);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(VanillaPeerConnectionFactory, [{
    key: "createPeerConnection",
    value: function () {
      var _createPeerConnection = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(configuration) {
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new _VanillaPeerConnection__WEBPACK_IMPORTED_MODULE_4__.default(configuration));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function createPeerConnection(_x) {
        return _createPeerConnection.apply(this, arguments);
      }
      return createPeerConnection;
    }()
  }]);
  return VanillaPeerConnectionFactory;
}();
/* harmony default export */ __webpack_exports__["default"] = (VanillaPeerConnectionFactory);

/***/ }),

/***/ "./src/rx/ReadOnlySubject.ts":
/*!***********************************!*
  !*** ./src/rx/ReadOnlySubject.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ ReadOnlySubject
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var ReadOnlySubject = /*#__PURE__*/function () {
  function ReadOnlySubject(subject) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, ReadOnlySubject);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_subject", void 0);
    this._subject = subject;
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(ReadOnlySubject, [{
    key: "value",
    get: function get() {
      return this._subject.value;
    }
  }, {
    key: "subscribe",
    value: function subscribe(listener) {
      return this._subject.subscribe(listener);
    }
  }]);
  return ReadOnlySubject;
}();


/***/ }),

/***/ "./src/rx/Subject.ts":
/*!***************************!*
  !*** ./src/rx/Subject.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Subject
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits.js */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lang_Disposable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lang/Disposable */ "./src/lang/Disposable.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var DisposableListener = /*#__PURE__*/function (_Disposable) {
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3___default()(DisposableListener, _Disposable);
  var _super = _createSuper(DisposableListener);
  function DisposableListener(listeners, listener) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default()(this, DisposableListener);
    return _super.call(this, function () {
      var idx = listeners.indexOf(listener);
      if (idx >= 0) {
        listeners.splice(idx, 1);
      }
    });
  }
  return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(DisposableListener);
}(_lang_Disposable__WEBPACK_IMPORTED_MODULE_6__.default);
var Subject = /*#__PURE__*/function () {
  function Subject(value) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default()(this, Subject);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(this, "_listeners", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(this, "_value", void 0);
    this._listeners = [];
    this._value = value;
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(Subject, [{
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      var changed = this._value !== value;
      if (changed && value) {
        var comparable = value;
        if (typeof comparable.equals === 'function') {
          changed = !comparable.equals(this._value);
        }
      }
      if (!changed) {
        return;
      }
      this._value = value;
      this._listeners.forEach(function (listener) {
        listener(value);
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(listener) {
      this._listeners.push(listener);
      listener(this._value);
      return new DisposableListener(this._listeners, listener);
    }
  }]);
  return Subject;
}();


/***/ }),

/***/ "./src/sdk/Environment.ts":
/*!********************************!*
  !*** ./src/sdk/Environment.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Environment
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var Environment = /*#__PURE__*/function () {
  function Environment() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, Environment);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(Environment, null, [{
    key: "getEnvironmentFromUrl",
    value: function getEnvironmentFromUrl(url) {
      try {
        var baseURL = new URL(url);
        return baseURL.origin;
      } catch (e) {
        return '';
      }
    }
  }]);
  return Environment;
}();


/***/ }),

/***/ "./src/sdk/SDK.ts":
/*!************************!*
  !*** ./src/sdk/SDK.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ SDK
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _lang_Strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lang/Strings */ "./src/lang/Strings.ts");
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rx/Subject */ "./src/rx/Subject.ts");
/* harmony import */ var _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rx/ReadOnlySubject */ "./src/rx/ReadOnlySubject.ts");
/* harmony import */ var _rtc_VanillaPeerConnectionFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rtc/VanillaPeerConnectionFactory */ "./src/rtc/VanillaPeerConnectionFactory.ts");
/* harmony import */ var _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edgeAuth/EdgeAuth */ "./src/sdk/edgeAuth/EdgeAuth.ts");
/* harmony import */ var _logger_Logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../logger/Logger */ "./src/logger/Logger.ts");
/* harmony import */ var _logger_ConsoleAppender__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../logger/ConsoleAppender */ "./src/logger/ConsoleAppender.ts");
/* harmony import */ var _telemetry_TelemetryApender__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../telemetry/TelemetryApender */ "./src/telemetry/TelemetryApender.ts");
/* harmony import */ var _dom_ConfigurationParameterReader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dom/ConfigurationParameterReader */ "./src/dom/ConfigurationParameterReader.ts");
/* harmony import */ var _metrics_MetricsConfiguration__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../metrics/MetricsConfiguration */ "./src/metrics/MetricsConfiguration.ts");
/* harmony import */ var _metrics_TelemetricLevelMapping__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../metrics/TelemetricLevelMapping */ "./src/metrics/TelemetricLevelMapping.ts");
/* harmony import */ var _logger_LoggingLevelMapping__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../logger/LoggingLevelMapping */ "./src/logger/LoggingLevelMapping.ts");
/* harmony import */ var _dom_PrivacyMode__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../dom/PrivacyMode */ "./src/dom/PrivacyMode.ts");
/* harmony import */ var _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../dom/BrowserDetector */ "./src/dom/BrowserDetector.ts");
/* harmony import */ var _dom_ApplicationActivityMonitor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../dom/ApplicationActivityMonitor */ "./src/dom/ApplicationActivityMonitor.ts");
/* harmony import */ var _TelemetryUrl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./TelemetryUrl */ "./src/sdk/TelemetryUrl.ts");
/* harmony import */ var _Environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Environment */ "./src/sdk/Environment.ts");
/* harmony import */ var _streaming_StreamTypes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./streaming/StreamTypes */ "./src/sdk/streaming/StreamTypes.ts");
/* harmony import */ var _discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./discovery/DiscoveryUri */ "./src/sdk/discovery/DiscoveryUri.ts");
/* harmony import */ var _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../metrics/MetricsFactory */ "./src/metrics/MetricsFactory.ts");
/* harmony import */ var _metrics_TelemetryDefault__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../metrics/TelemetryDefault */ "./src/metrics/TelemetryDefault.ts");



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */






















var pageLoadTime = window['__phenixPageLoadTime'] || window['__pageLoadTime'] || Date.now();
var SDK = /*#__PURE__*/function () {
  function SDK() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, SDK);
    throw new Error('SDK is a static class that may not be instantiated');
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(SDK, null, [{
    key: "pageLoadTime",
    get: function get() {
      return pageLoadTime;
    }
  }, {
    key: "sendLocalCandidates",
    get: function get() {
      return this._sendLocalCandidates;
    }
  }, {
    key: "tenancy",
    get: function get() {
      return this._tenancy;
    }
  }, {
    key: "clientSessionId",
    get: function get() {
      return SDK._clientSessionId;
    }
  }, {
    key: "loadedTimestamp",
    get: function get() {
      return SDK._loadedTimestamp;
    }
  }, {
    key: "initialized",
    get: function get() {
      return SDK._readOnlyInitialized;
    }
  }, {
    key: "discoveryUri",
    get: function get() {
      return SDK._readOnlyDiscoveryUri;
    }
  }, {
    key: "peerConnectionFactory",
    get: function get() {
      return SDK._readOnlyPeerConnectionFactory;
    }
  }, {
    key: "automaticRetryOnFailure",
    get: function get() {
      return SDK._automaticallyRetryOnFailure;
    }
  }, {
    key: "automaticallyReconnectPeerConnection",
    get: function get() {
      return SDK._automaticallyReconnectPeerConnection;
    }
  }, {
    key: "automaticallyPlayMediaStream",
    get: function get() {
      return SDK._automaticallyPlayMediaStream;
    }
  }, {
    key: "automaticallyMuteVideoOnPlayFailure",
    get: function get() {
      return SDK._automaticallyMuteVideoOnPlayFailure;
    }
  }, {
    key: "webPlayerLoader",
    get: function get() {
      return this._webPlayerLoader;
    }
  }, {
    key: "shakaPlayerLoader",
    get: function get() {
      return this._shakaPlayerLoader;
    }
  }, {
    key: "hlsJsLoader",
    get: function get() {
      return this._hlsJsLoader;
    }
  }, {
    key: "metricsService",
    get: function get() {
      return SDK._metricsService;
    }
  }, {
    key: "applicationActivityMonitor",
    get: function get() {
      return this._applicationActivityMonitor;
    }
  }, {
    key: "telemetryUrl",
    get: function get() {
      return this._telemetryUrl;
    }
  }, {
    key: "maximalNumberOfPeerConnectionReconnectAttempts",
    get: function get() {
      return this._maximalNumberOfPeerConnectionReconnectAttempts;
    },
    set: function set(retriesAmount) {
      this._maximalNumberOfPeerConnectionReconnectAttempts = retriesAmount;
    }
  }, {
    key: "loggingLevel",
    get: function get() {
      return _logger_LoggingLevelMapping__WEBPACK_IMPORTED_MODULE_15__.default.convertLoggingLevelToLoggingLevelType(this._logger.threshold.value);
    }
  }, {
    key: "telemetryLevel",
    get: function get() {
      return _metrics_TelemetricLevelMapping__WEBPACK_IMPORTED_MODULE_14__.default.convertTelemetryLevelToTelemetryLevelType(SDK._telemetryLevel.value);
    }
  }, {
    key: "browserDetector",
    get: function get() {
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_17__.default;
    }
  }, {
    key: "applyTelemetryConfiguration",
    value: function applyTelemetryConfiguration() {
      var _this = this;
      var telemetryConfiguration = _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_3__.default.telemetryConfiguration;
      telemetryConfiguration.sessionId = SDK.clientSessionId;
      var ignoredEnvironment = SDK._environment.subscribe(function (environment) {
        telemetryConfiguration.environment = environment;
      });
      var ignoredDiscoveryUri = SDK.telemetryUrl.subscribe(function (value) {
        var telemetryAppender = _this._logger.appenders.value.find(function (appender) {
          return appender instanceof _telemetry_TelemetryApender__WEBPACK_IMPORTED_MODULE_11__.default;
        });
        if (telemetryAppender) {
          telemetryConfiguration.url = value;
          _this._logger.appenders.remove(telemetryAppender);
          _this._logger.appenders.add(new _telemetry_TelemetryApender__WEBPACK_IMPORTED_MODULE_11__.default(telemetryConfiguration));
          _this._logger.info('Telemetry URL was set to [%s]', telemetryConfiguration.url);
        }
      });
      var ignoredTenancy = SDK._tenancy.subscribe(function (tenancy) {
        var telemetryAppender = _this._logger.appenders.value.find(function (appender) {
          return appender instanceof _telemetry_TelemetryApender__WEBPACK_IMPORTED_MODULE_11__.default;
        });
        if (telemetryAppender && tenancy) {
          telemetryConfiguration.tenancy = tenancy;
          _this._logger.appenders.remove(telemetryAppender);
          _this._logger.appenders.add(new _telemetry_TelemetryApender__WEBPACK_IMPORTED_MODULE_11__.default(telemetryConfiguration));
          _this._logger.info('Telemetry tenancy was set to [%s]', telemetryConfiguration.tenancy);
        }
      });
    }
  }, {
    key: "applyMetricsConfiguration",
    value: function applyMetricsConfiguration() {
      SDK._metricsService = _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_23__.default.getMetricsService(_discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_22__.default.uri.value);
      SDK._metricsConfiguration = SDK._metricsService.metricsConfiguration;
      SDK._metricsConfiguration.sessionId = SDK.clientSessionId;
      var ignoredEnvironment = SDK._environment.subscribe(function (environment) {
        SDK._metricsConfiguration.environment = environment;
      });
      var ignoredDiscoveryUri = SDK.telemetryUrl.subscribe(function (value) {
        SDK._metricsConfiguration.url = value;
      });
      var ignoredTenancy = SDK._tenancy.subscribe(function (tenancy) {
        SDK._metricsConfiguration.tenancy = tenancy;
      });
      var value = this._configurationParameterReader.getStringValue('phenix-metrics-level');
      if (value) {
        _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_23__.default.setTelemetryLevel(_metrics_MetricsConfiguration__WEBPACK_IMPORTED_MODULE_13__.TelemetryLevel[value]);
      }
      var ignoredTelemetryLevel = SDK._telemetryLevel.subscribe(function (telemetryLevel) {
        _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_23__.default.setTelemetryLevel(telemetryLevel);
      });
    }
  }, {
    key: "applyAutomaticallyRetryOnFailureFromParameterConfiguration",
    value: function applyAutomaticallyRetryOnFailureFromParameterConfiguration() {
      this._automaticallyRetryOnFailure = this._configurationParameterReader.getBooleanValue('phenix-automatically-retry-on-failure');
      this._logger.info('Automatically retry on failure is set to: [%s]', this._automaticallyRetryOnFailure);
      return;
    }
  }, {
    key: "applyAutomaticallyReconnectPeerConnectionFromParameterConfiguration",
    value: function applyAutomaticallyReconnectPeerConnectionFromParameterConfiguration() {
      this._automaticallyReconnectPeerConnection = this._configurationParameterReader.getBooleanValue('phenix-automatically-reconnect-peer-connection');
      this._logger.info('Automatically reconnect peer connection is set to: [%s]', this._automaticallyReconnectPeerConnection);
      return;
    }
  }, {
    key: "applyDiscoveryUriDefaultFromParameterConfiguration",
    value: function applyDiscoveryUriDefaultFromParameterConfiguration() {
      SDK.discoveryUri.subscribe(function (value) {
        SDK.telemetryUrl.value = SDK.getTelemetryUrl(value);
        SDK._environment.value = _Environment__WEBPACK_IMPORTED_MODULE_20__.default.getEnvironmentFromUrl(value);
      });
      var channelToken = this._configurationParameterReader.getStringValue('phenix-channel-token');
      if (channelToken) {
        var parsedToken = _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_8__.default.parseToken(channelToken);
        SDK._tenancy.value = _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_8__.default.getTenancy(parsedToken);
        _discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_22__.default.uri.value = (_edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_8__.default.getUri(parsedToken) || SDK.discoveryUri.value).toString();
        this._logger.info('Discovery URI set from configuration parameter to [%s]', SDK.discoveryUri.value);
        return;
      }
      var uriValue = this._configurationParameterReader.getStringValue('phenix-uri');
      if (uriValue) {
        _discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_22__.default.uri.value = uriValue;
        this._logger.info('Discovery URI set from "phenix-uri" configuration parameter tag to [%s]', SDK.discoveryUri.value);
        return;
      }
      var baseURIValue = this._configurationParameterReader.getStringValue('phenix-base-uri');
      if (baseURIValue) {
        _discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_22__.default.uri.value = "".concat(baseURIValue, "/pcast/endPoints");
        this._logger.info('Discovery URI set from "phenix-base-uri" configuration parameter tag to [%s]', SDK.discoveryUri.value);
        return;
      }
    }
  }, {
    key: "init",
    value: function init(options) {
      if (!this._initialized.value) {
        this._applicationActivityMonitor = new _dom_ApplicationActivityMonitor__WEBPACK_IMPORTED_MODULE_18__.default();
      }
      if (options) {
        if (options.discoveryUri) {
          _discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_22__.default.uri.value = options.discoveryUri;
        }
        if (options.peerConnectionFactory) {
          SDK._peerConnectionFactory.value = options.peerConnectionFactory;
        }
        if (options.telemetryLevel && _metrics_MetricsConfiguration__WEBPACK_IMPORTED_MODULE_13__.TelemetryLevel[options.telemetryLevel]) {
          SDK._telemetryLevel.value = _metrics_TelemetricLevelMapping__WEBPACK_IMPORTED_MODULE_14__.default.convertTelemetryLevelTypeToTelemetryLevel(options.telemetryLevel);
        }
        if (options.loggingLevel && _logger_Logger__WEBPACK_IMPORTED_MODULE_9__.LoggingLevel[options.loggingLevel]) {
          this._logger.threshold.setThreshold(_logger_LoggingLevelMapping__WEBPACK_IMPORTED_MODULE_15__.default.convertLoggingLevelTypeToLoggingLevel(options.loggingLevel));
        }
        if (options.consoleLoggingLevel && _logger_Logger__WEBPACK_IMPORTED_MODULE_9__.LoggingLevel[options.consoleLoggingLevel]) {
          var consoleAppender = this._logger.appenders.value.find(function (appender) {
            return appender instanceof _logger_ConsoleAppender__WEBPACK_IMPORTED_MODULE_10__.default;
          });
          if (consoleAppender) {
            this._logger.appenders.remove(consoleAppender);
          }
          if (options.consoleLoggingLevel !== 'Off') {
            this._logger.appenders.add(new _logger_ConsoleAppender__WEBPACK_IMPORTED_MODULE_10__.default(_logger_LoggingLevelMapping__WEBPACK_IMPORTED_MODULE_15__.default.convertLoggingLevelTypeToLoggingLevel(options.consoleLoggingLevel)));
          }
        }
        if (typeof options.automaticallyPlayMediaStream === 'boolean') {
          this._automaticallyPlayMediaStream = options.automaticallyPlayMediaStream;
        }
        if (typeof options.automaticallyMuteVideoOnPlayFailure === 'boolean') {
          this._automaticallyMuteVideoOnPlayFailure = options.automaticallyMuteVideoOnPlayFailure;
        }
        if (options.webPlayerLoader) {
          this._webPlayerLoader = options.webPlayerLoader;
        }
        if (options.shakaPlayerLoader) {
          this._shakaPlayerLoader = options.shakaPlayerLoader;
        }
        if (options.hlsJsLoader) {
          this._hlsJsLoader = options.hlsJsLoader;
        }
      }
      SDK._initialized.value = true;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      SDK._initialized.value = false;
      this._applicationActivityMonitor.dispose();
      this._applicationActivityMonitor = null;
    }
  }, {
    key: "getTelemetryUrl",
    value: function getTelemetryUrl(url) {
      return _TelemetryUrl__WEBPACK_IMPORTED_MODULE_19__.default.getTelemetryUrl(url);
    }
  }]);
  return SDK;
}();
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_automaticallyRetryOnFailure", true);
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_automaticallyReconnectPeerConnection", true);
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_automaticallyPlayMediaStream", true);
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_automaticallyMuteVideoOnPlayFailure", true);
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_webPlayerLoader", null);
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_shakaPlayerLoader", null);
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_hlsJsLoader", null);
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_configurationParameterReader", new _dom_ConfigurationParameterReader__WEBPACK_IMPORTED_MODULE_12__.default());
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_applicationActivityMonitor", void 0);
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_environment", new _rx_Subject__WEBPACK_IMPORTED_MODULE_5__.default(''));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_telemetryUrl", new _rx_Subject__WEBPACK_IMPORTED_MODULE_5__.default('https://telemetry.phenixrts.com/telemetry'));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_maximalNumberOfPeerConnectionReconnectAttempts", 8);
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_telemetryLevel", new _rx_Subject__WEBPACK_IMPORTED_MODULE_5__.default(_metrics_TelemetryDefault__WEBPACK_IMPORTED_MODULE_24__.default.defaultTelemetryLevel));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_metricsService", void 0);
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_metricsConfiguration", void 0);
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_sendLocalCandidates", new _rx_Subject__WEBPACK_IMPORTED_MODULE_5__.default(!_dom_PrivacyMode__WEBPACK_IMPORTED_MODULE_16__.default.isPrivate));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_tenancy", new _rx_Subject__WEBPACK_IMPORTED_MODULE_5__.default(''));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_clientSessionId", _lang_Strings__WEBPACK_IMPORTED_MODULE_4__.default.random(32));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_loadedTimestamp", new Date());
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_3__.default.getLogger('SDK'));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_initialized", new _rx_Subject__WEBPACK_IMPORTED_MODULE_5__.default(false));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_peerConnectionFactory", new _rx_Subject__WEBPACK_IMPORTED_MODULE_5__.default(new _rtc_VanillaPeerConnectionFactory__WEBPACK_IMPORTED_MODULE_7__.default()));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_readOnlyInitialized", new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__.default(SDK._initialized));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_readOnlyDiscoveryUri", new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__.default(_discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_22__.default.uri));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(SDK, "_readOnlyPeerConnectionFactory", new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__.default(SDK._peerConnectionFactory));

window.addEventListener('unload', function () {
  SDK.dispose();
});
SDK.applyDiscoveryUriDefaultFromParameterConfiguration();
SDK.applyMetricsConfiguration();
SDK.applyTelemetryConfiguration();
SDK.applyAutomaticallyRetryOnFailureFromParameterConfiguration();
SDK.applyAutomaticallyReconnectPeerConnectionFromParameterConfiguration();
SDK.init();

/***/ }),

/***/ "./src/sdk/TelemetryUrl.ts":
/*!*********************************!*
  !*** ./src/sdk/TelemetryUrl.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ TelemetryUrl
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var TelemetryUrl = /*#__PURE__*/function () {
  function TelemetryUrl() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, TelemetryUrl);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(TelemetryUrl, null, [{
    key: "getTelemetryUrl",
    value: function getTelemetryUrl(url) {
      try {
        var baseURL = new URL(url);
        var segments = baseURL.hostname.split('.');
        switch (baseURL.protocol) {
          case 'ws:':
            baseURL.protocol = 'http:';
            break;
          case 'wss:':
            baseURL.protocol = 'https:';
            break;
          default:
            break;
        }
        if (segments.length === 2 || segments.length === 3 && segments[segments.length - 2].length <= 2 && segments[segments.length - 1].length <= 3) {
          segments.unshift('telemetry');
        } else if (segments[0].startsWith('stg-') || segments[0].endsWith('-stg') || segments[0].includes('-stg-') || segments[0] === 'stg') {
          segments[0] = 'telemetry-stg';
        } else if (segments[0].startsWith('local') || segments[0].endsWith('-local')) {
          // Leave URL unchanged
        } else {
          segments[0] = 'telemetry';
        }
        baseURL.hostname = segments.join('.');
        return "".concat(baseURL.origin, "/telemetry");
      } catch (e) {
        return url;
      }
    }
  }]);
  return TelemetryUrl;
}();


/***/ }),

/***/ "./src/sdk/defaults.ts":
/*!*****************************!*
  !*** ./src/sdk/defaults.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultDiscoveryUri": () => /* binding */ defaultDiscoveryUri
/* harmony export */ });
/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var defaultDiscoveryUri = 'https://pcast.phenixrts.com/pcast/endPoints';


/***/ }),

/***/ "./src/sdk/discovery/DiscoveryUri.ts":
/*!*******************************************!*
  !*** ./src/sdk/discovery/DiscoveryUri.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ DiscoveryUri
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../defaults */ "./src/sdk/defaults.ts");
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rx/Subject */ "./src/rx/Subject.ts");
/* harmony import */ var _version_VersionManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../version/VersionManager */ "./src/sdk/version/VersionManager.ts");



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */




var DiscoveryUri = /*#__PURE__*/function () {
  function DiscoveryUri() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, DiscoveryUri);
    throw new Error('DiscoveryUri is a static class that may not be instantiated');
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(DiscoveryUri, null, [{
    key: "uri",
    get: function get() {
      return DiscoveryUri._discoveryUri;
    }
  }, {
    key: "buildDiscoveryUrl",
    value: function buildDiscoveryUrl(uri) {
      var url = new URL(uri.toString());
      var sdkVersion = _version_VersionManager__WEBPACK_IMPORTED_MODULE_5__.default.sdkVersion;
      url.search = "?".concat(new URLSearchParams([['version', sdkVersion], ['_', "".concat(Date.now())]]).toString());
      if (url.pathname === '/') {
        url.pathname = '/pcast/endPoints';
      }
      return url.toString();
    }
  }]);
  return DiscoveryUri;
}();
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(DiscoveryUri, "_discoveryUri", new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__.default(_defaults__WEBPACK_IMPORTED_MODULE_3__.defaultDiscoveryUri));


/***/ }),

/***/ "./src/sdk/edgeAuth/EdgeAuth.ts":
/*!**************************************!*
  !*** ./src/sdk/edgeAuth/EdgeAuth.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ EdgeAuth
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var edgeAuthTokenPrefix = 'DIGEST:';
var EdgeAuth = /*#__PURE__*/function () {
  function EdgeAuth() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, EdgeAuth);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(EdgeAuth, null, [{
    key: "parseToken",
    value: function parseToken(token) {
      if (!this.isValidToken(token)) {
        EdgeAuth._logger.error('Token is not valid [%s]', token);
        return undefined;
      }
      try {
        var encodedEdgeAuthToken = atob(token.substr(edgeAuthTokenPrefix.length));
        var edgeAuthToken = JSON.parse(encodedEdgeAuthToken);
        edgeAuthToken.token = JSON.parse(edgeAuthToken.token);
        return edgeAuthToken;
      } catch (e) {
        EdgeAuth._logger.error('Cannot parse token value', e);
        return undefined;
      }
    }
  }, {
    key: "getUri",
    value: function getUri(parsedToken) {
      return parsedToken && parsedToken.token && parsedToken.token.uri ? new URL(parsedToken.token.uri) : null;
    }
  }, {
    key: "getTenancy",
    value: function getTenancy(parsedToken) {
      return parsedToken && parsedToken.applicationId ? parsedToken.applicationId : '';
    }
  }, {
    key: "isValidToken",
    value: function isValidToken(token) {
      return !!token && token.startsWith(edgeAuthTokenPrefix);
    }
  }]);
  return EdgeAuth;
}();
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(EdgeAuth, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_3__.default.getLogger('EdgeAuth'));


/***/ }),

/***/ "./src/sdk/feature/FeatureEnablement.ts":
/*!**********************************************!*
  !*** ./src/sdk/feature/FeatureEnablement.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ FeatureEnablement
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/BrowserDetector */ "./src/dom/BrowserDetector.ts");


/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var FeatureEnablement = /*#__PURE__*/function () {
  function FeatureEnablement() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, FeatureEnablement);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(FeatureEnablement, null, [{
    key: "clientOfferDisabled",
    get: function get() {
      // Client offer workflow does not work correctly in the following browsers
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.isChrome74 || _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.isChrome75 || _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.isChrome76 || _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.isChrome77;
    }
  }, {
    key: "addTranceiverDisabled",
    get: function get() {
      // Chrome 69, 70, 71, 72 exposes `addTranceiver` but it does not work correctly
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.isChrome69 || _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.isChrome70 || _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.isChrome71 || _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.isChrome72;
    }
  }, {
    key: "getStatsPromiseBasedDisabled",
    get: function get() {
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.browserName === 'Chrome' && _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.browserMajorVersion <= 66;
    }
  }, {
    key: "getCurrentOfferDisabled",
    get: function get() {
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.browserName === 'Chrome' && _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.browserMajorVersion <= 69 || _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.browserName === 'Firefox' && _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.browserMajorVersion <= 56;
    }
  }, {
    key: "onTrackDisabled",
    get: function get() {
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.browserName === 'Chrome' && _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.browserMajorVersion <= 63 || _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.browserName === 'Firefox' && _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.browserMajorVersion <= 52;
    }
  }, {
    key: "webkitRTCPeerConnectionEnabled",
    get: function get() {
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.browserName === 'Chrome' && _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.browserMajorVersion <= 55;
    }
  }, {
    key: "promiseBasedPCMethodsDisabled",
    get: function get() {
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.browserName === 'Firefox' && _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.browserMajorVersion <= 52;
    }
  }, {
    key: "shouldUseNativeHls",
    get: function get() {
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.browserName === 'Safari' || _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.browserName === 'SamsungBrowser';
    }
  }, {
    key: "isRTMPEnabled",
    get: function get() {
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.browserName === 'Firefox' && _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.browserMajorVersion < 84 || _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.browserName === 'Chrome' && _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.browserMajorVersion < 70 || _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.browserName === 'Edge' || _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.browserName === 'IE';
    }
  }, {
    key: "isPrecachingEnabled",
    get: function get() {
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.default.browserName !== 'IE';
    }
  }]);
  return FeatureEnablement;
}();


/***/ }),

/***/ "./src/sdk/messaging/index.ts":
/*!************************************!*
  !*** ./src/sdk/messaging/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SDK": () => /* reexport safe */ _SDK__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _SDK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SDK */ "./src/sdk/SDK.ts");
/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */



/* harmony default export */ __webpack_exports__["default"] = ({
  SDK: _SDK__WEBPACK_IMPORTED_MODULE_0__.default
});

/***/ }),

/***/ "./src/sdk/streaming/StreamTypes.ts":
/*!******************************************!*
  !*** ./src/sdk/streaming/StreamTypes.ts ***!
  \******************************************/
/***/ (() => {

"use strict";


/***/ }),

/***/ "./src/sdk/version/VersionManager.ts":
/*!*******************************************!*
  !*** ./src/sdk/version/VersionManager.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ VersionManager
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var VersionManager = /*#__PURE__*/function () {
  function VersionManager() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, VersionManager);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(VersionManager, null, [{
    key: "sdkVersion",
    get: function get() {
      try {
        return "2023-02-03T18:19:51.912Z (2023.0.4)";
      } catch (e) {
        return this._defaultVersion;
      }
    }
  }]);
  return VersionManager;
}();
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(VersionManager, "_defaultVersion", new Date().toISOString());


/***/ }),

/***/ "./src/telemetry/TelemetryApender.ts":
/*!*******************************************!*
  !*** ./src/telemetry/TelemetryApender.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ TelemetryAppender
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TelemetryService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TelemetryService */ "./src/telemetry/TelemetryService.ts");



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var TelemetryAppender = /*#__PURE__*/function () {
  function TelemetryAppender(telemetryConfiguration) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, TelemetryAppender);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_telemetryService", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_tenancy", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_sessionId", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_threshold", void 0);
    this._tenancy = telemetryConfiguration.tenancy;
    this._sessionId = telemetryConfiguration.sessionId;
    this._threshold = telemetryConfiguration.threshold;
    this._telemetryService = new _TelemetryService__WEBPACK_IMPORTED_MODULE_3__.default(telemetryConfiguration);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(TelemetryAppender, [{
    key: "log",
    value: function log(logLevel, message, category, date) {
      if (logLevel < this._threshold) {
        return;
      }
      this._telemetryService.push(logLevel, message, category, date);
    }
  }]);
  return TelemetryAppender;
}();


/***/ }),

/***/ "./src/telemetry/TelemetryConfiguration.ts":
/*!*************************************************!*
  !*** ./src/telemetry/TelemetryConfiguration.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ TelemetryConfiguration
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logger_LoggerDefaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger/LoggerDefaults */ "./src/logger/LoggerDefaults.ts");



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var TelemetryConfiguration = /*#__PURE__*/function () {
  function TelemetryConfiguration() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, TelemetryConfiguration);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_url", 'https://telemetry.phenixrts.com/telemetry/logs');
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_tenancy", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_sessionId", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_environment", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_threshold", _logger_LoggerDefaults__WEBPACK_IMPORTED_MODULE_3__.default.defaultTelemetryLoggingLevel);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(TelemetryConfiguration, [{
    key: "url",
    get: function get() {
      return this._url;
    },
    set: function set(url) {
      var telemetryUrl = new URL(url);
      telemetryUrl.pathname = telemetryUrl.pathname + '/logs';
      this._url = telemetryUrl.toString();
    }
  }, {
    key: "environment",
    get: function get() {
      return this._environment;
    },
    set: function set(environment) {
      this._environment = environment;
    }
  }, {
    key: "tenancy",
    get: function get() {
      return this._tenancy;
    },
    set: function set(tenancy) {
      this._tenancy = tenancy;
    }
  }, {
    key: "sessionId",
    get: function get() {
      return this._sessionId;
    },
    set: function set(sessionId) {
      this._sessionId = sessionId;
    }
  }, {
    key: "threshold",
    get: function get() {
      return this._threshold;
    },
    set: function set(threshold) {
      this._threshold = threshold;
    }
  }]);
  return TelemetryConfiguration;
}();


/***/ }),

/***/ "./src/telemetry/TelemetryService.ts":
/*!*******************************************!*
  !*** ./src/telemetry/TelemetryService.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ TelemetryService
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _logger_Logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logger/Logger */ "./src/logger/Logger.ts");
/* harmony import */ var _sdk_version_VersionManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sdk/version/VersionManager */ "./src/sdk/version/VersionManager.ts");





/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var requestSizeLimit = 8192;
var TelemetryService = /*#__PURE__*/function () {
  function TelemetryService(telemetryConfiguration) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, TelemetryService);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_telemetryConfiguration", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_logs", []);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_isSending", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_domain", location.hostname);
    this._telemetryConfiguration = telemetryConfiguration;
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(TelemetryService, [{
    key: "push",
    value: function push(logLevel, message, category, timestamp) {
      var logRecord = {
        timestamp: timestamp.toISOString(),
        tenancy: this._telemetryConfiguration.tenancy,
        level: _logger_Logger__WEBPACK_IMPORTED_MODULE_5__.LoggingLevel[logLevel],
        category: category,
        message: message,
        sessionId: this._telemetryConfiguration.sessionId,
        version: _sdk_version_VersionManager__WEBPACK_IMPORTED_MODULE_6__.default.sdkVersion,
        environment: this._telemetryConfiguration.environment,
        fullQualifiedName: this._domain
      };
      if (logLevel < _logger_Logger__WEBPACK_IMPORTED_MODULE_5__.LoggingLevel.Error) {
        this._logs.push(logRecord);
      } else {
        this._logs.unshift(logRecord);
      }
      var ignored = this.sendLogsIfAble();
    }
  }, {
    key: "sendLogs",
    value: function () {
      var _sendLogs = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(logMessages) {
        var formData;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              formData = new FormData();
              formData.append('jsonBody', JSON.stringify({
                records: logMessages
              }));
              _context.next = 4;
              return fetch(this._telemetryConfiguration.url, {
                method: 'POST',
                body: formData
              });
            case 4:
              return _context.abrupt("return", _context.sent);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function sendLogs(_x) {
        return _sendLogs.apply(this, arguments);
      }
      return sendLogs;
    }()
  }, {
    key: "sendLogsIfAble",
    value: function () {
      var _sendLogsIfAble = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
        var _this = this;
        var numberOfLogsToSend, sizeOfLogsToSend, getLogSize, logMessages;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(this._logs.length <= 0 || this._isSending)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              numberOfLogsToSend = 0;
              sizeOfLogsToSend = 0;
              this._isSending = true;
              getLogSize = function getLogSize(log) {
                return Object.values(log).reduce(function (sum, item) {
                  return sum + (item ? item.length : 0);
                }, 0);
              };
              while (this._logs.length > numberOfLogsToSend && getLogSize(this._logs[numberOfLogsToSend]) + sizeOfLogsToSend < requestSizeLimit) {
                sizeOfLogsToSend += getLogSize(this._logs[numberOfLogsToSend]);
                numberOfLogsToSend++;
              }
              if (!numberOfLogsToSend) {
                this._logs[numberOfLogsToSend].message = this._logs[numberOfLogsToSend].message.substring(0, getLogSize(this._logs[numberOfLogsToSend]) + (requestSizeLimit - getLogSize(this._logs[numberOfLogsToSend])));
                numberOfLogsToSend = 1;
              }
              logMessages = this._logs.slice(0, numberOfLogsToSend);
              this._logs = this._logs.slice(numberOfLogsToSend);
              return _context2.abrupt("return", this.sendLogs(logMessages).then(function (response) {
                _this._isSending = false;
                var ignored = _this.sendLogsIfAble();
                return response;
              }).catch(function () {
                _this._isSending = false;
                var ignored = _this.sendLogsIfAble();
              }));
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function sendLogsIfAble() {
        return _sendLogsIfAble.apply(this, arguments);
      }
      return sendLogsIfAble;
    }()
  }]);
  return TelemetryService;
}();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/sdk/messaging/index.ts");
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waGVuaXgvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9waGVuaXgvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lLmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvUHJpbWl0aXZlLmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvUHJvcGVydHlLZXkuanMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvZG9tL0FwcGxpY2F0aW9uQWN0aXZpdHlNb25pdG9yLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9kb20vQnJvd3NlckRldGVjdG9yLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9kb20vUGxhaW5Db25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9kb20vUHJpdmFjeU1vZGUudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL2xhbmcvRGlzcG9zYWJsZS50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvbGFuZy9EaXNwb3NhYmxlTGlzdC50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvbGFuZy9TdHJpbmdzLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9sYW5nL2Fzc2VydFVucmVhY2hhYmxlLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9sb2dnZXIvQXBwZW5kZXJzLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9sb2dnZXIvQ29uc29sZUFwcGVuZGVyLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9sb2dnZXIvTG9nZ2VyLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9sb2dnZXIvTG9nZ2VyRGVmYXVsdHMudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL2xvZ2dlci9Mb2dnZXJGYWN0b3J5LnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9sb2dnZXIvTG9nZ2luZ0xldmVsTWFwcGluZy50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvbG9nZ2VyL0xvZ2dpbmdUaHJlc2hvbGQudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL21ldHJpY3MvTWV0cmljVHlwZS50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvbWV0cmljcy9NZXRyaWNzQ29uZmlndXJhdGlvbi50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvbWV0cmljcy9NZXRyaWNzRmFjdG9yeS50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvbWV0cmljcy9NZXRyaWNzU2VydmljZS50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvbWV0cmljcy9NZXRyaWNzVHlwZS50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvbWV0cmljcy9UZWxlbWV0cmljTGV2ZWxNYXBwaW5nLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9tZXRyaWNzL1RlbGVtZXRyeURlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL3Byb21pc2UvUHJvbWlzZS50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvcHJvbWlzZS9Qcm9taXNlSGFuZGxlci50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvcnRjL1ZhbmlsbGFQZWVyQ29ubmVjdGlvbi50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvcnRjL1ZhbmlsbGFQZWVyQ29ubmVjdGlvbkZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL3J4L1JlYWRPbmx5U3ViamVjdC50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvcngvU3ViamVjdC50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvc2RrL0Vudmlyb25tZW50LnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9zZGsvU0RLLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9zZGsvVGVsZW1ldHJ5VXJsLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9zZGsvZGVmYXVsdHMudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL3Nkay9kaXNjb3ZlcnkvRGlzY292ZXJ5VXJpLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9zZGsvZWRnZUF1dGgvRWRnZUF1dGgudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL3Nkay9mZWF0dXJlL0ZlYXR1cmVFbmFibGVtZW50LnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9zZGsvbWVzc2FnaW5nL2luZGV4LnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9zZGsvdmVyc2lvbi9WZXJzaW9uTWFuYWdlci50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvdGVsZW1ldHJ5L1RlbGVtZXRyeUFwZW5kZXIudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL3RlbGVtZXRyeS9UZWxlbWV0cnlDb25maWd1cmF0aW9uLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy90ZWxlbWV0cnkvVGVsZW1ldHJ5U2VydmljZS50cyIsIndlYnBhY2s6Ly9waGVuaXgvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGhlbml4L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BoZW5peC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGhlbml4L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGhlbml4L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGhlbml4L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJkZWZhdWx0RG9jdW1lbnRGb2N1c0ludGVydmFsVGltZW91dCIsIkFwcGxpY2F0aW9uQWN0aXZpdHlNb25pdG9yIiwiRGlzcG9zYWJsZUxpc3QiLCJEYXRlIiwibm93IiwiX2lzRm9yZWdyb3VuZCIsIlN1YmplY3QiLCJfcmVhZE9ubHlJc0ZvcmVncm91bmQiLCJSZWFkT25seVN1YmplY3QiLCJkZXRlY3RUYWJGb2N1c0NoYW5nZSIsIl90aW1lT2ZMYXN0VGFiRm9jdXNDaGFuZ2UiLCJfZGlzcG9zYWJsZXMiLCJkaXNwb3NlIiwiaGlkZGVuIiwidmlzaWJpbGl0eUNoYW5nZSIsImRvY3VtZW50IiwibXNIaWRkZW4iLCJ3ZWJraXRIaWRkZW4iLCJoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlIiwiaXNGb3JlZ3JvdW5kIiwic2V0Rm9jdXNTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGQiLCJEaXNwb3NhYmxlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxpc3RlbkZvckRvY3VtZW50Rm9jdXMiLCJjYWxsIiwiX2RvY3VtZW50Rm9jdXNJbnRlcnZhbCIsIndpbmRvdyIsInNldEludGVydmFsIiwiaGFzRm9jdXMiLCJjbGVhckludGVydmFsIiwidmFsdWUiLCJCcm93c2VyRGV0ZWN0b3IiLCJfYnJvd3Nlck5hbWVBbmRWZXJzaW9uIiwiX2Jyb3dzZXJOYW1lIiwiX2Jyb3dzZXJNYWpvclZlcnNpb24iLCJfaXNDaHJvbWU2OSIsIl9pc0Nocm9tZTcwIiwiX2lzQ2hyb21lNzEiLCJfaXNDaHJvbWU3MiIsIl9pc0Nocm9tZTc0IiwiX2lzQ2hyb21lNzUiLCJfaXNDaHJvbWU3NiIsIl9pc0Nocm9tZTc3IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiYnJvd3Nlck5hbWVBbmRWZXJzaW9uIiwibWF0Y2giLCJfYnJvd3Nlck5hbWVBbmRWZXJzaW9uUmVnZXgiLCJwYXJzZUJyb3dzZXJOYW1lQW5kVmVyc2lvbkZvcklFIiwiYnJvd3Nlck5hbWVMaXN0Iiwic3BsaXQiLCJicm93c2VyVmVyc2lvbkxpc3QiLCJmdWxsVmVyc2lvbiIsIk51bWJlciIsIm1zaWUiLCJpbmRleE9mIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJ0cmlkZW50IiwidmVyc2lvbiIsInBhcnNlQnJvd3Nlck5hbWVBbmRWZXJzaW9uIiwicGFyc2VCcm93c2VyTmFtZSIsInBhcnNlQnJvd3Nlck1ham9yVmVyc2lvbiIsImluY2x1ZGVzIiwiUGxhaW5Db25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyIiwibmFtZSIsImRlZmF1bHRTdHJpbmdWYWx1ZSIsImRlZmF1bHRCb29sZWFuVmFsdWUiLCJUZWxlbWV0cnlMZXZlbE1hcHBpbmciLCJUZWxlbWV0cnlEZWZhdWx0IiwiTG9nZ2luZ0xldmVsTWFwcGluZyIsIkxvZ2dlckRlZmF1bHRzIiwiUHJpdmFjeU1vZGUiLCJfaXNQcml2YXRlIiwiX19QUklWQUNZX01PREVfXyIsImUiLCJhcHBseUlzUHJpdmF0ZSIsImRpc3Bvc2FibGUiLCJfZGlzcG9zZWQiLCJfZGlzcG9zYWJsZSIsIl9saXN0IiwicHVzaCIsImZvckVhY2giLCJsZW5ndGgiLCJTdHJpbmdzIiwiRXJyb3IiLCJyYW5kb20xM0NoYXJhY3RlcnMiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJsb29wcyIsImNlaWwiLCJBcnJheSIsImZpbGwiLCJyZWR1Y2UiLCJzdHJpbmciLCJmdW5jIiwiYXNzZXJ0VW5yZWFjaGFibGUiLCJ4IiwiQXBwZW5kZXJzIiwiX2FwcGVuZGVycyIsImFwcGVuZGVyIiwiaXRlbXMiLCJpdGVtIiwiQ29uc29sZUFwcGVuZGVyIiwidGhyZXNob2xkIiwiX3RocmVzaG9sZCIsImxvZ0xldmVsIiwibWVzc2FnZSIsImNhdGVnb3J5IiwiZGF0ZSIsImZ1bGxNZXNzYWdlIiwidG9JU09TdHJpbmciLCJMb2dnaW5nTGV2ZWwiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJMb2dnZXIiLCJhcHBlbmRlcnMiLCJfY2F0ZWdvcnkiLCJUcmFjZSIsImFyZ3MiLCJEZWJ1ZyIsIkluZm8iLCJXYXJuIiwiRmF0YWwiLCJsZXZlbCIsInJlcGxhY2VQbGFjZWhvbGRlcnMiLCJyZXBsYWNlUGxhY2Vob2xkZXJzU3RyaW5nIiwiaW5kZXgiLCJ0eXBlIiwicmVwbGFjZUFyZ3VtZW50Iiwic3BsaWNlIiwic3RyaW5naWZ5IiwiYWNjdW11bGF0b3IiLCJjdXJyZW50VmFsdWUiLCJhcnJheSIsInN0YWNrIiwiYXJnIiwiY2FjaGUiLCJKU09OIiwia2V5IiwiT2JqZWN0IiwiYXJndW1lbnQiLCJkYXRhIiwidG9TdHJpbmdTdHIiLCJMb2dnZXJGYWN0b3J5IiwiX3RlbGVtZXRyeUNvbmZpZ3VyYXRpb24iLCJsb2dnZXIiLCJfbG9nZ2VycyIsImFwcGx5TG9nZ2luZ0xldmVsIiwiYXBwbHlBcHBlbmRlckxvZ2dpbmdMZXZlbCIsImFwcGx5Q29uc29sZUxvZ2dlciIsImJpbmQiLCJhcHBseVRlbGVtZXRyeUxvZ2dlciIsInBhcmFtZXRlclZhbHVlIiwiX2NvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXIiLCJnZXRTdHJpbmdWYWx1ZSIsInNldFRocmVzaG9sZCIsImFwcGx5QXBwZW5kZXIiLCJUZWxlbWV0cnlBcHBlbmRlciIsIkNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXIiLCJMb2dnaW5nVGhyZXNob2xkIiwiVGVsZW1ldHJ5Q29uZmlndXJhdGlvbiIsImFwcGx5TG9nZ2VyQ29uZmlnRnJvbVBhcmFtZXRlckNvbmZpZ3VyYXRpb24iLCJsb2dnaW5nTGV2ZWwiLCJsb2dnaW5nTGV2ZWxUeXBlIiwiTWV0cmljVHlwZSIsIm1ldHJpY3MiLCJfbWV0cmljcyIsIk1ldHJpY3NUeXBlIiwiVGVsZW1ldHJ5TGV2ZWwiLCJNZXRyaWNzQ29uZmlndXJhdGlvbiIsIl91cmwiLCJ1cmwiLCJtZXRyaWNzVXJsIiwiVVJMIiwicGF0aG5hbWUiLCJfZW52aXJvbm1lbnQiLCJlbnZpcm9ubWVudCIsIl90ZW5hbmN5IiwidGVuYW5jeSIsIl9zZXNzaW9uSWQiLCJzZXNzaW9uSWQiLCJNZXRyaWNzRmFjdG9yeSIsIm1ldHJpY3NTZXJ2aWNlcyIsIl9tZXRyaWNzU2VydmljZXMiLCJtZXRyaWNzQ29uZmlndXJhdGlvbiIsIlNESyIsIlRlbGVtZXRyeVVybCIsIkVudmlyb25tZW50IiwiTWV0cmljc1NlcnZpY2UiLCJ0ZWxlbWV0cnlMZXZlbCIsInZhbHVlcyIsIm1ldHJpY3NTZXJ2aWNlIiwicmVxdWVzdFNpemVMaW1pdCIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJfbWV0cmljc0NvbmZpZ3VyYXRpb24iLCJtZXRyaWMiLCJzdHJlYW1JZCIsInByZXZpb3VzVmFsdWUiLCJydW50aW1lIiwicmVzb3VyY2UiLCJraW5kIiwibWV0cmljVHlwZSIsImdldFRlbGVtZXRyeUxldmVsIiwibWV0cmljUmVjb3JkIiwidGltZXN0YW1wIiwiZ2V0TmFtZSIsImZ1bGxRdWFsaWZpZWROYW1lIiwiX2RvbWFpbiIsIlZlcnNpb25NYW5hZ2VyIiwiaWdub3JlZCIsInNlbmRNZXRyaWNzSWZBYmxlIiwibWV0cmljc01lc3NhZ2VzIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlY29yZHMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJfaXNTZW5kaW5nIiwic2xpY2UiLCJzZW5kTWV0cmljcyIsInRoZW4iLCJyZXNwb25zZSIsImNhdGNoIiwidGVsZW1ldHJ5TGV2ZWxUeXBlIiwiUHJvbWlzZSIsImNhbGxiYWNrIiwiVHlwZUVycm9yIiwiX3N0YXRlIiwiX2hhbmRsZWQiLCJfdmFsdWUiLCJ1bmRlZmluZWQiLCJfZGVmZXJyZWRzIiwiZG9SZXNvbHZlIiwiZG9uZSIsInByb21pc2VSZXNvbHZlIiwicmVhc29uIiwicHJvbWlzZVJlamVjdCIsIm5ld1ZhbHVlIiwicHJvbWlzZSIsImZpbmFsZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2ltbWVkaWF0ZSIsIl91bmhhbmRsZWRSZWplY3Rpb24iLCJpIiwibGVuIiwiaGFuZGxlIiwiZGVmZXJyZWQiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJyZXN1bHQiLCJhcnIiLCJyZXNvbHZlIiwicmVqZWN0IiwiaXNBcnJheSIsInByb3RvdHlwZSIsInJlbWFpbmluZyIsIm1hbmFnZVJlc3BvbnNlIiwiY29uc3RydWN0b3IiLCJfIiwic2V0VGltZW91dCIsIndhcm4iLCJQcm9taXNlSGFuZGxlciIsIlZhbmlsbGFQZWVyQ29ubmVjdGlvbiIsImNvbmZpZ3VyYXRpb24iLCJGZWF0dXJlRW5hYmxlbWVudCIsIl9wZWVyQ29ubmVjdGlvbiIsIndlYmtpdFJUQ1BlZXJDb25uZWN0aW9uIiwiUlRDUGVlckNvbm5lY3Rpb24iLCJjdXJyZW50TG9jYWxEZXNjcmlwdGlvbiIsImN1cnJlbnRSZW1vdGVEZXNjcmlwdGlvbiIsImljZUNvbm5lY3Rpb25TdGF0ZSIsImdldENvbmZpZ3VyYXRpb24iLCJzZXRDb25maWd1cmF0aW9uIiwiYWRkVHJhbnNjZWl2ZXIiLCJvcHRpb25zIiwiY3JlYXRlT2ZmZXIiLCJjcmVhdGVBbnN3ZXIiLCJkZXNjcmlwdGlvbiIsInNldExvY2FsRGVzY3JpcHRpb24iLCJSVENTZXNzaW9uRGVzY3JpcHRpb24iLCJoYXNDcnlwdG8iLCJzZHAiLCJfbG9nZ2VyIiwic2V0UmVtb3RlRGVzY3JpcHRpb24iLCJnZXRTZW5kZXJzIiwic2VsZWN0b3IiLCJnZXRTdGF0cyIsImxpc3RlbmVyIiwibWVkaWFTdHJlYW0iLCJnZXRUcmFja3MiLCJ0cmFjayIsImFkZFRyYWNrIiwib250cmFjayIsImhhbmRsZXIiLCJvbmljZWNhbmRpZGF0ZSIsIm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlIiwiY2xvc2UiLCJWYW5pbGxhUGVlckNvbm5lY3Rpb25GYWN0b3J5Iiwic3ViamVjdCIsIl9zdWJqZWN0Iiwic3Vic2NyaWJlIiwiRGlzcG9zYWJsZUxpc3RlbmVyIiwibGlzdGVuZXJzIiwiaWR4IiwiX2xpc3RlbmVycyIsImNoYW5nZWQiLCJjb21wYXJhYmxlIiwiZXF1YWxzIiwiYmFzZVVSTCIsIm9yaWdpbiIsInBhZ2VMb2FkVGltZSIsIl9zZW5kTG9jYWxDYW5kaWRhdGVzIiwiX2NsaWVudFNlc3Npb25JZCIsIl9sb2FkZWRUaW1lc3RhbXAiLCJfcmVhZE9ubHlJbml0aWFsaXplZCIsIl9yZWFkT25seURpc2NvdmVyeVVyaSIsIl9yZWFkT25seVBlZXJDb25uZWN0aW9uRmFjdG9yeSIsIl9hdXRvbWF0aWNhbGx5UmV0cnlPbkZhaWx1cmUiLCJfYXV0b21hdGljYWxseVJlY29ubmVjdFBlZXJDb25uZWN0aW9uIiwiX2F1dG9tYXRpY2FsbHlQbGF5TWVkaWFTdHJlYW0iLCJfYXV0b21hdGljYWxseU11dGVWaWRlb09uUGxheUZhaWx1cmUiLCJfd2ViUGxheWVyTG9hZGVyIiwiX3NoYWthUGxheWVyTG9hZGVyIiwiX2hsc0pzTG9hZGVyIiwiX21ldHJpY3NTZXJ2aWNlIiwiX2FwcGxpY2F0aW9uQWN0aXZpdHlNb25pdG9yIiwiX3RlbGVtZXRyeVVybCIsIl9tYXhpbWFsTnVtYmVyT2ZQZWVyQ29ubmVjdGlvblJlY29ubmVjdEF0dGVtcHRzIiwicmV0cmllc0Ftb3VudCIsIl90ZWxlbWV0cnlMZXZlbCIsInRlbGVtZXRyeUNvbmZpZ3VyYXRpb24iLCJjbGllbnRTZXNzaW9uSWQiLCJpZ25vcmVkRW52aXJvbm1lbnQiLCJpZ25vcmVkRGlzY292ZXJ5VXJpIiwidGVsZW1ldHJ5VXJsIiwidGVsZW1ldHJ5QXBwZW5kZXIiLCJmaW5kIiwicmVtb3ZlIiwiaW5mbyIsImlnbm9yZWRUZW5hbmN5IiwiRGlzY292ZXJ5VXJpIiwiaWdub3JlZFRlbGVtZXRyeUxldmVsIiwiZ2V0Qm9vbGVhblZhbHVlIiwiZGlzY292ZXJ5VXJpIiwiZ2V0VGVsZW1ldHJ5VXJsIiwiY2hhbm5lbFRva2VuIiwicGFyc2VkVG9rZW4iLCJFZGdlQXV0aCIsInVyaVZhbHVlIiwiYmFzZVVSSVZhbHVlIiwiX2luaXRpYWxpemVkIiwicGVlckNvbm5lY3Rpb25GYWN0b3J5IiwiX3BlZXJDb25uZWN0aW9uRmFjdG9yeSIsImNvbnNvbGVMb2dnaW5nTGV2ZWwiLCJjb25zb2xlQXBwZW5kZXIiLCJhdXRvbWF0aWNhbGx5UGxheU1lZGlhU3RyZWFtIiwiYXV0b21hdGljYWxseU11dGVWaWRlb09uUGxheUZhaWx1cmUiLCJ3ZWJQbGF5ZXJMb2FkZXIiLCJzaGFrYVBsYXllckxvYWRlciIsImhsc0pzTG9hZGVyIiwiYXBwbHlEaXNjb3ZlcnlVcmlEZWZhdWx0RnJvbVBhcmFtZXRlckNvbmZpZ3VyYXRpb24iLCJhcHBseU1ldHJpY3NDb25maWd1cmF0aW9uIiwiYXBwbHlUZWxlbWV0cnlDb25maWd1cmF0aW9uIiwiYXBwbHlBdXRvbWF0aWNhbGx5UmV0cnlPbkZhaWx1cmVGcm9tUGFyYW1ldGVyQ29uZmlndXJhdGlvbiIsImFwcGx5QXV0b21hdGljYWxseVJlY29ubmVjdFBlZXJDb25uZWN0aW9uRnJvbVBhcmFtZXRlckNvbmZpZ3VyYXRpb24iLCJpbml0Iiwic2VnbWVudHMiLCJwcm90b2NvbCIsInVuc2hpZnQiLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJqb2luIiwiZGVmYXVsdERpc2NvdmVyeVVyaSIsIl9kaXNjb3ZlcnlVcmkiLCJ1cmkiLCJzZGtWZXJzaW9uIiwic2VhcmNoIiwiVVJMU2VhcmNoUGFyYW1zIiwiZWRnZUF1dGhUb2tlblByZWZpeCIsInRva2VuIiwiaXNWYWxpZFRva2VuIiwiZW5jb2RlZEVkZ2VBdXRoVG9rZW4iLCJhdG9iIiwic3Vic3RyIiwiZWRnZUF1dGhUb2tlbiIsInBhcnNlIiwiYXBwbGljYXRpb25JZCIsIl9fU0RLVkVSU0lPTl9fIiwiX2RlZmF1bHRWZXJzaW9uIiwiX3RlbGVtZXRyeVNlcnZpY2UiLCJUZWxlbWV0cnlTZXJ2aWNlIiwibG9nUmVjb3JkIiwiX2xvZ3MiLCJzZW5kTG9nc0lmQWJsZSIsImxvZ01lc3NhZ2VzIiwibnVtYmVyT2ZMb2dzVG9TZW5kIiwic2l6ZU9mTG9nc1RvU2VuZCIsImdldExvZ1NpemUiLCJzdW0iLCJzZW5kTG9ncyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx5QkFBeUIsU0FBUyxzQkFBeUIsa0I7Ozs7Ozs7Ozs7O0FDTnBHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsSUFBSSxPQUFPO0FBQ1g7QUFDQTtB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QUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtZXNzYWdpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwaGVuaXhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicGhlbml4XCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3IsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCB0b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7IC8qISByZWdlbmVyYXRvci1ydW50aW1lIC0tIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLiAtLSBsaWNlbnNlIChNSVQpOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL0xJQ0VOU0UgKi9cbiAgbW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lID0gZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgICByZXR1cm4gZXhwb3J0cztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB2YXIgZXhwb3J0cyA9IHt9LFxuICAgIE9wID0gT2JqZWN0LnByb3RvdHlwZSxcbiAgICBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eSxcbiAgICBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB8fCBmdW5jdGlvbiAob2JqLCBrZXksIGRlc2MpIHtcbiAgICAgIG9ialtrZXldID0gZGVzYy52YWx1ZTtcbiAgICB9LFxuICAgICRTeW1ib2wgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCA/IFN5bWJvbCA6IHt9LFxuICAgIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIixcbiAgICBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCIsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgd3JpdGFibGU6ICEwXG4gICAgfSksIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3IsXG4gICAgICBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSksXG4gICAgICBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eShnZW5lcmF0b3IsIFwiX2ludm9rZVwiLCB7XG4gICAgICB2YWx1ZTogbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KVxuICAgIH0pLCBnZW5lcmF0b3I7XG4gIH1cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwibm9ybWFsXCIsXG4gICAgICAgIGFyZzogZm4uY2FsbChvYmosIGFyZylcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcInRocm93XCIsXG4gICAgICAgIGFyZzogZXJyXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiYgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkgJiYgKEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUpO1xuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAoXCJ0aHJvd1wiICE9PSByZWNvcmQudHlwZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZyxcbiAgICAgICAgICB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIFwib2JqZWN0XCIgPT0gX3R5cGVvZih2YWx1ZSkgJiYgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSA/IFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KSA6IFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHVud3JhcHBlZCkge1xuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZCwgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgIH1cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuICAgIGRlZmluZVByb3BlcnR5KHRoaXMsIFwiX2ludm9rZVwiLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUobWV0aG9kLCBhcmcpIHtcbiAgICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9IHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLCBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZykgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoXCJleGVjdXRpbmdcIiA9PT0gc3RhdGUpIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICBpZiAoXCJjb21wbGV0ZWRcIiA9PT0gc3RhdGUpIHtcbiAgICAgICAgaWYgKFwidGhyb3dcIiA9PT0gbWV0aG9kKSB0aHJvdyBhcmc7XG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnRleHQubWV0aG9kID0gbWV0aG9kLCBjb250ZXh0LmFyZyA9IGFyZzs7KSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFwibmV4dFwiID09PSBjb250ZXh0Lm1ldGhvZCkgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO2Vsc2UgaWYgKFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHtcbiAgICAgICAgICBpZiAoXCJzdXNwZW5kZWRTdGFydFwiID09PSBzdGF0ZSkgdGhyb3cgc3RhdGUgPSBcImNvbXBsZXRlZFwiLCBjb250ZXh0LmFyZztcbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcbiAgICAgICAgfSBlbHNlIFwicmV0dXJuXCIgPT09IGNvbnRleHQubWV0aG9kICYmIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgc3RhdGUgPSBcImV4ZWN1dGluZ1wiO1xuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChcIm5vcm1hbFwiID09PSByZWNvcmQudHlwZSkge1xuICAgICAgICAgIGlmIChzdGF0ZSA9IGNvbnRleHQuZG9uZSA/IFwiY29tcGxldGVkXCIgOiBcInN1c3BlbmRlZFlpZWxkXCIsIHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSAmJiAoc3RhdGUgPSBcImNvbXBsZXRlZFwiLCBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kTmFtZSA9IGNvbnRleHQubWV0aG9kLFxuICAgICAgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kTmFtZV07XG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gbWV0aG9kKSByZXR1cm4gY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIFwidGhyb3dcIiA9PT0gbWV0aG9kTmFtZSAmJiBkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSAmJiAoY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCwgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCksIFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHx8IFwicmV0dXJuXCIgIT09IG1ldGhvZE5hbWUgJiYgKGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICdcIiArIG1ldGhvZE5hbWUgKyBcIicgbWV0aG9kXCIpKSwgQ29udGludWVTZW50aW5lbDtcbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSByZXR1cm4gY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZywgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWw7XG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuICAgIHJldHVybiBpbmZvID8gaW5mby5kb25lID8gKGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlLCBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jLCBcInJldHVyblwiICE9PSBjb250ZXh0Lm1ldGhvZCAmJiAoY29udGV4dC5tZXRob2QgPSBcIm5leHRcIiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQpLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbCkgOiBpbmZvIDogKGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKSwgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWwpO1xuICB9XG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0ge1xuICAgICAgdHJ5TG9jOiBsb2NzWzBdXG4gICAgfTtcbiAgICAxIGluIGxvY3MgJiYgKGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXSksIDIgaW4gbG9jcyAmJiAoZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl0sIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXSksIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiLCBkZWxldGUgcmVjb3JkLmFyZywgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3tcbiAgICAgIHRyeUxvYzogXCJyb290XCJcbiAgICB9XSwgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpLCB0aGlzLnJlc2V0KCEwKTtcbiAgfVxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaXRlcmFibGUubmV4dCkgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsXG4gICAgICAgICAgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICBmb3IgKDsgKytpIDwgaXRlcmFibGUubGVuZ3RoOykgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkgcmV0dXJuIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXSwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICAgICAgICByZXR1cm4gbmV4dC52YWx1ZSA9IHVuZGVmaW5lZCwgbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBuZXh0OiBkb25lUmVzdWx0XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgZG9uZTogITBcbiAgICB9O1xuICB9XG4gIHJldHVybiBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lUHJvcGVydHkoR3AsIFwiY29uc3RydWN0b3JcIiwge1xuICAgIHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICBjb25maWd1cmFibGU6ICEwXG4gIH0pLCBkZWZpbmVQcm9wZXJ0eShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCB7XG4gICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uLFxuICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgfSksIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSwgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBnZW5GdW4gJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiAhIWN0b3IgJiYgKGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8IFwiR2VuZXJhdG9yRnVuY3Rpb25cIiA9PT0gKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSk7XG4gIH0sIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uIChnZW5GdW4pIHtcbiAgICByZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpIDogKGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIikpLCBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCksIGdlbkZ1bjtcbiAgfSwgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgX19hd2FpdDogYXJnXG4gICAgfTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKSwgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pLCBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yLCBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24gKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIHZvaWQgMCA9PT0gUHJvbWlzZUltcGwgJiYgKFByb21pc2VJbXBsID0gUHJvbWlzZSk7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcih3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSwgUHJvbWlzZUltcGwpO1xuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbikgPyBpdGVyIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICB9KTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKSwgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIiksIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pLCBleHBvcnRzLmtleXMgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgdmFyIG9iamVjdCA9IE9iamVjdCh2YWwpLFxuICAgICAga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIGtleXMucHVzaChrZXkpO1xuICAgIHJldHVybiBrZXlzLnJldmVyc2UoKSwgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGZvciAoOyBrZXlzLmxlbmd0aDspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSByZXR1cm4gbmV4dC52YWx1ZSA9IGtleSwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgfTtcbiAgfSwgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXMsIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldChza2lwVGVtcFJlc2V0KSB7XG4gICAgICBpZiAodGhpcy5wcmV2ID0gMCwgdGhpcy5uZXh0ID0gMCwgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZCwgdGhpcy5kb25lID0gITEsIHRoaXMuZGVsZWdhdGUgPSBudWxsLCB0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLmFyZyA9IHVuZGVmaW5lZCwgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSksICFza2lwVGVtcFJlc2V0KSBmb3IgKHZhciBuYW1lIGluIHRoaXMpIFwidFwiID09PSBuYW1lLmNoYXJBdCgwKSAmJiBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJiAhaXNOYU4oK25hbWUuc2xpY2UoMSkpICYmICh0aGlzW25hbWVdID0gdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB0aGlzLmRvbmUgPSAhMDtcbiAgICAgIHZhciByb290UmVjb3JkID0gdGhpcy50cnlFbnRyaWVzWzBdLmNvbXBsZXRpb247XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSByb290UmVjb3JkLnR5cGUpIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbiBkaXNwYXRjaEV4Y2VwdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZXR1cm4gcmVjb3JkLnR5cGUgPSBcInRocm93XCIsIHJlY29yZC5hcmcgPSBleGNlcHRpb24sIGNvbnRleHQubmV4dCA9IGxvYywgY2F1Z2h0ICYmIChjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCksICEhY2F1Z2h0O1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV0sXG4gICAgICAgICAgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgaWYgKFwicm9vdFwiID09PSBlbnRyeS50cnlMb2MpIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIiksXG4gICAgICAgICAgICBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsICEwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoYXNGaW5hbGx5KSB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYWJydXB0OiBmdW5jdGlvbiBhYnJ1cHQodHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiYgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJiB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmaW5hbGx5RW50cnkgJiYgKFwiYnJlYWtcIiA9PT0gdHlwZSB8fCBcImNvbnRpbnVlXCIgPT09IHR5cGUpICYmIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYyAmJiAoZmluYWxseUVudHJ5ID0gbnVsbCk7XG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJldHVybiByZWNvcmQudHlwZSA9IHR5cGUsIHJlY29yZC5hcmcgPSBhcmcsIGZpbmFsbHlFbnRyeSA/ICh0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYywgQ29udGludWVTZW50aW5lbCkgOiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHRocm93IHJlY29yZC5hcmc7XG4gICAgICByZXR1cm4gXCJicmVha1wiID09PSByZWNvcmQudHlwZSB8fCBcImNvbnRpbnVlXCIgPT09IHJlY29yZC50eXBlID8gdGhpcy5uZXh0ID0gcmVjb3JkLmFyZyA6IFwicmV0dXJuXCIgPT09IHJlY29yZC50eXBlID8gKHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZywgdGhpcy5tZXRob2QgPSBcInJldHVyblwiLCB0aGlzLm5leHQgPSBcImVuZFwiKSA6IFwibm9ybWFsXCIgPT09IHJlY29yZC50eXBlICYmIGFmdGVyTG9jICYmICh0aGlzLm5leHQgPSBhZnRlckxvYyksIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcbiAgICBmaW5pc2g6IGZ1bmN0aW9uIGZpbmlzaChmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHJldHVybiB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKSwgcmVzZXRUcnlFbnRyeShlbnRyeSksIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG4gICAgfSxcbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uIF9jYXRjaCh0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24gZGVsZWdhdGVZaWVsZChpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9LCBcIm5leHRcIiA9PT0gdGhpcy5tZXRob2QgJiYgKHRoaXMuYXJnID0gdW5kZWZpbmVkKSwgQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH0sIGV4cG9ydHM7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9yZWdlbmVyYXRvclJ1bnRpbWUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9QcmltaXRpdmUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKFwiLi90b1ByaW1pdGl2ZS5qc1wiKTtcbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Qcm9wZXJ0eUtleSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvLyBUT0RPKEJhYmVsIDgpOiBSZW1vdmUgdGhpcyBmaWxlLlxuXG52YXIgcnVudGltZSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3JlZ2VuZXJhdG9yUnVudGltZVwiKSgpO1xubW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuXG4vLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL3BhY2thZ2VzL3J1bnRpbWUvcnVudGltZS5qcyNMNzM2PVxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCBEaXNwb3NhYmxlIGZyb20gJy4uL2xhbmcvRGlzcG9zYWJsZSc7XG5pbXBvcnQgU3ViamVjdCBmcm9tICcuLi9yeC9TdWJqZWN0JztcbmltcG9ydCBSZWFkT25seVN1YmplY3QgZnJvbSAnLi4vcngvUmVhZE9ubHlTdWJqZWN0JztcbmltcG9ydCBEaXNwb3NhYmxlTGlzdCBmcm9tICcuLi9sYW5nL0Rpc3Bvc2FibGVMaXN0JztcblxuY29uc3QgZGVmYXVsdERvY3VtZW50Rm9jdXNJbnRlcnZhbFRpbWVvdXQgPSAzMDAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBsaWNhdGlvbkFjdGl2aXR5TW9uaXRvciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Rpc3Bvc2FibGVzOiBEaXNwb3NhYmxlTGlzdCA9IG5ldyBEaXNwb3NhYmxlTGlzdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9yZWFkT25seUlzRm9yZWdyb3VuZDogUmVhZE9ubHlTdWJqZWN0PGJvb2xlYW4+O1xuICBwcml2YXRlIHJlYWRvbmx5IF9pc0ZvcmVncm91bmQ6IFN1YmplY3Q8Ym9vbGVhbj47XG4gIHByaXZhdGUgX3RpbWVPZkxhc3RUYWJGb2N1c0NoYW5nZTogbnVtYmVyID0gRGF0ZS5ub3coKTtcbiAgcHJpdmF0ZSBfZG9jdW1lbnRGb2N1c0ludGVydmFsOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5faXNGb3JlZ3JvdW5kID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4odHJ1ZSk7XG4gICAgdGhpcy5fcmVhZE9ubHlJc0ZvcmVncm91bmQgPSBuZXcgUmVhZE9ubHlTdWJqZWN0KHRoaXMuX2lzRm9yZWdyb3VuZCk7XG4gICAgdGhpcy5kZXRlY3RUYWJGb2N1c0NoYW5nZSgpO1xuICB9XG5cbiAgZ2V0IGlzRm9yZWdyb3VuZCgpOiBSZWFkT25seVN1YmplY3Q8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLl9yZWFkT25seUlzRm9yZWdyb3VuZDtcbiAgfVxuXG4gIGdldFRpbWVTaW5jZUxhc3RDaGFuZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gRGF0ZS5ub3coKSAtIHRoaXMuX3RpbWVPZkxhc3RUYWJGb2N1c0NoYW5nZTtcbiAgfVxuXG4gIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fZGlzcG9zYWJsZXMuZGlzcG9zZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXRlY3RUYWJGb2N1c0NoYW5nZSgpOiB2b2lkIHtcbiAgICBsZXQgaGlkZGVuO1xuICAgIGxldCB2aXNpYmlsaXR5Q2hhbmdlO1xuXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBEdWUgdG8gdHlwZXNjcmlwdCBub3QgaGF2aW5nIGEgZGVmaW5pdGlvbiBmb3IgJ21zSGlkZGVuJyBvciAnd2Via2l0SGlkZGVuJyB0eXBlc1xuICAgIC8vIFJlcXVpcmVkIHRvIEB0cy1pZ25vcmUgdG8gcHJldmVudCB0eXBlc2NyaXB0IGVycm9yc1xuICAgIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudCAqL1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50Lm1zSGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaGlkZGVuID0gJ21zSGlkZGVuJztcbiAgICAgIHZpc2liaWxpdHlDaGFuZ2UgPSAnbXN2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC53ZWJraXRIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBoaWRkZW4gPSAnd2Via2l0SGlkZGVuJztcbiAgICAgIHZpc2liaWxpdHlDaGFuZ2UgPSAnd2Via2l0dmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQuaGlkZGVuICE9PSAndW5kZWZpbmVkJykgeyAvLyBPcGVyYSAxMi4xMCBhbmQgRmlyZWZveCAxOCBhbmQgbGF0ZXIgc3VwcG9ydFxuICAgICAgaGlkZGVuID0gJ2hpZGRlbic7XG4gICAgICB2aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnO1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudCAqL1xuXG4gICAgY29uc3QgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSA9ICgpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IGlzRm9yZWdyb3VuZCA9ICFkb2N1bWVudFtoaWRkZW5dO1xuXG4gICAgICB0aGlzLnNldEZvY3VzU3RhdGUoaXNGb3JlZ3JvdW5kKTtcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnRbaGlkZGVuXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodmlzaWJpbGl0eUNoYW5nZSwgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSwgZmFsc2UpO1xuXG4gICAgICB0aGlzLl9kaXNwb3NhYmxlcy5hZGQobmV3IERpc3Bvc2FibGUoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHZpc2liaWxpdHlDaGFuZ2UsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UsIGZhbHNlKTtcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saXN0ZW5Gb3JEb2N1bWVudEZvY3VzLmNhbGwodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsaXN0ZW5Gb3JEb2N1bWVudEZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuX2RvY3VtZW50Rm9jdXNJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBpc0ZvcmVncm91bmQgPSBkb2N1bWVudC5oYXNGb2N1cygpO1xuXG4gICAgICB0aGlzLnNldEZvY3VzU3RhdGUoaXNGb3JlZ3JvdW5kKTtcbiAgICB9LCBkZWZhdWx0RG9jdW1lbnRGb2N1c0ludGVydmFsVGltZW91dCk7XG5cbiAgICB0aGlzLl9kaXNwb3NhYmxlcy5hZGQobmV3IERpc3Bvc2FibGUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2RvY3VtZW50Rm9jdXNJbnRlcnZhbCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX2RvY3VtZW50Rm9jdXNJbnRlcnZhbCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2RvY3VtZW50Rm9jdXNJbnRlcnZhbCA9IG51bGw7XG4gICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRGb2N1c1N0YXRlKGlzRm9yZWdyb3VuZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pc0ZvcmVncm91bmQgPT09IGlzRm9yZWdyb3VuZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2lzRm9yZWdyb3VuZC52YWx1ZSA9IGlzRm9yZWdyb3VuZDtcbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJvd3NlckRldGVjdG9yIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2Jyb3dzZXJOYW1lQW5kVmVyc2lvblJlZ2V4ID0gLyhNU0lFfCg/IUdlY2tvLispRmlyZWZveHwoPyFBcHBsZVdlYktpdC4rQ2hyb21lLispU2FmYXJpfCg/IUFwcGxlV2ViS2l0LispQ2hyb21lfEFwcGxlV2ViS2l0KD8hLitDaHJvbWV8LitTYWZhcmkpfEdlY2tvKD8hLitGaXJlZm94KSkoPzogfFxcLykoW1xcZC5hcHJlXSspL2c7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9icm93c2VyTmFtZUFuZFZlcnNpb24gPSBCcm93c2VyRGV0ZWN0b3IucGFyc2VCcm93c2VyTmFtZUFuZFZlcnNpb24oKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2Jyb3dzZXJOYW1lID0gQnJvd3NlckRldGVjdG9yLnBhcnNlQnJvd3Nlck5hbWUoKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2Jyb3dzZXJNYWpvclZlcnNpb24gPSBCcm93c2VyRGV0ZWN0b3IucGFyc2VCcm93c2VyTWFqb3JWZXJzaW9uKCk7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2lzQ2hyb21lNjkgPSBCcm93c2VyRGV0ZWN0b3IuX2Jyb3dzZXJOYW1lQW5kVmVyc2lvbi5pbmNsdWRlcygnQ2hyb21lLzY5LicpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfaXNDaHJvbWU3MCA9IEJyb3dzZXJEZXRlY3Rvci5fYnJvd3Nlck5hbWVBbmRWZXJzaW9uLmluY2x1ZGVzKCdDaHJvbWUvNzAuJyk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9pc0Nocm9tZTcxID0gQnJvd3NlckRldGVjdG9yLl9icm93c2VyTmFtZUFuZFZlcnNpb24uaW5jbHVkZXMoJ0Nocm9tZS83MS4nKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2lzQ2hyb21lNzIgPSBCcm93c2VyRGV0ZWN0b3IuX2Jyb3dzZXJOYW1lQW5kVmVyc2lvbi5pbmNsdWRlcygnQ2hyb21lLzcyLicpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfaXNDaHJvbWU3NCA9IEJyb3dzZXJEZXRlY3Rvci5fYnJvd3Nlck5hbWVBbmRWZXJzaW9uLmluY2x1ZGVzKCdDaHJvbWUvNzQuJyk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9pc0Nocm9tZTc1ID0gQnJvd3NlckRldGVjdG9yLl9icm93c2VyTmFtZUFuZFZlcnNpb24uaW5jbHVkZXMoJ0Nocm9tZS83NS4nKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2lzQ2hyb21lNzYgPSBCcm93c2VyRGV0ZWN0b3IuX2Jyb3dzZXJOYW1lQW5kVmVyc2lvbi5pbmNsdWRlcygnQ2hyb21lLzc2LicpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfaXNDaHJvbWU3NyA9IEJyb3dzZXJEZXRlY3Rvci5fYnJvd3Nlck5hbWVBbmRWZXJzaW9uLmluY2x1ZGVzKCdDaHJvbWUvNzcuJyk7XG5cbiAgc3RhdGljIGdldCBicm93c2VyTmFtZUFuZFZlcnNpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yLl9icm93c2VyTmFtZUFuZFZlcnNpb247XG4gIH1cblxuICBzdGF0aWMgZ2V0IGJyb3dzZXJOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Jyb3dzZXJOYW1lO1xuICB9XG5cbiAgc3RhdGljIGdldCBicm93c2VyTWFqb3JWZXJzaW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2Jyb3dzZXJNYWpvclZlcnNpb247XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzQ2hyb21lNjkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJyb3dzZXJEZXRlY3Rvci5faXNDaHJvbWU2OTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXNDaHJvbWU3MCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yLl9pc0Nocm9tZTcwO1xuICB9XG5cbiAgc3RhdGljIGdldCBpc0Nocm9tZTcxKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCcm93c2VyRGV0ZWN0b3IuX2lzQ2hyb21lNzE7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzQ2hyb21lNzIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJyb3dzZXJEZXRlY3Rvci5faXNDaHJvbWU3MjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXNDaHJvbWU3NCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yLl9pc0Nocm9tZTc0O1xuICB9XG5cbiAgc3RhdGljIGdldCBpc0Nocm9tZTc1KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCcm93c2VyRGV0ZWN0b3IuX2lzQ2hyb21lNzU7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzQ2hyb21lNzYoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJyb3dzZXJEZXRlY3Rvci5faXNDaHJvbWU3NjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXNDaHJvbWU3NygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yLl9pc0Nocm9tZTc3O1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VCcm93c2VyTmFtZUFuZFZlcnNpb24oKTogc3RyaW5nIHtcbiAgICBpZiAoIW5hdmlnYXRvciB8fCAhbmF2aWdhdG9yLnVzZXJBZ2VudCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGJyb3dzZXJOYW1lQW5kVmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goQnJvd3NlckRldGVjdG9yLl9icm93c2VyTmFtZUFuZFZlcnNpb25SZWdleCk7XG5cbiAgICBpZiAoYnJvd3Nlck5hbWVBbmRWZXJzaW9uICYmIGJyb3dzZXJOYW1lQW5kVmVyc2lvblswXSkge1xuICAgICAgcmV0dXJuIGJyb3dzZXJOYW1lQW5kVmVyc2lvblswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yLnBhcnNlQnJvd3Nlck5hbWVBbmRWZXJzaW9uRm9ySUUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHBhcnNlQnJvd3Nlck5hbWUoKTogc3RyaW5nIHtcbiAgICBpZiAoIUJyb3dzZXJEZXRlY3Rvci5fYnJvd3Nlck5hbWVBbmRWZXJzaW9uKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgYnJvd3Nlck5hbWVMaXN0ID0gQnJvd3NlckRldGVjdG9yLl9icm93c2VyTmFtZUFuZFZlcnNpb24uc3BsaXQoJy8nKTtcblxuICAgIGlmICghYnJvd3Nlck5hbWVMaXN0IHx8ICFicm93c2VyTmFtZUxpc3RbMF0pIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gYnJvd3Nlck5hbWVMaXN0WzBdO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VCcm93c2VyTWFqb3JWZXJzaW9uKCk6IG51bWJlciB7XG4gICAgaWYgKCFCcm93c2VyRGV0ZWN0b3IuX2Jyb3dzZXJOYW1lQW5kVmVyc2lvbikge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgY29uc3QgYnJvd3NlclZlcnNpb25MaXN0ID0gQnJvd3NlckRldGVjdG9yLl9icm93c2VyTmFtZUFuZFZlcnNpb24uc3BsaXQoJy8nKTtcblxuICAgIGlmICghYnJvd3NlclZlcnNpb25MaXN0IHx8ICFicm93c2VyVmVyc2lvbkxpc3RbMV0pIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGNvbnN0IGZ1bGxWZXJzaW9uID0gYnJvd3NlclZlcnNpb25MaXN0WzFdO1xuXG4gICAgaWYgKCFmdWxsVmVyc2lvbikge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIE51bWJlcihmdWxsVmVyc2lvbi5zcGxpdCgnLicpWzBdKSB8fCAwO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VCcm93c2VyTmFtZUFuZFZlcnNpb25Gb3JJRSgpOiBzdHJpbmcge1xuICAgIGlmICghbmF2aWdhdG9yIHx8ICFuYXZpZ2F0b3IudXNlckFnZW50KSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICBjb25zdCBtc2llID0gdXNlckFnZW50LmluZGV4T2YoJ01TSUUgJyk7XG5cbiAgICBpZiAobXNpZSA+IDApIHtcbiAgICAgIC8vIElFIDEwIG9yIG9sZGVyID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxuICAgICAgcmV0dXJuIGBJRS8ke3BhcnNlSW50KHVzZXJBZ2VudC5zdWJzdHJpbmcobXNpZSArIDUsIHVzZXJBZ2VudC5pbmRleE9mKCcuJywgbXNpZSkpLCAxMCl9YDtcbiAgICB9XG5cbiAgICBjb25zdCB0cmlkZW50ID0gdXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQvJyk7XG5cbiAgICBpZiAodHJpZGVudCA+IDApIHtcbiAgICAgIC8vIElFIDExID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxuICAgICAgY29uc3QgdmVyc2lvbiA9IHVzZXJBZ2VudC5pbmRleE9mKCdydjonKTtcblxuICAgICAgcmV0dXJuIGBJRS8ke3BhcnNlSW50KHVzZXJBZ2VudC5zdWJzdHJpbmcodmVyc2lvbiArIDMsIHVzZXJBZ2VudC5pbmRleE9mKCcuJywgdmVyc2lvbikpLCAxMCl9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCBUZWxlbWV0cnlMZXZlbE1hcHBpbmcgZnJvbSAnLi4vbWV0cmljcy9UZWxlbWV0cmljTGV2ZWxNYXBwaW5nJztcbmltcG9ydCBUZWxlbWV0cnlEZWZhdWx0IGZyb20gJy4uL21ldHJpY3MvVGVsZW1ldHJ5RGVmYXVsdCc7XG5pbXBvcnQgTG9nZ2luZ0xldmVsTWFwcGluZyBmcm9tICcuLi9sb2dnZXIvTG9nZ2luZ0xldmVsTWFwcGluZyc7XG5pbXBvcnQgTG9nZ2VyRGVmYXVsdHMgZnJvbSAnLi4vbG9nZ2VyL0xvZ2dlckRlZmF1bHRzJztcblxuLy8gVGhpcyBmaWxlIGlzIHVzZWQgb25seSBmb3IgdGhlIHNpbGVudCBidWlsZCB0byBtb2NrIENvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXIgY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYWluQ29uZmlndXJhdGlvblBhcmFtZXRlclJlYWRlciB7XG4gIGdldFN0cmluZ1ZhbHVlKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFN0cmluZ1ZhbHVlW25hbWVdO1xuICB9XG5cbiAgZ2V0Qm9vbGVhblZhbHVlKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRCb29sZWFuVmFsdWVbbmFtZV07XG4gIH1cblxuICBwcml2YXRlIGdldCBkZWZhdWx0U3RyaW5nVmFsdWUoKTogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIHJldHVybiB7XG4gICAgICAncGhlbml4LW1ldHJpY3MtbGV2ZWwnOiBUZWxlbWV0cnlMZXZlbE1hcHBpbmcuY29udmVydFRlbGVtZXRyeUxldmVsVG9UZWxlbWV0cnlMZXZlbFR5cGUoVGVsZW1ldHJ5RGVmYXVsdC5kZWZhdWx0VGVsZW1ldHJ5TGV2ZWwpLFxuICAgICAgJ3BoZW5peC1sb2dnaW5nLWxldmVsJzogTG9nZ2luZ0xldmVsTWFwcGluZy5jb252ZXJ0TG9nZ2luZ0xldmVsVG9Mb2dnaW5nTGV2ZWxUeXBlKExvZ2dlckRlZmF1bHRzLmRlZmF1bHRMb2dnaW5nTGV2ZWwpLFxuICAgICAgJ3BoZW5peC1jb25zb2xlLWxvZ2dpbmctbGV2ZWwnOiBMb2dnaW5nTGV2ZWxNYXBwaW5nLmNvbnZlcnRMb2dnaW5nTGV2ZWxUb0xvZ2dpbmdMZXZlbFR5cGUoTG9nZ2VyRGVmYXVsdHMuZGVmYXVsdENvbnNvbGVMb2dnaW5nTGV2ZWwpLFxuICAgICAgJ3BoZW5peC10ZWxlbWV0cnktbG9nZ2luZy1sZXZlbCc6IExvZ2dpbmdMZXZlbE1hcHBpbmcuY29udmVydExvZ2dpbmdMZXZlbFRvTG9nZ2luZ0xldmVsVHlwZShMb2dnZXJEZWZhdWx0cy5kZWZhdWx0VGVsZW1ldHJ5TG9nZ2luZ0xldmVsKSxcbiAgICAgICdwaGVuaXgtY2hhbm5lbC10b2tlbic6ICcnLFxuICAgICAgJ3BoZW5peC11cmknOiAnJyxcbiAgICAgICdwaGVuaXgtYmFzZS11cmknOiAnJ1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldCBkZWZhdWx0Qm9vbGVhblZhbHVlKCk6IHsgW25hbWU6IHN0cmluZ106IGJvb2xlYW4gfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdwaGVuaXgtYXV0b21hdGljYWxseS1yZXRyeS1vbi1mYWlsdXJlJzogdHJ1ZSxcbiAgICAgICdwaGVuaXgtYXV0b21hdGljYWxseS1yZWNvbm5lY3QtcGVlci1jb25uZWN0aW9uJzogdHJ1ZVxuICAgIH07XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmRlY2xhcmUgY29uc3QgX19QUklWQUNZX01PREVfXzogYm9vbGVhbjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpdmFjeU1vZGUge1xuICBwcml2YXRlIHN0YXRpYyBfaXNQcml2YXRlOiBib29sZWFuO1xuXG4gIHN0YXRpYyBnZXQgaXNQcml2YXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1ByaXZhdGU7XG4gIH1cblxuICBzdGF0aWMgYXBwbHlJc1ByaXZhdGUoKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX2lzUHJpdmF0ZSA9IF9fUFJJVkFDWV9NT0RFX187XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5faXNQcml2YXRlID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cblByaXZhY3lNb2RlLmFwcGx5SXNQcml2YXRlKCk7IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQgSURpc3Bvc2FibGUgZnJvbSAnLi9JRGlzcG9zYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3Bvc2FibGUgaW1wbGVtZW50cyBJRGlzcG9zYWJsZSB7XG4gIHByaXZhdGUgX2Rpc3Bvc2VkOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNwb3NhYmxlOiAoKSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKGRpc3Bvc2FibGU6ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLl9kaXNwb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2Rpc3Bvc2FibGUgPSBkaXNwb3NhYmxlO1xuICB9XG5cbiAgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGlzcG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9kaXNwb3NlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcy5fZGlzcG9zYWJsZS5jYWxsKHRoaXMpO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQgSURpc3Bvc2FibGUgZnJvbSAnLi9JRGlzcG9zYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3Bvc2FibGVMaXN0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBfbGlzdDogSURpc3Bvc2FibGVbXSA9IFtdO1xuXG4gIGFkZChkaXNwb3NhYmxlOiBJRGlzcG9zYWJsZSk6IHZvaWQge1xuICAgIHRoaXMuX2xpc3QucHVzaChkaXNwb3NhYmxlKTtcbiAgfVxuXG4gIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fbGlzdC5mb3JFYWNoKGRpc3Bvc2FibGUgPT4gZGlzcG9zYWJsZS5kaXNwb3NlKCkpO1xuICAgIHRoaXMuX2xpc3QubGVuZ3RoID0gMDtcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBEaXNwb3NhYmxlTGlzdFtkaXNwb3NhYmxlcz0ke3RoaXMuX2xpc3QubGVuZ3RofV1gO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdzIHtcbiAgc3RhdGljIHJhbmRvbShsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgcmFuZG9tMTNDaGFyYWN0ZXJzID0gKCk6IHN0cmluZyA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDIsIDE1KTtcbiAgICB9O1xuXG4gICAgY29uc3QgbG9vcHM6IG51bWJlciA9IE1hdGguY2VpbChsZW5ndGggLyAxMyk7XG5cbiAgICByZXR1cm4gbmV3IEFycmF5KGxvb3BzKS5maWxsKHJhbmRvbTEzQ2hhcmFjdGVycykucmVkdWNlKChzdHJpbmcsIGZ1bmMpID0+IHtcbiAgICAgIHJldHVybiBzdHJpbmcgKyBmdW5jKCk7XG4gICAgfSwgJycpLnN1YnN0cmluZygwLCBsZW5ndGgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0cmluZ3MgaXMgYSBzdGF0aWMgY2xhc3MgdGhhdCBtYXkgbm90IGJlIGluc3RhbnRpYXRlZCcpO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0VW5yZWFjaGFibGUoeDogbmV2ZXIpOiBuZXZlciB7XG4gIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCB2YWx1ZSBbJHt4fV0uIFRoaXMgc2hvdWxkIG5ldmVyIGJlIHJlYWNoZWRgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXNzZXJ0VW5yZWFjaGFibGU7IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQge0lBcHBlbmRlcn0gZnJvbSAnLi9JQXBwZW5kZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBlbmRlcnMge1xuICBwcml2YXRlIF9hcHBlbmRlcnM6IEFycmF5PElBcHBlbmRlcj4gPSBbXTtcblxuICBnZXQgdmFsdWUoKTogQXJyYXk8SUFwcGVuZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGVuZGVycztcbiAgfVxuXG4gIGFkZChhcHBlbmRlcjogSUFwcGVuZGVyKTogdm9pZCB7XG4gICAgdGhpcy5fYXBwZW5kZXJzLnB1c2goYXBwZW5kZXIpO1xuICB9XG5cbiAgcmVtb3ZlKGFwcGVuZGVyKTogdm9pZCB7XG4gICAgdGhpcy5fYXBwZW5kZXJzID0gdGhpcy5fYXBwZW5kZXJzLnJlZHVjZSgoaXRlbXMsIGl0ZW0pID0+IHtcbiAgICAgIGlmICghKGl0ZW0gPT09IGFwcGVuZGVyKSkge1xuICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaXRlbXM7XG4gICAgfSwgW10gYXMgQXJyYXk8SUFwcGVuZGVyPik7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCB7SUFwcGVuZGVyfSBmcm9tICcuL0lBcHBlbmRlcic7XG5pbXBvcnQge0xvZ2dpbmdMZXZlbH0gZnJvbSAnLi9Mb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zb2xlQXBwZW5kZXIgaW1wbGVtZW50cyBJQXBwZW5kZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IF90aHJlc2hvbGQ6IExvZ2dpbmdMZXZlbDtcblxuICBsb2cobG9nTGV2ZWw6IExvZ2dpbmdMZXZlbCwgbWVzc2FnZTogc3RyaW5nLCBjYXRlZ29yeTogc3RyaW5nLCBkYXRlOiBEYXRlKTogdm9pZCB7XG4gICAgaWYgKGxvZ0xldmVsIDwgdGhpcy5fdGhyZXNob2xkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZnVsbE1lc3NhZ2UgPSBgJHtkYXRlLnRvSVNPU3RyaW5nKCl9IFske2NhdGVnb3J5fV0gWyR7TG9nZ2luZ0xldmVsW2xvZ0xldmVsXX1dICR7bWVzc2FnZX1gO1xuXG4gICAgaWYgKGxvZ0xldmVsIDwgTG9nZ2luZ0xldmVsLldhcm4pIHtcbiAgICAgIGNvbnNvbGUubG9nKGZ1bGxNZXNzYWdlKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUuZXJyb3IoZnVsbE1lc3NhZ2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IodGhyZXNob2xkOiBMb2dnaW5nTGV2ZWwpIHtcbiAgICB0aGlzLl90aHJlc2hvbGQgPSB0aHJlc2hvbGQ7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCB7SUFwcGVuZGVyfSBmcm9tICcuL0lBcHBlbmRlcic7XG5pbXBvcnQgQXBwZW5kZXJzIGZyb20gJy4vQXBwZW5kZXJzJztcbmltcG9ydCBMb2dnaW5nVGhyZXNob2xkIGZyb20gJy4vTG9nZ2luZ1RocmVzaG9sZCc7XG5cbmV4cG9ydCBlbnVtIExvZ2dpbmdMZXZlbCB7XG4gIEFsbCA9IC0xLFxuICBUcmFjZSA9IDEwLFxuICBEZWJ1ZyA9IDIwLFxuICBJbmZvID0gMzAsXG4gIFdhcm4gPSA0MCxcbiAgRXJyb3IgPSA1MCxcbiAgRmF0YWwgPSA2MCxcbiAgT2ZmID0gMTAwLFxufVxuXG5leHBvcnQgdHlwZSBMb2dnaW5nTGV2ZWxUeXBlID0gJ09mZicgfCAnVHJhY2UnIHwgJ0RlYnVnJyB8ICdJbmZvJyB8ICdXYXJuJyB8ICdFcnJvcicgfCAnRmF0YWwnIHwgJ0FsbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2NhdGVnb3J5OiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2FwcGVuZGVyczogQXBwZW5kZXJzO1xuICBwcml2YXRlIHJlYWRvbmx5IF90aHJlc2hvbGQ6IExvZ2dpbmdUaHJlc2hvbGQ7XG5cbiAgZ2V0IGNhdGVnb3J5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NhdGVnb3J5O1xuICB9XG5cbiAgZ2V0IGFwcGVuZGVycygpOiBBcHBlbmRlcnMge1xuICAgIHJldHVybiB0aGlzLl9hcHBlbmRlcnM7XG4gIH1cblxuICBnZXQgdGhyZXNob2xkKCk6IExvZ2dpbmdUaHJlc2hvbGQge1xuICAgIHJldHVybiB0aGlzLl90aHJlc2hvbGQ7XG4gIH1cblxuICB0cmFjZSguLi5hcmdzOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3RocmVzaG9sZC52YWx1ZSB8fCB0aGlzLl90aHJlc2hvbGQudmFsdWUgPiBMb2dnaW5nTGV2ZWwuVHJhY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvZyhMb2dnaW5nTGV2ZWwuVHJhY2UsIGFyZ3MpO1xuICB9XG5cbiAgZGVidWcoLi4uYXJnczogYW55KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl90aHJlc2hvbGQudmFsdWUgfHwgdGhpcy5fdGhyZXNob2xkLnZhbHVlID4gTG9nZ2luZ0xldmVsLkRlYnVnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sb2coTG9nZ2luZ0xldmVsLkRlYnVnLCBhcmdzKTtcbiAgfVxuXG4gIGluZm8oLi4uYXJnczogYW55KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl90aHJlc2hvbGQudmFsdWUgfHwgdGhpcy5fdGhyZXNob2xkLnZhbHVlID4gTG9nZ2luZ0xldmVsLkluZm8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvZyhMb2dnaW5nTGV2ZWwuSW5mbywgYXJncyk7XG4gIH1cblxuICB3YXJuKC4uLmFyZ3M6IGFueSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fdGhyZXNob2xkLnZhbHVlIHx8IHRoaXMuX3RocmVzaG9sZC52YWx1ZSA+IExvZ2dpbmdMZXZlbC5XYXJuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sb2coTG9nZ2luZ0xldmVsLldhcm4sIGFyZ3MpO1xuICB9XG5cbiAgZXJyb3IoLi4uYXJnczogYW55KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl90aHJlc2hvbGQudmFsdWUgfHwgdGhpcy5fdGhyZXNob2xkLnZhbHVlID4gTG9nZ2luZ0xldmVsLkVycm9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sb2coTG9nZ2luZ0xldmVsLkVycm9yLCBhcmdzKTtcbiAgfVxuXG4gIGZhdGFsKC4uLmFyZ3M6IGFueSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fdGhyZXNob2xkLnZhbHVlIHx8IHRoaXMuX3RocmVzaG9sZC52YWx1ZSA+IExvZ2dpbmdMZXZlbC5GYXRhbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubG9nKExvZ2dpbmdMZXZlbC5GYXRhbCwgYXJncyk7XG4gIH1cblxuICBwcml2YXRlIGxvZyhsZXZlbDogbnVtYmVyLCBhcmdzOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5yZXBsYWNlUGxhY2Vob2xkZXJzKGFyZ3MpO1xuXG4gICAgdGhpcy5fYXBwZW5kZXJzLnZhbHVlLmZvckVhY2goKGFwcGVuZGVyOiBJQXBwZW5kZXIpID0+IHtcbiAgICAgIGFwcGVuZGVyLmxvZyhsZXZlbCwgbWVzc2FnZSwgdGhpcy5jYXRlZ29yeSwgZGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlcGxhY2VQbGFjZWhvbGRlcnMoYXJnczogYW55KTogc3RyaW5nIHtcbiAgICBsZXQgcmVwbGFjZVBsYWNlaG9sZGVyc1N0cmluZyA9IGFyZ3NbMF07XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIHdoaWxlIChyZXBsYWNlUGxhY2Vob2xkZXJzU3RyaW5nLmluZGV4T2YgJiYgYXJncy5sZW5ndGggPiAxICYmIGluZGV4ID49IDApIHtcbiAgICAgIGluZGV4ID0gcmVwbGFjZVBsYWNlaG9sZGVyc1N0cmluZy5pbmRleE9mKCclJywgaW5kZXgpO1xuXG4gICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSByZXBsYWNlUGxhY2Vob2xkZXJzU3RyaW5nLnN1YnN0cmluZyhpbmRleCArIDEsIGluZGV4ICsgMik7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSAnJSc6XG4gICAgICAgICAgICAvLyBFc2NhcGVkICclJScgdHVybnMgaW50byAnJSdcbiAgICAgICAgICAgIHJlcGxhY2VQbGFjZWhvbGRlcnNTdHJpbmcgPSByZXBsYWNlUGxhY2Vob2xkZXJzU3RyaW5nLnN1YnN0cmluZygwLCBpbmRleCkgKyByZXBsYWNlUGxhY2Vob2xkZXJzU3RyaW5nLnN1YnN0cmluZyhpbmRleCArIDEpO1xuICAgICAgICAgICAgaW5kZXgrKztcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgICAgICAvLyBSZXBsYWNlICclZCcgb3IgJyVzJyB3aXRoIHRoZSBhcmd1bWVudFxuICAgICAgICAgICAgYXJnc1swXSA9IHJlcGxhY2VQbGFjZWhvbGRlcnNTdHJpbmcgPSB0aGlzLnJlcGxhY2VBcmd1bWVudChcbiAgICAgICAgICAgICAgdGhpcy50b1N0cmluZyhhcmdzWzFdKSxcbiAgICAgICAgICAgICAgcmVwbGFjZVBsYWNlaG9sZGVyc1N0cmluZyxcbiAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBhcmdzLnNwbGljZSgxLCAxKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaic6XG4gICAgICAgICAgICAvLyBSZXBsYWNlICVqJyB3aXRoIHRoZSBhcmd1bWVudFxuICAgICAgICAgICAgYXJnc1swXSA9IHJlcGxhY2VQbGFjZWhvbGRlcnNTdHJpbmcgPSB0aGlzLnJlcGxhY2VBcmd1bWVudChcbiAgICAgICAgICAgICAgdGhpcy5zdHJpbmdpZnkoYXJnc1sxXSksXG4gICAgICAgICAgICAgIHJlcGxhY2VQbGFjZWhvbGRlcnNTdHJpbmcsXG4gICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBhcmdzLnNwbGljZSgxLCAxKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBhcmdzLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XG4gICAgICBhcmdzID0gYXJncy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBjdXJyZW50VmFsdWUsIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggKyAxID09PSBhcnJheS5sZW5ndGggJiYgY3VycmVudFZhbHVlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gYWNjdW11bGF0b3IgKyAnXFxuJyArIHRoaXMudG9TdHJpbmcoY3VycmVudFZhbHVlLnN0YWNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvciArIGBbJHt0aGlzLnRvU3RyaW5nKGN1cnJlbnRWYWx1ZSl9XWA7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJncy50b1N0cmluZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdHJpbmdpZnkoYXJnOiBhbnkpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNhY2hlID0gW107XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KFxuICAgICAgICBhcmcgaW5zdGFuY2VvZiBFcnJvciA/IHRoaXMudG9TdHJpbmcoYXJnKSA6IGFyZyxcbiAgICAgICAgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICBpZiAoISF2YWx1ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgaWYgKGNhY2hlLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICByZXR1cm4gJzxyZWN1cnNpdmU+JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FjaGUucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICAyXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAnW29iamVjdCBpbnZhbGlkIEpTT04uc3RyaW5naWZ5XSc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXBsYWNlQXJndW1lbnQoYXJndW1lbnQ6IGFueSwgcmVwbGFjZVBsYWNlaG9sZGVyc1N0cmluZzogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcmVwbGFjZVBsYWNlaG9sZGVyc1N0cmluZy5zdWJzdHJpbmcoMCwgaW5kZXgpICsgdGhpcy50b1N0cmluZyhhcmd1bWVudCkgKyByZXBsYWNlUGxhY2Vob2xkZXJzU3RyaW5nLnN1YnN0cmluZyhpbmRleCArIDIpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b1N0cmluZyhkYXRhOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm4gZGF0YSA/ICd0cnVlJyA6ICdmYWxzZSc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBsZXQgdG9TdHJpbmdTdHIgPSAnJztcblxuICAgIGlmIChkYXRhKSB7XG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdG9TdHJpbmdTdHIgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICB9IGVsc2UgaWYgKGRhdGEgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0b1N0cmluZ1N0ciA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRvU3RyaW5nU3RyID0gJ1tvYmplY3QgaW52YWxpZCB0b1N0cmluZygpXSc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9TdHJpbmdTdHI7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihjYXRlZ29yeTogc3RyaW5nLCBhcHBlbmRlcnM6IEFwcGVuZGVycywgdGhyZXNob2xkOiBMb2dnaW5nVGhyZXNob2xkKSB7XG4gICAgdGhpcy5fY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICB0aGlzLl9hcHBlbmRlcnMgPSBhcHBlbmRlcnM7XG4gICAgdGhpcy5fdGhyZXNob2xkID0gdGhyZXNob2xkO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQgUHJpdmFjeU1vZGUgZnJvbSAnLi4vZG9tL1ByaXZhY3lNb2RlJztcbmltcG9ydCB7TG9nZ2luZ0xldmVsfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyRGVmYXVsdHMge1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRMb2dnaW5nTGV2ZWwoKTogTG9nZ2luZ0xldmVsIHtcbiAgICByZXR1cm4gUHJpdmFjeU1vZGUuaXNQcml2YXRlID8gTG9nZ2luZ0xldmVsLk9mZiA6IExvZ2dpbmdMZXZlbC5BbGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGRlZmF1bHRDb25zb2xlTG9nZ2luZ0xldmVsKCk6IExvZ2dpbmdMZXZlbCB7XG4gICAgcmV0dXJuIFByaXZhY3lNb2RlLmlzUHJpdmF0ZSA/IExvZ2dpbmdMZXZlbC5PZmYgOiBMb2dnaW5nTGV2ZWwuQWxsO1xuICB9XG5cbiAgc3RhdGljIGdldCBkZWZhdWx0VGVsZW1ldHJ5TG9nZ2luZ0xldmVsKCk6IExvZ2dpbmdMZXZlbCB7XG4gICAgcmV0dXJuIExvZ2dpbmdMZXZlbC5JbmZvO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQge0lMb2dnZXJ9IGZyb20gJy4vTG9nZ2VySW50ZXJmYWNlJztcbmltcG9ydCBMb2dnZXIsIHtMb2dnaW5nTGV2ZWx9IGZyb20gJy4vTG9nZ2VyJztcbmltcG9ydCBBcHBlbmRlcnMgZnJvbSAnLi9BcHBlbmRlcnMnO1xuaW1wb3J0IExvZ2dpbmdUaHJlc2hvbGQgZnJvbSAnLi9Mb2dnaW5nVGhyZXNob2xkJztcbmltcG9ydCBDb25zb2xlQXBwZW5kZXIgZnJvbSAnLi9Db25zb2xlQXBwZW5kZXInO1xuaW1wb3J0IFRlbGVtZXRyeUFwcGVuZGVyIGZyb20gJy4uL3RlbGVtZXRyeS9UZWxlbWV0cnlBcGVuZGVyJztcbmltcG9ydCBUZWxlbWV0cnlDb25maWd1cmF0aW9uIGZyb20gJy4uL3RlbGVtZXRyeS9UZWxlbWV0cnlDb25maWd1cmF0aW9uJztcbmltcG9ydCBDb25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyIGZyb20gJy4uL2RvbS9Db25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyJztcbmltcG9ydCB7SUNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXJ9IGZyb20gJy4uL2RvbS9JQ29uZmlndXJhdGlvblBhcmFtYXRlclJlYWRlcic7XG5pbXBvcnQgTG9nZ2VyRGVmYXVsdHMgZnJvbSAnLi9Mb2dnZXJEZWZhdWx0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlckZhY3Rvcnkge1xuICBwcml2YXRlIHN0YXRpYyBfY29uZmlndXJhdGlvblBhcmFtZXRlclJlYWRlcjogSUNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXIgPSBuZXcgQ29uZmlndXJhdGlvblBhcmFtZXRlclJlYWRlcigpO1xuICBwcml2YXRlIHN0YXRpYyBfbG9nZ2Vyczoge1tjYXRlZ29yeTogc3RyaW5nXTogSUxvZ2dlcn0gPSB7fTtcbiAgcHJpdmF0ZSBzdGF0aWMgX2FwcGVuZGVyczogQXBwZW5kZXJzID0gbmV3IEFwcGVuZGVycygpO1xuICBwcml2YXRlIHN0YXRpYyBfdGhyZXNob2xkOiBMb2dnaW5nVGhyZXNob2xkID0gbmV3IExvZ2dpbmdUaHJlc2hvbGQoKTtcbiAgcHJpdmF0ZSBzdGF0aWMgX3RlbGVtZXRyeUNvbmZpZ3VyYXRpb246IFRlbGVtZXRyeUNvbmZpZ3VyYXRpb24gPSBuZXcgVGVsZW1ldHJ5Q29uZmlndXJhdGlvbigpO1xuXG4gIHN0YXRpYyBnZXQgdGVsZW1ldHJ5Q29uZmlndXJhdGlvbigpOiBUZWxlbWV0cnlDb25maWd1cmF0aW9uIHtcbiAgICByZXR1cm4gTG9nZ2VyRmFjdG9yeS5fdGVsZW1ldHJ5Q29uZmlndXJhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBnZXRMb2dnZXIoY2F0ZWdvcnk6IHN0cmluZyk6IElMb2dnZXIge1xuICAgIGlmICh0eXBlb2YgY2F0ZWdvcnkgIT09ICdzdHJpbmcnKSB7XG4gICAgICBjYXRlZ29yeSA9ICdTREsnO1xuICAgIH1cblxuICAgIGNvbnN0IGxvZ2dlciA9IExvZ2dlckZhY3RvcnkuX2xvZ2dlcnNbY2F0ZWdvcnldO1xuXG4gICAgaWYgKGxvZ2dlcikge1xuICAgICAgcmV0dXJuIGxvZ2dlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gTG9nZ2VyRmFjdG9yeS5fbG9nZ2Vyc1tjYXRlZ29yeV0gPSBuZXcgTG9nZ2VyKGNhdGVnb3J5LCB0aGlzLl9hcHBlbmRlcnMsIHRoaXMuX3RocmVzaG9sZCk7XG4gIH1cblxuICBzdGF0aWMgYXBwbHlMb2dnZXJDb25maWdGcm9tUGFyYW1ldGVyQ29uZmlndXJhdGlvbigpOiB2b2lkIHtcbiAgICBMb2dnZXJGYWN0b3J5LmFwcGx5TG9nZ2luZ0xldmVsKCk7XG4gICAgTG9nZ2VyRmFjdG9yeS5hcHBseUFwcGVuZGVyTG9nZ2luZ0xldmVsKCdjb25zb2xlJywgTG9nZ2VyRmFjdG9yeS5hcHBseUNvbnNvbGVMb2dnZXIuYmluZCh0aGlzKSk7XG4gICAgTG9nZ2VyRmFjdG9yeS5hcHBseUFwcGVuZGVyTG9nZ2luZ0xldmVsKCd0ZWxlbWV0cnknLCBMb2dnZXJGYWN0b3J5LmFwcGx5VGVsZW1ldHJ5TG9nZ2VyLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgYXBwbHlMb2dnaW5nTGV2ZWwoKTogdm9pZCB7XG4gICAgY29uc3QgcGFyYW1ldGVyVmFsdWUgPSB0aGlzLl9jb25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyLmdldFN0cmluZ1ZhbHVlKCdwaGVuaXgtbG9nZ2luZy1sZXZlbCcpO1xuXG4gICAgaWYgKExvZ2dpbmdMZXZlbFtwYXJhbWV0ZXJWYWx1ZV0pIHtcbiAgICAgIHRoaXMuX3RocmVzaG9sZC5zZXRUaHJlc2hvbGQoTG9nZ2luZ0xldmVsW3BhcmFtZXRlclZhbHVlXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgYXBwbHlBcHBlbmRlckxvZ2dpbmdMZXZlbChuYW1lOiBzdHJpbmcsIGFwcGx5QXBwZW5kZXI6IChsZXZlbDogTG9nZ2luZ0xldmVsKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgY29uc3QgcGFyYW1ldGVyVmFsdWUgPSB0aGlzLl9jb25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyLmdldFN0cmluZ1ZhbHVlKGBwaGVuaXgtJHtuYW1lfS1sb2dnaW5nLWxldmVsYCk7XG5cbiAgICBpZiAocGFyYW1ldGVyVmFsdWUgPT09ICdPZmYnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXBwbHlBcHBlbmRlcihMb2dnaW5nTGV2ZWxbcGFyYW1ldGVyVmFsdWVdKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGFwcGx5Q29uc29sZUxvZ2dlcihsZXZlbDogTG9nZ2luZ0xldmVsKTogdm9pZCB7XG4gICAgdGhpcy5fYXBwZW5kZXJzLmFkZChuZXcgQ29uc29sZUFwcGVuZGVyKGxldmVsIHx8IExvZ2dlckRlZmF1bHRzLmRlZmF1bHRDb25zb2xlTG9nZ2luZ0xldmVsKSk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBhcHBseVRlbGVtZXRyeUxvZ2dlcihsZXZlbDogTG9nZ2luZ0xldmVsKTogdm9pZCB7XG4gICAgdGhpcy5fdGVsZW1ldHJ5Q29uZmlndXJhdGlvbi50aHJlc2hvbGQgPSBsZXZlbCB8fCBMb2dnZXJEZWZhdWx0cy5kZWZhdWx0VGVsZW1ldHJ5TG9nZ2luZ0xldmVsO1xuXG4gICAgdGhpcy5fYXBwZW5kZXJzLmFkZChuZXcgVGVsZW1ldHJ5QXBwZW5kZXIodGhpcy5fdGVsZW1ldHJ5Q29uZmlndXJhdGlvbikpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvZ2dlckZhY3RvcnkgaXMgYSBzdGF0aWMgY2xhc3MgdGhhdCBtYXkgbm90IGJlIGluc3RhbnRpYXRlZCcpO1xuICB9XG59XG5cbkxvZ2dlckZhY3RvcnkuYXBwbHlMb2dnZXJDb25maWdGcm9tUGFyYW1ldGVyQ29uZmlndXJhdGlvbigpOyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IGFzc2VydFVucmVhY2hhYmxlIGZyb20gJy4uL2xhbmcvYXNzZXJ0VW5yZWFjaGFibGUnO1xuaW1wb3J0IHtMb2dnaW5nTGV2ZWwsIExvZ2dpbmdMZXZlbFR5cGV9IGZyb20gJy4vTG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2luZ0xldmVsTWFwcGluZyB7XG4gIHN0YXRpYyBjb252ZXJ0TG9nZ2luZ0xldmVsVG9Mb2dnaW5nTGV2ZWxUeXBlKGxvZ2dpbmdMZXZlbDogTG9nZ2luZ0xldmVsKTogTG9nZ2luZ0xldmVsVHlwZSB7XG4gICAgc3dpdGNoIChsb2dnaW5nTGV2ZWwpIHtcbiAgICAgIGNhc2UgTG9nZ2luZ0xldmVsLk9mZjpcbiAgICAgICAgcmV0dXJuICdPZmYnO1xuICAgICAgY2FzZSBMb2dnaW5nTGV2ZWwuVHJhY2U6XG4gICAgICAgIHJldHVybiAnVHJhY2UnO1xuICAgICAgY2FzZSBMb2dnaW5nTGV2ZWwuRGVidWc6XG4gICAgICAgIHJldHVybiAnRGVidWcnO1xuICAgICAgY2FzZSBMb2dnaW5nTGV2ZWwuSW5mbzpcbiAgICAgICAgcmV0dXJuICdUcmFjZSc7XG4gICAgICBjYXNlIExvZ2dpbmdMZXZlbC5XYXJuOlxuICAgICAgICByZXR1cm4gJ1dhcm4nO1xuICAgICAgY2FzZSBMb2dnaW5nTGV2ZWwuRXJyb3I6XG4gICAgICAgIHJldHVybiAnRXJyb3InO1xuICAgICAgY2FzZSBMb2dnaW5nTGV2ZWwuRmF0YWw6XG4gICAgICAgIHJldHVybiAnRmF0YWwnO1xuICAgICAgY2FzZSBMb2dnaW5nTGV2ZWwuQWxsOlxuICAgICAgICByZXR1cm4gJ0FsbCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhc3NlcnRVbnJlYWNoYWJsZShsb2dnaW5nTGV2ZWwpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjb252ZXJ0TG9nZ2luZ0xldmVsVHlwZVRvTG9nZ2luZ0xldmVsKGxvZ2dpbmdMZXZlbFR5cGU6IExvZ2dpbmdMZXZlbFR5cGUpOiBMb2dnaW5nTGV2ZWwge1xuICAgIHN3aXRjaCAobG9nZ2luZ0xldmVsVHlwZSkge1xuICAgICAgY2FzZSAnT2ZmJzpcbiAgICAgICAgcmV0dXJuIExvZ2dpbmdMZXZlbC5PZmY7XG4gICAgICBjYXNlICdUcmFjZSc6XG4gICAgICAgIHJldHVybiBMb2dnaW5nTGV2ZWwuVHJhY2U7XG4gICAgICBjYXNlICdEZWJ1Zyc6XG4gICAgICAgIHJldHVybiBMb2dnaW5nTGV2ZWwuRGVidWc7XG4gICAgICBjYXNlICdJbmZvJzpcbiAgICAgICAgcmV0dXJuIExvZ2dpbmdMZXZlbC5JbmZvO1xuICAgICAgY2FzZSAnV2Fybic6XG4gICAgICAgIHJldHVybiBMb2dnaW5nTGV2ZWwuV2FybjtcbiAgICAgIGNhc2UgJ0Vycm9yJzpcbiAgICAgICAgcmV0dXJuIExvZ2dpbmdMZXZlbC5FcnJvcjtcbiAgICAgIGNhc2UgJ0ZhdGFsJzpcbiAgICAgICAgcmV0dXJuIExvZ2dpbmdMZXZlbC5GYXRhbDtcbiAgICAgIGNhc2UgJ0FsbCc6XG4gICAgICAgIHJldHVybiBMb2dnaW5nTGV2ZWwuQWxsO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXNzZXJ0VW5yZWFjaGFibGUobG9nZ2luZ0xldmVsVHlwZSk7XG4gICAgfVxuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQgTG9nZ2VyRGVmYXVsdHMgZnJvbSAnLi9Mb2dnZXJEZWZhdWx0cyc7XG5pbXBvcnQge0xvZ2dpbmdMZXZlbH0gZnJvbSAnLi9Mb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnaW5nVGhyZXNob2xkIHtcbiAgcHJpdmF0ZSBfdGhyZXNob2xkOiBMb2dnaW5nTGV2ZWwgPSBMb2dnZXJEZWZhdWx0cy5kZWZhdWx0TG9nZ2luZ0xldmVsO1xuXG4gIGdldCB2YWx1ZSgpOiBMb2dnaW5nTGV2ZWwge1xuICAgIHJldHVybiB0aGlzLl90aHJlc2hvbGQ7XG4gIH1cblxuICBzZXRUaHJlc2hvbGQodGhyZXNob2xkOiBMb2dnaW5nTGV2ZWwpOiB2b2lkIHtcbiAgICB0aGlzLl90aHJlc2hvbGQgPSB0aHJlc2hvbGQ7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCB7VGVsZW1ldHJ5TGV2ZWx9IGZyb20gJy4vTWV0cmljc0NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IGFzc2VydFVucmVhY2hhYmxlIGZyb20gJy4uL2xhbmcvYXNzZXJ0VW5yZWFjaGFibGUnO1xuaW1wb3J0IE1ldHJpY3NUeXBlIGZyb20gJy4vTWV0cmljc1R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRyaWNUeXBlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfbWV0cmljczogTWV0cmljc1R5cGU7XG5cbiAgY29uc3RydWN0b3IobWV0cmljczogTWV0cmljc1R5cGUpIHtcbiAgICB0aGlzLl9tZXRyaWNzID0gbWV0cmljcztcbiAgfVxuXG4gIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gTWV0cmljc1R5cGVbdGhpcy5fbWV0cmljc107XG4gIH1cblxuICBnZXRUZWxlbWV0cnlMZXZlbCgpOiBUZWxlbWV0cnlMZXZlbCB7XG4gICAgc3dpdGNoICh0aGlzLl9tZXRyaWNzKSB7XG4gICAgICBjYXNlIE1ldHJpY3NUeXBlLlRpbWVUb0ZpcnN0RnJhbWU6XG4gICAgICAgIHJldHVybiBUZWxlbWV0cnlMZXZlbC5Fc3NlbnRpYWw7XG4gICAgICBjYXNlIE1ldHJpY3NUeXBlLkNoYW5uZWxDcmVhdGlvblRpbWVUb0ZpcnN0RnJhbWU6XG4gICAgICAgIHJldHVybiBUZWxlbWV0cnlMZXZlbC5Fc3NlbnRpYWw7XG4gICAgICBjYXNlIE1ldHJpY3NUeXBlLlN0YWxsZWQ6XG4gICAgICAgIHJldHVybiBUZWxlbWV0cnlMZXZlbC5BbGw7XG4gICAgICBjYXNlIE1ldHJpY3NUeXBlLkJ1ZmZlcmluZzpcbiAgICAgICAgcmV0dXJuIFRlbGVtZXRyeUxldmVsLkFsbDtcbiAgICAgIGNhc2UgTWV0cmljc1R5cGUuU2V0dXBDb21wbGV0ZWQ6XG4gICAgICAgIHJldHVybiBUZWxlbWV0cnlMZXZlbC5BbGw7XG4gICAgICBjYXNlIE1ldHJpY3NUeXBlLlNldHVwRmFpbGVkOlxuICAgICAgICByZXR1cm4gVGVsZW1ldHJ5TGV2ZWwuQWxsO1xuICAgICAgY2FzZSBNZXRyaWNzVHlwZS5Sb3VuZFRyaXBUaW1lOlxuICAgICAgICByZXR1cm4gVGVsZW1ldHJ5TGV2ZWwuQWxsO1xuICAgICAgY2FzZSBNZXRyaWNzVHlwZS5Eb3dubGlua1Rocm91Z2hwdXRDYXBhY2l0eTpcbiAgICAgICAgcmV0dXJuIFRlbGVtZXRyeUxldmVsLkFsbDtcbiAgICAgIGNhc2UgTWV0cmljc1R5cGUuTmV0d29ya1R5cGU6XG4gICAgICAgIHJldHVybiBUZWxlbWV0cnlMZXZlbC5BbGw7XG4gICAgICBjYXNlIE1ldHJpY3NUeXBlLlJlc29sdXRpb25DaGFuZ2VkOlxuICAgICAgICByZXR1cm4gVGVsZW1ldHJ5TGV2ZWwuQWxsO1xuICAgICAgY2FzZSBNZXRyaWNzVHlwZS5BcHBsaWNhdGlvbkZvcmVncm91bmQ6XG4gICAgICAgIHJldHVybiBUZWxlbWV0cnlMZXZlbC5BbGw7XG4gICAgICBjYXNlIE1ldHJpY3NUeXBlLkFwcGxpY2F0aW9uQmFja2dyb3VuZDpcbiAgICAgICAgcmV0dXJuIFRlbGVtZXRyeUxldmVsLkFsbDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFzc2VydFVucmVhY2hhYmxlKHRoaXMuX21ldHJpY3MpO1xuICAgIH1cbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IFRlbGVtZXRyeURlZmF1bHQgZnJvbSAnLi9UZWxlbWV0cnlEZWZhdWx0JztcblxuZXhwb3J0IGVudW0gVGVsZW1ldHJ5TGV2ZWwge1xuICBPZmYgPSAxMDAsXG4gIEVzc2VudGlhbCA9IDEwLFxuICBBbGwgPSAtMVxufVxuXG5leHBvcnQgdHlwZSBUZWxlbWV0cnlMZXZlbFR5cGUgPSAnT2ZmJyB8ICdFc3NlbnRpYWwnIHwgJ0FsbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldHJpY3NDb25maWd1cmF0aW9uIHtcbiAgcHJpdmF0ZSBfdXJsID0gJ2h0dHBzOi8vdGVsZW1ldHJ5LnBoZW5peHJ0cy5jb20vdGVsZW1ldHJ5L21ldHJpY3MnO1xuICBwcml2YXRlIF90ZW5hbmN5OiBzdHJpbmc7XG4gIHByaXZhdGUgX3Nlc3Npb25JZDogc3RyaW5nO1xuICBwcml2YXRlIF9lbnZpcm9ubWVudDogc3RyaW5nO1xuICBwcml2YXRlIF90aHJlc2hvbGQ6IFRlbGVtZXRyeUxldmVsID0gVGVsZW1ldHJ5RGVmYXVsdC5kZWZhdWx0VGVsZW1ldHJ5TGV2ZWw7XG5cbiAgZ2V0IHVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl91cmw7XG4gIH1cblxuICBzZXQgdXJsKHVybDogc3RyaW5nKSB7XG4gICAgY29uc3QgbWV0cmljc1VybCA9IG5ldyBVUkwodXJsKTtcblxuICAgIG1ldHJpY3NVcmwucGF0aG5hbWUgPSBtZXRyaWNzVXJsLnBhdGhuYW1lICsgJy9tZXRyaWNzJztcblxuICAgIHRoaXMuX3VybCA9IG1ldHJpY3NVcmwudG9TdHJpbmcoKTtcbiAgfVxuXG4gIGdldCBlbnZpcm9ubWVudCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9lbnZpcm9ubWVudDtcbiAgfVxuXG4gIHNldCBlbnZpcm9ubWVudChlbnZpcm9ubWVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcbiAgfVxuXG4gIGdldCB0ZW5hbmN5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbmFuY3k7XG4gIH1cblxuICBzZXQgdGVuYW5jeSh0ZW5hbmN5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl90ZW5hbmN5ID0gdGVuYW5jeTtcbiAgfVxuXG4gIGdldCBzZXNzaW9uSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbklkO1xuICB9XG5cbiAgc2V0IHNlc3Npb25JZChzZXNzaW9uSWQ6IHN0cmluZykge1xuICAgIHRoaXMuX3Nlc3Npb25JZCA9IHNlc3Npb25JZDtcbiAgfVxuXG4gIGdldCB0aHJlc2hvbGQoKTogVGVsZW1ldHJ5TGV2ZWwge1xuICAgIHJldHVybiB0aGlzLl90aHJlc2hvbGQ7XG4gIH1cblxuICBzZXQgdGhyZXNob2xkKHRocmVzaG9sZDogVGVsZW1ldHJ5TGV2ZWwpIHtcbiAgICB0aGlzLl90aHJlc2hvbGQgPSB0aHJlc2hvbGQ7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IE1ldHJpY3NTZXJ2aWNlIGZyb20gJy4vTWV0cmljc1NlcnZpY2UnO1xuaW1wb3J0IE1ldHJpY3NDb25maWd1cmF0aW9uLCB7VGVsZW1ldHJ5TGV2ZWx9IGZyb20gJy4vTWV0cmljc0NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IFNESyBmcm9tICcuLi9zZGsvU0RLJztcbmltcG9ydCBUZWxlbWV0cnlVcmwgZnJvbSAnLi4vc2RrL1RlbGVtZXRyeVVybCc7XG5pbXBvcnQgRW52aXJvbm1lbnQgZnJvbSAnLi4vc2RrL0Vudmlyb25tZW50JztcbmltcG9ydCBUZWxlbWV0cnlMZXZlbE1hcHBpbmcgZnJvbSAnLi9UZWxlbWV0cmljTGV2ZWxNYXBwaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0cmljc0ZhY3Rvcnkge1xuICBwcml2YXRlIHN0YXRpYyBfbWV0cmljc1NlcnZpY2VzOiB7W2NhdGVnb3J5OiBzdHJpbmddOiBNZXRyaWNzU2VydmljZX0gPSB7fTtcblxuICBzdGF0aWMgZ2V0TWV0cmljc1NlcnZpY2UodXJsOiBzdHJpbmcpOiBNZXRyaWNzU2VydmljZSB7XG4gICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VyJyk7XG4gICAgfVxuXG4gICAgY29uc3QgbWV0cmljc1NlcnZpY2VzID0gTWV0cmljc0ZhY3RvcnkuX21ldHJpY3NTZXJ2aWNlc1t1cmxdO1xuXG4gICAgaWYgKG1ldHJpY3NTZXJ2aWNlcykge1xuICAgICAgcmV0dXJuIG1ldHJpY3NTZXJ2aWNlcztcbiAgICB9XG5cbiAgICBjb25zdCBtZXRyaWNzQ29uZmlndXJhdGlvbiA9IG5ldyBNZXRyaWNzQ29uZmlndXJhdGlvbigpO1xuXG4gICAgbWV0cmljc0NvbmZpZ3VyYXRpb24uc2Vzc2lvbklkID0gU0RLLmNsaWVudFNlc3Npb25JZDtcbiAgICBtZXRyaWNzQ29uZmlndXJhdGlvbi50ZW5hbmN5ID0gU0RLLnRlbmFuY3kudmFsdWU7XG4gICAgbWV0cmljc0NvbmZpZ3VyYXRpb24udXJsID0gVGVsZW1ldHJ5VXJsLmdldFRlbGVtZXRyeVVybCh1cmwpO1xuICAgIG1ldHJpY3NDb25maWd1cmF0aW9uLmVudmlyb25tZW50ID0gRW52aXJvbm1lbnQuZ2V0RW52aXJvbm1lbnRGcm9tVXJsKHVybCk7XG5cbiAgICBtZXRyaWNzQ29uZmlndXJhdGlvbi50aHJlc2hvbGQgPSBUZWxlbWV0cnlMZXZlbE1hcHBpbmcuY29udmVydFRlbGVtZXRyeUxldmVsVHlwZVRvVGVsZW1ldHJ5TGV2ZWwoU0RLLnRlbGVtZXRyeUxldmVsKTtcblxuICAgIHJldHVybiBNZXRyaWNzRmFjdG9yeS5fbWV0cmljc1NlcnZpY2VzW3VybF0gPSBuZXcgTWV0cmljc1NlcnZpY2UobWV0cmljc0NvbmZpZ3VyYXRpb24pO1xuICB9XG5cbiAgc3RhdGljIHNldFRlbGVtZXRyeUxldmVsKHRlbGVtZXRyeUxldmVsOiBUZWxlbWV0cnlMZXZlbCk6IHZvaWQge1xuICAgIGNvbnN0IG1ldHJpY3NTZXJ2aWNlcyA9IE9iamVjdC52YWx1ZXMoTWV0cmljc0ZhY3RvcnkuX21ldHJpY3NTZXJ2aWNlcyk7XG5cbiAgICBpZiAobWV0cmljc1NlcnZpY2VzICYmIG1ldHJpY3NTZXJ2aWNlcy5sZW5ndGgpIHtcbiAgICAgIG1ldHJpY3NTZXJ2aWNlcy5mb3JFYWNoKG1ldHJpY3NTZXJ2aWNlID0+IHtcbiAgICAgICAgY29uc3QgbWV0cmljc0NvbmZpZ3VyYXRpb24gPSBtZXRyaWNzU2VydmljZS5tZXRyaWNzQ29uZmlndXJhdGlvbjtcblxuICAgICAgICBtZXRyaWNzQ29uZmlndXJhdGlvbi50aHJlc2hvbGQgPSB0ZWxlbWV0cnlMZXZlbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMb2dnZXJGYWN0b3J5IGlzIGEgc3RhdGljIGNsYXNzIHRoYXQgbWF5IG5vdCBiZSBpbnN0YW50aWF0ZWQnKTtcbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IFZlcnNpb25NYW5hZ2VyIGZyb20gJy4uL3Nkay92ZXJzaW9uL1ZlcnNpb25NYW5hZ2VyJztcbmltcG9ydCBNZXRyaWNzQ29uZmlndXJhdGlvbiBmcm9tICcuL01ldHJpY3NDb25maWd1cmF0aW9uJztcbmltcG9ydCBNZXRyaWNUeXBlIGZyb20gJy4vTWV0cmljVHlwZSc7XG5pbXBvcnQgTWV0cmljc1R5cGUgZnJvbSAnLi9NZXRyaWNzVHlwZSc7XG5cbmNvbnN0IHJlcXVlc3RTaXplTGltaXQgPSAxMDI0O1xuXG5pbnRlcmZhY2UgSVZhbHVlIHtcbiAgc3RyaW5nPzogc3RyaW5nO1xuICB1aW50NjQ/OiBudW1iZXI7XG4gIGZsb2F0PzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSU1ldHJpY1JlY29yZCB7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xuICB0ZW5hbmN5OiBzdHJpbmc7XG4gIHNlc3Npb25JZDogc3RyaW5nO1xuICBzdHJlYW1JZDogc3RyaW5nO1xuICBtZXRyaWM6IHN0cmluZztcbiAgdmFsdWU6IElWYWx1ZTtcbiAgcHJldmlvdXNWYWx1ZTogSVZhbHVlO1xuICBmdWxsUXVhbGlmaWVkTmFtZTogc3RyaW5nO1xuICBlbnZpcm9ubWVudDogc3RyaW5nO1xuICB2ZXJzaW9uOiBzdHJpbmc7XG4gIHJ1bnRpbWU6IG51bWJlcjtcbiAgcmVzb3VyY2U/OiBzdHJpbmc7XG4gIGtpbmQ/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJTWV0cmljIHtcbiAgc3RyZWFtSWQ/OiBzdHJpbmc7XG4gIG1ldHJpY1R5cGU6IE1ldHJpY3NUeXBlO1xuICB2YWx1ZT86IElWYWx1ZTtcbiAgcHJldmlvdXNWYWx1ZT86IElWYWx1ZTtcbiAgcnVudGltZTogbnVtYmVyO1xuICByZXNvdXJjZT86IHN0cmluZztcbiAga2luZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0cmljc1NlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IF9tZXRyaWNzQ29uZmlndXJhdGlvbjogTWV0cmljc0NvbmZpZ3VyYXRpb247XG4gIHByaXZhdGUgX21ldHJpY3M6IEFycmF5PElNZXRyaWNSZWNvcmQ+ID0gW107XG4gIHByaXZhdGUgX2lzU2VuZGluZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZG9tYWluID0gbG9jYXRpb24uaG9zdG5hbWU7XG5cbiAgY29uc3RydWN0b3IobWV0cmljc0NvbmZpZ3VyYXRpb246IE1ldHJpY3NDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fbWV0cmljc0NvbmZpZ3VyYXRpb24gPSBtZXRyaWNzQ29uZmlndXJhdGlvbjtcbiAgfVxuXG4gIGdldCBtZXRyaWNzQ29uZmlndXJhdGlvbigpOiBNZXRyaWNzQ29uZmlndXJhdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX21ldHJpY3NDb25maWd1cmF0aW9uO1xuICB9XG5cbiAgcHVzaChtZXRyaWM6IElNZXRyaWMpOiB2b2lkIHtcbiAgICBjb25zdCB7c3RyZWFtSWQsIHZhbHVlLCBwcmV2aW91c1ZhbHVlLCBydW50aW1lLCByZXNvdXJjZSwga2luZH0gPSBtZXRyaWM7XG4gICAgY29uc3QgbWV0cmljVHlwZSA9IG5ldyBNZXRyaWNUeXBlKG1ldHJpYy5tZXRyaWNUeXBlKTtcblxuICAgIGlmICh0aGlzLl9tZXRyaWNzQ29uZmlndXJhdGlvbi50aHJlc2hvbGQgPiBtZXRyaWNUeXBlLmdldFRlbGVtZXRyeUxldmVsKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtZXRyaWNSZWNvcmQgPSB7XG4gICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIHRlbmFuY3k6IHRoaXMuX21ldHJpY3NDb25maWd1cmF0aW9uLnRlbmFuY3ksXG4gICAgICBzZXNzaW9uSWQ6IHRoaXMuX21ldHJpY3NDb25maWd1cmF0aW9uLnNlc3Npb25JZCxcbiAgICAgIHN0cmVhbUlkLFxuICAgICAgbWV0cmljOiBtZXRyaWNUeXBlLmdldE5hbWUoKSxcbiAgICAgIHZhbHVlLFxuICAgICAgcHJldmlvdXNWYWx1ZSxcbiAgICAgIGZ1bGxRdWFsaWZpZWROYW1lOiB0aGlzLl9kb21haW4sXG4gICAgICBlbnZpcm9ubWVudDogdGhpcy5fbWV0cmljc0NvbmZpZ3VyYXRpb24uZW52aXJvbm1lbnQsXG4gICAgICB2ZXJzaW9uOiBWZXJzaW9uTWFuYWdlci5zZGtWZXJzaW9uLFxuICAgICAgcnVudGltZSxcbiAgICAgIHJlc291cmNlLFxuICAgICAga2luZFxuICAgIH07XG5cbiAgICB0aGlzLl9tZXRyaWNzLnB1c2gobWV0cmljUmVjb3JkKTtcblxuICAgIGNvbnN0IGlnbm9yZWQgPSB0aGlzLnNlbmRNZXRyaWNzSWZBYmxlKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNlbmRNZXRyaWNzKG1ldHJpY3NNZXNzYWdlczogQXJyYXk8SU1ldHJpY1JlY29yZD4pOiBQcm9taXNlPFJlc3BvbnNlIHwgdm9pZD4ge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2pzb25Cb2R5JywgSlNPTi5zdHJpbmdpZnkoe3JlY29yZHM6IG1ldHJpY3NNZXNzYWdlc30pKTtcblxuICAgIHJldHVybiBhd2FpdCBmZXRjaCh0aGlzLl9tZXRyaWNzQ29uZmlndXJhdGlvbi51cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogZm9ybURhdGFcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2VuZE1ldHJpY3NJZkFibGUoKTogUHJvbWlzZTxSZXNwb25zZSB8IHZvaWQ+IHtcbiAgICBpZiAodGhpcy5fbWV0cmljcy5sZW5ndGggPD0gMCB8fCB0aGlzLl9pc1NlbmRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9pc1NlbmRpbmcgPSB0cnVlO1xuXG4gICAgY29uc3QgbWV0cmljc01lc3NhZ2VzID0gdGhpcy5fbWV0cmljcy5zbGljZSgwLCByZXF1ZXN0U2l6ZUxpbWl0KTtcblxuICAgIHRoaXMuX21ldHJpY3MgPSB0aGlzLl9tZXRyaWNzLnNsaWNlKHJlcXVlc3RTaXplTGltaXQpO1xuXG4gICAgcmV0dXJuIHRoaXMuc2VuZE1ldHJpY3MobWV0cmljc01lc3NhZ2VzKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHRoaXMuX2lzU2VuZGluZyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBpZ25vcmVkID0gdGhpcy5zZW5kTWV0cmljc0lmQWJsZSgpO1xuXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgdGhpcy5faXNTZW5kaW5nID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IGlnbm9yZWQgPSB0aGlzLnNlbmRNZXRyaWNzSWZBYmxlKCk7XG4gICAgfSk7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmVudW0gTWV0cmljc1R5cGUge1xuICBUaW1lVG9GaXJzdEZyYW1lLFxuICBDaGFubmVsQ3JlYXRpb25UaW1lVG9GaXJzdEZyYW1lLFxuICBTdGFsbGVkLFxuICBCdWZmZXJpbmcsXG4gIFNldHVwQ29tcGxldGVkLFxuICBTZXR1cEZhaWxlZCxcbiAgUm91bmRUcmlwVGltZSxcbiAgRG93bmxpbmtUaHJvdWdocHV0Q2FwYWNpdHksXG4gIE5ldHdvcmtUeXBlLFxuICBSZXNvbHV0aW9uQ2hhbmdlZCxcbiAgQXBwbGljYXRpb25Gb3JlZ3JvdW5kLFxuICBBcHBsaWNhdGlvbkJhY2tncm91bmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWV0cmljc1R5cGU7IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQge1RlbGVtZXRyeUxldmVsLCBUZWxlbWV0cnlMZXZlbFR5cGV9IGZyb20gJy4vTWV0cmljc0NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IGFzc2VydFVucmVhY2hhYmxlIGZyb20gJy4uL2xhbmcvYXNzZXJ0VW5yZWFjaGFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWxlbWV0cnlMZXZlbE1hcHBpbmcge1xuICBzdGF0aWMgY29udmVydFRlbGVtZXRyeUxldmVsVG9UZWxlbWV0cnlMZXZlbFR5cGUodGVsZW1ldHJ5TGV2ZWw6IFRlbGVtZXRyeUxldmVsKTogVGVsZW1ldHJ5TGV2ZWxUeXBlIHtcbiAgICBzd2l0Y2ggKHRlbGVtZXRyeUxldmVsKSB7XG4gICAgICBjYXNlIFRlbGVtZXRyeUxldmVsLk9mZjpcbiAgICAgICAgcmV0dXJuICdPZmYnO1xuICAgICAgY2FzZSBUZWxlbWV0cnlMZXZlbC5Fc3NlbnRpYWw6XG4gICAgICAgIHJldHVybiAnRXNzZW50aWFsJztcbiAgICAgIGNhc2UgVGVsZW1ldHJ5TGV2ZWwuQWxsOlxuICAgICAgICByZXR1cm4gJ0FsbCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhc3NlcnRVbnJlYWNoYWJsZSh0ZWxlbWV0cnlMZXZlbCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNvbnZlcnRUZWxlbWV0cnlMZXZlbFR5cGVUb1RlbGVtZXRyeUxldmVsKHRlbGVtZXRyeUxldmVsVHlwZTogVGVsZW1ldHJ5TGV2ZWxUeXBlKTogVGVsZW1ldHJ5TGV2ZWwge1xuICAgIHN3aXRjaCAodGVsZW1ldHJ5TGV2ZWxUeXBlKSB7XG4gICAgICBjYXNlICdPZmYnOlxuICAgICAgICByZXR1cm4gVGVsZW1ldHJ5TGV2ZWwuT2ZmO1xuICAgICAgY2FzZSAnRXNzZW50aWFsJzpcbiAgICAgICAgcmV0dXJuIFRlbGVtZXRyeUxldmVsLkVzc2VudGlhbDtcbiAgICAgIGNhc2UgJ0FsbCc6XG4gICAgICAgIHJldHVybiBUZWxlbWV0cnlMZXZlbC5BbGw7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhc3NlcnRVbnJlYWNoYWJsZSh0ZWxlbWV0cnlMZXZlbFR5cGUpO1xuICAgIH1cbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IFByaXZhY3lNb2RlIGZyb20gJy4uL2RvbS9Qcml2YWN5TW9kZSc7XG5pbXBvcnQge1RlbGVtZXRyeUxldmVsfSBmcm9tICcuLi9tZXRyaWNzL01ldHJpY3NDb25maWd1cmF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVsZW1ldHJ5RGVmYXVsdCB7XG4gIHN0YXRpYyBnZXQgZGVmYXVsdFRlbGVtZXRyeUxldmVsKCk6IFRlbGVtZXRyeUxldmVsIHtcbiAgICByZXR1cm4gUHJpdmFjeU1vZGUuaXNQcml2YXRlID8gVGVsZW1ldHJ5TGV2ZWwuRXNzZW50aWFsIDogVGVsZW1ldHJ5TGV2ZWwuQWxsO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQgUHJvbWlzZUhhbmRsZXIgZnJvbSAnLi9Qcm9taXNlSGFuZGxlcic7XG5cbmNsYXNzIFByb21pc2Uge1xuICBfc3RhdGU6IG51bWJlcjtcbiAgX2hhbmRsZWQ6IGJvb2xlYW47XG4gIF92YWx1ZTogUHJvbWlzZTtcbiAgX2RlZmVycmVkczogQXJyYXk8UHJvbWlzZUhhbmRsZXI+O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gIC8vIEB0cy1pZ25vcmVcbiAgdGhlbihvbkZ1bGZpbGxlZDogRnVuY3Rpb24sIG9uUmVqZWN0ZWQ6IEZ1bmN0aW9uKTogUHJvbWlzZSB8IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoY2FsbGJhY2spIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ldycpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ25vdCBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhdGUgPSAwO1xuICAgIHRoaXMuX2hhbmRsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9kZWZlcnJlZHMgPSBbXTtcblxuICAgIHRoaXMuZG9SZXNvbHZlKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGRvUmVzb2x2ZShjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBsZXQgZG9uZSA9IGZhbHNlO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNhbGxiYWNrKFxuICAgICAgICB2YWx1ZSA9PiB7XG4gICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnByb21pc2VSZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVhc29uID0+IHtcbiAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMucHJvbWlzZVJlamVjdChyZWFzb24pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZG9uZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgdGhpcy5wcm9taXNlUmVqZWN0KGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBwcm9taXNlUmVzb2x2ZShuZXdWYWx1ZTogUHJvbWlzZSB8IHVuZGVmaW5lZCk6IHZvaWQge1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzIGFzIFByb21pc2U7XG5cbiAgICB0cnkge1xuICAgICAgLy8gUHJvbWlzZSBSZXNvbHV0aW9uIFByb2NlZHVyZTogaHR0cHM6Ly9naXRodWIuY29tL1Byb21pc2VzLWFwbHVzL1Byb21pc2VzLXNwZWMjdGhlLVByb21pc2UtcmVzb2x1dGlvbi1wcm9jZWR1cmVcbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gcHJvbWlzZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBIFByb21pc2UgY2Fubm90IGJlIHJlc29sdmVkIHdpdGggaXQgc2VsZi4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5ld1ZhbHVlICYmICh0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgY29uc3QgdGhlbiA9IG5ld1ZhbHVlLnRoZW47XG5cbiAgICAgICAgaWYgKG5ld1ZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgIHByb21pc2UuX3N0YXRlID0gMztcbiAgICAgICAgICBwcm9taXNlLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgIHByb21pc2UuZmluYWxlKCk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBwcm9taXNlLmRvUmVzb2x2ZShmdW5jdGlvbigpOiB2b2lkIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICAgICAgICAgIHRoZW4uYXBwbHkobmV3VmFsdWUsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJvbWlzZS5fc3RhdGUgPSAxO1xuICAgICAgcHJvbWlzZS5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIHByb21pc2UuZmluYWxlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcHJvbWlzZS5wcm9taXNlUmVqZWN0KGUpO1xuICAgIH1cbiAgfVxuXG4gIHByb21pc2VSZWplY3QobmV3VmFsdWU6IFByb21pc2UgfCB1bmRlZmluZWQpOiB2b2lkIHtcbiAgICB0aGlzLl9zdGF0ZSA9IDI7XG4gICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB0aGlzLmZpbmFsZSgpO1xuICB9XG5cbiAgZmluYWxlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gMiAmJiB0aGlzLl9kZWZlcnJlZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBQcm9taXNlLl9pbW1lZGlhdGUoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2hhbmRsZWQpIHtcbiAgICAgICAgICBQcm9taXNlLl91bmhhbmRsZWRSZWplY3Rpb24odGhpcy5fdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5fZGVmZXJyZWRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0aGlzLmhhbmRsZSh0aGlzLl9kZWZlcnJlZHNbaV0pO1xuICAgIH1cblxuICAgIHRoaXMuX2RlZmVycmVkcyA9IG51bGw7XG4gIH1cblxuICBoYW5kbGUoZGVmZXJyZWQ6IFByb21pc2VIYW5kbGVyKTogdm9pZCB7XG4gICAgbGV0IHByb21pc2UgPSB0aGlzIGFzIFByb21pc2U7XG5cbiAgICB3aGlsZSAocHJvbWlzZS5fc3RhdGUgPT09IDMpIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlLl92YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvbWlzZS5fc3RhdGUgPT09IDApIHtcbiAgICAgIHByb21pc2UuX2RlZmVycmVkcy5wdXNoKGRlZmVycmVkKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByb21pc2UuX2hhbmRsZWQgPSB0cnVlO1xuICAgIFByb21pc2UuX2ltbWVkaWF0ZSgoKSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IHByb21pc2UuX3N0YXRlID09PSAxID8gZGVmZXJyZWQub25GdWxmaWxsZWQgOiBkZWZlcnJlZC5vblJlamVjdGVkO1xuXG4gICAgICBpZiAoY2FsbGJhY2sgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHByb21pc2UuX3N0YXRlID09PSAxKSB7XG4gICAgICAgICAgZGVmZXJyZWQucHJvbWlzZS5wcm9taXNlUmVzb2x2ZShwcm9taXNlLl92YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVmZXJyZWQucHJvbWlzZS5wcm9taXNlUmVqZWN0KHByb21pc2UuX3ZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2socHJvbWlzZS5fdmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBkZWZlcnJlZC5wcm9taXNlLnByb21pc2VSZWplY3QoZSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBkZWZlcnJlZC5wcm9taXNlLnByb21pc2VSZXNvbHZlKHJlc3VsdCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYWxsKGFycjogQXJyYXk8UHJvbWlzZT4pOiBQcm9taXNlIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgVHlwZUVycm9yKCdQcm9taXNlLmFsbCBhY2NlcHRzIGFuIGFycmF5JykpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyKTtcblxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKFtdKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHJlbWFpbmluZyA9IGFyZ3MubGVuZ3RoO1xuICAgICAgY29uc3QgbWFuYWdlUmVzcG9uc2UgPSAoaSwgdmFsdWUpOiB2b2lkID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAodmFsdWUgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICAgICAgY29uc3QgdGhlbiA9IHZhbHVlLnRoZW47XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB0aGVuLmNhbGwoXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgdmFsdWUgPT4gbWFuYWdlUmVzcG9uc2UoaSwgdmFsdWUpLFxuICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhcmdzW2ldID0gdmFsdWU7XG5cbiAgICAgICAgICBpZiAoLS1yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgICAgIHJlc29sdmUoYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBtYW5hZ2VSZXNwb25zZShpLCBhcmdzW2ldKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyByZXNvbHZlKHZhbHVlKTogUHJvbWlzZSB7XG4gICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IFByb21pc2UpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiByZXNvbHZlKHZhbHVlKSk7XG4gIH1cblxuICBzdGF0aWMgcmVqZWN0KHZhbHVlKTogUHJvbWlzZSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChfLCByZWplY3QpID0+IHJlamVjdCh2YWx1ZSkpO1xuICB9XG5cbiAgc3RhdGljIHJhY2UoYXJyOiBBcnJheTxQcm9taXNlPik6IFByb21pc2Uge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ1Byb21pc2UucmFjZSBhY2NlcHRzIGFuIGFycmF5JykpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZShhcnJbaV0pLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBfaW1tZWRpYXRlKGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IGlnbm9yZWQgPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbiAgfVxuXG4gIHN0YXRpYyBfdW5oYW5kbGVkUmVqZWN0aW9uKGVycm9yKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1Bvc3NpYmxlIFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbjonLCBlcnJvcik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIH1cbiAgfVxufVxuXG5Qcm9taXNlLnByb3RvdHlwZVsnY2F0Y2gnXSA9IGZ1bmN0aW9uKG9uUmVqZWN0ZWQ6IEZ1bmN0aW9uKTogUHJvbWlzZSB8IHZvaWQge1xuICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGVbJ3RoZW4nXSA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkOiBGdW5jdGlvbiwgb25SZWplY3RlZDogRnVuY3Rpb24pOiBQcm9taXNlIHwgdm9pZCB7XG4gIGNvbnN0IHByb21pc2UgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcigoKSA9PiBudWxsKTtcblxuICB0aGlzLmhhbmRsZShuZXcgUHJvbWlzZUhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHByb21pc2UpKTtcblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cblByb21pc2UucHJvdG90eXBlWydmaW5hbGx5J10gPSBmdW5jdGlvbihjYWxsYmFjazogRnVuY3Rpb24pOiBQcm9taXNlIHwgdm9pZCB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICByZXR1cm4gdGhpcy50aGVuKFxuICAgIHZhbHVlID0+IGNvbnN0cnVjdG9yLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbigoKSA9PiB2YWx1ZSksXG4gICAgcmVhc29uID0+IGNvbnN0cnVjdG9yLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbigoKSA9PiBjb25zdHJ1Y3Rvci5yZWplY3QocmVhc29uKSlcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb21pc2U7IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQgUHJvbWlzZSBmcm9tICcuL1Byb21pc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9taXNlSGFuZGxlciB7XG4gIG9uRnVsZmlsbGVkOiBGdW5jdGlvbjtcbiAgb25SZWplY3RlZDogRnVuY3Rpb247XG4gIHByb21pc2U6IFByb21pc2U7XG5cbiAgY29uc3RydWN0b3Iob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHByb21pc2UpIHtcbiAgICB0aGlzLm9uRnVsZmlsbGVkID0gdHlwZW9mIG9uRnVsZmlsbGVkID09PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiBudWxsO1xuICAgIHRoaXMub25SZWplY3RlZCA9IHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nID8gb25SZWplY3RlZCA6IG51bGw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IExvZ2dlckZhY3RvcnkgZnJvbSAnLi4vbG9nZ2VyL0xvZ2dlckZhY3RvcnknO1xuaW1wb3J0IElQZWVyQ29ubmVjdGlvbiwge1BlZXJDb25uZWN0aW9uRXZlbnRzfSBmcm9tICcuL0lQZWVyQ29ubmVjdGlvbic7XG5pbXBvcnQge0lMb2dnZXJ9IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXJJbnRlcmZhY2UnO1xuaW1wb3J0IEZlYXR1cmVFbmFibGVtZW50IGZyb20gJy4uL3Nkay9mZWF0dXJlL0ZlYXR1cmVFbmFibGVtZW50JztcbmltcG9ydCB7SUxlZ2FjeVJUQ1N0YXRzUmVwb3J0fSBmcm9tICcuL1J0Y0Nvbm5lY3Rpb25Nb25pdG9yJztcblxuY2xhc3MgVmFuaWxsYVBlZXJDb25uZWN0aW9uIGltcGxlbWVudHMgSVBlZXJDb25uZWN0aW9uIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfbG9nZ2VyOiBJTG9nZ2VyID0gTG9nZ2VyRmFjdG9yeS5nZXRMb2dnZXIoJ1ZhbmlsbGFQZWVyQ29ubmVjdGlvbicpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9wZWVyQ29ubmVjdGlvbjogUlRDUGVlckNvbm5lY3Rpb247XG5cbiAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbj86IFJUQ0NvbmZpZ3VyYXRpb24pIHtcbiAgICBpZiAoRmVhdHVyZUVuYWJsZW1lbnQud2Via2l0UlRDUGVlckNvbm5lY3Rpb25FbmFibGVkKSB7XG4gICAgICB0aGlzLl9wZWVyQ29ubmVjdGlvbiA9IG5ldyB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbihjb25maWd1cmF0aW9uKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3BlZXJDb25uZWN0aW9uID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZ3VyYXRpb24pO1xuICB9XG5cbiAgZ2V0IG5hdGl2ZSgpOiBSVENQZWVyQ29ubmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX3BlZXJDb25uZWN0aW9uO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRMb2NhbERlc2NyaXB0aW9uKCk6IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9wZWVyQ29ubmVjdGlvbi5jdXJyZW50TG9jYWxEZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBjdXJyZW50UmVtb3RlRGVzY3JpcHRpb24oKTogUlRDU2Vzc2lvbkRlc2NyaXB0aW9uIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3BlZXJDb25uZWN0aW9uLmN1cnJlbnRSZW1vdGVEZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBpY2VDb25uZWN0aW9uU3RhdGUoKTogUlRDSWNlQ29ubmVjdGlvblN0YXRlIHtcbiAgICByZXR1cm4gdGhpcy5fcGVlckNvbm5lY3Rpb24uaWNlQ29ubmVjdGlvblN0YXRlO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzR2V0Q29uZmlndXJhdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX3BlZXJDb25uZWN0aW9uLmdldENvbmZpZ3VyYXRpb24gPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNTZXRDb25maWd1cmF0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fcGVlckNvbm5lY3Rpb24uc2V0Q29uZmlndXJhdGlvbiA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGdldCBzdXBwb3J0c0FkZFRyYW5zY2VpdmVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhRmVhdHVyZUVuYWJsZW1lbnQuYWRkVHJhbmNlaXZlckRpc2FibGVkICYmIHR5cGVvZiB0aGlzLl9wZWVyQ29ubmVjdGlvbi5hZGRUcmFuc2NlaXZlciA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZU9mZmVyKG9wdGlvbnM/OiBSVENPZmZlck9wdGlvbnMpOiBQcm9taXNlPFJUQ1Nlc3Npb25EZXNjcmlwdGlvbkluaXQ+IHtcbiAgICBpZiAoRmVhdHVyZUVuYWJsZW1lbnQucHJvbWlzZUJhc2VkUENNZXRob2RzRGlzYWJsZWQpIHtcbiAgICAgIC8vIElnbm9yZWQgYXMgbGVhZ2N5IGNyZWF0ZU9mZmVyIG1ldGhvZCB3aXRoIGNhbGxiYWNrcyBpcyBkZXByZWNhdGVkXG4gICAgICAvLyBSZXF1aXJlcyBhIHRzLWlnbm9yZSBkaXJlY3RpdmUgdG8gcHJldmVudCB0eXBlc2NyaXB0IGVycm9yc1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHRoaXMuX3BlZXJDb25uZWN0aW9uLmNyZWF0ZU9mZmVyKHJlc29sdmUsIHJlamVjdCwgb3B0aW9ucykpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9wZWVyQ29ubmVjdGlvbi5jcmVhdGVPZmZlcihvcHRpb25zKTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZUFuc3dlcihvcHRpb25zPzogUlRDQW5zd2VyT3B0aW9ucyk6IFByb21pc2U8UlRDU2Vzc2lvbkRlc2NyaXB0aW9uSW5pdD4ge1xuICAgIGlmIChGZWF0dXJlRW5hYmxlbWVudC5wcm9taXNlQmFzZWRQQ01ldGhvZHNEaXNhYmxlZCkge1xuICAgICAgLy8gSWdub3JlZCBhcyBsZWFnY3kgY3JlYXRlQW5zd2VyIG1ldGhvZCB3aXRoIGNhbGxiYWNrcyBpcyBkZXByZWNhdGVkXG4gICAgICAvLyBSZXF1aXJlcyBhIHRzLWlnbm9yZSBkaXJlY3RpdmUgdG8gcHJldmVudCB0eXBlc2NyaXB0IGVycm9yc1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHRoaXMuX3BlZXJDb25uZWN0aW9uLmNyZWF0ZUFuc3dlcihyZXNvbHZlLCByZWplY3QsIG9wdGlvbnMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcGVlckNvbm5lY3Rpb24uY3JlYXRlQW5zd2VyKG9wdGlvbnMpO1xuICB9XG5cbiAgYXN5bmMgc2V0TG9jYWxEZXNjcmlwdGlvbihkZXNjcmlwdGlvbjogUlRDU2Vzc2lvbkRlc2NyaXB0aW9uSW5pdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9wZWVyQ29ubmVjdGlvbi5zZXRMb2NhbERlc2NyaXB0aW9uKEZlYXR1cmVFbmFibGVtZW50LnByb21pc2VCYXNlZFBDTWV0aG9kc0Rpc2FibGVkID9cbiAgICAgIG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIDogZGVzY3JpcHRpb24pO1xuICB9XG5cbiAgYXN5bmMgc2V0UmVtb3RlRGVzY3JpcHRpb24oZGVzY3JpcHRpb246IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbkluaXQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBoYXNDcnlwdG8gPSBkZXNjcmlwdGlvbi5zZHA/Lm1hdGNoKC9hPWNyeXB0bzovaSk7XG5cbiAgICBpZiAoaGFzQ3J5cHRvKSB7XG4gICAgICB0aGlzLl9sb2dnZXIud2FybignU0RQIGE9Y3J5cHRvIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcGVlckNvbm5lY3Rpb24uc2V0UmVtb3RlRGVzY3JpcHRpb24oRmVhdHVyZUVuYWJsZW1lbnQucHJvbWlzZUJhc2VkUENNZXRob2RzRGlzYWJsZWQgP1xuICAgICAgbmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbihkZXNjcmlwdGlvbikgOiBkZXNjcmlwdGlvbik7XG4gIH1cblxuICBnZXRTZW5kZXJzKCk6IFJUQ1J0cFNlbmRlcltdIHtcbiAgICByZXR1cm4gdGhpcy5fcGVlckNvbm5lY3Rpb24uZ2V0U2VuZGVycygpO1xuICB9XG5cbiAgZ2V0U3RhdHMoc2VsZWN0b3I/OiBNZWRpYVN0cmVhbVRyYWNrIHwgbnVsbCk6IFByb21pc2U8UlRDU3RhdHNSZXBvcnQ+IHtcbiAgICByZXR1cm4gdGhpcy5fcGVlckNvbm5lY3Rpb24uZ2V0U3RhdHMoc2VsZWN0b3IpO1xuICB9XG5cbiAgZ2V0U3RhdHNMZWdhY3koKTogUHJvbWlzZTxJTGVnYWN5UlRDU3RhdHNSZXBvcnQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAvLyBJZ25vcmVkIGR1ZSB0byB0eXBlc2NyaXB0IG5vdCBoYXZpbmcgbGVnYWN5ICdnZXRTdGF0cycgbWV0aG9kIHR5cGUgZGVmaW5pdGlvblxuICAgICAgLy8gVGhpcyB3YXMgYSBDaHJvbWUgc3BlY2lmaWMgaW1wbGVtZW50YXRpb24gb2YgdGhlICdnZXRTdGF0cycgbWV0aG9kIGZvclxuICAgICAgLy8gQ2hyb21lQDw9IDY2IGRldGFpbGVkIGhlcmU6IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTYyNzgxNlxuICAgICAgLy8gUmVxdWlyZXMgYSB0cy1pZ25vcmUgZGlyZWN0aXZlIHRvIHByZXZlbnQgdHlwZXNjcmlwdCBlcnJvcnNcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbnN0IGlnbm9yZWQgPSB0aGlzLl9wZWVyQ29ubmVjdGlvbi5nZXRTdGF0cyhyZXNvbHZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIodHlwZTogUGVlckNvbm5lY3Rpb25FdmVudHMsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LCBvcHRpb25zPzogYm9vbGVhbiB8IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5fcGVlckNvbm5lY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVyKHR5cGU6IFBlZXJDb25uZWN0aW9uRXZlbnRzLCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCwgb3B0aW9ucz86IGJvb2xlYW4gfCBFdmVudExpc3RlbmVyT3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMuX3BlZXJDb25uZWN0aW9uLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgYWRkVHJhbnNjZWl2ZXIobmFtZTogc3RyaW5nLCBvcHRpb25zOiBSVENSdHBUcmFuc2NlaXZlckluaXQpOiBSVENSdHBUcmFuc2NlaXZlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BlZXJDb25uZWN0aW9uLmFkZFRyYW5zY2VpdmVyKG5hbWUsIG9wdGlvbnMpO1xuICB9XG5cbiAgYWRkU3RyZWFtKG1lZGlhU3RyZWFtOiBNZWRpYVN0cmVhbSk6IHZvaWQge1xuICAgIG1lZGlhU3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2godHJhY2sgPT4ge1xuICAgICAgdGhpcy5fcGVlckNvbm5lY3Rpb24uYWRkVHJhY2sodHJhY2spO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Q29uZmlndXJhdGlvbigpOiBSVENDb25maWd1cmF0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fcGVlckNvbm5lY3Rpb24uZ2V0Q29uZmlndXJhdGlvbigpO1xuICB9XG5cbiAgc2V0Q29uZmlndXJhdGlvbihjb25maWd1cmF0aW9uOiBSVENDb25maWd1cmF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5fcGVlckNvbm5lY3Rpb24uc2V0Q29uZmlndXJhdGlvbihjb25maWd1cmF0aW9uKTtcbiAgfVxuXG4gIHNldCBvbnRyYWNrKGhhbmRsZXI6ICgodGhpczogUlRDUGVlckNvbm5lY3Rpb24sIGV2OiBSVENUcmFja0V2ZW50KSA9PiB1bmtub3duKSB8IG51bGwpIHtcbiAgICB0aGlzLl9wZWVyQ29ubmVjdGlvbi5vbnRyYWNrID0gaGFuZGxlcjtcbiAgfVxuXG4gIGdldCBvbnRyYWNrKCk6ICgodGhpczogUlRDUGVlckNvbm5lY3Rpb24sIGV2OiBSVENUcmFja0V2ZW50KSA9PiB1bmtub3duKSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9wZWVyQ29ubmVjdGlvbi5vbnRyYWNrO1xuICB9XG5cbiAgc2V0IG9uaWNlY2FuZGlkYXRlKGhhbmRsZXI6ICgodGhpczogUlRDUGVlckNvbm5lY3Rpb24sIGV2OiBSVENQZWVyQ29ubmVjdGlvbkljZUV2ZW50KSA9PiB1bmtub3duKSB8IG51bGwpIHtcbiAgICB0aGlzLl9wZWVyQ29ubmVjdGlvbi5vbmljZWNhbmRpZGF0ZSA9IGhhbmRsZXI7XG4gIH1cblxuICBnZXQgb25pY2VjYW5kaWRhdGUoKTogKCh0aGlzOiBSVENQZWVyQ29ubmVjdGlvbiwgZXY6IFJUQ1BlZXJDb25uZWN0aW9uSWNlRXZlbnQpID0+IHVua25vd24pIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3BlZXJDb25uZWN0aW9uLm9uaWNlY2FuZGlkYXRlO1xuICB9XG5cbiAgc2V0IG9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlKGhhbmRsZXI6ICgodGhpczogUlRDUGVlckNvbm5lY3Rpb24sIGV2OiBFdmVudCkgPT4gdW5rbm93bikgfCBudWxsKSB7XG4gICAgdGhpcy5fcGVlckNvbm5lY3Rpb24ub25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UgPSBoYW5kbGVyO1xuICB9XG5cbiAgZ2V0IG9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlKCk6ICgodGhpczogUlRDUGVlckNvbm5lY3Rpb24sIGV2OiBFdmVudCkgPT4gdW5rbm93bikgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fcGVlckNvbm5lY3Rpb24ub25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2U7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9wZWVyQ29ubmVjdGlvbi5jbG9zZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbmlsbGFQZWVyQ29ubmVjdGlvbjsiLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IElQZWVyQ29ubmVjdGlvbkZhY3RvcnkgZnJvbSAnLi9JUGVlckNvbm5lY3Rpb25GYWN0b3J5JztcbmltcG9ydCBJUGVlckNvbm5lY3Rpb24gZnJvbSAnLi9JUGVlckNvbm5lY3Rpb24nO1xuaW1wb3J0IFZhbmlsbGFQZWVyQ29ubmVjdGlvbiBmcm9tICcuL1ZhbmlsbGFQZWVyQ29ubmVjdGlvbic7XG5cbmNsYXNzIFZhbmlsbGFQZWVyQ29ubmVjdGlvbkZhY3RvcnkgaW1wbGVtZW50cyBJUGVlckNvbm5lY3Rpb25GYWN0b3J5IHtcbiAgYXN5bmMgY3JlYXRlUGVlckNvbm5lY3Rpb24oY29uZmlndXJhdGlvbj86IFJUQ0NvbmZpZ3VyYXRpb24pOiBQcm9taXNlPElQZWVyQ29ubmVjdGlvbj4ge1xuICAgIHJldHVybiBuZXcgVmFuaWxsYVBlZXJDb25uZWN0aW9uKGNvbmZpZ3VyYXRpb24pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbmlsbGFQZWVyQ29ubmVjdGlvbkZhY3Rvcnk7IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5cbmltcG9ydCBTdWJqZWN0IGZyb20gJy4vU3ViamVjdCc7XG5pbXBvcnQgSURpc3Bvc2FibGUgZnJvbSAnLi4vbGFuZy9JRGlzcG9zYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWRPbmx5U3ViamVjdDxUPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3N1YmplY3Q6IFN1YmplY3Q8VD47XG5cbiAgY29uc3RydWN0b3Ioc3ViamVjdDogU3ViamVjdDxUPikge1xuICAgIHRoaXMuX3N1YmplY3QgPSBzdWJqZWN0O1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IFQge1xuICAgIHJldHVybiB0aGlzLl9zdWJqZWN0LnZhbHVlO1xuICB9XG5cbiAgc3Vic2NyaWJlKGxpc3RlbmVyOiAoVCkgPT4gdm9pZCk6IElEaXNwb3NhYmxlIHtcbiAgICByZXR1cm4gdGhpcy5fc3ViamVjdC5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5cbmltcG9ydCBJRGlzcG9zYWJsZSBmcm9tICcuLi9sYW5nL0lEaXNwb3NhYmxlJztcbmltcG9ydCBEaXNwb3NhYmxlIGZyb20gJy4uL2xhbmcvRGlzcG9zYWJsZSc7XG5pbXBvcnQgSUNvbXBhcmFibGUgZnJvbSAnLi4vbGFuZy9JQ29tcGFyYWJsZSc7XG5cbmNsYXNzIERpc3Bvc2FibGVMaXN0ZW5lcjxUPiBleHRlbmRzIERpc3Bvc2FibGUge1xuICBjb25zdHJ1Y3RvcihsaXN0ZW5lcnM6IEFycmF5PFQ+LCBsaXN0ZW5lcjogVCkge1xuICAgIHN1cGVyKCgpID0+IHtcbiAgICAgIGNvbnN0IGlkeCA9IGxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcblxuICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJqZWN0PFQ+IHtcbiAgcHJpdmF0ZSByZWFkb25seSBfbGlzdGVuZXJzOiBBcnJheTwoVCkgPT4gdm9pZD47XG4gIHByaXZhdGUgX3ZhbHVlOiBUO1xuXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBUKSB7XG4gICAgdGhpcy5fbGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogVCkge1xuICAgIGxldCBjaGFuZ2VkID0gdGhpcy5fdmFsdWUgIT09IHZhbHVlO1xuXG4gICAgaWYgKGNoYW5nZWQgJiYgdmFsdWUpIHtcbiAgICAgIGNvbnN0IGNvbXBhcmFibGUgPSB2YWx1ZSBhcyB1bmtub3duIGFzIElDb21wYXJhYmxlPFQ+O1xuXG4gICAgICBpZiAodHlwZW9mIGNvbXBhcmFibGUuZXF1YWxzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoYW5nZWQgPSAhY29tcGFyYWJsZS5lcXVhbHModGhpcy5fdmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghY2hhbmdlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG5cbiAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICBsaXN0ZW5lcih2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc3Vic2NyaWJlKGxpc3RlbmVyOiAoVCkgPT4gdm9pZCk6IElEaXNwb3NhYmxlIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICBsaXN0ZW5lcih0aGlzLl92YWx1ZSk7XG5cbiAgICByZXR1cm4gbmV3IERpc3Bvc2FibGVMaXN0ZW5lcjwoVCkgPT4gdm9pZD4odGhpcy5fbGlzdGVuZXJzLCBsaXN0ZW5lcik7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW52aXJvbm1lbnQge1xuICBzdGF0aWMgZ2V0RW52aXJvbm1lbnRGcm9tVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYmFzZVVSTCA9IG5ldyBVUkwodXJsKTtcblxuICAgICAgcmV0dXJuIGJhc2VVUkwub3JpZ2luO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCBMb2dnZXJGYWN0b3J5IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXJGYWN0b3J5JztcbmltcG9ydCBTdHJpbmdzIGZyb20gJy4uL2xhbmcvU3RyaW5ncyc7XG5pbXBvcnQgU3ViamVjdCBmcm9tICcuLi9yeC9TdWJqZWN0JztcbmltcG9ydCBSZWFkT25seVN1YmplY3QgZnJvbSAnLi4vcngvUmVhZE9ubHlTdWJqZWN0JztcbmltcG9ydCBJUGVlckNvbm5lY3Rpb25GYWN0b3J5IGZyb20gJy4uL3J0Yy9JUGVlckNvbm5lY3Rpb25GYWN0b3J5JztcbmltcG9ydCBWYW5pbGxhUGVlckNvbm5lY3Rpb25GYWN0b3J5IGZyb20gJy4uL3J0Yy9WYW5pbGxhUGVlckNvbm5lY3Rpb25GYWN0b3J5JztcbmltcG9ydCBFZGdlQXV0aCBmcm9tICcuL2VkZ2VBdXRoL0VkZ2VBdXRoJztcbmltcG9ydCB7SUxvZ2dlcn0gZnJvbSAnLi4vbG9nZ2VyL0xvZ2dlckludGVyZmFjZSc7XG5pbXBvcnQge0xvZ2dpbmdMZXZlbCwgTG9nZ2luZ0xldmVsVHlwZX0gZnJvbSAnLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQgQ29uc29sZUFwcGVuZGVyIGZyb20gJy4uL2xvZ2dlci9Db25zb2xlQXBwZW5kZXInO1xuaW1wb3J0IFRlbGVtZXRyeUFwcGVuZGVyIGZyb20gJy4uL3RlbGVtZXRyeS9UZWxlbWV0cnlBcGVuZGVyJztcbmltcG9ydCBDb25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyIGZyb20gJy4uL2RvbS9Db25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyJztcbmltcG9ydCBNZXRyaWNzQ29uZmlndXJhdGlvbiwge1RlbGVtZXRyeUxldmVsLCBUZWxlbWV0cnlMZXZlbFR5cGV9IGZyb20gJy4uL21ldHJpY3MvTWV0cmljc0NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IE1ldHJpY3NTZXJ2aWNlIGZyb20gJy4uL21ldHJpY3MvTWV0cmljc1NlcnZpY2UnO1xuaW1wb3J0IFRlbGVtZXRyeUxldmVsTWFwcGluZyBmcm9tICcuLi9tZXRyaWNzL1RlbGVtZXRyaWNMZXZlbE1hcHBpbmcnO1xuaW1wb3J0IExvZ2dpbmdMZXZlbE1hcHBpbmcgZnJvbSAnLi4vbG9nZ2VyL0xvZ2dpbmdMZXZlbE1hcHBpbmcnO1xuaW1wb3J0IFByaXZhY3lNb2RlIGZyb20gJy4uL2RvbS9Qcml2YWN5TW9kZSc7XG5pbXBvcnQgQnJvd3NlckRldGVjdG9yIGZyb20gJy4uL2RvbS9Ccm93c2VyRGV0ZWN0b3InO1xuaW1wb3J0IHtJQ29uZmlndXJhdGlvblBhcmFtZXRlclJlYWRlcn0gZnJvbSAnLi4vZG9tL0lDb25maWd1cmF0aW9uUGFyYW1hdGVyUmVhZGVyJztcbmltcG9ydCBBcHBsaWNhdGlvbkFjdGl2aXR5TW9uaXRvciBmcm9tICcuLi9kb20vQXBwbGljYXRpb25BY3Rpdml0eU1vbml0b3InO1xuaW1wb3J0IFRlbGVtZXRyeVVybCBmcm9tICcuL1RlbGVtZXRyeVVybCc7XG5pbXBvcnQgRW52aXJvbm1lbnQgZnJvbSAnLi9FbnZpcm9ubWVudCc7XG5pbXBvcnQge0hsc1BsYXllclR5cGUsIFNoYWthVHlwZSwgV2ViUGxheWVyVHlwZX0gZnJvbSAnLi9zdHJlYW1pbmcvU3RyZWFtVHlwZXMnO1xuaW1wb3J0IERpc2NvdmVyeVVyaSBmcm9tICcuL2Rpc2NvdmVyeS9EaXNjb3ZlcnlVcmknO1xuaW1wb3J0IE1ldHJpY3NGYWN0b3J5IGZyb20gJy4uL21ldHJpY3MvTWV0cmljc0ZhY3RvcnknO1xuaW1wb3J0IFRlbGVtZXRyeURlZmF1bHQgZnJvbSAnLi4vbWV0cmljcy9UZWxlbWV0cnlEZWZhdWx0JztcblxuY29uc3QgcGFnZUxvYWRUaW1lID0gd2luZG93WydfX3BoZW5peFBhZ2VMb2FkVGltZSddIHx8IHdpbmRvd1snX19wYWdlTG9hZFRpbWUnXSB8fCBEYXRlLm5vdygpO1xuXG5pbnRlcmZhY2UgSUluaXRPcHRpb25zIHtcbiAgZGlzY292ZXJ5VXJpPzogc3RyaW5nO1xuICBwZWVyQ29ubmVjdGlvbkZhY3Rvcnk/OiBJUGVlckNvbm5lY3Rpb25GYWN0b3J5O1xuICB0ZWxlbWV0cnlMZXZlbD86IFRlbGVtZXRyeUxldmVsVHlwZTtcbiAgbG9nZ2luZ0xldmVsPzogTG9nZ2luZ0xldmVsVHlwZTtcbiAgY29uc29sZUxvZ2dpbmdMZXZlbD86IExvZ2dpbmdMZXZlbFR5cGU7XG4gIGF1dG9tYXRpY2FsbHlQbGF5TWVkaWFTdHJlYW0/OiBib29sZWFuO1xuICBhdXRvbWF0aWNhbGx5TXV0ZVZpZGVvT25QbGF5RmFpbHVyZT86IGJvb2xlYW47XG4gIHdlYlBsYXllckxvYWRlcj86IChwbGF5ZXI6IFdlYlBsYXllclR5cGUpID0+IHZvaWQ7XG4gIHNoYWthUGxheWVyTG9hZGVyPzogKHBsYXllcjogU2hha2FUeXBlKSA9PiB2b2lkO1xuICBobHNKc0xvYWRlcj86IChwbGF5ZXI6IEhsc1BsYXllclR5cGUpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNESyB7XG4gIHByaXZhdGUgc3RhdGljIF9hdXRvbWF0aWNhbGx5UmV0cnlPbkZhaWx1cmUgPSB0cnVlO1xuICBwcml2YXRlIHN0YXRpYyBfYXV0b21hdGljYWxseVJlY29ubmVjdFBlZXJDb25uZWN0aW9uID0gdHJ1ZTtcbiAgcHJpdmF0ZSBzdGF0aWMgX2F1dG9tYXRpY2FsbHlQbGF5TWVkaWFTdHJlYW0gPSB0cnVlO1xuICBwcml2YXRlIHN0YXRpYyBfYXV0b21hdGljYWxseU11dGVWaWRlb09uUGxheUZhaWx1cmUgPSB0cnVlO1xuICBwcml2YXRlIHN0YXRpYyBfd2ViUGxheWVyTG9hZGVyID0gbnVsbDtcbiAgcHJpdmF0ZSBzdGF0aWMgX3NoYWthUGxheWVyTG9hZGVyID0gbnVsbDtcbiAgcHJpdmF0ZSBzdGF0aWMgX2hsc0pzTG9hZGVyID0gbnVsbDtcbiAgcHJpdmF0ZSBzdGF0aWMgX2NvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXI6IElDb25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyID0gbmV3IENvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXIoKTtcbiAgcHJpdmF0ZSBzdGF0aWMgX2FwcGxpY2F0aW9uQWN0aXZpdHlNb25pdG9yOiBBcHBsaWNhdGlvbkFjdGl2aXR5TW9uaXRvcjtcbiAgcHJpdmF0ZSBzdGF0aWMgX2Vudmlyb25tZW50OiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCcnKTtcbiAgcHJpdmF0ZSBzdGF0aWMgX3RlbGVtZXRyeVVybDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3Q8c3RyaW5nPignaHR0cHM6Ly90ZWxlbWV0cnkucGhlbml4cnRzLmNvbS90ZWxlbWV0cnknKTtcbiAgcHJpdmF0ZSBzdGF0aWMgX21heGltYWxOdW1iZXJPZlBlZXJDb25uZWN0aW9uUmVjb25uZWN0QXR0ZW1wdHMgPSA4O1xuICBwcml2YXRlIHN0YXRpYyBfdGVsZW1ldHJ5TGV2ZWw6IFN1YmplY3Q8VGVsZW1ldHJ5TGV2ZWw+ID0gbmV3IFN1YmplY3Q8VGVsZW1ldHJ5TGV2ZWw+KFRlbGVtZXRyeURlZmF1bHQuZGVmYXVsdFRlbGVtZXRyeUxldmVsKTtcbiAgcHJpdmF0ZSBzdGF0aWMgX21ldHJpY3NTZXJ2aWNlOiBNZXRyaWNzU2VydmljZTtcbiAgcHJpdmF0ZSBzdGF0aWMgX21ldHJpY3NDb25maWd1cmF0aW9uOiBNZXRyaWNzQ29uZmlndXJhdGlvblxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfc2VuZExvY2FsQ2FuZGlkYXRlczogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCFQcml2YWN5TW9kZS5pc1ByaXZhdGUpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfdGVuYW5jeTogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3Q8c3RyaW5nPignJyk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9jbGllbnRTZXNzaW9uSWQ6IHN0cmluZyA9IFN0cmluZ3MucmFuZG9tKDMyKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2xvYWRlZFRpbWVzdGFtcDogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9sb2dnZXI6IElMb2dnZXIgPSBMb2dnZXJGYWN0b3J5LmdldExvZ2dlcignU0RLJyk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9pbml0aWFsaXplZDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX3BlZXJDb25uZWN0aW9uRmFjdG9yeTogU3ViamVjdDxJUGVlckNvbm5lY3Rpb25GYWN0b3J5PiA9IG5ldyBTdWJqZWN0PElQZWVyQ29ubmVjdGlvbkZhY3Rvcnk+KG5ldyBWYW5pbGxhUGVlckNvbm5lY3Rpb25GYWN0b3J5KCkpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfcmVhZE9ubHlJbml0aWFsaXplZDogUmVhZE9ubHlTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFJlYWRPbmx5U3ViamVjdDxib29sZWFuPihTREsuX2luaXRpYWxpemVkKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX3JlYWRPbmx5RGlzY292ZXJ5VXJpOiBSZWFkT25seVN1YmplY3Q8c3RyaW5nPiA9IG5ldyBSZWFkT25seVN1YmplY3Q8c3RyaW5nPihEaXNjb3ZlcnlVcmkudXJpKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX3JlYWRPbmx5UGVlckNvbm5lY3Rpb25GYWN0b3J5OiBSZWFkT25seVN1YmplY3Q8SVBlZXJDb25uZWN0aW9uRmFjdG9yeT4gPSBuZXcgUmVhZE9ubHlTdWJqZWN0PElQZWVyQ29ubmVjdGlvbkZhY3Rvcnk+KFNESy5fcGVlckNvbm5lY3Rpb25GYWN0b3J5KTtcblxuICBzdGF0aWMgZ2V0IHBhZ2VMb2FkVGltZSgpOiBudW1iZXIge1xuICAgIHJldHVybiBwYWdlTG9hZFRpbWU7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHNlbmRMb2NhbENhbmRpZGF0ZXMoKTogU3ViamVjdDxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbmRMb2NhbENhbmRpZGF0ZXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHRlbmFuY3koKTogU3ViamVjdDxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fdGVuYW5jeTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgY2xpZW50U2Vzc2lvbklkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNESy5fY2xpZW50U2Vzc2lvbklkO1xuICB9XG5cbiAgc3RhdGljIGdldCBsb2FkZWRUaW1lc3RhbXAoKTogRGF0ZSB7XG4gICAgcmV0dXJuIFNESy5fbG9hZGVkVGltZXN0YW1wO1xuICB9XG5cbiAgc3RhdGljIGdldCBpbml0aWFsaXplZCgpOiBSZWFkT25seVN1YmplY3Q8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBTREsuX3JlYWRPbmx5SW5pdGlhbGl6ZWQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGRpc2NvdmVyeVVyaSgpOiBSZWFkT25seVN1YmplY3Q8c3RyaW5nPiB7XG4gICAgcmV0dXJuIFNESy5fcmVhZE9ubHlEaXNjb3ZlcnlVcmk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHBlZXJDb25uZWN0aW9uRmFjdG9yeSgpOiBSZWFkT25seVN1YmplY3Q8SVBlZXJDb25uZWN0aW9uRmFjdG9yeT4ge1xuICAgIHJldHVybiBTREsuX3JlYWRPbmx5UGVlckNvbm5lY3Rpb25GYWN0b3J5O1xuICB9XG5cbiAgc3RhdGljIGdldCBhdXRvbWF0aWNSZXRyeU9uRmFpbHVyZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gU0RLLl9hdXRvbWF0aWNhbGx5UmV0cnlPbkZhaWx1cmU7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGF1dG9tYXRpY2FsbHlSZWNvbm5lY3RQZWVyQ29ubmVjdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gU0RLLl9hdXRvbWF0aWNhbGx5UmVjb25uZWN0UGVlckNvbm5lY3Rpb247XG4gIH1cblxuICBzdGF0aWMgZ2V0IGF1dG9tYXRpY2FsbHlQbGF5TWVkaWFTdHJlYW0oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIFNESy5fYXV0b21hdGljYWxseVBsYXlNZWRpYVN0cmVhbTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgYXV0b21hdGljYWxseU11dGVWaWRlb09uUGxheUZhaWx1cmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIFNESy5fYXV0b21hdGljYWxseU11dGVWaWRlb09uUGxheUZhaWx1cmU7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHdlYlBsYXllckxvYWRlcigpOiAoV2ViUGxheWVyVHlwZSkgPT4gdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuX3dlYlBsYXllckxvYWRlcjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc2hha2FQbGF5ZXJMb2FkZXIoKTogKFNoYWthVHlwZSkgPT4gdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NoYWthUGxheWVyTG9hZGVyO1xuICB9XG5cbiAgc3RhdGljIGdldCBobHNKc0xvYWRlcigpOiAoSGxzUGxheWVyVHlwZSkgPT4gdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuX2hsc0pzTG9hZGVyO1xuICB9XG5cbiAgc3RhdGljIGdldCBtZXRyaWNzU2VydmljZSgpOiBNZXRyaWNzU2VydmljZSB7XG4gICAgcmV0dXJuIFNESy5fbWV0cmljc1NlcnZpY2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGFwcGxpY2F0aW9uQWN0aXZpdHlNb25pdG9yKCk6IEFwcGxpY2F0aW9uQWN0aXZpdHlNb25pdG9yIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbGljYXRpb25BY3Rpdml0eU1vbml0b3I7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHRlbGVtZXRyeVVybCgpOiBTdWJqZWN0PHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl90ZWxlbWV0cnlVcmw7XG4gIH1cblxuICBzdGF0aWMgZ2V0IG1heGltYWxOdW1iZXJPZlBlZXJDb25uZWN0aW9uUmVjb25uZWN0QXR0ZW1wdHMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4aW1hbE51bWJlck9mUGVlckNvbm5lY3Rpb25SZWNvbm5lY3RBdHRlbXB0cztcbiAgfVxuXG4gIHN0YXRpYyBzZXQgbWF4aW1hbE51bWJlck9mUGVlckNvbm5lY3Rpb25SZWNvbm5lY3RBdHRlbXB0cyhyZXRyaWVzQW1vdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhpbWFsTnVtYmVyT2ZQZWVyQ29ubmVjdGlvblJlY29ubmVjdEF0dGVtcHRzID0gcmV0cmllc0Ftb3VudDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgbG9nZ2luZ0xldmVsKCk6IExvZ2dpbmdMZXZlbFR5cGUge1xuICAgIHJldHVybiBMb2dnaW5nTGV2ZWxNYXBwaW5nLmNvbnZlcnRMb2dnaW5nTGV2ZWxUb0xvZ2dpbmdMZXZlbFR5cGUodGhpcy5fbG9nZ2VyLnRocmVzaG9sZC52YWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHRlbGVtZXRyeUxldmVsKCk6IFRlbGVtZXRyeUxldmVsVHlwZSB7XG4gICAgcmV0dXJuIFRlbGVtZXRyeUxldmVsTWFwcGluZy5jb252ZXJ0VGVsZW1ldHJ5TGV2ZWxUb1RlbGVtZXRyeUxldmVsVHlwZShTREsuX3RlbGVtZXRyeUxldmVsLnZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgYnJvd3NlckRldGVjdG9yKCk6IEJyb3dzZXJEZXRlY3RvciB7XG4gICAgcmV0dXJuIEJyb3dzZXJEZXRlY3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBhcHBseVRlbGVtZXRyeUNvbmZpZ3VyYXRpb24oKTogdm9pZCB7XG4gICAgY29uc3QgdGVsZW1ldHJ5Q29uZmlndXJhdGlvbiA9IExvZ2dlckZhY3RvcnkudGVsZW1ldHJ5Q29uZmlndXJhdGlvbjtcblxuICAgIHRlbGVtZXRyeUNvbmZpZ3VyYXRpb24uc2Vzc2lvbklkID0gU0RLLmNsaWVudFNlc3Npb25JZDtcblxuICAgIGNvbnN0IGlnbm9yZWRFbnZpcm9ubWVudCA9IFNESy5fZW52aXJvbm1lbnQuc3Vic2NyaWJlKGVudmlyb25tZW50ID0+IHtcbiAgICAgIHRlbGVtZXRyeUNvbmZpZ3VyYXRpb24uZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcbiAgICB9KTtcbiAgICBjb25zdCBpZ25vcmVkRGlzY292ZXJ5VXJpID0gU0RLLnRlbGVtZXRyeVVybC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgY29uc3QgdGVsZW1ldHJ5QXBwZW5kZXIgPSB0aGlzLl9sb2dnZXIuYXBwZW5kZXJzLnZhbHVlLmZpbmQoYXBwZW5kZXIgPT4gYXBwZW5kZXIgaW5zdGFuY2VvZiBUZWxlbWV0cnlBcHBlbmRlcik7XG5cbiAgICAgIGlmICh0ZWxlbWV0cnlBcHBlbmRlcikge1xuICAgICAgICB0ZWxlbWV0cnlDb25maWd1cmF0aW9uLnVybCA9IHZhbHVlO1xuXG4gICAgICAgIHRoaXMuX2xvZ2dlci5hcHBlbmRlcnMucmVtb3ZlKHRlbGVtZXRyeUFwcGVuZGVyKTtcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmFwcGVuZGVycy5hZGQobmV3IFRlbGVtZXRyeUFwcGVuZGVyKHRlbGVtZXRyeUNvbmZpZ3VyYXRpb24pKTtcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oJ1RlbGVtZXRyeSBVUkwgd2FzIHNldCB0byBbJXNdJywgdGVsZW1ldHJ5Q29uZmlndXJhdGlvbi51cmwpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGlnbm9yZWRUZW5hbmN5ID0gU0RLLl90ZW5hbmN5LnN1YnNjcmliZSh0ZW5hbmN5ID0+IHtcbiAgICAgIGNvbnN0IHRlbGVtZXRyeUFwcGVuZGVyID0gdGhpcy5fbG9nZ2VyLmFwcGVuZGVycy52YWx1ZS5maW5kKGFwcGVuZGVyID0+IGFwcGVuZGVyIGluc3RhbmNlb2YgVGVsZW1ldHJ5QXBwZW5kZXIpO1xuXG4gICAgICBpZiAodGVsZW1ldHJ5QXBwZW5kZXIgJiYgdGVuYW5jeSkge1xuICAgICAgICB0ZWxlbWV0cnlDb25maWd1cmF0aW9uLnRlbmFuY3kgPSB0ZW5hbmN5O1xuXG4gICAgICAgIHRoaXMuX2xvZ2dlci5hcHBlbmRlcnMucmVtb3ZlKHRlbGVtZXRyeUFwcGVuZGVyKTtcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmFwcGVuZGVycy5hZGQobmV3IFRlbGVtZXRyeUFwcGVuZGVyKHRlbGVtZXRyeUNvbmZpZ3VyYXRpb24pKTtcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oJ1RlbGVtZXRyeSB0ZW5hbmN5IHdhcyBzZXQgdG8gWyVzXScsIHRlbGVtZXRyeUNvbmZpZ3VyYXRpb24udGVuYW5jeSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYXBwbHlNZXRyaWNzQ29uZmlndXJhdGlvbigpOiB2b2lkIHtcbiAgICBTREsuX21ldHJpY3NTZXJ2aWNlID0gTWV0cmljc0ZhY3RvcnkuZ2V0TWV0cmljc1NlcnZpY2UoRGlzY292ZXJ5VXJpLnVyaS52YWx1ZSk7XG4gICAgU0RLLl9tZXRyaWNzQ29uZmlndXJhdGlvbiA9IFNESy5fbWV0cmljc1NlcnZpY2UubWV0cmljc0NvbmZpZ3VyYXRpb247XG5cbiAgICBTREsuX21ldHJpY3NDb25maWd1cmF0aW9uLnNlc3Npb25JZCA9IFNESy5jbGllbnRTZXNzaW9uSWQ7XG5cbiAgICBjb25zdCBpZ25vcmVkRW52aXJvbm1lbnQgPSBTREsuX2Vudmlyb25tZW50LnN1YnNjcmliZShlbnZpcm9ubWVudCA9PiB7XG4gICAgICBTREsuX21ldHJpY3NDb25maWd1cmF0aW9uLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG4gICAgfSk7XG4gICAgY29uc3QgaWdub3JlZERpc2NvdmVyeVVyaSA9IFNESy50ZWxlbWV0cnlVcmwuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIFNESy5fbWV0cmljc0NvbmZpZ3VyYXRpb24udXJsID0gdmFsdWU7XG4gICAgfSk7XG4gICAgY29uc3QgaWdub3JlZFRlbmFuY3kgPSBTREsuX3RlbmFuY3kuc3Vic2NyaWJlKHRlbmFuY3kgPT4ge1xuICAgICAgU0RLLl9tZXRyaWNzQ29uZmlndXJhdGlvbi50ZW5hbmN5ID0gdGVuYW5jeTtcbiAgICB9KTtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2NvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXIuZ2V0U3RyaW5nVmFsdWUoJ3BoZW5peC1tZXRyaWNzLWxldmVsJyk7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIE1ldHJpY3NGYWN0b3J5LnNldFRlbGVtZXRyeUxldmVsKFRlbGVtZXRyeUxldmVsW3ZhbHVlXSk7XG4gICAgfVxuXG4gICAgY29uc3QgaWdub3JlZFRlbGVtZXRyeUxldmVsID0gU0RLLl90ZWxlbWV0cnlMZXZlbC5zdWJzY3JpYmUodGVsZW1ldHJ5TGV2ZWwgPT4ge1xuICAgICAgTWV0cmljc0ZhY3Rvcnkuc2V0VGVsZW1ldHJ5TGV2ZWwodGVsZW1ldHJ5TGV2ZWwpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGFwcGx5QXV0b21hdGljYWxseVJldHJ5T25GYWlsdXJlRnJvbVBhcmFtZXRlckNvbmZpZ3VyYXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fYXV0b21hdGljYWxseVJldHJ5T25GYWlsdXJlID0gdGhpcy5fY29uZmlndXJhdGlvblBhcmFtZXRlclJlYWRlci5nZXRCb29sZWFuVmFsdWUoJ3BoZW5peC1hdXRvbWF0aWNhbGx5LXJldHJ5LW9uLWZhaWx1cmUnKTtcbiAgICB0aGlzLl9sb2dnZXIuaW5mbygnQXV0b21hdGljYWxseSByZXRyeSBvbiBmYWlsdXJlIGlzIHNldCB0bzogWyVzXScsIHRoaXMuX2F1dG9tYXRpY2FsbHlSZXRyeU9uRmFpbHVyZSk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBzdGF0aWMgYXBwbHlBdXRvbWF0aWNhbGx5UmVjb25uZWN0UGVlckNvbm5lY3Rpb25Gcm9tUGFyYW1ldGVyQ29uZmlndXJhdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLl9hdXRvbWF0aWNhbGx5UmVjb25uZWN0UGVlckNvbm5lY3Rpb24gPSB0aGlzLl9jb25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyLmdldEJvb2xlYW5WYWx1ZSgncGhlbml4LWF1dG9tYXRpY2FsbHktcmVjb25uZWN0LXBlZXItY29ubmVjdGlvbicpO1xuICAgIHRoaXMuX2xvZ2dlci5pbmZvKCdBdXRvbWF0aWNhbGx5IHJlY29ubmVjdCBwZWVyIGNvbm5lY3Rpb24gaXMgc2V0IHRvOiBbJXNdJywgdGhpcy5fYXV0b21hdGljYWxseVJlY29ubmVjdFBlZXJDb25uZWN0aW9uKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0YXRpYyBhcHBseURpc2NvdmVyeVVyaURlZmF1bHRGcm9tUGFyYW1ldGVyQ29uZmlndXJhdGlvbigpOiB2b2lkIHtcbiAgICBTREsuZGlzY292ZXJ5VXJpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBTREsudGVsZW1ldHJ5VXJsLnZhbHVlID0gU0RLLmdldFRlbGVtZXRyeVVybCh2YWx1ZSk7XG4gICAgICBTREsuX2Vudmlyb25tZW50LnZhbHVlID0gRW52aXJvbm1lbnQuZ2V0RW52aXJvbm1lbnRGcm9tVXJsKHZhbHVlKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNoYW5uZWxUb2tlbiA9IHRoaXMuX2NvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXIuZ2V0U3RyaW5nVmFsdWUoJ3BoZW5peC1jaGFubmVsLXRva2VuJyk7XG5cbiAgICBpZiAoY2hhbm5lbFRva2VuKSB7XG4gICAgICBjb25zdCBwYXJzZWRUb2tlbiA9IEVkZ2VBdXRoLnBhcnNlVG9rZW4oY2hhbm5lbFRva2VuKTtcblxuICAgICAgU0RLLl90ZW5hbmN5LnZhbHVlID0gRWRnZUF1dGguZ2V0VGVuYW5jeShwYXJzZWRUb2tlbik7XG4gICAgICBEaXNjb3ZlcnlVcmkudXJpLnZhbHVlID0gKEVkZ2VBdXRoLmdldFVyaShwYXJzZWRUb2tlbikgfHwgU0RLLmRpc2NvdmVyeVVyaS52YWx1ZSkudG9TdHJpbmcoKTtcblxuICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oJ0Rpc2NvdmVyeSBVUkkgc2V0IGZyb20gY29uZmlndXJhdGlvbiBwYXJhbWV0ZXIgdG8gWyVzXScsIFNESy5kaXNjb3ZlcnlVcmkudmFsdWUpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXJpVmFsdWUgPSB0aGlzLl9jb25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyLmdldFN0cmluZ1ZhbHVlKCdwaGVuaXgtdXJpJyk7XG5cbiAgICBpZiAodXJpVmFsdWUpIHtcbiAgICAgIERpc2NvdmVyeVVyaS51cmkudmFsdWUgPSB1cmlWYWx1ZTtcbiAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKCdEaXNjb3ZlcnkgVVJJIHNldCBmcm9tIFwicGhlbml4LXVyaVwiIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVyIHRhZyB0byBbJXNdJywgU0RLLmRpc2NvdmVyeVVyaS52YWx1ZSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBiYXNlVVJJVmFsdWUgPSB0aGlzLl9jb25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyLmdldFN0cmluZ1ZhbHVlKCdwaGVuaXgtYmFzZS11cmknKTtcblxuICAgIGlmIChiYXNlVVJJVmFsdWUpIHtcbiAgICAgIERpc2NvdmVyeVVyaS51cmkudmFsdWUgPSBgJHtiYXNlVVJJVmFsdWV9L3BjYXN0L2VuZFBvaW50c2A7XG4gICAgICB0aGlzLl9sb2dnZXIuaW5mbygnRGlzY292ZXJ5IFVSSSBzZXQgZnJvbSBcInBoZW5peC1iYXNlLXVyaVwiIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVyIHRhZyB0byBbJXNdJywgU0RLLmRpc2NvdmVyeVVyaS52YWx1ZSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaW5pdChvcHRpb25zPzogSUluaXRPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9pbml0aWFsaXplZC52YWx1ZSkge1xuICAgICAgdGhpcy5fYXBwbGljYXRpb25BY3Rpdml0eU1vbml0b3IgPSBuZXcgQXBwbGljYXRpb25BY3Rpdml0eU1vbml0b3IoKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMuZGlzY292ZXJ5VXJpKSB7XG4gICAgICAgIERpc2NvdmVyeVVyaS51cmkudmFsdWUgPSBvcHRpb25zLmRpc2NvdmVyeVVyaTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucGVlckNvbm5lY3Rpb25GYWN0b3J5KSB7XG4gICAgICAgIFNESy5fcGVlckNvbm5lY3Rpb25GYWN0b3J5LnZhbHVlID0gb3B0aW9ucy5wZWVyQ29ubmVjdGlvbkZhY3Rvcnk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnRlbGVtZXRyeUxldmVsICYmIFRlbGVtZXRyeUxldmVsW29wdGlvbnMudGVsZW1ldHJ5TGV2ZWxdKSB7XG4gICAgICAgIFNESy5fdGVsZW1ldHJ5TGV2ZWwudmFsdWUgPSBUZWxlbWV0cnlMZXZlbE1hcHBpbmcuY29udmVydFRlbGVtZXRyeUxldmVsVHlwZVRvVGVsZW1ldHJ5TGV2ZWwob3B0aW9ucy50ZWxlbWV0cnlMZXZlbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmxvZ2dpbmdMZXZlbCAmJiBMb2dnaW5nTGV2ZWxbb3B0aW9ucy5sb2dnaW5nTGV2ZWxdKSB7XG4gICAgICAgIHRoaXMuX2xvZ2dlci50aHJlc2hvbGQuc2V0VGhyZXNob2xkKExvZ2dpbmdMZXZlbE1hcHBpbmcuY29udmVydExvZ2dpbmdMZXZlbFR5cGVUb0xvZ2dpbmdMZXZlbChvcHRpb25zLmxvZ2dpbmdMZXZlbCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5jb25zb2xlTG9nZ2luZ0xldmVsICYmXG4gICAgICAgIExvZ2dpbmdMZXZlbFtvcHRpb25zLmNvbnNvbGVMb2dnaW5nTGV2ZWxdKSB7XG4gICAgICAgIGNvbnN0IGNvbnNvbGVBcHBlbmRlciA9IHRoaXMuX2xvZ2dlci5hcHBlbmRlcnMudmFsdWUuZmluZChhcHBlbmRlciA9PiBhcHBlbmRlciBpbnN0YW5jZW9mIENvbnNvbGVBcHBlbmRlcik7XG5cbiAgICAgICAgaWYgKGNvbnNvbGVBcHBlbmRlcikge1xuICAgICAgICAgIHRoaXMuX2xvZ2dlci5hcHBlbmRlcnMucmVtb3ZlKGNvbnNvbGVBcHBlbmRlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5jb25zb2xlTG9nZ2luZ0xldmVsICE9PSAnT2ZmJykge1xuICAgICAgICAgIHRoaXMuX2xvZ2dlci5hcHBlbmRlcnMuYWRkKG5ldyBDb25zb2xlQXBwZW5kZXIoTG9nZ2luZ0xldmVsTWFwcGluZy5jb252ZXJ0TG9nZ2luZ0xldmVsVHlwZVRvTG9nZ2luZ0xldmVsKG9wdGlvbnMuY29uc29sZUxvZ2dpbmdMZXZlbCkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMuYXV0b21hdGljYWxseVBsYXlNZWRpYVN0cmVhbSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHRoaXMuX2F1dG9tYXRpY2FsbHlQbGF5TWVkaWFTdHJlYW0gPSBvcHRpb25zLmF1dG9tYXRpY2FsbHlQbGF5TWVkaWFTdHJlYW07XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5hdXRvbWF0aWNhbGx5TXV0ZVZpZGVvT25QbGF5RmFpbHVyZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHRoaXMuX2F1dG9tYXRpY2FsbHlNdXRlVmlkZW9PblBsYXlGYWlsdXJlID0gb3B0aW9ucy5hdXRvbWF0aWNhbGx5TXV0ZVZpZGVvT25QbGF5RmFpbHVyZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMud2ViUGxheWVyTG9hZGVyKSB7XG4gICAgICAgIHRoaXMuX3dlYlBsYXllckxvYWRlciA9IG9wdGlvbnMud2ViUGxheWVyTG9hZGVyO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5zaGFrYVBsYXllckxvYWRlcikge1xuICAgICAgICB0aGlzLl9zaGFrYVBsYXllckxvYWRlciA9IG9wdGlvbnMuc2hha2FQbGF5ZXJMb2FkZXI7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmhsc0pzTG9hZGVyKSB7XG4gICAgICAgIHRoaXMuX2hsc0pzTG9hZGVyID0gb3B0aW9ucy5obHNKc0xvYWRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTREsuX2luaXRpYWxpemVkLnZhbHVlID0gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRpYyBkaXNwb3NlKCk6IHZvaWQge1xuICAgIFNESy5faW5pdGlhbGl6ZWQudmFsdWUgPSBmYWxzZTtcbiAgICB0aGlzLl9hcHBsaWNhdGlvbkFjdGl2aXR5TW9uaXRvci5kaXNwb3NlKCk7XG4gICAgdGhpcy5fYXBwbGljYXRpb25BY3Rpdml0eU1vbml0b3IgPSBudWxsO1xuICB9XG5cbiAgc3RhdGljIGdldFRlbGVtZXRyeVVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFRlbGVtZXRyeVVybC5nZXRUZWxlbWV0cnlVcmwodXJsKTtcbiAgfVxuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTREsgaXMgYSBzdGF0aWMgY2xhc3MgdGhhdCBtYXkgbm90IGJlIGluc3RhbnRpYXRlZCcpO1xuICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmxvYWQnLCAoKSA9PiB7XG4gIFNESy5kaXNwb3NlKCk7XG59KTtcblxuU0RLLmFwcGx5RGlzY292ZXJ5VXJpRGVmYXVsdEZyb21QYXJhbWV0ZXJDb25maWd1cmF0aW9uKCk7XG5TREsuYXBwbHlNZXRyaWNzQ29uZmlndXJhdGlvbigpO1xuU0RLLmFwcGx5VGVsZW1ldHJ5Q29uZmlndXJhdGlvbigpO1xuU0RLLmFwcGx5QXV0b21hdGljYWxseVJldHJ5T25GYWlsdXJlRnJvbVBhcmFtZXRlckNvbmZpZ3VyYXRpb24oKTtcblNESy5hcHBseUF1dG9tYXRpY2FsbHlSZWNvbm5lY3RQZWVyQ29ubmVjdGlvbkZyb21QYXJhbWV0ZXJDb25maWd1cmF0aW9uKCk7XG5TREsuaW5pdCgpOyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWxlbWV0cnlVcmwge1xuICBzdGF0aWMgZ2V0VGVsZW1ldHJ5VXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYmFzZVVSTCA9IG5ldyBVUkwodXJsKTtcbiAgICAgIGNvbnN0IHNlZ21lbnRzID0gYmFzZVVSTC5ob3N0bmFtZS5zcGxpdCgnLicpO1xuXG4gICAgICBzd2l0Y2ggKGJhc2VVUkwucHJvdG9jb2wpIHtcbiAgICAgICAgY2FzZSAnd3M6JzpcbiAgICAgICAgICBiYXNlVVJMLnByb3RvY29sID0gJ2h0dHA6JztcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd3c3M6JzpcbiAgICAgICAgICBiYXNlVVJMLnByb3RvY29sID0gJ2h0dHBzOic7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID09PSAyIHx8XG4gICAgICAgICAgKHNlZ21lbnRzLmxlbmd0aCA9PT0gMyAmJiBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAyXS5sZW5ndGggPD0gMiAmJiBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5sZW5ndGggPD0gMylcbiAgICAgICkge1xuICAgICAgICBzZWdtZW50cy51bnNoaWZ0KCd0ZWxlbWV0cnknKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VnbWVudHNbMF0uc3RhcnRzV2l0aCgnc3RnLScpIHx8IHNlZ21lbnRzWzBdLmVuZHNXaXRoKCctc3RnJykgfHwgc2VnbWVudHNbMF0uaW5jbHVkZXMoJy1zdGctJykgfHwgc2VnbWVudHNbMF0gPT09ICdzdGcnKSB7XG4gICAgICAgIHNlZ21lbnRzWzBdID0gJ3RlbGVtZXRyeS1zdGcnO1xuICAgICAgfSBlbHNlIGlmIChzZWdtZW50c1swXS5zdGFydHNXaXRoKCdsb2NhbCcpIHx8IHNlZ21lbnRzWzBdLmVuZHNXaXRoKCctbG9jYWwnKSkge1xuICAgICAgICAvLyBMZWF2ZSBVUkwgdW5jaGFuZ2VkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWdtZW50c1swXSA9ICd0ZWxlbWV0cnknO1xuICAgICAgfVxuXG4gICAgICBiYXNlVVJMLmhvc3RuYW1lID0gc2VnbWVudHMuam9pbignLicpO1xuXG4gICAgICByZXR1cm4gYCR7YmFzZVVSTC5vcmlnaW59L3RlbGVtZXRyeWA7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cblxuY29uc3QgZGVmYXVsdERpc2NvdmVyeVVyaSA9ICdodHRwczovL3BjYXN0LnBoZW5peHJ0cy5jb20vcGNhc3QvZW5kUG9pbnRzJztcblxuZXhwb3J0IHtkZWZhdWx0RGlzY292ZXJ5VXJpfTsiLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHtkZWZhdWx0RGlzY292ZXJ5VXJpfSBmcm9tICcuLi9kZWZhdWx0cyc7XG5pbXBvcnQgU3ViamVjdCBmcm9tICcuLi8uLi9yeC9TdWJqZWN0JztcbmltcG9ydCBWZXJzaW9uTWFuYWdlciBmcm9tICcuLi92ZXJzaW9uL1ZlcnNpb25NYW5hZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzY292ZXJ5VXJpIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2Rpc2NvdmVyeVVyaTogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3Q8c3RyaW5nPihkZWZhdWx0RGlzY292ZXJ5VXJpKTtcblxuICBzdGF0aWMgZ2V0IHVyaSgpOiBTdWJqZWN0PHN0cmluZz4ge1xuICAgIHJldHVybiBEaXNjb3ZlcnlVcmkuX2Rpc2NvdmVyeVVyaTtcbiAgfVxuXG4gIHN0YXRpYyBidWlsZERpc2NvdmVyeVVybCh1cmk6IFVSTCk6IHN0cmluZyB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTCh1cmkudG9TdHJpbmcoKSk7XG4gICAgY29uc3Qgc2RrVmVyc2lvbiA9IFZlcnNpb25NYW5hZ2VyLnNka1ZlcnNpb247XG5cbiAgICB1cmwuc2VhcmNoID0gYD8ke25ldyBVUkxTZWFyY2hQYXJhbXMoW1sndmVyc2lvbicsIHNka1ZlcnNpb25dLCBbJ18nLCBgJHtEYXRlLm5vdygpfWBdXSkudG9TdHJpbmcoKX1gO1xuXG4gICAgaWYgKHVybC5wYXRobmFtZSA9PT0gJy8nKSB7XG4gICAgICB1cmwucGF0aG5hbWUgPSAnL3BjYXN0L2VuZFBvaW50cyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVybC50b1N0cmluZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Rpc2NvdmVyeVVyaSBpcyBhIHN0YXRpYyBjbGFzcyB0aGF0IG1heSBub3QgYmUgaW5zdGFudGlhdGVkJyk7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCBMb2dnZXJGYWN0b3J5IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXJGYWN0b3J5JztcbmltcG9ydCB7SUVkZ2VBdXRofSBmcm9tICcuL0VkZ2VBdXRoVG9rZW4nO1xuaW1wb3J0IHtJTG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VySW50ZXJmYWNlJztcbmltcG9ydCB7RWRnZVRva2VufSBmcm9tICcuL0VkZ2VUb2tlbic7XG5cbmNvbnN0IGVkZ2VBdXRoVG9rZW5QcmVmaXggPSAnRElHRVNUOic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkZ2VBdXRoIHtcbiAgcHJpdmF0ZSBzdGF0aWMgX2xvZ2dlcjogSUxvZ2dlciA9IExvZ2dlckZhY3RvcnkuZ2V0TG9nZ2VyKCdFZGdlQXV0aCcpO1xuXG4gIHN0YXRpYyBwYXJzZVRva2VuKHRva2VuOiBFZGdlVG9rZW4pOiBJRWRnZUF1dGgge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkVG9rZW4odG9rZW4pKSB7XG4gICAgICBFZGdlQXV0aC5fbG9nZ2VyLmVycm9yKCdUb2tlbiBpcyBub3QgdmFsaWQgWyVzXScsIHRva2VuKTtcblxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZW5jb2RlZEVkZ2VBdXRoVG9rZW4gPSBhdG9iKHRva2VuLnN1YnN0cihlZGdlQXV0aFRva2VuUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgY29uc3QgZWRnZUF1dGhUb2tlbiA9IEpTT04ucGFyc2UoZW5jb2RlZEVkZ2VBdXRoVG9rZW4pO1xuXG4gICAgICBlZGdlQXV0aFRva2VuLnRva2VuID0gSlNPTi5wYXJzZShlZGdlQXV0aFRva2VuLnRva2VuKTtcblxuICAgICAgcmV0dXJuIGVkZ2VBdXRoVG9rZW47XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgRWRnZUF1dGguX2xvZ2dlci5lcnJvcignQ2Fubm90IHBhcnNlIHRva2VuIHZhbHVlJywgZSk7XG5cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldFVyaShwYXJzZWRUb2tlbjogSUVkZ2VBdXRoKTogVVJMIHtcbiAgICByZXR1cm4gcGFyc2VkVG9rZW4gJiYgcGFyc2VkVG9rZW4udG9rZW4gJiYgcGFyc2VkVG9rZW4udG9rZW4udXJpID9cbiAgICAgIG5ldyBVUkwocGFyc2VkVG9rZW4udG9rZW4udXJpKSA6IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0VGVuYW5jeShwYXJzZWRUb2tlbjogSUVkZ2VBdXRoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcGFyc2VkVG9rZW4gJiYgcGFyc2VkVG9rZW4uYXBwbGljYXRpb25JZCA/XG4gICAgICBwYXJzZWRUb2tlbi5hcHBsaWNhdGlvbklkIDogJyc7XG4gIH1cblxuICBzdGF0aWMgaXNWYWxpZFRva2VuKHRva2VuOiBFZGdlVG9rZW4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0b2tlbiAmJiB0b2tlbi5zdGFydHNXaXRoKGVkZ2VBdXRoVG9rZW5QcmVmaXgpO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQgQnJvd3NlckRldGVjdG9yIGZyb20gJy4uLy4uL2RvbS9Ccm93c2VyRGV0ZWN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZWF0dXJlRW5hYmxlbWVudCB7XG4gIHN0YXRpYyBnZXQgY2xpZW50T2ZmZXJEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAvLyBDbGllbnQgb2ZmZXIgd29ya2Zsb3cgZG9lcyBub3Qgd29yayBjb3JyZWN0bHkgaW4gdGhlIGZvbGxvd2luZyBicm93c2Vyc1xuICAgIHJldHVybiBCcm93c2VyRGV0ZWN0b3IuaXNDaHJvbWU3NCB8fFxuICAgICAgQnJvd3NlckRldGVjdG9yLmlzQ2hyb21lNzUgfHxcbiAgICAgIEJyb3dzZXJEZXRlY3Rvci5pc0Nocm9tZTc2IHx8XG4gICAgICBCcm93c2VyRGV0ZWN0b3IuaXNDaHJvbWU3NztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgYWRkVHJhbmNlaXZlckRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIC8vIENocm9tZSA2OSwgNzAsIDcxLCA3MiBleHBvc2VzIGBhZGRUcmFuY2VpdmVyYCBidXQgaXQgZG9lcyBub3Qgd29yayBjb3JyZWN0bHlcbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yLmlzQ2hyb21lNjkgfHxcbiAgICAgIEJyb3dzZXJEZXRlY3Rvci5pc0Nocm9tZTcwIHx8XG4gICAgICBCcm93c2VyRGV0ZWN0b3IuaXNDaHJvbWU3MSB8fFxuICAgICAgQnJvd3NlckRldGVjdG9yLmlzQ2hyb21lNzI7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGdldFN0YXRzUHJvbWlzZUJhc2VkRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTmFtZSA9PT0gJ0Nocm9tZScgJiYgQnJvd3NlckRldGVjdG9yLmJyb3dzZXJNYWpvclZlcnNpb24gPD0gNjY7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGdldEN1cnJlbnRPZmZlckRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck5hbWUgPT09ICdDaHJvbWUnICYmIEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTWFqb3JWZXJzaW9uIDw9IDY5IHx8XG4gICAgICBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck5hbWUgPT09ICdGaXJlZm94JyAmJiBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck1ham9yVmVyc2lvbiA8PSA1NjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb25UcmFja0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck5hbWUgPT09ICdDaHJvbWUnICYmIEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTWFqb3JWZXJzaW9uIDw9IDYzIHx8XG4gICAgICBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck5hbWUgPT09ICdGaXJlZm94JyAmJiBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck1ham9yVmVyc2lvbiA8PSA1MjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgd2Via2l0UlRDUGVlckNvbm5lY3Rpb25FbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck5hbWUgPT09ICdDaHJvbWUnICYmIEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTWFqb3JWZXJzaW9uIDw9IDU1O1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9taXNlQmFzZWRQQ01ldGhvZHNEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yLmJyb3dzZXJOYW1lID09PSAnRmlyZWZveCcgJiYgQnJvd3NlckRldGVjdG9yLmJyb3dzZXJNYWpvclZlcnNpb24gPD0gNTI7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHNob3VsZFVzZU5hdGl2ZUhscygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yLmJyb3dzZXJOYW1lID09PSAnU2FmYXJpJyB8fFxuICAgICAgQnJvd3NlckRldGVjdG9yLmJyb3dzZXJOYW1lID09PSAnU2Ftc3VuZ0Jyb3dzZXInO1xuICB9XG5cbiAgc3RhdGljIGdldCBpc1JUTVBFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoQnJvd3NlckRldGVjdG9yLmJyb3dzZXJOYW1lID09PSAnRmlyZWZveCcgJiYgQnJvd3NlckRldGVjdG9yLmJyb3dzZXJNYWpvclZlcnNpb24gPCA4NCkgfHxcbiAgICAgIChCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck5hbWUgPT09ICdDaHJvbWUnICYmIEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTWFqb3JWZXJzaW9uIDwgNzApIHx8XG4gICAgICBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck5hbWUgPT09ICdFZGdlJyB8fFxuICAgICAgQnJvd3NlckRldGVjdG9yLmJyb3dzZXJOYW1lID09PSAnSUUnO1xuICB9XG5cbiAgc3RhdGljIGdldCBpc1ByZWNhY2hpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck5hbWUgIT09ICdJRSc7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IFNESyBmcm9tICcuLi9TREsnO1xuXG5leHBvcnQge1NES307XG5cbmV4cG9ydCBkZWZhdWx0IHtTREt9OyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuZGVjbGFyZSBjb25zdCBfX1NES1ZFUlNJT05fXzogc3RyaW5nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJzaW9uTWFuYWdlciB7XG4gIHByaXZhdGUgc3RhdGljIF9kZWZhdWx0VmVyc2lvbiA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcblxuICBzdGF0aWMgZ2V0IHNka1ZlcnNpb24oKTogc3RyaW5nIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIF9fU0RLVkVSU0lPTl9fO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0VmVyc2lvbjtcbiAgICB9XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCBUZWxlbWV0cnlTZXJ2aWNlIGZyb20gJy4vVGVsZW1ldHJ5U2VydmljZSc7XG5pbXBvcnQgVGVsZW1ldHJ5Q29uZmlndXJhdGlvbiBmcm9tICcuL1RlbGVtZXRyeUNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHtJQXBwZW5kZXJ9IGZyb20gJy4uL2xvZ2dlci9JQXBwZW5kZXInO1xuaW1wb3J0IHtMb2dnaW5nTGV2ZWx9IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWxlbWV0cnlBcHBlbmRlciBpbXBsZW1lbnRzIElBcHBlbmRlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3RlbGVtZXRyeVNlcnZpY2U6IFRlbGVtZXRyeVNlcnZpY2U7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3RlbmFuY3k6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfc2Vzc2lvbklkOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3RocmVzaG9sZDogTG9nZ2luZ0xldmVsO1xuXG4gIGNvbnN0cnVjdG9yKHRlbGVtZXRyeUNvbmZpZ3VyYXRpb246IFRlbGVtZXRyeUNvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl90ZW5hbmN5ID0gdGVsZW1ldHJ5Q29uZmlndXJhdGlvbi50ZW5hbmN5O1xuICAgIHRoaXMuX3Nlc3Npb25JZCA9IHRlbGVtZXRyeUNvbmZpZ3VyYXRpb24uc2Vzc2lvbklkO1xuICAgIHRoaXMuX3RocmVzaG9sZCA9IHRlbGVtZXRyeUNvbmZpZ3VyYXRpb24udGhyZXNob2xkO1xuICAgIHRoaXMuX3RlbGVtZXRyeVNlcnZpY2UgPSBuZXcgVGVsZW1ldHJ5U2VydmljZSh0ZWxlbWV0cnlDb25maWd1cmF0aW9uKTtcbiAgfVxuXG4gIGxvZyhsb2dMZXZlbDogTG9nZ2luZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcsIGNhdGVnb3J5OiBzdHJpbmcsIGRhdGU6IERhdGUpOiB2b2lkIHtcbiAgICBpZiAobG9nTGV2ZWwgPCB0aGlzLl90aHJlc2hvbGQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl90ZWxlbWV0cnlTZXJ2aWNlLnB1c2gobG9nTGV2ZWwsIG1lc3NhZ2UsIGNhdGVnb3J5LCBkYXRlKTtcbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IHtMb2dnaW5nTGV2ZWx9IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IExvZ2dlckRlZmF1bHRzIGZyb20gJy4uL2xvZ2dlci9Mb2dnZXJEZWZhdWx0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbGVtZXRyeUNvbmZpZ3VyYXRpb24ge1xuICBwcml2YXRlIF91cmwgPSAnaHR0cHM6Ly90ZWxlbWV0cnkucGhlbml4cnRzLmNvbS90ZWxlbWV0cnkvbG9ncyc7XG4gIHByaXZhdGUgX3RlbmFuY3k6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2Vzc2lvbklkOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Vudmlyb25tZW50OiBzdHJpbmc7XG4gIHByaXZhdGUgX3RocmVzaG9sZCA9IExvZ2dlckRlZmF1bHRzLmRlZmF1bHRUZWxlbWV0cnlMb2dnaW5nTGV2ZWw7XG5cbiAgZ2V0IHVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl91cmw7XG4gIH1cblxuICBzZXQgdXJsKHVybDogc3RyaW5nKSB7XG4gICAgY29uc3QgdGVsZW1ldHJ5VXJsID0gbmV3IFVSTCh1cmwpO1xuXG4gICAgdGVsZW1ldHJ5VXJsLnBhdGhuYW1lID0gdGVsZW1ldHJ5VXJsLnBhdGhuYW1lICsgJy9sb2dzJztcblxuICAgIHRoaXMuX3VybCA9IHRlbGVtZXRyeVVybC50b1N0cmluZygpO1xuICB9XG5cbiAgZ2V0IGVudmlyb25tZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Vudmlyb25tZW50O1xuICB9XG5cbiAgc2V0IGVudmlyb25tZW50KGVudmlyb25tZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICB9XG5cbiAgZ2V0IHRlbmFuY3koKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGVuYW5jeTtcbiAgfVxuXG4gIHNldCB0ZW5hbmN5KHRlbmFuY3k6IHN0cmluZykge1xuICAgIHRoaXMuX3RlbmFuY3kgPSB0ZW5hbmN5O1xuICB9XG5cbiAgZ2V0IHNlc3Npb25JZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9uSWQ7XG4gIH1cblxuICBzZXQgc2Vzc2lvbklkKHNlc3Npb25JZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2Vzc2lvbklkID0gc2Vzc2lvbklkO1xuICB9XG5cbiAgZ2V0IHRocmVzaG9sZCgpOiBMb2dnaW5nTGV2ZWwge1xuICAgIHJldHVybiB0aGlzLl90aHJlc2hvbGQ7XG4gIH1cblxuICBzZXQgdGhyZXNob2xkKHRocmVzaG9sZDogTG9nZ2luZ0xldmVsKSB7XG4gICAgdGhpcy5fdGhyZXNob2xkID0gdGhyZXNob2xkO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQge0xvZ2dpbmdMZXZlbH0gZnJvbSAnLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQgVmVyc2lvbk1hbmFnZXIgZnJvbSAnLi4vc2RrL3ZlcnNpb24vVmVyc2lvbk1hbmFnZXInO1xuaW1wb3J0IFRlbGVtZXRyeUNvbmZpZ3VyYXRpb24gZnJvbSAnLi9UZWxlbWV0cnlDb25maWd1cmF0aW9uJztcblxuY29uc3QgcmVxdWVzdFNpemVMaW1pdCA9IDgxOTI7XG5cbmludGVyZmFjZSBJTG9nSXRlbSB7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xuICB0ZW5hbmN5OiBzdHJpbmc7XG4gIGxldmVsOiBzdHJpbmc7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgc2Vzc2lvbklkOiBzdHJpbmc7XG4gIHZlcnNpb246IHN0cmluZztcbiAgZW52aXJvbm1lbnQ6IHN0cmluZztcbiAgZnVsbFF1YWxpZmllZE5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVsZW1ldHJ5U2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3RlbGVtZXRyeUNvbmZpZ3VyYXRpb246IFRlbGVtZXRyeUNvbmZpZ3VyYXRpb247XG5cbiAgcHJpdmF0ZSBfbG9nczogQXJyYXk8SUxvZ0l0ZW0+ID0gW107XG4gIHByaXZhdGUgX2lzU2VuZGluZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZG9tYWluID0gbG9jYXRpb24uaG9zdG5hbWU7XG5cbiAgY29uc3RydWN0b3IodGVsZW1ldHJ5Q29uZmlndXJhdGlvbjogVGVsZW1ldHJ5Q29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX3RlbGVtZXRyeUNvbmZpZ3VyYXRpb24gPSB0ZWxlbWV0cnlDb25maWd1cmF0aW9uO1xuICB9XG5cbiAgcHVzaChsb2dMZXZlbDogTG9nZ2luZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcsIGNhdGVnb3J5OiBzdHJpbmcsIHRpbWVzdGFtcDogRGF0ZSk6IHZvaWQge1xuICAgIGNvbnN0IGxvZ1JlY29yZCA9IHtcbiAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLnRvSVNPU3RyaW5nKCksXG4gICAgICB0ZW5hbmN5OiB0aGlzLl90ZWxlbWV0cnlDb25maWd1cmF0aW9uLnRlbmFuY3ksXG4gICAgICBsZXZlbDogTG9nZ2luZ0xldmVsW2xvZ0xldmVsXSxcbiAgICAgIGNhdGVnb3J5LFxuICAgICAgbWVzc2FnZSxcbiAgICAgIHNlc3Npb25JZDogdGhpcy5fdGVsZW1ldHJ5Q29uZmlndXJhdGlvbi5zZXNzaW9uSWQsXG4gICAgICB2ZXJzaW9uOiBWZXJzaW9uTWFuYWdlci5zZGtWZXJzaW9uLFxuICAgICAgZW52aXJvbm1lbnQ6IHRoaXMuX3RlbGVtZXRyeUNvbmZpZ3VyYXRpb24uZW52aXJvbm1lbnQsXG4gICAgICBmdWxsUXVhbGlmaWVkTmFtZTogdGhpcy5fZG9tYWluXG4gICAgfTtcblxuICAgIGlmIChsb2dMZXZlbCA8IExvZ2dpbmdMZXZlbC5FcnJvcikge1xuICAgICAgdGhpcy5fbG9ncy5wdXNoKGxvZ1JlY29yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xvZ3MudW5zaGlmdChsb2dSZWNvcmQpO1xuICAgIH1cblxuICAgIGNvbnN0IGlnbm9yZWQgPSB0aGlzLnNlbmRMb2dzSWZBYmxlKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNlbmRMb2dzKGxvZ01lc3NhZ2VzOiBBcnJheTxJTG9nSXRlbT4pOiBQcm9taXNlPFJlc3BvbnNlIHwgdm9pZD4ge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2pzb25Cb2R5JywgSlNPTi5zdHJpbmdpZnkoe3JlY29yZHM6IGxvZ01lc3NhZ2VzfSkpO1xuXG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKHRoaXMuX3RlbGVtZXRyeUNvbmZpZ3VyYXRpb24udXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IGZvcm1EYXRhXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNlbmRMb2dzSWZBYmxlKCk6IFByb21pc2U8UmVzcG9uc2UgfCB2b2lkPiB7XG4gICAgaWYgKHRoaXMuX2xvZ3MubGVuZ3RoIDw9IDAgfHwgdGhpcy5faXNTZW5kaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG51bWJlck9mTG9nc1RvU2VuZCA9IDA7XG4gICAgbGV0IHNpemVPZkxvZ3NUb1NlbmQgPSAwO1xuXG4gICAgdGhpcy5faXNTZW5kaW5nID0gdHJ1ZTtcblxuICAgIGNvbnN0IGdldExvZ1NpemUgPSAobG9nOiBJTG9nSXRlbSk6IG51bWJlciA9PiBPYmplY3QudmFsdWVzKGxvZylcbiAgICAgIC5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgKGl0ZW0gPyBpdGVtLmxlbmd0aCA6IDApLCAwKTtcblxuICAgIHdoaWxlICh0aGlzLl9sb2dzLmxlbmd0aCA+IG51bWJlck9mTG9nc1RvU2VuZCAmJiBnZXRMb2dTaXplKHRoaXMuX2xvZ3NbbnVtYmVyT2ZMb2dzVG9TZW5kXSkgKyBzaXplT2ZMb2dzVG9TZW5kIDwgcmVxdWVzdFNpemVMaW1pdCkge1xuICAgICAgc2l6ZU9mTG9nc1RvU2VuZCArPSBnZXRMb2dTaXplKHRoaXMuX2xvZ3NbbnVtYmVyT2ZMb2dzVG9TZW5kXSk7XG4gICAgICBudW1iZXJPZkxvZ3NUb1NlbmQrKztcbiAgICB9XG5cbiAgICBpZiAoIW51bWJlck9mTG9nc1RvU2VuZCkge1xuICAgICAgdGhpcy5fbG9nc1tudW1iZXJPZkxvZ3NUb1NlbmRdLm1lc3NhZ2UgPSB0aGlzLl9sb2dzW251bWJlck9mTG9nc1RvU2VuZF0ubWVzc2FnZS5zdWJzdHJpbmcoMCxcbiAgICAgICAgZ2V0TG9nU2l6ZSh0aGlzLl9sb2dzW251bWJlck9mTG9nc1RvU2VuZF0pICsgKHJlcXVlc3RTaXplTGltaXQgLSBnZXRMb2dTaXplKHRoaXMuX2xvZ3NbbnVtYmVyT2ZMb2dzVG9TZW5kXSkpKTtcbiAgICAgIG51bWJlck9mTG9nc1RvU2VuZCA9IDE7XG4gICAgfVxuXG4gICAgY29uc3QgbG9nTWVzc2FnZXMgPSB0aGlzLl9sb2dzLnNsaWNlKDAsIG51bWJlck9mTG9nc1RvU2VuZCk7XG5cbiAgICB0aGlzLl9sb2dzID0gdGhpcy5fbG9ncy5zbGljZShudW1iZXJPZkxvZ3NUb1NlbmQpO1xuXG4gICAgcmV0dXJuIHRoaXMuc2VuZExvZ3MobG9nTWVzc2FnZXMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5faXNTZW5kaW5nID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IGlnbm9yZWQgPSB0aGlzLnNlbmRMb2dzSWZBYmxlKCk7XG5cbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICB0aGlzLl9pc1NlbmRpbmcgPSBmYWxzZTtcblxuICAgICAgY29uc3QgaWdub3JlZCA9IHRoaXMuc2VuZExvZ3NJZkFibGUoKTtcbiAgICB9KTtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zZGsvbWVzc2FnaW5nL2luZGV4LnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==