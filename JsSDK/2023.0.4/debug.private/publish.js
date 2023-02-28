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

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/***/ ((module) => {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/***/ ((module) => {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports.default = module.exports;

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

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports.default = module.exports;

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

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports.default = module.exports;

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

/***/ "./src/context/PeerConnectionContext.ts":
/*!**********************************************!*
  !*** ./src/context/PeerConnectionContext.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ PeerConnectionContext
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rx/Subject */ "./src/rx/Subject.ts");



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var PeerConnectionContext = /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0___default()(function PeerConnectionContext() {
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, PeerConnectionContext);
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "mediaStream", void 0);
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "peerConnection", void 0);
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "peerConnectionReconnectAttempts", void 0);
  this.mediaStream = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__.default(null);
  this.peerConnection = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__.default(null);
  this.peerConnectionReconnectAttempts = 0;
});


/***/ }),

/***/ "./src/context/StateContext.ts":
/*!*************************************!*
  !*** ./src/context/StateContext.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ StateContext
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rx/Subject */ "./src/rx/Subject.ts");



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var StateContext = /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0___default()(function StateContext() {
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, StateContext);
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "isStarting", void 0);
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "isDisposed", void 0);
  this.isStarting = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__.default(false);
  this.isDisposed = false;
});


/***/ }),

/***/ "./src/context/TokenContext.ts":
/*!*************************************!*
  !*** ./src/context/TokenContext.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ TokenContext
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rx/Subject */ "./src/rx/Subject.ts");



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var TokenContext = /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_0___default()(function TokenContext(token) {
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, TokenContext);
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "token", void 0);
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "tokenExpiring", void 0);
  this.token = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__.default(token);
  this.tokenExpiring = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__.default(false);
});


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

/***/ "./src/dom/NetworkMonitor.ts":
/*!***********************************!*
  !*** ./src/dom/NetworkMonitor.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ NetworkMonitor
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lang_Disposable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lang/Disposable */ "./src/lang/Disposable.ts");
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rx/Subject */ "./src/rx/Subject.ts");
/* harmony import */ var _lang_DisposableList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lang/DisposableList */ "./src/lang/DisposableList.ts");



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */




var NetworkMonitor = /*#__PURE__*/function () {
  function NetworkMonitor() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, NetworkMonitor);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_disposables", new _lang_DisposableList__WEBPACK_IMPORTED_MODULE_5__.default());
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_isSupported", navigator && navigator['connection']);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_rtt", new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__.default(undefined));
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_effectiveType", new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__.default(undefined));
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_downlinkThroughputCapacity", new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__.default(undefined));
    if (!this.isSupported) {
      return;
    }
    this.setupNetworkChangeListeners();
    this.updateStatistics();
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(NetworkMonitor, [{
    key: "isSupported",
    get: function get() {
      return this._isSupported;
    }
  }, {
    key: "rtt",
    get: function get() {
      return this._rtt;
    }
  }, {
    key: "effectiveType",
    get: function get() {
      return this._effectiveType;
    }
  }, {
    key: "downlinkThroughputCapacity",
    get: function get() {
      return this._downlinkThroughputCapacity;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._disposables.dispose();
    }
  }, {
    key: "getDownlinkThroughputCapacity",
    value: function getDownlinkThroughputCapacity() {
      if (!this.isSupported) {
        return -1;
      }
      return navigator['connection'].downlink || navigator['connection'].downlinkMax;
    }
  }, {
    key: "getEffectiveType",
    value: function getEffectiveType() {
      if (!this.isSupported) {
        return 'Unknown';
      }
      return navigator['connection'].effectiveType || navigator['connection'].type;
    }
  }, {
    key: "getRoundTripTime",
    value: function getRoundTripTime() {
      return navigator['connection'].rtt;
    }
  }, {
    key: "setupNetworkChangeListeners",
    value: function setupNetworkChangeListeners() {
      var _this = this;
      var listener = function listener() {
        _this.updateStatistics();
      };
      navigator['connection'].addEventListener('change', listener);
      this._disposables.add(new _lang_Disposable__WEBPACK_IMPORTED_MODULE_3__.default(function () {
        navigator['connection'].removeEventListener('change', listener);
      }));
    }
  }, {
    key: "updateStatistics",
    value: function updateStatistics() {
      this._rtt.value = this.getRoundTripTime();
      this._effectiveType.value = this.getEffectiveType();
      this._downlinkThroughputCapacity.value = this.getDownlinkThroughputCapacity();
    }
  }]);
  return NetworkMonitor;
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

/***/ "./src/dom/StreamSetupListener.ts":
/*!****************************************!*
  !*** ./src/dom/StreamSetupListener.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StreamSetupListener": () => /* binding */ StreamSetupListener
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../metrics/MetricsType */ "./src/metrics/MetricsType.ts");
/* harmony import */ var _metrics_MetricType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../metrics/MetricType */ "./src/metrics/MetricType.ts");
/* harmony import */ var _time_Duration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../time/Duration */ "./src/time/Duration.ts");
/* harmony import */ var _sdk_SDK__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sdk/SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */





var StreamSetupListener = /*#__PURE__*/function () {
  function StreamSetupListener(pageLoadTime) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, StreamSetupListener);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_7__.default.getLogger('StreamSetupListener'));
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "metricsService", _sdk_SDK__WEBPACK_IMPORTED_MODULE_6__.default.metricsService);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_pageLoadTime", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_startTime", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_metricSubmitted", false);
    this._startTime = Date.now();
    this._pageLoadTime = pageLoadTime;
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(StreamSetupListener, [{
    key: "success",
    value: function success(streamId) {
      this.recordStreamMetric(_metrics_MetricsType__WEBPACK_IMPORTED_MODULE_3__.default.SetupCompleted, streamId);
    }
  }, {
    key: "fail",
    value: function fail() {
      this.recordStreamMetric(_metrics_MetricsType__WEBPACK_IMPORTED_MODULE_3__.default.SetupFailed);
    }
  }, {
    key: "recordStreamMetric",
    value: function recordStreamMetric(metricType, streamId) {
      if (this._metricSubmitted) {
        return;
      }
      this._metricSubmitted = true;
      var now = Date.now();
      var setupTime = now - this._startTime;
      var metricName = new _metrics_MetricType__WEBPACK_IMPORTED_MODULE_4__.default(metricType).getName();
      this.metricsService.push({
        metricType: metricType,
        runtime: (now - this._pageLoadTime) / 1000,
        value: {
          uint64: setupTime
        },
        streamId: streamId
      });
      this._logger.info('[%s] [%s] Stream metric [%s] in [%s]', new _time_Duration__WEBPACK_IMPORTED_MODULE_5__.default(now - this._pageLoadTime).toIsoString(), streamId, metricName, new _time_Duration__WEBPACK_IMPORTED_MODULE_5__.default(setupTime).toIsoString());
    }
  }]);
  return StreamSetupListener;
}();

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

/***/ "./src/rtc/PeerConnectionService.ts":
/*!******************************************!*
  !*** ./src/rtc/PeerConnectionService.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ PeerConnectionService
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
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _sdk_SDK__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sdk/SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _sdk_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sdk/feature/FeatureEnablement */ "./src/sdk/feature/FeatureEnablement.ts");





/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */



var PeerConnectionService = /*#__PURE__*/function () {
  function PeerConnectionService() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, PeerConnectionService);
    throw new Error('PeerConnectionService is a static class that may not be instantiated');
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(PeerConnectionService, null, [{
    key: "initiateInitialPrecaching",
    value: function initiateInitialPrecaching() {
      if (_sdk_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_7__.default.isPrecachingEnabled) {
        var ignored = PeerConnectionService.precacheCreatePeerConnectionOffer().catch(function (e) {
          return PeerConnectionService._logger.error('Failed to pre-cache peer connection offer"', e);
        });
      }
    }
  }, {
    key: "precacheCreatePeerConnectionOffer",
    value: function () {
      var _precacheCreatePeerConnectionOffer = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", PeerConnectionService._cached = {
                direction: 'recvonly',
                peerConnection: PeerConnectionService.createPeerConnectionOffer().catch(function (e) {
                  PeerConnectionService._cached = null;
                  throw e;
                })
              });
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function precacheCreatePeerConnectionOffer() {
        return _precacheCreatePeerConnectionOffer.apply(this, arguments);
      }
      return precacheCreatePeerConnectionOffer;
    }()
  }, {
    key: "createPeerConnectionOffer",
    value: function () {
      var _createPeerConnectionOffer = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3() {
        var direction,
          value,
          peerConnectionFactory,
          _args3 = arguments;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              direction = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : 'recvonly';
              if (!(PeerConnectionService._cached && PeerConnectionService._cached.direction === direction)) {
                _context3.next = 5;
                break;
              }
              value = PeerConnectionService._cached.peerConnection;
              PeerConnectionService._cached = null;
              return _context3.abrupt("return", value);
            case 5:
              peerConnectionFactory = _sdk_SDK__WEBPACK_IMPORTED_MODULE_6__.default.peerConnectionFactory.value;
              return _context3.abrupt("return", peerConnectionFactory.createPeerConnection().then( /*#__PURE__*/function () {
                var _ref = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2(peerConnection) {
                  var supportsAddTransceiver, videoTransceiver, audioTransceiver, options;
                  return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        supportsAddTransceiver = peerConnection.supportsAddTransceiver;
                        if (!supportsAddTransceiver) {
                          _context2.next = 11;
                          break;
                        }
                        audioTransceiver = peerConnection.addTransceiver('audio', {
                          direction: direction
                        });
                        videoTransceiver = peerConnection.addTransceiver('video', {
                          direction: direction
                        });
                        _context2.t0 = audioTransceiver;
                        _context2.t1 = videoTransceiver;
                        _context2.t2 = peerConnection;
                        _context2.next = 9;
                        return peerConnection.createOffer(undefined);
                      case 9:
                        _context2.t3 = _context2.sent;
                        return _context2.abrupt("return", {
                          audioTransceiver: _context2.t0,
                          videoTransceiver: _context2.t1,
                          peerConnection: _context2.t2,
                          localOffer: _context2.t3
                        });
                      case 11:
                        options = direction === 'recvonly' ? {
                          offerToReceiveAudio: true,
                          offerToReceiveVideo: true
                        } : {};
                        _context2.t4 = peerConnection;
                        _context2.next = 15;
                        return peerConnection.createOffer(options);
                      case 15:
                        _context2.t5 = _context2.sent;
                        return _context2.abrupt("return", {
                          peerConnection: _context2.t4,
                          localOffer: _context2.t5
                        });
                      case 17:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function createPeerConnectionOffer() {
        return _createPeerConnectionOffer.apply(this, arguments);
      }
      return createPeerConnectionOffer;
    }()
  }]);
  return PeerConnectionService;
}();
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(PeerConnectionService, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_5__.default.getLogger('PeerConnectionService'));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(PeerConnectionService, "_cached", void 0);

PeerConnectionService.initiateInitialPrecaching();

/***/ }),

/***/ "./src/rtc/RtcConfigurationManager.ts":
/*!********************************************!*
  !*** ./src/rtc/RtcConfigurationManager.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ RtcConfigurationManager
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var RtcConfigurationManager = /*#__PURE__*/function () {
  function RtcConfigurationManager() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, RtcConfigurationManager);
    throw new Error('RtcConfigurationManager is a static class that may not be instantiated');
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(RtcConfigurationManager, null, [{
    key: "truncateIceServers",
    value: function truncateIceServers(configuration) {
      var iceServers = [];
      for (var i = 0; i < configuration.iceServers.length; i++) {
        var urls = [];
        for (var index = 0; index < 2; index++) {
          var url = configuration.iceServers[i].urls[index];
          if (url) {
            urls.push(configuration.iceServers[i].urls[index]);
          }
        }
        iceServers.push({
          urls: urls,
          username: configuration.iceServers[i].username,
          credential: configuration.iceServers[i].credential
        });
      }
      configuration.iceServers = iceServers;
      return configuration;
    }
  }]);
  return RtcConfigurationManager;
}();


/***/ }),

/***/ "./src/rtc/RtcPublishMonitor.ts":
/*!**************************************!*
  !*** ./src/rtc/RtcPublishMonitor.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ RtcPublishMonitor
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
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rx/Subject */ "./src/rx/Subject.ts");
/* harmony import */ var _sdk_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sdk/feature/FeatureEnablement */ "./src/sdk/feature/FeatureEnablement.ts");
/* harmony import */ var _SdpParser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SdpParser */ "./src/rtc/SdpParser.ts");





/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */




var updateStatisticTimeOut = 1500;
var RtcPublishMonitor = /*#__PURE__*/function () {
  function RtcPublishMonitor(peerConnection, mediaStream, estimatedRoundTripTime) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, RtcPublishMonitor);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_estimatedRoundTripTime", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_estimatedVideoCodec", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_estimatedAudioCodec", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_rtcStatistic", new _rx_Subject__WEBPACK_IMPORTED_MODULE_5__.default({}));
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_peerConnection", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_isMonitorRunning", true);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_updateTimeOut", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_availableTracks", void 0);
    this._peerConnection = peerConnection;
    this._estimatedRoundTripTime = estimatedRoundTripTime;
    if (this._peerConnection) {
      var parsedLocalDescription = new _SdpParser__WEBPACK_IMPORTED_MODULE_7__.default(this._peerConnection.currentLocalDescription.sdp);
      var parsedRemoteDescription = new _SdpParser__WEBPACK_IMPORTED_MODULE_7__.default(this._peerConnection.currentRemoteDescription.sdp);
      this._estimatedAudioCodec = parsedRemoteDescription.audioCodec;
      this._estimatedVideoCodec = parsedRemoteDescription.videoCodec;
      this._availableTracks = {
        audio: parsedLocalDescription.isAudioTrackEnabled && parsedRemoteDescription.isAudioTrackEnabled,
        video: parsedLocalDescription.isVideoTrackEnabled && parsedRemoteDescription.isVideoTrackEnabled
      };
      this.updateStatistic();
    }
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(RtcPublishMonitor, [{
    key: "rtcStatistic",
    get: function get() {
      return this._rtcStatistic;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._isMonitorRunning = false;
      this._peerConnection = null;
      if (this._updateTimeOut) {
        clearTimeout(this._updateTimeOut);
        this._updateTimeOut = null;
      }
    }
  }, {
    key: "updateStatistic",
    value: function () {
      var _updateStatistic = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
        var _this = this;
        var _ignored, getKindForSafari11, ignored;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!_sdk_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_6__.default.getStatsPromiseBasedDisabled) {
                _context.next = 3;
                break;
              }
              _ignored = {
                audio: 0,
                video: 0
              };
              return _context.abrupt("return");
            case 3:
              // Safari 11 doesnt have kind or mediaType so we need to take it from the inbound-rtp object id
              getKindForSafari11 = function getKindForSafari11(item) {
                return item.id.includes('Audio') ? 'audio' : item.id.includes('Video') ? 'video' : '';
              };
              _context.next = 6;
              return this._peerConnection.getStats(null).then(function (stats) {
                var rtcStatistics = {};
                if (stats) {
                  var roundTripTime = _this._estimatedRoundTripTime;
                  var lastPacketSentTimestamp;
                  stats.forEach(function (report) {
                    if (report.type === 'candidate-pair' && report.currentRoundTripTime) {
                      roundTripTime = report.currentRoundTripTime * 1000;
                      if (rtcStatistics['audio']) {
                        rtcStatistics['audio'].roundTripTime = roundTripTime;
                      }
                      if (rtcStatistics['video']) {
                        rtcStatistics['video'].roundTripTime = roundTripTime;
                      }
                    }
                    if (report.type === 'candidate-pair' && report.lastPacketSentTimestamp) {
                      lastPacketSentTimestamp = report.lastPacketSentTimestamp;
                      if (rtcStatistics['audio']) {
                        rtcStatistics['audio'].lastPacketSentTimestamp = lastPacketSentTimestamp;
                      }
                      if (rtcStatistics['video']) {
                        rtcStatistics['video'].lastPacketSentTimestamp = lastPacketSentTimestamp;
                      }
                    }
                    if (report.type === 'outbound-rtp') {
                      var _kind = report.kind || report.mediaType || getKindForSafari11(report);
                      var codec = '';
                      stats.forEach(function (item) {
                        if (item.id === report.codecId) {
                          codec = item.mimeType;
                        }
                      });
                      if (_kind && _this._availableTracks[_kind]) {
                        var _this$_rtcStatistic$v, _this$_rtcStatistic$v2, _this$_rtcStatistic$v3, _this$_rtcStatistic$v4, _this$_rtcStatistic$v5;
                        var bytes = report.bytesSent || 0;
                        var previousBytesSent = (_this$_rtcStatistic$v = (_this$_rtcStatistic$v2 = _this._rtcStatistic.value) === null || _this$_rtcStatistic$v2 === void 0 ? void 0 : (_this$_rtcStatistic$v3 = _this$_rtcStatistic$v2[_kind]) === null || _this$_rtcStatistic$v3 === void 0 ? void 0 : _this$_rtcStatistic$v3.bytesSent) !== null && _this$_rtcStatistic$v !== void 0 ? _this$_rtcStatistic$v : 0;
                        var bytesDelta = bytes - previousBytesSent;
                        var timeDelta = report.timestamp - ((_this$_rtcStatistic$v4 = _this._rtcStatistic.value) === null || _this$_rtcStatistic$v4 === void 0 ? void 0 : (_this$_rtcStatistic$v5 = _this$_rtcStatistic$v4[_kind]) === null || _this$_rtcStatistic$v5 === void 0 ? void 0 : _this$_rtcStatistic$v5.timestamp);
                        var bitrate = bytesDelta && timeDelta ? Math.floor(8 * bytesDelta / timeDelta * 1000) : 0;
                        rtcStatistics[_kind] = {
                          ssrc: report.ssrc,
                          mediaType: _kind,
                          timestamp: report.timestamp,
                          bitrate: bitrate,
                          bytesSent: report.bytesSent,
                          packetsSent: report.packetsSent,
                          retransmittedBytesSent: report.retransmittedBytesSent,
                          codec: codec || _this.getCodecByType(_kind),
                          roundTripTime: roundTripTime
                        };
                        if (report.lastPacketSentTimestamp || lastPacketSentTimestamp) {
                          rtcStatistics[_kind].lastPacketSentTimestamp = report.lastPacketSentTimestamp || lastPacketSentTimestamp;
                        }
                        if (_kind === 'video' && _this._rtcStatistic.value && _this._rtcStatistic.value.video) {
                          rtcStatistics[_kind]['firCount'] = report.firCount;
                          rtcStatistics[_kind]['frameHeight'] = report.frameHeight;
                          rtcStatistics[_kind]['frameWidth'] = report.frameWidth;
                          rtcStatistics[_kind]['framesEncoded'] = report.framesEncoded;
                          rtcStatistics[_kind]['framesSent'] = report.framesSent;
                          rtcStatistics[_kind]['headerBytesSent'] = report.headerBytesSent;
                          rtcStatistics[_kind]['hugeFramesSent'] = report.hugeFramesSent;
                          rtcStatistics[_kind]['pliCount'] = report.pliCount;
                          rtcStatistics[_kind]['qpSum'] = report.qpSum;
                          rtcStatistics[_kind]['totalEncodeTime'] = report.totalEncodeTime;
                          rtcStatistics[_kind]['totalEncodedBytesTarget'] = report.totalEncodedBytesTarget;
                          var fps = (report.framesEncoded - _this._rtcStatistic.value.video.framesEncoded) / (rtcStatistics[_kind].timestamp - _this._rtcStatistic.value.video.timestamp) * 1000;
                          rtcStatistics[_kind]['fps'] = fps ? Math.round(fps * 100) / 100 : 0;
                        }
                      }
                    }
                  });
                }
                _this._rtcStatistic.value = rtcStatistics;
              }).then(function () {
                if (_this._isMonitorRunning) {
                  _this._updateTimeOut = window.setTimeout(function () {
                    return _this.updateStatistic();
                  }, updateStatisticTimeOut);
                }
              });
            case 6:
              ignored = _context.sent;
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function updateStatistic() {
        return _updateStatistic.apply(this, arguments);
      }
      return updateStatistic;
    }()
  }, {
    key: "getCodecByType",
    value: function getCodecByType(type) {
      switch (type) {
        case 'audio':
          return this._estimatedAudioCodec;
        case 'video':
          return this._estimatedVideoCodec;
        default:
          return 'unknown';
      }
    }
  }]);
  return RtcPublishMonitor;
}();


/***/ }),

/***/ "./src/rtc/SdpParser.ts":
/*!******************************!*
  !*** ./src/rtc/SdpParser.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ SdpParser
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
var SdpParser = /*#__PURE__*/function () {
  function SdpParser(sdp) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, SdpParser);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_sdp", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_audioCodec", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_videoCodec", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_isAudioTrackEnabled", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_isVideoTrackEnabled", void 0);
    this._sdp = sdp;
    var sdpSplitByLines = this._sdp.split(/(\r\n|\r|\n)/);
    var sdpSplitByTracks = this._sdp.split('m=');
    this._audioCodec = this.applyCodec('audio', sdpSplitByLines);
    this._videoCodec = this.applyCodec('video', sdpSplitByLines);
    this._isAudioTrackEnabled = this.isTrackByTypeEnabled('audio', sdpSplitByTracks);
    this._isVideoTrackEnabled = this.isTrackByTypeEnabled('video', sdpSplitByTracks);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(SdpParser, [{
    key: "audioCodec",
    get: function get() {
      return this._audioCodec;
    }
  }, {
    key: "videoCodec",
    get: function get() {
      return this._videoCodec;
    }
  }, {
    key: "isAudioTrackEnabled",
    get: function get() {
      return this._isAudioTrackEnabled;
    }
  }, {
    key: "isVideoTrackEnabled",
    get: function get() {
      return this._isVideoTrackEnabled;
    }
  }, {
    key: "isTrackByTypeEnabled",
    value: function isTrackByTypeEnabled(type, sdpSplitByTracks) {
      var sdpSectionForType = sdpSplitByTracks.find(function (sdpTrack) {
        return sdpTrack.startsWith(type);
      });
      if (!sdpSectionForType) {
        return false;
      }
      return !sdpSectionForType.includes("a=inactive");
    }
  }, {
    key: "applyCodec",
    value: function applyCodec(type, sdpSplitByLines) {
      var usedCodecLine = sdpSplitByLines.find(function (sdpLine) {
        return sdpLine.includes("a=rtpmap:".concat(sdpSplitByLines.find(function (i) {
          return i.includes("m=".concat(type));
        }).split(' ')[3]));
      });
      var usedCodec = usedCodecLine.split(' ')[1];
      var codecName = usedCodec.split('/')[0];
      return codecName;
    }
  }]);
  return SdpParser;
}();


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

/***/ "./src/sdk/api/SetTemporaryMaximalBitrate.ts":
/*!***************************************************!*
  !*** ./src/sdk/api/SetTemporaryMaximalBitrate.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BitrateState": () => /* binding */ BitrateState,
/* harmony export */   "BitrateMode": () => /* binding */ BitrateMode
/* harmony export */ });
/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var BitrateState;
(function (BitrateState) {
  BitrateState[BitrateState["Keep"] = 0] = "Keep";
  BitrateState[BitrateState["Reset"] = 1] = "Reset";
})(BitrateState || (BitrateState = {}));
var BitrateMode;
(function (BitrateMode) {
  BitrateMode[BitrateMode["Normal"] = 0] = "Normal";
  BitrateMode[BitrateMode["Force"] = 1] = "Force";
  BitrateMode[BitrateMode["Reset"] = 2] = "Reset";
})(BitrateMode || (BitrateMode = {}));

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

/***/ "./src/sdk/discovery/BitrateModeMapping.ts":
/*!*************************************************!*
  !*** ./src/sdk/discovery/BitrateModeMapping.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ BitrateModeMapping
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_SetTemporaryMaximalBitrate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/SetTemporaryMaximalBitrate */ "./src/sdk/api/SetTemporaryMaximalBitrate.ts");
/* harmony import */ var _lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lang/assertUnreachable */ "./src/lang/assertUnreachable.ts");


/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var BitrateModeMapping = /*#__PURE__*/function () {
  function BitrateModeMapping() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, BitrateModeMapping);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(BitrateModeMapping, null, [{
    key: "convertBitrateModeToBitrateModeType",
    value: function convertBitrateModeToBitrateModeType(bitrateMode) {
      switch (bitrateMode) {
        case _api_SetTemporaryMaximalBitrate__WEBPACK_IMPORTED_MODULE_2__.BitrateMode.Normal:
          return 'Normal';
        case _api_SetTemporaryMaximalBitrate__WEBPACK_IMPORTED_MODULE_2__.BitrateMode.Force:
          return 'Force';
        case _api_SetTemporaryMaximalBitrate__WEBPACK_IMPORTED_MODULE_2__.BitrateMode.Reset:
          return 'Reset';
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_3__.default)(bitrateMode);
      }
    }
  }]);
  return BitrateModeMapping;
}();


/***/ }),

/***/ "./src/sdk/discovery/BitrateStateMapping.ts":
/*!**************************************************!*
  !*** ./src/sdk/discovery/BitrateStateMapping.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ BitrateStateMapping
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_SetTemporaryMaximalBitrate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/SetTemporaryMaximalBitrate */ "./src/sdk/api/SetTemporaryMaximalBitrate.ts");
/* harmony import */ var _lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lang/assertUnreachable */ "./src/lang/assertUnreachable.ts");


/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var BitrateStateMapping = /*#__PURE__*/function () {
  function BitrateStateMapping() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, BitrateStateMapping);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(BitrateStateMapping, null, [{
    key: "convertBitrateStateToBitrateStateType",
    value: function convertBitrateStateToBitrateStateType(bitrateState) {
      switch (bitrateState) {
        case _api_SetTemporaryMaximalBitrate__WEBPACK_IMPORTED_MODULE_2__.BitrateState.Keep:
          return 'Keep';
        case _api_SetTemporaryMaximalBitrate__WEBPACK_IMPORTED_MODULE_2__.BitrateState.Reset:
          return 'Reset';
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_3__.default)(bitrateState);
      }
    }
  }]);
  return BitrateStateMapping;
}();


/***/ }),

/***/ "./src/sdk/discovery/Discovery.ts":
/*!****************************************!*
  !*** ./src/sdk/discovery/Discovery.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Discovery
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
/* harmony import */ var _SDK__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _DiscoveryService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DiscoveryService */ "./src/sdk/discovery/DiscoveryService.ts");





/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */



var discoveryCacheInterval = 60000;
var Discovery = /*#__PURE__*/function () {
  function Discovery() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, Discovery);
    throw new Error('Discovery is a static class that may not be instantiated');
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(Discovery, null, [{
    key: "precacheClosestEndPointDiscovery",
    value: function () {
      var _precacheClosestEndPointDiscovery = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
        var uri;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              uri = new URL(_SDK__WEBPACK_IMPORTED_MODULE_5__.default.discoveryUri.value);
              return _context.abrupt("return", Discovery.discoverClosestEndPointWithCaching(uri));
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function precacheClosestEndPointDiscovery() {
        return _precacheClosestEndPointDiscovery.apply(this, arguments);
      }
      return precacheClosestEndPointDiscovery;
    }()
  }, {
    key: "discoverClosestEndPointWithCaching",
    value: function () {
      var _discoverClosestEndPointWithCaching = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2(uri) {
        var url, discoveryService, cachedValue;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              url = uri.toString();
              if (!Discovery._cache[url]) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return", Discovery._cache[url]);
            case 3:
              discoveryService = new _DiscoveryService__WEBPACK_IMPORTED_MODULE_6__.default(uri);
              cachedValue = Discovery._cache[url] = discoveryService.discoverClosestEndPoint();
              Discovery._cache[url].then(function () {
                var ignored = setTimeout(function () {
                  if (Discovery._cache[url] === cachedValue) {
                    delete Discovery._cache[url];
                  }
                }, discoveryCacheInterval);
              }).catch(function (e) {
                delete Discovery._cache[url];
                throw e;
              });
              return _context2.abrupt("return", cachedValue);
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function discoverClosestEndPointWithCaching(_x) {
        return _discoverClosestEndPointWithCaching.apply(this, arguments);
      }
      return discoverClosestEndPointWithCaching;
    }()
  }]);
  return Discovery;
}();
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(Discovery, "_cache", {});

var ignored = Discovery.precacheClosestEndPointDiscovery();

/***/ }),

/***/ "./src/sdk/discovery/DiscoveryService.ts":
/*!***********************************************!*
  !*** ./src/sdk/discovery/DiscoveryService.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ DiscoveryService
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
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _EndPoint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EndPoint */ "./src/sdk/discovery/EndPoint.ts");
/* harmony import */ var _SDK__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../metrics/MetricsType */ "./src/metrics/MetricsType.ts");
/* harmony import */ var _DiscoveryUri__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DiscoveryUri */ "./src/sdk/discovery/DiscoveryUri.ts");
/* harmony import */ var _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../metrics/MetricsFactory */ "./src/metrics/MetricsFactory.ts");
/* provided dependency */ var Promise = __webpack_require__(/*! ./src/promise/Promise */ "./src/promise/Promise.ts")["default"];





/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */






var defaultTimeout = 20000;
var DiscoveryService = /*#__PURE__*/function () {
  function DiscoveryService(uri) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, DiscoveryService);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_5__.default.getLogger('Discovery'));
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_metricsService", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_uri", void 0);
    if (!uri) {
      throw new Error('Discovery requires uri');
    }
    this._metricsService = _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_10__.default.getMetricsService(uri.toString());
    this._uri = uri;
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(DiscoveryService, [{
    key: "discoverNearbyEndPoints",
    value: function () {
      var _discoverNearbyEndPoints = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(uri, timeout) {
        var url, response, asString, endPoints;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (timeout) {
                _context.next = 2;
                break;
              }
              throw new Error('Discovery requires timeout');
            case 2:
              url = uri.toString();
              _context.next = 5;
              return Promise.race([fetch(url, {
                method: 'GET',
                cache: 'no-cache'
              }), new Promise(function (_, reject) {
                return setTimeout(function () {
                  return reject(new Error("Discovery timed out [".concat(url, "]")));
                }, timeout);
              })]);
            case 5:
              response = _context.sent;
              if (response.ok) {
                _context.next = 8;
                break;
              }
              throw new Error("Discovery failed [".concat(url, "] [").concat(response.status, "]"));
            case 8:
              if (!(response.body === null)) {
                _context.next = 10;
                break;
              }
              throw new Error("Discovery failed with no data [".concat(url, "]"));
            case 10:
              _context.next = 12;
              return response.text();
            case 12:
              asString = _context.sent;
              endPoints = asString.split(',');
              return _context.abrupt("return", endPoints.map(function (endPoint) {
                return new _EndPoint__WEBPACK_IMPORTED_MODULE_6__.default(endPoint, timeout);
              }));
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function discoverNearbyEndPoints(_x, _x2) {
        return _discoverNearbyEndPoints.apply(this, arguments);
      }
      return discoverNearbyEndPoints;
    }()
  }, {
    key: "discoverClosestEndPoint",
    value: function () {
      var _discoverClosestEndPoint = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
        var _this = this;
        var timeout,
          url,
          endPoints,
          neverResolve,
          endPoint,
          _args2 = arguments;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              timeout = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : defaultTimeout;
              url = _DiscoveryUri__WEBPACK_IMPORTED_MODULE_9__.default.buildDiscoveryUrl(this._uri);
              _context2.next = 4;
              return this.discoverNearbyEndPoints(new URL(url), timeout);
            case 4:
              endPoints = _context2.sent;
              neverResolve = function neverResolve() {
                return new Promise(function () {
                  _this._logger.info('Request [%s] failed, preventing it from completing', url);
                });
              };
              _context2.next = 8;
              return Promise.race(endPoints.map(function (endPoint) {
                return endPoint.ping().catch(function (e) {
                  _this._logger.warn('Failed to ping end point [%s]', endPoint, e);
                  return neverResolve();
                }).then(function (time) {
                  var now = Date.now();
                  _this._logger.info('Discovered end point [%s] with time [%s]', endPoint.toString(), time);
                  _this._metricsService.push({
                    metricType: _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_8__.default.RoundTripTime,
                    runtime: (now - _SDK__WEBPACK_IMPORTED_MODULE_7__.default.pageLoadTime) / 1000,
                    value: {
                      uint64: time || 0
                    },
                    resource: endPoint.toString(),
                    kind: 'ping'
                  });
                  return endPoint;
                });
              }));
            case 8:
              endPoint = _context2.sent;
              return _context2.abrupt("return", endPoint);
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function discoverClosestEndPoint() {
        return _discoverClosestEndPoint.apply(this, arguments);
      }
      return discoverClosestEndPoint;
    }()
  }]);
  return DiscoveryService;
}();


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

/***/ "./src/sdk/discovery/EndPoint.ts":
/*!***************************************!*
  !*** ./src/sdk/discovery/EndPoint.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ EndPoint
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lang/assertUnreachable */ "./src/lang/assertUnreachable.ts");
/* harmony import */ var _version_VersionManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../version/VersionManager */ "./src/sdk/version/VersionManager.ts");
/* harmony import */ var _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../edgeAuth/EdgeAuth */ "./src/sdk/edgeAuth/EdgeAuth.ts");
/* harmony import */ var _BitrateModeMapping__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BitrateModeMapping */ "./src/sdk/discovery/BitrateModeMapping.ts");
/* harmony import */ var _BitrateStateMapping__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BitrateStateMapping */ "./src/sdk/discovery/BitrateStateMapping.ts");
/* provided dependency */ var Promise = __webpack_require__(/*! ./src/promise/Promise */ "./src/promise/Promise.ts")["default"];






/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */






var apiVersion = 6;
var EndPoint = /*#__PURE__*/function () {
  function EndPoint(uri, timeout) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default()(this, EndPoint);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_6__.default.getLogger('EndPoint'));
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_uri", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_timeout", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_roundTripTime", void 0);
    this._uri = uri;
    this._timeout = timeout;
    if (!timeout) {
      throw new Error("End point requires a timeout");
    }
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default()(EndPoint, [{
    key: "roundTripTime",
    get: function get() {
      return this._roundTripTime;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "EndPoint[uri=".concat(this._uri, "]");
    }
  }, {
    key: "ping",
    value: function () {
      var _ping = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee() {
        var _this = this;
        var url, start, response, finished;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              url = this.buildPingUrl();
              start = Date.now();
              _context.next = 4;
              return Promise.race([fetch(url, {
                method: 'GET',
                cache: 'no-cache'
              }), new Promise(function (_, reject) {
                return setTimeout(function () {
                  return reject(new Error("Ping timed out [".concat(url, "]")));
                }, _this._timeout);
              })]);
            case 4:
              response = _context.sent;
              finished = Date.now();
              if (response.ok) {
                _context.next = 8;
                break;
              }
              throw new Error("Ping failed [".concat(url, "] [").concat(response.status, "]"));
            case 8:
              this._roundTripTime = finished - start;
              return _context.abrupt("return", this._roundTripTime);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function ping() {
        return _ping.apply(this, arguments);
      }
      return ping;
    }()
  }, {
    key: "subscribe",
    value: function () {
      var _subscribe = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee2(token, localSessionDescription, failureCount) {
        var _this2 = this;
        var parsedToken, tenancy, url, formData, clientVersion, bodyWithOffer, bodyWithoutOffer, start, httpResponse, timeout, status, finished, subscribeResponse;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              parsedToken = _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_9__.default.parseToken(token);
              if (!(!parsedToken || !parsedToken.applicationId)) {
                _context2.next = 4;
                break;
              }
              this._logger.error('Failed to parse token [%s]', token);
              return _context2.abrupt("return", {
                status: 'unauthorized'
              });
            case 4:
              tenancy = parsedToken.applicationId;
              url = this.buildUrl([tenancy, 'stream', 'subscribe']).toString();
              formData = new FormData();
              clientVersion = _version_VersionManager__WEBPACK_IMPORTED_MODULE_8__.default.sdkVersion;
              if (failureCount === 0 && localSessionDescription) {
                bodyWithOffer = {
                  apiVersion: apiVersion,
                  clientVersion: clientVersion,
                  edgeAuthToken: token,
                  failureCount: failureCount,
                  httpRoundTripTime: this._roundTripTime,
                  setRemoteDescription: {
                    apiVersion: apiVersion,
                    sessionDescription: {
                      type: this.convertRTCSdpTypeToSdpType(localSessionDescription.type),
                      sdp: localSessionDescription.sdp
                    }
                  },
                  createAnswerDescription: {
                    apiVersion: apiVersion
                  }
                };
                formData.append('jsonBody', JSON.stringify(bodyWithOffer));
              } else {
                bodyWithoutOffer = {
                  apiVersion: apiVersion,
                  clientVersion: clientVersion,
                  edgeAuthToken: token,
                  failureCount: failureCount,
                  httpRoundTripTime: this._roundTripTime,
                  createOfferDescription: {
                    apiVersion: apiVersion
                  }
                };
                formData.append('jsonBody', JSON.stringify(bodyWithoutOffer));
              }
              start = Date.now();
              _context2.prev = 10;
              timeout = null;
              _context2.next = 14;
              return Promise.race([fetch(url, {
                method: 'POST',
                body: formData
              }), new Promise(function (resolve) {
                return timeout = window.setTimeout(function () {
                  _this2._logger.error('Failed to subscribe', new Error("Subscribe timed out [".concat(url, "]")));
                  resolve({
                    status: 408
                  });
                }, _this2._timeout);
              })]).finally(function () {
                if (timeout) {
                  clearTimeout(timeout);
                }
              });
            case 14:
              httpResponse = _context2.sent;
              _context2.next = 21;
              break;
            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](10);
              this._logger.error('Failed to subscribe', _context2.t0);
              return _context2.abrupt("return", {
                status: 'failed'
              });
            case 21:
              status = this.mapHttpStatusToSubscribeStatus(httpResponse);
              if (!(status !== 'ok')) {
                _context2.next = 24;
                break;
              }
              return _context2.abrupt("return", {
                status: status
              });
            case 24:
              finished = Date.now();
              _context2.next = 27;
              return this.convertHttpResponseToSubscribeResponse(tenancy, httpResponse);
            case 27:
              subscribeResponse = _context2.sent;
              this._logger.debug('Got subscribe response [%j] in [%s] ms', subscribeResponse, finished - start);
              return _context2.abrupt("return", subscribeResponse);
            case 30:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[10, 17]]);
      }));
      function subscribe(_x, _x2, _x3) {
        return _subscribe.apply(this, arguments);
      }
      return subscribe;
    }()
  }, {
    key: "publish",
    value: function () {
      var _publish = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee3(name, token, localSessionDescription, failureCount) {
        var _this3 = this;
        var parsedToken, tenancy, url, formData, clientVersion, bodyWithOffer, bodyWithoutOffer, start, httpResponse, timeout, status, finished, subscribeResponse;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              parsedToken = _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_9__.default.parseToken(token);
              if (!(!parsedToken || !parsedToken.applicationId)) {
                _context3.next = 4;
                break;
              }
              this._logger.error('Failed to parse token [%s]', token);
              return _context3.abrupt("return", {
                status: 'unauthorized'
              });
            case 4:
              tenancy = parsedToken.applicationId;
              url = this.buildUrl([tenancy, 'stream', 'publish']).toString();
              formData = new FormData();
              clientVersion = _version_VersionManager__WEBPACK_IMPORTED_MODULE_8__.default.sdkVersion;
              if (failureCount === 0 && localSessionDescription) {
                bodyWithOffer = {
                  apiVersion: apiVersion,
                  clientVersion: clientVersion,
                  edgeAuthToken: token,
                  failureCount: failureCount,
                  httpRoundTripTime: this._roundTripTime,
                  name: name,
                  setRemoteDescription: {
                    apiVersion: apiVersion,
                    sessionDescription: {
                      type: this.convertRTCSdpTypeToSdpType(localSessionDescription.type),
                      sdp: localSessionDescription.sdp
                    }
                  },
                  createAnswerDescription: {
                    streamId: '',
                    options: ['upload'],
                    apiVersion: apiVersion
                  }
                };
                formData.append('jsonBody', JSON.stringify(bodyWithOffer));
              } else {
                bodyWithoutOffer = {
                  apiVersion: apiVersion,
                  clientVersion: clientVersion,
                  edgeAuthToken: token,
                  failureCount: failureCount,
                  httpRoundTripTime: this._roundTripTime,
                  name: name,
                  createOfferDescription: {
                    streamId: '',
                    options: ['upload'],
                    apiVersion: apiVersion
                  }
                };
                formData.append('jsonBody', JSON.stringify(bodyWithoutOffer));
              }
              start = Date.now();
              _context3.prev = 10;
              timeout = null;
              _context3.next = 14;
              return Promise.race([fetch(url, {
                method: 'POST',
                body: formData
              }), new Promise(function (resolve) {
                return timeout = window.setTimeout(function () {
                  _this3._logger.error('Failed to publish', new Error("Publish timed out [".concat(url, "]")));
                  resolve({
                    status: 408
                  });
                }, _this3._timeout);
              })]).finally(function () {
                if (timeout) {
                  clearTimeout(timeout);
                }
              });
            case 14:
              httpResponse = _context3.sent;
              _context3.next = 21;
              break;
            case 17:
              _context3.prev = 17;
              _context3.t0 = _context3["catch"](10);
              this._logger.error('Failed to publish', _context3.t0);
              return _context3.abrupt("return", {
                status: 'failed'
              });
            case 21:
              status = this.mapHttpStatusToPublishStatus(httpResponse);
              if (!(status !== 'ok')) {
                _context3.next = 24;
                break;
              }
              return _context3.abrupt("return", {
                status: status
              });
            case 24:
              finished = Date.now();
              _context3.next = 27;
              return this.convertHttpResponseToPublishResponse(tenancy, httpResponse);
            case 27:
              subscribeResponse = _context3.sent;
              this._logger.debug('Got publish response [%j] in [%s] ms', subscribeResponse, finished - start);
              return _context3.abrupt("return", subscribeResponse);
            case 30:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[10, 17]]);
      }));
      function publish(_x4, _x5, _x6, _x7) {
        return _publish.apply(this, arguments);
      }
      return publish;
    }()
  }, {
    key: "setRemoteDescription",
    value: function () {
      var _setRemoteDescription = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee4(stream, sessionDescription) {
        var _this4 = this;
        var url, formData, body, start, httpResponse, timeout, status, finished, setRemoteDescriptionResponse;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              url = this.buildUrl([stream.tenancy, 'stream', stream.streamId, 'description', 'remote']).toString();
              formData = new FormData();
              body = {
                apiVersion: apiVersion,
                sharedSecret: stream.sharedSecret,
                sessionDescription: {
                  type: this.convertRTCSdpTypeToSdpType(sessionDescription.type),
                  sdp: sessionDescription.sdp
                }
              };
              formData.append('jsonBody', JSON.stringify(body));
              start = Date.now();
              _context4.prev = 5;
              timeout = null;
              _context4.next = 9;
              return Promise.race([fetch(url, {
                method: 'POST',
                body: formData
              }), new Promise(function (resolve) {
                return timeout = window.setTimeout(function () {
                  _this4._logger.error('Failed to set remote description', new Error("Set remote description timed out [".concat(url, "]")));
                  resolve({
                    status: 408
                  });
                }, _this4._timeout);
              })]).finally(function () {
                if (timeout) {
                  clearTimeout(timeout);
                }
              });
            case 9:
              httpResponse = _context4.sent;
              _context4.next = 16;
              break;
            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](5);
              this._logger.error('Failed to set remote description', _context4.t0);
              return _context4.abrupt("return", {
                status: 'failed'
              });
            case 16:
              status = this.mapHttpStatusToSetRemoteDescriptionStatus(httpResponse);
              if (!(status !== 'ok')) {
                _context4.next = 19;
                break;
              }
              return _context4.abrupt("return", {
                status: status
              });
            case 19:
              finished = Date.now();
              _context4.next = 22;
              return this.convertHttpResponseToSetRemoteDescriptionResponse(httpResponse);
            case 22:
              setRemoteDescriptionResponse = _context4.sent;
              this._logger.debug('Got set remote description response [%j] in [%s] ms', setRemoteDescriptionResponse, finished - start);
              return _context4.abrupt("return", setRemoteDescriptionResponse);
            case 25:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[5, 12]]);
      }));
      function setRemoteDescription(_x8, _x9) {
        return _setRemoteDescription.apply(this, arguments);
      }
      return setRemoteDescription;
    }()
  }, {
    key: "limitBitrate",
    value: function () {
      var _limitBitrate = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee5(stream, elapsedInMilliseconds, bitrateInBitsPerSecond, bitrateState, bitrateMode) {
        var _this5 = this;
        var url, formData, body, start, httpResponse, timeout, status, finished;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              url = this.buildUrl([stream.tenancy, 'stream', stream.streamId, 'bitrate']).toString();
              formData = new FormData();
              body = {
                apiVersion: apiVersion,
                sharedSecret: stream.sharedSecret,
                elapsedInMilliseconds: elapsedInMilliseconds,
                bitrateInBitsPerSecond: bitrateInBitsPerSecond,
                bitrateState: _BitrateStateMapping__WEBPACK_IMPORTED_MODULE_11__.default.convertBitrateStateToBitrateStateType(bitrateState),
                bitrateMode: _BitrateModeMapping__WEBPACK_IMPORTED_MODULE_10__.default.convertBitrateModeToBitrateModeType(bitrateMode)
              };
              formData.append('jsonBody', JSON.stringify(body));
              start = Date.now();
              _context5.prev = 5;
              timeout = null;
              _context5.next = 9;
              return Promise.race([fetch(url, {
                method: 'POST',
                body: formData
              }), new Promise(function (resolve) {
                return timeout = window.setTimeout(function () {
                  _this5._logger.error('Failed to set limit bitrate timed', new Error("Set limit bitrate timed out [".concat(url, "]")));
                  resolve({
                    status: 408
                  });
                }, _this5._timeout);
              })]).finally(function () {
                if (timeout) {
                  clearTimeout(timeout);
                }
              });
            case 9:
              httpResponse = _context5.sent;
              _context5.next = 16;
              break;
            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](5);
              this._logger.error('Failed to set limit bitrate timed', _context5.t0);
              return _context5.abrupt("return", {
                status: 'failed'
              });
            case 16:
              status = this.mapHttpStatusToSetTemporaryMaximalBitrateStatus(httpResponse);
              finished = Date.now();
              this._logger.info('Got set limit bitrate response [%s] in [%s] ms', status, finished - start);
              return _context5.abrupt("return", {
                status: status
              });
            case 20:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[5, 12]]);
      }));
      function limitBitrate(_x10, _x11, _x12, _x13, _x14) {
        return _limitBitrate.apply(this, arguments);
      }
      return limitBitrate;
    }()
  }, {
    key: "addIceCandidates",
    value: function () {
      var _addIceCandidates = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee6(stream, candidates, discoveryCompleted) {
        var _this6 = this;
        var options,
          url,
          formData,
          body,
          start,
          httpResponse,
          timeout,
          status,
          finished,
          addIceCandidatesResponse,
          _args6 = arguments;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              options = _args6.length > 3 && _args6[3] !== undefined ? _args6[3] : [];
              url = this.buildUrl([stream.tenancy, 'stream', stream.streamId, 'ice', 'candidates']).toString();
              formData = new FormData();
              body = {
                apiVersion: apiVersion,
                sharedSecret: stream.sharedSecret,
                candidates: candidates,
                discoveryCompleted: discoveryCompleted,
                options: options
              };
              formData.append('jsonBody', JSON.stringify(body));
              start = Date.now();
              _context6.prev = 6;
              timeout = null;
              _context6.next = 10;
              return Promise.race([fetch(url, {
                method: 'POST',
                body: formData
              }), new Promise(function (resolve) {
                return timeout = window.setTimeout(function () {
                  _this6._logger.error('Failed to add ice candidates', new Error("Add ice candidates timed out [".concat(url, "]")));
                  resolve({
                    status: 408
                  });
                }, _this6._timeout);
              })]).finally(function () {
                if (timeout) {
                  clearTimeout(timeout);
                }
              });
            case 10:
              httpResponse = _context6.sent;
              _context6.next = 17;
              break;
            case 13:
              _context6.prev = 13;
              _context6.t0 = _context6["catch"](6);
              this._logger.error('Failed to add ice candidates', _context6.t0);
              return _context6.abrupt("return", {
                status: 'failed'
              });
            case 17:
              status = this.mapHttpStatusToAddIceCandidatesStatus(httpResponse);
              if (!(status !== 'ok')) {
                _context6.next = 20;
                break;
              }
              return _context6.abrupt("return", {
                status: status
              });
            case 20:
              finished = Date.now();
              _context6.next = 23;
              return this.convertHttpResponseToAddIceCandidatesResponse(httpResponse);
            case 23:
              addIceCandidatesResponse = _context6.sent;
              this._logger.info('Got add ICE candidates response [%j] in [%s] ms', addIceCandidatesResponse, finished - start);
              return _context6.abrupt("return", addIceCandidatesResponse);
            case 26:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[6, 13]]);
      }));
      function addIceCandidates(_x15, _x16, _x17) {
        return _addIceCandidates.apply(this, arguments);
      }
      return addIceCandidates;
    }()
  }, {
    key: "destroyStream",
    value: function () {
      var _destroyStream = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee7(stream, reason) {
        var _this7 = this;
        var url, formData, body, start, httpResponse, timeout, status, finished, destroyStreamResponse;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              url = this.buildUrl([stream.tenancy, 'stream', stream.streamId, 'destroy']).toString();
              formData = new FormData();
              body = {
                apiVersion: apiVersion,
                sharedSecret: stream.sharedSecret,
                reason: reason,
                options: []
              };
              formData.append('jsonBody', JSON.stringify(body));
              start = Date.now();
              _context7.prev = 5;
              timeout = null;
              _context7.next = 9;
              return Promise.race([fetch(url, {
                method: 'POST',
                body: formData,
                cache: 'no-cache'
              }), new Promise(function (resolve) {
                return timeout = window.setTimeout(function () {
                  _this7._logger.error('Failed to subscribe', new Error("Delete stream timed out [".concat(url, "]")));
                  resolve({
                    status: 408
                  });
                }, _this7._timeout);
              })]).finally(function () {
                if (timeout) {
                  clearTimeout(timeout);
                }
              });
            case 9:
              httpResponse = _context7.sent;
              _context7.next = 16;
              break;
            case 12:
              _context7.prev = 12;
              _context7.t0 = _context7["catch"](5);
              this._logger.error('Failed to delete stream', _context7.t0);
              return _context7.abrupt("return", {
                status: 'failed'
              });
            case 16:
              status = this.mapHttpStatusToSetDestroyStreamStatus(httpResponse);
              if (!(status !== 'ok')) {
                _context7.next = 19;
                break;
              }
              return _context7.abrupt("return", {
                status: status
              });
            case 19:
              finished = Date.now();
              _context7.next = 22;
              return this.convertHttpResponseToDestroyStreamResponse(httpResponse);
            case 22:
              destroyStreamResponse = _context7.sent;
              this._logger.info('Got destroy stream response [%j] in [%s] ms', destroyStreamResponse, finished - start);
              return _context7.abrupt("return", destroyStreamResponse);
            case 25:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[5, 12]]);
      }));
      function destroyStream(_x18, _x19) {
        return _destroyStream.apply(this, arguments);
      }
      return destroyStream;
    }()
  }, {
    key: "buildUrl",
    value: function buildUrl(path) {
      var uri = new URL(this._uri);
      var pathAsArray = uri.pathname.split('/');
      pathAsArray.length = pathAsArray.length - 1;
      uri.pathname = pathAsArray.concat.apply(pathAsArray, _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(path)).join('/');
      return uri;
    }
  }, {
    key: "buildPingUrl",
    value: function buildPingUrl() {
      var uri = new URL(this._uri);
      var sdkVersion = _version_VersionManager__WEBPACK_IMPORTED_MODULE_8__.default.sdkVersion;
      uri.search = "?".concat(new URLSearchParams([['type', 'http'], ['version', sdkVersion], ['_', "".concat(Date.now())]]).toString());
      return uri.toString();
    }
  }, {
    key: "mapHttpStatusToPublishStatus",
    value: function mapHttpStatusToPublishStatus(response) {
      if (!response) {
        return 'failed';
      }
      switch (response.status) {
        case 200:
          return 'ok';
        case 401:
          return 'unauthorized';
        case 402:
          return 'geo-restricted';
        case 403:
          return 'geo-blocked';
        case 408:
          return 'timeout';
        case 503:
          return 'capacity';
        case 504:
          return 'rate-limited';
        default:
          return 'failed';
      }
    }
  }, {
    key: "mapHttpStatusToSubscribeStatus",
    value: function mapHttpStatusToSubscribeStatus(response) {
      if (!response) {
        return 'failed';
      }
      switch (response.status) {
        case 200:
          return 'ok';
        case 401:
          return 'unauthorized';
        case 402:
          return 'geo-restricted';
        case 403:
          return 'geo-blocked';
        case 408:
          return 'timeout';
        case 503:
          return 'capacity';
        case 504:
          return 'rate-limited';
        default:
          return 'failed';
      }
    }
  }, {
    key: "mapHttpStatusToSetRemoteDescriptionStatus",
    value: function mapHttpStatusToSetRemoteDescriptionStatus(response) {
      if (!response) {
        return 'failed';
      }
      switch (response.status) {
        case 200:
          return 'ok';
        case 401:
          return 'unauthorized';
        case 408:
          return 'timeout';
        case 503:
          return 'capacity';
        case 504:
          return 'rate-limited';
        default:
          return 'failed';
      }
    }
  }, {
    key: "mapHttpStatusToSetTemporaryMaximalBitrateStatus",
    value: function mapHttpStatusToSetTemporaryMaximalBitrateStatus(response) {
      if (!response) {
        return 'failed';
      }
      switch (response.status) {
        case 200:
          return 'ok';
        case 401:
          return 'unauthorized';
        case 408:
          return 'timeout';
        case 503:
          return 'capacity';
        case 504:
          return 'rate-limited';
        default:
          return 'failed';
      }
    }
  }, {
    key: "mapHttpStatusToAddIceCandidatesStatus",
    value: function mapHttpStatusToAddIceCandidatesStatus(response) {
      if (!response) {
        return 'failed';
      }
      switch (response.status) {
        case 200:
          return 'ok';
        case 401:
          return 'unauthorized';
        case 408:
          return 'timeout';
        case 503:
          return 'capacity';
        case 504:
          return 'rate-limited';
        default:
          return 'failed';
      }
    }
  }, {
    key: "mapHttpStatusToSetDestroyStreamStatus",
    value: function mapHttpStatusToSetDestroyStreamStatus(response) {
      if (!response) {
        return 'failed';
      }
      switch (response.status) {
        case 200:
          return 'ok';
        case 401:
          return 'unauthorized';
        case 408:
          return 'timeout';
        case 503:
          return 'capacity';
        case 504:
          return 'rate-limited';
        default:
          return 'failed';
      }
    }
  }, {
    key: "convertHttpResponseToSubscribeResponse",
    value: function () {
      var _convertHttpResponseToSubscribeResponse = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee8(tenancy, response) {
        var data, subscribeResponse;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return response.json();
            case 2:
              data = _context8.sent;
              subscribeResponse = {
                status: data.status
              };
              subscribeResponse.stream = {
                tenancy: tenancy,
                streamId: data.streamId,
                sharedSecret: data.sharedSecret
              };
              subscribeResponse.lag = data.lag;
              if (data) {
                if (data.rtcConfiguration) {
                  subscribeResponse.rtcConfiguration = this.convertIRtcConfigurationToRTCConfiguration(data.rtcConfiguration);
                }
                if (data.setRemoteDescriptionResponse && data.setRemoteDescriptionResponse.sessionDescription) {
                  subscribeResponse.setRemoteDescriptionResponse = {
                    sessionDescription: this.convertISessionDescriptionToRTCSessionDescription(data.setRemoteDescriptionResponse.sessionDescription)
                  };
                }
                if (data.createAnswerDescriptionResponse && data.createAnswerDescriptionResponse.sessionDescription) {
                  subscribeResponse.createAnswerDescriptionResponse = {
                    sessionDescription: this.convertISessionDescriptionToRTCSessionDescription(data.createAnswerDescriptionResponse.sessionDescription)
                  };
                }
                if (data.createOfferDescriptionResponse && data.createOfferDescriptionResponse.sessionDescription) {
                  subscribeResponse.createOfferDescriptionResponse = {
                    sessionDescription: this.convertISessionDescriptionToRTCSessionDescription(data.createOfferDescriptionResponse.sessionDescription)
                  };
                }
              }
              return _context8.abrupt("return", subscribeResponse);
            case 8:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function convertHttpResponseToSubscribeResponse(_x20, _x21) {
        return _convertHttpResponseToSubscribeResponse.apply(this, arguments);
      }
      return convertHttpResponseToSubscribeResponse;
    }()
  }, {
    key: "convertHttpResponseToPublishResponse",
    value: function () {
      var _convertHttpResponseToPublishResponse = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee9(tenancy, response) {
        var data, publishResponse;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return response.json();
            case 2:
              data = _context9.sent;
              publishResponse = {
                status: data.status
              };
              publishResponse.stream = {
                tenancy: tenancy,
                streamId: data.streamId,
                sharedSecret: data.sharedSecret
              };
              if (data) {
                if (data.rtcConfiguration) {
                  publishResponse.rtcConfiguration = this.convertIRtcConfigurationToRTCConfiguration(data.rtcConfiguration);
                }
                if (data.setRemoteDescriptionResponse && data.setRemoteDescriptionResponse.sessionDescription) {
                  publishResponse.setRemoteDescriptionResponse = {
                    sessionDescription: this.convertISessionDescriptionToRTCSessionDescription(data.setRemoteDescriptionResponse.sessionDescription)
                  };
                }
                if (data.createAnswerDescriptionResponse && data.createAnswerDescriptionResponse.sessionDescription) {
                  publishResponse.createAnswerDescriptionResponse = {
                    sessionDescription: this.convertISessionDescriptionToRTCSessionDescription(data.createAnswerDescriptionResponse.sessionDescription)
                  };
                }
                if (data.createOfferDescriptionResponse && data.createOfferDescriptionResponse.sessionDescription) {
                  publishResponse.createOfferDescriptionResponse = {
                    sessionDescription: this.convertISessionDescriptionToRTCSessionDescription(data.createOfferDescriptionResponse.sessionDescription)
                  };
                }
              }
              return _context9.abrupt("return", publishResponse);
            case 7:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function convertHttpResponseToPublishResponse(_x22, _x23) {
        return _convertHttpResponseToPublishResponse.apply(this, arguments);
      }
      return convertHttpResponseToPublishResponse;
    }()
  }, {
    key: "convertIRtcConfigurationToRTCConfiguration",
    value: function convertIRtcConfigurationToRTCConfiguration(configuration) {
      var rtcConfiguration = {};
      if (configuration.bundlePolicy) {
        switch (configuration.bundlePolicy) {
          case 'BundlePolicyBalanced':
            rtcConfiguration.bundlePolicy = 'balanced';
            break;
          case 'BundlePolicyMaxCompat':
            rtcConfiguration.bundlePolicy = 'max-compat';
            break;
          case 'BundlePolicyMaxBundle':
            rtcConfiguration.bundlePolicy = 'max-bundle';
            break;
          default:
            (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_7__.default)(configuration.bundlePolicy);
        }
      }
      if (typeof configuration.iceCandidatePoolSize === 'number') {
        rtcConfiguration.iceCandidatePoolSize = configuration.iceCandidatePoolSize;
      }
      if (configuration.iceServers) {
        var iceServers = [];
        for (var i = 0; i < configuration.iceServers.length; i++) {
          iceServers.push({
            urls: configuration.iceServers[i].urls,
            username: configuration.iceServers[i].username,
            credential: configuration.iceServers[i].credential
          });
        }
        rtcConfiguration.iceServers = iceServers;
      }
      if (configuration.iceTransportPolicy) {
        switch (configuration.iceTransportPolicy) {
          case 'IceTransportPolicyAll':
            rtcConfiguration.iceTransportPolicy = 'all';
            break;
          case 'IceTransportPolicyRelay':
            rtcConfiguration.iceTransportPolicy = 'relay';
            break;
          case 'IceTransportPolicyPublic':
            // Deprecated - Not supported
            break;
          default:
            (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_7__.default)(configuration.iceTransportPolicy);
        }
      }
      if (configuration.peerIdentity) {
        rtcConfiguration.peerIdentity = configuration.peerIdentity;
      }
      if (configuration.rtcpMuxPolicy) {
        switch (configuration.rtcpMuxPolicy) {
          case 'RtcpMuxPolicyNegotiate':
            rtcConfiguration.rtcpMuxPolicy = 'negotiate';
            break;
          case 'RtcpMuxPolicyRequire':
            rtcConfiguration.rtcpMuxPolicy = 'require';
            break;
          default:
            (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_7__.default)(configuration.rtcpMuxPolicy);
        }
      }
      return rtcConfiguration;
    }
  }, {
    key: "convertISessionDescriptionToRTCSessionDescription",
    value: function convertISessionDescriptionToRTCSessionDescription(sessionDescription) {
      var rtcSessionDescription = {
        sdp: sessionDescription.sdp
      };
      switch (sessionDescription.type) {
        case 'Offer':
          rtcSessionDescription.type = 'offer';
          break;
        case 'Answer':
          rtcSessionDescription.type = 'answer';
          break;
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_7__.default)(sessionDescription.type);
      }
      return rtcSessionDescription;
    }
  }, {
    key: "convertHttpResponseToSetRemoteDescriptionResponse",
    value: function () {
      var _convertHttpResponseToSetRemoteDescriptionResponse = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee10(response) {
        var data, setRemoteDescriptionResponse;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return response.json();
            case 2:
              data = _context10.sent;
              setRemoteDescriptionResponse = {
                status: data.status
              };
              if (data && data.sessionDescription) {
                setRemoteDescriptionResponse.sessionDescription = this.convertISessionDescriptionToRTCSessionDescription(data.sessionDescription);
              }
              return _context10.abrupt("return", setRemoteDescriptionResponse);
            case 6:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function convertHttpResponseToSetRemoteDescriptionResponse(_x24) {
        return _convertHttpResponseToSetRemoteDescriptionResponse.apply(this, arguments);
      }
      return convertHttpResponseToSetRemoteDescriptionResponse;
    }()
  }, {
    key: "convertHttpResponseToAddIceCandidatesResponse",
    value: function () {
      var _convertHttpResponseToAddIceCandidatesResponse = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee11(response) {
        var data, addIceCandidatesResponse;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return response.json();
            case 2:
              data = _context11.sent;
              addIceCandidatesResponse = {
                status: data.status,
                options: []
              };
              if (data) {
                if (data.options) {
                  addIceCandidatesResponse.options = data.options;
                }
              }
              return _context11.abrupt("return", addIceCandidatesResponse);
            case 6:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }));
      function convertHttpResponseToAddIceCandidatesResponse(_x25) {
        return _convertHttpResponseToAddIceCandidatesResponse.apply(this, arguments);
      }
      return convertHttpResponseToAddIceCandidatesResponse;
    }()
  }, {
    key: "convertHttpResponseToDestroyStreamResponse",
    value: function () {
      var _convertHttpResponseToDestroyStreamResponse = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee12(response) {
        var data, destroyStream;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return response.json();
            case 2:
              data = _context12.sent;
              destroyStream = {
                status: data.status
              };
              return _context12.abrupt("return", destroyStream);
            case 5:
            case "end":
              return _context12.stop();
          }
        }, _callee12);
      }));
      function convertHttpResponseToDestroyStreamResponse(_x26) {
        return _convertHttpResponseToDestroyStreamResponse.apply(this, arguments);
      }
      return convertHttpResponseToDestroyStreamResponse;
    }()
  }, {
    key: "convertRTCSdpTypeToSdpType",
    value: function convertRTCSdpTypeToSdpType(type) {
      switch (type) {
        case 'answer':
          return 'Answer';
        case 'offer':
          return 'Offer';
        case 'pranswer':
        case 'rollback':
          throw new Error("SDP type [".concat(type, "] is not supported"));
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_7__.default)(type);
      }
    }
  }]);
  return EndPoint;
}();


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

/***/ "./src/sdk/publish/Publisher.ts":
/*!**************************************!*
  !*** ./src/sdk/publish/Publisher.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Publisher
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
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../rx/ReadOnlySubject */ "./src/rx/ReadOnlySubject.ts");
/* harmony import */ var _SDK__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _PublisherState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PublisherState */ "./src/sdk/publish/PublisherState.ts");
/* harmony import */ var _lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lang/assertUnreachable */ "./src/lang/assertUnreachable.ts");
/* harmony import */ var _lang_Disposable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lang/Disposable */ "./src/lang/Disposable.ts");
/* harmony import */ var _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../edgeAuth/EdgeAuth */ "./src/sdk/edgeAuth/EdgeAuth.ts");
/* harmony import */ var _video_SessionTelemetry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../video/SessionTelemetry */ "./src/video/SessionTelemetry.ts");
/* harmony import */ var _context_TokenContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../context/TokenContext */ "./src/context/TokenContext.ts");
/* harmony import */ var _PublisherContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./PublisherContext */ "./src/sdk/publish/PublisherContext.ts");
/* harmony import */ var _context_PeerConnectionContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../context/PeerConnectionContext */ "./src/context/PeerConnectionContext.ts");
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../context/StateContext */ "./src/context/StateContext.ts");
/* harmony import */ var _discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../discovery/DiscoveryUri */ "./src/sdk/discovery/DiscoveryUri.ts");
/* harmony import */ var _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../metrics/MetricsFactory */ "./src/metrics/MetricsFactory.ts");
/* harmony import */ var _RealTimePublisher__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./RealTimePublisher */ "./src/sdk/publish/RealTimePublisher.ts");
/* provided dependency */ var Promise = __webpack_require__(/*! ./src/promise/Promise */ "./src/promise/Promise.ts")["default"];





/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */















var defaultStreamTerminationReason = 'client:termination';
var backoffIntervalInMilliseconds = 2000;
var failureCountCleanUpIntervalInMilliseconds = 3000;
var maxBackoffIntervalInMilliseconds = 300000;
var standbyPollingIntervalInMilliseconds = 15000;
var Publisher = /*#__PURE__*/function () {
  function Publisher(mediaStream, token, name) {
    var _this = this;
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, Publisher);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_5__.default.getLogger('Publisher'));
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_tokenContext", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_publisherContext", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_peerConnectionContext", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_stateContext", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_publisherStartTime", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyToken", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyPeerConnection", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyState", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyTokenExpiring", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyAuthorized", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyOnline", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyLoading", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyPublishing", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyStandby", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyStopped", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyFailureCount", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyEndPoint", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyStream", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyRtcStatistics", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_readOnlyMediaStream", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_metricsService", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_sessionTelemetry", void 0);
    this._tokenContext = new _context_TokenContext__WEBPACK_IMPORTED_MODULE_13__.default(token);
    this._publisherContext = new _PublisherContext__WEBPACK_IMPORTED_MODULE_14__.default(name);
    this._peerConnectionContext = new _context_PeerConnectionContext__WEBPACK_IMPORTED_MODULE_15__.default();
    this._stateContext = new _context_StateContext__WEBPACK_IMPORTED_MODULE_16__.default();
    this._publisherStartTime = Date.now();
    this._readOnlyToken = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__.default(this._tokenContext.token);
    this._readOnlyPeerConnection = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__.default(this._peerConnectionContext.peerConnection);
    this._readOnlyState = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__.default(this._publisherContext.state);
    this._readOnlyTokenExpiring = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__.default(this._tokenContext.tokenExpiring);
    this._readOnlyAuthorized = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__.default(this._publisherContext.authorized);
    this._readOnlyOnline = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__.default(this._publisherContext.online);
    this._readOnlyLoading = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__.default(this._publisherContext.loading);
    this._readOnlyPublishing = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__.default(this._publisherContext.publishing);
    this._readOnlyStandby = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__.default(this._publisherContext.standby);
    this._readOnlyStopped = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__.default(this._publisherContext.stopped);
    this._readOnlyFailureCount = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__.default(this._publisherContext.failureCount);
    this._readOnlyEndPoint = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__.default(this._publisherContext.endPoint);
    this._readOnlyStream = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__.default(this._publisherContext.stream);
    this._readOnlyRtcStatistics = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__.default(this._publisherContext.rtcStatistics);
    this._readOnlyMediaStream = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_6__.default(this._peerConnectionContext.mediaStream);
    this._peerConnectionContext.mediaStream.value = mediaStream;
    var parsedToken = _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_11__.default.parseToken(this._tokenContext.token.value);
    var discoveryUri = (_edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_11__.default.getUri(parsedToken) || _SDK__WEBPACK_IMPORTED_MODULE_7__.default.discoveryUri.value).toString();
    _SDK__WEBPACK_IMPORTED_MODULE_7__.default.tenancy.value = _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_11__.default.getTenancy(parsedToken) || _SDK__WEBPACK_IMPORTED_MODULE_7__.default.tenancy.value;
    _discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_17__.default.uri.value = discoveryUri;
    this._metricsService = _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_18__.default.getMetricsService(discoveryUri);
    this._sessionTelemetry = new _video_SessionTelemetry__WEBPACK_IMPORTED_MODULE_12__.default(_SDK__WEBPACK_IMPORTED_MODULE_7__.default.pageLoadTime, this._metricsService);
    this._publisherContext.publisherDisposables.add(this._sessionTelemetry);
    this._publisherContext.publisherDisposables.add(this._publisherContext.state.subscribe(function (state) {
      if (_this._publisherContext.clearFailureCountTimeout) {
        clearTimeout(_this._publisherContext.clearFailureCountTimeout);
      }
      if (!_this._publisherContext.failureCount.value) {
        return;
      }
      if (state !== _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.Publishing) {
        return;
      }
      _this._publisherContext.clearFailureCountTimeout = window.setTimeout(function () {
        _this._publisherContext.failureCount.value = 0;
      }, failureCountCleanUpIntervalInMilliseconds);
    }));
    var destroyStreamOnUnmount = function destroyStreamOnUnmount() {
      if (_this._publisherContext.stream.value && _this._publisherContext.endPoint.value) {
        var ignored = _this._publisherContext.endPoint.value.destroyStream(_this._publisherContext.stream.value, 'client:termination-on-window-unload');
      }
    };
    window.addEventListener('beforeunload', destroyStreamOnUnmount);
    this._publisherContext.publisherDisposables.add(new _lang_Disposable__WEBPACK_IMPORTED_MODULE_10__.default(function () {
      window.removeEventListener('beforeunload', destroyStreamOnUnmount);
    }));
    this.start();
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(Publisher, [{
    key: "token",
    get: function get() {
      return this._tokenContext.token.value;
    },
    set: function set(token) {
      this._publisherContext.disposables.dispose();
      this._tokenContext.token.value = token;
      this._tokenContext.tokenExpiring.value = false;
      var parsedToken = _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_11__.default.parseToken(this._tokenContext.token.value);
      var discoveryUri = (_edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_11__.default.getUri(parsedToken) || _SDK__WEBPACK_IMPORTED_MODULE_7__.default.discoveryUri.value).toString();
      _SDK__WEBPACK_IMPORTED_MODULE_7__.default.tenancy.value = _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_11__.default.getTenancy(parsedToken) || _SDK__WEBPACK_IMPORTED_MODULE_7__.default.tenancy.value;
      _discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_17__.default.uri.value = discoveryUri;
      this._metricsService = _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_18__.default.getMetricsService(discoveryUri);
      this.start();
    }
  }, {
    key: "peerConnection",
    get: function get() {
      return this._readOnlyPeerConnection;
    }
  }, {
    key: "state",
    get: function get() {
      return this._readOnlyState;
    }
  }, {
    key: "tokenExpiring",
    get: function get() {
      return this._readOnlyTokenExpiring;
    }
  }, {
    key: "authorized",
    get: function get() {
      return this._readOnlyAuthorized;
    }
  }, {
    key: "online",
    get: function get() {
      return this._readOnlyOnline;
    }
  }, {
    key: "loading",
    get: function get() {
      return this._readOnlyLoading;
    }
  }, {
    key: "publishing",
    get: function get() {
      return this._readOnlyPublishing;
    }
  }, {
    key: "standby",
    get: function get() {
      return this._readOnlyStandby;
    }
  }, {
    key: "stopped",
    get: function get() {
      return this._readOnlyStopped;
    }
  }, {
    key: "failureCount",
    get: function get() {
      return this._readOnlyFailureCount;
    }
  }, {
    key: "endPoint",
    get: function get() {
      return this._readOnlyEndPoint;
    }
  }, {
    key: "stream",
    get: function get() {
      return this._readOnlyStream;
    }
  }, {
    key: "streamId",
    get: function get() {
      return this._publisherContext.streamId;
    }
  }, {
    key: "rtcStatistics",
    get: function get() {
      return this._readOnlyRtcStatistics;
    }
  }, {
    key: "mediaStream",
    get: function get() {
      return this._readOnlyMediaStream;
    }
  }, {
    key: "stop",
    value: function () {
      var _stop = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(reason) {
        var _this2 = this;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new Promise(function (resolve) {
                if (!_this2._stateContext.isStarting.value) {
                  _this2.processStop(reason);
                  resolve();
                  return;
                }
                _this2._publisherContext.disposables.add(_this2._stateContext.isStarting.subscribe(function (isStarting) {
                  if (!isStarting) {
                    _this2.processStop(reason);
                    resolve();
                  }
                }));
              }));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function stop(_x) {
        return _stop.apply(this, arguments);
      }
      return stop;
    }()
  }, {
    key: "processStop",
    value: function processStop(reason) {
      this.cleanUpResources(reason);
      if (this._peerConnectionContext.peerConnection.value) {
        this._peerConnectionContext.peerConnection.value.close();
        this._peerConnectionContext.peerConnection.value = null;
      }
      this._publisherContext.state.value = _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.Stopped;
    }
  }, {
    key: "dispose",
    value: function () {
      var _dispose = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
        var _this3 = this;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.stop('client:channel-dispose').then(function () {
                _this3._publisherContext.publisherDisposables.dispose();
                _this3._stateContext.isDisposed = true;
              }));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function dispose() {
        return _dispose.apply(this, arguments);
      }
      return dispose;
    }()
  }, {
    key: "getUri",
    value: function getUri(token) {
      var parsedToken = _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_11__.default.parseToken(token);
      var url = _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_11__.default.getUri(parsedToken);
      if (url) {
        return url;
      }
      this._logger.info('Fall back to the default discover URI [%s]', _SDK__WEBPACK_IMPORTED_MODULE_7__.default.discoveryUri.value);
      return new URL(_SDK__WEBPACK_IMPORTED_MODULE_7__.default.discoveryUri.value);
    }
  }, {
    key: "start",
    value: function () {
      var _start = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3() {
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!this._stateContext.isDisposed) {
                _context3.next = 2;
                break;
              }
              throw new Error('Channel was already disposed');
            case 2:
              if (!this._stateContext.isStarting.value) {
                _context3.next = 5;
                break;
              }
              this._logger.info('Publisher is already starting, skipping start');
              return _context3.abrupt("return");
            case 5:
              this._stateContext.isStarting.value = true;
              return _context3.abrupt("return", this.processStart());
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function start() {
        return _start.apply(this, arguments);
      }
      return start;
    }()
  }, {
    key: "setMediaStream",
    value: function setMediaStream(mediaStream) {
      var _this4 = this;
      this._peerConnectionContext.mediaStream.value = mediaStream;
      if (this._peerConnectionContext.peerConnection.value) {
        mediaStream.getTracks().forEach(function (mediaTrack) {
          _this4._peerConnectionContext.peerConnection.value.getSenders().forEach(function (sender) {
            var _sender$track;
            if (mediaTrack.kind === (sender === null || sender === void 0 ? void 0 : (_sender$track = sender.track) === null || _sender$track === void 0 ? void 0 : _sender$track.kind) && mediaTrack.id !== sender.track.id) {
              sender.replaceTrack(mediaTrack);
            }
          });
        });
      }
    }
  }, {
    key: "processStart",
    value: function () {
      var _processStart = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee4() {
        var _this5 = this;
        var token, listenOnStreamSetup, uri, handleStreamFailureCallback, streamPublisher;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              token = this._tokenContext.token.value;
              listenOnStreamSetup = this._sessionTelemetry.listenOnStreamSetup();
              if (_edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_11__.default.isValidToken(token)) {
                _context4.next = 8;
                break;
              }
              this._logger.error('Failed to parse token [%s]', token);
              this._publisherContext.state.value = _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.Unauthorized;
              this._publisherContext.authorized.value = false;
              this._stateContext.isStarting.value = false;
              return _context4.abrupt("return");
            case 8:
              this.cleanUpResources('client:start');
              this._publisherContext.state.value = _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.Starting;
              this._publisherContext.loading.value = true;
              uri = this.getUri(token);
              handleStreamFailureCallback = function handleStreamFailureCallback() {
                return new Promise(function (resolve) {
                  // Need to set isStarting to false and call handleStreamFailure if stream monitors found an issue
                  _this5._stateContext.isStarting.value = false;
                  return resolve(_this5.handleStreamFailure());
                });
              };
              streamPublisher = new _RealTimePublisher__WEBPACK_IMPORTED_MODULE_19__.default(this._publisherContext, this._peerConnectionContext, handleStreamFailureCallback);
              return _context4.abrupt("return", streamPublisher.start(uri, token, listenOnStreamSetup).then(function () {
                _this5._publisherContext.loading.value = false;
              }).catch(function (e) {
                listenOnStreamSetup.fail();
                _this5._publisherContext.failureCount.value++;
                _this5._publisherContext.online.value = false;
                _this5.cleanUpResources('client:cleanup-after-failed-setup');
                _this5._publisherContext.state.value = _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.Error;
                _this5._logger.error('Failed to start publishing', e);
              }).finally(function () {
                _this5._stateContext.isStarting.value = false;
                if (_this5._publisherContext.state.value === _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.Publishing || !_SDK__WEBPACK_IMPORTED_MODULE_7__.default.automaticRetryOnFailure) {
                  return;
                }
                var timeoutId = setTimeout(function () {
                  var ignored = _this5.handleStreamFailure().catch(function (e) {
                    _this5._logger.error('Failed handling stream failure', e);
                  });
                }, _this5.getRetryInterval());
                _this5._publisherContext.disposables.add(new _lang_Disposable__WEBPACK_IMPORTED_MODULE_10__.default(function () {
                  clearTimeout(timeoutId);
                }));
              }));
            case 15:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function processStart() {
        return _processStart.apply(this, arguments);
      }
      return processStart;
    }()
  }, {
    key: "getRetryInterval",
    value: function getRetryInterval() {
      switch (this._publisherContext.state.value) {
        case _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.StandBy:
        case _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.Offline:
          return standbyPollingIntervalInMilliseconds;
        case _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.Error:
        case _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.Recovering:
        case _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.Unauthorized:
        case _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.GeoRestricted:
        case _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.GeoBlocked:
        case _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.Stopped:
        case _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.Starting:
        case _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.Publishing:
        case _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.Reconnecting:
        case _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.UnsupportedFeature:
          // First and second attempt fast, after that exponential with backoff interval
          return Math.min(maxBackoffIntervalInMilliseconds, Math.pow(backoffIntervalInMilliseconds, Math.max(0, this._publisherContext.failureCount.value - 1)));
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_9__.default)(this._publisherContext.state.value);
      }
    }
  }, {
    key: "handleStreamFailure",
    value: function () {
      var _handleStreamFailure = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee5() {
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.t0 = this._publisherContext.state.value;
              _context5.next = _context5.t0 === _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.Error ? 3 : _context5.t0 === _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.Reconnecting ? 3 : _context5.t0 === _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.StandBy ? 3 : _context5.t0 === _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.Offline ? 3 : _context5.t0 === _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.Recovering ? 3 : _context5.t0 === _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.Unauthorized ? 5 : _context5.t0 === _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.GeoRestricted ? 7 : _context5.t0 === _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.GeoBlocked ? 9 : _context5.t0 === _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.Stopped ? 11 : _context5.t0 === _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.Publishing ? 13 : _context5.t0 === _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.Starting ? 15 : _context5.t0 === _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default.UnsupportedFeature ? 17 : 19;
              break;
            case 3:
              this._logger.info('Retry start with initial state [%s] [%s]', this._publisherContext.state.value, _PublisherState__WEBPACK_IMPORTED_MODULE_8__.default[this._publisherContext.state.value]);
              return _context5.abrupt("break", 20);
            case 5:
              this._logger.info('Publisher is unauthorized, skipping retry of start. Please provide a new token and invoke start()');
              return _context5.abrupt("return");
            case 7:
              this._logger.info('Publisher is geo restricted, skipping retry of start. Please provide a new token and invoke start()');
              return _context5.abrupt("return");
            case 9:
              this._logger.info('Publisher is geo blocked, skipping retry of start. Please provide a new token and invoke start()');
              return _context5.abrupt("return");
            case 11:
              this._logger.info('Publisher is stopped, skipping retry of start.');
              return _context5.abrupt("return");
            case 13:
              this._logger.info('Publisher is publishing, skipping retry of start');
              return _context5.abrupt("return");
            case 15:
              this._logger.info('Publisher is already starting, skipping retry of start');
              return _context5.abrupt("return");
            case 17:
              this._logger.info('Publisher is stopped due to unsupported feature, skipping retry of start.');
              return _context5.abrupt("return");
            case 19:
              (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_9__.default)(this._publisherContext.state.value);
            case 20:
              return _context5.abrupt("return", this.start());
            case 21:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function handleStreamFailure() {
        return _handleStreamFailure.apply(this, arguments);
      }
      return handleStreamFailure;
    }()
  }, {
    key: "cleanUpResources",
    value: function cleanUpResources() {
      var _this6 = this;
      var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultStreamTerminationReason;
      this._publisherContext.disposables.dispose();
      var peerConnection = this._peerConnectionContext.peerConnection.value;
      if (peerConnection) {
        this._peerConnectionContext.peerConnection.value = null;
        peerConnection.close();
      }
      this._publisherContext.publishing.value = false;
      this._publisherContext.stopped.value = true;
      this._publisherContext.standby.value = false;
      if (this._publisherContext.stream.value && this._publisherContext.endPoint.value) {
        var ignored = this._publisherContext.endPoint.value.destroyStream(this._publisherContext.stream.value, reason).then(function (_ref) {
          var status = _ref.status;
          if (status !== 'ok') {
            _this6._logger.warn('[%s] Failed to destroy stream with reason [%s]', _this6.streamId, status);
            return;
          }
          _this6._logger.info('[%s] Destroyed stream with reason [%s]', _this6.streamId, status);
        }).catch(function (e) {
          _this6._logger.error('[%s] Failed to destroy stream', _this6.streamId, e);
        });
      }
      this._publisherContext.stream.value = null;
      this._publisherContext.endPoint.value = null;
      this._peerConnectionContext.peerConnectionReconnectAttempts = 0;
    }
  }]);
  return Publisher;
}();


/***/ }),

/***/ "./src/sdk/publish/PublisherContext.ts":
/*!*********************************************!*
  !*** ./src/sdk/publish/PublisherContext.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ PublisherContext
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rx/Subject */ "./src/rx/Subject.ts");
/* harmony import */ var _PublisherState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PublisherState */ "./src/sdk/publish/PublisherState.ts");
/* harmony import */ var _lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lang/assertUnreachable */ "./src/lang/assertUnreachable.ts");
/* harmony import */ var _lang_DisposableList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lang/DisposableList */ "./src/lang/DisposableList.ts");
/* harmony import */ var _lang_Strings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lang/Strings */ "./src/lang/Strings.ts");



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */





var PublisherContext = /*#__PURE__*/function () {
  function PublisherContext(name) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, PublisherContext);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "publisherInitialization", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "disposables", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "publisherDisposables", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "state", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "authorized", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "online", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "loading", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "publishing", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "standby", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "stopped", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "failureCount", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "endPoint", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "stream", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "rtcStatistics", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "clearFailureCountTimeout", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "name", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "rtcAudioStatistic", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "rtcVideoStatistic", void 0);
    this.disposables = new _lang_DisposableList__WEBPACK_IMPORTED_MODULE_6__.default();
    this.publisherDisposables = new _lang_DisposableList__WEBPACK_IMPORTED_MODULE_6__.default();
    this.publisherInitialization = new Date();
    this.state = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__.default(_PublisherState__WEBPACK_IMPORTED_MODULE_4__.default.Starting);
    this.authorized = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__.default(true);
    this.online = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__.default(true);
    this.loading = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__.default(false);
    this.publishing = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__.default(false);
    this.standby = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__.default(false);
    this.stopped = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__.default(false);
    this.failureCount = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__.default(0);
    this.endPoint = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__.default(null);
    this.stream = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__.default(null);
    this.rtcStatistics = new _rx_Subject__WEBPACK_IMPORTED_MODULE_3__.default(null);
    this.name = name && name.length ? name : this.generateScreenName();
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(PublisherContext, [{
    key: "streamId",
    get: function get() {
      var stream = this.stream.value;
      if (!stream) {
        return '-';
      }
      return stream.streamId;
    }
  }, {
    key: "applyStatus",
    value: function applyStatus(status) {
      switch (status) {
        case 'ok':
          break;
        case 'unauthorized':
        case 'geo-restricted':
        case 'geo-blocked':
          this.authorized.value = false;

        // eslint-disable-next-line no-fallthrough
        case 'no-stream':
        case 'not-found':
          this.failureCount.value = 0;
          this.publishing.value = false;
          this.standby.value = true;
          this.stopped.value = false;
          this.stream.value = null;
          return;
        default:
          this.failureCount.value++;
          this.publishing.value = false;
          this.standby.value = true;
          this.stopped.value = false;
          this.stream.value = null;
          this.state.value = _PublisherState__WEBPACK_IMPORTED_MODULE_4__.default.Error;
          return;
      }
    }
  }, {
    key: "mapPublishStatusToPublisherStatus",
    value: function mapPublishStatusToPublisherStatus(status) {
      switch (status) {
        case 'ok':
          return _PublisherState__WEBPACK_IMPORTED_MODULE_4__.default.Starting;
        case 'no-stream':
        case 'not-found':
          return _PublisherState__WEBPACK_IMPORTED_MODULE_4__.default.StandBy;
        case 'geo-restricted':
          return _PublisherState__WEBPACK_IMPORTED_MODULE_4__.default.GeoRestricted;
        case 'geo-blocked':
          return _PublisherState__WEBPACK_IMPORTED_MODULE_4__.default.GeoBlocked;
        case 'unauthorized':
          return _PublisherState__WEBPACK_IMPORTED_MODULE_4__.default.Unauthorized;
        case 'capacity':
        case 'rate-limited':
        case 'timeout':
          return _PublisherState__WEBPACK_IMPORTED_MODULE_4__.default.Recovering;
        case 'failed':
          return _PublisherState__WEBPACK_IMPORTED_MODULE_4__.default.Error;
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_5__.default)(status);
      }
    }
  }, {
    key: "generateScreenName",
    value: function generateScreenName() {
      return _lang_Strings__WEBPACK_IMPORTED_MODULE_7__.default.random(12);
    }
  }]);
  return PublisherContext;
}();


/***/ }),

/***/ "./src/sdk/publish/PublisherState.ts":
/*!*******************************************!*
  !*** ./src/sdk/publish/PublisherState.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__) => {

"use strict";
/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var PublisherState;
(function (PublisherState) {
  PublisherState[PublisherState["Offline"] = 1] = "Offline";
  PublisherState[PublisherState["Starting"] = 2] = "Starting";
  PublisherState[PublisherState["Publishing"] = 3] = "Publishing";
  PublisherState[PublisherState["Recovering"] = 4] = "Recovering";
  PublisherState[PublisherState["Reconnecting"] = 5] = "Reconnecting";
  PublisherState[PublisherState["StandBy"] = 6] = "StandBy";
  PublisherState[PublisherState["Stopped"] = 7] = "Stopped";
  PublisherState[PublisherState["Unauthorized"] = 8] = "Unauthorized";
  PublisherState[PublisherState["GeoRestricted"] = 9] = "GeoRestricted";
  PublisherState[PublisherState["GeoBlocked"] = 10] = "GeoBlocked";
  PublisherState[PublisherState["UnsupportedFeature"] = 11] = "UnsupportedFeature";
  PublisherState[PublisherState["Error"] = 12] = "Error";
})(PublisherState || (PublisherState = {}));
/* harmony default export */ __webpack_exports__["default"] = (PublisherState);

/***/ }),

/***/ "./src/sdk/publish/Publishers.ts":
/*!***************************************!*
  !*** ./src/sdk/publish/Publishers.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Publishers
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SDK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _Publisher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Publisher */ "./src/sdk/publish/Publisher.ts");


/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */



var Publishers = /*#__PURE__*/function () {
  function Publishers() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, Publishers);
    throw new Error('Publishers is a static class that may not be instantiated');
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(Publishers, null, [{
    key: "createPublisher",
    value: function createPublisher(options) {
      if (!_SDK__WEBPACK_IMPORTED_MODULE_2__.default.initialized.value) {
        throw new Error('SDK is not loaded.');
      }
      return new _Publisher__WEBPACK_IMPORTED_MODULE_3__.default(options.mediaStream, options.token, options.name);
    }
  }]);
  return Publishers;
}();


/***/ }),

/***/ "./src/sdk/publish/RealTimePublisher.ts":
/*!**********************************************!*
  !*** ./src/sdk/publish/RealTimePublisher.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ RealTimePublisher
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SDK__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _rtc_PeerConnectionService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../rtc/PeerConnectionService */ "./src/rtc/PeerConnectionService.ts");
/* harmony import */ var _discovery_Discovery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../discovery/Discovery */ "./src/sdk/discovery/Discovery.ts");
/* harmony import */ var _feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../feature/FeatureEnablement */ "./src/sdk/feature/FeatureEnablement.ts");
/* harmony import */ var _PublisherState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PublisherState */ "./src/sdk/publish/PublisherState.ts");
/* harmony import */ var _lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lang/assertUnreachable */ "./src/lang/assertUnreachable.ts");
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _rtc_RtcPublishMonitor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../rtc/RtcPublishMonitor */ "./src/rtc/RtcPublishMonitor.ts");
/* harmony import */ var _time_Duration__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../time/Duration */ "./src/time/Duration.ts");
/* harmony import */ var _rtc_RtcConfigurationManager__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../rtc/RtcConfigurationManager */ "./src/rtc/RtcConfigurationManager.ts");
/* provided dependency */ var Promise = __webpack_require__(/*! ./src/promise/Promise */ "./src/promise/Promise.ts")["default"];






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */











var iceCandidateAccumulationInterval = 100;
var RealTimePublisher = /*#__PURE__*/function () {
  function RealTimePublisher(publisherContext, peerConnectionContext, handleStreamFailure) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default()(this, RealTimePublisher);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_12__.default.getLogger('RealTimePublisher'));
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_publisherContext", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_peerConnectionContext", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_handleStreamFailure", void 0);
    this._publisherContext = publisherContext;
    this._peerConnectionContext = peerConnectionContext;
    this._handleStreamFailure = handleStreamFailure;
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default()(RealTimePublisher, [{
    key: "start",
    value: function start(uri, token, listenOnStreamSetup) {
      var _this = this;
      return Promise.all([_discovery_Discovery__WEBPACK_IMPORTED_MODULE_8__.default.discoverClosestEndPointWithCaching(uri), _rtc_PeerConnectionService__WEBPACK_IMPORTED_MODULE_7__.default.createPeerConnectionOffer('sendonly')]).then(function (_ref) {
        var _ref2 = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 2),
          endPoint = _ref2[0],
          _ref2$ = _ref2[1],
          localOffer = _ref2$.localOffer,
          peerConnection = _ref2$.peerConnection;
        _this._publisherContext.online.value = true;
        _this._publisherContext.endPoint.value = endPoint;
        _this._logger.info('Connecting to [%s]', endPoint.toString());
        _this._logger.info('Local offer:\n' + localOffer.sdp);
        if (_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_9__.default.clientOfferDisabled || !peerConnection.supportsSetConfiguration || !peerConnection.supportsGetConfiguration) {
          peerConnection.close();
          peerConnection = null;
          localOffer = null;
        }
        _this._peerConnectionContext.peerConnection.value = peerConnection;
        return endPoint.publish(_this._publisherContext.name, token, localOffer, _this._publisherContext.failureCount.value);
      }).then(function (_ref3) {
        var status = _ref3.status,
          stream = _ref3.stream,
          rtcConfiguration = _ref3.rtcConfiguration,
          setRemoteDescriptionResponse = _ref3.setRemoteDescriptionResponse,
          createOfferDescriptionResponse = _ref3.createOfferDescriptionResponse,
          createAnswerDescriptionResponse = _ref3.createAnswerDescriptionResponse;
        _this._publisherContext.stream.value = stream;
        _this._logger.debug('[%s] Publish completed [%s] [%j] [%j] [%j] [%j]', _this._publisherContext.streamId, status, rtcConfiguration, setRemoteDescriptionResponse, createOfferDescriptionResponse, createAnswerDescriptionResponse);
        _this._publisherContext.state.value = _this._publisherContext.mapPublishStatusToPublisherStatus(status);
        _this._publisherContext.applyStatus(status);
        if (status !== 'ok') {
          return;
        }
        return _this.applyRtcConfiguration(_this._peerConnectionContext.peerConnection.value, rtcConfiguration).then(function (peerConnection) {
          var submitCandidatesTimeout;
          var cancelDiscovery = false;
          var discoveryCompleted = false;
          var candidates = [];
          _this._peerConnectionContext.peerConnection.value = peerConnection;
          peerConnection.addStream(_this._peerConnectionContext.mediaStream.value);
          peerConnection.onicecandidate = function (e) {
            if (_this._publisherContext.stream.value !== stream) {
              return;
            }
            if (_this._peerConnectionContext.peerConnection.value !== peerConnection) {
              return;
            }
            if (cancelDiscovery) {
              return;
            }
            if (!_SDK__WEBPACK_IMPORTED_MODULE_6__.default.sendLocalCandidates.value) {
              return;
            }
            if (e.candidate && e.candidate.candidate) {
              candidates.push(e.candidate);
            } else {
              discoveryCompleted = true;
            }
            if (!submitCandidatesTimeout) {
              submitCandidatesTimeout = setTimeout(function () {
                if (_this._publisherContext.stream.value !== stream) {
                  return;
                }
                if (cancelDiscovery) {
                  return;
                }
                var ignored = _this._publisherContext.endPoint.value.addIceCandidates(stream, candidates, discoveryCompleted).then(function (_ref4) {
                  var status = _ref4.status,
                    options = _ref4.options;
                  if (status !== 'ok') {
                    _this._logger.warn('[%s] Failed to add ICE candidates with reason [%s]', _this._publisherContext.streamId, status);
                    return;
                  }
                  if (options.includes('cancel')) {
                    cancelDiscovery = true;
                  }
                  _this._logger.info('[%s] Added ICE candidates with reason [%s] and options [%s]', _this._publisherContext.streamId, status, options);
                }).catch(function (e) {
                  _this._logger.error('[%s] Failed to add ICE candidates', _this._publisherContext.streamId, e);
                });
              }, iceCandidateAccumulationInterval);
            }
          };
          peerConnection.oniceconnectionstatechange = function () {
            if (_this._publisherContext.stream.value !== stream) {
              return;
            }
            if (_this._peerConnectionContext.peerConnection.value !== peerConnection) {
              return;
            }
            var retryCallback = function retryCallback() {
              // If we stop normally the peer connection is unregistered first.
              // Thus anytime we see a closed peer connection that is still valid, it is an error.
              _this._publisherContext.state.value = _PublisherState__WEBPACK_IMPORTED_MODULE_10__.default.Error;
              _this._publisherContext.publishing.value = false;
              _this._publisherContext.loading.value = true;
              var ignored = _this._handleStreamFailure().catch(function (e) {
                _this._logger.error('[%s] Failed handling stream failure after peer connection stopped with state [%s]', _this._publisherContext.streamId, peerConnection.iceConnectionState, e);
              });
            };
            switch (peerConnection.iceConnectionState) {
              case 'checking':
              case 'completed':
              case 'connected':
              case 'new':
                return;
              case 'disconnected':
              case 'failed':
                if (navigator.onLine) {
                  _this._logger.info('[%s] ICE connection state changed to [%s], trying to reconnect', _this._publisherContext.streamId, peerConnection.iceConnectionState);
                  _this.reconnectPeerConnection(peerConnection, retryCallback);
                }
                return;
              case 'closed':
                _this._logger.info('[%s] ICE connection state changed to [%s], retrying to connect', _this._publisherContext.streamId, peerConnection.iceConnectionState);
                retryCallback();
                return;
              default:
                (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_11__.default)(peerConnection.iceConnectionState);
            }
          };
          return new Promise(function (resolve) {
            resolve();
          }).then(function () {
            if (!setRemoteDescriptionResponse) {
              return;
            }
            _this._logger.info('[%s] Set local SDP offer [%s]', _this._publisherContext.streamId, setRemoteDescriptionResponse.sessionDescription.sdp);
            return peerConnection.setLocalDescription(setRemoteDescriptionResponse.sessionDescription).catch(function (e) {
              _this._logger.info('[%s] Failed to set local description [%j] with message [%s]', _this._publisherContext.streamId, setRemoteDescriptionResponse.sessionDescription, e.message);
              throw e;
            });
          }).then(function () {
            if (!createAnswerDescriptionResponse) {
              return;
            }
            _this._logger.info('[%s] Set remote SDP answer [%s]', _this._publisherContext.streamId, createAnswerDescriptionResponse.sessionDescription.sdp);
            return peerConnection.setRemoteDescription(createAnswerDescriptionResponse.sessionDescription).catch(function (e) {
              _this._logger.info('[%s] Failed to set remote description [%j] with message [%s]', _this._publisherContext.streamId, createAnswerDescriptionResponse.sessionDescription, e.message);
              throw e;
            });
          }).then(function () {
            if (!createOfferDescriptionResponse) {
              return;
            }
            _this._logger.info('[%s] Set remote SDP offer [%s]', _this._publisherContext.streamId, createOfferDescriptionResponse.sessionDescription.sdp);
            return peerConnection.setRemoteDescription(createOfferDescriptionResponse.sessionDescription).catch(function (e) {
              _this._logger.info('[%s] Failed to set remote description [%j] with message [%s]', _this._publisherContext.streamId, createAnswerDescriptionResponse.sessionDescription, e.message);
              throw e;
            }).then(function () {
              return peerConnection.createAnswer({
                offerToReceiveAudio: false,
                offerToReceiveVideo: false
              });
            }).then(function (answer) {
              _this._logger.info('[%s] Set local SDP answer [%s]', _this._publisherContext.streamId, answer.sdp);
              return _this._publisherContext.endPoint.value.setRemoteDescription(stream, answer);
            }).then(function (_ref5) {
              var status = _ref5.status,
                sessionDescription = _ref5.sessionDescription;
              _this._publisherContext.state.value = _this.mapSetRemoteDescriptionStatusToPublisherStatus(status);
              if (status !== 'ok') {
                _this._publisherContext.publishing.value = false;
                _this._publisherContext.standby.value = true;
                _this._publisherContext.stopped.value = false;
                return;
              }
              _this._logger.info('[%s] Set local SDP [%s]', _this._publisherContext.streamId, sessionDescription.sdp);
              return peerConnection.setLocalDescription(sessionDescription).catch(function (e) {
                _this._logger.info('[%s] Failed to set local description [%j] with message [%s]', _this._publisherContext.streamId, sessionDescription, e.message);
                throw e;
              });
            });
          }).then(function () {
            listenOnStreamSetup.success(_this._publisherContext.streamId);
            _this._publisherContext.state.value = _PublisherState__WEBPACK_IMPORTED_MODULE_10__.default.Publishing;
            _this._publisherContext.publishing.value = true;
            var rtcPublishMonitor = new _rtc_RtcPublishMonitor__WEBPACK_IMPORTED_MODULE_13__.default(peerConnection, _this._peerConnectionContext.mediaStream.value, _this._publisherContext.endPoint.value.roundTripTime / 4);
            var ignored = rtcPublishMonitor.rtcStatistic.subscribe(function (statistics) {
              _this._publisherContext.rtcStatistics.value = statistics;
              if (!_this._publisherContext.rtcVideoStatistic && !_this._publisherContext.rtcAudioStatistic) {
                _this._publisherContext.rtcAudioStatistic = statistics.audio;
                _this._publisherContext.rtcVideoStatistic = statistics.video;
                return;
              }
              var audioTrackFailed = false;
              var videoTrackFailed = false;
              if (statistics.audio) {
                if (_this._publisherContext.rtcAudioStatistic && _this._publisherContext.rtcAudioStatistic.timestamp !== statistics.audio.timestamp) {
                  audioTrackFailed = _this._publisherContext.rtcAudioStatistic && _this._publisherContext.rtcAudioStatistic.bytesSent === statistics.audio.bytesSent;
                  if (audioTrackFailed && navigator.onLine) {
                    _this._logger.info('[%s] Audio track failed with last bytesSent [%s] is equal to previous bytesSent [%s] within [%s]', _this._publisherContext.streamId, statistics.audio.bytesSent, _this._publisherContext.rtcAudioStatistic.bytesSent, new _time_Duration__WEBPACK_IMPORTED_MODULE_14__.default(statistics.audio.timestamp - _this._publisherContext.rtcAudioStatistic.timestamp).toIsoString());
                  }
                  _this._publisherContext.rtcAudioStatistic = statistics.audio;
                }
              }
              if (statistics.video) {
                if (_this._publisherContext.rtcVideoStatistic && _this._publisherContext.rtcVideoStatistic.timestamp !== statistics.video.timestamp) {
                  videoTrackFailed = _this._publisherContext.rtcVideoStatistic && _this._publisherContext.rtcVideoStatistic.bytesSent === statistics.video.bytesSent;
                  if (videoTrackFailed && navigator.onLine) {
                    _this._logger.info('[%s] Video track failed with last bytesSent [%s] is equal to previous bytesSent [%s] within [%s]', _this._publisherContext.streamId, statistics.video.bytesSent, _this._publisherContext.rtcVideoStatistic.bytesSent, new _time_Duration__WEBPACK_IMPORTED_MODULE_14__.default(statistics.video.timestamp - _this._publisherContext.rtcVideoStatistic.timestamp).toIsoString());
                  }
                  _this._publisherContext.rtcVideoStatistic = statistics.video;
                }
              }
              if ((videoTrackFailed || audioTrackFailed) && navigator.onLine) {
                var retryCallback = function retryCallback() {
                  _this._publisherContext.state.value = _PublisherState__WEBPACK_IMPORTED_MODULE_10__.default.Error;
                  _this._publisherContext.loading.value = true;
                  rtcPublishMonitor.dispose();
                  var ignored = _this._handleStreamFailure().catch(function (e) {
                    _this._logger.error('[%s] Failed handling stream failure after track stopped with state [%s]', _this._publisherContext.streamId, peerConnection.iceConnectionState, e);
                  });
                };
                _this.reconnectPeerConnection(peerConnection, retryCallback);
              } else {
                _this._peerConnectionContext.peerConnectionReconnectAttempts = 0;
              }
            });
            return Promise.resolve();
          });
        });
      });
    }
  }, {
    key: "applyRtcConfiguration",
    value: function () {
      var _applyRtcConfiguration = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee(optionalPeerConnection, rtcConfiguration) {
        var newRtcConfiguration;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (optionalPeerConnection) {
                _context.next = 3;
                break;
              }
              rtcConfiguration = _rtc_RtcConfigurationManager__WEBPACK_IMPORTED_MODULE_15__.default.truncateIceServers(rtcConfiguration);
              return _context.abrupt("return", _SDK__WEBPACK_IMPORTED_MODULE_6__.default.peerConnectionFactory.value.createPeerConnection(rtcConfiguration));
            case 3:
              newRtcConfiguration = _objectSpread(_objectSpread({}, optionalPeerConnection.getConfiguration()), rtcConfiguration);
              optionalPeerConnection.setConfiguration(newRtcConfiguration);
              return _context.abrupt("return", optionalPeerConnection);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function applyRtcConfiguration(_x, _x2) {
        return _applyRtcConfiguration.apply(this, arguments);
      }
      return applyRtcConfiguration;
    }()
  }, {
    key: "reconnectPeerConnection",
    value: function reconnectPeerConnection(peerConnection, retryCallback) {
      var _this2 = this;
      if (peerConnection.iceConnectionState === 'closed') {
        return;
      }
      this._publisherContext.state.value = _PublisherState__WEBPACK_IMPORTED_MODULE_10__.default.Reconnecting;
      if (this._peerConnectionContext.peerConnectionReconnectAttempts < _SDK__WEBPACK_IMPORTED_MODULE_6__.default.maximalNumberOfPeerConnectionReconnectAttempts || !_SDK__WEBPACK_IMPORTED_MODULE_6__.default.automaticallyReconnectPeerConnection) {
        this._peerConnectionContext.peerConnectionReconnectAttempts++;
        if (_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_9__.default.clientOfferDisabled || !peerConnection.supportsSetConfiguration || !peerConnection.supportsGetConfiguration || this._publisherContext.failureCount.value) {
          return;
        }
        this._logger.info('Reconnecting peer connection by restarting ICE');
        var localOffer = peerConnection.currentLocalDescription;
        var ignored = peerConnection.createOffer({
          iceRestart: true
        }).then(function (offer) {
          return peerConnection.setLocalDescription(offer).then(function () {
            return peerConnection.setLocalDescription(localOffer).then(function () {
              _this2._publisherContext.state.value = _PublisherState__WEBPACK_IMPORTED_MODULE_10__.default.Publishing;
            });
          });
        }).catch(function (e) {
          _this2._logger.error('Failed to reconnect peer connection', e);
          _this2._peerConnectionContext.peerConnectionReconnectAttempts = 0;
          retryCallback();
        });
        return;
      }
      this._logger.info('Failed to reconnect peer connection after [%s] attempts, performing full recovery', this._peerConnectionContext.peerConnectionReconnectAttempts);
      this._peerConnectionContext.peerConnectionReconnectAttempts = 0;
      retryCallback();
    }
  }, {
    key: "mapSetRemoteDescriptionStatusToPublisherStatus",
    value: function mapSetRemoteDescriptionStatusToPublisherStatus(status) {
      switch (status) {
        case 'ok':
          return _PublisherState__WEBPACK_IMPORTED_MODULE_10__.default.Starting;
        case 'unauthorized':
          return _PublisherState__WEBPACK_IMPORTED_MODULE_10__.default.Unauthorized;
        case 'not-found':
        case 'capacity':
        case 'rate-limited':
        case 'timeout':
          return _PublisherState__WEBPACK_IMPORTED_MODULE_10__.default.Recovering;
        case 'failed':
          return _PublisherState__WEBPACK_IMPORTED_MODULE_10__.default.Error;
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_11__.default)(status);
      }
    }
  }]);
  return RealTimePublisher;
}();


/***/ }),

/***/ "./src/sdk/publish/index.ts":
/*!**********************************!*
  !*** ./src/sdk/publish/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SDK": () => /* reexport safe */ _SDK__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "Publishers": () => /* reexport safe */ _Publishers__WEBPACK_IMPORTED_MODULE_1__.default,
/* harmony export */   "PublisherState": () => /* reexport safe */ _PublisherState__WEBPACK_IMPORTED_MODULE_2__.default
/* harmony export */ });
/* harmony import */ var _SDK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _Publishers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Publishers */ "./src/sdk/publish/Publishers.ts");
/* harmony import */ var _PublisherState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PublisherState */ "./src/sdk/publish/PublisherState.ts");
/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */





/* harmony default export */ __webpack_exports__["default"] = ({
  SDK: _SDK__WEBPACK_IMPORTED_MODULE_0__.default,
  Publishers: _Publishers__WEBPACK_IMPORTED_MODULE_1__.default,
  PublisherState: _PublisherState__WEBPACK_IMPORTED_MODULE_2__.default
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


/***/ }),

/***/ "./src/time/Duration.ts":
/*!******************************!*
  !*** ./src/time/Duration.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Durations
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
var Durations = /*#__PURE__*/function () {
  function Durations() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, Durations);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_duration", void 0);
    this._duration = duration;
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(Durations, [{
    key: "toIsoString",
    value: function toIsoString() {
      if (this._duration === 0) {
        return 'P0S';
      }
      var isNegative = this._duration < 0;
      var duration = isNegative ? Math.abs(this._duration) : this._duration;
      var offset = Math.floor(duration);
      var milliseconds = offset % 1000;
      offset = Math.floor(offset / 1000);
      var seconds = offset % 60;
      offset = Math.floor(offset / 60);
      var minutes = offset % 60;
      offset = Math.floor(offset / 60);
      var hours = offset % 24;
      var parts = ['PT'];
      if (isNegative) {
        parts.unshift('-');
      }
      if (hours) {
        parts.push(hours + 'H');
      }
      if (minutes) {
        parts.push(minutes + 'M');
      }
      if (seconds || milliseconds) {
        parts.push(String(seconds));
        if (milliseconds) {
          parts.push('.' + this.padStart(milliseconds.toString(), 3, '0'));
        }
        parts.push('S');
      }
      return parts.join('');
    }
  }, {
    key: "padStart",
    value: function padStart(item, targetLength, padString) {
      targetLength = targetLength >> 0;
      padString = String(typeof padString !== 'undefined' ? padString : ' ');
      if (item.length > targetLength) {
        return item;
      }
      targetLength = targetLength - item.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length);
      }
      return padString.slice(0, targetLength) + item;
    }
  }]);
  return Durations;
}();


/***/ }),

/***/ "./src/video/SessionTelemetry.ts":
/*!***************************************!*
  !*** ./src/video/SessionTelemetry.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ SessionTelemetry
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dom_StreamSetupListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/StreamSetupListener */ "./src/dom/StreamSetupListener.ts");
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _dom_NetworkMonitor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom/NetworkMonitor */ "./src/dom/NetworkMonitor.ts");
/* harmony import */ var _sdk_SDK__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sdk/SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../metrics/MetricsType */ "./src/metrics/MetricsType.ts");
/* harmony import */ var _time_Duration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../time/Duration */ "./src/time/Duration.ts");
/* harmony import */ var _lang_DisposableList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lang/DisposableList */ "./src/lang/DisposableList.ts");



/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */







var SessionTelemetry = /*#__PURE__*/function () {
  function SessionTelemetry(pageLoadTime, metricsService) {
    var _this = this;
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, SessionTelemetry);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_4__.default.getLogger('SessionTelemetry'));
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_metricsService", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_applicationActivityMonitor", _sdk_SDK__WEBPACK_IMPORTED_MODULE_6__.default.applicationActivityMonitor);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_networkMonitor", new _dom_NetworkMonitor__WEBPACK_IMPORTED_MODULE_5__.default());
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_pageLoadTime", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_disposables", new _lang_DisposableList__WEBPACK_IMPORTED_MODULE_9__.default());
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(this, "_lastNetworkStatistics", {});
    this._pageLoadTime = pageLoadTime;
    this._disposables.add(this._networkMonitor);
    this._metricsService = metricsService;
    if (!this._networkMonitor.isSupported) {
      return;
    }
    this._disposables.add(this._applicationActivityMonitor.isForeground.subscribe(function (isForeground) {
      _this.recordForegroundChange(isForeground);
    }));
    this._disposables.add(this._networkMonitor.rtt.subscribe(function (value) {
      _this.recordNetworkRTTUpdate(value);
    }));
    this._disposables.add(this._networkMonitor.effectiveType.subscribe(function (value) {
      _this.recordNetworkTypeChangeUpdate(value);
    }));
    this._disposables.add(this._networkMonitor.downlinkThroughputCapacity.subscribe(function (value) {
      _this.recordNetworkDownlinkThroughputCapacityUpdate(value);
    }));
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(SessionTelemetry, [{
    key: "listenOnStreamSetup",
    value: function listenOnStreamSetup() {
      return new _dom_StreamSetupListener__WEBPACK_IMPORTED_MODULE_3__.StreamSetupListener(this._pageLoadTime);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._disposables.dispose();
    }
  }, {
    key: "recordForegroundChange",
    value: function recordForegroundChange(isForeground) {
      var now = Date.now();
      var timeSinceLastChange = this._applicationActivityMonitor.getTimeSinceLastChange();
      this._metricsService.push({
        metricType: isForeground ? _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_7__.default.ApplicationForeground : _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_7__.default.ApplicationBackground,
        runtime: (now - this._pageLoadTime) / 1000,
        value: {
          uint64: timeSinceLastChange
        }
      });
      this._logger.info('Application has gone into the [%s] after [%s] ms', isForeground ? 'foreground' : 'background', new _time_Duration__WEBPACK_IMPORTED_MODULE_8__.default(timeSinceLastChange).toIsoString());
    }
  }, {
    key: "recordNetworkRTTUpdate",
    value: function recordNetworkRTTUpdate(newRTT) {
      var now = Date.now();
      var oldRtt = this._lastNetworkStatistics.rtt;
      this._lastNetworkStatistics.rtt = newRTT;
      this._metricsService.push({
        metricType: _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_7__.default.RoundTripTime,
        runtime: (now - this._pageLoadTime) / 1000,
        value: {
          uint64: newRTT
        },
        previousValue: oldRtt ? {
          uint64: oldRtt
        } : undefined,
        resource: 'navigator'
      });
      this._logger.info('[%s] Network RTT changed to [%s] from [%s]', new _time_Duration__WEBPACK_IMPORTED_MODULE_8__.default(now - this._pageLoadTime).toIsoString(), newRTT, oldRtt);
    }
  }, {
    key: "recordNetworkTypeChangeUpdate",
    value: function recordNetworkTypeChangeUpdate(newNetworkType) {
      var now = Date.now();
      var oldNetworkType = this._lastNetworkStatistics.effectiveType;
      this._lastNetworkStatistics.effectiveType = newNetworkType;
      this._metricsService.push({
        metricType: _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_7__.default.NetworkType,
        runtime: (now - this._pageLoadTime) / 1000,
        value: {
          string: newNetworkType
        },
        previousValue: oldNetworkType ? {
          string: oldNetworkType
        } : undefined
      });
      this._logger.info('[%s] Network effective type has changed to [%s] from [%s]', new _time_Duration__WEBPACK_IMPORTED_MODULE_8__.default(now - this._pageLoadTime).toIsoString(), newNetworkType, oldNetworkType);
    }
  }, {
    key: "recordNetworkDownlinkThroughputCapacityUpdate",
    value: function recordNetworkDownlinkThroughputCapacityUpdate(newCapacity) {
      var now = Date.now();
      var oldCapacity = this._lastNetworkStatistics.downlinkThroughputCapacity;
      this._lastNetworkStatistics.downlinkThroughputCapacity = newCapacity;
      this._metricsService.push({
        metricType: _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_7__.default.DownlinkThroughputCapacity,
        runtime: (now - this._pageLoadTime) / 1000,
        value: {
          float: newCapacity
        },
        previousValue: oldCapacity ? {
          float: oldCapacity
        } : undefined
      });
      this._logger.info('[%s] Network downlink throughput capacity changed to [%s] from [%s]', new _time_Duration__WEBPACK_IMPORTED_MODULE_8__.default(now - this._pageLoadTime).toIsoString(), newCapacity, oldCapacity);
    }
  }]);
  return SessionTelemetry;
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
/******/ 	return __webpack_require__("./src/sdk/publish/index.ts");
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waGVuaXgvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9waGVuaXgvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9waGVuaXgvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3JlZ2VuZXJhdG9yUnVudGltZS5qcyIsIndlYnBhY2s6Ly9waGVuaXgvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9waGVuaXgvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvUHJpbWl0aXZlLmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvUHJvcGVydHlLZXkuanMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL3BoZW5peC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvY29udGV4dC9QZWVyQ29ubmVjdGlvbkNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL2NvbnRleHQvU3RhdGVDb250ZXh0LnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9jb250ZXh0L1Rva2VuQ29udGV4dC50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvZG9tL0FwcGxpY2F0aW9uQWN0aXZpdHlNb25pdG9yLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9kb20vQnJvd3NlckRldGVjdG9yLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9kb20vUGxhaW5Db25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9kb20vTmV0d29ya01vbml0b3IudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL2RvbS9Qcml2YWN5TW9kZS50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvZG9tL1N0cmVhbVNldHVwTGlzdGVuZXIudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL2xhbmcvRGlzcG9zYWJsZS50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvbGFuZy9EaXNwb3NhYmxlTGlzdC50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvbGFuZy9TdHJpbmdzLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9sYW5nL2Fzc2VydFVucmVhY2hhYmxlLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9sb2dnZXIvQXBwZW5kZXJzLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9sb2dnZXIvQ29uc29sZUFwcGVuZGVyLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9sb2dnZXIvTG9nZ2VyLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9sb2dnZXIvTG9nZ2VyRGVmYXVsdHMudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL2xvZ2dlci9Mb2dnZXJGYWN0b3J5LnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9sb2dnZXIvTG9nZ2luZ0xldmVsTWFwcGluZy50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvbG9nZ2VyL0xvZ2dpbmdUaHJlc2hvbGQudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL21ldHJpY3MvTWV0cmljVHlwZS50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvbWV0cmljcy9NZXRyaWNzQ29uZmlndXJhdGlvbi50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvbWV0cmljcy9NZXRyaWNzRmFjdG9yeS50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvbWV0cmljcy9NZXRyaWNzU2VydmljZS50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvbWV0cmljcy9NZXRyaWNzVHlwZS50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvbWV0cmljcy9UZWxlbWV0cmljTGV2ZWxNYXBwaW5nLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9tZXRyaWNzL1RlbGVtZXRyeURlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL3Byb21pc2UvUHJvbWlzZS50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvcHJvbWlzZS9Qcm9taXNlSGFuZGxlci50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvcnRjL1BlZXJDb25uZWN0aW9uU2VydmljZS50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvcnRjL1J0Y0NvbmZpZ3VyYXRpb25NYW5hZ2VyLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9ydGMvUnRjUHVibGlzaE1vbml0b3IudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL3J0Yy9TZHBQYXJzZXIudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL3J0Yy9WYW5pbGxhUGVlckNvbm5lY3Rpb24udHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL3J0Yy9WYW5pbGxhUGVlckNvbm5lY3Rpb25GYWN0b3J5LnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9yeC9SZWFkT25seVN1YmplY3QudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL3J4L1N1YmplY3QudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL3Nkay9FbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvc2RrL1NESy50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvc2RrL1RlbGVtZXRyeVVybC50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvc2RrL2FwaS9TZXRUZW1wb3JhcnlNYXhpbWFsQml0cmF0ZS50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvc2RrL2RlZmF1bHRzLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9zZGsvZGlzY292ZXJ5L0JpdHJhdGVNb2RlTWFwcGluZy50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvc2RrL2Rpc2NvdmVyeS9CaXRyYXRlU3RhdGVNYXBwaW5nLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9zZGsvZGlzY292ZXJ5L0Rpc2NvdmVyeS50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvc2RrL2Rpc2NvdmVyeS9EaXNjb3ZlcnlTZXJ2aWNlLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9zZGsvZGlzY292ZXJ5L0Rpc2NvdmVyeVVyaS50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvc2RrL2Rpc2NvdmVyeS9FbmRQb2ludC50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvc2RrL2VkZ2VBdXRoL0VkZ2VBdXRoLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9zZGsvZmVhdHVyZS9GZWF0dXJlRW5hYmxlbWVudC50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvc2RrL3B1Ymxpc2gvUHVibGlzaGVyLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9zZGsvcHVibGlzaC9QdWJsaXNoZXJDb250ZXh0LnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9zZGsvcHVibGlzaC9QdWJsaXNoZXJTdGF0ZS50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvc2RrL3B1Ymxpc2gvUHVibGlzaGVycy50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvc2RrL3B1Ymxpc2gvUmVhbFRpbWVQdWJsaXNoZXIudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL3Nkay9wdWJsaXNoL2luZGV4LnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy9zZGsvdmVyc2lvbi9WZXJzaW9uTWFuYWdlci50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvdGVsZW1ldHJ5L1RlbGVtZXRyeUFwZW5kZXIudHMiLCJ3ZWJwYWNrOi8vcGhlbml4Ly4vc3JjL3RlbGVtZXRyeS9UZWxlbWV0cnlDb25maWd1cmF0aW9uLnRzIiwid2VicGFjazovL3BoZW5peC8uL3NyYy90ZWxlbWV0cnkvVGVsZW1ldHJ5U2VydmljZS50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvdGltZS9EdXJhdGlvbi50cyIsIndlYnBhY2s6Ly9waGVuaXgvLi9zcmMvdmlkZW8vU2Vzc2lvblRlbGVtZXRyeS50cyIsIndlYnBhY2s6Ly9waGVuaXgvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGhlbml4L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BoZW5peC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGhlbml4L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGhlbml4L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGhlbml4L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJQZWVyQ29ubmVjdGlvbkNvbnRleHQiLCJtZWRpYVN0cmVhbSIsIlN1YmplY3QiLCJwZWVyQ29ubmVjdGlvbiIsInBlZXJDb25uZWN0aW9uUmVjb25uZWN0QXR0ZW1wdHMiLCJTdGF0ZUNvbnRleHQiLCJpc1N0YXJ0aW5nIiwiaXNEaXNwb3NlZCIsIlRva2VuQ29udGV4dCIsInRva2VuIiwidG9rZW5FeHBpcmluZyIsImRlZmF1bHREb2N1bWVudEZvY3VzSW50ZXJ2YWxUaW1lb3V0IiwiQXBwbGljYXRpb25BY3Rpdml0eU1vbml0b3IiLCJEaXNwb3NhYmxlTGlzdCIsIkRhdGUiLCJub3ciLCJfaXNGb3JlZ3JvdW5kIiwiX3JlYWRPbmx5SXNGb3JlZ3JvdW5kIiwiUmVhZE9ubHlTdWJqZWN0IiwiZGV0ZWN0VGFiRm9jdXNDaGFuZ2UiLCJfdGltZU9mTGFzdFRhYkZvY3VzQ2hhbmdlIiwiX2Rpc3Bvc2FibGVzIiwiZGlzcG9zZSIsImhpZGRlbiIsInZpc2liaWxpdHlDaGFuZ2UiLCJkb2N1bWVudCIsIm1zSGlkZGVuIiwid2Via2l0SGlkZGVuIiwiaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSIsImlzRm9yZWdyb3VuZCIsInNldEZvY3VzU3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkIiwiRGlzcG9zYWJsZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsaXN0ZW5Gb3JEb2N1bWVudEZvY3VzIiwiY2FsbCIsIl9kb2N1bWVudEZvY3VzSW50ZXJ2YWwiLCJ3aW5kb3ciLCJzZXRJbnRlcnZhbCIsImhhc0ZvY3VzIiwiY2xlYXJJbnRlcnZhbCIsInZhbHVlIiwiQnJvd3NlckRldGVjdG9yIiwiX2Jyb3dzZXJOYW1lQW5kVmVyc2lvbiIsIl9icm93c2VyTmFtZSIsIl9icm93c2VyTWFqb3JWZXJzaW9uIiwiX2lzQ2hyb21lNjkiLCJfaXNDaHJvbWU3MCIsIl9pc0Nocm9tZTcxIiwiX2lzQ2hyb21lNzIiLCJfaXNDaHJvbWU3NCIsIl9pc0Nocm9tZTc1IiwiX2lzQ2hyb21lNzYiLCJfaXNDaHJvbWU3NyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImJyb3dzZXJOYW1lQW5kVmVyc2lvbiIsIm1hdGNoIiwiX2Jyb3dzZXJOYW1lQW5kVmVyc2lvblJlZ2V4IiwicGFyc2VCcm93c2VyTmFtZUFuZFZlcnNpb25Gb3JJRSIsImJyb3dzZXJOYW1lTGlzdCIsInNwbGl0IiwiYnJvd3NlclZlcnNpb25MaXN0IiwiZnVsbFZlcnNpb24iLCJOdW1iZXIiLCJtc2llIiwiaW5kZXhPZiIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwidHJpZGVudCIsInZlcnNpb24iLCJwYXJzZUJyb3dzZXJOYW1lQW5kVmVyc2lvbiIsInBhcnNlQnJvd3Nlck5hbWUiLCJwYXJzZUJyb3dzZXJNYWpvclZlcnNpb24iLCJpbmNsdWRlcyIsIlBsYWluQ29uZmlndXJhdGlvblBhcmFtZXRlclJlYWRlciIsIm5hbWUiLCJkZWZhdWx0U3RyaW5nVmFsdWUiLCJkZWZhdWx0Qm9vbGVhblZhbHVlIiwiVGVsZW1ldHJ5TGV2ZWxNYXBwaW5nIiwiVGVsZW1ldHJ5RGVmYXVsdCIsIkxvZ2dpbmdMZXZlbE1hcHBpbmciLCJMb2dnZXJEZWZhdWx0cyIsIk5ldHdvcmtNb25pdG9yIiwidW5kZWZpbmVkIiwiaXNTdXBwb3J0ZWQiLCJzZXR1cE5ldHdvcmtDaGFuZ2VMaXN0ZW5lcnMiLCJ1cGRhdGVTdGF0aXN0aWNzIiwiX2lzU3VwcG9ydGVkIiwiX3J0dCIsIl9lZmZlY3RpdmVUeXBlIiwiX2Rvd25saW5rVGhyb3VnaHB1dENhcGFjaXR5IiwiZG93bmxpbmsiLCJkb3dubGlua01heCIsImVmZmVjdGl2ZVR5cGUiLCJ0eXBlIiwicnR0IiwibGlzdGVuZXIiLCJnZXRSb3VuZFRyaXBUaW1lIiwiZ2V0RWZmZWN0aXZlVHlwZSIsImdldERvd25saW5rVGhyb3VnaHB1dENhcGFjaXR5IiwiUHJpdmFjeU1vZGUiLCJfaXNQcml2YXRlIiwiX19QUklWQUNZX01PREVfXyIsImUiLCJhcHBseUlzUHJpdmF0ZSIsIlN0cmVhbVNldHVwTGlzdGVuZXIiLCJwYWdlTG9hZFRpbWUiLCJMb2dnZXJGYWN0b3J5IiwiU0RLIiwiX3N0YXJ0VGltZSIsIl9wYWdlTG9hZFRpbWUiLCJzdHJlYW1JZCIsInJlY29yZFN0cmVhbU1ldHJpYyIsIk1ldHJpY3NUeXBlIiwibWV0cmljVHlwZSIsIl9tZXRyaWNTdWJtaXR0ZWQiLCJzZXR1cFRpbWUiLCJtZXRyaWNOYW1lIiwiTWV0cmljVHlwZSIsImdldE5hbWUiLCJtZXRyaWNzU2VydmljZSIsInB1c2giLCJydW50aW1lIiwidWludDY0IiwiX2xvZ2dlciIsImluZm8iLCJEdXJhdGlvbnMiLCJ0b0lzb1N0cmluZyIsImRpc3Bvc2FibGUiLCJfZGlzcG9zZWQiLCJfZGlzcG9zYWJsZSIsIl9saXN0IiwiZm9yRWFjaCIsImxlbmd0aCIsIlN0cmluZ3MiLCJFcnJvciIsInJhbmRvbTEzQ2hhcmFjdGVycyIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsImxvb3BzIiwiY2VpbCIsIkFycmF5IiwiZmlsbCIsInJlZHVjZSIsInN0cmluZyIsImZ1bmMiLCJhc3NlcnRVbnJlYWNoYWJsZSIsIngiLCJBcHBlbmRlcnMiLCJfYXBwZW5kZXJzIiwiYXBwZW5kZXIiLCJpdGVtcyIsIml0ZW0iLCJDb25zb2xlQXBwZW5kZXIiLCJ0aHJlc2hvbGQiLCJfdGhyZXNob2xkIiwibG9nTGV2ZWwiLCJtZXNzYWdlIiwiY2F0ZWdvcnkiLCJkYXRlIiwiZnVsbE1lc3NhZ2UiLCJ0b0lTT1N0cmluZyIsIkxvZ2dpbmdMZXZlbCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIkxvZ2dlciIsImFwcGVuZGVycyIsIl9jYXRlZ29yeSIsIlRyYWNlIiwiYXJncyIsIkRlYnVnIiwiSW5mbyIsIldhcm4iLCJGYXRhbCIsImxldmVsIiwicmVwbGFjZVBsYWNlaG9sZGVycyIsInJlcGxhY2VQbGFjZWhvbGRlcnNTdHJpbmciLCJpbmRleCIsInJlcGxhY2VBcmd1bWVudCIsInNwbGljZSIsInN0cmluZ2lmeSIsImFjY3VtdWxhdG9yIiwiY3VycmVudFZhbHVlIiwiYXJyYXkiLCJzdGFjayIsImFyZyIsImNhY2hlIiwiSlNPTiIsImtleSIsIk9iamVjdCIsImFyZ3VtZW50IiwiZGF0YSIsInRvU3RyaW5nU3RyIiwiX3RlbGVtZXRyeUNvbmZpZ3VyYXRpb24iLCJsb2dnZXIiLCJfbG9nZ2VycyIsImFwcGx5TG9nZ2luZ0xldmVsIiwiYXBwbHlBcHBlbmRlckxvZ2dpbmdMZXZlbCIsImFwcGx5Q29uc29sZUxvZ2dlciIsImJpbmQiLCJhcHBseVRlbGVtZXRyeUxvZ2dlciIsInBhcmFtZXRlclZhbHVlIiwiX2NvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXIiLCJnZXRTdHJpbmdWYWx1ZSIsInNldFRocmVzaG9sZCIsImFwcGx5QXBwZW5kZXIiLCJUZWxlbWV0cnlBcHBlbmRlciIsIkNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXIiLCJMb2dnaW5nVGhyZXNob2xkIiwiVGVsZW1ldHJ5Q29uZmlndXJhdGlvbiIsImFwcGx5TG9nZ2VyQ29uZmlnRnJvbVBhcmFtZXRlckNvbmZpZ3VyYXRpb24iLCJsb2dnaW5nTGV2ZWwiLCJsb2dnaW5nTGV2ZWxUeXBlIiwibWV0cmljcyIsIl9tZXRyaWNzIiwiVGVsZW1ldHJ5TGV2ZWwiLCJNZXRyaWNzQ29uZmlndXJhdGlvbiIsIl91cmwiLCJ1cmwiLCJtZXRyaWNzVXJsIiwiVVJMIiwicGF0aG5hbWUiLCJfZW52aXJvbm1lbnQiLCJlbnZpcm9ubWVudCIsIl90ZW5hbmN5IiwidGVuYW5jeSIsIl9zZXNzaW9uSWQiLCJzZXNzaW9uSWQiLCJNZXRyaWNzRmFjdG9yeSIsIm1ldHJpY3NTZXJ2aWNlcyIsIl9tZXRyaWNzU2VydmljZXMiLCJtZXRyaWNzQ29uZmlndXJhdGlvbiIsIlRlbGVtZXRyeVVybCIsIkVudmlyb25tZW50IiwiTWV0cmljc1NlcnZpY2UiLCJ0ZWxlbWV0cnlMZXZlbCIsInZhbHVlcyIsInJlcXVlc3RTaXplTGltaXQiLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwiX21ldHJpY3NDb25maWd1cmF0aW9uIiwibWV0cmljIiwicHJldmlvdXNWYWx1ZSIsInJlc291cmNlIiwia2luZCIsImdldFRlbGVtZXRyeUxldmVsIiwibWV0cmljUmVjb3JkIiwidGltZXN0YW1wIiwiZnVsbFF1YWxpZmllZE5hbWUiLCJfZG9tYWluIiwiVmVyc2lvbk1hbmFnZXIiLCJpZ25vcmVkIiwic2VuZE1ldHJpY3NJZkFibGUiLCJtZXRyaWNzTWVzc2FnZXMiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVjb3JkcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIl9pc1NlbmRpbmciLCJzbGljZSIsInNlbmRNZXRyaWNzIiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJ0ZWxlbWV0cnlMZXZlbFR5cGUiLCJQcm9taXNlIiwiY2FsbGJhY2siLCJUeXBlRXJyb3IiLCJfc3RhdGUiLCJfaGFuZGxlZCIsIl92YWx1ZSIsIl9kZWZlcnJlZHMiLCJkb1Jlc29sdmUiLCJkb25lIiwicHJvbWlzZVJlc29sdmUiLCJyZWFzb24iLCJwcm9taXNlUmVqZWN0IiwibmV3VmFsdWUiLCJwcm9taXNlIiwiZmluYWxlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfaW1tZWRpYXRlIiwiX3VuaGFuZGxlZFJlamVjdGlvbiIsImkiLCJsZW4iLCJoYW5kbGUiLCJkZWZlcnJlZCIsIm9uRnVsZmlsbGVkIiwib25SZWplY3RlZCIsInJlc3VsdCIsImFyciIsInJlc29sdmUiLCJyZWplY3QiLCJpc0FycmF5IiwicHJvdG90eXBlIiwicmVtYWluaW5nIiwibWFuYWdlUmVzcG9uc2UiLCJjb25zdHJ1Y3RvciIsIl8iLCJzZXRUaW1lb3V0Iiwid2FybiIsIlByb21pc2VIYW5kbGVyIiwiUGVlckNvbm5lY3Rpb25TZXJ2aWNlIiwiRmVhdHVyZUVuYWJsZW1lbnQiLCJwcmVjYWNoZUNyZWF0ZVBlZXJDb25uZWN0aW9uT2ZmZXIiLCJfY2FjaGVkIiwiZGlyZWN0aW9uIiwiY3JlYXRlUGVlckNvbm5lY3Rpb25PZmZlciIsInBlZXJDb25uZWN0aW9uRmFjdG9yeSIsImNyZWF0ZVBlZXJDb25uZWN0aW9uIiwic3VwcG9ydHNBZGRUcmFuc2NlaXZlciIsImF1ZGlvVHJhbnNjZWl2ZXIiLCJhZGRUcmFuc2NlaXZlciIsInZpZGVvVHJhbnNjZWl2ZXIiLCJjcmVhdGVPZmZlciIsImxvY2FsT2ZmZXIiLCJvcHRpb25zIiwib2ZmZXJUb1JlY2VpdmVBdWRpbyIsIm9mZmVyVG9SZWNlaXZlVmlkZW8iLCJpbml0aWF0ZUluaXRpYWxQcmVjYWNoaW5nIiwiUnRjQ29uZmlndXJhdGlvbk1hbmFnZXIiLCJjb25maWd1cmF0aW9uIiwiaWNlU2VydmVycyIsInVybHMiLCJ1c2VybmFtZSIsImNyZWRlbnRpYWwiLCJ1cGRhdGVTdGF0aXN0aWNUaW1lT3V0IiwiUnRjUHVibGlzaE1vbml0b3IiLCJlc3RpbWF0ZWRSb3VuZFRyaXBUaW1lIiwiX3BlZXJDb25uZWN0aW9uIiwiX2VzdGltYXRlZFJvdW5kVHJpcFRpbWUiLCJwYXJzZWRMb2NhbERlc2NyaXB0aW9uIiwiU2RwUGFyc2VyIiwiY3VycmVudExvY2FsRGVzY3JpcHRpb24iLCJzZHAiLCJwYXJzZWRSZW1vdGVEZXNjcmlwdGlvbiIsImN1cnJlbnRSZW1vdGVEZXNjcmlwdGlvbiIsIl9lc3RpbWF0ZWRBdWRpb0NvZGVjIiwiYXVkaW9Db2RlYyIsIl9lc3RpbWF0ZWRWaWRlb0NvZGVjIiwidmlkZW9Db2RlYyIsIl9hdmFpbGFibGVUcmFja3MiLCJhdWRpbyIsImlzQXVkaW9UcmFja0VuYWJsZWQiLCJ2aWRlbyIsImlzVmlkZW9UcmFja0VuYWJsZWQiLCJ1cGRhdGVTdGF0aXN0aWMiLCJfcnRjU3RhdGlzdGljIiwiX2lzTW9uaXRvclJ1bm5pbmciLCJfdXBkYXRlVGltZU91dCIsImNsZWFyVGltZW91dCIsImdldEtpbmRGb3JTYWZhcmkxMSIsImlkIiwiZ2V0U3RhdHMiLCJzdGF0cyIsInJ0Y1N0YXRpc3RpY3MiLCJyb3VuZFRyaXBUaW1lIiwibGFzdFBhY2tldFNlbnRUaW1lc3RhbXAiLCJyZXBvcnQiLCJjdXJyZW50Um91bmRUcmlwVGltZSIsIm1lZGlhVHlwZSIsImNvZGVjIiwiY29kZWNJZCIsIm1pbWVUeXBlIiwiYnl0ZXMiLCJieXRlc1NlbnQiLCJwcmV2aW91c0J5dGVzU2VudCIsImJ5dGVzRGVsdGEiLCJ0aW1lRGVsdGEiLCJiaXRyYXRlIiwiZmxvb3IiLCJzc3JjIiwicGFja2V0c1NlbnQiLCJyZXRyYW5zbWl0dGVkQnl0ZXNTZW50IiwiZ2V0Q29kZWNCeVR5cGUiLCJmaXJDb3VudCIsImZyYW1lSGVpZ2h0IiwiZnJhbWVXaWR0aCIsImZyYW1lc0VuY29kZWQiLCJmcmFtZXNTZW50IiwiaGVhZGVyQnl0ZXNTZW50IiwiaHVnZUZyYW1lc1NlbnQiLCJwbGlDb3VudCIsInFwU3VtIiwidG90YWxFbmNvZGVUaW1lIiwidG90YWxFbmNvZGVkQnl0ZXNUYXJnZXQiLCJmcHMiLCJyb3VuZCIsIl9zZHAiLCJzZHBTcGxpdEJ5TGluZXMiLCJzZHBTcGxpdEJ5VHJhY2tzIiwiX2F1ZGlvQ29kZWMiLCJhcHBseUNvZGVjIiwiX3ZpZGVvQ29kZWMiLCJfaXNBdWRpb1RyYWNrRW5hYmxlZCIsImlzVHJhY2tCeVR5cGVFbmFibGVkIiwiX2lzVmlkZW9UcmFja0VuYWJsZWQiLCJzZHBTZWN0aW9uRm9yVHlwZSIsImZpbmQiLCJzZHBUcmFjayIsInN0YXJ0c1dpdGgiLCJ1c2VkQ29kZWNMaW5lIiwic2RwTGluZSIsInVzZWRDb2RlYyIsImNvZGVjTmFtZSIsIlZhbmlsbGFQZWVyQ29ubmVjdGlvbiIsIndlYmtpdFJUQ1BlZXJDb25uZWN0aW9uIiwiUlRDUGVlckNvbm5lY3Rpb24iLCJpY2VDb25uZWN0aW9uU3RhdGUiLCJnZXRDb25maWd1cmF0aW9uIiwic2V0Q29uZmlndXJhdGlvbiIsImNyZWF0ZUFuc3dlciIsImRlc2NyaXB0aW9uIiwic2V0TG9jYWxEZXNjcmlwdGlvbiIsIlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiIsImhhc0NyeXB0byIsInNldFJlbW90ZURlc2NyaXB0aW9uIiwiZ2V0U2VuZGVycyIsInNlbGVjdG9yIiwiZ2V0VHJhY2tzIiwidHJhY2siLCJhZGRUcmFjayIsIm9udHJhY2siLCJoYW5kbGVyIiwib25pY2VjYW5kaWRhdGUiLCJvbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSIsImNsb3NlIiwiVmFuaWxsYVBlZXJDb25uZWN0aW9uRmFjdG9yeSIsInN1YmplY3QiLCJfc3ViamVjdCIsInN1YnNjcmliZSIsIkRpc3Bvc2FibGVMaXN0ZW5lciIsImxpc3RlbmVycyIsImlkeCIsIl9saXN0ZW5lcnMiLCJjaGFuZ2VkIiwiY29tcGFyYWJsZSIsImVxdWFscyIsImJhc2VVUkwiLCJvcmlnaW4iLCJfc2VuZExvY2FsQ2FuZGlkYXRlcyIsIl9jbGllbnRTZXNzaW9uSWQiLCJfbG9hZGVkVGltZXN0YW1wIiwiX3JlYWRPbmx5SW5pdGlhbGl6ZWQiLCJfcmVhZE9ubHlEaXNjb3ZlcnlVcmkiLCJfcmVhZE9ubHlQZWVyQ29ubmVjdGlvbkZhY3RvcnkiLCJfYXV0b21hdGljYWxseVJldHJ5T25GYWlsdXJlIiwiX2F1dG9tYXRpY2FsbHlSZWNvbm5lY3RQZWVyQ29ubmVjdGlvbiIsIl9hdXRvbWF0aWNhbGx5UGxheU1lZGlhU3RyZWFtIiwiX2F1dG9tYXRpY2FsbHlNdXRlVmlkZW9PblBsYXlGYWlsdXJlIiwiX3dlYlBsYXllckxvYWRlciIsIl9zaGFrYVBsYXllckxvYWRlciIsIl9obHNKc0xvYWRlciIsIl9tZXRyaWNzU2VydmljZSIsIl9hcHBsaWNhdGlvbkFjdGl2aXR5TW9uaXRvciIsIl90ZWxlbWV0cnlVcmwiLCJfbWF4aW1hbE51bWJlck9mUGVlckNvbm5lY3Rpb25SZWNvbm5lY3RBdHRlbXB0cyIsInJldHJpZXNBbW91bnQiLCJfdGVsZW1ldHJ5TGV2ZWwiLCJ0ZWxlbWV0cnlDb25maWd1cmF0aW9uIiwiY2xpZW50U2Vzc2lvbklkIiwiaWdub3JlZEVudmlyb25tZW50IiwiaWdub3JlZERpc2NvdmVyeVVyaSIsInRlbGVtZXRyeVVybCIsInRlbGVtZXRyeUFwcGVuZGVyIiwicmVtb3ZlIiwiaWdub3JlZFRlbmFuY3kiLCJEaXNjb3ZlcnlVcmkiLCJpZ25vcmVkVGVsZW1ldHJ5TGV2ZWwiLCJnZXRCb29sZWFuVmFsdWUiLCJkaXNjb3ZlcnlVcmkiLCJnZXRUZWxlbWV0cnlVcmwiLCJjaGFubmVsVG9rZW4iLCJwYXJzZWRUb2tlbiIsIkVkZ2VBdXRoIiwidXJpVmFsdWUiLCJiYXNlVVJJVmFsdWUiLCJfaW5pdGlhbGl6ZWQiLCJfcGVlckNvbm5lY3Rpb25GYWN0b3J5IiwiY29uc29sZUxvZ2dpbmdMZXZlbCIsImNvbnNvbGVBcHBlbmRlciIsImF1dG9tYXRpY2FsbHlQbGF5TWVkaWFTdHJlYW0iLCJhdXRvbWF0aWNhbGx5TXV0ZVZpZGVvT25QbGF5RmFpbHVyZSIsIndlYlBsYXllckxvYWRlciIsInNoYWthUGxheWVyTG9hZGVyIiwiaGxzSnNMb2FkZXIiLCJhcHBseURpc2NvdmVyeVVyaURlZmF1bHRGcm9tUGFyYW1ldGVyQ29uZmlndXJhdGlvbiIsImFwcGx5TWV0cmljc0NvbmZpZ3VyYXRpb24iLCJhcHBseVRlbGVtZXRyeUNvbmZpZ3VyYXRpb24iLCJhcHBseUF1dG9tYXRpY2FsbHlSZXRyeU9uRmFpbHVyZUZyb21QYXJhbWV0ZXJDb25maWd1cmF0aW9uIiwiYXBwbHlBdXRvbWF0aWNhbGx5UmVjb25uZWN0UGVlckNvbm5lY3Rpb25Gcm9tUGFyYW1ldGVyQ29uZmlndXJhdGlvbiIsImluaXQiLCJzZWdtZW50cyIsInByb3RvY29sIiwidW5zaGlmdCIsImVuZHNXaXRoIiwiam9pbiIsIkJpdHJhdGVTdGF0ZSIsIkJpdHJhdGVNb2RlIiwiZGVmYXVsdERpc2NvdmVyeVVyaSIsIkJpdHJhdGVNb2RlTWFwcGluZyIsImJpdHJhdGVNb2RlIiwiQml0cmF0ZVN0YXRlTWFwcGluZyIsImJpdHJhdGVTdGF0ZSIsImRpc2NvdmVyeUNhY2hlSW50ZXJ2YWwiLCJEaXNjb3ZlcnkiLCJ1cmkiLCJkaXNjb3ZlckNsb3Nlc3RFbmRQb2ludFdpdGhDYWNoaW5nIiwiX2NhY2hlIiwiZGlzY292ZXJ5U2VydmljZSIsIkRpc2NvdmVyeVNlcnZpY2UiLCJjYWNoZWRWYWx1ZSIsImRpc2NvdmVyQ2xvc2VzdEVuZFBvaW50IiwicHJlY2FjaGVDbG9zZXN0RW5kUG9pbnREaXNjb3ZlcnkiLCJkZWZhdWx0VGltZW91dCIsIl91cmkiLCJ0aW1lb3V0IiwicmFjZSIsIm9rIiwic3RhdHVzIiwidGV4dCIsImFzU3RyaW5nIiwiZW5kUG9pbnRzIiwibWFwIiwiZW5kUG9pbnQiLCJFbmRQb2ludCIsImRpc2NvdmVyTmVhcmJ5RW5kUG9pbnRzIiwibmV2ZXJSZXNvbHZlIiwicGluZyIsInRpbWUiLCJfZGlzY292ZXJ5VXJpIiwic2RrVmVyc2lvbiIsInNlYXJjaCIsIlVSTFNlYXJjaFBhcmFtcyIsImFwaVZlcnNpb24iLCJfdGltZW91dCIsIl9yb3VuZFRyaXBUaW1lIiwiYnVpbGRQaW5nVXJsIiwic3RhcnQiLCJmaW5pc2hlZCIsImxvY2FsU2Vzc2lvbkRlc2NyaXB0aW9uIiwiZmFpbHVyZUNvdW50IiwiYXBwbGljYXRpb25JZCIsImJ1aWxkVXJsIiwiY2xpZW50VmVyc2lvbiIsImJvZHlXaXRoT2ZmZXIiLCJlZGdlQXV0aFRva2VuIiwiaHR0cFJvdW5kVHJpcFRpbWUiLCJzZXNzaW9uRGVzY3JpcHRpb24iLCJjb252ZXJ0UlRDU2RwVHlwZVRvU2RwVHlwZSIsImNyZWF0ZUFuc3dlckRlc2NyaXB0aW9uIiwiYm9keVdpdGhvdXRPZmZlciIsImNyZWF0ZU9mZmVyRGVzY3JpcHRpb24iLCJmaW5hbGx5IiwiaHR0cFJlc3BvbnNlIiwibWFwSHR0cFN0YXR1c1RvU3Vic2NyaWJlU3RhdHVzIiwiY29udmVydEh0dHBSZXNwb25zZVRvU3Vic2NyaWJlUmVzcG9uc2UiLCJzdWJzY3JpYmVSZXNwb25zZSIsImRlYnVnIiwibWFwSHR0cFN0YXR1c1RvUHVibGlzaFN0YXR1cyIsImNvbnZlcnRIdHRwUmVzcG9uc2VUb1B1Ymxpc2hSZXNwb25zZSIsInN0cmVhbSIsInNoYXJlZFNlY3JldCIsIm1hcEh0dHBTdGF0dXNUb1NldFJlbW90ZURlc2NyaXB0aW9uU3RhdHVzIiwiY29udmVydEh0dHBSZXNwb25zZVRvU2V0UmVtb3RlRGVzY3JpcHRpb25SZXNwb25zZSIsInNldFJlbW90ZURlc2NyaXB0aW9uUmVzcG9uc2UiLCJlbGFwc2VkSW5NaWxsaXNlY29uZHMiLCJiaXRyYXRlSW5CaXRzUGVyU2Vjb25kIiwibWFwSHR0cFN0YXR1c1RvU2V0VGVtcG9yYXJ5TWF4aW1hbEJpdHJhdGVTdGF0dXMiLCJjYW5kaWRhdGVzIiwiZGlzY292ZXJ5Q29tcGxldGVkIiwibWFwSHR0cFN0YXR1c1RvQWRkSWNlQ2FuZGlkYXRlc1N0YXR1cyIsImNvbnZlcnRIdHRwUmVzcG9uc2VUb0FkZEljZUNhbmRpZGF0ZXNSZXNwb25zZSIsImFkZEljZUNhbmRpZGF0ZXNSZXNwb25zZSIsIm1hcEh0dHBTdGF0dXNUb1NldERlc3Ryb3lTdHJlYW1TdGF0dXMiLCJjb252ZXJ0SHR0cFJlc3BvbnNlVG9EZXN0cm95U3RyZWFtUmVzcG9uc2UiLCJkZXN0cm95U3RyZWFtUmVzcG9uc2UiLCJwYXRoIiwicGF0aEFzQXJyYXkiLCJjb25jYXQiLCJqc29uIiwibGFnIiwicnRjQ29uZmlndXJhdGlvbiIsImNvbnZlcnRJUnRjQ29uZmlndXJhdGlvblRvUlRDQ29uZmlndXJhdGlvbiIsImNvbnZlcnRJU2Vzc2lvbkRlc2NyaXB0aW9uVG9SVENTZXNzaW9uRGVzY3JpcHRpb24iLCJjcmVhdGVBbnN3ZXJEZXNjcmlwdGlvblJlc3BvbnNlIiwiY3JlYXRlT2ZmZXJEZXNjcmlwdGlvblJlc3BvbnNlIiwicHVibGlzaFJlc3BvbnNlIiwiYnVuZGxlUG9saWN5IiwiaWNlQ2FuZGlkYXRlUG9vbFNpemUiLCJpY2VUcmFuc3BvcnRQb2xpY3kiLCJwZWVySWRlbnRpdHkiLCJydGNwTXV4UG9saWN5IiwicnRjU2Vzc2lvbkRlc2NyaXB0aW9uIiwiZGVzdHJveVN0cmVhbSIsImVkZ2VBdXRoVG9rZW5QcmVmaXgiLCJpc1ZhbGlkVG9rZW4iLCJlbmNvZGVkRWRnZUF1dGhUb2tlbiIsImF0b2IiLCJzdWJzdHIiLCJwYXJzZSIsImRlZmF1bHRTdHJlYW1UZXJtaW5hdGlvblJlYXNvbiIsImJhY2tvZmZJbnRlcnZhbEluTWlsbGlzZWNvbmRzIiwiZmFpbHVyZUNvdW50Q2xlYW5VcEludGVydmFsSW5NaWxsaXNlY29uZHMiLCJtYXhCYWNrb2ZmSW50ZXJ2YWxJbk1pbGxpc2Vjb25kcyIsInN0YW5kYnlQb2xsaW5nSW50ZXJ2YWxJbk1pbGxpc2Vjb25kcyIsIlB1Ymxpc2hlciIsIl90b2tlbkNvbnRleHQiLCJfcHVibGlzaGVyQ29udGV4dCIsIlB1Ymxpc2hlckNvbnRleHQiLCJfcGVlckNvbm5lY3Rpb25Db250ZXh0IiwiX3N0YXRlQ29udGV4dCIsIl9wdWJsaXNoZXJTdGFydFRpbWUiLCJfcmVhZE9ubHlUb2tlbiIsIl9yZWFkT25seVBlZXJDb25uZWN0aW9uIiwiX3JlYWRPbmx5U3RhdGUiLCJzdGF0ZSIsIl9yZWFkT25seVRva2VuRXhwaXJpbmciLCJfcmVhZE9ubHlBdXRob3JpemVkIiwiYXV0aG9yaXplZCIsIl9yZWFkT25seU9ubGluZSIsIm9ubGluZSIsIl9yZWFkT25seUxvYWRpbmciLCJsb2FkaW5nIiwiX3JlYWRPbmx5UHVibGlzaGluZyIsInB1Ymxpc2hpbmciLCJfcmVhZE9ubHlTdGFuZGJ5Iiwic3RhbmRieSIsIl9yZWFkT25seVN0b3BwZWQiLCJzdG9wcGVkIiwiX3JlYWRPbmx5RmFpbHVyZUNvdW50IiwiX3JlYWRPbmx5RW5kUG9pbnQiLCJfcmVhZE9ubHlTdHJlYW0iLCJfcmVhZE9ubHlSdGNTdGF0aXN0aWNzIiwiX3JlYWRPbmx5TWVkaWFTdHJlYW0iLCJfc2Vzc2lvblRlbGVtZXRyeSIsIlNlc3Npb25UZWxlbWV0cnkiLCJwdWJsaXNoZXJEaXNwb3NhYmxlcyIsImNsZWFyRmFpbHVyZUNvdW50VGltZW91dCIsIlB1Ymxpc2hlclN0YXRlIiwiZGVzdHJveVN0cmVhbU9uVW5tb3VudCIsImRpc3Bvc2FibGVzIiwicHJvY2Vzc1N0b3AiLCJjbGVhblVwUmVzb3VyY2VzIiwic3RvcCIsInByb2Nlc3NTdGFydCIsIm1lZGlhVHJhY2siLCJzZW5kZXIiLCJyZXBsYWNlVHJhY2siLCJsaXN0ZW5PblN0cmVhbVNldHVwIiwiZ2V0VXJpIiwiaGFuZGxlU3RyZWFtRmFpbHVyZUNhbGxiYWNrIiwiaGFuZGxlU3RyZWFtRmFpbHVyZSIsInN0cmVhbVB1Ymxpc2hlciIsIlJlYWxUaW1lUHVibGlzaGVyIiwiZmFpbCIsInRpbWVvdXRJZCIsImdldFJldHJ5SW50ZXJ2YWwiLCJtaW4iLCJwb3ciLCJtYXgiLCJwdWJsaXNoZXJJbml0aWFsaXphdGlvbiIsImdlbmVyYXRlU2NyZWVuTmFtZSIsIlB1Ymxpc2hlcnMiLCJpY2VDYW5kaWRhdGVBY2N1bXVsYXRpb25JbnRlcnZhbCIsInB1Ymxpc2hlckNvbnRleHQiLCJwZWVyQ29ubmVjdGlvbkNvbnRleHQiLCJfaGFuZGxlU3RyZWFtRmFpbHVyZSIsImFsbCIsInN1cHBvcnRzU2V0Q29uZmlndXJhdGlvbiIsInN1cHBvcnRzR2V0Q29uZmlndXJhdGlvbiIsInB1Ymxpc2giLCJtYXBQdWJsaXNoU3RhdHVzVG9QdWJsaXNoZXJTdGF0dXMiLCJhcHBseVN0YXR1cyIsImFwcGx5UnRjQ29uZmlndXJhdGlvbiIsInN1Ym1pdENhbmRpZGF0ZXNUaW1lb3V0IiwiY2FuY2VsRGlzY292ZXJ5IiwiYWRkU3RyZWFtIiwiY2FuZGlkYXRlIiwiYWRkSWNlQ2FuZGlkYXRlcyIsInJldHJ5Q2FsbGJhY2siLCJvbkxpbmUiLCJyZWNvbm5lY3RQZWVyQ29ubmVjdGlvbiIsImFuc3dlciIsIm1hcFNldFJlbW90ZURlc2NyaXB0aW9uU3RhdHVzVG9QdWJsaXNoZXJTdGF0dXMiLCJzdWNjZXNzIiwicnRjUHVibGlzaE1vbml0b3IiLCJydGNTdGF0aXN0aWMiLCJzdGF0aXN0aWNzIiwicnRjVmlkZW9TdGF0aXN0aWMiLCJydGNBdWRpb1N0YXRpc3RpYyIsImF1ZGlvVHJhY2tGYWlsZWQiLCJ2aWRlb1RyYWNrRmFpbGVkIiwib3B0aW9uYWxQZWVyQ29ubmVjdGlvbiIsIm5ld1J0Y0NvbmZpZ3VyYXRpb24iLCJpY2VSZXN0YXJ0Iiwib2ZmZXIiLCJfX1NES1ZFUlNJT05fXyIsIl9kZWZhdWx0VmVyc2lvbiIsIl90ZWxlbWV0cnlTZXJ2aWNlIiwiVGVsZW1ldHJ5U2VydmljZSIsImxvZ1JlY29yZCIsIl9sb2dzIiwic2VuZExvZ3NJZkFibGUiLCJsb2dNZXNzYWdlcyIsIm51bWJlck9mTG9nc1RvU2VuZCIsInNpemVPZkxvZ3NUb1NlbmQiLCJnZXRMb2dTaXplIiwic3VtIiwic2VuZExvZ3MiLCJkdXJhdGlvbiIsIl9kdXJhdGlvbiIsImlzTmVnYXRpdmUiLCJhYnMiLCJvZmZzZXQiLCJtaWxsaXNlY29uZHMiLCJzZWNvbmRzIiwibWludXRlcyIsImhvdXJzIiwicGFydHMiLCJTdHJpbmciLCJwYWRTdGFydCIsInRhcmdldExlbmd0aCIsInBhZFN0cmluZyIsInJlcGVhdCIsIl9uZXR3b3JrTW9uaXRvciIsInJlY29yZEZvcmVncm91bmRDaGFuZ2UiLCJyZWNvcmROZXR3b3JrUlRUVXBkYXRlIiwicmVjb3JkTmV0d29ya1R5cGVDaGFuZ2VVcGRhdGUiLCJkb3dubGlua1Rocm91Z2hwdXRDYXBhY2l0eSIsInJlY29yZE5ldHdvcmtEb3dubGlua1Rocm91Z2hwdXRDYXBhY2l0eVVwZGF0ZSIsInRpbWVTaW5jZUxhc3RDaGFuZ2UiLCJnZXRUaW1lU2luY2VMYXN0Q2hhbmdlIiwibmV3UlRUIiwib2xkUnR0IiwiX2xhc3ROZXR3b3JrU3RhdGlzdGljcyIsIm5ld05ldHdvcmtUeXBlIiwib2xkTmV0d29ya1R5cGUiLCJuZXdDYXBhY2l0eSIsIm9sZENhcGFjaXR5IiwiZmxvYXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0Esd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBLG9DQUFvQyx5QkFBeUIsU0FBUyxzQkFBeUIsa0I7Ozs7Ozs7Ozs7QUNML0Y7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHlCQUF5QixTQUFTLHNCQUF5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QUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWE7QUFDYixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRjtBQUNsRjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6InB1Ymxpc2guanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwaGVuaXhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicGhlbml4XCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcbiAgcmV0dXJuIGFycjI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG4gIHJldHVybiBzZWxmO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKFwiLi90b1Byb3BlcnR5S2V5LmpzXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IG51bGwgPT0gYXJyID8gbnVsbCA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdO1xuICBpZiAobnVsbCAhPSBfaSkge1xuICAgIHZhciBfcyxcbiAgICAgIF9lLFxuICAgICAgX3gsXG4gICAgICBfcixcbiAgICAgIF9hcnIgPSBbXSxcbiAgICAgIF9uID0gITAsXG4gICAgICBfZCA9ICExO1xuICAgIHRyeSB7XG4gICAgICBpZiAoX3ggPSAoX2kgPSBfaS5jYWxsKGFycikpLm5leHQsIDAgPT09IGkpIHtcbiAgICAgICAgaWYgKE9iamVjdChfaSkgIT09IF9pKSByZXR1cm47XG4gICAgICAgIF9uID0gITE7XG4gICAgICB9IGVsc2UgZm9yICg7ICEoX24gPSAoX3MgPSBfeC5jYWxsKF9pKSkuZG9uZSkgJiYgKF9hcnIucHVzaChfcy52YWx1ZSksIF9hcnIubGVuZ3RoICE9PSBpKTsgX24gPSAhMCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9ICEwLCBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBudWxsICE9IF9pW1wicmV0dXJuXCJdICYmIChfciA9IF9pW1wicmV0dXJuXCJdKCksIE9iamVjdChfcikgIT09IF9yKSkgcmV0dXJuO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIF9hcnI7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7IC8qISByZWdlbmVyYXRvci1ydW50aW1lIC0tIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLiAtLSBsaWNlbnNlIChNSVQpOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL0xJQ0VOU0UgKi9cbiAgbW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lID0gZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgICByZXR1cm4gZXhwb3J0cztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB2YXIgZXhwb3J0cyA9IHt9LFxuICAgIE9wID0gT2JqZWN0LnByb3RvdHlwZSxcbiAgICBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eSxcbiAgICBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB8fCBmdW5jdGlvbiAob2JqLCBrZXksIGRlc2MpIHtcbiAgICAgIG9ialtrZXldID0gZGVzYy52YWx1ZTtcbiAgICB9LFxuICAgICRTeW1ib2wgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCA/IFN5bWJvbCA6IHt9LFxuICAgIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIixcbiAgICBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCIsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgd3JpdGFibGU6ICEwXG4gICAgfSksIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3IsXG4gICAgICBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSksXG4gICAgICBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eShnZW5lcmF0b3IsIFwiX2ludm9rZVwiLCB7XG4gICAgICB2YWx1ZTogbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KVxuICAgIH0pLCBnZW5lcmF0b3I7XG4gIH1cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwibm9ybWFsXCIsXG4gICAgICAgIGFyZzogZm4uY2FsbChvYmosIGFyZylcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcInRocm93XCIsXG4gICAgICAgIGFyZzogZXJyXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiYgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkgJiYgKEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUpO1xuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAoXCJ0aHJvd1wiICE9PSByZWNvcmQudHlwZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZyxcbiAgICAgICAgICB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIFwib2JqZWN0XCIgPT0gX3R5cGVvZih2YWx1ZSkgJiYgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSA/IFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KSA6IFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHVud3JhcHBlZCkge1xuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZCwgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgIH1cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuICAgIGRlZmluZVByb3BlcnR5KHRoaXMsIFwiX2ludm9rZVwiLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUobWV0aG9kLCBhcmcpIHtcbiAgICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9IHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLCBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZykgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoXCJleGVjdXRpbmdcIiA9PT0gc3RhdGUpIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICBpZiAoXCJjb21wbGV0ZWRcIiA9PT0gc3RhdGUpIHtcbiAgICAgICAgaWYgKFwidGhyb3dcIiA9PT0gbWV0aG9kKSB0aHJvdyBhcmc7XG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnRleHQubWV0aG9kID0gbWV0aG9kLCBjb250ZXh0LmFyZyA9IGFyZzs7KSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFwibmV4dFwiID09PSBjb250ZXh0Lm1ldGhvZCkgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO2Vsc2UgaWYgKFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHtcbiAgICAgICAgICBpZiAoXCJzdXNwZW5kZWRTdGFydFwiID09PSBzdGF0ZSkgdGhyb3cgc3RhdGUgPSBcImNvbXBsZXRlZFwiLCBjb250ZXh0LmFyZztcbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcbiAgICAgICAgfSBlbHNlIFwicmV0dXJuXCIgPT09IGNvbnRleHQubWV0aG9kICYmIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgc3RhdGUgPSBcImV4ZWN1dGluZ1wiO1xuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChcIm5vcm1hbFwiID09PSByZWNvcmQudHlwZSkge1xuICAgICAgICAgIGlmIChzdGF0ZSA9IGNvbnRleHQuZG9uZSA/IFwiY29tcGxldGVkXCIgOiBcInN1c3BlbmRlZFlpZWxkXCIsIHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSAmJiAoc3RhdGUgPSBcImNvbXBsZXRlZFwiLCBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kTmFtZSA9IGNvbnRleHQubWV0aG9kLFxuICAgICAgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kTmFtZV07XG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gbWV0aG9kKSByZXR1cm4gY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIFwidGhyb3dcIiA9PT0gbWV0aG9kTmFtZSAmJiBkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSAmJiAoY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCwgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCksIFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHx8IFwicmV0dXJuXCIgIT09IG1ldGhvZE5hbWUgJiYgKGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICdcIiArIG1ldGhvZE5hbWUgKyBcIicgbWV0aG9kXCIpKSwgQ29udGludWVTZW50aW5lbDtcbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSByZXR1cm4gY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZywgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWw7XG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuICAgIHJldHVybiBpbmZvID8gaW5mby5kb25lID8gKGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlLCBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jLCBcInJldHVyblwiICE9PSBjb250ZXh0Lm1ldGhvZCAmJiAoY29udGV4dC5tZXRob2QgPSBcIm5leHRcIiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQpLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbCkgOiBpbmZvIDogKGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKSwgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWwpO1xuICB9XG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0ge1xuICAgICAgdHJ5TG9jOiBsb2NzWzBdXG4gICAgfTtcbiAgICAxIGluIGxvY3MgJiYgKGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXSksIDIgaW4gbG9jcyAmJiAoZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl0sIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXSksIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiLCBkZWxldGUgcmVjb3JkLmFyZywgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3tcbiAgICAgIHRyeUxvYzogXCJyb290XCJcbiAgICB9XSwgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpLCB0aGlzLnJlc2V0KCEwKTtcbiAgfVxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaXRlcmFibGUubmV4dCkgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsXG4gICAgICAgICAgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICBmb3IgKDsgKytpIDwgaXRlcmFibGUubGVuZ3RoOykgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkgcmV0dXJuIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXSwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICAgICAgICByZXR1cm4gbmV4dC52YWx1ZSA9IHVuZGVmaW5lZCwgbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBuZXh0OiBkb25lUmVzdWx0XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgZG9uZTogITBcbiAgICB9O1xuICB9XG4gIHJldHVybiBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lUHJvcGVydHkoR3AsIFwiY29uc3RydWN0b3JcIiwge1xuICAgIHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICBjb25maWd1cmFibGU6ICEwXG4gIH0pLCBkZWZpbmVQcm9wZXJ0eShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCB7XG4gICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uLFxuICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgfSksIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSwgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBnZW5GdW4gJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiAhIWN0b3IgJiYgKGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8IFwiR2VuZXJhdG9yRnVuY3Rpb25cIiA9PT0gKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSk7XG4gIH0sIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uIChnZW5GdW4pIHtcbiAgICByZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpIDogKGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIikpLCBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCksIGdlbkZ1bjtcbiAgfSwgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgX19hd2FpdDogYXJnXG4gICAgfTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKSwgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pLCBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yLCBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24gKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIHZvaWQgMCA9PT0gUHJvbWlzZUltcGwgJiYgKFByb21pc2VJbXBsID0gUHJvbWlzZSk7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcih3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSwgUHJvbWlzZUltcGwpO1xuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbikgPyBpdGVyIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICB9KTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKSwgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIiksIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pLCBleHBvcnRzLmtleXMgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgdmFyIG9iamVjdCA9IE9iamVjdCh2YWwpLFxuICAgICAga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIGtleXMucHVzaChrZXkpO1xuICAgIHJldHVybiBrZXlzLnJldmVyc2UoKSwgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGZvciAoOyBrZXlzLmxlbmd0aDspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSByZXR1cm4gbmV4dC52YWx1ZSA9IGtleSwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgfTtcbiAgfSwgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXMsIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldChza2lwVGVtcFJlc2V0KSB7XG4gICAgICBpZiAodGhpcy5wcmV2ID0gMCwgdGhpcy5uZXh0ID0gMCwgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZCwgdGhpcy5kb25lID0gITEsIHRoaXMuZGVsZWdhdGUgPSBudWxsLCB0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLmFyZyA9IHVuZGVmaW5lZCwgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSksICFza2lwVGVtcFJlc2V0KSBmb3IgKHZhciBuYW1lIGluIHRoaXMpIFwidFwiID09PSBuYW1lLmNoYXJBdCgwKSAmJiBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJiAhaXNOYU4oK25hbWUuc2xpY2UoMSkpICYmICh0aGlzW25hbWVdID0gdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB0aGlzLmRvbmUgPSAhMDtcbiAgICAgIHZhciByb290UmVjb3JkID0gdGhpcy50cnlFbnRyaWVzWzBdLmNvbXBsZXRpb247XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSByb290UmVjb3JkLnR5cGUpIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbiBkaXNwYXRjaEV4Y2VwdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZXR1cm4gcmVjb3JkLnR5cGUgPSBcInRocm93XCIsIHJlY29yZC5hcmcgPSBleGNlcHRpb24sIGNvbnRleHQubmV4dCA9IGxvYywgY2F1Z2h0ICYmIChjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCksICEhY2F1Z2h0O1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV0sXG4gICAgICAgICAgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgaWYgKFwicm9vdFwiID09PSBlbnRyeS50cnlMb2MpIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIiksXG4gICAgICAgICAgICBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsICEwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoYXNGaW5hbGx5KSB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYWJydXB0OiBmdW5jdGlvbiBhYnJ1cHQodHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiYgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJiB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmaW5hbGx5RW50cnkgJiYgKFwiYnJlYWtcIiA9PT0gdHlwZSB8fCBcImNvbnRpbnVlXCIgPT09IHR5cGUpICYmIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYyAmJiAoZmluYWxseUVudHJ5ID0gbnVsbCk7XG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJldHVybiByZWNvcmQudHlwZSA9IHR5cGUsIHJlY29yZC5hcmcgPSBhcmcsIGZpbmFsbHlFbnRyeSA/ICh0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYywgQ29udGludWVTZW50aW5lbCkgOiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHRocm93IHJlY29yZC5hcmc7XG4gICAgICByZXR1cm4gXCJicmVha1wiID09PSByZWNvcmQudHlwZSB8fCBcImNvbnRpbnVlXCIgPT09IHJlY29yZC50eXBlID8gdGhpcy5uZXh0ID0gcmVjb3JkLmFyZyA6IFwicmV0dXJuXCIgPT09IHJlY29yZC50eXBlID8gKHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZywgdGhpcy5tZXRob2QgPSBcInJldHVyblwiLCB0aGlzLm5leHQgPSBcImVuZFwiKSA6IFwibm9ybWFsXCIgPT09IHJlY29yZC50eXBlICYmIGFmdGVyTG9jICYmICh0aGlzLm5leHQgPSBhZnRlckxvYyksIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcbiAgICBmaW5pc2g6IGZ1bmN0aW9uIGZpbmlzaChmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHJldHVybiB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKSwgcmVzZXRUcnlFbnRyeShlbnRyeSksIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG4gICAgfSxcbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uIF9jYXRjaCh0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24gZGVsZWdhdGVZaWVsZChpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9LCBcIm5leHRcIiA9PT0gdGhpcy5tZXRob2QgJiYgKHRoaXMuYXJnID0gdW5kZWZpbmVkKSwgQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH0sIGV4cG9ydHM7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9yZWdlbmVyYXRvclJ1bnRpbWUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiKTtcbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCIpO1xudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCIpO1xuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1ByaW1pdGl2ZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoXCIuL3RvUHJpbWl0aXZlLmpzXCIpO1xuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1Byb3BlcnR5S2V5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8vIFRPRE8oQmFiZWwgOCk6IFJlbW92ZSB0aGlzIGZpbGUuXG5cbnZhciBydW50aW1lID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lXCIpKCk7XG5tb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG5cbi8vIENvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vcGFja2FnZXMvcnVudGltZS9ydW50aW1lLmpzI0w3MzY9XG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IFN1YmplY3QgZnJvbSAnLi4vcngvU3ViamVjdCc7XG5pbXBvcnQgSVBlZXJDb25uZWN0aW9uIGZyb20gJy4uL3J0Yy9JUGVlckNvbm5lY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZWVyQ29ubmVjdGlvbkNvbnRleHQge1xuICBtZWRpYVN0cmVhbTogU3ViamVjdDxNZWRpYVN0cmVhbT47XG4gIHBlZXJDb25uZWN0aW9uOiBTdWJqZWN0PElQZWVyQ29ubmVjdGlvbj47XG4gIHBlZXJDb25uZWN0aW9uUmVjb25uZWN0QXR0ZW1wdHM6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1lZGlhU3RyZWFtID0gbmV3IFN1YmplY3Q8TWVkaWFTdHJlYW0+KG51bGwpO1xuICAgIHRoaXMucGVlckNvbm5lY3Rpb24gPSBuZXcgU3ViamVjdDxJUGVlckNvbm5lY3Rpb24+KG51bGwpO1xuICAgIHRoaXMucGVlckNvbm5lY3Rpb25SZWNvbm5lY3RBdHRlbXB0cyA9IDA7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCBTdWJqZWN0IGZyb20gJy4uL3J4L1N1YmplY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZUNvbnRleHQge1xuICBpc1N0YXJ0aW5nOiBTdWJqZWN0PGJvb2xlYW4+O1xuICBpc0Rpc3Bvc2VkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXNTdGFydGluZyA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IHtFZGdlVG9rZW59IGZyb20gJy4uL3Nkay9lZGdlQXV0aC9FZGdlVG9rZW4nO1xuaW1wb3J0IFN1YmplY3QgZnJvbSAnLi4vcngvU3ViamVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRva2VuQ29udGV4dCB7XG4gIHRva2VuOiBTdWJqZWN0PEVkZ2VUb2tlbj47XG4gIHRva2VuRXhwaXJpbmc6IFN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IodG9rZW46IHN0cmluZykge1xuICAgIHRoaXMudG9rZW4gPSBuZXcgU3ViamVjdDxFZGdlVG9rZW4+KHRva2VuKTtcbiAgICB0aGlzLnRva2VuRXhwaXJpbmcgPSBuZXcgU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCBEaXNwb3NhYmxlIGZyb20gJy4uL2xhbmcvRGlzcG9zYWJsZSc7XG5pbXBvcnQgU3ViamVjdCBmcm9tICcuLi9yeC9TdWJqZWN0JztcbmltcG9ydCBSZWFkT25seVN1YmplY3QgZnJvbSAnLi4vcngvUmVhZE9ubHlTdWJqZWN0JztcbmltcG9ydCBEaXNwb3NhYmxlTGlzdCBmcm9tICcuLi9sYW5nL0Rpc3Bvc2FibGVMaXN0JztcblxuY29uc3QgZGVmYXVsdERvY3VtZW50Rm9jdXNJbnRlcnZhbFRpbWVvdXQgPSAzMDAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBsaWNhdGlvbkFjdGl2aXR5TW9uaXRvciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Rpc3Bvc2FibGVzOiBEaXNwb3NhYmxlTGlzdCA9IG5ldyBEaXNwb3NhYmxlTGlzdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9yZWFkT25seUlzRm9yZWdyb3VuZDogUmVhZE9ubHlTdWJqZWN0PGJvb2xlYW4+O1xuICBwcml2YXRlIHJlYWRvbmx5IF9pc0ZvcmVncm91bmQ6IFN1YmplY3Q8Ym9vbGVhbj47XG4gIHByaXZhdGUgX3RpbWVPZkxhc3RUYWJGb2N1c0NoYW5nZTogbnVtYmVyID0gRGF0ZS5ub3coKTtcbiAgcHJpdmF0ZSBfZG9jdW1lbnRGb2N1c0ludGVydmFsOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5faXNGb3JlZ3JvdW5kID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4odHJ1ZSk7XG4gICAgdGhpcy5fcmVhZE9ubHlJc0ZvcmVncm91bmQgPSBuZXcgUmVhZE9ubHlTdWJqZWN0KHRoaXMuX2lzRm9yZWdyb3VuZCk7XG4gICAgdGhpcy5kZXRlY3RUYWJGb2N1c0NoYW5nZSgpO1xuICB9XG5cbiAgZ2V0IGlzRm9yZWdyb3VuZCgpOiBSZWFkT25seVN1YmplY3Q8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLl9yZWFkT25seUlzRm9yZWdyb3VuZDtcbiAgfVxuXG4gIGdldFRpbWVTaW5jZUxhc3RDaGFuZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gRGF0ZS5ub3coKSAtIHRoaXMuX3RpbWVPZkxhc3RUYWJGb2N1c0NoYW5nZTtcbiAgfVxuXG4gIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fZGlzcG9zYWJsZXMuZGlzcG9zZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXRlY3RUYWJGb2N1c0NoYW5nZSgpOiB2b2lkIHtcbiAgICBsZXQgaGlkZGVuO1xuICAgIGxldCB2aXNpYmlsaXR5Q2hhbmdlO1xuXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBEdWUgdG8gdHlwZXNjcmlwdCBub3QgaGF2aW5nIGEgZGVmaW5pdGlvbiBmb3IgJ21zSGlkZGVuJyBvciAnd2Via2l0SGlkZGVuJyB0eXBlc1xuICAgIC8vIFJlcXVpcmVkIHRvIEB0cy1pZ25vcmUgdG8gcHJldmVudCB0eXBlc2NyaXB0IGVycm9yc1xuICAgIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudCAqL1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50Lm1zSGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaGlkZGVuID0gJ21zSGlkZGVuJztcbiAgICAgIHZpc2liaWxpdHlDaGFuZ2UgPSAnbXN2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC53ZWJraXRIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBoaWRkZW4gPSAnd2Via2l0SGlkZGVuJztcbiAgICAgIHZpc2liaWxpdHlDaGFuZ2UgPSAnd2Via2l0dmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQuaGlkZGVuICE9PSAndW5kZWZpbmVkJykgeyAvLyBPcGVyYSAxMi4xMCBhbmQgRmlyZWZveCAxOCBhbmQgbGF0ZXIgc3VwcG9ydFxuICAgICAgaGlkZGVuID0gJ2hpZGRlbic7XG4gICAgICB2aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnO1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudCAqL1xuXG4gICAgY29uc3QgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSA9ICgpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IGlzRm9yZWdyb3VuZCA9ICFkb2N1bWVudFtoaWRkZW5dO1xuXG4gICAgICB0aGlzLnNldEZvY3VzU3RhdGUoaXNGb3JlZ3JvdW5kKTtcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnRbaGlkZGVuXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodmlzaWJpbGl0eUNoYW5nZSwgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSwgZmFsc2UpO1xuXG4gICAgICB0aGlzLl9kaXNwb3NhYmxlcy5hZGQobmV3IERpc3Bvc2FibGUoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHZpc2liaWxpdHlDaGFuZ2UsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UsIGZhbHNlKTtcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saXN0ZW5Gb3JEb2N1bWVudEZvY3VzLmNhbGwodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsaXN0ZW5Gb3JEb2N1bWVudEZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuX2RvY3VtZW50Rm9jdXNJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBpc0ZvcmVncm91bmQgPSBkb2N1bWVudC5oYXNGb2N1cygpO1xuXG4gICAgICB0aGlzLnNldEZvY3VzU3RhdGUoaXNGb3JlZ3JvdW5kKTtcbiAgICB9LCBkZWZhdWx0RG9jdW1lbnRGb2N1c0ludGVydmFsVGltZW91dCk7XG5cbiAgICB0aGlzLl9kaXNwb3NhYmxlcy5hZGQobmV3IERpc3Bvc2FibGUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2RvY3VtZW50Rm9jdXNJbnRlcnZhbCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX2RvY3VtZW50Rm9jdXNJbnRlcnZhbCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2RvY3VtZW50Rm9jdXNJbnRlcnZhbCA9IG51bGw7XG4gICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRGb2N1c1N0YXRlKGlzRm9yZWdyb3VuZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pc0ZvcmVncm91bmQgPT09IGlzRm9yZWdyb3VuZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2lzRm9yZWdyb3VuZC52YWx1ZSA9IGlzRm9yZWdyb3VuZDtcbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJvd3NlckRldGVjdG9yIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2Jyb3dzZXJOYW1lQW5kVmVyc2lvblJlZ2V4ID0gLyhNU0lFfCg/IUdlY2tvLispRmlyZWZveHwoPyFBcHBsZVdlYktpdC4rQ2hyb21lLispU2FmYXJpfCg/IUFwcGxlV2ViS2l0LispQ2hyb21lfEFwcGxlV2ViS2l0KD8hLitDaHJvbWV8LitTYWZhcmkpfEdlY2tvKD8hLitGaXJlZm94KSkoPzogfFxcLykoW1xcZC5hcHJlXSspL2c7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9icm93c2VyTmFtZUFuZFZlcnNpb24gPSBCcm93c2VyRGV0ZWN0b3IucGFyc2VCcm93c2VyTmFtZUFuZFZlcnNpb24oKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2Jyb3dzZXJOYW1lID0gQnJvd3NlckRldGVjdG9yLnBhcnNlQnJvd3Nlck5hbWUoKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2Jyb3dzZXJNYWpvclZlcnNpb24gPSBCcm93c2VyRGV0ZWN0b3IucGFyc2VCcm93c2VyTWFqb3JWZXJzaW9uKCk7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2lzQ2hyb21lNjkgPSBCcm93c2VyRGV0ZWN0b3IuX2Jyb3dzZXJOYW1lQW5kVmVyc2lvbi5pbmNsdWRlcygnQ2hyb21lLzY5LicpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfaXNDaHJvbWU3MCA9IEJyb3dzZXJEZXRlY3Rvci5fYnJvd3Nlck5hbWVBbmRWZXJzaW9uLmluY2x1ZGVzKCdDaHJvbWUvNzAuJyk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9pc0Nocm9tZTcxID0gQnJvd3NlckRldGVjdG9yLl9icm93c2VyTmFtZUFuZFZlcnNpb24uaW5jbHVkZXMoJ0Nocm9tZS83MS4nKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2lzQ2hyb21lNzIgPSBCcm93c2VyRGV0ZWN0b3IuX2Jyb3dzZXJOYW1lQW5kVmVyc2lvbi5pbmNsdWRlcygnQ2hyb21lLzcyLicpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfaXNDaHJvbWU3NCA9IEJyb3dzZXJEZXRlY3Rvci5fYnJvd3Nlck5hbWVBbmRWZXJzaW9uLmluY2x1ZGVzKCdDaHJvbWUvNzQuJyk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9pc0Nocm9tZTc1ID0gQnJvd3NlckRldGVjdG9yLl9icm93c2VyTmFtZUFuZFZlcnNpb24uaW5jbHVkZXMoJ0Nocm9tZS83NS4nKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2lzQ2hyb21lNzYgPSBCcm93c2VyRGV0ZWN0b3IuX2Jyb3dzZXJOYW1lQW5kVmVyc2lvbi5pbmNsdWRlcygnQ2hyb21lLzc2LicpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfaXNDaHJvbWU3NyA9IEJyb3dzZXJEZXRlY3Rvci5fYnJvd3Nlck5hbWVBbmRWZXJzaW9uLmluY2x1ZGVzKCdDaHJvbWUvNzcuJyk7XG5cbiAgc3RhdGljIGdldCBicm93c2VyTmFtZUFuZFZlcnNpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yLl9icm93c2VyTmFtZUFuZFZlcnNpb247XG4gIH1cblxuICBzdGF0aWMgZ2V0IGJyb3dzZXJOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Jyb3dzZXJOYW1lO1xuICB9XG5cbiAgc3RhdGljIGdldCBicm93c2VyTWFqb3JWZXJzaW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2Jyb3dzZXJNYWpvclZlcnNpb247XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzQ2hyb21lNjkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJyb3dzZXJEZXRlY3Rvci5faXNDaHJvbWU2OTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXNDaHJvbWU3MCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yLl9pc0Nocm9tZTcwO1xuICB9XG5cbiAgc3RhdGljIGdldCBpc0Nocm9tZTcxKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCcm93c2VyRGV0ZWN0b3IuX2lzQ2hyb21lNzE7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzQ2hyb21lNzIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJyb3dzZXJEZXRlY3Rvci5faXNDaHJvbWU3MjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXNDaHJvbWU3NCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yLl9pc0Nocm9tZTc0O1xuICB9XG5cbiAgc3RhdGljIGdldCBpc0Nocm9tZTc1KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCcm93c2VyRGV0ZWN0b3IuX2lzQ2hyb21lNzU7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzQ2hyb21lNzYoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJyb3dzZXJEZXRlY3Rvci5faXNDaHJvbWU3NjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXNDaHJvbWU3NygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yLl9pc0Nocm9tZTc3O1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VCcm93c2VyTmFtZUFuZFZlcnNpb24oKTogc3RyaW5nIHtcbiAgICBpZiAoIW5hdmlnYXRvciB8fCAhbmF2aWdhdG9yLnVzZXJBZ2VudCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGJyb3dzZXJOYW1lQW5kVmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goQnJvd3NlckRldGVjdG9yLl9icm93c2VyTmFtZUFuZFZlcnNpb25SZWdleCk7XG5cbiAgICBpZiAoYnJvd3Nlck5hbWVBbmRWZXJzaW9uICYmIGJyb3dzZXJOYW1lQW5kVmVyc2lvblswXSkge1xuICAgICAgcmV0dXJuIGJyb3dzZXJOYW1lQW5kVmVyc2lvblswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yLnBhcnNlQnJvd3Nlck5hbWVBbmRWZXJzaW9uRm9ySUUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHBhcnNlQnJvd3Nlck5hbWUoKTogc3RyaW5nIHtcbiAgICBpZiAoIUJyb3dzZXJEZXRlY3Rvci5fYnJvd3Nlck5hbWVBbmRWZXJzaW9uKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgYnJvd3Nlck5hbWVMaXN0ID0gQnJvd3NlckRldGVjdG9yLl9icm93c2VyTmFtZUFuZFZlcnNpb24uc3BsaXQoJy8nKTtcblxuICAgIGlmICghYnJvd3Nlck5hbWVMaXN0IHx8ICFicm93c2VyTmFtZUxpc3RbMF0pIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gYnJvd3Nlck5hbWVMaXN0WzBdO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VCcm93c2VyTWFqb3JWZXJzaW9uKCk6IG51bWJlciB7XG4gICAgaWYgKCFCcm93c2VyRGV0ZWN0b3IuX2Jyb3dzZXJOYW1lQW5kVmVyc2lvbikge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgY29uc3QgYnJvd3NlclZlcnNpb25MaXN0ID0gQnJvd3NlckRldGVjdG9yLl9icm93c2VyTmFtZUFuZFZlcnNpb24uc3BsaXQoJy8nKTtcblxuICAgIGlmICghYnJvd3NlclZlcnNpb25MaXN0IHx8ICFicm93c2VyVmVyc2lvbkxpc3RbMV0pIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGNvbnN0IGZ1bGxWZXJzaW9uID0gYnJvd3NlclZlcnNpb25MaXN0WzFdO1xuXG4gICAgaWYgKCFmdWxsVmVyc2lvbikge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIE51bWJlcihmdWxsVmVyc2lvbi5zcGxpdCgnLicpWzBdKSB8fCAwO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VCcm93c2VyTmFtZUFuZFZlcnNpb25Gb3JJRSgpOiBzdHJpbmcge1xuICAgIGlmICghbmF2aWdhdG9yIHx8ICFuYXZpZ2F0b3IudXNlckFnZW50KSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICBjb25zdCBtc2llID0gdXNlckFnZW50LmluZGV4T2YoJ01TSUUgJyk7XG5cbiAgICBpZiAobXNpZSA+IDApIHtcbiAgICAgIC8vIElFIDEwIG9yIG9sZGVyID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxuICAgICAgcmV0dXJuIGBJRS8ke3BhcnNlSW50KHVzZXJBZ2VudC5zdWJzdHJpbmcobXNpZSArIDUsIHVzZXJBZ2VudC5pbmRleE9mKCcuJywgbXNpZSkpLCAxMCl9YDtcbiAgICB9XG5cbiAgICBjb25zdCB0cmlkZW50ID0gdXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQvJyk7XG5cbiAgICBpZiAodHJpZGVudCA+IDApIHtcbiAgICAgIC8vIElFIDExID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxuICAgICAgY29uc3QgdmVyc2lvbiA9IHVzZXJBZ2VudC5pbmRleE9mKCdydjonKTtcblxuICAgICAgcmV0dXJuIGBJRS8ke3BhcnNlSW50KHVzZXJBZ2VudC5zdWJzdHJpbmcodmVyc2lvbiArIDMsIHVzZXJBZ2VudC5pbmRleE9mKCcuJywgdmVyc2lvbikpLCAxMCl9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCBUZWxlbWV0cnlMZXZlbE1hcHBpbmcgZnJvbSAnLi4vbWV0cmljcy9UZWxlbWV0cmljTGV2ZWxNYXBwaW5nJztcbmltcG9ydCBUZWxlbWV0cnlEZWZhdWx0IGZyb20gJy4uL21ldHJpY3MvVGVsZW1ldHJ5RGVmYXVsdCc7XG5pbXBvcnQgTG9nZ2luZ0xldmVsTWFwcGluZyBmcm9tICcuLi9sb2dnZXIvTG9nZ2luZ0xldmVsTWFwcGluZyc7XG5pbXBvcnQgTG9nZ2VyRGVmYXVsdHMgZnJvbSAnLi4vbG9nZ2VyL0xvZ2dlckRlZmF1bHRzJztcblxuLy8gVGhpcyBmaWxlIGlzIHVzZWQgb25seSBmb3IgdGhlIHNpbGVudCBidWlsZCB0byBtb2NrIENvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXIgY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYWluQ29uZmlndXJhdGlvblBhcmFtZXRlclJlYWRlciB7XG4gIGdldFN0cmluZ1ZhbHVlKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFN0cmluZ1ZhbHVlW25hbWVdO1xuICB9XG5cbiAgZ2V0Qm9vbGVhblZhbHVlKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRCb29sZWFuVmFsdWVbbmFtZV07XG4gIH1cblxuICBwcml2YXRlIGdldCBkZWZhdWx0U3RyaW5nVmFsdWUoKTogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIHJldHVybiB7XG4gICAgICAncGhlbml4LW1ldHJpY3MtbGV2ZWwnOiBUZWxlbWV0cnlMZXZlbE1hcHBpbmcuY29udmVydFRlbGVtZXRyeUxldmVsVG9UZWxlbWV0cnlMZXZlbFR5cGUoVGVsZW1ldHJ5RGVmYXVsdC5kZWZhdWx0VGVsZW1ldHJ5TGV2ZWwpLFxuICAgICAgJ3BoZW5peC1sb2dnaW5nLWxldmVsJzogTG9nZ2luZ0xldmVsTWFwcGluZy5jb252ZXJ0TG9nZ2luZ0xldmVsVG9Mb2dnaW5nTGV2ZWxUeXBlKExvZ2dlckRlZmF1bHRzLmRlZmF1bHRMb2dnaW5nTGV2ZWwpLFxuICAgICAgJ3BoZW5peC1jb25zb2xlLWxvZ2dpbmctbGV2ZWwnOiBMb2dnaW5nTGV2ZWxNYXBwaW5nLmNvbnZlcnRMb2dnaW5nTGV2ZWxUb0xvZ2dpbmdMZXZlbFR5cGUoTG9nZ2VyRGVmYXVsdHMuZGVmYXVsdENvbnNvbGVMb2dnaW5nTGV2ZWwpLFxuICAgICAgJ3BoZW5peC10ZWxlbWV0cnktbG9nZ2luZy1sZXZlbCc6IExvZ2dpbmdMZXZlbE1hcHBpbmcuY29udmVydExvZ2dpbmdMZXZlbFRvTG9nZ2luZ0xldmVsVHlwZShMb2dnZXJEZWZhdWx0cy5kZWZhdWx0VGVsZW1ldHJ5TG9nZ2luZ0xldmVsKSxcbiAgICAgICdwaGVuaXgtY2hhbm5lbC10b2tlbic6ICcnLFxuICAgICAgJ3BoZW5peC11cmknOiAnJyxcbiAgICAgICdwaGVuaXgtYmFzZS11cmknOiAnJ1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldCBkZWZhdWx0Qm9vbGVhblZhbHVlKCk6IHsgW25hbWU6IHN0cmluZ106IGJvb2xlYW4gfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdwaGVuaXgtYXV0b21hdGljYWxseS1yZXRyeS1vbi1mYWlsdXJlJzogdHJ1ZSxcbiAgICAgICdwaGVuaXgtYXV0b21hdGljYWxseS1yZWNvbm5lY3QtcGVlci1jb25uZWN0aW9uJzogdHJ1ZVxuICAgIH07XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IElEaXNwb3NhYmxlIGZyb20gJy4uL2xhbmcvSURpc3Bvc2FibGUnO1xuaW1wb3J0IERpc3Bvc2FibGUgZnJvbSAnLi4vbGFuZy9EaXNwb3NhYmxlJztcbmltcG9ydCBTdWJqZWN0IGZyb20gJy4uL3J4L1N1YmplY3QnO1xuaW1wb3J0IERpc3Bvc2FibGVMaXN0IGZyb20gJy4uL2xhbmcvRGlzcG9zYWJsZUxpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXR3b3JrTW9uaXRvciBpbXBsZW1lbnRzIElEaXNwb3NhYmxlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfZGlzcG9zYWJsZXM6IERpc3Bvc2FibGVMaXN0ID0gbmV3IERpc3Bvc2FibGVMaXN0KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2lzU3VwcG9ydGVkID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvclsnY29ubmVjdGlvbiddO1xuICBwcml2YXRlIHJlYWRvbmx5IF9ydHQ6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0KHVuZGVmaW5lZCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2VmZmVjdGl2ZVR5cGU6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KHVuZGVmaW5lZCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Rvd25saW5rVGhyb3VnaHB1dENhcGFjaXR5OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdCh1bmRlZmluZWQpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmICghdGhpcy5pc1N1cHBvcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0dXBOZXR3b3JrQ2hhbmdlTGlzdGVuZXJzKCk7XG4gICAgdGhpcy51cGRhdGVTdGF0aXN0aWNzKCk7XG4gIH1cblxuICBnZXQgaXNTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU3VwcG9ydGVkO1xuICB9XG5cbiAgZ2V0IHJ0dCgpOiBTdWJqZWN0PG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl9ydHQ7XG4gIH1cblxuICBnZXQgZWZmZWN0aXZlVHlwZSgpOiBTdWJqZWN0PHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9lZmZlY3RpdmVUeXBlO1xuICB9XG5cbiAgZ2V0IGRvd25saW5rVGhyb3VnaHB1dENhcGFjaXR5KCk6IFN1YmplY3Q8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rvd25saW5rVGhyb3VnaHB1dENhcGFjaXR5O1xuICB9XG5cbiAgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kaXNwb3NhYmxlcy5kaXNwb3NlKCk7XG4gIH1cblxuICBwcml2YXRlIGdldERvd25saW5rVGhyb3VnaHB1dENhcGFjaXR5KCk6IG51bWJlciB7XG4gICAgaWYgKCF0aGlzLmlzU3VwcG9ydGVkKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hdmlnYXRvclsnY29ubmVjdGlvbiddLmRvd25saW5rIHx8IG5hdmlnYXRvclsnY29ubmVjdGlvbiddLmRvd25saW5rTWF4O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFZmZlY3RpdmVUeXBlKCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLmlzU3VwcG9ydGVkKSB7XG4gICAgICByZXR1cm4gJ1Vua25vd24nO1xuICAgIH1cblxuICAgIHJldHVybiBuYXZpZ2F0b3JbJ2Nvbm5lY3Rpb24nXS5lZmZlY3RpdmVUeXBlIHx8IG5hdmlnYXRvclsnY29ubmVjdGlvbiddLnR5cGU7XG4gIH1cblxuICBwcml2YXRlIGdldFJvdW5kVHJpcFRpbWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yWydjb25uZWN0aW9uJ10ucnR0O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cE5ldHdvcmtDaGFuZ2VMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSAoKTogdm9pZCA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRpc3RpY3MoKTtcbiAgICB9O1xuXG4gICAgbmF2aWdhdG9yWydjb25uZWN0aW9uJ10uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgbGlzdGVuZXIpO1xuXG4gICAgdGhpcy5fZGlzcG9zYWJsZXMuYWRkKG5ldyBEaXNwb3NhYmxlKCgpID0+IHtcbiAgICAgIG5hdmlnYXRvclsnY29ubmVjdGlvbiddLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGxpc3RlbmVyKTtcbiAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVN0YXRpc3RpY3MoKTogdm9pZCB7XG4gICAgdGhpcy5fcnR0LnZhbHVlID0gdGhpcy5nZXRSb3VuZFRyaXBUaW1lKCk7XG4gICAgdGhpcy5fZWZmZWN0aXZlVHlwZS52YWx1ZSA9IHRoaXMuZ2V0RWZmZWN0aXZlVHlwZSgpO1xuICAgIHRoaXMuX2Rvd25saW5rVGhyb3VnaHB1dENhcGFjaXR5LnZhbHVlID0gdGhpcy5nZXREb3dubGlua1Rocm91Z2hwdXRDYXBhY2l0eSgpO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5kZWNsYXJlIGNvbnN0IF9fUFJJVkFDWV9NT0RFX186IGJvb2xlYW47XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaXZhY3lNb2RlIHtcbiAgcHJpdmF0ZSBzdGF0aWMgX2lzUHJpdmF0ZTogYm9vbGVhbjtcblxuICBzdGF0aWMgZ2V0IGlzUHJpdmF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNQcml2YXRlO1xuICB9XG5cbiAgc3RhdGljIGFwcGx5SXNQcml2YXRlKCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9pc1ByaXZhdGUgPSBfX1BSSVZBQ1lfTU9ERV9fO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuX2lzUHJpdmF0ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG5Qcml2YWN5TW9kZS5hcHBseUlzUHJpdmF0ZSgpOyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IE1ldHJpY3NUeXBlIGZyb20gJy4uL21ldHJpY3MvTWV0cmljc1R5cGUnO1xuaW1wb3J0IE1ldHJpY1R5cGUgZnJvbSAnLi4vbWV0cmljcy9NZXRyaWNUeXBlJztcbmltcG9ydCBEdXJhdGlvbnMgZnJvbSAnLi4vdGltZS9EdXJhdGlvbic7XG5pbXBvcnQge0lMb2dnZXJ9IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXJJbnRlcmZhY2UnO1xuaW1wb3J0IFNESyBmcm9tICcuLi9zZGsvU0RLJztcbmltcG9ydCBMb2dnZXJGYWN0b3J5IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXJGYWN0b3J5JztcblxuZXhwb3J0IGNsYXNzIFN0cmVhbVNldHVwTGlzdGVuZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IF9sb2dnZXI6IElMb2dnZXIgPSBMb2dnZXJGYWN0b3J5LmdldExvZ2dlcignU3RyZWFtU2V0dXBMaXN0ZW5lcicpO1xuICBwcml2YXRlIHJlYWRvbmx5IG1ldHJpY3NTZXJ2aWNlID0gU0RLLm1ldHJpY3NTZXJ2aWNlO1xuICBwcml2YXRlIHJlYWRvbmx5IF9wYWdlTG9hZFRpbWU6IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBfc3RhcnRUaW1lOiBudW1iZXI7XG4gIHByaXZhdGUgX21ldHJpY1N1Ym1pdHRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHBhZ2VMb2FkVGltZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLl9wYWdlTG9hZFRpbWUgPSBwYWdlTG9hZFRpbWU7XG4gIH1cblxuICBzdWNjZXNzKHN0cmVhbUlkKTogdm9pZCB7XG4gICAgdGhpcy5yZWNvcmRTdHJlYW1NZXRyaWMoTWV0cmljc1R5cGUuU2V0dXBDb21wbGV0ZWQsIHN0cmVhbUlkKTtcbiAgfVxuXG4gIGZhaWwoKTogdm9pZCB7XG4gICAgdGhpcy5yZWNvcmRTdHJlYW1NZXRyaWMoTWV0cmljc1R5cGUuU2V0dXBGYWlsZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWNvcmRTdHJlYW1NZXRyaWMobWV0cmljVHlwZTogTWV0cmljc1R5cGUsIHN0cmVhbUlkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX21ldHJpY1N1Ym1pdHRlZCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG5cbiAgICB0aGlzLl9tZXRyaWNTdWJtaXR0ZWQgPSB0cnVlO1xuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBzZXR1cFRpbWUgPSBub3cgLSB0aGlzLl9zdGFydFRpbWU7XG4gICAgY29uc3QgbWV0cmljTmFtZSA9IG5ldyBNZXRyaWNUeXBlKG1ldHJpY1R5cGUpLmdldE5hbWUoKTtcblxuICAgIHRoaXMubWV0cmljc1NlcnZpY2UucHVzaCh7XG4gICAgICBtZXRyaWNUeXBlLFxuICAgICAgcnVudGltZTogKG5vdyAtIHRoaXMuX3BhZ2VMb2FkVGltZSkgLyAxMDAwLFxuICAgICAgdmFsdWU6IHt1aW50NjQ6IHNldHVwVGltZX0sXG4gICAgICBzdHJlYW1JZFxuICAgIH0pO1xuXG4gICAgdGhpcy5fbG9nZ2VyLmluZm8oXG4gICAgICAnWyVzXSBbJXNdIFN0cmVhbSBtZXRyaWMgWyVzXSBpbiBbJXNdJyxcbiAgICAgIG5ldyBEdXJhdGlvbnMobm93IC0gdGhpcy5fcGFnZUxvYWRUaW1lKS50b0lzb1N0cmluZygpLFxuICAgICAgc3RyZWFtSWQsXG4gICAgICBtZXRyaWNOYW1lLFxuICAgICAgbmV3IER1cmF0aW9ucyhzZXR1cFRpbWUpLnRvSXNvU3RyaW5nKClcbiAgICApO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQgSURpc3Bvc2FibGUgZnJvbSAnLi9JRGlzcG9zYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3Bvc2FibGUgaW1wbGVtZW50cyBJRGlzcG9zYWJsZSB7XG4gIHByaXZhdGUgX2Rpc3Bvc2VkOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNwb3NhYmxlOiAoKSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKGRpc3Bvc2FibGU6ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLl9kaXNwb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2Rpc3Bvc2FibGUgPSBkaXNwb3NhYmxlO1xuICB9XG5cbiAgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGlzcG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9kaXNwb3NlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcy5fZGlzcG9zYWJsZS5jYWxsKHRoaXMpO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQgSURpc3Bvc2FibGUgZnJvbSAnLi9JRGlzcG9zYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3Bvc2FibGVMaXN0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBfbGlzdDogSURpc3Bvc2FibGVbXSA9IFtdO1xuXG4gIGFkZChkaXNwb3NhYmxlOiBJRGlzcG9zYWJsZSk6IHZvaWQge1xuICAgIHRoaXMuX2xpc3QucHVzaChkaXNwb3NhYmxlKTtcbiAgfVxuXG4gIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fbGlzdC5mb3JFYWNoKGRpc3Bvc2FibGUgPT4gZGlzcG9zYWJsZS5kaXNwb3NlKCkpO1xuICAgIHRoaXMuX2xpc3QubGVuZ3RoID0gMDtcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBEaXNwb3NhYmxlTGlzdFtkaXNwb3NhYmxlcz0ke3RoaXMuX2xpc3QubGVuZ3RofV1gO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdzIHtcbiAgc3RhdGljIHJhbmRvbShsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgcmFuZG9tMTNDaGFyYWN0ZXJzID0gKCk6IHN0cmluZyA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDIsIDE1KTtcbiAgICB9O1xuXG4gICAgY29uc3QgbG9vcHM6IG51bWJlciA9IE1hdGguY2VpbChsZW5ndGggLyAxMyk7XG5cbiAgICByZXR1cm4gbmV3IEFycmF5KGxvb3BzKS5maWxsKHJhbmRvbTEzQ2hhcmFjdGVycykucmVkdWNlKChzdHJpbmcsIGZ1bmMpID0+IHtcbiAgICAgIHJldHVybiBzdHJpbmcgKyBmdW5jKCk7XG4gICAgfSwgJycpLnN1YnN0cmluZygwLCBsZW5ndGgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0cmluZ3MgaXMgYSBzdGF0aWMgY2xhc3MgdGhhdCBtYXkgbm90IGJlIGluc3RhbnRpYXRlZCcpO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0VW5yZWFjaGFibGUoeDogbmV2ZXIpOiBuZXZlciB7XG4gIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCB2YWx1ZSBbJHt4fV0uIFRoaXMgc2hvdWxkIG5ldmVyIGJlIHJlYWNoZWRgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXNzZXJ0VW5yZWFjaGFibGU7IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQge0lBcHBlbmRlcn0gZnJvbSAnLi9JQXBwZW5kZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBlbmRlcnMge1xuICBwcml2YXRlIF9hcHBlbmRlcnM6IEFycmF5PElBcHBlbmRlcj4gPSBbXTtcblxuICBnZXQgdmFsdWUoKTogQXJyYXk8SUFwcGVuZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGVuZGVycztcbiAgfVxuXG4gIGFkZChhcHBlbmRlcjogSUFwcGVuZGVyKTogdm9pZCB7XG4gICAgdGhpcy5fYXBwZW5kZXJzLnB1c2goYXBwZW5kZXIpO1xuICB9XG5cbiAgcmVtb3ZlKGFwcGVuZGVyKTogdm9pZCB7XG4gICAgdGhpcy5fYXBwZW5kZXJzID0gdGhpcy5fYXBwZW5kZXJzLnJlZHVjZSgoaXRlbXMsIGl0ZW0pID0+IHtcbiAgICAgIGlmICghKGl0ZW0gPT09IGFwcGVuZGVyKSkge1xuICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaXRlbXM7XG4gICAgfSwgW10gYXMgQXJyYXk8SUFwcGVuZGVyPik7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCB7SUFwcGVuZGVyfSBmcm9tICcuL0lBcHBlbmRlcic7XG5pbXBvcnQge0xvZ2dpbmdMZXZlbH0gZnJvbSAnLi9Mb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zb2xlQXBwZW5kZXIgaW1wbGVtZW50cyBJQXBwZW5kZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IF90aHJlc2hvbGQ6IExvZ2dpbmdMZXZlbDtcblxuICBsb2cobG9nTGV2ZWw6IExvZ2dpbmdMZXZlbCwgbWVzc2FnZTogc3RyaW5nLCBjYXRlZ29yeTogc3RyaW5nLCBkYXRlOiBEYXRlKTogdm9pZCB7XG4gICAgaWYgKGxvZ0xldmVsIDwgdGhpcy5fdGhyZXNob2xkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZnVsbE1lc3NhZ2UgPSBgJHtkYXRlLnRvSVNPU3RyaW5nKCl9IFske2NhdGVnb3J5fV0gWyR7TG9nZ2luZ0xldmVsW2xvZ0xldmVsXX1dICR7bWVzc2FnZX1gO1xuXG4gICAgaWYgKGxvZ0xldmVsIDwgTG9nZ2luZ0xldmVsLldhcm4pIHtcbiAgICAgIGNvbnNvbGUubG9nKGZ1bGxNZXNzYWdlKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUuZXJyb3IoZnVsbE1lc3NhZ2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IodGhyZXNob2xkOiBMb2dnaW5nTGV2ZWwpIHtcbiAgICB0aGlzLl90aHJlc2hvbGQgPSB0aHJlc2hvbGQ7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCB7SUFwcGVuZGVyfSBmcm9tICcuL0lBcHBlbmRlcic7XG5pbXBvcnQgQXBwZW5kZXJzIGZyb20gJy4vQXBwZW5kZXJzJztcbmltcG9ydCBMb2dnaW5nVGhyZXNob2xkIGZyb20gJy4vTG9nZ2luZ1RocmVzaG9sZCc7XG5cbmV4cG9ydCBlbnVtIExvZ2dpbmdMZXZlbCB7XG4gIEFsbCA9IC0xLFxuICBUcmFjZSA9IDEwLFxuICBEZWJ1ZyA9IDIwLFxuICBJbmZvID0gMzAsXG4gIFdhcm4gPSA0MCxcbiAgRXJyb3IgPSA1MCxcbiAgRmF0YWwgPSA2MCxcbiAgT2ZmID0gMTAwLFxufVxuXG5leHBvcnQgdHlwZSBMb2dnaW5nTGV2ZWxUeXBlID0gJ09mZicgfCAnVHJhY2UnIHwgJ0RlYnVnJyB8ICdJbmZvJyB8ICdXYXJuJyB8ICdFcnJvcicgfCAnRmF0YWwnIHwgJ0FsbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2NhdGVnb3J5OiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2FwcGVuZGVyczogQXBwZW5kZXJzO1xuICBwcml2YXRlIHJlYWRvbmx5IF90aHJlc2hvbGQ6IExvZ2dpbmdUaHJlc2hvbGQ7XG5cbiAgZ2V0IGNhdGVnb3J5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NhdGVnb3J5O1xuICB9XG5cbiAgZ2V0IGFwcGVuZGVycygpOiBBcHBlbmRlcnMge1xuICAgIHJldHVybiB0aGlzLl9hcHBlbmRlcnM7XG4gIH1cblxuICBnZXQgdGhyZXNob2xkKCk6IExvZ2dpbmdUaHJlc2hvbGQge1xuICAgIHJldHVybiB0aGlzLl90aHJlc2hvbGQ7XG4gIH1cblxuICB0cmFjZSguLi5hcmdzOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3RocmVzaG9sZC52YWx1ZSB8fCB0aGlzLl90aHJlc2hvbGQudmFsdWUgPiBMb2dnaW5nTGV2ZWwuVHJhY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvZyhMb2dnaW5nTGV2ZWwuVHJhY2UsIGFyZ3MpO1xuICB9XG5cbiAgZGVidWcoLi4uYXJnczogYW55KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl90aHJlc2hvbGQudmFsdWUgfHwgdGhpcy5fdGhyZXNob2xkLnZhbHVlID4gTG9nZ2luZ0xldmVsLkRlYnVnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sb2coTG9nZ2luZ0xldmVsLkRlYnVnLCBhcmdzKTtcbiAgfVxuXG4gIGluZm8oLi4uYXJnczogYW55KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl90aHJlc2hvbGQudmFsdWUgfHwgdGhpcy5fdGhyZXNob2xkLnZhbHVlID4gTG9nZ2luZ0xldmVsLkluZm8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvZyhMb2dnaW5nTGV2ZWwuSW5mbywgYXJncyk7XG4gIH1cblxuICB3YXJuKC4uLmFyZ3M6IGFueSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fdGhyZXNob2xkLnZhbHVlIHx8IHRoaXMuX3RocmVzaG9sZC52YWx1ZSA+IExvZ2dpbmdMZXZlbC5XYXJuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sb2coTG9nZ2luZ0xldmVsLldhcm4sIGFyZ3MpO1xuICB9XG5cbiAgZXJyb3IoLi4uYXJnczogYW55KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl90aHJlc2hvbGQudmFsdWUgfHwgdGhpcy5fdGhyZXNob2xkLnZhbHVlID4gTG9nZ2luZ0xldmVsLkVycm9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sb2coTG9nZ2luZ0xldmVsLkVycm9yLCBhcmdzKTtcbiAgfVxuXG4gIGZhdGFsKC4uLmFyZ3M6IGFueSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fdGhyZXNob2xkLnZhbHVlIHx8IHRoaXMuX3RocmVzaG9sZC52YWx1ZSA+IExvZ2dpbmdMZXZlbC5GYXRhbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubG9nKExvZ2dpbmdMZXZlbC5GYXRhbCwgYXJncyk7XG4gIH1cblxuICBwcml2YXRlIGxvZyhsZXZlbDogbnVtYmVyLCBhcmdzOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5yZXBsYWNlUGxhY2Vob2xkZXJzKGFyZ3MpO1xuXG4gICAgdGhpcy5fYXBwZW5kZXJzLnZhbHVlLmZvckVhY2goKGFwcGVuZGVyOiBJQXBwZW5kZXIpID0+IHtcbiAgICAgIGFwcGVuZGVyLmxvZyhsZXZlbCwgbWVzc2FnZSwgdGhpcy5jYXRlZ29yeSwgZGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlcGxhY2VQbGFjZWhvbGRlcnMoYXJnczogYW55KTogc3RyaW5nIHtcbiAgICBsZXQgcmVwbGFjZVBsYWNlaG9sZGVyc1N0cmluZyA9IGFyZ3NbMF07XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIHdoaWxlIChyZXBsYWNlUGxhY2Vob2xkZXJzU3RyaW5nLmluZGV4T2YgJiYgYXJncy5sZW5ndGggPiAxICYmIGluZGV4ID49IDApIHtcbiAgICAgIGluZGV4ID0gcmVwbGFjZVBsYWNlaG9sZGVyc1N0cmluZy5pbmRleE9mKCclJywgaW5kZXgpO1xuXG4gICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSByZXBsYWNlUGxhY2Vob2xkZXJzU3RyaW5nLnN1YnN0cmluZyhpbmRleCArIDEsIGluZGV4ICsgMik7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSAnJSc6XG4gICAgICAgICAgICAvLyBFc2NhcGVkICclJScgdHVybnMgaW50byAnJSdcbiAgICAgICAgICAgIHJlcGxhY2VQbGFjZWhvbGRlcnNTdHJpbmcgPSByZXBsYWNlUGxhY2Vob2xkZXJzU3RyaW5nLnN1YnN0cmluZygwLCBpbmRleCkgKyByZXBsYWNlUGxhY2Vob2xkZXJzU3RyaW5nLnN1YnN0cmluZyhpbmRleCArIDEpO1xuICAgICAgICAgICAgaW5kZXgrKztcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgICAgICAvLyBSZXBsYWNlICclZCcgb3IgJyVzJyB3aXRoIHRoZSBhcmd1bWVudFxuICAgICAgICAgICAgYXJnc1swXSA9IHJlcGxhY2VQbGFjZWhvbGRlcnNTdHJpbmcgPSB0aGlzLnJlcGxhY2VBcmd1bWVudChcbiAgICAgICAgICAgICAgdGhpcy50b1N0cmluZyhhcmdzWzFdKSxcbiAgICAgICAgICAgICAgcmVwbGFjZVBsYWNlaG9sZGVyc1N0cmluZyxcbiAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBhcmdzLnNwbGljZSgxLCAxKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaic6XG4gICAgICAgICAgICAvLyBSZXBsYWNlICVqJyB3aXRoIHRoZSBhcmd1bWVudFxuICAgICAgICAgICAgYXJnc1swXSA9IHJlcGxhY2VQbGFjZWhvbGRlcnNTdHJpbmcgPSB0aGlzLnJlcGxhY2VBcmd1bWVudChcbiAgICAgICAgICAgICAgdGhpcy5zdHJpbmdpZnkoYXJnc1sxXSksXG4gICAgICAgICAgICAgIHJlcGxhY2VQbGFjZWhvbGRlcnNTdHJpbmcsXG4gICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBhcmdzLnNwbGljZSgxLCAxKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBhcmdzLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XG4gICAgICBhcmdzID0gYXJncy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBjdXJyZW50VmFsdWUsIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggKyAxID09PSBhcnJheS5sZW5ndGggJiYgY3VycmVudFZhbHVlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gYWNjdW11bGF0b3IgKyAnXFxuJyArIHRoaXMudG9TdHJpbmcoY3VycmVudFZhbHVlLnN0YWNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvciArIGBbJHt0aGlzLnRvU3RyaW5nKGN1cnJlbnRWYWx1ZSl9XWA7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJncy50b1N0cmluZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdHJpbmdpZnkoYXJnOiBhbnkpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNhY2hlID0gW107XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KFxuICAgICAgICBhcmcgaW5zdGFuY2VvZiBFcnJvciA/IHRoaXMudG9TdHJpbmcoYXJnKSA6IGFyZyxcbiAgICAgICAgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICBpZiAoISF2YWx1ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgaWYgKGNhY2hlLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICByZXR1cm4gJzxyZWN1cnNpdmU+JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FjaGUucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICAyXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAnW29iamVjdCBpbnZhbGlkIEpTT04uc3RyaW5naWZ5XSc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXBsYWNlQXJndW1lbnQoYXJndW1lbnQ6IGFueSwgcmVwbGFjZVBsYWNlaG9sZGVyc1N0cmluZzogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcmVwbGFjZVBsYWNlaG9sZGVyc1N0cmluZy5zdWJzdHJpbmcoMCwgaW5kZXgpICsgdGhpcy50b1N0cmluZyhhcmd1bWVudCkgKyByZXBsYWNlUGxhY2Vob2xkZXJzU3RyaW5nLnN1YnN0cmluZyhpbmRleCArIDIpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b1N0cmluZyhkYXRhOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm4gZGF0YSA/ICd0cnVlJyA6ICdmYWxzZSc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBsZXQgdG9TdHJpbmdTdHIgPSAnJztcblxuICAgIGlmIChkYXRhKSB7XG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdG9TdHJpbmdTdHIgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICB9IGVsc2UgaWYgKGRhdGEgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0b1N0cmluZ1N0ciA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRvU3RyaW5nU3RyID0gJ1tvYmplY3QgaW52YWxpZCB0b1N0cmluZygpXSc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9TdHJpbmdTdHI7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihjYXRlZ29yeTogc3RyaW5nLCBhcHBlbmRlcnM6IEFwcGVuZGVycywgdGhyZXNob2xkOiBMb2dnaW5nVGhyZXNob2xkKSB7XG4gICAgdGhpcy5fY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICB0aGlzLl9hcHBlbmRlcnMgPSBhcHBlbmRlcnM7XG4gICAgdGhpcy5fdGhyZXNob2xkID0gdGhyZXNob2xkO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQgUHJpdmFjeU1vZGUgZnJvbSAnLi4vZG9tL1ByaXZhY3lNb2RlJztcbmltcG9ydCB7TG9nZ2luZ0xldmVsfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyRGVmYXVsdHMge1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRMb2dnaW5nTGV2ZWwoKTogTG9nZ2luZ0xldmVsIHtcbiAgICByZXR1cm4gUHJpdmFjeU1vZGUuaXNQcml2YXRlID8gTG9nZ2luZ0xldmVsLk9mZiA6IExvZ2dpbmdMZXZlbC5BbGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGRlZmF1bHRDb25zb2xlTG9nZ2luZ0xldmVsKCk6IExvZ2dpbmdMZXZlbCB7XG4gICAgcmV0dXJuIFByaXZhY3lNb2RlLmlzUHJpdmF0ZSA/IExvZ2dpbmdMZXZlbC5PZmYgOiBMb2dnaW5nTGV2ZWwuQWxsO1xuICB9XG5cbiAgc3RhdGljIGdldCBkZWZhdWx0VGVsZW1ldHJ5TG9nZ2luZ0xldmVsKCk6IExvZ2dpbmdMZXZlbCB7XG4gICAgcmV0dXJuIExvZ2dpbmdMZXZlbC5JbmZvO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQge0lMb2dnZXJ9IGZyb20gJy4vTG9nZ2VySW50ZXJmYWNlJztcbmltcG9ydCBMb2dnZXIsIHtMb2dnaW5nTGV2ZWx9IGZyb20gJy4vTG9nZ2VyJztcbmltcG9ydCBBcHBlbmRlcnMgZnJvbSAnLi9BcHBlbmRlcnMnO1xuaW1wb3J0IExvZ2dpbmdUaHJlc2hvbGQgZnJvbSAnLi9Mb2dnaW5nVGhyZXNob2xkJztcbmltcG9ydCBDb25zb2xlQXBwZW5kZXIgZnJvbSAnLi9Db25zb2xlQXBwZW5kZXInO1xuaW1wb3J0IFRlbGVtZXRyeUFwcGVuZGVyIGZyb20gJy4uL3RlbGVtZXRyeS9UZWxlbWV0cnlBcGVuZGVyJztcbmltcG9ydCBUZWxlbWV0cnlDb25maWd1cmF0aW9uIGZyb20gJy4uL3RlbGVtZXRyeS9UZWxlbWV0cnlDb25maWd1cmF0aW9uJztcbmltcG9ydCBDb25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyIGZyb20gJy4uL2RvbS9Db25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyJztcbmltcG9ydCB7SUNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXJ9IGZyb20gJy4uL2RvbS9JQ29uZmlndXJhdGlvblBhcmFtYXRlclJlYWRlcic7XG5pbXBvcnQgTG9nZ2VyRGVmYXVsdHMgZnJvbSAnLi9Mb2dnZXJEZWZhdWx0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlckZhY3Rvcnkge1xuICBwcml2YXRlIHN0YXRpYyBfY29uZmlndXJhdGlvblBhcmFtZXRlclJlYWRlcjogSUNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXIgPSBuZXcgQ29uZmlndXJhdGlvblBhcmFtZXRlclJlYWRlcigpO1xuICBwcml2YXRlIHN0YXRpYyBfbG9nZ2Vyczoge1tjYXRlZ29yeTogc3RyaW5nXTogSUxvZ2dlcn0gPSB7fTtcbiAgcHJpdmF0ZSBzdGF0aWMgX2FwcGVuZGVyczogQXBwZW5kZXJzID0gbmV3IEFwcGVuZGVycygpO1xuICBwcml2YXRlIHN0YXRpYyBfdGhyZXNob2xkOiBMb2dnaW5nVGhyZXNob2xkID0gbmV3IExvZ2dpbmdUaHJlc2hvbGQoKTtcbiAgcHJpdmF0ZSBzdGF0aWMgX3RlbGVtZXRyeUNvbmZpZ3VyYXRpb246IFRlbGVtZXRyeUNvbmZpZ3VyYXRpb24gPSBuZXcgVGVsZW1ldHJ5Q29uZmlndXJhdGlvbigpO1xuXG4gIHN0YXRpYyBnZXQgdGVsZW1ldHJ5Q29uZmlndXJhdGlvbigpOiBUZWxlbWV0cnlDb25maWd1cmF0aW9uIHtcbiAgICByZXR1cm4gTG9nZ2VyRmFjdG9yeS5fdGVsZW1ldHJ5Q29uZmlndXJhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBnZXRMb2dnZXIoY2F0ZWdvcnk6IHN0cmluZyk6IElMb2dnZXIge1xuICAgIGlmICh0eXBlb2YgY2F0ZWdvcnkgIT09ICdzdHJpbmcnKSB7XG4gICAgICBjYXRlZ29yeSA9ICdTREsnO1xuICAgIH1cblxuICAgIGNvbnN0IGxvZ2dlciA9IExvZ2dlckZhY3RvcnkuX2xvZ2dlcnNbY2F0ZWdvcnldO1xuXG4gICAgaWYgKGxvZ2dlcikge1xuICAgICAgcmV0dXJuIGxvZ2dlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gTG9nZ2VyRmFjdG9yeS5fbG9nZ2Vyc1tjYXRlZ29yeV0gPSBuZXcgTG9nZ2VyKGNhdGVnb3J5LCB0aGlzLl9hcHBlbmRlcnMsIHRoaXMuX3RocmVzaG9sZCk7XG4gIH1cblxuICBzdGF0aWMgYXBwbHlMb2dnZXJDb25maWdGcm9tUGFyYW1ldGVyQ29uZmlndXJhdGlvbigpOiB2b2lkIHtcbiAgICBMb2dnZXJGYWN0b3J5LmFwcGx5TG9nZ2luZ0xldmVsKCk7XG4gICAgTG9nZ2VyRmFjdG9yeS5hcHBseUFwcGVuZGVyTG9nZ2luZ0xldmVsKCdjb25zb2xlJywgTG9nZ2VyRmFjdG9yeS5hcHBseUNvbnNvbGVMb2dnZXIuYmluZCh0aGlzKSk7XG4gICAgTG9nZ2VyRmFjdG9yeS5hcHBseUFwcGVuZGVyTG9nZ2luZ0xldmVsKCd0ZWxlbWV0cnknLCBMb2dnZXJGYWN0b3J5LmFwcGx5VGVsZW1ldHJ5TG9nZ2VyLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgYXBwbHlMb2dnaW5nTGV2ZWwoKTogdm9pZCB7XG4gICAgY29uc3QgcGFyYW1ldGVyVmFsdWUgPSB0aGlzLl9jb25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyLmdldFN0cmluZ1ZhbHVlKCdwaGVuaXgtbG9nZ2luZy1sZXZlbCcpO1xuXG4gICAgaWYgKExvZ2dpbmdMZXZlbFtwYXJhbWV0ZXJWYWx1ZV0pIHtcbiAgICAgIHRoaXMuX3RocmVzaG9sZC5zZXRUaHJlc2hvbGQoTG9nZ2luZ0xldmVsW3BhcmFtZXRlclZhbHVlXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgYXBwbHlBcHBlbmRlckxvZ2dpbmdMZXZlbChuYW1lOiBzdHJpbmcsIGFwcGx5QXBwZW5kZXI6IChsZXZlbDogTG9nZ2luZ0xldmVsKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgY29uc3QgcGFyYW1ldGVyVmFsdWUgPSB0aGlzLl9jb25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyLmdldFN0cmluZ1ZhbHVlKGBwaGVuaXgtJHtuYW1lfS1sb2dnaW5nLWxldmVsYCk7XG5cbiAgICBpZiAocGFyYW1ldGVyVmFsdWUgPT09ICdPZmYnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXBwbHlBcHBlbmRlcihMb2dnaW5nTGV2ZWxbcGFyYW1ldGVyVmFsdWVdKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGFwcGx5Q29uc29sZUxvZ2dlcihsZXZlbDogTG9nZ2luZ0xldmVsKTogdm9pZCB7XG4gICAgdGhpcy5fYXBwZW5kZXJzLmFkZChuZXcgQ29uc29sZUFwcGVuZGVyKGxldmVsIHx8IExvZ2dlckRlZmF1bHRzLmRlZmF1bHRDb25zb2xlTG9nZ2luZ0xldmVsKSk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBhcHBseVRlbGVtZXRyeUxvZ2dlcihsZXZlbDogTG9nZ2luZ0xldmVsKTogdm9pZCB7XG4gICAgdGhpcy5fdGVsZW1ldHJ5Q29uZmlndXJhdGlvbi50aHJlc2hvbGQgPSBsZXZlbCB8fCBMb2dnZXJEZWZhdWx0cy5kZWZhdWx0VGVsZW1ldHJ5TG9nZ2luZ0xldmVsO1xuXG4gICAgdGhpcy5fYXBwZW5kZXJzLmFkZChuZXcgVGVsZW1ldHJ5QXBwZW5kZXIodGhpcy5fdGVsZW1ldHJ5Q29uZmlndXJhdGlvbikpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvZ2dlckZhY3RvcnkgaXMgYSBzdGF0aWMgY2xhc3MgdGhhdCBtYXkgbm90IGJlIGluc3RhbnRpYXRlZCcpO1xuICB9XG59XG5cbkxvZ2dlckZhY3RvcnkuYXBwbHlMb2dnZXJDb25maWdGcm9tUGFyYW1ldGVyQ29uZmlndXJhdGlvbigpOyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IGFzc2VydFVucmVhY2hhYmxlIGZyb20gJy4uL2xhbmcvYXNzZXJ0VW5yZWFjaGFibGUnO1xuaW1wb3J0IHtMb2dnaW5nTGV2ZWwsIExvZ2dpbmdMZXZlbFR5cGV9IGZyb20gJy4vTG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2luZ0xldmVsTWFwcGluZyB7XG4gIHN0YXRpYyBjb252ZXJ0TG9nZ2luZ0xldmVsVG9Mb2dnaW5nTGV2ZWxUeXBlKGxvZ2dpbmdMZXZlbDogTG9nZ2luZ0xldmVsKTogTG9nZ2luZ0xldmVsVHlwZSB7XG4gICAgc3dpdGNoIChsb2dnaW5nTGV2ZWwpIHtcbiAgICAgIGNhc2UgTG9nZ2luZ0xldmVsLk9mZjpcbiAgICAgICAgcmV0dXJuICdPZmYnO1xuICAgICAgY2FzZSBMb2dnaW5nTGV2ZWwuVHJhY2U6XG4gICAgICAgIHJldHVybiAnVHJhY2UnO1xuICAgICAgY2FzZSBMb2dnaW5nTGV2ZWwuRGVidWc6XG4gICAgICAgIHJldHVybiAnRGVidWcnO1xuICAgICAgY2FzZSBMb2dnaW5nTGV2ZWwuSW5mbzpcbiAgICAgICAgcmV0dXJuICdUcmFjZSc7XG4gICAgICBjYXNlIExvZ2dpbmdMZXZlbC5XYXJuOlxuICAgICAgICByZXR1cm4gJ1dhcm4nO1xuICAgICAgY2FzZSBMb2dnaW5nTGV2ZWwuRXJyb3I6XG4gICAgICAgIHJldHVybiAnRXJyb3InO1xuICAgICAgY2FzZSBMb2dnaW5nTGV2ZWwuRmF0YWw6XG4gICAgICAgIHJldHVybiAnRmF0YWwnO1xuICAgICAgY2FzZSBMb2dnaW5nTGV2ZWwuQWxsOlxuICAgICAgICByZXR1cm4gJ0FsbCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhc3NlcnRVbnJlYWNoYWJsZShsb2dnaW5nTGV2ZWwpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjb252ZXJ0TG9nZ2luZ0xldmVsVHlwZVRvTG9nZ2luZ0xldmVsKGxvZ2dpbmdMZXZlbFR5cGU6IExvZ2dpbmdMZXZlbFR5cGUpOiBMb2dnaW5nTGV2ZWwge1xuICAgIHN3aXRjaCAobG9nZ2luZ0xldmVsVHlwZSkge1xuICAgICAgY2FzZSAnT2ZmJzpcbiAgICAgICAgcmV0dXJuIExvZ2dpbmdMZXZlbC5PZmY7XG4gICAgICBjYXNlICdUcmFjZSc6XG4gICAgICAgIHJldHVybiBMb2dnaW5nTGV2ZWwuVHJhY2U7XG4gICAgICBjYXNlICdEZWJ1Zyc6XG4gICAgICAgIHJldHVybiBMb2dnaW5nTGV2ZWwuRGVidWc7XG4gICAgICBjYXNlICdJbmZvJzpcbiAgICAgICAgcmV0dXJuIExvZ2dpbmdMZXZlbC5JbmZvO1xuICAgICAgY2FzZSAnV2Fybic6XG4gICAgICAgIHJldHVybiBMb2dnaW5nTGV2ZWwuV2FybjtcbiAgICAgIGNhc2UgJ0Vycm9yJzpcbiAgICAgICAgcmV0dXJuIExvZ2dpbmdMZXZlbC5FcnJvcjtcbiAgICAgIGNhc2UgJ0ZhdGFsJzpcbiAgICAgICAgcmV0dXJuIExvZ2dpbmdMZXZlbC5GYXRhbDtcbiAgICAgIGNhc2UgJ0FsbCc6XG4gICAgICAgIHJldHVybiBMb2dnaW5nTGV2ZWwuQWxsO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXNzZXJ0VW5yZWFjaGFibGUobG9nZ2luZ0xldmVsVHlwZSk7XG4gICAgfVxuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQgTG9nZ2VyRGVmYXVsdHMgZnJvbSAnLi9Mb2dnZXJEZWZhdWx0cyc7XG5pbXBvcnQge0xvZ2dpbmdMZXZlbH0gZnJvbSAnLi9Mb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnaW5nVGhyZXNob2xkIHtcbiAgcHJpdmF0ZSBfdGhyZXNob2xkOiBMb2dnaW5nTGV2ZWwgPSBMb2dnZXJEZWZhdWx0cy5kZWZhdWx0TG9nZ2luZ0xldmVsO1xuXG4gIGdldCB2YWx1ZSgpOiBMb2dnaW5nTGV2ZWwge1xuICAgIHJldHVybiB0aGlzLl90aHJlc2hvbGQ7XG4gIH1cblxuICBzZXRUaHJlc2hvbGQodGhyZXNob2xkOiBMb2dnaW5nTGV2ZWwpOiB2b2lkIHtcbiAgICB0aGlzLl90aHJlc2hvbGQgPSB0aHJlc2hvbGQ7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCB7VGVsZW1ldHJ5TGV2ZWx9IGZyb20gJy4vTWV0cmljc0NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IGFzc2VydFVucmVhY2hhYmxlIGZyb20gJy4uL2xhbmcvYXNzZXJ0VW5yZWFjaGFibGUnO1xuaW1wb3J0IE1ldHJpY3NUeXBlIGZyb20gJy4vTWV0cmljc1R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRyaWNUeXBlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfbWV0cmljczogTWV0cmljc1R5cGU7XG5cbiAgY29uc3RydWN0b3IobWV0cmljczogTWV0cmljc1R5cGUpIHtcbiAgICB0aGlzLl9tZXRyaWNzID0gbWV0cmljcztcbiAgfVxuXG4gIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gTWV0cmljc1R5cGVbdGhpcy5fbWV0cmljc107XG4gIH1cblxuICBnZXRUZWxlbWV0cnlMZXZlbCgpOiBUZWxlbWV0cnlMZXZlbCB7XG4gICAgc3dpdGNoICh0aGlzLl9tZXRyaWNzKSB7XG4gICAgICBjYXNlIE1ldHJpY3NUeXBlLlRpbWVUb0ZpcnN0RnJhbWU6XG4gICAgICAgIHJldHVybiBUZWxlbWV0cnlMZXZlbC5Fc3NlbnRpYWw7XG4gICAgICBjYXNlIE1ldHJpY3NUeXBlLkNoYW5uZWxDcmVhdGlvblRpbWVUb0ZpcnN0RnJhbWU6XG4gICAgICAgIHJldHVybiBUZWxlbWV0cnlMZXZlbC5Fc3NlbnRpYWw7XG4gICAgICBjYXNlIE1ldHJpY3NUeXBlLlN0YWxsZWQ6XG4gICAgICAgIHJldHVybiBUZWxlbWV0cnlMZXZlbC5BbGw7XG4gICAgICBjYXNlIE1ldHJpY3NUeXBlLkJ1ZmZlcmluZzpcbiAgICAgICAgcmV0dXJuIFRlbGVtZXRyeUxldmVsLkFsbDtcbiAgICAgIGNhc2UgTWV0cmljc1R5cGUuU2V0dXBDb21wbGV0ZWQ6XG4gICAgICAgIHJldHVybiBUZWxlbWV0cnlMZXZlbC5BbGw7XG4gICAgICBjYXNlIE1ldHJpY3NUeXBlLlNldHVwRmFpbGVkOlxuICAgICAgICByZXR1cm4gVGVsZW1ldHJ5TGV2ZWwuQWxsO1xuICAgICAgY2FzZSBNZXRyaWNzVHlwZS5Sb3VuZFRyaXBUaW1lOlxuICAgICAgICByZXR1cm4gVGVsZW1ldHJ5TGV2ZWwuQWxsO1xuICAgICAgY2FzZSBNZXRyaWNzVHlwZS5Eb3dubGlua1Rocm91Z2hwdXRDYXBhY2l0eTpcbiAgICAgICAgcmV0dXJuIFRlbGVtZXRyeUxldmVsLkFsbDtcbiAgICAgIGNhc2UgTWV0cmljc1R5cGUuTmV0d29ya1R5cGU6XG4gICAgICAgIHJldHVybiBUZWxlbWV0cnlMZXZlbC5BbGw7XG4gICAgICBjYXNlIE1ldHJpY3NUeXBlLlJlc29sdXRpb25DaGFuZ2VkOlxuICAgICAgICByZXR1cm4gVGVsZW1ldHJ5TGV2ZWwuQWxsO1xuICAgICAgY2FzZSBNZXRyaWNzVHlwZS5BcHBsaWNhdGlvbkZvcmVncm91bmQ6XG4gICAgICAgIHJldHVybiBUZWxlbWV0cnlMZXZlbC5BbGw7XG4gICAgICBjYXNlIE1ldHJpY3NUeXBlLkFwcGxpY2F0aW9uQmFja2dyb3VuZDpcbiAgICAgICAgcmV0dXJuIFRlbGVtZXRyeUxldmVsLkFsbDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFzc2VydFVucmVhY2hhYmxlKHRoaXMuX21ldHJpY3MpO1xuICAgIH1cbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IFRlbGVtZXRyeURlZmF1bHQgZnJvbSAnLi9UZWxlbWV0cnlEZWZhdWx0JztcblxuZXhwb3J0IGVudW0gVGVsZW1ldHJ5TGV2ZWwge1xuICBPZmYgPSAxMDAsXG4gIEVzc2VudGlhbCA9IDEwLFxuICBBbGwgPSAtMVxufVxuXG5leHBvcnQgdHlwZSBUZWxlbWV0cnlMZXZlbFR5cGUgPSAnT2ZmJyB8ICdFc3NlbnRpYWwnIHwgJ0FsbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldHJpY3NDb25maWd1cmF0aW9uIHtcbiAgcHJpdmF0ZSBfdXJsID0gJ2h0dHBzOi8vdGVsZW1ldHJ5LnBoZW5peHJ0cy5jb20vdGVsZW1ldHJ5L21ldHJpY3MnO1xuICBwcml2YXRlIF90ZW5hbmN5OiBzdHJpbmc7XG4gIHByaXZhdGUgX3Nlc3Npb25JZDogc3RyaW5nO1xuICBwcml2YXRlIF9lbnZpcm9ubWVudDogc3RyaW5nO1xuICBwcml2YXRlIF90aHJlc2hvbGQ6IFRlbGVtZXRyeUxldmVsID0gVGVsZW1ldHJ5RGVmYXVsdC5kZWZhdWx0VGVsZW1ldHJ5TGV2ZWw7XG5cbiAgZ2V0IHVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl91cmw7XG4gIH1cblxuICBzZXQgdXJsKHVybDogc3RyaW5nKSB7XG4gICAgY29uc3QgbWV0cmljc1VybCA9IG5ldyBVUkwodXJsKTtcblxuICAgIG1ldHJpY3NVcmwucGF0aG5hbWUgPSBtZXRyaWNzVXJsLnBhdGhuYW1lICsgJy9tZXRyaWNzJztcblxuICAgIHRoaXMuX3VybCA9IG1ldHJpY3NVcmwudG9TdHJpbmcoKTtcbiAgfVxuXG4gIGdldCBlbnZpcm9ubWVudCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9lbnZpcm9ubWVudDtcbiAgfVxuXG4gIHNldCBlbnZpcm9ubWVudChlbnZpcm9ubWVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcbiAgfVxuXG4gIGdldCB0ZW5hbmN5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbmFuY3k7XG4gIH1cblxuICBzZXQgdGVuYW5jeSh0ZW5hbmN5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl90ZW5hbmN5ID0gdGVuYW5jeTtcbiAgfVxuXG4gIGdldCBzZXNzaW9uSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbklkO1xuICB9XG5cbiAgc2V0IHNlc3Npb25JZChzZXNzaW9uSWQ6IHN0cmluZykge1xuICAgIHRoaXMuX3Nlc3Npb25JZCA9IHNlc3Npb25JZDtcbiAgfVxuXG4gIGdldCB0aHJlc2hvbGQoKTogVGVsZW1ldHJ5TGV2ZWwge1xuICAgIHJldHVybiB0aGlzLl90aHJlc2hvbGQ7XG4gIH1cblxuICBzZXQgdGhyZXNob2xkKHRocmVzaG9sZDogVGVsZW1ldHJ5TGV2ZWwpIHtcbiAgICB0aGlzLl90aHJlc2hvbGQgPSB0aHJlc2hvbGQ7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IE1ldHJpY3NTZXJ2aWNlIGZyb20gJy4vTWV0cmljc1NlcnZpY2UnO1xuaW1wb3J0IE1ldHJpY3NDb25maWd1cmF0aW9uLCB7VGVsZW1ldHJ5TGV2ZWx9IGZyb20gJy4vTWV0cmljc0NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IFNESyBmcm9tICcuLi9zZGsvU0RLJztcbmltcG9ydCBUZWxlbWV0cnlVcmwgZnJvbSAnLi4vc2RrL1RlbGVtZXRyeVVybCc7XG5pbXBvcnQgRW52aXJvbm1lbnQgZnJvbSAnLi4vc2RrL0Vudmlyb25tZW50JztcbmltcG9ydCBUZWxlbWV0cnlMZXZlbE1hcHBpbmcgZnJvbSAnLi9UZWxlbWV0cmljTGV2ZWxNYXBwaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0cmljc0ZhY3Rvcnkge1xuICBwcml2YXRlIHN0YXRpYyBfbWV0cmljc1NlcnZpY2VzOiB7W2NhdGVnb3J5OiBzdHJpbmddOiBNZXRyaWNzU2VydmljZX0gPSB7fTtcblxuICBzdGF0aWMgZ2V0TWV0cmljc1NlcnZpY2UodXJsOiBzdHJpbmcpOiBNZXRyaWNzU2VydmljZSB7XG4gICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VyJyk7XG4gICAgfVxuXG4gICAgY29uc3QgbWV0cmljc1NlcnZpY2VzID0gTWV0cmljc0ZhY3RvcnkuX21ldHJpY3NTZXJ2aWNlc1t1cmxdO1xuXG4gICAgaWYgKG1ldHJpY3NTZXJ2aWNlcykge1xuICAgICAgcmV0dXJuIG1ldHJpY3NTZXJ2aWNlcztcbiAgICB9XG5cbiAgICBjb25zdCBtZXRyaWNzQ29uZmlndXJhdGlvbiA9IG5ldyBNZXRyaWNzQ29uZmlndXJhdGlvbigpO1xuXG4gICAgbWV0cmljc0NvbmZpZ3VyYXRpb24uc2Vzc2lvbklkID0gU0RLLmNsaWVudFNlc3Npb25JZDtcbiAgICBtZXRyaWNzQ29uZmlndXJhdGlvbi50ZW5hbmN5ID0gU0RLLnRlbmFuY3kudmFsdWU7XG4gICAgbWV0cmljc0NvbmZpZ3VyYXRpb24udXJsID0gVGVsZW1ldHJ5VXJsLmdldFRlbGVtZXRyeVVybCh1cmwpO1xuICAgIG1ldHJpY3NDb25maWd1cmF0aW9uLmVudmlyb25tZW50ID0gRW52aXJvbm1lbnQuZ2V0RW52aXJvbm1lbnRGcm9tVXJsKHVybCk7XG5cbiAgICBtZXRyaWNzQ29uZmlndXJhdGlvbi50aHJlc2hvbGQgPSBUZWxlbWV0cnlMZXZlbE1hcHBpbmcuY29udmVydFRlbGVtZXRyeUxldmVsVHlwZVRvVGVsZW1ldHJ5TGV2ZWwoU0RLLnRlbGVtZXRyeUxldmVsKTtcblxuICAgIHJldHVybiBNZXRyaWNzRmFjdG9yeS5fbWV0cmljc1NlcnZpY2VzW3VybF0gPSBuZXcgTWV0cmljc1NlcnZpY2UobWV0cmljc0NvbmZpZ3VyYXRpb24pO1xuICB9XG5cbiAgc3RhdGljIHNldFRlbGVtZXRyeUxldmVsKHRlbGVtZXRyeUxldmVsOiBUZWxlbWV0cnlMZXZlbCk6IHZvaWQge1xuICAgIGNvbnN0IG1ldHJpY3NTZXJ2aWNlcyA9IE9iamVjdC52YWx1ZXMoTWV0cmljc0ZhY3RvcnkuX21ldHJpY3NTZXJ2aWNlcyk7XG5cbiAgICBpZiAobWV0cmljc1NlcnZpY2VzICYmIG1ldHJpY3NTZXJ2aWNlcy5sZW5ndGgpIHtcbiAgICAgIG1ldHJpY3NTZXJ2aWNlcy5mb3JFYWNoKG1ldHJpY3NTZXJ2aWNlID0+IHtcbiAgICAgICAgY29uc3QgbWV0cmljc0NvbmZpZ3VyYXRpb24gPSBtZXRyaWNzU2VydmljZS5tZXRyaWNzQ29uZmlndXJhdGlvbjtcblxuICAgICAgICBtZXRyaWNzQ29uZmlndXJhdGlvbi50aHJlc2hvbGQgPSB0ZWxlbWV0cnlMZXZlbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMb2dnZXJGYWN0b3J5IGlzIGEgc3RhdGljIGNsYXNzIHRoYXQgbWF5IG5vdCBiZSBpbnN0YW50aWF0ZWQnKTtcbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IFZlcnNpb25NYW5hZ2VyIGZyb20gJy4uL3Nkay92ZXJzaW9uL1ZlcnNpb25NYW5hZ2VyJztcbmltcG9ydCBNZXRyaWNzQ29uZmlndXJhdGlvbiBmcm9tICcuL01ldHJpY3NDb25maWd1cmF0aW9uJztcbmltcG9ydCBNZXRyaWNUeXBlIGZyb20gJy4vTWV0cmljVHlwZSc7XG5pbXBvcnQgTWV0cmljc1R5cGUgZnJvbSAnLi9NZXRyaWNzVHlwZSc7XG5cbmNvbnN0IHJlcXVlc3RTaXplTGltaXQgPSAxMDI0O1xuXG5pbnRlcmZhY2UgSVZhbHVlIHtcbiAgc3RyaW5nPzogc3RyaW5nO1xuICB1aW50NjQ/OiBudW1iZXI7XG4gIGZsb2F0PzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSU1ldHJpY1JlY29yZCB7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xuICB0ZW5hbmN5OiBzdHJpbmc7XG4gIHNlc3Npb25JZDogc3RyaW5nO1xuICBzdHJlYW1JZDogc3RyaW5nO1xuICBtZXRyaWM6IHN0cmluZztcbiAgdmFsdWU6IElWYWx1ZTtcbiAgcHJldmlvdXNWYWx1ZTogSVZhbHVlO1xuICBmdWxsUXVhbGlmaWVkTmFtZTogc3RyaW5nO1xuICBlbnZpcm9ubWVudDogc3RyaW5nO1xuICB2ZXJzaW9uOiBzdHJpbmc7XG4gIHJ1bnRpbWU6IG51bWJlcjtcbiAgcmVzb3VyY2U/OiBzdHJpbmc7XG4gIGtpbmQ/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJTWV0cmljIHtcbiAgc3RyZWFtSWQ/OiBzdHJpbmc7XG4gIG1ldHJpY1R5cGU6IE1ldHJpY3NUeXBlO1xuICB2YWx1ZT86IElWYWx1ZTtcbiAgcHJldmlvdXNWYWx1ZT86IElWYWx1ZTtcbiAgcnVudGltZTogbnVtYmVyO1xuICByZXNvdXJjZT86IHN0cmluZztcbiAga2luZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0cmljc1NlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IF9tZXRyaWNzQ29uZmlndXJhdGlvbjogTWV0cmljc0NvbmZpZ3VyYXRpb247XG4gIHByaXZhdGUgX21ldHJpY3M6IEFycmF5PElNZXRyaWNSZWNvcmQ+ID0gW107XG4gIHByaXZhdGUgX2lzU2VuZGluZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZG9tYWluID0gbG9jYXRpb24uaG9zdG5hbWU7XG5cbiAgY29uc3RydWN0b3IobWV0cmljc0NvbmZpZ3VyYXRpb246IE1ldHJpY3NDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fbWV0cmljc0NvbmZpZ3VyYXRpb24gPSBtZXRyaWNzQ29uZmlndXJhdGlvbjtcbiAgfVxuXG4gIGdldCBtZXRyaWNzQ29uZmlndXJhdGlvbigpOiBNZXRyaWNzQ29uZmlndXJhdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX21ldHJpY3NDb25maWd1cmF0aW9uO1xuICB9XG5cbiAgcHVzaChtZXRyaWM6IElNZXRyaWMpOiB2b2lkIHtcbiAgICBjb25zdCB7c3RyZWFtSWQsIHZhbHVlLCBwcmV2aW91c1ZhbHVlLCBydW50aW1lLCByZXNvdXJjZSwga2luZH0gPSBtZXRyaWM7XG4gICAgY29uc3QgbWV0cmljVHlwZSA9IG5ldyBNZXRyaWNUeXBlKG1ldHJpYy5tZXRyaWNUeXBlKTtcblxuICAgIGlmICh0aGlzLl9tZXRyaWNzQ29uZmlndXJhdGlvbi50aHJlc2hvbGQgPiBtZXRyaWNUeXBlLmdldFRlbGVtZXRyeUxldmVsKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtZXRyaWNSZWNvcmQgPSB7XG4gICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIHRlbmFuY3k6IHRoaXMuX21ldHJpY3NDb25maWd1cmF0aW9uLnRlbmFuY3ksXG4gICAgICBzZXNzaW9uSWQ6IHRoaXMuX21ldHJpY3NDb25maWd1cmF0aW9uLnNlc3Npb25JZCxcbiAgICAgIHN0cmVhbUlkLFxuICAgICAgbWV0cmljOiBtZXRyaWNUeXBlLmdldE5hbWUoKSxcbiAgICAgIHZhbHVlLFxuICAgICAgcHJldmlvdXNWYWx1ZSxcbiAgICAgIGZ1bGxRdWFsaWZpZWROYW1lOiB0aGlzLl9kb21haW4sXG4gICAgICBlbnZpcm9ubWVudDogdGhpcy5fbWV0cmljc0NvbmZpZ3VyYXRpb24uZW52aXJvbm1lbnQsXG4gICAgICB2ZXJzaW9uOiBWZXJzaW9uTWFuYWdlci5zZGtWZXJzaW9uLFxuICAgICAgcnVudGltZSxcbiAgICAgIHJlc291cmNlLFxuICAgICAga2luZFxuICAgIH07XG5cbiAgICB0aGlzLl9tZXRyaWNzLnB1c2gobWV0cmljUmVjb3JkKTtcblxuICAgIGNvbnN0IGlnbm9yZWQgPSB0aGlzLnNlbmRNZXRyaWNzSWZBYmxlKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNlbmRNZXRyaWNzKG1ldHJpY3NNZXNzYWdlczogQXJyYXk8SU1ldHJpY1JlY29yZD4pOiBQcm9taXNlPFJlc3BvbnNlIHwgdm9pZD4ge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2pzb25Cb2R5JywgSlNPTi5zdHJpbmdpZnkoe3JlY29yZHM6IG1ldHJpY3NNZXNzYWdlc30pKTtcblxuICAgIHJldHVybiBhd2FpdCBmZXRjaCh0aGlzLl9tZXRyaWNzQ29uZmlndXJhdGlvbi51cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogZm9ybURhdGFcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2VuZE1ldHJpY3NJZkFibGUoKTogUHJvbWlzZTxSZXNwb25zZSB8IHZvaWQ+IHtcbiAgICBpZiAodGhpcy5fbWV0cmljcy5sZW5ndGggPD0gMCB8fCB0aGlzLl9pc1NlbmRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9pc1NlbmRpbmcgPSB0cnVlO1xuXG4gICAgY29uc3QgbWV0cmljc01lc3NhZ2VzID0gdGhpcy5fbWV0cmljcy5zbGljZSgwLCByZXF1ZXN0U2l6ZUxpbWl0KTtcblxuICAgIHRoaXMuX21ldHJpY3MgPSB0aGlzLl9tZXRyaWNzLnNsaWNlKHJlcXVlc3RTaXplTGltaXQpO1xuXG4gICAgcmV0dXJuIHRoaXMuc2VuZE1ldHJpY3MobWV0cmljc01lc3NhZ2VzKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHRoaXMuX2lzU2VuZGluZyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBpZ25vcmVkID0gdGhpcy5zZW5kTWV0cmljc0lmQWJsZSgpO1xuXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgdGhpcy5faXNTZW5kaW5nID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IGlnbm9yZWQgPSB0aGlzLnNlbmRNZXRyaWNzSWZBYmxlKCk7XG4gICAgfSk7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmVudW0gTWV0cmljc1R5cGUge1xuICBUaW1lVG9GaXJzdEZyYW1lLFxuICBDaGFubmVsQ3JlYXRpb25UaW1lVG9GaXJzdEZyYW1lLFxuICBTdGFsbGVkLFxuICBCdWZmZXJpbmcsXG4gIFNldHVwQ29tcGxldGVkLFxuICBTZXR1cEZhaWxlZCxcbiAgUm91bmRUcmlwVGltZSxcbiAgRG93bmxpbmtUaHJvdWdocHV0Q2FwYWNpdHksXG4gIE5ldHdvcmtUeXBlLFxuICBSZXNvbHV0aW9uQ2hhbmdlZCxcbiAgQXBwbGljYXRpb25Gb3JlZ3JvdW5kLFxuICBBcHBsaWNhdGlvbkJhY2tncm91bmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWV0cmljc1R5cGU7IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQge1RlbGVtZXRyeUxldmVsLCBUZWxlbWV0cnlMZXZlbFR5cGV9IGZyb20gJy4vTWV0cmljc0NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IGFzc2VydFVucmVhY2hhYmxlIGZyb20gJy4uL2xhbmcvYXNzZXJ0VW5yZWFjaGFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWxlbWV0cnlMZXZlbE1hcHBpbmcge1xuICBzdGF0aWMgY29udmVydFRlbGVtZXRyeUxldmVsVG9UZWxlbWV0cnlMZXZlbFR5cGUodGVsZW1ldHJ5TGV2ZWw6IFRlbGVtZXRyeUxldmVsKTogVGVsZW1ldHJ5TGV2ZWxUeXBlIHtcbiAgICBzd2l0Y2ggKHRlbGVtZXRyeUxldmVsKSB7XG4gICAgICBjYXNlIFRlbGVtZXRyeUxldmVsLk9mZjpcbiAgICAgICAgcmV0dXJuICdPZmYnO1xuICAgICAgY2FzZSBUZWxlbWV0cnlMZXZlbC5Fc3NlbnRpYWw6XG4gICAgICAgIHJldHVybiAnRXNzZW50aWFsJztcbiAgICAgIGNhc2UgVGVsZW1ldHJ5TGV2ZWwuQWxsOlxuICAgICAgICByZXR1cm4gJ0FsbCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhc3NlcnRVbnJlYWNoYWJsZSh0ZWxlbWV0cnlMZXZlbCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNvbnZlcnRUZWxlbWV0cnlMZXZlbFR5cGVUb1RlbGVtZXRyeUxldmVsKHRlbGVtZXRyeUxldmVsVHlwZTogVGVsZW1ldHJ5TGV2ZWxUeXBlKTogVGVsZW1ldHJ5TGV2ZWwge1xuICAgIHN3aXRjaCAodGVsZW1ldHJ5TGV2ZWxUeXBlKSB7XG4gICAgICBjYXNlICdPZmYnOlxuICAgICAgICByZXR1cm4gVGVsZW1ldHJ5TGV2ZWwuT2ZmO1xuICAgICAgY2FzZSAnRXNzZW50aWFsJzpcbiAgICAgICAgcmV0dXJuIFRlbGVtZXRyeUxldmVsLkVzc2VudGlhbDtcbiAgICAgIGNhc2UgJ0FsbCc6XG4gICAgICAgIHJldHVybiBUZWxlbWV0cnlMZXZlbC5BbGw7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhc3NlcnRVbnJlYWNoYWJsZSh0ZWxlbWV0cnlMZXZlbFR5cGUpO1xuICAgIH1cbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IFByaXZhY3lNb2RlIGZyb20gJy4uL2RvbS9Qcml2YWN5TW9kZSc7XG5pbXBvcnQge1RlbGVtZXRyeUxldmVsfSBmcm9tICcuLi9tZXRyaWNzL01ldHJpY3NDb25maWd1cmF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVsZW1ldHJ5RGVmYXVsdCB7XG4gIHN0YXRpYyBnZXQgZGVmYXVsdFRlbGVtZXRyeUxldmVsKCk6IFRlbGVtZXRyeUxldmVsIHtcbiAgICByZXR1cm4gUHJpdmFjeU1vZGUuaXNQcml2YXRlID8gVGVsZW1ldHJ5TGV2ZWwuRXNzZW50aWFsIDogVGVsZW1ldHJ5TGV2ZWwuQWxsO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQgUHJvbWlzZUhhbmRsZXIgZnJvbSAnLi9Qcm9taXNlSGFuZGxlcic7XG5cbmNsYXNzIFByb21pc2Uge1xuICBfc3RhdGU6IG51bWJlcjtcbiAgX2hhbmRsZWQ6IGJvb2xlYW47XG4gIF92YWx1ZTogUHJvbWlzZTtcbiAgX2RlZmVycmVkczogQXJyYXk8UHJvbWlzZUhhbmRsZXI+O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gIC8vIEB0cy1pZ25vcmVcbiAgdGhlbihvbkZ1bGZpbGxlZDogRnVuY3Rpb24sIG9uUmVqZWN0ZWQ6IEZ1bmN0aW9uKTogUHJvbWlzZSB8IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoY2FsbGJhY2spIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ldycpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ25vdCBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhdGUgPSAwO1xuICAgIHRoaXMuX2hhbmRsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9kZWZlcnJlZHMgPSBbXTtcblxuICAgIHRoaXMuZG9SZXNvbHZlKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGRvUmVzb2x2ZShjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBsZXQgZG9uZSA9IGZhbHNlO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNhbGxiYWNrKFxuICAgICAgICB2YWx1ZSA9PiB7XG4gICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnByb21pc2VSZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVhc29uID0+IHtcbiAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMucHJvbWlzZVJlamVjdChyZWFzb24pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZG9uZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgdGhpcy5wcm9taXNlUmVqZWN0KGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBwcm9taXNlUmVzb2x2ZShuZXdWYWx1ZTogUHJvbWlzZSB8IHVuZGVmaW5lZCk6IHZvaWQge1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzIGFzIFByb21pc2U7XG5cbiAgICB0cnkge1xuICAgICAgLy8gUHJvbWlzZSBSZXNvbHV0aW9uIFByb2NlZHVyZTogaHR0cHM6Ly9naXRodWIuY29tL1Byb21pc2VzLWFwbHVzL1Byb21pc2VzLXNwZWMjdGhlLVByb21pc2UtcmVzb2x1dGlvbi1wcm9jZWR1cmVcbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gcHJvbWlzZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBIFByb21pc2UgY2Fubm90IGJlIHJlc29sdmVkIHdpdGggaXQgc2VsZi4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5ld1ZhbHVlICYmICh0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgY29uc3QgdGhlbiA9IG5ld1ZhbHVlLnRoZW47XG5cbiAgICAgICAgaWYgKG5ld1ZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgIHByb21pc2UuX3N0YXRlID0gMztcbiAgICAgICAgICBwcm9taXNlLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgIHByb21pc2UuZmluYWxlKCk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBwcm9taXNlLmRvUmVzb2x2ZShmdW5jdGlvbigpOiB2b2lkIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICAgICAgICAgIHRoZW4uYXBwbHkobmV3VmFsdWUsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJvbWlzZS5fc3RhdGUgPSAxO1xuICAgICAgcHJvbWlzZS5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIHByb21pc2UuZmluYWxlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcHJvbWlzZS5wcm9taXNlUmVqZWN0KGUpO1xuICAgIH1cbiAgfVxuXG4gIHByb21pc2VSZWplY3QobmV3VmFsdWU6IFByb21pc2UgfCB1bmRlZmluZWQpOiB2b2lkIHtcbiAgICB0aGlzLl9zdGF0ZSA9IDI7XG4gICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB0aGlzLmZpbmFsZSgpO1xuICB9XG5cbiAgZmluYWxlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gMiAmJiB0aGlzLl9kZWZlcnJlZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBQcm9taXNlLl9pbW1lZGlhdGUoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2hhbmRsZWQpIHtcbiAgICAgICAgICBQcm9taXNlLl91bmhhbmRsZWRSZWplY3Rpb24odGhpcy5fdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5fZGVmZXJyZWRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0aGlzLmhhbmRsZSh0aGlzLl9kZWZlcnJlZHNbaV0pO1xuICAgIH1cblxuICAgIHRoaXMuX2RlZmVycmVkcyA9IG51bGw7XG4gIH1cblxuICBoYW5kbGUoZGVmZXJyZWQ6IFByb21pc2VIYW5kbGVyKTogdm9pZCB7XG4gICAgbGV0IHByb21pc2UgPSB0aGlzIGFzIFByb21pc2U7XG5cbiAgICB3aGlsZSAocHJvbWlzZS5fc3RhdGUgPT09IDMpIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlLl92YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvbWlzZS5fc3RhdGUgPT09IDApIHtcbiAgICAgIHByb21pc2UuX2RlZmVycmVkcy5wdXNoKGRlZmVycmVkKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByb21pc2UuX2hhbmRsZWQgPSB0cnVlO1xuICAgIFByb21pc2UuX2ltbWVkaWF0ZSgoKSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IHByb21pc2UuX3N0YXRlID09PSAxID8gZGVmZXJyZWQub25GdWxmaWxsZWQgOiBkZWZlcnJlZC5vblJlamVjdGVkO1xuXG4gICAgICBpZiAoY2FsbGJhY2sgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHByb21pc2UuX3N0YXRlID09PSAxKSB7XG4gICAgICAgICAgZGVmZXJyZWQucHJvbWlzZS5wcm9taXNlUmVzb2x2ZShwcm9taXNlLl92YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVmZXJyZWQucHJvbWlzZS5wcm9taXNlUmVqZWN0KHByb21pc2UuX3ZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2socHJvbWlzZS5fdmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBkZWZlcnJlZC5wcm9taXNlLnByb21pc2VSZWplY3QoZSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBkZWZlcnJlZC5wcm9taXNlLnByb21pc2VSZXNvbHZlKHJlc3VsdCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYWxsKGFycjogQXJyYXk8UHJvbWlzZT4pOiBQcm9taXNlIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgVHlwZUVycm9yKCdQcm9taXNlLmFsbCBhY2NlcHRzIGFuIGFycmF5JykpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyKTtcblxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKFtdKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHJlbWFpbmluZyA9IGFyZ3MubGVuZ3RoO1xuICAgICAgY29uc3QgbWFuYWdlUmVzcG9uc2UgPSAoaSwgdmFsdWUpOiB2b2lkID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAodmFsdWUgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICAgICAgY29uc3QgdGhlbiA9IHZhbHVlLnRoZW47XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB0aGVuLmNhbGwoXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgdmFsdWUgPT4gbWFuYWdlUmVzcG9uc2UoaSwgdmFsdWUpLFxuICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhcmdzW2ldID0gdmFsdWU7XG5cbiAgICAgICAgICBpZiAoLS1yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgICAgIHJlc29sdmUoYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBtYW5hZ2VSZXNwb25zZShpLCBhcmdzW2ldKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyByZXNvbHZlKHZhbHVlKTogUHJvbWlzZSB7XG4gICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IFByb21pc2UpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiByZXNvbHZlKHZhbHVlKSk7XG4gIH1cblxuICBzdGF0aWMgcmVqZWN0KHZhbHVlKTogUHJvbWlzZSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChfLCByZWplY3QpID0+IHJlamVjdCh2YWx1ZSkpO1xuICB9XG5cbiAgc3RhdGljIHJhY2UoYXJyOiBBcnJheTxQcm9taXNlPik6IFByb21pc2Uge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ1Byb21pc2UucmFjZSBhY2NlcHRzIGFuIGFycmF5JykpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZShhcnJbaV0pLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBfaW1tZWRpYXRlKGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IGlnbm9yZWQgPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbiAgfVxuXG4gIHN0YXRpYyBfdW5oYW5kbGVkUmVqZWN0aW9uKGVycm9yKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1Bvc3NpYmxlIFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbjonLCBlcnJvcik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIH1cbiAgfVxufVxuXG5Qcm9taXNlLnByb3RvdHlwZVsnY2F0Y2gnXSA9IGZ1bmN0aW9uKG9uUmVqZWN0ZWQ6IEZ1bmN0aW9uKTogUHJvbWlzZSB8IHZvaWQge1xuICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGVbJ3RoZW4nXSA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkOiBGdW5jdGlvbiwgb25SZWplY3RlZDogRnVuY3Rpb24pOiBQcm9taXNlIHwgdm9pZCB7XG4gIGNvbnN0IHByb21pc2UgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcigoKSA9PiBudWxsKTtcblxuICB0aGlzLmhhbmRsZShuZXcgUHJvbWlzZUhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHByb21pc2UpKTtcblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cblByb21pc2UucHJvdG90eXBlWydmaW5hbGx5J10gPSBmdW5jdGlvbihjYWxsYmFjazogRnVuY3Rpb24pOiBQcm9taXNlIHwgdm9pZCB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICByZXR1cm4gdGhpcy50aGVuKFxuICAgIHZhbHVlID0+IGNvbnN0cnVjdG9yLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbigoKSA9PiB2YWx1ZSksXG4gICAgcmVhc29uID0+IGNvbnN0cnVjdG9yLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbigoKSA9PiBjb25zdHJ1Y3Rvci5yZWplY3QocmVhc29uKSlcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb21pc2U7IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQgUHJvbWlzZSBmcm9tICcuL1Byb21pc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9taXNlSGFuZGxlciB7XG4gIG9uRnVsZmlsbGVkOiBGdW5jdGlvbjtcbiAgb25SZWplY3RlZDogRnVuY3Rpb247XG4gIHByb21pc2U6IFByb21pc2U7XG5cbiAgY29uc3RydWN0b3Iob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHByb21pc2UpIHtcbiAgICB0aGlzLm9uRnVsZmlsbGVkID0gdHlwZW9mIG9uRnVsZmlsbGVkID09PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiBudWxsO1xuICAgIHRoaXMub25SZWplY3RlZCA9IHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nID8gb25SZWplY3RlZCA6IG51bGw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IExvZ2dlckZhY3RvcnkgZnJvbSAnLi4vbG9nZ2VyL0xvZ2dlckZhY3RvcnknO1xuaW1wb3J0IFNESyBmcm9tICcuLi9zZGsvU0RLJztcbmltcG9ydCBJUGVlckNvbm5lY3Rpb24gZnJvbSAnLi9JUGVlckNvbm5lY3Rpb24nO1xuaW1wb3J0IHtJTG9nZ2VyfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VySW50ZXJmYWNlJztcbmltcG9ydCBGZWF0dXJlRW5hYmxlbWVudCBmcm9tICcuLi9zZGsvZmVhdHVyZS9GZWF0dXJlRW5hYmxlbWVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBlZXJDb25uZWN0aW9uT2ZmZXJJbml0IHtcbiAgYXVkaW9UcmFuc2NlaXZlcj86IFJUQ1J0cFRyYW5zY2VpdmVyO1xuICB2aWRlb1RyYW5zY2VpdmVyPzogUlRDUnRwVHJhbnNjZWl2ZXI7XG4gIHBlZXJDb25uZWN0aW9uOiBJUGVlckNvbm5lY3Rpb247XG4gIGxvY2FsT2ZmZXI6IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbkluaXQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlZXJDb25uZWN0aW9uU2VydmljZSB7XG4gIHByaXZhdGUgc3RhdGljIF9sb2dnZXI6IElMb2dnZXIgPSBMb2dnZXJGYWN0b3J5LmdldExvZ2dlcignUGVlckNvbm5lY3Rpb25TZXJ2aWNlJyk7XG4gIHByaXZhdGUgc3RhdGljIF9jYWNoZWQ6IHtcbiAgICBkaXJlY3Rpb24/OiBSVENSdHBUcmFuc2NlaXZlckRpcmVjdGlvbjtcbiAgICBwZWVyQ29ubmVjdGlvbjogUHJvbWlzZTxJUGVlckNvbm5lY3Rpb25PZmZlckluaXQ+O1xuICB9O1xuXG4gIHN0YXRpYyBpbml0aWF0ZUluaXRpYWxQcmVjYWNoaW5nKCk6IHZvaWQge1xuICAgIGlmIChGZWF0dXJlRW5hYmxlbWVudC5pc1ByZWNhY2hpbmdFbmFibGVkKSB7XG4gICAgICBjb25zdCBpZ25vcmVkID0gUGVlckNvbm5lY3Rpb25TZXJ2aWNlLnByZWNhY2hlQ3JlYXRlUGVlckNvbm5lY3Rpb25PZmZlcigpXG4gICAgICAgIC5jYXRjaChlID0+IFBlZXJDb25uZWN0aW9uU2VydmljZS5fbG9nZ2VyLmVycm9yKCdGYWlsZWQgdG8gcHJlLWNhY2hlIHBlZXIgY29ubmVjdGlvbiBvZmZlclwiJywgZSkpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBwcmVjYWNoZUNyZWF0ZVBlZXJDb25uZWN0aW9uT2ZmZXIoKTogUHJvbWlzZTx7IHBlZXJDb25uZWN0aW9uOiBQcm9taXNlPElQZWVyQ29ubmVjdGlvbk9mZmVySW5pdCB8IHZvaWQ+IH0+IHtcbiAgICByZXR1cm4gUGVlckNvbm5lY3Rpb25TZXJ2aWNlLl9jYWNoZWQgPSB7XG4gICAgICBkaXJlY3Rpb246ICdyZWN2b25seScsXG4gICAgICBwZWVyQ29ubmVjdGlvbjogUGVlckNvbm5lY3Rpb25TZXJ2aWNlLmNyZWF0ZVBlZXJDb25uZWN0aW9uT2ZmZXIoKVxuICAgICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgUGVlckNvbm5lY3Rpb25TZXJ2aWNlLl9jYWNoZWQgPSBudWxsO1xuXG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfSlcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZVBlZXJDb25uZWN0aW9uT2ZmZXIoZGlyZWN0aW9uOiBSVENSdHBUcmFuc2NlaXZlckRpcmVjdGlvbiA9ICdyZWN2b25seScpOiBQcm9taXNlPElQZWVyQ29ubmVjdGlvbk9mZmVySW5pdD4ge1xuICAgIGlmIChQZWVyQ29ubmVjdGlvblNlcnZpY2UuX2NhY2hlZCAmJiBQZWVyQ29ubmVjdGlvblNlcnZpY2UuX2NhY2hlZC5kaXJlY3Rpb24gPT09IGRpcmVjdGlvbikge1xuICAgICAgY29uc3QgdmFsdWUgPSBQZWVyQ29ubmVjdGlvblNlcnZpY2UuX2NhY2hlZC5wZWVyQ29ubmVjdGlvbjtcblxuICAgICAgUGVlckNvbm5lY3Rpb25TZXJ2aWNlLl9jYWNoZWQgPSBudWxsO1xuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgcGVlckNvbm5lY3Rpb25GYWN0b3J5ID0gU0RLLnBlZXJDb25uZWN0aW9uRmFjdG9yeS52YWx1ZTtcblxuICAgIHJldHVybiBwZWVyQ29ubmVjdGlvbkZhY3RvcnkuY3JlYXRlUGVlckNvbm5lY3Rpb24oKVxuICAgICAgLnRoZW4oYXN5bmMgcGVlckNvbm5lY3Rpb24gPT4ge1xuICAgICAgICBjb25zdCBzdXBwb3J0c0FkZFRyYW5zY2VpdmVyID0gcGVlckNvbm5lY3Rpb24uc3VwcG9ydHNBZGRUcmFuc2NlaXZlcjtcbiAgICAgICAgbGV0IHZpZGVvVHJhbnNjZWl2ZXIsIGF1ZGlvVHJhbnNjZWl2ZXI7XG5cbiAgICAgICAgaWYgKHN1cHBvcnRzQWRkVHJhbnNjZWl2ZXIpIHtcbiAgICAgICAgICBhdWRpb1RyYW5zY2VpdmVyID0gcGVlckNvbm5lY3Rpb24uYWRkVHJhbnNjZWl2ZXIoJ2F1ZGlvJywge2RpcmVjdGlvbn0pO1xuICAgICAgICAgIHZpZGVvVHJhbnNjZWl2ZXIgPSBwZWVyQ29ubmVjdGlvbi5hZGRUcmFuc2NlaXZlcigndmlkZW8nLCB7ZGlyZWN0aW9ufSk7XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXVkaW9UcmFuc2NlaXZlcixcbiAgICAgICAgICAgIHZpZGVvVHJhbnNjZWl2ZXIsXG4gICAgICAgICAgICBwZWVyQ29ubmVjdGlvbjogcGVlckNvbm5lY3Rpb24sXG4gICAgICAgICAgICBsb2NhbE9mZmVyOiBhd2FpdCBwZWVyQ29ubmVjdGlvbi5jcmVhdGVPZmZlcih1bmRlZmluZWQpXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBkaXJlY3Rpb24gPT09ICdyZWN2b25seScgPyB7XG4gICAgICAgICAgb2ZmZXJUb1JlY2VpdmVBdWRpbzogdHJ1ZSxcbiAgICAgICAgICBvZmZlclRvUmVjZWl2ZVZpZGVvOiB0cnVlXG4gICAgICAgIH0gOiB7fTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBlZXJDb25uZWN0aW9uOiBwZWVyQ29ubmVjdGlvbixcbiAgICAgICAgICBsb2NhbE9mZmVyOiBhd2FpdCBwZWVyQ29ubmVjdGlvbi5jcmVhdGVPZmZlcihvcHRpb25zKVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUGVlckNvbm5lY3Rpb25TZXJ2aWNlIGlzIGEgc3RhdGljIGNsYXNzIHRoYXQgbWF5IG5vdCBiZSBpbnN0YW50aWF0ZWQnKTtcbiAgfVxufVxuXG5QZWVyQ29ubmVjdGlvblNlcnZpY2UuaW5pdGlhdGVJbml0aWFsUHJlY2FjaGluZygpOyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnRjQ29uZmlndXJhdGlvbk1hbmFnZXIge1xuICBzdGF0aWMgdHJ1bmNhdGVJY2VTZXJ2ZXJzKGNvbmZpZ3VyYXRpb246IFJUQ0NvbmZpZ3VyYXRpb24pOiBSVENDb25maWd1cmF0aW9uIHtcbiAgICBjb25zdCBpY2VTZXJ2ZXJzOiBSVENJY2VTZXJ2ZXJbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25maWd1cmF0aW9uLmljZVNlcnZlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHVybHM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IGNvbmZpZ3VyYXRpb24uaWNlU2VydmVyc1tpXS51cmxzW2luZGV4XTtcblxuICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgdXJscy5wdXNoKGNvbmZpZ3VyYXRpb24uaWNlU2VydmVyc1tpXS51cmxzW2luZGV4XSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWNlU2VydmVycy5wdXNoKHtcbiAgICAgICAgdXJsczogdXJscyxcbiAgICAgICAgdXNlcm5hbWU6IGNvbmZpZ3VyYXRpb24uaWNlU2VydmVyc1tpXS51c2VybmFtZSxcbiAgICAgICAgY3JlZGVudGlhbDogY29uZmlndXJhdGlvbi5pY2VTZXJ2ZXJzW2ldLmNyZWRlbnRpYWxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbmZpZ3VyYXRpb24uaWNlU2VydmVycyA9IGljZVNlcnZlcnM7XG5cbiAgICByZXR1cm4gY29uZmlndXJhdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdSdGNDb25maWd1cmF0aW9uTWFuYWdlciBpcyBhIHN0YXRpYyBjbGFzcyB0aGF0IG1heSBub3QgYmUgaW5zdGFudGlhdGVkJyk7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCBJUGVlckNvbm5lY3Rpb24gZnJvbSAnLi9JUGVlckNvbm5lY3Rpb24nO1xuaW1wb3J0IFN1YmplY3QgZnJvbSAnLi4vcngvU3ViamVjdCc7XG5pbXBvcnQgRmVhdHVyZUVuYWJsZW1lbnQgZnJvbSAnLi4vc2RrL2ZlYXR1cmUvRmVhdHVyZUVuYWJsZW1lbnQnO1xuaW1wb3J0IFNkcFBhcnNlciBmcm9tICcuL1NkcFBhcnNlcic7XG5pbXBvcnQgSURpc3Bvc2FibGUgZnJvbSAnLi4vbGFuZy9JRGlzcG9zYWJsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJ0Y1B1Ymxpc2hNb25pdG9yU3RhdGlzdGljIHtcbiAgW2tpbmQ6IHN0cmluZ106IElSdGNQdWJsaXNoU3RhdGlzdGljO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElMZWdhY3lSVENTdGF0c1JlcG9ydCB7XG4gIHJlc3VsdDogKCkgPT4gSUxlZ2FjeVJUQ1N0YXRzUmVwb3J0SXRlbVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElMZWdhY3lSVENTdGF0c1JlcG9ydEl0ZW0gZXh0ZW5kcyBSVENTdGF0c1JlcG9ydCB7XG4gIHR5cGU6IHN0cmluZztcbiAgbmFtZXM6ICgpID0+IHN0cmluZ1tdO1xuICBzdGF0OiAobmFtZSkgPT4gbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSdGNQdWJsaXNoU3RhdGlzdGljIHtcbiAgbGFzdFBhY2tldFNlbnRUaW1lc3RhbXA/OiBudW1iZXI7XG4gIHNzcmM6IHN0cmluZztcbiAgbWVkaWFUeXBlOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogbnVtYmVyO1xuICBiaXRyYXRlPzogbnVtYmVyO1xuICBieXRlc1NlbnQ6IG51bWJlcjtcbiAgcGFja2V0c1NlbnQ6IG51bWJlcjtcbiAgcmV0cmFuc21pdHRlZEJ5dGVzU2VudD86IG51bWJlcjtcbiAgZmlyQ291bnQ/OiBudW1iZXI7XG4gIGZyYW1lSGVpZ2h0PzogbnVtYmVyO1xuICBmcmFtZVdpZHRoPzogbnVtYmVyO1xuICBmcmFtZXNFbmNvZGVkPzogbnVtYmVyO1xuICBmcmFtZXNTZW50PzogbnVtYmVyO1xuICBoZWFkZXJCeXRlc1NlbnQ/OiBudW1iZXI7XG4gIGh1Z2VGcmFtZXNTZW50PzogbnVtYmVyO1xuICBwbGlDb3VudD86IG51bWJlcjtcbiAgcXBTdW0/OiBudW1iZXI7XG4gIHRvdGFsRW5jb2RlVGltZT86IG51bWJlcjtcbiAgdG90YWxFbmNvZGVkQnl0ZXNUYXJnZXQ/OiBudW1iZXI7XG4gIGNvZGVjOiBzdHJpbmc7XG4gIGZwcz86IG51bWJlcjtcbiAgcm91bmRUcmlwVGltZTogbnVtYmVyO1xufVxuXG5jb25zdCB1cGRhdGVTdGF0aXN0aWNUaW1lT3V0ID0gMTUwMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnRjUHVibGlzaE1vbml0b3IgaW1wbGVtZW50cyBJRGlzcG9zYWJsZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2VzdGltYXRlZFJvdW5kVHJpcFRpbWU6IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBfZXN0aW1hdGVkVmlkZW9Db2RlYzogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IF9lc3RpbWF0ZWRBdWRpb0NvZGVjOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3J0Y1N0YXRpc3RpYzogU3ViamVjdDxJUnRjUHVibGlzaE1vbml0b3JTdGF0aXN0aWM+ID0gbmV3IFN1YmplY3Q8SVJ0Y1B1Ymxpc2hNb25pdG9yU3RhdGlzdGljPih7fSk7XG4gIHByaXZhdGUgX3BlZXJDb25uZWN0aW9uOiBJUGVlckNvbm5lY3Rpb247XG4gIHByaXZhdGUgX2lzTW9uaXRvclJ1bm5pbmcgPSB0cnVlO1xuICBwcml2YXRlIF91cGRhdGVUaW1lT3V0OiBudW1iZXI7XG4gIHByaXZhdGUgX2F2YWlsYWJsZVRyYWNrczoge1xuICAgIGF1ZGlvOiBib29sZWFuO1xuICAgIHZpZGVvOiBib29sZWFuO1xuICB9XG5cbiAgY29uc3RydWN0b3IocGVlckNvbm5lY3Rpb246IElQZWVyQ29ubmVjdGlvbiwgbWVkaWFTdHJlYW06IE1lZGlhU3RyZWFtLCBlc3RpbWF0ZWRSb3VuZFRyaXBUaW1lOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wZWVyQ29ubmVjdGlvbiA9IHBlZXJDb25uZWN0aW9uO1xuICAgIHRoaXMuX2VzdGltYXRlZFJvdW5kVHJpcFRpbWUgPSBlc3RpbWF0ZWRSb3VuZFRyaXBUaW1lO1xuXG4gICAgaWYgKHRoaXMuX3BlZXJDb25uZWN0aW9uKSB7XG4gICAgICBjb25zdCBwYXJzZWRMb2NhbERlc2NyaXB0aW9uID0gbmV3IFNkcFBhcnNlcih0aGlzLl9wZWVyQ29ubmVjdGlvbi5jdXJyZW50TG9jYWxEZXNjcmlwdGlvbi5zZHApO1xuICAgICAgY29uc3QgcGFyc2VkUmVtb3RlRGVzY3JpcHRpb24gPSBuZXcgU2RwUGFyc2VyKHRoaXMuX3BlZXJDb25uZWN0aW9uLmN1cnJlbnRSZW1vdGVEZXNjcmlwdGlvbi5zZHApO1xuXG4gICAgICB0aGlzLl9lc3RpbWF0ZWRBdWRpb0NvZGVjID0gcGFyc2VkUmVtb3RlRGVzY3JpcHRpb24uYXVkaW9Db2RlYztcbiAgICAgIHRoaXMuX2VzdGltYXRlZFZpZGVvQ29kZWMgPSBwYXJzZWRSZW1vdGVEZXNjcmlwdGlvbi52aWRlb0NvZGVjO1xuXG4gICAgICB0aGlzLl9hdmFpbGFibGVUcmFja3MgPSB7XG4gICAgICAgIGF1ZGlvOiBwYXJzZWRMb2NhbERlc2NyaXB0aW9uLmlzQXVkaW9UcmFja0VuYWJsZWQgJiYgcGFyc2VkUmVtb3RlRGVzY3JpcHRpb24uaXNBdWRpb1RyYWNrRW5hYmxlZCxcbiAgICAgICAgdmlkZW86IHBhcnNlZExvY2FsRGVzY3JpcHRpb24uaXNWaWRlb1RyYWNrRW5hYmxlZCAmJiBwYXJzZWRSZW1vdGVEZXNjcmlwdGlvbi5pc1ZpZGVvVHJhY2tFbmFibGVkXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnVwZGF0ZVN0YXRpc3RpYygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBydGNTdGF0aXN0aWMoKTogU3ViamVjdDxJUnRjUHVibGlzaE1vbml0b3JTdGF0aXN0aWM+IHtcbiAgICByZXR1cm4gdGhpcy5fcnRjU3RhdGlzdGljO1xuICB9XG5cbiAgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9pc01vbml0b3JSdW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fcGVlckNvbm5lY3Rpb24gPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuX3VwZGF0ZVRpbWVPdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl91cGRhdGVUaW1lT3V0KTtcbiAgICAgIHRoaXMuX3VwZGF0ZVRpbWVPdXQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgdXBkYXRlU3RhdGlzdGljKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChGZWF0dXJlRW5hYmxlbWVudC5nZXRTdGF0c1Byb21pc2VCYXNlZERpc2FibGVkKSB7XG4gICAgICBjb25zdCBpZ25vcmVkID0ge1xuICAgICAgICBhdWRpbzogMCxcbiAgICAgICAgdmlkZW86IDBcbiAgICAgIH07XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTYWZhcmkgMTEgZG9lc250IGhhdmUga2luZCBvciBtZWRpYVR5cGUgc28gd2UgbmVlZCB0byB0YWtlIGl0IGZyb20gdGhlIGluYm91bmQtcnRwIG9iamVjdCBpZFxuICAgIGNvbnN0IGdldEtpbmRGb3JTYWZhcmkxMSA9IChpdGVtKTogc3RyaW5nID0+IGl0ZW0uaWQuaW5jbHVkZXMoJ0F1ZGlvJykgPyAnYXVkaW8nIDogaXRlbS5pZC5pbmNsdWRlcygnVmlkZW8nKSA/ICd2aWRlbycgOiAnJztcbiAgICBjb25zdCBpZ25vcmVkID0gYXdhaXQgdGhpcy5fcGVlckNvbm5lY3Rpb24uZ2V0U3RhdHMobnVsbClcbiAgICAgIC50aGVuKHN0YXRzID0+IHtcbiAgICAgICAgY29uc3QgcnRjU3RhdGlzdGljczogSVJ0Y1B1Ymxpc2hNb25pdG9yU3RhdGlzdGljID0ge307XG5cbiAgICAgICAgaWYgKHN0YXRzKSB7XG4gICAgICAgICAgbGV0IHJvdW5kVHJpcFRpbWUgPSB0aGlzLl9lc3RpbWF0ZWRSb3VuZFRyaXBUaW1lO1xuICAgICAgICAgIGxldCBsYXN0UGFja2V0U2VudFRpbWVzdGFtcDtcblxuICAgICAgICAgIHN0YXRzLmZvckVhY2gocmVwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXBvcnQudHlwZSA9PT0gJ2NhbmRpZGF0ZS1wYWlyJyAmJiByZXBvcnQuY3VycmVudFJvdW5kVHJpcFRpbWUpIHtcbiAgICAgICAgICAgICAgcm91bmRUcmlwVGltZSA9IHJlcG9ydC5jdXJyZW50Um91bmRUcmlwVGltZSAqIDEwMDA7XG5cbiAgICAgICAgICAgICAgaWYgKHJ0Y1N0YXRpc3RpY3NbJ2F1ZGlvJ10pIHtcbiAgICAgICAgICAgICAgICBydGNTdGF0aXN0aWNzWydhdWRpbyddLnJvdW5kVHJpcFRpbWUgPSByb3VuZFRyaXBUaW1lO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHJ0Y1N0YXRpc3RpY3NbJ3ZpZGVvJ10pIHtcbiAgICAgICAgICAgICAgICBydGNTdGF0aXN0aWNzWyd2aWRlbyddLnJvdW5kVHJpcFRpbWUgPSByb3VuZFRyaXBUaW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXBvcnQudHlwZSA9PT0gJ2NhbmRpZGF0ZS1wYWlyJyAmJiByZXBvcnQubGFzdFBhY2tldFNlbnRUaW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgbGFzdFBhY2tldFNlbnRUaW1lc3RhbXAgPSByZXBvcnQubGFzdFBhY2tldFNlbnRUaW1lc3RhbXA7XG5cbiAgICAgICAgICAgICAgaWYgKHJ0Y1N0YXRpc3RpY3NbJ2F1ZGlvJ10pIHtcbiAgICAgICAgICAgICAgICBydGNTdGF0aXN0aWNzWydhdWRpbyddLmxhc3RQYWNrZXRTZW50VGltZXN0YW1wID0gbGFzdFBhY2tldFNlbnRUaW1lc3RhbXA7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAocnRjU3RhdGlzdGljc1sndmlkZW8nXSkge1xuICAgICAgICAgICAgICAgIHJ0Y1N0YXRpc3RpY3NbJ3ZpZGVvJ10ubGFzdFBhY2tldFNlbnRUaW1lc3RhbXAgPSBsYXN0UGFja2V0U2VudFRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVwb3J0LnR5cGUgPT09ICdvdXRib3VuZC1ydHAnKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGtpbmQgPSByZXBvcnQua2luZCB8fCByZXBvcnQubWVkaWFUeXBlIHx8IGdldEtpbmRGb3JTYWZhcmkxMShyZXBvcnQpO1xuICAgICAgICAgICAgICBsZXQgY29kZWMgPSAnJztcblxuICAgICAgICAgICAgICBzdGF0cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSByZXBvcnQuY29kZWNJZCkge1xuICAgICAgICAgICAgICAgICAgY29kZWMgPSBpdGVtLm1pbWVUeXBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgaWYgKGtpbmQgJiYgdGhpcy5fYXZhaWxhYmxlVHJhY2tzW2tpbmRdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnl0ZXMgPSByZXBvcnQuYnl0ZXNTZW50IHx8IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNCeXRlc1NlbnQgPSB0aGlzLl9ydGNTdGF0aXN0aWMudmFsdWU/LltraW5kXT8uYnl0ZXNTZW50ID8/IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgYnl0ZXNEZWx0YSA9IGJ5dGVzIC0gcHJldmlvdXNCeXRlc1NlbnQ7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZURlbHRhID0gcmVwb3J0LnRpbWVzdGFtcCAtIHRoaXMuX3J0Y1N0YXRpc3RpYy52YWx1ZT8uW2tpbmRdPy50aW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgY29uc3QgYml0cmF0ZSA9IGJ5dGVzRGVsdGEgJiYgdGltZURlbHRhID8gTWF0aC5mbG9vcig4ICogYnl0ZXNEZWx0YSAvXG4gICAgICAgICAgICAgICAgICB0aW1lRGVsdGEgKiAxMDAwKSA6IDA7XG5cbiAgICAgICAgICAgICAgICBydGNTdGF0aXN0aWNzW2tpbmRdID0ge1xuICAgICAgICAgICAgICAgICAgc3NyYzogcmVwb3J0LnNzcmMsXG4gICAgICAgICAgICAgICAgICBtZWRpYVR5cGU6IGtpbmQsXG4gICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHJlcG9ydC50aW1lc3RhbXAsXG4gICAgICAgICAgICAgICAgICBiaXRyYXRlLFxuICAgICAgICAgICAgICAgICAgYnl0ZXNTZW50OiByZXBvcnQuYnl0ZXNTZW50LFxuICAgICAgICAgICAgICAgICAgcGFja2V0c1NlbnQ6IHJlcG9ydC5wYWNrZXRzU2VudCxcbiAgICAgICAgICAgICAgICAgIHJldHJhbnNtaXR0ZWRCeXRlc1NlbnQ6IHJlcG9ydC5yZXRyYW5zbWl0dGVkQnl0ZXNTZW50LFxuICAgICAgICAgICAgICAgICAgY29kZWM6IGNvZGVjIHx8IHRoaXMuZ2V0Q29kZWNCeVR5cGUoa2luZCksXG4gICAgICAgICAgICAgICAgICByb3VuZFRyaXBUaW1lXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXBvcnQubGFzdFBhY2tldFNlbnRUaW1lc3RhbXAgfHwgbGFzdFBhY2tldFNlbnRUaW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgICAgIHJ0Y1N0YXRpc3RpY3Nba2luZF0ubGFzdFBhY2tldFNlbnRUaW1lc3RhbXAgPSByZXBvcnQubGFzdFBhY2tldFNlbnRUaW1lc3RhbXAgfHwgbGFzdFBhY2tldFNlbnRUaW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGtpbmQgPT09ICd2aWRlbycgJiYgdGhpcy5fcnRjU3RhdGlzdGljLnZhbHVlICYmIHRoaXMuX3J0Y1N0YXRpc3RpYy52YWx1ZS52aWRlbykge1xuICAgICAgICAgICAgICAgICAgcnRjU3RhdGlzdGljc1traW5kXVsnZmlyQ291bnQnXSA9IHJlcG9ydC5maXJDb3VudDtcbiAgICAgICAgICAgICAgICAgIHJ0Y1N0YXRpc3RpY3Nba2luZF1bJ2ZyYW1lSGVpZ2h0J10gPSByZXBvcnQuZnJhbWVIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICBydGNTdGF0aXN0aWNzW2tpbmRdWydmcmFtZVdpZHRoJ10gPSByZXBvcnQuZnJhbWVXaWR0aDtcbiAgICAgICAgICAgICAgICAgIHJ0Y1N0YXRpc3RpY3Nba2luZF1bJ2ZyYW1lc0VuY29kZWQnXSA9IHJlcG9ydC5mcmFtZXNFbmNvZGVkO1xuICAgICAgICAgICAgICAgICAgcnRjU3RhdGlzdGljc1traW5kXVsnZnJhbWVzU2VudCddID0gcmVwb3J0LmZyYW1lc1NlbnQ7XG4gICAgICAgICAgICAgICAgICBydGNTdGF0aXN0aWNzW2tpbmRdWydoZWFkZXJCeXRlc1NlbnQnXSA9IHJlcG9ydC5oZWFkZXJCeXRlc1NlbnQ7XG4gICAgICAgICAgICAgICAgICBydGNTdGF0aXN0aWNzW2tpbmRdWydodWdlRnJhbWVzU2VudCddID0gcmVwb3J0Lmh1Z2VGcmFtZXNTZW50O1xuICAgICAgICAgICAgICAgICAgcnRjU3RhdGlzdGljc1traW5kXVsncGxpQ291bnQnXSA9IHJlcG9ydC5wbGlDb3VudDtcbiAgICAgICAgICAgICAgICAgIHJ0Y1N0YXRpc3RpY3Nba2luZF1bJ3FwU3VtJ10gPSByZXBvcnQucXBTdW07XG4gICAgICAgICAgICAgICAgICBydGNTdGF0aXN0aWNzW2tpbmRdWyd0b3RhbEVuY29kZVRpbWUnXSA9IHJlcG9ydC50b3RhbEVuY29kZVRpbWU7XG4gICAgICAgICAgICAgICAgICBydGNTdGF0aXN0aWNzW2tpbmRdWyd0b3RhbEVuY29kZWRCeXRlc1RhcmdldCddID0gcmVwb3J0LnRvdGFsRW5jb2RlZEJ5dGVzVGFyZ2V0O1xuXG4gICAgICAgICAgICAgICAgICBjb25zdCBmcHMgPSAocmVwb3J0LmZyYW1lc0VuY29kZWQgLSB0aGlzLl9ydGNTdGF0aXN0aWMudmFsdWUudmlkZW8uZnJhbWVzRW5jb2RlZCkgL1xuICAgICAgICAgICAgICAgICAgICAocnRjU3RhdGlzdGljc1traW5kXS50aW1lc3RhbXAgLSB0aGlzLl9ydGNTdGF0aXN0aWMudmFsdWUudmlkZW8udGltZXN0YW1wKSAqXG4gICAgICAgICAgICAgICAgICAgIDEwMDA7XG5cbiAgICAgICAgICAgICAgICAgIHJ0Y1N0YXRpc3RpY3Nba2luZF1bJ2ZwcyddID0gZnBzID8gTWF0aC5yb3VuZChmcHMgKiAxMDApIC8gMTAwIDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3J0Y1N0YXRpc3RpYy52YWx1ZSA9IHJ0Y1N0YXRpc3RpY3M7XG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2lzTW9uaXRvclJ1bm5pbmcpIHtcbiAgICAgICAgICB0aGlzLl91cGRhdGVUaW1lT3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVTdGF0aXN0aWMoKSwgdXBkYXRlU3RhdGlzdGljVGltZU91dCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb2RlY0J5VHlwZSh0eXBlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXVkaW8nOlxuICAgICAgICByZXR1cm4gdGhpcy5fZXN0aW1hdGVkQXVkaW9Db2RlYztcbiAgICAgIGNhc2UgJ3ZpZGVvJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VzdGltYXRlZFZpZGVvQ29kZWM7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ3Vua25vd24nO1xuICAgIH1cbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZHBQYXJzZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IF9zZHA6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfYXVkaW9Db2RlYzogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IF92aWRlb0NvZGVjOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2lzQXVkaW9UcmFja0VuYWJsZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgcmVhZG9ubHkgX2lzVmlkZW9UcmFja0VuYWJsZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3Ioc2RwOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZHAgPSBzZHA7XG5cbiAgICBjb25zdCBzZHBTcGxpdEJ5TGluZXMgPSB0aGlzLl9zZHAuc3BsaXQoLyhcXHJcXG58XFxyfFxcbikvKTtcbiAgICBjb25zdCBzZHBTcGxpdEJ5VHJhY2tzID0gdGhpcy5fc2RwLnNwbGl0KCdtPScpO1xuXG4gICAgdGhpcy5fYXVkaW9Db2RlYyA9IHRoaXMuYXBwbHlDb2RlYygnYXVkaW8nLCBzZHBTcGxpdEJ5TGluZXMpO1xuICAgIHRoaXMuX3ZpZGVvQ29kZWMgPSB0aGlzLmFwcGx5Q29kZWMoJ3ZpZGVvJywgc2RwU3BsaXRCeUxpbmVzKTtcbiAgICB0aGlzLl9pc0F1ZGlvVHJhY2tFbmFibGVkID0gdGhpcy5pc1RyYWNrQnlUeXBlRW5hYmxlZCgnYXVkaW8nLCBzZHBTcGxpdEJ5VHJhY2tzKTtcbiAgICB0aGlzLl9pc1ZpZGVvVHJhY2tFbmFibGVkID0gdGhpcy5pc1RyYWNrQnlUeXBlRW5hYmxlZCgndmlkZW8nLCBzZHBTcGxpdEJ5VHJhY2tzKTtcbiAgfVxuXG4gIGdldCBhdWRpb0NvZGVjKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2F1ZGlvQ29kZWM7XG4gIH1cblxuICBnZXQgdmlkZW9Db2RlYygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl92aWRlb0NvZGVjO1xuICB9XG5cbiAgZ2V0IGlzQXVkaW9UcmFja0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQXVkaW9UcmFja0VuYWJsZWQ7XG4gIH1cblxuICBnZXQgaXNWaWRlb1RyYWNrRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNWaWRlb1RyYWNrRW5hYmxlZDtcbiAgfVxuXG4gIHByaXZhdGUgaXNUcmFja0J5VHlwZUVuYWJsZWQodHlwZTogc3RyaW5nLCBzZHBTcGxpdEJ5VHJhY2tzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHNkcFNlY3Rpb25Gb3JUeXBlID0gc2RwU3BsaXRCeVRyYWNrcy5maW5kKHNkcFRyYWNrID0+IHNkcFRyYWNrLnN0YXJ0c1dpdGgodHlwZSkpO1xuXG4gICAgaWYgKCFzZHBTZWN0aW9uRm9yVHlwZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAhc2RwU2VjdGlvbkZvclR5cGUuaW5jbHVkZXMoYGE9aW5hY3RpdmVgKTtcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlDb2RlYyh0eXBlOiBzdHJpbmcsIHNkcFNwbGl0QnlMaW5lczogc3RyaW5nIFtdKTogc3RyaW5nIHtcbiAgICBjb25zdCB1c2VkQ29kZWNMaW5lID0gc2RwU3BsaXRCeUxpbmVzLmZpbmQoc2RwTGluZSA9PiBzZHBMaW5lLmluY2x1ZGVzKGBhPXJ0cG1hcDoke3NkcFNwbGl0QnlMaW5lcy5maW5kKGkgPT4gaS5pbmNsdWRlcyhgbT0ke3R5cGV9YCkpLnNwbGl0KCcgJylbM119YCkpO1xuICAgIGNvbnN0IHVzZWRDb2RlYyA9IHVzZWRDb2RlY0xpbmUuc3BsaXQoJyAnKVsxXTtcbiAgICBjb25zdCBjb2RlY05hbWUgPSB1c2VkQ29kZWMuc3BsaXQoJy8nKVswXTtcblxuICAgIHJldHVybiBjb2RlY05hbWU7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCBMb2dnZXJGYWN0b3J5IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXJGYWN0b3J5JztcbmltcG9ydCBJUGVlckNvbm5lY3Rpb24sIHtQZWVyQ29ubmVjdGlvbkV2ZW50c30gZnJvbSAnLi9JUGVlckNvbm5lY3Rpb24nO1xuaW1wb3J0IHtJTG9nZ2VyfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VySW50ZXJmYWNlJztcbmltcG9ydCBGZWF0dXJlRW5hYmxlbWVudCBmcm9tICcuLi9zZGsvZmVhdHVyZS9GZWF0dXJlRW5hYmxlbWVudCc7XG5pbXBvcnQge0lMZWdhY3lSVENTdGF0c1JlcG9ydH0gZnJvbSAnLi9SdGNDb25uZWN0aW9uTW9uaXRvcic7XG5cbmNsYXNzIFZhbmlsbGFQZWVyQ29ubmVjdGlvbiBpbXBsZW1lbnRzIElQZWVyQ29ubmVjdGlvbiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2xvZ2dlcjogSUxvZ2dlciA9IExvZ2dlckZhY3RvcnkuZ2V0TG9nZ2VyKCdWYW5pbGxhUGVlckNvbm5lY3Rpb24nKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfcGVlckNvbm5lY3Rpb246IFJUQ1BlZXJDb25uZWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb24/OiBSVENDb25maWd1cmF0aW9uKSB7XG4gICAgaWYgKEZlYXR1cmVFbmFibGVtZW50LndlYmtpdFJUQ1BlZXJDb25uZWN0aW9uRW5hYmxlZCkge1xuICAgICAgdGhpcy5fcGVlckNvbm5lY3Rpb24gPSBuZXcgd2Via2l0UlRDUGVlckNvbm5lY3Rpb24oY29uZmlndXJhdGlvbik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9wZWVyQ29ubmVjdGlvbiA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbihjb25maWd1cmF0aW9uKTtcbiAgfVxuXG4gIGdldCBuYXRpdmUoKTogUlRDUGVlckNvbm5lY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9wZWVyQ29ubmVjdGlvbjtcbiAgfVxuXG4gIGdldCBjdXJyZW50TG9jYWxEZXNjcmlwdGlvbigpOiBSVENTZXNzaW9uRGVzY3JpcHRpb24gfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fcGVlckNvbm5lY3Rpb24uY3VycmVudExvY2FsRGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgY3VycmVudFJlbW90ZURlc2NyaXB0aW9uKCk6IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9wZWVyQ29ubmVjdGlvbi5jdXJyZW50UmVtb3RlRGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgaWNlQ29ubmVjdGlvblN0YXRlKCk6IFJUQ0ljZUNvbm5lY3Rpb25TdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlZXJDb25uZWN0aW9uLmljZUNvbm5lY3Rpb25TdGF0ZTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c0dldENvbmZpZ3VyYXRpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9wZWVyQ29ubmVjdGlvbi5nZXRDb25maWd1cmF0aW9uID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzU2V0Q29uZmlndXJhdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX3BlZXJDb25uZWN0aW9uLnNldENvbmZpZ3VyYXRpb24gPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNBZGRUcmFuc2NlaXZlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIUZlYXR1cmVFbmFibGVtZW50LmFkZFRyYW5jZWl2ZXJEaXNhYmxlZCAmJiB0eXBlb2YgdGhpcy5fcGVlckNvbm5lY3Rpb24uYWRkVHJhbnNjZWl2ZXIgPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICBhc3luYyBjcmVhdGVPZmZlcihvcHRpb25zPzogUlRDT2ZmZXJPcHRpb25zKTogUHJvbWlzZTxSVENTZXNzaW9uRGVzY3JpcHRpb25Jbml0PiB7XG4gICAgaWYgKEZlYXR1cmVFbmFibGVtZW50LnByb21pc2VCYXNlZFBDTWV0aG9kc0Rpc2FibGVkKSB7XG4gICAgICAvLyBJZ25vcmVkIGFzIGxlYWdjeSBjcmVhdGVPZmZlciBtZXRob2Qgd2l0aCBjYWxsYmFja3MgaXMgZGVwcmVjYXRlZFxuICAgICAgLy8gUmVxdWlyZXMgYSB0cy1pZ25vcmUgZGlyZWN0aXZlIHRvIHByZXZlbnQgdHlwZXNjcmlwdCBlcnJvcnNcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB0aGlzLl9wZWVyQ29ubmVjdGlvbi5jcmVhdGVPZmZlcihyZXNvbHZlLCByZWplY3QsIG9wdGlvbnMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcGVlckNvbm5lY3Rpb24uY3JlYXRlT2ZmZXIob3B0aW9ucyk7XG4gIH1cblxuICBhc3luYyBjcmVhdGVBbnN3ZXIob3B0aW9ucz86IFJUQ0Fuc3dlck9wdGlvbnMpOiBQcm9taXNlPFJUQ1Nlc3Npb25EZXNjcmlwdGlvbkluaXQ+IHtcbiAgICBpZiAoRmVhdHVyZUVuYWJsZW1lbnQucHJvbWlzZUJhc2VkUENNZXRob2RzRGlzYWJsZWQpIHtcbiAgICAgIC8vIElnbm9yZWQgYXMgbGVhZ2N5IGNyZWF0ZUFuc3dlciBtZXRob2Qgd2l0aCBjYWxsYmFja3MgaXMgZGVwcmVjYXRlZFxuICAgICAgLy8gUmVxdWlyZXMgYSB0cy1pZ25vcmUgZGlyZWN0aXZlIHRvIHByZXZlbnQgdHlwZXNjcmlwdCBlcnJvcnNcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB0aGlzLl9wZWVyQ29ubmVjdGlvbi5jcmVhdGVBbnN3ZXIocmVzb2x2ZSwgcmVqZWN0LCBvcHRpb25zKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3BlZXJDb25uZWN0aW9uLmNyZWF0ZUFuc3dlcihvcHRpb25zKTtcbiAgfVxuXG4gIGFzeW5jIHNldExvY2FsRGVzY3JpcHRpb24oZGVzY3JpcHRpb246IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbkluaXQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fcGVlckNvbm5lY3Rpb24uc2V0TG9jYWxEZXNjcmlwdGlvbihGZWF0dXJlRW5hYmxlbWVudC5wcm9taXNlQmFzZWRQQ01ldGhvZHNEaXNhYmxlZCA/XG4gICAgICBuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSA6IGRlc2NyaXB0aW9uKTtcbiAgfVxuXG4gIGFzeW5jIHNldFJlbW90ZURlc2NyaXB0aW9uKGRlc2NyaXB0aW9uOiBSVENTZXNzaW9uRGVzY3JpcHRpb25Jbml0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgaGFzQ3J5cHRvID0gZGVzY3JpcHRpb24uc2RwPy5tYXRjaCgvYT1jcnlwdG86L2kpO1xuXG4gICAgaWYgKGhhc0NyeXB0bykge1xuICAgICAgdGhpcy5fbG9nZ2VyLndhcm4oJ1NEUCBhPWNyeXB0byBpcyBub3Qgc3VwcG9ydGVkJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3BlZXJDb25uZWN0aW9uLnNldFJlbW90ZURlc2NyaXB0aW9uKEZlYXR1cmVFbmFibGVtZW50LnByb21pc2VCYXNlZFBDTWV0aG9kc0Rpc2FibGVkID9cbiAgICAgIG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIDogZGVzY3JpcHRpb24pO1xuICB9XG5cbiAgZ2V0U2VuZGVycygpOiBSVENSdHBTZW5kZXJbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlZXJDb25uZWN0aW9uLmdldFNlbmRlcnMoKTtcbiAgfVxuXG4gIGdldFN0YXRzKHNlbGVjdG9yPzogTWVkaWFTdHJlYW1UcmFjayB8IG51bGwpOiBQcm9taXNlPFJUQ1N0YXRzUmVwb3J0PiB7XG4gICAgcmV0dXJuIHRoaXMuX3BlZXJDb25uZWN0aW9uLmdldFN0YXRzKHNlbGVjdG9yKTtcbiAgfVxuXG4gIGdldFN0YXRzTGVnYWN5KCk6IFByb21pc2U8SUxlZ2FjeVJUQ1N0YXRzUmVwb3J0PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgLy8gSWdub3JlZCBkdWUgdG8gdHlwZXNjcmlwdCBub3QgaGF2aW5nIGxlZ2FjeSAnZ2V0U3RhdHMnIG1ldGhvZCB0eXBlIGRlZmluaXRpb25cbiAgICAgIC8vIFRoaXMgd2FzIGEgQ2hyb21lIHNwZWNpZmljIGltcGxlbWVudGF0aW9uIG9mIHRoZSAnZ2V0U3RhdHMnIG1ldGhvZCBmb3JcbiAgICAgIC8vIENocm9tZUA8PSA2NiBkZXRhaWxlZCBoZXJlOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD02Mjc4MTZcbiAgICAgIC8vIFJlcXVpcmVzIGEgdHMtaWdub3JlIGRpcmVjdGl2ZSB0byBwcmV2ZW50IHR5cGVzY3JpcHQgZXJyb3JzXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCBpZ25vcmVkID0gdGhpcy5fcGVlckNvbm5lY3Rpb24uZ2V0U3RhdHMocmVzb2x2ZSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKHR5cGU6IFBlZXJDb25uZWN0aW9uRXZlbnRzLCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCwgb3B0aW9ucz86IGJvb2xlYW4gfCBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMuX3BlZXJDb25uZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlOiBQZWVyQ29ubmVjdGlvbkV2ZW50cywgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsIG9wdGlvbnM/OiBib29sZWFuIHwgRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLl9wZWVyQ29ubmVjdGlvbi5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgfVxuXG4gIGFkZFRyYW5zY2VpdmVyKG5hbWU6IHN0cmluZywgb3B0aW9uczogUlRDUnRwVHJhbnNjZWl2ZXJJbml0KTogUlRDUnRwVHJhbnNjZWl2ZXIge1xuICAgIHJldHVybiB0aGlzLl9wZWVyQ29ubmVjdGlvbi5hZGRUcmFuc2NlaXZlcihuYW1lLCBvcHRpb25zKTtcbiAgfVxuXG4gIGFkZFN0cmVhbShtZWRpYVN0cmVhbTogTWVkaWFTdHJlYW0pOiB2b2lkIHtcbiAgICBtZWRpYVN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKHRyYWNrID0+IHtcbiAgICAgIHRoaXMuX3BlZXJDb25uZWN0aW9uLmFkZFRyYWNrKHRyYWNrKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldENvbmZpZ3VyYXRpb24oKTogUlRDQ29uZmlndXJhdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX3BlZXJDb25uZWN0aW9uLmdldENvbmZpZ3VyYXRpb24oKTtcbiAgfVxuXG4gIHNldENvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbjogUlRDQ29uZmlndXJhdGlvbik6IHZvaWQge1xuICAgIHRoaXMuX3BlZXJDb25uZWN0aW9uLnNldENvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbik7XG4gIH1cblxuICBzZXQgb250cmFjayhoYW5kbGVyOiAoKHRoaXM6IFJUQ1BlZXJDb25uZWN0aW9uLCBldjogUlRDVHJhY2tFdmVudCkgPT4gdW5rbm93bikgfCBudWxsKSB7XG4gICAgdGhpcy5fcGVlckNvbm5lY3Rpb24ub250cmFjayA9IGhhbmRsZXI7XG4gIH1cblxuICBnZXQgb250cmFjaygpOiAoKHRoaXM6IFJUQ1BlZXJDb25uZWN0aW9uLCBldjogUlRDVHJhY2tFdmVudCkgPT4gdW5rbm93bikgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fcGVlckNvbm5lY3Rpb24ub250cmFjaztcbiAgfVxuXG4gIHNldCBvbmljZWNhbmRpZGF0ZShoYW5kbGVyOiAoKHRoaXM6IFJUQ1BlZXJDb25uZWN0aW9uLCBldjogUlRDUGVlckNvbm5lY3Rpb25JY2VFdmVudCkgPT4gdW5rbm93bikgfCBudWxsKSB7XG4gICAgdGhpcy5fcGVlckNvbm5lY3Rpb24ub25pY2VjYW5kaWRhdGUgPSBoYW5kbGVyO1xuICB9XG5cbiAgZ2V0IG9uaWNlY2FuZGlkYXRlKCk6ICgodGhpczogUlRDUGVlckNvbm5lY3Rpb24sIGV2OiBSVENQZWVyQ29ubmVjdGlvbkljZUV2ZW50KSA9PiB1bmtub3duKSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9wZWVyQ29ubmVjdGlvbi5vbmljZWNhbmRpZGF0ZTtcbiAgfVxuXG4gIHNldCBvbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZShoYW5kbGVyOiAoKHRoaXM6IFJUQ1BlZXJDb25uZWN0aW9uLCBldjogRXZlbnQpID0+IHVua25vd24pIHwgbnVsbCkge1xuICAgIHRoaXMuX3BlZXJDb25uZWN0aW9uLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlID0gaGFuZGxlcjtcbiAgfVxuXG4gIGdldCBvbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSgpOiAoKHRoaXM6IFJUQ1BlZXJDb25uZWN0aW9uLCBldjogRXZlbnQpID0+IHVua25vd24pIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3BlZXJDb25uZWN0aW9uLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlO1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fcGVlckNvbm5lY3Rpb24uY2xvc2UoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYW5pbGxhUGVlckNvbm5lY3Rpb247IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5cbmltcG9ydCBJUGVlckNvbm5lY3Rpb25GYWN0b3J5IGZyb20gJy4vSVBlZXJDb25uZWN0aW9uRmFjdG9yeSc7XG5pbXBvcnQgSVBlZXJDb25uZWN0aW9uIGZyb20gJy4vSVBlZXJDb25uZWN0aW9uJztcbmltcG9ydCBWYW5pbGxhUGVlckNvbm5lY3Rpb24gZnJvbSAnLi9WYW5pbGxhUGVlckNvbm5lY3Rpb24nO1xuXG5jbGFzcyBWYW5pbGxhUGVlckNvbm5lY3Rpb25GYWN0b3J5IGltcGxlbWVudHMgSVBlZXJDb25uZWN0aW9uRmFjdG9yeSB7XG4gIGFzeW5jIGNyZWF0ZVBlZXJDb25uZWN0aW9uKGNvbmZpZ3VyYXRpb24/OiBSVENDb25maWd1cmF0aW9uKTogUHJvbWlzZTxJUGVlckNvbm5lY3Rpb24+IHtcbiAgICByZXR1cm4gbmV3IFZhbmlsbGFQZWVyQ29ubmVjdGlvbihjb25maWd1cmF0aW9uKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYW5pbGxhUGVlckNvbm5lY3Rpb25GYWN0b3J5OyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgU3ViamVjdCBmcm9tICcuL1N1YmplY3QnO1xuaW1wb3J0IElEaXNwb3NhYmxlIGZyb20gJy4uL2xhbmcvSURpc3Bvc2FibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFkT25seVN1YmplY3Q8VD4ge1xuICBwcml2YXRlIHJlYWRvbmx5IF9zdWJqZWN0OiBTdWJqZWN0PFQ+O1xuXG4gIGNvbnN0cnVjdG9yKHN1YmplY3Q6IFN1YmplY3Q8VD4pIHtcbiAgICB0aGlzLl9zdWJqZWN0ID0gc3ViamVjdDtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5fc3ViamVjdC52YWx1ZTtcbiAgfVxuXG4gIHN1YnNjcmliZShsaXN0ZW5lcjogKFQpID0+IHZvaWQpOiBJRGlzcG9zYWJsZSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1YmplY3Quc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgSURpc3Bvc2FibGUgZnJvbSAnLi4vbGFuZy9JRGlzcG9zYWJsZSc7XG5pbXBvcnQgRGlzcG9zYWJsZSBmcm9tICcuLi9sYW5nL0Rpc3Bvc2FibGUnO1xuaW1wb3J0IElDb21wYXJhYmxlIGZyb20gJy4uL2xhbmcvSUNvbXBhcmFibGUnO1xuXG5jbGFzcyBEaXNwb3NhYmxlTGlzdGVuZXI8VD4gZXh0ZW5kcyBEaXNwb3NhYmxlIHtcbiAgY29uc3RydWN0b3IobGlzdGVuZXJzOiBBcnJheTxUPiwgbGlzdGVuZXI6IFQpIHtcbiAgICBzdXBlcigoKSA9PiB7XG4gICAgICBjb25zdCBpZHggPSBsaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG5cbiAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViamVjdDxUPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2xpc3RlbmVyczogQXJyYXk8KFQpID0+IHZvaWQ+O1xuICBwcml2YXRlIF92YWx1ZTogVDtcblxuICBjb25zdHJ1Y3Rvcih2YWx1ZTogVCkge1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IFtdO1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWU6IFQpIHtcbiAgICBsZXQgY2hhbmdlZCA9IHRoaXMuX3ZhbHVlICE9PSB2YWx1ZTtcblxuICAgIGlmIChjaGFuZ2VkICYmIHZhbHVlKSB7XG4gICAgICBjb25zdCBjb21wYXJhYmxlID0gdmFsdWUgYXMgdW5rbm93biBhcyBJQ29tcGFyYWJsZTxUPjtcblxuICAgICAgaWYgKHR5cGVvZiBjb21wYXJhYmxlLmVxdWFscyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGFuZ2VkID0gIWNvbXBhcmFibGUuZXF1YWxzKHRoaXMuX3ZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNoYW5nZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuXG4gICAgdGhpcy5fbGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgbGlzdGVuZXIodmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IFQge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHN1YnNjcmliZShsaXN0ZW5lcjogKFQpID0+IHZvaWQpOiBJRGlzcG9zYWJsZSB7XG4gICAgdGhpcy5fbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgbGlzdGVuZXIodGhpcy5fdmFsdWUpO1xuXG4gICAgcmV0dXJuIG5ldyBEaXNwb3NhYmxlTGlzdGVuZXI8KFQpID0+IHZvaWQ+KHRoaXMuX2xpc3RlbmVycywgbGlzdGVuZXIpO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudmlyb25tZW50IHtcbiAgc3RhdGljIGdldEVudmlyb25tZW50RnJvbVVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGJhc2VVUkwgPSBuZXcgVVJMKHVybCk7XG5cbiAgICAgIHJldHVybiBiYXNlVVJMLm9yaWdpbjtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQgTG9nZ2VyRmFjdG9yeSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VyRmFjdG9yeSc7XG5pbXBvcnQgU3RyaW5ncyBmcm9tICcuLi9sYW5nL1N0cmluZ3MnO1xuaW1wb3J0IFN1YmplY3QgZnJvbSAnLi4vcngvU3ViamVjdCc7XG5pbXBvcnQgUmVhZE9ubHlTdWJqZWN0IGZyb20gJy4uL3J4L1JlYWRPbmx5U3ViamVjdCc7XG5pbXBvcnQgSVBlZXJDb25uZWN0aW9uRmFjdG9yeSBmcm9tICcuLi9ydGMvSVBlZXJDb25uZWN0aW9uRmFjdG9yeSc7XG5pbXBvcnQgVmFuaWxsYVBlZXJDb25uZWN0aW9uRmFjdG9yeSBmcm9tICcuLi9ydGMvVmFuaWxsYVBlZXJDb25uZWN0aW9uRmFjdG9yeSc7XG5pbXBvcnQgRWRnZUF1dGggZnJvbSAnLi9lZGdlQXV0aC9FZGdlQXV0aCc7XG5pbXBvcnQge0lMb2dnZXJ9IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXJJbnRlcmZhY2UnO1xuaW1wb3J0IHtMb2dnaW5nTGV2ZWwsIExvZ2dpbmdMZXZlbFR5cGV9IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IENvbnNvbGVBcHBlbmRlciBmcm9tICcuLi9sb2dnZXIvQ29uc29sZUFwcGVuZGVyJztcbmltcG9ydCBUZWxlbWV0cnlBcHBlbmRlciBmcm9tICcuLi90ZWxlbWV0cnkvVGVsZW1ldHJ5QXBlbmRlcic7XG5pbXBvcnQgQ29uZmlndXJhdGlvblBhcmFtZXRlclJlYWRlciBmcm9tICcuLi9kb20vQ29uZmlndXJhdGlvblBhcmFtZXRlclJlYWRlcic7XG5pbXBvcnQgTWV0cmljc0NvbmZpZ3VyYXRpb24sIHtUZWxlbWV0cnlMZXZlbCwgVGVsZW1ldHJ5TGV2ZWxUeXBlfSBmcm9tICcuLi9tZXRyaWNzL01ldHJpY3NDb25maWd1cmF0aW9uJztcbmltcG9ydCBNZXRyaWNzU2VydmljZSBmcm9tICcuLi9tZXRyaWNzL01ldHJpY3NTZXJ2aWNlJztcbmltcG9ydCBUZWxlbWV0cnlMZXZlbE1hcHBpbmcgZnJvbSAnLi4vbWV0cmljcy9UZWxlbWV0cmljTGV2ZWxNYXBwaW5nJztcbmltcG9ydCBMb2dnaW5nTGV2ZWxNYXBwaW5nIGZyb20gJy4uL2xvZ2dlci9Mb2dnaW5nTGV2ZWxNYXBwaW5nJztcbmltcG9ydCBQcml2YWN5TW9kZSBmcm9tICcuLi9kb20vUHJpdmFjeU1vZGUnO1xuaW1wb3J0IEJyb3dzZXJEZXRlY3RvciBmcm9tICcuLi9kb20vQnJvd3NlckRldGVjdG9yJztcbmltcG9ydCB7SUNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXJ9IGZyb20gJy4uL2RvbS9JQ29uZmlndXJhdGlvblBhcmFtYXRlclJlYWRlcic7XG5pbXBvcnQgQXBwbGljYXRpb25BY3Rpdml0eU1vbml0b3IgZnJvbSAnLi4vZG9tL0FwcGxpY2F0aW9uQWN0aXZpdHlNb25pdG9yJztcbmltcG9ydCBUZWxlbWV0cnlVcmwgZnJvbSAnLi9UZWxlbWV0cnlVcmwnO1xuaW1wb3J0IEVudmlyb25tZW50IGZyb20gJy4vRW52aXJvbm1lbnQnO1xuaW1wb3J0IHtIbHNQbGF5ZXJUeXBlLCBTaGFrYVR5cGUsIFdlYlBsYXllclR5cGV9IGZyb20gJy4vc3RyZWFtaW5nL1N0cmVhbVR5cGVzJztcbmltcG9ydCBEaXNjb3ZlcnlVcmkgZnJvbSAnLi9kaXNjb3ZlcnkvRGlzY292ZXJ5VXJpJztcbmltcG9ydCBNZXRyaWNzRmFjdG9yeSBmcm9tICcuLi9tZXRyaWNzL01ldHJpY3NGYWN0b3J5JztcbmltcG9ydCBUZWxlbWV0cnlEZWZhdWx0IGZyb20gJy4uL21ldHJpY3MvVGVsZW1ldHJ5RGVmYXVsdCc7XG5cbmNvbnN0IHBhZ2VMb2FkVGltZSA9IHdpbmRvd1snX19waGVuaXhQYWdlTG9hZFRpbWUnXSB8fCB3aW5kb3dbJ19fcGFnZUxvYWRUaW1lJ10gfHwgRGF0ZS5ub3coKTtcblxuaW50ZXJmYWNlIElJbml0T3B0aW9ucyB7XG4gIGRpc2NvdmVyeVVyaT86IHN0cmluZztcbiAgcGVlckNvbm5lY3Rpb25GYWN0b3J5PzogSVBlZXJDb25uZWN0aW9uRmFjdG9yeTtcbiAgdGVsZW1ldHJ5TGV2ZWw/OiBUZWxlbWV0cnlMZXZlbFR5cGU7XG4gIGxvZ2dpbmdMZXZlbD86IExvZ2dpbmdMZXZlbFR5cGU7XG4gIGNvbnNvbGVMb2dnaW5nTGV2ZWw/OiBMb2dnaW5nTGV2ZWxUeXBlO1xuICBhdXRvbWF0aWNhbGx5UGxheU1lZGlhU3RyZWFtPzogYm9vbGVhbjtcbiAgYXV0b21hdGljYWxseU11dGVWaWRlb09uUGxheUZhaWx1cmU/OiBib29sZWFuO1xuICB3ZWJQbGF5ZXJMb2FkZXI/OiAocGxheWVyOiBXZWJQbGF5ZXJUeXBlKSA9PiB2b2lkO1xuICBzaGFrYVBsYXllckxvYWRlcj86IChwbGF5ZXI6IFNoYWthVHlwZSkgPT4gdm9pZDtcbiAgaGxzSnNMb2FkZXI/OiAocGxheWVyOiBIbHNQbGF5ZXJUeXBlKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTREsge1xuICBwcml2YXRlIHN0YXRpYyBfYXV0b21hdGljYWxseVJldHJ5T25GYWlsdXJlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBzdGF0aWMgX2F1dG9tYXRpY2FsbHlSZWNvbm5lY3RQZWVyQ29ubmVjdGlvbiA9IHRydWU7XG4gIHByaXZhdGUgc3RhdGljIF9hdXRvbWF0aWNhbGx5UGxheU1lZGlhU3RyZWFtID0gdHJ1ZTtcbiAgcHJpdmF0ZSBzdGF0aWMgX2F1dG9tYXRpY2FsbHlNdXRlVmlkZW9PblBsYXlGYWlsdXJlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBzdGF0aWMgX3dlYlBsYXllckxvYWRlciA9IG51bGw7XG4gIHByaXZhdGUgc3RhdGljIF9zaGFrYVBsYXllckxvYWRlciA9IG51bGw7XG4gIHByaXZhdGUgc3RhdGljIF9obHNKc0xvYWRlciA9IG51bGw7XG4gIHByaXZhdGUgc3RhdGljIF9jb25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyOiBJQ29uZmlndXJhdGlvblBhcmFtZXRlclJlYWRlciA9IG5ldyBDb25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyKCk7XG4gIHByaXZhdGUgc3RhdGljIF9hcHBsaWNhdGlvbkFjdGl2aXR5TW9uaXRvcjogQXBwbGljYXRpb25BY3Rpdml0eU1vbml0b3I7XG4gIHByaXZhdGUgc3RhdGljIF9lbnZpcm9ubWVudDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3Q8c3RyaW5nPignJyk7XG4gIHByaXZhdGUgc3RhdGljIF90ZWxlbWV0cnlVcmw6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oJ2h0dHBzOi8vdGVsZW1ldHJ5LnBoZW5peHJ0cy5jb20vdGVsZW1ldHJ5Jyk7XG4gIHByaXZhdGUgc3RhdGljIF9tYXhpbWFsTnVtYmVyT2ZQZWVyQ29ubmVjdGlvblJlY29ubmVjdEF0dGVtcHRzID0gODtcbiAgcHJpdmF0ZSBzdGF0aWMgX3RlbGVtZXRyeUxldmVsOiBTdWJqZWN0PFRlbGVtZXRyeUxldmVsPiA9IG5ldyBTdWJqZWN0PFRlbGVtZXRyeUxldmVsPihUZWxlbWV0cnlEZWZhdWx0LmRlZmF1bHRUZWxlbWV0cnlMZXZlbCk7XG4gIHByaXZhdGUgc3RhdGljIF9tZXRyaWNzU2VydmljZTogTWV0cmljc1NlcnZpY2U7XG4gIHByaXZhdGUgc3RhdGljIF9tZXRyaWNzQ29uZmlndXJhdGlvbjogTWV0cmljc0NvbmZpZ3VyYXRpb25cbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX3NlbmRMb2NhbENhbmRpZGF0ZXM6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCghUHJpdmFjeU1vZGUuaXNQcml2YXRlKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX3RlbmFuY3k6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oJycpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfY2xpZW50U2Vzc2lvbklkOiBzdHJpbmcgPSBTdHJpbmdzLnJhbmRvbSgzMik7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9sb2FkZWRUaW1lc3RhbXA6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfbG9nZ2VyOiBJTG9nZ2VyID0gTG9nZ2VyRmFjdG9yeS5nZXRMb2dnZXIoJ1NESycpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfaW5pdGlhbGl6ZWQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9wZWVyQ29ubmVjdGlvbkZhY3Rvcnk6IFN1YmplY3Q8SVBlZXJDb25uZWN0aW9uRmFjdG9yeT4gPSBuZXcgU3ViamVjdDxJUGVlckNvbm5lY3Rpb25GYWN0b3J5PihuZXcgVmFuaWxsYVBlZXJDb25uZWN0aW9uRmFjdG9yeSgpKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX3JlYWRPbmx5SW5pdGlhbGl6ZWQ6IFJlYWRPbmx5U3ViamVjdDxib29sZWFuPiA9IG5ldyBSZWFkT25seVN1YmplY3Q8Ym9vbGVhbj4oU0RLLl9pbml0aWFsaXplZCk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9yZWFkT25seURpc2NvdmVyeVVyaTogUmVhZE9ubHlTdWJqZWN0PHN0cmluZz4gPSBuZXcgUmVhZE9ubHlTdWJqZWN0PHN0cmluZz4oRGlzY292ZXJ5VXJpLnVyaSk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9yZWFkT25seVBlZXJDb25uZWN0aW9uRmFjdG9yeTogUmVhZE9ubHlTdWJqZWN0PElQZWVyQ29ubmVjdGlvbkZhY3Rvcnk+ID0gbmV3IFJlYWRPbmx5U3ViamVjdDxJUGVlckNvbm5lY3Rpb25GYWN0b3J5PihTREsuX3BlZXJDb25uZWN0aW9uRmFjdG9yeSk7XG5cbiAgc3RhdGljIGdldCBwYWdlTG9hZFRpbWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gcGFnZUxvYWRUaW1lO1xuICB9XG5cbiAgc3RhdGljIGdldCBzZW5kTG9jYWxDYW5kaWRhdGVzKCk6IFN1YmplY3Q8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLl9zZW5kTG9jYWxDYW5kaWRhdGVzO1xuICB9XG5cbiAgc3RhdGljIGdldCB0ZW5hbmN5KCk6IFN1YmplY3Q8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbmFuY3k7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGNsaWVudFNlc3Npb25JZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBTREsuX2NsaWVudFNlc3Npb25JZDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgbG9hZGVkVGltZXN0YW1wKCk6IERhdGUge1xuICAgIHJldHVybiBTREsuX2xvYWRlZFRpbWVzdGFtcDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaW5pdGlhbGl6ZWQoKTogUmVhZE9ubHlTdWJqZWN0PGJvb2xlYW4+IHtcbiAgICByZXR1cm4gU0RLLl9yZWFkT25seUluaXRpYWxpemVkO1xuICB9XG5cbiAgc3RhdGljIGdldCBkaXNjb3ZlcnlVcmkoKTogUmVhZE9ubHlTdWJqZWN0PHN0cmluZz4ge1xuICAgIHJldHVybiBTREsuX3JlYWRPbmx5RGlzY292ZXJ5VXJpO1xuICB9XG5cbiAgc3RhdGljIGdldCBwZWVyQ29ubmVjdGlvbkZhY3RvcnkoKTogUmVhZE9ubHlTdWJqZWN0PElQZWVyQ29ubmVjdGlvbkZhY3Rvcnk+IHtcbiAgICByZXR1cm4gU0RLLl9yZWFkT25seVBlZXJDb25uZWN0aW9uRmFjdG9yeTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgYXV0b21hdGljUmV0cnlPbkZhaWx1cmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIFNESy5fYXV0b21hdGljYWxseVJldHJ5T25GYWlsdXJlO1xuICB9XG5cbiAgc3RhdGljIGdldCBhdXRvbWF0aWNhbGx5UmVjb25uZWN0UGVlckNvbm5lY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIFNESy5fYXV0b21hdGljYWxseVJlY29ubmVjdFBlZXJDb25uZWN0aW9uO1xuICB9XG5cbiAgc3RhdGljIGdldCBhdXRvbWF0aWNhbGx5UGxheU1lZGlhU3RyZWFtKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBTREsuX2F1dG9tYXRpY2FsbHlQbGF5TWVkaWFTdHJlYW07XG4gIH1cblxuICBzdGF0aWMgZ2V0IGF1dG9tYXRpY2FsbHlNdXRlVmlkZW9PblBsYXlGYWlsdXJlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBTREsuX2F1dG9tYXRpY2FsbHlNdXRlVmlkZW9PblBsYXlGYWlsdXJlO1xuICB9XG5cbiAgc3RhdGljIGdldCB3ZWJQbGF5ZXJMb2FkZXIoKTogKFdlYlBsYXllclR5cGUpID0+IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl93ZWJQbGF5ZXJMb2FkZXI7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHNoYWthUGxheWVyTG9hZGVyKCk6IChTaGFrYVR5cGUpID0+IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl9zaGFrYVBsYXllckxvYWRlcjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaGxzSnNMb2FkZXIoKTogKEhsc1BsYXllclR5cGUpID0+IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl9obHNKc0xvYWRlcjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgbWV0cmljc1NlcnZpY2UoKTogTWV0cmljc1NlcnZpY2Uge1xuICAgIHJldHVybiBTREsuX21ldHJpY3NTZXJ2aWNlO1xuICB9XG5cbiAgc3RhdGljIGdldCBhcHBsaWNhdGlvbkFjdGl2aXR5TW9uaXRvcigpOiBBcHBsaWNhdGlvbkFjdGl2aXR5TW9uaXRvciB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGxpY2F0aW9uQWN0aXZpdHlNb25pdG9yO1xuICB9XG5cbiAgc3RhdGljIGdldCB0ZWxlbWV0cnlVcmwoKTogU3ViamVjdDxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fdGVsZW1ldHJ5VXJsO1xuICB9XG5cbiAgc3RhdGljIGdldCBtYXhpbWFsTnVtYmVyT2ZQZWVyQ29ubmVjdGlvblJlY29ubmVjdEF0dGVtcHRzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21heGltYWxOdW1iZXJPZlBlZXJDb25uZWN0aW9uUmVjb25uZWN0QXR0ZW1wdHM7XG4gIH1cblxuICBzdGF0aWMgc2V0IG1heGltYWxOdW1iZXJPZlBlZXJDb25uZWN0aW9uUmVjb25uZWN0QXR0ZW1wdHMocmV0cmllc0Ftb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4aW1hbE51bWJlck9mUGVlckNvbm5lY3Rpb25SZWNvbm5lY3RBdHRlbXB0cyA9IHJldHJpZXNBbW91bnQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGxvZ2dpbmdMZXZlbCgpOiBMb2dnaW5nTGV2ZWxUeXBlIHtcbiAgICByZXR1cm4gTG9nZ2luZ0xldmVsTWFwcGluZy5jb252ZXJ0TG9nZ2luZ0xldmVsVG9Mb2dnaW5nTGV2ZWxUeXBlKHRoaXMuX2xvZ2dlci50aHJlc2hvbGQudmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0ZWxlbWV0cnlMZXZlbCgpOiBUZWxlbWV0cnlMZXZlbFR5cGUge1xuICAgIHJldHVybiBUZWxlbWV0cnlMZXZlbE1hcHBpbmcuY29udmVydFRlbGVtZXRyeUxldmVsVG9UZWxlbWV0cnlMZXZlbFR5cGUoU0RLLl90ZWxlbWV0cnlMZXZlbC52YWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGJyb3dzZXJEZXRlY3RvcigpOiBCcm93c2VyRGV0ZWN0b3Ige1xuICAgIHJldHVybiBCcm93c2VyRGV0ZWN0b3I7XG4gIH1cblxuICBzdGF0aWMgYXBwbHlUZWxlbWV0cnlDb25maWd1cmF0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IHRlbGVtZXRyeUNvbmZpZ3VyYXRpb24gPSBMb2dnZXJGYWN0b3J5LnRlbGVtZXRyeUNvbmZpZ3VyYXRpb247XG5cbiAgICB0ZWxlbWV0cnlDb25maWd1cmF0aW9uLnNlc3Npb25JZCA9IFNESy5jbGllbnRTZXNzaW9uSWQ7XG5cbiAgICBjb25zdCBpZ25vcmVkRW52aXJvbm1lbnQgPSBTREsuX2Vudmlyb25tZW50LnN1YnNjcmliZShlbnZpcm9ubWVudCA9PiB7XG4gICAgICB0ZWxlbWV0cnlDb25maWd1cmF0aW9uLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG4gICAgfSk7XG4gICAgY29uc3QgaWdub3JlZERpc2NvdmVyeVVyaSA9IFNESy50ZWxlbWV0cnlVcmwuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIGNvbnN0IHRlbGVtZXRyeUFwcGVuZGVyID0gdGhpcy5fbG9nZ2VyLmFwcGVuZGVycy52YWx1ZS5maW5kKGFwcGVuZGVyID0+IGFwcGVuZGVyIGluc3RhbmNlb2YgVGVsZW1ldHJ5QXBwZW5kZXIpO1xuXG4gICAgICBpZiAodGVsZW1ldHJ5QXBwZW5kZXIpIHtcbiAgICAgICAgdGVsZW1ldHJ5Q29uZmlndXJhdGlvbi51cmwgPSB2YWx1ZTtcblxuICAgICAgICB0aGlzLl9sb2dnZXIuYXBwZW5kZXJzLnJlbW92ZSh0ZWxlbWV0cnlBcHBlbmRlcik7XG4gICAgICAgIHRoaXMuX2xvZ2dlci5hcHBlbmRlcnMuYWRkKG5ldyBUZWxlbWV0cnlBcHBlbmRlcih0ZWxlbWV0cnlDb25maWd1cmF0aW9uKSk7XG4gICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKCdUZWxlbWV0cnkgVVJMIHdhcyBzZXQgdG8gWyVzXScsIHRlbGVtZXRyeUNvbmZpZ3VyYXRpb24udXJsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBpZ25vcmVkVGVuYW5jeSA9IFNESy5fdGVuYW5jeS5zdWJzY3JpYmUodGVuYW5jeSA9PiB7XG4gICAgICBjb25zdCB0ZWxlbWV0cnlBcHBlbmRlciA9IHRoaXMuX2xvZ2dlci5hcHBlbmRlcnMudmFsdWUuZmluZChhcHBlbmRlciA9PiBhcHBlbmRlciBpbnN0YW5jZW9mIFRlbGVtZXRyeUFwcGVuZGVyKTtcblxuICAgICAgaWYgKHRlbGVtZXRyeUFwcGVuZGVyICYmIHRlbmFuY3kpIHtcbiAgICAgICAgdGVsZW1ldHJ5Q29uZmlndXJhdGlvbi50ZW5hbmN5ID0gdGVuYW5jeTtcblxuICAgICAgICB0aGlzLl9sb2dnZXIuYXBwZW5kZXJzLnJlbW92ZSh0ZWxlbWV0cnlBcHBlbmRlcik7XG4gICAgICAgIHRoaXMuX2xvZ2dlci5hcHBlbmRlcnMuYWRkKG5ldyBUZWxlbWV0cnlBcHBlbmRlcih0ZWxlbWV0cnlDb25maWd1cmF0aW9uKSk7XG4gICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKCdUZWxlbWV0cnkgdGVuYW5jeSB3YXMgc2V0IHRvIFslc10nLCB0ZWxlbWV0cnlDb25maWd1cmF0aW9uLnRlbmFuY3kpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGFwcGx5TWV0cmljc0NvbmZpZ3VyYXRpb24oKTogdm9pZCB7XG4gICAgU0RLLl9tZXRyaWNzU2VydmljZSA9IE1ldHJpY3NGYWN0b3J5LmdldE1ldHJpY3NTZXJ2aWNlKERpc2NvdmVyeVVyaS51cmkudmFsdWUpO1xuICAgIFNESy5fbWV0cmljc0NvbmZpZ3VyYXRpb24gPSBTREsuX21ldHJpY3NTZXJ2aWNlLm1ldHJpY3NDb25maWd1cmF0aW9uO1xuXG4gICAgU0RLLl9tZXRyaWNzQ29uZmlndXJhdGlvbi5zZXNzaW9uSWQgPSBTREsuY2xpZW50U2Vzc2lvbklkO1xuXG4gICAgY29uc3QgaWdub3JlZEVudmlyb25tZW50ID0gU0RLLl9lbnZpcm9ubWVudC5zdWJzY3JpYmUoZW52aXJvbm1lbnQgPT4ge1xuICAgICAgU0RLLl9tZXRyaWNzQ29uZmlndXJhdGlvbi5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICAgIH0pO1xuICAgIGNvbnN0IGlnbm9yZWREaXNjb3ZlcnlVcmkgPSBTREsudGVsZW1ldHJ5VXJsLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBTREsuX21ldHJpY3NDb25maWd1cmF0aW9uLnVybCA9IHZhbHVlO1xuICAgIH0pO1xuICAgIGNvbnN0IGlnbm9yZWRUZW5hbmN5ID0gU0RLLl90ZW5hbmN5LnN1YnNjcmliZSh0ZW5hbmN5ID0+IHtcbiAgICAgIFNESy5fbWV0cmljc0NvbmZpZ3VyYXRpb24udGVuYW5jeSA9IHRlbmFuY3k7XG4gICAgfSk7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9jb25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyLmdldFN0cmluZ1ZhbHVlKCdwaGVuaXgtbWV0cmljcy1sZXZlbCcpO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBNZXRyaWNzRmFjdG9yeS5zZXRUZWxlbWV0cnlMZXZlbChUZWxlbWV0cnlMZXZlbFt2YWx1ZV0pO1xuICAgIH1cblxuICAgIGNvbnN0IGlnbm9yZWRUZWxlbWV0cnlMZXZlbCA9IFNESy5fdGVsZW1ldHJ5TGV2ZWwuc3Vic2NyaWJlKHRlbGVtZXRyeUxldmVsID0+IHtcbiAgICAgIE1ldHJpY3NGYWN0b3J5LnNldFRlbGVtZXRyeUxldmVsKHRlbGVtZXRyeUxldmVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhcHBseUF1dG9tYXRpY2FsbHlSZXRyeU9uRmFpbHVyZUZyb21QYXJhbWV0ZXJDb25maWd1cmF0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuX2F1dG9tYXRpY2FsbHlSZXRyeU9uRmFpbHVyZSA9IHRoaXMuX2NvbmZpZ3VyYXRpb25QYXJhbWV0ZXJSZWFkZXIuZ2V0Qm9vbGVhblZhbHVlKCdwaGVuaXgtYXV0b21hdGljYWxseS1yZXRyeS1vbi1mYWlsdXJlJyk7XG4gICAgdGhpcy5fbG9nZ2VyLmluZm8oJ0F1dG9tYXRpY2FsbHkgcmV0cnkgb24gZmFpbHVyZSBpcyBzZXQgdG86IFslc10nLCB0aGlzLl9hdXRvbWF0aWNhbGx5UmV0cnlPbkZhaWx1cmUpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGljIGFwcGx5QXV0b21hdGljYWxseVJlY29ubmVjdFBlZXJDb25uZWN0aW9uRnJvbVBhcmFtZXRlckNvbmZpZ3VyYXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fYXV0b21hdGljYWxseVJlY29ubmVjdFBlZXJDb25uZWN0aW9uID0gdGhpcy5fY29uZmlndXJhdGlvblBhcmFtZXRlclJlYWRlci5nZXRCb29sZWFuVmFsdWUoJ3BoZW5peC1hdXRvbWF0aWNhbGx5LXJlY29ubmVjdC1wZWVyLWNvbm5lY3Rpb24nKTtcbiAgICB0aGlzLl9sb2dnZXIuaW5mbygnQXV0b21hdGljYWxseSByZWNvbm5lY3QgcGVlciBjb25uZWN0aW9uIGlzIHNldCB0bzogWyVzXScsIHRoaXMuX2F1dG9tYXRpY2FsbHlSZWNvbm5lY3RQZWVyQ29ubmVjdGlvbik7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBzdGF0aWMgYXBwbHlEaXNjb3ZlcnlVcmlEZWZhdWx0RnJvbVBhcmFtZXRlckNvbmZpZ3VyYXRpb24oKTogdm9pZCB7XG4gICAgU0RLLmRpc2NvdmVyeVVyaS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgU0RLLnRlbGVtZXRyeVVybC52YWx1ZSA9IFNESy5nZXRUZWxlbWV0cnlVcmwodmFsdWUpO1xuICAgICAgU0RLLl9lbnZpcm9ubWVudC52YWx1ZSA9IEVudmlyb25tZW50LmdldEVudmlyb25tZW50RnJvbVVybCh2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjaGFubmVsVG9rZW4gPSB0aGlzLl9jb25maWd1cmF0aW9uUGFyYW1ldGVyUmVhZGVyLmdldFN0cmluZ1ZhbHVlKCdwaGVuaXgtY2hhbm5lbC10b2tlbicpO1xuXG4gICAgaWYgKGNoYW5uZWxUb2tlbikge1xuICAgICAgY29uc3QgcGFyc2VkVG9rZW4gPSBFZGdlQXV0aC5wYXJzZVRva2VuKGNoYW5uZWxUb2tlbik7XG5cbiAgICAgIFNESy5fdGVuYW5jeS52YWx1ZSA9IEVkZ2VBdXRoLmdldFRlbmFuY3kocGFyc2VkVG9rZW4pO1xuICAgICAgRGlzY292ZXJ5VXJpLnVyaS52YWx1ZSA9IChFZGdlQXV0aC5nZXRVcmkocGFyc2VkVG9rZW4pIHx8IFNESy5kaXNjb3ZlcnlVcmkudmFsdWUpLnRvU3RyaW5nKCk7XG5cbiAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKCdEaXNjb3ZlcnkgVVJJIHNldCBmcm9tIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVyIHRvIFslc10nLCBTREsuZGlzY292ZXJ5VXJpLnZhbHVlKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVyaVZhbHVlID0gdGhpcy5fY29uZmlndXJhdGlvblBhcmFtZXRlclJlYWRlci5nZXRTdHJpbmdWYWx1ZSgncGhlbml4LXVyaScpO1xuXG4gICAgaWYgKHVyaVZhbHVlKSB7XG4gICAgICBEaXNjb3ZlcnlVcmkudXJpLnZhbHVlID0gdXJpVmFsdWU7XG4gICAgICB0aGlzLl9sb2dnZXIuaW5mbygnRGlzY292ZXJ5IFVSSSBzZXQgZnJvbSBcInBoZW5peC11cmlcIiBjb25maWd1cmF0aW9uIHBhcmFtZXRlciB0YWcgdG8gWyVzXScsIFNESy5kaXNjb3ZlcnlVcmkudmFsdWUpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYmFzZVVSSVZhbHVlID0gdGhpcy5fY29uZmlndXJhdGlvblBhcmFtZXRlclJlYWRlci5nZXRTdHJpbmdWYWx1ZSgncGhlbml4LWJhc2UtdXJpJyk7XG5cbiAgICBpZiAoYmFzZVVSSVZhbHVlKSB7XG4gICAgICBEaXNjb3ZlcnlVcmkudXJpLnZhbHVlID0gYCR7YmFzZVVSSVZhbHVlfS9wY2FzdC9lbmRQb2ludHNgO1xuICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oJ0Rpc2NvdmVyeSBVUkkgc2V0IGZyb20gXCJwaGVuaXgtYmFzZS11cmlcIiBjb25maWd1cmF0aW9uIHBhcmFtZXRlciB0YWcgdG8gWyVzXScsIFNESy5kaXNjb3ZlcnlVcmkudmFsdWUpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGluaXQob3B0aW9ucz86IElJbml0T3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5faW5pdGlhbGl6ZWQudmFsdWUpIHtcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uQWN0aXZpdHlNb25pdG9yID0gbmV3IEFwcGxpY2F0aW9uQWN0aXZpdHlNb25pdG9yKCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zLmRpc2NvdmVyeVVyaSkge1xuICAgICAgICBEaXNjb3ZlcnlVcmkudXJpLnZhbHVlID0gb3B0aW9ucy5kaXNjb3ZlcnlVcmk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnBlZXJDb25uZWN0aW9uRmFjdG9yeSkge1xuICAgICAgICBTREsuX3BlZXJDb25uZWN0aW9uRmFjdG9yeS52YWx1ZSA9IG9wdGlvbnMucGVlckNvbm5lY3Rpb25GYWN0b3J5O1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy50ZWxlbWV0cnlMZXZlbCAmJiBUZWxlbWV0cnlMZXZlbFtvcHRpb25zLnRlbGVtZXRyeUxldmVsXSkge1xuICAgICAgICBTREsuX3RlbGVtZXRyeUxldmVsLnZhbHVlID0gVGVsZW1ldHJ5TGV2ZWxNYXBwaW5nLmNvbnZlcnRUZWxlbWV0cnlMZXZlbFR5cGVUb1RlbGVtZXRyeUxldmVsKG9wdGlvbnMudGVsZW1ldHJ5TGV2ZWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5sb2dnaW5nTGV2ZWwgJiYgTG9nZ2luZ0xldmVsW29wdGlvbnMubG9nZ2luZ0xldmVsXSkge1xuICAgICAgICB0aGlzLl9sb2dnZXIudGhyZXNob2xkLnNldFRocmVzaG9sZChMb2dnaW5nTGV2ZWxNYXBwaW5nLmNvbnZlcnRMb2dnaW5nTGV2ZWxUeXBlVG9Mb2dnaW5nTGV2ZWwob3B0aW9ucy5sb2dnaW5nTGV2ZWwpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuY29uc29sZUxvZ2dpbmdMZXZlbCAmJlxuICAgICAgICBMb2dnaW5nTGV2ZWxbb3B0aW9ucy5jb25zb2xlTG9nZ2luZ0xldmVsXSkge1xuICAgICAgICBjb25zdCBjb25zb2xlQXBwZW5kZXIgPSB0aGlzLl9sb2dnZXIuYXBwZW5kZXJzLnZhbHVlLmZpbmQoYXBwZW5kZXIgPT4gYXBwZW5kZXIgaW5zdGFuY2VvZiBDb25zb2xlQXBwZW5kZXIpO1xuXG4gICAgICAgIGlmIChjb25zb2xlQXBwZW5kZXIpIHtcbiAgICAgICAgICB0aGlzLl9sb2dnZXIuYXBwZW5kZXJzLnJlbW92ZShjb25zb2xlQXBwZW5kZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuY29uc29sZUxvZ2dpbmdMZXZlbCAhPT0gJ09mZicpIHtcbiAgICAgICAgICB0aGlzLl9sb2dnZXIuYXBwZW5kZXJzLmFkZChuZXcgQ29uc29sZUFwcGVuZGVyKExvZ2dpbmdMZXZlbE1hcHBpbmcuY29udmVydExvZ2dpbmdMZXZlbFR5cGVUb0xvZ2dpbmdMZXZlbChvcHRpb25zLmNvbnNvbGVMb2dnaW5nTGV2ZWwpKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmF1dG9tYXRpY2FsbHlQbGF5TWVkaWFTdHJlYW0gPT09ICdib29sZWFuJykge1xuICAgICAgICB0aGlzLl9hdXRvbWF0aWNhbGx5UGxheU1lZGlhU3RyZWFtID0gb3B0aW9ucy5hdXRvbWF0aWNhbGx5UGxheU1lZGlhU3RyZWFtO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMuYXV0b21hdGljYWxseU11dGVWaWRlb09uUGxheUZhaWx1cmUgPT09ICdib29sZWFuJykge1xuICAgICAgICB0aGlzLl9hdXRvbWF0aWNhbGx5TXV0ZVZpZGVvT25QbGF5RmFpbHVyZSA9IG9wdGlvbnMuYXV0b21hdGljYWxseU11dGVWaWRlb09uUGxheUZhaWx1cmU7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLndlYlBsYXllckxvYWRlcikge1xuICAgICAgICB0aGlzLl93ZWJQbGF5ZXJMb2FkZXIgPSBvcHRpb25zLndlYlBsYXllckxvYWRlcjtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuc2hha2FQbGF5ZXJMb2FkZXIpIHtcbiAgICAgICAgdGhpcy5fc2hha2FQbGF5ZXJMb2FkZXIgPSBvcHRpb25zLnNoYWthUGxheWVyTG9hZGVyO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5obHNKc0xvYWRlcikge1xuICAgICAgICB0aGlzLl9obHNKc0xvYWRlciA9IG9wdGlvbnMuaGxzSnNMb2FkZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU0RLLl9pbml0aWFsaXplZC52YWx1ZSA9IHRydWU7XG4gIH1cblxuICBzdGF0aWMgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICBTREsuX2luaXRpYWxpemVkLnZhbHVlID0gZmFsc2U7XG4gICAgdGhpcy5fYXBwbGljYXRpb25BY3Rpdml0eU1vbml0b3IuZGlzcG9zZSgpO1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uQWN0aXZpdHlNb25pdG9yID0gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRUZWxlbWV0cnlVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBUZWxlbWV0cnlVcmwuZ2V0VGVsZW1ldHJ5VXJsKHVybCk7XG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignU0RLIGlzIGEgc3RhdGljIGNsYXNzIHRoYXQgbWF5IG5vdCBiZSBpbnN0YW50aWF0ZWQnKTtcbiAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndW5sb2FkJywgKCkgPT4ge1xuICBTREsuZGlzcG9zZSgpO1xufSk7XG5cblNESy5hcHBseURpc2NvdmVyeVVyaURlZmF1bHRGcm9tUGFyYW1ldGVyQ29uZmlndXJhdGlvbigpO1xuU0RLLmFwcGx5TWV0cmljc0NvbmZpZ3VyYXRpb24oKTtcblNESy5hcHBseVRlbGVtZXRyeUNvbmZpZ3VyYXRpb24oKTtcblNESy5hcHBseUF1dG9tYXRpY2FsbHlSZXRyeU9uRmFpbHVyZUZyb21QYXJhbWV0ZXJDb25maWd1cmF0aW9uKCk7XG5TREsuYXBwbHlBdXRvbWF0aWNhbGx5UmVjb25uZWN0UGVlckNvbm5lY3Rpb25Gcm9tUGFyYW1ldGVyQ29uZmlndXJhdGlvbigpO1xuU0RLLmluaXQoKTsiLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVsZW1ldHJ5VXJsIHtcbiAgc3RhdGljIGdldFRlbGVtZXRyeVVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGJhc2VVUkwgPSBuZXcgVVJMKHVybCk7XG4gICAgICBjb25zdCBzZWdtZW50cyA9IGJhc2VVUkwuaG9zdG5hbWUuc3BsaXQoJy4nKTtcblxuICAgICAgc3dpdGNoIChiYXNlVVJMLnByb3RvY29sKSB7XG4gICAgICAgIGNhc2UgJ3dzOic6XG4gICAgICAgICAgYmFzZVVSTC5wcm90b2NvbCA9ICdodHRwOic7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnd3NzOic6XG4gICAgICAgICAgYmFzZVVSTC5wcm90b2NvbCA9ICdodHRwczonO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA9PT0gMiB8fFxuICAgICAgICAgIChzZWdtZW50cy5sZW5ndGggPT09IDMgJiYgc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMl0ubGVuZ3RoIDw9IDIgJiYgc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0ubGVuZ3RoIDw9IDMpXG4gICAgICApIHtcbiAgICAgICAgc2VnbWVudHMudW5zaGlmdCgndGVsZW1ldHJ5Jyk7XG4gICAgICB9IGVsc2UgaWYgKHNlZ21lbnRzWzBdLnN0YXJ0c1dpdGgoJ3N0Zy0nKSB8fCBzZWdtZW50c1swXS5lbmRzV2l0aCgnLXN0ZycpIHx8IHNlZ21lbnRzWzBdLmluY2x1ZGVzKCctc3RnLScpIHx8IHNlZ21lbnRzWzBdID09PSAnc3RnJykge1xuICAgICAgICBzZWdtZW50c1swXSA9ICd0ZWxlbWV0cnktc3RnJztcbiAgICAgIH0gZWxzZSBpZiAoc2VnbWVudHNbMF0uc3RhcnRzV2l0aCgnbG9jYWwnKSB8fCBzZWdtZW50c1swXS5lbmRzV2l0aCgnLWxvY2FsJykpIHtcbiAgICAgICAgLy8gTGVhdmUgVVJMIHVuY2hhbmdlZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VnbWVudHNbMF0gPSAndGVsZW1ldHJ5JztcbiAgICAgIH1cblxuICAgICAgYmFzZVVSTC5ob3N0bmFtZSA9IHNlZ21lbnRzLmpvaW4oJy4nKTtcblxuICAgICAgcmV0dXJuIGAke2Jhc2VVUkwub3JpZ2lufS90ZWxlbWV0cnlgO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5cbmV4cG9ydCB0eXBlIEJpdHJhdGVTdGF0ZVR5cGUgPSAnS2VlcCcgfCAnUmVzZXQnO1xuZXhwb3J0IHR5cGUgQml0cmF0ZU1vZGVUeXBlID0gJ05vcm1hbCcgfCAnRm9yY2UnIHwgJ1Jlc2V0JztcblxuZXhwb3J0IGVudW0gQml0cmF0ZVN0YXRlIHtcbiAgS2VlcCxcbiAgUmVzZXRcbn1cblxuZXhwb3J0IGVudW0gQml0cmF0ZU1vZGUge1xuICBOb3JtYWwsXG4gIEZvcmNlLFxuICBSZXNldFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTZXRUZW1wb3JhcnlNYXhpbWFsQml0cmF0ZSB7XG4gIGFwaVZlcnNpb246IG51bWJlcjtcbiAgc2hhcmVkU2VjcmV0OiBzdHJpbmc7XG4gIGVsYXBzZWRJbk1pbGxpc2Vjb25kczogbnVtYmVyO1xuICBiaXRyYXRlSW5CaXRzUGVyU2Vjb25kOiBudW1iZXI7XG4gIGJpdHJhdGVTdGF0ZTogQml0cmF0ZVN0YXRlVHlwZTtcbiAgYml0cmF0ZU1vZGU6IEJpdHJhdGVNb2RlVHlwZTtcbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cblxuY29uc3QgZGVmYXVsdERpc2NvdmVyeVVyaSA9ICdodHRwczovL3BjYXN0LnBoZW5peHJ0cy5jb20vcGNhc3QvZW5kUG9pbnRzJztcblxuZXhwb3J0IHtkZWZhdWx0RGlzY292ZXJ5VXJpfTsiLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCB7Qml0cmF0ZU1vZGUsIEJpdHJhdGVNb2RlVHlwZX0gZnJvbSAnLi4vYXBpL1NldFRlbXBvcmFyeU1heGltYWxCaXRyYXRlJztcbmltcG9ydCBhc3NlcnRVbnJlYWNoYWJsZSBmcm9tICcuLi8uLi9sYW5nL2Fzc2VydFVucmVhY2hhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQml0cmF0ZU1vZGVNYXBwaW5nIHtcbiAgc3RhdGljIGNvbnZlcnRCaXRyYXRlTW9kZVRvQml0cmF0ZU1vZGVUeXBlKGJpdHJhdGVNb2RlOiBCaXRyYXRlTW9kZSk6IEJpdHJhdGVNb2RlVHlwZSB7XG4gICAgc3dpdGNoIChiaXRyYXRlTW9kZSkge1xuICAgICAgY2FzZSBCaXRyYXRlTW9kZS5Ob3JtYWw6XG4gICAgICAgIHJldHVybiAnTm9ybWFsJztcbiAgICAgIGNhc2UgQml0cmF0ZU1vZGUuRm9yY2U6XG4gICAgICAgIHJldHVybiAnRm9yY2UnO1xuICAgICAgY2FzZSBCaXRyYXRlTW9kZS5SZXNldDpcbiAgICAgICAgcmV0dXJuICdSZXNldCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhc3NlcnRVbnJlYWNoYWJsZShiaXRyYXRlTW9kZSk7XG4gICAgfVxuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQge0JpdHJhdGVTdGF0ZSwgQml0cmF0ZVN0YXRlVHlwZX0gZnJvbSAnLi4vYXBpL1NldFRlbXBvcmFyeU1heGltYWxCaXRyYXRlJztcbmltcG9ydCBhc3NlcnRVbnJlYWNoYWJsZSBmcm9tICcuLi8uLi9sYW5nL2Fzc2VydFVucmVhY2hhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQml0cmF0ZVN0YXRlTWFwcGluZyB7XG4gIHN0YXRpYyBjb252ZXJ0Qml0cmF0ZVN0YXRlVG9CaXRyYXRlU3RhdGVUeXBlKGJpdHJhdGVTdGF0ZTogQml0cmF0ZVN0YXRlKTogQml0cmF0ZVN0YXRlVHlwZSB7XG4gICAgc3dpdGNoIChiaXRyYXRlU3RhdGUpIHtcbiAgICAgIGNhc2UgQml0cmF0ZVN0YXRlLktlZXA6XG4gICAgICAgIHJldHVybiAnS2VlcCc7XG4gICAgICBjYXNlIEJpdHJhdGVTdGF0ZS5SZXNldDpcbiAgICAgICAgcmV0dXJuICdSZXNldCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhc3NlcnRVbnJlYWNoYWJsZShiaXRyYXRlU3RhdGUpO1xuICAgIH1cbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IEVuZFBvaW50IGZyb20gJy4vRW5kUG9pbnQnO1xuaW1wb3J0IFNESyBmcm9tICcuLi9TREsnO1xuaW1wb3J0IERpc2NvdmVyeVNlcnZpY2UgZnJvbSAnLi9EaXNjb3ZlcnlTZXJ2aWNlJztcblxuY29uc3QgZGlzY292ZXJ5Q2FjaGVJbnRlcnZhbCA9IDYwMDAwO1xuXG5pbnRlcmZhY2UgSVBlclVSSUVuZHBvaW50IHsgW3g6IHN0cmluZ106IFByb21pc2U8RW5kUG9pbnQ+IH1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzY292ZXJ5IHtcbiAgcHJpdmF0ZSBzdGF0aWMgX2NhY2hlOiBJUGVyVVJJRW5kcG9pbnQgPSB7fTtcblxuICBzdGF0aWMgYXN5bmMgcHJlY2FjaGVDbG9zZXN0RW5kUG9pbnREaXNjb3ZlcnkoKTogUHJvbWlzZTxFbmRQb2ludD4ge1xuICAgIGNvbnN0IHVyaSA9IG5ldyBVUkwoU0RLLmRpc2NvdmVyeVVyaS52YWx1ZSk7XG5cbiAgICByZXR1cm4gRGlzY292ZXJ5LmRpc2NvdmVyQ2xvc2VzdEVuZFBvaW50V2l0aENhY2hpbmcodXJpKTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBkaXNjb3ZlckNsb3Nlc3RFbmRQb2ludFdpdGhDYWNoaW5nKHVyaTogVVJMKTogUHJvbWlzZTxFbmRQb2ludD4ge1xuICAgIGNvbnN0IHVybCA9IHVyaS50b1N0cmluZygpO1xuXG4gICAgaWYgKERpc2NvdmVyeS5fY2FjaGVbdXJsXSkge1xuICAgICAgcmV0dXJuIERpc2NvdmVyeS5fY2FjaGVbdXJsXTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNjb3ZlcnlTZXJ2aWNlID0gbmV3IERpc2NvdmVyeVNlcnZpY2UodXJpKTtcbiAgICBjb25zdCBjYWNoZWRWYWx1ZSA9IERpc2NvdmVyeS5fY2FjaGVbdXJsXSA9IGRpc2NvdmVyeVNlcnZpY2UuZGlzY292ZXJDbG9zZXN0RW5kUG9pbnQoKTtcblxuICAgIERpc2NvdmVyeS5fY2FjaGVbdXJsXS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGlnbm9yZWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKERpc2NvdmVyeS5fY2FjaGVbdXJsXSA9PT0gY2FjaGVkVmFsdWUpIHtcbiAgICAgICAgICBkZWxldGUgRGlzY292ZXJ5Ll9jYWNoZVt1cmxdO1xuICAgICAgICB9XG4gICAgICB9LCBkaXNjb3ZlcnlDYWNoZUludGVydmFsKTtcbiAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgIGRlbGV0ZSBEaXNjb3ZlcnkuX2NhY2hlW3VybF07XG5cbiAgICAgIHRocm93IGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2FjaGVkVmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignRGlzY292ZXJ5IGlzIGEgc3RhdGljIGNsYXNzIHRoYXQgbWF5IG5vdCBiZSBpbnN0YW50aWF0ZWQnKTtcbiAgfVxufVxuXG5jb25zdCBpZ25vcmVkID0gRGlzY292ZXJ5LnByZWNhY2hlQ2xvc2VzdEVuZFBvaW50RGlzY292ZXJ5KCk7IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQgTG9nZ2VyRmFjdG9yeSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyRmFjdG9yeSc7XG5pbXBvcnQgRW5kUG9pbnQgZnJvbSAnLi9FbmRQb2ludCc7XG5pbXBvcnQgU0RLIGZyb20gJy4uL1NESyc7XG5pbXBvcnQge0lMb2dnZXJ9IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXJJbnRlcmZhY2UnO1xuaW1wb3J0IE1ldHJpY3NUeXBlIGZyb20gJy4uLy4uL21ldHJpY3MvTWV0cmljc1R5cGUnO1xuaW1wb3J0IERpc2NvdmVyeVVyaSBmcm9tICcuL0Rpc2NvdmVyeVVyaSc7XG5pbXBvcnQgTWV0cmljc1NlcnZpY2UgZnJvbSAnLi4vLi4vbWV0cmljcy9NZXRyaWNzU2VydmljZSc7XG5pbXBvcnQgTWV0cmljc0ZhY3RvcnkgZnJvbSAnLi4vLi4vbWV0cmljcy9NZXRyaWNzRmFjdG9yeSc7XG5cbmNvbnN0IGRlZmF1bHRUaW1lb3V0ID0gMjAwMDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc2NvdmVyeVNlcnZpY2Uge1xuICBwcml2YXRlIF9sb2dnZXI6IElMb2dnZXIgPSBMb2dnZXJGYWN0b3J5LmdldExvZ2dlcignRGlzY292ZXJ5Jyk7XG4gIHByaXZhdGUgX21ldHJpY3NTZXJ2aWNlOiBNZXRyaWNzU2VydmljZTtcbiAgcHJpdmF0ZSBfdXJpOiBVUkw7XG5cbiAgY29uc3RydWN0b3IodXJpOiBVUkwpIHtcbiAgICBpZiAoIXVyaSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEaXNjb3ZlcnkgcmVxdWlyZXMgdXJpJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fbWV0cmljc1NlcnZpY2UgPSBNZXRyaWNzRmFjdG9yeS5nZXRNZXRyaWNzU2VydmljZSh1cmkudG9TdHJpbmcoKSk7XG4gICAgdGhpcy5fdXJpID0gdXJpO1xuICB9XG5cbiAgYXN5bmMgZGlzY292ZXJOZWFyYnlFbmRQb2ludHModXJpOiBVUkwsIHRpbWVvdXQ6IG51bWJlcik6IFByb21pc2U8RW5kUG9pbnRbXT4ge1xuICAgIGlmICghdGltZW91dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEaXNjb3ZlcnkgcmVxdWlyZXMgdGltZW91dCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IHVyaS50b1N0cmluZygpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtcbiAgICAgIGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBjYWNoZTogJ25vLWNhY2hlJ1xuICAgICAgfSksXG4gICAgICBuZXcgUHJvbWlzZTxSZXNwb25zZT4oKF8sIHJlamVjdCkgPT5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZWplY3QobmV3IEVycm9yKGBEaXNjb3ZlcnkgdGltZWQgb3V0IFske3VybH1dYCkpLCB0aW1lb3V0KVxuICAgICAgKVxuICAgIF0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBEaXNjb3ZlcnkgZmFpbGVkIFske3VybH1dIFske3Jlc3BvbnNlLnN0YXR1c31dYCk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3BvbnNlLmJvZHkgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRGlzY292ZXJ5IGZhaWxlZCB3aXRoIG5vIGRhdGEgWyR7dXJsfV1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBhc1N0cmluZyA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICBjb25zdCBlbmRQb2ludHMgPSBhc1N0cmluZy5zcGxpdCgnLCcpO1xuXG4gICAgcmV0dXJuIGVuZFBvaW50cy5tYXAoZW5kUG9pbnQgPT4gbmV3IEVuZFBvaW50KGVuZFBvaW50LCB0aW1lb3V0KSk7XG4gIH1cblxuICBhc3luYyBkaXNjb3ZlckNsb3Nlc3RFbmRQb2ludCh0aW1lb3V0OiBudW1iZXIgPSBkZWZhdWx0VGltZW91dCk6IFByb21pc2U8RW5kUG9pbnQ+IHtcbiAgICBjb25zdCB1cmwgPSBEaXNjb3ZlcnlVcmkuYnVpbGREaXNjb3ZlcnlVcmwodGhpcy5fdXJpKTtcbiAgICBjb25zdCBlbmRQb2ludHMgPSBhd2FpdCB0aGlzLmRpc2NvdmVyTmVhcmJ5RW5kUG9pbnRzKG5ldyBVUkwodXJsKSwgdGltZW91dCk7XG4gICAgY29uc3QgbmV2ZXJSZXNvbHZlID0gKCk6IFByb21pc2U8dm9pZD4gPT4gbmV3IFByb21pc2UoKCkgPT4ge1xuICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oJ1JlcXVlc3QgWyVzXSBmYWlsZWQsIHByZXZlbnRpbmcgaXQgZnJvbSBjb21wbGV0aW5nJywgdXJsKTtcbiAgICB9KTtcbiAgICBjb25zdCBlbmRQb2ludCA9IGF3YWl0IFByb21pc2UucmFjZShlbmRQb2ludHMubWFwKGVuZFBvaW50ID0+IGVuZFBvaW50XG4gICAgICAucGluZygpXG4gICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgIHRoaXMuX2xvZ2dlci53YXJuKCdGYWlsZWQgdG8gcGluZyBlbmQgcG9pbnQgWyVzXScsIGVuZFBvaW50LCBlKTtcblxuICAgICAgICByZXR1cm4gbmV2ZXJSZXNvbHZlKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4odGltZSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG5cbiAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oJ0Rpc2NvdmVyZWQgZW5kIHBvaW50IFslc10gd2l0aCB0aW1lIFslc10nLCBlbmRQb2ludC50b1N0cmluZygpLCB0aW1lKTtcbiAgICAgICAgdGhpcy5fbWV0cmljc1NlcnZpY2UucHVzaCh7XG4gICAgICAgICAgbWV0cmljVHlwZTogTWV0cmljc1R5cGUuUm91bmRUcmlwVGltZSxcbiAgICAgICAgICBydW50aW1lOiAobm93IC0gU0RLLnBhZ2VMb2FkVGltZSkgLyAxMDAwLFxuICAgICAgICAgIHZhbHVlOiB7dWludDY0OiB0aW1lIHx8IDB9LFxuICAgICAgICAgIHJlc291cmNlOiBlbmRQb2ludC50b1N0cmluZygpLFxuICAgICAgICAgIGtpbmQ6ICdwaW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZW5kUG9pbnQ7XG4gICAgICB9KSkpO1xuXG4gICAgcmV0dXJuIGVuZFBvaW50O1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7ZGVmYXVsdERpc2NvdmVyeVVyaX0gZnJvbSAnLi4vZGVmYXVsdHMnO1xuaW1wb3J0IFN1YmplY3QgZnJvbSAnLi4vLi4vcngvU3ViamVjdCc7XG5pbXBvcnQgVmVyc2lvbk1hbmFnZXIgZnJvbSAnLi4vdmVyc2lvbi9WZXJzaW9uTWFuYWdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc2NvdmVyeVVyaSB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9kaXNjb3ZlcnlVcmk6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oZGVmYXVsdERpc2NvdmVyeVVyaSk7XG5cbiAgc3RhdGljIGdldCB1cmkoKTogU3ViamVjdDxzdHJpbmc+IHtcbiAgICByZXR1cm4gRGlzY292ZXJ5VXJpLl9kaXNjb3ZlcnlVcmk7XG4gIH1cblxuICBzdGF0aWMgYnVpbGREaXNjb3ZlcnlVcmwodXJpOiBVUkwpOiBzdHJpbmcge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwodXJpLnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IHNka1ZlcnNpb24gPSBWZXJzaW9uTWFuYWdlci5zZGtWZXJzaW9uO1xuXG4gICAgdXJsLnNlYXJjaCA9IGA/JHtuZXcgVVJMU2VhcmNoUGFyYW1zKFtbJ3ZlcnNpb24nLCBzZGtWZXJzaW9uXSwgWydfJywgYCR7RGF0ZS5ub3coKX1gXV0pLnRvU3RyaW5nKCl9YDtcblxuICAgIGlmICh1cmwucGF0aG5hbWUgPT09ICcvJykge1xuICAgICAgdXJsLnBhdGhuYW1lID0gJy9wY2FzdC9lbmRQb2ludHMnO1xuICAgIH1cblxuICAgIHJldHVybiB1cmwudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdEaXNjb3ZlcnlVcmkgaXMgYSBzdGF0aWMgY2xhc3MgdGhhdCBtYXkgbm90IGJlIGluc3RhbnRpYXRlZCcpO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQgTG9nZ2VyRmFjdG9yeSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyRmFjdG9yeSc7XG5pbXBvcnQge0lMb2dnZXJ9IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXJJbnRlcmZhY2UnO1xuXG5pbXBvcnQge1xuICBJU3Vic2NyaWJlUmVzcG9uc2UsXG4gIElTdWJzY3JpYmVXaXRoT2ZmZXJSZXF1ZXN0LFxuICBJU3Vic2NyaWJlV2l0aG91dE9mZmVyUmVxdWVzdFxufSBmcm9tICcuLi9hcGkvU3Vic2NyaWJlJztcbmltcG9ydCB7SVNldFJlbW90ZURlc2NyaXB0aW9uUmVxdWVzdCwgSVNldFJlbW90ZURlc2NyaXB0aW9uUmVzcG9uc2V9IGZyb20gJy4uL2FwaS9TZXRSZW1vdGVEZXNjcmlwdGlvbic7XG5pbXBvcnQge0lSdGNDb25maWd1cmF0aW9ufSBmcm9tICcuLi9hcGkvUnRjQ29uZmlndXJhdGlvbic7XG5pbXBvcnQge0lTZXNzaW9uRGVzY3JpcHRpb24sIFNkcFR5cGV9IGZyb20gJy4uL2FwaS9TZXNzaW9uRGVzY3JpcHRpb24nO1xuaW1wb3J0IHtJRGVzdHJveVN0cmVhbVJlcXVlc3QsIElEZXN0cm95U3RyZWFtUmVzcG9uc2V9IGZyb20gJy4uL2FwaS9EZXN0cm95U3RyZWFtJztcbmltcG9ydCBhc3NlcnRVbnJlYWNoYWJsZSBmcm9tICcuLi8uLi9sYW5nL2Fzc2VydFVucmVhY2hhYmxlJztcbmltcG9ydCB7SUFkZEljZUNhbmRpZGF0ZXNSZXF1ZXN0LCBJQWRkSWNlQ2FuZGlkYXRlc1Jlc3BvbnNlfSBmcm9tICcuLi9hcGkvQWRkSWNlQ2FuZGlkYXRlcyc7XG5pbXBvcnQgVmVyc2lvbk1hbmFnZXIgZnJvbSAnLi4vdmVyc2lvbi9WZXJzaW9uTWFuYWdlcic7XG5pbXBvcnQgRWRnZUF1dGggZnJvbSAnLi4vZWRnZUF1dGgvRWRnZUF1dGgnO1xuaW1wb3J0IHtCaXRyYXRlTW9kZSwgQml0cmF0ZVN0YXRlLCBJU2V0VGVtcG9yYXJ5TWF4aW1hbEJpdHJhdGV9IGZyb20gJy4uL2FwaS9TZXRUZW1wb3JhcnlNYXhpbWFsQml0cmF0ZSc7XG5pbXBvcnQgQml0cmF0ZU1vZGVNYXBwaW5nIGZyb20gJy4vQml0cmF0ZU1vZGVNYXBwaW5nJztcbmltcG9ydCBCaXRyYXRlU3RhdGVNYXBwaW5nIGZyb20gJy4vQml0cmF0ZVN0YXRlTWFwcGluZyc7XG5pbXBvcnQge0JpdHNQZXJTZWNvbmQsIE1pbGxpc2Vjb25kfSBmcm9tICcuLi8uLi91bml0cy9Vbml0cyc7XG5pbXBvcnQge1xuICBJUHVibGlzaFJlc3BvbnNlLFxuICBJUHVibGlzaFdpdGhPZmZlclJlcXVlc3QsXG4gIElQdWJsaXNoV2l0aG91dE9mZmVyUmVxdWVzdCxcbiAgUHVibGlzaFN0YXR1c1xufSBmcm9tICcuLi9hcGkvUHVibGlzaCc7XG5cbmNvbnN0IGFwaVZlcnNpb24gPSA2O1xuXG5leHBvcnQgdHlwZSBTdWJzY3JpYmVTdGF0dXMgPSAnb2snIHwgJ25vLXN0cmVhbScgfCAnbm90LWZvdW5kJyB8ICd1bmF1dGhvcml6ZWQnIHwgJ2dlby1yZXN0cmljdGVkJyB8ICdnZW8tYmxvY2tlZCcgfCAncmF0ZS1saW1pdGVkJyB8ICdjYXBhY2l0eScgfCAndGltZW91dCcgfCAnZmFpbGVkJztcbmV4cG9ydCB0eXBlIFNldFJlbW90ZURlc2NyaXB0aW9uU3RhdHVzID0gJ29rJyB8ICdub3QtZm91bmQnIHwgJ3VuYXV0aG9yaXplZCcgfCAncmF0ZS1saW1pdGVkJyB8ICdjYXBhY2l0eScgfCAndGltZW91dCcgfCAnZmFpbGVkJztcbmV4cG9ydCB0eXBlIFNldFRlbXBvcmFyeU1heGltYWxCaXRyYXRlU3RhdHVzID0gJ29rJyB8ICdub3QtZm91bmQnIHwgJ3VuYXV0aG9yaXplZCcgfCAncmF0ZS1saW1pdGVkJyB8ICdjYXBhY2l0eScgfCAndGltZW91dCcgfCAnZmFpbGVkJztcbmV4cG9ydCB0eXBlIFJlbW92ZVRlbXBvcmFyeU1heGltYWxCaXRyYXRlU3RhdHVzID0gJ29rJyB8ICdub3QtZm91bmQnIHwgJ3VuYXV0aG9yaXplZCcgfCAncmF0ZS1saW1pdGVkJyB8ICdjYXBhY2l0eScgfCAndGltZW91dCcgfCAnZmFpbGVkJztcbmV4cG9ydCB0eXBlIEFkZEljZUNhbmRpZGF0ZXNTdGF0dXMgPSAnb2snIHwgJ25vdC1mb3VuZCcgfCAndW5hdXRob3JpemVkJyB8ICdyYXRlLWxpbWl0ZWQnIHwgJ2NhcGFjaXR5JyB8ICd0aW1lb3V0JyB8ICdmYWlsZWQnO1xuZXhwb3J0IHR5cGUgRGVzdHJveVN0cmVhbVN0YXR1cyA9ICdvaycgfCAnbm90LWZvdW5kJyB8ICd1bmF1dGhvcml6ZWQnIHwgJ3JhdGUtbGltaXRlZCcgfCAnY2FwYWNpdHknIHwgJ3RpbWVvdXQnIHwgJ2ZhaWxlZCc7XG5leHBvcnQgaW50ZXJmYWNlIElTdHJlYW0ge1xuICBzdHJlYW1JZDogc3RyaW5nO1xuICBzaGFyZWRTZWNyZXQ6IHN0cmluZztcbiAgdGVuYW5jeTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdWJzY3JpYmVSZXNwb25zZUluaXQge1xuICBzdGF0dXM6IFN1YnNjcmliZVN0YXR1cztcbiAgc3RyZWFtPzogSVN0cmVhbTtcbiAgbGFnPzogTWlsbGlzZWNvbmQ7XG4gIHJ0Y0NvbmZpZ3VyYXRpb24/OiBSVENDb25maWd1cmF0aW9uO1xuICBzZXRSZW1vdGVEZXNjcmlwdGlvblJlc3BvbnNlPzoge1xuICAgIHNlc3Npb25EZXNjcmlwdGlvbjogUlRDU2Vzc2lvbkRlc2NyaXB0aW9uSW5pdDtcbiAgfTtcbiAgY3JlYXRlT2ZmZXJEZXNjcmlwdGlvblJlc3BvbnNlPzoge1xuICAgIHNlc3Npb25EZXNjcmlwdGlvbjogUlRDU2Vzc2lvbkRlc2NyaXB0aW9uSW5pdDtcbiAgfTtcbiAgY3JlYXRlQW5zd2VyRGVzY3JpcHRpb25SZXNwb25zZT86IHtcbiAgICBzZXNzaW9uRGVzY3JpcHRpb246IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbkluaXQ7XG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIElQdWJsaXNoUmVzcG9uc2VJbml0ID0gSVN1YnNjcmliZVJlc3BvbnNlSW5pdDtcblxuaW50ZXJmYWNlIElTZXRSZW1vdGVEZXNjcmlwdGlvblJlc3BvbnNlSW5pdCB7XG4gIHN0YXR1czogU2V0UmVtb3RlRGVzY3JpcHRpb25TdGF0dXM7XG4gIHNlc3Npb25EZXNjcmlwdGlvbj86IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbkluaXQ7XG59XG5cbmludGVyZmFjZSBJQWRkSWNlQ2FuZGlkYXRlc1Jlc3BvbnNlSW5pdCB7XG4gIHN0YXR1czogQWRkSWNlQ2FuZGlkYXRlc1N0YXR1cztcbiAgb3B0aW9ucz86IHN0cmluZ1tdO1xufVxuXG5pbnRlcmZhY2UgSVNldFRlbXBvcmFyeU1heGltYWxCaXRyYXRlUmVzcG9uc2VJbml0IHtcbiAgc3RhdHVzOiBTZXRUZW1wb3JhcnlNYXhpbWFsQml0cmF0ZVN0YXR1cztcbn1cblxuaW50ZXJmYWNlIElEZXN0cm95U3RyZWFtUmVzcG9uc2VJbml0IHtcbiAgc3RhdHVzOiBEZXN0cm95U3RyZWFtU3RhdHVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRQb2ludCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2xvZ2dlcjogSUxvZ2dlciA9IExvZ2dlckZhY3RvcnkuZ2V0TG9nZ2VyKCdFbmRQb2ludCcpO1xuICBwcml2YXRlIHJlYWRvbmx5IF91cmk6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfdGltZW91dDogbnVtYmVyO1xuICBwcml2YXRlIF9yb3VuZFRyaXBUaW1lOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IodXJpOiBzdHJpbmcsIHRpbWVvdXQ6IG51bWJlcikge1xuICAgIHRoaXMuX3VyaSA9IHVyaTtcbiAgICB0aGlzLl90aW1lb3V0ID0gdGltZW91dDtcblxuICAgIGlmICghdGltZW91dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFbmQgcG9pbnQgcmVxdWlyZXMgYSB0aW1lb3V0YCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHJvdW5kVHJpcFRpbWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcm91bmRUcmlwVGltZTtcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBFbmRQb2ludFt1cmk9JHt0aGlzLl91cml9XWA7XG4gIH1cblxuICBhc3luYyBwaW5nKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5idWlsZFBpbmdVcmwoKTtcbiAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnXG4gICAgICB9KSxcbiAgICAgIG5ldyBQcm9taXNlPFJlc3BvbnNlPigoXywgcmVqZWN0KSA9PlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChuZXcgRXJyb3IoYFBpbmcgdGltZWQgb3V0IFske3VybH1dYCkpLCB0aGlzLl90aW1lb3V0KVxuICAgICAgKVxuICAgIF0pO1xuICAgIGNvbnN0IGZpbmlzaGVkID0gRGF0ZS5ub3coKTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHsgLyogSGFuZGxlICovXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFBpbmcgZmFpbGVkIFske3VybH1dIFske3Jlc3BvbnNlLnN0YXR1c31dYCk7XG4gICAgfVxuXG4gICAgdGhpcy5fcm91bmRUcmlwVGltZSA9IGZpbmlzaGVkIC0gc3RhcnQ7XG5cbiAgICByZXR1cm4gdGhpcy5fcm91bmRUcmlwVGltZTtcbiAgfVxuXG4gIGFzeW5jIHN1YnNjcmliZSh0b2tlbjogc3RyaW5nLCBsb2NhbFNlc3Npb25EZXNjcmlwdGlvbjogUlRDU2Vzc2lvbkRlc2NyaXB0aW9uSW5pdCwgZmFpbHVyZUNvdW50OiBudW1iZXIpOiBQcm9taXNlPElTdWJzY3JpYmVSZXNwb25zZUluaXQ+IHtcbiAgICBjb25zdCBwYXJzZWRUb2tlbiA9IEVkZ2VBdXRoLnBhcnNlVG9rZW4odG9rZW4pO1xuXG4gICAgaWYgKCFwYXJzZWRUb2tlbiB8fCAhcGFyc2VkVG9rZW4uYXBwbGljYXRpb25JZCkge1xuICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKCdGYWlsZWQgdG8gcGFyc2UgdG9rZW4gWyVzXScsIHRva2VuKTtcblxuICAgICAgcmV0dXJuIHtzdGF0dXM6ICd1bmF1dGhvcml6ZWQnfTtcbiAgICB9XG5cbiAgICBjb25zdCB0ZW5hbmN5ID0gcGFyc2VkVG9rZW4uYXBwbGljYXRpb25JZDtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmJ1aWxkVXJsKFt0ZW5hbmN5LCAnc3RyZWFtJywgJ3N1YnNjcmliZSddKS50b1N0cmluZygpO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgY29uc3QgY2xpZW50VmVyc2lvbiA9IFZlcnNpb25NYW5hZ2VyLnNka1ZlcnNpb247XG5cbiAgICBpZiAoZmFpbHVyZUNvdW50ID09PSAwICYmIGxvY2FsU2Vzc2lvbkRlc2NyaXB0aW9uKSB7XG4gICAgICBjb25zdCBib2R5V2l0aE9mZmVyOiBJU3Vic2NyaWJlV2l0aE9mZmVyUmVxdWVzdCA9IHtcbiAgICAgICAgYXBpVmVyc2lvbixcbiAgICAgICAgY2xpZW50VmVyc2lvbixcbiAgICAgICAgZWRnZUF1dGhUb2tlbjogdG9rZW4sXG4gICAgICAgIGZhaWx1cmVDb3VudCxcbiAgICAgICAgaHR0cFJvdW5kVHJpcFRpbWU6IHRoaXMuX3JvdW5kVHJpcFRpbWUsXG4gICAgICAgIHNldFJlbW90ZURlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgYXBpVmVyc2lvbixcbiAgICAgICAgICBzZXNzaW9uRGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IHRoaXMuY29udmVydFJUQ1NkcFR5cGVUb1NkcFR5cGUobG9jYWxTZXNzaW9uRGVzY3JpcHRpb24udHlwZSksXG4gICAgICAgICAgICBzZHA6IGxvY2FsU2Vzc2lvbkRlc2NyaXB0aW9uLnNkcFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlQW5zd2VyRGVzY3JpcHRpb246IHthcGlWZXJzaW9ufVxuICAgICAgfTtcblxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdqc29uQm9keScsIEpTT04uc3RyaW5naWZ5KGJvZHlXaXRoT2ZmZXIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYm9keVdpdGhvdXRPZmZlcjogSVN1YnNjcmliZVdpdGhvdXRPZmZlclJlcXVlc3QgPSB7XG4gICAgICAgIGFwaVZlcnNpb24sXG4gICAgICAgIGNsaWVudFZlcnNpb24sXG4gICAgICAgIGVkZ2VBdXRoVG9rZW46IHRva2VuLFxuICAgICAgICBmYWlsdXJlQ291bnQsXG4gICAgICAgIGh0dHBSb3VuZFRyaXBUaW1lOiB0aGlzLl9yb3VuZFRyaXBUaW1lLFxuICAgICAgICBjcmVhdGVPZmZlckRlc2NyaXB0aW9uOiB7YXBpVmVyc2lvbn1cbiAgICAgIH07XG5cbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnanNvbkJvZHknLCBKU09OLnN0cmluZ2lmeShib2R5V2l0aG91dE9mZmVyKSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIGxldCBodHRwUmVzcG9uc2U6IFJlc3BvbnNlO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxldCB0aW1lb3V0ID0gbnVsbDtcblxuICAgICAgaHR0cFJlc3BvbnNlID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgZmV0Y2godXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBQcm9taXNlPFJlc3BvbnNlPihyZXNvbHZlID0+XG4gICAgICAgICAgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcignRmFpbGVkIHRvIHN1YnNjcmliZScsIG5ldyBFcnJvcihgU3Vic2NyaWJlIHRpbWVkIG91dCBbJHt1cmx9XWApKTtcbiAgICAgICAgICAgIHJlc29sdmUoe3N0YXR1czogNDA4fSBhcyBSZXNwb25zZSk7XG4gICAgICAgICAgfSwgdGhpcy5fdGltZW91dClcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoJ0ZhaWxlZCB0byBzdWJzY3JpYmUnLCBlKTtcblxuICAgICAgcmV0dXJuIHtzdGF0dXM6ICdmYWlsZWQnfTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0dXM6IFN1YnNjcmliZVN0YXR1cyA9IHRoaXMubWFwSHR0cFN0YXR1c1RvU3Vic2NyaWJlU3RhdHVzKGh0dHBSZXNwb25zZSk7XG5cbiAgICBpZiAoc3RhdHVzICE9PSAnb2snKSB7XG4gICAgICByZXR1cm4ge3N0YXR1c307XG4gICAgfVxuXG4gICAgY29uc3QgZmluaXNoZWQgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IHN1YnNjcmliZVJlc3BvbnNlID0gYXdhaXQgdGhpcy5jb252ZXJ0SHR0cFJlc3BvbnNlVG9TdWJzY3JpYmVSZXNwb25zZSh0ZW5hbmN5LCBodHRwUmVzcG9uc2UpO1xuXG4gICAgdGhpcy5fbG9nZ2VyLmRlYnVnKCdHb3Qgc3Vic2NyaWJlIHJlc3BvbnNlIFslal0gaW4gWyVzXSBtcycsIHN1YnNjcmliZVJlc3BvbnNlLCBmaW5pc2hlZCAtIHN0YXJ0KTtcblxuICAgIHJldHVybiBzdWJzY3JpYmVSZXNwb25zZTtcbiAgfVxuXG4gIGFzeW5jIHB1Ymxpc2gobmFtZTogc3RyaW5nLCB0b2tlbjogc3RyaW5nLCBsb2NhbFNlc3Npb25EZXNjcmlwdGlvbjogUlRDU2Vzc2lvbkRlc2NyaXB0aW9uSW5pdCwgZmFpbHVyZUNvdW50OiBudW1iZXIpOiBQcm9taXNlPElQdWJsaXNoUmVzcG9uc2VJbml0PiB7XG4gICAgY29uc3QgcGFyc2VkVG9rZW4gPSBFZGdlQXV0aC5wYXJzZVRva2VuKHRva2VuKTtcblxuICAgIGlmICghcGFyc2VkVG9rZW4gfHwgIXBhcnNlZFRva2VuLmFwcGxpY2F0aW9uSWQpIHtcbiAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcignRmFpbGVkIHRvIHBhcnNlIHRva2VuIFslc10nLCB0b2tlbik7XG5cbiAgICAgIHJldHVybiB7c3RhdHVzOiAndW5hdXRob3JpemVkJ307XG4gICAgfVxuXG4gICAgY29uc3QgdGVuYW5jeSA9IHBhcnNlZFRva2VuLmFwcGxpY2F0aW9uSWQ7XG4gICAgY29uc3QgdXJsID0gdGhpcy5idWlsZFVybChbdGVuYW5jeSwgJ3N0cmVhbScsICdwdWJsaXNoJ10pLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBjb25zdCBjbGllbnRWZXJzaW9uID0gVmVyc2lvbk1hbmFnZXIuc2RrVmVyc2lvbjtcblxuICAgIGlmIChmYWlsdXJlQ291bnQgPT09IDAgJiYgbG9jYWxTZXNzaW9uRGVzY3JpcHRpb24pIHtcbiAgICAgIGNvbnN0IGJvZHlXaXRoT2ZmZXI6IElQdWJsaXNoV2l0aE9mZmVyUmVxdWVzdCA9IHtcbiAgICAgICAgYXBpVmVyc2lvbixcbiAgICAgICAgY2xpZW50VmVyc2lvbixcbiAgICAgICAgZWRnZUF1dGhUb2tlbjogdG9rZW4sXG4gICAgICAgIGZhaWx1cmVDb3VudCxcbiAgICAgICAgaHR0cFJvdW5kVHJpcFRpbWU6IHRoaXMuX3JvdW5kVHJpcFRpbWUsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHNldFJlbW90ZURlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgYXBpVmVyc2lvbixcbiAgICAgICAgICBzZXNzaW9uRGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IHRoaXMuY29udmVydFJUQ1NkcFR5cGVUb1NkcFR5cGUobG9jYWxTZXNzaW9uRGVzY3JpcHRpb24udHlwZSksXG4gICAgICAgICAgICBzZHA6IGxvY2FsU2Vzc2lvbkRlc2NyaXB0aW9uLnNkcFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlQW5zd2VyRGVzY3JpcHRpb246IHtcbiAgICAgICAgICBzdHJlYW1JZDogJycsXG4gICAgICAgICAgb3B0aW9uczogWyd1cGxvYWQnXSxcbiAgICAgICAgICBhcGlWZXJzaW9uXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnanNvbkJvZHknLCBKU09OLnN0cmluZ2lmeShib2R5V2l0aE9mZmVyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGJvZHlXaXRob3V0T2ZmZXI6IElQdWJsaXNoV2l0aG91dE9mZmVyUmVxdWVzdCA9IHtcbiAgICAgICAgYXBpVmVyc2lvbixcbiAgICAgICAgY2xpZW50VmVyc2lvbixcbiAgICAgICAgZWRnZUF1dGhUb2tlbjogdG9rZW4sXG4gICAgICAgIGZhaWx1cmVDb3VudCxcbiAgICAgICAgaHR0cFJvdW5kVHJpcFRpbWU6IHRoaXMuX3JvdW5kVHJpcFRpbWUsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGNyZWF0ZU9mZmVyRGVzY3JpcHRpb246IHtcbiAgICAgICAgICBzdHJlYW1JZDogJycsXG4gICAgICAgICAgb3B0aW9uczogWyd1cGxvYWQnXSxcbiAgICAgICAgICBhcGlWZXJzaW9uXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnanNvbkJvZHknLCBKU09OLnN0cmluZ2lmeShib2R5V2l0aG91dE9mZmVyKSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIGxldCBodHRwUmVzcG9uc2U6IFJlc3BvbnNlO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxldCB0aW1lb3V0ID0gbnVsbDtcblxuICAgICAgaHR0cFJlc3BvbnNlID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgZmV0Y2godXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBQcm9taXNlPFJlc3BvbnNlPihyZXNvbHZlID0+XG4gICAgICAgICAgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcignRmFpbGVkIHRvIHB1Ymxpc2gnLCBuZXcgRXJyb3IoYFB1Ymxpc2ggdGltZWQgb3V0IFske3VybH1dYCkpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7c3RhdHVzOiA0MDh9IGFzIFJlc3BvbnNlKTtcbiAgICAgICAgICB9LCB0aGlzLl90aW1lb3V0KVxuICAgICAgICApXG4gICAgICBdKVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcignRmFpbGVkIHRvIHB1Ymxpc2gnLCBlKTtcblxuICAgICAgcmV0dXJuIHtzdGF0dXM6ICdmYWlsZWQnfTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0dXM6IFB1Ymxpc2hTdGF0dXMgPSB0aGlzLm1hcEh0dHBTdGF0dXNUb1B1Ymxpc2hTdGF0dXMoaHR0cFJlc3BvbnNlKTtcblxuICAgIGlmIChzdGF0dXMgIT09ICdvaycpIHtcbiAgICAgIHJldHVybiB7c3RhdHVzfTtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5pc2hlZCA9IERhdGUubm93KCk7XG4gICAgY29uc3Qgc3Vic2NyaWJlUmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNvbnZlcnRIdHRwUmVzcG9uc2VUb1B1Ymxpc2hSZXNwb25zZSh0ZW5hbmN5LCBodHRwUmVzcG9uc2UpO1xuXG4gICAgdGhpcy5fbG9nZ2VyLmRlYnVnKCdHb3QgcHVibGlzaCByZXNwb25zZSBbJWpdIGluIFslc10gbXMnLCBzdWJzY3JpYmVSZXNwb25zZSwgZmluaXNoZWQgLSBzdGFydCk7XG5cbiAgICByZXR1cm4gc3Vic2NyaWJlUmVzcG9uc2U7XG4gIH1cblxuICBhc3luYyBzZXRSZW1vdGVEZXNjcmlwdGlvbihzdHJlYW06IElTdHJlYW0sIHNlc3Npb25EZXNjcmlwdGlvbjogUlRDU2Vzc2lvbkRlc2NyaXB0aW9uSW5pdCk6IFByb21pc2U8SVNldFJlbW90ZURlc2NyaXB0aW9uUmVzcG9uc2VJbml0PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5idWlsZFVybChbc3RyZWFtLnRlbmFuY3ksICdzdHJlYW0nLCBzdHJlYW0uc3RyZWFtSWQsICdkZXNjcmlwdGlvbicsICdyZW1vdGUnXSkudG9TdHJpbmcoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGNvbnN0IGJvZHk6IElTZXRSZW1vdGVEZXNjcmlwdGlvblJlcXVlc3QgPSB7XG4gICAgICBhcGlWZXJzaW9uLFxuICAgICAgc2hhcmVkU2VjcmV0OiBzdHJlYW0uc2hhcmVkU2VjcmV0LFxuICAgICAgc2Vzc2lvbkRlc2NyaXB0aW9uOiB7XG4gICAgICAgIHR5cGU6IHRoaXMuY29udmVydFJUQ1NkcFR5cGVUb1NkcFR5cGUoc2Vzc2lvbkRlc2NyaXB0aW9uLnR5cGUpLFxuICAgICAgICBzZHA6IHNlc3Npb25EZXNjcmlwdGlvbi5zZHBcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9ybURhdGEuYXBwZW5kKCdqc29uQm9keScsIEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcblxuICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICBsZXQgaHR0cFJlc3BvbnNlOiBSZXNwb25zZTtcblxuICAgIHRyeSB7XG4gICAgICBsZXQgdGltZW91dCA9IG51bGw7XG5cbiAgICAgIGh0dHBSZXNwb25zZSA9IGF3YWl0IFByb21pc2UucmFjZShbXG4gICAgICAgIGZldGNoKHVybCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgUHJvbWlzZTxSZXNwb25zZT4ocmVzb2x2ZSA9PlxuICAgICAgICAgIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoJ0ZhaWxlZCB0byBzZXQgcmVtb3RlIGRlc2NyaXB0aW9uJywgbmV3IEVycm9yKGBTZXQgcmVtb3RlIGRlc2NyaXB0aW9uIHRpbWVkIG91dCBbJHt1cmx9XWApKTtcbiAgICAgICAgICAgIHJlc29sdmUoe3N0YXR1czogNDA4fSBhcyBSZXNwb25zZSk7XG4gICAgICAgICAgfSwgdGhpcy5fdGltZW91dClcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoJ0ZhaWxlZCB0byBzZXQgcmVtb3RlIGRlc2NyaXB0aW9uJywgZSk7XG5cbiAgICAgIHJldHVybiB7c3RhdHVzOiAnZmFpbGVkJ307XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdHVzOiBTZXRSZW1vdGVEZXNjcmlwdGlvblN0YXR1cyA9IHRoaXMubWFwSHR0cFN0YXR1c1RvU2V0UmVtb3RlRGVzY3JpcHRpb25TdGF0dXMoaHR0cFJlc3BvbnNlKTtcblxuICAgIGlmIChzdGF0dXMgIT09ICdvaycpIHtcbiAgICAgIHJldHVybiB7c3RhdHVzfTtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5pc2hlZCA9IERhdGUubm93KCk7XG4gICAgY29uc3Qgc2V0UmVtb3RlRGVzY3JpcHRpb25SZXNwb25zZSA9IGF3YWl0IHRoaXMuY29udmVydEh0dHBSZXNwb25zZVRvU2V0UmVtb3RlRGVzY3JpcHRpb25SZXNwb25zZShodHRwUmVzcG9uc2UpO1xuXG4gICAgdGhpcy5fbG9nZ2VyLmRlYnVnKCdHb3Qgc2V0IHJlbW90ZSBkZXNjcmlwdGlvbiByZXNwb25zZSBbJWpdIGluIFslc10gbXMnLCBzZXRSZW1vdGVEZXNjcmlwdGlvblJlc3BvbnNlLCBmaW5pc2hlZCAtIHN0YXJ0KTtcblxuICAgIHJldHVybiBzZXRSZW1vdGVEZXNjcmlwdGlvblJlc3BvbnNlO1xuICB9XG5cbiAgYXN5bmMgbGltaXRCaXRyYXRlKFxuICAgIHN0cmVhbTogSVN0cmVhbSxcbiAgICBlbGFwc2VkSW5NaWxsaXNlY29uZHM6IG51bWJlcixcbiAgICBiaXRyYXRlSW5CaXRzUGVyU2Vjb25kOiBCaXRzUGVyU2Vjb25kLFxuICAgIGJpdHJhdGVTdGF0ZTogQml0cmF0ZVN0YXRlLFxuICAgIGJpdHJhdGVNb2RlOiBCaXRyYXRlTW9kZSxcbiAgKTogUHJvbWlzZTxJU2V0VGVtcG9yYXJ5TWF4aW1hbEJpdHJhdGVSZXNwb25zZUluaXQ+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmJ1aWxkVXJsKFtzdHJlYW0udGVuYW5jeSwgJ3N0cmVhbScsIHN0cmVhbS5zdHJlYW1JZCwgJ2JpdHJhdGUnXSkudG9TdHJpbmcoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGNvbnN0IGJvZHk6IElTZXRUZW1wb3JhcnlNYXhpbWFsQml0cmF0ZSA9IHtcbiAgICAgIGFwaVZlcnNpb24sXG4gICAgICBzaGFyZWRTZWNyZXQ6IHN0cmVhbS5zaGFyZWRTZWNyZXQsXG4gICAgICBlbGFwc2VkSW5NaWxsaXNlY29uZHMsXG4gICAgICBiaXRyYXRlSW5CaXRzUGVyU2Vjb25kLFxuICAgICAgYml0cmF0ZVN0YXRlOiBCaXRyYXRlU3RhdGVNYXBwaW5nLmNvbnZlcnRCaXRyYXRlU3RhdGVUb0JpdHJhdGVTdGF0ZVR5cGUoYml0cmF0ZVN0YXRlKSxcbiAgICAgIGJpdHJhdGVNb2RlOiBCaXRyYXRlTW9kZU1hcHBpbmcuY29udmVydEJpdHJhdGVNb2RlVG9CaXRyYXRlTW9kZVR5cGUoYml0cmF0ZU1vZGUpXG4gICAgfTtcblxuICAgIGZvcm1EYXRhLmFwcGVuZCgnanNvbkJvZHknLCBKU09OLnN0cmluZ2lmeShib2R5KSk7XG5cbiAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgbGV0IGh0dHBSZXNwb25zZTogUmVzcG9uc2U7XG5cbiAgICB0cnkge1xuICAgICAgbGV0IHRpbWVvdXQgPSBudWxsO1xuXG4gICAgICBodHRwUmVzcG9uc2UgPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFByb21pc2U8UmVzcG9uc2U+KHJlc29sdmUgPT5cbiAgICAgICAgICB0aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKCdGYWlsZWQgdG8gc2V0IGxpbWl0IGJpdHJhdGUgdGltZWQnLCBuZXcgRXJyb3IoYFNldCBsaW1pdCBiaXRyYXRlIHRpbWVkIG91dCBbJHt1cmx9XWApKTtcbiAgICAgICAgICAgIHJlc29sdmUoe3N0YXR1czogNDA4fSBhcyBSZXNwb25zZSk7XG4gICAgICAgICAgfSwgdGhpcy5fdGltZW91dClcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoJ0ZhaWxlZCB0byBzZXQgbGltaXQgYml0cmF0ZSB0aW1lZCcsIGUpO1xuXG4gICAgICByZXR1cm4ge3N0YXR1czogJ2ZhaWxlZCd9O1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXR1czogU2V0VGVtcG9yYXJ5TWF4aW1hbEJpdHJhdGVTdGF0dXMgPSB0aGlzLm1hcEh0dHBTdGF0dXNUb1NldFRlbXBvcmFyeU1heGltYWxCaXRyYXRlU3RhdHVzKGh0dHBSZXNwb25zZSk7XG4gICAgY29uc3QgZmluaXNoZWQgPSBEYXRlLm5vdygpO1xuXG4gICAgdGhpcy5fbG9nZ2VyLmluZm8oJ0dvdCBzZXQgbGltaXQgYml0cmF0ZSByZXNwb25zZSBbJXNdIGluIFslc10gbXMnLCBzdGF0dXMsIGZpbmlzaGVkIC0gc3RhcnQpO1xuXG4gICAgcmV0dXJuIHtzdGF0dXN9O1xuICB9XG5cbiAgYXN5bmMgYWRkSWNlQ2FuZGlkYXRlcyhzdHJlYW06IElTdHJlYW0sIGNhbmRpZGF0ZXM6IFJUQ0ljZUNhbmRpZGF0ZVtdLCBkaXNjb3ZlcnlDb21wbGV0ZWQ6IGJvb2xlYW4sIG9wdGlvbnM6IHN0cmluZ1tdID0gW10pOiBQcm9taXNlPElBZGRJY2VDYW5kaWRhdGVzUmVzcG9uc2VJbml0PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5idWlsZFVybChbc3RyZWFtLnRlbmFuY3ksICdzdHJlYW0nLCBzdHJlYW0uc3RyZWFtSWQsICdpY2UnLCAnY2FuZGlkYXRlcyddKS50b1N0cmluZygpO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgY29uc3QgYm9keTogSUFkZEljZUNhbmRpZGF0ZXNSZXF1ZXN0ID0ge1xuICAgICAgYXBpVmVyc2lvbixcbiAgICAgIHNoYXJlZFNlY3JldDogc3RyZWFtLnNoYXJlZFNlY3JldCxcbiAgICAgIGNhbmRpZGF0ZXMsXG4gICAgICBkaXNjb3ZlcnlDb21wbGV0ZWQsXG4gICAgICBvcHRpb25zXG4gICAgfTtcblxuICAgIGZvcm1EYXRhLmFwcGVuZCgnanNvbkJvZHknLCBKU09OLnN0cmluZ2lmeShib2R5KSk7XG5cbiAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgbGV0IGh0dHBSZXNwb25zZTogUmVzcG9uc2U7XG5cbiAgICB0cnkge1xuICAgICAgbGV0IHRpbWVvdXQgPSBudWxsO1xuXG4gICAgICBodHRwUmVzcG9uc2UgPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFByb21pc2U8UmVzcG9uc2U+KHJlc29sdmUgPT5cbiAgICAgICAgICB0aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKCdGYWlsZWQgdG8gYWRkIGljZSBjYW5kaWRhdGVzJywgbmV3IEVycm9yKGBBZGQgaWNlIGNhbmRpZGF0ZXMgdGltZWQgb3V0IFske3VybH1dYCkpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7c3RhdHVzOiA0MDh9IGFzIFJlc3BvbnNlKTtcbiAgICAgICAgICB9LCB0aGlzLl90aW1lb3V0KVxuICAgICAgICApXG4gICAgICBdKVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcignRmFpbGVkIHRvIGFkZCBpY2UgY2FuZGlkYXRlcycsIGUpO1xuXG4gICAgICByZXR1cm4ge3N0YXR1czogJ2ZhaWxlZCd9O1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXR1czogQWRkSWNlQ2FuZGlkYXRlc1N0YXR1cyA9IHRoaXMubWFwSHR0cFN0YXR1c1RvQWRkSWNlQ2FuZGlkYXRlc1N0YXR1cyhodHRwUmVzcG9uc2UpO1xuXG4gICAgaWYgKHN0YXR1cyAhPT0gJ29rJykge1xuICAgICAgcmV0dXJuIHtzdGF0dXN9O1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmlzaGVkID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBhZGRJY2VDYW5kaWRhdGVzUmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNvbnZlcnRIdHRwUmVzcG9uc2VUb0FkZEljZUNhbmRpZGF0ZXNSZXNwb25zZShodHRwUmVzcG9uc2UpO1xuXG4gICAgdGhpcy5fbG9nZ2VyLmluZm8oJ0dvdCBhZGQgSUNFIGNhbmRpZGF0ZXMgcmVzcG9uc2UgWyVqXSBpbiBbJXNdIG1zJywgYWRkSWNlQ2FuZGlkYXRlc1Jlc3BvbnNlLCBmaW5pc2hlZCAtIHN0YXJ0KTtcblxuICAgIHJldHVybiBhZGRJY2VDYW5kaWRhdGVzUmVzcG9uc2U7XG4gIH1cblxuICBhc3luYyBkZXN0cm95U3RyZWFtKHN0cmVhbTogSVN0cmVhbSwgcmVhc29uOiBzdHJpbmcpOiBQcm9taXNlPElEZXN0cm95U3RyZWFtUmVzcG9uc2VJbml0PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5idWlsZFVybChbc3RyZWFtLnRlbmFuY3ksICdzdHJlYW0nLCBzdHJlYW0uc3RyZWFtSWQsICdkZXN0cm95J10pLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBjb25zdCBib2R5OiBJRGVzdHJveVN0cmVhbVJlcXVlc3QgPSB7XG4gICAgICBhcGlWZXJzaW9uLFxuICAgICAgc2hhcmVkU2VjcmV0OiBzdHJlYW0uc2hhcmVkU2VjcmV0LFxuICAgICAgcmVhc29uLFxuICAgICAgb3B0aW9uczogW11cbiAgICB9O1xuXG4gICAgZm9ybURhdGEuYXBwZW5kKCdqc29uQm9keScsIEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcblxuICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICBsZXQgaHR0cFJlc3BvbnNlOiBSZXNwb25zZTtcblxuICAgIHRyeSB7XG4gICAgICBsZXQgdGltZW91dCA9IG51bGw7XG5cbiAgICAgIGh0dHBSZXNwb25zZSA9IGF3YWl0IFByb21pc2UucmFjZShbXG4gICAgICAgIGZldGNoKHVybCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgUHJvbWlzZTxSZXNwb25zZT4ocmVzb2x2ZSA9PlxuICAgICAgICAgIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoJ0ZhaWxlZCB0byBzdWJzY3JpYmUnLCBuZXcgRXJyb3IoYERlbGV0ZSBzdHJlYW0gdGltZWQgb3V0IFske3VybH1dYCkpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7c3RhdHVzOiA0MDh9IGFzIFJlc3BvbnNlKTtcbiAgICAgICAgICB9LCB0aGlzLl90aW1lb3V0KVxuICAgICAgICApXG4gICAgICBdKVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcignRmFpbGVkIHRvIGRlbGV0ZSBzdHJlYW0nLCBlKTtcblxuICAgICAgcmV0dXJuIHtzdGF0dXM6ICdmYWlsZWQnfTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0dXM6IERlc3Ryb3lTdHJlYW1TdGF0dXMgPSB0aGlzLm1hcEh0dHBTdGF0dXNUb1NldERlc3Ryb3lTdHJlYW1TdGF0dXMoaHR0cFJlc3BvbnNlKTtcblxuICAgIGlmIChzdGF0dXMgIT09ICdvaycpIHtcbiAgICAgIHJldHVybiB7c3RhdHVzfTtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5pc2hlZCA9IERhdGUubm93KCk7XG4gICAgY29uc3QgZGVzdHJveVN0cmVhbVJlc3BvbnNlID0gYXdhaXQgdGhpcy5jb252ZXJ0SHR0cFJlc3BvbnNlVG9EZXN0cm95U3RyZWFtUmVzcG9uc2UoaHR0cFJlc3BvbnNlKTtcblxuICAgIHRoaXMuX2xvZ2dlci5pbmZvKCdHb3QgZGVzdHJveSBzdHJlYW0gcmVzcG9uc2UgWyVqXSBpbiBbJXNdIG1zJywgZGVzdHJveVN0cmVhbVJlc3BvbnNlLCBmaW5pc2hlZCAtIHN0YXJ0KTtcblxuICAgIHJldHVybiBkZXN0cm95U3RyZWFtUmVzcG9uc2U7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkVXJsKHBhdGg6IHN0cmluZ1tdKTogVVJMIHtcbiAgICBjb25zdCB1cmkgPSBuZXcgVVJMKHRoaXMuX3VyaSk7XG4gICAgY29uc3QgcGF0aEFzQXJyYXkgPSB1cmkucGF0aG5hbWUuc3BsaXQoJy8nKTtcblxuICAgIHBhdGhBc0FycmF5Lmxlbmd0aCA9IHBhdGhBc0FycmF5Lmxlbmd0aCAtIDE7XG5cbiAgICB1cmkucGF0aG5hbWUgPSBwYXRoQXNBcnJheS5jb25jYXQoLi4ucGF0aCkuam9pbignLycpO1xuXG4gICAgcmV0dXJuIHVyaTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRQaW5nVXJsKCk6IHN0cmluZyB7XG4gICAgY29uc3QgdXJpID0gbmV3IFVSTCh0aGlzLl91cmkpO1xuICAgIGNvbnN0IHNka1ZlcnNpb24gPSBWZXJzaW9uTWFuYWdlci5zZGtWZXJzaW9uO1xuXG4gICAgdXJpLnNlYXJjaCA9IGA/JHtuZXcgVVJMU2VhcmNoUGFyYW1zKFtbJ3R5cGUnLCAnaHR0cCddLCBbJ3ZlcnNpb24nLCBzZGtWZXJzaW9uXSwgWydfJywgYCR7RGF0ZS5ub3coKX1gXV0pLnRvU3RyaW5nKCl9YDtcblxuICAgIHJldHVybiB1cmkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHByaXZhdGUgbWFwSHR0cFN0YXR1c1RvUHVibGlzaFN0YXR1cyhyZXNwb25zZTogUmVzcG9uc2UpOiBQdWJsaXNoU3RhdHVzIHtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gJ2ZhaWxlZCc7XG4gICAgfVxuXG4gICAgc3dpdGNoIChyZXNwb25zZS5zdGF0dXMpIHtcbiAgICAgIGNhc2UgMjAwOlxuICAgICAgICByZXR1cm4gJ29rJztcbiAgICAgIGNhc2UgNDAxOlxuICAgICAgICByZXR1cm4gJ3VuYXV0aG9yaXplZCc7XG4gICAgICBjYXNlIDQwMjpcbiAgICAgICAgcmV0dXJuICdnZW8tcmVzdHJpY3RlZCc7XG4gICAgICBjYXNlIDQwMzpcbiAgICAgICAgcmV0dXJuICdnZW8tYmxvY2tlZCc7XG4gICAgICBjYXNlIDQwODpcbiAgICAgICAgcmV0dXJuICd0aW1lb3V0JztcbiAgICAgIGNhc2UgNTAzOlxuICAgICAgICByZXR1cm4gJ2NhcGFjaXR5JztcbiAgICAgIGNhc2UgNTA0OlxuICAgICAgICByZXR1cm4gJ3JhdGUtbGltaXRlZCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ2ZhaWxlZCc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtYXBIdHRwU3RhdHVzVG9TdWJzY3JpYmVTdGF0dXMocmVzcG9uc2U6IFJlc3BvbnNlKTogU3Vic2NyaWJlU3RhdHVzIHtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gJ2ZhaWxlZCc7XG4gICAgfVxuXG4gICAgc3dpdGNoIChyZXNwb25zZS5zdGF0dXMpIHtcbiAgICAgIGNhc2UgMjAwOlxuICAgICAgICByZXR1cm4gJ29rJztcbiAgICAgIGNhc2UgNDAxOlxuICAgICAgICByZXR1cm4gJ3VuYXV0aG9yaXplZCc7XG4gICAgICBjYXNlIDQwMjpcbiAgICAgICAgcmV0dXJuICdnZW8tcmVzdHJpY3RlZCc7XG4gICAgICBjYXNlIDQwMzpcbiAgICAgICAgcmV0dXJuICdnZW8tYmxvY2tlZCc7XG4gICAgICBjYXNlIDQwODpcbiAgICAgICAgcmV0dXJuICd0aW1lb3V0JztcbiAgICAgIGNhc2UgNTAzOlxuICAgICAgICByZXR1cm4gJ2NhcGFjaXR5JztcbiAgICAgIGNhc2UgNTA0OlxuICAgICAgICByZXR1cm4gJ3JhdGUtbGltaXRlZCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ2ZhaWxlZCc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtYXBIdHRwU3RhdHVzVG9TZXRSZW1vdGVEZXNjcmlwdGlvblN0YXR1cyhyZXNwb25zZTogUmVzcG9uc2UpOiBTZXRSZW1vdGVEZXNjcmlwdGlvblN0YXR1cyB7XG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgcmV0dXJuICdmYWlsZWQnO1xuICAgIH1cblxuICAgIHN3aXRjaCAocmVzcG9uc2Uuc3RhdHVzKSB7XG4gICAgICBjYXNlIDIwMDpcbiAgICAgICAgcmV0dXJuICdvayc7XG4gICAgICBjYXNlIDQwMTpcbiAgICAgICAgcmV0dXJuICd1bmF1dGhvcml6ZWQnO1xuICAgICAgY2FzZSA0MDg6XG4gICAgICAgIHJldHVybiAndGltZW91dCc7XG4gICAgICBjYXNlIDUwMzpcbiAgICAgICAgcmV0dXJuICdjYXBhY2l0eSc7XG4gICAgICBjYXNlIDUwNDpcbiAgICAgICAgcmV0dXJuICdyYXRlLWxpbWl0ZWQnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdmYWlsZWQnO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbWFwSHR0cFN0YXR1c1RvU2V0VGVtcG9yYXJ5TWF4aW1hbEJpdHJhdGVTdGF0dXMocmVzcG9uc2U6IFJlc3BvbnNlKTogU2V0VGVtcG9yYXJ5TWF4aW1hbEJpdHJhdGVTdGF0dXMge1xuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiAnZmFpbGVkJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHJlc3BvbnNlLnN0YXR1cykge1xuICAgICAgY2FzZSAyMDA6XG4gICAgICAgIHJldHVybiAnb2snO1xuICAgICAgY2FzZSA0MDE6XG4gICAgICAgIHJldHVybiAndW5hdXRob3JpemVkJztcbiAgICAgIGNhc2UgNDA4OlxuICAgICAgICByZXR1cm4gJ3RpbWVvdXQnO1xuICAgICAgY2FzZSA1MDM6XG4gICAgICAgIHJldHVybiAnY2FwYWNpdHknO1xuICAgICAgY2FzZSA1MDQ6XG4gICAgICAgIHJldHVybiAncmF0ZS1saW1pdGVkJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnZmFpbGVkJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1hcEh0dHBTdGF0dXNUb0FkZEljZUNhbmRpZGF0ZXNTdGF0dXMocmVzcG9uc2U6IFJlc3BvbnNlKTogQWRkSWNlQ2FuZGlkYXRlc1N0YXR1cyB7XG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgcmV0dXJuICdmYWlsZWQnO1xuICAgIH1cblxuICAgIHN3aXRjaCAocmVzcG9uc2Uuc3RhdHVzKSB7XG4gICAgICBjYXNlIDIwMDpcbiAgICAgICAgcmV0dXJuICdvayc7XG4gICAgICBjYXNlIDQwMTpcbiAgICAgICAgcmV0dXJuICd1bmF1dGhvcml6ZWQnO1xuICAgICAgY2FzZSA0MDg6XG4gICAgICAgIHJldHVybiAndGltZW91dCc7XG4gICAgICBjYXNlIDUwMzpcbiAgICAgICAgcmV0dXJuICdjYXBhY2l0eSc7XG4gICAgICBjYXNlIDUwNDpcbiAgICAgICAgcmV0dXJuICdyYXRlLWxpbWl0ZWQnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdmYWlsZWQnO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbWFwSHR0cFN0YXR1c1RvU2V0RGVzdHJveVN0cmVhbVN0YXR1cyhyZXNwb25zZTogUmVzcG9uc2UpOiBEZXN0cm95U3RyZWFtU3RhdHVzIHtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gJ2ZhaWxlZCc7XG4gICAgfVxuXG4gICAgc3dpdGNoIChyZXNwb25zZS5zdGF0dXMpIHtcbiAgICAgIGNhc2UgMjAwOlxuICAgICAgICByZXR1cm4gJ29rJztcbiAgICAgIGNhc2UgNDAxOlxuICAgICAgICByZXR1cm4gJ3VuYXV0aG9yaXplZCc7XG4gICAgICBjYXNlIDQwODpcbiAgICAgICAgcmV0dXJuICd0aW1lb3V0JztcbiAgICAgIGNhc2UgNTAzOlxuICAgICAgICByZXR1cm4gJ2NhcGFjaXR5JztcbiAgICAgIGNhc2UgNTA0OlxuICAgICAgICByZXR1cm4gJ3JhdGUtbGltaXRlZCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ2ZhaWxlZCc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjb252ZXJ0SHR0cFJlc3BvbnNlVG9TdWJzY3JpYmVSZXNwb25zZSh0ZW5hbmN5OiBzdHJpbmcsIHJlc3BvbnNlOiBSZXNwb25zZSk6IFByb21pc2U8SVN1YnNjcmliZVJlc3BvbnNlSW5pdD4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgSVN1YnNjcmliZVJlc3BvbnNlO1xuICAgIGNvbnN0IHN1YnNjcmliZVJlc3BvbnNlOiBJU3Vic2NyaWJlUmVzcG9uc2VJbml0ID0ge3N0YXR1czogZGF0YS5zdGF0dXN9O1xuXG4gICAgc3Vic2NyaWJlUmVzcG9uc2Uuc3RyZWFtID0ge1xuICAgICAgdGVuYW5jeSxcbiAgICAgIHN0cmVhbUlkOiBkYXRhLnN0cmVhbUlkLFxuICAgICAgc2hhcmVkU2VjcmV0OiBkYXRhLnNoYXJlZFNlY3JldFxuICAgIH07XG5cbiAgICBzdWJzY3JpYmVSZXNwb25zZS5sYWcgPSBkYXRhLmxhZztcblxuICAgIGlmIChkYXRhKSB7XG4gICAgICBpZiAoZGF0YS5ydGNDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHN1YnNjcmliZVJlc3BvbnNlLnJ0Y0NvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbnZlcnRJUnRjQ29uZmlndXJhdGlvblRvUlRDQ29uZmlndXJhdGlvbihkYXRhLnJ0Y0NvbmZpZ3VyYXRpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS5zZXRSZW1vdGVEZXNjcmlwdGlvblJlc3BvbnNlICYmIGRhdGEuc2V0UmVtb3RlRGVzY3JpcHRpb25SZXNwb25zZS5zZXNzaW9uRGVzY3JpcHRpb24pIHtcbiAgICAgICAgc3Vic2NyaWJlUmVzcG9uc2Uuc2V0UmVtb3RlRGVzY3JpcHRpb25SZXNwb25zZSA9IHtzZXNzaW9uRGVzY3JpcHRpb246IHRoaXMuY29udmVydElTZXNzaW9uRGVzY3JpcHRpb25Ub1JUQ1Nlc3Npb25EZXNjcmlwdGlvbihkYXRhLnNldFJlbW90ZURlc2NyaXB0aW9uUmVzcG9uc2Uuc2Vzc2lvbkRlc2NyaXB0aW9uKX07XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLmNyZWF0ZUFuc3dlckRlc2NyaXB0aW9uUmVzcG9uc2UgJiYgZGF0YS5jcmVhdGVBbnN3ZXJEZXNjcmlwdGlvblJlc3BvbnNlLnNlc3Npb25EZXNjcmlwdGlvbikge1xuICAgICAgICBzdWJzY3JpYmVSZXNwb25zZS5jcmVhdGVBbnN3ZXJEZXNjcmlwdGlvblJlc3BvbnNlID0ge3Nlc3Npb25EZXNjcmlwdGlvbjogdGhpcy5jb252ZXJ0SVNlc3Npb25EZXNjcmlwdGlvblRvUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKGRhdGEuY3JlYXRlQW5zd2VyRGVzY3JpcHRpb25SZXNwb25zZS5zZXNzaW9uRGVzY3JpcHRpb24pfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEuY3JlYXRlT2ZmZXJEZXNjcmlwdGlvblJlc3BvbnNlICYmIGRhdGEuY3JlYXRlT2ZmZXJEZXNjcmlwdGlvblJlc3BvbnNlLnNlc3Npb25EZXNjcmlwdGlvbikge1xuICAgICAgICBzdWJzY3JpYmVSZXNwb25zZS5jcmVhdGVPZmZlckRlc2NyaXB0aW9uUmVzcG9uc2UgPSB7c2Vzc2lvbkRlc2NyaXB0aW9uOiB0aGlzLmNvbnZlcnRJU2Vzc2lvbkRlc2NyaXB0aW9uVG9SVENTZXNzaW9uRGVzY3JpcHRpb24oZGF0YS5jcmVhdGVPZmZlckRlc2NyaXB0aW9uUmVzcG9uc2Uuc2Vzc2lvbkRlc2NyaXB0aW9uKX07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnNjcmliZVJlc3BvbnNlO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjb252ZXJ0SHR0cFJlc3BvbnNlVG9QdWJsaXNoUmVzcG9uc2UodGVuYW5jeTogc3RyaW5nLCByZXNwb25zZTogUmVzcG9uc2UpOiBQcm9taXNlPElQdWJsaXNoUmVzcG9uc2VJbml0PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKSBhcyBJUHVibGlzaFJlc3BvbnNlO1xuICAgIGNvbnN0IHB1Ymxpc2hSZXNwb25zZTogSVB1Ymxpc2hSZXNwb25zZUluaXQgPSB7c3RhdHVzOiBkYXRhLnN0YXR1c307XG5cbiAgICBwdWJsaXNoUmVzcG9uc2Uuc3RyZWFtID0ge1xuICAgICAgdGVuYW5jeSxcbiAgICAgIHN0cmVhbUlkOiBkYXRhLnN0cmVhbUlkLFxuICAgICAgc2hhcmVkU2VjcmV0OiBkYXRhLnNoYXJlZFNlY3JldFxuICAgIH07XG5cbiAgICBpZiAoZGF0YSkge1xuICAgICAgaWYgKGRhdGEucnRjQ29uZmlndXJhdGlvbikge1xuICAgICAgICBwdWJsaXNoUmVzcG9uc2UucnRjQ29uZmlndXJhdGlvbiA9IHRoaXMuY29udmVydElSdGNDb25maWd1cmF0aW9uVG9SVENDb25maWd1cmF0aW9uKGRhdGEucnRjQ29uZmlndXJhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnNldFJlbW90ZURlc2NyaXB0aW9uUmVzcG9uc2UgJiYgZGF0YS5zZXRSZW1vdGVEZXNjcmlwdGlvblJlc3BvbnNlLnNlc3Npb25EZXNjcmlwdGlvbikge1xuICAgICAgICBwdWJsaXNoUmVzcG9uc2Uuc2V0UmVtb3RlRGVzY3JpcHRpb25SZXNwb25zZSA9IHtzZXNzaW9uRGVzY3JpcHRpb246IHRoaXMuY29udmVydElTZXNzaW9uRGVzY3JpcHRpb25Ub1JUQ1Nlc3Npb25EZXNjcmlwdGlvbihkYXRhLnNldFJlbW90ZURlc2NyaXB0aW9uUmVzcG9uc2Uuc2Vzc2lvbkRlc2NyaXB0aW9uKX07XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLmNyZWF0ZUFuc3dlckRlc2NyaXB0aW9uUmVzcG9uc2UgJiYgZGF0YS5jcmVhdGVBbnN3ZXJEZXNjcmlwdGlvblJlc3BvbnNlLnNlc3Npb25EZXNjcmlwdGlvbikge1xuICAgICAgICBwdWJsaXNoUmVzcG9uc2UuY3JlYXRlQW5zd2VyRGVzY3JpcHRpb25SZXNwb25zZSA9IHtzZXNzaW9uRGVzY3JpcHRpb246IHRoaXMuY29udmVydElTZXNzaW9uRGVzY3JpcHRpb25Ub1JUQ1Nlc3Npb25EZXNjcmlwdGlvbihkYXRhLmNyZWF0ZUFuc3dlckRlc2NyaXB0aW9uUmVzcG9uc2Uuc2Vzc2lvbkRlc2NyaXB0aW9uKX07XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLmNyZWF0ZU9mZmVyRGVzY3JpcHRpb25SZXNwb25zZSAmJiBkYXRhLmNyZWF0ZU9mZmVyRGVzY3JpcHRpb25SZXNwb25zZS5zZXNzaW9uRGVzY3JpcHRpb24pIHtcbiAgICAgICAgcHVibGlzaFJlc3BvbnNlLmNyZWF0ZU9mZmVyRGVzY3JpcHRpb25SZXNwb25zZSA9IHtzZXNzaW9uRGVzY3JpcHRpb246IHRoaXMuY29udmVydElTZXNzaW9uRGVzY3JpcHRpb25Ub1JUQ1Nlc3Npb25EZXNjcmlwdGlvbihkYXRhLmNyZWF0ZU9mZmVyRGVzY3JpcHRpb25SZXNwb25zZS5zZXNzaW9uRGVzY3JpcHRpb24pfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHVibGlzaFJlc3BvbnNlO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0SVJ0Y0NvbmZpZ3VyYXRpb25Ub1JUQ0NvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbjogSVJ0Y0NvbmZpZ3VyYXRpb24pOiBSVENDb25maWd1cmF0aW9uIHtcbiAgICBjb25zdCBydGNDb25maWd1cmF0aW9uOiBSVENDb25maWd1cmF0aW9uID0ge307XG5cbiAgICBpZiAoY29uZmlndXJhdGlvbi5idW5kbGVQb2xpY3kpIHtcbiAgICAgIHN3aXRjaCAoY29uZmlndXJhdGlvbi5idW5kbGVQb2xpY3kpIHtcbiAgICAgICAgY2FzZSAnQnVuZGxlUG9saWN5QmFsYW5jZWQnOlxuICAgICAgICAgIHJ0Y0NvbmZpZ3VyYXRpb24uYnVuZGxlUG9saWN5ID0gJ2JhbGFuY2VkJztcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdCdW5kbGVQb2xpY3lNYXhDb21wYXQnOlxuICAgICAgICAgIHJ0Y0NvbmZpZ3VyYXRpb24uYnVuZGxlUG9saWN5ID0gJ21heC1jb21wYXQnO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0J1bmRsZVBvbGljeU1heEJ1bmRsZSc6XG4gICAgICAgICAgcnRjQ29uZmlndXJhdGlvbi5idW5kbGVQb2xpY3kgPSAnbWF4LWJ1bmRsZSc7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBhc3NlcnRVbnJlYWNoYWJsZShjb25maWd1cmF0aW9uLmJ1bmRsZVBvbGljeSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWd1cmF0aW9uLmljZUNhbmRpZGF0ZVBvb2xTaXplID09PSAnbnVtYmVyJykge1xuICAgICAgcnRjQ29uZmlndXJhdGlvbi5pY2VDYW5kaWRhdGVQb29sU2l6ZSA9IGNvbmZpZ3VyYXRpb24uaWNlQ2FuZGlkYXRlUG9vbFNpemU7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZ3VyYXRpb24uaWNlU2VydmVycykge1xuICAgICAgY29uc3QgaWNlU2VydmVyczogUlRDSWNlU2VydmVyW10gPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25maWd1cmF0aW9uLmljZVNlcnZlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWNlU2VydmVycy5wdXNoKHtcbiAgICAgICAgICB1cmxzOiBjb25maWd1cmF0aW9uLmljZVNlcnZlcnNbaV0udXJscyxcbiAgICAgICAgICB1c2VybmFtZTogY29uZmlndXJhdGlvbi5pY2VTZXJ2ZXJzW2ldLnVzZXJuYW1lLFxuICAgICAgICAgIGNyZWRlbnRpYWw6IGNvbmZpZ3VyYXRpb24uaWNlU2VydmVyc1tpXS5jcmVkZW50aWFsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBydGNDb25maWd1cmF0aW9uLmljZVNlcnZlcnMgPSBpY2VTZXJ2ZXJzO1xuICAgIH1cblxuICAgIGlmIChjb25maWd1cmF0aW9uLmljZVRyYW5zcG9ydFBvbGljeSkge1xuICAgICAgc3dpdGNoIChjb25maWd1cmF0aW9uLmljZVRyYW5zcG9ydFBvbGljeSkge1xuICAgICAgICBjYXNlICdJY2VUcmFuc3BvcnRQb2xpY3lBbGwnOlxuICAgICAgICAgIHJ0Y0NvbmZpZ3VyYXRpb24uaWNlVHJhbnNwb3J0UG9saWN5ID0gJ2FsbCc7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnSWNlVHJhbnNwb3J0UG9saWN5UmVsYXknOlxuICAgICAgICAgIHJ0Y0NvbmZpZ3VyYXRpb24uaWNlVHJhbnNwb3J0UG9saWN5ID0gJ3JlbGF5JztcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdJY2VUcmFuc3BvcnRQb2xpY3lQdWJsaWMnOlxuICAgICAgICAgIC8vIERlcHJlY2F0ZWQgLSBOb3Qgc3VwcG9ydGVkXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYXNzZXJ0VW5yZWFjaGFibGUoY29uZmlndXJhdGlvbi5pY2VUcmFuc3BvcnRQb2xpY3kpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb25maWd1cmF0aW9uLnBlZXJJZGVudGl0eSkge1xuICAgICAgcnRjQ29uZmlndXJhdGlvbi5wZWVySWRlbnRpdHkgPSBjb25maWd1cmF0aW9uLnBlZXJJZGVudGl0eTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlndXJhdGlvbi5ydGNwTXV4UG9saWN5KSB7XG4gICAgICBzd2l0Y2ggKGNvbmZpZ3VyYXRpb24ucnRjcE11eFBvbGljeSkge1xuICAgICAgICBjYXNlICdSdGNwTXV4UG9saWN5TmVnb3RpYXRlJzpcbiAgICAgICAgICBydGNDb25maWd1cmF0aW9uLnJ0Y3BNdXhQb2xpY3kgPSAnbmVnb3RpYXRlJztcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdSdGNwTXV4UG9saWN5UmVxdWlyZSc6XG4gICAgICAgICAgcnRjQ29uZmlndXJhdGlvbi5ydGNwTXV4UG9saWN5ID0gJ3JlcXVpcmUnO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYXNzZXJ0VW5yZWFjaGFibGUoY29uZmlndXJhdGlvbi5ydGNwTXV4UG9saWN5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcnRjQ29uZmlndXJhdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydElTZXNzaW9uRGVzY3JpcHRpb25Ub1JUQ1Nlc3Npb25EZXNjcmlwdGlvbihzZXNzaW9uRGVzY3JpcHRpb246IElTZXNzaW9uRGVzY3JpcHRpb24pOiBSVENTZXNzaW9uRGVzY3JpcHRpb25Jbml0IHtcbiAgICBjb25zdCBydGNTZXNzaW9uRGVzY3JpcHRpb246IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbkluaXQgPSB7c2RwOiBzZXNzaW9uRGVzY3JpcHRpb24uc2RwfTtcblxuICAgIHN3aXRjaCAoc2Vzc2lvbkRlc2NyaXB0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ09mZmVyJzpcbiAgICAgICAgcnRjU2Vzc2lvbkRlc2NyaXB0aW9uLnR5cGUgPSAnb2ZmZXInO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQW5zd2VyJzpcbiAgICAgICAgcnRjU2Vzc2lvbkRlc2NyaXB0aW9uLnR5cGUgPSAnYW5zd2VyJztcblxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFzc2VydFVucmVhY2hhYmxlKHNlc3Npb25EZXNjcmlwdGlvbi50eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnRjU2Vzc2lvbkRlc2NyaXB0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjb252ZXJ0SHR0cFJlc3BvbnNlVG9TZXRSZW1vdGVEZXNjcmlwdGlvblJlc3BvbnNlKHJlc3BvbnNlOiBSZXNwb25zZSk6IFByb21pc2U8SVNldFJlbW90ZURlc2NyaXB0aW9uUmVzcG9uc2VJbml0PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKSBhcyBJU2V0UmVtb3RlRGVzY3JpcHRpb25SZXNwb25zZTtcbiAgICBjb25zdCBzZXRSZW1vdGVEZXNjcmlwdGlvblJlc3BvbnNlOiBJU2V0UmVtb3RlRGVzY3JpcHRpb25SZXNwb25zZUluaXQgPSB7c3RhdHVzOiBkYXRhLnN0YXR1c307XG5cbiAgICBpZiAoZGF0YSAmJiBkYXRhLnNlc3Npb25EZXNjcmlwdGlvbikge1xuICAgICAgc2V0UmVtb3RlRGVzY3JpcHRpb25SZXNwb25zZS5zZXNzaW9uRGVzY3JpcHRpb24gPSB0aGlzLmNvbnZlcnRJU2Vzc2lvbkRlc2NyaXB0aW9uVG9SVENTZXNzaW9uRGVzY3JpcHRpb24oZGF0YS5zZXNzaW9uRGVzY3JpcHRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBzZXRSZW1vdGVEZXNjcmlwdGlvblJlc3BvbnNlO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjb252ZXJ0SHR0cFJlc3BvbnNlVG9BZGRJY2VDYW5kaWRhdGVzUmVzcG9uc2UocmVzcG9uc2U6IFJlc3BvbnNlKTogUHJvbWlzZTxJQWRkSWNlQ2FuZGlkYXRlc1Jlc3BvbnNlSW5pdD4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgSUFkZEljZUNhbmRpZGF0ZXNSZXNwb25zZTtcbiAgICBjb25zdCBhZGRJY2VDYW5kaWRhdGVzUmVzcG9uc2U6IElBZGRJY2VDYW5kaWRhdGVzUmVzcG9uc2VJbml0ID0ge1xuICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyxcbiAgICAgIG9wdGlvbnM6IFtdXG4gICAgfTtcblxuICAgIGlmIChkYXRhKSB7XG4gICAgICBpZiAoZGF0YS5vcHRpb25zKSB7XG4gICAgICAgIGFkZEljZUNhbmRpZGF0ZXNSZXNwb25zZS5vcHRpb25zID0gZGF0YS5vcHRpb25zO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhZGRJY2VDYW5kaWRhdGVzUmVzcG9uc2U7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNvbnZlcnRIdHRwUmVzcG9uc2VUb0Rlc3Ryb3lTdHJlYW1SZXNwb25zZShyZXNwb25zZTogUmVzcG9uc2UpOiBQcm9taXNlPElEZXN0cm95U3RyZWFtUmVzcG9uc2VJbml0PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKSBhcyBJRGVzdHJveVN0cmVhbVJlc3BvbnNlO1xuICAgIGNvbnN0IGRlc3Ryb3lTdHJlYW06IElEZXN0cm95U3RyZWFtUmVzcG9uc2VJbml0ID0ge3N0YXR1czogZGF0YS5zdGF0dXN9O1xuXG4gICAgcmV0dXJuIGRlc3Ryb3lTdHJlYW07XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRSVENTZHBUeXBlVG9TZHBUeXBlKHR5cGU6IFJUQ1NkcFR5cGUpOiBTZHBUeXBlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2Fuc3dlcic6XG4gICAgICAgIHJldHVybiAnQW5zd2VyJztcbiAgICAgIGNhc2UgJ29mZmVyJzpcbiAgICAgICAgcmV0dXJuICdPZmZlcic7XG4gICAgICBjYXNlICdwcmFuc3dlcic6XG4gICAgICBjYXNlICdyb2xsYmFjayc6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgU0RQIHR5cGUgWyR7dHlwZX1dIGlzIG5vdCBzdXBwb3J0ZWRgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFzc2VydFVucmVhY2hhYmxlKHR5cGUpO1xuICAgIH1cbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IExvZ2dlckZhY3RvcnkgZnJvbSAnLi4vLi4vbG9nZ2VyL0xvZ2dlckZhY3RvcnknO1xuaW1wb3J0IHtJRWRnZUF1dGh9IGZyb20gJy4vRWRnZUF1dGhUb2tlbic7XG5pbXBvcnQge0lMb2dnZXJ9IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXJJbnRlcmZhY2UnO1xuaW1wb3J0IHtFZGdlVG9rZW59IGZyb20gJy4vRWRnZVRva2VuJztcblxuY29uc3QgZWRnZUF1dGhUb2tlblByZWZpeCA9ICdESUdFU1Q6JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRnZUF1dGgge1xuICBwcml2YXRlIHN0YXRpYyBfbG9nZ2VyOiBJTG9nZ2VyID0gTG9nZ2VyRmFjdG9yeS5nZXRMb2dnZXIoJ0VkZ2VBdXRoJyk7XG5cbiAgc3RhdGljIHBhcnNlVG9rZW4odG9rZW46IEVkZ2VUb2tlbik6IElFZGdlQXV0aCB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWRUb2tlbih0b2tlbikpIHtcbiAgICAgIEVkZ2VBdXRoLl9sb2dnZXIuZXJyb3IoJ1Rva2VuIGlzIG5vdCB2YWxpZCBbJXNdJywgdG9rZW4pO1xuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBlbmNvZGVkRWRnZUF1dGhUb2tlbiA9IGF0b2IodG9rZW4uc3Vic3RyKGVkZ2VBdXRoVG9rZW5QcmVmaXgubGVuZ3RoKSk7XG4gICAgICBjb25zdCBlZGdlQXV0aFRva2VuID0gSlNPTi5wYXJzZShlbmNvZGVkRWRnZUF1dGhUb2tlbik7XG5cbiAgICAgIGVkZ2VBdXRoVG9rZW4udG9rZW4gPSBKU09OLnBhcnNlKGVkZ2VBdXRoVG9rZW4udG9rZW4pO1xuXG4gICAgICByZXR1cm4gZWRnZUF1dGhUb2tlbjtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBFZGdlQXV0aC5fbG9nZ2VyLmVycm9yKCdDYW5ub3QgcGFyc2UgdG9rZW4gdmFsdWUnLCBlKTtcblxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0VXJpKHBhcnNlZFRva2VuOiBJRWRnZUF1dGgpOiBVUkwge1xuICAgIHJldHVybiBwYXJzZWRUb2tlbiAmJiBwYXJzZWRUb2tlbi50b2tlbiAmJiBwYXJzZWRUb2tlbi50b2tlbi51cmkgP1xuICAgICAgbmV3IFVSTChwYXJzZWRUb2tlbi50b2tlbi51cmkpIDogbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRUZW5hbmN5KHBhcnNlZFRva2VuOiBJRWRnZUF1dGgpOiBzdHJpbmcge1xuICAgIHJldHVybiBwYXJzZWRUb2tlbiAmJiBwYXJzZWRUb2tlbi5hcHBsaWNhdGlvbklkID9cbiAgICAgIHBhcnNlZFRva2VuLmFwcGxpY2F0aW9uSWQgOiAnJztcbiAgfVxuXG4gIHN0YXRpYyBpc1ZhbGlkVG9rZW4odG9rZW46IEVkZ2VUb2tlbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRva2VuICYmIHRva2VuLnN0YXJ0c1dpdGgoZWRnZUF1dGhUb2tlblByZWZpeCk7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCBCcm93c2VyRGV0ZWN0b3IgZnJvbSAnLi4vLi4vZG9tL0Jyb3dzZXJEZXRlY3Rvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlYXR1cmVFbmFibGVtZW50IHtcbiAgc3RhdGljIGdldCBjbGllbnRPZmZlckRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIC8vIENsaWVudCBvZmZlciB3b3JrZmxvdyBkb2VzIG5vdCB3b3JrIGNvcnJlY3RseSBpbiB0aGUgZm9sbG93aW5nIGJyb3dzZXJzXG4gICAgcmV0dXJuIEJyb3dzZXJEZXRlY3Rvci5pc0Nocm9tZTc0IHx8XG4gICAgICBCcm93c2VyRGV0ZWN0b3IuaXNDaHJvbWU3NSB8fFxuICAgICAgQnJvd3NlckRldGVjdG9yLmlzQ2hyb21lNzYgfHxcbiAgICAgIEJyb3dzZXJEZXRlY3Rvci5pc0Nocm9tZTc3O1xuICB9XG5cbiAgc3RhdGljIGdldCBhZGRUcmFuY2VpdmVyRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgLy8gQ2hyb21lIDY5LCA3MCwgNzEsIDcyIGV4cG9zZXMgYGFkZFRyYW5jZWl2ZXJgIGJ1dCBpdCBkb2VzIG5vdCB3b3JrIGNvcnJlY3RseVxuICAgIHJldHVybiBCcm93c2VyRGV0ZWN0b3IuaXNDaHJvbWU2OSB8fFxuICAgICAgQnJvd3NlckRldGVjdG9yLmlzQ2hyb21lNzAgfHxcbiAgICAgIEJyb3dzZXJEZXRlY3Rvci5pc0Nocm9tZTcxIHx8XG4gICAgICBCcm93c2VyRGV0ZWN0b3IuaXNDaHJvbWU3MjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZ2V0U3RhdHNQcm9taXNlQmFzZWREaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQnJvd3NlckRldGVjdG9yLmJyb3dzZXJOYW1lID09PSAnQ2hyb21lJyAmJiBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck1ham9yVmVyc2lvbiA8PSA2NjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZ2V0Q3VycmVudE9mZmVyRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTmFtZSA9PT0gJ0Nocm9tZScgJiYgQnJvd3NlckRldGVjdG9yLmJyb3dzZXJNYWpvclZlcnNpb24gPD0gNjkgfHxcbiAgICAgIEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTmFtZSA9PT0gJ0ZpcmVmb3gnICYmIEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTWFqb3JWZXJzaW9uIDw9IDU2O1xuICB9XG5cbiAgc3RhdGljIGdldCBvblRyYWNrRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTmFtZSA9PT0gJ0Nocm9tZScgJiYgQnJvd3NlckRldGVjdG9yLmJyb3dzZXJNYWpvclZlcnNpb24gPD0gNjMgfHxcbiAgICAgIEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTmFtZSA9PT0gJ0ZpcmVmb3gnICYmIEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTWFqb3JWZXJzaW9uIDw9IDUyO1xuICB9XG5cbiAgc3RhdGljIGdldCB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbkVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTmFtZSA9PT0gJ0Nocm9tZScgJiYgQnJvd3NlckRldGVjdG9yLmJyb3dzZXJNYWpvclZlcnNpb24gPD0gNTU7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb21pc2VCYXNlZFBDTWV0aG9kc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck5hbWUgPT09ICdGaXJlZm94JyAmJiBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck1ham9yVmVyc2lvbiA8PSA1MjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc2hvdWxkVXNlTmF0aXZlSGxzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck5hbWUgPT09ICdTYWZhcmknIHx8XG4gICAgICBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck5hbWUgPT09ICdTYW1zdW5nQnJvd3Nlcic7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzUlRNUEVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck5hbWUgPT09ICdGaXJlZm94JyAmJiBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck1ham9yVmVyc2lvbiA8IDg0KSB8fFxuICAgICAgKEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTmFtZSA9PT0gJ0Nocm9tZScgJiYgQnJvd3NlckRldGVjdG9yLmJyb3dzZXJNYWpvclZlcnNpb24gPCA3MCkgfHxcbiAgICAgIEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTmFtZSA9PT0gJ0VkZ2UnIHx8XG4gICAgICBCcm93c2VyRGV0ZWN0b3IuYnJvd3Nlck5hbWUgPT09ICdJRSc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzUHJlY2FjaGluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJyb3dzZXJEZXRlY3Rvci5icm93c2VyTmFtZSAhPT0gJ0lFJztcbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IExvZ2dlckZhY3RvcnkgZnJvbSAnLi4vLi4vbG9nZ2VyL0xvZ2dlckZhY3RvcnknO1xuaW1wb3J0IElEaXNwb3NhYmxlIGZyb20gJy4uLy4uL2xhbmcvSURpc3Bvc2FibGUnO1xuaW1wb3J0IFJlYWRPbmx5U3ViamVjdCBmcm9tICcuLi8uLi9yeC9SZWFkT25seVN1YmplY3QnO1xuaW1wb3J0IEVuZFBvaW50LCB7SVN0cmVhbX0gZnJvbSAnLi4vZGlzY292ZXJ5L0VuZFBvaW50JztcbmltcG9ydCBTREsgZnJvbSAnLi4vU0RLJztcbmltcG9ydCBJUGVlckNvbm5lY3Rpb24gZnJvbSAnLi4vLi4vcnRjL0lQZWVyQ29ubmVjdGlvbic7XG5pbXBvcnQgUHVibGlzaGVyU3RhdGUgZnJvbSAnLi9QdWJsaXNoZXJTdGF0ZSc7XG5pbXBvcnQgYXNzZXJ0VW5yZWFjaGFibGUgZnJvbSAnLi4vLi4vbGFuZy9hc3NlcnRVbnJlYWNoYWJsZSc7XG5pbXBvcnQgRGlzcG9zYWJsZSBmcm9tICcuLi8uLi9sYW5nL0Rpc3Bvc2FibGUnO1xuaW1wb3J0IEVkZ2VBdXRoIGZyb20gJy4uL2VkZ2VBdXRoL0VkZ2VBdXRoJztcbmltcG9ydCB7SUxvZ2dlcn0gZnJvbSAnLi4vLi4vbG9nZ2VyL0xvZ2dlckludGVyZmFjZSc7XG5pbXBvcnQgU2Vzc2lvblRlbGVtZXRyeSBmcm9tICcuLi8uLi92aWRlby9TZXNzaW9uVGVsZW1ldHJ5JztcbmltcG9ydCB7SVJ0Y01vbml0b3JTdGF0aXN0aWN9IGZyb20gJy4uLy4uL3J0Yy9SdGNDb25uZWN0aW9uTW9uaXRvcic7XG5cbmltcG9ydCB7RWRnZVRva2VufSBmcm9tICcuLi9lZGdlQXV0aC9FZGdlVG9rZW4nO1xuaW1wb3J0IFRva2VuQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L1Rva2VuQ29udGV4dCc7XG5pbXBvcnQgUHVibGlzaGVyQ29udGV4dCBmcm9tICcuL1B1Ymxpc2hlckNvbnRleHQnO1xuaW1wb3J0IFBlZXJDb25uZWN0aW9uQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L1BlZXJDb25uZWN0aW9uQ29udGV4dCc7XG5pbXBvcnQgU3RhdGVDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvU3RhdGVDb250ZXh0JztcbmltcG9ydCBEaXNjb3ZlcnlVcmkgZnJvbSAnLi4vZGlzY292ZXJ5L0Rpc2NvdmVyeVVyaSc7XG5pbXBvcnQgTWV0cmljc0ZhY3RvcnkgZnJvbSAnLi4vLi4vbWV0cmljcy9NZXRyaWNzRmFjdG9yeSc7XG5pbXBvcnQgTWV0cmljc1NlcnZpY2UgZnJvbSAnLi4vLi4vbWV0cmljcy9NZXRyaWNzU2VydmljZSc7XG5pbXBvcnQgUmVhbFRpbWVQdWJsaXNoZXIgZnJvbSAnLi9SZWFsVGltZVB1Ymxpc2hlcic7XG5cbmNvbnN0IGRlZmF1bHRTdHJlYW1UZXJtaW5hdGlvblJlYXNvbiA9ICdjbGllbnQ6dGVybWluYXRpb24nO1xuY29uc3QgYmFja29mZkludGVydmFsSW5NaWxsaXNlY29uZHMgPSAyMDAwO1xuY29uc3QgZmFpbHVyZUNvdW50Q2xlYW5VcEludGVydmFsSW5NaWxsaXNlY29uZHMgPSAzMDAwO1xuY29uc3QgbWF4QmFja29mZkludGVydmFsSW5NaWxsaXNlY29uZHMgPSAzMDAwMDA7XG5jb25zdCBzdGFuZGJ5UG9sbGluZ0ludGVydmFsSW5NaWxsaXNlY29uZHMgPSAxNTAwMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHVibGlzaGVyIGltcGxlbWVudHMgSURpc3Bvc2FibGUge1xuICBwcml2YXRlIHJlYWRvbmx5IF9sb2dnZXI6IElMb2dnZXIgPSBMb2dnZXJGYWN0b3J5LmdldExvZ2dlcignUHVibGlzaGVyJyk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3Rva2VuQ29udGV4dDogVG9rZW5Db250ZXh0O1xuICBwcml2YXRlIHJlYWRvbmx5IF9wdWJsaXNoZXJDb250ZXh0OiBQdWJsaXNoZXJDb250ZXh0O1xuICBwcml2YXRlIHJlYWRvbmx5IF9wZWVyQ29ubmVjdGlvbkNvbnRleHQ6IFBlZXJDb25uZWN0aW9uQ29udGV4dDtcbiAgcHJpdmF0ZSByZWFkb25seSBfc3RhdGVDb250ZXh0OiBTdGF0ZUNvbnRleHQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3B1Ymxpc2hlclN0YXJ0VGltZTogbnVtYmVyO1xuICBwcml2YXRlIHJlYWRvbmx5IF9yZWFkT25seVRva2VuOiBSZWFkT25seVN1YmplY3Q8RWRnZVRva2VuPjtcbiAgcHJpdmF0ZSByZWFkb25seSBfcmVhZE9ubHlQZWVyQ29ubmVjdGlvbjogUmVhZE9ubHlTdWJqZWN0PElQZWVyQ29ubmVjdGlvbj47XG4gIHByaXZhdGUgcmVhZG9ubHkgX3JlYWRPbmx5U3RhdGU6IFJlYWRPbmx5U3ViamVjdDxQdWJsaXNoZXJTdGF0ZT47XG4gIHByaXZhdGUgcmVhZG9ubHkgX3JlYWRPbmx5VG9rZW5FeHBpcmluZzogUmVhZE9ubHlTdWJqZWN0PGJvb2xlYW4+O1xuICBwcml2YXRlIHJlYWRvbmx5IF9yZWFkT25seUF1dGhvcml6ZWQ6IFJlYWRPbmx5U3ViamVjdDxib29sZWFuPjtcbiAgcHJpdmF0ZSByZWFkb25seSBfcmVhZE9ubHlPbmxpbmU6IFJlYWRPbmx5U3ViamVjdDxib29sZWFuPjtcbiAgcHJpdmF0ZSByZWFkb25seSBfcmVhZE9ubHlMb2FkaW5nOiBSZWFkT25seVN1YmplY3Q8Ym9vbGVhbj47XG4gIHByaXZhdGUgcmVhZG9ubHkgX3JlYWRPbmx5UHVibGlzaGluZzogUmVhZE9ubHlTdWJqZWN0PGJvb2xlYW4+O1xuICBwcml2YXRlIHJlYWRvbmx5IF9yZWFkT25seVN0YW5kYnk6IFJlYWRPbmx5U3ViamVjdDxib29sZWFuPjtcbiAgcHJpdmF0ZSByZWFkb25seSBfcmVhZE9ubHlTdG9wcGVkOiBSZWFkT25seVN1YmplY3Q8Ym9vbGVhbj47XG4gIHByaXZhdGUgcmVhZG9ubHkgX3JlYWRPbmx5RmFpbHVyZUNvdW50OiBSZWFkT25seVN1YmplY3Q8bnVtYmVyPjtcbiAgcHJpdmF0ZSByZWFkb25seSBfcmVhZE9ubHlFbmRQb2ludDogUmVhZE9ubHlTdWJqZWN0PEVuZFBvaW50PjtcbiAgcHJpdmF0ZSByZWFkb25seSBfcmVhZE9ubHlTdHJlYW06IFJlYWRPbmx5U3ViamVjdDxJU3RyZWFtPjtcbiAgcHJpdmF0ZSByZWFkb25seSBfcmVhZE9ubHlSdGNTdGF0aXN0aWNzOiBSZWFkT25seVN1YmplY3Q8SVJ0Y01vbml0b3JTdGF0aXN0aWM+O1xuICBwcml2YXRlIHJlYWRvbmx5IF9yZWFkT25seU1lZGlhU3RyZWFtOiBSZWFkT25seVN1YmplY3Q8TWVkaWFTdHJlYW0+O1xuXG4gIHByaXZhdGUgX21ldHJpY3NTZXJ2aWNlOiBNZXRyaWNzU2VydmljZTtcbiAgcHJpdmF0ZSByZWFkb25seSBfc2Vzc2lvblRlbGVtZXRyeTogU2Vzc2lvblRlbGVtZXRyeTtcblxuICBjb25zdHJ1Y3RvcihtZWRpYVN0cmVhbTogTWVkaWFTdHJlYW0sIHRva2VuOiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl90b2tlbkNvbnRleHQgPSBuZXcgVG9rZW5Db250ZXh0KHRva2VuKTtcbiAgICB0aGlzLl9wdWJsaXNoZXJDb250ZXh0ID0gbmV3IFB1Ymxpc2hlckNvbnRleHQobmFtZSk7XG4gICAgdGhpcy5fcGVlckNvbm5lY3Rpb25Db250ZXh0ID0gbmV3IFBlZXJDb25uZWN0aW9uQ29udGV4dCgpO1xuICAgIHRoaXMuX3N0YXRlQ29udGV4dCA9IG5ldyBTdGF0ZUNvbnRleHQoKTtcbiAgICB0aGlzLl9wdWJsaXNoZXJTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuX3JlYWRPbmx5VG9rZW4gPSBuZXcgUmVhZE9ubHlTdWJqZWN0PHN0cmluZz4odGhpcy5fdG9rZW5Db250ZXh0LnRva2VuKTtcbiAgICB0aGlzLl9yZWFkT25seVBlZXJDb25uZWN0aW9uID0gbmV3IFJlYWRPbmx5U3ViamVjdDxJUGVlckNvbm5lY3Rpb24+KHRoaXMuX3BlZXJDb25uZWN0aW9uQ29udGV4dC5wZWVyQ29ubmVjdGlvbik7XG4gICAgdGhpcy5fcmVhZE9ubHlTdGF0ZSA9IG5ldyBSZWFkT25seVN1YmplY3Q8UHVibGlzaGVyU3RhdGU+KHRoaXMuX3B1Ymxpc2hlckNvbnRleHQuc3RhdGUpO1xuICAgIHRoaXMuX3JlYWRPbmx5VG9rZW5FeHBpcmluZyA9IG5ldyBSZWFkT25seVN1YmplY3Q8Ym9vbGVhbj4odGhpcy5fdG9rZW5Db250ZXh0LnRva2VuRXhwaXJpbmcpO1xuICAgIHRoaXMuX3JlYWRPbmx5QXV0aG9yaXplZCA9IG5ldyBSZWFkT25seVN1YmplY3Q8Ym9vbGVhbj4odGhpcy5fcHVibGlzaGVyQ29udGV4dC5hdXRob3JpemVkKTtcbiAgICB0aGlzLl9yZWFkT25seU9ubGluZSA9IG5ldyBSZWFkT25seVN1YmplY3Q8Ym9vbGVhbj4odGhpcy5fcHVibGlzaGVyQ29udGV4dC5vbmxpbmUpO1xuICAgIHRoaXMuX3JlYWRPbmx5TG9hZGluZyA9IG5ldyBSZWFkT25seVN1YmplY3Q8Ym9vbGVhbj4odGhpcy5fcHVibGlzaGVyQ29udGV4dC5sb2FkaW5nKTtcbiAgICB0aGlzLl9yZWFkT25seVB1Ymxpc2hpbmcgPSBuZXcgUmVhZE9ubHlTdWJqZWN0PGJvb2xlYW4+KHRoaXMuX3B1Ymxpc2hlckNvbnRleHQucHVibGlzaGluZyk7XG4gICAgdGhpcy5fcmVhZE9ubHlTdGFuZGJ5ID0gbmV3IFJlYWRPbmx5U3ViamVjdDxib29sZWFuPih0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0YW5kYnkpO1xuICAgIHRoaXMuX3JlYWRPbmx5U3RvcHBlZCA9IG5ldyBSZWFkT25seVN1YmplY3Q8Ym9vbGVhbj4odGhpcy5fcHVibGlzaGVyQ29udGV4dC5zdG9wcGVkKTtcbiAgICB0aGlzLl9yZWFkT25seUZhaWx1cmVDb3VudCA9IG5ldyBSZWFkT25seVN1YmplY3Q8bnVtYmVyPih0aGlzLl9wdWJsaXNoZXJDb250ZXh0LmZhaWx1cmVDb3VudCk7XG4gICAgdGhpcy5fcmVhZE9ubHlFbmRQb2ludCA9IG5ldyBSZWFkT25seVN1YmplY3Q8RW5kUG9pbnQ+KHRoaXMuX3B1Ymxpc2hlckNvbnRleHQuZW5kUG9pbnQpO1xuICAgIHRoaXMuX3JlYWRPbmx5U3RyZWFtID0gbmV3IFJlYWRPbmx5U3ViamVjdDxJU3RyZWFtPih0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0cmVhbSk7XG4gICAgdGhpcy5fcmVhZE9ubHlSdGNTdGF0aXN0aWNzID0gbmV3IFJlYWRPbmx5U3ViamVjdDxJUnRjTW9uaXRvclN0YXRpc3RpYz4odGhpcy5fcHVibGlzaGVyQ29udGV4dC5ydGNTdGF0aXN0aWNzKTtcbiAgICB0aGlzLl9yZWFkT25seU1lZGlhU3RyZWFtID0gbmV3IFJlYWRPbmx5U3ViamVjdDxNZWRpYVN0cmVhbT4odGhpcy5fcGVlckNvbm5lY3Rpb25Db250ZXh0Lm1lZGlhU3RyZWFtKTtcblxuICAgIHRoaXMuX3BlZXJDb25uZWN0aW9uQ29udGV4dC5tZWRpYVN0cmVhbS52YWx1ZSA9IG1lZGlhU3RyZWFtO1xuXG4gICAgY29uc3QgcGFyc2VkVG9rZW4gPSBFZGdlQXV0aC5wYXJzZVRva2VuKHRoaXMuX3Rva2VuQ29udGV4dC50b2tlbi52YWx1ZSk7XG4gICAgY29uc3QgZGlzY292ZXJ5VXJpID0gKEVkZ2VBdXRoLmdldFVyaShwYXJzZWRUb2tlbikgfHwgU0RLLmRpc2NvdmVyeVVyaS52YWx1ZSkudG9TdHJpbmcoKTtcblxuICAgIFNESy50ZW5hbmN5LnZhbHVlID0gRWRnZUF1dGguZ2V0VGVuYW5jeShwYXJzZWRUb2tlbikgfHwgU0RLLnRlbmFuY3kudmFsdWU7XG4gICAgRGlzY292ZXJ5VXJpLnVyaS52YWx1ZSA9IGRpc2NvdmVyeVVyaTtcbiAgICB0aGlzLl9tZXRyaWNzU2VydmljZSA9IE1ldHJpY3NGYWN0b3J5LmdldE1ldHJpY3NTZXJ2aWNlKGRpc2NvdmVyeVVyaSk7XG4gICAgdGhpcy5fc2Vzc2lvblRlbGVtZXRyeSA9IG5ldyBTZXNzaW9uVGVsZW1ldHJ5KFNESy5wYWdlTG9hZFRpbWUsIHRoaXMuX21ldHJpY3NTZXJ2aWNlKTtcbiAgICB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnB1Ymxpc2hlckRpc3Bvc2FibGVzLmFkZCh0aGlzLl9zZXNzaW9uVGVsZW1ldHJ5KTtcblxuICAgIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQucHVibGlzaGVyRGlzcG9zYWJsZXMuYWRkKFxuICAgICAgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5zdGF0ZS5zdWJzY3JpYmUoc3RhdGUgPT4ge1xuICAgICAgICBpZiAodGhpcy5fcHVibGlzaGVyQ29udGV4dC5jbGVhckZhaWx1cmVDb3VudFRpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fcHVibGlzaGVyQ29udGV4dC5jbGVhckZhaWx1cmVDb3VudFRpbWVvdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9wdWJsaXNoZXJDb250ZXh0LmZhaWx1cmVDb3VudC52YWx1ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZSAhPT0gUHVibGlzaGVyU3RhdGUuUHVibGlzaGluZykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQuY2xlYXJGYWlsdXJlQ291bnRUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQuZmFpbHVyZUNvdW50LnZhbHVlID0gMDtcbiAgICAgICAgfSwgZmFpbHVyZUNvdW50Q2xlYW5VcEludGVydmFsSW5NaWxsaXNlY29uZHMpO1xuICAgICAgfSkpO1xuXG4gICAgY29uc3QgZGVzdHJveVN0cmVhbU9uVW5tb3VudCA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0cmVhbS52YWx1ZSAmJiB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LmVuZFBvaW50LnZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGlnbm9yZWQgPSB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LmVuZFBvaW50LnZhbHVlLmRlc3Ryb3lTdHJlYW0odGhpcy5fcHVibGlzaGVyQ29udGV4dC5zdHJlYW0udmFsdWUsICdjbGllbnQ6dGVybWluYXRpb24tb24td2luZG93LXVubG9hZCcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgZGVzdHJveVN0cmVhbU9uVW5tb3VudCk7XG5cbiAgICB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnB1Ymxpc2hlckRpc3Bvc2FibGVzLmFkZChuZXcgRGlzcG9zYWJsZSgoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgZGVzdHJveVN0cmVhbU9uVW5tb3VudCk7XG4gICAgfSkpO1xuXG4gICAgdGhpcy5zdGFydCgpO1xuICB9XG5cbiAgZ2V0IHRva2VuKCk6IEVkZ2VUb2tlbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Rva2VuQ29udGV4dC50b2tlbi52YWx1ZTtcbiAgfVxuXG4gIHNldCB0b2tlbih0b2tlbjogRWRnZVRva2VuKSB7XG4gICAgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5kaXNwb3NhYmxlcy5kaXNwb3NlKCk7XG5cbiAgICB0aGlzLl90b2tlbkNvbnRleHQudG9rZW4udmFsdWUgPSB0b2tlbjtcbiAgICB0aGlzLl90b2tlbkNvbnRleHQudG9rZW5FeHBpcmluZy52YWx1ZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgcGFyc2VkVG9rZW4gPSBFZGdlQXV0aC5wYXJzZVRva2VuKHRoaXMuX3Rva2VuQ29udGV4dC50b2tlbi52YWx1ZSk7XG4gICAgY29uc3QgZGlzY292ZXJ5VXJpID0gKEVkZ2VBdXRoLmdldFVyaShwYXJzZWRUb2tlbikgfHwgU0RLLmRpc2NvdmVyeVVyaS52YWx1ZSkudG9TdHJpbmcoKTtcblxuICAgIFNESy50ZW5hbmN5LnZhbHVlID0gRWRnZUF1dGguZ2V0VGVuYW5jeShwYXJzZWRUb2tlbikgfHwgU0RLLnRlbmFuY3kudmFsdWU7XG4gICAgRGlzY292ZXJ5VXJpLnVyaS52YWx1ZSA9IGRpc2NvdmVyeVVyaTtcblxuICAgIHRoaXMuX21ldHJpY3NTZXJ2aWNlID0gTWV0cmljc0ZhY3RvcnkuZ2V0TWV0cmljc1NlcnZpY2UoZGlzY292ZXJ5VXJpKTtcblxuICAgIHRoaXMuc3RhcnQoKTtcbiAgfVxuXG4gIGdldCBwZWVyQ29ubmVjdGlvbigpOiBSZWFkT25seVN1YmplY3Q8SVBlZXJDb25uZWN0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRPbmx5UGVlckNvbm5lY3Rpb247XG4gIH1cblxuICBnZXQgc3RhdGUoKTogUmVhZE9ubHlTdWJqZWN0PFB1Ymxpc2hlclN0YXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRPbmx5U3RhdGU7XG4gIH1cblxuICBnZXQgdG9rZW5FeHBpcmluZygpOiBSZWFkT25seVN1YmplY3Q8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLl9yZWFkT25seVRva2VuRXhwaXJpbmc7XG4gIH1cblxuICBnZXQgYXV0aG9yaXplZCgpOiBSZWFkT25seVN1YmplY3Q8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLl9yZWFkT25seUF1dGhvcml6ZWQ7XG4gIH1cblxuICBnZXQgb25saW5lKCk6IFJlYWRPbmx5U3ViamVjdDxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRPbmx5T25saW5lO1xuICB9XG5cbiAgZ2V0IGxvYWRpbmcoKTogUmVhZE9ubHlTdWJqZWN0PGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5fcmVhZE9ubHlMb2FkaW5nO1xuICB9XG5cbiAgZ2V0IHB1Ymxpc2hpbmcoKTogUmVhZE9ubHlTdWJqZWN0PGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5fcmVhZE9ubHlQdWJsaXNoaW5nO1xuICB9XG5cbiAgZ2V0IHN0YW5kYnkoKTogUmVhZE9ubHlTdWJqZWN0PGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5fcmVhZE9ubHlTdGFuZGJ5O1xuICB9XG5cbiAgZ2V0IHN0b3BwZWQoKTogUmVhZE9ubHlTdWJqZWN0PGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5fcmVhZE9ubHlTdG9wcGVkO1xuICB9XG5cbiAgZ2V0IGZhaWx1cmVDb3VudCgpOiBSZWFkT25seVN1YmplY3Q8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRPbmx5RmFpbHVyZUNvdW50O1xuICB9XG5cbiAgZ2V0IGVuZFBvaW50KCk6IFJlYWRPbmx5U3ViamVjdDxFbmRQb2ludD4ge1xuICAgIHJldHVybiB0aGlzLl9yZWFkT25seUVuZFBvaW50O1xuICB9XG5cbiAgZ2V0IHN0cmVhbSgpOiBSZWFkT25seVN1YmplY3Q8SVN0cmVhbT4ge1xuICAgIHJldHVybiB0aGlzLl9yZWFkT25seVN0cmVhbTtcbiAgfVxuXG4gIGdldCBzdHJlYW1JZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0cmVhbUlkO1xuICB9XG5cbiAgZ2V0IHJ0Y1N0YXRpc3RpY3MoKTogUmVhZE9ubHlTdWJqZWN0PElSdGNNb25pdG9yU3RhdGlzdGljPiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRPbmx5UnRjU3RhdGlzdGljcztcbiAgfVxuXG4gIGdldCBtZWRpYVN0cmVhbSgpOiBSZWFkT25seVN1YmplY3Q8TWVkaWFTdHJlYW0+IHtcbiAgICByZXR1cm4gdGhpcy5fcmVhZE9ubHlNZWRpYVN0cmVhbTtcbiAgfVxuXG4gIGFzeW5jIHN0b3AocmVhc29uOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX3N0YXRlQ29udGV4dC5pc1N0YXJ0aW5nLnZhbHVlKSB7XG4gICAgICAgIHRoaXMucHJvY2Vzc1N0b3AocmVhc29uKTtcblxuICAgICAgICByZXNvbHZlKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LmRpc3Bvc2FibGVzLmFkZCh0aGlzLl9zdGF0ZUNvbnRleHQuaXNTdGFydGluZy5zdWJzY3JpYmUoaXNTdGFydGluZyA9PiB7XG4gICAgICAgIGlmICghaXNTdGFydGluZykge1xuICAgICAgICAgIHRoaXMucHJvY2Vzc1N0b3AocmVhc29uKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc1N0b3AocmVhc29uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuVXBSZXNvdXJjZXMocmVhc29uKTtcblxuICAgIGlmICh0aGlzLl9wZWVyQ29ubmVjdGlvbkNvbnRleHQucGVlckNvbm5lY3Rpb24udmFsdWUpIHtcbiAgICAgIHRoaXMuX3BlZXJDb25uZWN0aW9uQ29udGV4dC5wZWVyQ29ubmVjdGlvbi52YWx1ZS5jbG9zZSgpO1xuICAgICAgdGhpcy5fcGVlckNvbm5lY3Rpb25Db250ZXh0LnBlZXJDb25uZWN0aW9uLnZhbHVlID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0YXRlLnZhbHVlID0gUHVibGlzaGVyU3RhdGUuU3RvcHBlZDtcbiAgfVxuXG4gIGFzeW5jIGRpc3Bvc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcCgnY2xpZW50OmNoYW5uZWwtZGlzcG9zZScpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5wdWJsaXNoZXJEaXNwb3NhYmxlcy5kaXNwb3NlKCk7XG4gICAgICB0aGlzLl9zdGF0ZUNvbnRleHQuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBnZXRVcmkodG9rZW4pOiBVUkwge1xuICAgIGNvbnN0IHBhcnNlZFRva2VuID0gRWRnZUF1dGgucGFyc2VUb2tlbih0b2tlbik7XG4gICAgY29uc3QgdXJsID0gRWRnZUF1dGguZ2V0VXJpKHBhcnNlZFRva2VuKTtcblxuICAgIGlmICh1cmwpIHtcbiAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgdGhpcy5fbG9nZ2VyLmluZm8oJ0ZhbGwgYmFjayB0byB0aGUgZGVmYXVsdCBkaXNjb3ZlciBVUkkgWyVzXScsIFNESy5kaXNjb3ZlcnlVcmkudmFsdWUpO1xuXG4gICAgcmV0dXJuIG5ldyBVUkwoU0RLLmRpc2NvdmVyeVVyaS52YWx1ZSk7XG4gIH1cblxuICBhc3luYyBzdGFydCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5fc3RhdGVDb250ZXh0LmlzRGlzcG9zZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2hhbm5lbCB3YXMgYWxyZWFkeSBkaXNwb3NlZCcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zdGF0ZUNvbnRleHQuaXNTdGFydGluZy52YWx1ZSkge1xuICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oJ1B1Ymxpc2hlciBpcyBhbHJlYWR5IHN0YXJ0aW5nLCBza2lwcGluZyBzdGFydCcpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhdGVDb250ZXh0LmlzU3RhcnRpbmcudmFsdWUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzc1N0YXJ0KCk7XG4gIH1cblxuICBzZXRNZWRpYVN0cmVhbShtZWRpYVN0cmVhbTogTWVkaWFTdHJlYW0pIHtcbiAgICB0aGlzLl9wZWVyQ29ubmVjdGlvbkNvbnRleHQubWVkaWFTdHJlYW0udmFsdWUgPSBtZWRpYVN0cmVhbTtcblxuICAgIGlmICh0aGlzLl9wZWVyQ29ubmVjdGlvbkNvbnRleHQucGVlckNvbm5lY3Rpb24udmFsdWUpIHtcbiAgICAgIG1lZGlhU3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2gobWVkaWFUcmFjayA9PiB7XG4gICAgICAgIHRoaXMuX3BlZXJDb25uZWN0aW9uQ29udGV4dC5wZWVyQ29ubmVjdGlvbi52YWx1ZS5nZXRTZW5kZXJzKCkuZm9yRWFjaChzZW5kZXIgPT4ge1xuICAgICAgICAgIGlmIChtZWRpYVRyYWNrLmtpbmQgPT09IHNlbmRlcj8udHJhY2s/LmtpbmQgJiYgbWVkaWFUcmFjay5pZCAhPT0gc2VuZGVyLnRyYWNrLmlkKSB7XG4gICAgICAgICAgICBzZW5kZXIucmVwbGFjZVRyYWNrKG1lZGlhVHJhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHByb2Nlc3NTdGFydCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMuX3Rva2VuQ29udGV4dC50b2tlbi52YWx1ZTtcbiAgICBjb25zdCBsaXN0ZW5PblN0cmVhbVNldHVwID0gdGhpcy5fc2Vzc2lvblRlbGVtZXRyeS5saXN0ZW5PblN0cmVhbVNldHVwKCk7XG5cbiAgICBpZiAoIUVkZ2VBdXRoLmlzVmFsaWRUb2tlbih0b2tlbikpIHtcbiAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcignRmFpbGVkIHRvIHBhcnNlIHRva2VuIFslc10nLCB0b2tlbik7XG4gICAgICB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0YXRlLnZhbHVlID0gUHVibGlzaGVyU3RhdGUuVW5hdXRob3JpemVkO1xuICAgICAgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5hdXRob3JpemVkLnZhbHVlID0gZmFsc2U7XG4gICAgICB0aGlzLl9zdGF0ZUNvbnRleHQuaXNTdGFydGluZy52YWx1ZSA9IGZhbHNlO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jbGVhblVwUmVzb3VyY2VzKCdjbGllbnQ6c3RhcnQnKTtcbiAgICB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0YXRlLnZhbHVlID0gUHVibGlzaGVyU3RhdGUuU3RhcnRpbmc7XG4gICAgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5sb2FkaW5nLnZhbHVlID0gdHJ1ZTtcblxuICAgIGNvbnN0IHVyaSA9IHRoaXMuZ2V0VXJpKHRva2VuKTtcbiAgICBjb25zdCBoYW5kbGVTdHJlYW1GYWlsdXJlQ2FsbGJhY2s6ICgpID0+IFByb21pc2U8dm9pZD4gPSAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSk6IHZvaWQgPT4ge1xuICAgICAgLy8gTmVlZCB0byBzZXQgaXNTdGFydGluZyB0byBmYWxzZSBhbmQgY2FsbCBoYW5kbGVTdHJlYW1GYWlsdXJlIGlmIHN0cmVhbSBtb25pdG9ycyBmb3VuZCBhbiBpc3N1ZVxuICAgICAgdGhpcy5fc3RhdGVDb250ZXh0LmlzU3RhcnRpbmcudmFsdWUgPSBmYWxzZTtcblxuICAgICAgcmV0dXJuIHJlc29sdmUodGhpcy5oYW5kbGVTdHJlYW1GYWlsdXJlKCkpO1xuICAgIH0pO1xuICAgIGNvbnN0IHN0cmVhbVB1Ymxpc2hlciA9IG5ldyBSZWFsVGltZVB1Ymxpc2hlcih0aGlzLl9wdWJsaXNoZXJDb250ZXh0LCB0aGlzLl9wZWVyQ29ubmVjdGlvbkNvbnRleHQsIGhhbmRsZVN0cmVhbUZhaWx1cmVDYWxsYmFjayk7XG5cbiAgICByZXR1cm4gc3RyZWFtUHVibGlzaGVyLnN0YXJ0KFxuICAgICAgdXJpLFxuICAgICAgdG9rZW4sXG4gICAgICBsaXN0ZW5PblN0cmVhbVNldHVwKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LmxvYWRpbmcudmFsdWUgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgIGxpc3Rlbk9uU3RyZWFtU2V0dXAuZmFpbCgpO1xuXG4gICAgICAgIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQuZmFpbHVyZUNvdW50LnZhbHVlKys7XG5cbiAgICAgICAgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5vbmxpbmUudmFsdWUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmNsZWFuVXBSZXNvdXJjZXMoJ2NsaWVudDpjbGVhbnVwLWFmdGVyLWZhaWxlZC1zZXR1cCcpO1xuXG4gICAgICAgIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQuc3RhdGUudmFsdWUgPSBQdWJsaXNoZXJTdGF0ZS5FcnJvcjtcblxuICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoJ0ZhaWxlZCB0byBzdGFydCBwdWJsaXNoaW5nJywgZSk7XG4gICAgICB9KVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICB0aGlzLl9zdGF0ZUNvbnRleHQuaXNTdGFydGluZy52YWx1ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0YXRlLnZhbHVlID09PSBQdWJsaXNoZXJTdGF0ZS5QdWJsaXNoaW5nIHx8ICFTREsuYXV0b21hdGljUmV0cnlPbkZhaWx1cmUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb25zdCBpZ25vcmVkID0gdGhpcy5oYW5kbGVTdHJlYW1GYWlsdXJlKClcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKCdGYWlsZWQgaGFuZGxpbmcgc3RyZWFtIGZhaWx1cmUnLCBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCB0aGlzLmdldFJldHJ5SW50ZXJ2YWwoKSk7XG5cbiAgICAgICAgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5kaXNwb3NhYmxlcy5hZGQobmV3IERpc3Bvc2FibGUoKCkgPT4ge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UmV0cnlJbnRlcnZhbCgpOiBudW1iZXIge1xuICAgIHN3aXRjaCAodGhpcy5fcHVibGlzaGVyQ29udGV4dC5zdGF0ZS52YWx1ZSkge1xuICAgICAgY2FzZSBQdWJsaXNoZXJTdGF0ZS5TdGFuZEJ5OlxuICAgICAgY2FzZSBQdWJsaXNoZXJTdGF0ZS5PZmZsaW5lOlxuICAgICAgICByZXR1cm4gc3RhbmRieVBvbGxpbmdJbnRlcnZhbEluTWlsbGlzZWNvbmRzO1xuICAgICAgY2FzZSBQdWJsaXNoZXJTdGF0ZS5FcnJvcjpcbiAgICAgIGNhc2UgUHVibGlzaGVyU3RhdGUuUmVjb3ZlcmluZzpcbiAgICAgIGNhc2UgUHVibGlzaGVyU3RhdGUuVW5hdXRob3JpemVkOlxuICAgICAgY2FzZSBQdWJsaXNoZXJTdGF0ZS5HZW9SZXN0cmljdGVkOlxuICAgICAgY2FzZSBQdWJsaXNoZXJTdGF0ZS5HZW9CbG9ja2VkOlxuICAgICAgY2FzZSBQdWJsaXNoZXJTdGF0ZS5TdG9wcGVkOlxuICAgICAgY2FzZSBQdWJsaXNoZXJTdGF0ZS5TdGFydGluZzpcbiAgICAgIGNhc2UgUHVibGlzaGVyU3RhdGUuUHVibGlzaGluZzpcbiAgICAgIGNhc2UgUHVibGlzaGVyU3RhdGUuUmVjb25uZWN0aW5nOlxuICAgICAgY2FzZSBQdWJsaXNoZXJTdGF0ZS5VbnN1cHBvcnRlZEZlYXR1cmU6XG4gICAgICAgIC8vIEZpcnN0IGFuZCBzZWNvbmQgYXR0ZW1wdCBmYXN0LCBhZnRlciB0aGF0IGV4cG9uZW50aWFsIHdpdGggYmFja29mZiBpbnRlcnZhbFxuICAgICAgICByZXR1cm4gTWF0aC5taW4obWF4QmFja29mZkludGVydmFsSW5NaWxsaXNlY29uZHMsIE1hdGgucG93KGJhY2tvZmZJbnRlcnZhbEluTWlsbGlzZWNvbmRzLCBNYXRoLm1heCgwLCB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LmZhaWx1cmVDb3VudC52YWx1ZSAtIDEpKSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhc3NlcnRVbnJlYWNoYWJsZSh0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0YXRlLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZVN0cmVhbUZhaWx1cmUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgc3dpdGNoICh0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0YXRlLnZhbHVlKSB7XG4gICAgICBjYXNlIFB1Ymxpc2hlclN0YXRlLkVycm9yOlxuICAgICAgY2FzZSBQdWJsaXNoZXJTdGF0ZS5SZWNvbm5lY3Rpbmc6XG4gICAgICBjYXNlIFB1Ymxpc2hlclN0YXRlLlN0YW5kQnk6XG4gICAgICBjYXNlIFB1Ymxpc2hlclN0YXRlLk9mZmxpbmU6XG4gICAgICBjYXNlIFB1Ymxpc2hlclN0YXRlLlJlY292ZXJpbmc6XG4gICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKCdSZXRyeSBzdGFydCB3aXRoIGluaXRpYWwgc3RhdGUgWyVzXSBbJXNdJywgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5zdGF0ZS52YWx1ZSwgUHVibGlzaGVyU3RhdGVbdGhpcy5fcHVibGlzaGVyQ29udGV4dC5zdGF0ZS52YWx1ZV0pO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQdWJsaXNoZXJTdGF0ZS5VbmF1dGhvcml6ZWQ6XG4gICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKCdQdWJsaXNoZXIgaXMgdW5hdXRob3JpemVkLCBza2lwcGluZyByZXRyeSBvZiBzdGFydC4gUGxlYXNlIHByb3ZpZGUgYSBuZXcgdG9rZW4gYW5kIGludm9rZSBzdGFydCgpJyk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBQdWJsaXNoZXJTdGF0ZS5HZW9SZXN0cmljdGVkOlxuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbygnUHVibGlzaGVyIGlzIGdlbyByZXN0cmljdGVkLCBza2lwcGluZyByZXRyeSBvZiBzdGFydC4gUGxlYXNlIHByb3ZpZGUgYSBuZXcgdG9rZW4gYW5kIGludm9rZSBzdGFydCgpJyk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBQdWJsaXNoZXJTdGF0ZS5HZW9CbG9ja2VkOlxuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbygnUHVibGlzaGVyIGlzIGdlbyBibG9ja2VkLCBza2lwcGluZyByZXRyeSBvZiBzdGFydC4gUGxlYXNlIHByb3ZpZGUgYSBuZXcgdG9rZW4gYW5kIGludm9rZSBzdGFydCgpJyk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBQdWJsaXNoZXJTdGF0ZS5TdG9wcGVkOlxuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbygnUHVibGlzaGVyIGlzIHN0b3BwZWQsIHNraXBwaW5nIHJldHJ5IG9mIHN0YXJ0LicpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgUHVibGlzaGVyU3RhdGUuUHVibGlzaGluZzpcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oJ1B1Ymxpc2hlciBpcyBwdWJsaXNoaW5nLCBza2lwcGluZyByZXRyeSBvZiBzdGFydCcpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgUHVibGlzaGVyU3RhdGUuU3RhcnRpbmc6XG4gICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKCdQdWJsaXNoZXIgaXMgYWxyZWFkeSBzdGFydGluZywgc2tpcHBpbmcgcmV0cnkgb2Ygc3RhcnQnKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIFB1Ymxpc2hlclN0YXRlLlVuc3VwcG9ydGVkRmVhdHVyZTpcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oJ1B1Ymxpc2hlciBpcyBzdG9wcGVkIGR1ZSB0byB1bnN1cHBvcnRlZCBmZWF0dXJlLCBza2lwcGluZyByZXRyeSBvZiBzdGFydC4nKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhc3NlcnRVbnJlYWNoYWJsZSh0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0YXRlLnZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zdGFydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhblVwUmVzb3VyY2VzKHJlYXNvbjogc3RyaW5nID0gZGVmYXVsdFN0cmVhbVRlcm1pbmF0aW9uUmVhc29uKTogdm9pZCB7XG4gICAgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5kaXNwb3NhYmxlcy5kaXNwb3NlKCk7XG5cbiAgICBjb25zdCBwZWVyQ29ubmVjdGlvbiA9IHRoaXMuX3BlZXJDb25uZWN0aW9uQ29udGV4dC5wZWVyQ29ubmVjdGlvbi52YWx1ZTtcblxuICAgIGlmIChwZWVyQ29ubmVjdGlvbikge1xuICAgICAgdGhpcy5fcGVlckNvbm5lY3Rpb25Db250ZXh0LnBlZXJDb25uZWN0aW9uLnZhbHVlID0gbnVsbDtcbiAgICAgIHBlZXJDb25uZWN0aW9uLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5wdWJsaXNoaW5nLnZhbHVlID0gZmFsc2U7XG4gICAgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5zdG9wcGVkLnZhbHVlID0gdHJ1ZTtcbiAgICB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0YW5kYnkudmFsdWUgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0cmVhbS52YWx1ZSAmJiB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LmVuZFBvaW50LnZhbHVlKSB7XG4gICAgICBjb25zdCBpZ25vcmVkID0gdGhpcy5fcHVibGlzaGVyQ29udGV4dC5lbmRQb2ludC52YWx1ZS5kZXN0cm95U3RyZWFtKHRoaXMuX3B1Ymxpc2hlckNvbnRleHQuc3RyZWFtLnZhbHVlLCByZWFzb24pXG4gICAgICAgIC50aGVuKCh7c3RhdHVzfSkgPT4ge1xuICAgICAgICAgIGlmIChzdGF0dXMgIT09ICdvaycpIHtcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci53YXJuKCdbJXNdIEZhaWxlZCB0byBkZXN0cm95IHN0cmVhbSB3aXRoIHJlYXNvbiBbJXNdJywgdGhpcy5zdHJlYW1JZCwgc3RhdHVzKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKCdbJXNdIERlc3Ryb3llZCBzdHJlYW0gd2l0aCByZWFzb24gWyVzXScsIHRoaXMuc3RyZWFtSWQsIHN0YXR1cyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoJ1slc10gRmFpbGVkIHRvIGRlc3Ryb3kgc3RyZWFtJywgdGhpcy5zdHJlYW1JZCwgZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQuc3RyZWFtLnZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LmVuZFBvaW50LnZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl9wZWVyQ29ubmVjdGlvbkNvbnRleHQucGVlckNvbm5lY3Rpb25SZWNvbm5lY3RBdHRlbXB0cyA9IDA7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCBTdWJqZWN0IGZyb20gJy4uLy4uL3J4L1N1YmplY3QnO1xuaW1wb3J0IFB1Ymxpc2hlclN0YXRlIGZyb20gJy4vUHVibGlzaGVyU3RhdGUnO1xuaW1wb3J0IEVuZFBvaW50LCB7SVN0cmVhbX0gZnJvbSAnLi4vZGlzY292ZXJ5L0VuZFBvaW50JztcbmltcG9ydCBhc3NlcnRVbnJlYWNoYWJsZSBmcm9tICcuLi8uLi9sYW5nL2Fzc2VydFVucmVhY2hhYmxlJztcbmltcG9ydCBEaXNwb3NhYmxlTGlzdCBmcm9tICcuLi8uLi9sYW5nL0Rpc3Bvc2FibGVMaXN0JztcbmltcG9ydCB7UHVibGlzaFN0YXR1c30gZnJvbSAnLi4vYXBpL1B1Ymxpc2gnO1xuaW1wb3J0IFN0cmluZ3MgZnJvbSAnLi4vLi4vbGFuZy9TdHJpbmdzJztcbmltcG9ydCB7SVJ0Y1B1Ymxpc2hNb25pdG9yU3RhdGlzdGljLCBJUnRjUHVibGlzaFN0YXRpc3RpY30gZnJvbSAnLi4vLi4vcnRjL1J0Y1B1Ymxpc2hNb25pdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHVibGlzaGVyQ29udGV4dCB7XG4gIHB1Ymxpc2hlckluaXRpYWxpemF0aW9uOiBEYXRlO1xuICBkaXNwb3NhYmxlczogRGlzcG9zYWJsZUxpc3Q7XG4gIHB1Ymxpc2hlckRpc3Bvc2FibGVzOiBEaXNwb3NhYmxlTGlzdDtcbiAgc3RhdGU6IFN1YmplY3Q8UHVibGlzaGVyU3RhdGU+O1xuICBhdXRob3JpemVkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICBvbmxpbmU6IFN1YmplY3Q8Ym9vbGVhbj47XG4gIGxvYWRpbmc6IFN1YmplY3Q8Ym9vbGVhbj47XG4gIHB1Ymxpc2hpbmc6IFN1YmplY3Q8Ym9vbGVhbj47XG4gIHN0YW5kYnk6IFN1YmplY3Q8Ym9vbGVhbj47XG4gIHN0b3BwZWQ6IFN1YmplY3Q8Ym9vbGVhbj47XG4gIGZhaWx1cmVDb3VudDogU3ViamVjdDxudW1iZXI+O1xuICBlbmRQb2ludDogU3ViamVjdDxFbmRQb2ludD47XG4gIHN0cmVhbTogU3ViamVjdDxJU3RyZWFtPjtcbiAgcnRjU3RhdGlzdGljczogU3ViamVjdDxJUnRjUHVibGlzaE1vbml0b3JTdGF0aXN0aWM+O1xuICBjbGVhckZhaWx1cmVDb3VudFRpbWVvdXQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuXG4gIHJ0Y0F1ZGlvU3RhdGlzdGljOiBJUnRjUHVibGlzaFN0YXRpc3RpYztcbiAgcnRjVmlkZW9TdGF0aXN0aWM6IElSdGNQdWJsaXNoU3RhdGlzdGljO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWU/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmRpc3Bvc2FibGVzID0gbmV3IERpc3Bvc2FibGVMaXN0KCk7XG4gICAgdGhpcy5wdWJsaXNoZXJEaXNwb3NhYmxlcyA9IG5ldyBEaXNwb3NhYmxlTGlzdCgpO1xuICAgIHRoaXMucHVibGlzaGVySW5pdGlhbGl6YXRpb24gPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMuc3RhdGUgPSBuZXcgU3ViamVjdDxQdWJsaXNoZXJTdGF0ZT4oUHVibGlzaGVyU3RhdGUuU3RhcnRpbmcpO1xuICAgIHRoaXMuYXV0aG9yaXplZCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KHRydWUpO1xuICAgIHRoaXMub25saW5lID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4odHJ1ZSk7XG4gICAgdGhpcy5sb2FkaW5nID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIHRoaXMucHVibGlzaGluZyA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgICB0aGlzLnN0YW5kYnkgPSBuZXcgU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gICAgdGhpcy5zdG9wcGVkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIHRoaXMuZmFpbHVyZUNvdW50ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigwKTtcbiAgICB0aGlzLmVuZFBvaW50ID0gbmV3IFN1YmplY3Q8RW5kUG9pbnQ+KG51bGwpO1xuICAgIHRoaXMuc3RyZWFtID0gbmV3IFN1YmplY3Q8SVN0cmVhbT4obnVsbCk7XG4gICAgdGhpcy5ydGNTdGF0aXN0aWNzID0gbmV3IFN1YmplY3Q8SVJ0Y1B1Ymxpc2hNb25pdG9yU3RhdGlzdGljPihudWxsKTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lICYmIG5hbWUubGVuZ3RoID8gbmFtZSA6IHRoaXMuZ2VuZXJhdGVTY3JlZW5OYW1lKCk7XG4gIH1cblxuICBnZXQgc3RyZWFtSWQoKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdHJlYW0gPSB0aGlzLnN0cmVhbS52YWx1ZTtcblxuICAgIGlmICghc3RyZWFtKSB7XG4gICAgICByZXR1cm4gJy0nO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJlYW0uc3RyZWFtSWQ7XG4gIH1cblxuICBhcHBseVN0YXR1cyhzdGF0dXM6IFB1Ymxpc2hTdGF0dXMpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgY2FzZSAnb2snOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3VuYXV0aG9yaXplZCc6XG4gICAgICBjYXNlICdnZW8tcmVzdHJpY3RlZCc6XG4gICAgICBjYXNlICdnZW8tYmxvY2tlZCc6XG4gICAgICAgIHRoaXMuYXV0aG9yaXplZC52YWx1ZSA9IGZhbHNlO1xuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZmFsbHRocm91Z2hcbiAgICAgIGNhc2UgJ25vLXN0cmVhbSc6XG4gICAgICBjYXNlICdub3QtZm91bmQnOlxuICAgICAgICB0aGlzLmZhaWx1cmVDb3VudC52YWx1ZSA9IDA7XG4gICAgICAgIHRoaXMucHVibGlzaGluZy52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YW5kYnkudmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0b3BwZWQudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdHJlYW0udmFsdWUgPSBudWxsO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuZmFpbHVyZUNvdW50LnZhbHVlKys7XG4gICAgICAgIHRoaXMucHVibGlzaGluZy52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YW5kYnkudmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0b3BwZWQudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdHJlYW0udmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlLnZhbHVlID0gUHVibGlzaGVyU3RhdGUuRXJyb3I7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIG1hcFB1Ymxpc2hTdGF0dXNUb1B1Ymxpc2hlclN0YXR1cyhzdGF0dXM6IFB1Ymxpc2hTdGF0dXMpOiBQdWJsaXNoZXJTdGF0ZSB7XG4gICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgIGNhc2UgJ29rJzpcbiAgICAgICAgcmV0dXJuIFB1Ymxpc2hlclN0YXRlLlN0YXJ0aW5nO1xuICAgICAgY2FzZSAnbm8tc3RyZWFtJzpcbiAgICAgIGNhc2UgJ25vdC1mb3VuZCc6XG4gICAgICAgIHJldHVybiBQdWJsaXNoZXJTdGF0ZS5TdGFuZEJ5O1xuICAgICAgY2FzZSAnZ2VvLXJlc3RyaWN0ZWQnOlxuICAgICAgICByZXR1cm4gUHVibGlzaGVyU3RhdGUuR2VvUmVzdHJpY3RlZDtcbiAgICAgIGNhc2UgJ2dlby1ibG9ja2VkJzpcbiAgICAgICAgcmV0dXJuIFB1Ymxpc2hlclN0YXRlLkdlb0Jsb2NrZWQ7XG4gICAgICBjYXNlICd1bmF1dGhvcml6ZWQnOlxuICAgICAgICByZXR1cm4gUHVibGlzaGVyU3RhdGUuVW5hdXRob3JpemVkO1xuICAgICAgY2FzZSAnY2FwYWNpdHknOlxuICAgICAgY2FzZSAncmF0ZS1saW1pdGVkJzpcbiAgICAgIGNhc2UgJ3RpbWVvdXQnOlxuICAgICAgICByZXR1cm4gUHVibGlzaGVyU3RhdGUuUmVjb3ZlcmluZztcbiAgICAgIGNhc2UgJ2ZhaWxlZCc6XG4gICAgICAgIHJldHVybiBQdWJsaXNoZXJTdGF0ZS5FcnJvcjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFzc2VydFVucmVhY2hhYmxlKHN0YXR1cyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZVNjcmVlbk5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gU3RyaW5ncy5yYW5kb20oMTIpO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5lbnVtIFB1Ymxpc2hlclN0YXRlIHtcbiAgT2ZmbGluZSA9IDEsXG4gIFN0YXJ0aW5nLFxuICBQdWJsaXNoaW5nLFxuICBSZWNvdmVyaW5nLFxuICBSZWNvbm5lY3RpbmcsXG4gIFN0YW5kQnksXG4gIFN0b3BwZWQsXG4gIFVuYXV0aG9yaXplZCxcbiAgR2VvUmVzdHJpY3RlZCxcbiAgR2VvQmxvY2tlZCxcbiAgVW5zdXBwb3J0ZWRGZWF0dXJlLFxuICBFcnJvclxufVxuXG5leHBvcnQgZGVmYXVsdCBQdWJsaXNoZXJTdGF0ZTsiLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IFNESyBmcm9tICcuLi9TREsnO1xuaW1wb3J0IHtFZGdlVG9rZW59IGZyb20gJy4uL2VkZ2VBdXRoL0VkZ2VUb2tlbic7XG5pbXBvcnQgUHVibGlzaGVyIGZyb20gJy4vUHVibGlzaGVyJztcblxudHlwZSBDcmVhdGVQdWJsaXNoZXJPcHRpb25zID0ge1xuICBtZWRpYVN0cmVhbTogTWVkaWFTdHJlYW07XG4gIHRva2VuOiBFZGdlVG9rZW47XG4gIG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1Ymxpc2hlcnMge1xuICBzdGF0aWMgY3JlYXRlUHVibGlzaGVyKG9wdGlvbnM6IENyZWF0ZVB1Ymxpc2hlck9wdGlvbnMpOiBQdWJsaXNoZXIge1xuICAgIGlmICghU0RLLmluaXRpYWxpemVkLnZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NESyBpcyBub3QgbG9hZGVkLicpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHVibGlzaGVyKG9wdGlvbnMubWVkaWFTdHJlYW0sIG9wdGlvbnMudG9rZW4sIG9wdGlvbnMubmFtZSk7XG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUHVibGlzaGVycyBpcyBhIHN0YXRpYyBjbGFzcyB0aGF0IG1heSBub3QgYmUgaW5zdGFudGlhdGVkJyk7XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCBJUGVlckNvbm5lY3Rpb24gZnJvbSAnLi4vLi4vcnRjL0lQZWVyQ29ubmVjdGlvbic7XG5pbXBvcnQgU0RLIGZyb20gJy4uL1NESyc7XG5pbXBvcnQgRW5kUG9pbnQsIHtTZXRSZW1vdGVEZXNjcmlwdGlvblN0YXR1c30gZnJvbSAnLi4vZGlzY292ZXJ5L0VuZFBvaW50JztcbmltcG9ydCBQZWVyQ29ubmVjdGlvblNlcnZpY2UsIHtJUGVlckNvbm5lY3Rpb25PZmZlckluaXR9IGZyb20gJy4uLy4uL3J0Yy9QZWVyQ29ubmVjdGlvblNlcnZpY2UnO1xuaW1wb3J0IERpc2NvdmVyeSBmcm9tICcuLi9kaXNjb3ZlcnkvRGlzY292ZXJ5JztcbmltcG9ydCBGZWF0dXJlRW5hYmxlbWVudCBmcm9tICcuLi9mZWF0dXJlL0ZlYXR1cmVFbmFibGVtZW50JztcbmltcG9ydCBQdWJsaXNoZXJTdGF0ZSBmcm9tICcuL1B1Ymxpc2hlclN0YXRlJztcbmltcG9ydCBhc3NlcnRVbnJlYWNoYWJsZSBmcm9tICcuLi8uLi9sYW5nL2Fzc2VydFVucmVhY2hhYmxlJztcbmltcG9ydCB7SUxvZ2dlcn0gZnJvbSAnLi4vLi4vbG9nZ2VyL0xvZ2dlckludGVyZmFjZSc7XG5pbXBvcnQgTG9nZ2VyRmFjdG9yeSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyRmFjdG9yeSc7XG5pbXBvcnQgUHVibGlzaGVyQ29udGV4dCBmcm9tICcuL1B1Ymxpc2hlckNvbnRleHQnO1xuaW1wb3J0IFBlZXJDb25uZWN0aW9uQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L1BlZXJDb25uZWN0aW9uQ29udGV4dCc7XG5pbXBvcnQgUnRjUHVibGlzaE1vbml0b3IgZnJvbSAnLi4vLi4vcnRjL1J0Y1B1Ymxpc2hNb25pdG9yJztcbmltcG9ydCBEdXJhdGlvbnMgZnJvbSAnLi4vLi4vdGltZS9EdXJhdGlvbic7XG5pbXBvcnQgUnRjQ29uZmlndXJhdGlvbk1hbmFnZXIgZnJvbSAnLi4vLi4vcnRjL1J0Y0NvbmZpZ3VyYXRpb25NYW5hZ2VyJztcblxuY29uc3QgaWNlQ2FuZGlkYXRlQWNjdW11bGF0aW9uSW50ZXJ2YWwgPSAxMDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWxUaW1lUHVibGlzaGVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfbG9nZ2VyOiBJTG9nZ2VyID0gTG9nZ2VyRmFjdG9yeS5nZXRMb2dnZXIoJ1JlYWxUaW1lUHVibGlzaGVyJyk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3B1Ymxpc2hlckNvbnRleHQ6IFB1Ymxpc2hlckNvbnRleHQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3BlZXJDb25uZWN0aW9uQ29udGV4dDogUGVlckNvbm5lY3Rpb25Db250ZXh0O1xuICBwcml2YXRlIHJlYWRvbmx5IF9oYW5kbGVTdHJlYW1GYWlsdXJlOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuXG4gIGNvbnN0cnVjdG9yKHB1Ymxpc2hlckNvbnRleHQ6IFB1Ymxpc2hlckNvbnRleHQsIHBlZXJDb25uZWN0aW9uQ29udGV4dDogUGVlckNvbm5lY3Rpb25Db250ZXh0LCBoYW5kbGVTdHJlYW1GYWlsdXJlOiAoKSA9PiBQcm9taXNlPHZvaWQ+KSB7XG4gICAgdGhpcy5fcHVibGlzaGVyQ29udGV4dCA9IHB1Ymxpc2hlckNvbnRleHQ7XG4gICAgdGhpcy5fcGVlckNvbm5lY3Rpb25Db250ZXh0ID0gcGVlckNvbm5lY3Rpb25Db250ZXh0O1xuICAgIHRoaXMuX2hhbmRsZVN0cmVhbUZhaWx1cmUgPSBoYW5kbGVTdHJlYW1GYWlsdXJlO1xuICB9XG5cbiAgc3RhcnQodXJpLCB0b2tlbiwgbGlzdGVuT25TdHJlYW1TZXR1cCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBQcm9taXNlLmFsbDxFbmRQb2ludCwgSVBlZXJDb25uZWN0aW9uT2ZmZXJJbml0PihbXG4gICAgICBEaXNjb3ZlcnkuZGlzY292ZXJDbG9zZXN0RW5kUG9pbnRXaXRoQ2FjaGluZyh1cmkpLFxuICAgICAgUGVlckNvbm5lY3Rpb25TZXJ2aWNlLmNyZWF0ZVBlZXJDb25uZWN0aW9uT2ZmZXIoJ3NlbmRvbmx5JylcbiAgICBdKVxuICAgICAgLnRoZW4oKFtlbmRQb2ludCwge2xvY2FsT2ZmZXIsIHBlZXJDb25uZWN0aW9ufV0pID0+IHtcbiAgICAgICAgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5vbmxpbmUudmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LmVuZFBvaW50LnZhbHVlID0gZW5kUG9pbnQ7XG4gICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKCdDb25uZWN0aW5nIHRvIFslc10nLCBlbmRQb2ludC50b1N0cmluZygpKTtcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oJ0xvY2FsIG9mZmVyOlxcbicgKyBsb2NhbE9mZmVyLnNkcCk7XG5cbiAgICAgICAgaWYgKEZlYXR1cmVFbmFibGVtZW50LmNsaWVudE9mZmVyRGlzYWJsZWQgfHwgIXBlZXJDb25uZWN0aW9uLnN1cHBvcnRzU2V0Q29uZmlndXJhdGlvbiB8fCAhcGVlckNvbm5lY3Rpb24uc3VwcG9ydHNHZXRDb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgcGVlckNvbm5lY3Rpb24uY2xvc2UoKTtcbiAgICAgICAgICBwZWVyQ29ubmVjdGlvbiA9IG51bGw7XG4gICAgICAgICAgbG9jYWxPZmZlciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9wZWVyQ29ubmVjdGlvbkNvbnRleHQucGVlckNvbm5lY3Rpb24udmFsdWUgPSBwZWVyQ29ubmVjdGlvbjtcblxuICAgICAgICByZXR1cm4gZW5kUG9pbnQucHVibGlzaCh0aGlzLl9wdWJsaXNoZXJDb250ZXh0Lm5hbWUsIHRva2VuLCBsb2NhbE9mZmVyLCB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LmZhaWx1cmVDb3VudC52YWx1ZSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHtzdGF0dXMsIHN0cmVhbSwgcnRjQ29uZmlndXJhdGlvbiwgc2V0UmVtb3RlRGVzY3JpcHRpb25SZXNwb25zZSwgY3JlYXRlT2ZmZXJEZXNjcmlwdGlvblJlc3BvbnNlLCBjcmVhdGVBbnN3ZXJEZXNjcmlwdGlvblJlc3BvbnNlfSkgPT4ge1xuICAgICAgICB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0cmVhbS52YWx1ZSA9IHN0cmVhbTtcblxuICAgICAgICB0aGlzLl9sb2dnZXIuZGVidWcoXG4gICAgICAgICAgJ1slc10gUHVibGlzaCBjb21wbGV0ZWQgWyVzXSBbJWpdIFslal0gWyVqXSBbJWpdJyxcbiAgICAgICAgICB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0cmVhbUlkLFxuICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICBydGNDb25maWd1cmF0aW9uLFxuICAgICAgICAgIHNldFJlbW90ZURlc2NyaXB0aW9uUmVzcG9uc2UsXG4gICAgICAgICAgY3JlYXRlT2ZmZXJEZXNjcmlwdGlvblJlc3BvbnNlLFxuICAgICAgICAgIGNyZWF0ZUFuc3dlckRlc2NyaXB0aW9uUmVzcG9uc2VcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0YXRlLnZhbHVlID0gdGhpcy5fcHVibGlzaGVyQ29udGV4dC5tYXBQdWJsaXNoU3RhdHVzVG9QdWJsaXNoZXJTdGF0dXMoc3RhdHVzKTtcblxuICAgICAgICB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LmFwcGx5U3RhdHVzKHN0YXR1cyk7XG5cbiAgICAgICAgaWYgKHN0YXR1cyAhPT0gJ29rJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmFwcGx5UnRjQ29uZmlndXJhdGlvbih0aGlzLl9wZWVyQ29ubmVjdGlvbkNvbnRleHQucGVlckNvbm5lY3Rpb24udmFsdWUsIHJ0Y0NvbmZpZ3VyYXRpb24pXG4gICAgICAgICAgLnRoZW4ocGVlckNvbm5lY3Rpb24gPT4ge1xuICAgICAgICAgICAgbGV0IHN1Ym1pdENhbmRpZGF0ZXNUaW1lb3V0O1xuICAgICAgICAgICAgbGV0IGNhbmNlbERpc2NvdmVyeSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGRpc2NvdmVyeUNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgY2FuZGlkYXRlczogUlRDSWNlQ2FuZGlkYXRlW10gPSBbXTtcblxuICAgICAgICAgICAgdGhpcy5fcGVlckNvbm5lY3Rpb25Db250ZXh0LnBlZXJDb25uZWN0aW9uLnZhbHVlID0gcGVlckNvbm5lY3Rpb247XG5cbiAgICAgICAgICAgIHBlZXJDb25uZWN0aW9uLmFkZFN0cmVhbSh0aGlzLl9wZWVyQ29ubmVjdGlvbkNvbnRleHQubWVkaWFTdHJlYW0udmFsdWUpO1xuXG4gICAgICAgICAgICBwZWVyQ29ubmVjdGlvbi5vbmljZWNhbmRpZGF0ZSA9IChlKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0cmVhbS52YWx1ZSAhPT0gc3RyZWFtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuX3BlZXJDb25uZWN0aW9uQ29udGV4dC5wZWVyQ29ubmVjdGlvbi52YWx1ZSAhPT0gcGVlckNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoY2FuY2VsRGlzY292ZXJ5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFTREsuc2VuZExvY2FsQ2FuZGlkYXRlcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChlLmNhbmRpZGF0ZSAmJiBlLmNhbmRpZGF0ZS5jYW5kaWRhdGUpIHtcbiAgICAgICAgICAgICAgICBjYW5kaWRhdGVzLnB1c2goZS5jYW5kaWRhdGUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpc2NvdmVyeUNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIXN1Ym1pdENhbmRpZGF0ZXNUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgc3VibWl0Q2FuZGlkYXRlc1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0cmVhbS52YWx1ZSAhPT0gc3RyZWFtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKGNhbmNlbERpc2NvdmVyeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IGlnbm9yZWQgPSB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LmVuZFBvaW50LnZhbHVlLmFkZEljZUNhbmRpZGF0ZXMoc3RyZWFtLCBjYW5kaWRhdGVzLCBkaXNjb3ZlcnlDb21wbGV0ZWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7c3RhdHVzLCBvcHRpb25zfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgIT09ICdvaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci53YXJuKCdbJXNdIEZhaWxlZCB0byBhZGQgSUNFIGNhbmRpZGF0ZXMgd2l0aCByZWFzb24gWyVzXScsIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQuc3RyZWFtSWQsIHN0YXR1cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5pbmNsdWRlcygnY2FuY2VsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbERpc2NvdmVyeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oJ1slc10gQWRkZWQgSUNFIGNhbmRpZGF0ZXMgd2l0aCByZWFzb24gWyVzXSBhbmQgb3B0aW9ucyBbJXNdJywgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5zdHJlYW1JZCwgc3RhdHVzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcignWyVzXSBGYWlsZWQgdG8gYWRkIElDRSBjYW5kaWRhdGVzJywgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5zdHJlYW1JZCwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIGljZUNhbmRpZGF0ZUFjY3VtdWxhdGlvbkludGVydmFsKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcGVlckNvbm5lY3Rpb24ub25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0cmVhbS52YWx1ZSAhPT0gc3RyZWFtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuX3BlZXJDb25uZWN0aW9uQ29udGV4dC5wZWVyQ29ubmVjdGlvbi52YWx1ZSAhPT0gcGVlckNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zdCByZXRyeUNhbGxiYWNrID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIHdlIHN0b3Agbm9ybWFsbHkgdGhlIHBlZXIgY29ubmVjdGlvbiBpcyB1bnJlZ2lzdGVyZWQgZmlyc3QuXG4gICAgICAgICAgICAgICAgLy8gVGh1cyBhbnl0aW1lIHdlIHNlZSBhIGNsb3NlZCBwZWVyIGNvbm5lY3Rpb24gdGhhdCBpcyBzdGlsbCB2YWxpZCwgaXQgaXMgYW4gZXJyb3IuXG4gICAgICAgICAgICAgICAgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5zdGF0ZS52YWx1ZSA9IFB1Ymxpc2hlclN0YXRlLkVycm9yO1xuICAgICAgICAgICAgICAgIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQucHVibGlzaGluZy52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQubG9hZGluZy52YWx1ZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpZ25vcmVkID0gdGhpcy5faGFuZGxlU3RyZWFtRmFpbHVyZSgpXG4gICAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAnWyVzXSBGYWlsZWQgaGFuZGxpbmcgc3RyZWFtIGZhaWx1cmUgYWZ0ZXIgcGVlciBjb25uZWN0aW9uIHN0b3BwZWQgd2l0aCBzdGF0ZSBbJXNdJyxcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0cmVhbUlkLFxuICAgICAgICAgICAgICAgICAgICAgIHBlZXJDb25uZWN0aW9uLmljZUNvbm5lY3Rpb25TdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICBlXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBzd2l0Y2ggKHBlZXJDb25uZWN0aW9uLmljZUNvbm5lY3Rpb25TdGF0ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNraW5nJzpcbiAgICAgICAgICAgICAgICBjYXNlICdjb21wbGV0ZWQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2Nvbm5lY3RlZCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnbmV3JzpcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2Rpc2Nvbm5lY3RlZCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnZmFpbGVkJzpcbiAgICAgICAgICAgICAgICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKCdbJXNdIElDRSBjb25uZWN0aW9uIHN0YXRlIGNoYW5nZWQgdG8gWyVzXSwgdHJ5aW5nIHRvIHJlY29ubmVjdCcsIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQuc3RyZWFtSWQsIHBlZXJDb25uZWN0aW9uLmljZUNvbm5lY3Rpb25TdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb25uZWN0UGVlckNvbm5lY3Rpb24ocGVlckNvbm5lY3Rpb24sIHJldHJ5Q2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgY2FzZSAnY2xvc2VkJzpcbiAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKCdbJXNdIElDRSBjb25uZWN0aW9uIHN0YXRlIGNoYW5nZWQgdG8gWyVzXSwgcmV0cnlpbmcgdG8gY29ubmVjdCcsIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQuc3RyZWFtSWQsIHBlZXJDb25uZWN0aW9uLmljZUNvbm5lY3Rpb25TdGF0ZSk7XG4gICAgICAgICAgICAgICAgICByZXRyeUNhbGxiYWNrKCk7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgYXNzZXJ0VW5yZWFjaGFibGUocGVlckNvbm5lY3Rpb24uaWNlQ29ubmVjdGlvblN0YXRlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFzZXRSZW1vdGVEZXNjcmlwdGlvblJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oJ1slc10gU2V0IGxvY2FsIFNEUCBvZmZlciBbJXNdJywgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5zdHJlYW1JZCwgc2V0UmVtb3RlRGVzY3JpcHRpb25SZXNwb25zZS5zZXNzaW9uRGVzY3JpcHRpb24uc2RwKTtcblxuICAgICAgICAgICAgICByZXR1cm4gcGVlckNvbm5lY3Rpb24uc2V0TG9jYWxEZXNjcmlwdGlvbihzZXRSZW1vdGVEZXNjcmlwdGlvblJlc3BvbnNlLnNlc3Npb25EZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbygnWyVzXSBGYWlsZWQgdG8gc2V0IGxvY2FsIGRlc2NyaXB0aW9uIFslal0gd2l0aCBtZXNzYWdlIFslc10nLCB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0cmVhbUlkLCBzZXRSZW1vdGVEZXNjcmlwdGlvblJlc3BvbnNlLnNlc3Npb25EZXNjcmlwdGlvbiwgZS5tZXNzYWdlKTtcblxuICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWNyZWF0ZUFuc3dlckRlc2NyaXB0aW9uUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbygnWyVzXSBTZXQgcmVtb3RlIFNEUCBhbnN3ZXIgWyVzXScsIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQuc3RyZWFtSWQsIGNyZWF0ZUFuc3dlckRlc2NyaXB0aW9uUmVzcG9uc2Uuc2Vzc2lvbkRlc2NyaXB0aW9uLnNkcCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHBlZXJDb25uZWN0aW9uLnNldFJlbW90ZURlc2NyaXB0aW9uKGNyZWF0ZUFuc3dlckRlc2NyaXB0aW9uUmVzcG9uc2Uuc2Vzc2lvbkRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKCdbJXNdIEZhaWxlZCB0byBzZXQgcmVtb3RlIGRlc2NyaXB0aW9uIFslal0gd2l0aCBtZXNzYWdlIFslc10nLCB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0cmVhbUlkLCBjcmVhdGVBbnN3ZXJEZXNjcmlwdGlvblJlc3BvbnNlLnNlc3Npb25EZXNjcmlwdGlvbiwgZS5tZXNzYWdlKTtcblxuICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWNyZWF0ZU9mZmVyRGVzY3JpcHRpb25SZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKCdbJXNdIFNldCByZW1vdGUgU0RQIG9mZmVyIFslc10nLCB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0cmVhbUlkLCBjcmVhdGVPZmZlckRlc2NyaXB0aW9uUmVzcG9uc2Uuc2Vzc2lvbkRlc2NyaXB0aW9uLnNkcCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHBlZXJDb25uZWN0aW9uLnNldFJlbW90ZURlc2NyaXB0aW9uKGNyZWF0ZU9mZmVyRGVzY3JpcHRpb25SZXNwb25zZS5zZXNzaW9uRGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oJ1slc10gRmFpbGVkIHRvIHNldCByZW1vdGUgZGVzY3JpcHRpb24gWyVqXSB3aXRoIG1lc3NhZ2UgWyVzXScsIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQuc3RyZWFtSWQsIGNyZWF0ZUFuc3dlckRlc2NyaXB0aW9uUmVzcG9uc2Uuc2Vzc2lvbkRlc2NyaXB0aW9uLCBlLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHBlZXJDb25uZWN0aW9uLmNyZWF0ZUFuc3dlcih7XG4gICAgICAgICAgICAgICAgICAgIG9mZmVyVG9SZWNlaXZlQXVkaW86IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBvZmZlclRvUmVjZWl2ZVZpZGVvOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbihhbnN3ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oJ1slc10gU2V0IGxvY2FsIFNEUCBhbnN3ZXIgWyVzXScsIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQuc3RyZWFtSWQsIGFuc3dlci5zZHApO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcHVibGlzaGVyQ29udGV4dC5lbmRQb2ludC52YWx1ZS5zZXRSZW1vdGVEZXNjcmlwdGlvbihzdHJlYW0sIGFuc3dlcik7XG4gICAgICAgICAgICAgICAgfSkudGhlbigoe3N0YXR1cywgc2Vzc2lvbkRlc2NyaXB0aW9ufSkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5zdGF0ZS52YWx1ZSA9IHRoaXMubWFwU2V0UmVtb3RlRGVzY3JpcHRpb25TdGF0dXNUb1B1Ymxpc2hlclN0YXR1cyhzdGF0dXMpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzICE9PSAnb2snKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQucHVibGlzaGluZy52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0YW5kYnkudmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0b3BwZWQudmFsdWUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKCdbJXNdIFNldCBsb2NhbCBTRFAgWyVzXScsIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQuc3RyZWFtSWQsIHNlc3Npb25EZXNjcmlwdGlvbi5zZHApO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcGVlckNvbm5lY3Rpb24uc2V0TG9jYWxEZXNjcmlwdGlvbihzZXNzaW9uRGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbygnWyVzXSBGYWlsZWQgdG8gc2V0IGxvY2FsIGRlc2NyaXB0aW9uIFslal0gd2l0aCBtZXNzYWdlIFslc10nLCB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnN0cmVhbUlkLCBzZXNzaW9uRGVzY3JpcHRpb24sIGUubWVzc2FnZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBsaXN0ZW5PblN0cmVhbVNldHVwLnN1Y2Nlc3ModGhpcy5fcHVibGlzaGVyQ29udGV4dC5zdHJlYW1JZCk7XG5cbiAgICAgICAgICAgICAgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5zdGF0ZS52YWx1ZSA9IFB1Ymxpc2hlclN0YXRlLlB1Ymxpc2hpbmc7XG4gICAgICAgICAgICAgIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQucHVibGlzaGluZy52YWx1ZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgY29uc3QgcnRjUHVibGlzaE1vbml0b3IgPSBuZXcgUnRjUHVibGlzaE1vbml0b3IocGVlckNvbm5lY3Rpb24sIHRoaXMuX3BlZXJDb25uZWN0aW9uQ29udGV4dC5tZWRpYVN0cmVhbS52YWx1ZSwgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5lbmRQb2ludC52YWx1ZS5yb3VuZFRyaXBUaW1lIC8gNCk7XG4gICAgICAgICAgICAgIGNvbnN0IGlnbm9yZWQgPSBydGNQdWJsaXNoTW9uaXRvci5ydGNTdGF0aXN0aWMuc3Vic2NyaWJlKHN0YXRpc3RpY3MgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQucnRjU3RhdGlzdGljcy52YWx1ZSA9IHN0YXRpc3RpY3M7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3B1Ymxpc2hlckNvbnRleHQucnRjVmlkZW9TdGF0aXN0aWMgJiYgIXRoaXMuX3B1Ymxpc2hlckNvbnRleHQucnRjQXVkaW9TdGF0aXN0aWMpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQucnRjQXVkaW9TdGF0aXN0aWMgPSBzdGF0aXN0aWNzLmF1ZGlvO1xuICAgICAgICAgICAgICAgICAgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5ydGNWaWRlb1N0YXRpc3RpYyA9IHN0YXRpc3RpY3MudmlkZW87XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgYXVkaW9UcmFja0ZhaWxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCB2aWRlb1RyYWNrRmFpbGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3RhdGlzdGljcy5hdWRpbykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3B1Ymxpc2hlckNvbnRleHQucnRjQXVkaW9TdGF0aXN0aWMgJiYgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5ydGNBdWRpb1N0YXRpc3RpYy50aW1lc3RhbXAgIT09IHN0YXRpc3RpY3MuYXVkaW8udGltZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvVHJhY2tGYWlsZWQgPSB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnJ0Y0F1ZGlvU3RhdGlzdGljICYmIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQucnRjQXVkaW9TdGF0aXN0aWMuYnl0ZXNTZW50ID09PSBzdGF0aXN0aWNzLmF1ZGlvLmJ5dGVzU2VudDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYXVkaW9UcmFja0ZhaWxlZCAmJiBuYXZpZ2F0b3Iub25MaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXG4gICAgICAgICAgICAgICAgICAgICAgICAnWyVzXSBBdWRpbyB0cmFjayBmYWlsZWQgd2l0aCBsYXN0IGJ5dGVzU2VudCBbJXNdIGlzIGVxdWFsIHRvIHByZXZpb3VzIGJ5dGVzU2VudCBbJXNdIHdpdGhpbiBbJXNdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQuc3RyZWFtSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aXN0aWNzLmF1ZGlvLmJ5dGVzU2VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQucnRjQXVkaW9TdGF0aXN0aWMuYnl0ZXNTZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IER1cmF0aW9ucyhzdGF0aXN0aWNzLmF1ZGlvLnRpbWVzdGFtcCAtIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQucnRjQXVkaW9TdGF0aXN0aWMudGltZXN0YW1wKS50b0lzb1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQucnRjQXVkaW9TdGF0aXN0aWMgPSBzdGF0aXN0aWNzLmF1ZGlvO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzdGF0aXN0aWNzLnZpZGVvKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5fcHVibGlzaGVyQ29udGV4dC5ydGNWaWRlb1N0YXRpc3RpYyAmJiB0aGlzLl9wdWJsaXNoZXJDb250ZXh0LnJ0Y1ZpZGVvU3RhdGlzdGljLnRpbWVzdGFtcCAhPT0gc3RhdGlzdGljcy52aWRlby50aW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgICAgICAgdmlkZW9UcmFja0ZhaWxlZCA9IHRoaXMuX3B1Ymxpc2hlckNvbnRleHQucnRjVmlkZW9TdGF0aXN0aWMgJiYgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5ydGNWaWRlb1N0YXRpc3RpYy5ieXRlc1NlbnQgPT09IHN0YXRpc3RpY3MudmlkZW8uYnl0ZXNTZW50O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh2aWRlb1RyYWNrRmFpbGVkICYmIG5hdmlnYXRvci5vbkxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcbiAgICAgICAgICAgICAgICAgICAgICAgICdbJXNdIFZpZGVvIHRyYWNrIGZhaWxlZCB3aXRoIGxhc3QgYnl0ZXNTZW50IFslc10gaXMgZXF1YWwgdG8gcHJldmlvdXMgYnl0ZXNTZW50IFslc10gd2l0aGluIFslc10nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5zdHJlYW1JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpc3RpY3MudmlkZW8uYnl0ZXNTZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5ydGNWaWRlb1N0YXRpc3RpYy5ieXRlc1NlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRHVyYXRpb25zKHN0YXRpc3RpY3MudmlkZW8udGltZXN0YW1wIC0gdGhpcy5fcHVibGlzaGVyQ29udGV4dC5ydGNWaWRlb1N0YXRpc3RpYy50aW1lc3RhbXApLnRvSXNvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5ydGNWaWRlb1N0YXRpc3RpYyA9IHN0YXRpc3RpY3MudmlkZW87XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCh2aWRlb1RyYWNrRmFpbGVkIHx8IGF1ZGlvVHJhY2tGYWlsZWQpICYmIG5hdmlnYXRvci5vbkxpbmUpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJldHJ5Q2FsbGJhY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3B1Ymxpc2hlckNvbnRleHQuc3RhdGUudmFsdWUgPSBQdWJsaXNoZXJTdGF0ZS5FcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5sb2FkaW5nLnZhbHVlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBydGNQdWJsaXNoTW9uaXRvci5kaXNwb3NlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWdub3JlZCA9IHRoaXMuX2hhbmRsZVN0cmVhbUZhaWx1cmUoKVxuICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ1slc10gRmFpbGVkIGhhbmRsaW5nIHN0cmVhbSBmYWlsdXJlIGFmdGVyIHRyYWNrIHN0b3BwZWQgd2l0aCBzdGF0ZSBbJXNdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5zdHJlYW1JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGVlckNvbm5lY3Rpb24uaWNlQ29ubmVjdGlvblN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3RQZWVyQ29ubmVjdGlvbihwZWVyQ29ubmVjdGlvbiwgcmV0cnlDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3BlZXJDb25uZWN0aW9uQ29udGV4dC5wZWVyQ29ubmVjdGlvblJlY29ubmVjdEF0dGVtcHRzID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGFwcGx5UnRjQ29uZmlndXJhdGlvbihcbiAgICBvcHRpb25hbFBlZXJDb25uZWN0aW9uOiBJUGVlckNvbm5lY3Rpb24gfCBudWxsLFxuICAgIHJ0Y0NvbmZpZ3VyYXRpb246IFJUQ0NvbmZpZ3VyYXRpb24pOiBQcm9taXNlPElQZWVyQ29ubmVjdGlvbj4ge1xuICAgIGlmICghb3B0aW9uYWxQZWVyQ29ubmVjdGlvbikge1xuICAgICAgcnRjQ29uZmlndXJhdGlvbiA9IFJ0Y0NvbmZpZ3VyYXRpb25NYW5hZ2VyLnRydW5jYXRlSWNlU2VydmVycyhydGNDb25maWd1cmF0aW9uKTtcblxuICAgICAgcmV0dXJuIFNESy5wZWVyQ29ubmVjdGlvbkZhY3RvcnkudmFsdWUuY3JlYXRlUGVlckNvbm5lY3Rpb24ocnRjQ29uZmlndXJhdGlvbik7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3UnRjQ29uZmlndXJhdGlvbiA9IHtcbiAgICAgIC4uLm9wdGlvbmFsUGVlckNvbm5lY3Rpb24uZ2V0Q29uZmlndXJhdGlvbigpLFxuICAgICAgLi4ucnRjQ29uZmlndXJhdGlvblxuICAgIH07XG5cbiAgICBvcHRpb25hbFBlZXJDb25uZWN0aW9uLnNldENvbmZpZ3VyYXRpb24obmV3UnRjQ29uZmlndXJhdGlvbik7XG5cbiAgICByZXR1cm4gb3B0aW9uYWxQZWVyQ29ubmVjdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgcmVjb25uZWN0UGVlckNvbm5lY3Rpb24ocGVlckNvbm5lY3Rpb246IElQZWVyQ29ubmVjdGlvbiwgcmV0cnlDYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmIChwZWVyQ29ubmVjdGlvbi5pY2VDb25uZWN0aW9uU3RhdGUgPT09ICdjbG9zZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5zdGF0ZS52YWx1ZSA9IFB1Ymxpc2hlclN0YXRlLlJlY29ubmVjdGluZztcblxuICAgIGlmICh0aGlzLl9wZWVyQ29ubmVjdGlvbkNvbnRleHQucGVlckNvbm5lY3Rpb25SZWNvbm5lY3RBdHRlbXB0cyA8IFNESy5tYXhpbWFsTnVtYmVyT2ZQZWVyQ29ubmVjdGlvblJlY29ubmVjdEF0dGVtcHRzIHx8ICFTREsuYXV0b21hdGljYWxseVJlY29ubmVjdFBlZXJDb25uZWN0aW9uKSB7XG4gICAgICB0aGlzLl9wZWVyQ29ubmVjdGlvbkNvbnRleHQucGVlckNvbm5lY3Rpb25SZWNvbm5lY3RBdHRlbXB0cysrO1xuXG4gICAgICBpZiAoRmVhdHVyZUVuYWJsZW1lbnQuY2xpZW50T2ZmZXJEaXNhYmxlZCB8fFxuICAgICAgICAhcGVlckNvbm5lY3Rpb24uc3VwcG9ydHNTZXRDb25maWd1cmF0aW9uIHx8XG4gICAgICAgICFwZWVyQ29ubmVjdGlvbi5zdXBwb3J0c0dldENvbmZpZ3VyYXRpb24gfHxcbiAgICAgICAgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5mYWlsdXJlQ291bnQudmFsdWVcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKCdSZWNvbm5lY3RpbmcgcGVlciBjb25uZWN0aW9uIGJ5IHJlc3RhcnRpbmcgSUNFJyk7XG5cbiAgICAgIGNvbnN0IGxvY2FsT2ZmZXIgPSBwZWVyQ29ubmVjdGlvbi5jdXJyZW50TG9jYWxEZXNjcmlwdGlvbjtcbiAgICAgIGNvbnN0IGlnbm9yZWQgPSBwZWVyQ29ubmVjdGlvbi5jcmVhdGVPZmZlcih7aWNlUmVzdGFydDogdHJ1ZX0pLnRoZW4ob2ZmZXIgPT4ge1xuICAgICAgICByZXR1cm4gcGVlckNvbm5lY3Rpb24uc2V0TG9jYWxEZXNjcmlwdGlvbihvZmZlcikudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHBlZXJDb25uZWN0aW9uLnNldExvY2FsRGVzY3JpcHRpb24obG9jYWxPZmZlcilcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5fcHVibGlzaGVyQ29udGV4dC5zdGF0ZS52YWx1ZSA9IFB1Ymxpc2hlclN0YXRlLlB1Ymxpc2hpbmc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKCdGYWlsZWQgdG8gcmVjb25uZWN0IHBlZXIgY29ubmVjdGlvbicsIGUpO1xuICAgICAgICAgIHRoaXMuX3BlZXJDb25uZWN0aW9uQ29udGV4dC5wZWVyQ29ubmVjdGlvblJlY29ubmVjdEF0dGVtcHRzID0gMDtcbiAgICAgICAgICByZXRyeUNhbGxiYWNrKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbG9nZ2VyLmluZm8oJ0ZhaWxlZCB0byByZWNvbm5lY3QgcGVlciBjb25uZWN0aW9uIGFmdGVyIFslc10gYXR0ZW1wdHMsIHBlcmZvcm1pbmcgZnVsbCByZWNvdmVyeScsIHRoaXMuX3BlZXJDb25uZWN0aW9uQ29udGV4dC5wZWVyQ29ubmVjdGlvblJlY29ubmVjdEF0dGVtcHRzKTtcbiAgICB0aGlzLl9wZWVyQ29ubmVjdGlvbkNvbnRleHQucGVlckNvbm5lY3Rpb25SZWNvbm5lY3RBdHRlbXB0cyA9IDA7XG4gICAgcmV0cnlDYWxsYmFjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBtYXBTZXRSZW1vdGVEZXNjcmlwdGlvblN0YXR1c1RvUHVibGlzaGVyU3RhdHVzKHN0YXR1czogU2V0UmVtb3RlRGVzY3JpcHRpb25TdGF0dXMpOiBQdWJsaXNoZXJTdGF0ZSB7XG4gICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgIGNhc2UgJ29rJzpcbiAgICAgICAgcmV0dXJuIFB1Ymxpc2hlclN0YXRlLlN0YXJ0aW5nO1xuICAgICAgY2FzZSAndW5hdXRob3JpemVkJzpcbiAgICAgICAgcmV0dXJuIFB1Ymxpc2hlclN0YXRlLlVuYXV0aG9yaXplZDtcbiAgICAgIGNhc2UgJ25vdC1mb3VuZCc6XG4gICAgICBjYXNlICdjYXBhY2l0eSc6XG4gICAgICBjYXNlICdyYXRlLWxpbWl0ZWQnOlxuICAgICAgY2FzZSAndGltZW91dCc6XG4gICAgICAgIHJldHVybiBQdWJsaXNoZXJTdGF0ZS5SZWNvdmVyaW5nO1xuICAgICAgY2FzZSAnZmFpbGVkJzpcbiAgICAgICAgcmV0dXJuIFB1Ymxpc2hlclN0YXRlLkVycm9yO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXNzZXJ0VW5yZWFjaGFibGUoc3RhdHVzKTtcbiAgICB9XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IFNESyBmcm9tICcuLi9TREsnO1xuaW1wb3J0IFB1Ymxpc2hlcnMgZnJvbSAnLi9QdWJsaXNoZXJzJztcbmltcG9ydCBQdWJsaXNoZXJTdGF0ZSBmcm9tICcuL1B1Ymxpc2hlclN0YXRlJztcblxuZXhwb3J0IHtcbiAgU0RLLFxuICBQdWJsaXNoZXJzLFxuICBQdWJsaXNoZXJTdGF0ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBTREssXG4gIFB1Ymxpc2hlcnMsXG4gIFB1Ymxpc2hlclN0YXRlXG59OyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuZGVjbGFyZSBjb25zdCBfX1NES1ZFUlNJT05fXzogc3RyaW5nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJzaW9uTWFuYWdlciB7XG4gIHByaXZhdGUgc3RhdGljIF9kZWZhdWx0VmVyc2lvbiA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcblxuICBzdGF0aWMgZ2V0IHNka1ZlcnNpb24oKTogc3RyaW5nIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIF9fU0RLVkVSU0lPTl9fO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0VmVyc2lvbjtcbiAgICB9XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCBUZWxlbWV0cnlTZXJ2aWNlIGZyb20gJy4vVGVsZW1ldHJ5U2VydmljZSc7XG5pbXBvcnQgVGVsZW1ldHJ5Q29uZmlndXJhdGlvbiBmcm9tICcuL1RlbGVtZXRyeUNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHtJQXBwZW5kZXJ9IGZyb20gJy4uL2xvZ2dlci9JQXBwZW5kZXInO1xuaW1wb3J0IHtMb2dnaW5nTGV2ZWx9IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWxlbWV0cnlBcHBlbmRlciBpbXBsZW1lbnRzIElBcHBlbmRlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3RlbGVtZXRyeVNlcnZpY2U6IFRlbGVtZXRyeVNlcnZpY2U7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3RlbmFuY3k6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfc2Vzc2lvbklkOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3RocmVzaG9sZDogTG9nZ2luZ0xldmVsO1xuXG4gIGNvbnN0cnVjdG9yKHRlbGVtZXRyeUNvbmZpZ3VyYXRpb246IFRlbGVtZXRyeUNvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl90ZW5hbmN5ID0gdGVsZW1ldHJ5Q29uZmlndXJhdGlvbi50ZW5hbmN5O1xuICAgIHRoaXMuX3Nlc3Npb25JZCA9IHRlbGVtZXRyeUNvbmZpZ3VyYXRpb24uc2Vzc2lvbklkO1xuICAgIHRoaXMuX3RocmVzaG9sZCA9IHRlbGVtZXRyeUNvbmZpZ3VyYXRpb24udGhyZXNob2xkO1xuICAgIHRoaXMuX3RlbGVtZXRyeVNlcnZpY2UgPSBuZXcgVGVsZW1ldHJ5U2VydmljZSh0ZWxlbWV0cnlDb25maWd1cmF0aW9uKTtcbiAgfVxuXG4gIGxvZyhsb2dMZXZlbDogTG9nZ2luZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcsIGNhdGVnb3J5OiBzdHJpbmcsIGRhdGU6IERhdGUpOiB2b2lkIHtcbiAgICBpZiAobG9nTGV2ZWwgPCB0aGlzLl90aHJlc2hvbGQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl90ZWxlbWV0cnlTZXJ2aWNlLnB1c2gobG9nTGV2ZWwsIG1lc3NhZ2UsIGNhdGVnb3J5LCBkYXRlKTtcbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuaW1wb3J0IHtMb2dnaW5nTGV2ZWx9IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IExvZ2dlckRlZmF1bHRzIGZyb20gJy4uL2xvZ2dlci9Mb2dnZXJEZWZhdWx0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbGVtZXRyeUNvbmZpZ3VyYXRpb24ge1xuICBwcml2YXRlIF91cmwgPSAnaHR0cHM6Ly90ZWxlbWV0cnkucGhlbml4cnRzLmNvbS90ZWxlbWV0cnkvbG9ncyc7XG4gIHByaXZhdGUgX3RlbmFuY3k6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2Vzc2lvbklkOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Vudmlyb25tZW50OiBzdHJpbmc7XG4gIHByaXZhdGUgX3RocmVzaG9sZCA9IExvZ2dlckRlZmF1bHRzLmRlZmF1bHRUZWxlbWV0cnlMb2dnaW5nTGV2ZWw7XG5cbiAgZ2V0IHVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl91cmw7XG4gIH1cblxuICBzZXQgdXJsKHVybDogc3RyaW5nKSB7XG4gICAgY29uc3QgdGVsZW1ldHJ5VXJsID0gbmV3IFVSTCh1cmwpO1xuXG4gICAgdGVsZW1ldHJ5VXJsLnBhdGhuYW1lID0gdGVsZW1ldHJ5VXJsLnBhdGhuYW1lICsgJy9sb2dzJztcblxuICAgIHRoaXMuX3VybCA9IHRlbGVtZXRyeVVybC50b1N0cmluZygpO1xuICB9XG5cbiAgZ2V0IGVudmlyb25tZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Vudmlyb25tZW50O1xuICB9XG5cbiAgc2V0IGVudmlyb25tZW50KGVudmlyb25tZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICB9XG5cbiAgZ2V0IHRlbmFuY3koKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGVuYW5jeTtcbiAgfVxuXG4gIHNldCB0ZW5hbmN5KHRlbmFuY3k6IHN0cmluZykge1xuICAgIHRoaXMuX3RlbmFuY3kgPSB0ZW5hbmN5O1xuICB9XG5cbiAgZ2V0IHNlc3Npb25JZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9uSWQ7XG4gIH1cblxuICBzZXQgc2Vzc2lvbklkKHNlc3Npb25JZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2Vzc2lvbklkID0gc2Vzc2lvbklkO1xuICB9XG5cbiAgZ2V0IHRocmVzaG9sZCgpOiBMb2dnaW5nTGV2ZWwge1xuICAgIHJldHVybiB0aGlzLl90aHJlc2hvbGQ7XG4gIH1cblxuICBzZXQgdGhyZXNob2xkKHRocmVzaG9sZDogTG9nZ2luZ0xldmVsKSB7XG4gICAgdGhpcy5fdGhyZXNob2xkID0gdGhyZXNob2xkO1xuICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMyBQaGVuaXggUmVhbCBUaW1lIFNvbHV0aW9ucywgSW5jLiBDb25maWRlbnRpYWwgYW5kIFByb3ByaWV0YXJ5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG5pbXBvcnQge0xvZ2dpbmdMZXZlbH0gZnJvbSAnLi4vbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQgVmVyc2lvbk1hbmFnZXIgZnJvbSAnLi4vc2RrL3ZlcnNpb24vVmVyc2lvbk1hbmFnZXInO1xuaW1wb3J0IFRlbGVtZXRyeUNvbmZpZ3VyYXRpb24gZnJvbSAnLi9UZWxlbWV0cnlDb25maWd1cmF0aW9uJztcblxuY29uc3QgcmVxdWVzdFNpemVMaW1pdCA9IDgxOTI7XG5cbmludGVyZmFjZSBJTG9nSXRlbSB7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xuICB0ZW5hbmN5OiBzdHJpbmc7XG4gIGxldmVsOiBzdHJpbmc7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgc2Vzc2lvbklkOiBzdHJpbmc7XG4gIHZlcnNpb246IHN0cmluZztcbiAgZW52aXJvbm1lbnQ6IHN0cmluZztcbiAgZnVsbFF1YWxpZmllZE5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVsZW1ldHJ5U2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3RlbGVtZXRyeUNvbmZpZ3VyYXRpb246IFRlbGVtZXRyeUNvbmZpZ3VyYXRpb247XG5cbiAgcHJpdmF0ZSBfbG9nczogQXJyYXk8SUxvZ0l0ZW0+ID0gW107XG4gIHByaXZhdGUgX2lzU2VuZGluZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZG9tYWluID0gbG9jYXRpb24uaG9zdG5hbWU7XG5cbiAgY29uc3RydWN0b3IodGVsZW1ldHJ5Q29uZmlndXJhdGlvbjogVGVsZW1ldHJ5Q29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX3RlbGVtZXRyeUNvbmZpZ3VyYXRpb24gPSB0ZWxlbWV0cnlDb25maWd1cmF0aW9uO1xuICB9XG5cbiAgcHVzaChsb2dMZXZlbDogTG9nZ2luZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcsIGNhdGVnb3J5OiBzdHJpbmcsIHRpbWVzdGFtcDogRGF0ZSk6IHZvaWQge1xuICAgIGNvbnN0IGxvZ1JlY29yZCA9IHtcbiAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLnRvSVNPU3RyaW5nKCksXG4gICAgICB0ZW5hbmN5OiB0aGlzLl90ZWxlbWV0cnlDb25maWd1cmF0aW9uLnRlbmFuY3ksXG4gICAgICBsZXZlbDogTG9nZ2luZ0xldmVsW2xvZ0xldmVsXSxcbiAgICAgIGNhdGVnb3J5LFxuICAgICAgbWVzc2FnZSxcbiAgICAgIHNlc3Npb25JZDogdGhpcy5fdGVsZW1ldHJ5Q29uZmlndXJhdGlvbi5zZXNzaW9uSWQsXG4gICAgICB2ZXJzaW9uOiBWZXJzaW9uTWFuYWdlci5zZGtWZXJzaW9uLFxuICAgICAgZW52aXJvbm1lbnQ6IHRoaXMuX3RlbGVtZXRyeUNvbmZpZ3VyYXRpb24uZW52aXJvbm1lbnQsXG4gICAgICBmdWxsUXVhbGlmaWVkTmFtZTogdGhpcy5fZG9tYWluXG4gICAgfTtcblxuICAgIGlmIChsb2dMZXZlbCA8IExvZ2dpbmdMZXZlbC5FcnJvcikge1xuICAgICAgdGhpcy5fbG9ncy5wdXNoKGxvZ1JlY29yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xvZ3MudW5zaGlmdChsb2dSZWNvcmQpO1xuICAgIH1cblxuICAgIGNvbnN0IGlnbm9yZWQgPSB0aGlzLnNlbmRMb2dzSWZBYmxlKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNlbmRMb2dzKGxvZ01lc3NhZ2VzOiBBcnJheTxJTG9nSXRlbT4pOiBQcm9taXNlPFJlc3BvbnNlIHwgdm9pZD4ge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2pzb25Cb2R5JywgSlNPTi5zdHJpbmdpZnkoe3JlY29yZHM6IGxvZ01lc3NhZ2VzfSkpO1xuXG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKHRoaXMuX3RlbGVtZXRyeUNvbmZpZ3VyYXRpb24udXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IGZvcm1EYXRhXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNlbmRMb2dzSWZBYmxlKCk6IFByb21pc2U8UmVzcG9uc2UgfCB2b2lkPiB7XG4gICAgaWYgKHRoaXMuX2xvZ3MubGVuZ3RoIDw9IDAgfHwgdGhpcy5faXNTZW5kaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG51bWJlck9mTG9nc1RvU2VuZCA9IDA7XG4gICAgbGV0IHNpemVPZkxvZ3NUb1NlbmQgPSAwO1xuXG4gICAgdGhpcy5faXNTZW5kaW5nID0gdHJ1ZTtcblxuICAgIGNvbnN0IGdldExvZ1NpemUgPSAobG9nOiBJTG9nSXRlbSk6IG51bWJlciA9PiBPYmplY3QudmFsdWVzKGxvZylcbiAgICAgIC5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgKGl0ZW0gPyBpdGVtLmxlbmd0aCA6IDApLCAwKTtcblxuICAgIHdoaWxlICh0aGlzLl9sb2dzLmxlbmd0aCA+IG51bWJlck9mTG9nc1RvU2VuZCAmJiBnZXRMb2dTaXplKHRoaXMuX2xvZ3NbbnVtYmVyT2ZMb2dzVG9TZW5kXSkgKyBzaXplT2ZMb2dzVG9TZW5kIDwgcmVxdWVzdFNpemVMaW1pdCkge1xuICAgICAgc2l6ZU9mTG9nc1RvU2VuZCArPSBnZXRMb2dTaXplKHRoaXMuX2xvZ3NbbnVtYmVyT2ZMb2dzVG9TZW5kXSk7XG4gICAgICBudW1iZXJPZkxvZ3NUb1NlbmQrKztcbiAgICB9XG5cbiAgICBpZiAoIW51bWJlck9mTG9nc1RvU2VuZCkge1xuICAgICAgdGhpcy5fbG9nc1tudW1iZXJPZkxvZ3NUb1NlbmRdLm1lc3NhZ2UgPSB0aGlzLl9sb2dzW251bWJlck9mTG9nc1RvU2VuZF0ubWVzc2FnZS5zdWJzdHJpbmcoMCxcbiAgICAgICAgZ2V0TG9nU2l6ZSh0aGlzLl9sb2dzW251bWJlck9mTG9nc1RvU2VuZF0pICsgKHJlcXVlc3RTaXplTGltaXQgLSBnZXRMb2dTaXplKHRoaXMuX2xvZ3NbbnVtYmVyT2ZMb2dzVG9TZW5kXSkpKTtcbiAgICAgIG51bWJlck9mTG9nc1RvU2VuZCA9IDE7XG4gICAgfVxuXG4gICAgY29uc3QgbG9nTWVzc2FnZXMgPSB0aGlzLl9sb2dzLnNsaWNlKDAsIG51bWJlck9mTG9nc1RvU2VuZCk7XG5cbiAgICB0aGlzLl9sb2dzID0gdGhpcy5fbG9ncy5zbGljZShudW1iZXJPZkxvZ3NUb1NlbmQpO1xuXG4gICAgcmV0dXJuIHRoaXMuc2VuZExvZ3MobG9nTWVzc2FnZXMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5faXNTZW5kaW5nID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IGlnbm9yZWQgPSB0aGlzLnNlbmRMb2dzSWZBYmxlKCk7XG5cbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICB0aGlzLl9pc1NlbmRpbmcgPSBmYWxzZTtcblxuICAgICAgY29uc3QgaWdub3JlZCA9IHRoaXMuc2VuZExvZ3NJZkFibGUoKTtcbiAgICB9KTtcbiAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjMgUGhlbml4IFJlYWwgVGltZSBTb2x1dGlvbnMsIEluYy4gQ29uZmlkZW50aWFsIGFuZCBQcm9wcmlldGFyeS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEdXJhdGlvbnMge1xuICBwcml2YXRlIHJlYWRvbmx5IF9kdXJhdGlvbjogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGR1cmF0aW9uID0gMCkge1xuICAgIHRoaXMuX2R1cmF0aW9uID0gZHVyYXRpb247XG4gIH1cblxuICB0b0lzb1N0cmluZygpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLl9kdXJhdGlvbiA9PT0gMCkge1xuICAgICAgcmV0dXJuICdQMFMnO1xuICAgIH1cblxuICAgIGNvbnN0IGlzTmVnYXRpdmUgPSB0aGlzLl9kdXJhdGlvbiA8IDA7XG4gICAgY29uc3QgZHVyYXRpb24gPSBpc05lZ2F0aXZlID8gTWF0aC5hYnModGhpcy5fZHVyYXRpb24pIDogdGhpcy5fZHVyYXRpb247XG4gICAgbGV0IG9mZnNldCA9IE1hdGguZmxvb3IoZHVyYXRpb24pO1xuICAgIGNvbnN0IG1pbGxpc2Vjb25kcyA9IG9mZnNldCAlIDEwMDA7XG5cbiAgICBvZmZzZXQgPSBNYXRoLmZsb29yKG9mZnNldCAvIDEwMDApO1xuXG4gICAgY29uc3Qgc2Vjb25kcyA9IG9mZnNldCAlIDYwO1xuXG4gICAgb2Zmc2V0ID0gTWF0aC5mbG9vcihvZmZzZXQgLyA2MCk7XG5cbiAgICBjb25zdCBtaW51dGVzID0gb2Zmc2V0ICUgNjA7XG5cbiAgICBvZmZzZXQgPSBNYXRoLmZsb29yKG9mZnNldCAvIDYwKTtcblxuICAgIGNvbnN0IGhvdXJzID0gb2Zmc2V0ICUgMjQ7XG4gICAgY29uc3QgcGFydHMgPSBbJ1BUJ107XG5cbiAgICBpZiAoaXNOZWdhdGl2ZSkge1xuICAgICAgcGFydHMudW5zaGlmdCgnLScpO1xuICAgIH1cblxuICAgIGlmIChob3Vycykge1xuICAgICAgcGFydHMucHVzaChob3VycyArICdIJyk7XG4gICAgfVxuXG4gICAgaWYgKG1pbnV0ZXMpIHtcbiAgICAgIHBhcnRzLnB1c2gobWludXRlcyArICdNJyk7XG4gICAgfVxuXG4gICAgaWYgKHNlY29uZHMgfHwgbWlsbGlzZWNvbmRzKSB7XG4gICAgICBwYXJ0cy5wdXNoKFN0cmluZyhzZWNvbmRzKSk7XG5cbiAgICAgIGlmIChtaWxsaXNlY29uZHMpIHtcbiAgICAgICAgcGFydHMucHVzaCgnLicgKyB0aGlzLnBhZFN0YXJ0KG1pbGxpc2Vjb25kcy50b1N0cmluZygpLCAzLCAnMCcpKTtcbiAgICAgIH1cblxuICAgICAgcGFydHMucHVzaCgnUycpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJ0cy5qb2luKCcnKTtcbiAgfVxuXG4gIHBhZFN0YXJ0KGl0ZW06IHN0cmluZywgdGFyZ2V0TGVuZ3RoOiBudW1iZXIsIHBhZFN0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICB0YXJnZXRMZW5ndGggPSB0YXJnZXRMZW5ndGggPj4gMDtcbiAgICBwYWRTdHJpbmcgPSBTdHJpbmcoKHR5cGVvZiBwYWRTdHJpbmcgIT09ICd1bmRlZmluZWQnID8gcGFkU3RyaW5nIDogJyAnKSk7XG5cbiAgICBpZiAoaXRlbS5sZW5ndGggPiB0YXJnZXRMZW5ndGgpIHtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxuICAgIHRhcmdldExlbmd0aCA9IHRhcmdldExlbmd0aCAtIGl0ZW0ubGVuZ3RoO1xuXG4gICAgaWYgKHRhcmdldExlbmd0aCA+IHBhZFN0cmluZy5sZW5ndGgpIHtcbiAgICAgIHBhZFN0cmluZyArPSBwYWRTdHJpbmcucmVwZWF0KHRhcmdldExlbmd0aCAvIHBhZFN0cmluZy5sZW5ndGgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYWRTdHJpbmcuc2xpY2UoMCwgdGFyZ2V0TGVuZ3RoKSArIGl0ZW07XG4gIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDIzIFBoZW5peCBSZWFsIFRpbWUgU29sdXRpb25zLCBJbmMuIENvbmZpZGVudGlhbCBhbmQgUHJvcHJpZXRhcnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCB7U3RyZWFtU2V0dXBMaXN0ZW5lcn0gZnJvbSAnLi4vZG9tL1N0cmVhbVNldHVwTGlzdGVuZXInO1xuaW1wb3J0IHtJTG9nZ2VyfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VySW50ZXJmYWNlJztcbmltcG9ydCBMb2dnZXJGYWN0b3J5IGZyb20gJy4uL2xvZ2dlci9Mb2dnZXJGYWN0b3J5JztcbmltcG9ydCBOZXR3b3JrTW9uaXRvciBmcm9tICcuLi9kb20vTmV0d29ya01vbml0b3InO1xuaW1wb3J0IFNESyBmcm9tICcuLi9zZGsvU0RLJztcbmltcG9ydCBNZXRyaWNzVHlwZSBmcm9tICcuLi9tZXRyaWNzL01ldHJpY3NUeXBlJztcbmltcG9ydCBEdXJhdGlvbnMgZnJvbSAnLi4vdGltZS9EdXJhdGlvbic7XG5pbXBvcnQgSURpc3Bvc2FibGUgZnJvbSAnLi4vbGFuZy9JRGlzcG9zYWJsZSc7XG5pbXBvcnQgRGlzcG9zYWJsZUxpc3QgZnJvbSAnLi4vbGFuZy9EaXNwb3NhYmxlTGlzdCc7XG5pbXBvcnQgTWV0cmljc1NlcnZpY2UgZnJvbSAnLi4vbWV0cmljcy9NZXRyaWNzU2VydmljZSc7XG5cbmludGVyZmFjZSBJTmV0d29ya1N0YXRpc3RpY3Mge1xuICBydHQ/OiBudW1iZXI7XG4gIGVmZmVjdGl2ZVR5cGU/OiBzdHJpbmc7XG4gIGRvd25saW5rVGhyb3VnaHB1dENhcGFjaXR5PzogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXNzaW9uVGVsZW1ldHJ5IGltcGxlbWVudHMgSURpc3Bvc2FibGUge1xuICBwcml2YXRlIHJlYWRvbmx5IF9sb2dnZXI6IElMb2dnZXIgPSBMb2dnZXJGYWN0b3J5LmdldExvZ2dlcignU2Vzc2lvblRlbGVtZXRyeScpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9tZXRyaWNzU2VydmljZTogTWV0cmljc1NlcnZpY2U7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2FwcGxpY2F0aW9uQWN0aXZpdHlNb25pdG9yID0gU0RLLmFwcGxpY2F0aW9uQWN0aXZpdHlNb25pdG9yO1xuICBwcml2YXRlIHJlYWRvbmx5IF9uZXR3b3JrTW9uaXRvcjogTmV0d29ya01vbml0b3IgPSBuZXcgTmV0d29ya01vbml0b3IoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfcGFnZUxvYWRUaW1lOiBudW1iZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Rpc3Bvc2FibGVzOiBEaXNwb3NhYmxlTGlzdCA9IG5ldyBEaXNwb3NhYmxlTGlzdCgpO1xuICBwcml2YXRlIF9sYXN0TmV0d29ya1N0YXRpc3RpY3M6IElOZXR3b3JrU3RhdGlzdGljcyA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHBhZ2VMb2FkVGltZTogbnVtYmVyLCBtZXRyaWNzU2VydmljZTogTWV0cmljc1NlcnZpY2UpIHtcbiAgICB0aGlzLl9wYWdlTG9hZFRpbWUgPSBwYWdlTG9hZFRpbWU7XG4gICAgdGhpcy5fZGlzcG9zYWJsZXMuYWRkKHRoaXMuX25ldHdvcmtNb25pdG9yKTtcbiAgICB0aGlzLl9tZXRyaWNzU2VydmljZSA9IG1ldHJpY3NTZXJ2aWNlO1xuXG4gICAgaWYgKCF0aGlzLl9uZXR3b3JrTW9uaXRvci5pc1N1cHBvcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2Rpc3Bvc2FibGVzLmFkZCh0aGlzLl9hcHBsaWNhdGlvbkFjdGl2aXR5TW9uaXRvci5pc0ZvcmVncm91bmQuc3Vic2NyaWJlKGlzRm9yZWdyb3VuZCA9PiB7XG4gICAgICB0aGlzLnJlY29yZEZvcmVncm91bmRDaGFuZ2UoaXNGb3JlZ3JvdW5kKTtcbiAgICB9KSk7XG4gICAgdGhpcy5fZGlzcG9zYWJsZXMuYWRkKHRoaXMuX25ldHdvcmtNb25pdG9yLnJ0dC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgdGhpcy5yZWNvcmROZXR3b3JrUlRUVXBkYXRlKHZhbHVlKTtcbiAgICB9KSk7XG4gICAgdGhpcy5fZGlzcG9zYWJsZXMuYWRkKHRoaXMuX25ldHdvcmtNb25pdG9yLmVmZmVjdGl2ZVR5cGUuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMucmVjb3JkTmV0d29ya1R5cGVDaGFuZ2VVcGRhdGUodmFsdWUpO1xuICAgIH0pKTtcbiAgICB0aGlzLl9kaXNwb3NhYmxlcy5hZGQodGhpcy5fbmV0d29ya01vbml0b3IuZG93bmxpbmtUaHJvdWdocHV0Q2FwYWNpdHkuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMucmVjb3JkTmV0d29ya0Rvd25saW5rVGhyb3VnaHB1dENhcGFjaXR5VXBkYXRlKHZhbHVlKTtcbiAgICB9KSk7XG4gIH1cblxuICBsaXN0ZW5PblN0cmVhbVNldHVwKCk6IFN0cmVhbVNldHVwTGlzdGVuZXIge1xuICAgIHJldHVybiBuZXcgU3RyZWFtU2V0dXBMaXN0ZW5lcih0aGlzLl9wYWdlTG9hZFRpbWUpO1xuICB9XG5cbiAgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kaXNwb3NhYmxlcy5kaXNwb3NlKCk7XG4gIH1cblxuICBwcml2YXRlIHJlY29yZEZvcmVncm91bmRDaGFuZ2UoaXNGb3JlZ3JvdW5kOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCB0aW1lU2luY2VMYXN0Q2hhbmdlID0gdGhpcy5fYXBwbGljYXRpb25BY3Rpdml0eU1vbml0b3IuZ2V0VGltZVNpbmNlTGFzdENoYW5nZSgpO1xuXG4gICAgdGhpcy5fbWV0cmljc1NlcnZpY2UucHVzaCh7XG4gICAgICBtZXRyaWNUeXBlOiBpc0ZvcmVncm91bmQgPyBNZXRyaWNzVHlwZS5BcHBsaWNhdGlvbkZvcmVncm91bmQgOiBNZXRyaWNzVHlwZS5BcHBsaWNhdGlvbkJhY2tncm91bmQsXG4gICAgICBydW50aW1lOiAobm93IC0gdGhpcy5fcGFnZUxvYWRUaW1lKSAvIDEwMDAsXG4gICAgICB2YWx1ZToge3VpbnQ2NDogdGltZVNpbmNlTGFzdENoYW5nZX1cbiAgICB9KTtcblxuICAgIHRoaXMuX2xvZ2dlci5pbmZvKFxuICAgICAgJ0FwcGxpY2F0aW9uIGhhcyBnb25lIGludG8gdGhlIFslc10gYWZ0ZXIgWyVzXSBtcycsXG4gICAgICBpc0ZvcmVncm91bmQgPyAnZm9yZWdyb3VuZCcgOiAnYmFja2dyb3VuZCcsXG4gICAgICBuZXcgRHVyYXRpb25zKHRpbWVTaW5jZUxhc3RDaGFuZ2UpLnRvSXNvU3RyaW5nKCksXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVjb3JkTmV0d29ya1JUVFVwZGF0ZShuZXdSVFQ6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgY29uc3Qgb2xkUnR0ID0gdGhpcy5fbGFzdE5ldHdvcmtTdGF0aXN0aWNzLnJ0dDtcblxuICAgIHRoaXMuX2xhc3ROZXR3b3JrU3RhdGlzdGljcy5ydHQgPSBuZXdSVFQ7XG5cbiAgICB0aGlzLl9tZXRyaWNzU2VydmljZS5wdXNoKHtcbiAgICAgIG1ldHJpY1R5cGU6IE1ldHJpY3NUeXBlLlJvdW5kVHJpcFRpbWUsXG4gICAgICBydW50aW1lOiAobm93IC0gdGhpcy5fcGFnZUxvYWRUaW1lKSAvIDEwMDAsXG4gICAgICB2YWx1ZToge3VpbnQ2NDogbmV3UlRUfSxcbiAgICAgIHByZXZpb3VzVmFsdWU6IG9sZFJ0dCA/IHt1aW50NjQ6IG9sZFJ0dH0gOiB1bmRlZmluZWQsXG4gICAgICByZXNvdXJjZTogJ25hdmlnYXRvcidcbiAgICB9KTtcblxuICAgIHRoaXMuX2xvZ2dlci5pbmZvKFxuICAgICAgJ1slc10gTmV0d29yayBSVFQgY2hhbmdlZCB0byBbJXNdIGZyb20gWyVzXScsXG4gICAgICBuZXcgRHVyYXRpb25zKG5vdyAtIHRoaXMuX3BhZ2VMb2FkVGltZSkudG9Jc29TdHJpbmcoKSxcbiAgICAgIG5ld1JUVCxcbiAgICAgIG9sZFJ0dFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlY29yZE5ldHdvcmtUeXBlQ2hhbmdlVXBkYXRlKG5ld05ldHdvcmtUeXBlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IG9sZE5ldHdvcmtUeXBlID0gdGhpcy5fbGFzdE5ldHdvcmtTdGF0aXN0aWNzLmVmZmVjdGl2ZVR5cGU7XG5cbiAgICB0aGlzLl9sYXN0TmV0d29ya1N0YXRpc3RpY3MuZWZmZWN0aXZlVHlwZSA9IG5ld05ldHdvcmtUeXBlO1xuXG4gICAgdGhpcy5fbWV0cmljc1NlcnZpY2UucHVzaCh7XG4gICAgICBtZXRyaWNUeXBlOiBNZXRyaWNzVHlwZS5OZXR3b3JrVHlwZSxcbiAgICAgIHJ1bnRpbWU6IChub3cgLSB0aGlzLl9wYWdlTG9hZFRpbWUpIC8gMTAwMCxcbiAgICAgIHZhbHVlOiB7c3RyaW5nOiBuZXdOZXR3b3JrVHlwZX0sXG4gICAgICBwcmV2aW91c1ZhbHVlOiBvbGROZXR3b3JrVHlwZSA/IHtzdHJpbmc6IG9sZE5ldHdvcmtUeXBlfSA6IHVuZGVmaW5lZFxuICAgIH0pO1xuXG4gICAgdGhpcy5fbG9nZ2VyLmluZm8oXG4gICAgICAnWyVzXSBOZXR3b3JrIGVmZmVjdGl2ZSB0eXBlIGhhcyBjaGFuZ2VkIHRvIFslc10gZnJvbSBbJXNdJyxcbiAgICAgIG5ldyBEdXJhdGlvbnMobm93IC0gdGhpcy5fcGFnZUxvYWRUaW1lKS50b0lzb1N0cmluZygpLFxuICAgICAgbmV3TmV0d29ya1R5cGUsXG4gICAgICBvbGROZXR3b3JrVHlwZVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlY29yZE5ldHdvcmtEb3dubGlua1Rocm91Z2hwdXRDYXBhY2l0eVVwZGF0ZShuZXdDYXBhY2l0eTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBvbGRDYXBhY2l0eSA9IHRoaXMuX2xhc3ROZXR3b3JrU3RhdGlzdGljcy5kb3dubGlua1Rocm91Z2hwdXRDYXBhY2l0eTtcblxuICAgIHRoaXMuX2xhc3ROZXR3b3JrU3RhdGlzdGljcy5kb3dubGlua1Rocm91Z2hwdXRDYXBhY2l0eSA9IG5ld0NhcGFjaXR5O1xuXG4gICAgdGhpcy5fbWV0cmljc1NlcnZpY2UucHVzaCh7XG4gICAgICBtZXRyaWNUeXBlOiBNZXRyaWNzVHlwZS5Eb3dubGlua1Rocm91Z2hwdXRDYXBhY2l0eSxcbiAgICAgIHJ1bnRpbWU6IChub3cgLSB0aGlzLl9wYWdlTG9hZFRpbWUpIC8gMTAwMCxcbiAgICAgIHZhbHVlOiB7ZmxvYXQ6IG5ld0NhcGFjaXR5fSxcbiAgICAgIHByZXZpb3VzVmFsdWU6IG9sZENhcGFjaXR5ID8ge2Zsb2F0OiBvbGRDYXBhY2l0eX0gOiB1bmRlZmluZWRcbiAgICB9KTtcblxuICAgIHRoaXMuX2xvZ2dlci5pbmZvKFxuICAgICAgJ1slc10gTmV0d29yayBkb3dubGluayB0aHJvdWdocHV0IGNhcGFjaXR5IGNoYW5nZWQgdG8gWyVzXSBmcm9tIFslc10nLFxuICAgICAgbmV3IER1cmF0aW9ucyhub3cgLSB0aGlzLl9wYWdlTG9hZFRpbWUpLnRvSXNvU3RyaW5nKCksXG4gICAgICBuZXdDYXBhY2l0eSxcbiAgICAgIG9sZENhcGFjaXR5XG4gICAgKTtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zZGsvcHVibGlzaC9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=