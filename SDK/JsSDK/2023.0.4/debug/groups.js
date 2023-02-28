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
/* harmony export */   "default": () => /* binding */ ConfigurationParameterReader
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _metrics_TelemetryDefault__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../metrics/TelemetryDefault */ "./src/metrics/TelemetryDefault.ts");
/* harmony import */ var _metrics_TelemetricLevelMapping__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../metrics/TelemetricLevelMapping */ "./src/metrics/TelemetricLevelMapping.ts");
/* harmony import */ var _logger_LoggingLevelMapping__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logger/LoggingLevelMapping */ "./src/logger/LoggingLevelMapping.ts");
/* harmony import */ var _logger_LoggerDefaults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logger/LoggerDefaults */ "./src/logger/LoggerDefaults.ts");


/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */




var ConfigurationParameterReader = /*#__PURE__*/function () {
  function ConfigurationParameterReader() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, ConfigurationParameterReader);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(ConfigurationParameterReader, [{
    key: "getStringValue",
    value: function getStringValue(name) {
      return this.readConfigurationParameterValue(name) || this.readConfigurationParameterURIValue("".concat(name, "-uri-parameter-name")) || this.defaultStringValue[name];
    }
  }, {
    key: "getBooleanValue",
    value: function getBooleanValue(name) {
      var value = this.readConfigurationParameterValue(name);
      if (value) {
        return value === 'true' || value === '1' || value === 'On';
      }
      var valueFromUri = this.readConfigurationParameterURIValue("".concat(name, "-uri-parameter-name"));
      if (valueFromUri) {
        return value === 'true' || value === '1' || value === 'On';
      }
      return this.defaultBooleanValue[name] === true;
    }
  }, {
    key: "defaultStringValue",
    get: function get() {
      return {
        'phenix-metrics-level': _metrics_TelemetricLevelMapping__WEBPACK_IMPORTED_MODULE_3__.default.convertTelemetryLevelToTelemetryLevelType(_metrics_TelemetryDefault__WEBPACK_IMPORTED_MODULE_2__.default.defaultTelemetryLevel),
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
  }, {
    key: "readConfigurationParameterValue",
    value: function readConfigurationParameterValue(name) {
      var metaValue = document.querySelector("meta[name='".concat(name, "']"));
      if (!metaValue) {
        return;
      }
      var value = metaValue.getAttribute('value');
      if (!value) {
        return;
      }
      return value;
    }
  }, {
    key: "readConfigurationParameterURIValue",
    value: function readConfigurationParameterURIValue(name) {
      var valueURIParameterName = this.readConfigurationParameterValue(name);
      if (!valueURIParameterName) {
        return;
      }
      var value = new URLSearchParams(location.search).get(valueURIParameterName) || undefined;
      if (!value) {
        return;
      }
      return value;
    }
  }]);
  return ConfigurationParameterReader;
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
        this._isPrivate = false;
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

/***/ "./src/sdk/groups/index.ts":
/*!*********************************!*
  !*** ./src/sdk/groups/index.ts ***!
  \*********************************/
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
/******/ 	return __webpack_require__("./src/sdk/groups/index.ts");
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waGVuaXgvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9waGVuaXgvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lLmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvUHJpbWl0aXZlLmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvUHJvcGVydHlLZXkuanMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvZG9tL0FwcGxpY2F0aW9uQWN0aXZpdHlNb25pdG9yLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9kb20vQnJvd3NlckRldGVjdG9yLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9kb20vQ29uZmlndXJhdGlvblBhcmFtZXRlclJlYWRlci50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvZG9tL1ByaXZhY3lNb2RlLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9sYW5nL0Rpc3Bvc2FibGUudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL2xhbmcvRGlzcG9zYWJsZUxpc3QudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL2xhbmcvU3RyaW5ncy50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvbGFuZy9hc3NlcnRVbnJlYWNoYWJsZS50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvbG9nZ2VyL0FwcGVuZGVycy50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvbG9nZ2VyL0NvbnNvbGVBcHBlbmRlci50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvbG9nZ2VyL0xvZ2dlci50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvbG9nZ2VyL0xvZ2dlckRlZmF1bHRzLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9sb2dnZXIvTG9nZ2VyRmFjdG9yeS50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvbG9nZ2VyL0xvZ2dpbmdMZXZlbE1hcHBpbmcudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL2xvZ2dlci9Mb2dnaW5nVGhyZXNob2xkLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9tZXRyaWNzL01ldHJpY1R5cGUudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL21ldHJpY3MvTWV0cmljc0NvbmZpZ3VyYXRpb24udHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL21ldHJpY3MvTWV0cmljc0ZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL21ldHJpY3MvTWV0cmljc1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL21ldHJpY3MvTWV0cmljc1R5cGUudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL21ldHJpY3MvVGVsZW1ldHJpY0xldmVsTWFwcGluZy50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvbWV0cmljcy9UZWxlbWV0cnlEZWZhdWx0LnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9wcm9taXNlL1Byb21pc2UudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL3Byb21pc2UvUHJvbWlzZUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL3J0Yy9WYW5pbGxhUGVlckNvbm5lY3Rpb24udHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL3J0Yy9WYW5pbGxhUGVlckNvbm5lY3Rpb25GYWN0b3J5LnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9yeC9SZWFkT25seVN1YmplY3QudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL3J4L1N1YmplY3QudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL3Nkay9FbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvc2RrL1NESy50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvc2RrL1RlbGVtZXRyeVVybC50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvc2RrL2RlZmF1bHRzLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9zZGsvZGlzY292ZXJ5L0Rpc2NvdmVyeVVyaS50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvc2RrL2VkZ2VBdXRoL0VkZ2VBdXRoLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9zZGsvZmVhdHVyZS9GZWF0dXJlRW5hYmxlbWVudC50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvc2RrL2dyb3Vwcy9pbmRleC50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvc2RrL3ZlcnNpb24vVmVyc2lvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL3RlbGVtZXRyeS9UZWxlbWV0cnlBcGVuZGVyLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy90ZWxlbWV0cnkvVGVsZW1ldHJ5Q29uZmlndXJhdGlvbi50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvdGVsZW1ldHJ5L1RlbGVtZXRyeVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vcGhlbml4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BoZW5peC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9waGVuaXgvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BoZW5peC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BoZW5peC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BoZW5peC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiZGVmYXVsdERvY3VtZW50Rm9jdXNJbnRlcnZhbFRpbWVvdXQiLCJBcHBsaWNhdGlvbkFjdGl2aXR5TW9uaXRvciIsIkRpc3Bvc2FibGVMaXN0IiwiRGF0ZSIsIm5vdyIsIl9pc0ZvcmVncm91bmQiLCJTdWJqZWN0IiwiX3JlYWRPbmx5SXNGb3JlZ3JvdW5kIiwiUmVhZE9ubHlTdWJqZWN0IiwiZGV0ZWN0VGFiRm9jdXNDaGFuZ2UiLCJfdGltZU9mTGFzdFRhYkZvY3VzQ2hhbmdlIiwiX2Rpc3Bvc2FibGVzIiwiZGlzcG9zZSIsImhpZGRlbiIsInZpc2liaWxpdHlDaGFuZ2UiLCJkb2N1bWVudCIsIm1zSGlkZGVuIiwid2Via2l0SGlkZGVuIiwiaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSIsImlzRm9yZWdyb3VuZCIsInNldEZvY3VzU3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkIiwiRGlzcG9zYWJsZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsaXN0ZW5Gb3JEb2N1bWVudEZvY3VzIiwiY2FsbCIsIl9kb2N1bWVudEZvY3VzSW50ZXJ2YWwiLCJ3aW5kb3ciLCJzZXRJbnRlcnZhbCIsImhhc0ZvY3VzIiwiY2xlYXJJbnRlcnZhbCIsInZhbHVlIiwiQnJvd3NlckRldGVjdG9yIiwiX2Jyb3dzZXJOYW1lQW5kVmVyc2lvbiIsIl9icm93c2VyTmFtZSIsIl9icm93c2VyTWFqb3JWZXJzaW9uIiwiX2lzQ2hyb21lNjkiLCJfaXNDaHJvbWU3MCIsIl9pc0Nocm9tZTcxIiwiX2lzQ2hyb21lNzIiLCJfaXNDaHJvbWU3NCIsIl9pc0Nocm9tZTc1IiwiX2lzQ2hyb21lNzYiLCJfaXNDaHJvbWU3NyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImJyb3dzZXJOYW1lQW5kVmVyc2lvbiIsIm1hdGNoIiwiX2Jyb3dzZXJOYW1lQW5kVmVyc2lvblJlZ2V4IiwicGFyc2VCcm93c2VyTmFtZUFuZFZlcnNpb25Gb3JJRSIsImJyb3dzZXJOYW1lTGlzdCIsInNwbGl0IiwiYnJvd3NlclZlcnNpb25MaXN0IiwiZnVsbFZlcnNpb24iLCJOdW1iZXIiLCJtc2llIiwiaW5kZXhPZiIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwidHJpZGVudCIsInZlcnNpb24iLCJwYXJzZUJyb3dzZXJOYW1lQW5kVmVyc2lvbiIsInBhcnNlQnJvd3Nlck5hbWUiLCJwYXJzZUJyb3dzZXJNYWpvclZlcnNpb24iLCJpbmNsdWRlcyIsIkNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXIiLCJuYW1lIiwicmVhZENvbmZpZ3VyYXRpb25QYXJhbWV0ZXJWYWx1ZSIsInJlYWRDb25maWd1cmF0aW9uUGFyYW1ldGVyVVJJVmFsdWUiLCJkZWZhdWx0U3RyaW5nVmFsdWUiLCJ2YWx1ZUZyb21VcmkiLCJkZWZhdWx0Qm9vbGVhblZhbHVlIiwiVGVsZW1ldHJ5TGV2ZWxNYXBwaW5nIiwiVGVsZW1ldHJ5RGVmYXVsdCIsIkxvZ2dpbmdMZXZlbE1hcHBpbmciLCJMb2dnZXJEZWZhdWx0cyIsIm1ldGFWYWx1ZSIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJ2YWx1ZVVSSVBhcmFtZXRlck5hbWUiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsImdldCIsInVuZGVmaW5lZCIsIlByaXZhY3lNb2RlIiwiX2lzUHJpdmF0ZSIsIl9fUFJJVkFDWV9NT0RFX18iLCJlIiwiYXBwbHlJc1ByaXZhdGUiLCJkaXNwb3NhYmxlIiwiX2Rpc3Bvc2VkIiwiX2Rpc3Bvc2FibGUiLCJfbGlzdCIsInB1c2giLCJmb3JFYWNoIiwibGVuZ3RoIiwiU3RyaW5ncyIsIkVycm9yIiwicmFuZG9tMTNDaGFyYWN0ZXJzIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwibG9vcHMiLCJjZWlsIiwiQXJyYXkiLCJmaWxsIiwicmVkdWNlIiwic3RyaW5nIiwiZnVuYyIsImFzc2VydFVucmVhY2hhYmxlIiwieCIsIkFwcGVuZGVycyIsIl9hcHBlbmRlcnMiLCJhcHBlbmRlciIsIml0ZW1zIiwiaXRlbSIsIkNvbnNvbGVBcHBlbmRlciIsInRocmVzaG9sZCIsIl90aHJlc2hvbGQiLCJsb2dMZXZlbCIsIm1lc3NhZ2UiLCJjYXRlZ29yeSIsImRhdGUiLCJmdWxsTWVzc2FnZSIsInRvSVNPU3RyaW5nIiwiTG9nZ2luZ0xldmVsIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiTG9nZ2VyIiwiYXBwZW5kZXJzIiwiX2NhdGVnb3J5IiwiVHJhY2UiLCJhcmdzIiwiRGVidWciLCJJbmZvIiwiV2FybiIsIkZhdGFsIiwibGV2ZWwiLCJyZXBsYWNlUGxhY2Vob2xkZXJzIiwicmVwbGFjZVBsYWNlaG9sZGVyc1N0cmluZyIsImluZGV4IiwidHlwZSIsInJlcGxhY2VBcmd1bWVudCIsInNwbGljZSIsInN0cmluZ2lmeSIsImFjY3VtdWxhdG9yIiwiY3VycmVudFZhbHVlIiwiYXJyYXkiLCJzdGFjayIsImFyZyIsImNhY2hlIiwiSlNPTiIsImtleSIsIk9iamVjdCIsImFyZ3VtZW50IiwiZGF0YSIsInRvU3RyaW5nU3RyIiwiTG9nZ2VyRmFjdG9yeSIsIl90ZWxlbWV0cnlDb25maWd1cmF0aW9uIiwibG9nZ2VyIiwiX2xvZ2dlcnMiLCJhcHBseUxvZ2dpbmdMZXZlbCIsImFwcGx5QXBwZW5kZXJMb2dnaW5nTGV2ZWwiLCJhcHBseUNvbnNvbGVMb2dnZXIiLCJiaW5kIiwiYXBwbHlUZWxlbWV0cnlMb2dnZXIiLCJwYXJhbWV0ZXJWYWx1ZSIsIl9jb25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyIiwiZ2V0U3RyaW5nVmFsdWUiLCJzZXRUaHJlc2hvbGQiLCJhcHBseUFwcGVuZGVyIiwiVGVsZW1ldHJ5QXBwZW5kZXIiLCJMb2dnaW5nVGhyZXNob2xkIiwiVGVsZW1ldHJ5Q29uZmlndXJhdGlvbiIsImFwcGx5TG9nZ2VyQ29uZmlnRnJvbVBhcmFtZXRlckNvbmZpZ3VyYXRpb24iLCJsb2dnaW5nTGV2ZWwiLCJsb2dnaW5nTGV2ZWxUeXBlIiwiTWV0cmljVHlwZSIsIm1ldHJpY3MiLCJfbWV0cmljcyIsIk1ldHJpY3NUeXBlIiwiVGVsZW1ldHJ5TGV2ZWwiLCJNZXRyaWNzQ29uZmlndXJhdGlvbiIsIl91cmwiLCJ1cmwiLCJtZXRyaWNzVXJsIiwiVVJMIiwicGF0aG5hbWUiLCJfZW52aXJvbm1lbnQiLCJlbnZpcm9ubWVudCIsIl90ZW5hbmN5IiwidGVuYW5jeSIsIl9zZXNzaW9uSWQiLCJzZXNzaW9uSWQiLCJNZXRyaWNzRmFjdG9yeSIsIm1ldHJpY3NTZXJ2aWNlcyIsIl9tZXRyaWNzU2VydmljZXMiLCJtZXRyaWNzQ29uZmlndXJhdGlvbiIsIlNESyIsIlRlbGVtZXRyeVVybCIsIkVudmlyb25tZW50IiwiTWV0cmljc1NlcnZpY2UiLCJ0ZWxlbWV0cnlMZXZlbCIsInZhbHVlcyIsIm1ldHJpY3NTZXJ2aWNlIiwicmVxdWVzdFNpemVMaW1pdCIsImhvc3RuYW1lIiwiX21ldHJpY3NDb25maWd1cmF0aW9uIiwibWV0cmljIiwic3RyZWFtSWQiLCJwcmV2aW91c1ZhbHVlIiwicnVudGltZSIsInJlc291cmNlIiwia2luZCIsIm1ldHJpY1R5cGUiLCJnZXRUZWxlbWV0cnlMZXZlbCIsIm1ldHJpY1JlY29yZCIsInRpbWVzdGFtcCIsImdldE5hbWUiLCJmdWxsUXVhbGlmaWVkTmFtZSIsIl9kb21haW4iLCJWZXJzaW9uTWFuYWdlciIsImlnbm9yZWQiLCJzZW5kTWV0cmljc0lmQWJsZSIsIm1ldHJpY3NNZXNzYWdlcyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJyZWNvcmRzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiX2lzU2VuZGluZyIsInNsaWNlIiwic2VuZE1ldHJpY3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsInRlbGVtZXRyeUxldmVsVHlwZSIsIlByb21pc2UiLCJjYWxsYmFjayIsIlR5cGVFcnJvciIsIl9zdGF0ZSIsIl9oYW5kbGVkIiwiX3ZhbHVlIiwiX2RlZmVycmVkcyIsImRvUmVzb2x2ZSIsImRvbmUiLCJwcm9taXNlUmVzb2x2ZSIsInJlYXNvbiIsInByb21pc2VSZWplY3QiLCJuZXdWYWx1ZSIsInByb21pc2UiLCJmaW5hbGUiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbW1lZGlhdGUiLCJfdW5oYW5kbGVkUmVqZWN0aW9uIiwiaSIsImxlbiIsImhhbmRsZSIsImRlZmVycmVkIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwicmVzdWx0IiwiYXJyIiwicmVzb2x2ZSIsInJlamVjdCIsImlzQXJyYXkiLCJwcm90b3R5cGUiLCJyZW1haW5pbmciLCJtYW5hZ2VSZXNwb25zZSIsImNvbnN0cnVjdG9yIiwiXyIsInNldFRpbWVvdXQiLCJ3YXJuIiwiUHJvbWlzZUhhbmRsZXIiLCJWYW5pbGxhUGVlckNvbm5lY3Rpb24iLCJjb25maWd1cmF0aW9uIiwiRmVhdHVyZUVuYWJsZW1lbnQiLCJfcGVlckNvbm5lY3Rpb24iLCJ3ZWJraXRSVENQZWVyQ29ubmVjdGlvbiIsIlJUQ1BlZXJDb25uZWN0aW9uIiwiY3VycmVudExvY2FsRGVzY3JpcHRpb24iLCJjdXJyZW50UmVtb3RlRGVzY3JpcHRpb24iLCJpY2VDb25uZWN0aW9uU3RhdGUiLCJnZXRDb25maWd1cmF0aW9uIiwic2V0Q29uZmlndXJhdGlvbiIsImFkZFRyYW5zY2VpdmVyIiwib3B0aW9ucyIsImNyZWF0ZU9mZmVyIiwiY3JlYXRlQW5zd2VyIiwiZGVzY3JpcHRpb24iLCJzZXRMb2NhbERlc2NyaXB0aW9uIiwiUlRDU2Vzc2lvbkRlc2NyaXB0aW9uIiwiaGFzQ3J5cHRvIiwic2RwIiwiX2xvZ2dlciIsInNldFJlbW90ZURlc2NyaXB0aW9uIiwiZ2V0U2VuZGVycyIsInNlbGVjdG9yIiwiZ2V0U3RhdHMiLCJsaXN0ZW5lciIsIm1lZGlhU3RyZWFtIiwiZ2V0VHJhY2tzIiwidHJhY2siLCJhZGRUcmFjayIsIm9udHJhY2siLCJoYW5kbGVyIiwib25pY2VjYW5kaWRhdGUiLCJvbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSIsImNsb3NlIiwiVmFuaWxsYVBlZXJDb25uZWN0aW9uRmFjdG9yeSIsInN1YmplY3QiLCJfc3ViamVjdCIsInN1YnNjcmliZSIsIkRpc3Bvc2FibGVMaXN0ZW5lciIsImxpc3RlbmVycyIsImlkeCIsIl9saXN0ZW5lcnMiLCJjaGFuZ2VkIiwiY29tcGFyYWJsZSIsImVxdWFscyIsImJhc2VVUkwiLCJvcmlnaW4iLCJwYWdlTG9hZFRpbWUiLCJfc2VuZExvY2FsQ2FuZGlkYXRlcyIsIl9jbGllbnRTZXNzaW9uSWQiLCJfbG9hZGVkVGltZXN0YW1wIiwiX3JlYWRPbmx5SW5pdGlhbGl6ZWQiLCJfcmVhZE9ubHlEaXNjb3ZlcnlVcmkiLCJfcmVhZE9ubHlQZWVyQ29ubmVjdGlvbkZhY3RvcnkiLCJfYXV0b21hdGljYWxseVJldHJ5T25GYWlsdXJlIiwiX2F1dG9tYXRpY2FsbHlSZWNvbm5lY3RQZWVyQ29ubmVjdGlvbiIsIl9hdXRvbWF0aWNhbGx5UGxheU1lZGlhU3RyZWFtIiwiX2F1dG9tYXRpY2FsbHlNdXRlVmlkZW9PblBsYXlGYWlsdXJlIiwiX3dlYlBsYXllckxvYWRlciIsIl9zaGFrYVBsYXllckxvYWRlciIsIl9obHNKc0xvYWRlciIsIl9tZXRyaWNzU2VydmljZSIsIl9hcHBsaWNhdGlvbkFjdGl2aXR5TW9uaXRvciIsIl90ZWxlbWV0cnlVcmwiLCJfbWF4aW1hbE51bWJlck9mUGVlckNvbm5lY3Rpb25SZWNvbm5lY3RBdHRlbXB0cyIsInJldHJpZXNBbW91bnQiLCJfdGVsZW1ldHJ5TGV2ZWwiLCJ0ZWxlbWV0cnlDb25maWd1cmF0aW9uIiwiY2xpZW50U2Vzc2lvbklkIiwiaWdub3JlZEVudmlyb25tZW50IiwiaWdub3JlZERpc2NvdmVyeVVyaSIsInRlbGVtZXRyeVVybCIsInRlbGVtZXRyeUFwcGVuZGVyIiwiZmluZCIsInJlbW92ZSIsImluZm8iLCJpZ25vcmVkVGVuYW5jeSIsIkRpc2NvdmVyeVVyaSIsImlnbm9yZWRUZWxlbWV0cnlMZXZlbCIsImdldEJvb2xlYW5WYWx1ZSIsImRpc2NvdmVyeVVyaSIsImdldFRlbGVtZXRyeVVybCIsImNoYW5uZWxUb2tlbiIsInBhcnNlZFRva2VuIiwiRWRnZUF1dGgiLCJ1cmlWYWx1ZSIsImJhc2VVUklWYWx1ZSIsIl9pbml0aWFsaXplZCIsInBlZXJDb25uZWN0aW9uRmFjdG9yeSIsIl9wZWVyQ29ubmVjdGlvbkZhY3RvcnkiLCJjb25zb2xlTG9nZ2luZ0xldmVsIiwiY29uc29sZUFwcGVuZGVyIiwiYXV0b21hdGljYWxseVBsYXlNZWRpYVN0cmVhbSIsImF1dG9tYXRpY2FsbHlNdXRlVmlkZW9PblBsYXlGYWlsdXJlIiwid2ViUGxheWVyTG9hZGVyIiwic2hha2FQbGF5ZXJMb2FkZXIiLCJobHNKc0xvYWRlciIsImFwcGx5RGlzY292ZXJ5VXJpRGVmYXVsdEZyb21QYXJhbWV0ZXJDb25maWd1cmF0aW9uIiwiYXBwbHlNZXRyaWNzQ29uZmlndXJhdGlvbiIsImFwcGx5VGVsZW1ldHJ5Q29uZmlndXJhdGlvbiIsImFwcGx5QXV0b21hdGljYWxseVJldHJ5T25GYWlsdXJlRnJvbVBhcmFtZXRlckNvbmZpZ3VyYXRpb24iLCJhcHBseUF1dG9tYXRpY2FsbHlSZWNvbm5lY3RQZWVyQ29ubmVjdGlvbkZyb21QYXJhbWV0ZXJDb25maWd1cmF0aW9uIiwiaW5pdCIsInNlZ21lbnRzIiwicHJvdG9jb2wiLCJ1bnNoaWZ0Iiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwiam9pbiIsImRlZmF1bHREaXNjb3ZlcnlVcmkiLCJfZGlzY292ZXJ5VXJpIiwidXJpIiwic2RrVmVyc2lvbiIsImVkZ2VBdXRoVG9rZW5QcmVmaXgiLCJ0b2tlbiIsImlzVmFsaWRUb2tlbiIsImVuY29kZWRFZGdlQXV0aFRva2VuIiwiYXRvYiIsInN1YnN0ciIsImVkZ2VBdXRoVG9rZW4iLCJwYXJzZSIsImFwcGxpY2F0aW9uSWQiLCJfX1NES1ZFUlNJT05fXyIsIl9kZWZhdWx0VmVyc2lvbiIsIl90ZWxlbWV0cnlTZXJ2aWNlIiwiVGVsZW1ldHJ5U2VydmljZSIsImxvZ1JlY29yZCIsIl9sb2dzIiwic2VuZExvZ3NJZkFibGUiLCJsb2dNZXNzYWdlcyIsIm51bWJlck9mTG9nc1RvU2VuZCIsInNpemVPZkxvZ3NUb1NlbmQiLCJnZXRMb2dTaXplIiwic3VtIiwic2VuZExvZ3MiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMseUJBQXlCLFNB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VSxHQUFHLEtBQUs7Z0JBRXZCLElBQU1WLE9BQU8sR0FBRyxLQUFJLENBQUN3TCxjQUFjLEVBQUU7Y0FDdkMsQ0FBQyxDQUFDO1lBQUE7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBLENBQ0g7TUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBOzs7Ozs7O1VDeEdIO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Imdyb3Vwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInBoZW5peFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJwaGVuaXhcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuICByZXR1cm4gc2VsZjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvciwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHRvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKFwiLi90b1Byb3BlcnR5S2V5LmpzXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBrZXkgPSB0b1Byb3BlcnR5S2V5KGtleSk7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5mdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkge1xuICBcInVzZSBzdHJpY3RcIjsgLyohIHJlZ2VuZXJhdG9yLXJ1bnRpbWUgLS0gQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuIC0tIGxpY2Vuc2UgKE1JVCk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vTElDRU5TRSAqL1xuICBtb2R1bGUuZXhwb3J0cyA9IF9yZWdlbmVyYXRvclJ1bnRpbWUgPSBmdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkge1xuICAgIHJldHVybiBleHBvcnRzO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHZhciBleHBvcnRzID0ge30sXG4gICAgT3AgPSBPYmplY3QucHJvdG90eXBlLFxuICAgIGhhc093biA9IE9wLmhhc093blByb3BlcnR5LFxuICAgIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5IHx8IGZ1bmN0aW9uIChvYmosIGtleSwgZGVzYykge1xuICAgICAgb2JqW2tleV0gPSBkZXNjLnZhbHVlO1xuICAgIH0sXG4gICAgJFN5bWJvbCA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sID8gU3ltYm9sIDoge30sXG4gICAgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiLFxuICAgIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIixcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICB3cml0YWJsZTogITBcbiAgICB9KSwgb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcixcbiAgICAgIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKSxcbiAgICAgIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG4gICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGdlbmVyYXRvciwgXCJfaW52b2tlXCIsIHtcbiAgICAgIHZhbHVlOiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpXG4gICAgfSksIGdlbmVyYXRvcjtcbiAgfVxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJub3JtYWxcIixcbiAgICAgICAgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKVxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwidGhyb3dcIixcbiAgICAgICAgYXJnOiBlcnJcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJiBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiYgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSAmJiAoSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSk7XG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9IEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChcInRocm93XCIgIT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnLFxuICAgICAgICAgIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgXCJvYmplY3RcIiA9PSBfdHlwZW9mKHZhbHVlKSAmJiBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpID8gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pIDogUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodW53cmFwcGVkKSB7XG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkLCByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgfVxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG4gICAgZGVmaW5lUHJvcGVydHkodGhpcywgXCJfaW52b2tlXCIsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShtZXRob2QsIGFyZykge1xuICAgICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID0gcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICAgIHJldHVybiBmdW5jdGlvbiAobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChcImV4ZWN1dGluZ1wiID09PSBzdGF0ZSkgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIGlmIChcImNvbXBsZXRlZFwiID09PSBzdGF0ZSkge1xuICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSBtZXRob2QpIHRocm93IGFyZztcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29udGV4dC5tZXRob2QgPSBtZXRob2QsIGNvbnRleHQuYXJnID0gYXJnOzspIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoXCJuZXh0XCIgPT09IGNvbnRleHQubWV0aG9kKSBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7ZWxzZSBpZiAoXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkge1xuICAgICAgICAgIGlmIChcInN1c3BlbmRlZFN0YXJ0XCIgPT09IHN0YXRlKSB0aHJvdyBzdGF0ZSA9IFwiY29tcGxldGVkXCIsIGNvbnRleHQuYXJnO1xuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuICAgICAgICB9IGVsc2UgXCJyZXR1cm5cIiA9PT0gY29udGV4dC5tZXRob2QgJiYgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICBzdGF0ZSA9IFwiZXhlY3V0aW5nXCI7XG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKFwibm9ybWFsXCIgPT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID0gY29udGV4dC5kb25lID8gXCJjb21wbGV0ZWRcIiA6IFwic3VzcGVuZGVkWWllbGRcIiwgcmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcInRocm93XCIgPT09IHJlY29yZC50eXBlICYmIChzdGF0ZSA9IFwiY29tcGxldGVkXCIsIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmcpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2ROYW1lID0gY29udGV4dC5tZXRob2QsXG4gICAgICBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2ROYW1lXTtcbiAgICBpZiAodW5kZWZpbmVkID09PSBtZXRob2QpIHJldHVybiBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgXCJ0aHJvd1wiID09PSBtZXRob2ROYW1lICYmIGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdICYmIChjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkLCBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSwgXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkgfHwgXCJyZXR1cm5cIiAhPT0gbWV0aG9kTmFtZSAmJiAoY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBtZXRob2RcIikpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG4gICAgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHJldHVybiBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbDtcbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG4gICAgcmV0dXJuIGluZm8gPyBpbmZvLmRvbmUgPyAoY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWUsIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2MsIFwicmV0dXJuXCIgIT09IGNvbnRleHQubWV0aG9kICYmIChjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCksIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsKSA6IGluZm8gOiAoY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbCk7XG4gIH1cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7XG4gICAgICB0cnlMb2M6IGxvY3NbMF1cbiAgICB9O1xuICAgIDEgaW4gbG9jcyAmJiAoZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdKSwgMiBpbiBsb2NzICYmIChlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXSwgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdKSwgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCIsIGRlbGV0ZSByZWNvcmQuYXJnLCBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbe1xuICAgICAgdHJ5TG9jOiBcInJvb3RcIlxuICAgIH1dLCB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyksIHRoaXMucmVzZXQoITApO1xuICB9XG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBpdGVyYWJsZS5uZXh0KSByZXR1cm4gaXRlcmFibGU7XG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSxcbiAgICAgICAgICBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIGZvciAoOyArK2kgPCBpdGVyYWJsZS5sZW5ndGg7KSBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSByZXR1cm4gbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldLCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgICAgICAgIHJldHVybiBuZXh0LnZhbHVlID0gdW5kZWZpbmVkLCBuZXh0LmRvbmUgPSAhMCwgbmV4dDtcbiAgICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGRvbmVSZXN1bHRcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICBkb25lOiAhMFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmVQcm9wZXJ0eShHcCwgXCJjb25zdHJ1Y3RvclwiLCB7XG4gICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgfSksIGRlZmluZVByb3BlcnR5KEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIHtcbiAgICB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb24sXG4gICAgY29uZmlndXJhYmxlOiAhMFxuICB9KSwgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpLCBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAoZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGdlbkZ1biAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuICEhY3RvciAmJiAoY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHwgXCJHZW5lcmF0b3JGdW5jdGlvblwiID09PSAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpKTtcbiAgfSwgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSkgOiAoZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSksIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKSwgZ2VuRnVuO1xuICB9LCBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB7XG4gICAgICBfX2F3YWl0OiBhcmdcbiAgICB9O1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpLCBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3IsIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbiAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgdm9pZCAwID09PSBQcm9taXNlSW1wbCAmJiAoUHJvbWlzZUltcGwgPSBQcm9taXNlKTtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLCBQcm9taXNlSW1wbCk7XG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKSA/IGl0ZXIgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgIH0pO1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApLCBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKSwgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KSwgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSksIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICB2YXIgb2JqZWN0ID0gT2JqZWN0KHZhbCksXG4gICAgICBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkga2V5cy5wdXNoKGtleSk7XG4gICAgcmV0dXJuIGtleXMucmV2ZXJzZSgpLCBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgZm9yICg7IGtleXMubGVuZ3RoOykge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHJldHVybiBuZXh0LnZhbHVlID0ga2V5LCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0LmRvbmUgPSAhMCwgbmV4dDtcbiAgICB9O1xuICB9LCBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcywgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIGlmICh0aGlzLnByZXYgPSAwLCB0aGlzLm5leHQgPSAwLCB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkLCB0aGlzLmRvbmUgPSAhMSwgdGhpcy5kZWxlZ2F0ZSA9IG51bGwsIHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMuYXJnID0gdW5kZWZpbmVkLCB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KSwgIXNraXBUZW1wUmVzZXQpIGZvciAodmFyIG5hbWUgaW4gdGhpcykgXCJ0XCIgPT09IG5hbWUuY2hhckF0KDApICYmIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmICFpc05hTigrbmFtZS5zbGljZSgxKSkgJiYgKHRoaXNbbmFtZV0gPSB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMuZG9uZSA9ICEwO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSB0aGlzLnRyeUVudHJpZXNbMF0uY29tcGxldGlvbjtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHJvb3RSZWNvcmQudHlwZSkgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uIGRpc3BhdGNoRXhjZXB0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJldHVybiByZWNvcmQudHlwZSA9IFwidGhyb3dcIiwgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbiwgY29udGV4dC5uZXh0ID0gbG9jLCBjYXVnaHQgJiYgKGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkKSwgISFjYXVnaHQ7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXSxcbiAgICAgICAgICByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICBpZiAoXCJyb290XCIgPT09IGVudHJ5LnRyeUxvYykgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKSxcbiAgICAgICAgICAgIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsICEwKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgITApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWhhc0ZpbmFsbHkpIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uIGFicnVwdCh0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJiBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZpbmFsbHlFbnRyeSAmJiAoXCJicmVha1wiID09PSB0eXBlIHx8IFwiY29udGludWVcIiA9PT0gdHlwZSkgJiYgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiYgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jICYmIChmaW5hbGx5RW50cnkgPSBudWxsKTtcbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmV0dXJuIHJlY29yZC50eXBlID0gdHlwZSwgcmVjb3JkLmFyZyA9IGFyZywgZmluYWxseUVudHJ5ID8gKHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jLCBDb250aW51ZVNlbnRpbmVsKSA6IHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZShyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIHJldHVybiBcImJyZWFrXCIgPT09IHJlY29yZC50eXBlIHx8IFwiY29udGludWVcIiA9PT0gcmVjb3JkLnR5cGUgPyB0aGlzLm5leHQgPSByZWNvcmQuYXJnIDogXCJyZXR1cm5cIiA9PT0gcmVjb3JkLnR5cGUgPyAodGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnLCB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCIsIHRoaXMubmV4dCA9IFwiZW5kXCIpIDogXCJub3JtYWxcIiA9PT0gcmVjb3JkLnR5cGUgJiYgYWZ0ZXJMb2MgJiYgKHRoaXMubmV4dCA9IGFmdGVyTG9jKSwgQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuICAgIGZpbmlzaDogZnVuY3Rpb24gZmluaXNoKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykgcmV0dXJuIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpLCByZXNldFRyeUVudHJ5KGVudHJ5KSwgQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24gX2NhdGNoKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbiBkZWxlZ2F0ZVlpZWxkKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH0sIFwibmV4dFwiID09PSB0aGlzLm1ldGhvZCAmJiAodGhpcy5hcmcgPSB1bmRlZmluZWQpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfSwgZXhwb3J0cztcbn1cbm1vZHVsZS5leHBvcnRzID0gX3JlZ2VuZXJhdG9yUnVudGltZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1ByaW1pdGl2ZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoXCIuL3RvUHJpbWl0aXZlLmpzXCIpO1xuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1Byb3BlcnR5S2V5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8vIFRPRE8oQmFiZWwgOCk6IFJlbW92ZSB0aGlzIGZpbGUuXG5cbnZhciBydW50aW1lID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lXCIpKCk7XG5tb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG5cbi8vIENvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vcGFja2FnZXMvcnVudGltZS9ydW50aW1lLmpzI0w3MzY9XG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IERpc3Bvc2FibGUgZnJvbSAnLi4vbGFuZy9EaXNwb3NhYmxlJztcbmltcG9ydCBTdWJqZWN0IGZyb20gJy4uL3J4L1N1YmplY3QnO1xuaW1wb3J0IFJlYWRPbmx5U3ViamVjdCBmcm9tICcuLi9yeC9SZWFkT25seVN1YmplY3QnO1xuaW1wb3J0IERpc3Bvc2FibGVMaXN0IGZyb20gJy4uL2xhbmcvRGlzcG9zYWJsZUxpc3QnO1xuXG5jb25zdCBkZWZhdWx0RG9jdW1lbnRGb2N1c0ludGVydmFsVGltZW91dCA9IDMwMDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcGxpY2F0aW9uQWN0aXZpdHlNb25pdG9yIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfZGlzcG9zYWJsZXM6IERpc3Bvc2FibGVMaXN0ID0gbmV3IERpc3Bvc2FibGVMaXN0KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3JlYWRPbmx5SXNGb3JlZ3JvdW5kOiBSZWFkT25seVN1YmplY3Q8Ym9vbGVhbj47XG4gIHByaXZhdGUgcmVhZG9ubHkgX2lzRm9yZWdyb3VuZDogU3ViamVjdDxib29sZWFuPjtcbiAgcHJpdmF0ZSBfdGltZU9mTGFzdFRhYkZvY3VzQ2hhbmdlOiBudW1iZXIgPSBEYXRlLm5vdygpO1xuICBwcml2YXRlIF9kb2N1bWVudEZvY3VzSW50ZXJ2YWw6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9pc0ZvcmVncm91bmQgPSBuZXcgU3ViamVjdDxib29sZWFuPih0cnVlKTtcbiAgICB0aGlzLl9yZWFkT25seUlzRm9yZWdyb3VuZCA9IG5ldyBSZWFkT25seVN1YmplY3QodGhpcy5faXNGb3JlZ3JvdW5kKTtcbiAgICB0aGlzLmRldGVjdFRhYkZvY3VzQ2hhbmdlKCk7XG4gIH1cblxuICBnZXQgaXNGb3JlZ3JvdW5kKCk6IFJlYWRPbmx5U3ViamVjdDxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRPbmx5SXNGb3JlZ3JvdW5kO1xuICB9XG5cbiAgZ2V0VGltZVNpbmNlTGFzdENoYW5nZSgpOiBudW1iZXIge1xuICAgIHJldHVybiBEYXRlLm5vdygpIC0gdGhpcy5fdGltZU9mTGFzdFRhYkZvY3VzQ2hhbmdlO1xuICB9XG5cbiAgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kaXNwb3NhYmxlcy5kaXNwb3NlKCk7XG4gIH1cblxuICBwcml2YXRlIGRldGVjdFRhYkZvY3VzQ2hhbmdlKCk6IHZvaWQge1xuICAgIGxldCBoaWRkZW47XG4gICAgbGV0IHZpc2liaWxpdHlDaGFuZ2U7XG5cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIER1ZSB0byB0eXBlc2NyaXB0IG5vdCBoYXZpbmcgYSBkZWZpbml0aW9uIGZvciAnbXNIaWRkZW4nIG9yICd3ZWJraXRIaWRkZW4nIHR5cGVzXG4gICAgLy8gUmVxdWlyZWQgdG8gQHRzLWlnbm9yZSB0byBwcmV2ZW50IHR5cGVzY3JpcHQgZXJyb3JzXG4gICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50ICovXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQubXNIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBoaWRkZW4gPSAnbXNIaWRkZW4nO1xuICAgICAgdmlzaWJpbGl0eUNoYW5nZSA9ICdtc3Zpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGhpZGRlbiA9ICd3ZWJraXRIaWRkZW4nO1xuICAgICAgdmlzaWJpbGl0eUNoYW5nZSA9ICd3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC5oaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7IC8vIE9wZXJhIDEyLjEwIGFuZCBGaXJlZm94IDE4IGFuZCBsYXRlciBzdXBwb3J0XG4gICAgICBoaWRkZW4gPSAnaGlkZGVuJztcbiAgICAgIHZpc2liaWxpdHlDaGFuZ2UgPSAndmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgfVxuICAgIC8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50ICovXG5cbiAgICBjb25zdCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlID0gKCk6IHZvaWQgPT4ge1xuICAgICAgY29uc3QgaXNGb3JlZ3JvdW5kID0gIWRvY3VtZW50W2hpZGRlbl07XG5cbiAgICAgIHRoaXMuc2V0Rm9jdXNTdGF0ZShpc0ZvcmVncm91bmQpO1xuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudFtoaWRkZW5dICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih2aXNpYmlsaXR5Q2hhbmdlLCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlLCBmYWxzZSk7XG5cbiAgICAgIHRoaXMuX2Rpc3Bvc2FibGVzLmFkZChuZXcgRGlzcG9zYWJsZSgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodmlzaWJpbGl0eUNoYW5nZSwgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSwgZmFsc2UpO1xuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpc3RlbkZvckRvY3VtZW50Rm9jdXMuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxpc3RlbkZvckRvY3VtZW50Rm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5fZG9jdW1lbnRGb2N1c0ludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IGlzRm9yZWdyb3VuZCA9IGRvY3VtZW50Lmhhc0ZvY3VzKCk7XG5cbiAgICAgIHRoaXMuc2V0Rm9jdXNTdGF0ZShpc0ZvcmVncm91bmQpO1xuICAgIH0sIGRlZmF1bHREb2N1bWVudEZvY3VzSW50ZXJ2YWxUaW1lb3V0KTtcblxuICAgIHRoaXMuX2Rpc3Bvc2FibGVzLmFkZChuZXcgRGlzcG9zYWJsZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fZG9jdW1lbnRGb2N1c0ludGVydmFsKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fZG9jdW1lbnRGb2N1c0ludGVydmFsKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZG9jdW1lbnRGb2N1c0ludGVydmFsID0gbnVsbDtcbiAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIHNldEZvY3VzU3RhdGUoaXNGb3JlZ3JvdW5kKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2lzRm9yZWdyb3VuZCA9PT0gaXNGb3JlZ3JvdW5kKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faXNGb3JlZ3JvdW5kLnZhbHVlID0gaXNGb3JlZ3JvdW5kO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcm93c2VyRGV0ZWN0b3Ige1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfYnJvd3Nlck5hbWVBbmRWZXJzaW9uUmVnZXggPSAvKE1TSUV8KD8hR2Vja28uKylGaXJlZm94fCg/IUFwcGxlV2ViS2l0LitDaHJvbWUuKylTYWZhcml8KD8hQXBwbGVXZWJLaXQuKylDaHJvbWV8QXBwbGVXZWJLaXQoPyEuK0Nocm9tZXwuK1NhZmFyaSl8R2Vja28oPyEuK0ZpcmVmb3gpKSg/OiB8XFwvKShbXFxkLmFwcmVdKykvZztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2Jyb3dzZXJOYW1lQW5kVmVyc2lvbiA9IEJyb3dzZXJEZXRlY3Rvci5wYXJzZUJyb3dzZXJOYW1lQW5kVmVyc2lvbigpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfYnJvd3Nlck5hbWUgPSBCcm93c2VyRGV0ZWN0b3IucGFyc2VCcm93c2VyTmFtZSgpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfYnJvd3Nlck1ham9yVmVyc2lvbiA9IEJyb3dzZXJEZXRlY3Rvci5wYXJzZUJyb3dzZXJNYWpvclZlcnNpb24oKTtcblxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfaXNDaHJvbWU2OSA9IEJyb3dzZXJEZXRlY3Rvci5fYnJvd3Nlck5hbWVBbmRWZXJzaW9uLmluY2x1ZGVzKCdDaHJvbWUvNjkuJyk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9pc0Nocm9tZTcwID0gQnJvd3NlckRldGVjdG9yLl9icm93c2VyTmFtZUFuZFZlcnNpb24uaW5jbHVkZXMoJ0Nocm9tZS83MC4nKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2lzQ2hyb21lNzEgPSBCcm93c2VyRGV0ZWN0b3IuX2Jyb3dzZXJOYW1lQW5kVmVyc2lvbi5pbmNsdWRlcygnQ2hyb21lLzcxLicpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfaXNDaHJvbWU3MiA9IEJyb3dzZXJEZXRlY3Rvci5fYnJvd3Nlck5hbWVBbmRWZXJzaW9uLmluY2x1ZGVzKCdDaHJvbWUvNzIuJyk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9pc0Nocm9tZTc0ID0gQnJvd3NlckRldGVjdG9yLl9icm93c2VyTmFtZUFuZFZlcnNpb24uaW5jbHVkZXMoJ0Nocm9tZS83NC4nKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2lzQ2hyb21lNzUgPSBCcm93c2VyRGV0ZWN0b3IuX2Jyb3dzZXJOYW1lQW5kVmVyc2lvbi5pbmNsdWRlcygnQ2hyb21lLzc1LicpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfaXNDaHJvbWU3NiA9IEJyb3dzZXJEZXRlY3Rvci5fYnJvd3Nlck5hbWVBbmRWZXJzaW9uLmluY2x1ZGVzKCdDaHJvbWUvNzYuJyk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9pc0Nocm9tZTc3ID0gQnJvd3NlckRldGVjdG9yLl9icm93c2VyTmFtZUFuZFZlcnNpb24uaW5jbHVkZXMoJ0Nocm9tZS83Ny4nKTtcblxuICBzdGF0aWMgZ2V0IGJyb3dzZXJOYW1lQW5kVmVyc2lvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBCcm93c2VyRGV0ZWN0b3IuX2Jyb3dzZXJOYW1lQW5kVmVyc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgYnJvd3Nlck5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYnJvd3Nlck5hbWU7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGJyb3dzZXJNYWpvclZlcnNpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fYnJvd3Nlck1ham9yVmVyc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXNDaHJvbWU2OSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yLl9pc0Nocm9tZTY5O1xuICB9XG5cbiAgc3RhdGljIGdldCBpc0Nocm9tZTcwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCcm93c2VyRGV0ZWN0b3IuX2lzQ2hyb21lNzA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzQ2hyb21lNzEoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJyb3dzZXJEZXRlY3Rvci5faXNDaHJvbWU3MTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXNDaHJvbWU3MigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yLl9pc0Nocm9tZTcyO1xuICB9XG5cbiAgc3RhdGljIGdldCBpc0Nocm9tZTc0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCcm93c2VyRGV0ZWN0b3IuX2lzQ2hyb21lNzQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzQ2hyb21lNzUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJyb3dzZXJEZXRlY3Rvci5faXNDaHJvbWU3NTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXNDaHJvbWU3NigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yLl9pc0Nocm9tZTc2O1xuICB9XG5cbiAgc3RhdGljIGdldCBpc0Nocm9tZTc3KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCcm93c2VyRGV0ZWN0b3IuX2lzQ2hyb21lNzc7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBwYXJzZUJyb3dzZXJOYW1lQW5kVmVyc2lvbigpOiBzdHJpbmcge1xuICAgIGlmICghbmF2aWdhdG9yIHx8ICFuYXZpZ2F0b3IudXNlckFnZW50KSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgYnJvd3Nlck5hbWVBbmRWZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaChCcm93c2VyRGV0ZWN0b3IuX2Jyb3dzZXJOYW1lQW5kVmVyc2lvblJlZ2V4KTtcblxuICAgIGlmIChicm93c2VyTmFtZUFuZFZlcnNpb24gJiYgYnJvd3Nlck5hbWVBbmRWZXJzaW9uWzBdKSB7XG4gICAgICByZXR1cm4gYnJvd3Nlck5hbWVBbmRWZXJzaW9uWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBCcm93c2VyRGV0ZWN0b3IucGFyc2VCcm93c2VyTmFtZUFuZFZlcnNpb25Gb3JJRSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VCcm93c2VyTmFtZSgpOiBzdHJpbmcge1xuICAgIGlmICghQnJvd3NlckRldGVjdG9yLl9icm93c2VyTmFtZUFuZFZlcnNpb24pIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBjb25zdCBicm93c2VyTmFtZUxpc3QgPSBCcm93c2VyRGV0ZWN0b3IuX2Jyb3dzZXJOYW1lQW5kVmVyc2lvbi5zcGxpdCgnLycpO1xuXG4gICAgaWYgKCFicm93c2VyTmFtZUxpc3QgfHwgIWJyb3dzZXJOYW1lTGlzdFswXSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiBicm93c2VyTmFtZUxpc3RbMF07XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBwYXJzZUJyb3dzZXJNYWpvclZlcnNpb24oKTogbnVtYmVyIHtcbiAgICBpZiAoIUJyb3dzZXJEZXRlY3Rvci5fYnJvd3Nlck5hbWVBbmRWZXJzaW9uKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBjb25zdCBicm93c2VyVmVyc2lvbkxpc3QgPSBCcm93c2VyRGV0ZWN0b3IuX2Jyb3dzZXJOYW1lQW5kVmVyc2lvbi5zcGxpdCgnLycpO1xuXG4gICAgaWYgKCFicm93c2VyVmVyc2lvbkxpc3QgfHwgIWJyb3dzZXJWZXJzaW9uTGlzdFsxXSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgY29uc3QgZnVsbFZlcnNpb24gPSBicm93c2VyVmVyc2lvbkxpc3RbMV07XG5cbiAgICBpZiAoIWZ1bGxWZXJzaW9uKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gTnVtYmVyKGZ1bGxWZXJzaW9uLnNwbGl0KCcuJylbMF0pIHx8IDA7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBwYXJzZUJyb3dzZXJOYW1lQW5kVmVyc2lvbkZvcklFKCk6IHN0cmluZyB7XG4gICAgaWYgKCFuYXZpZ2F0b3IgfHwgIW5hdmlnYXRvci51c2VyQWdlbnQpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIGNvbnN0IG1zaWUgPSB1c2VyQWdlbnQuaW5kZXhPZignTVNJRSAnKTtcblxuICAgIGlmIChtc2llID4gMCkge1xuICAgICAgLy8gSUUgMTAgb3Igb2xkZXIgPT4gcmV0dXJuIHZlcnNpb24gbnVtYmVyXG4gICAgICByZXR1cm4gYElFLyR7cGFyc2VJbnQodXNlckFnZW50LnN1YnN0cmluZyhtc2llICsgNSwgdXNlckFnZW50LmluZGV4T2YoJy4nLCBtc2llKSksIDEwKX1gO1xuICAgIH1cblxuICAgIGNvbnN0IHRyaWRlbnQgPSB1c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudC8nKTtcblxuICAgIGlmICh0cmlkZW50ID4gMCkge1xuICAgICAgLy8gSUUgMTEgPT4gcmV0dXJuIHZlcnNpb24gbnVtYmVyXG4gICAgICBjb25zdCB2ZXJzaW9uID0gdXNlckFnZW50LmluZGV4T2YoJ3J2OicpO1xuXG4gICAgICByZXR1cm4gYElFLyR7cGFyc2VJbnQodXNlckFnZW50LnN1YnN0cmluZyh2ZXJzaW9uICsgMywgdXNlckFnZW50LmluZGV4T2YoJy4nLCB2ZXJzaW9uKSksIDEwKX1gO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IFRlbGVtZXRyeURlZmF1bHQgZnJvbSAnLi4vbWV0cmljcy9UZWxlbWV0cnlEZWZhdWx0JztcbmltcG9ydCBUZWxlbWV0cnlMZXZlbE1hcHBpbmcgZnJvbSAnLi4vbWV0cmljcy9UZWxlbWV0cmljTGV2ZWxNYXBwaW5nJztcbmltcG9ydCBMb2dnaW5nTGV2ZWxNYXBwaW5nIGZyb20gJy4uL2xvZ2dlci9Mb2dnaW5nTGV2ZWxNYXBwaW5nJztcbmltcG9ydCBMb2dnZXJEZWZhdWx0cyBmcm9tICcuLi9sb2dnZXIvTG9nZ2VyRGVmYXVsdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyIHtcbiAgZ2V0U3RyaW5nVmFsdWUobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZWFkQ29uZmlndXJhdGlvblBhcmFtZXRlclZhbHVlKG5hbWUpIHx8XG4gICAgICB0aGlzLnJlYWRDb25maWd1cmF0aW9uUGFyYW1ldGVyVVJJVmFsdWUoYCR7bmFtZX0tdXJpLXBhcmFtZXRlci1uYW1lYCkgfHxcbiAgICAgIHRoaXMuZGVmYXVsdFN0cmluZ1ZhbHVlW25hbWVdO1xuICB9XG5cbiAgZ2V0Qm9vbGVhblZhbHVlKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5yZWFkQ29uZmlndXJhdGlvblBhcmFtZXRlclZhbHVlKG5hbWUpO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09ICd0cnVlJyB8fCB2YWx1ZSA9PT0gJzEnIHx8IHZhbHVlID09PSAnT24nO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlRnJvbVVyaSA9IHRoaXMucmVhZENvbmZpZ3VyYXRpb25QYXJhbWV0ZXJVUklWYWx1ZShgJHtuYW1lfS11cmktcGFyYW1ldGVyLW5hbWVgKTtcblxuICAgIGlmICh2YWx1ZUZyb21VcmkpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gJ3RydWUnIHx8IHZhbHVlID09PSAnMScgfHwgdmFsdWUgPT09ICdPbic7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdEJvb2xlYW5WYWx1ZVtuYW1lXSA9PT0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGRlZmF1bHRTdHJpbmdWYWx1ZSgpOiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmd9IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ3BoZW5peC1tZXRyaWNzLWxldmVsJzogVGVsZW1ldHJ5TGV2ZWxNYXBwaW5nLmNvbnZlcnRUZWxlbWV0cnlMZXZlbFRvVGVsZW1ldHJ5TGV2ZWxUeXBlKFRlbGVtZXRyeURlZmF1bHQuZGVmYXVsdFRlbGVtZXRyeUxldmVsKSxcbiAgICAgICdwaGVuaXgtbG9nZ2luZy1sZXZlbCc6IExvZ2dpbmdMZXZlbE1hcHBpbmcuY29udmVydExvZ2dpbmdMZXZlbFRvTG9nZ2luZ0xldmVsVHlwZShMb2dnZXJEZWZhdWx0cy5kZWZhdWx0TG9nZ2luZ0xldmVsKSxcbiAgICAgICdwaGVuaXgtY29uc29sZS1sb2dnaW5nLWxldmVsJzogTG9nZ2luZ0xldmVsTWFwcGluZy5jb252ZXJ0TG9nZ2luZ0xldmVsVG9Mb2dnaW5nTGV2ZWxUeXBlKExvZ2dlckRlZmF1bHRzLmRlZmF1bHRDb25zb2xlTG9nZ2luZ0xldmVsKSxcbiAgICAgICdwaGVuaXgtdGVsZW1ldHJ5LWxvZ2dpbmctbGV2ZWwnOiBMb2dnaW5nTGV2ZWxNYXBwaW5nLmNvbnZlcnRMb2dnaW5nTGV2ZWxUb0xvZ2dpbmdMZXZlbFR5cGUoTG9nZ2VyRGVmYXVsdHMuZGVmYXVsdFRlbGVtZXRyeUxvZ2dpbmdMZXZlbCksXG4gICAgICAncGhlbml4LWNoYW5uZWwtdG9rZW4nOiAnJyxcbiAgICAgICdwaGVuaXgtdXJpJzogJycsXG4gICAgICAncGhlbml4LWJhc2UtdXJpJzogJydcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgZGVmYXVsdEJvb2xlYW5WYWx1ZSgpOiB7IFtuYW1lOiBzdHJpbmddOiBib29sZWFuIH0ge1xuICAgIHJldHVybiB7XG4gICAgICAncGhlbml4LWF1dG9tYXRpY2FsbHktcmV0cnktb24tZmFpbHVyZSc6IHRydWUsXG4gICAgICAncGhlbml4LWF1dG9tYXRpY2FsbHktcmVjb25uZWN0LXBlZXItY29ubmVjdGlvbic6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSByZWFkQ29uZmlndXJhdGlvblBhcmFtZXRlclZhbHVlKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbWV0YVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbWV0YVtuYW1lPScke25hbWV9J11gKTtcblxuICAgIGlmICghbWV0YVZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSBtZXRhVmFsdWUuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuXG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgcmVhZENvbmZpZ3VyYXRpb25QYXJhbWV0ZXJVUklWYWx1ZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHZhbHVlVVJJUGFyYW1ldGVyTmFtZSA9IHRoaXMucmVhZENvbmZpZ3VyYXRpb25QYXJhbWV0ZXJWYWx1ZShuYW1lKTtcblxuICAgIGlmICghdmFsdWVVUklQYXJhbWV0ZXJOYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCkuZ2V0KHZhbHVlVVJJUGFyYW1ldGVyTmFtZSkgfHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuZGVjbGFyZSBjb25zdCBfX1BSSVZBQ1lfTU9ERV9fOiBib29sZWFuO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcml2YWN5TW9kZSB7XG4gIHByaXZhdGUgc3RhdGljIF9pc1ByaXZhdGU6IGJvb2xlYW47XG5cbiAgc3RhdGljIGdldCBpc1ByaXZhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzUHJpdmF0ZTtcbiAgfVxuXG4gIHN0YXRpYyBhcHBseUlzUHJpdmF0ZSgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5faXNQcml2YXRlID0gX19QUklWQUNZX01PREVfXztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLl9pc1ByaXZhdGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuUHJpdmFjeU1vZGUuYXBwbHlJc1ByaXZhdGUoKTsiLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCBJRGlzcG9zYWJsZSBmcm9tICcuL0lEaXNwb3NhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcG9zYWJsZSBpbXBsZW1lbnRzIElEaXNwb3NhYmxlIHtcbiAgcHJpdmF0ZSBfZGlzcG9zZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Rpc3Bvc2FibGU6ICgpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoZGlzcG9zYWJsZTogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMuX2Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5fZGlzcG9zYWJsZSA9IGRpc3Bvc2FibGU7XG4gIH1cblxuICBkaXNwb3NlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kaXNwb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2Rpc3Bvc2VkID0gdHJ1ZTtcblxuICAgIHJldHVybiB0aGlzLl9kaXNwb3NhYmxlLmNhbGwodGhpcyk7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCBJRGlzcG9zYWJsZSBmcm9tICcuL0lEaXNwb3NhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcG9zYWJsZUxpc3Qge1xuICBwcml2YXRlIHJlYWRvbmx5IF9saXN0OiBJRGlzcG9zYWJsZVtdID0gW107XG5cbiAgYWRkKGRpc3Bvc2FibGU6IElEaXNwb3NhYmxlKTogdm9pZCB7XG4gICAgdGhpcy5fbGlzdC5wdXNoKGRpc3Bvc2FibGUpO1xuICB9XG5cbiAgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9saXN0LmZvckVhY2goZGlzcG9zYWJsZSA9PiBkaXNwb3NhYmxlLmRpc3Bvc2UoKSk7XG4gICAgdGhpcy5fbGlzdC5sZW5ndGggPSAwO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYERpc3Bvc2FibGVMaXN0W2Rpc3Bvc2FibGVzPSR7dGhpcy5fbGlzdC5sZW5ndGh9XWA7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmluZ3Mge1xuICBzdGF0aWMgcmFuZG9tKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCByYW5kb20xM0NoYXJhY3RlcnMgPSAoKTogc3RyaW5nID0+IHtcbiAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMiwgMTUpO1xuICAgIH07XG5cbiAgICBjb25zdCBsb29wczogbnVtYmVyID0gTWF0aC5jZWlsKGxlbmd0aCAvIDEzKTtcblxuICAgIHJldHVybiBuZXcgQXJyYXkobG9vcHMpLmZpbGwocmFuZG9tMTNDaGFyYWN0ZXJzKS5yZWR1Y2UoKHN0cmluZywgZnVuYykgPT4ge1xuICAgICAgcmV0dXJuIHN0cmluZyArIGZ1bmMoKTtcbiAgICB9LCAnJykuc3Vic3RyaW5nKDAsIGxlbmd0aCk7XG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignU3RyaW5ncyBpcyBhIHN0YXRpYyBjbGFzcyB0aGF0IG1heSBub3QgYmUgaW5zdGFudGlhdGVkJyk7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRVbnJlYWNoYWJsZSh4OiBuZXZlcik6IG5ldmVyIHtcbiAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIHZhbHVlIFske3h9XS4gVGhpcyBzaG91bGQgbmV2ZXIgYmUgcmVhY2hlZGApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3NlcnRVbnJlYWNoYWJsZTsiLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCB7SUFwcGVuZGVyfSBmcm9tICcuL0lBcHBlbmRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcGVuZGVycyB7XG4gIHByaXZhdGUgX2FwcGVuZGVyczogQXJyYXk8SUFwcGVuZGVyPiA9IFtdO1xuXG4gIGdldCB2YWx1ZSgpOiBBcnJheTxJQXBwZW5kZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fYXBwZW5kZXJzO1xuICB9XG5cbiAgYWRkKGFwcGVuZGVyOiBJQXBwZW5kZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9hcHBlbmRlcnMucHVzaChhcHBlbmRlcik7XG4gIH1cblxuICByZW1vdmUoYXBwZW5kZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9hcHBlbmRlcnMgPSB0aGlzLl9hcHBlbmRlcnMucmVkdWNlKChpdGVtcywgaXRlbSkgPT4ge1xuICAgICAgaWYgKCEoaXRlbSA9PT0gYXBwZW5kZXIpKSB7XG4gICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpdGVtcztcbiAgICB9LCBbXSBhcyBBcnJheTxJQXBwZW5kZXI+KTtcbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IHtJQXBwZW5kZXJ9IGZyb20gJy4vSUFwcGVuZGVyJztcbmltcG9ydCB7TG9nZ2luZ0xldmVsfSBmcm9tICcuL0xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNvbGVBcHBlbmRlciBpbXBsZW1lbnRzIElBcHBlbmRlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3RocmVzaG9sZDogTG9nZ2luZ0xldmVsO1xuXG4gIGxvZyhsb2dMZXZlbDogTG9nZ2luZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcsIGNhdGVnb3J5OiBzdHJpbmcsIGRhdGU6IERhdGUpOiB2b2lkIHtcbiAgICBpZiAobG9nTGV2ZWwgPCB0aGlzLl90aHJlc2hvbGQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmdWxsTWVzc2FnZSA9IGAke2RhdGUudG9JU09TdHJpbmcoKX0gWyR7Y2F0ZWdvcnl9XSBbJHtMb2dnaW5nTGV2ZWxbbG9nTGV2ZWxdfV0gJHttZXNzYWdlfWA7XG5cbiAgICBpZiAobG9nTGV2ZWwgPCBMb2dnaW5nTGV2ZWwuV2Fybikge1xuICAgICAgY29uc29sZS5sb2coZnVsbE1lc3NhZ2UpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc29sZS5lcnJvcihmdWxsTWVzc2FnZSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcih0aHJlc2hvbGQ6IExvZ2dpbmdMZXZlbCkge1xuICAgIHRoaXMuX3RocmVzaG9sZCA9IHRocmVzaG9sZDtcbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0IHtJQXBwZW5kZXJ9IGZyb20gJy4vSUFwcGVuZGVyJztcbmltcG9ydCBBcHBlbmRlcnMgZnJvbSAnLi9BcHBlbmRlcnMnO1xuaW1wb3J0IExvZ2dpbmdUaHJlc2hvbGQgZnJvbSAnLi9Mb2dnaW5nVGhyZXNob2xkJztcblxuZXhwb3J0IGVudW0gTG9nZ2luZ0xldmVsIHtcbiAgQWxsID0gLTEsXG4gIFRyYWNlID0gMTAsXG4gIERlYnVnID0gMjAsXG4gIEluZm8gPSAzMCxcbiAgV2FybiA9IDQwLFxuICBFcnJvciA9IDUwLFxuICBGYXRhbCA9IDYwLFxuICBPZmYgPSAxMDAsXG59XG5cbmV4cG9ydCB0eXBlIExvZ2dpbmdMZXZlbFR5cGUgPSAnT2ZmJyB8ICdUcmFjZScgfCAnRGVidWcnIHwgJ0luZm8nIHwgJ1dhcm4nIHwgJ0Vycm9yJyB8ICdGYXRhbCcgfCAnQWxsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfY2F0ZWdvcnk6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfYXBwZW5kZXJzOiBBcHBlbmRlcnM7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3RocmVzaG9sZDogTG9nZ2luZ1RocmVzaG9sZDtcblxuICBnZXQgY2F0ZWdvcnkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY2F0ZWdvcnk7XG4gIH1cblxuICBnZXQgYXBwZW5kZXJzKCk6IEFwcGVuZGVycyB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGVuZGVycztcbiAgfVxuXG4gIGdldCB0aHJlc2hvbGQoKTogTG9nZ2luZ1RocmVzaG9sZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RocmVzaG9sZDtcbiAgfVxuXG4gIHRyYWNlKC4uLmFyZ3M6IGFueSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fdGhyZXNob2xkLnZhbHVlIHx8IHRoaXMuX3RocmVzaG9sZC52YWx1ZSA+IExvZ2dpbmdMZXZlbC5UcmFjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubG9nKExvZ2dpbmdMZXZlbC5UcmFjZSwgYXJncyk7XG4gIH1cblxuICBkZWJ1ZyguLi5hcmdzOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3RocmVzaG9sZC52YWx1ZSB8fCB0aGlzLl90aHJlc2hvbGQudmFsdWUgPiBMb2dnaW5nTGV2ZWwuRGVidWcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvZyhMb2dnaW5nTGV2ZWwuRGVidWcsIGFyZ3MpO1xuICB9XG5cbiAgaW5mbyguLi5hcmdzOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3RocmVzaG9sZC52YWx1ZSB8fCB0aGlzLl90aHJlc2hvbGQudmFsdWUgPiBMb2dnaW5nTGV2ZWwuSW5mbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubG9nKExvZ2dpbmdMZXZlbC5JbmZvLCBhcmdzKTtcbiAgfVxuXG4gIHdhcm4oLi4uYXJnczogYW55KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl90aHJlc2hvbGQudmFsdWUgfHwgdGhpcy5fdGhyZXNob2xkLnZhbHVlID4gTG9nZ2luZ0xldmVsLldhcm4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvZyhMb2dnaW5nTGV2ZWwuV2FybiwgYXJncyk7XG4gIH1cblxuICBlcnJvciguLi5hcmdzOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3RocmVzaG9sZC52YWx1ZSB8fCB0aGlzLl90aHJlc2hvbGQudmFsdWUgPiBMb2dnaW5nTGV2ZWwuRXJyb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvZyhMb2dnaW5nTGV2ZWwuRXJyb3IsIGFyZ3MpO1xuICB9XG5cbiAgZmF0YWwoLi4uYXJnczogYW55KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl90aHJlc2hvbGQudmFsdWUgfHwgdGhpcy5fdGhyZXNob2xkLnZhbHVlID4gTG9nZ2luZ0xldmVsLkZhdGFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sb2coTG9nZ2luZ0xldmVsLkZhdGFsLCBhcmdzKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9nKGxldmVsOiBudW1iZXIsIGFyZ3M6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnJlcGxhY2VQbGFjZWhvbGRlcnMoYXJncyk7XG5cbiAgICB0aGlzLl9hcHBlbmRlcnMudmFsdWUuZm9yRWFjaCgoYXBwZW5kZXI6IElBcHBlbmRlcikgPT4ge1xuICAgICAgYXBwZW5kZXIubG9nKGxldmVsLCBtZXNzYWdlLCB0aGlzLmNhdGVnb3J5LCBkYXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVwbGFjZVBsYWNlaG9sZGVycyhhcmdzOiBhbnkpOiBzdHJpbmcge1xuICAgIGxldCByZXBsYWNlUGxhY2Vob2xkZXJzU3RyaW5nID0gYXJnc1swXTtcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgd2hpbGUgKHJlcGxhY2VQbGFjZWhvbGRlcnNTdHJpbmcuaW5kZXhPZiAmJiBhcmdzLmxlbmd0aCA+IDEgJiYgaW5kZXggPj0gMCkge1xuICAgICAgaW5kZXggPSByZXBsYWNlUGxhY2Vob2xkZXJzU3RyaW5nLmluZGV4T2YoJyUnLCBpbmRleCk7XG5cbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IHJlcGxhY2VQbGFjZWhvbGRlcnNTdHJpbmcuc3Vic3RyaW5nKGluZGV4ICsgMSwgaW5kZXggKyAyKTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlICclJzpcbiAgICAgICAgICAgIC8vIEVzY2FwZWQgJyUlJyB0dXJucyBpbnRvICclJ1xuICAgICAgICAgICAgcmVwbGFjZVBsYWNlaG9sZGVyc1N0cmluZyA9IHJlcGxhY2VQbGFjZWhvbGRlcnNTdHJpbmcuc3Vic3RyaW5nKDAsIGluZGV4KSArIHJlcGxhY2VQbGFjZWhvbGRlcnNTdHJpbmcuc3Vic3RyaW5nKGluZGV4ICsgMSk7XG4gICAgICAgICAgICBpbmRleCsrO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgIC8vIFJlcGxhY2UgJyVkJyBvciAnJXMnIHdpdGggdGhlIGFyZ3VtZW50XG4gICAgICAgICAgICBhcmdzWzBdID0gcmVwbGFjZVBsYWNlaG9sZGVyc1N0cmluZyA9IHRoaXMucmVwbGFjZUFyZ3VtZW50KFxuICAgICAgICAgICAgICB0aGlzLnRvU3RyaW5nKGFyZ3NbMV0pLFxuICAgICAgICAgICAgICByZXBsYWNlUGxhY2Vob2xkZXJzU3RyaW5nLFxuICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGFyZ3Muc3BsaWNlKDEsIDEpO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdqJzpcbiAgICAgICAgICAgIC8vIFJlcGxhY2UgJWonIHdpdGggdGhlIGFyZ3VtZW50XG4gICAgICAgICAgICBhcmdzWzBdID0gcmVwbGFjZVBsYWNlaG9sZGVyc1N0cmluZyA9IHRoaXMucmVwbGFjZUFyZ3VtZW50KFxuICAgICAgICAgICAgICB0aGlzLnN0cmluZ2lmeShhcmdzWzFdKSxcbiAgICAgICAgICAgICAgcmVwbGFjZVBsYWNlaG9sZGVyc1N0cmluZyxcbiAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGFyZ3Muc3BsaWNlKDEsIDEpO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGFyZ3MudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGFyZ3MgPSBhcmdzLnJlZHVjZSgoYWNjdW11bGF0b3IsIGN1cnJlbnRWYWx1ZSwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCArIDEgPT09IGFycmF5Lmxlbmd0aCAmJiBjdXJyZW50VmFsdWUgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBhY2N1bXVsYXRvciArICdcXG4nICsgdGhpcy50b1N0cmluZyhjdXJyZW50VmFsdWUuc3RhY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yICsgYFske3RoaXMudG9TdHJpbmcoY3VycmVudFZhbHVlKX1dYDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhcmdzLnRvU3RyaW5nKCk7XG4gIH1cblxuICBwcml2YXRlIHN0cmluZ2lmeShhcmc6IGFueSk6IHN0cmluZyB7XG4gICAgY29uc3QgY2FjaGUgPSBbXTtcblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIGFyZyBpbnN0YW5jZW9mIEVycm9yID8gdGhpcy50b1N0cmluZyhhcmcpIDogYXJnLFxuICAgICAgICAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIGlmICghIXZhbHVlICYmIHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoY2FjaGUuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiAnPHJlY3Vyc2l2ZT4nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWNoZS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIDJcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuICdbb2JqZWN0IGludmFsaWQgSlNPTi5zdHJpbmdpZnldJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlcGxhY2VBcmd1bWVudChhcmd1bWVudDogYW55LCByZXBsYWNlUGxhY2Vob2xkZXJzU3RyaW5nOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiByZXBsYWNlUGxhY2Vob2xkZXJzU3RyaW5nLnN1YnN0cmluZygwLCBpbmRleCkgKyB0aGlzLnRvU3RyaW5nKGFyZ3VtZW50KSArIHJlcGxhY2VQbGFjZWhvbGRlcnNTdHJpbmcuc3Vic3RyaW5nKGluZGV4ICsgMik7XG4gIH1cblxuICBwcml2YXRlIHRvU3RyaW5nKGRhdGE6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiBkYXRhID8gJ3RydWUnIDogJ2ZhbHNlJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGxldCB0b1N0cmluZ1N0ciA9ICcnO1xuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0b1N0cmluZ1N0ciA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRvU3RyaW5nU3RyID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdG9TdHJpbmdTdHIgPSAnW29iamVjdCBpbnZhbGlkIHRvU3RyaW5nKCldJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b1N0cmluZ1N0cjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNhdGVnb3J5OiBzdHJpbmcsIGFwcGVuZGVyczogQXBwZW5kZXJzLCB0aHJlc2hvbGQ6IExvZ2dpbmdUaHJlc2hvbGQpIHtcbiAgICB0aGlzLl9jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgIHRoaXMuX2FwcGVuZGVycyA9IGFwcGVuZGVycztcbiAgICB0aGlzLl90aHJlc2hvbGQgPSB0aHJlc2hvbGQ7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCBQcml2YWN5TW9kZSBmcm9tICcuLi9kb20vUHJpdmFjeU1vZGUnO1xuaW1wb3J0IHtMb2dnaW5nTGV2ZWx9IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXJEZWZhdWx0cyB7XG4gIHN0YXRpYyBnZXQgZGVmYXVsdExvZ2dpbmdMZXZlbCgpOiBMb2dnaW5nTGV2ZWwge1xuICAgIHJldHVybiBQcml2YWN5TW9kZS5pc1ByaXZhdGUgPyBMb2dnaW5nTGV2ZWwuT2ZmIDogTG9nZ2luZ0xldmVsLkFsbDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZGVmYXVsdENvbnNvbGVMb2dnaW5nTGV2ZWwoKTogTG9nZ2luZ0xldmVsIHtcbiAgICByZXR1cm4gUHJpdmFjeU1vZGUuaXNQcml2YXRlID8gTG9nZ2luZ0xldmVsLk9mZiA6IExvZ2dpbmdMZXZlbC5BbGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGRlZmF1bHRUZWxlbWV0cnlMb2dnaW5nTGV2ZWwoKTogTG9nZ2luZ0xldmVsIHtcbiAgICByZXR1cm4gTG9nZ2luZ0xldmVsLkluZm87XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCB7SUxvZ2dlcn0gZnJvbSAnLi9Mb2dnZXJJbnRlcmZhY2UnO1xuaW1wb3J0IExvZ2dlciwge0xvZ2dpbmdMZXZlbH0gZnJvbSAnLi9Mb2dnZXInO1xuaW1wb3J0IEFwcGVuZGVycyBmcm9tICcuL0FwcGVuZGVycyc7XG5pbXBvcnQgTG9nZ2luZ1RocmVzaG9sZCBmcm9tICcuL0xvZ2dpbmdUaHJlc2hvbGQnO1xuaW1wb3J0IENvbnNvbGVBcHBlbmRlciBmcm9tICcuL0NvbnNvbGVBcHBlbmRlcic7XG5pbXBvcnQgVGVsZW1ldHJ5QXBwZW5kZXIgZnJvbSAnLi4vdGVsZW1ldHJ5L1RlbGVtZXRyeUFwZW5kZXInO1xuaW1wb3J0IFRlbGVtZXRyeUNvbmZpZ3VyYXRpb24gZnJvbSAnLi4vdGVsZW1ldHJ5L1RlbGVtZXRyeUNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IENvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXIgZnJvbSAnLi4vZG9tL0NvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXInO1xuaW1wb3J0IHtJQ29uZmlndXJhdGlvblBhcmFtZXRlclJlYWRlcn0gZnJvbSAnLi4vZG9tL0lDb25maWd1cmF0aW9uUGFyYW1hdGVyUmVhZGVyJztcbmltcG9ydCBMb2dnZXJEZWZhdWx0cyBmcm9tICcuL0xvZ2dlckRlZmF1bHRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyRmFjdG9yeSB7XG4gIHByaXZhdGUgc3RhdGljIF9jb25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyOiBJQ29uZmlndXJhdGlvblBhcmFtZXRlclJlYWRlciA9IG5ldyBDb25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyKCk7XG4gIHByaXZhdGUgc3RhdGljIF9sb2dnZXJzOiB7W2NhdGVnb3J5OiBzdHJpbmddOiBJTG9nZ2VyfSA9IHt9O1xuICBwcml2YXRlIHN0YXRpYyBfYXBwZW5kZXJzOiBBcHBlbmRlcnMgPSBuZXcgQXBwZW5kZXJzKCk7XG4gIHByaXZhdGUgc3RhdGljIF90aHJlc2hvbGQ6IExvZ2dpbmdUaHJlc2hvbGQgPSBuZXcgTG9nZ2luZ1RocmVzaG9sZCgpO1xuICBwcml2YXRlIHN0YXRpYyBfdGVsZW1ldHJ5Q29uZmlndXJhdGlvbjogVGVsZW1ldHJ5Q29uZmlndXJhdGlvbiA9IG5ldyBUZWxlbWV0cnlDb25maWd1cmF0aW9uKCk7XG5cbiAgc3RhdGljIGdldCB0ZWxlbWV0cnlDb25maWd1cmF0aW9uKCk6IFRlbGVtZXRyeUNvbmZpZ3VyYXRpb24ge1xuICAgIHJldHVybiBMb2dnZXJGYWN0b3J5Ll90ZWxlbWV0cnlDb25maWd1cmF0aW9uO1xuICB9XG5cbiAgc3RhdGljIGdldExvZ2dlcihjYXRlZ29yeTogc3RyaW5nKTogSUxvZ2dlciB7XG4gICAgaWYgKHR5cGVvZiBjYXRlZ29yeSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGNhdGVnb3J5ID0gJ1NESyc7XG4gICAgfVxuXG4gICAgY29uc3QgbG9nZ2VyID0gTG9nZ2VyRmFjdG9yeS5fbG9nZ2Vyc1tjYXRlZ29yeV07XG5cbiAgICBpZiAobG9nZ2VyKSB7XG4gICAgICByZXR1cm4gbG9nZ2VyO1xuICAgIH1cblxuICAgIHJldHVybiBMb2dnZXJGYWN0b3J5Ll9sb2dnZXJzW2NhdGVnb3J5XSA9IG5ldyBMb2dnZXIoY2F0ZWdvcnksIHRoaXMuX2FwcGVuZGVycywgdGhpcy5fdGhyZXNob2xkKTtcbiAgfVxuXG4gIHN0YXRpYyBhcHBseUxvZ2dlckNvbmZpZ0Zyb21QYXJhbWV0ZXJDb25maWd1cmF0aW9uKCk6IHZvaWQge1xuICAgIExvZ2dlckZhY3RvcnkuYXBwbHlMb2dnaW5nTGV2ZWwoKTtcbiAgICBMb2dnZXJGYWN0b3J5LmFwcGx5QXBwZW5kZXJMb2dnaW5nTGV2ZWwoJ2NvbnNvbGUnLCBMb2dnZXJGYWN0b3J5LmFwcGx5Q29uc29sZUxvZ2dlci5iaW5kKHRoaXMpKTtcbiAgICBMb2dnZXJGYWN0b3J5LmFwcGx5QXBwZW5kZXJMb2dnaW5nTGV2ZWwoJ3RlbGVtZXRyeScsIExvZ2dlckZhY3RvcnkuYXBwbHlUZWxlbWV0cnlMb2dnZXIuYmluZCh0aGlzKSk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBhcHBseUxvZ2dpbmdMZXZlbCgpOiB2b2lkIHtcbiAgICBjb25zdCBwYXJhbWV0ZXJWYWx1ZSA9IHRoaXMuX2NvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXIuZ2V0U3RyaW5nVmFsdWUoJ3BoZW5peC1sb2dnaW5nLWxldmVsJyk7XG5cbiAgICBpZiAoTG9nZ2luZ0xldmVsW3BhcmFtZXRlclZhbHVlXSkge1xuICAgICAgdGhpcy5fdGhyZXNob2xkLnNldFRocmVzaG9sZChMb2dnaW5nTGV2ZWxbcGFyYW1ldGVyVmFsdWVdKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBhcHBseUFwcGVuZGVyTG9nZ2luZ0xldmVsKG5hbWU6IHN0cmluZywgYXBwbHlBcHBlbmRlcjogKGxldmVsOiBMb2dnaW5nTGV2ZWwpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBjb25zdCBwYXJhbWV0ZXJWYWx1ZSA9IHRoaXMuX2NvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXIuZ2V0U3RyaW5nVmFsdWUoYHBoZW5peC0ke25hbWV9LWxvZ2dpbmctbGV2ZWxgKTtcblxuICAgIGlmIChwYXJhbWV0ZXJWYWx1ZSA9PT0gJ09mZicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhcHBseUFwcGVuZGVyKExvZ2dpbmdMZXZlbFtwYXJhbWV0ZXJWYWx1ZV0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgYXBwbHlDb25zb2xlTG9nZ2VyKGxldmVsOiBMb2dnaW5nTGV2ZWwpOiB2b2lkIHtcbiAgICB0aGlzLl9hcHBlbmRlcnMuYWRkKG5ldyBDb25zb2xlQXBwZW5kZXIobGV2ZWwgfHwgTG9nZ2VyRGVmYXVsdHMuZGVmYXVsdENvbnNvbGVMb2dnaW5nTGV2ZWwpKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGFwcGx5VGVsZW1ldHJ5TG9nZ2VyKGxldmVsOiBMb2dnaW5nTGV2ZWwpOiB2b2lkIHtcbiAgICB0aGlzLl90ZWxlbWV0cnlDb25maWd1cmF0aW9uLnRocmVzaG9sZCA9IGxldmVsIHx8IExvZ2dlckRlZmF1bHRzLmRlZmF1bHRUZWxlbWV0cnlMb2dnaW5nTGV2ZWw7XG5cbiAgICB0aGlzLl9hcHBlbmRlcnMuYWRkKG5ldyBUZWxlbWV0cnlBcHBlbmRlcih0aGlzLl90ZWxlbWV0cnlDb25maWd1cmF0aW9uKSk7XG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTG9nZ2VyRmFjdG9yeSBpcyBhIHN0YXRpYyBjbGFzcyB0aGF0IG1heSBub3QgYmUgaW5zdGFudGlhdGVkJyk7XG4gIH1cbn1cblxuTG9nZ2VyRmFjdG9yeS5hcHBseUxvZ2dlckNvbmZpZ0Zyb21QYXJhbWV0ZXJDb25maWd1cmF0aW9uKCk7IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQgYXNzZXJ0VW5yZWFjaGFibGUgZnJvbSAnLi4vbGFuZy9hc3NlcnRVbnJlYWNoYWJsZSc7XG5pbXBvcnQge0xvZ2dpbmdMZXZlbCwgTG9nZ2luZ0xldmVsVHlwZX0gZnJvbSAnLi9Mb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnaW5nTGV2ZWxNYXBwaW5nIHtcbiAgc3RhdGljIGNvbnZlcnRMb2dnaW5nTGV2ZWxUb0xvZ2dpbmdMZXZlbFR5cGUobG9nZ2luZ0xldmVsOiBMb2dnaW5nTGV2ZWwpOiBMb2dnaW5nTGV2ZWxUeXBlIHtcbiAgICBzd2l0Y2ggKGxvZ2dpbmdMZXZlbCkge1xuICAgICAgY2FzZSBMb2dnaW5nTGV2ZWwuT2ZmOlxuICAgICAgICByZXR1cm4gJ09mZic7XG4gICAgICBjYXNlIExvZ2dpbmdMZXZlbC5UcmFjZTpcbiAgICAgICAgcmV0dXJuICdUcmFjZSc7XG4gICAgICBjYXNlIExvZ2dpbmdMZXZlbC5EZWJ1ZzpcbiAgICAgICAgcmV0dXJuICdEZWJ1Zyc7XG4gICAgICBjYXNlIExvZ2dpbmdMZXZlbC5JbmZvOlxuICAgICAgICByZXR1cm4gJ1RyYWNlJztcbiAgICAgIGNhc2UgTG9nZ2luZ0xldmVsLldhcm46XG4gICAgICAgIHJldHVybiAnV2Fybic7XG4gICAgICBjYXNlIExvZ2dpbmdMZXZlbC5FcnJvcjpcbiAgICAgICAgcmV0dXJuICdFcnJvcic7XG4gICAgICBjYXNlIExvZ2dpbmdMZXZlbC5GYXRhbDpcbiAgICAgICAgcmV0dXJuICdGYXRhbCc7XG4gICAgICBjYXNlIExvZ2dpbmdMZXZlbC5BbGw6XG4gICAgICAgIHJldHVybiAnQWxsJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFzc2VydFVucmVhY2hhYmxlKGxvZ2dpbmdMZXZlbCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNvbnZlcnRMb2dnaW5nTGV2ZWxUeXBlVG9Mb2dnaW5nTGV2ZWwobG9nZ2luZ0xldmVsVHlwZTogTG9nZ2luZ0xldmVsVHlwZSk6IExvZ2dpbmdMZXZlbCB7XG4gICAgc3dpdGNoIChsb2dnaW5nTGV2ZWxUeXBlKSB7XG4gICAgICBjYXNlICdPZmYnOlxuICAgICAgICByZXR1cm4gTG9nZ2luZ0xldmVsLk9mZjtcbiAgICAgIGNhc2UgJ1RyYWNlJzpcbiAgICAgICAgcmV0dXJuIExvZ2dpbmdMZXZlbC5UcmFjZTtcbiAgICAgIGNhc2UgJ0RlYnVnJzpcbiAgICAgICAgcmV0dXJuIExvZ2dpbmdMZXZlbC5EZWJ1ZztcbiAgICAgIGNhc2UgJ0luZm8nOlxuICAgICAgICByZXR1cm4gTG9nZ2luZ0xldmVsLkluZm87XG4gICAgICBjYXNlICdXYXJuJzpcbiAgICAgICAgcmV0dXJuIExvZ2dpbmdMZXZlbC5XYXJuO1xuICAgICAgY2FzZSAnRXJyb3InOlxuICAgICAgICByZXR1cm4gTG9nZ2luZ0xldmVsLkVycm9yO1xuICAgICAgY2FzZSAnRmF0YWwnOlxuICAgICAgICByZXR1cm4gTG9nZ2luZ0xldmVsLkZhdGFsO1xuICAgICAgY2FzZSAnQWxsJzpcbiAgICAgICAgcmV0dXJuIExvZ2dpbmdMZXZlbC5BbGw7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhc3NlcnRVbnJlYWNoYWJsZShsb2dnaW5nTGV2ZWxUeXBlKTtcbiAgICB9XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCBMb2dnZXJEZWZhdWx0cyBmcm9tICcuL0xvZ2dlckRlZmF1bHRzJztcbmltcG9ydCB7TG9nZ2luZ0xldmVsfSBmcm9tICcuL0xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dpbmdUaHJlc2hvbGQge1xuICBwcml2YXRlIF90aHJlc2hvbGQ6IExvZ2dpbmdMZXZlbCA9IExvZ2dlckRlZmF1bHRzLmRlZmF1bHRMb2dnaW5nTGV2ZWw7XG5cbiAgZ2V0IHZhbHVlKCk6IExvZ2dpbmdMZXZlbCB7XG4gICAgcmV0dXJuIHRoaXMuX3RocmVzaG9sZDtcbiAgfVxuXG4gIHNldFRocmVzaG9sZCh0aHJlc2hvbGQ6IExvZ2dpbmdMZXZlbCk6IHZvaWQge1xuICAgIHRoaXMuX3RocmVzaG9sZCA9IHRocmVzaG9sZDtcbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IHtUZWxlbWV0cnlMZXZlbH0gZnJvbSAnLi9NZXRyaWNzQ29uZmlndXJhdGlvbic7XG5pbXBvcnQgYXNzZXJ0VW5yZWFjaGFibGUgZnJvbSAnLi4vbGFuZy9hc3NlcnRVbnJlYWNoYWJsZSc7XG5pbXBvcnQgTWV0cmljc1R5cGUgZnJvbSAnLi9NZXRyaWNzVHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldHJpY1R5cGUge1xuICBwcml2YXRlIHJlYWRvbmx5IF9tZXRyaWNzOiBNZXRyaWNzVHlwZTtcblxuICBjb25zdHJ1Y3RvcihtZXRyaWNzOiBNZXRyaWNzVHlwZSkge1xuICAgIHRoaXMuX21ldHJpY3MgPSBtZXRyaWNzO1xuICB9XG5cbiAgZ2V0TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBNZXRyaWNzVHlwZVt0aGlzLl9tZXRyaWNzXTtcbiAgfVxuXG4gIGdldFRlbGVtZXRyeUxldmVsKCk6IFRlbGVtZXRyeUxldmVsIHtcbiAgICBzd2l0Y2ggKHRoaXMuX21ldHJpY3MpIHtcbiAgICAgIGNhc2UgTWV0cmljc1R5cGUuVGltZVRvRmlyc3RGcmFtZTpcbiAgICAgICAgcmV0dXJuIFRlbGVtZXRyeUxldmVsLkVzc2VudGlhbDtcbiAgICAgIGNhc2UgTWV0cmljc1R5cGUuQ2hhbm5lbENyZWF0aW9uVGltZVRvRmlyc3RGcmFtZTpcbiAgICAgICAgcmV0dXJuIFRlbGVtZXRyeUxldmVsLkVzc2VudGlhbDtcbiAgICAgIGNhc2UgTWV0cmljc1R5cGUuU3RhbGxlZDpcbiAgICAgICAgcmV0dXJuIFRlbGVtZXRyeUxldmVsLkFsbDtcbiAgICAgIGNhc2UgTWV0cmljc1R5cGUuQnVmZmVyaW5nOlxuICAgICAgICByZXR1cm4gVGVsZW1ldHJ5TGV2ZWwuQWxsO1xuICAgICAgY2FzZSBNZXRyaWNzVHlwZS5TZXR1cENvbXBsZXRlZDpcbiAgICAgICAgcmV0dXJuIFRlbGVtZXRyeUxldmVsLkFsbDtcbiAgICAgIGNhc2UgTWV0cmljc1R5cGUuU2V0dXBGYWlsZWQ6XG4gICAgICAgIHJldHVybiBUZWxlbWV0cnlMZXZlbC5BbGw7XG4gICAgICBjYXNlIE1ldHJpY3NUeXBlLlJvdW5kVHJpcFRpbWU6XG4gICAgICAgIHJldHVybiBUZWxlbWV0cnlMZXZlbC5BbGw7XG4gICAgICBjYXNlIE1ldHJpY3NUeXBlLkRvd25saW5rVGhyb3VnaHB1dENhcGFjaXR5OlxuICAgICAgICByZXR1cm4gVGVsZW1ldHJ5TGV2ZWwuQWxsO1xuICAgICAgY2FzZSBNZXRyaWNzVHlwZS5OZXR3b3JrVHlwZTpcbiAgICAgICAgcmV0dXJuIFRlbGVtZXRyeUxldmVsLkFsbDtcbiAgICAgIGNhc2UgTWV0cmljc1R5cGUuUmVzb2x1dGlvbkNoYW5nZWQ6XG4gICAgICAgIHJldHVybiBUZWxlbWV0cnlMZXZlbC5BbGw7XG4gICAgICBjYXNlIE1ldHJpY3NUeXBlLkFwcGxpY2F0aW9uRm9yZWdyb3VuZDpcbiAgICAgICAgcmV0dXJuIFRlbGVtZXRyeUxldmVsLkFsbDtcbiAgICAgIGNhc2UgTWV0cmljc1R5cGUuQXBwbGljYXRpb25CYWNrZ3JvdW5kOlxuICAgICAgICByZXR1cm4gVGVsZW1ldHJ5TGV2ZWwuQWxsO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXNzZXJ0VW5yZWFjaGFibGUodGhpcy5fbWV0cmljcyk7XG4gICAgfVxuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQgVGVsZW1ldHJ5RGVmYXVsdCBmcm9tICcuL1RlbGVtZXRyeURlZmF1bHQnO1xuXG5leHBvcnQgZW51bSBUZWxlbWV0cnlMZXZlbCB7XG4gIE9mZiA9IDEwMCxcbiAgRXNzZW50aWFsID0gMTAsXG4gIEFsbCA9IC0xXG59XG5cbmV4cG9ydCB0eXBlIFRlbGVtZXRyeUxldmVsVHlwZSA9ICdPZmYnIHwgJ0Vzc2VudGlhbCcgfCAnQWxsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0cmljc0NvbmZpZ3VyYXRpb24ge1xuICBwcml2YXRlIF91cmwgPSAnaHR0cHM6Ly90ZWxlbWV0cnkucGhlbml4cnRzLmNvbS90ZWxlbWV0cnkvbWV0cmljcyc7XG4gIHByaXZhdGUgX3RlbmFuY3k6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2Vzc2lvbklkOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Vudmlyb25tZW50OiBzdHJpbmc7XG4gIHByaXZhdGUgX3RocmVzaG9sZDogVGVsZW1ldHJ5TGV2ZWwgPSBUZWxlbWV0cnlEZWZhdWx0LmRlZmF1bHRUZWxlbWV0cnlMZXZlbDtcblxuICBnZXQgdXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3VybDtcbiAgfVxuXG4gIHNldCB1cmwodXJsOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtZXRyaWNzVXJsID0gbmV3IFVSTCh1cmwpO1xuXG4gICAgbWV0cmljc1VybC5wYXRobmFtZSA9IG1ldHJpY3NVcmwucGF0aG5hbWUgKyAnL21ldHJpY3MnO1xuXG4gICAgdGhpcy5fdXJsID0gbWV0cmljc1VybC50b1N0cmluZygpO1xuICB9XG5cbiAgZ2V0IGVudmlyb25tZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Vudmlyb25tZW50O1xuICB9XG5cbiAgc2V0IGVudmlyb25tZW50KGVudmlyb25tZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICB9XG5cbiAgZ2V0IHRlbmFuY3koKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGVuYW5jeTtcbiAgfVxuXG4gIHNldCB0ZW5hbmN5KHRlbmFuY3k6IHN0cmluZykge1xuICAgIHRoaXMuX3RlbmFuY3kgPSB0ZW5hbmN5O1xuICB9XG5cbiAgZ2V0IHNlc3Npb25JZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9uSWQ7XG4gIH1cblxuICBzZXQgc2Vzc2lvbklkKHNlc3Npb25JZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2Vzc2lvbklkID0gc2Vzc2lvbklkO1xuICB9XG5cbiAgZ2V0IHRocmVzaG9sZCgpOiBUZWxlbWV0cnlMZXZlbCB7XG4gICAgcmV0dXJuIHRoaXMuX3RocmVzaG9sZDtcbiAgfVxuXG4gIHNldCB0aHJlc2hvbGQodGhyZXNob2xkOiBUZWxlbWV0cnlMZXZlbCkge1xuICAgIHRoaXMuX3RocmVzaG9sZCA9IHRocmVzaG9sZDtcbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgTWV0cmljc1NlcnZpY2UgZnJvbSAnLi9NZXRyaWNzU2VydmljZSc7XG5pbXBvcnQgTWV0cmljc0NvbmZpZ3VyYXRpb24sIHtUZWxlbWV0cnlMZXZlbH0gZnJvbSAnLi9NZXRyaWNzQ29uZmlndXJhdGlvbic7XG5pbXBvcnQgU0RLIGZyb20gJy4uL3Nkay9TREsnO1xuaW1wb3J0IFRlbGVtZXRyeVVybCBmcm9tICcuLi9zZGsvVGVsZW1ldHJ5VXJsJztcbmltcG9ydCBFbnZpcm9ubWVudCBmcm9tICcuLi9zZGsvRW52aXJvbm1lbnQnO1xuaW1wb3J0IFRlbGVtZXRyeUxldmVsTWFwcGluZyBmcm9tICcuL1RlbGVtZXRyaWNMZXZlbE1hcHBpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRyaWNzRmFjdG9yeSB7XG4gIHByaXZhdGUgc3RhdGljIF9tZXRyaWNzU2VydmljZXM6IHtbY2F0ZWdvcnk6IHN0cmluZ106IE1ldHJpY3NTZXJ2aWNlfSA9IHt9O1xuXG4gIHN0YXRpYyBnZXRNZXRyaWNzU2VydmljZSh1cmw6IHN0cmluZyk6IE1ldHJpY3NTZXJ2aWNlIHtcbiAgICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndXInKTtcbiAgICB9XG5cbiAgICBjb25zdCBtZXRyaWNzU2VydmljZXMgPSBNZXRyaWNzRmFjdG9yeS5fbWV0cmljc1NlcnZpY2VzW3VybF07XG5cbiAgICBpZiAobWV0cmljc1NlcnZpY2VzKSB7XG4gICAgICByZXR1cm4gbWV0cmljc1NlcnZpY2VzO1xuICAgIH1cblxuICAgIGNvbnN0IG1ldHJpY3NDb25maWd1cmF0aW9uID0gbmV3IE1ldHJpY3NDb25maWd1cmF0aW9uKCk7XG5cbiAgICBtZXRyaWNzQ29uZmlndXJhdGlvbi5zZXNzaW9uSWQgPSBTREsuY2xpZW50U2Vzc2lvbklkO1xuICAgIG1ldHJpY3NDb25maWd1cmF0aW9uLnRlbmFuY3kgPSBTREsudGVuYW5jeS52YWx1ZTtcbiAgICBtZXRyaWNzQ29uZmlndXJhdGlvbi51cmwgPSBUZWxlbWV0cnlVcmwuZ2V0VGVsZW1ldHJ5VXJsKHVybCk7XG4gICAgbWV0cmljc0NvbmZpZ3VyYXRpb24uZW52aXJvbm1lbnQgPSBFbnZpcm9ubWVudC5nZXRFbnZpcm9ubWVudEZyb21VcmwodXJsKTtcblxuICAgIG1ldHJpY3NDb25maWd1cmF0aW9uLnRocmVzaG9sZCA9IFRlbGVtZXRyeUxldmVsTWFwcGluZy5jb252ZXJ0VGVsZW1ldHJ5TGV2ZWxUeXBlVG9UZWxlbWV0cnlMZXZlbChTREsudGVsZW1ldHJ5TGV2ZWwpO1xuXG4gICAgcmV0dXJuIE1ldHJpY3NGYWN0b3J5Ll9tZXRyaWNzU2VydmljZXNbdXJsXSA9IG5ldyBNZXRyaWNzU2VydmljZShtZXRyaWNzQ29uZmlndXJhdGlvbik7XG4gIH1cblxuICBzdGF0aWMgc2V0VGVsZW1ldHJ5TGV2ZWwodGVsZW1ldHJ5TGV2ZWw6IFRlbGVtZXRyeUxldmVsKTogdm9pZCB7XG4gICAgY29uc3QgbWV0cmljc1NlcnZpY2VzID0gT2JqZWN0LnZhbHVlcyhNZXRyaWNzRmFjdG9yeS5fbWV0cmljc1NlcnZpY2VzKTtcblxuICAgIGlmIChtZXRyaWNzU2VydmljZXMgJiYgbWV0cmljc1NlcnZpY2VzLmxlbmd0aCkge1xuICAgICAgbWV0cmljc1NlcnZpY2VzLmZvckVhY2gobWV0cmljc1NlcnZpY2UgPT4ge1xuICAgICAgICBjb25zdCBtZXRyaWNzQ29uZmlndXJhdGlvbiA9IG1ldHJpY3NTZXJ2aWNlLm1ldHJpY3NDb25maWd1cmF0aW9uO1xuXG4gICAgICAgIG1ldHJpY3NDb25maWd1cmF0aW9uLnRocmVzaG9sZCA9IHRlbGVtZXRyeUxldmVsO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvZ2dlckZhY3RvcnkgaXMgYSBzdGF0aWMgY2xhc3MgdGhhdCBtYXkgbm90IGJlIGluc3RhbnRpYXRlZCcpO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQgVmVyc2lvbk1hbmFnZXIgZnJvbSAnLi4vc2RrL3ZlcnNpb24vVmVyc2lvbk1hbmFnZXInO1xuaW1wb3J0IE1ldHJpY3NDb25maWd1cmF0aW9uIGZyb20gJy4vTWV0cmljc0NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IE1ldHJpY1R5cGUgZnJvbSAnLi9NZXRyaWNUeXBlJztcbmltcG9ydCBNZXRyaWNzVHlwZSBmcm9tICcuL01ldHJpY3NUeXBlJztcblxuY29uc3QgcmVxdWVzdFNpemVMaW1pdCA9IDEwMjQ7XG5cbmludGVyZmFjZSBJVmFsdWUge1xuICBzdHJpbmc/OiBzdHJpbmc7XG4gIHVpbnQ2ND86IG51bWJlcjtcbiAgZmxvYXQ/OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBJTWV0cmljUmVjb3JkIHtcbiAgdGltZXN0YW1wOiBzdHJpbmc7XG4gIHRlbmFuY3k6IHN0cmluZztcbiAgc2Vzc2lvbklkOiBzdHJpbmc7XG4gIHN0cmVhbUlkOiBzdHJpbmc7XG4gIG1ldHJpYzogc3RyaW5nO1xuICB2YWx1ZTogSVZhbHVlO1xuICBwcmV2aW91c1ZhbHVlOiBJVmFsdWU7XG4gIGZ1bGxRdWFsaWZpZWROYW1lOiBzdHJpbmc7XG4gIGVudmlyb25tZW50OiBzdHJpbmc7XG4gIHZlcnNpb246IHN0cmluZztcbiAgcnVudGltZTogbnVtYmVyO1xuICByZXNvdXJjZT86IHN0cmluZztcbiAga2luZD86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIElNZXRyaWMge1xuICBzdHJlYW1JZD86IHN0cmluZztcbiAgbWV0cmljVHlwZTogTWV0cmljc1R5cGU7XG4gIHZhbHVlPzogSVZhbHVlO1xuICBwcmV2aW91c1ZhbHVlPzogSVZhbHVlO1xuICBydW50aW1lOiBudW1iZXI7XG4gIHJlc291cmNlPzogc3RyaW5nO1xuICBraW5kPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRyaWNzU2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX21ldHJpY3NDb25maWd1cmF0aW9uOiBNZXRyaWNzQ29uZmlndXJhdGlvbjtcbiAgcHJpdmF0ZSBfbWV0cmljczogQXJyYXk8SU1ldHJpY1JlY29yZD4gPSBbXTtcbiAgcHJpdmF0ZSBfaXNTZW5kaW5nOiBib29sZWFuO1xuICBwcml2YXRlIF9kb21haW4gPSBsb2NhdGlvbi5ob3N0bmFtZTtcblxuICBjb25zdHJ1Y3RvcihtZXRyaWNzQ29uZmlndXJhdGlvbjogTWV0cmljc0NvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9tZXRyaWNzQ29uZmlndXJhdGlvbiA9IG1ldHJpY3NDb25maWd1cmF0aW9uO1xuICB9XG5cbiAgZ2V0IG1ldHJpY3NDb25maWd1cmF0aW9uKCk6IE1ldHJpY3NDb25maWd1cmF0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0cmljc0NvbmZpZ3VyYXRpb247XG4gIH1cblxuICBwdXNoKG1ldHJpYzogSU1ldHJpYyk6IHZvaWQge1xuICAgIGNvbnN0IHtzdHJlYW1JZCwgdmFsdWUsIHByZXZpb3VzVmFsdWUsIHJ1bnRpbWUsIHJlc291cmNlLCBraW5kfSA9IG1ldHJpYztcbiAgICBjb25zdCBtZXRyaWNUeXBlID0gbmV3IE1ldHJpY1R5cGUobWV0cmljLm1ldHJpY1R5cGUpO1xuXG4gICAgaWYgKHRoaXMuX21ldHJpY3NDb25maWd1cmF0aW9uLnRocmVzaG9sZCA+IG1ldHJpY1R5cGUuZ2V0VGVsZW1ldHJ5TGV2ZWwoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1ldHJpY1JlY29yZCA9IHtcbiAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgdGVuYW5jeTogdGhpcy5fbWV0cmljc0NvbmZpZ3VyYXRpb24udGVuYW5jeSxcbiAgICAgIHNlc3Npb25JZDogdGhpcy5fbWV0cmljc0NvbmZpZ3VyYXRpb24uc2Vzc2lvbklkLFxuICAgICAgc3RyZWFtSWQsXG4gICAgICBtZXRyaWM6IG1ldHJpY1R5cGUuZ2V0TmFtZSgpLFxuICAgICAgdmFsdWUsXG4gICAgICBwcmV2aW91c1ZhbHVlLFxuICAgICAgZnVsbFF1YWxpZmllZE5hbWU6IHRoaXMuX2RvbWFpbixcbiAgICAgIGVudmlyb25tZW50OiB0aGlzLl9tZXRyaWNzQ29uZmlndXJhdGlvbi5lbnZpcm9ubWVudCxcbiAgICAgIHZlcnNpb246IFZlcnNpb25NYW5hZ2VyLnNka1ZlcnNpb24sXG4gICAgICBydW50aW1lLFxuICAgICAgcmVzb3VyY2UsXG4gICAgICBraW5kXG4gICAgfTtcblxuICAgIHRoaXMuX21ldHJpY3MucHVzaChtZXRyaWNSZWNvcmQpO1xuXG4gICAgY29uc3QgaWdub3JlZCA9IHRoaXMuc2VuZE1ldHJpY3NJZkFibGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2VuZE1ldHJpY3MobWV0cmljc01lc3NhZ2VzOiBBcnJheTxJTWV0cmljUmVjb3JkPik6IFByb21pc2U8UmVzcG9uc2UgfCB2b2lkPiB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgIGZvcm1EYXRhLmFwcGVuZCgnanNvbkJvZHknLCBKU09OLnN0cmluZ2lmeSh7cmVjb3JkczogbWV0cmljc01lc3NhZ2VzfSkpO1xuXG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKHRoaXMuX21ldHJpY3NDb25maWd1cmF0aW9uLnVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBmb3JtRGF0YVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzZW5kTWV0cmljc0lmQWJsZSgpOiBQcm9taXNlPFJlc3BvbnNlIHwgdm9pZD4ge1xuICAgIGlmICh0aGlzLl9tZXRyaWNzLmxlbmd0aCA8PSAwIHx8IHRoaXMuX2lzU2VuZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2lzU2VuZGluZyA9IHRydWU7XG5cbiAgICBjb25zdCBtZXRyaWNzTWVzc2FnZXMgPSB0aGlzLl9tZXRyaWNzLnNsaWNlKDAsIHJlcXVlc3RTaXplTGltaXQpO1xuXG4gICAgdGhpcy5fbWV0cmljcyA9IHRoaXMuX21ldHJpY3Muc2xpY2UocmVxdWVzdFNpemVMaW1pdCk7XG5cbiAgICByZXR1cm4gdGhpcy5zZW5kTWV0cmljcyhtZXRyaWNzTWVzc2FnZXMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5faXNTZW5kaW5nID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IGlnbm9yZWQgPSB0aGlzLnNlbmRNZXRyaWNzSWZBYmxlKCk7XG5cbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICB0aGlzLl9pc1NlbmRpbmcgPSBmYWxzZTtcblxuICAgICAgY29uc3QgaWdub3JlZCA9IHRoaXMuc2VuZE1ldHJpY3NJZkFibGUoKTtcbiAgICB9KTtcbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuZW51bSBNZXRyaWNzVHlwZSB7XG4gIFRpbWVUb0ZpcnN0RnJhbWUsXG4gIENoYW5uZWxDcmVhdGlvblRpbWVUb0ZpcnN0RnJhbWUsXG4gIFN0YWxsZWQsXG4gIEJ1ZmZlcmluZyxcbiAgU2V0dXBDb21wbGV0ZWQsXG4gIFNldHVwRmFpbGVkLFxuICBSb3VuZFRyaXBUaW1lLFxuICBEb3dubGlua1Rocm91Z2hwdXRDYXBhY2l0eSxcbiAgTmV0d29ya1R5cGUsXG4gIFJlc29sdXRpb25DaGFuZ2VkLFxuICBBcHBsaWNhdGlvbkZvcmVncm91bmQsXG4gIEFwcGxpY2F0aW9uQmFja2dyb3VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXRyaWNzVHlwZTsiLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCB7VGVsZW1ldHJ5TGV2ZWwsIFRlbGVtZXRyeUxldmVsVHlwZX0gZnJvbSAnLi9NZXRyaWNzQ29uZmlndXJhdGlvbic7XG5pbXBvcnQgYXNzZXJ0VW5yZWFjaGFibGUgZnJvbSAnLi4vbGFuZy9hc3NlcnRVbnJlYWNoYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbGVtZXRyeUxldmVsTWFwcGluZyB7XG4gIHN0YXRpYyBjb252ZXJ0VGVsZW1ldHJ5TGV2ZWxUb1RlbGVtZXRyeUxldmVsVHlwZSh0ZWxlbWV0cnlMZXZlbDogVGVsZW1ldHJ5TGV2ZWwpOiBUZWxlbWV0cnlMZXZlbFR5cGUge1xuICAgIHN3aXRjaCAodGVsZW1ldHJ5TGV2ZWwpIHtcbiAgICAgIGNhc2UgVGVsZW1ldHJ5TGV2ZWwuT2ZmOlxuICAgICAgICByZXR1cm4gJ09mZic7XG4gICAgICBjYXNlIFRlbGVtZXRyeUxldmVsLkVzc2VudGlhbDpcbiAgICAgICAgcmV0dXJuICdFc3NlbnRpYWwnO1xuICAgICAgY2FzZSBUZWxlbWV0cnlMZXZlbC5BbGw6XG4gICAgICAgIHJldHVybiAnQWxsJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFzc2VydFVucmVhY2hhYmxlKHRlbGVtZXRyeUxldmVsKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY29udmVydFRlbGVtZXRyeUxldmVsVHlwZVRvVGVsZW1ldHJ5TGV2ZWwodGVsZW1ldHJ5TGV2ZWxUeXBlOiBUZWxlbWV0cnlMZXZlbFR5cGUpOiBUZWxlbWV0cnlMZXZlbCB7XG4gICAgc3dpdGNoICh0ZWxlbWV0cnlMZXZlbFR5cGUpIHtcbiAgICAgIGNhc2UgJ09mZic6XG4gICAgICAgIHJldHVybiBUZWxlbWV0cnlMZXZlbC5PZmY7XG4gICAgICBjYXNlICdFc3NlbnRpYWwnOlxuICAgICAgICByZXR1cm4gVGVsZW1ldHJ5TGV2ZWwuRXNzZW50aWFsO1xuICAgICAgY2FzZSAnQWxsJzpcbiAgICAgICAgcmV0dXJuIFRlbGVtZXRyeUxldmVsLkFsbDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFzc2VydFVucmVhY2hhYmxlKHRlbGVtZXRyeUxldmVsVHlwZSk7XG4gICAgfVxuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQgUHJpdmFjeU1vZGUgZnJvbSAnLi4vZG9tL1ByaXZhY3lNb2RlJztcbmltcG9ydCB7VGVsZW1ldHJ5TGV2ZWx9IGZyb20gJy4uL21ldHJpY3MvTWV0cmljc0NvbmZpZ3VyYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWxlbWV0cnlEZWZhdWx0IHtcbiAgc3RhdGljIGdldCBkZWZhdWx0VGVsZW1ldHJ5TGV2ZWwoKTogVGVsZW1ldHJ5TGV2ZWwge1xuICAgIHJldHVybiBQcml2YWN5TW9kZS5pc1ByaXZhdGUgPyBUZWxlbWV0cnlMZXZlbC5Fc3NlbnRpYWwgOiBUZWxlbWV0cnlMZXZlbC5BbGw7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCBQcm9taXNlSGFuZGxlciBmcm9tICcuL1Byb21pc2VIYW5kbGVyJztcblxuY2xhc3MgUHJvbWlzZSB7XG4gIF9zdGF0ZTogbnVtYmVyO1xuICBfaGFuZGxlZDogYm9vbGVhbjtcbiAgX3ZhbHVlOiBQcm9taXNlO1xuICBfZGVmZXJyZWRzOiBBcnJheTxQcm9taXNlSGFuZGxlcj47XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgLy8gQHRzLWlnbm9yZVxuICB0aGVuKG9uRnVsZmlsbGVkOiBGdW5jdGlvbiwgb25SZWplY3RlZDogRnVuY3Rpb24pOiBQcm9taXNlIHwgdm9pZDtcblxuICBjb25zdHJ1Y3RvcihjYWxsYmFjaykge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZXMgbXVzdCBiZSBjb25zdHJ1Y3RlZCB2aWEgbmV3Jyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbm90IGEgZnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zdGF0ZSA9IDA7XG4gICAgdGhpcy5faGFuZGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2RlZmVycmVkcyA9IFtdO1xuXG4gICAgdGhpcy5kb1Jlc29sdmUoY2FsbGJhY2spO1xuICB9XG5cbiAgZG9SZXNvbHZlKGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIGxldCBkb25lID0gZmFsc2U7XG5cbiAgICB0cnkge1xuICAgICAgY2FsbGJhY2soXG4gICAgICAgIHZhbHVlID0+IHtcbiAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMucHJvbWlzZVJlc29sdmUodmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICByZWFzb24gPT4ge1xuICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5wcm9taXNlUmVqZWN0KHJlYXNvbik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChkb25lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZG9uZSA9IHRydWU7XG4gICAgICB0aGlzLnByb21pc2VSZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHByb21pc2VSZXNvbHZlKG5ld1ZhbHVlOiBQcm9taXNlIHwgdW5kZWZpbmVkKTogdm9pZCB7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMgYXMgUHJvbWlzZTtcblxuICAgIHRyeSB7XG4gICAgICAvLyBQcm9taXNlIFJlc29sdXRpb24gUHJvY2VkdXJlOiBodHRwczovL2dpdGh1Yi5jb20vUHJvbWlzZXMtYXBsdXMvUHJvbWlzZXMtc3BlYyN0aGUtUHJvbWlzZS1yZXNvbHV0aW9uLXByb2NlZHVyZVxuICAgICAgaWYgKG5ld1ZhbHVlID09PSBwcm9taXNlKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0EgUHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdCBzZWxmLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV3VmFsdWUgJiYgKHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG5ld1ZhbHVlID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICBjb25zdCB0aGVuID0gbmV3VmFsdWUudGhlbjtcblxuICAgICAgICBpZiAobmV3VmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgcHJvbWlzZS5fc3RhdGUgPSAzO1xuICAgICAgICAgIHByb21pc2UuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgcHJvbWlzZS5maW5hbGUoKTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHByb21pc2UuZG9SZXNvbHZlKGZ1bmN0aW9uKCk6IHZvaWQge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgICAgICAgdGhlbi5hcHBseShuZXdWYWx1ZSwgYXJndW1lbnRzKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcm9taXNlLl9zdGF0ZSA9IDE7XG4gICAgICBwcm9taXNlLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgcHJvbWlzZS5maW5hbGUoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBwcm9taXNlLnByb21pc2VSZWplY3QoZSk7XG4gICAgfVxuICB9XG5cbiAgcHJvbWlzZVJlamVjdChuZXdWYWx1ZTogUHJvbWlzZSB8IHVuZGVmaW5lZCk6IHZvaWQge1xuICAgIHRoaXMuX3N0YXRlID0gMjtcbiAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIHRoaXMuZmluYWxlKCk7XG4gIH1cblxuICBmaW5hbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3N0YXRlID09PSAyICYmIHRoaXMuX2RlZmVycmVkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIFByb21pc2UuX2ltbWVkaWF0ZSgoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5faGFuZGxlZCkge1xuICAgICAgICAgIFByb21pc2UuX3VuaGFuZGxlZFJlamVjdGlvbih0aGlzLl92YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLl9kZWZlcnJlZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHRoaXMuaGFuZGxlKHRoaXMuX2RlZmVycmVkc1tpXSk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGVmZXJyZWRzID0gbnVsbDtcbiAgfVxuXG4gIGhhbmRsZShkZWZlcnJlZDogUHJvbWlzZUhhbmRsZXIpOiB2b2lkIHtcbiAgICBsZXQgcHJvbWlzZSA9IHRoaXMgYXMgUHJvbWlzZTtcblxuICAgIHdoaWxlIChwcm9taXNlLl9zdGF0ZSA9PT0gMykge1xuICAgICAgcHJvbWlzZSA9IHByb21pc2UuX3ZhbHVlO1xuICAgIH1cblxuICAgIGlmIChwcm9taXNlLl9zdGF0ZSA9PT0gMCkge1xuICAgICAgcHJvbWlzZS5fZGVmZXJyZWRzLnB1c2goZGVmZXJyZWQpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJvbWlzZS5faGFuZGxlZCA9IHRydWU7XG4gICAgUHJvbWlzZS5faW1tZWRpYXRlKCgpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gcHJvbWlzZS5fc3RhdGUgPT09IDEgPyBkZWZlcnJlZC5vbkZ1bGZpbGxlZCA6IGRlZmVycmVkLm9uUmVqZWN0ZWQ7XG5cbiAgICAgIGlmIChjYWxsYmFjayA9PT0gbnVsbCkge1xuICAgICAgICBpZiAocHJvbWlzZS5fc3RhdGUgPT09IDEpIHtcbiAgICAgICAgICBkZWZlcnJlZC5wcm9taXNlLnByb21pc2VSZXNvbHZlKHByb21pc2UuX3ZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWZlcnJlZC5wcm9taXNlLnByb21pc2VSZWplY3QocHJvbWlzZS5fdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICB0cnkge1xuICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhwcm9taXNlLl92YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGRlZmVycmVkLnByb21pc2UucHJvbWlzZVJlamVjdChlKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGRlZmVycmVkLnByb21pc2UucHJvbWlzZVJlc29sdmUocmVzdWx0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhbGwoYXJyOiBBcnJheTxQcm9taXNlPik6IFByb21pc2Uge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ1Byb21pc2UuYWxsIGFjY2VwdHMgYW4gYXJyYXknKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnIpO1xuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoW10pO1xuICAgICAgfVxuXG4gICAgICBsZXQgcmVtYWluaW5nID0gYXJncy5sZW5ndGg7XG4gICAgICBjb25zdCBtYW5hZ2VSZXNwb25zZSA9IChpLCB2YWx1ZSk6IHZvaWQgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICh2YWx1ZSAmJiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgICBjb25zdCB0aGVuID0gdmFsdWUudGhlbjtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRoZW4uY2FsbChcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSA9PiBtYW5hZ2VSZXNwb25zZShpLCB2YWx1ZSksXG4gICAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGFyZ3NbaV0gPSB2YWx1ZTtcblxuICAgICAgICAgIGlmICgtLXJlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgICAgcmVzb2x2ZShhcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1hbmFnZVJlc3BvbnNlKGksIGFyZ3NbaV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHJlc29sdmUodmFsdWUpOiBQcm9taXNlIHtcbiAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gUHJvbWlzZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHJlc29sdmUodmFsdWUpKTtcbiAgfVxuXG4gIHN0YXRpYyByZWplY3QodmFsdWUpOiBQcm9taXNlIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKF8sIHJlamVjdCkgPT4gcmVqZWN0KHZhbHVlKSk7XG4gIH1cblxuICBzdGF0aWMgcmFjZShhcnI6IEFycmF5PFByb21pc2U+KTogUHJvbWlzZSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICAgIHJldHVybiByZWplY3QobmV3IFR5cGVFcnJvcignUHJvbWlzZS5yYWNlIGFjY2VwdHMgYW4gYXJyYXknKSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGFycltpXSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIF9pbW1lZGlhdGUoY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgY29uc3QgaWdub3JlZCA9IHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xuICB9XG5cbiAgc3RhdGljIF91bmhhbmRsZWRSZWplY3Rpb24oZXJyb3IpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUpIHtcbiAgICAgIGNvbnNvbGUud2FybignUG9zc2libGUgVW5oYW5kbGVkIFByb21pc2UgUmVqZWN0aW9uOicsIGVycm9yKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuICB9XG59XG5cblByb21pc2UucHJvdG90eXBlWydjYXRjaCddID0gZnVuY3Rpb24ob25SZWplY3RlZDogRnVuY3Rpb24pOiBQcm9taXNlIHwgdm9pZCB7XG4gIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3RlZCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZVsndGhlbiddID0gZnVuY3Rpb24ob25GdWxmaWxsZWQ6IEZ1bmN0aW9uLCBvblJlamVjdGVkOiBGdW5jdGlvbik6IFByb21pc2UgfCB2b2lkIHtcbiAgY29uc3QgcHJvbWlzZSA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKCgpID0+IG51bGwpO1xuXG4gIHRoaXMuaGFuZGxlKG5ldyBQcm9taXNlSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcHJvbWlzZSkpO1xuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGVbJ2ZpbmFsbHknXSA9IGZ1bmN0aW9uKGNhbGxiYWNrOiBGdW5jdGlvbik6IFByb21pc2UgfCB2b2lkIHtcbiAgY29uc3QgY29uc3RydWN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gIHJldHVybiB0aGlzLnRoZW4oXG4gICAgdmFsdWUgPT4gY29uc3RydWN0b3IucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKCgpID0+IHZhbHVlKSxcbiAgICByZWFzb24gPT4gY29uc3RydWN0b3IucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKCgpID0+IGNvbnN0cnVjdG9yLnJlamVjdChyZWFzb24pKVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvbWlzZTsiLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCBQcm9taXNlIGZyb20gJy4vUHJvbWlzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb21pc2VIYW5kbGVyIHtcbiAgb25GdWxmaWxsZWQ6IEZ1bmN0aW9uO1xuICBvblJlamVjdGVkOiBGdW5jdGlvbjtcbiAgcHJvbWlzZTogUHJvbWlzZTtcblxuICBjb25zdHJ1Y3RvcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcHJvbWlzZSkge1xuICAgIHRoaXMub25GdWxmaWxsZWQgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IG51bGw7XG4gICAgdGhpcy5vblJlamVjdGVkID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT09ICdmdW5jdGlvbicgPyBvblJlamVjdGVkIDogbnVsbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQgTG9nZ2VyRmFjdG9yeSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VyRmFjdG9yeSc7XG5pbXBvcnQgSVBlZXJDb25uZWN0aW9uLCB7UGVlckNvbm5lY3Rpb25FdmVudHN9IGZyb20gJy4vSVBlZXJDb25uZWN0aW9uJztcbmltcG9ydCB7SUxvZ2dlcn0gZnJvbSAnLi4vbG9nZ2VyL0xvZ2dlckludGVyZmFjZSc7XG5pbXBvcnQgRmVhdHVyZUVuYWJsZW1lbnQgZnJvbSAnLi4vc2RrL2ZlYXR1cmUvRmVhdHVyZUVuYWJsZW1lbnQnO1xuaW1wb3J0IHtJTGVnYWN5UlRDU3RhdHNSZXBvcnR9IGZyb20gJy4vUnRjQ29ubmVjdGlvbk1vbml0b3InO1xuXG5jbGFzcyBWYW5pbGxhUGVlckNvbm5lY3Rpb24gaW1wbGVtZW50cyBJUGVlckNvbm5lY3Rpb24ge1xuICBwcml2YXRlIHJlYWRvbmx5IF9sb2dnZXI6IElMb2dnZXIgPSBMb2dnZXJGYWN0b3J5LmdldExvZ2dlcignVmFuaWxsYVBlZXJDb25uZWN0aW9uJyk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3BlZXJDb25uZWN0aW9uOiBSVENQZWVyQ29ubmVjdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uPzogUlRDQ29uZmlndXJhdGlvbikge1xuICAgIGlmIChGZWF0dXJlRW5hYmxlbWVudC53ZWJraXRSVENQZWVyQ29ubmVjdGlvbkVuYWJsZWQpIHtcbiAgICAgIHRoaXMuX3BlZXJDb25uZWN0aW9uID0gbmV3IHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcGVlckNvbm5lY3Rpb24gPSBuZXcgUlRDUGVlckNvbm5lY3Rpb24oY29uZmlndXJhdGlvbik7XG4gIH1cblxuICBnZXQgbmF0aXZlKCk6IFJUQ1BlZXJDb25uZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fcGVlckNvbm5lY3Rpb247XG4gIH1cblxuICBnZXQgY3VycmVudExvY2FsRGVzY3JpcHRpb24oKTogUlRDU2Vzc2lvbkRlc2NyaXB0aW9uIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3BlZXJDb25uZWN0aW9uLmN1cnJlbnRMb2NhbERlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRSZW1vdGVEZXNjcmlwdGlvbigpOiBSVENTZXNzaW9uRGVzY3JpcHRpb24gfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fcGVlckNvbm5lY3Rpb24uY3VycmVudFJlbW90ZURlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IGljZUNvbm5lY3Rpb25TdGF0ZSgpOiBSVENJY2VDb25uZWN0aW9uU3RhdGUge1xuICAgIHJldHVybiB0aGlzLl9wZWVyQ29ubmVjdGlvbi5pY2VDb25uZWN0aW9uU3RhdGU7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNHZXRDb25maWd1cmF0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fcGVlckNvbm5lY3Rpb24uZ2V0Q29uZmlndXJhdGlvbiA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1NldENvbmZpZ3VyYXRpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9wZWVyQ29ubmVjdGlvbi5zZXRDb25maWd1cmF0aW9uID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzQWRkVHJhbnNjZWl2ZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFGZWF0dXJlRW5hYmxlbWVudC5hZGRUcmFuY2VpdmVyRGlzYWJsZWQgJiYgdHlwZW9mIHRoaXMuX3BlZXJDb25uZWN0aW9uLmFkZFRyYW5zY2VpdmVyID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlT2ZmZXIob3B0aW9ucz86IFJUQ09mZmVyT3B0aW9ucyk6IFByb21pc2U8UlRDU2Vzc2lvbkRlc2NyaXB0aW9uSW5pdD4ge1xuICAgIGlmIChGZWF0dXJlRW5hYmxlbWVudC5wcm9taXNlQmFzZWRQQ01ldGhvZHNEaXNhYmxlZCkge1xuICAgICAgLy8gSWdub3JlZCBhcyBsZWFnY3kgY3JlYXRlT2ZmZXIgbWV0aG9kIHdpdGggY2FsbGJhY2tzIGlzIGRlcHJlY2F0ZWRcbiAgICAgIC8vIFJlcXVpcmVzIGEgdHMtaWdub3JlIGRpcmVjdGl2ZSB0byBwcmV2ZW50IHR5cGVzY3JpcHQgZXJyb3JzXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gdGhpcy5fcGVlckNvbm5lY3Rpb24uY3JlYXRlT2ZmZXIocmVzb2x2ZSwgcmVqZWN0LCBvcHRpb25zKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3BlZXJDb25uZWN0aW9uLmNyZWF0ZU9mZmVyKG9wdGlvbnMpO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlQW5zd2VyKG9wdGlvbnM/OiBSVENBbnN3ZXJPcHRpb25zKTogUHJvbWlzZTxSVENTZXNzaW9uRGVzY3JpcHRpb25Jbml0PiB7XG4gICAgaWYgKEZlYXR1cmVFbmFibGVtZW50LnByb21pc2VCYXNlZFBDTWV0aG9kc0Rpc2FibGVkKSB7XG4gICAgICAvLyBJZ25vcmVkIGFzIGxlYWdjeSBjcmVhdGVBbnN3ZXIgbWV0aG9kIHdpdGggY2FsbGJhY2tzIGlzIGRlcHJlY2F0ZWRcbiAgICAgIC8vIFJlcXVpcmVzIGEgdHMtaWdub3JlIGRpcmVjdGl2ZSB0byBwcmV2ZW50IHR5cGVzY3JpcHQgZXJyb3JzXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gdGhpcy5fcGVlckNvbm5lY3Rpb24uY3JlYXRlQW5zd2VyKHJlc29sdmUsIHJlamVjdCwgb3B0aW9ucykpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9wZWVyQ29ubmVjdGlvbi5jcmVhdGVBbnN3ZXIob3B0aW9ucyk7XG4gIH1cblxuICBhc3luYyBzZXRMb2NhbERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uOiBSVENTZXNzaW9uRGVzY3JpcHRpb25Jbml0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3BlZXJDb25uZWN0aW9uLnNldExvY2FsRGVzY3JpcHRpb24oRmVhdHVyZUVuYWJsZW1lbnQucHJvbWlzZUJhc2VkUENNZXRob2RzRGlzYWJsZWQgP1xuICAgICAgbmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbihkZXNjcmlwdGlvbikgOiBkZXNjcmlwdGlvbik7XG4gIH1cblxuICBhc3luYyBzZXRSZW1vdGVEZXNjcmlwdGlvbihkZXNjcmlwdGlvbjogUlRDU2Vzc2lvbkRlc2NyaXB0aW9uSW5pdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGhhc0NyeXB0byA9IGRlc2NyaXB0aW9uLnNkcD8ubWF0Y2goL2E9Y3J5cHRvOi9pKTtcblxuICAgIGlmIChoYXNDcnlwdG8pIHtcbiAgICAgIHRoaXMuX2xvZ2dlci53YXJuKCdTRFAgYT1jcnlwdG8gaXMgbm90IHN1cHBvcnRlZCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9wZWVyQ29ubmVjdGlvbi5zZXRSZW1vdGVEZXNjcmlwdGlvbihGZWF0dXJlRW5hYmxlbWVudC5wcm9taXNlQmFzZWRQQ01ldGhvZHNEaXNhYmxlZCA/XG4gICAgICBuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSA6IGRlc2NyaXB0aW9uKTtcbiAgfVxuXG4gIGdldFNlbmRlcnMoKTogUlRDUnRwU2VuZGVyW10ge1xuICAgIHJldHVybiB0aGlzLl9wZWVyQ29ubmVjdGlvbi5nZXRTZW5kZXJzKCk7XG4gIH1cblxuICBnZXRTdGF0cyhzZWxlY3Rvcj86IE1lZGlhU3RyZWFtVHJhY2sgfCBudWxsKTogUHJvbWlzZTxSVENTdGF0c1JlcG9ydD4ge1xuICAgIHJldHVybiB0aGlzLl9wZWVyQ29ubmVjdGlvbi5nZXRTdGF0cyhzZWxlY3Rvcik7XG4gIH1cblxuICBnZXRTdGF0c0xlZ2FjeSgpOiBQcm9taXNlPElMZWdhY3lSVENTdGF0c1JlcG9ydD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIC8vIElnbm9yZWQgZHVlIHRvIHR5cGVzY3JpcHQgbm90IGhhdmluZyBsZWdhY3kgJ2dldFN0YXRzJyBtZXRob2QgdHlwZSBkZWZpbml0aW9uXG4gICAgICAvLyBUaGlzIHdhcyBhIENocm9tZSBzcGVjaWZpYyBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgJ2dldFN0YXRzJyBtZXRob2QgZm9yXG4gICAgICAvLyBDaHJvbWVAPD0gNjYgZGV0YWlsZWQgaGVyZTogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NjI3ODE2XG4gICAgICAvLyBSZXF1aXJlcyBhIHRzLWlnbm9yZSBkaXJlY3RpdmUgdG8gcHJldmVudCB0eXBlc2NyaXB0IGVycm9yc1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29uc3QgaWdub3JlZCA9IHRoaXMuX3BlZXJDb25uZWN0aW9uLmdldFN0YXRzKHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcih0eXBlOiBQZWVyQ29ubmVjdGlvbkV2ZW50cywgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsIG9wdGlvbnM/OiBib29sZWFuIHwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLl9wZWVyQ29ubmVjdGlvbi5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZTogUGVlckNvbm5lY3Rpb25FdmVudHMsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LCBvcHRpb25zPzogYm9vbGVhbiB8IEV2ZW50TGlzdGVuZXJPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5fcGVlckNvbm5lY3Rpb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gIH1cblxuICBhZGRUcmFuc2NlaXZlcihuYW1lOiBzdHJpbmcsIG9wdGlvbnM6IFJUQ1J0cFRyYW5zY2VpdmVySW5pdCk6IFJUQ1J0cFRyYW5zY2VpdmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGVlckNvbm5lY3Rpb24uYWRkVHJhbnNjZWl2ZXIobmFtZSwgb3B0aW9ucyk7XG4gIH1cblxuICBhZGRTdHJlYW0obWVkaWFTdHJlYW06IE1lZGlhU3RyZWFtKTogdm9pZCB7XG4gICAgbWVkaWFTdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaCh0cmFjayA9PiB7XG4gICAgICB0aGlzLl9wZWVyQ29ubmVjdGlvbi5hZGRUcmFjayh0cmFjayk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDb25maWd1cmF0aW9uKCk6IFJUQ0NvbmZpZ3VyYXRpb24ge1xuICAgIHJldHVybiB0aGlzLl9wZWVyQ29ubmVjdGlvbi5nZXRDb25maWd1cmF0aW9uKCk7XG4gIH1cblxuICBzZXRDb25maWd1cmF0aW9uKGNvbmZpZ3VyYXRpb246IFJUQ0NvbmZpZ3VyYXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLl9wZWVyQ29ubmVjdGlvbi5zZXRDb25maWd1cmF0aW9uKGNvbmZpZ3VyYXRpb24pO1xuICB9XG5cbiAgc2V0IG9udHJhY2soaGFuZGxlcjogKCh0aGlzOiBSVENQZWVyQ29ubmVjdGlvbiwgZXY6IFJUQ1RyYWNrRXZlbnQpID0+IHVua25vd24pIHwgbnVsbCkge1xuICAgIHRoaXMuX3BlZXJDb25uZWN0aW9uLm9udHJhY2sgPSBoYW5kbGVyO1xuICB9XG5cbiAgZ2V0IG9udHJhY2soKTogKCh0aGlzOiBSVENQZWVyQ29ubmVjdGlvbiwgZXY6IFJUQ1RyYWNrRXZlbnQpID0+IHVua25vd24pIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3BlZXJDb25uZWN0aW9uLm9udHJhY2s7XG4gIH1cblxuICBzZXQgb25pY2VjYW5kaWRhdGUoaGFuZGxlcjogKCh0aGlzOiBSVENQZWVyQ29ubmVjdGlvbiwgZXY6IFJUQ1BlZXJDb25uZWN0aW9uSWNlRXZlbnQpID0+IHVua25vd24pIHwgbnVsbCkge1xuICAgIHRoaXMuX3BlZXJDb25uZWN0aW9uLm9uaWNlY2FuZGlkYXRlID0gaGFuZGxlcjtcbiAgfVxuXG4gIGdldCBvbmljZWNhbmRpZGF0ZSgpOiAoKHRoaXM6IFJUQ1BlZXJDb25uZWN0aW9uLCBldjogUlRDUGVlckNvbm5lY3Rpb25JY2VFdmVudCkgPT4gdW5rbm93bikgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fcGVlckNvbm5lY3Rpb24ub25pY2VjYW5kaWRhdGU7XG4gIH1cblxuICBzZXQgb25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UoaGFuZGxlcjogKCh0aGlzOiBSVENQZWVyQ29ubmVjdGlvbiwgZXY6IEV2ZW50KSA9PiB1bmtub3duKSB8IG51bGwpIHtcbiAgICB0aGlzLl9wZWVyQ29ubmVjdGlvbi5vbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSA9IGhhbmRsZXI7XG4gIH1cblxuICBnZXQgb25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UoKTogKCh0aGlzOiBSVENQZWVyQ29ubmVjdGlvbiwgZXY6IEV2ZW50KSA9PiB1bmtub3duKSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9wZWVyQ29ubmVjdGlvbi5vbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZTtcbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuX3BlZXJDb25uZWN0aW9uLmNsb3NlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFuaWxsYVBlZXJDb25uZWN0aW9uOyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgSVBlZXJDb25uZWN0aW9uRmFjdG9yeSBmcm9tICcuL0lQZWVyQ29ubmVjdGlvbkZhY3RvcnknO1xuaW1wb3J0IElQZWVyQ29ubmVjdGlvbiBmcm9tICcuL0lQZWVyQ29ubmVjdGlvbic7XG5pbXBvcnQgVmFuaWxsYVBlZXJDb25uZWN0aW9uIGZyb20gJy4vVmFuaWxsYVBlZXJDb25uZWN0aW9uJztcblxuY2xhc3MgVmFuaWxsYVBlZXJDb25uZWN0aW9uRmFjdG9yeSBpbXBsZW1lbnRzIElQZWVyQ29ubmVjdGlvbkZhY3Rvcnkge1xuICBhc3luYyBjcmVhdGVQZWVyQ29ubmVjdGlvbihjb25maWd1cmF0aW9uPzogUlRDQ29uZmlndXJhdGlvbik6IFByb21pc2U8SVBlZXJDb25uZWN0aW9uPiB7XG4gICAgcmV0dXJuIG5ldyBWYW5pbGxhUGVlckNvbm5lY3Rpb24oY29uZmlndXJhdGlvbik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFuaWxsYVBlZXJDb25uZWN0aW9uRmFjdG9yeTsiLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IFN1YmplY3QgZnJvbSAnLi9TdWJqZWN0JztcbmltcG9ydCBJRGlzcG9zYWJsZSBmcm9tICcuLi9sYW5nL0lEaXNwb3NhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhZE9ubHlTdWJqZWN0PFQ+IHtcbiAgcHJpdmF0ZSByZWFkb25seSBfc3ViamVjdDogU3ViamVjdDxUPjtcblxuICBjb25zdHJ1Y3RvcihzdWJqZWN0OiBTdWJqZWN0PFQ+KSB7XG4gICAgdGhpcy5fc3ViamVjdCA9IHN1YmplY3Q7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuX3N1YmplY3QudmFsdWU7XG4gIH1cblxuICBzdWJzY3JpYmUobGlzdGVuZXI6IChUKSA9PiB2b2lkKTogSURpc3Bvc2FibGUge1xuICAgIHJldHVybiB0aGlzLl9zdWJqZWN0LnN1YnNjcmliZShsaXN0ZW5lcik7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IElEaXNwb3NhYmxlIGZyb20gJy4uL2xhbmcvSURpc3Bvc2FibGUnO1xuaW1wb3J0IERpc3Bvc2FibGUgZnJvbSAnLi4vbGFuZy9EaXNwb3NhYmxlJztcbmltcG9ydCBJQ29tcGFyYWJsZSBmcm9tICcuLi9sYW5nL0lDb21wYXJhYmxlJztcblxuY2xhc3MgRGlzcG9zYWJsZUxpc3RlbmVyPFQ+IGV4dGVuZHMgRGlzcG9zYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGxpc3RlbmVyczogQXJyYXk8VD4sIGxpc3RlbmVyOiBUKSB7XG4gICAgc3VwZXIoKCkgPT4ge1xuICAgICAgY29uc3QgaWR4ID0gbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuXG4gICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpZHgsIDEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YmplY3Q8VD4ge1xuICBwcml2YXRlIHJlYWRvbmx5IF9saXN0ZW5lcnM6IEFycmF5PChUKSA9PiB2b2lkPjtcbiAgcHJpdmF0ZSBfdmFsdWU6IFQ7XG5cbiAgY29uc3RydWN0b3IodmFsdWU6IFQpIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlOiBUKSB7XG4gICAgbGV0IGNoYW5nZWQgPSB0aGlzLl92YWx1ZSAhPT0gdmFsdWU7XG5cbiAgICBpZiAoY2hhbmdlZCAmJiB2YWx1ZSkge1xuICAgICAgY29uc3QgY29tcGFyYWJsZSA9IHZhbHVlIGFzIHVua25vd24gYXMgSUNvbXBhcmFibGU8VD47XG5cbiAgICAgIGlmICh0eXBlb2YgY29tcGFyYWJsZS5lcXVhbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hhbmdlZCA9ICFjb21wYXJhYmxlLmVxdWFscyh0aGlzLl92YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFjaGFuZ2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcblxuICAgIHRoaXMuX2xpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgIGxpc3RlbmVyKHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzdWJzY3JpYmUobGlzdGVuZXI6IChUKSA9PiB2b2lkKTogSURpc3Bvc2FibGUge1xuICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIGxpc3RlbmVyKHRoaXMuX3ZhbHVlKTtcblxuICAgIHJldHVybiBuZXcgRGlzcG9zYWJsZUxpc3RlbmVyPChUKSA9PiB2b2lkPih0aGlzLl9saXN0ZW5lcnMsIGxpc3RlbmVyKTtcbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnZpcm9ubWVudCB7XG4gIHN0YXRpYyBnZXRFbnZpcm9ubWVudEZyb21VcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBiYXNlVVJMID0gbmV3IFVSTCh1cmwpO1xuXG4gICAgICByZXR1cm4gYmFzZVVSTC5vcmlnaW47XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IExvZ2dlckZhY3RvcnkgZnJvbSAnLi4vbG9nZ2VyL0xvZ2dlckZhY3RvcnknO1xuaW1wb3J0IFN0cmluZ3MgZnJvbSAnLi4vbGFuZy9TdHJpbmdzJztcbmltcG9ydCBTdWJqZWN0IGZyb20gJy4uL3J4L1N1YmplY3QnO1xuaW1wb3J0IFJlYWRPbmx5U3ViamVjdCBmcm9tICcuLi9yeC9SZWFkT25seVN1YmplY3QnO1xuaW1wb3J0IElQZWVyQ29ubmVjdGlvbkZhY3RvcnkgZnJvbSAnLi4vcnRjL0lQZWVyQ29ubmVjdGlvbkZhY3RvcnknO1xuaW1wb3J0IFZhbmlsbGFQZWVyQ29ubmVjdGlvbkZhY3RvcnkgZnJvbSAnLi4vcnRjL1ZhbmlsbGFQZWVyQ29ubmVjdGlvbkZhY3RvcnknO1xuaW1wb3J0IEVkZ2VBdXRoIGZyb20gJy4vZWRnZUF1dGgvRWRnZUF1dGgnO1xuaW1wb3J0IHtJTG9nZ2VyfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VySW50ZXJmYWNlJztcbmltcG9ydCB7TG9nZ2luZ0xldmVsLCBMb2dnaW5nTGV2ZWxUeXBlfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCBDb25zb2xlQXBwZW5kZXIgZnJvbSAnLi4vbG9nZ2VyL0NvbnNvbGVBcHBlbmRlcic7XG5pbXBvcnQgVGVsZW1ldHJ5QXBwZW5kZXIgZnJvbSAnLi4vdGVsZW1ldHJ5L1RlbGVtZXRyeUFwZW5kZXInO1xuaW1wb3J0IENvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXIgZnJvbSAnLi4vZG9tL0NvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXInO1xuaW1wb3J0IE1ldHJpY3NDb25maWd1cmF0aW9uLCB7VGVsZW1ldHJ5TGV2ZWwsIFRlbGVtZXRyeUxldmVsVHlwZX0gZnJvbSAnLi4vbWV0cmljcy9NZXRyaWNzQ29uZmlndXJhdGlvbic7XG5pbXBvcnQgTWV0cmljc1NlcnZpY2UgZnJvbSAnLi4vbWV0cmljcy9NZXRyaWNzU2VydmljZSc7XG5pbXBvcnQgVGVsZW1ldHJ5TGV2ZWxNYXBwaW5nIGZyb20gJy4uL21ldHJpY3MvVGVsZW1ldHJpY0xldmVsTWFwcGluZyc7XG5pbXBvcnQgTG9nZ2luZ0xldmVsTWFwcGluZyBmcm9tICcuLi9sb2dnZXIvTG9nZ2luZ0xldmVsTWFwcGluZyc7XG5pbXBvcnQgUHJpdmFjeU1vZGUgZnJvbSAnLi4vZG9tL1ByaXZhY3lNb2RlJztcbmltcG9ydCBCcm93c2VyRGV0ZWN0b3IgZnJvbSAnLi4vZG9tL0Jyb3dzZXJEZXRlY3Rvcic7XG5pbXBvcnQge0lDb25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyfSBmcm9tICcuLi9kb20vSUNvbmZpZ3VyYXRpb25QYXJhbWF0ZXJSZWFkZXInO1xuaW1wb3J0IEFwcGxpY2F0aW9uQWN0aXZpdHlNb25pdG9yIGZyb20gJy4uL2RvbS9BcHBsaWNhdGlvbkFjdGl2aXR5TW9uaXRvcic7XG5pbXBvcnQgVGVsZW1ldHJ5VXJsIGZyb20gJy4vVGVsZW1ldHJ5VXJsJztcbmltcG9ydCBFbnZpcm9ubWVudCBmcm9tICcuL0Vudmlyb25tZW50JztcbmltcG9ydCB7SGxzUGxheWVyVHlwZSwgU2hha2FUeXBlLCBXZWJQbGF5ZXJUeXBlfSBmcm9tICcuL3N0cmVhbWluZy9TdHJlYW1UeXBlcyc7XG5pbXBvcnQgRGlzY292ZXJ5VXJpIGZyb20gJy4vZGlzY292ZXJ5L0Rpc2NvdmVyeVVyaSc7XG5pbXBvcnQgTWV0cmljc0ZhY3RvcnkgZnJvbSAnLi4vbWV0cmljcy9NZXRyaWNzRmFjdG9yeSc7XG5pbXBvcnQgVGVsZW1ldHJ5RGVmYXVsdCBmcm9tICcuLi9tZXRyaWNzL1RlbGVtZXRyeURlZmF1bHQnO1xuXG5jb25zdCBwYWdlTG9hZFRpbWUgPSB3aW5kb3dbJ19fcGhlbml4UGFnZUxvYWRUaW1lJ10gfHwgd2luZG93WydfX3BhZ2VMb2FkVGltZSddIHx8IERhdGUubm93KCk7XG5cbmludGVyZmFjZSBJSW5pdE9wdGlvbnMge1xuICBkaXNjb3ZlcnlVcmk/OiBzdHJpbmc7XG4gIHBlZXJDb25uZWN0aW9uRmFjdG9yeT86IElQZWVyQ29ubmVjdGlvbkZhY3Rvcnk7XG4gIHRlbGVtZXRyeUxldmVsPzogVGVsZW1ldHJ5TGV2ZWxUeXBlO1xuICBsb2dnaW5nTGV2ZWw/OiBMb2dnaW5nTGV2ZWxUeXBlO1xuICBjb25zb2xlTG9nZ2luZ0xldmVsPzogTG9nZ2luZ0xldmVsVHlwZTtcbiAgYXV0b21hdGljYWxseVBsYXlNZWRpYVN0cmVhbT86IGJvb2xlYW47XG4gIGF1dG9tYXRpY2FsbHlNdXRlVmlkZW9PblBsYXlGYWlsdXJlPzogYm9vbGVhbjtcbiAgd2ViUGxheWVyTG9hZGVyPzogKHBsYXllcjogV2ViUGxheWVyVHlwZSkgPT4gdm9pZDtcbiAgc2hha2FQbGF5ZXJMb2FkZXI/OiAocGxheWVyOiBTaGFrYVR5cGUpID0+IHZvaWQ7XG4gIGhsc0pzTG9hZGVyPzogKHBsYXllcjogSGxzUGxheWVyVHlwZSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0RLIHtcbiAgcHJpdmF0ZSBzdGF0aWMgX2F1dG9tYXRpY2FsbHlSZXRyeU9uRmFpbHVyZSA9IHRydWU7XG4gIHByaXZhdGUgc3RhdGljIF9hdXRvbWF0aWNhbGx5UmVjb25uZWN0UGVlckNvbm5lY3Rpb24gPSB0cnVlO1xuICBwcml2YXRlIHN0YXRpYyBfYXV0b21hdGljYWxseVBsYXlNZWRpYVN0cmVhbSA9IHRydWU7XG4gIHByaXZhdGUgc3RhdGljIF9hdXRvbWF0aWNhbGx5TXV0ZVZpZGVvT25QbGF5RmFpbHVyZSA9IHRydWU7XG4gIHByaXZhdGUgc3RhdGljIF93ZWJQbGF5ZXJMb2FkZXIgPSBudWxsO1xuICBwcml2YXRlIHN0YXRpYyBfc2hha2FQbGF5ZXJMb2FkZXIgPSBudWxsO1xuICBwcml2YXRlIHN0YXRpYyBfaGxzSnNMb2FkZXIgPSBudWxsO1xuICBwcml2YXRlIHN0YXRpYyBfY29uZmlndXJhdGlvblBhcmFtZXRlclJlYWRlcjogSUNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXIgPSBuZXcgQ29uZmlndXJhdGlvblBhcmFtZXRlclJlYWRlcigpO1xuICBwcml2YXRlIHN0YXRpYyBfYXBwbGljYXRpb25BY3Rpdml0eU1vbml0b3I6IEFwcGxpY2F0aW9uQWN0aXZpdHlNb25pdG9yO1xuICBwcml2YXRlIHN0YXRpYyBfZW52aXJvbm1lbnQ6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oJycpO1xuICBwcml2YXRlIHN0YXRpYyBfdGVsZW1ldHJ5VXJsOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCdodHRwczovL3RlbGVtZXRyeS5waGVuaXhydHMuY29tL3RlbGVtZXRyeScpO1xuICBwcml2YXRlIHN0YXRpYyBfbWF4aW1hbE51bWJlck9mUGVlckNvbm5lY3Rpb25SZWNvbm5lY3RBdHRlbXB0cyA9IDg7XG4gIHByaXZhdGUgc3RhdGljIF90ZWxlbWV0cnlMZXZlbDogU3ViamVjdDxUZWxlbWV0cnlMZXZlbD4gPSBuZXcgU3ViamVjdDxUZWxlbWV0cnlMZXZlbD4oVGVsZW1ldHJ5RGVmYXVsdC5kZWZhdWx0VGVsZW1ldHJ5TGV2ZWwpO1xuICBwcml2YXRlIHN0YXRpYyBfbWV0cmljc1NlcnZpY2U6IE1ldHJpY3NTZXJ2aWNlO1xuICBwcml2YXRlIHN0YXRpYyBfbWV0cmljc0NvbmZpZ3VyYXRpb246IE1ldHJpY3NDb25maWd1cmF0aW9uXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9zZW5kTG9jYWxDYW5kaWRhdGVzOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoIVByaXZhY3lNb2RlLmlzUHJpdmF0ZSk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF90ZW5hbmN5OiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCcnKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2NsaWVudFNlc3Npb25JZDogc3RyaW5nID0gU3RyaW5ncy5yYW5kb20oMzIpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfbG9hZGVkVGltZXN0YW1wOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2xvZ2dlcjogSUxvZ2dlciA9IExvZ2dlckZhY3RvcnkuZ2V0TG9nZ2VyKCdTREsnKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2luaXRpYWxpemVkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfcGVlckNvbm5lY3Rpb25GYWN0b3J5OiBTdWJqZWN0PElQZWVyQ29ubmVjdGlvbkZhY3Rvcnk+ID0gbmV3IFN1YmplY3Q8SVBlZXJDb25uZWN0aW9uRmFjdG9yeT4obmV3IFZhbmlsbGFQZWVyQ29ubmVjdGlvbkZhY3RvcnkoKSk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9yZWFkT25seUluaXRpYWxpemVkOiBSZWFkT25seVN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgUmVhZE9ubHlTdWJqZWN0PGJvb2xlYW4+KFNESy5faW5pdGlhbGl6ZWQpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfcmVhZE9ubHlEaXNjb3ZlcnlVcmk6IFJlYWRPbmx5U3ViamVjdDxzdHJpbmc+ID0gbmV3IFJlYWRPbmx5U3ViamVjdDxzdHJpbmc+KERpc2NvdmVyeVVyaS51cmkpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfcmVhZE9ubHlQZWVyQ29ubmVjdGlvbkZhY3Rvcnk6IFJlYWRPbmx5U3ViamVjdDxJUGVlckNvbm5lY3Rpb25GYWN0b3J5PiA9IG5ldyBSZWFkT25seVN1YmplY3Q8SVBlZXJDb25uZWN0aW9uRmFjdG9yeT4oU0RLLl9wZWVyQ29ubmVjdGlvbkZhY3RvcnkpO1xuXG4gIHN0YXRpYyBnZXQgcGFnZUxvYWRUaW1lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHBhZ2VMb2FkVGltZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc2VuZExvY2FsQ2FuZGlkYXRlcygpOiBTdWJqZWN0PGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5fc2VuZExvY2FsQ2FuZGlkYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdGVuYW5jeSgpOiBTdWJqZWN0PHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl90ZW5hbmN5O1xuICB9XG5cbiAgc3RhdGljIGdldCBjbGllbnRTZXNzaW9uSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gU0RLLl9jbGllbnRTZXNzaW9uSWQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGxvYWRlZFRpbWVzdGFtcCgpOiBEYXRlIHtcbiAgICByZXR1cm4gU0RLLl9sb2FkZWRUaW1lc3RhbXA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGluaXRpYWxpemVkKCk6IFJlYWRPbmx5U3ViamVjdDxib29sZWFuPiB7XG4gICAgcmV0dXJuIFNESy5fcmVhZE9ubHlJbml0aWFsaXplZDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZGlzY292ZXJ5VXJpKCk6IFJlYWRPbmx5U3ViamVjdDxzdHJpbmc+IHtcbiAgICByZXR1cm4gU0RLLl9yZWFkT25seURpc2NvdmVyeVVyaTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcGVlckNvbm5lY3Rpb25GYWN0b3J5KCk6IFJlYWRPbmx5U3ViamVjdDxJUGVlckNvbm5lY3Rpb25GYWN0b3J5PiB7XG4gICAgcmV0dXJuIFNESy5fcmVhZE9ubHlQZWVyQ29ubmVjdGlvbkZhY3Rvcnk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGF1dG9tYXRpY1JldHJ5T25GYWlsdXJlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBTREsuX2F1dG9tYXRpY2FsbHlSZXRyeU9uRmFpbHVyZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgYXV0b21hdGljYWxseVJlY29ubmVjdFBlZXJDb25uZWN0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBTREsuX2F1dG9tYXRpY2FsbHlSZWNvbm5lY3RQZWVyQ29ubmVjdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgYXV0b21hdGljYWxseVBsYXlNZWRpYVN0cmVhbSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gU0RLLl9hdXRvbWF0aWNhbGx5UGxheU1lZGlhU3RyZWFtO1xuICB9XG5cbiAgc3RhdGljIGdldCBhdXRvbWF0aWNhbGx5TXV0ZVZpZGVvT25QbGF5RmFpbHVyZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gU0RLLl9hdXRvbWF0aWNhbGx5TXV0ZVZpZGVvT25QbGF5RmFpbHVyZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgd2ViUGxheWVyTG9hZGVyKCk6IChXZWJQbGF5ZXJUeXBlKSA9PiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5fd2ViUGxheWVyTG9hZGVyO1xuICB9XG5cbiAgc3RhdGljIGdldCBzaGFrYVBsYXllckxvYWRlcigpOiAoU2hha2FUeXBlKSA9PiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5fc2hha2FQbGF5ZXJMb2FkZXI7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGhsc0pzTG9hZGVyKCk6IChIbHNQbGF5ZXJUeXBlKSA9PiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5faGxzSnNMb2FkZXI7XG4gIH1cblxuICBzdGF0aWMgZ2V0IG1ldHJpY3NTZXJ2aWNlKCk6IE1ldHJpY3NTZXJ2aWNlIHtcbiAgICByZXR1cm4gU0RLLl9tZXRyaWNzU2VydmljZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgYXBwbGljYXRpb25BY3Rpdml0eU1vbml0b3IoKTogQXBwbGljYXRpb25BY3Rpdml0eU1vbml0b3Ige1xuICAgIHJldHVybiB0aGlzLl9hcHBsaWNhdGlvbkFjdGl2aXR5TW9uaXRvcjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdGVsZW1ldHJ5VXJsKCk6IFN1YmplY3Q8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbGVtZXRyeVVybDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgbWF4aW1hbE51bWJlck9mUGVlckNvbm5lY3Rpb25SZWNvbm5lY3RBdHRlbXB0cygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9tYXhpbWFsTnVtYmVyT2ZQZWVyQ29ubmVjdGlvblJlY29ubmVjdEF0dGVtcHRzO1xuICB9XG5cbiAgc3RhdGljIHNldCBtYXhpbWFsTnVtYmVyT2ZQZWVyQ29ubmVjdGlvblJlY29ubmVjdEF0dGVtcHRzKHJldHJpZXNBbW91bnQ6IG51bWJlcikge1xuICAgIHRoaXMuX21heGltYWxOdW1iZXJPZlBlZXJDb25uZWN0aW9uUmVjb25uZWN0QXR0ZW1wdHMgPSByZXRyaWVzQW1vdW50O1xuICB9XG5cbiAgc3RhdGljIGdldCBsb2dnaW5nTGV2ZWwoKTogTG9nZ2luZ0xldmVsVHlwZSB7XG4gICAgcmV0dXJuIExvZ2dpbmdMZXZlbE1hcHBpbmcuY29udmVydExvZ2dpbmdMZXZlbFRvTG9nZ2luZ0xldmVsVHlwZSh0aGlzLl9sb2dnZXIudGhyZXNob2xkLnZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdGVsZW1ldHJ5TGV2ZWwoKTogVGVsZW1ldHJ5TGV2ZWxUeXBlIHtcbiAgICByZXR1cm4gVGVsZW1ldHJ5TGV2ZWxNYXBwaW5nLmNvbnZlcnRUZWxlbWV0cnlMZXZlbFRvVGVsZW1ldHJ5TGV2ZWxUeXBlKFNESy5fdGVsZW1ldHJ5TGV2ZWwudmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGdldCBicm93c2VyRGV0ZWN0b3IoKTogQnJvd3NlckRldGVjdG9yIHtcbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGFwcGx5VGVsZW1ldHJ5Q29uZmlndXJhdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCB0ZWxlbWV0cnlDb25maWd1cmF0aW9uID0gTG9nZ2VyRmFjdG9yeS50ZWxlbWV0cnlDb25maWd1cmF0aW9uO1xuXG4gICAgdGVsZW1ldHJ5Q29uZmlndXJhdGlvbi5zZXNzaW9uSWQgPSBTREsuY2xpZW50U2Vzc2lvbklkO1xuXG4gICAgY29uc3QgaWdub3JlZEVudmlyb25tZW50ID0gU0RLLl9lbnZpcm9ubWVudC5zdWJzY3JpYmUoZW52aXJvbm1lbnQgPT4ge1xuICAgICAgdGVsZW1ldHJ5Q29uZmlndXJhdGlvbi5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICAgIH0pO1xuICAgIGNvbnN0IGlnbm9yZWREaXNjb3ZlcnlVcmkgPSBTREsudGVsZW1ldHJ5VXJsLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBjb25zdCB0ZWxlbWV0cnlBcHBlbmRlciA9IHRoaXMuX2xvZ2dlci5hcHBlbmRlcnMudmFsdWUuZmluZChhcHBlbmRlciA9PiBhcHBlbmRlciBpbnN0YW5jZW9mIFRlbGVtZXRyeUFwcGVuZGVyKTtcblxuICAgICAgaWYgKHRlbGVtZXRyeUFwcGVuZGVyKSB7XG4gICAgICAgIHRlbGVtZXRyeUNvbmZpZ3VyYXRpb24udXJsID0gdmFsdWU7XG5cbiAgICAgICAgdGhpcy5fbG9nZ2VyLmFwcGVuZGVycy5yZW1vdmUodGVsZW1ldHJ5QXBwZW5kZXIpO1xuICAgICAgICB0aGlzLl9sb2dnZXIuYXBwZW5kZXJzLmFkZChuZXcgVGVsZW1ldHJ5QXBwZW5kZXIodGVsZW1ldHJ5Q29uZmlndXJhdGlvbikpO1xuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbygnVGVsZW1ldHJ5IFVSTCB3YXMgc2V0IHRvIFslc10nLCB0ZWxlbWV0cnlDb25maWd1cmF0aW9uLnVybCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgaWdub3JlZFRlbmFuY3kgPSBTREsuX3RlbmFuY3kuc3Vic2NyaWJlKHRlbmFuY3kgPT4ge1xuICAgICAgY29uc3QgdGVsZW1ldHJ5QXBwZW5kZXIgPSB0aGlzLl9sb2dnZXIuYXBwZW5kZXJzLnZhbHVlLmZpbmQoYXBwZW5kZXIgPT4gYXBwZW5kZXIgaW5zdGFuY2VvZiBUZWxlbWV0cnlBcHBlbmRlcik7XG5cbiAgICAgIGlmICh0ZWxlbWV0cnlBcHBlbmRlciAmJiB0ZW5hbmN5KSB7XG4gICAgICAgIHRlbGVtZXRyeUNvbmZpZ3VyYXRpb24udGVuYW5jeSA9IHRlbmFuY3k7XG5cbiAgICAgICAgdGhpcy5fbG9nZ2VyLmFwcGVuZGVycy5yZW1vdmUodGVsZW1ldHJ5QXBwZW5kZXIpO1xuICAgICAgICB0aGlzLl9sb2dnZXIuYXBwZW5kZXJzLmFkZChuZXcgVGVsZW1ldHJ5QXBwZW5kZXIodGVsZW1ldHJ5Q29uZmlndXJhdGlvbikpO1xuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbygnVGVsZW1ldHJ5IHRlbmFuY3kgd2FzIHNldCB0byBbJXNdJywgdGVsZW1ldHJ5Q29uZmlndXJhdGlvbi50ZW5hbmN5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhcHBseU1ldHJpY3NDb25maWd1cmF0aW9uKCk6IHZvaWQge1xuICAgIFNESy5fbWV0cmljc1NlcnZpY2UgPSBNZXRyaWNzRmFjdG9yeS5nZXRNZXRyaWNzU2VydmljZShEaXNjb3ZlcnlVcmkudXJpLnZhbHVlKTtcbiAgICBTREsuX21ldHJpY3NDb25maWd1cmF0aW9uID0gU0RLLl9tZXRyaWNzU2VydmljZS5tZXRyaWNzQ29uZmlndXJhdGlvbjtcblxuICAgIFNESy5fbWV0cmljc0NvbmZpZ3VyYXRpb24uc2Vzc2lvbklkID0gU0RLLmNsaWVudFNlc3Npb25JZDtcblxuICAgIGNvbnN0IGlnbm9yZWRFbnZpcm9ubWVudCA9IFNESy5fZW52aXJvbm1lbnQuc3Vic2NyaWJlKGVudmlyb25tZW50ID0+IHtcbiAgICAgIFNESy5fbWV0cmljc0NvbmZpZ3VyYXRpb24uZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcbiAgICB9KTtcbiAgICBjb25zdCBpZ25vcmVkRGlzY292ZXJ5VXJpID0gU0RLLnRlbGVtZXRyeVVybC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgU0RLLl9tZXRyaWNzQ29uZmlndXJhdGlvbi51cmwgPSB2YWx1ZTtcbiAgICB9KTtcbiAgICBjb25zdCBpZ25vcmVkVGVuYW5jeSA9IFNESy5fdGVuYW5jeS5zdWJzY3JpYmUodGVuYW5jeSA9PiB7XG4gICAgICBTREsuX21ldHJpY3NDb25maWd1cmF0aW9uLnRlbmFuY3kgPSB0ZW5hbmN5O1xuICAgIH0pO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fY29uZmlndXJhdGlvblBhcmFtZXRlclJlYWRlci5nZXRTdHJpbmdWYWx1ZSgncGhlbml4LW1ldHJpY3MtbGV2ZWwnKTtcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgTWV0cmljc0ZhY3Rvcnkuc2V0VGVsZW1ldHJ5TGV2ZWwoVGVsZW1ldHJ5TGV2ZWxbdmFsdWVdKTtcbiAgICB9XG5cbiAgICBjb25zdCBpZ25vcmVkVGVsZW1ldHJ5TGV2ZWwgPSBTREsuX3RlbGVtZXRyeUxldmVsLnN1YnNjcmliZSh0ZWxlbWV0cnlMZXZlbCA9PiB7XG4gICAgICBNZXRyaWNzRmFjdG9yeS5zZXRUZWxlbWV0cnlMZXZlbCh0ZWxlbWV0cnlMZXZlbCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYXBwbHlBdXRvbWF0aWNhbGx5UmV0cnlPbkZhaWx1cmVGcm9tUGFyYW1ldGVyQ29uZmlndXJhdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLl9hdXRvbWF0aWNhbGx5UmV0cnlPbkZhaWx1cmUgPSB0aGlzLl9jb25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyLmdldEJvb2xlYW5WYWx1ZSgncGhlbml4LWF1dG9tYXRpY2FsbHktcmV0cnktb24tZmFpbHVyZScpO1xuICAgIHRoaXMuX2xvZ2dlci5pbmZvKCdBdXRvbWF0aWNhbGx5IHJldHJ5IG9uIGZhaWx1cmUgaXMgc2V0IHRvOiBbJXNdJywgdGhpcy5fYXV0b21hdGljYWxseVJldHJ5T25GYWlsdXJlKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0YXRpYyBhcHBseUF1dG9tYXRpY2FsbHlSZWNvbm5lY3RQZWVyQ29ubmVjdGlvbkZyb21QYXJhbWV0ZXJDb25maWd1cmF0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuX2F1dG9tYXRpY2FsbHlSZWNvbm5lY3RQZWVyQ29ubmVjdGlvbiA9IHRoaXMuX2NvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXIuZ2V0Qm9vbGVhblZhbHVlKCdwaGVuaXgtYXV0b21hdGljYWxseS1yZWNvbm5lY3QtcGVlci1jb25uZWN0aW9uJyk7XG4gICAgdGhpcy5fbG9nZ2VyLmluZm8oJ0F1dG9tYXRpY2FsbHkgcmVjb25uZWN0IHBlZXIgY29ubmVjdGlvbiBpcyBzZXQgdG86IFslc10nLCB0aGlzLl9hdXRvbWF0aWNhbGx5UmVjb25uZWN0UGVlckNvbm5lY3Rpb24pO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGljIGFwcGx5RGlzY292ZXJ5VXJpRGVmYXVsdEZyb21QYXJhbWV0ZXJDb25maWd1cmF0aW9uKCk6IHZvaWQge1xuICAgIFNESy5kaXNjb3ZlcnlVcmkuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIFNESy50ZWxlbWV0cnlVcmwudmFsdWUgPSBTREsuZ2V0VGVsZW1ldHJ5VXJsKHZhbHVlKTtcbiAgICAgIFNESy5fZW52aXJvbm1lbnQudmFsdWUgPSBFbnZpcm9ubWVudC5nZXRFbnZpcm9ubWVudEZyb21VcmwodmFsdWUpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2hhbm5lbFRva2VuID0gdGhpcy5fY29uZmlndXJhdGlvblBhcmFtZXRlclJlYWRlci5nZXRTdHJpbmdWYWx1ZSgncGhlbml4LWNoYW5uZWwtdG9rZW4nKTtcblxuICAgIGlmIChjaGFubmVsVG9rZW4pIHtcbiAgICAgIGNvbnN0IHBhcnNlZFRva2VuID0gRWRnZUF1dGgucGFyc2VUb2tlbihjaGFubmVsVG9rZW4pO1xuXG4gICAgICBTREsuX3RlbmFuY3kudmFsdWUgPSBFZGdlQXV0aC5nZXRUZW5hbmN5KHBhcnNlZFRva2VuKTtcbiAgICAgIERpc2NvdmVyeVVyaS51cmkudmFsdWUgPSAoRWRnZUF1dGguZ2V0VXJpKHBhcnNlZFRva2VuKSB8fCBTREsuZGlzY292ZXJ5VXJpLnZhbHVlKS50b1N0cmluZygpO1xuXG4gICAgICB0aGlzLl9sb2dnZXIuaW5mbygnRGlzY292ZXJ5IFVSSSBzZXQgZnJvbSBjb25maWd1cmF0aW9uIHBhcmFtZXRlciB0byBbJXNdJywgU0RLLmRpc2NvdmVyeVVyaS52YWx1ZSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB1cmlWYWx1ZSA9IHRoaXMuX2NvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXIuZ2V0U3RyaW5nVmFsdWUoJ3BoZW5peC11cmknKTtcblxuICAgIGlmICh1cmlWYWx1ZSkge1xuICAgICAgRGlzY292ZXJ5VXJpLnVyaS52YWx1ZSA9IHVyaVZhbHVlO1xuICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oJ0Rpc2NvdmVyeSBVUkkgc2V0IGZyb20gXCJwaGVuaXgtdXJpXCIgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXIgdGFnIHRvIFslc10nLCBTREsuZGlzY292ZXJ5VXJpLnZhbHVlKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGJhc2VVUklWYWx1ZSA9IHRoaXMuX2NvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXIuZ2V0U3RyaW5nVmFsdWUoJ3BoZW5peC1iYXNlLXVyaScpO1xuXG4gICAgaWYgKGJhc2VVUklWYWx1ZSkge1xuICAgICAgRGlzY292ZXJ5VXJpLnVyaS52YWx1ZSA9IGAke2Jhc2VVUklWYWx1ZX0vcGNhc3QvZW5kUG9pbnRzYDtcbiAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKCdEaXNjb3ZlcnkgVVJJIHNldCBmcm9tIFwicGhlbml4LWJhc2UtdXJpXCIgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXIgdGFnIHRvIFslc10nLCBTREsuZGlzY292ZXJ5VXJpLnZhbHVlKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBpbml0KG9wdGlvbnM/OiBJSW5pdE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2luaXRpYWxpemVkLnZhbHVlKSB7XG4gICAgICB0aGlzLl9hcHBsaWNhdGlvbkFjdGl2aXR5TW9uaXRvciA9IG5ldyBBcHBsaWNhdGlvbkFjdGl2aXR5TW9uaXRvcigpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucy5kaXNjb3ZlcnlVcmkpIHtcbiAgICAgICAgRGlzY292ZXJ5VXJpLnVyaS52YWx1ZSA9IG9wdGlvbnMuZGlzY292ZXJ5VXJpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5wZWVyQ29ubmVjdGlvbkZhY3RvcnkpIHtcbiAgICAgICAgU0RLLl9wZWVyQ29ubmVjdGlvbkZhY3RvcnkudmFsdWUgPSBvcHRpb25zLnBlZXJDb25uZWN0aW9uRmFjdG9yeTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMudGVsZW1ldHJ5TGV2ZWwgJiYgVGVsZW1ldHJ5TGV2ZWxbb3B0aW9ucy50ZWxlbWV0cnlMZXZlbF0pIHtcbiAgICAgICAgU0RLLl90ZWxlbWV0cnlMZXZlbC52YWx1ZSA9IFRlbGVtZXRyeUxldmVsTWFwcGluZy5jb252ZXJ0VGVsZW1ldHJ5TGV2ZWxUeXBlVG9UZWxlbWV0cnlMZXZlbChvcHRpb25zLnRlbGVtZXRyeUxldmVsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMubG9nZ2luZ0xldmVsICYmIExvZ2dpbmdMZXZlbFtvcHRpb25zLmxvZ2dpbmdMZXZlbF0pIHtcbiAgICAgICAgdGhpcy5fbG9nZ2VyLnRocmVzaG9sZC5zZXRUaHJlc2hvbGQoTG9nZ2luZ0xldmVsTWFwcGluZy5jb252ZXJ0TG9nZ2luZ0xldmVsVHlwZVRvTG9nZ2luZ0xldmVsKG9wdGlvbnMubG9nZ2luZ0xldmVsKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmNvbnNvbGVMb2dnaW5nTGV2ZWwgJiZcbiAgICAgICAgTG9nZ2luZ0xldmVsW29wdGlvbnMuY29uc29sZUxvZ2dpbmdMZXZlbF0pIHtcbiAgICAgICAgY29uc3QgY29uc29sZUFwcGVuZGVyID0gdGhpcy5fbG9nZ2VyLmFwcGVuZGVycy52YWx1ZS5maW5kKGFwcGVuZGVyID0+IGFwcGVuZGVyIGluc3RhbmNlb2YgQ29uc29sZUFwcGVuZGVyKTtcblxuICAgICAgICBpZiAoY29uc29sZUFwcGVuZGVyKSB7XG4gICAgICAgICAgdGhpcy5fbG9nZ2VyLmFwcGVuZGVycy5yZW1vdmUoY29uc29sZUFwcGVuZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmNvbnNvbGVMb2dnaW5nTGV2ZWwgIT09ICdPZmYnKSB7XG4gICAgICAgICAgdGhpcy5fbG9nZ2VyLmFwcGVuZGVycy5hZGQobmV3IENvbnNvbGVBcHBlbmRlcihMb2dnaW5nTGV2ZWxNYXBwaW5nLmNvbnZlcnRMb2dnaW5nTGV2ZWxUeXBlVG9Mb2dnaW5nTGV2ZWwob3B0aW9ucy5jb25zb2xlTG9nZ2luZ0xldmVsKSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5hdXRvbWF0aWNhbGx5UGxheU1lZGlhU3RyZWFtID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgdGhpcy5fYXV0b21hdGljYWxseVBsYXlNZWRpYVN0cmVhbSA9IG9wdGlvbnMuYXV0b21hdGljYWxseVBsYXlNZWRpYVN0cmVhbTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmF1dG9tYXRpY2FsbHlNdXRlVmlkZW9PblBsYXlGYWlsdXJlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgdGhpcy5fYXV0b21hdGljYWxseU11dGVWaWRlb09uUGxheUZhaWx1cmUgPSBvcHRpb25zLmF1dG9tYXRpY2FsbHlNdXRlVmlkZW9PblBsYXlGYWlsdXJlO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy53ZWJQbGF5ZXJMb2FkZXIpIHtcbiAgICAgICAgdGhpcy5fd2ViUGxheWVyTG9hZGVyID0gb3B0aW9ucy53ZWJQbGF5ZXJMb2FkZXI7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnNoYWthUGxheWVyTG9hZGVyKSB7XG4gICAgICAgIHRoaXMuX3NoYWthUGxheWVyTG9hZGVyID0gb3B0aW9ucy5zaGFrYVBsYXllckxvYWRlcjtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuaGxzSnNMb2FkZXIpIHtcbiAgICAgICAgdGhpcy5faGxzSnNMb2FkZXIgPSBvcHRpb25zLmhsc0pzTG9hZGVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIFNESy5faW5pdGlhbGl6ZWQudmFsdWUgPSB0cnVlO1xuICB9XG5cbiAgc3RhdGljIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgU0RLLl9pbml0aWFsaXplZC52YWx1ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uQWN0aXZpdHlNb25pdG9yLmRpc3Bvc2UoKTtcbiAgICB0aGlzLl9hcHBsaWNhdGlvbkFjdGl2aXR5TW9uaXRvciA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0VGVsZW1ldHJ5VXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gVGVsZW1ldHJ5VXJsLmdldFRlbGVtZXRyeVVybCh1cmwpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NESyBpcyBhIHN0YXRpYyBjbGFzcyB0aGF0IG1heSBub3QgYmUgaW5zdGFudGlhdGVkJyk7XG4gIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VubG9hZCcsICgpID0+IHtcbiAgU0RLLmRpc3Bvc2UoKTtcbn0pO1xuXG5TREsuYXBwbHlEaXNjb3ZlcnlVcmlEZWZhdWx0RnJvbVBhcmFtZXRlckNvbmZpZ3VyYXRpb24oKTtcblNESy5hcHBseU1ldHJpY3NDb25maWd1cmF0aW9uKCk7XG5TREsuYXBwbHlUZWxlbWV0cnlDb25maWd1cmF0aW9uKCk7XG5TREsuYXBwbHlBdXRvbWF0aWNhbGx5UmV0cnlPbkZhaWx1cmVGcm9tUGFyYW1ldGVyQ29uZmlndXJhdGlvbigpO1xuU0RLLmFwcGx5QXV0b21hdGljYWxseVJlY29ubmVjdFBlZXJDb25uZWN0aW9uRnJvbVBhcmFtZXRlckNvbmZpZ3VyYXRpb24oKTtcblNESy5pbml0KCk7IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbGVtZXRyeVVybCB7XG4gIHN0YXRpYyBnZXRUZWxlbWV0cnlVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBiYXNlVVJMID0gbmV3IFVSTCh1cmwpO1xuICAgICAgY29uc3Qgc2VnbWVudHMgPSBiYXNlVVJMLmhvc3RuYW1lLnNwbGl0KCcuJyk7XG5cbiAgICAgIHN3aXRjaCAoYmFzZVVSTC5wcm90b2NvbCkge1xuICAgICAgICBjYXNlICd3czonOlxuICAgICAgICAgIGJhc2VVUkwucHJvdG9jb2wgPSAnaHR0cDonO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3dzczonOlxuICAgICAgICAgIGJhc2VVUkwucHJvdG9jb2wgPSAnaHR0cHM6JztcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPT09IDIgfHxcbiAgICAgICAgICAoc2VnbWVudHMubGVuZ3RoID09PSAzICYmIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDJdLmxlbmd0aCA8PSAyICYmIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLmxlbmd0aCA8PSAzKVxuICAgICAgKSB7XG4gICAgICAgIHNlZ21lbnRzLnVuc2hpZnQoJ3RlbGVtZXRyeScpO1xuICAgICAgfSBlbHNlIGlmIChzZWdtZW50c1swXS5zdGFydHNXaXRoKCdzdGctJykgfHwgc2VnbWVudHNbMF0uZW5kc1dpdGgoJy1zdGcnKSB8fCBzZWdtZW50c1swXS5pbmNsdWRlcygnLXN0Zy0nKSB8fCBzZWdtZW50c1swXSA9PT0gJ3N0ZycpIHtcbiAgICAgICAgc2VnbWVudHNbMF0gPSAndGVsZW1ldHJ5LXN0Zyc7XG4gICAgICB9IGVsc2UgaWYgKHNlZ21lbnRzWzBdLnN0YXJ0c1dpdGgoJ2xvY2FsJykgfHwgc2VnbWVudHNbMF0uZW5kc1dpdGgoJy1sb2NhbCcpKSB7XG4gICAgICAgIC8vIExlYXZlIFVSTCB1bmNoYW5nZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlZ21lbnRzWzBdID0gJ3RlbGVtZXRyeSc7XG4gICAgICB9XG5cbiAgICAgIGJhc2VVUkwuaG9zdG5hbWUgPSBzZWdtZW50cy5qb2luKCcuJyk7XG5cbiAgICAgIHJldHVybiBgJHtiYXNlVVJMLm9yaWdpbn0vdGVsZW1ldHJ5YDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuXG5jb25zdCBkZWZhdWx0RGlzY292ZXJ5VXJpID0gJ2h0dHBzOi8vcGNhc3QucGhlbml4cnRzLmNvbS9wY2FzdC9lbmRQb2ludHMnO1xuXG5leHBvcnQge2RlZmF1bHREaXNjb3ZlcnlVcml9OyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQge2RlZmF1bHREaXNjb3ZlcnlVcml9IGZyb20gJy4uL2RlZmF1bHRzJztcbmltcG9ydCBTdWJqZWN0IGZyb20gJy4uLy4uL3J4L1N1YmplY3QnO1xuaW1wb3J0IFZlcnNpb25NYW5hZ2VyIGZyb20gJy4uL3ZlcnNpb24vVmVyc2lvbk1hbmFnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNjb3ZlcnlVcmkge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfZGlzY292ZXJ5VXJpOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdDxzdHJpbmc+KGRlZmF1bHREaXNjb3ZlcnlVcmkpO1xuXG4gIHN0YXRpYyBnZXQgdXJpKCk6IFN1YmplY3Q8c3RyaW5nPiB7XG4gICAgcmV0dXJuIERpc2NvdmVyeVVyaS5fZGlzY292ZXJ5VXJpO1xuICB9XG5cbiAgc3RhdGljIGJ1aWxkRGlzY292ZXJ5VXJsKHVyaTogVVJMKTogc3RyaW5nIHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHVyaS50b1N0cmluZygpKTtcbiAgICBjb25zdCBzZGtWZXJzaW9uID0gVmVyc2lvbk1hbmFnZXIuc2RrVmVyc2lvbjtcblxuICAgIHVybC5zZWFyY2ggPSBgPyR7bmV3IFVSTFNlYXJjaFBhcmFtcyhbWyd2ZXJzaW9uJywgc2RrVmVyc2lvbl0sIFsnXycsIGAke0RhdGUubm93KCl9YF1dKS50b1N0cmluZygpfWA7XG5cbiAgICBpZiAodXJsLnBhdGhuYW1lID09PSAnLycpIHtcbiAgICAgIHVybC5wYXRobmFtZSA9ICcvcGNhc3QvZW5kUG9pbnRzJztcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsLnRvU3RyaW5nKCk7XG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignRGlzY292ZXJ5VXJpIGlzIGEgc3RhdGljIGNsYXNzIHRoYXQgbWF5IG5vdCBiZSBpbnN0YW50aWF0ZWQnKTtcbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IExvZ2dlckZhY3RvcnkgZnJvbSAnLi4vLi4vbG9nZ2VyL0xvZ2dlckZhY3RvcnknO1xuaW1wb3J0IHtJRWRnZUF1dGh9IGZyb20gJy4vRWRnZUF1dGhUb2tlbic7XG5pbXBvcnQge0lMb2dnZXJ9IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXJJbnRlcmZhY2UnO1xuaW1wb3J0IHtFZGdlVG9rZW59IGZyb20gJy4vRWRnZVRva2VuJztcblxuY29uc3QgZWRnZUF1dGhUb2tlblByZWZpeCA9ICdESUdFU1Q6JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRnZUF1dGgge1xuICBwcml2YXRlIHN0YXRpYyBfbG9nZ2VyOiBJTG9nZ2VyID0gTG9nZ2VyRmFjdG9yeS5nZXRMb2dnZXIoJ0VkZ2VBdXRoJyk7XG5cbiAgc3RhdGljIHBhcnNlVG9rZW4odG9rZW46IEVkZ2VUb2tlbik6IElFZGdlQXV0aCB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWRUb2tlbih0b2tlbikpIHtcbiAgICAgIEVkZ2VBdXRoLl9sb2dnZXIuZXJyb3IoJ1Rva2VuIGlzIG5vdCB2YWxpZCBbJXNdJywgdG9rZW4pO1xuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBlbmNvZGVkRWRnZUF1dGhUb2tlbiA9IGF0b2IodG9rZW4uc3Vic3RyKGVkZ2VBdXRoVG9rZW5QcmVmaXgubGVuZ3RoKSk7XG4gICAgICBjb25zdCBlZGdlQXV0aFRva2VuID0gSlNPTi5wYXJzZShlbmNvZGVkRWRnZUF1dGhUb2tlbik7XG5cbiAgICAgIGVkZ2VBdXRoVG9rZW4udG9rZW4gPSBKU09OLnBhcnNlKGVkZ2VBdXRoVG9rZW4udG9rZW4pO1xuXG4gICAgICByZXR1cm4gZWRnZUF1dGhUb2tlbjtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBFZGdlQXV0aC5fbG9nZ2VyLmVycm9yKCdDYW5ub3QgcGFyc2UgdG9rZW4gdmFsdWUnLCBlKTtcblxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0VXJpKHBhcnNlZFRva2VuOiBJRWRnZUF1dGgpOiBVUkwge1xuICAgIHJldHVybiBwYXJzZWRUb2tlbiAmJiBwYXJzZWRUb2tlbi50b2tlbiAmJiBwYXJzZWRUb2tlbi50b2tlbi51cmkgP1xuICAgICAgbmV3IFVSTChwYXJzZWRUb2tlbi50b2tlbi51cmkpIDogbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRUZW5hbmN5KHBhcnNlZFRva2VuOiBJRWRnZUF1dGgpOiBzdHJpbmcge1xuICAgIHJldHVybiBwYXJzZWRUb2tlbiAmJiBwYXJzZWRUb2tlbi5hcHBsaWNhdGlvbklkID9cbiAgICAgIHBhcnNlZFRva2VuLmFwcGxpY2F0aW9uSWQgOiAnJztcbiAgfVxuXG4gIHN0YXRpYyBpc1ZhbGlkVG9rZW4odG9rZW46IEVkZ2VUb2tlbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRva2VuICYmIHRva2VuLnN0YXJ0c1dpdGgoZWRnZUF1dGhUb2tlblByZWZpeCk7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCBCcm93c2VyRGV0ZWN0b3IgZnJvbSAnLi4vLi4vZG9tL0Jyb3dzZXJEZXRlY3Rvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlYXR1cmVFbmFibGVtZW50IHtcbiAgc3RhdGljIGdldCBjbGllbnRPZmZlckRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIC8vIENsaWVudCBvZmZlciB3b3JrZmxvdyBkb2VzIG5vdCB3b3JrIGNvcnJlY3RseSBpbiB0aGUgZm9sbG93aW5nIGJyb3dzZXJzXG4gICAgcmV0dXJuIEJyb3dzZXJEZXRlY3Rvci5pc0Nocm9tZTc0IHx8XG4gICAgICBCcm93c2VyRGV0ZWN0b3IuaXNDaHJvbWU3NSB8fFxuICAgICAgQnJvd3NlckRldGVjdG9yLmlzQ2hyb21lNzYgfHxcbiAgICAgIEJyb3dzZXJEZXRlY3Rvci5pc0Nocm9tZTc3O1xuICB9XG5cbiAgc3RhdGljIGdldCBhZGRUcmFuY2VpdmVyRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgLy8gQ2hyb21lIDY5LCA3MCwgNzEsIDcyIGV4cG9zZXMgYGFkZFRyYW5jZWl2ZXJgIGJ1dCBpdCBkb2VzIG5vdCB3b3JrIGNvcnJlY3RseVxuICAgIHJldHVybiBCcm93c2VyRGV0ZWN0b3IuaXNDaHJvbWU2OSB8fFxuICAgICAgQnJvd3NlckRldGVjdG9yLmlzQ2hyb21lNzAgfHxcbiAgICAgIEJyb3dzZXJEZXRlY3Rvci5pc0Nocm9tZTcxIHx8XG4gICAgICBCcm93c2VyRGV0ZWN0b3IuaXNDaHJvbWU3MjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZ2V0U3RhdHNQcm9taXNlQmFzZWREaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yLmJyb3dzZXJOYW1lID09PSAnQ2hyb21lJyAmJiBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck1ham9yVmVyc2lvbiA8PSA2NjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZ2V0Q3VycmVudE9mZmVyRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTmFtZSA9PT0gJ0Nocm9tZScgJiYgQnJvd3NlckRldGVjdG9yLmJyb3dzZXJNYWpvclZlcnNpb24gPD0gNjkgfHxcbiAgICAgIEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTmFtZSA9PT0gJ0ZpcmVmb3gnICYmIEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTWFqb3JWZXJzaW9uIDw9IDU2O1xuICB9XG5cbiAgc3RhdGljIGdldCBvblRyYWNrRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTmFtZSA9PT0gJ0Nocm9tZScgJiYgQnJvd3NlckRldGVjdG9yLmJyb3dzZXJNYWpvclZlcnNpb24gPD0gNjMgfHxcbiAgICAgIEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTmFtZSA9PT0gJ0ZpcmVmb3gnICYmIEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTWFqb3JWZXJzaW9uIDw9IDUyO1xuICB9XG5cbiAgc3RhdGljIGdldCB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbkVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTmFtZSA9PT0gJ0Nocm9tZScgJiYgQnJvd3NlckRldGVjdG9yLmJyb3dzZXJNYWpvclZlcnNpb24gPD0gNTU7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb21pc2VCYXNlZFBDTWV0aG9kc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck5hbWUgPT09ICdGaXJlZm94JyAmJiBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck1ham9yVmVyc2lvbiA8PSA1MjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc2hvdWxkVXNlTmF0aXZlSGxzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck5hbWUgPT09ICdTYWZhcmknIHx8XG4gICAgICBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck5hbWUgPT09ICdTYW1zdW5nQnJvd3Nlcic7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzUlRNUEVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck5hbWUgPT09ICdGaXJlZm94JyAmJiBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck1ham9yVmVyc2lvbiA8IDg0KSB8fFxuICAgICAgKEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTmFtZSA9PT0gJ0Nocm9tZScgJiYgQnJvd3NlckRldGVjdG9yLmJyb3dzZXJNYWpvclZlcnNpb24gPCA3MCkgfHxcbiAgICAgIEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTmFtZSA9PT0gJ0VkZ2UnIHx8XG4gICAgICBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck5hbWUgPT09ICdJRSc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzUHJlY2FjaGluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTmFtZSAhPT0gJ0lFJztcbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgU0RLIGZyb20gJy4uL1NESyc7XG5cbmV4cG9ydCB7U0RLfTtcblxuZXhwb3J0IGRlZmF1bHQge1NES307IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5kZWNsYXJlIGNvbnN0IF9fU0RLVkVSU0lPTl9fOiBzdHJpbmc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnNpb25NYW5hZ2VyIHtcbiAgcHJpdmF0ZSBzdGF0aWMgX2RlZmF1bHRWZXJzaW9uID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuXG4gIHN0YXRpYyBnZXQgc2RrVmVyc2lvbigpOiBzdHJpbmcge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gX19TREtWRVJTSU9OX187XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRWZXJzaW9uO1xuICAgIH1cbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IFRlbGVtZXRyeVNlcnZpY2UgZnJvbSAnLi9UZWxlbWV0cnlTZXJ2aWNlJztcbmltcG9ydCBUZWxlbWV0cnlDb25maWd1cmF0aW9uIGZyb20gJy4vVGVsZW1ldHJ5Q29uZmlndXJhdGlvbic7XG5pbXBvcnQge0lBcHBlbmRlcn0gZnJvbSAnLi4vbG9nZ2VyL0lBcHBlbmRlcic7XG5pbXBvcnQge0xvZ2dpbmdMZXZlbH0gZnJvbSAnLi4vbG9nZ2VyL0xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbGVtZXRyeUFwcGVuZGVyIGltcGxlbWVudHMgSUFwcGVuZGVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfdGVsZW1ldHJ5U2VydmljZTogVGVsZW1ldHJ5U2VydmljZTtcbiAgcHJpdmF0ZSByZWFkb25seSBfdGVuYW5jeTogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IF9zZXNzaW9uSWQ6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfdGhyZXNob2xkOiBMb2dnaW5nTGV2ZWw7XG5cbiAgY29uc3RydWN0b3IodGVsZW1ldHJ5Q29uZmlndXJhdGlvbjogVGVsZW1ldHJ5Q29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX3RlbmFuY3kgPSB0ZWxlbWV0cnlDb25maWd1cmF0aW9uLnRlbmFuY3k7XG4gICAgdGhpcy5fc2Vzc2lvbklkID0gdGVsZW1ldHJ5Q29uZmlndXJhdGlvbi5zZXNzaW9uSWQ7XG4gICAgdGhpcy5fdGhyZXNob2xkID0gdGVsZW1ldHJ5Q29uZmlndXJhdGlvbi50aHJlc2hvbGQ7XG4gICAgdGhpcy5fdGVsZW1ldHJ5U2VydmljZSA9IG5ldyBUZWxlbWV0cnlTZXJ2aWNlKHRlbGVtZXRyeUNvbmZpZ3VyYXRpb24pO1xuICB9XG5cbiAgbG9nKGxvZ0xldmVsOiBMb2dnaW5nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZywgY2F0ZWdvcnk6IHN0cmluZywgZGF0ZTogRGF0ZSk6IHZvaWQge1xuICAgIGlmIChsb2dMZXZlbCA8IHRoaXMuX3RocmVzaG9sZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3RlbGVtZXRyeVNlcnZpY2UucHVzaChsb2dMZXZlbCwgbWVzc2FnZSwgY2F0ZWdvcnksIGRhdGUpO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQge0xvZ2dpbmdMZXZlbH0gZnJvbSAnLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQgTG9nZ2VyRGVmYXVsdHMgZnJvbSAnLi4vbG9nZ2VyL0xvZ2dlckRlZmF1bHRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVsZW1ldHJ5Q29uZmlndXJhdGlvbiB7XG4gIHByaXZhdGUgX3VybCA9ICdodHRwczovL3RlbGVtZXRyeS5waGVuaXhydHMuY29tL3RlbGVtZXRyeS9sb2dzJztcbiAgcHJpdmF0ZSBfdGVuYW5jeTogc3RyaW5nO1xuICBwcml2YXRlIF9zZXNzaW9uSWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfZW52aXJvbm1lbnQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfdGhyZXNob2xkID0gTG9nZ2VyRGVmYXVsdHMuZGVmYXVsdFRlbGVtZXRyeUxvZ2dpbmdMZXZlbDtcblxuICBnZXQgdXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3VybDtcbiAgfVxuXG4gIHNldCB1cmwodXJsOiBzdHJpbmcpIHtcbiAgICBjb25zdCB0ZWxlbWV0cnlVcmwgPSBuZXcgVVJMKHVybCk7XG5cbiAgICB0ZWxlbWV0cnlVcmwucGF0aG5hbWUgPSB0ZWxlbWV0cnlVcmwucGF0aG5hbWUgKyAnL2xvZ3MnO1xuXG4gICAgdGhpcy5fdXJsID0gdGVsZW1ldHJ5VXJsLnRvU3RyaW5nKCk7XG4gIH1cblxuICBnZXQgZW52aXJvbm1lbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZW52aXJvbm1lbnQ7XG4gIH1cblxuICBzZXQgZW52aXJvbm1lbnQoZW52aXJvbm1lbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX2Vudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG4gIH1cblxuICBnZXQgdGVuYW5jeSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90ZW5hbmN5O1xuICB9XG5cbiAgc2V0IHRlbmFuY3kodGVuYW5jeTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGVuYW5jeSA9IHRlbmFuY3k7XG4gIH1cblxuICBnZXQgc2Vzc2lvbklkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25JZDtcbiAgfVxuXG4gIHNldCBzZXNzaW9uSWQoc2Vzc2lvbklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXNzaW9uSWQgPSBzZXNzaW9uSWQ7XG4gIH1cblxuICBnZXQgdGhyZXNob2xkKCk6IExvZ2dpbmdMZXZlbCB7XG4gICAgcmV0dXJuIHRoaXMuX3RocmVzaG9sZDtcbiAgfVxuXG4gIHNldCB0aHJlc2hvbGQodGhyZXNob2xkOiBMb2dnaW5nTGV2ZWwpIHtcbiAgICB0aGlzLl90aHJlc2hvbGQgPSB0aHJlc2hvbGQ7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCB7TG9nZ2luZ0xldmVsfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCBWZXJzaW9uTWFuYWdlciBmcm9tICcuLi9zZGsvdmVyc2lvbi9WZXJzaW9uTWFuYWdlcic7XG5pbXBvcnQgVGVsZW1ldHJ5Q29uZmlndXJhdGlvbiBmcm9tICcuL1RlbGVtZXRyeUNvbmZpZ3VyYXRpb24nO1xuXG5jb25zdCByZXF1ZXN0U2l6ZUxpbWl0ID0gODE5MjtcblxuaW50ZXJmYWNlIElMb2dJdGVtIHtcbiAgdGltZXN0YW1wOiBzdHJpbmc7XG4gIHRlbmFuY3k6IHN0cmluZztcbiAgbGV2ZWw6IHN0cmluZztcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBzZXNzaW9uSWQ6IHN0cmluZztcbiAgdmVyc2lvbjogc3RyaW5nO1xuICBlbnZpcm9ubWVudDogc3RyaW5nO1xuICBmdWxsUXVhbGlmaWVkTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWxlbWV0cnlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfdGVsZW1ldHJ5Q29uZmlndXJhdGlvbjogVGVsZW1ldHJ5Q29uZmlndXJhdGlvbjtcblxuICBwcml2YXRlIF9sb2dzOiBBcnJheTxJTG9nSXRlbT4gPSBbXTtcbiAgcHJpdmF0ZSBfaXNTZW5kaW5nOiBib29sZWFuO1xuICBwcml2YXRlIF9kb21haW4gPSBsb2NhdGlvbi5ob3N0bmFtZTtcblxuICBjb25zdHJ1Y3Rvcih0ZWxlbWV0cnlDb25maWd1cmF0aW9uOiBUZWxlbWV0cnlDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fdGVsZW1ldHJ5Q29uZmlndXJhdGlvbiA9IHRlbGVtZXRyeUNvbmZpZ3VyYXRpb247XG4gIH1cblxuICBwdXNoKGxvZ0xldmVsOiBMb2dnaW5nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZywgY2F0ZWdvcnk6IHN0cmluZywgdGltZXN0YW1wOiBEYXRlKTogdm9pZCB7XG4gICAgY29uc3QgbG9nUmVjb3JkID0ge1xuICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAudG9JU09TdHJpbmcoKSxcbiAgICAgIHRlbmFuY3k6IHRoaXMuX3RlbGVtZXRyeUNvbmZpZ3VyYXRpb24udGVuYW5jeSxcbiAgICAgIGxldmVsOiBMb2dnaW5nTGV2ZWxbbG9nTGV2ZWxdLFxuICAgICAgY2F0ZWdvcnksXG4gICAgICBtZXNzYWdlLFxuICAgICAgc2Vzc2lvbklkOiB0aGlzLl90ZWxlbWV0cnlDb25maWd1cmF0aW9uLnNlc3Npb25JZCxcbiAgICAgIHZlcnNpb246IFZlcnNpb25NYW5hZ2VyLnNka1ZlcnNpb24sXG4gICAgICBlbnZpcm9ubWVudDogdGhpcy5fdGVsZW1ldHJ5Q29uZmlndXJhdGlvbi5lbnZpcm9ubWVudCxcbiAgICAgIGZ1bGxRdWFsaWZpZWROYW1lOiB0aGlzLl9kb21haW5cbiAgICB9O1xuXG4gICAgaWYgKGxvZ0xldmVsIDwgTG9nZ2luZ0xldmVsLkVycm9yKSB7XG4gICAgICB0aGlzLl9sb2dzLnB1c2gobG9nUmVjb3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbG9ncy51bnNoaWZ0KGxvZ1JlY29yZCk7XG4gICAgfVxuXG4gICAgY29uc3QgaWdub3JlZCA9IHRoaXMuc2VuZExvZ3NJZkFibGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2VuZExvZ3MobG9nTWVzc2FnZXM6IEFycmF5PElMb2dJdGVtPik6IFByb21pc2U8UmVzcG9uc2UgfCB2b2lkPiB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgIGZvcm1EYXRhLmFwcGVuZCgnanNvbkJvZHknLCBKU09OLnN0cmluZ2lmeSh7cmVjb3JkczogbG9nTWVzc2FnZXN9KSk7XG5cbiAgICByZXR1cm4gYXdhaXQgZmV0Y2godGhpcy5fdGVsZW1ldHJ5Q29uZmlndXJhdGlvbi51cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogZm9ybURhdGFcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2VuZExvZ3NJZkFibGUoKTogUHJvbWlzZTxSZXNwb25zZSB8IHZvaWQ+IHtcbiAgICBpZiAodGhpcy5fbG9ncy5sZW5ndGggPD0gMCB8fCB0aGlzLl9pc1NlbmRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbnVtYmVyT2ZMb2dzVG9TZW5kID0gMDtcbiAgICBsZXQgc2l6ZU9mTG9nc1RvU2VuZCA9IDA7XG5cbiAgICB0aGlzLl9pc1NlbmRpbmcgPSB0cnVlO1xuXG4gICAgY29uc3QgZ2V0TG9nU2l6ZSA9IChsb2c6IElMb2dJdGVtKTogbnVtYmVyID0+IE9iamVjdC52YWx1ZXMobG9nKVxuICAgICAgLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyAoaXRlbSA/IGl0ZW0ubGVuZ3RoIDogMCksIDApO1xuXG4gICAgd2hpbGUgKHRoaXMuX2xvZ3MubGVuZ3RoID4gbnVtYmVyT2ZMb2dzVG9TZW5kICYmIGdldExvZ1NpemUodGhpcy5fbG9nc1tudW1iZXJPZkxvZ3NUb1NlbmRdKSArIHNpemVPZkxvZ3NUb1NlbmQgPCByZXF1ZXN0U2l6ZUxpbWl0KSB7XG4gICAgICBzaXplT2ZMb2dzVG9TZW5kICs9IGdldExvZ1NpemUodGhpcy5fbG9nc1tudW1iZXJPZkxvZ3NUb1NlbmRdKTtcbiAgICAgIG51bWJlck9mTG9nc1RvU2VuZCsrO1xuICAgIH1cblxuICAgIGlmICghbnVtYmVyT2ZMb2dzVG9TZW5kKSB7XG4gICAgICB0aGlzLl9sb2dzW251bWJlck9mTG9nc1RvU2VuZF0ubWVzc2FnZSA9IHRoaXMuX2xvZ3NbbnVtYmVyT2ZMb2dzVG9TZW5kXS5tZXNzYWdlLnN1YnN0cmluZygwLFxuICAgICAgICBnZXRMb2dTaXplKHRoaXMuX2xvZ3NbbnVtYmVyT2ZMb2dzVG9TZW5kXSkgKyAocmVxdWVzdFNpemVMaW1pdCAtIGdldExvZ1NpemUodGhpcy5fbG9nc1tudW1iZXJPZkxvZ3NUb1NlbmRdKSkpO1xuICAgICAgbnVtYmVyT2ZMb2dzVG9TZW5kID0gMTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2dNZXNzYWdlcyA9IHRoaXMuX2xvZ3Muc2xpY2UoMCwgbnVtYmVyT2ZMb2dzVG9TZW5kKTtcblxuICAgIHRoaXMuX2xvZ3MgPSB0aGlzLl9sb2dzLnNsaWNlKG51bWJlck9mTG9nc1RvU2VuZCk7XG5cbiAgICByZXR1cm4gdGhpcy5zZW5kTG9ncyhsb2dNZXNzYWdlcykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICB0aGlzLl9pc1NlbmRpbmcgPSBmYWxzZTtcblxuICAgICAgY29uc3QgaWdub3JlZCA9IHRoaXMuc2VuZExvZ3NJZkFibGUoKTtcblxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgIHRoaXMuX2lzU2VuZGluZyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBpZ25vcmVkID0gdGhpcy5zZW5kTG9nc0lmQWJsZSgpO1xuICAgIH0pO1xuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3Nkay9ncm91cHMvaW5kZXgudHNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9