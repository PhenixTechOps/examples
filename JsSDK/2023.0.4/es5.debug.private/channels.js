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
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ (function(module) {

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
/***/ (function(module) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
/***/ (function(module) {

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
/***/ (function(module) {

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
/***/ (function(module) {

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
/***/ (function(module) {

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
/***/ (function(module) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/***/ (function(module) {

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
/***/ (function(module) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ (function(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
/***/ (function(module) {

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
/***/ (function(module) {

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PeerConnectionContext; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ StateContext; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TokenContext; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ApplicationActivityMonitor; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.now */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lang_Disposable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lang/Disposable */ "./src/lang/Disposable.ts");
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../rx/Subject */ "./src/rx/Subject.ts");
/* harmony import */ var _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../rx/ReadOnlySubject */ "./src/rx/ReadOnlySubject.ts");
/* harmony import */ var _lang_DisposableList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lang/DisposableList */ "./src/lang/DisposableList.ts");







/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */




var defaultDocumentFocusIntervalTimeout = 3000;
var ApplicationActivityMonitor = /*#__PURE__*/function () {
  function ApplicationActivityMonitor() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4___default()(this, ApplicationActivityMonitor);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(this, "_disposables", new _lang_DisposableList__WEBPACK_IMPORTED_MODULE_10__.default());
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(this, "_readOnlyIsForeground", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(this, "_isForeground", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(this, "_timeOfLastTabFocusChange", Date.now());
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(this, "_documentFocusInterval", void 0);
    this._isForeground = new _rx_Subject__WEBPACK_IMPORTED_MODULE_8__.default(true);
    this._readOnlyIsForeground = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_9__.default(this._isForeground);
    this.detectTabFocusChange();
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_5___default()(ApplicationActivityMonitor, [{
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
      if ((typeof document === "undefined" ? "undefined" : _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_3___default()(document)) !== 'object') {
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
        this._disposables.add(new _lang_Disposable__WEBPACK_IMPORTED_MODULE_7__.default(function () {
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
      this._disposables.add(new _lang_Disposable__WEBPACK_IMPORTED_MODULE_7__.default(function () {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BrowserDetector; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__);











/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var BrowserDetector = /*#__PURE__*/function () {
  function BrowserDetector() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8___default()(this, BrowserDetector);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_9___default()(BrowserDetector, null, [{
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
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default()(BrowserDetector, "_browserNameAndVersionRegex", /(MSIE|(?!Gecko.+)Firefox|(?!AppleWebKit.+Chrome.+)Safari|(?!AppleWebKit.+)Chrome|AppleWebKit(?!.+Chrome|.+Safari)|Gecko(?!.+Firefox))(?: |\/)([\d.apre]+)/g);
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default()(BrowserDetector, "_browserNameAndVersion", BrowserDetector.parseBrowserNameAndVersion());
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default()(BrowserDetector, "_browserName", BrowserDetector.parseBrowserName());
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default()(BrowserDetector, "_browserMajorVersion", BrowserDetector.parseBrowserMajorVersion());
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default()(BrowserDetector, "_isChrome69", BrowserDetector._browserNameAndVersion.includes('Chrome/69.'));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default()(BrowserDetector, "_isChrome70", BrowserDetector._browserNameAndVersion.includes('Chrome/70.'));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default()(BrowserDetector, "_isChrome71", BrowserDetector._browserNameAndVersion.includes('Chrome/71.'));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default()(BrowserDetector, "_isChrome72", BrowserDetector._browserNameAndVersion.includes('Chrome/72.'));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default()(BrowserDetector, "_isChrome74", BrowserDetector._browserNameAndVersion.includes('Chrome/74.'));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default()(BrowserDetector, "_isChrome75", BrowserDetector._browserNameAndVersion.includes('Chrome/75.'));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default()(BrowserDetector, "_isChrome76", BrowserDetector._browserNameAndVersion.includes('Chrome/76.'));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default()(BrowserDetector, "_isChrome77", BrowserDetector._browserNameAndVersion.includes('Chrome/77.'));


/***/ }),

/***/ "./src/dom/ConfigurationParameterReader.ts":
/*!*************************************************!*
  !*** ./src/dom/ConfigurationParameterReader.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PlainConfigurationParameterReader; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NetworkMonitor; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PrivacyMode; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StreamSetupListener": function() { return /* binding */ StreamSetupListener; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.now */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../metrics/MetricsType */ "./src/metrics/MetricsType.ts");
/* harmony import */ var _metrics_MetricType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../metrics/MetricType */ "./src/metrics/MetricType.ts");
/* harmony import */ var _time_Duration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../time/Duration */ "./src/time/Duration.ts");
/* harmony import */ var _sdk_SDK__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sdk/SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");





/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */





var StreamSetupListener = /*#__PURE__*/function () {
  function StreamSetupListener(pageLoadTime) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default()(this, StreamSetupListener);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_9__.default.getLogger('StreamSetupListener'));
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "metricsService", _sdk_SDK__WEBPACK_IMPORTED_MODULE_8__.default.metricsService);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_pageLoadTime", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_startTime", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_metricSubmitted", false);
    this._startTime = Date.now();
    this._pageLoadTime = pageLoadTime;
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default()(StreamSetupListener, [{
    key: "success",
    value: function success(streamId) {
      this.recordStreamMetric(_metrics_MetricsType__WEBPACK_IMPORTED_MODULE_5__.default.SetupCompleted, streamId);
    }
  }, {
    key: "fail",
    value: function fail() {
      this.recordStreamMetric(_metrics_MetricsType__WEBPACK_IMPORTED_MODULE_5__.default.SetupFailed);
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
      var metricName = new _metrics_MetricType__WEBPACK_IMPORTED_MODULE_6__.default(metricType).getName();
      this.metricsService.push({
        metricType: metricType,
        runtime: (now - this._pageLoadTime) / 1000,
        value: {
          uint64: setupTime
        },
        streamId: streamId
      });
      this._logger.info('[%s] [%s] Stream metric [%s] in [%s]', new _time_Duration__WEBPACK_IMPORTED_MODULE_7__.default(now - this._pageLoadTime).toIsoString(), streamId, metricName, new _time_Duration__WEBPACK_IMPORTED_MODULE_7__.default(setupTime).toIsoString());
    }
  }]);
  return StreamSetupListener;
}();

/***/ }),

/***/ "./src/lang/Disposable.ts":
/*!********************************!*
  !*** ./src/lang/Disposable.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Disposable; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DisposableList; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__);





/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var DisposableList = /*#__PURE__*/function () {
  function DisposableList() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default()(this, DisposableList);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_list", []);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default()(DisposableList, [{
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Strings; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.fill */ "./node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_6__);







/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var Strings = /*#__PURE__*/function () {
  function Strings() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5___default()(this, Strings);
    throw new Error('Strings is a static class that may not be instantiated');
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_6___default()(Strings, null, [{
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Appenders; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__);




/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var Appenders = /*#__PURE__*/function () {
  function Appenders() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, Appenders);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "_appenders", []);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(Appenders, [{
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ConsoleAppender; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_iso_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-iso-string */ "./node_modules/core-js/modules/es.date.to-iso-string.js");
/* harmony import */ var core_js_modules_es_date_to_iso_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_iso_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logger */ "./src/logger/Logger.ts");





/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var ConsoleAppender = /*#__PURE__*/function () {
  function ConsoleAppender(threshold) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default()(this, ConsoleAppender);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_threshold", void 0);
    this._threshold = threshold;
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default()(ConsoleAppender, [{
    key: "log",
    value: function log(logLevel, message, category, date) {
      if (logLevel < this._threshold) {
        return;
      }
      var fullMessage = "".concat(date.toISOString(), " [").concat(category, "] [").concat(_Logger__WEBPACK_IMPORTED_MODULE_5__.LoggingLevel[logLevel], "] ").concat(message);
      if (logLevel < _Logger__WEBPACK_IMPORTED_MODULE_5__.LoggingLevel.Warn) {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggingLevel": function() { return /* binding */ LoggingLevel; },
/* harmony export */   "default": function() { return /* binding */ Logger; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__);












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
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_9___default()(this, Logger);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_11___default()(this, "_category", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_11___default()(this, "_appenders", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_11___default()(this, "_threshold", void 0);
    this._category = category;
    this._appenders = appenders;
    this._threshold = threshold;
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_10___default()(Logger, [{
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoggerDefaults; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoggerFactory; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logger */ "./src/logger/Logger.ts");
/* harmony import */ var _Appenders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Appenders */ "./src/logger/Appenders.ts");
/* harmony import */ var _LoggingThreshold__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoggingThreshold */ "./src/logger/LoggingThreshold.ts");
/* harmony import */ var _ConsoleAppender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ConsoleAppender */ "./src/logger/ConsoleAppender.ts");
/* harmony import */ var _telemetry_TelemetryApender__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../telemetry/TelemetryApender */ "./src/telemetry/TelemetryApender.ts");
/* harmony import */ var _telemetry_TelemetryConfiguration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../telemetry/TelemetryConfiguration */ "./src/telemetry/TelemetryConfiguration.ts");
/* harmony import */ var _dom_ConfigurationParameterReader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dom/ConfigurationParameterReader */ "./src/dom/ConfigurationParameterReader.ts");
/* harmony import */ var _LoggerDefaults__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LoggerDefaults */ "./src/logger/LoggerDefaults.ts");




/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */









var LoggerFactory = /*#__PURE__*/function () {
  function LoggerFactory() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, LoggerFactory);
    throw new Error('LoggerFactory is a static class that may not be instantiated');
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(LoggerFactory, null, [{
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
      return LoggerFactory._loggers[category] = new _Logger__WEBPACK_IMPORTED_MODULE_4__.default(category, this._appenders, this._threshold);
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
      if (_Logger__WEBPACK_IMPORTED_MODULE_4__.LoggingLevel[parameterValue]) {
        this._threshold.setThreshold(_Logger__WEBPACK_IMPORTED_MODULE_4__.LoggingLevel[parameterValue]);
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
      applyAppender(_Logger__WEBPACK_IMPORTED_MODULE_4__.LoggingLevel[parameterValue]);
    }
  }, {
    key: "applyConsoleLogger",
    value: function applyConsoleLogger(level) {
      this._appenders.add(new _ConsoleAppender__WEBPACK_IMPORTED_MODULE_7__.default(level || _LoggerDefaults__WEBPACK_IMPORTED_MODULE_11__.default.defaultConsoleLoggingLevel));
    }
  }, {
    key: "applyTelemetryLogger",
    value: function applyTelemetryLogger(level) {
      this._telemetryConfiguration.threshold = level || _LoggerDefaults__WEBPACK_IMPORTED_MODULE_11__.default.defaultTelemetryLoggingLevel;
      this._appenders.add(new _telemetry_TelemetryApender__WEBPACK_IMPORTED_MODULE_8__.default(this._telemetryConfiguration));
    }
  }]);
  return LoggerFactory;
}();
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(LoggerFactory, "_configurationParameterReader", new _dom_ConfigurationParameterReader__WEBPACK_IMPORTED_MODULE_10__.default());
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(LoggerFactory, "_loggers", {});
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(LoggerFactory, "_appenders", new _Appenders__WEBPACK_IMPORTED_MODULE_5__.default());
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(LoggerFactory, "_threshold", new _LoggingThreshold__WEBPACK_IMPORTED_MODULE_6__.default());
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(LoggerFactory, "_telemetryConfiguration", new _telemetry_TelemetryConfiguration__WEBPACK_IMPORTED_MODULE_9__.default());

LoggerFactory.applyLoggerConfigFromParameterConfiguration();

/***/ }),

/***/ "./src/logger/LoggingLevelMapping.ts":
/*!*******************************************!*
  !*** ./src/logger/LoggingLevelMapping.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoggingLevelMapping; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoggingThreshold; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MetricType; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelemetryLevel": function() { return /* binding */ TelemetryLevel; },
/* harmony export */   "default": function() { return /* binding */ MetricsConfiguration; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _TelemetryDefault__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TelemetryDefault */ "./src/metrics/TelemetryDefault.ts");










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
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7___default()(this, MetricsConfiguration);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9___default()(this, "_url", 'https://telemetry.phenixrts.com/telemetry/metrics');
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9___default()(this, "_tenancy", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9___default()(this, "_sessionId", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9___default()(this, "_environment", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9___default()(this, "_threshold", _TelemetryDefault__WEBPACK_IMPORTED_MODULE_10__.default.defaultTelemetryLevel);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_8___default()(MetricsConfiguration, [{
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MetricsFactory; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.values */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _MetricsService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MetricsService */ "./src/metrics/MetricsService.ts");
/* harmony import */ var _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MetricsConfiguration */ "./src/metrics/MetricsConfiguration.ts");
/* harmony import */ var _sdk_SDK__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sdk/SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _sdk_TelemetryUrl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sdk/TelemetryUrl */ "./src/sdk/TelemetryUrl.ts");
/* harmony import */ var _sdk_Environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sdk/Environment */ "./src/sdk/Environment.ts");
/* harmony import */ var _TelemetricLevelMapping__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TelemetricLevelMapping */ "./src/metrics/TelemetricLevelMapping.ts");






/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */







var MetricsFactory = /*#__PURE__*/function () {
  function MetricsFactory() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3___default()(this, MetricsFactory);
    throw new Error('LoggerFactory is a static class that may not be instantiated');
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_4___default()(MetricsFactory, null, [{
    key: "getMetricsService",
    value: function getMetricsService(url) {
      if (typeof url !== 'string') {
        throw new Error('ur');
      }
      var metricsServices = MetricsFactory._metricsServices[url];
      if (metricsServices) {
        return metricsServices;
      }
      var metricsConfiguration = new _MetricsConfiguration__WEBPACK_IMPORTED_MODULE_7__.default();
      metricsConfiguration.sessionId = _sdk_SDK__WEBPACK_IMPORTED_MODULE_8__.default.clientSessionId;
      metricsConfiguration.tenancy = _sdk_SDK__WEBPACK_IMPORTED_MODULE_8__.default.tenancy.value;
      metricsConfiguration.url = _sdk_TelemetryUrl__WEBPACK_IMPORTED_MODULE_9__.default.getTelemetryUrl(url);
      metricsConfiguration.environment = _sdk_Environment__WEBPACK_IMPORTED_MODULE_10__.default.getEnvironmentFromUrl(url);
      metricsConfiguration.threshold = _TelemetricLevelMapping__WEBPACK_IMPORTED_MODULE_11__.default.convertTelemetryLevelTypeToTelemetryLevel(_sdk_SDK__WEBPACK_IMPORTED_MODULE_8__.default.telemetryLevel);
      return MetricsFactory._metricsServices[url] = new _MetricsService__WEBPACK_IMPORTED_MODULE_6__.default(metricsConfiguration);
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
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5___default()(MetricsFactory, "_metricsServices", {});


/***/ }),

/***/ "./src/metrics/MetricsService.ts":
/*!***************************************!*
  !*** ./src/metrics/MetricsService.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MetricsService; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_iso_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-iso-string */ "./node_modules/core-js/modules/es.date.to-iso-string.js");
/* harmony import */ var core_js_modules_es_date_to_iso_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_iso_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _sdk_version_VersionManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sdk/version/VersionManager */ "./src/sdk/version/VersionManager.ts");
/* harmony import */ var _MetricType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MetricType */ "./src/metrics/MetricType.ts");











/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var requestSizeLimit = 1024;
var MetricsService = /*#__PURE__*/function () {
  function MetricsService(metricsConfiguration) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7___default()(this, MetricsService);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9___default()(this, "_metricsConfiguration", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9___default()(this, "_metrics", []);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9___default()(this, "_isSending", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9___default()(this, "_domain", location.hostname);
    this._metricsConfiguration = metricsConfiguration;
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_8___default()(MetricsService, [{
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
      var metricType = new _MetricType__WEBPACK_IMPORTED_MODULE_12__.default(metric.metricType);
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
        version: _sdk_version_VersionManager__WEBPACK_IMPORTED_MODULE_11__.default.sdkVersion,
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
      var _sendMetrics = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_10___default().mark(function _callee(metricsMessages) {
        var formData;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_10___default().wrap(function _callee$(_context) {
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
      var _sendMetricsIfAble = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_10___default().mark(function _callee2() {
        var _this = this;
        var metricsMessages;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_10___default().wrap(function _callee2$(_context2) {
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
              })["catch"](function () {
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
/***/ (function(__unused_webpack_module, __webpack_exports__) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TelemetryLevelMapping; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TelemetryDefault; }
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

/***/ "./src/rtc/PeerConnectionService.ts":
/*!******************************************!*
  !*** ./src/rtc/PeerConnectionService.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PeerConnectionService; }
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _sdk_SDK__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sdk/SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _sdk_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sdk/feature/FeatureEnablement */ "./src/sdk/feature/FeatureEnablement.ts");






/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */



var PeerConnectionService = /*#__PURE__*/function () {
  function PeerConnectionService() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default()(this, PeerConnectionService);
    throw new Error('PeerConnectionService is a static class that may not be instantiated');
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default()(PeerConnectionService, null, [{
    key: "initiateInitialPrecaching",
    value: function initiateInitialPrecaching() {
      if (_sdk_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_8__.default.isPrecachingEnabled) {
        var ignored = PeerConnectionService.precacheCreatePeerConnectionOffer()["catch"](function (e) {
          return PeerConnectionService._logger.error('Failed to pre-cache peer connection offer"', e);
        });
      }
    }
  }, {
    key: "precacheCreatePeerConnectionOffer",
    value: function () {
      var _precacheCreatePeerConnectionOffer = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee() {
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", PeerConnectionService._cached = {
                direction: 'recvonly',
                peerConnection: PeerConnectionService.createPeerConnectionOffer()["catch"](function (e) {
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
      var _createPeerConnectionOffer = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee3() {
        var direction,
          value,
          peerConnectionFactory,
          _args3 = arguments;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee3$(_context3) {
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
              peerConnectionFactory = _sdk_SDK__WEBPACK_IMPORTED_MODULE_7__.default.peerConnectionFactory.value;
              return _context3.abrupt("return", peerConnectionFactory.createPeerConnection().then( /*#__PURE__*/function () {
                var _ref = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee2(peerConnection) {
                  var supportsAddTransceiver, videoTransceiver, audioTransceiver, options;
                  return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee2$(_context2) {
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
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(PeerConnectionService, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_6__.default.getLogger('PeerConnectionService'));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(PeerConnectionService, "_cached", void 0);

PeerConnectionService.initiateInitialPrecaching();

/***/ }),

/***/ "./src/rtc/RtcConfigurationManager.ts":
/*!********************************************!*
  !*** ./src/rtc/RtcConfigurationManager.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RtcConfigurationManager; }
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

/***/ "./src/rtc/RtcConnectionMonitor.ts":
/*!*****************************************!*
  !*** ./src/rtc/RtcConnectionMonitor.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RtcConnectionMonitor; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.now */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../rx/Subject */ "./src/rx/Subject.ts");
/* harmony import */ var _sdk_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../sdk/feature/FeatureEnablement */ "./src/sdk/feature/FeatureEnablement.ts");
/* harmony import */ var _SdpParser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SdpParser */ "./src/rtc/SdpParser.ts");
















/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */




var updateStatisticTimeOut = 1000;
var RtcConnectionMonitor = /*#__PURE__*/function () {
  function RtcConnectionMonitor(peerConnection, mediaStream, estimatedRoundTripTime) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_12___default()(this, RtcConnectionMonitor);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_14___default()(this, "_estimatedRoundTripTime", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_14___default()(this, "_estimatedVideoCodec", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_14___default()(this, "_estimatedAudioCodec", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_14___default()(this, "_rtcStatistic", new _rx_Subject__WEBPACK_IMPORTED_MODULE_16__.default({}));
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_14___default()(this, "_peerConnection", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_14___default()(this, "_isMonitorRunning", true);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_14___default()(this, "_updateTimeOut", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_14___default()(this, "_tracksToMonitor", void 0);
    this._peerConnection = peerConnection;
    this._estimatedRoundTripTime = estimatedRoundTripTime;
    this._tracksToMonitor = mediaStream.getTracks().map(function (track) {
      return track.kind;
    }) || [];
    if (this._peerConnection) {
      if (!_sdk_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_17__.default.getCurrentOfferDisabled) {
        var parsedSDP = new _SdpParser__WEBPACK_IMPORTED_MODULE_18__.default(this._peerConnection.currentRemoteDescription.sdp);
        this._estimatedAudioCodec = parsedSDP.audioCodec;
        this._estimatedVideoCodec = parsedSDP.videoCodec;
      }
      this.updateStatistic();
    }
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_13___default()(RtcConnectionMonitor, [{
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
      var _updateStatistic = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_15___default().mark(function _callee() {
        var _this = this;
        var _ignored, getKindForSafari11, ignored;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_15___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!_sdk_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_17__.default.getStatsPromiseBasedDisabled) {
                _context.next = 5;
                break;
              }
              _context.next = 3;
              return this.updateStatisticLegacy();
            case 3:
              _ignored = _context.sent;
              return _context.abrupt("return");
            case 5:
              // Safari 11 doesnt have kind or mediaType so we need to take it from the inbound-rtp object id
              getKindForSafari11 = function getKindForSafari11(item) {
                return item.id.includes('Audio') ? 'audio' : item.id.includes('Video') ? 'video' : '';
              };
              _context.next = 8;
              return this._peerConnection.getStats(null).then(function (stats) {
                var rtcStatistics = {};
                if (stats) {
                  var roundTripTime = _this._estimatedRoundTripTime;
                  var lastPacketReceivedTimestamp;
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
                    if (report.type === 'candidate-pair' && report.lastPacketReceivedTimestamp) {
                      lastPacketReceivedTimestamp = report.lastPacketReceivedTimestamp;
                      if (rtcStatistics['audio']) {
                        rtcStatistics['audio'].lastPacketReceivedTimestamp = lastPacketReceivedTimestamp;
                      }
                      if (rtcStatistics['video']) {
                        rtcStatistics['video'].lastPacketReceivedTimestamp = lastPacketReceivedTimestamp;
                      }
                    }
                    if (report.type === 'inbound-rtp') {
                      var _kind = report.kind || report.mediaType || getKindForSafari11(report);
                      var codec = '';
                      stats.forEach(function (item) {
                        if (item.id === report.codecId) {
                          codec = item.mimeType;
                        }
                      });
                      if (_kind && _this._tracksToMonitor.includes(_kind)) {
                        var _this$_rtcStatistic$v, _this$_rtcStatistic$v2, _this$_rtcStatistic$v3, _this$_rtcStatistic$v4, _this$_rtcStatistic$v5;
                        var bytes = report.bytesReceived || 0;
                        var previousBytesReceived = (_this$_rtcStatistic$v = (_this$_rtcStatistic$v2 = _this._rtcStatistic.value) === null || _this$_rtcStatistic$v2 === void 0 ? void 0 : (_this$_rtcStatistic$v3 = _this$_rtcStatistic$v2[_kind]) === null || _this$_rtcStatistic$v3 === void 0 ? void 0 : _this$_rtcStatistic$v3.bytesReceived) !== null && _this$_rtcStatistic$v !== void 0 ? _this$_rtcStatistic$v : 0;
                        var bytesDelta = bytes - previousBytesReceived;
                        var timeDelta = report.timestamp - ((_this$_rtcStatistic$v4 = _this._rtcStatistic.value) === null || _this$_rtcStatistic$v4 === void 0 ? void 0 : (_this$_rtcStatistic$v5 = _this$_rtcStatistic$v4[_kind]) === null || _this$_rtcStatistic$v5 === void 0 ? void 0 : _this$_rtcStatistic$v5.timestamp);
                        var bitrate = bytesDelta && timeDelta ? Math.floor(8 * bytesDelta / timeDelta * 1000) : 0;
                        rtcStatistics[_kind] = {
                          ssrc: report.ssrc,
                          mediaType: _kind,
                          timestamp: report.timestamp,
                          bitrate: bitrate,
                          bytesReceived: report.bytesReceived,
                          packetsLost: report.packetsLost,
                          packetsReceived: report.packetsReceived,
                          codec: codec || _this.getCodecByType(_kind),
                          roundTripTime: roundTripTime
                        };
                        if (report.lastPacketReceivedTimestamp || lastPacketReceivedTimestamp) {
                          rtcStatistics[_kind].lastPacketReceivedTimestamp = report.lastPacketReceivedTimestamp || lastPacketReceivedTimestamp;
                        }
                        if (_kind === 'video' && _this._rtcStatistic.value && _this._rtcStatistic.value.video) {
                          rtcStatistics[_kind]['framesDecoded'] = report.framesDecoded;
                          var fps = (report.framesDecoded - _this._rtcStatistic.value.video.framesDecoded) / (rtcStatistics[_kind].timestamp - _this._rtcStatistic.value.video.timestamp) * 1000;
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
            case 8:
              ignored = _context.sent;
            case 9:
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
    key: "updateStatisticLegacy",
    value: function () {
      var _updateStatisticLegacy = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_15___default().mark(function _callee2() {
        var _this2 = this;
        var ignored;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_15___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this._peerConnection.getStatsLegacy().then(function (stats) {
                var rtcStatistics = {};
                var roundTripTime = _this2._estimatedRoundTripTime;
                stats.result().forEach(function (report) {
                  report.names().forEach(function (name) {
                    if (name === 'googRTT') {
                      roundTripTime = report.stat(name);
                    }
                  });
                  if (report.type === 'ssrc') {
                    var mediaType = report.stat('mediaType').toString();
                    rtcStatistics[mediaType] = {
                      timestamp: Date.now()
                    };
                    rtcStatistics[mediaType]['ssrc'] = report.stat('ssrc').toString();
                    rtcStatistics[mediaType]['mediaType'] = mediaType;
                    rtcStatistics[mediaType]['bytesReceived'] = report.stat('bytesReceived');
                    rtcStatistics[mediaType]['packetsLost'] = report.stat('packetsLost');
                    rtcStatistics[mediaType]['packetsReceived'] = report.stat('packetsReceived');
                    rtcStatistics[mediaType]['codec'] = report.stat('googCodecName').toString() || _this2.getCodecByType(mediaType);
                    rtcStatistics[mediaType]['roundTripTime'] = roundTripTime;
                    if (mediaType === 'video' && _this2._rtcStatistic.value && _this2._rtcStatistic.value.video) {
                      rtcStatistics[mediaType]['framesDecoded'] = report.stat('framesDecoded');
                      rtcStatistics[mediaType]['fps'] = (rtcStatistics[mediaType].framesDecoded - _this2._rtcStatistic.value.video.framesDecoded) / (rtcStatistics[mediaType].timestamp - _this2._rtcStatistic.value.video.timestamp) * 1000 || 0;
                    }
                  }
                });
                _this2._rtcStatistic.value = rtcStatistics;
              }).then(function () {
                if (_this2._isMonitorRunning) {
                  _this2._updateTimeOut = window.setTimeout(function () {
                    return _this2.updateStatistic();
                  }, updateStatisticTimeOut);
                }
              });
            case 2:
              ignored = _context2.sent;
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function updateStatisticLegacy() {
        return _updateStatisticLegacy.apply(this, arguments);
      }
      return updateStatisticLegacy;
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
  return RtcConnectionMonitor;
}();


/***/ }),

/***/ "./src/rtc/SdpParser.ts":
/*!******************************!*
  !*** ./src/rtc/SdpParser.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SdpParser; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.starts-with */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__);









/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var SdpParser = /*#__PURE__*/function () {
  function SdpParser(sdp) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6___default()(this, SdpParser);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_8___default()(this, "_sdp", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_8___default()(this, "_audioCodec", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_8___default()(this, "_videoCodec", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_8___default()(this, "_isAudioTrackEnabled", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_8___default()(this, "_isVideoTrackEnabled", void 0);
    this._sdp = sdp;
    var sdpSplitByLines = this._sdp.split(/(\r\n|\r|\n)/);
    var sdpSplitByTracks = this._sdp.split('m=');
    this._audioCodec = this.applyCodec('audio', sdpSplitByLines);
    this._videoCodec = this.applyCodec('video', sdpSplitByLines);
    this._isAudioTrackEnabled = this.isTrackByTypeEnabled('audio', sdpSplitByTracks);
    this._isVideoTrackEnabled = this.isTrackByTypeEnabled('video', sdpSplitByTracks);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_7___default()(SdpParser, [{
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _sdk_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sdk/feature/FeatureEnablement */ "./src/sdk/feature/FeatureEnablement.ts");












/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var VanillaPeerConnection = /*#__PURE__*/function () {
  function VanillaPeerConnection(configuration) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8___default()(this, VanillaPeerConnection);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_12__.default.getLogger('VanillaPeerConnection'));
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default()(this, "_peerConnection", void 0);
    if (_sdk_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_13__.default.webkitRTCPeerConnectionEnabled) {
      this._peerConnection = new webkitRTCPeerConnection(configuration);
      return;
    }
    this._peerConnection = new RTCPeerConnection(configuration);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_9___default()(VanillaPeerConnection, [{
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
      return !_sdk_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_13__.default.addTranceiverDisabled && typeof this._peerConnection.addTransceiver === 'function';
    }
  }, {
    key: "createOffer",
    value: function () {
      var _createOffer = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_11___default().mark(function _callee(options) {
        var _this = this;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_11___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!_sdk_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_13__.default.promiseBasedPCMethodsDisabled) {
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
      var _createAnswer = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_11___default().mark(function _callee2(options) {
        var _this2 = this;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_11___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!_sdk_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_13__.default.promiseBasedPCMethodsDisabled) {
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
      var _setLocalDescription = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_11___default().mark(function _callee3(description) {
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_11___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this._peerConnection.setLocalDescription(_sdk_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_13__.default.promiseBasedPCMethodsDisabled ? new RTCSessionDescription(description) : description));
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
      var _setRemoteDescription = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_11___default().mark(function _callee4(description) {
        var _description$sdp;
        var hasCrypto;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_11___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              hasCrypto = (_description$sdp = description.sdp) === null || _description$sdp === void 0 ? void 0 : _description$sdp.match(/a=crypto:/i);
              if (hasCrypto) {
                this._logger.warn('SDP a=crypto is not supported');
              }
              return _context4.abrupt("return", this._peerConnection.setRemoteDescription(_sdk_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_13__.default.promiseBasedPCMethodsDisabled ? new RTCSessionDescription(description) : description));
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _VanillaPeerConnection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VanillaPeerConnection */ "./src/rtc/VanillaPeerConnection.ts");





/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var VanillaPeerConnectionFactory = /*#__PURE__*/function () {
  function VanillaPeerConnectionFactory() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default()(this, VanillaPeerConnectionFactory);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default()(VanillaPeerConnectionFactory, [{
    key: "createPeerConnection",
    value: function () {
      var _createPeerConnection = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(configuration) {
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new _VanillaPeerConnection__WEBPACK_IMPORTED_MODULE_5__.default(configuration));
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ReadOnlySubject; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Subject; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits.js */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lang_Disposable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lang/Disposable */ "./src/lang/Disposable.ts");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_9___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_9___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_8___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var DisposableListener = /*#__PURE__*/function (_Disposable) {
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_7___default()(DisposableListener, _Disposable);
  var _super = _createSuper(DisposableListener);
  function DisposableListener(listeners, listener) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6___default()(this, DisposableListener);
    return _super.call(this, function () {
      var idx = listeners.indexOf(listener);
      if (idx >= 0) {
        listeners.splice(idx, 1);
      }
    });
  }
  return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_5___default()(DisposableListener);
}(_lang_Disposable__WEBPACK_IMPORTED_MODULE_10__.default);
var Subject = /*#__PURE__*/function () {
  function Subject(value) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6___default()(this, Subject);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_listeners", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_value", void 0);
    this._listeners = [];
    this._value = value;
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_5___default()(Subject, [{
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Environment; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_6__);







/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var Environment = /*#__PURE__*/function () {
  function Environment() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5___default()(this, Environment);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_6___default()(Environment, null, [{
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SDK; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.now */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _lang_Strings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lang/Strings */ "./src/lang/Strings.ts");
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../rx/Subject */ "./src/rx/Subject.ts");
/* harmony import */ var _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../rx/ReadOnlySubject */ "./src/rx/ReadOnlySubject.ts");
/* harmony import */ var _rtc_VanillaPeerConnectionFactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../rtc/VanillaPeerConnectionFactory */ "./src/rtc/VanillaPeerConnectionFactory.ts");
/* harmony import */ var _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edgeAuth/EdgeAuth */ "./src/sdk/edgeAuth/EdgeAuth.ts");
/* harmony import */ var _logger_Logger__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../logger/Logger */ "./src/logger/Logger.ts");
/* harmony import */ var _logger_ConsoleAppender__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../logger/ConsoleAppender */ "./src/logger/ConsoleAppender.ts");
/* harmony import */ var _telemetry_TelemetryApender__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../telemetry/TelemetryApender */ "./src/telemetry/TelemetryApender.ts");
/* harmony import */ var _dom_ConfigurationParameterReader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../dom/ConfigurationParameterReader */ "./src/dom/ConfigurationParameterReader.ts");
/* harmony import */ var _metrics_MetricsConfiguration__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../metrics/MetricsConfiguration */ "./src/metrics/MetricsConfiguration.ts");
/* harmony import */ var _metrics_TelemetricLevelMapping__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../metrics/TelemetricLevelMapping */ "./src/metrics/TelemetricLevelMapping.ts");
/* harmony import */ var _logger_LoggingLevelMapping__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../logger/LoggingLevelMapping */ "./src/logger/LoggingLevelMapping.ts");
/* harmony import */ var _dom_PrivacyMode__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../dom/PrivacyMode */ "./src/dom/PrivacyMode.ts");
/* harmony import */ var _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../dom/BrowserDetector */ "./src/dom/BrowserDetector.ts");
/* harmony import */ var _dom_ApplicationActivityMonitor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../dom/ApplicationActivityMonitor */ "./src/dom/ApplicationActivityMonitor.ts");
/* harmony import */ var _TelemetryUrl__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./TelemetryUrl */ "./src/sdk/TelemetryUrl.ts");
/* harmony import */ var _Environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Environment */ "./src/sdk/Environment.ts");
/* harmony import */ var _streaming_StreamTypes__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./streaming/StreamTypes */ "./src/sdk/streaming/StreamTypes.ts");
/* harmony import */ var _discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./discovery/DiscoveryUri */ "./src/sdk/discovery/DiscoveryUri.ts");
/* harmony import */ var _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../metrics/MetricsFactory */ "./src/metrics/MetricsFactory.ts");
/* harmony import */ var _metrics_TelemetryDefault__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../metrics/TelemetryDefault */ "./src/metrics/TelemetryDefault.ts");








/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */






















var pageLoadTime = window['__phenixPageLoadTime'] || window['__pageLoadTime'] || Date.now();
var SDK = /*#__PURE__*/function () {
  function SDK() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5___default()(this, SDK);
    throw new Error('SDK is a static class that may not be instantiated');
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_6___default()(SDK, null, [{
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
      return _logger_LoggingLevelMapping__WEBPACK_IMPORTED_MODULE_20__.default.convertLoggingLevelToLoggingLevelType(this._logger.threshold.value);
    }
  }, {
    key: "telemetryLevel",
    get: function get() {
      return _metrics_TelemetricLevelMapping__WEBPACK_IMPORTED_MODULE_19__.default.convertTelemetryLevelToTelemetryLevelType(SDK._telemetryLevel.value);
    }
  }, {
    key: "browserDetector",
    get: function get() {
      return _dom_BrowserDetector__WEBPACK_IMPORTED_MODULE_22__.default;
    }
  }, {
    key: "applyTelemetryConfiguration",
    value: function applyTelemetryConfiguration() {
      var _this = this;
      var telemetryConfiguration = _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_8__.default.telemetryConfiguration;
      telemetryConfiguration.sessionId = SDK.clientSessionId;
      var ignoredEnvironment = SDK._environment.subscribe(function (environment) {
        telemetryConfiguration.environment = environment;
      });
      var ignoredDiscoveryUri = SDK.telemetryUrl.subscribe(function (value) {
        var telemetryAppender = _this._logger.appenders.value.find(function (appender) {
          return appender instanceof _telemetry_TelemetryApender__WEBPACK_IMPORTED_MODULE_16__.default;
        });
        if (telemetryAppender) {
          telemetryConfiguration.url = value;
          _this._logger.appenders.remove(telemetryAppender);
          _this._logger.appenders.add(new _telemetry_TelemetryApender__WEBPACK_IMPORTED_MODULE_16__.default(telemetryConfiguration));
          _this._logger.info('Telemetry URL was set to [%s]', telemetryConfiguration.url);
        }
      });
      var ignoredTenancy = SDK._tenancy.subscribe(function (tenancy) {
        var telemetryAppender = _this._logger.appenders.value.find(function (appender) {
          return appender instanceof _telemetry_TelemetryApender__WEBPACK_IMPORTED_MODULE_16__.default;
        });
        if (telemetryAppender && tenancy) {
          telemetryConfiguration.tenancy = tenancy;
          _this._logger.appenders.remove(telemetryAppender);
          _this._logger.appenders.add(new _telemetry_TelemetryApender__WEBPACK_IMPORTED_MODULE_16__.default(telemetryConfiguration));
          _this._logger.info('Telemetry tenancy was set to [%s]', telemetryConfiguration.tenancy);
        }
      });
    }
  }, {
    key: "applyMetricsConfiguration",
    value: function applyMetricsConfiguration() {
      SDK._metricsService = _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_28__.default.getMetricsService(_discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_27__.default.uri.value);
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
        _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_28__.default.setTelemetryLevel(_metrics_MetricsConfiguration__WEBPACK_IMPORTED_MODULE_18__.TelemetryLevel[value]);
      }
      var ignoredTelemetryLevel = SDK._telemetryLevel.subscribe(function (telemetryLevel) {
        _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_28__.default.setTelemetryLevel(telemetryLevel);
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
        SDK._environment.value = _Environment__WEBPACK_IMPORTED_MODULE_25__.default.getEnvironmentFromUrl(value);
      });
      var channelToken = this._configurationParameterReader.getStringValue('phenix-channel-token');
      if (channelToken) {
        var parsedToken = _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_13__.default.parseToken(channelToken);
        SDK._tenancy.value = _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_13__.default.getTenancy(parsedToken);
        _discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_27__.default.uri.value = (_edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_13__.default.getUri(parsedToken) || SDK.discoveryUri.value).toString();
        this._logger.info('Discovery URI set from configuration parameter to [%s]', SDK.discoveryUri.value);
        return;
      }
      var uriValue = this._configurationParameterReader.getStringValue('phenix-uri');
      if (uriValue) {
        _discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_27__.default.uri.value = uriValue;
        this._logger.info('Discovery URI set from "phenix-uri" configuration parameter tag to [%s]', SDK.discoveryUri.value);
        return;
      }
      var baseURIValue = this._configurationParameterReader.getStringValue('phenix-base-uri');
      if (baseURIValue) {
        _discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_27__.default.uri.value = "".concat(baseURIValue, "/pcast/endPoints");
        this._logger.info('Discovery URI set from "phenix-base-uri" configuration parameter tag to [%s]', SDK.discoveryUri.value);
        return;
      }
    }
  }, {
    key: "init",
    value: function init(options) {
      if (!this._initialized.value) {
        this._applicationActivityMonitor = new _dom_ApplicationActivityMonitor__WEBPACK_IMPORTED_MODULE_23__.default();
      }
      if (options) {
        if (options.discoveryUri) {
          _discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_27__.default.uri.value = options.discoveryUri;
        }
        if (options.peerConnectionFactory) {
          SDK._peerConnectionFactory.value = options.peerConnectionFactory;
        }
        if (options.telemetryLevel && _metrics_MetricsConfiguration__WEBPACK_IMPORTED_MODULE_18__.TelemetryLevel[options.telemetryLevel]) {
          SDK._telemetryLevel.value = _metrics_TelemetricLevelMapping__WEBPACK_IMPORTED_MODULE_19__.default.convertTelemetryLevelTypeToTelemetryLevel(options.telemetryLevel);
        }
        if (options.loggingLevel && _logger_Logger__WEBPACK_IMPORTED_MODULE_14__.LoggingLevel[options.loggingLevel]) {
          this._logger.threshold.setThreshold(_logger_LoggingLevelMapping__WEBPACK_IMPORTED_MODULE_20__.default.convertLoggingLevelTypeToLoggingLevel(options.loggingLevel));
        }
        if (options.consoleLoggingLevel && _logger_Logger__WEBPACK_IMPORTED_MODULE_14__.LoggingLevel[options.consoleLoggingLevel]) {
          var consoleAppender = this._logger.appenders.value.find(function (appender) {
            return appender instanceof _logger_ConsoleAppender__WEBPACK_IMPORTED_MODULE_15__.default;
          });
          if (consoleAppender) {
            this._logger.appenders.remove(consoleAppender);
          }
          if (options.consoleLoggingLevel !== 'Off') {
            this._logger.appenders.add(new _logger_ConsoleAppender__WEBPACK_IMPORTED_MODULE_15__.default(_logger_LoggingLevelMapping__WEBPACK_IMPORTED_MODULE_20__.default.convertLoggingLevelTypeToLoggingLevel(options.consoleLoggingLevel)));
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
      return _TelemetryUrl__WEBPACK_IMPORTED_MODULE_24__.default.getTelemetryUrl(url);
    }
  }]);
  return SDK;
}();
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_automaticallyRetryOnFailure", true);
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_automaticallyReconnectPeerConnection", true);
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_automaticallyPlayMediaStream", true);
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_automaticallyMuteVideoOnPlayFailure", true);
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_webPlayerLoader", null);
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_shakaPlayerLoader", null);
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_hlsJsLoader", null);
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_configurationParameterReader", new _dom_ConfigurationParameterReader__WEBPACK_IMPORTED_MODULE_17__.default());
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_applicationActivityMonitor", void 0);
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_environment", new _rx_Subject__WEBPACK_IMPORTED_MODULE_10__.default(''));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_telemetryUrl", new _rx_Subject__WEBPACK_IMPORTED_MODULE_10__.default('https://telemetry.phenixrts.com/telemetry'));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_maximalNumberOfPeerConnectionReconnectAttempts", 8);
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_telemetryLevel", new _rx_Subject__WEBPACK_IMPORTED_MODULE_10__.default(_metrics_TelemetryDefault__WEBPACK_IMPORTED_MODULE_29__.default.defaultTelemetryLevel));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_metricsService", void 0);
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_metricsConfiguration", void 0);
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_sendLocalCandidates", new _rx_Subject__WEBPACK_IMPORTED_MODULE_10__.default(!_dom_PrivacyMode__WEBPACK_IMPORTED_MODULE_21__.default.isPrivate));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_tenancy", new _rx_Subject__WEBPACK_IMPORTED_MODULE_10__.default(''));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_clientSessionId", _lang_Strings__WEBPACK_IMPORTED_MODULE_9__.default.random(32));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_loadedTimestamp", new Date());
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_8__.default.getLogger('SDK'));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_initialized", new _rx_Subject__WEBPACK_IMPORTED_MODULE_10__.default(false));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_peerConnectionFactory", new _rx_Subject__WEBPACK_IMPORTED_MODULE_10__.default(new _rtc_VanillaPeerConnectionFactory__WEBPACK_IMPORTED_MODULE_12__.default()));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_readOnlyInitialized", new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_11__.default(SDK._initialized));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_readOnlyDiscoveryUri", new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_11__.default(_discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_27__.default.uri));
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(SDK, "_readOnlyPeerConnectionFactory", new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_11__.default(SDK._peerConnectionFactory));

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TelemetryUrl; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.ends-with */ "./node_modules/core-js/modules/es.string.ends-with.js");
/* harmony import */ var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.starts-with */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_13__);














/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var TelemetryUrl = /*#__PURE__*/function () {
  function TelemetryUrl() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_12___default()(this, TelemetryUrl);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_13___default()(TelemetryUrl, null, [{
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BitrateState": function() { return /* binding */ BitrateState; },
/* harmony export */   "BitrateMode": function() { return /* binding */ BitrateMode; }
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

/***/ "./src/sdk/channels/Channel.ts":
/*!*************************************!*
  !*** ./src/sdk/channels/Channel.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Channel; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.now */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.promise.finally */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../rx/ReadOnlySubject */ "./src/rx/ReadOnlySubject.ts");
/* harmony import */ var _video_Dimension__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../video/Dimension */ "./src/video/Dimension.ts");
/* harmony import */ var _SDK__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _ChannelState__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ChannelState */ "./src/sdk/channels/ChannelState.ts");
/* harmony import */ var _lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../lang/assertUnreachable */ "./src/lang/assertUnreachable.ts");
/* harmony import */ var _lang_Disposable__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../lang/Disposable */ "./src/lang/Disposable.ts");
/* harmony import */ var _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../edgeAuth/EdgeAuth */ "./src/sdk/edgeAuth/EdgeAuth.ts");
/* harmony import */ var _video_VideoTelemetry__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../video/VideoTelemetry */ "./src/video/VideoTelemetry.ts");
/* harmony import */ var _video_SessionTelemetry__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../video/SessionTelemetry */ "./src/video/SessionTelemetry.ts");
/* harmony import */ var _api_SetTemporaryMaximalBitrate__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../api/SetTemporaryMaximalBitrate */ "./src/sdk/api/SetTemporaryMaximalBitrate.ts");
/* harmony import */ var _context_TokenContext__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../context/TokenContext */ "./src/context/TokenContext.ts");
/* harmony import */ var _ChannelContext__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ChannelContext */ "./src/sdk/channels/ChannelContext.ts");
/* harmony import */ var _context_PeerConnectionContext__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../context/PeerConnectionContext */ "./src/context/PeerConnectionContext.ts");
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../context/StateContext */ "./src/context/StateContext.ts");
/* harmony import */ var _streaming_StreamFactory__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../streaming/StreamFactory */ "./src/sdk/streaming/StreamFactory.ts");
/* harmony import */ var _discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../discovery/DiscoveryUri */ "./src/sdk/discovery/DiscoveryUri.ts");
/* harmony import */ var _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../metrics/MetricsFactory */ "./src/metrics/MetricsFactory.ts");





















/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


















var defaultTargetLag = 0;
var defaultStreamTerminationReason = 'client:termination';
var backoffIntervalInMilliseconds = 2000;
var failureCountCleanUpIntervalInMilliseconds = 3000;
var maxBackoffIntervalInMilliseconds = 300000;
var standbyPollingIntervalInMilliseconds = 15000;
var Channel = /*#__PURE__*/function () {
  function Channel(videoElement, token) {
    var _this = this;
    var targetLag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultTargetLag;
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_17___default()(this, Channel);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_21__.default.getLogger('Channel'));
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_tokenContext", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_channelContext", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_peerConnectionContext", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_stateContext", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_channelStartTime", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_readOnlyVideoElement", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_readOnlyToken", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_readOnlyPeerConnection", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_readOnlyState", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_readOnlyAutoMuted", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_readOnlyAutoPaused", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_readOnlyTokenExpiring", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_readOnlyAuthorized", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_readOnlyOnline", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_readOnlyLoading", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_readOnlyPlaying", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_readOnlyStandby", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_readOnlyStopped", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_readOnlyTargetLag", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_readOnlyLag", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_readOnlyBitrateLimit", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_readOnlyResolution", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_readOnlyFailureCount", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_readOnlyEndPoint", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_readOnlyStream", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_readOnlyRtcStatistics", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_readOnlyMediaStream", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_metricsService", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_sessionTelemetry", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_19___default()(this, "_videoMetaDataChangedHandler", void 0);
    this._tokenContext = new _context_TokenContext__WEBPACK_IMPORTED_MODULE_32__.default(token);
    this._channelContext = new _ChannelContext__WEBPACK_IMPORTED_MODULE_33__.default(targetLag);
    this._peerConnectionContext = new _context_PeerConnectionContext__WEBPACK_IMPORTED_MODULE_34__.default();
    this._stateContext = new _context_StateContext__WEBPACK_IMPORTED_MODULE_35__.default();
    this._channelStartTime = Date.now();
    this._readOnlyVideoElement = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_22__.default(this._channelContext.videoElement);
    this._readOnlyToken = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_22__.default(this._tokenContext.token);
    this._readOnlyPeerConnection = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_22__.default(this._peerConnectionContext.peerConnection);
    this._readOnlyState = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_22__.default(this._channelContext.state);
    this._readOnlyAutoMuted = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_22__.default(this._channelContext.autoMuted);
    this._readOnlyAutoPaused = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_22__.default(this._channelContext.autoPaused);
    this._readOnlyTokenExpiring = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_22__.default(this._tokenContext.tokenExpiring);
    this._readOnlyAuthorized = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_22__.default(this._channelContext.authorized);
    this._readOnlyOnline = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_22__.default(this._channelContext.online);
    this._readOnlyLoading = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_22__.default(this._channelContext.loading);
    this._readOnlyPlaying = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_22__.default(this._channelContext.playing);
    this._readOnlyStandby = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_22__.default(this._channelContext.standby);
    this._readOnlyStopped = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_22__.default(this._channelContext.stopped);
    this._readOnlyTargetLag = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_22__.default(this._channelContext.targetLag);
    this._readOnlyLag = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_22__.default(this._channelContext.lag);
    this._readOnlyBitrateLimit = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_22__.default(this._channelContext.bitrateLimit);
    this._readOnlyResolution = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_22__.default(this._channelContext.resolution);
    this._readOnlyFailureCount = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_22__.default(this._channelContext.failureCount);
    this._readOnlyEndPoint = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_22__.default(this._channelContext.endPoint);
    this._readOnlyStream = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_22__.default(this._channelContext.stream);
    this._readOnlyRtcStatistics = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_22__.default(this._channelContext.rtcStatistics);
    this._readOnlyMediaStream = new _rx_ReadOnlySubject__WEBPACK_IMPORTED_MODULE_22__.default(this._peerConnectionContext.mediaStream);
    var parsedToken = _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_28__.default.parseToken(this._tokenContext.token.value);
    var discoveryUri = (_edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_28__.default.getUri(parsedToken) || _SDK__WEBPACK_IMPORTED_MODULE_24__.default.discoveryUri.value).toString();
    _SDK__WEBPACK_IMPORTED_MODULE_24__.default.tenancy.value = _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_28__.default.getTenancy(parsedToken) || _SDK__WEBPACK_IMPORTED_MODULE_24__.default.tenancy.value;
    _discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_37__.default.uri.value = discoveryUri;
    this._metricsService = _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_38__.default.getMetricsService(discoveryUri);
    this._sessionTelemetry = new _video_SessionTelemetry__WEBPACK_IMPORTED_MODULE_30__.default(_SDK__WEBPACK_IMPORTED_MODULE_24__.default.pageLoadTime, this._metricsService);
    this._channelContext.channelDisposables.add(this._sessionTelemetry);
    this._videoMetaDataChangedHandler = this.handleVideoMetaDataChanged.bind(this);
    this.videoElement = videoElement;
    this._channelContext.channelDisposables.add(this._channelContext.videoElement.subscribe(function (videoElement) {
      _this._channelContext.rendererDisposables.dispose();
      if (!videoElement) {
        return;
      }
      _this._channelContext.rendererDisposables.add(_this._channelContext.stream.subscribe(function (stream) {
        if (_this._channelContext.videoTelemetry) {
          _this._channelContext.videoTelemetry.dispose();
        }
        if (!stream) {
          return;
        }
        if (!_this.videoElement) {
          return;
        }
        if (_this.videoElement.dataset) {
          _this.videoElement.dataset.sessionId = _SDK__WEBPACK_IMPORTED_MODULE_24__.default.clientSessionId;
          _this.videoElement.dataset.streamId = _this.streamId;
        }
        _this._channelContext.videoTelemetry = new _video_VideoTelemetry__WEBPACK_IMPORTED_MODULE_29__.default(_this.streamId, _SDK__WEBPACK_IMPORTED_MODULE_24__.default.pageLoadTime, _this._channelStartTime, _this._metricsService);
        _this._channelContext.videoTelemetry.setupListenerForTimeToFirstTime(_this.videoElement);
        _this._channelContext.videoTelemetry.setupListenerForRebuffering(_this.videoElement);
        if (_this._channelContext.state.value === _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Stopped) {
          var ignored = _this.restartAfterStop();
        }
      }));
      _this._channelContext.channelDisposables.add(_this._channelContext.rendererDisposables);
    }));
    this._channelContext.channelDisposables.add(this._channelContext.state.subscribe(function (state) {
      if (_this._channelContext.clearFailureCountTimeout) {
        clearTimeout(_this._channelContext.clearFailureCountTimeout);
      }
      if (!_this._channelContext.failureCount.value) {
        return;
      }
      if (state !== _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Playing) {
        return;
      }
      _this._channelContext.clearFailureCountTimeout = window.setTimeout(function () {
        _this._channelContext.failureCount.value = 0;
      }, failureCountCleanUpIntervalInMilliseconds);
    }));
    this._channelContext.channelDisposables.add(this._channelContext.resolution.subscribe(function (resolution) {
      if (_this._channelContext.videoTelemetry) {
        _this._channelContext.videoTelemetry.onVideoResolutionChanges(resolution.toString());
      }
    }));
    this._channelContext.channelDisposables.add(this._channelContext.bitrateLimit.subscribe(function (bitrateLimit) {
      if (bitrateLimit && _this._channelContext.endPoint.value && _this._channelContext.stream.value) {
        var elapsedInMilliseconds = Date.now() - _this._channelContext.channelInitialization.getTime();
        var ignored = _this._channelContext.endPoint.value.limitBitrate(_this._channelContext.stream.value, elapsedInMilliseconds, bitrateLimit, _api_SetTemporaryMaximalBitrate__WEBPACK_IMPORTED_MODULE_31__.BitrateState.Keep, _api_SetTemporaryMaximalBitrate__WEBPACK_IMPORTED_MODULE_31__.BitrateMode.Normal)["catch"](function (e) {
          _this._logger.error('Error while setting limit bitrate', e);
        });
      }
    }));
    var destroyStreamOnUnmount = function destroyStreamOnUnmount() {
      if (_this._channelContext.stream.value && _this._channelContext.endPoint.value) {
        var ignored = _this._channelContext.endPoint.value.destroyStream(_this._channelContext.stream.value, 'client:termination-on-window-unload');
      }
    };
    window.addEventListener('beforeunload', destroyStreamOnUnmount);
    this._channelContext.channelDisposables.add(new _lang_Disposable__WEBPACK_IMPORTED_MODULE_27__.default(function () {
      window.removeEventListener('beforeunload', destroyStreamOnUnmount);
    }));
    this.start();
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_18___default()(Channel, [{
    key: "videoElement",
    get: function get() {
      return this._channelContext.videoElement.value;
    },
    set: function set(videoElement) {
      if (this._channelContext.videoElement.value) {
        this._channelContext.videoElement.value.removeEventListener('loadeddata', this._videoMetaDataChangedHandler);
        this._channelContext.videoElement.value.removeEventListener('loadedmetadata', this._videoMetaDataChangedHandler);
        this._channelContext.videoElement.value.removeEventListener('resize', this._videoMetaDataChangedHandler);
        if (this._channelContext.videoElement.value.dataset) {
          this._channelContext.videoElement.value.dataset.sessionId = '';
          this._channelContext.videoElement.value.dataset.streamId = '';
        }
        this._channelContext.rendererDisposables.dispose();
        this._channelContext.videoElement.value.pause();
        this._channelContext.videoElement.value.srcObject = null;
      }
      this._channelContext.autoMuted.value = false;
      this._channelContext.autoPaused.value = false;
      this._channelContext.loading.value = false;
      this._channelContext.playing.value = false;
      this._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Stopped;
      this._channelContext.videoElement.value = videoElement;
      if (this._channelContext.videoElement.value) {
        this._channelContext.videoElement.value.addEventListener('loadeddata', this._videoMetaDataChangedHandler);
        this._channelContext.videoElement.value.addEventListener('loadedmetadata', this._videoMetaDataChangedHandler);
        this._channelContext.videoElement.value.addEventListener('resize', this._videoMetaDataChangedHandler);
      }
    }
  }, {
    key: "handleVideoMetaDataChanged",
    value: function handleVideoMetaDataChanged() {
      var videoElement = this._channelContext.videoElement.value;
      if (videoElement) {
        if (this.resolution.value.width !== videoElement.videoWidth || this.resolution.value.height !== videoElement.videoHeight) {
          this._channelContext.resolution.value = new _video_Dimension__WEBPACK_IMPORTED_MODULE_23__.default(videoElement.videoWidth, videoElement.videoHeight);
        }
      } else {
        this._channelContext.resolution.value = _video_Dimension__WEBPACK_IMPORTED_MODULE_23__.default.empty;
      }
    }
  }, {
    key: "token",
    get: function get() {
      return this._tokenContext.token.value;
    },
    set: function set(token) {
      this._channelContext.disposables.dispose();
      this._tokenContext.token.value = token;
      this._tokenContext.tokenExpiring.value = false;
      var parsedToken = _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_28__.default.parseToken(this._tokenContext.token.value);
      var discoveryUri = (_edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_28__.default.getUri(parsedToken) || _SDK__WEBPACK_IMPORTED_MODULE_24__.default.discoveryUri.value).toString();
      _SDK__WEBPACK_IMPORTED_MODULE_24__.default.tenancy.value = _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_28__.default.getTenancy(parsedToken) || _SDK__WEBPACK_IMPORTED_MODULE_24__.default.tenancy.value;
      _discovery_DiscoveryUri__WEBPACK_IMPORTED_MODULE_37__.default.uri.value = discoveryUri;
      this._metricsService = _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_38__.default.getMetricsService(discoveryUri);
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
    key: "autoMuted",
    get: function get() {
      return this._readOnlyAutoMuted;
    }
  }, {
    key: "autoPaused",
    get: function get() {
      return this._readOnlyAutoPaused;
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
    key: "playing",
    get: function get() {
      return this._readOnlyPlaying;
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
    key: "targetLag",
    get: function get() {
      return this._readOnlyTargetLag;
    }
  }, {
    key: "lag",
    get: function get() {
      return this._readOnlyLag;
    }
  }, {
    key: "bitrateLimit",
    get: function get() {
      return this._readOnlyBitrateLimit.value;
    }
  }, {
    key: "resolution",
    get: function get() {
      return this._readOnlyResolution;
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
      return this._channelContext.streamId;
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
    key: "setBitrateLimit",
    value: function setBitrateLimit(bitrateLimit) {
      this._channelContext.bitrateLimit.value = bitrateLimit;
    }
  }, {
    key: "clearBitrateLimit",
    value: function clearBitrateLimit() {
      var _this2 = this;
      if (this._channelContext.bitrateLimit.value && this._channelContext.endPoint.value && this._channelContext.stream.value) {
        var elapsedInMilliseconds = Date.now() - this._channelContext.channelInitialization.getTime();
        var bitrateInBitsPerSecond = 0;
        var ignored = this._channelContext.endPoint.value.limitBitrate(this._channelContext.stream.value, elapsedInMilliseconds, bitrateInBitsPerSecond, _api_SetTemporaryMaximalBitrate__WEBPACK_IMPORTED_MODULE_31__.BitrateState.Keep, _api_SetTemporaryMaximalBitrate__WEBPACK_IMPORTED_MODULE_31__.BitrateMode.Reset).then(function (_ref) {
          var status = _ref.status;
          if (status === 'ok') {
            _this2._channelContext.bitrateLimit.value = 0;
          }
        })["catch"](function (e) {
          _this2._logger.error('Error while setting limit bitrate', e);
        });
      }
    }
  }, {
    key: "updateTargetLag",
    value: function updateTargetLag(lag) {
      this._channelContext.targetLag.value = lag;
    }
  }, {
    key: "stop",
    value: function () {
      var _stop = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_20___default().mark(function _callee(reason) {
        var _this3 = this;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_20___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new Promise(function (resolve) {
                if (!_this3._stateContext.isStarting.value) {
                  _this3.processStop(reason);
                  resolve();
                  return;
                }
                _this3._channelContext.rendererDisposables.add(_this3._stateContext.isStarting.subscribe(function (isStarting) {
                  if (!isStarting) {
                    _this3.processStop(reason);
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
      if (this._channelContext.videoElement.value) {
        this._channelContext.videoElement.value.pause();
        this._channelContext.videoElement.value.srcObject = null;
      }
      this._channelContext.rendererDisposables.dispose();
      this.cleanUpResources(reason);
      this._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Stopped;
    }
  }, {
    key: "resume",
    value: function () {
      var _resume = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_20___default().mark(function _callee2() {
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_20___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!this._peerConnectionContext.mediaStream.value) {
                _context2.next = 3;
                break;
              }
              this._channelContext.autoPaused.value = false;
              return _context2.abrupt("return", this.playMediaStreamInVideoElement(this._peerConnectionContext.mediaStream.value));
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function resume() {
        return _resume.apply(this, arguments);
      }
      return resume;
    }()
  }, {
    key: "mute",
    value: function mute() {
      var videoElement = this._channelContext.videoElement.value;
      if (videoElement) {
        videoElement.muted = true;
      }
    }
  }, {
    key: "unmute",
    value: function unmute() {
      var videoElement = this._channelContext.videoElement.value;
      if (videoElement) {
        videoElement.muted = false;
        this._channelContext.autoMuted.value = false;
      }
    }
  }, {
    key: "dispose",
    value: function () {
      var _dispose = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_20___default().mark(function _callee3() {
        var _this4 = this;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_20___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.stop('client:channel-dispose').then(function () {
                _this4._channelContext.channelDisposables.dispose();
                _this4._stateContext.isDisposed = true;
              }));
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function dispose() {
        return _dispose.apply(this, arguments);
      }
      return dispose;
    }()
  }, {
    key: "getUri",
    value: function getUri(token) {
      var parsedToken = _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_28__.default.parseToken(token);
      var url = _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_28__.default.getUri(parsedToken);
      if (url) {
        return url;
      }
      this._logger.info('Fall back to the default discover URI [%s]', _SDK__WEBPACK_IMPORTED_MODULE_24__.default.discoveryUri.value);
      return new URL(_SDK__WEBPACK_IMPORTED_MODULE_24__.default.discoveryUri.value);
    }
  }, {
    key: "start",
    value: function () {
      var _start = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_20___default().mark(function _callee4() {
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_20___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!this._stateContext.isDisposed) {
                _context4.next = 2;
                break;
              }
              throw new Error('Channel was already disposed');
            case 2:
              if (!this._stateContext.isStarting.value) {
                _context4.next = 5;
                break;
              }
              this._logger.info('Channel is already starting, skipping start');
              return _context4.abrupt("return");
            case 5:
              this._stateContext.isStarting.value = true;
              return _context4.abrupt("return", this.processStart());
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function start() {
        return _start.apply(this, arguments);
      }
      return start;
    }()
  }, {
    key: "processStart",
    value: function () {
      var _processStart = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_20___default().mark(function _callee5() {
        var _this5 = this;
        var token, listenOnStreamSetup, uri, handleStreamFailureCallback, streamPlayer;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_20___default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              token = this._tokenContext.token.value;
              listenOnStreamSetup = this._sessionTelemetry.listenOnStreamSetup();
              if (_edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_28__.default.isValidToken(token)) {
                _context5.next = 8;
                break;
              }
              this._logger.error('Failed to parse token [%s]', token);
              this._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Unauthorized;
              this._channelContext.authorized.value = false;
              this._stateContext.isStarting.value = false;
              return _context5.abrupt("return");
            case 8:
              this.cleanUpResources('client:start');
              this._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Starting;
              this._channelContext.loading.value = true;
              uri = this.getUri(token);
              handleStreamFailureCallback = function handleStreamFailureCallback() {
                return new Promise(function (resolve) {
                  // Need to set isStarting to false and call handleStreamFailure if stream monitors found an issue
                  _this5._stateContext.isStarting.value = false;
                  return resolve(_this5.handleStreamFailure());
                });
              };
              streamPlayer = _streaming_StreamFactory__WEBPACK_IMPORTED_MODULE_36__.default.create(token, this._channelContext, this._peerConnectionContext, handleStreamFailureCallback);
              if (streamPlayer) {
                _context5.next = 17;
                break;
              }
              this._stateContext.isStarting.value = false;
              return _context5.abrupt("return");
            case 17:
              return _context5.abrupt("return", streamPlayer.start(uri, token, listenOnStreamSetup, this.playMediaStreamInVideoElement.bind(this)).then(function () {
                _this5._channelContext.loading.value = false;
              })["catch"](function (e) {
                listenOnStreamSetup.fail();
                _this5._channelContext.failureCount.value++;
                _this5._channelContext.online.value = false;
                _this5.cleanUpResources('client:cleanup-after-failed-setup');
                _this5._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Error;
                _this5._logger.error('Failed to start channel', e);
              })["finally"](function () {
                _this5._stateContext.isStarting.value = false;
                if (_this5._channelContext.state.value === _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Playing || !_SDK__WEBPACK_IMPORTED_MODULE_24__.default.automaticRetryOnFailure) {
                  return;
                }
                var timeoutId = setTimeout(function () {
                  var ignored = _this5.handleStreamFailure()["catch"](function (e) {
                    _this5._logger.error('Failed handling stream failure', e);
                  });
                }, _this5.getRetryInterval());
                _this5._channelContext.disposables.add(new _lang_Disposable__WEBPACK_IMPORTED_MODULE_27__.default(function () {
                  clearTimeout(timeoutId);
                }));
              }));
            case 18:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function processStart() {
        return _processStart.apply(this, arguments);
      }
      return processStart;
    }()
  }, {
    key: "restartAfterStop",
    value: function () {
      var _restartAfterStop = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_20___default().mark(function _callee6() {
        var ignored;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_20___default().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!this._stateContext.isDisposed) {
                _context6.next = 2;
                break;
              }
              throw new Error('Channel was already disposed');
            case 2:
              if (!this._peerConnectionContext.mediaStream.value) {
                _context6.next = 4;
                break;
              }
              return _context6.abrupt("return", this.playMediaStreamInVideoElement(this._peerConnectionContext.mediaStream.value));
            case 4:
              if (this._tokenContext.token.value) {
                ignored = this.start();
              }
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function restartAfterStop() {
        return _restartAfterStop.apply(this, arguments);
      }
      return restartAfterStop;
    }()
  }, {
    key: "play",
    value: function () {
      var _play = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_20___default().mark(function _callee7() {
        var mediaStream;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_20___default().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              mediaStream = this._peerConnectionContext.mediaStream.value;
              if (mediaStream) {
                _context7.next = 3;
                break;
              }
              return _context7.abrupt("return", this.start());
            case 3:
              return _context7.abrupt("return", this.playMediaStreamInVideoElement(mediaStream));
            case 4:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function play() {
        return _play.apply(this, arguments);
      }
      return play;
    }()
  }, {
    key: "getRetryInterval",
    value: function getRetryInterval() {
      switch (this._channelContext.state.value) {
        case _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.StandBy:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Offline:
          return standbyPollingIntervalInMilliseconds;
        case _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Error:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Recovering:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Unauthorized:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.GeoRestricted:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.GeoBlocked:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Stopped:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Starting:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Playing:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Paused:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Reconnecting:
        case _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.UnsupportedFeature:
          // First and second attempt fast, after that exponential with backoff interval
          return Math.min(maxBackoffIntervalInMilliseconds, Math.pow(backoffIntervalInMilliseconds, Math.max(0, this._channelContext.failureCount.value - 1)));
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_26__.default)(this._channelContext.state.value);
      }
    }
  }, {
    key: "handleStreamFailure",
    value: function () {
      var _handleStreamFailure = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_20___default().mark(function _callee8() {
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_20___default().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.t0 = this._channelContext.state.value;
              _context8.next = _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Error ? 3 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Reconnecting ? 3 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.StandBy ? 3 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Offline ? 3 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Recovering ? 3 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Unauthorized ? 5 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.GeoRestricted ? 7 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.GeoBlocked ? 9 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Stopped ? 11 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Playing ? 13 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Paused ? 15 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Starting ? 17 : _context8.t0 === _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.UnsupportedFeature ? 19 : 21;
              break;
            case 3:
              this._logger.info('Retry start with initial state [%s] [%s]', this._channelContext.state.value, _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default[this._channelContext.state.value]);
              return _context8.abrupt("break", 22);
            case 5:
              this._logger.info('Channel is unauthorized, skipping retry of start. Please provide a new token and invoke start()');
              return _context8.abrupt("return");
            case 7:
              this._logger.info('Channel is geo restricted, skipping retry of start. Please provide a new token and invoke start()');
              return _context8.abrupt("return");
            case 9:
              this._logger.info('Channel is geo blocked, skipping retry of start. Please provide a new token and invoke start()');
              return _context8.abrupt("return");
            case 11:
              this._logger.info('Channel is stopped, skipping retry of start.');
              return _context8.abrupt("return");
            case 13:
              this._logger.info('Channel is playing, skipping retry of start');
              return _context8.abrupt("return");
            case 15:
              this._logger.info('Channel is paused, skipping retry of start. Please invoke play()');
              return _context8.abrupt("return");
            case 17:
              this._logger.info('Channel is already starting, skipping retry of start');
              return _context8.abrupt("return");
            case 19:
              this._logger.info('Channel is stopped due to unsupported feature, skipping retry of start.');
              return _context8.abrupt("return");
            case 21:
              (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_26__.default)(this._channelContext.state.value);
            case 22:
              return _context8.abrupt("return", this.start());
            case 23:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
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
      this._channelContext.disposables.dispose();
      var peerConnection = this._peerConnectionContext.peerConnection.value;
      if (peerConnection) {
        this._peerConnectionContext.peerConnection.value = null;
        peerConnection.close();
      }
      if (this._peerConnectionContext.mediaStream.value) {
        this._peerConnectionContext.mediaStream.value.getTracks().forEach(function (track) {
          return track.stop();
        });
        this._peerConnectionContext.mediaStream.value = null;
      }
      this._channelContext.autoPaused.value = false;
      this._channelContext.autoMuted.value = false;
      this._channelContext.playing.value = false;
      this._channelContext.stopped.value = true;
      this._channelContext.standby.value = false;
      if (this._channelContext.stream.value && this._channelContext.endPoint.value) {
        var ignored = this._channelContext.endPoint.value.destroyStream(this._channelContext.stream.value, reason).then(function (_ref2) {
          var status = _ref2.status;
          if (status !== 'ok') {
            _this6._logger.warn('[%s] Failed to destroy stream with reason [%s]', _this6.streamId, status);
            return;
          }
          _this6._logger.info('[%s] Destroyed stream with reason [%s]', _this6.streamId, status);
        })["catch"](function (e) {
          _this6._logger.error('[%s] Failed to destroy stream', _this6.streamId, e);
        });
      }
      if (this.videoElement && this.videoElement.dataset) {
        this.videoElement.dataset.sessionId = '';
        this.videoElement.dataset.streamId = '';
      }
      this._channelContext.stream.value = null;
      this._channelContext.endPoint.value = null;
      this._peerConnectionContext.peerConnectionReconnectAttempts = 0;
    }
  }, {
    key: "playMediaStreamInVideoElement",
    value: function () {
      var _playMediaStreamInVideoElement = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_20___default().mark(function _callee9(mediaStream) {
        var _this7 = this;
        var videoElement, playPromise;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_20___default().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              videoElement = this._channelContext.videoElement.value;
              if (videoElement) {
                _context9.next = 8;
                break;
              }
              this._channelContext.autoMuted.value = false;
              this._channelContext.autoPaused.value = false;
              this._channelContext.loading.value = false;
              this._channelContext.playing.value = false;
              this._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Stopped;
              return _context9.abrupt("return");
            case 8:
              videoElement.srcObject = mediaStream;
              playPromise = videoElement.play();
              if (!(playPromise === undefined)) {
                _context9.next = 17;
                break;
              }
              this._channelContext.autoMuted.value = false;
              this._channelContext.autoPaused.value = false;
              this._channelContext.loading.value = false;
              this._channelContext.playing.value = true;
              this._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Playing;
              return _context9.abrupt("return");
            case 17:
              return _context9.abrupt("return", playPromise.then(function () {
                _this7._channelContext.autoMuted.value = false;
                _this7._channelContext.autoPaused.value = false;
                _this7._channelContext.loading.value = false;
                _this7._channelContext.playing.value = true;
                _this7._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Playing;
              })["catch"](function (e) {
                var hasAudioTrack = !!mediaStream.getTracks().filter(function (track) {
                  return track.kind === 'audio';
                });
                var automaticallyMuteVideoOnPlayFailureOff = !_SDK__WEBPACK_IMPORTED_MODULE_24__.default.automaticallyMuteVideoOnPlayFailure;
                if (automaticallyMuteVideoOnPlayFailureOff || videoElement.muted || !hasAudioTrack) {
                  _this7._channelContext.autoMuted.value = false;
                  _this7._channelContext.autoPaused.value = true;
                  _this7._channelContext.loading.value = false;
                  _this7._channelContext.playing.value = false;
                  _this7._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Paused;
                  if (automaticallyMuteVideoOnPlayFailureOff) {
                    _this7._logger.info('[%s] Paused video after play failed. Manual user action required.', _this7.streamId, e);
                    videoElement.srcObject = null;
                    return;
                  }
                  if (hasAudioTrack) {
                    _this7._logger.info('[%s] Failed to play video. Manual user action required.', _this7.streamId, e);
                    return;
                  }
                  _this7._logger.info('[%s] Failed to play muted video. Manual user action required.', _this7.streamId, e);
                  return;
                }
                videoElement.muted = true;
                return videoElement.play().then(function () {
                  _this7._logger.info('[%s] Played video after auto muting. Manual user action required to unmute.', _this7.streamId);
                  _this7._channelContext.autoMuted.value = true;
                  _this7._channelContext.autoPaused.value = false;
                  _this7._channelContext.loading.value = false;
                  _this7._channelContext.playing.value = true;
                  _this7._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Playing;
                })["catch"](function (e) {
                  videoElement.muted = false;
                  _this7._logger.info('[%s] Failed to play video. Manual user action required.', _this7.streamId, e);
                  _this7._channelContext.autoMuted.value = false;
                  _this7._channelContext.autoPaused.value = true;
                  _this7._channelContext.loading.value = false;
                  _this7._channelContext.playing.value = false;
                  _this7._channelContext.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_25__.default.Paused;
                });
              }));
            case 18:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function playMediaStreamInVideoElement(_x2) {
        return _playMediaStreamInVideoElement.apply(this, arguments);
      }
      return playMediaStreamInVideoElement;
    }()
  }]);
  return Channel;
}();


/***/ }),

/***/ "./src/sdk/channels/ChannelContext.ts":
/*!********************************************!*
  !*** ./src/sdk/channels/ChannelContext.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ChannelContext; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rx/Subject */ "./src/rx/Subject.ts");
/* harmony import */ var _ChannelState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChannelState */ "./src/sdk/channels/ChannelState.ts");
/* harmony import */ var _video_Dimension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../video/Dimension */ "./src/video/Dimension.ts");
/* harmony import */ var _SDK__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lang/assertUnreachable */ "./src/lang/assertUnreachable.ts");
/* harmony import */ var _lang_DisposableList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lang/DisposableList */ "./src/lang/DisposableList.ts");




/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */






var ChannelContext = /*#__PURE__*/function () {
  function ChannelContext(targetLag) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, ChannelContext);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "channelInitialization", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "disposables", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "channelDisposables", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "rendererDisposables", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "videoElement", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "state", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "autoMuted", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "autoPaused", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "authorized", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "online", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "loading", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "playing", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "standby", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "stopped", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "targetLag", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "lag", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "bitrateLimit", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "resolution", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "failureCount", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "endPoint", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "stream", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "rtcStatistics", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "videoTelemetry", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "rtcAudioStatistic", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "rtcVideoStatistic", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "clearFailureCountTimeout", void 0);
    this.disposables = new _lang_DisposableList__WEBPACK_IMPORTED_MODULE_9__.default();
    this.channelDisposables = new _lang_DisposableList__WEBPACK_IMPORTED_MODULE_9__.default();
    this.rendererDisposables = new _lang_DisposableList__WEBPACK_IMPORTED_MODULE_9__.default();
    this.channelInitialization = new Date();
    this.videoElement = new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__.default(null);
    this.state = new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__.default(_ChannelState__WEBPACK_IMPORTED_MODULE_5__.default.Starting);
    this.autoMuted = new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__.default(false);
    this.autoPaused = new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__.default(false);
    this.authorized = new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__.default(true);
    this.online = new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__.default(true);
    this.loading = new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__.default(false);
    this.playing = new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__.default(false);
    this.standby = new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__.default(false);
    this.stopped = new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__.default(false);
    this.targetLag = new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__.default(targetLag);
    this.lag = new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__.default(0);
    this.bitrateLimit = new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__.default(0);
    this.resolution = new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__.default(_video_Dimension__WEBPACK_IMPORTED_MODULE_6__.default.empty);
    this.failureCount = new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__.default(0);
    this.endPoint = new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__.default(null);
    this.stream = new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__.default(null);
    this.rtcStatistics = new _rx_Subject__WEBPACK_IMPORTED_MODULE_4__.default(null);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(ChannelContext, [{
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
          this.playing.value = false;
          this.standby.value = true;
          this.stopped.value = false;
          this.stream.value = null;
          return;
        default:
          this.failureCount.value++;
          this.playing.value = false;
          this.standby.value = true;
          this.stopped.value = false;
          this.stream.value = null;
          this.state.value = _ChannelState__WEBPACK_IMPORTED_MODULE_5__.default.Error;
          return;
      }
    }
  }, {
    key: "applySessionAndStreamPropertiesToVideoElement",
    value: function applySessionAndStreamPropertiesToVideoElement() {
      if (this.videoElement.value && this.videoElement.value.dataset) {
        this.videoElement.value.dataset.sessionId = _SDK__WEBPACK_IMPORTED_MODULE_7__.default.clientSessionId;
        this.videoElement.value.dataset.streamId = this.streamId;
      }
    }
  }, {
    key: "mapSubscribeStatusToChannelStatus",
    value: function mapSubscribeStatusToChannelStatus(status) {
      switch (status) {
        case 'ok':
          return _ChannelState__WEBPACK_IMPORTED_MODULE_5__.default.Starting;
        case 'no-stream':
        case 'not-found':
          return _ChannelState__WEBPACK_IMPORTED_MODULE_5__.default.StandBy;
        case 'geo-restricted':
          return _ChannelState__WEBPACK_IMPORTED_MODULE_5__.default.GeoRestricted;
        case 'geo-blocked':
          return _ChannelState__WEBPACK_IMPORTED_MODULE_5__.default.GeoBlocked;
        case 'unauthorized':
          return _ChannelState__WEBPACK_IMPORTED_MODULE_5__.default.Unauthorized;
        case 'capacity':
        case 'rate-limited':
        case 'timeout':
          return _ChannelState__WEBPACK_IMPORTED_MODULE_5__.default.Recovering;
        case 'failed':
          return _ChannelState__WEBPACK_IMPORTED_MODULE_5__.default.Error;
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_8__.default)(status);
      }
    }
  }]);
  return ChannelContext;
}();


/***/ }),

/***/ "./src/sdk/channels/ChannelState.ts":
/*!******************************************!*
  !*** ./src/sdk/channels/ChannelState.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var ChannelState;
(function (ChannelState) {
  ChannelState[ChannelState["Offline"] = 1] = "Offline";
  ChannelState[ChannelState["Starting"] = 2] = "Starting";
  ChannelState[ChannelState["Paused"] = 3] = "Paused";
  ChannelState[ChannelState["Playing"] = 4] = "Playing";
  ChannelState[ChannelState["Recovering"] = 5] = "Recovering";
  ChannelState[ChannelState["Reconnecting"] = 6] = "Reconnecting";
  ChannelState[ChannelState["StandBy"] = 7] = "StandBy";
  ChannelState[ChannelState["Stopped"] = 8] = "Stopped";
  ChannelState[ChannelState["Unauthorized"] = 9] = "Unauthorized";
  ChannelState[ChannelState["GeoRestricted"] = 10] = "GeoRestricted";
  ChannelState[ChannelState["GeoBlocked"] = 11] = "GeoBlocked";
  ChannelState[ChannelState["Error"] = 12] = "Error";
  ChannelState[ChannelState["UnsupportedFeature"] = 13] = "UnsupportedFeature";
})(ChannelState || (ChannelState = {}));
/* harmony default export */ __webpack_exports__["default"] = (ChannelState);

/***/ }),

/***/ "./src/sdk/channels/Channels.ts":
/*!**************************************!*
  !*** ./src/sdk/channels/Channels.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Channels; }
/* harmony export */ });
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Channel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Channel */ "./src/sdk/channels/Channel.ts");
/* harmony import */ var _SDK__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SDK */ "./src/sdk/SDK.ts");


/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */



var Channels = /*#__PURE__*/function () {
  function Channels() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, Channels);
    throw new Error('Channels is a static class that may not be instantiated');
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(Channels, null, [{
    key: "createChannel",
    value: function createChannel(options) {
      if (!_SDK__WEBPACK_IMPORTED_MODULE_3__.default.initialized.value) {
        throw new Error('SDK is not loaded.');
      }
      return new _Channel__WEBPACK_IMPORTED_MODULE_2__.default(options.videoElement, options.token, options.targetLag);
    }
  }]);
  return Channels;
}();


/***/ }),

/***/ "./src/sdk/channels/index.ts":
/*!***********************************!*
  !*** ./src/sdk/channels/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SDK": function() { return /* reexport safe */ _SDK__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "Channels": function() { return /* reexport safe */ _Channels__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "ChannelState": function() { return /* reexport safe */ _ChannelState__WEBPACK_IMPORTED_MODULE_2__.default; }
/* harmony export */ });
/* harmony import */ var _SDK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _Channels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Channels */ "./src/sdk/channels/Channels.ts");
/* harmony import */ var _ChannelState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChannelState */ "./src/sdk/channels/ChannelState.ts");
/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */





/* harmony default export */ __webpack_exports__["default"] = ({
  SDK: _SDK__WEBPACK_IMPORTED_MODULE_0__.default,
  Channels: _Channels__WEBPACK_IMPORTED_MODULE_1__.default,
  ChannelState: _ChannelState__WEBPACK_IMPORTED_MODULE_2__.default
});

/***/ }),

/***/ "./src/sdk/defaults.ts":
/*!*****************************!*
  !*** ./src/sdk/defaults.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultDiscoveryUri": function() { return /* binding */ defaultDiscoveryUri; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BitrateModeMapping; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BitrateStateMapping; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Discovery; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _SDK__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _DiscoveryService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./DiscoveryService */ "./src/sdk/discovery/DiscoveryService.ts");














/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */



var discoveryCacheInterval = 60000;
var Discovery = /*#__PURE__*/function () {
  function Discovery() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10___default()(this, Discovery);
    throw new Error('Discovery is a static class that may not be instantiated');
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_11___default()(Discovery, null, [{
    key: "precacheClosestEndPointDiscovery",
    value: function () {
      var _precacheClosestEndPointDiscovery = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_13___default().mark(function _callee() {
        var uri;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_13___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              uri = new URL(_SDK__WEBPACK_IMPORTED_MODULE_14__.default.discoveryUri.value);
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
      var _discoverClosestEndPointWithCaching = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_13___default().mark(function _callee2(uri) {
        var url, discoveryService, cachedValue;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_13___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              url = uri.toString();
              if (!Discovery._cache[url]) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return", Discovery._cache[url]);
            case 3:
              discoveryService = new _DiscoveryService__WEBPACK_IMPORTED_MODULE_15__.default(uri);
              cachedValue = Discovery._cache[url] = discoveryService.discoverClosestEndPoint();
              Discovery._cache[url].then(function () {
                var ignored = setTimeout(function () {
                  if (Discovery._cache[url] === cachedValue) {
                    delete Discovery._cache[url];
                  }
                }, discoveryCacheInterval);
              })["catch"](function (e) {
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
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_12___default()(Discovery, "_cache", {});

var ignored = Discovery.precacheClosestEndPointDiscovery();

/***/ }),

/***/ "./src/sdk/discovery/DiscoveryService.ts":
/*!***********************************************!*
  !*** ./src/sdk/discovery/DiscoveryService.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DiscoveryService; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.now */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _EndPoint__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./EndPoint */ "./src/sdk/discovery/EndPoint.ts");
/* harmony import */ var _SDK__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../metrics/MetricsType */ "./src/metrics/MetricsType.ts");
/* harmony import */ var _DiscoveryUri__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./DiscoveryUri */ "./src/sdk/discovery/DiscoveryUri.ts");
/* harmony import */ var _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../metrics/MetricsFactory */ "./src/metrics/MetricsFactory.ts");




















/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */






var defaultTimeout = 20000;
var DiscoveryService = /*#__PURE__*/function () {
  function DiscoveryService(uri) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_16___default()(this, DiscoveryService);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_18___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_20__.default.getLogger('Discovery'));
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_18___default()(this, "_metricsService", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_18___default()(this, "_uri", void 0);
    if (!uri) {
      throw new Error('Discovery requires uri');
    }
    this._metricsService = _metrics_MetricsFactory__WEBPACK_IMPORTED_MODULE_25__.default.getMetricsService(uri.toString());
    this._uri = uri;
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_17___default()(DiscoveryService, [{
    key: "discoverNearbyEndPoints",
    value: function () {
      var _discoverNearbyEndPoints = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_19___default().mark(function _callee(uri, timeout) {
        var url, response, asString, endPoints;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_19___default().wrap(function _callee$(_context) {
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
                return new _EndPoint__WEBPACK_IMPORTED_MODULE_21__.default(endPoint, timeout);
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
      var _discoverClosestEndPoint = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_19___default().mark(function _callee2() {
        var _this = this;
        var timeout,
          url,
          endPoints,
          neverResolve,
          endPoint,
          _args2 = arguments;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_19___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              timeout = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : defaultTimeout;
              url = _DiscoveryUri__WEBPACK_IMPORTED_MODULE_24__.default.buildDiscoveryUrl(this._uri);
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
                return endPoint.ping()["catch"](function (e) {
                  _this._logger.warn('Failed to ping end point [%s]', endPoint, e);
                  return neverResolve();
                }).then(function (time) {
                  var now = Date.now();
                  _this._logger.info('Discovered end point [%s] with time [%s]', endPoint.toString(), time);
                  _this._metricsService.push({
                    metricType: _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_23__.default.RoundTripTime,
                    runtime: (now - _SDK__WEBPACK_IMPORTED_MODULE_22__.default.pageLoadTime) / 1000,
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DiscoveryUri; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.now */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../defaults */ "./src/sdk/defaults.ts");
/* harmony import */ var _rx_Subject__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../rx/Subject */ "./src/rx/Subject.ts");
/* harmony import */ var _version_VersionManager__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../version/VersionManager */ "./src/sdk/version/VersionManager.ts");













/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */




var DiscoveryUri = /*#__PURE__*/function () {
  function DiscoveryUri() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10___default()(this, DiscoveryUri);
    throw new Error('DiscoveryUri is a static class that may not be instantiated');
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_11___default()(DiscoveryUri, null, [{
    key: "uri",
    get: function get() {
      return DiscoveryUri._discoveryUri;
    }
  }, {
    key: "buildDiscoveryUrl",
    value: function buildDiscoveryUrl(uri) {
      var url = new URL(uri.toString());
      var sdkVersion = _version_VersionManager__WEBPACK_IMPORTED_MODULE_15__.default.sdkVersion;
      url.search = "?".concat(new URLSearchParams([['version', sdkVersion], ['_', "".concat(Date.now())]]).toString());
      if (url.pathname === '/') {
        url.pathname = '/pcast/endPoints';
      }
      return url.toString();
    }
  }]);
  return DiscoveryUri;
}();
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_12___default()(DiscoveryUri, "_discoveryUri", new _rx_Subject__WEBPACK_IMPORTED_MODULE_14__.default(_defaults__WEBPACK_IMPORTED_MODULE_13__.defaultDiscoveryUri));


/***/ }),

/***/ "./src/sdk/discovery/EndPoint.ts":
/*!***************************************!*
  !*** ./src/sdk/discovery/EndPoint.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EndPoint; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.now */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise.finally */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../lang/assertUnreachable */ "./src/lang/assertUnreachable.ts");
/* harmony import */ var _version_VersionManager__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../version/VersionManager */ "./src/sdk/version/VersionManager.ts");
/* harmony import */ var _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../edgeAuth/EdgeAuth */ "./src/sdk/edgeAuth/EdgeAuth.ts");
/* harmony import */ var _BitrateModeMapping__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./BitrateModeMapping */ "./src/sdk/discovery/BitrateModeMapping.ts");
/* harmony import */ var _BitrateStateMapping__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./BitrateStateMapping */ "./src/sdk/discovery/BitrateStateMapping.ts");























/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */






var apiVersion = 6;
var EndPoint = /*#__PURE__*/function () {
  function EndPoint(uri, timeout) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_19___default()(this, EndPoint);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_21___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_23__.default.getLogger('EndPoint'));
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_21___default()(this, "_uri", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_21___default()(this, "_timeout", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_21___default()(this, "_roundTripTime", void 0);
    this._uri = uri;
    this._timeout = timeout;
    if (!timeout) {
      throw new Error("End point requires a timeout");
    }
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_20___default()(EndPoint, [{
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
      var _ping = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default().mark(function _callee() {
        var _this = this;
        var url, start, response, finished;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default().wrap(function _callee$(_context) {
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
      var _subscribe = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default().mark(function _callee2(token, localSessionDescription, failureCount) {
        var _this2 = this;
        var parsedToken, tenancy, url, formData, clientVersion, bodyWithOffer, bodyWithoutOffer, start, httpResponse, timeout, status, finished, subscribeResponse;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              parsedToken = _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_26__.default.parseToken(token);
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
              clientVersion = _version_VersionManager__WEBPACK_IMPORTED_MODULE_25__.default.sdkVersion;
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
              })])["finally"](function () {
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
      var _publish = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default().mark(function _callee3(name, token, localSessionDescription, failureCount) {
        var _this3 = this;
        var parsedToken, tenancy, url, formData, clientVersion, bodyWithOffer, bodyWithoutOffer, start, httpResponse, timeout, status, finished, subscribeResponse;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              parsedToken = _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_26__.default.parseToken(token);
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
              clientVersion = _version_VersionManager__WEBPACK_IMPORTED_MODULE_25__.default.sdkVersion;
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
              })])["finally"](function () {
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
      var _setRemoteDescription = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default().mark(function _callee4(stream, sessionDescription) {
        var _this4 = this;
        var url, formData, body, start, httpResponse, timeout, status, finished, setRemoteDescriptionResponse;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default().wrap(function _callee4$(_context4) {
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
              })])["finally"](function () {
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
      var _limitBitrate = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default().mark(function _callee5(stream, elapsedInMilliseconds, bitrateInBitsPerSecond, bitrateState, bitrateMode) {
        var _this5 = this;
        var url, formData, body, start, httpResponse, timeout, status, finished;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              url = this.buildUrl([stream.tenancy, 'stream', stream.streamId, 'bitrate']).toString();
              formData = new FormData();
              body = {
                apiVersion: apiVersion,
                sharedSecret: stream.sharedSecret,
                elapsedInMilliseconds: elapsedInMilliseconds,
                bitrateInBitsPerSecond: bitrateInBitsPerSecond,
                bitrateState: _BitrateStateMapping__WEBPACK_IMPORTED_MODULE_28__.default.convertBitrateStateToBitrateStateType(bitrateState),
                bitrateMode: _BitrateModeMapping__WEBPACK_IMPORTED_MODULE_27__.default.convertBitrateModeToBitrateModeType(bitrateMode)
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
              })])["finally"](function () {
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
      var _addIceCandidates = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default().mark(function _callee6(stream, candidates, discoveryCompleted) {
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
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default().wrap(function _callee6$(_context6) {
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
              })])["finally"](function () {
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
      var _destroyStream = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default().mark(function _callee7(stream, reason) {
        var _this7 = this;
        var url, formData, body, start, httpResponse, timeout, status, finished, destroyStreamResponse;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default().wrap(function _callee7$(_context7) {
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
              })])["finally"](function () {
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
      uri.pathname = pathAsArray.concat.apply(pathAsArray, _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_16___default()(path)).join('/');
      return uri;
    }
  }, {
    key: "buildPingUrl",
    value: function buildPingUrl() {
      var uri = new URL(this._uri);
      var sdkVersion = _version_VersionManager__WEBPACK_IMPORTED_MODULE_25__.default.sdkVersion;
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
      var _convertHttpResponseToSubscribeResponse = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default().mark(function _callee8(tenancy, response) {
        var data, subscribeResponse;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default().wrap(function _callee8$(_context8) {
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
      var _convertHttpResponseToPublishResponse = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default().mark(function _callee9(tenancy, response) {
        var data, publishResponse;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default().wrap(function _callee9$(_context9) {
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
            (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_24__.default)(configuration.bundlePolicy);
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
            (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_24__.default)(configuration.iceTransportPolicy);
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
            (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_24__.default)(configuration.rtcpMuxPolicy);
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
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_24__.default)(sessionDescription.type);
      }
      return rtcSessionDescription;
    }
  }, {
    key: "convertHttpResponseToSetRemoteDescriptionResponse",
    value: function () {
      var _convertHttpResponseToSetRemoteDescriptionResponse = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default().mark(function _callee10(response) {
        var data, setRemoteDescriptionResponse;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default().wrap(function _callee10$(_context10) {
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
      var _convertHttpResponseToAddIceCandidatesResponse = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default().mark(function _callee11(response) {
        var data, addIceCandidatesResponse;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default().wrap(function _callee11$(_context11) {
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
      var _convertHttpResponseToDestroyStreamResponse = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default().mark(function _callee12(response) {
        var data, destroyStream;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_22___default().wrap(function _callee12$(_context12) {
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
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_24__.default)(type);
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EdgeAuth; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.starts-with */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");









/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */

var edgeAuthTokenPrefix = 'DIGEST:';
var EdgeAuth = /*#__PURE__*/function () {
  function EdgeAuth() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6___default()(this, EdgeAuth);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_7___default()(EdgeAuth, null, [{
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
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_8___default()(EdgeAuth, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_9__.default.getLogger('EdgeAuth'));


/***/ }),

/***/ "./src/sdk/feature/FeatureEnablement.ts":
/*!**********************************************!*
  !*** ./src/sdk/feature/FeatureEnablement.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FeatureEnablement; }
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

/***/ "./src/sdk/streaming/RealTimeStream.ts":
/*!*********************************************!*
  !*** ./src/sdk/streaming/RealTimeStream.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RealTimeStream; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _SDK__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _rtc_PeerConnectionService__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../rtc/PeerConnectionService */ "./src/rtc/PeerConnectionService.ts");
/* harmony import */ var _discovery_Discovery__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../discovery/Discovery */ "./src/sdk/discovery/Discovery.ts");
/* harmony import */ var _feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../feature/FeatureEnablement */ "./src/sdk/feature/FeatureEnablement.ts");
/* harmony import */ var _channels_ChannelState__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../channels/ChannelState */ "./src/sdk/channels/ChannelState.ts");
/* harmony import */ var _lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../lang/assertUnreachable */ "./src/lang/assertUnreachable.ts");
/* harmony import */ var _rtc_RtcConnectionMonitor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../rtc/RtcConnectionMonitor */ "./src/rtc/RtcConnectionMonitor.ts");
/* harmony import */ var _time_Duration__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../time/Duration */ "./src/time/Duration.ts");
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _rtc_RtcConfigurationManager__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../rtc/RtcConfigurationManager */ "./src/rtc/RtcConfigurationManager.ts");

















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_15___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */











var iceCandidateAccumulationInterval = 100;
var defaultStreamSetupTimeout = 30000;
var RealTimeStream = /*#__PURE__*/function () {
  function RealTimeStream(channelContext, peerConnectionContext, handleStreamFailure) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_13___default()(this, RealTimeStream);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_15___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_25__.default.getLogger('RealTimeStream'));
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_15___default()(this, "_channelContext", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_15___default()(this, "_peerConnectionContext", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_15___default()(this, "_handleStreamFailure", void 0);
    this._channelContext = channelContext;
    this._peerConnectionContext = peerConnectionContext;
    this._handleStreamFailure = handleStreamFailure;
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_14___default()(RealTimeStream, [{
    key: "start",
    value: function start(uri, token, listenOnStreamSetup, playMediaStreamInVideoElement) {
      var _this = this;
      return Promise.all([_discovery_Discovery__WEBPACK_IMPORTED_MODULE_19__.default.discoverClosestEndPointWithCaching(uri), _rtc_PeerConnectionService__WEBPACK_IMPORTED_MODULE_18__.default.createPeerConnectionOffer()]).then(function (_ref) {
        var _ref2 = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12___default()(_ref, 2),
          endPoint = _ref2[0],
          _ref2$ = _ref2[1],
          localOffer = _ref2$.localOffer,
          peerConnection = _ref2$.peerConnection;
        _this._channelContext.online.value = true;
        _this._channelContext.endPoint.value = endPoint;
        _this._logger.info('Connecting to [%s]', endPoint.toString());
        _this._logger.info('Local offer:\n' + localOffer.sdp);
        if (_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_20__.default.clientOfferDisabled || !peerConnection.supportsSetConfiguration || !peerConnection.supportsGetConfiguration) {
          peerConnection.close();
          peerConnection = null;
          localOffer = null;
        }
        _this._peerConnectionContext.peerConnection.value = peerConnection;
        return endPoint.subscribe(token, localOffer, _this._channelContext.failureCount.value);
      }).then(function (_ref3) {
        var status = _ref3.status,
          stream = _ref3.stream,
          rtcConfiguration = _ref3.rtcConfiguration,
          setRemoteDescriptionResponse = _ref3.setRemoteDescriptionResponse,
          createOfferDescriptionResponse = _ref3.createOfferDescriptionResponse,
          createAnswerDescriptionResponse = _ref3.createAnswerDescriptionResponse,
          lag = _ref3.lag;
        _this._channelContext.stream.value = stream;
        _this._channelContext.lag.value = lag;
        _this._channelContext.applySessionAndStreamPropertiesToVideoElement();
        _this._logger.debug('[%s] Subscribe completed [%s] [%j] [%j] [%j] [%j]', _this._channelContext.streamId, status, rtcConfiguration, setRemoteDescriptionResponse, createOfferDescriptionResponse, createAnswerDescriptionResponse);
        _this._channelContext.state.value = _this._channelContext.mapSubscribeStatusToChannelStatus(status);
        _this._channelContext.applyStatus(status);
        if (status !== 'ok') {
          return;
        }
        return _this.applyRtcConfiguration(_this._peerConnectionContext.peerConnection.value, rtcConfiguration).then(function (peerConnection) {
          var submitCandidatesTimeout;
          var cancelDiscovery = false;
          var discoveryCompleted = false;
          var candidates = [];
          if (!_this._peerConnectionContext.peerConnection.value) {
            _this._peerConnectionContext.peerConnection.value = peerConnection;
          }
          peerConnection.onicecandidate = function (e) {
            if (_this._channelContext.stream.value !== stream) {
              return;
            }
            if (_this._peerConnectionContext.peerConnection.value !== peerConnection) {
              return;
            }
            if (cancelDiscovery) {
              return;
            }
            if (!_SDK__WEBPACK_IMPORTED_MODULE_17__.default.sendLocalCandidates.value) {
              return;
            }
            if (e.candidate && e.candidate.candidate) {
              candidates.push(e.candidate);
            } else {
              discoveryCompleted = true;
            }
            if (!submitCandidatesTimeout) {
              submitCandidatesTimeout = setTimeout(function () {
                if (_this._channelContext.stream.value !== stream) {
                  return;
                }
                if (cancelDiscovery) {
                  return;
                }
                var ignored = _this._channelContext.endPoint.value.addIceCandidates(stream, candidates, discoveryCompleted).then(function (_ref4) {
                  var status = _ref4.status,
                    options = _ref4.options;
                  if (status !== 'ok') {
                    _this._logger.warn('[%s] Failed to add ICE candidates with reason [%s]', _this._channelContext.streamId, status);
                    return;
                  }
                  if (options.includes('cancel')) {
                    cancelDiscovery = true;
                  }
                  _this._logger.info('[%s] Added ICE candidates with reason [%s] and options [%s]', _this._channelContext.streamId, status, options);
                })["catch"](function (e) {
                  _this._logger.error('[%s] Failed to add ICE candidates', _this._channelContext.streamId, e);
                });
              }, iceCandidateAccumulationInterval);
            }
          };
          peerConnection.oniceconnectionstatechange = function () {
            if (_this._channelContext.stream.value !== stream) {
              return;
            }
            if (_this._peerConnectionContext.peerConnection.value !== peerConnection) {
              return;
            }
            var retryCallback = function retryCallback() {
              // If we stop normally the peer connection is unregistered first.
              // Thus anytime we see a closed peer connection that is still valid, it is an error.
              _this._channelContext.state.value = _channels_ChannelState__WEBPACK_IMPORTED_MODULE_21__.default.Error;
              if (_this._channelContext.videoElement.value) {
                _this._channelContext.videoElement.value.pause();
                _this._channelContext.videoElement.value.srcObject = null;
              }
              _this._channelContext.playing.value = false;
              _this._channelContext.loading.value = true;
              var ignored = _this._handleStreamFailure()["catch"](function (e) {
                _this._logger.error('[%s] Failed handling stream failure after peer connection stopped with state [%s]', _this._channelContext.streamId, peerConnection.iceConnectionState, e);
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
                  _this._logger.info('[%s] ICE connection state changed to [%s], trying to reconnect', _this._channelContext.streamId, peerConnection.iceConnectionState);
                  _this.reconnectPeerConnection(peerConnection, retryCallback);
                }
                return;
              case 'closed':
                _this._logger.info('[%s] ICE connection state changed to [%s], retrying to connect', _this._channelContext.streamId, peerConnection.iceConnectionState);
                retryCallback();
                return;
              default:
                (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_22__.default)(peerConnection.iceConnectionState);
            }
          };
          var mediaStreamPromise = new Promise(function (resolve, reject) {
            if (!_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_20__.default.onTrackDisabled) {
              var _timeoutId = setTimeout(function () {
                return reject(new Error('Stream setup timed out'));
              }, defaultStreamSetupTimeout);
              peerConnection.ontrack = function (e) {
                clearTimeout(_timeoutId);
                resolve(e.streams[0]);
              };
              return;
            }
            var trackListener = function trackListener(e) {
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              clearTimeout(timeoutId);
              peerConnection.removeEventListener('track', trackListener);
              peerConnection.removeEventListener('addstream', trackListener);
              if (e.streams) {
                resolve(e.streams[0]);
              } else {
                resolve(e.stream);
              }
            };
            var timeoutId = setTimeout(function () {
              peerConnection.removeEventListener('track', trackListener);
              peerConnection.removeEventListener('addstream', trackListener);
              reject(new Error('Stream setup timed out'));
            }, defaultStreamSetupTimeout);
            peerConnection.addEventListener('track', trackListener);
            peerConnection.addEventListener('addstream', trackListener);
            return;
          });
          return new Promise(function (resolve) {
            resolve();
          }).then(function () {
            if (!setRemoteDescriptionResponse) {
              return;
            }
            _this._logger.info('[%s] Set local SDP offer [%s]', _this._channelContext.streamId, setRemoteDescriptionResponse.sessionDescription.sdp);
            return peerConnection.setLocalDescription(setRemoteDescriptionResponse.sessionDescription)["catch"](function (e) {
              _this._logger.info('[%s] Failed to set local description [%j] with message [%s]', _this._channelContext.streamId, setRemoteDescriptionResponse.sessionDescription, e.message);
              throw e;
            });
          }).then(function () {
            if (!createAnswerDescriptionResponse) {
              return;
            }
            _this._logger.info('[%s] Set remote SDP answer [%s]', _this._channelContext.streamId, createAnswerDescriptionResponse.sessionDescription.sdp);
            return peerConnection.setRemoteDescription(createAnswerDescriptionResponse.sessionDescription)["catch"](function (e) {
              _this._logger.info('[%s] Failed to set remote description [%j] with message [%s]', _this._channelContext.streamId, createAnswerDescriptionResponse.sessionDescription, e.message);
              throw e;
            });
          }).then(function () {
            if (!createOfferDescriptionResponse) {
              return;
            }
            _this._logger.info('[%s] Set remote SDP offer [%s]', _this._channelContext.streamId, createOfferDescriptionResponse.sessionDescription.sdp);
            return peerConnection.setRemoteDescription(createOfferDescriptionResponse.sessionDescription)["catch"](function (e) {
              _this._logger.info('[%s] Failed to set remote description [%j] with message [%s]', _this._channelContext.streamId, createOfferDescriptionResponse.sessionDescription, e.message);
              throw e;
            }).then(function () {
              return peerConnection.createAnswer({
                offerToReceiveAudio: true,
                offerToReceiveVideo: true
              });
            }).then(function (answer) {
              _this._logger.info('[%s] Set local SDP answer [%j]', _this._channelContext.streamId, answer);
              return _this._channelContext.endPoint.value.setRemoteDescription(stream, answer);
            }).then(function (_ref5) {
              var status = _ref5.status,
                sessionDescription = _ref5.sessionDescription;
              _this._channelContext.state.value = _this.mapSetRemoteDescriptionStatusToChannelStatus(status);
              if (status !== 'ok') {
                _this._channelContext.playing.value = false;
                _this._channelContext.standby.value = true;
                _this._channelContext.stopped.value = false;
                return;
              }
              return peerConnection.setLocalDescription(sessionDescription)["catch"](function (e) {
                _this._logger.info('[%s] Failed to set local description [%j] with message [%s]', _this._channelContext.streamId, sessionDescription, e.message);
                throw e;
              });
            });
          }).then(function () {
            listenOnStreamSetup.success(_this._channelContext.streamId);
            return mediaStreamPromise;
          }).then(function (mediaStream) {
            _this._peerConnectionContext.mediaStream.value = mediaStream;
            var rtcConnectionMonitor = new _rtc_RtcConnectionMonitor__WEBPACK_IMPORTED_MODULE_23__.default(peerConnection, mediaStream, _this._channelContext.endPoint.value.roundTripTime / 4);
            _this._channelContext.disposables.add(rtcConnectionMonitor);
            var ignored = rtcConnectionMonitor.rtcStatistic.subscribe(function (statistics) {
              _this._channelContext.rtcStatistics.value = statistics;
              if (!_this._channelContext.rtcVideoStatistic && !_this._channelContext.rtcAudioStatistic) {
                _this._channelContext.rtcAudioStatistic = statistics.audio;
                _this._channelContext.rtcVideoStatistic = statistics.video;
                return;
              }
              var audioTrackFailed = false;
              var videoTrackFailed = false;
              if (statistics.audio) {
                if (_this._channelContext.rtcAudioStatistic && _this._channelContext.rtcAudioStatistic.timestamp !== statistics.audio.timestamp) {
                  audioTrackFailed = _this._channelContext.rtcAudioStatistic && _this._channelContext.rtcAudioStatistic.bytesReceived === statistics.audio.bytesReceived;
                  if (audioTrackFailed && navigator.onLine) {
                    _this._logger.info('[%s] Audio track failed with last bytesReceived [%s] is equal to previous bytesReceived [%s] within [%s]', _this._channelContext.streamId, statistics.audio.bytesReceived, _this._channelContext.rtcAudioStatistic.bytesReceived, new _time_Duration__WEBPACK_IMPORTED_MODULE_24__.default(statistics.audio.timestamp - _this._channelContext.rtcAudioStatistic.timestamp).toIsoString());
                  }
                  _this._channelContext.rtcAudioStatistic = statistics.audio;
                }
              }
              if (statistics.video) {
                if (_this._channelContext.rtcVideoStatistic && _this._channelContext.rtcVideoStatistic.timestamp !== statistics.video.timestamp) {
                  videoTrackFailed = _this._channelContext.rtcVideoStatistic && _this._channelContext.rtcVideoStatistic.bytesReceived === statistics.video.bytesReceived;
                  if (videoTrackFailed && navigator.onLine) {
                    _this._logger.info('[%s] Video track failed with last bytesReceived [%s] is equal to previous bytesReceived [%s] within [%s]', _this._channelContext.streamId, statistics.video.bytesReceived, _this._channelContext.rtcVideoStatistic.bytesReceived, new _time_Duration__WEBPACK_IMPORTED_MODULE_24__.default(statistics.video.timestamp - _this._channelContext.rtcVideoStatistic.timestamp).toIsoString());
                  }
                  _this._channelContext.rtcVideoStatistic = statistics.video;
                }
              }
              if ((videoTrackFailed || audioTrackFailed) && navigator.onLine) {
                var retryCallback = function retryCallback() {
                  _this._channelContext.state.value = _channels_ChannelState__WEBPACK_IMPORTED_MODULE_21__.default.Error;
                  if (_this._channelContext.videoElement.value) {
                    _this._channelContext.videoElement.value.pause();
                    _this._channelContext.videoElement.value.srcObject = null;
                  }
                  _this._channelContext.playing.value = false;
                  _this._channelContext.loading.value = true;
                  rtcConnectionMonitor.dispose();
                  var ignored = _this._handleStreamFailure()["catch"](function (e) {
                    _this._logger.error('[%s] Failed handling stream failure after track stopped with state [%s]', _this._channelContext.streamId, peerConnection.iceConnectionState, e);
                  });
                };
                _this.reconnectPeerConnection(peerConnection, retryCallback);
              } else {
                _this._peerConnectionContext.peerConnectionReconnectAttempts = 0;
              }
            });
            if (!_SDK__WEBPACK_IMPORTED_MODULE_17__.default.automaticallyPlayMediaStream) {
              _this._channelContext.autoMuted.value = false;
              _this._channelContext.autoPaused.value = true;
              _this._channelContext.loading.value = false;
              _this._channelContext.playing.value = false;
              _this._channelContext.state.value = _channels_ChannelState__WEBPACK_IMPORTED_MODULE_21__.default.Paused;
              return;
            }
            return playMediaStreamInVideoElement(mediaStream);
          });
        });
      });
    }
  }, {
    key: "applyRtcConfiguration",
    value: function () {
      var _applyRtcConfiguration = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_16___default().mark(function _callee(optionalPeerConnection, rtcConfiguration) {
        var newRtcConfiguration;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_16___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (optionalPeerConnection) {
                _context.next = 3;
                break;
              }
              rtcConfiguration = _rtc_RtcConfigurationManager__WEBPACK_IMPORTED_MODULE_26__.default.truncateIceServers(rtcConfiguration);
              return _context.abrupt("return", _SDK__WEBPACK_IMPORTED_MODULE_17__.default.peerConnectionFactory.value.createPeerConnection(rtcConfiguration));
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
      this._channelContext.state.value = _channels_ChannelState__WEBPACK_IMPORTED_MODULE_21__.default.Reconnecting;
      if (this._peerConnectionContext.peerConnectionReconnectAttempts < _SDK__WEBPACK_IMPORTED_MODULE_17__.default.maximalNumberOfPeerConnectionReconnectAttempts || !_SDK__WEBPACK_IMPORTED_MODULE_17__.default.automaticallyReconnectPeerConnection) {
        this._peerConnectionContext.peerConnectionReconnectAttempts++;
        if (_feature_FeatureEnablement__WEBPACK_IMPORTED_MODULE_20__.default.clientOfferDisabled || !peerConnection.supportsSetConfiguration || !peerConnection.supportsGetConfiguration || this._channelContext.failureCount.value) {
          return;
        }
        this._logger.info('Reconnecting peer connection by restarting ICE');
        var localOffer = peerConnection.currentLocalDescription;
        var ignored = peerConnection.createOffer({
          iceRestart: true
        }).then(function (offer) {
          return peerConnection.setLocalDescription(offer).then(function () {
            return peerConnection.setLocalDescription(localOffer);
          });
        })["catch"](function (e) {
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
    key: "mapSetRemoteDescriptionStatusToChannelStatus",
    value: function mapSetRemoteDescriptionStatusToChannelStatus(status) {
      switch (status) {
        case 'ok':
          return _channels_ChannelState__WEBPACK_IMPORTED_MODULE_21__.default.Starting;
        case 'unauthorized':
          return _channels_ChannelState__WEBPACK_IMPORTED_MODULE_21__.default.Unauthorized;
        case 'not-found':
        case 'capacity':
        case 'rate-limited':
        case 'timeout':
          return _channels_ChannelState__WEBPACK_IMPORTED_MODULE_21__.default.Recovering;
        case 'failed':
          return _channels_ChannelState__WEBPACK_IMPORTED_MODULE_21__.default.Error;
        default:
          (0,_lang_assertUnreachable__WEBPACK_IMPORTED_MODULE_22__.default)(status);
      }
    }
  }]);
  return RealTimeStream;
}();


/***/ }),

/***/ "./src/sdk/streaming/StreamFactory.ts":
/*!********************************************!*
  !*** ./src/sdk/streaming/StreamFactory.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RealTimeStreamFactory; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edgeAuth/EdgeAuth */ "./src/sdk/edgeAuth/EdgeAuth.ts");
/* harmony import */ var _RealTimeStream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RealTimeStream */ "./src/sdk/streaming/RealTimeStream.ts");
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _channels_ChannelState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../channels/ChannelState */ "./src/sdk/channels/ChannelState.ts");





/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */





var RealTimeStreamFactory = /*#__PURE__*/function () {
  function RealTimeStreamFactory() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default()(this, RealTimeStreamFactory);
    throw new Error('RealTimeStreamFactory is a static class that may not be instantiated');
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default()(RealTimeStreamFactory, null, [{
    key: "create",
    value: function create(token, channelContext, peerConnectionContext, handleStreamFailure) {
      var parsedToken = _edgeAuth_EdgeAuth__WEBPACK_IMPORTED_MODULE_5__.default.parseToken(token);
      var isRtmp = parsedToken && parsedToken.token && parsedToken.token.capabilities && parsedToken.token.capabilities.includes('rtmp');
      if (isRtmp) {
        this._logger.error('This build does not support RTMP playback.');
        channelContext.state.value = _channels_ChannelState__WEBPACK_IMPORTED_MODULE_8__.default.UnsupportedFeature;
        return;
      }
      var isStreaming = parsedToken && parsedToken.token && parsedToken.token.capabilities && parsedToken.token.capabilities.includes('streaming');
      if (isStreaming) {
        this._logger.error('This build does not support Live Stream playback.');
        channelContext.state.value = _channels_ChannelState__WEBPACK_IMPORTED_MODULE_8__.default.UnsupportedFeature;
        return;
      }
      return new _RealTimeStream__WEBPACK_IMPORTED_MODULE_6__.default(channelContext, peerConnectionContext, handleStreamFailure);
    }
  }]);
  return RealTimeStreamFactory;
}();
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(RealTimeStreamFactory, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_7__.default.getLogger('Streaming'));


/***/ }),

/***/ "./src/sdk/streaming/StreamTypes.ts":
/*!******************************************!*
  !*** ./src/sdk/streaming/StreamTypes.ts ***!
  \******************************************/
/***/ (function() {

"use strict";


/***/ }),

/***/ "./src/sdk/version/VersionManager.ts":
/*!*******************************************!*
  !*** ./src/sdk/version/VersionManager.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VersionManager; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_iso_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-iso-string */ "./node_modules/core-js/modules/es.date.to-iso-string.js");
/* harmony import */ var core_js_modules_es_date_to_iso_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_iso_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__);





/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var VersionManager = /*#__PURE__*/function () {
  function VersionManager() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default()(this, VersionManager);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default()(VersionManager, null, [{
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
_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(VersionManager, "_defaultVersion", new Date().toISOString());


/***/ }),

/***/ "./src/telemetry/TelemetryApender.ts":
/*!*******************************************!*
  !*** ./src/telemetry/TelemetryApender.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TelemetryAppender; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TelemetryConfiguration; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _logger_LoggerDefaults__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../logger/LoggerDefaults */ "./src/logger/LoggerDefaults.ts");










/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var TelemetryConfiguration = /*#__PURE__*/function () {
  function TelemetryConfiguration() {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7___default()(this, TelemetryConfiguration);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9___default()(this, "_url", 'https://telemetry.phenixrts.com/telemetry/logs');
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9___default()(this, "_tenancy", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9___default()(this, "_sessionId", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9___default()(this, "_environment", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9___default()(this, "_threshold", _logger_LoggerDefaults__WEBPACK_IMPORTED_MODULE_10__.default.defaultTelemetryLoggingLevel);
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_8___default()(TelemetryConfiguration, [{
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TelemetryService; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_iso_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-iso-string */ "./node_modules/core-js/modules/es.date.to-iso-string.js");
/* harmony import */ var core_js_modules_es_date_to_iso_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_iso_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.values */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _logger_Logger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../logger/Logger */ "./src/logger/Logger.ts");
/* harmony import */ var _sdk_version_VersionManager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sdk/version/VersionManager */ "./src/sdk/version/VersionManager.ts");












/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */


var requestSizeLimit = 8192;
var TelemetryService = /*#__PURE__*/function () {
  function TelemetryService(telemetryConfiguration) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8___default()(this, TelemetryService);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default()(this, "_telemetryConfiguration", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default()(this, "_logs", []);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default()(this, "_isSending", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default()(this, "_domain", location.hostname);
    this._telemetryConfiguration = telemetryConfiguration;
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_9___default()(TelemetryService, [{
    key: "push",
    value: function push(logLevel, message, category, timestamp) {
      var logRecord = {
        timestamp: timestamp.toISOString(),
        tenancy: this._telemetryConfiguration.tenancy,
        level: _logger_Logger__WEBPACK_IMPORTED_MODULE_12__.LoggingLevel[logLevel],
        category: category,
        message: message,
        sessionId: this._telemetryConfiguration.sessionId,
        version: _sdk_version_VersionManager__WEBPACK_IMPORTED_MODULE_13__.default.sdkVersion,
        environment: this._telemetryConfiguration.environment,
        fullQualifiedName: this._domain
      };
      if (logLevel < _logger_Logger__WEBPACK_IMPORTED_MODULE_12__.LoggingLevel.Error) {
        this._logs.push(logRecord);
      } else {
        this._logs.unshift(logRecord);
      }
      var ignored = this.sendLogsIfAble();
    }
  }, {
    key: "sendLogs",
    value: function () {
      var _sendLogs = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_11___default().mark(function _callee(logMessages) {
        var formData;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_11___default().wrap(function _callee$(_context) {
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
      var _sendLogsIfAble = _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_11___default().mark(function _callee2() {
        var _this = this;
        var numberOfLogsToSend, sizeOfLogsToSend, getLogSize, logMessages;
        return _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_11___default().wrap(function _callee2$(_context2) {
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
              })["catch"](function () {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Durations; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_pad_start__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.pad-start */ "./node_modules/core-js/modules/es.string.pad-start.js");
/* harmony import */ var core_js_modules_es_string_pad_start__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_pad_start__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.repeat */ "./node_modules/core-js/modules/es.string.repeat.js");
/* harmony import */ var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__);










/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var Durations = /*#__PURE__*/function () {
  function Durations() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7___default()(this, Durations);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_9___default()(this, "_duration", void 0);
    this._duration = duration;
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_8___default()(Durations, [{
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

/***/ "./src/video/Dimension.ts":
/*!********************************!*
  !*** ./src/video/Dimension.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Dimension; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__);




/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
var Dimension = /*#__PURE__*/function () {
  function Dimension(width, height) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, Dimension);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "width", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(this, "height", void 0);
    this.width = width;
    this.height = height;
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(Dimension, [{
    key: "equals",
    value: function equals(other) {
      return other && this.width === other.width && this.height === other.height;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "".concat(this.width, "x").concat(this.height);
    }
  }], [{
    key: "empty",
    get: function get() {
      return new Dimension(0, 0);
    }
  }]);
  return Dimension;
}();


/***/ }),

/***/ "./src/video/SessionTelemetry.ts":
/*!***************************************!*
  !*** ./src/video/SessionTelemetry.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SessionTelemetry; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.now */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dom_StreamSetupListener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom/StreamSetupListener */ "./src/dom/StreamSetupListener.ts");
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _dom_NetworkMonitor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dom/NetworkMonitor */ "./src/dom/NetworkMonitor.ts");
/* harmony import */ var _sdk_SDK__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sdk/SDK */ "./src/sdk/SDK.ts");
/* harmony import */ var _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../metrics/MetricsType */ "./src/metrics/MetricsType.ts");
/* harmony import */ var _time_Duration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../time/Duration */ "./src/time/Duration.ts");
/* harmony import */ var _lang_DisposableList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lang/DisposableList */ "./src/lang/DisposableList.ts");





/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */







var SessionTelemetry = /*#__PURE__*/function () {
  function SessionTelemetry(pageLoadTime, metricsService) {
    var _this = this;
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default()(this, SessionTelemetry);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_6__.default.getLogger('SessionTelemetry'));
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_metricsService", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_applicationActivityMonitor", _sdk_SDK__WEBPACK_IMPORTED_MODULE_8__.default.applicationActivityMonitor);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_networkMonitor", new _dom_NetworkMonitor__WEBPACK_IMPORTED_MODULE_7__.default());
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_pageLoadTime", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_disposables", new _lang_DisposableList__WEBPACK_IMPORTED_MODULE_11__.default());
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_lastNetworkStatistics", {});
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
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default()(SessionTelemetry, [{
    key: "listenOnStreamSetup",
    value: function listenOnStreamSetup() {
      return new _dom_StreamSetupListener__WEBPACK_IMPORTED_MODULE_5__.StreamSetupListener(this._pageLoadTime);
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
        metricType: isForeground ? _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_9__.default.ApplicationForeground : _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_9__.default.ApplicationBackground,
        runtime: (now - this._pageLoadTime) / 1000,
        value: {
          uint64: timeSinceLastChange
        }
      });
      this._logger.info('Application has gone into the [%s] after [%s] ms', isForeground ? 'foreground' : 'background', new _time_Duration__WEBPACK_IMPORTED_MODULE_10__.default(timeSinceLastChange).toIsoString());
    }
  }, {
    key: "recordNetworkRTTUpdate",
    value: function recordNetworkRTTUpdate(newRTT) {
      var now = Date.now();
      var oldRtt = this._lastNetworkStatistics.rtt;
      this._lastNetworkStatistics.rtt = newRTT;
      this._metricsService.push({
        metricType: _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_9__.default.RoundTripTime,
        runtime: (now - this._pageLoadTime) / 1000,
        value: {
          uint64: newRTT
        },
        previousValue: oldRtt ? {
          uint64: oldRtt
        } : undefined,
        resource: 'navigator'
      });
      this._logger.info('[%s] Network RTT changed to [%s] from [%s]', new _time_Duration__WEBPACK_IMPORTED_MODULE_10__.default(now - this._pageLoadTime).toIsoString(), newRTT, oldRtt);
    }
  }, {
    key: "recordNetworkTypeChangeUpdate",
    value: function recordNetworkTypeChangeUpdate(newNetworkType) {
      var now = Date.now();
      var oldNetworkType = this._lastNetworkStatistics.effectiveType;
      this._lastNetworkStatistics.effectiveType = newNetworkType;
      this._metricsService.push({
        metricType: _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_9__.default.NetworkType,
        runtime: (now - this._pageLoadTime) / 1000,
        value: {
          string: newNetworkType
        },
        previousValue: oldNetworkType ? {
          string: oldNetworkType
        } : undefined
      });
      this._logger.info('[%s] Network effective type has changed to [%s] from [%s]', new _time_Duration__WEBPACK_IMPORTED_MODULE_10__.default(now - this._pageLoadTime).toIsoString(), newNetworkType, oldNetworkType);
    }
  }, {
    key: "recordNetworkDownlinkThroughputCapacityUpdate",
    value: function recordNetworkDownlinkThroughputCapacityUpdate(newCapacity) {
      var now = Date.now();
      var oldCapacity = this._lastNetworkStatistics.downlinkThroughputCapacity;
      this._lastNetworkStatistics.downlinkThroughputCapacity = newCapacity;
      this._metricsService.push({
        metricType: _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_9__.default.DownlinkThroughputCapacity,
        runtime: (now - this._pageLoadTime) / 1000,
        value: {
          "float": newCapacity
        },
        previousValue: oldCapacity ? {
          "float": oldCapacity
        } : undefined
      });
      this._logger.info('[%s] Network downlink throughput capacity changed to [%s] from [%s]', new _time_Duration__WEBPACK_IMPORTED_MODULE_10__.default(now - this._pageLoadTime).toIsoString(), newCapacity, oldCapacity);
    }
  }]);
  return SessionTelemetry;
}();


/***/ }),

/***/ "./src/video/VideoTelemetry.ts":
/*!*************************************!*
  !*** ./src/video/VideoTelemetry.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VideoTelemetry; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.now */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logger/LoggerFactory */ "./src/logger/LoggerFactory.ts");
/* harmony import */ var _time_Duration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../time/Duration */ "./src/time/Duration.ts");
/* harmony import */ var _lang_Disposable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lang/Disposable */ "./src/lang/Disposable.ts");
/* harmony import */ var _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../metrics/MetricsType */ "./src/metrics/MetricsType.ts");
/* harmony import */ var _lang_DisposableList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lang/DisposableList */ "./src/lang/DisposableList.ts");





/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */





var VideoTelemetry = /*#__PURE__*/function () {
  function VideoTelemetry(streamId, pageLoadTime, channelStartTime, metricsService) {
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default()(this, VideoTelemetry);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_pageLoadTime", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_channelStartTime", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_logger", _logger_LoggerFactory__WEBPACK_IMPORTED_MODULE_5__.default.getLogger('StreamTelemetry'));
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_disposables", new _lang_DisposableList__WEBPACK_IMPORTED_MODULE_9__.default());
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_streamId", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_metricsService", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_listenToFirstTime", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_listenForStall", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_listenForContinuation", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_timeToFirstFrame", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_channelCreationTimeToFirstFrame", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_startRecordingFirstFrame", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_videoStalled", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_lastProgress", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_videoResolution", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_clearTimeToFirstFrameListener", void 0);
    _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "_clearRebufferingListener", void 0);
    this._streamId = streamId;
    this._pageLoadTime = pageLoadTime;
    this._channelStartTime = channelStartTime;
    this._metricsService = metricsService;
  }
  _Users_teamcity_buildAgent_work_54543f04b253d0cc_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default()(VideoTelemetry, [{
    key: "setupListenerForTimeToFirstTime",
    value: function setupListenerForTimeToFirstTime(video) {
      var _this = this;
      this._startRecordingFirstFrame = Date.now();
      this._listenToFirstTime = function () {
        return _this.callTimeToFirstFrame();
      };
      video.addEventListener('loadeddata', this._listenToFirstTime);
      video.addEventListener('loadedmetadata', this._listenToFirstTime);
      this._clearTimeToFirstFrameListener = new _lang_Disposable__WEBPACK_IMPORTED_MODULE_7__.default(function () {
        video.removeEventListener('loadeddata', _this._listenToFirstTime);
        video.removeEventListener('loadedmetadata', _this._listenToFirstTime);
      });
      this._disposables.add(this._clearTimeToFirstFrameListener);
    }
  }, {
    key: "setupListenerForRebuffering",
    value: function setupListenerForRebuffering(video) {
      var _this2 = this;
      this._listenForStall = function () {
        return _this2.onStall();
      };
      this._listenForContinuation = function (event) {
        return _this2.onContinuation(event, video);
      };
      video.addEventListener('stalled', this._listenForStall);
      video.addEventListener('pause', this._listenForStall);
      video.addEventListener('suspend', this._listenForStall);
      video.addEventListener('play', this._listenForContinuation);
      video.addEventListener('playing', this._listenForContinuation);
      video.addEventListener('progress', this._listenForContinuation);
      video.addEventListener('timeupdate', this._listenForContinuation);
      this._clearRebufferingListener = new _lang_Disposable__WEBPACK_IMPORTED_MODULE_7__.default(function () {
        video.removeEventListener('stalled', _this2._listenForStall);
        video.removeEventListener('pause', _this2._listenForStall);
        video.removeEventListener('suspend', _this2._listenForStall);
        video.removeEventListener('play', _this2._listenForContinuation);
        video.removeEventListener('playing', _this2._listenForContinuation);
        video.removeEventListener('progress', _this2._listenForContinuation);
        video.removeEventListener('timeupdate', _this2._listenForContinuation);
      });
      this._disposables.add(this._clearRebufferingListener);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._disposables.dispose();
    }
  }, {
    key: "durationSincePageLoad",
    get: function get() {
      var now = Date.now();
      return new _time_Duration__WEBPACK_IMPORTED_MODULE_6__.default(now - this._pageLoadTime).toIsoString();
    }
  }, {
    key: "callTimeToFirstFrame",
    value: function callTimeToFirstFrame() {
      var now = Date.now();
      this.pushTimeToFirstFrame(now);
      this.pushChannelCreationTimeToFirstFrame(now);
      this._clearTimeToFirstFrameListener.dispose();
    }
  }, {
    key: "pushTimeToFirstFrame",
    value: function pushTimeToFirstFrame(now) {
      this._timeToFirstFrame = now - this._startRecordingFirstFrame;
      this._metricsService.push({
        metricType: _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_8__.default.TimeToFirstFrame,
        runtime: (now - this._pageLoadTime) / 1000,
        value: {
          uint64: this._timeToFirstFrame
        },
        streamId: this._streamId
      });
      this._logger.info('[%s] [%s] First frame [%s]', this.durationSincePageLoad, this._streamId, new _time_Duration__WEBPACK_IMPORTED_MODULE_6__.default(this._timeToFirstFrame).toIsoString());
    }
  }, {
    key: "pushChannelCreationTimeToFirstFrame",
    value: function pushChannelCreationTimeToFirstFrame(now) {
      this._channelCreationTimeToFirstFrame = now - this._channelStartTime;
      this._metricsService.push({
        metricType: _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_8__.default.ChannelCreationTimeToFirstFrame,
        runtime: (now - this._pageLoadTime) / 1000,
        value: {
          uint64: this._channelCreationTimeToFirstFrame
        },
        streamId: this._streamId
      });
      this._logger.info('[%s] [%s] Channel creation to first frame [%s]', this.durationSincePageLoad, this._streamId, new _time_Duration__WEBPACK_IMPORTED_MODULE_6__.default(this._channelCreationTimeToFirstFrame).toIsoString());
    }
  }, {
    key: "onStall",
    value: function onStall() {
      if (this._videoStalled) {
        return;
      }
      this._metricsService.push({
        metricType: _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_8__.default.Stalled,
        runtime: (Date.now() - this._pageLoadTime) / 1000,
        streamId: this._streamId
      });
      this._videoStalled = Date.now();
      this._logger.info('[%s] [%s] [buffering] Stream has stalled', this.durationSincePageLoad, this._streamId);
    }
  }, {
    key: "onContinuation",
    value: function onContinuation(event, video) {
      if (!video.buffered) {
        return;
      }
      var bufferLength = video.buffered.length;
      var hasNotProgressedSinceLastProgressEvent = event.type === 'playing' || bufferLength > 0 ? (event.type === 'progress' || event.type === 'timeupdate') && video.buffered.end(bufferLength - 1) === this._lastProgress : true;
      if (!this._videoStalled || hasNotProgressedSinceLastProgressEvent) {
        return;
      }
      if (event.type === 'progress') {
        this._lastProgress = video.buffered.end(bufferLength - 1);
      }
      var timeSinceStop = Date.now() - this._videoStalled;
      this._metricsService.push({
        metricType: _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_8__.default.Buffering,
        runtime: (Date.now() - this._pageLoadTime) / 1000,
        value: {
          uint64: timeSinceStop
        },
        streamId: this._streamId
      });
      this._logger.info('[%s] [%s] [buffering] Stream has recovered from stall after [%s]', this.durationSincePageLoad, this._streamId, new _time_Duration__WEBPACK_IMPORTED_MODULE_6__.default(timeSinceStop).toIsoString());
      this._videoStalled = null;
    }
  }, {
    key: "onVideoResolutionChanges",
    value: function onVideoResolutionChanges(newResolution) {
      this._metricsService.push({
        metricType: _metrics_MetricsType__WEBPACK_IMPORTED_MODULE_8__.default.ResolutionChanged,
        runtime: (Date.now() - this._pageLoadTime) / 1000,
        value: {
          string: newResolution
        },
        previousValue: this._videoResolution ? {
          string: this._videoResolution
        } : undefined,
        streamId: this._streamId
      });
      this._videoResolution = newResolution;
    }
  }]);
  return VideoTelemetry;
}();


/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/***/ (function(module) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/***/ (function(module) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-fill.js":
/*!******************************************************!*
  !*** ./node_modules/core-js/internals/array-fill.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-uses-to-length.js":
/*!***********************************************************************!*
  !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-reduce.js":
/*!********************************************************!*
  !*** ./node_modules/core-js/internals/array-reduce.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/***/ (function(module) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************!*
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/date-to-iso-string.js":
/*!**************************************************************!*
  !*** ./node_modules/core-js/internals/date-to-iso-string.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var padStart = __webpack_require__(/*! ../internals/string-pad */ "./node_modules/core-js/internals/string-pad.js").start;

var abs = Math.abs;
var DatePrototype = Date.prototype;
var getTime = DatePrototype.getTime;
var nativeDateToISOString = DatePrototype.toISOString;

// `Date.prototype.toISOString` method implementation
// https://tc39.github.io/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit fails here:
module.exports = (fails(function () {
  return nativeDateToISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  nativeDateToISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var date = this;
  var year = date.getUTCFullYear();
  var milliseconds = date.getUTCMilliseconds();
  var sign = year < 0 ? '-' : year > 9999 ? '+' : '';
  return sign + padStart(abs(year), sign ? 6 : 4, 0) +
    '-' + padStart(date.getUTCMonth() + 1, 2, 0) +
    '-' + padStart(date.getUTCDate(), 2, 0) +
    'T' + padStart(date.getUTCHours(), 2, 0) +
    ':' + padStart(date.getUTCMinutes(), 2, 0) +
    ':' + padStart(date.getUTCSeconds(), 2, 0) +
    '.' + padStart(milliseconds, 3, 0) +
    'Z';
} : nativeDateToISOString;


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/***/ (function(module) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-ios.js":
/*!*********************************************************!*
  !*** ./node_modules/core-js/internals/engine-is-ios.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-node.js":
/*!**********************************************************!*
  !*** ./node_modules/core-js/internals/engine-is-node.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/***/ (function(module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator.js":
/*!********************************************************!*
  !*** ./node_modules/core-js/internals/get-iterator.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

module.exports = function (it) {
  var iteratorMethod = getIteratorMethod(it);
  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  } return anObject(iteratorMethod.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/***/ (function(module) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/host-report-errors.js":
/*!**************************************************************!*
  !*** ./node_modules/core-js/internals/host-report-errors.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************!*
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ (function(module) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterator-close.js":
/*!**********************************************************!*
  !*** ./node_modules/core-js/internals/iterator-close.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/microtask.js":
/*!*****************************************************!*
  !*** ./node_modules/core-js/internals/microtask.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var macrotask = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "./node_modules/core-js/internals/engine-is-ios.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "./node_modules/core-js/internals/engine-is-node.js");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  if (!IS_IOS && !IS_NODE && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "./node_modules/core-js/internals/native-promise-constructor.js":
/*!**********************************************************************!*
  !*** ./node_modules/core-js/internals/native-promise-constructor.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global.Promise;


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-url.js":
/*!******************************************************!*
  !*** ./node_modules/core-js/internals/native-url.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = !fails(function () {
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  return (IS_PURE && !url.toJSON)
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || searchParams.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/new-promise-capability.js":
/*!******************************************************************!*
  !*** ./node_modules/core-js/internals/new-promise-capability.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/internals/not-a-regexp.js":
/*!********************************************************!*
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/object-assign.js":
/*!*********************************************************!*
  !*** ./node_modules/core-js/internals/object-assign.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-array.js":
/*!***********************************************************!*
  !*** ./node_modules/core-js/internals/object-to-array.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var propertyIsEnumerable = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js").f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.github.io/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.github.io/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/perform.js":
/*!***************************************************!*
  !*** ./node_modules/core-js/internals/perform.js ***!
  \***************************************************/
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/promise-resolve.js":
/*!***********************************************************!*
  !*** ./node_modules/core-js/internals/promise-resolve.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/internals/redefine-all.js":
/*!********************************************************!*
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ./regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ./fails */ "./node_modules/core-js/internals/fails.js");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ (function(module) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/***/ (function(module) {

// `SameValue` abstract operation
// https://tc39.github.io/ecma262/#sec-samevalue
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-pad-webkit-bug.js":
/*!*****************************************************************!*
  !*** ./node_modules/core-js/internals/string-pad-webkit-bug.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// https://github.com/zloirock/core-js/issues/280
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

// eslint-disable-next-line unicorn/no-unsafe-regex
module.exports = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);


/***/ }),

/***/ "./node_modules/core-js/internals/string-pad.js":
/*!******************************************************!*
  !*** ./node_modules/core-js/internals/string-pad.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var repeat = __webpack_require__(/*! ../internals/string-repeat */ "./node_modules/core-js/internals/string-repeat.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var ceil = Math.ceil;

// `String.prototype.{ padStart, padEnd }` methods implementation
var createMethod = function (IS_END) {
  return function ($this, maxLength, fillString) {
    var S = String(requireObjectCoercible($this));
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : String(fillString);
    var intMaxLength = toLength(maxLength);
    var fillLen, stringFiller;
    if (intMaxLength <= stringLength || fillStr == '') return S;
    fillLen = intMaxLength - stringLength;
    stringFiller = repeat.call(fillStr, ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
    return IS_END ? S + stringFiller : stringFiller + S;
  };
};

module.exports = {
  // `String.prototype.padStart` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.padstart
  start: createMethod(false),
  // `String.prototype.padEnd` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.padend
  end: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-punycode-to-ascii.js":
/*!********************************************************************!*
  !*** ./node_modules/core-js/internals/string-punycode-to-ascii.js ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";

// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;
var floor = Math.floor;
var stringFromCharCode = String.fromCharCode;

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = string.charCodeAt(counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = string.charCodeAt(counter++);
      if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
};

/**
 * Converts a digit/integer into a basic code point.
 */
var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  for (; delta > baseMinusTMin * tMax >> 1; k += base) {
    delta = floor(delta / baseMinusTMin);
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
// eslint-disable-next-line  max-statements
var encode = function (input) {
  var output = [];

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = ucs2decode(input);

  // Cache the length.
  var inputLength = input.length;

  // Initialize the state.
  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue;

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];
    if (currentValue < 0x80) {
      output.push(stringFromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;

  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    output.push(delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      throw RangeError(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < n && ++delta > maxInt) {
        throw RangeError(OVERFLOW_ERROR);
      }
      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        for (var k = base; /* no condition */; k += base) {
          var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor(qMinusT / baseMinusT);
        }

        output.push(stringFromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        ++handledCPCount;
      }
    }

    ++delta;
    ++n;
  }
  return output.join('');
};

module.exports = function (input) {
  var encoded = [];
  var labels = input.toLowerCase().replace(regexSeparators, '\u002E').split('.');
  var i, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    encoded.push(regexNonASCII.test(label) ? 'xn--' + encode(label) : label);
  }
  return encoded.join('.');
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-repeat.js":
/*!*********************************************************!*
  !*** ./node_modules/core-js/internals/string-repeat.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.repeat` method implementation
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
module.exports = ''.repeat || function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/task.js":
/*!************************************************!*
  !*** ./node_modules/core-js/internals/task.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "./node_modules/core-js/internals/engine-is-ios.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "./node_modules/core-js/internals/engine-is-node.js");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ (function(module) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/***/ (function(module) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.fill.js":
/*!*******************************************************!*
  !*** ./node_modules/core-js/modules/es.array.fill.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fill = __webpack_require__(/*! ../internals/array-fill */ "./node_modules/core-js/internals/array-fill.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $includes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reduce.js":
/*!*********************************************************!*
  !*** ./node_modules/core-js/modules/es.array.reduce.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $reduce = __webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").left;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");
var CHROME_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "./node_modules/core-js/internals/engine-is-node.js");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.splice.js":
/*!*********************************************************!*
  !*** ./node_modules/core-js/modules/es.array.splice.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.now.js":
/*!*****************************************************!*
  !*** ./node_modules/core-js/modules/es.date.now.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

// `Date.now` method
// https://tc39.github.io/ecma262/#sec-date.now
$({ target: 'Date', stat: true }, {
  now: function now() {
    return new Date().getTime();
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-iso-string.js":
/*!***************************************************************!*
  !*** ./node_modules/core-js/modules/es.date.to-iso-string.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toISOString = __webpack_require__(/*! ../internals/date-to-iso-string */ "./node_modules/core-js/internals/date-to-iso-string.js");

// `Date.prototype.toISOString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit has a broken implementations
$({ target: 'Date', proto: true, forced: Date.prototype.toISOString !== toISOString }, {
  toISOString: toISOString
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-string.js":
/*!***********************************************************!*
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.bind.js":
/*!**********************************************************!*
  !*** ./node_modules/core-js/modules/es.function.bind.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");

// `Function.prototype.bind` method
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.constructor.js":
/*!***************************************************************!*
  !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.values.js":
/*!**********************************************************!*
  !*** ./node_modules/core-js/modules/es.object.values.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $values = __webpack_require__(/*! ../internals/object-to-array */ "./node_modules/core-js/internals/object-to-array.js").values;

// `Object.values` method
// https://tc39.github.io/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.finally.js":
/*!************************************************************!*
  !*** ./node_modules/core-js/modules/es.promise.finally.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "./node_modules/core-js/internals/native-promise-constructor.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "./node_modules/core-js/internals/promise-resolve.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails(function () {
  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.github.io/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = typeof onFinally == 'function';
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// patch native Promise.prototype for native async functions
if (!IS_PURE && typeof NativePromise == 'function' && !NativePromise.prototype['finally']) {
  redefine(NativePromise.prototype, 'finally', getBuiltIn('Promise').prototype['finally']);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.js":
/*!****************************************************!*
  !*** ./node_modules/core-js/modules/es.promise.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "./node_modules/core-js/internals/native-promise-constructor.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var task = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;
var microtask = __webpack_require__(/*! ../internals/microtask */ "./node_modules/core-js/internals/microtask.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "./node_modules/core-js/internals/promise-resolve.js");
var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ "./node_modules/core-js/internals/host-report-errors.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "./node_modules/core-js/internals/perform.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "./node_modules/core-js/internals/engine-is-node.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && !NATIVE_REJECTION_EVENT) return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var flags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.ends-with.js":
/*!*************************************************************!*
  !*** ./node_modules/core-js/modules/es.string.ends-with.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var nativeEndsWith = ''.endsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.endswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = String(searchString);
    return nativeEndsWith
      ? nativeEndsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.match.js":
/*!*********************************************************!*
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.pad-start.js":
/*!*************************************************************!*
  !*** ./node_modules/core-js/modules/es.string.pad-start.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $padStart = __webpack_require__(/*! ../internals/string-pad */ "./node_modules/core-js/internals/string-pad.js").start;
var WEBKIT_BUG = __webpack_require__(/*! ../internals/string-pad-webkit-bug */ "./node_modules/core-js/internals/string-pad-webkit-bug.js");

// `String.prototype.padStart` method
// https://tc39.github.io/ecma262/#sec-string.prototype.padstart
$({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.repeat.js":
/*!**********************************************************!*
  !*** ./node_modules/core-js/modules/es.string.repeat.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var repeat = __webpack_require__(/*! ../internals/string-repeat */ "./node_modules/core-js/internals/string-repeat.js");

// `String.prototype.repeat` method
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
$({ target: 'String', proto: true }, {
  repeat: repeat
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "./node_modules/core-js/internals/same-value.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative(nativeSearch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.starts-with.js":
/*!***************************************************************!*
  !*** ./node_modules/core-js/modules/es.string.starts-with.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var nativeStartsWith = ''.startsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return nativeStartsWith
      ? nativeStartsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.url-search-params.js":
/*!***************************************************************!*
  !*** ./node_modules/core-js/modules/web.url-search-params.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var USE_NATIVE_URL = __webpack_require__(/*! ../internals/native-url */ "./node_modules/core-js/internals/native-url.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var hasOwn = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "./node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var $fetch = getBuiltIn('fetch');
var Headers = getBuiltIn('Headers');
var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);

var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function (sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function (it) {
  var result = it.replace(plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = result.replace(percentSequence(bytes--), percentDecode);
    }
    return result;
  }
};

var find = /[!'()~]|%20/g;

var replace = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replace[match];
};

var serialize = function (it) {
  return encodeURIComponent(it).replace(find, replacer);
};

var parseSearchParams = function (result, query) {
  if (query) {
    var attributes = query.split('&');
    var index = 0;
    var attribute, entry;
    while (index < attributes.length) {
      attribute = attributes[index++];
      if (attribute.length) {
        entry = attribute.split('=');
        result.push({
          key: deserialize(entry.shift()),
          value: deserialize(entry.join('='))
        });
      }
    }
  }
};

var updateSearchParams = function (query) {
  this.entries.length = 0;
  parseSearchParams(this.entries, query);
};

var validateArgumentsLength = function (passed, required) {
  if (passed < required) throw TypeError('Not enough arguments');
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator(getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;
  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  } return step;
});

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  var that = this;
  var entries = [];
  var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;

  setInternalState(that, {
    type: URL_SEARCH_PARAMS,
    entries: entries,
    updateURL: function () { /* empty */ },
    updateSearchParams: updateSearchParams
  });

  if (init !== undefined) {
    if (isObject(init)) {
      iteratorMethod = getIteratorMethod(init);
      if (typeof iteratorMethod === 'function') {
        iterator = iteratorMethod.call(init);
        next = iterator.next;
        while (!(step = next.call(iterator)).done) {
          entryIterator = getIterator(anObject(step.value));
          entryNext = entryIterator.next;
          if (
            (first = entryNext.call(entryIterator)).done ||
            (second = entryNext.call(entryIterator)).done ||
            !entryNext.call(entryIterator).done
          ) throw TypeError('Expected sequence with length 2');
          entries.push({ key: first.value + '', value: second.value + '' });
        }
      } else for (key in init) if (hasOwn(init, key)) entries.push({ key: key, value: init[key] + '' });
    } else {
      parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');
    }
  }
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

redefineAll(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength(arguments.length, 2);
    var state = getInternalParamsState(this);
    state.entries.push({ key: name + '', value: value + '' });
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index].key === key) entries.splice(index, 1);
      else index++;
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) result.push(entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = name + '';
    var val = value + '';
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) entries.splice(index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) entries.push({ key: key, value: val });
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    var entries = state.entries;
    // Array#sort is not stable in some engines
    var slice = entries.slice();
    var entry, entriesIndex, sliceIndex;
    entries.length = 0;
    for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
      entry = slice[sliceIndex];
      for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
        if (entries[entriesIndex].key > entry.key) {
          entries.splice(entriesIndex, 0, entry);
          break;
        }
      }
      if (entriesIndex === sliceIndex) entries.push(entry);
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries);

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
redefine(URLSearchParamsPrototype, 'toString', function toString() {
  var entries = getInternalParamsState(this).entries;
  var result = [];
  var index = 0;
  var entry;
  while (index < entries.length) {
    entry = entries[index++];
    result.push(serialize(entry.key) + '=' + serialize(entry.value));
  } return result.join('&');
}, { enumerable: true });

setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$({ global: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` for correct work with polyfilled `URLSearchParams`
// https://github.com/zloirock/core-js/issues/674
if (!USE_NATIVE_URL && typeof $fetch == 'function' && typeof Headers == 'function') {
  $({ global: true, enumerable: true, forced: true }, {
    fetch: function fetch(input /* , init */) {
      var args = [input];
      var init, body, headers;
      if (arguments.length > 1) {
        init = arguments[1];
        if (isObject(init)) {
          body = init.body;
          if (classof(body) === URL_SEARCH_PARAMS) {
            headers = init.headers ? new Headers(init.headers) : new Headers();
            if (!headers.has('content-type')) {
              headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
            }
            init = create(init, {
              body: createPropertyDescriptor(0, String(body)),
              headers: createPropertyDescriptor(0, headers)
            });
          }
        }
        args.push(init);
      } return $fetch.apply(this, args);
    }
  });
}

module.exports = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};


/***/ }),

/***/ "./node_modules/core-js/modules/web.url.js":
/*!*************************************************!*
  !*** ./node_modules/core-js/modules/web.url.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(/*! ../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var USE_NATIVE_URL = __webpack_require__(/*! ../internals/native-url */ "./node_modules/core-js/internals/native-url.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/core-js/internals/object-assign.js");
var arrayFrom = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var codeAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").codeAt;
var toASCII = __webpack_require__(/*! ../internals/string-punycode-to-ascii */ "./node_modules/core-js/internals/string-punycode-to-ascii.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var URLSearchParamsModule = __webpack_require__(/*! ../modules/web.url-search-params */ "./node_modules/core-js/modules/web.url-search-params.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var NativeURL = global.URL;
var URLSearchParams = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;
var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var floor = Math.floor;
var pow = Math.pow;

var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';

var ALPHA = /[A-Za-z]/;
var ALPHANUMERIC = /[\d+-.A-Za-z]/;
var DIGIT = /\d/;
var HEX_START = /^(0x|0X)/;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\dA-Fa-f]+$/;
// eslint-disable-next-line no-control-regex
var FORBIDDEN_HOST_CODE_POINT = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/;
// eslint-disable-next-line no-control-regex
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/;
// eslint-disable-next-line no-control-regex
var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
// eslint-disable-next-line no-control-regex
var TAB_AND_NEW_LINE = /[\u0009\u000A\u000D]/g;
var EOF;

var parseHost = function (url, input) {
  var result, codePoints, index;
  if (input.charAt(0) == '[') {
    if (input.charAt(input.length - 1) != ']') return INVALID_HOST;
    result = parseIPv6(input.slice(1, -1));
    if (!result) return INVALID_HOST;
    url.host = result;
  // opaque host
  } else if (!isSpecial(url)) {
    if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;
    result = '';
    codePoints = arrayFrom(input);
    for (index = 0; index < codePoints.length; index++) {
      result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
    }
    url.host = result;
  } else {
    input = toASCII(input);
    if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;
    result = parseIPv4(input);
    if (result === null) return INVALID_HOST;
    url.host = result;
  }
};

var parseIPv4 = function (input) {
  var parts = input.split('.');
  var partsLength, numbers, index, part, radix, number, ipv4;
  if (parts.length && parts[parts.length - 1] == '') {
    parts.pop();
  }
  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];
  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part == '') return input;
    radix = 10;
    if (part.length > 1 && part.charAt(0) == '0') {
      radix = HEX_START.test(part) ? 16 : 8;
      part = part.slice(radix == 8 ? 1 : 2);
    }
    if (part === '') {
      number = 0;
    } else {
      if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part)) return input;
      number = parseInt(part, radix);
    }
    numbers.push(number);
  }
  for (index = 0; index < partsLength; index++) {
    number = numbers[index];
    if (index == partsLength - 1) {
      if (number >= pow(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }
  ipv4 = numbers.pop();
  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow(256, 3 - index);
  }
  return ipv4;
};

// eslint-disable-next-line max-statements
var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var char = function () {
    return input.charAt(pointer);
  };

  if (char() == ':') {
    if (input.charAt(1) != ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }
  while (char()) {
    if (pieceIndex == 8) return;
    if (char() == ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }
    value = length = 0;
    while (length < 4 && HEX.test(char())) {
      value = value * 16 + parseInt(char(), 16);
      pointer++;
      length++;
    }
    if (char() == '.') {
      if (length == 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;
      while (char()) {
        ipv4Piece = null;
        if (numbersSeen > 0) {
          if (char() == '.' && numbersSeen < 4) pointer++;
          else return;
        }
        if (!DIGIT.test(char())) return;
        while (DIGIT.test(char())) {
          number = parseInt(char(), 10);
          if (ipv4Piece === null) ipv4Piece = number;
          else if (ipv4Piece == 0) return;
          else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
      }
      if (numbersSeen != 4) return;
      break;
    } else if (char() == ':') {
      pointer++;
      if (!char()) return;
    } else if (char()) return;
    address[pieceIndex++] = value;
  }
  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex != 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex != 8) return;
  return address;
};

var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;
  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }
  if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
  }
  return maxIndex;
};

var serializeHost = function (host) {
  var result, index, compress, ignore0;
  // ipv4
  if (typeof host == 'number') {
    result = [];
    for (index = 0; index < 4; index++) {
      result.unshift(host % 256);
      host = floor(host / 256);
    } return result.join('.');
  // ipv6
  } else if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);
    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;
      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += host[index].toString(16);
        if (index < 7) result += ':';
      }
    }
    return '[' + result + ']';
  } return host;
};

var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
  '#': 1, '?': 1, '{': 1, '}': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
});

var percentEncode = function (char, set) {
  var code = codeAt(char, 0);
  return code > 0x20 && code < 0x7F && !has(set, char) ? char : encodeURIComponent(char);
};

var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

var isSpecial = function (url) {
  return has(specialSchemes, url.scheme);
};

var includesCredentials = function (url) {
  return url.username != '' || url.password != '';
};

var cannotHaveUsernamePasswordPort = function (url) {
  return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
};

var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length == 2 && ALPHA.test(string.charAt(0))
    && ((second = string.charAt(1)) == ':' || (!normalized && second == '|'));
};

var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (
    string.length == 2 ||
    ((third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#')
  );
};

var shortenURLsPath = function (url) {
  var path = url.path;
  var pathSize = path.length;
  if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
    path.pop();
  }
};

var isSingleDot = function (segment) {
  return segment === '.' || segment.toLowerCase() === '%2e';
};

var isDoubleDot = function (segment) {
  segment = segment.toLowerCase();
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};

// States:
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};

// eslint-disable-next-line max-statements
var parseURL = function (url, input, stateOverride, base) {
  var state = stateOverride || SCHEME_START;
  var pointer = 0;
  var buffer = '';
  var seenAt = false;
  var seenBracket = false;
  var seenPasswordToken = false;
  var codePoints, char, bufferCodePoints, failure;

  if (!stateOverride) {
    url.scheme = '';
    url.username = '';
    url.password = '';
    url.host = null;
    url.port = null;
    url.path = [];
    url.query = null;
    url.fragment = null;
    url.cannotBeABaseURL = false;
    input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
  }

  input = input.replace(TAB_AND_NEW_LINE, '');

  codePoints = arrayFrom(input);

  while (pointer <= codePoints.length) {
    char = codePoints[pointer];
    switch (state) {
      case SCHEME_START:
        if (char && ALPHA.test(char)) {
          buffer += char.toLowerCase();
          state = SCHEME;
        } else if (!stateOverride) {
          state = NO_SCHEME;
          continue;
        } else return INVALID_SCHEME;
        break;

      case SCHEME:
        if (char && (ALPHANUMERIC.test(char) || char == '+' || char == '-' || char == '.')) {
          buffer += char.toLowerCase();
        } else if (char == ':') {
          if (stateOverride && (
            (isSpecial(url) != has(specialSchemes, buffer)) ||
            (buffer == 'file' && (includesCredentials(url) || url.port !== null)) ||
            (url.scheme == 'file' && !url.host)
          )) return;
          url.scheme = buffer;
          if (stateOverride) {
            if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
            return;
          }
          buffer = '';
          if (url.scheme == 'file') {
            state = FILE;
          } else if (isSpecial(url) && base && base.scheme == url.scheme) {
            state = SPECIAL_RELATIVE_OR_AUTHORITY;
          } else if (isSpecial(url)) {
            state = SPECIAL_AUTHORITY_SLASHES;
          } else if (codePoints[pointer + 1] == '/') {
            state = PATH_OR_AUTHORITY;
            pointer++;
          } else {
            url.cannotBeABaseURL = true;
            url.path.push('');
            state = CANNOT_BE_A_BASE_URL_PATH;
          }
        } else if (!stateOverride) {
          buffer = '';
          state = NO_SCHEME;
          pointer = 0;
          continue;
        } else return INVALID_SCHEME;
        break;

      case NO_SCHEME:
        if (!base || (base.cannotBeABaseURL && char != '#')) return INVALID_SCHEME;
        if (base.cannotBeABaseURL && char == '#') {
          url.scheme = base.scheme;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          url.cannotBeABaseURL = true;
          state = FRAGMENT;
          break;
        }
        state = base.scheme == 'file' ? FILE : RELATIVE;
        continue;

      case SPECIAL_RELATIVE_OR_AUTHORITY:
        if (char == '/' && codePoints[pointer + 1] == '/') {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          pointer++;
        } else {
          state = RELATIVE;
          continue;
        } break;

      case PATH_OR_AUTHORITY:
        if (char == '/') {
          state = AUTHORITY;
          break;
        } else {
          state = PATH;
          continue;
        }

      case RELATIVE:
        url.scheme = base.scheme;
        if (char == EOF) {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
        } else if (char == '/' || (char == '\\' && isSpecial(url))) {
          state = RELATIVE_SLASH;
        } else if (char == '?') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          state = FRAGMENT;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.path.pop();
          state = PATH;
          continue;
        } break;

      case RELATIVE_SLASH:
        if (isSpecial(url) && (char == '/' || char == '\\')) {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        } else if (char == '/') {
          state = AUTHORITY;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          state = PATH;
          continue;
        } break;

      case SPECIAL_AUTHORITY_SLASHES:
        state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        if (char != '/' || buffer.charAt(pointer + 1) != '/') continue;
        pointer++;
        break;

      case SPECIAL_AUTHORITY_IGNORE_SLASHES:
        if (char != '/' && char != '\\') {
          state = AUTHORITY;
          continue;
        } break;

      case AUTHORITY:
        if (char == '@') {
          if (seenAt) buffer = '%40' + buffer;
          seenAt = true;
          bufferCodePoints = arrayFrom(buffer);
          for (var i = 0; i < bufferCodePoints.length; i++) {
            var codePoint = bufferCodePoints[i];
            if (codePoint == ':' && !seenPasswordToken) {
              seenPasswordToken = true;
              continue;
            }
            var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
            if (seenPasswordToken) url.password += encodedCodePoints;
            else url.username += encodedCodePoints;
          }
          buffer = '';
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url))
        ) {
          if (seenAt && buffer == '') return INVALID_AUTHORITY;
          pointer -= arrayFrom(buffer).length + 1;
          buffer = '';
          state = HOST;
        } else buffer += char;
        break;

      case HOST:
      case HOSTNAME:
        if (stateOverride && url.scheme == 'file') {
          state = FILE_HOST;
          continue;
        } else if (char == ':' && !seenBracket) {
          if (buffer == '') return INVALID_HOST;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PORT;
          if (stateOverride == HOSTNAME) return;
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url))
        ) {
          if (isSpecial(url) && buffer == '') return INVALID_HOST;
          if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PATH_START;
          if (stateOverride) return;
          continue;
        } else {
          if (char == '[') seenBracket = true;
          else if (char == ']') seenBracket = false;
          buffer += char;
        } break;

      case PORT:
        if (DIGIT.test(char)) {
          buffer += char;
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url)) ||
          stateOverride
        ) {
          if (buffer != '') {
            var port = parseInt(buffer, 10);
            if (port > 0xFFFF) return INVALID_PORT;
            url.port = (isSpecial(url) && port === specialSchemes[url.scheme]) ? null : port;
            buffer = '';
          }
          if (stateOverride) return;
          state = PATH_START;
          continue;
        } else return INVALID_PORT;
        break;

      case FILE:
        url.scheme = 'file';
        if (char == '/' || char == '\\') state = FILE_SLASH;
        else if (base && base.scheme == 'file') {
          if (char == EOF) {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
          } else if (char == '?') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
              url.host = base.host;
              url.path = base.path.slice();
              shortenURLsPath(url);
            }
            state = PATH;
            continue;
          }
        } else {
          state = PATH;
          continue;
        } break;

      case FILE_SLASH:
        if (char == '/' || char == '\\') {
          state = FILE_HOST;
          break;
        }
        if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
          if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);
          else url.host = base.host;
        }
        state = PATH;
        continue;

      case FILE_HOST:
        if (char == EOF || char == '/' || char == '\\' || char == '?' || char == '#') {
          if (!stateOverride && isWindowsDriveLetter(buffer)) {
            state = PATH;
          } else if (buffer == '') {
            url.host = '';
            if (stateOverride) return;
            state = PATH_START;
          } else {
            failure = parseHost(url, buffer);
            if (failure) return failure;
            if (url.host == 'localhost') url.host = '';
            if (stateOverride) return;
            buffer = '';
            state = PATH_START;
          } continue;
        } else buffer += char;
        break;

      case PATH_START:
        if (isSpecial(url)) {
          state = PATH;
          if (char != '/' && char != '\\') continue;
        } else if (!stateOverride && char == '?') {
          url.query = '';
          state = QUERY;
        } else if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          state = PATH;
          if (char != '/') continue;
        } break;

      case PATH:
        if (
          char == EOF || char == '/' ||
          (char == '\\' && isSpecial(url)) ||
          (!stateOverride && (char == '?' || char == '#'))
        ) {
          if (isDoubleDot(buffer)) {
            shortenURLsPath(url);
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else if (isSingleDot(buffer)) {
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else {
            if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
              if (url.host) url.host = '';
              buffer = buffer.charAt(0) + ':'; // normalize windows drive letter
            }
            url.path.push(buffer);
          }
          buffer = '';
          if (url.scheme == 'file' && (char == EOF || char == '?' || char == '#')) {
            while (url.path.length > 1 && url.path[0] === '') {
              url.path.shift();
            }
          }
          if (char == '?') {
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.fragment = '';
            state = FRAGMENT;
          }
        } else {
          buffer += percentEncode(char, pathPercentEncodeSet);
        } break;

      case CANNOT_BE_A_BASE_URL_PATH:
        if (char == '?') {
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
        } break;

      case QUERY:
        if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          if (char == "'" && isSpecial(url)) url.query += '%27';
          else if (char == '#') url.query += '%23';
          else url.query += percentEncode(char, C0ControlPercentEncodeSet);
        } break;

      case FRAGMENT:
        if (char != EOF) url.fragment += percentEncode(char, fragmentPercentEncodeSet);
        break;
    }

    pointer++;
  }
};

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL(url /* , base */) {
  var that = anInstance(this, URLConstructor, 'URL');
  var base = arguments.length > 1 ? arguments[1] : undefined;
  var urlString = String(url);
  var state = setInternalState(that, { type: 'URL' });
  var baseState, failure;
  if (base !== undefined) {
    if (base instanceof URLConstructor) baseState = getInternalURLState(base);
    else {
      failure = parseURL(baseState = {}, String(base));
      if (failure) throw TypeError(failure);
    }
  }
  failure = parseURL(state, urlString, null, baseState);
  if (failure) throw TypeError(failure);
  var searchParams = state.searchParams = new URLSearchParams();
  var searchParamsState = getInternalSearchParamsState(searchParams);
  searchParamsState.updateSearchParams(state.query);
  searchParamsState.updateURL = function () {
    state.query = String(searchParams) || null;
  };
  if (!DESCRIPTORS) {
    that.href = serializeURL.call(that);
    that.origin = getOrigin.call(that);
    that.protocol = getProtocol.call(that);
    that.username = getUsername.call(that);
    that.password = getPassword.call(that);
    that.host = getHost.call(that);
    that.hostname = getHostname.call(that);
    that.port = getPort.call(that);
    that.pathname = getPathname.call(that);
    that.search = getSearch.call(that);
    that.searchParams = getSearchParams.call(that);
    that.hash = getHash.call(that);
  }
};

var URLPrototype = URLConstructor.prototype;

var serializeURL = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var username = url.username;
  var password = url.password;
  var host = url.host;
  var port = url.port;
  var path = url.path;
  var query = url.query;
  var fragment = url.fragment;
  var output = scheme + ':';
  if (host !== null) {
    output += '//';
    if (includesCredentials(url)) {
      output += username + (password ? ':' + password : '') + '@';
    }
    output += serializeHost(host);
    if (port !== null) output += ':' + port;
  } else if (scheme == 'file') output += '//';
  output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
  if (query !== null) output += '?' + query;
  if (fragment !== null) output += '#' + fragment;
  return output;
};

var getOrigin = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var port = url.port;
  if (scheme == 'blob') try {
    return new URL(scheme.path[0]).origin;
  } catch (error) {
    return 'null';
  }
  if (scheme == 'file' || !isSpecial(url)) return 'null';
  return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');
};

var getProtocol = function () {
  return getInternalURLState(this).scheme + ':';
};

var getUsername = function () {
  return getInternalURLState(this).username;
};

var getPassword = function () {
  return getInternalURLState(this).password;
};

var getHost = function () {
  var url = getInternalURLState(this);
  var host = url.host;
  var port = url.port;
  return host === null ? ''
    : port === null ? serializeHost(host)
    : serializeHost(host) + ':' + port;
};

var getHostname = function () {
  var host = getInternalURLState(this).host;
  return host === null ? '' : serializeHost(host);
};

var getPort = function () {
  var port = getInternalURLState(this).port;
  return port === null ? '' : String(port);
};

var getPathname = function () {
  var url = getInternalURLState(this);
  var path = url.path;
  return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
};

var getSearch = function () {
  var query = getInternalURLState(this).query;
  return query ? '?' + query : '';
};

var getSearchParams = function () {
  return getInternalURLState(this).searchParams;
};

var getHash = function () {
  var fragment = getInternalURLState(this).fragment;
  return fragment ? '#' + fragment : '';
};

var accessorDescriptor = function (getter, setter) {
  return { get: getter, set: setter, configurable: true, enumerable: true };
};

if (DESCRIPTORS) {
  defineProperties(URLPrototype, {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    href: accessorDescriptor(serializeURL, function (href) {
      var url = getInternalURLState(this);
      var urlString = String(href);
      var failure = parseURL(url, urlString);
      if (failure) throw TypeError(failure);
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin
    origin: accessorDescriptor(getOrigin),
    // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol
    protocol: accessorDescriptor(getProtocol, function (protocol) {
      var url = getInternalURLState(this);
      parseURL(url, String(protocol) + ':', SCHEME_START);
    }),
    // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username
    username: accessorDescriptor(getUsername, function (username) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(username));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.username = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password
    password: accessorDescriptor(getPassword, function (password) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(password));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.password = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host
    host: accessorDescriptor(getHost, function (host) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(host), HOST);
    }),
    // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname
    hostname: accessorDescriptor(getHostname, function (hostname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(hostname), HOSTNAME);
    }),
    // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port
    port: accessorDescriptor(getPort, function (port) {
      var url = getInternalURLState(this);
      if (cannotHaveUsernamePasswordPort(url)) return;
      port = String(port);
      if (port == '') url.port = null;
      else parseURL(url, port, PORT);
    }),
    // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname
    pathname: accessorDescriptor(getPathname, function (pathname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      url.path = [];
      parseURL(url, pathname + '', PATH_START);
    }),
    // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search
    search: accessorDescriptor(getSearch, function (search) {
      var url = getInternalURLState(this);
      search = String(search);
      if (search == '') {
        url.query = null;
      } else {
        if ('?' == search.charAt(0)) search = search.slice(1);
        url.query = '';
        parseURL(url, search, QUERY);
      }
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams
    searchParams: accessorDescriptor(getSearchParams),
    // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash
    hash: accessorDescriptor(getHash, function (hash) {
      var url = getInternalURLState(this);
      hash = String(hash);
      if (hash == '') {
        url.fragment = null;
        return;
      }
      if ('#' == hash.charAt(0)) hash = hash.slice(1);
      url.fragment = '';
      parseURL(url, hash, FRAGMENT);
    })
  });
}

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
redefine(URLPrototype, 'toJSON', function toJSON() {
  return serializeURL.call(this);
}, { enumerable: true });

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
redefine(URLPrototype, 'toString', function toString() {
  return serializeURL.call(this);
}, { enumerable: true });

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  // eslint-disable-next-line no-unused-vars
  if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {
    return nativeCreateObjectURL.apply(NativeURL, arguments);
  });
  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  // eslint-disable-next-line no-unused-vars
  if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
    return nativeRevokeObjectURL.apply(NativeURL, arguments);
  });
}

setToStringTag(URLConstructor, 'URL');

$({ global: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
  URL: URLConstructor
});


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony exports Headers, Request, Response, DOMException, fetch */
var global =
  (typeof globalThis !== 'undefined' && globalThis) ||
  (typeof self !== 'undefined' && self) ||
  (typeof global !== 'undefined' && global)

var support = {
  searchParams: 'URLSearchParams' in global,
  iterable: 'Symbol' in global && 'iterator' in Symbol,
  blob:
    'FileReader' in global &&
    'Blob' in global &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in global,
  arrayBuffer: 'ArrayBuffer' in global
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
    throw new TypeError('Invalid character in header field name: "' + name + '"')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
    this.bodyUsed = this.bodyUsed
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this)
        if (isConsumed) {
          return isConsumed
        }
        if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(
            this._bodyArrayBuffer.buffer.slice(
              this._bodyArrayBuffer.byteOffset,
              this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
            )
          )
        } else {
          return Promise.resolve(this._bodyArrayBuffer)
        }
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  if (!(this instanceof Request)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }

  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)

  if (this.method === 'GET' || this.method === 'HEAD') {
    if (options.cache === 'no-store' || options.cache === 'no-cache') {
      // Search for a '_' parameter in the query string
      var reParamSearch = /([?&])_=[^&]*/
      if (reParamSearch.test(this.url)) {
        // If it already exists then set the value with the current time
        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())
      } else {
        // Otherwise add a new '_' parameter to the end with the current time
        var reQueryString = /\?/
        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
      }
    }
  }
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
  // https://github.com/github/fetch/issues/748
  // https://github.com/zloirock/core-js/issues/751
  preProcessedHeaders
    .split('\r')
    .map(function(header) {
      return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
    })
    .forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!(this instanceof Response)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = options.statusText === undefined ? '' : '' + options.statusText
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = global.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      setTimeout(function() {
        resolve(new Response(body, options))
      }, 0)
    }

    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException('Aborted', 'AbortError'))
      }, 0)
    }

    function fixUrl(url) {
      try {
        return url === '' && global.location.href ? global.location.href : url
      } catch (e) {
        return url
      }
    }

    xhr.open(request.method, fixUrl(request.url), true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr) {
      if (support.blob) {
        xhr.responseType = 'blob'
      } else if (
        support.arrayBuffer &&
        request.headers.get('Content-Type') &&
        request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1
      ) {
        xhr.responseType = 'arraybuffer'
      }
    }

    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers)) {
      Object.getOwnPropertyNames(init.headers).forEach(function(name) {
        xhr.setRequestHeader(name, normalizeValue(init.headers[name]))
      })
    } else {
      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })
    }

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!global.fetch) {
  global.fetch = fetch
  global.Headers = Headers
  global.Request = Request
  global.Response = Response
}


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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/whatwg-fetch/fetch.js");
/******/ 	return __webpack_require__("./src/sdk/channels/index.ts");
/******/ })()
;
});