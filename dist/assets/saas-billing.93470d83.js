import { b as _sfc_main$9 } from "./index.e178843f.js";
import { d as defineComponent, k as ref, Q as watch, Z as onUnmounted, j as h, m as useI18n, e as computed, o as openBlock, f as createElementBlock, q as createBaseVNode, r as renderSlot, g as normalizeClass, t as toDisplayString, h as unref, a2 as withKeys, W as withModifiers, ae as createStaticVNode, _ as mergeProps, x as createTextVNode, a9 as reactive, z as resolveComponent, F as Fragment, X as renderList, y as createCommentVNode, s as createVNode, w as withCtx, a3 as withDirectives, a4 as vModelText, a1 as useHead } from "./vendor.6548d360.js";
import { _ as _sfc_main$8 } from "./VField.b8c33879.js";
import { _ as __unplugin_components_1 } from "./VControl.eb555562.js";
import { _ as _sfc_main$7 } from "./VSwitchBlock.3a146329.js";
import { _ as _sfc_main$6 } from "./UserPopoverContent.5da306fe.js";
import { _ as _sfc_main$5 } from "./VAvatar.08652fea.js";
import { p as popovers } from "./userPopovers.0b86b3bb.js";
import { u as useViewWrapper } from "./viewWrapper.d4aba839.js";
import "./via-placeholder.9af8280d.js";
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
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
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null)
      break;
  }
  return object;
}
function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get2(target2, property2, receiver2) {
      var base = _superPropBase(target2, property2);
      if (!base)
        return;
      var desc = Object.getOwnPropertyDescriptor(base, property2);
      if (desc.get) {
        return desc.get.call(receiver2);
      }
      return desc.value;
    };
  }
  return _get(target, property, receiver || target);
}
function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set2(target2, property2, value2, receiver2) {
      var base = _superPropBase(target2, property2);
      var desc;
      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property2);
        if (desc.set) {
          desc.set.call(receiver2, value2);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }
      desc = Object.getOwnPropertyDescriptor(receiver2, property2);
      if (desc) {
        if (!desc.writable) {
          return false;
        }
        desc.value = value2;
        Object.defineProperty(receiver2, property2, desc);
      } else {
        _defineProperty(receiver2, property2, value2);
      }
      return true;
    };
  }
  return set(target, property, value, receiver);
}
function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);
  if (!s && isStrict) {
    throw new Error("failed to set property");
  }
  return value;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function isString(str) {
  return typeof str === "string" || str instanceof String;
}
var DIRECTION = {
  NONE: "NONE",
  LEFT: "LEFT",
  FORCE_LEFT: "FORCE_LEFT",
  RIGHT: "RIGHT",
  FORCE_RIGHT: "FORCE_RIGHT"
};
function forceDirection(direction) {
  switch (direction) {
    case DIRECTION.LEFT:
      return DIRECTION.FORCE_LEFT;
    case DIRECTION.RIGHT:
      return DIRECTION.FORCE_RIGHT;
    default:
      return direction;
  }
}
function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
}
function objectIncludes(b, a) {
  if (a === b)
    return true;
  var arrA = Array.isArray(a), arrB = Array.isArray(b), i;
  if (arrA && arrB) {
    if (a.length != b.length)
      return false;
    for (i = 0; i < a.length; i++) {
      if (!objectIncludes(a[i], b[i]))
        return false;
    }
    return true;
  }
  if (arrA != arrB)
    return false;
  if (a && b && _typeof(a) === "object" && _typeof(b) === "object") {
    var dateA = a instanceof Date, dateB = b instanceof Date;
    if (dateA && dateB)
      return a.getTime() == b.getTime();
    if (dateA != dateB)
      return false;
    var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
    if (regexpA && regexpB)
      return a.toString() == b.toString();
    if (regexpA != regexpB)
      return false;
    var keys = Object.keys(a);
    for (i = 0; i < keys.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    }
    for (i = 0; i < keys.length; i++) {
      if (!objectIncludes(b[keys[i]], a[keys[i]]))
        return false;
    }
    return true;
  } else if (a && b && typeof a === "function" && typeof b === "function") {
    return a.toString() === b.toString();
  }
  return false;
}
var ActionDetails = /* @__PURE__ */ function() {
  function ActionDetails2(value, cursorPos, oldValue, oldSelection) {
    _classCallCheck(this, ActionDetails2);
    this.value = value;
    this.cursorPos = cursorPos;
    this.oldValue = oldValue;
    this.oldSelection = oldSelection;
    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
      --this.oldSelection.start;
    }
  }
  _createClass(ActionDetails2, [{
    key: "startChangePos",
    get: function get() {
      return Math.min(this.cursorPos, this.oldSelection.start);
    }
  }, {
    key: "insertedCount",
    get: function get() {
      return this.cursorPos - this.startChangePos;
    }
  }, {
    key: "inserted",
    get: function get() {
      return this.value.substr(this.startChangePos, this.insertedCount);
    }
  }, {
    key: "removedCount",
    get: function get() {
      return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0);
    }
  }, {
    key: "removed",
    get: function get() {
      return this.oldValue.substr(this.startChangePos, this.removedCount);
    }
  }, {
    key: "head",
    get: function get() {
      return this.value.substring(0, this.startChangePos);
    }
  }, {
    key: "tail",
    get: function get() {
      return this.value.substring(this.startChangePos + this.insertedCount);
    }
  }, {
    key: "removeDirection",
    get: function get() {
      if (!this.removedCount || this.insertedCount)
        return DIRECTION.NONE;
      return this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? DIRECTION.RIGHT : DIRECTION.LEFT;
    }
  }]);
  return ActionDetails2;
}();
var ChangeDetails = /* @__PURE__ */ function() {
  function ChangeDetails2(details) {
    _classCallCheck(this, ChangeDetails2);
    Object.assign(this, {
      inserted: "",
      rawInserted: "",
      skip: false,
      tailShift: 0
    }, details);
  }
  _createClass(ChangeDetails2, [{
    key: "aggregate",
    value: function aggregate(details) {
      this.rawInserted += details.rawInserted;
      this.skip = this.skip || details.skip;
      this.inserted += details.inserted;
      this.tailShift += details.tailShift;
      return this;
    }
  }, {
    key: "offset",
    get: function get() {
      return this.tailShift + this.inserted.length;
    }
  }]);
  return ChangeDetails2;
}();
var ContinuousTailDetails = /* @__PURE__ */ function() {
  function ContinuousTailDetails2() {
    var value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    var from = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var stop = arguments.length > 2 ? arguments[2] : void 0;
    _classCallCheck(this, ContinuousTailDetails2);
    this.value = value;
    this.from = from;
    this.stop = stop;
  }
  _createClass(ContinuousTailDetails2, [{
    key: "toString",
    value: function toString() {
      return this.value;
    }
  }, {
    key: "extend",
    value: function extend(tail) {
      this.value += String(tail);
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      return masked.append(this.toString(), {
        tail: true
      }).aggregate(masked._appendPlaceholder());
    }
  }, {
    key: "state",
    get: function get() {
      return {
        value: this.value,
        from: this.from,
        stop: this.stop
      };
    },
    set: function set2(state) {
      Object.assign(this, state);
    }
  }, {
    key: "shiftBefore",
    value: function shiftBefore(pos) {
      if (this.from >= pos || !this.value.length)
        return "";
      var shiftChar = this.value[0];
      this.value = this.value.slice(1);
      return shiftChar;
    }
  }]);
  return ContinuousTailDetails2;
}();
function IMask(el) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return new IMask.InputMask(el, opts);
}
var Masked = /* @__PURE__ */ function() {
  function Masked2(opts) {
    _classCallCheck(this, Masked2);
    this._value = "";
    this._update(Object.assign({}, Masked2.DEFAULTS, opts));
    this.isInitialized = true;
  }
  _createClass(Masked2, [{
    key: "updateOptions",
    value: function updateOptions(opts) {
      if (!Object.keys(opts).length)
        return;
      this.withValueRefresh(this._update.bind(this, opts));
    }
  }, {
    key: "_update",
    value: function _update(opts) {
      Object.assign(this, opts);
    }
  }, {
    key: "state",
    get: function get() {
      return {
        _value: this.value
      };
    },
    set: function set2(state) {
      this._value = state._value;
    }
  }, {
    key: "reset",
    value: function reset() {
      this._value = "";
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set2(value) {
      this.resolve(value);
    }
  }, {
    key: "resolve",
    value: function resolve(value) {
      this.reset();
      this.append(value, {
        input: true
      }, "");
      this.doCommit();
      return this.value;
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.value;
    },
    set: function set2(value) {
      this.reset();
      this.append(value, {}, "");
      this.doCommit();
    }
  }, {
    key: "typedValue",
    get: function get() {
      return this.doParse(this.value);
    },
    set: function set2(value) {
      this.value = this.doFormat(value);
    }
  }, {
    key: "rawInputValue",
    get: function get() {
      return this.extractInput(0, this.value.length, {
        raw: true
      });
    },
    set: function set2(value) {
      this.reset();
      this.append(value, {
        raw: true
      }, "");
      this.doCommit();
    }
  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      return cursorPos;
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      return this.value.slice(fromPos, toPos);
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
    }
  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if (isString(tail))
        tail = new ContinuousTailDetails(String(tail));
      return tail.appendTo(this);
    }
  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      if (!ch)
        return new ChangeDetails();
      this._value += ch;
      return new ChangeDetails({
        inserted: ch,
        rawInserted: ch
      });
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var checkTail = arguments.length > 2 ? arguments[2] : void 0;
      var consistentState = this.state;
      var details = this._appendCharRaw(this.doPrepare(ch, flags), flags);
      if (details.inserted) {
        var consistentTail;
        var appended = this.doValidate(flags) !== false;
        if (appended && checkTail != null) {
          var beforeTailState = this.state;
          if (this.overwrite) {
            consistentTail = checkTail.state;
            checkTail.shiftBefore(this.value.length);
          }
          var tailDetails = this.appendTail(checkTail);
          appended = tailDetails.rawInserted === checkTail.toString();
          if (appended && tailDetails.inserted)
            this.state = beforeTailState;
        }
        if (!appended) {
          details = new ChangeDetails();
          this.state = consistentState;
          if (checkTail && consistentTail)
            checkTail.state = consistentTail;
        }
      }
      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      return new ChangeDetails();
    }
  }, {
    key: "append",
    value: function append(str, flags, tail) {
      if (!isString(str))
        throw new Error("value should be string");
      var details = new ChangeDetails();
      var checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
      if (flags && flags.tail)
        flags._beforeTailState = this.state;
      for (var ci = 0; ci < str.length; ++ci) {
        details.aggregate(this._appendChar(str[ci], flags, checkTail));
      }
      if (checkTail != null) {
        details.tailShift += this.appendTail(checkTail).tailShift;
      }
      return details;
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
      return new ChangeDetails();
    }
  }, {
    key: "withValueRefresh",
    value: function withValueRefresh(fn) {
      if (this._refreshing || !this.isInitialized)
        return fn();
      this._refreshing = true;
      var rawInput = this.rawInputValue;
      var value = this.value;
      var ret = fn();
      this.rawInputValue = rawInput;
      if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
        this.append(value.slice(this.value.length), {}, "");
      }
      delete this._refreshing;
      return ret;
    }
  }, {
    key: "runIsolated",
    value: function runIsolated(fn) {
      if (this._isolated || !this.isInitialized)
        return fn(this);
      this._isolated = true;
      var state = this.state;
      var ret = fn(this);
      this.state = state;
      delete this._isolated;
      return ret;
    }
  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.prepare ? this.prepare(str, this, flags) : str;
    }
  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.commit)
        this.commit(this.value, this);
    }
  }, {
    key: "doFormat",
    value: function doFormat(value) {
      return this.format ? this.format(value, this) : value;
    }
  }, {
    key: "doParse",
    value: function doParse(str) {
      return this.parse ? this.parse(str, this) : str;
    }
  }, {
    key: "splice",
    value: function splice(start, deleteCount, inserted, removeDirection) {
      var tailPos = start + deleteCount;
      var tail = this.extractTail(tailPos);
      var startChangePos = this.nearestInputPos(start, removeDirection);
      var changeDetails = new ChangeDetails({
        tailShift: startChangePos - start
      }).aggregate(this.remove(startChangePos)).aggregate(this.append(inserted, {
        input: true
      }, tail));
      return changeDetails;
    }
  }]);
  return Masked2;
}();
Masked.DEFAULTS = {
  format: function format(v) {
    return v;
  },
  parse: function parse(v) {
    return v;
  }
};
IMask.Masked = Masked;
function maskedClass(mask) {
  if (mask == null) {
    throw new Error("mask property should be defined");
  }
  if (mask instanceof RegExp)
    return IMask.MaskedRegExp;
  if (isString(mask))
    return IMask.MaskedPattern;
  if (mask instanceof Date || mask === Date)
    return IMask.MaskedDate;
  if (mask instanceof Number || typeof mask === "number" || mask === Number)
    return IMask.MaskedNumber;
  if (Array.isArray(mask) || mask === Array)
    return IMask.MaskedDynamic;
  if (IMask.Masked && mask.prototype instanceof IMask.Masked)
    return mask;
  if (mask instanceof Function)
    return IMask.MaskedFunction;
  if (mask instanceof IMask.Masked)
    return mask.constructor;
  console.warn("Mask not found for mask", mask);
  return IMask.Masked;
}
function createMask(opts) {
  if (IMask.Masked && opts instanceof IMask.Masked)
    return opts;
  opts = Object.assign({}, opts);
  var mask = opts.mask;
  if (IMask.Masked && mask instanceof IMask.Masked)
    return mask;
  var MaskedClass = maskedClass(mask);
  if (!MaskedClass)
    throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");
  return new MaskedClass(opts);
}
IMask.createMask = createMask;
var _excluded$4 = ["mask"];
var DEFAULT_INPUT_DEFINITIONS = {
  "0": /\d/,
  "a": /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  "*": /./
};
var PatternInputDefinition = /* @__PURE__ */ function() {
  function PatternInputDefinition2(opts) {
    _classCallCheck(this, PatternInputDefinition2);
    var mask = opts.mask, blockOpts = _objectWithoutProperties(opts, _excluded$4);
    this.masked = createMask({
      mask
    });
    Object.assign(this, blockOpts);
  }
  _createClass(PatternInputDefinition2, [{
    key: "reset",
    value: function reset() {
      this._isFilled = false;
      this.masked.reset();
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      if (fromPos === 0 && toPos >= 1) {
        this._isFilled = false;
        return this.masked.remove(fromPos, toPos);
      }
      return new ChangeDetails();
    }
  }, {
    key: "value",
    get: function get() {
      return this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : "");
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.masked.unmaskedValue;
    }
  }, {
    key: "isComplete",
    get: function get() {
      return Boolean(this.masked.value) || this.isOptional;
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(str) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (this._isFilled)
        return new ChangeDetails();
      var state = this.masked.state;
      var details = this.masked._appendChar(str, flags);
      if (details.inserted && this.doValidate(flags) === false) {
        details.inserted = details.rawInserted = "";
        this.masked.state = state;
      }
      if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
        details.inserted = this.placeholderChar;
      }
      details.skip = !details.inserted && !this.isOptional;
      this._isFilled = Boolean(details.inserted);
      return details;
    }
  }, {
    key: "append",
    value: function append() {
      var _this$masked;
      return (_this$masked = this.masked).append.apply(_this$masked, arguments);
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new ChangeDetails();
      if (this._isFilled || this.isOptional)
        return details;
      this._isFilled = true;
      details.inserted = this.placeholderChar;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$masked2;
      return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
    }
  }, {
    key: "appendTail",
    value: function appendTail() {
      var _this$masked3;
      return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : void 0;
      return this.masked.extractInput(fromPos, toPos, flags);
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DIRECTION.NONE;
      var minPos = 0;
      var maxPos = this.value.length;
      var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
      switch (direction) {
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          return this.isComplete ? boundPos : minPos;
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
          return this.isComplete ? boundPos : maxPos;
        case DIRECTION.NONE:
        default:
          return boundPos;
      }
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this$masked4, _this$parent;
      return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      this.masked.doCommit();
    }
  }, {
    key: "state",
    get: function get() {
      return {
        masked: this.masked.state,
        _isFilled: this._isFilled
      };
    },
    set: function set2(state) {
      this.masked.state = state.masked;
      this._isFilled = state._isFilled;
    }
  }]);
  return PatternInputDefinition2;
}();
var PatternFixedDefinition = /* @__PURE__ */ function() {
  function PatternFixedDefinition2(opts) {
    _classCallCheck(this, PatternFixedDefinition2);
    Object.assign(this, opts);
    this._value = "";
  }
  _createClass(PatternFixedDefinition2, [{
    key: "value",
    get: function get() {
      return this._value;
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.isUnmasking ? this.value : "";
    }
  }, {
    key: "reset",
    value: function reset() {
      this._isRawInput = false;
      this._value = "";
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._value.length;
      this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
      if (!this._value)
        this._isRawInput = false;
      return new ChangeDetails();
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DIRECTION.NONE;
      var minPos = 0;
      var maxPos = this._value.length;
      switch (direction) {
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          return minPos;
        case DIRECTION.NONE:
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
        default:
          return maxPos;
      }
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._value.length;
      var flags = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || "";
    }
  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(str) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var details = new ChangeDetails();
      if (this._value)
        return details;
      var appended = this.char === str[0];
      var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !flags.tail;
      if (isResolved)
        details.rawInserted = this.char;
      this._value = details.inserted = this.char;
      this._isRawInput = isResolved && (flags.raw || flags.input);
      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new ChangeDetails();
      if (this._value)
        return details;
      this._value = details.inserted = this.char;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      return new ContinuousTailDetails("");
    }
  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if (isString(tail))
        tail = new ContinuousTailDetails(String(tail));
      return tail.appendTo(this);
    }
  }, {
    key: "append",
    value: function append(str, flags, tail) {
      var details = this._appendChar(str, flags);
      if (tail != null) {
        details.tailShift += this.appendTail(tail).tailShift;
      }
      return details;
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
    }
  }, {
    key: "state",
    get: function get() {
      return {
        _value: this._value,
        _isRawInput: this._isRawInput
      };
    },
    set: function set2(state) {
      Object.assign(this, state);
    }
  }]);
  return PatternFixedDefinition2;
}();
var _excluded$3 = ["chunks"];
var ChunksTailDetails = /* @__PURE__ */ function() {
  function ChunksTailDetails2() {
    var chunks = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var from = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    _classCallCheck(this, ChunksTailDetails2);
    this.chunks = chunks;
    this.from = from;
  }
  _createClass(ChunksTailDetails2, [{
    key: "toString",
    value: function toString() {
      return this.chunks.map(String).join("");
    }
  }, {
    key: "extend",
    value: function extend(tailChunk) {
      if (!String(tailChunk))
        return;
      if (isString(tailChunk))
        tailChunk = new ContinuousTailDetails(String(tailChunk));
      var lastChunk = this.chunks[this.chunks.length - 1];
      var extendLast = lastChunk && (lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && tailChunk.from === lastChunk.from + lastChunk.toString().length;
      if (tailChunk instanceof ContinuousTailDetails) {
        if (extendLast) {
          lastChunk.extend(tailChunk.toString());
        } else {
          this.chunks.push(tailChunk);
        }
      } else if (tailChunk instanceof ChunksTailDetails2) {
        if (tailChunk.stop == null) {
          var firstTailChunk;
          while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
            firstTailChunk = tailChunk.chunks.shift();
            firstTailChunk.from += tailChunk.from;
            this.extend(firstTailChunk);
          }
        }
        if (tailChunk.toString()) {
          tailChunk.stop = tailChunk.blockIndex;
          this.chunks.push(tailChunk);
        }
      }
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      if (!(masked instanceof IMask.MaskedPattern)) {
        var tail = new ContinuousTailDetails(this.toString());
        return tail.appendTo(masked);
      }
      var details = new ChangeDetails();
      for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
        var chunk = this.chunks[ci];
        var lastBlockIter = masked._mapPosToBlock(masked.value.length);
        var stop = chunk.stop;
        var chunkBlock = void 0;
        if (stop != null && (!lastBlockIter || lastBlockIter.index <= stop)) {
          if (chunk instanceof ChunksTailDetails2 || masked._stops.indexOf(stop) >= 0) {
            details.aggregate(masked._appendPlaceholder(stop));
          }
          chunkBlock = chunk instanceof ChunksTailDetails2 && masked._blocks[stop];
        }
        if (chunkBlock) {
          var tailDetails = chunkBlock.appendTail(chunk);
          tailDetails.skip = false;
          details.aggregate(tailDetails);
          masked._value += tailDetails.inserted;
          var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
          if (remainChars)
            details.aggregate(masked.append(remainChars, {
              tail: true
            }));
        } else {
          details.aggregate(masked.append(chunk.toString(), {
            tail: true
          }));
        }
      }
      return details;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        chunks: this.chunks.map(function(c) {
          return c.state;
        }),
        from: this.from,
        stop: this.stop,
        blockIndex: this.blockIndex
      };
    },
    set: function set2(state) {
      var chunks = state.chunks, props = _objectWithoutProperties(state, _excluded$3);
      Object.assign(this, props);
      this.chunks = chunks.map(function(cstate) {
        var chunk = "chunks" in cstate ? new ChunksTailDetails2() : new ContinuousTailDetails();
        chunk.state = cstate;
        return chunk;
      });
    }
  }, {
    key: "shiftBefore",
    value: function shiftBefore(pos) {
      if (this.from >= pos || !this.chunks.length)
        return "";
      var chunkShiftPos = pos - this.from;
      var ci = 0;
      while (ci < this.chunks.length) {
        var chunk = this.chunks[ci];
        var shiftChar = chunk.shiftBefore(chunkShiftPos);
        if (chunk.toString()) {
          if (!shiftChar)
            break;
          ++ci;
        } else {
          this.chunks.splice(ci, 1);
        }
        if (shiftChar)
          return shiftChar;
      }
      return "";
    }
  }]);
  return ChunksTailDetails2;
}();
var MaskedRegExp = /* @__PURE__ */ function(_Masked) {
  _inherits(MaskedRegExp2, _Masked);
  var _super = _createSuper(MaskedRegExp2);
  function MaskedRegExp2() {
    _classCallCheck(this, MaskedRegExp2);
    return _super.apply(this, arguments);
  }
  _createClass(MaskedRegExp2, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.mask)
        opts.validate = function(value) {
          return value.search(opts.mask) >= 0;
        };
      _get(_getPrototypeOf(MaskedRegExp2.prototype), "_update", this).call(this, opts);
    }
  }]);
  return MaskedRegExp2;
}(Masked);
IMask.MaskedRegExp = MaskedRegExp;
var _excluded$2 = ["_blocks"];
var MaskedPattern = /* @__PURE__ */ function(_Masked) {
  _inherits(MaskedPattern2, _Masked);
  var _super = _createSuper(MaskedPattern2);
  function MaskedPattern2() {
    var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _classCallCheck(this, MaskedPattern2);
    opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
    return _super.call(this, Object.assign({}, MaskedPattern2.DEFAULTS, opts));
  }
  _createClass(MaskedPattern2, [{
    key: "_update",
    value: function _update() {
      var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      opts.definitions = Object.assign({}, this.definitions, opts.definitions);
      _get(_getPrototypeOf(MaskedPattern2.prototype), "_update", this).call(this, opts);
      this._rebuildMask();
    }
  }, {
    key: "_rebuildMask",
    value: function _rebuildMask() {
      var _this = this;
      var defs = this.definitions;
      this._blocks = [];
      this._stops = [];
      this._maskedBlocks = {};
      var pattern = this.mask;
      if (!pattern || !defs)
        return;
      var unmaskingBlock = false;
      var optionalBlock = false;
      for (var i = 0; i < pattern.length; ++i) {
        if (this.blocks) {
          var _ret = function() {
            var p = pattern.slice(i);
            var bNames = Object.keys(_this.blocks).filter(function(bName2) {
              return p.indexOf(bName2) === 0;
            });
            bNames.sort(function(a, b) {
              return b.length - a.length;
            });
            var bName = bNames[0];
            if (bName) {
              var maskedBlock = createMask(Object.assign({
                parent: _this,
                lazy: _this.lazy,
                placeholderChar: _this.placeholderChar,
                overwrite: _this.overwrite
              }, _this.blocks[bName]));
              if (maskedBlock) {
                _this._blocks.push(maskedBlock);
                if (!_this._maskedBlocks[bName])
                  _this._maskedBlocks[bName] = [];
                _this._maskedBlocks[bName].push(_this._blocks.length - 1);
              }
              i += bName.length - 1;
              return "continue";
            }
          }();
          if (_ret === "continue")
            continue;
        }
        var char = pattern[i];
        var _isInput = char in defs;
        if (char === MaskedPattern2.STOP_CHAR) {
          this._stops.push(this._blocks.length);
          continue;
        }
        if (char === "{" || char === "}") {
          unmaskingBlock = !unmaskingBlock;
          continue;
        }
        if (char === "[" || char === "]") {
          optionalBlock = !optionalBlock;
          continue;
        }
        if (char === MaskedPattern2.ESCAPE_CHAR) {
          ++i;
          char = pattern[i];
          if (!char)
            break;
          _isInput = false;
        }
        var def = _isInput ? new PatternInputDefinition({
          parent: this,
          lazy: this.lazy,
          placeholderChar: this.placeholderChar,
          mask: defs[char],
          isOptional: optionalBlock
        }) : new PatternFixedDefinition({
          char,
          isUnmasking: unmaskingBlock
        });
        this._blocks.push(def);
      }
    }
  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, _get(_getPrototypeOf(MaskedPattern2.prototype), "state", this), {
        _blocks: this._blocks.map(function(b) {
          return b.state;
        })
      });
    },
    set: function set2(state) {
      var _blocks = state._blocks, maskedState = _objectWithoutProperties(state, _excluded$2);
      this._blocks.forEach(function(b, bi) {
        return b.state = _blocks[bi];
      });
      _set(_getPrototypeOf(MaskedPattern2.prototype), "state", maskedState, this, true);
    }
  }, {
    key: "reset",
    value: function reset() {
      _get(_getPrototypeOf(MaskedPattern2.prototype), "reset", this).call(this);
      this._blocks.forEach(function(b) {
        return b.reset();
      });
    }
  }, {
    key: "isComplete",
    get: function get() {
      return this._blocks.every(function(b) {
        return b.isComplete;
      });
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      this._blocks.forEach(function(b) {
        return b.doCommit();
      });
      _get(_getPrototypeOf(MaskedPattern2.prototype), "doCommit", this).call(this);
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._blocks.reduce(function(str, b) {
        return str += b.unmaskedValue;
      }, "");
    },
    set: function set2(unmaskedValue) {
      _set(_getPrototypeOf(MaskedPattern2.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
  }, {
    key: "value",
    get: function get() {
      return this._blocks.reduce(function(str, b) {
        return str += b.value;
      }, "");
    },
    set: function set2(value) {
      _set(_getPrototypeOf(MaskedPattern2.prototype), "value", value, this, true);
    }
  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      return _get(_getPrototypeOf(MaskedPattern2.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
    }
  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var blockIter = this._mapPosToBlock(this.value.length);
      var details = new ChangeDetails();
      if (!blockIter)
        return details;
      for (var bi = blockIter.index; ; ++bi) {
        var _block = this._blocks[bi];
        if (!_block)
          break;
        var blockDetails = _block._appendChar(ch, flags);
        var skip = blockDetails.skip;
        details.aggregate(blockDetails);
        if (skip || blockDetails.rawInserted)
          break;
      }
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this2 = this;
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var chunkTail = new ChunksTailDetails();
      if (fromPos === toPos)
        return chunkTail;
      this._forEachBlocksInRange(fromPos, toPos, function(b, bi, bFromPos, bToPos) {
        var blockChunk = b.extractTail(bFromPos, bToPos);
        blockChunk.stop = _this2._findStopBefore(bi);
        blockChunk.from = _this2._blockStartPos(bi);
        if (blockChunk instanceof ChunksTailDetails)
          blockChunk.blockIndex = bi;
        chunkTail.extend(blockChunk);
      });
      return chunkTail;
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (fromPos === toPos)
        return "";
      var input = "";
      this._forEachBlocksInRange(fromPos, toPos, function(b, _, fromPos2, toPos2) {
        input += b.extractInput(fromPos2, toPos2, flags);
      });
      return input;
    }
  }, {
    key: "_findStopBefore",
    value: function _findStopBefore(blockIndex) {
      var stopBefore;
      for (var si = 0; si < this._stops.length; ++si) {
        var stop = this._stops[si];
        if (stop <= blockIndex)
          stopBefore = stop;
        else
          break;
      }
      return stopBefore;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder(toBlockIndex) {
      var _this3 = this;
      var details = new ChangeDetails();
      if (this.lazy && toBlockIndex == null)
        return details;
      var startBlockIter = this._mapPosToBlock(this.value.length);
      if (!startBlockIter)
        return details;
      var startBlockIndex = startBlockIter.index;
      var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;
      this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function(b) {
        if (!b.lazy || toBlockIndex != null) {
          var args = b._blocks != null ? [b._blocks.length] : [];
          var bDetails = b._appendPlaceholder.apply(b, args);
          _this3._value += bDetails.inserted;
          details.aggregate(bDetails);
        }
      });
      return details;
    }
  }, {
    key: "_mapPosToBlock",
    value: function _mapPosToBlock(pos) {
      var accVal = "";
      for (var bi = 0; bi < this._blocks.length; ++bi) {
        var _block2 = this._blocks[bi];
        var blockStartPos = accVal.length;
        accVal += _block2.value;
        if (pos <= accVal.length) {
          return {
            index: bi,
            offset: pos - blockStartPos
          };
        }
      }
    }
  }, {
    key: "_blockStartPos",
    value: function _blockStartPos(blockIndex) {
      return this._blocks.slice(0, blockIndex).reduce(function(pos, b) {
        return pos += b.value.length;
      }, 0);
    }
  }, {
    key: "_forEachBlocksInRange",
    value: function _forEachBlocksInRange(fromPos) {
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var fn = arguments.length > 2 ? arguments[2] : void 0;
      var fromBlockIter = this._mapPosToBlock(fromPos);
      if (fromBlockIter) {
        var toBlockIter = this._mapPosToBlock(toPos);
        var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
        var fromBlockStartPos = fromBlockIter.offset;
        var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
        fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
        if (toBlockIter && !isSameBlock) {
          for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
            fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
          }
          fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
        }
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var removeDetails = _get(_getPrototypeOf(MaskedPattern2.prototype), "remove", this).call(this, fromPos, toPos);
      this._forEachBlocksInRange(fromPos, toPos, function(b, _, bFromPos, bToPos) {
        removeDetails.aggregate(b.remove(bFromPos, bToPos));
      });
      return removeDetails;
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DIRECTION.NONE;
      var beginBlockData = this._mapPosToBlock(cursorPos) || {
        index: 0,
        offset: 0
      };
      var beginBlockOffset = beginBlockData.offset, beginBlockIndex = beginBlockData.index;
      var beginBlock = this._blocks[beginBlockIndex];
      if (!beginBlock)
        return cursorPos;
      var beginBlockCursorPos = beginBlockOffset;
      if (beginBlockCursorPos !== 0 && beginBlockCursorPos < beginBlock.value.length) {
        beginBlockCursorPos = beginBlock.nearestInputPos(beginBlockOffset, forceDirection(direction));
      }
      var cursorAtRight = beginBlockCursorPos === beginBlock.value.length;
      var cursorAtLeft = beginBlockCursorPos === 0;
      if (!cursorAtLeft && !cursorAtRight)
        return this._blockStartPos(beginBlockIndex) + beginBlockCursorPos;
      var searchBlockIndex = cursorAtRight ? beginBlockIndex + 1 : beginBlockIndex;
      if (direction === DIRECTION.NONE) {
        if (searchBlockIndex > 0) {
          var blockIndexAtLeft = searchBlockIndex - 1;
          var blockAtLeft = this._blocks[blockIndexAtLeft];
          var blockInputPos = blockAtLeft.nearestInputPos(0, DIRECTION.NONE);
          if (!blockAtLeft.value.length || blockInputPos !== blockAtLeft.value.length) {
            return this._blockStartPos(searchBlockIndex);
          }
        }
        var firstInputAtRight = searchBlockIndex;
        for (var bi = firstInputAtRight; bi < this._blocks.length; ++bi) {
          var blockAtRight = this._blocks[bi];
          var _blockInputPos = blockAtRight.nearestInputPos(0, DIRECTION.NONE);
          if (!blockAtRight.value.length || _blockInputPos !== blockAtRight.value.length) {
            return this._blockStartPos(bi) + _blockInputPos;
          }
        }
        for (var _bi = searchBlockIndex - 1; _bi >= 0; --_bi) {
          var _block3 = this._blocks[_bi];
          var _blockInputPos2 = _block3.nearestInputPos(0, DIRECTION.NONE);
          if (!_block3.value.length || _blockInputPos2 !== _block3.value.length) {
            return this._blockStartPos(_bi) + _block3.value.length;
          }
        }
        return cursorPos;
      }
      if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
        var firstFilledBlockIndexAtRight;
        for (var _bi2 = searchBlockIndex; _bi2 < this._blocks.length; ++_bi2) {
          if (this._blocks[_bi2].value) {
            firstFilledBlockIndexAtRight = _bi2;
            break;
          }
        }
        if (firstFilledBlockIndexAtRight != null) {
          var filledBlock = this._blocks[firstFilledBlockIndexAtRight];
          var _blockInputPos3 = filledBlock.nearestInputPos(0, DIRECTION.RIGHT);
          if (_blockInputPos3 === 0 && filledBlock.unmaskedValue.length) {
            return this._blockStartPos(firstFilledBlockIndexAtRight) + _blockInputPos3;
          }
        }
        var firstFilledInputBlockIndex = -1;
        var firstEmptyInputBlockIndex;
        for (var _bi3 = searchBlockIndex - 1; _bi3 >= 0; --_bi3) {
          var _block4 = this._blocks[_bi3];
          var _blockInputPos4 = _block4.nearestInputPos(_block4.value.length, DIRECTION.FORCE_LEFT);
          if (!_block4.value || _blockInputPos4 !== 0)
            firstEmptyInputBlockIndex = _bi3;
          if (_blockInputPos4 !== 0) {
            if (_blockInputPos4 !== _block4.value.length) {
              return this._blockStartPos(_bi3) + _blockInputPos4;
            } else {
              firstFilledInputBlockIndex = _bi3;
              break;
            }
          }
        }
        if (direction === DIRECTION.LEFT) {
          for (var _bi4 = firstFilledInputBlockIndex + 1; _bi4 <= Math.min(searchBlockIndex, this._blocks.length - 1); ++_bi4) {
            var _block5 = this._blocks[_bi4];
            var _blockInputPos5 = _block5.nearestInputPos(0, DIRECTION.NONE);
            var blockAlignedPos = this._blockStartPos(_bi4) + _blockInputPos5;
            if (blockAlignedPos > cursorPos)
              break;
            if (_blockInputPos5 !== _block5.value.length)
              return blockAlignedPos;
          }
        }
        if (firstFilledInputBlockIndex >= 0) {
          return this._blockStartPos(firstFilledInputBlockIndex) + this._blocks[firstFilledInputBlockIndex].value.length;
        }
        if (direction === DIRECTION.FORCE_LEFT || this.lazy && !this.extractInput() && !isInput(this._blocks[searchBlockIndex])) {
          return 0;
        }
        if (firstEmptyInputBlockIndex != null) {
          return this._blockStartPos(firstEmptyInputBlockIndex);
        }
        for (var _bi5 = searchBlockIndex; _bi5 < this._blocks.length; ++_bi5) {
          var _block6 = this._blocks[_bi5];
          var _blockInputPos6 = _block6.nearestInputPos(0, DIRECTION.NONE);
          if (!_block6.value.length || _blockInputPos6 !== _block6.value.length) {
            return this._blockStartPos(_bi5) + _blockInputPos6;
          }
        }
        return 0;
      }
      if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
        var firstInputBlockAlignedIndex;
        var firstInputBlockAlignedPos;
        for (var _bi6 = searchBlockIndex; _bi6 < this._blocks.length; ++_bi6) {
          var _block7 = this._blocks[_bi6];
          var _blockInputPos7 = _block7.nearestInputPos(0, DIRECTION.NONE);
          if (_blockInputPos7 !== _block7.value.length) {
            firstInputBlockAlignedPos = this._blockStartPos(_bi6) + _blockInputPos7;
            firstInputBlockAlignedIndex = _bi6;
            break;
          }
        }
        if (firstInputBlockAlignedIndex != null && firstInputBlockAlignedPos != null) {
          for (var _bi7 = firstInputBlockAlignedIndex; _bi7 < this._blocks.length; ++_bi7) {
            var _block8 = this._blocks[_bi7];
            var _blockInputPos8 = _block8.nearestInputPos(0, DIRECTION.FORCE_RIGHT);
            if (_blockInputPos8 !== _block8.value.length) {
              return this._blockStartPos(_bi7) + _blockInputPos8;
            }
          }
          return direction === DIRECTION.FORCE_RIGHT ? this.value.length : firstInputBlockAlignedPos;
        }
        for (var _bi8 = Math.min(searchBlockIndex, this._blocks.length - 1); _bi8 >= 0; --_bi8) {
          var _block9 = this._blocks[_bi8];
          var _blockInputPos9 = _block9.nearestInputPos(_block9.value.length, DIRECTION.LEFT);
          if (_blockInputPos9 !== 0) {
            var alignedPos = this._blockStartPos(_bi8) + _blockInputPos9;
            if (alignedPos >= cursorPos)
              return alignedPos;
            break;
          }
        }
      }
      return cursorPos;
    }
  }, {
    key: "maskedBlock",
    value: function maskedBlock(name) {
      return this.maskedBlocks(name)[0];
    }
  }, {
    key: "maskedBlocks",
    value: function maskedBlocks(name) {
      var _this4 = this;
      var indices = this._maskedBlocks[name];
      if (!indices)
        return [];
      return indices.map(function(gi) {
        return _this4._blocks[gi];
      });
    }
  }]);
  return MaskedPattern2;
}(Masked);
MaskedPattern.DEFAULTS = {
  lazy: true,
  placeholderChar: "_"
};
MaskedPattern.STOP_CHAR = "`";
MaskedPattern.ESCAPE_CHAR = "\\";
MaskedPattern.InputDefinition = PatternInputDefinition;
MaskedPattern.FixedDefinition = PatternFixedDefinition;
function isInput(block) {
  if (!block)
    return false;
  var value = block.value;
  return !value || block.nearestInputPos(0, DIRECTION.NONE) !== value.length;
}
IMask.MaskedPattern = MaskedPattern;
var MaskedRange = /* @__PURE__ */ function(_MaskedPattern) {
  _inherits(MaskedRange2, _MaskedPattern);
  var _super = _createSuper(MaskedRange2);
  function MaskedRange2() {
    _classCallCheck(this, MaskedRange2);
    return _super.apply(this, arguments);
  }
  _createClass(MaskedRange2, [{
    key: "_matchFrom",
    get: function get() {
      return this.maxLength - String(this.from).length;
    }
  }, {
    key: "_update",
    value: function _update(opts) {
      opts = Object.assign({
        to: this.to || 0,
        from: this.from || 0
      }, opts);
      var maxLength = String(opts.to).length;
      if (opts.maxLength != null)
        maxLength = Math.max(maxLength, opts.maxLength);
      opts.maxLength = maxLength;
      var fromStr = String(opts.from).padStart(maxLength, "0");
      var toStr = String(opts.to).padStart(maxLength, "0");
      var sameCharsCount = 0;
      while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
        ++sameCharsCount;
      }
      opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, "\\0") + "0".repeat(maxLength - sameCharsCount);
      _get(_getPrototypeOf(MaskedRange2.prototype), "_update", this).call(this, opts);
    }
  }, {
    key: "isComplete",
    get: function get() {
      return _get(_getPrototypeOf(MaskedRange2.prototype), "isComplete", this) && Boolean(this.value);
    }
  }, {
    key: "boundaries",
    value: function boundaries(str) {
      var minstr = "";
      var maxstr = "";
      var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [], _ref2 = _slicedToArray(_ref, 3), placeholder = _ref2[1], num = _ref2[2];
      if (num) {
        minstr = "0".repeat(placeholder.length) + num;
        maxstr = "9".repeat(placeholder.length) + num;
      }
      minstr = minstr.padEnd(this.maxLength, "0");
      maxstr = maxstr.padEnd(this.maxLength, "9");
      return [minstr, maxstr];
    }
  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      str = _get(_getPrototypeOf(MaskedRange2.prototype), "doPrepare", this).call(this, str, flags).replace(/\D/g, "");
      if (!this.autofix)
        return str;
      var fromStr = String(this.from).padStart(this.maxLength, "0");
      var toStr = String(this.to).padStart(this.maxLength, "0");
      var val = this.value;
      var prepStr = "";
      for (var ci = 0; ci < str.length; ++ci) {
        var nextVal = val + prepStr + str[ci];
        var _this$boundaries = this.boundaries(nextVal), _this$boundaries2 = _slicedToArray(_this$boundaries, 2), minstr = _this$boundaries2[0], maxstr = _this$boundaries2[1];
        if (Number(maxstr) < this.from)
          prepStr += fromStr[nextVal.length - 1];
        else if (Number(minstr) > this.to)
          prepStr += toStr[nextVal.length - 1];
        else
          prepStr += str[ci];
      }
      return prepStr;
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;
      var str = this.value;
      var firstNonZero = str.search(/[^0]/);
      if (firstNonZero === -1 && str.length <= this._matchFrom)
        return true;
      var _this$boundaries3 = this.boundaries(str), _this$boundaries4 = _slicedToArray(_this$boundaries3, 2), minstr = _this$boundaries4[0], maxstr = _this$boundaries4[1];
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_getPrototypeOf(MaskedRange2.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);
  return MaskedRange2;
}(MaskedPattern);
IMask.MaskedRange = MaskedRange;
var MaskedDate = /* @__PURE__ */ function(_MaskedPattern) {
  _inherits(MaskedDate2, _MaskedPattern);
  var _super = _createSuper(MaskedDate2);
  function MaskedDate2(opts) {
    _classCallCheck(this, MaskedDate2);
    return _super.call(this, Object.assign({}, MaskedDate2.DEFAULTS, opts));
  }
  _createClass(MaskedDate2, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.mask === Date)
        delete opts.mask;
      if (opts.pattern)
        opts.mask = opts.pattern;
      var blocks = opts.blocks;
      opts.blocks = Object.assign({}, MaskedDate2.GET_DEFAULT_BLOCKS());
      if (opts.min)
        opts.blocks.Y.from = opts.min.getFullYear();
      if (opts.max)
        opts.blocks.Y.to = opts.max.getFullYear();
      if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
        opts.blocks.m.from = opts.min.getMonth() + 1;
        opts.blocks.m.to = opts.max.getMonth() + 1;
        if (opts.blocks.m.from === opts.blocks.m.to) {
          opts.blocks.d.from = opts.min.getDate();
          opts.blocks.d.to = opts.max.getDate();
        }
      }
      Object.assign(opts.blocks, blocks);
      Object.keys(opts.blocks).forEach(function(bk) {
        var b = opts.blocks[bk];
        if (!("autofix" in b))
          b.autofix = opts.autofix;
      });
      _get(_getPrototypeOf(MaskedDate2.prototype), "_update", this).call(this, opts);
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;
      var date = this.date;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return (_get2 = _get(_getPrototypeOf(MaskedDate2.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
    }
  }, {
    key: "isDateExist",
    value: function isDateExist(str) {
      return this.format(this.parse(str, this), this).indexOf(str) >= 0;
    }
  }, {
    key: "date",
    get: function get() {
      return this.typedValue;
    },
    set: function set2(date) {
      this.typedValue = date;
    }
  }, {
    key: "typedValue",
    get: function get() {
      return this.isComplete ? _get(_getPrototypeOf(MaskedDate2.prototype), "typedValue", this) : null;
    },
    set: function set2(value) {
      _set(_getPrototypeOf(MaskedDate2.prototype), "typedValue", value, this, true);
    }
  }]);
  return MaskedDate2;
}(MaskedPattern);
MaskedDate.DEFAULTS = {
  pattern: "d{.}`m{.}`Y",
  format: function format2(date) {
    var day = String(date.getDate()).padStart(2, "0");
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var year = date.getFullYear();
    return [day, month, year].join(".");
  },
  parse: function parse2(str) {
    var _str$split = str.split("."), _str$split2 = _slicedToArray(_str$split, 3), day = _str$split2[0], month = _str$split2[1], year = _str$split2[2];
    return new Date(year, month - 1, day);
  }
};
MaskedDate.GET_DEFAULT_BLOCKS = function() {
  return {
    d: {
      mask: MaskedRange,
      from: 1,
      to: 31,
      maxLength: 2
    },
    m: {
      mask: MaskedRange,
      from: 1,
      to: 12,
      maxLength: 2
    },
    Y: {
      mask: MaskedRange,
      from: 1900,
      to: 9999
    }
  };
};
IMask.MaskedDate = MaskedDate;
var MaskElement = /* @__PURE__ */ function() {
  function MaskElement2() {
    _classCallCheck(this, MaskElement2);
  }
  _createClass(MaskElement2, [{
    key: "selectionStart",
    get: function get() {
      var start;
      try {
        start = this._unsafeSelectionStart;
      } catch (e) {
      }
      return start != null ? start : this.value.length;
    }
  }, {
    key: "selectionEnd",
    get: function get() {
      var end;
      try {
        end = this._unsafeSelectionEnd;
      } catch (e) {
      }
      return end != null ? end : this.value.length;
    }
  }, {
    key: "select",
    value: function select(start, end) {
      if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd)
        return;
      try {
        this._unsafeSelect(start, end);
      } catch (e) {
      }
    }
  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
    }
  }, {
    key: "isActive",
    get: function get() {
      return false;
    }
  }, {
    key: "bindEvents",
    value: function bindEvents(handlers) {
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
    }
  }]);
  return MaskElement2;
}();
IMask.MaskElement = MaskElement;
var HTMLMaskElement = /* @__PURE__ */ function(_MaskElement) {
  _inherits(HTMLMaskElement2, _MaskElement);
  var _super = _createSuper(HTMLMaskElement2);
  function HTMLMaskElement2(input) {
    var _this;
    _classCallCheck(this, HTMLMaskElement2);
    _this = _super.call(this);
    _this.input = input;
    _this._handlers = {};
    return _this;
  }
  _createClass(HTMLMaskElement2, [{
    key: "rootElement",
    get: function get() {
      return this.input.getRootNode ? this.input.getRootNode() : document;
    }
  }, {
    key: "isActive",
    get: function get() {
      return this.input === this.rootElement.activeElement;
    }
  }, {
    key: "_unsafeSelectionStart",
    get: function get() {
      return this.input.selectionStart;
    }
  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      return this.input.selectionEnd;
    }
  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
      this.input.setSelectionRange(start, end);
    }
  }, {
    key: "value",
    get: function get() {
      return this.input.value;
    },
    set: function set2(value) {
      this.input.value = value;
    }
  }, {
    key: "bindEvents",
    value: function bindEvents(handlers) {
      var _this2 = this;
      Object.keys(handlers).forEach(function(event) {
        return _this2._toggleEventHandler(HTMLMaskElement2.EVENTS_MAP[event], handlers[event]);
      });
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      var _this3 = this;
      Object.keys(this._handlers).forEach(function(event) {
        return _this3._toggleEventHandler(event);
      });
    }
  }, {
    key: "_toggleEventHandler",
    value: function _toggleEventHandler(event, handler) {
      if (this._handlers[event]) {
        this.input.removeEventListener(event, this._handlers[event]);
        delete this._handlers[event];
      }
      if (handler) {
        this.input.addEventListener(event, handler);
        this._handlers[event] = handler;
      }
    }
  }]);
  return HTMLMaskElement2;
}(MaskElement);
HTMLMaskElement.EVENTS_MAP = {
  selectionChange: "keydown",
  input: "input",
  drop: "drop",
  click: "click",
  focus: "focus",
  commit: "blur"
};
IMask.HTMLMaskElement = HTMLMaskElement;
var HTMLContenteditableMaskElement = /* @__PURE__ */ function(_HTMLMaskElement) {
  _inherits(HTMLContenteditableMaskElement2, _HTMLMaskElement);
  var _super = _createSuper(HTMLContenteditableMaskElement2);
  function HTMLContenteditableMaskElement2() {
    _classCallCheck(this, HTMLContenteditableMaskElement2);
    return _super.apply(this, arguments);
  }
  _createClass(HTMLContenteditableMaskElement2, [{
    key: "_unsafeSelectionStart",
    get: function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      return selection && selection.anchorOffset;
    }
  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      return selection && this._unsafeSelectionStart + String(selection).length;
    }
  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
      if (!this.rootElement.createRange)
        return;
      var range = this.rootElement.createRange();
      range.setStart(this.input.firstChild || this.input, start);
      range.setEnd(this.input.lastChild || this.input, end);
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }, {
    key: "value",
    get: function get() {
      return this.input.textContent;
    },
    set: function set2(value) {
      this.input.textContent = value;
    }
  }]);
  return HTMLContenteditableMaskElement2;
}(HTMLMaskElement);
IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
var _excluded$1 = ["mask"];
var InputMask = /* @__PURE__ */ function() {
  function InputMask2(el, opts) {
    _classCallCheck(this, InputMask2);
    this.el = el instanceof MaskElement ? el : el.isContentEditable && el.tagName !== "INPUT" && el.tagName !== "TEXTAREA" ? new HTMLContenteditableMaskElement(el) : new HTMLMaskElement(el);
    this.masked = createMask(opts);
    this._listeners = {};
    this._value = "";
    this._unmaskedValue = "";
    this._saveSelection = this._saveSelection.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onDrop = this._onDrop.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onClick = this._onClick.bind(this);
    this.alignCursor = this.alignCursor.bind(this);
    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
    this._bindEvents();
    this.updateValue();
    this._onChange();
  }
  _createClass(InputMask2, [{
    key: "mask",
    get: function get() {
      return this.masked.mask;
    },
    set: function set2(mask) {
      if (this.maskEquals(mask))
        return;
      if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
        this.masked.updateOptions({
          mask
        });
        return;
      }
      var masked = createMask({
        mask
      });
      masked.unmaskedValue = this.masked.unmaskedValue;
      this.masked = masked;
    }
  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      return mask == null || mask === this.masked.mask || mask === Date && this.masked instanceof MaskedDate;
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set2(str) {
      this.masked.value = str;
      this.updateControl();
      this.alignCursor();
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._unmaskedValue;
    },
    set: function set2(str) {
      this.masked.unmaskedValue = str;
      this.updateControl();
      this.alignCursor();
    }
  }, {
    key: "typedValue",
    get: function get() {
      return this.masked.typedValue;
    },
    set: function set2(val) {
      this.masked.typedValue = val;
      this.updateControl();
      this.alignCursor();
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      this.el.bindEvents({
        selectionChange: this._saveSelection,
        input: this._onInput,
        drop: this._onDrop,
        click: this._onClick,
        focus: this._onFocus,
        commit: this._onChange
      });
    }
  }, {
    key: "_unbindEvents",
    value: function _unbindEvents() {
      if (this.el)
        this.el.unbindEvents();
    }
  }, {
    key: "_fireEvent",
    value: function _fireEvent(ev) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var listeners = this._listeners[ev];
      if (!listeners)
        return;
      listeners.forEach(function(l) {
        return l.apply(void 0, args);
      });
    }
  }, {
    key: "selectionStart",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
    }
  }, {
    key: "cursorPos",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
    },
    set: function set2(pos) {
      if (!this.el || !this.el.isActive)
        return;
      this.el.select(pos, pos);
      this._saveSelection();
    }
  }, {
    key: "_saveSelection",
    value: function _saveSelection() {
      if (this.value !== this.el.value) {
        console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.");
      }
      this._selection = {
        start: this.selectionStart,
        end: this.cursorPos
      };
    }
  }, {
    key: "updateValue",
    value: function updateValue() {
      this.masked.value = this.el.value;
      this._value = this.masked.value;
    }
  }, {
    key: "updateControl",
    value: function updateControl() {
      var newUnmaskedValue = this.masked.unmaskedValue;
      var newValue = this.masked.value;
      var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
      this._unmaskedValue = newUnmaskedValue;
      this._value = newValue;
      if (this.el.value !== newValue)
        this.el.value = newValue;
      if (isChanged)
        this._fireChangeEvents();
    }
  }, {
    key: "updateOptions",
    value: function updateOptions(opts) {
      var mask = opts.mask, restOpts = _objectWithoutProperties(opts, _excluded$1);
      var updateMask = !this.maskEquals(mask);
      var updateOpts = !objectIncludes(this.masked, restOpts);
      if (updateMask)
        this.mask = mask;
      if (updateOpts)
        this.masked.updateOptions(restOpts);
      if (updateMask || updateOpts)
        this.updateControl();
    }
  }, {
    key: "updateCursor",
    value: function updateCursor(cursorPos) {
      if (cursorPos == null)
        return;
      this.cursorPos = cursorPos;
      this._delayUpdateCursor(cursorPos);
    }
  }, {
    key: "_delayUpdateCursor",
    value: function _delayUpdateCursor(cursorPos) {
      var _this = this;
      this._abortUpdateCursor();
      this._changingCursorPos = cursorPos;
      this._cursorChanging = setTimeout(function() {
        if (!_this.el)
          return;
        _this.cursorPos = _this._changingCursorPos;
        _this._abortUpdateCursor();
      }, 10);
    }
  }, {
    key: "_fireChangeEvents",
    value: function _fireChangeEvents() {
      this._fireEvent("accept", this._inputEvent);
      if (this.masked.isComplete)
        this._fireEvent("complete", this._inputEvent);
    }
  }, {
    key: "_abortUpdateCursor",
    value: function _abortUpdateCursor() {
      if (this._cursorChanging) {
        clearTimeout(this._cursorChanging);
        delete this._cursorChanging;
      }
    }
  }, {
    key: "alignCursor",
    value: function alignCursor() {
      this.cursorPos = this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT);
    }
  }, {
    key: "alignCursorFriendly",
    value: function alignCursorFriendly() {
      if (this.selectionStart !== this.cursorPos)
        return;
      this.alignCursor();
    }
  }, {
    key: "on",
    value: function on(ev, handler) {
      if (!this._listeners[ev])
        this._listeners[ev] = [];
      this._listeners[ev].push(handler);
      return this;
    }
  }, {
    key: "off",
    value: function off(ev, handler) {
      if (!this._listeners[ev])
        return this;
      if (!handler) {
        delete this._listeners[ev];
        return this;
      }
      var hIndex = this._listeners[ev].indexOf(handler);
      if (hIndex >= 0)
        this._listeners[ev].splice(hIndex, 1);
      return this;
    }
  }, {
    key: "_onInput",
    value: function _onInput(e) {
      this._inputEvent = e;
      this._abortUpdateCursor();
      if (!this._selection)
        return this.updateValue();
      var details = new ActionDetails(this.el.value, this.cursorPos, this.value, this._selection);
      var oldRawValue = this.masked.rawInputValue;
      var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset;
      var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
      var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
      this.updateControl();
      this.updateCursor(cursorPos);
      delete this._inputEvent;
    }
  }, {
    key: "_onChange",
    value: function _onChange() {
      if (this.value !== this.el.value) {
        this.updateValue();
      }
      this.masked.doCommit();
      this.updateControl();
      this._saveSelection();
    }
  }, {
    key: "_onDrop",
    value: function _onDrop(ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
  }, {
    key: "_onFocus",
    value: function _onFocus(ev) {
      this.alignCursorFriendly();
    }
  }, {
    key: "_onClick",
    value: function _onClick(ev) {
      this.alignCursorFriendly();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._unbindEvents();
      this._listeners.length = 0;
      delete this.el;
    }
  }]);
  return InputMask2;
}();
IMask.InputMask = InputMask;
var MaskedEnum = /* @__PURE__ */ function(_MaskedPattern) {
  _inherits(MaskedEnum2, _MaskedPattern);
  var _super = _createSuper(MaskedEnum2);
  function MaskedEnum2() {
    _classCallCheck(this, MaskedEnum2);
    return _super.apply(this, arguments);
  }
  _createClass(MaskedEnum2, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.enum)
        opts.mask = "*".repeat(opts.enum[0].length);
      _get(_getPrototypeOf(MaskedEnum2.prototype), "_update", this).call(this, opts);
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this = this, _get2;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return this.enum.some(function(e) {
        return e.indexOf(_this.unmaskedValue) >= 0;
      }) && (_get2 = _get(_getPrototypeOf(MaskedEnum2.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);
  return MaskedEnum2;
}(MaskedPattern);
IMask.MaskedEnum = MaskedEnum;
var MaskedNumber = /* @__PURE__ */ function(_Masked) {
  _inherits(MaskedNumber2, _Masked);
  var _super = _createSuper(MaskedNumber2);
  function MaskedNumber2(opts) {
    _classCallCheck(this, MaskedNumber2);
    return _super.call(this, Object.assign({}, MaskedNumber2.DEFAULTS, opts));
  }
  _createClass(MaskedNumber2, [{
    key: "_update",
    value: function _update(opts) {
      _get(_getPrototypeOf(MaskedNumber2.prototype), "_update", this).call(this, opts);
      this._updateRegExps();
    }
  }, {
    key: "_updateRegExps",
    value: function _updateRegExps() {
      var start = "^" + (this.allowNegative ? "[+|\\-]?" : "");
      var midInput = "(0|([1-9]+\\d*))?";
      var mid = "\\d*";
      var end = (this.scale ? "(" + escapeRegExp(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
      this._numberRegExpInput = new RegExp(start + midInput + end);
      this._numberRegExp = new RegExp(start + mid + end);
      this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(escapeRegExp).join("") + "]", "g");
      this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), "g");
    }
  }, {
    key: "_removeThousandsSeparators",
    value: function _removeThousandsSeparators(value) {
      return value.replace(this._thousandsSeparatorRegExp, "");
    }
  }, {
    key: "_insertThousandsSeparators",
    value: function _insertThousandsSeparators(value) {
      var parts = value.split(this.radix);
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
      return parts.join(this.radix);
    }
  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var _get2;
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return (_get2 = _get(_getPrototypeOf(MaskedNumber2.prototype), "doPrepare", this)).call.apply(_get2, [this, this._removeThousandsSeparators(str.replace(this._mapToRadixRegExp, this.radix))].concat(args));
    }
  }, {
    key: "_separatorsCount",
    value: function _separatorsCount(to) {
      var extendOnSeparators = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var count = 0;
      for (var pos = 0; pos < to; ++pos) {
        if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
          ++count;
          if (extendOnSeparators)
            to += this.thousandsSeparator.length;
        }
      }
      return count;
    }
  }, {
    key: "_separatorsCountFromSlice",
    value: function _separatorsCountFromSlice() {
      var slice = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this._value;
      return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : void 0;
      var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);
      var _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2);
      fromPos = _this$_adjustRangeWit2[0];
      toPos = _this$_adjustRangeWit2[1];
      return this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber2.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
    }
  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!this.thousandsSeparator)
        return _get(_getPrototypeOf(MaskedNumber2.prototype), "_appendCharRaw", this).call(this, ch, flags);
      var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
      var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
      this._value = this._removeThousandsSeparators(this.value);
      var appendDetails = _get(_getPrototypeOf(MaskedNumber2.prototype), "_appendCharRaw", this).call(this, ch, flags);
      this._value = this._insertThousandsSeparators(this._value);
      var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
      appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
      appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
      return appendDetails;
    }
  }, {
    key: "_findSeparatorAround",
    value: function _findSeparatorAround(pos) {
      if (this.thousandsSeparator) {
        var searchFrom = pos - this.thousandsSeparator.length + 1;
        var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
        if (separatorPos <= pos)
          return separatorPos;
      }
      return -1;
    }
  }, {
    key: "_adjustRangeWithSeparators",
    value: function _adjustRangeWithSeparators(from, to) {
      var separatorAroundFromPos = this._findSeparatorAround(from);
      if (separatorAroundFromPos >= 0)
        from = separatorAroundFromPos;
      var separatorAroundToPos = this._findSeparatorAround(to);
      if (separatorAroundToPos >= 0)
        to = separatorAroundToPos + this.thousandsSeparator.length;
      return [from, to];
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);
      var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);
      fromPos = _this$_adjustRangeWit4[0];
      toPos = _this$_adjustRangeWit4[1];
      var valueBeforePos = this.value.slice(0, fromPos);
      var valueAfterPos = this.value.slice(toPos);
      var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
      this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
      return new ChangeDetails({
        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
      });
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      if (!this.thousandsSeparator)
        return cursorPos;
      switch (direction) {
        case DIRECTION.NONE:
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT: {
          var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
          if (separatorAtLeftPos >= 0) {
            var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
            if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
              return separatorAtLeftPos;
            }
          }
          break;
        }
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT: {
          var separatorAtRightPos = this._findSeparatorAround(cursorPos);
          if (separatorAtRightPos >= 0) {
            return separatorAtRightPos + this.thousandsSeparator.length;
          }
        }
      }
      return cursorPos;
    }
  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp;
      var valid = regexp.test(this._removeThousandsSeparators(this.value));
      if (valid) {
        var number = this.number;
        valid = valid && !isNaN(number) && (this.min == null || this.min >= 0 || this.min <= this.number) && (this.max == null || this.max <= 0 || this.number <= this.max);
      }
      return valid && _get(_getPrototypeOf(MaskedNumber2.prototype), "doValidate", this).call(this, flags);
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.value) {
        var number = this.number;
        var validnum = number;
        if (this.min != null)
          validnum = Math.max(validnum, this.min);
        if (this.max != null)
          validnum = Math.min(validnum, this.max);
        if (validnum !== number)
          this.unmaskedValue = String(validnum);
        var formatted = this.value;
        if (this.normalizeZeros)
          formatted = this._normalizeZeros(formatted);
        if (this.padFractionalZeros)
          formatted = this._padFractionalZeros(formatted);
        this._value = formatted;
      }
      _get(_getPrototypeOf(MaskedNumber2.prototype), "doCommit", this).call(this);
    }
  }, {
    key: "_normalizeZeros",
    value: function _normalizeZeros(value) {
      var parts = this._removeThousandsSeparators(value).split(this.radix);
      parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function(match, sign, zeros, num) {
        return sign + num;
      });
      if (value.length && !/\d$/.test(parts[0]))
        parts[0] = parts[0] + "0";
      if (parts.length > 1) {
        parts[1] = parts[1].replace(/0*$/, "");
        if (!parts[1].length)
          parts.length = 1;
      }
      return this._insertThousandsSeparators(parts.join(this.radix));
    }
  }, {
    key: "_padFractionalZeros",
    value: function _padFractionalZeros(value) {
      if (!value)
        return value;
      var parts = value.split(this.radix);
      if (parts.length < 2)
        parts.push("");
      parts[1] = parts[1].padEnd(this.scale, "0");
      return parts.join(this.radix);
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, ".");
    },
    set: function set2(unmaskedValue) {
      _set(_getPrototypeOf(MaskedNumber2.prototype), "unmaskedValue", unmaskedValue.replace(".", this.radix), this, true);
    }
  }, {
    key: "typedValue",
    get: function get() {
      return Number(this.unmaskedValue);
    },
    set: function set2(n) {
      _set(_getPrototypeOf(MaskedNumber2.prototype), "unmaskedValue", String(n), this, true);
    }
  }, {
    key: "number",
    get: function get() {
      return this.typedValue;
    },
    set: function set2(number) {
      this.typedValue = number;
    }
  }, {
    key: "allowNegative",
    get: function get() {
      return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
    }
  }]);
  return MaskedNumber2;
}(Masked);
MaskedNumber.DEFAULTS = {
  radix: ",",
  thousandsSeparator: "",
  mapToRadix: ["."],
  scale: 2,
  signed: false,
  normalizeZeros: true,
  padFractionalZeros: false
};
IMask.MaskedNumber = MaskedNumber;
var MaskedFunction = /* @__PURE__ */ function(_Masked) {
  _inherits(MaskedFunction2, _Masked);
  var _super = _createSuper(MaskedFunction2);
  function MaskedFunction2() {
    _classCallCheck(this, MaskedFunction2);
    return _super.apply(this, arguments);
  }
  _createClass(MaskedFunction2, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.mask)
        opts.validate = opts.mask;
      _get(_getPrototypeOf(MaskedFunction2.prototype), "_update", this).call(this, opts);
    }
  }]);
  return MaskedFunction2;
}(Masked);
IMask.MaskedFunction = MaskedFunction;
var _excluded = ["compiledMasks", "currentMaskRef", "currentMask"];
var MaskedDynamic = /* @__PURE__ */ function(_Masked) {
  _inherits(MaskedDynamic2, _Masked);
  var _super = _createSuper(MaskedDynamic2);
  function MaskedDynamic2(opts) {
    var _this;
    _classCallCheck(this, MaskedDynamic2);
    _this = _super.call(this, Object.assign({}, MaskedDynamic2.DEFAULTS, opts));
    _this.currentMask = null;
    return _this;
  }
  _createClass(MaskedDynamic2, [{
    key: "_update",
    value: function _update(opts) {
      _get(_getPrototypeOf(MaskedDynamic2.prototype), "_update", this).call(this, opts);
      if ("mask" in opts) {
        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function(m) {
          return createMask(m);
        }) : [];
      }
    }
  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var details = this._applyDispatch(ch, flags);
      if (this.currentMask) {
        details.aggregate(this.currentMask._appendChar(ch, flags));
      }
      return details;
    }
  }, {
    key: "_applyDispatch",
    value: function _applyDispatch() {
      var appended = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
      var inputValue = this.rawInputValue;
      var insertValue = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._rawInputValue : inputValue;
      var tailValue = inputValue.slice(insertValue.length);
      var prevMask = this.currentMask;
      var details = new ChangeDetails();
      var prevMaskState = prevMask && prevMask.state;
      this.currentMask = this.doDispatch(appended, Object.assign({}, flags));
      if (this.currentMask) {
        if (this.currentMask !== prevMask) {
          this.currentMask.reset();
          if (insertValue) {
            var d = this.currentMask.append(insertValue, {
              raw: true
            });
            details.tailShift = d.inserted.length - prevValueBeforeTail.length;
          }
          if (tailValue) {
            details.tailShift += this.currentMask.append(tailValue, {
              raw: true,
              tail: true
            }).tailShift;
          }
        } else {
          this.currentMask.state = prevMaskState;
        }
      }
      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = this._applyDispatch.apply(this, arguments);
      if (this.currentMask) {
        details.aggregate(this.currentMask._appendPlaceholder());
      }
      return details;
    }
  }, {
    key: "doDispatch",
    value: function doDispatch(appended) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.dispatch(appended, this, flags);
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2, _this$currentMask;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return (_get2 = _get(_getPrototypeOf(MaskedDynamic2.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask = this.currentMask).doValidate.apply(_this$currentMask, args));
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.currentMask)
        this.currentMask.reset();
      this.compiledMasks.forEach(function(m) {
        return m.reset();
      });
    }
  }, {
    key: "value",
    get: function get() {
      return this.currentMask ? this.currentMask.value : "";
    },
    set: function set2(value) {
      _set(_getPrototypeOf(MaskedDynamic2.prototype), "value", value, this, true);
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.unmaskedValue : "";
    },
    set: function set2(unmaskedValue) {
      _set(_getPrototypeOf(MaskedDynamic2.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
  }, {
    key: "typedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.typedValue : "";
    },
    set: function set2(value) {
      var unmaskedValue = String(value);
      if (this.currentMask) {
        this.currentMask.typedValue = value;
        unmaskedValue = this.currentMask.unmaskedValue;
      }
      this.unmaskedValue = unmaskedValue;
    }
  }, {
    key: "isComplete",
    get: function get() {
      return !!this.currentMask && this.currentMask.isComplete;
    }
  }, {
    key: "remove",
    value: function remove() {
      var details = new ChangeDetails();
      if (this.currentMask) {
        var _this$currentMask2;
        details.aggregate((_this$currentMask2 = this.currentMask).remove.apply(_this$currentMask2, arguments)).aggregate(this._applyDispatch());
      }
      return details;
    }
  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, _get(_getPrototypeOf(MaskedDynamic2.prototype), "state", this), {
        _rawInputValue: this.rawInputValue,
        compiledMasks: this.compiledMasks.map(function(m) {
          return m.state;
        }),
        currentMaskRef: this.currentMask,
        currentMask: this.currentMask && this.currentMask.state
      });
    },
    set: function set2(state) {
      var compiledMasks = state.compiledMasks, currentMaskRef = state.currentMaskRef, currentMask = state.currentMask, maskedState = _objectWithoutProperties(state, _excluded);
      this.compiledMasks.forEach(function(m, mi) {
        return m.state = compiledMasks[mi];
      });
      if (currentMaskRef != null) {
        this.currentMask = currentMaskRef;
        this.currentMask.state = currentMask;
      }
      _set(_getPrototypeOf(MaskedDynamic2.prototype), "state", maskedState, this, true);
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var _this$currentMask3;
      return this.currentMask ? (_this$currentMask3 = this.currentMask).extractInput.apply(_this$currentMask3, arguments) : "";
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$currentMask4, _get3;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return this.currentMask ? (_this$currentMask4 = this.currentMask).extractTail.apply(_this$currentMask4, args) : (_get3 = _get(_getPrototypeOf(MaskedDynamic2.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.currentMask)
        this.currentMask.doCommit();
      _get(_getPrototypeOf(MaskedDynamic2.prototype), "doCommit", this).call(this);
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos() {
      var _this$currentMask5, _get4;
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return this.currentMask ? (_this$currentMask5 = this.currentMask).nearestInputPos.apply(_this$currentMask5, args) : (_get4 = _get(_getPrototypeOf(MaskedDynamic2.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
    }
  }, {
    key: "overwrite",
    get: function get() {
      return this.currentMask ? this.currentMask.overwrite : _get(_getPrototypeOf(MaskedDynamic2.prototype), "overwrite", this);
    },
    set: function set2(overwrite) {
      console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
    }
  }]);
  return MaskedDynamic2;
}(Masked);
MaskedDynamic.DEFAULTS = {
  dispatch: function dispatch(appended, masked, flags) {
    if (!masked.compiledMasks.length)
      return;
    var inputValue = masked.rawInputValue;
    var inputs = masked.compiledMasks.map(function(m, index) {
      m.reset();
      m.append(inputValue, {
        raw: true
      });
      m.append(appended, flags);
      var weight = m.rawInputValue.length;
      return {
        weight,
        index
      };
    });
    inputs.sort(function(i1, i2) {
      return i2.weight - i1.weight;
    });
    return masked.compiledMasks[inputs[0].index];
  }
};
IMask.MaskedDynamic = MaskedDynamic;
var PIPE_TYPE = {
  MASKED: "value",
  UNMASKED: "unmaskedValue",
  TYPED: "typedValue"
};
function createPipe(mask) {
  var from = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : PIPE_TYPE.MASKED;
  var to = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : PIPE_TYPE.MASKED;
  var masked = createMask(mask);
  return function(value) {
    return masked.runIsolated(function(m) {
      m[from] = value;
      return m[to];
    });
  };
}
function pipe(value) {
  for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    pipeArgs[_key - 1] = arguments[_key];
  }
  return createPipe.apply(void 0, pipeArgs)(value);
}
IMask.PIPE_TYPE = PIPE_TYPE;
IMask.createPipe = createPipe;
IMask.pipe = pipe;
try {
  globalThis.IMask = IMask;
} catch (e) {
}
const _sfc_main$4 = defineComponent({
  props: {
    modelValue: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      required: true
    }
  },
  emits: ["update:modelValue", "complete", "accept"],
  setup(props, { emit }) {
    const inputElement = ref();
    let inputMask;
    watch([inputElement, () => props.options, () => props.modelValue], () => {
      var _a;
      if (inputElement.value && props.options) {
        try {
          if (inputMask) {
            inputMask.updateOptions(props.options);
            inputMask.unmaskedValue = props.modelValue;
            return;
          }
          inputMask = IMask(inputElement.value, (_a = props.options) != null ? _a : {});
          if (props.modelValue) {
            inputMask.unmaskedValue = props.modelValue;
            inputMask.updateValue();
            emit("accept", inputMask, void 0);
          }
          inputMask.on("accept", (inputEvent) => {
            if (!inputMask)
              return;
            emit("update:modelValue", (inputMask == null ? void 0 : inputMask.value) || "");
            emit("accept", inputMask, inputEvent);
          });
          inputMask.on("complete", (inputEvent) => {
            if (!inputMask)
              return;
            emit("complete", inputMask, inputEvent);
          });
        } catch (error) {
          console.error("VIMaskInput: bad imask options, see https://imask.js.org/ for available parameters");
          console.error(error);
        }
      }
    });
    onUnmounted(() => {
      if (inputMask) {
        inputMask.destroy();
        inputMask = void 0;
      }
    });
    return () => h("input", { ref: inputElement, type: "text", value: props.modelValue });
  }
});
function block0(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "de": {
        "holder-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Karteninhabername"]);
        },
        "number-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Kartennummer"]);
        },
        "expiration-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ablauf"]);
        },
        "cvc-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Sicherheitscode"]);
        },
        "valid-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["G\xDCLTIG"]);
        },
        "valid-thru-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["BIS"]);
        }
      },
      "en": {
        "holder-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["cardholder name"]);
        },
        "number-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["card number"]);
        },
        "expiration-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["expiration"]);
        },
        "cvc-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["security code"]);
        },
        "valid-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["VALID"]);
        },
        "valid-thru-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["THRU"]);
        }
      },
      "es-MX": {
        "holder-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["nombre del titular"]);
        },
        "number-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["n\xFAmero de tarjeta"]);
        },
        "expiration-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["caducidad"]);
        },
        "cvc-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["c\xF3digo de seguridad"]);
        },
        "valid-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["V\xC1LIDO"]);
        },
        "valid-thru-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["HASTA"]);
        }
      },
      "es": {
        "holder-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["nombre del titular"]);
        },
        "number-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["n\xFAmero de tarjeta"]);
        },
        "expiration-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["caducidad"]);
        },
        "cvc-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["c\xF3digo de seguridad"]);
        },
        "valid-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["V\xC1LIDO"]);
        },
        "valid-thru-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["HASTA"]);
        }
      },
      "fr": {
        "holder-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["titulaire de la carte"]);
        },
        "number-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["num\xE9ro de carte"]);
        },
        "expiration-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["expiration"]);
        },
        "cvc-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["code de s\xE9curit\xE9"]);
        },
        "valid-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["VALABLE"]);
        },
        "valid-thru-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["JUSQU'\xC0"]);
        }
      },
      "zh-CN": {
        "holder-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u6301\u5361\u4EBA\u59D3\u540D"]);
        },
        "number-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u5361\u53F7"]);
        },
        "expiration-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u5230\u671F"]);
        },
        "cvc-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u5B89\u5168\u4EE3\u7801"]);
        },
        "valid-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u6709\u6548"]);
        },
        "valid-thru-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u7A81\u7834"]);
        }
      }
    }
  });
}
const _hoisted_1$3 = { class: "card-container" };
const _hoisted_2$3 = { class: "front" };
const _hoisted_3$1 = {
  id: "cardfront",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 750 471",
  style: { "enable-background": "new 0 0 750 471" },
  "xml:space": "preserve"
};
const _hoisted_4$1 = { id: "Front2" };
const _hoisted_5$1 = { id: "CardBackground" };
const _hoisted_6$1 = { id: "Page-1_1_" };
const _hoisted_7$1 = { id: "amex_1_" };
const _hoisted_8$1 = {
  id: "svgnumber",
  transform: "matrix(1 0 0 1 60.106 295.0121)",
  class: "st2 st3 st4"
};
const _hoisted_9$1 = {
  id: "svgname",
  transform: "matrix(1 0 0 1 54.1064 428.1723)",
  class: "st2 st5 st6"
};
const _hoisted_10$1 = {
  transform: "matrix(1 0 0 1 54.1074 389.8793)",
  class: "st7 st5 st8"
};
const _hoisted_11$1 = {
  transform: "matrix(1 0 0 1 479.7754 388.8793)",
  class: "st7 st5 st8"
};
const _hoisted_12$1 = {
  transform: "matrix(1 0 0 1 65.1054 241.5)",
  class: "st7 st5 st8"
};
const _hoisted_13$1 = {
  id: "svgexpire",
  transform: "matrix(1 0 0 1 574.4219 433.8095)",
  class: "st2 st5 st9"
};
const _hoisted_14$1 = {
  transform: "matrix(1 0 0 1 479.3848 417.0097)",
  class: "st2 st10 st11"
};
const _hoisted_15$1 = {
  transform: "matrix(1 0 0 1 479.3848 435.6762)",
  class: "st2 st10 st11"
};
const _hoisted_16$1 = /* @__PURE__ */ createBaseVNode("polygon", {
  class: "st2",
  points: "554.5,421 540.4,414.2 540.4,427.9 		"
}, null, -1);
const _hoisted_17$1 = /* @__PURE__ */ createStaticVNode('<g id="cchip"><g><path class="st2" d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3\n                    c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z"></path></g><g><g><rect x="82" y="70" class="st12" width="1.5" height="60"></rect></g><g><rect x="167.4" y="70" class="st12" width="1.5" height="60"></rect></g><g><path class="st12" d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3\n                        c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3\n                        C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5\n                        c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5\n                        c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z"></path></g><g><rect x="82.8" y="82.1" class="st12" width="25.8" height="1.5"></rect></g><g><rect x="82.8" y="117.9" class="st12" width="26.1" height="1.5"></rect></g><g><rect x="142.4" y="82.1" class="st12" width="25.8" height="1.5"></rect></g><g><rect x="142" y="117.9" class="st12" width="26.2" height="1.5"></rect></g></g></g>', 1);
const _hoisted_18$1 = /* @__PURE__ */ createBaseVNode("g", { id: "Back" }, null, -1);
const _hoisted_19$1 = { class: "back" };
const _hoisted_20$1 = {
  id: "cardback",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 750 471",
  style: { "enable-background": "new 0 0 750 471" },
  "xml:space": "preserve"
};
const _hoisted_21$1 = /* @__PURE__ */ createBaseVNode("g", { id: "Front" }, [
  /* @__PURE__ */ createBaseVNode("line", {
    class: "st0",
    x1: "35.3",
    y1: "10.4",
    x2: "36.7",
    y2: "11"
  })
], -1);
const _hoisted_22$1 = { id: "Back2" };
const _hoisted_23$1 = { id: "Page-1_2_" };
const _hoisted_24$1 = { id: "amex_2_" };
const _hoisted_25$1 = /* @__PURE__ */ createStaticVNode('<rect y="61.6" class="st2" width="750" height="78"></rect><g><path class="st3" d="M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,0,6,2.7,6,6v52.5\n                C707.1,246.4,704.4,249.1,701.1,249.1z"></path><rect x="42.9" y="198.6" class="st4" width="664.1" height="10.5"></rect><rect x="42.9" y="224.5" class="st4" width="664.1" height="10.5"></rect><path class="st5" d="M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z"></path></g>', 2);
const _hoisted_27$1 = {
  id: "svgsecurity",
  transform: "matrix(1 0 0 1 621.999 227.2734)",
  class: "st6 st7"
};
const _hoisted_28$1 = { class: "st8" };
const _hoisted_29$1 = {
  transform: "matrix(1 0 0 1 518.083 280.0879)",
  class: "st9 st6 st10"
};
const _hoisted_30$1 = /* @__PURE__ */ createBaseVNode("rect", {
  x: "58.1",
  y: "378.6",
  class: "st11",
  width: "375.5",
  height: "13.5"
}, null, -1);
const _hoisted_31$1 = /* @__PURE__ */ createBaseVNode("rect", {
  x: "58.1",
  y: "405.6",
  class: "st11",
  width: "421.7",
  height: "13.5"
}, null, -1);
const _hoisted_32$1 = {
  id: "svgnameback",
  transform: "matrix(1 0 0 1 59.5073 228.6099)",
  class: "st12 st13"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    number: { default: "1234 1234 1234 1234" },
    name: { default: "John Doe" },
    expiry: { default: "01/30" },
    cvc: { default: "123" },
    color: { default: "grey" },
    flipped: { type: Boolean }
  },
  emits: ["flip"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n();
    const nameUppercase = computed(() => {
      var _a, _b;
      return (_b = (_a = props.name) == null ? void 0 : _a.toUpperCase()) != null ? _b : "";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", {
          class: normalizeClass([[props.flipped && "flipped"], "creditcard"]),
          tabindex: "0",
          onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => emit("flip"), ["prevent"]), ["space"])),
          onClick: _cache[1] || (_cache[1] = ($event) => emit("flip"))
        }, [
          createBaseVNode("div", _hoisted_2$3, [
            renderSlot(_ctx.$slots, "default"),
            (openBlock(), createElementBlock("svg", _hoisted_3$1, [
              createBaseVNode("g", _hoisted_4$1, [
                createBaseVNode("g", _hoisted_5$1, [
                  createBaseVNode("g", _hoisted_6$1, [
                    createBaseVNode("g", _hoisted_7$1, [
                      createBaseVNode("path", {
                        id: "Rectangle-1_1_",
                        class: normalizeClass(["lightcolor", props.color]),
                        d: "M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40\n                        C0,17.9,17.9,0,40,0z"
                      }, null, 2)
                    ])
                  ]),
                  createBaseVNode("path", {
                    class: normalizeClass(["darkcolor", `${props.color}dark`]),
                    d: "M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z"
                  }, null, 2)
                ]),
                createBaseVNode("text", _hoisted_8$1, toDisplayString(props.number), 1),
                createBaseVNode("text", _hoisted_9$1, toDisplayString(unref(nameUppercase)), 1),
                createBaseVNode("text", _hoisted_10$1, toDisplayString(unref(t)("holder-label")), 1),
                createBaseVNode("text", _hoisted_11$1, toDisplayString(unref(t)("expiration-label")), 1),
                createBaseVNode("text", _hoisted_12$1, toDisplayString(unref(t)("number-label")), 1),
                createBaseVNode("g", null, [
                  createBaseVNode("text", _hoisted_13$1, toDisplayString(props.expiry), 1),
                  createBaseVNode("text", _hoisted_14$1, toDisplayString(unref(t)("valid-label")), 1),
                  createBaseVNode("text", _hoisted_15$1, toDisplayString(unref(t)("valid-thru-label")), 1),
                  _hoisted_16$1
                ]),
                _hoisted_17$1
              ]),
              _hoisted_18$1
            ]))
          ]),
          createBaseVNode("div", _hoisted_19$1, [
            (openBlock(), createElementBlock("svg", _hoisted_20$1, [
              _hoisted_21$1,
              createBaseVNode("g", _hoisted_22$1, [
                createBaseVNode("g", _hoisted_23$1, [
                  createBaseVNode("g", _hoisted_24$1, [
                    createBaseVNode("path", {
                      id: "Rectangle-1_2_",
                      class: normalizeClass(["darkcolor", `${props.color}dark`]),
                      d: "M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40\n                    C0,17.9,17.9,0,40,0z"
                    }, null, 2)
                  ])
                ]),
                _hoisted_25$1,
                createBaseVNode("text", _hoisted_27$1, toDisplayString(props.cvc), 1),
                createBaseVNode("g", _hoisted_28$1, [
                  createBaseVNode("text", _hoisted_29$1, toDisplayString(unref(t)("cvc-label")), 1)
                ]),
                _hoisted_30$1,
                _hoisted_31$1,
                createBaseVNode("text", _hoisted_32$1, toDisplayString(props.name), 1)
              ])
            ]))
          ])
        ], 34)
      ]);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main$3);
var VRadio_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = ["checked", "value", "name"];
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    value: null,
    modelValue: { default: void 0 },
    name: null,
    label: { default: void 0 },
    color: { default: void 0 },
    square: { type: Boolean },
    solid: { type: Boolean },
    paddingless: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const checked = computed(() => props.value === props.modelValue);
    function change() {
      emit("update:modelValue", props.value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass(["radio", [
          props.solid ? "is-solid" : "is-outlined",
          props.square && "is-square",
          props.color && `is-${props.color}`,
          props.paddingless && "is-paddingless"
        ]])
      }, [
        createBaseVNode("input", mergeProps({
          type: "radio",
          checked: unref(checked),
          value: props.value,
          name: props.name
        }, _ctx.$attrs, { onChange: change }), null, 16, _hoisted_1$2),
        _hoisted_2$2,
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(props.label), 1)
        ])
      ], 2);
    };
  }
});
const plans = [
  {
    id: "starter",
    name: "Vuero Starter",
    slogan: "Plan for starters",
    intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utilitatis causa amicitia est quaesita.",
    summary: "Vuero has incredible features and each plan perfectly adapts to your company, wether it is a small business or a bigger one. Vuero can also scale with you, as your business grows.",
    icon: "/images/logos/logo/logo.svg",
    logo: {
      light: "/images/logos/pricing/vuero-starter.svg",
      dark: "/images/logos/pricing/vuero-starter-dark.svg"
    },
    costs: {
      monthly: "$45",
      yearly: "$530"
    },
    limits: {
      seats: "3",
      projects: "20",
      storage: "20GB",
      addons: "1"
    }
  },
  {
    id: "pro",
    name: "Vuero Pro",
    slogan: "For professionals",
    intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utilitatis causa amicitia est quaesita.",
    summary: "Vuero has incredible features and each plan perfectly adapts to your company, wether it is a small business or a bigger one. Vuero can also scale with you, as your business grows.",
    icon: "/images/logos/logo/logo-secondary.svg",
    logo: {
      light: "/images/logos/pricing/vuero-pro.svg",
      dark: "/images/logos/pricing/vuero-pro-dark.svg"
    },
    costs: {
      monthly: "$99",
      yearly: "$1080"
    },
    limits: {
      seats: "8",
      projects: "150",
      storage: "100GB",
      addons: "3"
    }
  },
  {
    id: "business",
    name: "Vuero Business",
    slogan: "For serious people",
    intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utilitatis causa amicitia est quaesita.",
    summary: "Vuero has incredible features and each plan perfectly adapts to your company, wether it is a small business or a bigger one. Vuero can also scale with you, as your business grows.",
    icon: "/images/logos/logo/logo-accent.svg",
    logo: {
      light: "/images/logos/pricing/vuero-business.svg",
      dark: "/images/logos/pricing/vuero-business-dark.svg"
    },
    costs: {
      monthly: "$149",
      yearly: "$1590"
    },
    limits: {
      seats: "20",
      projects: "Unlimited",
      storage: "500GB",
      addons: "5"
    }
  },
  {
    id: "enterprise",
    name: "Vuero Enterprise",
    slogan: "For big companies",
    intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utilitatis causa amicitia est quaesita.",
    summary: "Vuero has incredible features and each plan perfectly adapts to your company, wether it is a small business or a bigger one. Vuero can also scale with you, as your business grows.",
    icon: "/images/logos/logo/logo-platinum.svg",
    logo: {
      light: "/images/logos/pricing/vuero-enterprise.svg",
      dark: "/images/logos/pricing/vuero-enterprise-dark.svg"
    },
    costs: {
      monthly: "$199",
      yearly: "$2230"
    },
    limits: {
      seats: "40",
      projects: "Unlimited",
      storage: "Unlimited",
      addons: "Unlimited"
    }
  }
];
function useCreditcardMask() {
  const creditcardIcon = ref("");
  const creditcardLogo = ref("");
  const creditcardColor = ref("grey");
  const creditcardMaskDate = {
    mask: Date,
    pattern: "MM{/}`YY",
    min: new Date(2021, 0, 1),
    max: new Date(2099, 0, 1),
    blocks: {
      YY: {
        mask: MaskedRange,
        from: 21,
        to: 99,
        maxLength: 2
      },
      MM: {
        mask: MaskedRange,
        from: 1,
        to: 12,
        maxLength: 2
      }
    },
    format: (date) => {
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return [month < 10 ? `0${month}` : month, year.toString().substr(2, 2)].join("/");
    },
    parse: (value) => {
      const monthYear = value.split("/");
      if (monthYear.length === 2) {
        return new Date(parseInt(monthYear[1]) + 2e3, parseInt(monthYear[0]) - 1, 1);
      }
      return new Date();
    }
  };
  const creditcardMaskCVC = {
    mask: "000"
  };
  const creditcardMaskNumber = {
    mask: [
      {
        mask: "0000 000000 00000",
        regex: "^3[47]\\d{0,13}",
        card: {
          id: "amex",
          name: "American Express",
          color: "green",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 471"><defs/><g fill="none" fill-rule="nonzero"><rect width="750" height="471" fill="#2557D6" rx="40"/><path fill="#FFF" d="M.003 221.185h36.024l8.123-19.51h18.185l8.101 19.51h70.88V206.27l6.327 14.98h36.796l6.327-15.202v15.138h176.151l-.082-32.026h3.408c2.386.083 3.083.302 3.083 4.226v27.8h91.106v-7.455c7.349 3.92 18.779 7.455 33.819 7.455h38.328l8.203-19.51h18.185l8.021 19.51h73.86v-18.532l11.186 18.532h59.187V98.678h-58.576v14.468l-8.202-14.468h-60.105v14.468l-7.532-14.468h-81.188c-13.59 0-25.536 1.889-35.186 7.153v-7.153h-56.026v7.153c-6.14-5.426-14.508-7.153-23.812-7.153H179.908l-13.734 31.641-14.104-31.641H87.6v14.468l-7.083-14.468H25.534L0 156.924v64.261h.003zm227.397-17.67h-21.615l-.08-68.794-30.573 68.793H156.62l-30.652-68.854v68.854H83.084l-8.101-19.592h-43.9L22.9 203.514H0l37.756-87.837h31.326l35.859 83.164v-83.164h34.412l27.593 59.587 25.347-59.587h35.104v87.837h.003zM67.777 165.692l-14.43-35.017-14.35 35.017h28.78zm245.642 37.821h-70.433v-87.837h70.433v18.291h-49.348v15.833h48.165v18.005H264.07v17.542h49.348v18.166zm99.256-64.18c0 14.004-9.386 21.24-14.856 23.412 4.613 1.748 8.553 4.838 10.43 7.397 2.976 4.369 3.49 8.271 3.49 16.116v17.255h-21.266l-.08-11.077c0-5.285.508-12.886-3.328-17.112-3.081-3.09-7.777-3.76-15.368-3.76h-22.633v31.95H327.98v-87.838h48.495c10.775 0 18.714.283 25.53 4.207 6.67 3.924 10.67 9.652 10.67 19.45zm-26.652 13.042c-2.898 1.752-6.324 1.81-10.43 1.81H349.98v-19.51h25.962c3.674 0 7.508.164 9.998 1.584 2.735 1.28 4.427 4.003 4.427 7.765 0 3.84-1.61 6.929-4.344 8.351zm60.466 51.138h-21.513v-87.837h21.513v87.837zm249.74 0H666.35l-39.964-65.927v65.927h-42.94l-8.204-19.592h-43.799l-7.96 19.592H498.81c-10.248 0-23.224-2.257-30.572-9.715-7.41-7.458-11.265-17.56-11.265-33.533 0-13.027 2.304-24.936 11.366-34.347 6.816-7.01 17.49-10.242 32.02-10.242h20.412v18.821h-19.984c-7.694 0-12.039 1.14-16.224 5.203-3.594 3.699-6.06 10.69-6.06 19.897 0 9.41 1.878 16.196 5.797 20.628 3.245 3.476 9.144 4.53 14.694 4.53h9.469l29.716-69.076h31.592l35.696 83.081V115.68h32.103l37.062 61.174V115.68h21.596v87.834zM568.07 165.693l-14.591-35.017-14.51 35.017h29.1zM749.956 343.767c-5.121 7.458-15.101 11.239-28.611 11.239h-40.718v-18.84h40.553c4.022 0 6.837-.527 8.532-2.175a7.71 7.71 0 002.493-5.73c0-2.56-1.024-4.592-2.575-5.81-1.53-1.341-3.757-1.95-7.429-1.95-19.797-.67-44.495.609-44.495-27.194 0-12.743 8.125-26.157 30.25-26.157h41.998l.002-17.48h-39.022c-11.776 0-20.33 2.808-26.388 7.174v-7.175H626.83c-9.23 0-20.063 2.279-25.187 7.175v-7.175H498.578v7.175c-8.203-5.892-22.043-7.175-28.431-7.175h-67.983v7.175c-6.49-6.258-20.92-7.175-29.716-7.175h-76.085l-17.41 18.763-16.307-18.763H148.99v122.592h111.516l17.94-19.06 16.9 19.06 68.739.061v-28.838h6.757c9.12.14 19.878-.226 29.368-4.31v33.085h56.697v-31.952h2.735c3.49 0 3.834.143 3.834 3.616v28.333H635.71c10.935 0 22.365-2.787 28.695-7.845v7.845h54.632c11.369 0 22.471-1.587 30.918-5.651v-22.838zm-341.503-47.154c0 24.406-18.286 29.445-36.716 29.445H345.43v29.469h-40.98l-25.962-29.085-26.981 29.085H167.99v-87.859h84.8l25.941 28.799 26.819-28.799h67.371c16.732 0 35.532 4.613 35.532 28.945zm-167.625 40.434h-51.839v-17.481h46.289V301.64h-46.289v-15.973h52.86l23.062 25.604-24.083 25.776zm83.526 10.06l-32.37-35.788 32.37-34.651v70.439zm47.873-39.066H344.98v-22.374h27.492c7.612 0 12.896 3.09 12.896 10.773 0 7.598-5.04 11.601-13.14 11.601zm142.744-40.373h70.369v18.17h-49.372v15.973h48.167v17.925h-48.167v17.481l49.372.08v18.23h-70.37v-87.859zm-27.054 47.03c4.693 1.724 8.53 4.816 10.329 7.375 2.977 4.29 3.408 8.293 3.493 16.037v17.417H480.57v-10.992c0-5.286.511-13.112-3.408-17.198-3.08-3.147-7.777-3.9-15.468-3.9h-22.533v32.09h-21.186v-87.859h48.678c10.674 0 18.448.47 25.369 4.146 6.654 4.004 10.839 9.488 10.839 19.51-.003 14.024-9.395 21.18-14.945 23.373zM476 303.59c-2.82 1.667-6.308 1.81-10.41 1.81h-25.614v-19.733h25.962c3.754 0 7.51.08 10.062 1.587 2.732 1.423 4.366 4.144 4.366 7.903 0 3.76-1.634 6.788-4.366 8.433zm190.336 5.597c4.106 4.23 6.306 9.572 6.306 18.614 0 18.9-11.858 27.723-33.122 27.723h-41.065v-18.84h40.9c4 0 6.836-.527 8.613-2.175 1.45-1.359 2.49-3.333 2.49-5.73 0-2.56-1.125-4.592-2.573-5.81-1.612-1.34-3.836-1.95-7.508-1.95-19.717-.67-44.41.61-44.41-27.193 0-12.744 8.04-26.158 30.144-26.158h42.269v18.7h-38.677c-3.834 0-6.327.143-8.447 1.587-2.31 1.422-3.166 3.534-3.166 6.32 0 3.315 1.96 5.57 4.613 6.545 2.224.77 4.613.996 8.205.996l11.35.305c11.446.278 19.303 2.249 24.078 7.066zM750 285.667h-38.427c-3.836 0-6.385.143-8.532 1.587-2.224 1.423-3.081 3.534-3.081 6.322 0 3.314 1.878 5.569 4.61 6.544 2.225.77 4.614.996 8.126.996l11.427.304c11.531.284 19.228 2.258 23.921 7.072.855.67 1.368 1.422 1.956 2.175v-25z"/></g></svg>`,
          logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 471"><defs/><path fill="#2557D6" d="M554.594 130.608l-14.521 35.039h29.121l-14.6-35.039zM387.03 152.321c2.738-1.422 4.349-4.515 4.349-8.356 0-3.764-1.693-6.49-4.431-7.771-2.492-1.42-6.328-1.584-10.006-1.584h-25.978v19.523h25.63c4.106.001 7.537-.059 10.436-1.812zM54.142 130.608l-14.357 35.039h28.8l-14.443-35.039zM722.565 355.08h-40.742v-18.852h40.578c4.023 0 6.84-.525 8.537-2.177a7.706 7.706 0 002.494-5.733c0-2.562-1.023-4.596-2.578-5.813-1.529-1.342-3.76-1.953-7.434-1.953-19.81-.67-44.523.609-44.523-27.211 0-12.75 8.131-26.172 30.27-26.172h42.025v-17.492h-39.045c-11.783 0-20.344 2.81-26.406 7.181v-7.181h-57.752c-9.233 0-20.074 2.279-25.201 7.181v-7.181H499.655v7.181c-8.207-5.898-22.057-7.181-28.447-7.181H403.18v7.181c-6.492-6.262-20.935-7.181-29.734-7.181h-76.134l-17.42 18.775-16.318-18.775H149.847v122.675h111.586l17.95-19.076 16.91 19.076 68.78.059v-28.859h6.764c9.125.145 19.889-.223 29.387-4.311v33.107h56.731v-31.976h2.736c3.492 0 3.838.146 3.838 3.621v28.348h172.344c10.941 0 22.38-2.786 28.712-7.853v7.853h54.668c11.375 0 22.485-1.588 30.938-5.653v-22.853c-5.122 7.462-15.112 11.245-28.626 11.245zm-349.831-28.967h-26.325v29.488h-41.006L279.425 326.5l-26.997 29.102h-83.569v-87.914h84.855l25.955 28.818 26.835-28.818h67.414c16.743 0 35.555 4.617 35.555 28.963 0 24.421-18.297 29.462-36.739 29.462zm126.589-3.986c2.98 4.291 3.41 8.297 3.496 16.047v17.428h-21.182v-10.998c0-5.289.512-13.121-3.41-17.209-3.08-3.149-7.781-3.901-15.48-3.901h-22.545v32.108h-21.198v-87.914h48.706c10.685 0 18.462.472 25.386 4.148 6.658 4.006 10.848 9.494 10.848 19.523-.002 14.031-9.399 21.19-14.953 23.389 4.693 1.725 8.531 4.818 10.332 7.379zm87.15-36.258h-49.404v15.982h48.197v17.938h-48.197v17.492l49.404.078v18.242h-70.414v-87.914h70.414v18.182zm54.213 69.731h-41.09v-18.852h40.926c4.002 0 6.84-.527 8.619-2.178 1.449-1.359 2.492-3.336 2.492-5.73 0-2.564-1.129-4.598-2.574-5.818-1.615-1.34-3.842-1.948-7.514-1.948-19.73-.673-44.439.606-44.439-27.212 0-12.752 8.047-26.174 30.164-26.174h42.297v18.709h-38.703c-3.836 0-6.33.146-8.451 1.592-2.313 1.423-3.17 3.535-3.17 6.322 0 3.316 1.963 5.574 4.615 6.549 2.228.771 4.617.996 8.211.996l11.359.308c11.449.274 19.313 2.25 24.092 7.069 4.105 4.232 6.311 9.578 6.311 18.625-.002 18.913-11.868 27.742-33.145 27.742zm110.506-11.762zm-274.131-56.551c-2.549-1.508-6.311-1.588-10.066-1.588h-25.979v19.744h25.631c4.104 0 7.594-.144 10.414-1.812 2.734-1.646 4.371-4.678 4.371-8.438 0-3.759-1.637-6.482-4.371-7.906zm235.723-1.59c-3.838 0-6.389.145-8.537 1.588-2.227 1.426-3.081 3.537-3.081 6.326 0 3.315 1.879 5.572 4.612 6.549 2.228.771 4.615.996 8.129.996l11.437.303c11.537.285 19.242 2.262 23.938 7.08.855.668 1.369 1.42 1.957 2.174v-25.014h-38.453l-.002-.002zm-339.314 0h-27.509v22.391h27.265c8.105 0 13.146-4.006 13.149-11.611-.003-7.688-5.289-10.78-12.905-10.78zm-183.598 0v15.984h46.315v17.938h-46.315v17.49h51.87l24.1-25.791-23.076-25.621h-52.894zm135.449 61.479v-70.482l-32.391 34.673 32.391 35.809zM191.649 206.025v15.148h176.263l-.082-32.046h3.411c2.39.083 3.084.302 3.084 4.229v27.818h91.164v-7.461c7.353 3.924 18.789 7.461 33.838 7.461h38.353l8.209-19.522h18.197l8.026 19.522h73.906V202.63l11.189 18.543h59.227V98.59h-58.611v14.477l-8.207-14.477h-60.143v14.477l-7.537-14.477h-81.24c-13.6 0-25.551 1.89-35.207 7.158V98.59h-56.063v7.158c-6.146-5.43-14.519-7.158-23.826-7.158H180.784l-13.742 31.662-14.114-31.662H88.417v14.477L81.329 98.59H26.312L.763 156.874v46.621l37.779-87.894h31.346l35.88 83.217v-83.217h34.435l27.61 59.625 25.365-59.625h35.126v87.894h-21.625l-.079-68.837-30.593 68.837h-18.524l-30.671-68.898v68.898H83.899l-8.106-19.605H31.865l-8.19 19.605H.762v17.682h36.049l8.128-19.523h18.198l8.106 19.523h70.925V206.25l6.33 14.989h36.819l6.332-15.214zm277.752-80.176c6.818-7.015 17.5-10.25 32.039-10.25h20.424v18.833h-19.996c-7.696 0-12.047 1.14-16.233 5.208-3.599 3.7-6.066 10.696-6.066 19.908 0 9.417 1.881 16.206 5.801 20.641 3.248 3.478 9.152 4.533 14.705 4.533h9.478l29.733-69.12h31.611l35.719 83.134v-83.133h32.123l37.086 61.213v-61.213h21.611v87.891h-29.898l-39.989-65.968v65.968h-42.968l-8.209-19.605h-43.827l-7.966 19.605h-24.688c-10.254 0-23.238-2.258-30.59-9.722-7.416-7.462-11.271-17.571-11.271-33.553-.004-13.037 2.299-24.953 11.371-34.37zM426.006 115.6h21.526v87.894h-21.526V115.6zm-97.055 0h48.525c10.779 0 18.727.285 25.547 4.21 6.674 3.926 10.676 9.658 10.676 19.46 0 14.015-9.393 21.254-14.864 23.429 4.614 1.75 8.559 4.841 10.438 7.401 2.979 4.372 3.492 8.277 3.492 16.126v17.267h-21.279l-.08-11.084c0-5.29.508-12.896-3.33-17.122-3.082-3.09-7.782-3.763-15.379-3.763H350.05v31.97h-21.098l-.001-87.894zm-85.049 0h70.479v18.303h-49.379v15.843h48.193v18.017h-48.193v17.553h49.379v18.177h-70.479V115.6z"/></svg>`
        }
      },
      {
        mask: "0000 0000 0000 0000",
        regex: "^(?:6011|65\\d{0,2}|64[4-9]\\d?)\\d{0,12}",
        card: {
          id: "discover",
          name: "Discover",
          color: "purple",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 471"><defs/><g fill="none" fill-rule="nonzero"><path fill="#4D4D4D" d="M52.877 0C23.68 0 0 23.155 0 51.71v367.58C0 447.85 23.672 471 52.877 471h644.246C726.32 471 750 447.845 750 419.29V51.71C750 23.15 726.328 0 697.123 0H52.877z"/><path fill="#FFF" d="M314.57 152.198c8.496 0 15.623 1.733 24.295 5.912v22.087c-8.215-7.633-15.341-10.828-24.765-10.828-18.523 0-33.09 14.576-33.09 33.055 0 19.488 14.116 33.196 34.008 33.196 8.955 0 15.95-3.029 23.847-10.54v22.098c-8.981 4.02-16.26 5.607-24.765 5.607-30.075 0-53.444-21.935-53.444-50.224 0-27.984 23.991-50.363 53.914-50.363zm-93.379.609c11.102 0 21.26 3.612 29.754 10.673l-10.335 12.86c-5.145-5.48-10.01-7.792-15.927-7.792-8.513 0-14.713 4.606-14.713 10.667 0 5.198 3.48 7.95 15.332 12.118 22.467 7.808 29.124 14.732 29.124 30.021 0 18.633-14.399 31.602-34.923 31.602-15.029 0-25.955-5.626-35.055-18.32l12.758-11.68c4.549 8.36 12.136 12.837 21.557 12.837 8.811 0 15.334-5.779 15.334-13.576 0-4.042-1.976-7.507-5.921-9.958-1.987-1.16-5.921-2.89-13.653-5.481-18.55-6.347-24.914-13.132-24.914-26.391 0-15.75 13.667-27.58 31.582-27.58zm225.695 1.678h21.575l27.004 64.645 27.35-64.645h21.412l-43.744 98.713h-10.628l-42.969-98.713zm-382.065.148h28.991c32.03 0 54.359 19.786 54.359 48.19 0 14.163-6.831 27.856-18.382 36.944-9.72 7.67-20.795 11.11-36.13 11.11H64.822v-96.244zm92.437 0h19.751v96.245h-19.75v-96.245zm395.899 0h56.011v16.308h-36.275v21.362h34.938v16.3h-34.938v25.98h36.275v16.295h-56.011v-96.245zm69.094 0h29.283c22.78 0 35.833 10.397 35.833 28.416 0 14.735-8.187 24.406-23.064 27.284l31.873 40.545h-24.288l-27.336-38.664h-2.575v38.664h-19.726v-96.245zm19.726 15.159v29.148h5.771c12.612 0 19.297-5.206 19.297-14.88 0-9.367-6.686-14.268-18.985-14.268h-6.083zm-557.42 1.149v63.642h5.3c12.763 0 20.823-2.324 27.028-7.648 6.83-5.782 10.94-15.015 10.94-24.25 0-9.222-4.11-18.18-10.94-23.961-6.523-5.61-14.265-7.783-27.028-7.783h-5.3z"/><path fill="#F47216" d="M399.164 151.56c29.75 0 53.867 22.167 53.867 49.552v.031c0 27.385-24.117 49.584-53.867 49.584-29.75 0-53.867-22.199-53.867-49.584v-.03c0-27.386 24.117-49.554 53.867-49.554zm350.819 119.534c-25.048 17.233-212.574 140.397-537.264 199.891h484.387c29.197 0 52.877-23.154 52.877-51.71V271.094z"/></g></svg>`,
          logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 501"><defs/><path fill="#F47216" d="M409.412 197.758c30.938 0 56.02 23.58 56.02 52.709v.033c0 29.129-25.082 52.742-56.02 52.742-30.941 0-56.022-23.613-56.022-52.742v-.033c0-29.129 25.081-52.709 56.022-52.709z"/><path d="M321.433 198.438c8.836 0 16.247 1.785 25.269 6.09v22.752c-8.544-7.863-15.955-11.154-25.757-11.154-19.265 0-34.413 15.015-34.413 34.051 0 20.074 14.681 34.195 35.368 34.195 9.313 0 16.586-3.12 24.802-10.856v22.764c-9.343 4.141-16.912 5.775-25.757 5.775-31.277 0-55.581-22.597-55.581-51.737-.001-28.828 24.95-51.88 56.069-51.88zM224.32 199.064c11.546 0 22.109 3.721 30.942 10.994l-10.748 13.248c-5.351-5.646-10.411-8.027-16.563-8.027-8.854 0-15.301 4.745-15.301 10.988 0 5.354 3.618 8.188 15.944 12.482 23.364 8.043 30.289 15.176 30.289 30.926 0 19.193-14.976 32.554-36.319 32.554-15.631 0-26.993-5.795-36.457-18.871l13.268-12.031c4.73 8.609 12.622 13.223 22.42 13.223 9.163 0 15.947-5.951 15.947-13.984 0-4.164-2.056-7.733-6.158-10.258-2.066-1.195-6.158-2.977-14.199-5.646-19.292-6.538-25.91-13.527-25.91-27.186-.001-16.226 14.213-28.412 32.845-28.412zM459.043 200.793h22.436l28.084 66.592 28.447-66.592h22.266l-45.493 101.686h-11.054zM157.83 200.945h20.541v99.143H157.83zM569.563 200.945h58.252v16.799H590.09v22.006h36.336v16.791H590.09v26.762h37.725v16.785h-58.252zM685.156 258.322c15.471-2.965 23.984-12.926 23.984-28.105 0-18.562-13.576-29.271-37.266-29.271H641.42v99.143h20.516V260.26h2.68l28.43 39.828h25.26l-33.15-41.766zm-17.218-11.736h-6.002v-30.025h6.326c12.791 0 19.744 5.049 19.744 14.697.002 9.966-6.951 15.328-20.068 15.328zM91.845 200.945H61.696v99.143h29.992c15.946 0 27.465-3.543 37.573-11.445 12.014-9.36 19.117-23.467 19.117-38.057.001-29.259-23.221-49.641-56.533-49.641zm23.997 74.479c-6.454 5.484-14.837 7.879-28.108 7.879H82.22v-65.559h5.513c13.271 0 21.323 2.238 28.108 8.018 7.104 5.956 11.377 15.183 11.377 24.682.001 9.513-4.273 19.024-11.376 24.98z"/></svg>`
        }
      },
      {
        mask: "0000 000000 0000",
        regex: "^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}",
        card: {
          id: "diners",
          name: "Diners",
          color: "orange",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 471"><defs/><g fill="none" fill-rule="nonzero"><rect width="750" height="471" fill="#0079BE" rx="40"/><path fill="#FFF" d="M584.934 237.947c0-99.415-82.981-168.133-173.895-168.1h-78.242c-92.003-.033-167.73 68.705-167.73 168.1 0 90.93 75.727 165.64 167.73 165.204h78.242c90.914.436 173.895-74.293 173.895-165.204z"/><path fill="#0079BE" d="M333.28 83.93c-84.07.027-152.194 68.308-152.214 152.58.02 84.258 68.144 152.533 152.214 152.56 84.09-.027 152.228-68.302 152.24-152.56-.012-84.272-68.15-152.553-152.24-152.58z"/><path fill="#FFF" d="M237.066 236.098c.08-41.18 25.746-76.296 61.94-90.25v180.48c-36.194-13.947-61.861-49.044-61.94-90.23zm131 90.275V145.847c36.207 13.92 61.914 49.057 61.98 90.257-.066 41.212-25.773 76.322-61.98 90.269z"/></g></svg>`,
          logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 471"><defs/><path fill="#0079BE" d="M584.934 236.947c0-99.416-82.98-168.133-173.896-168.1h-78.241c-92.003-.033-167.73 68.705-167.73 168.1 0 90.931 75.729 165.641 167.73 165.203h78.241c90.913.437 173.896-74.293 173.896-165.203z"/><path fill="#FFF" d="M333.281 82.932c-84.069.026-152.193 68.308-152.215 152.58.021 84.258 68.145 152.532 152.215 152.559 84.088-.026 152.229-68.301 152.239-152.559-.012-84.274-68.151-152.554-152.239-152.58z"/><path fill="#0079BE" d="M237.066 235.098c.08-41.18 25.747-76.296 61.94-90.25v180.479c-36.193-13.946-61.861-49.044-61.94-90.229zm131 90.275V144.848c36.208 13.921 61.915 49.057 61.981 90.256-.066 41.212-25.773 76.322-61.981 90.269z"/></svg>`
        }
      },
      {
        mask: "0000 0000 0000 0000",
        regex: "^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}",
        card: {
          id: "mastercard",
          name: "Mastercard",
          color: "lightblue",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 471"><defs/><g fill="none" fill-rule="nonzero"><rect width="750" height="471" fill="#000" rx="40"/><path fill="#FFF" d="M221.13 421.67v-24.85c0-9.53-5.8-15.74-15.32-15.74-5 0-10.35 1.66-14.08 7-2.9-4.56-7-7-13.25-7a14.07 14.07 0 00-12 5.8v-5h-7.87v39.76h7.87v-22.75c0-7 4.14-10.35 9.94-10.35s9.11 3.73 9.11 10.35v22.78h7.87v-22.78c0-7 4.14-10.35 9.94-10.35s9.11 3.73 9.11 10.35v22.78h8.68zm129.22-39.35h-14.5v-12H328v12h-8.28v7H328V408c0 9.11 3.31 14.5 13.25 14.5a23.17 23.17 0 0010.75-2.9l-2.49-7a13.63 13.63 0 01-7.46 2.07c-4.14 0-6.21-2.49-6.21-6.63V389h14.5v-6.63l.01-.05zm73.72-1.24a12.39 12.39 0 00-10.77 5.8v-5h-7.87v39.76h7.87v-22.33c0-6.63 3.31-10.77 8.7-10.77a24.24 24.24 0 015.38.83l2.49-7.46a28 28 0 00-5.8-.83zm-111.41 4.14c-4.14-2.9-9.94-4.14-16.15-4.14-9.94 0-16.15 4.56-16.15 12.43 0 6.63 4.56 10.35 13.25 11.6l4.14.41c4.56.83 7.46 2.49 7.46 4.56 0 2.9-3.31 5-9.53 5a21.84 21.84 0 01-13.25-4.14l-4.14 6.21c5.8 4.14 12.84 5 17 5 11.6 0 17.81-5.38 17.81-12.84 0-7-5-10.35-13.67-11.6l-4.14-.41c-3.73-.41-7-1.66-7-4.14 0-2.9 3.31-5 7.87-5 5 0 9.94 2.07 12.43 3.31l4.07-6.25zm120.11 16.57c0 12 7.87 20.71 20.71 20.71 5.8 0 9.94-1.24 14.08-4.56l-4.14-6.21a16.74 16.74 0 01-10.35 3.73c-7 0-12.43-5.38-12.43-13.25S446 389 453.07 389a16.74 16.74 0 0110.35 3.73l4.14-6.21c-4.14-3.31-8.28-4.56-14.08-4.56-12.43-.83-20.71 7.87-20.71 19.88v-.05zm-55.5-20.71c-11.6 0-19.47 8.28-19.47 20.71 0 12.43 8.28 20.71 20.29 20.71a25.33 25.33 0 0016.15-5.38l-4.14-5.8a19.79 19.79 0 01-11.6 4.14c-5.38 0-11.18-3.31-12-10.35h29.41v-3.31c0-12.43-7.46-20.71-18.64-20.71v-.01zm-.41 7.46c5.8 0 9.94 3.73 10.35 9.94h-21.53c1.24-5.8 5-9.94 11.18-9.94zm-107.27 13.25v-19.88h-7.87v5c-2.9-3.73-7-5.8-12.84-5.8-11.18 0-19.47 8.7-19.47 20.71 0 12.01 8.28 20.71 19.47 20.71 5.8 0 9.94-2.07 12.84-5.8v5h7.87v-19.94zm-31.89 0c0-7.46 4.56-13.25 12.43-13.25 7.46 0 12 5.8 12 13.25 0 7.87-5 13.25-12 13.25-7.87.41-12.43-5.8-12.43-13.25zm306.08-20.71a12.39 12.39 0 00-10.77 5.8v-5h-7.87v39.76H533v-22.33c0-6.63 3.31-10.77 8.7-10.77a24.24 24.24 0 015.38.83l2.49-7.46a28 28 0 00-5.8-.83h.01zm-30.65 20.71v-19.88h-7.87v5c-2.9-3.73-7-5.8-12.84-5.8-11.18 0-19.47 8.7-19.47 20.71 0 12.01 8.28 20.71 19.47 20.71 5.8 0 9.94-2.07 12.84-5.8v5h7.87v-19.94zm-31.89 0c0-7.46 4.56-13.25 12.43-13.25 7.46 0 12 5.8 12 13.25 0 7.87-5 13.25-12 13.25-7.87.41-12.43-5.8-12.43-13.25zm111.83 0v-35.62h-7.87v20.71c-2.9-3.73-7-5.8-12.84-5.8-11.18 0-19.47 8.7-19.47 20.71 0 12.01 8.28 20.71 19.47 20.71 5.8 0 9.94-2.07 12.84-5.8v5h7.87v-19.91zm-31.89 0c0-7.46 4.56-13.25 12.43-13.25 7.46 0 12 5.8 12 13.25 0 7.87-5 13.25-12 13.25-7.88.42-12.44-5.79-12.44-13.25h.01z"/><path fill="#FF5F00" d="M303.55 80.39h143.72v234.42H303.55z"/><path fill="#EB001B" d="M318.05 197.6a149.5 149.5 0 0156.74-117.21c-61.128-48.061-148.928-41.075-201.687 16.048-52.758 57.123-52.758 145.2 0 202.324 52.759 57.123 140.559 64.11 201.687 16.048a149.5 149.5 0 01-56.74-117.21z"/><path fill="#F79E1B" d="M616.26 197.6c.041 57.047-32.503 109.106-83.804 134.056-51.302 24.95-112.347 18.408-157.196-16.846a149.43 149.43 0 000-234.42c44.85-35.254 105.894-41.797 157.196-16.846 51.3 24.95 83.845 77.01 83.804 134.056z"/></g></svg>`,
          logo: `<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 482.51 374"><defs/><path d="M87.39 373.17v-24.85c0-9.53-5.8-15.74-15.32-15.74-5 0-10.35 1.66-14.08 7-2.9-4.56-7-7-13.25-7a14.07 14.07 0 00-12 5.8v-5h-7.87v39.76h7.87v-22.75c0-7 4.14-10.35 9.94-10.35s9.11 3.73 9.11 10.35v22.78h7.87v-22.78c0-7 4.14-10.35 9.94-10.35s9.11 3.73 9.11 10.35v22.78zm129.22-39.35h-14.5v-12h-7.85v12h-8.28v7h8.28v18.68c0 9.11 3.31 14.5 13.25 14.5a23.17 23.17 0 0010.75-2.9l-2.49-7a13.63 13.63 0 01-7.46 2.07c-4.14 0-6.21-2.49-6.21-6.63V340.5h14.5v-6.63zm73.72-1.24a12.39 12.39 0 00-10.77 5.8v-5h-7.87v39.76h7.87v-22.33c0-6.63 3.31-10.77 8.7-10.77a24.24 24.24 0 015.38.83l2.49-7.46a28 28 0 00-5.8-.83zm-111.41 4.14c-4.14-2.9-9.94-4.14-16.15-4.14-9.94 0-16.15 4.56-16.15 12.43 0 6.63 4.56 10.35 13.25 11.6l4.14.41c4.56.83 7.46 2.49 7.46 4.56 0 2.9-3.31 5-9.53 5a21.84 21.84 0 01-13.25-4.14l-4.14 6.21c5.8 4.14 12.84 5 17 5 11.6 0 17.81-5.38 17.81-12.84 0-7-5-10.35-13.67-11.6l-4.14-.41c-3.73-.41-7-1.66-7-4.14 0-2.9 3.31-5 7.87-5 5 0 9.94 2.07 12.43 3.31zm120.11 16.57c0 12 7.87 20.71 20.71 20.71 5.8 0 9.94-1.24 14.08-4.56l-4.14-6.21a16.74 16.74 0 01-10.35 3.73c-7 0-12.43-5.38-12.43-13.25s5.36-13.21 12.43-13.21a16.74 16.74 0 0110.35 3.73l4.14-6.21c-4.14-3.31-8.28-4.56-14.08-4.56-12.43-.83-20.71 7.87-20.71 19.88zm-55.5-20.71c-11.6 0-19.47 8.28-19.47 20.71S232.34 374 244.35 374a25.33 25.33 0 0016.15-5.38l-4.14-5.8a19.79 19.79 0 01-11.6 4.14c-5.38 0-11.18-3.31-12-10.35h29.41v-3.31c0-12.43-7.46-20.71-18.64-20.71zm-.41 7.46c5.8 0 9.94 3.73 10.35 9.94h-21.53c1.24-5.8 5-9.94 11.18-9.94zm-107.27 13.25v-19.88h-7.87v5c-2.9-3.73-7-5.8-12.84-5.8-11.18 0-19.47 8.7-19.47 20.71s8.28 20.71 19.47 20.71c5.8 0 9.94-2.07 12.84-5.8v5h7.87v-19.94zm-31.89 0c0-7.46 4.56-13.25 12.43-13.25 7.46 0 12 5.8 12 13.25 0 7.87-5 13.25-12 13.25-7.87.41-12.43-5.8-12.43-13.25zm306.08-20.71a12.39 12.39 0 00-10.77 5.8v-5h-7.87v39.76h7.86v-22.33c0-6.63 3.31-10.77 8.7-10.77a24.24 24.24 0 015.38.83l2.49-7.46a28 28 0 00-5.8-.83zm-30.65 20.71v-19.88h-7.87v5c-2.9-3.73-7-5.8-12.84-5.8-11.18 0-19.47 8.7-19.47 20.71s8.28 20.71 19.47 20.71c5.8 0 9.94-2.07 12.84-5.8v5h7.87v-19.94zm-31.89 0c0-7.46 4.56-13.25 12.43-13.25 7.46 0 12 5.8 12 13.25 0 7.87-5 13.25-12 13.25-7.87.41-12.43-5.8-12.43-13.25zm111.83 0v-35.62h-7.87v20.71c-2.9-3.73-7-5.8-12.84-5.8-11.18 0-19.47 8.7-19.47 20.71S427.43 374 438.62 374c5.8 0 9.94-2.07 12.84-5.8v5h7.87v-19.91zm-31.89 0c0-7.46 4.56-13.25 12.43-13.25 7.46 0 12 5.8 12 13.25 0 7.87-5 13.25-12 13.25-7.88.42-12.44-5.79-12.44-13.25z"/><path fill="#ff5f00" d="M169.81 31.89h143.72v234.42H169.81z"/><path fill="#eb001b" d="M184.31 149.1a149.5 149.5 0 0156.74-117.21 149.1 149.1 0 100 234.42 149.5 149.5 0 01-56.74-117.21z"/><path fill="#f79e1b" d="M482.52 149.1a148.95 148.95 0 01-241 117.21 149.43 149.43 0 000-234.42 148.95 148.95 0 01241 117.21z"/></svg>`
        }
      },
      {
        mask: "0000 000000 00000",
        regex: "^(?:2131|1800)\\d{0,11}",
        card: {
          id: "jcb15",
          name: "JCB 15",
          color: "red",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 471"><defs/><defs><linearGradient id="a" x1=".032%" x2="99.974%" y1="50%" y2="50%"><stop offset="0%" stop-color="#007B40"/><stop offset="100%" stop-color="#55B330"/></linearGradient><linearGradient id="b" x1=".472%" x2="99.986%" y1="50%" y2="50%"><stop offset="0%" stop-color="#1D2970"/><stop offset="100%" stop-color="#006DBA"/></linearGradient><linearGradient id="c" x1=".114%" x2="99.986%" y1="50.001%" y2="50.001%"><stop offset="0%" stop-color="#6E2B2F"/><stop offset="100%" stop-color="#E30138"/></linearGradient></defs><g fill="none" fill-rule="nonzero"><rect width="750" height="471" fill="#0E4C96" rx="40"/><path fill="#FFF" d="M617.243 346.766c0 41.615-33.728 75.36-75.36 75.36H132.757V124.245c0-41.626 33.733-75.37 75.365-75.37l409.121-.001v297.892z"/><path fill="url(#a)" d="M483.859 242.045c11.684.253 23.437-.516 35.077.4 11.787 2.2 14.628 20.043 4.156 25.888-7.141 3.85-15.633 1.432-23.379 2.113H483.86v-28.401zm41.833-32.145c2.596 9.165-6.238 17.392-15.066 16.13h-26.767c.185-8.642-.368-18.021.272-26.208 10.724.301 21.549-.616 32.21.48 4.58 1.15 8.413 4.916 9.35 9.598zM590.12 73.997c.498 17.501.071 35.927.214 53.783-.035 72.596.072 145.194-.055 217.79-.469 27.207-24.582 50.844-51.6 51.387-27.046.111-54.095.016-81.142.047v-109.75c29.47-.154 58.959.307 88.417-.232 13.667-.86 28.632-9.876 29.27-24.915 1.61-15.102-12.632-25.55-26.153-27.201-5.198-.135-5.044-1.515 0-2.117 12.892-2.787 23.02-16.133 19.226-29.499-3.236-14.058-18.773-19.499-31.697-19.472-26.351-.18-52.709-.026-79.063-.077.172-20.489-.354-41 .286-61.474 2.087-26.716 26.806-48.747 53.447-48.27h78.85z"/><path fill="url(#b)" d="M159.74 125.04c.674-27.163 24.889-50.611 51.875-51.007 26.944-.083 53.891-.012 80.837-.036-.074 90.885.148 181.777-.112 272.658-1.038 26.834-24.99 49.834-51.679 50.307-26.996.099-53.995.014-80.992.042V283.551c26.223 6.194 53.722 8.832 80.473 4.721 15.993-2.575 33.488-10.424 38.902-27.014 3.986-14.192 1.742-29.126 2.334-43.692v-33.824h-46.297c-.208 22.37.426 44.78-.335 67.125-1.248 13.734-14.846 22.46-27.8 21.995-16.066.169-47.898-11.64-47.898-11.64-.08-41.917.466-94.408.692-136.182z"/><path fill="url(#c)" d="M309.72 197.39c-2.434.517-.49-8.3-1.114-11.646.166-21.15-.346-42.323.284-63.458 2.083-26.829 26.991-48.916 53.739-48.288h78.766c-.074 90.884.147 181.775-.112 272.656-1.039 26.834-24.992 49.833-51.68 50.308-26.998.1-53.998.015-80.997.043V272.708c18.44 15.128 43.5 17.484 66.472 17.525 17.317-.006 34.534-2.675 51.35-6.67V260.79c-18.953 9.447-41.233 15.446-62.243 10.018-14.656-3.65-25.294-17.811-25.056-32.936-1.699-15.728 7.524-32.335 22.981-37.011 19.19-6.008 40.108-1.413 58.096 6.398 3.855 2.018 7.765 4.521 6.222-1.921v-17.9c-30.084-7.157-62.101-9.792-92.329-2.004-8.748 2.468-17.27 6.21-24.379 11.956z"/></g></svg>`,
          logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 471"><defs/><path fill="#FFF" d="M617.242 346.766c0 41.615-33.729 75.36-75.357 75.36H132.759V124.245c0-41.626 33.73-75.371 75.364-75.371h409.12v297.892h-.001z"/><linearGradient id="a" x1="824.742" x2="825.742" y1="333.781" y2="333.781" gradientTransform="matrix(132.8743 0 0 -323.0226 -109129.531 108054.602)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#007b40"/><stop offset="1" stop-color="#55b330"/></linearGradient><path fill="url(#a)" d="M483.86 242.045c11.686.254 23.439-.516 35.078.4 11.787 2.199 14.627 20.043 4.156 25.887-7.145 3.85-15.633 1.434-23.379 2.113H483.86v-28.4zm41.834-32.145c2.596 9.164-6.238 17.392-15.064 16.13h-26.77c.188-8.642-.367-18.022.273-26.209 10.723.302 21.547-.616 32.209.48 4.58 1.151 8.414 4.917 9.352 9.599zm64.425-135.903c.498 17.501.072 35.927.215 53.783-.033 72.596.07 145.195-.057 217.789-.469 27.207-24.582 50.847-51.6 51.39-27.045.11-54.094.017-81.143.047v-109.75c29.471-.153 58.957.308 88.416-.231 13.666-.858 28.635-9.875 29.271-24.914 1.609-15.103-12.631-25.551-26.152-27.201-5.197-.135-5.045-1.515 0-2.117 12.895-2.787 23.021-16.133 19.227-29.499-3.234-14.058-18.771-19.499-31.695-19.472-26.352-.179-52.709-.025-79.063-.077.17-20.489-.355-41 .283-61.474 2.088-26.716 26.807-48.748 53.447-48.27 26.287-.003 52.57-.003 78.851-.004z"/><linearGradient id="b" x1="824.755" x2="825.748" y1="333.782" y2="333.782" gradientTransform="matrix(133.4307 0 0 -323.0203 -109887.688 108053.82)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d2970"/><stop offset="1" stop-color="#006dba"/></linearGradient><path fill="url(#b)" d="M159.742 125.041c.673-27.164 24.888-50.611 51.872-51.008 26.945-.083 53.894-.012 80.839-.036-.074 90.885.146 181.776-.111 272.657-1.038 26.834-24.989 49.834-51.679 50.309-26.996.098-53.995.014-80.992.041V283.551c26.223 6.195 53.722 8.832 80.474 4.723 15.991-2.574 33.487-10.426 38.901-27.016 3.984-14.191 1.741-29.126 2.334-43.691v-33.825h-46.297c-.208 22.371.426 44.781-.335 67.125-1.248 13.734-14.849 22.46-27.802 21.994-16.064.17-47.897-11.641-47.897-11.641-.08-41.915.466-94.406.693-136.179z"/><linearGradient id="c" x1="824.742" x2="825.741" y1="333.781" y2="333.781" gradientTransform="matrix(132.9583 0 0 -323.0276 -109347.922 108056.266)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6e2b2f"/><stop offset="1" stop-color="#e30138"/></linearGradient><path fill="url(#c)" d="M309.721 197.39c-2.437.517-.491-8.301-1.114-11.646.166-21.15-.346-42.323.284-63.458 2.082-26.829 26.991-48.916 53.738-48.288h78.767c-.074 90.885.145 181.775-.111 272.657-1.039 26.834-24.992 49.833-51.682 50.309-26.998.101-53.998.015-80.997.042V272.707c18.44 15.129 43.5 17.484 66.472 17.525 17.318-.006 34.535-2.676 51.353-6.67V260.79c-18.953 9.446-41.234 15.446-62.244 10.019-14.656-3.649-25.294-17.813-25.057-32.937-1.698-15.729 7.522-32.335 22.979-37.011 19.192-6.008 40.108-1.413 58.096 6.398 3.855 2.018 7.766 4.521 6.225-1.921v-17.899c-30.086-7.158-62.104-9.792-92.33-2.005-8.748 2.468-17.272 6.211-24.379 11.956z"/></svg>`
        }
      },
      {
        mask: "0000 0000 0000 0000",
        regex: "^(?:35\\d{0,2})\\d{0,12}",
        card: {
          id: "jcb",
          name: "JCB",
          color: "red",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 471"><defs/><defs><linearGradient id="a" x1=".032%" x2="99.974%" y1="50%" y2="50%"><stop offset="0%" stop-color="#007B40"/><stop offset="100%" stop-color="#55B330"/></linearGradient><linearGradient id="b" x1=".472%" x2="99.986%" y1="50%" y2="50%"><stop offset="0%" stop-color="#1D2970"/><stop offset="100%" stop-color="#006DBA"/></linearGradient><linearGradient id="c" x1=".114%" x2="99.986%" y1="50.001%" y2="50.001%"><stop offset="0%" stop-color="#6E2B2F"/><stop offset="100%" stop-color="#E30138"/></linearGradient></defs><g fill="none" fill-rule="nonzero"><rect width="750" height="471" fill="#0E4C96" rx="40"/><path fill="#FFF" d="M617.243 346.766c0 41.615-33.728 75.36-75.36 75.36H132.757V124.245c0-41.626 33.733-75.37 75.365-75.37l409.121-.001v297.892z"/><path fill="url(#a)" d="M483.859 242.045c11.684.253 23.437-.516 35.077.4 11.787 2.2 14.628 20.043 4.156 25.888-7.141 3.85-15.633 1.432-23.379 2.113H483.86v-28.401zm41.833-32.145c2.596 9.165-6.238 17.392-15.066 16.13h-26.767c.185-8.642-.368-18.021.272-26.208 10.724.301 21.549-.616 32.21.48 4.58 1.15 8.413 4.916 9.35 9.598zM590.12 73.997c.498 17.501.071 35.927.214 53.783-.035 72.596.072 145.194-.055 217.79-.469 27.207-24.582 50.844-51.6 51.387-27.046.111-54.095.016-81.142.047v-109.75c29.47-.154 58.959.307 88.417-.232 13.667-.86 28.632-9.876 29.27-24.915 1.61-15.102-12.632-25.55-26.153-27.201-5.198-.135-5.044-1.515 0-2.117 12.892-2.787 23.02-16.133 19.226-29.499-3.236-14.058-18.773-19.499-31.697-19.472-26.351-.18-52.709-.026-79.063-.077.172-20.489-.354-41 .286-61.474 2.087-26.716 26.806-48.747 53.447-48.27h78.85z"/><path fill="url(#b)" d="M159.74 125.04c.674-27.163 24.889-50.611 51.875-51.007 26.944-.083 53.891-.012 80.837-.036-.074 90.885.148 181.777-.112 272.658-1.038 26.834-24.99 49.834-51.679 50.307-26.996.099-53.995.014-80.992.042V283.551c26.223 6.194 53.722 8.832 80.473 4.721 15.993-2.575 33.488-10.424 38.902-27.014 3.986-14.192 1.742-29.126 2.334-43.692v-33.824h-46.297c-.208 22.37.426 44.78-.335 67.125-1.248 13.734-14.846 22.46-27.8 21.995-16.066.169-47.898-11.64-47.898-11.64-.08-41.917.466-94.408.692-136.182z"/><path fill="url(#c)" d="M309.72 197.39c-2.434.517-.49-8.3-1.114-11.646.166-21.15-.346-42.323.284-63.458 2.083-26.829 26.991-48.916 53.739-48.288h78.766c-.074 90.884.147 181.775-.112 272.656-1.039 26.834-24.992 49.833-51.68 50.308-26.998.1-53.998.015-80.997.043V272.708c18.44 15.128 43.5 17.484 66.472 17.525 17.317-.006 34.534-2.675 51.35-6.67V260.79c-18.953 9.447-41.233 15.446-62.243 10.018-14.656-3.65-25.294-17.811-25.056-32.936-1.699-15.728 7.524-32.335 22.981-37.011 19.19-6.008 40.108-1.413 58.096 6.398 3.855 2.018 7.765 4.521 6.222-1.921v-17.9c-30.084-7.157-62.101-9.792-92.329-2.004-8.748 2.468-17.27 6.21-24.379 11.956z"/></g></svg>`,
          logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 471"><defs/><path fill="#FFF" d="M617.242 346.766c0 41.615-33.729 75.36-75.357 75.36H132.759V124.245c0-41.626 33.73-75.371 75.364-75.371h409.12v297.892h-.001z"/><linearGradient id="a" x1="824.742" x2="825.742" y1="333.781" y2="333.781" gradientTransform="matrix(132.8743 0 0 -323.0226 -109129.531 108054.602)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#007b40"/><stop offset="1" stop-color="#55b330"/></linearGradient><path fill="url(#a)" d="M483.86 242.045c11.686.254 23.439-.516 35.078.4 11.787 2.199 14.627 20.043 4.156 25.887-7.145 3.85-15.633 1.434-23.379 2.113H483.86v-28.4zm41.834-32.145c2.596 9.164-6.238 17.392-15.064 16.13h-26.77c.188-8.642-.367-18.022.273-26.209 10.723.302 21.547-.616 32.209.48 4.58 1.151 8.414 4.917 9.352 9.599zm64.425-135.903c.498 17.501.072 35.927.215 53.783-.033 72.596.07 145.195-.057 217.789-.469 27.207-24.582 50.847-51.6 51.39-27.045.11-54.094.017-81.143.047v-109.75c29.471-.153 58.957.308 88.416-.231 13.666-.858 28.635-9.875 29.271-24.914 1.609-15.103-12.631-25.551-26.152-27.201-5.197-.135-5.045-1.515 0-2.117 12.895-2.787 23.021-16.133 19.227-29.499-3.234-14.058-18.771-19.499-31.695-19.472-26.352-.179-52.709-.025-79.063-.077.17-20.489-.355-41 .283-61.474 2.088-26.716 26.807-48.748 53.447-48.27 26.287-.003 52.57-.003 78.851-.004z"/><linearGradient id="b" x1="824.755" x2="825.748" y1="333.782" y2="333.782" gradientTransform="matrix(133.4307 0 0 -323.0203 -109887.688 108053.82)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d2970"/><stop offset="1" stop-color="#006dba"/></linearGradient><path fill="url(#b)" d="M159.742 125.041c.673-27.164 24.888-50.611 51.872-51.008 26.945-.083 53.894-.012 80.839-.036-.074 90.885.146 181.776-.111 272.657-1.038 26.834-24.989 49.834-51.679 50.309-26.996.098-53.995.014-80.992.041V283.551c26.223 6.195 53.722 8.832 80.474 4.723 15.991-2.574 33.487-10.426 38.901-27.016 3.984-14.191 1.741-29.126 2.334-43.691v-33.825h-46.297c-.208 22.371.426 44.781-.335 67.125-1.248 13.734-14.849 22.46-27.802 21.994-16.064.17-47.897-11.641-47.897-11.641-.08-41.915.466-94.406.693-136.179z"/><linearGradient id="c" x1="824.742" x2="825.741" y1="333.781" y2="333.781" gradientTransform="matrix(132.9583 0 0 -323.0276 -109347.922 108056.266)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6e2b2f"/><stop offset="1" stop-color="#e30138"/></linearGradient><path fill="url(#c)" d="M309.721 197.39c-2.437.517-.491-8.301-1.114-11.646.166-21.15-.346-42.323.284-63.458 2.082-26.829 26.991-48.916 53.738-48.288h78.767c-.074 90.885.145 181.775-.111 272.657-1.039 26.834-24.992 49.833-51.682 50.309-26.998.101-53.998.015-80.997.042V272.707c18.44 15.129 43.5 17.484 66.472 17.525 17.318-.006 34.535-2.676 51.353-6.67V260.79c-18.953 9.446-41.234 15.446-62.244 10.019-14.656-3.649-25.294-17.813-25.057-32.937-1.698-15.729 7.522-32.335 22.979-37.011 19.192-6.008 40.108-1.413 58.096 6.398 3.855 2.018 7.766 4.521 6.225-1.921v-17.899c-30.086-7.158-62.104-9.792-92.33-2.005-8.748 2.468-17.272 6.211-24.379 11.956z"/></svg>`
        }
      },
      {
        mask: "0000 0000 0000 0000",
        regex: "^(?:5[0678]\\d{0,2}|6304|67\\d{0,2})\\d{0,12}",
        card: {
          id: "maestro",
          name: "Maestro",
          color: "yellow",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 471"><defs/><g fill="none" fill-rule="nonzero"><rect width="750" height="471" fill="#000" rx="40"/><path fill="#FFF" d="M279.8 421.77V397c0-9.35-6-15.64-15.55-15.72-5-.08-10.26 1.49-13.9 7-2.73-4.38-7-7-13.07-7a13.08 13.08 0 00-11.58 5.87v-4.88h-8.61v39.55h8.69v-21.97c0-6.87 3.81-10.51 9.68-10.51 5.71 0 8.61 3.72 8.61 10.42v22h8.69v-21.91c0-6.87 4-10.51 9.68-10.51 5.87 0 8.69 3.72 8.69 10.42v22l8.67.01zM328.28 402v-19.77h-8.61V387c-2.73-3.56-6.87-5.79-12.49-5.79-11.09 0-19.77 8.69-19.77 20.77s8.69 20.77 19.77 20.77c5.63 0 9.76-2.23 12.49-5.79v4.8h8.61V402zm-32 0c0-6.95 4.55-12.66 12-12.66 7.12 0 11.91 5.46 11.91 12.66s-4.8 12.66-11.91 12.66c-7.47 0-12.02-5.71-12.02-12.66h.02zm216.12-20.81a22.29 22.29 0 018.49 1.59 20.71 20.71 0 016.75 4.38 20 20 0 014.46 6.59 22 22 0 010 16.52 20 20 0 01-4.46 6.59 20.69 20.69 0 01-6.75 4.38 23.43 23.43 0 01-17 0 20.47 20.47 0 01-6.73-4.38 20.21 20.21 0 01-4.44-6.59 22 22 0 010-16.52 20.23 20.23 0 014.44-6.59 20.48 20.48 0 016.73-4.38 22.29 22.29 0 018.51-1.59zm0 8.14a12.84 12.84 0 00-4.91.93 11.62 11.62 0 00-3.92 2.6 12.13 12.13 0 00-2.6 4 14.39 14.39 0 000 10.28 12.11 12.11 0 002.6 4 11.62 11.62 0 003.92 2.6 13.46 13.46 0 009.83 0 11.86 11.86 0 003.94-2.6 12 12 0 002.62-4 14.39 14.39 0 000-10.28 12 12 0 00-2.62-4 11.86 11.86 0 00-3.94-2.6 12.84 12.84 0 00-4.92-.94v.01zM375.1 402c-.08-12.33-7.69-20.77-18.78-20.77-11.58 0-19.69 8.44-19.69 20.77 0 12.58 8.44 20.77 20.27 20.77 6 0 11.42-1.49 16.22-5.54l-4.22-6.37a18.84 18.84 0 01-11.5 4.14c-5.54 0-10.59-2.56-11.83-9.68h29.37c.06-1.09.16-2.16.16-3.32zm-29.45-3.47c.91-5.71 4.38-9.6 10.51-9.6 5.54 0 9.1 3.47 10 9.6h-20.51zm65.69-6.2a25.49 25.49 0 00-12.34-3.4c-4.72 0-7.53 1.74-7.53 4.63 0 2.65 3 3.39 6.7 3.89l4.05.58c8.61 1.24 13.82 4.88 13.82 11.83 0 7.53-6.62 12.91-18 12.91-6.45 0-12.41-1.66-17.13-5.13l4.05-6.7a21.07 21.07 0 0013.16 4.14c5.87 0 9-1.74 9-4.8 0-2.23-2.23-3.47-6.95-4.14l-4.05-.58c-8.85-1.24-13.65-5.21-13.65-11.67 0-7.86 6.45-12.66 16.46-12.66 6.29 0 12 1.41 16.13 4.14l-3.72 6.96zm41.35-2.23h-14.07V408c0 4 1.41 6.62 5.71 6.62a15.89 15.89 0 007.61-2.23l2.48 7.36a20.22 20.22 0 01-10.76 3.06c-10.18 0-13.73-5.46-13.73-14.65v-18h-8v-7.86h8v-12h8.69v12h14.06l.01 7.8zm29.78-8.85a18.38 18.38 0 016.12 1.08l-2.65 8.11a14 14 0 00-5.38-1c-5.63 0-8.44 3.64-8.44 10.18v22.17h-8.6v-39.56H472V387a11.66 11.66 0 0110.42-5.79l.05.04z"/><path fill="#7673C0" d="M309.95 80.39h130.5V314.9h-130.5z"/><path fill="#EB001B" d="M318.24 197.64a148.88 148.88 0 0157-117.26c-61.147-48.062-148.962-41.066-201.728 16.071-52.766 57.137-52.766 145.23 0 202.368 52.766 57.137 140.581 64.133 201.728 16.071a148.88 148.88 0 01-57-117.25z"/><path fill="#00A1DF" d="M616.5 197.64c.001 57.099-32.598 109.186-83.954 134.143-51.356 24.956-112.454 18.4-157.346-16.883a149.16 149.16 0 000-234.51c44.89-35.283 105.986-41.839 157.341-16.885 51.355 24.954 83.956 77.038 83.959 134.135z"/></g></svg>`,
          logo: `<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 482.6 374.31"><defs/><path d="M145.9 373.27V348.5c0-9.35-6-15.64-15.55-15.72-5-.08-10.26 1.49-13.9 7-2.73-4.38-7-7-13.07-7a13.08 13.08 0 00-11.58 5.87v-4.88h-8.61v39.55h8.69v-21.97c0-6.87 3.81-10.51 9.68-10.51 5.71 0 8.61 3.72 8.61 10.42v22h8.69v-21.91c0-6.87 4-10.51 9.68-10.51 5.87 0 8.69 3.72 8.69 10.42v22zm48.48-19.77v-19.77h-8.61v4.77c-2.73-3.56-6.87-5.79-12.49-5.79-11.09 0-19.77 8.69-19.77 20.77s8.69 20.77 19.77 20.77c5.63 0 9.76-2.23 12.49-5.79v4.8h8.61zm-32 0c0-6.95 4.55-12.66 12-12.66 7.12 0 11.91 5.46 11.91 12.66s-4.8 12.66-11.91 12.66c-7.47 0-12.02-5.71-12.02-12.66zm216.12-20.81a22.29 22.29 0 018.49 1.59 20.71 20.71 0 016.75 4.38 20 20 0 014.46 6.59 22 22 0 010 16.52 20 20 0 01-4.46 6.59 20.69 20.69 0 01-6.75 4.38 23.43 23.43 0 01-17 0 20.47 20.47 0 01-6.73-4.38 20.21 20.21 0 01-4.44-6.59 22 22 0 010-16.52 20.23 20.23 0 014.44-6.59 20.48 20.48 0 016.73-4.38 22.29 22.29 0 018.51-1.59zm0 8.14a12.84 12.84 0 00-4.91.93 11.62 11.62 0 00-3.92 2.6 12.13 12.13 0 00-2.6 4 14.39 14.39 0 000 10.28 12.11 12.11 0 002.6 4 11.62 11.62 0 003.92 2.6 13.46 13.46 0 009.83 0 11.86 11.86 0 003.94-2.6 12 12 0 002.62-4 14.39 14.39 0 000-10.28 12 12 0 00-2.62-4 11.86 11.86 0 00-3.94-2.6 12.84 12.84 0 00-4.92-.94zM241.2 353.5c-.08-12.33-7.69-20.77-18.78-20.77-11.58 0-19.69 8.44-19.69 20.77 0 12.58 8.44 20.77 20.27 20.77 6 0 11.42-1.49 16.22-5.54l-4.22-6.37a18.84 18.84 0 01-11.5 4.14c-5.54 0-10.59-2.56-11.83-9.68h29.37c.06-1.09.16-2.16.16-3.32zm-29.45-3.47c.91-5.71 4.38-9.6 10.51-9.6 5.54 0 9.1 3.47 10 9.6zm65.69-6.2a25.49 25.49 0 00-12.34-3.4c-4.72 0-7.53 1.74-7.53 4.63 0 2.65 3 3.39 6.7 3.89l4.05.58c8.61 1.24 13.82 4.88 13.82 11.83 0 7.53-6.62 12.91-18 12.91-6.45 0-12.41-1.66-17.13-5.13l4.05-6.7a21.07 21.07 0 0013.16 4.14c5.87 0 9-1.74 9-4.8 0-2.23-2.23-3.47-6.95-4.14l-4.05-.58c-8.85-1.24-13.65-5.21-13.65-11.67 0-7.86 6.45-12.66 16.46-12.66 6.29 0 12 1.41 16.13 4.14zm41.35-2.23h-14.07v17.9c0 4 1.41 6.62 5.71 6.62a15.89 15.89 0 007.61-2.23l2.48 7.36a20.22 20.22 0 01-10.76 3.06c-10.18 0-13.73-5.46-13.73-14.65v-18h-8v-7.86h8v-12h8.69v12h14.06zm29.78-8.85a18.38 18.38 0 016.12 1.08l-2.65 8.11a14 14 0 00-5.38-1c-5.63 0-8.44 3.64-8.44 10.18v22.17h-8.6v-39.56h8.48v4.77a11.66 11.66 0 0110.42-5.79z"/><g data-name="&lt;Group&gt;"><path fill="#7673c0" d="M176.05 31.89h130.5V266.4h-130.5z"/><path fill="#eb001b" d="M184.34 149.14a148.88 148.88 0 0157-117.26 149.14 149.14 0 100 234.51 148.88 148.88 0 01-57-117.25z" data-name="&lt;Path&gt;"/><path fill="#00a1df" d="M482.6 149.14A149.14 149.14 0 01241.3 266.4a149.16 149.16 0 000-234.51 149.14 149.14 0 01241.3 117.25z"/></g></svg>`
        }
      },
      {
        mask: "0000 0000 0000 0000",
        regex: "^4\\d{0,15}",
        card: {
          id: "visa",
          name: "Visa",
          color: "lime",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 471"><defs/><g fill="none" fill-rule="nonzero"><rect width="750" height="471" fill="#0E4595" rx="40"/><path fill="#FFF" d="M278.197 334.228l33.361-195.763h53.36l-33.385 195.763zM524.308 142.688c-10.572-3.966-27.137-8.222-47.823-8.222-52.725 0-89.865 26.55-90.18 64.603-.298 28.13 26.513 43.822 46.753 53.186 20.77 9.594 27.752 15.714 27.654 24.283-.132 13.121-16.587 19.116-31.923 19.116-21.357 0-32.703-2.966-50.226-10.276l-6.876-3.111-7.49 43.824c12.464 5.464 35.51 10.198 59.438 10.443 56.09 0 92.501-26.246 92.916-66.882.2-22.268-14.016-39.216-44.8-53.188-18.65-9.055-30.072-15.099-29.951-24.268 0-8.137 9.667-16.839 30.556-16.839 17.45-.27 30.089 3.535 39.937 7.5l4.781 2.26 7.234-42.43M661.615 138.465h-41.231c-12.774 0-22.332 3.487-27.942 16.234l-79.245 179.404h56.032s9.161-24.123 11.233-29.418c6.124 0 60.554.084 68.337.084 1.596 6.853 6.491 29.334 6.491 29.334h49.513l-43.188-195.638zm-65.418 126.407c4.413-11.279 21.26-54.723 21.26-54.723-.316.522 4.38-11.334 7.075-18.684l3.606 16.879s10.217 46.728 12.352 56.528h-44.293zM232.903 138.465l-52.24 133.496-5.567-27.13c-9.725-31.273-40.025-65.155-73.898-82.118l47.766 171.203 56.456-.065 84.004-195.386h-56.521"/><path fill="#F2AE14" d="M131.92 138.465H45.879l-.681 4.073c66.938 16.204 111.231 55.363 129.618 102.414l-18.71-89.96c-3.23-12.395-12.597-16.094-24.186-16.526"/></g></svg>`,
          logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 471"><defs/><path fill="#0E4595" d="M278.198 334.228l33.36-195.763h53.358l-33.384 195.763h-53.334zM524.307 142.687c-10.57-3.966-27.135-8.222-47.822-8.222-52.725 0-89.863 26.551-90.18 64.604-.297 28.129 26.514 43.821 46.754 53.185 20.77 9.597 27.752 15.716 27.652 24.283-.133 13.123-16.586 19.116-31.924 19.116-21.355 0-32.701-2.967-50.225-10.274l-6.877-3.112-7.488 43.823c12.463 5.466 35.508 10.199 59.438 10.445 56.09 0 92.502-26.248 92.916-66.884.199-22.27-14.016-39.216-44.801-53.188-18.65-9.056-30.072-15.099-29.951-24.269 0-8.137 9.668-16.838 30.559-16.838 17.447-.271 30.088 3.534 39.936 7.5l4.781 2.259 7.232-42.428M661.615 138.464h-41.23c-12.773 0-22.332 3.486-27.941 16.234L513.2 334.1h56.031s9.16-24.121 11.232-29.418c6.123 0 60.555.084 68.336.084 1.596 6.854 6.492 29.334 6.492 29.334h49.512l-43.188-195.636zm-65.417 126.408c4.414-11.279 21.26-54.724 21.26-54.724-.314.521 4.381-11.334 7.074-18.684l3.607 16.878s10.217 46.729 12.352 56.527h-44.293v.003zM232.903 138.464L180.664 271.96l-5.565-27.129c-9.726-31.274-40.025-65.157-73.898-82.12l47.767 171.204 56.455-.064 84.004-195.386-56.524-.001"/><path fill="#F2AE14" d="M131.92 138.464H45.879l-.682 4.073c66.939 16.204 111.232 55.363 129.618 102.415l-18.709-89.96c-3.229-12.396-12.597-16.096-24.186-16.528"/></svg>`
        }
      },
      {
        mask: "0000 0000 0000 0000",
        regex: "^62\\d{0,14}",
        card: {
          id: "unionpay",
          name: "American",
          color: "green",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 471"><defs/><g fill="none" fill-rule="nonzero"><rect width="750" height="471" fill="#FFF" rx="40"/><path fill="#D10429" d="M201.81 55h142.393c19.87 0 32.287 16.406 27.63 36.47L305.5 378.948c-4.656 20.064-24.629 36.47-44.498 36.47H118.61c-19.87 0-32.287-16.406-27.63-36.47L157.311 91.47C161.968 71.302 181.837 55 201.706 55h.104z"/><path fill="#022E64" d="M331.75 55h163.815c19.869 0 10.866 16.406 6.209 36.47L435.44 378.948c-4.657 20.064-3.208 36.47-23.077 36.47H248.549c-19.972 0-32.287-16.406-27.527-36.47L287.356 91.47C292.012 71.302 311.88 55 331.854 55h-.104z"/><path fill="#076F74" d="M489.815 55h142.394c19.869 0 32.287 16.406 27.63 36.47l-66.333 287.478c-4.657 20.064-24.63 36.47-44.498 36.47H406.614c-19.972 0-32.287-16.406-27.63-36.47L445.317 91.47C449.974 71.302 469.843 55 489.711 55h.104z"/><path fill="#FEFEFE" d="M465.905 326.015h13.453l3.829-13.063h-13.35l-3.932 13.063zm10.762-35.948l-4.657 15.466s5.071-2.613 7.865-3.449c2.794-.627 6.933-1.15 6.933-1.15l3.208-10.763h-13.452l.103-.104zm6.727-22.154l-4.45 14.839s4.967-2.3 7.761-3.03c2.794-.732 6.933-.941 6.933-.941l3.208-10.764h-13.349l-.103-.104zm29.7 0l-17.386 57.997h4.657l-3.622 12.017h-4.657l-1.138 3.658H474.39l1.139-3.658H442l3.311-11.076h3.415l17.593-58.938L469.837 256h16.868l-1.76 5.956s4.45-3.239 8.797-4.389c4.243-1.149 28.665-1.567 28.665-1.567l-3.622 11.808h-5.795l.103.105z"/><path fill="#FEFEFE" d="M520 256h18.006l.207 6.792c-.103 1.15.828 1.672 3.001 1.672h3.622l-3.311 11.182h-9.728c-8.382.627-11.59-3.03-11.383-7.106l-.31-12.436L520 256zm2.216 53.2h-17.178l2.897-9.927h19.662l2.794-9.092H511.04L514.351 279h53.812l-3.311 11.181h-18.11l-2.794 9.092h18.11l-3.002 9.927h-19.558l-3.518 4.18h7.968l1.966 12.54c.207 1.254.207 2.09.62 2.613.415.418 2.795.627 4.14.627h2.38l-3.725 12.226h-6.106c-.93 0-2.38-.104-4.346-.104-1.863-.21-3.104-1.254-4.346-1.881-1.139-.523-2.794-1.881-3.208-4.285l-1.863-12.54-8.9 12.331c-2.794 3.867-6.622 6.897-13.142 6.897H495l3.311-10.868h4.76c1.346 0 2.588-.522 3.52-1.045.93-.418 1.758-.836 2.586-2.194l13.04-18.497zM334.314 282h45.429l-3.312 10.972h-18.11l-2.793 9.3h18.627l-3.415 11.287h-18.524l-4.553 15.152c-.517 1.672 4.45 1.881 6.209 1.881l9.314-1.254-3.726 12.54h-20.904c-1.655 0-2.897-.209-4.76-.627-1.76-.418-2.587-1.254-3.311-2.403-.725-1.254-1.967-2.195-1.139-4.912l6.002-20.064H325l3.415-11.495h10.348l2.794-9.3H331.21l3.312-10.973-.207-.104zm31.387-19.835h18.627l-3.415 11.39h-25.457l-2.794 2.404c-1.242 1.15-1.552.732-3.105 1.568-1.448.731-4.45 2.194-8.382 2.194H333l3.311-10.972h2.484c2.07 0 3.519-.21 4.243-.627.828-.523 1.76-1.672 2.69-3.553l4.657-8.569h18.524l-3.208 6.27v-.105zm35.108 18.81s5.07-4.702 13.763-6.165c1.966-.418 14.384-.21 14.384-.21l1.863-6.27h-26.181l-3.83 12.75v-.105zm24.629 4.807h-25.975l-1.552 5.33h22.56c2.69-.314 3.208.104 3.415-.105l1.655-5.225h-.103zm-33.736-29.678h15.833l-2.276 8.047s4.967-4.076 8.485-5.539c3.519-1.254 11.383-2.508 11.383-2.508l25.664-.104-8.796 29.469c-1.449 5.016-3.208 8.255-4.243 9.823-.93 1.463-2.07 2.821-4.346 4.075-2.173 1.15-4.14 1.881-6.002 1.986-1.656.104-4.346.209-7.865.209h-24.732l-6.934 23.303c-.62 2.299-.931 3.448-.517 4.075.31.523 1.242 1.15 2.38 1.15l10.866-1.045-3.726 12.749h-12.21c-3.933 0-6.727-.105-8.693-.21-1.863-.208-3.83 0-5.175-1.044-1.138-1.045-2.897-2.404-2.794-3.762.104-1.254.621-3.344 1.45-6.27l22.248-74.404z"/><path fill="#FEFEFE" d="M437.84 303l-1.449 7.106c-.62 2.194-1.138 3.866-2.794 5.33-1.759 1.462-3.725 3.03-8.485 3.03l-8.796.418-.104 7.942c-.103 2.194.518 1.985.828 2.403.414.418.724.523 1.138.732l2.794-.21 8.383-.417-3.519 11.704h-9.624c-6.726 0-11.797-.21-13.35-1.463-1.655-1.045-1.862-2.3-1.862-4.598l.62-31.141h15.42l-.207 6.374h3.725c1.242 0 2.174-.104 2.691-.418.517-.313.828-.836 1.035-1.567l1.552-5.016h12.108l-.104-.209zM218.47 147c-.517 2.508-10.451 48.592-10.451 48.592-2.174 9.3-3.726 15.989-8.9 20.273-3.001 2.508-6.52 3.657-10.555 3.657-6.52 0-10.245-3.239-10.866-9.404l-.104-2.09s1.966-12.436 1.966-12.54c0 0 10.349-42.009 12.212-47.548.103-.313.103-.522.103-.627-20.18.21-23.801 0-24.008-.313-.104.418-.621 3.03-.621 3.03L156.69 197.37l-.932 3.97L154 214.508c0 3.866.724 7.105 2.277 9.718 4.863 8.569 18.627 9.823 26.388 9.823 10.038 0 19.455-2.195 25.767-6.061 11.073-6.584 13.97-16.929 16.454-26.02l1.242-4.703s10.659-43.576 12.522-49.219c.103-.314.103-.523.207-.627-14.695.104-18.938 0-20.387-.314V147zm59.03 86.623c-7.141-.105-9.728-.105-18.11.313l-.311-.627c.724-3.24 1.552-6.374 2.173-9.614l1.035-4.389c1.552-6.792 3.001-14.839 3.208-17.242.207-1.463.62-5.12-3.519-5.12-1.759 0-3.518.835-5.38 1.671-1.036 3.658-3.002 13.899-4.037 18.497-2.07 9.823-2.173 10.972-3.104 15.78l-.621.626c-7.347-.104-9.934-.104-18.42.314L230 233.1c1.449-5.852 2.794-11.704 4.14-17.556 3.518-15.78 4.45-21.84 5.38-29.887l.725-.418c8.279-1.149 10.245-1.463 19.248-3.239l.724.836-1.345 5.016c1.552-.94 3.001-1.881 4.553-2.613 4.243-2.09 8.9-2.717 11.487-2.717 3.932 0 8.279 1.15 10.038 5.748 1.656 4.075.62 9.091-1.656 19.019l-1.138 5.016c-2.277 11.077-2.69 13.062-3.933 20.586l-.827.627.103.105zm29.058.027c-4.346 0-7.14-.104-9.83 0-2.691 0-5.278.21-9.314.314l-.207-.314-.207-.418c1.138-4.18 1.656-5.643 2.277-7.106.517-1.463 1.034-2.926 2.07-7.21 1.241-5.539 2.069-9.405 2.586-12.854.621-3.24.932-6.06 1.346-9.3l.31-.209.31-.314c4.347-.627 7.038-1.045 9.832-1.463 2.794-.418 5.691-.94 10.141-1.776l.207.418.103.418-2.483 10.345c-.828 3.449-1.656 6.897-2.38 10.346-1.553 7.315-2.277 10.032-2.587 12.017-.414 1.881-.518 2.822-1.139 6.584l-.414.313-.414.314-.207-.105zm45.941-25.675c-.31 1.881-1.966 8.883-4.139 11.809-1.552 2.194-3.312 3.553-5.381 3.553-.621 0-4.14 0-4.243-5.33 0-2.612.517-5.33 1.138-8.255 1.863-8.465 4.14-15.466 9.831-15.466 4.45 0 4.76 5.225 2.794 13.69zm18.73.836c2.484-11.077.518-16.302-1.862-19.437-3.725-4.807-10.348-6.374-17.178-6.374-4.14 0-13.867.418-21.525 7.524-5.484 5.12-8.071 12.122-9.52 18.81-1.553 6.792-3.312 19.019 7.865 23.617 3.414 1.463 8.382 1.88 11.59 1.88 8.175 0 16.557-2.298 22.87-8.986 4.863-5.434 7.036-13.585 7.864-17.034h-.103zm174.433 26.08c-8.693-.104-11.176-.104-19.145.314l-.517-.627c2.173-8.256 4.346-16.616 6.313-24.976 2.483-10.868 3.104-15.466 3.932-21.84l.62-.523c8.59-1.254 10.97-1.567 19.973-3.239l.207.731c-1.656 6.897-3.208 13.69-4.864 20.482-3.311 14.317-4.45 21.632-5.691 29.156l-.828.627v-.105z"/><path fill="#FEFEFE" d="M533.16 209.374c-.414 1.776-2.07 8.882-4.243 11.808-1.449 2.09-4.967 3.449-6.933 3.449-.621 0-4.036 0-4.243-5.225 0-2.613.517-5.33 1.138-8.256 1.863-8.255 4.14-15.257 9.831-15.257 4.45 0 6.416 5.12 4.45 13.585v-.104zm17.075.836c2.483-11.077-7.658-.94-9.21-4.598-2.484-5.748-.932-17.243-10.866-21.109-3.829-1.568-12.832.418-20.49 7.524-5.381 5.016-8.072 12.017-9.52 18.705-1.553 6.688-3.312 19.02 7.76 23.304 3.52 1.567 6.727 1.985 9.935 1.776 11.177-.627 19.662-17.66 25.975-24.348 4.863-5.33 5.691 1.985 6.416-1.254zm-129.943 23.413c-7.14-.105-9.624-.105-18.006.313l-.31-.627c.724-3.24 1.552-6.374 2.276-9.614l.931-4.389c1.553-6.792 3.105-14.839 3.208-17.242.207-1.463.621-5.12-3.415-5.12-1.759 0-3.621.835-5.38 1.671-.932 3.658-3.002 13.899-4.037 18.497-1.966 9.823-2.173 10.972-3.104 15.78l-.621.626c-7.347-.104-9.934-.104-18.42.314L373 233.1c1.449-5.852 2.794-11.704 4.14-17.556 3.518-15.78 4.346-21.84 5.38-29.887l.621-.418c8.28-1.149 10.349-1.463 19.248-3.239l.725.836-1.242 5.016c1.449-.94 3.001-1.881 4.45-2.613 4.243-2.09 8.9-2.717 11.486-2.717 3.933 0 8.176 1.15 10.038 5.748 1.656 4.075.518 9.091-1.759 19.019l-1.138 5.016c-2.38 11.077-2.69 13.062-3.933 20.586l-.827.627.103.105zm62.001-86.519l-6.002.105c-15.523.209-21.732.104-24.215-.209-.207 1.15-.621 3.135-.621 3.135s-5.588 25.916-5.588 26.02c0 0-13.246 55.176-13.867 57.788 13.556-.209 19.041-.209 21.421.105.518-2.613 3.622-17.974 3.726-17.974 0 0 2.69-11.286 2.794-11.704 0 0 .827-1.15 1.655-1.672h1.242c11.694 0 24.836 0 35.185-7.628 7.037-5.225 11.797-13.063 13.97-22.468.517-2.299.931-5.016.931-7.837 0-3.658-.724-7.21-2.794-10.032-5.277-7.42-15.73-7.524-27.837-7.629zm7.761 27.066c-1.241 5.747-4.967 10.659-9.727 12.958-3.932 1.985-8.693 2.194-13.66 2.194h-3.208l.207-1.254s5.899-25.916 5.899-25.811l.207-1.359.103-1.045 2.38.21s12.211 1.044 12.418 1.044c4.76 1.881 6.83 6.688 5.381 13.063zm127.207 8.666l-.724-.836c-8.796 1.776-10.452 2.09-18.524 3.24l-.62.626c0 .105-.104.21-.104.418v-.104c-6.002 14.107-5.899 11.077-10.762 22.154 0-.523 0-.836-.104-1.359l-1.242-24.035-.724-.836c-9.314 1.777-9.52 2.09-18.006 3.24l-.621.627c-.104.313-.104.627-.104.94l.104.105c1.035 5.538.828 4.284 1.863 12.958.517 4.284 1.138 8.569 1.655 12.749.828 7.106 1.346 10.554 2.38 21.318-5.795 9.614-7.14 13.271-12.728 21.735l.31.836c8.383-.313 10.245-.313 16.454-.313l1.346-1.568c4.656-10.136 40.255-71.79 40.255-71.79l-.104-.105zm-302.717 6.922c4.76-3.344 5.38-7.942 1.345-10.345-4.036-2.404-11.176-1.672-15.937 1.672-4.76 3.24-5.277 7.837-1.241 10.345 3.932 2.3 11.072 1.672 15.833-1.672z"/><path fill="#FEFEFE" d="M575.735 256.104l-6.934 12.018c-2.173 4.075-6.312 7.21-12.728 7.21L545 275.123l3.208-10.868h2.173c1.138 0 1.966-.104 2.587-.418.621-.209.932-.627 1.449-1.254l4.14-6.583h17.281l-.103.104z"/></g></svg>`,
          logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 471"><defs/><g fill="none" fill-rule="evenodd"><rect width="750" height="471" rx="40"/><path fill="#D10429" d="M201.81 55h142.393c19.87 0 32.287 16.406 27.63 36.47L305.5 378.948c-4.656 20.064-24.629 36.47-44.498 36.47H118.61c-19.87 0-32.287-16.406-27.63-36.47L157.311 91.47C161.968 71.302 181.837 55 201.706 55h.104z"/><path fill="#022E64" d="M331.75 55h163.815c19.869 0 10.866 16.406 6.209 36.47L435.44 378.948c-4.657 20.064-3.208 36.47-23.077 36.47H248.549c-19.972 0-32.287-16.406-27.527-36.47L287.356 91.47C292.012 71.302 311.88 55 331.854 55h-.104z"/><path fill="#076F74" d="M489.815 55h142.394c19.869 0 32.287 16.406 27.63 36.47l-66.333 287.478c-4.657 20.064-24.63 36.47-44.498 36.47H406.614c-19.972 0-32.287-16.406-27.63-36.47L445.317 91.47C449.974 71.302 469.843 55 489.711 55h.104z"/><path fill="#FEFEFE" d="M465.905 326.015h13.453l3.829-13.063h-13.35l-3.932 13.063zm10.762-35.948l-4.657 15.466s5.071-2.613 7.865-3.449c2.794-.627 6.933-1.15 6.933-1.15l3.208-10.763h-13.452l.103-.104zm6.727-22.154l-4.45 14.839s4.967-2.3 7.761-3.03c2.794-.732 6.933-.941 6.933-.941l3.208-10.764h-13.349l-.103-.104zm29.7 0l-17.386 57.997h4.657l-3.622 12.017h-4.657l-1.138 3.658H474.39l1.139-3.658H442l3.311-11.076h3.415l17.593-58.938L469.837 256h16.868l-1.76 5.956s4.45-3.239 8.797-4.389c4.243-1.149 28.665-1.567 28.665-1.567l-3.622 11.808h-5.795l.103.105z"/><path fill="#FEFEFE" d="M520 256h18.006l.207 6.792c-.103 1.15.828 1.672 3.001 1.672h3.622l-3.311 11.182h-9.728c-8.382.627-11.59-3.03-11.383-7.106l-.31-12.436L520 256zm2.216 53.2h-17.178l2.897-9.927h19.662l2.794-9.092H511.04L514.351 279h53.812l-3.311 11.181h-18.11l-2.794 9.092h18.11l-3.002 9.927h-19.558l-3.518 4.18h7.968l1.966 12.54c.207 1.254.207 2.09.62 2.613.415.418 2.795.627 4.14.627h2.38l-3.725 12.226h-6.106c-.93 0-2.38-.104-4.346-.104-1.863-.21-3.104-1.254-4.346-1.881-1.139-.523-2.794-1.881-3.208-4.285l-1.863-12.54-8.9 12.331c-2.794 3.867-6.622 6.897-13.142 6.897H495l3.311-10.868h4.76c1.346 0 2.588-.522 3.52-1.045.93-.418 1.758-.836 2.586-2.194l13.04-18.497zM334.314 282h45.429l-3.312 10.972h-18.11l-2.793 9.3h18.627l-3.415 11.287h-18.524l-4.553 15.152c-.517 1.672 4.45 1.881 6.209 1.881l9.314-1.254-3.726 12.54h-20.904c-1.655 0-2.897-.209-4.76-.627-1.76-.418-2.587-1.254-3.311-2.403-.725-1.254-1.967-2.195-1.139-4.912l6.002-20.064H325l3.415-11.495h10.348l2.794-9.3H331.21l3.312-10.973-.207-.104zm31.387-19.835h18.627l-3.415 11.39h-25.457l-2.794 2.404c-1.242 1.15-1.552.732-3.105 1.568-1.448.731-4.45 2.194-8.382 2.194H333l3.311-10.972h2.484c2.07 0 3.519-.21 4.243-.627.828-.523 1.76-1.672 2.69-3.553l4.657-8.569h18.524l-3.208 6.27v-.105zm35.108 18.81s5.07-4.702 13.763-6.165c1.966-.418 14.384-.21 14.384-.21l1.863-6.27h-26.181l-3.83 12.75v-.105zm24.629 4.807h-25.975l-1.552 5.33h22.56c2.69-.314 3.208.104 3.415-.105l1.655-5.225h-.103zm-33.736-29.678h15.833l-2.276 8.047s4.967-4.076 8.485-5.539c3.519-1.254 11.383-2.508 11.383-2.508l25.664-.104-8.796 29.469c-1.449 5.016-3.208 8.255-4.243 9.823-.93 1.463-2.07 2.821-4.346 4.075-2.173 1.15-4.14 1.881-6.002 1.986-1.656.104-4.346.209-7.865.209h-24.732l-6.934 23.303c-.62 2.299-.931 3.448-.517 4.075.31.523 1.242 1.15 2.38 1.15l10.866-1.045-3.726 12.749h-12.21c-3.933 0-6.727-.105-8.693-.21-1.863-.208-3.83 0-5.175-1.044-1.138-1.045-2.897-2.404-2.794-3.762.104-1.254.621-3.344 1.45-6.27l22.248-74.404z"/><path fill="#FEFEFE" d="M437.84 303l-1.449 7.106c-.62 2.194-1.138 3.866-2.794 5.33-1.759 1.462-3.725 3.03-8.485 3.03l-8.796.418-.104 7.942c-.103 2.194.518 1.985.828 2.403.414.418.724.523 1.138.732l2.794-.21 8.383-.417-3.519 11.704h-9.624c-6.726 0-11.797-.21-13.35-1.463-1.655-1.045-1.862-2.3-1.862-4.598l.62-31.141h15.42l-.207 6.374h3.725c1.242 0 2.174-.104 2.691-.418.517-.313.828-.836 1.035-1.567l1.552-5.016h12.108l-.104-.209zM218.47 147c-.517 2.508-10.451 48.592-10.451 48.592-2.174 9.3-3.726 15.989-8.9 20.273-3.001 2.508-6.52 3.657-10.555 3.657-6.52 0-10.245-3.239-10.866-9.404l-.104-2.09s1.966-12.436 1.966-12.54c0 0 10.349-42.009 12.212-47.548.103-.313.103-.522.103-.627-20.18.21-23.801 0-24.008-.313-.104.418-.621 3.03-.621 3.03L156.69 197.37l-.932 3.97L154 214.508c0 3.866.724 7.105 2.277 9.718 4.863 8.569 18.627 9.823 26.388 9.823 10.038 0 19.455-2.195 25.767-6.061 11.073-6.584 13.97-16.929 16.454-26.02l1.242-4.703s10.659-43.576 12.522-49.219c.103-.314.103-.523.207-.627-14.695.104-18.938 0-20.387-.314V147zm59.03 86.623c-7.141-.105-9.728-.105-18.11.313l-.311-.627c.724-3.24 1.552-6.374 2.173-9.614l1.035-4.389c1.552-6.792 3.001-14.839 3.208-17.242.207-1.463.62-5.12-3.519-5.12-1.759 0-3.518.835-5.38 1.671-1.036 3.658-3.002 13.899-4.037 18.497-2.07 9.823-2.173 10.972-3.104 15.78l-.621.626c-7.347-.104-9.934-.104-18.42.314L230 233.1c1.449-5.852 2.794-11.704 4.14-17.556 3.518-15.78 4.45-21.84 5.38-29.887l.725-.418c8.279-1.149 10.245-1.463 19.248-3.239l.724.836-1.345 5.016c1.552-.94 3.001-1.881 4.553-2.613 4.243-2.09 8.9-2.717 11.487-2.717 3.932 0 8.279 1.15 10.038 5.748 1.656 4.075.62 9.091-1.656 19.019l-1.138 5.016c-2.277 11.077-2.69 13.062-3.933 20.586l-.827.627.103.105zm29.058.027c-4.346 0-7.14-.104-9.83 0-2.691 0-5.278.21-9.314.314l-.207-.314-.207-.418c1.138-4.18 1.656-5.643 2.277-7.106.517-1.463 1.034-2.926 2.07-7.21 1.241-5.539 2.069-9.405 2.586-12.854.621-3.24.932-6.06 1.346-9.3l.31-.209.31-.314c4.347-.627 7.038-1.045 9.832-1.463 2.794-.418 5.691-.94 10.141-1.776l.207.418.103.418-2.483 10.345c-.828 3.449-1.656 6.897-2.38 10.346-1.553 7.315-2.277 10.032-2.587 12.017-.414 1.881-.518 2.822-1.139 6.584l-.414.313-.414.314-.207-.105zm45.941-25.675c-.31 1.881-1.966 8.883-4.139 11.809-1.552 2.194-3.312 3.553-5.381 3.553-.621 0-4.14 0-4.243-5.33 0-2.612.517-5.33 1.138-8.255 1.863-8.465 4.14-15.466 9.831-15.466 4.45 0 4.76 5.225 2.794 13.69zm18.73.836c2.484-11.077.518-16.302-1.862-19.437-3.725-4.807-10.348-6.374-17.178-6.374-4.14 0-13.867.418-21.525 7.524-5.484 5.12-8.071 12.122-9.52 18.81-1.553 6.792-3.312 19.019 7.865 23.617 3.414 1.463 8.382 1.88 11.59 1.88 8.175 0 16.557-2.298 22.87-8.986 4.863-5.434 7.036-13.585 7.864-17.034h-.103zm174.433 26.08c-8.693-.104-11.176-.104-19.145.314l-.517-.627c2.173-8.256 4.346-16.616 6.313-24.976 2.483-10.868 3.104-15.466 3.932-21.84l.62-.523c8.59-1.254 10.97-1.567 19.973-3.239l.207.731c-1.656 6.897-3.208 13.69-4.864 20.482-3.311 14.317-4.45 21.632-5.691 29.156l-.828.627v-.105z"/><path fill="#FEFEFE" d="M533.16 209.374c-.414 1.776-2.07 8.882-4.243 11.808-1.449 2.09-4.967 3.449-6.933 3.449-.621 0-4.036 0-4.243-5.225 0-2.613.517-5.33 1.138-8.256 1.863-8.255 4.14-15.257 9.831-15.257 4.45 0 6.416 5.12 4.45 13.585v-.104zm17.075.836c2.483-11.077-7.658-.94-9.21-4.598-2.484-5.748-.932-17.243-10.866-21.109-3.829-1.568-12.832.418-20.49 7.524-5.381 5.016-8.072 12.017-9.52 18.705-1.553 6.688-3.312 19.02 7.76 23.304 3.52 1.567 6.727 1.985 9.935 1.776 11.177-.627 19.662-17.66 25.975-24.348 4.863-5.33 5.691 1.985 6.416-1.254zm-129.943 23.413c-7.14-.105-9.624-.105-18.006.313l-.31-.627c.724-3.24 1.552-6.374 2.276-9.614l.931-4.389c1.553-6.792 3.105-14.839 3.208-17.242.207-1.463.621-5.12-3.415-5.12-1.759 0-3.621.835-5.38 1.671-.932 3.658-3.002 13.899-4.037 18.497-1.966 9.823-2.173 10.972-3.104 15.78l-.621.626c-7.347-.104-9.934-.104-18.42.314L373 233.1c1.449-5.852 2.794-11.704 4.14-17.556 3.518-15.78 4.346-21.84 5.38-29.887l.621-.418c8.28-1.149 10.349-1.463 19.248-3.239l.725.836-1.242 5.016c1.449-.94 3.001-1.881 4.45-2.613 4.243-2.09 8.9-2.717 11.486-2.717 3.933 0 8.176 1.15 10.038 5.748 1.656 4.075.518 9.091-1.759 19.019l-1.138 5.016c-2.38 11.077-2.69 13.062-3.933 20.586l-.827.627.103.105zm62.001-86.519l-6.002.105c-15.523.209-21.732.104-24.215-.209-.207 1.15-.621 3.135-.621 3.135s-5.588 25.916-5.588 26.02c0 0-13.246 55.176-13.867 57.788 13.556-.209 19.041-.209 21.421.105.518-2.613 3.622-17.974 3.726-17.974 0 0 2.69-11.286 2.794-11.704 0 0 .827-1.15 1.655-1.672h1.242c11.694 0 24.836 0 35.185-7.628 7.037-5.225 11.797-13.063 13.97-22.468.517-2.299.931-5.016.931-7.837 0-3.658-.724-7.21-2.794-10.032-5.277-7.42-15.73-7.524-27.837-7.629zm7.761 27.066c-1.241 5.747-4.967 10.659-9.727 12.958-3.932 1.985-8.693 2.194-13.66 2.194h-3.208l.207-1.254s5.899-25.916 5.899-25.811l.207-1.359.103-1.045 2.38.21s12.211 1.044 12.418 1.044c4.76 1.881 6.83 6.688 5.381 13.063zm127.207 8.666l-.724-.836c-8.796 1.776-10.452 2.09-18.524 3.24l-.62.626c0 .105-.104.21-.104.418v-.104c-6.002 14.107-5.899 11.077-10.762 22.154 0-.523 0-.836-.104-1.359l-1.242-24.035-.724-.836c-9.314 1.777-9.52 2.09-18.006 3.24l-.621.627c-.104.313-.104.627-.104.94l.104.105c1.035 5.538.828 4.284 1.863 12.958.517 4.284 1.138 8.569 1.655 12.749.828 7.106 1.346 10.554 2.38 21.318-5.795 9.614-7.14 13.271-12.728 21.735l.31.836c8.383-.313 10.245-.313 16.454-.313l1.346-1.568c4.656-10.136 40.255-71.79 40.255-71.79l-.104-.105zm-302.717 6.922c4.76-3.344 5.38-7.942 1.345-10.345-4.036-2.404-11.176-1.672-15.937 1.672-4.76 3.24-5.277 7.837-1.241 10.345 3.932 2.3 11.072 1.672 15.833-1.672z"/><path fill="#FEFEFE" d="M575.735 256.104l-6.934 12.018c-2.173 4.075-6.312 7.21-12.728 7.21L545 275.123l3.208-10.868h2.173c1.138 0 1.966-.104 2.587-.418.621-.209.932-.627 1.449-1.254l4.14-6.583h17.281l-.103.104z"/></g></svg>`
        }
      },
      {
        mask: "0000 0000 0000 0000",
        card: {
          id: "unknown",
          name: "",
          color: "grey",
          icon: ``,
          logo: ``
        }
      }
    ],
    dispatch: function(appended, dynamicMasked) {
      const number = (dynamicMasked.value + appended).replace(/\D/g, "");
      for (let i = 0; i < dynamicMasked.compiledMasks.length; i++) {
        const re = new RegExp(dynamicMasked.compiledMasks[i].regex);
        if (number.match(re) != null) {
          return dynamicMasked.compiledMasks[i];
        }
      }
    }
  };
  const creditcardMaskNumberOnAccept = (inputMask) => {
    const currentMask = inputMask.masked.currentMask;
    if (currentMask && "card" in currentMask) {
      creditcardIcon.value = currentMask.card.icon;
      creditcardLogo.value = currentMask.card.logo;
      creditcardColor.value = currentMask.card.color;
    }
  };
  return {
    creditcardIcon,
    creditcardLogo,
    creditcardColor,
    creditcardMaskDate,
    creditcardMaskCVC,
    creditcardMaskNumber,
    creditcardMaskNumberOnAccept
  };
}
var SaasBillingApp_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "saas-billing-wrapper" };
const _hoisted_2$1 = { class: "plans-wrapper" };
const _hoisted_3 = { class: "left" };
const _hoisted_4 = { class: "inner-wrap" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h3", null, "Select a Plan", -1);
const _hoisted_6 = { class: "plans" };
const _hoisted_7 = ["checked", "onKeydown", "onClick"];
const _hoisted_8 = { class: "plan-inner" };
const _hoisted_9 = ["src"];
const _hoisted_10 = { class: "meta" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "checkmark" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check"
  })
], -1);
const _hoisted_12 = { class: "right" };
const _hoisted_13 = { class: "plan-details" };
const _hoisted_14 = {
  key: 0,
  class: "plan-details-inner"
};
const _hoisted_15 = { class: "plan-description" };
const _hoisted_16 = { class: "left" };
const _hoisted_17 = ["src"];
const _hoisted_18 = ["src"];
const _hoisted_19 = { class: "right" };
const _hoisted_20 = { class: "plan-pricing" };
const _hoisted_21 = /* @__PURE__ */ createTextVNode(" per month ");
const _hoisted_22 = { class: "plan-moto" };
const _hoisted_23 = { class: "plan-summary" };
const _hoisted_24 = { class: "plan-features" };
const _hoisted_25 = { class: "columns" };
const _hoisted_26 = { class: "column is-6" };
const _hoisted_27 = { class: "content" };
const _hoisted_28 = { class: "column is-6" };
const _hoisted_29 = { class: "content" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("li", null, "Live updates", -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("li", null, "Payments", -1);
const _hoisted_32 = { class: "billing-options-wrapper" };
const _hoisted_33 = { class: "left" };
const _hoisted_34 = { class: "option-block" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("div", { class: "block-header" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Team Seats"),
  /* @__PURE__ */ createBaseVNode("span", null, "3 remaining")
], -1);
const _hoisted_36 = { class: "block-body is-seats" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("button", { class: "add-seat" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:plus"
  })
], -1);
const _hoisted_38 = { class: "option-block" };
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("div", { class: "block-header" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Options")
], -1);
const _hoisted_40 = { class: "block-body" };
const _hoisted_41 = { class: "option-block" };
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("div", { class: "block-header" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Billing Cycle"),
  /* @__PURE__ */ createBaseVNode("a", null, "My Invoices")
], -1);
const _hoisted_43 = { class: "block-body" };
const _hoisted_44 = { class: "right" };
const _hoisted_45 = { class: "payment-form" };
const _hoisted_46 = { class: "form-header" };
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("h3", null, "Payment information", -1);
const _hoisted_48 = ["onKeydown"];
const _hoisted_49 = ["innerHTML"];
const _hoisted_50 = { class: "form-container" };
const _hoisted_51 = { class: "columns is-multiline" };
const _hoisted_52 = { class: "column is-12" };
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("label", { for: "name" }, "Name", -1);
const _hoisted_54 = { class: "column is-12" };
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("label", { for: "cardnumber" }, "Card Number", -1);
const _hoisted_56 = ["innerHTML"];
const _hoisted_57 = { class: "column is-6" };
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("label", { for: "expirationdate" }, "Expiration", -1);
const _hoisted_59 = { class: "column is-6" };
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("label", { for: "securitycode" }, "CVC", -1);
const _hoisted_61 = { class: "column is-12" };
const _hoisted_62 = { class: "button-wrap" };
const _hoisted_63 = /* @__PURE__ */ createTextVNode(" Save Payment Method ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const {
      creditcardIcon,
      creditcardLogo,
      creditcardColor,
      creditcardMaskDate,
      creditcardMaskCVC,
      creditcardMaskNumber,
      creditcardMaskNumberOnAccept
    } = useCreditcardMask();
    const selectedPlanId = ref("starter");
    const isCardFlipped = ref(false);
    const invoces = ref(false);
    const warnBilling = ref(false);
    const creditcardInput = reactive({
      number: "",
      name: "",
      cvc: "",
      expiry: ""
    });
    const selectedPlan = computed(() => {
      return plans.find((plan) => plan.id === selectedPlanId.value);
    });
    const testCards = [
      "4000056655665556",
      "5200828282828210",
      "371449635398431",
      "6011000990139424",
      "30569309025904",
      "3566002020360505",
      "6200000000000005",
      "6759649826438453"
    ];
    const randomCard = () => {
      const randomNumber = Math.floor(Math.random() * testCards.length);
      if (creditcardInput.number.replace(/\s/g, "") !== testCards[randomNumber]) {
        creditcardInput.number = testCards[randomNumber];
      }
    };
    const selected = ref("value_2");
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$5;
      const _component_UserPopoverContent = _sfc_main$6;
      const _component_Tippy = resolveComponent("Tippy");
      const _component_VSwitchBlock = _sfc_main$7;
      const _component_VRadio = _sfc_main$2;
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$8;
      const _component_VCreditCard = _sfc_main$3;
      const _component_VIMaskInput = _sfc_main$4;
      const _component_VButton = _sfc_main$9;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              _hoisted_5,
              createBaseVNode("div", _hoisted_6, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(plans), (plan) => {
                  return openBlock(), createElementBlock("div", {
                    key: plan.id,
                    class: "plan"
                  }, [
                    createBaseVNode("input", {
                      type: "radio",
                      name: "plan_selection",
                      checked: selectedPlanId.value === plan.id,
                      tabindex: "0",
                      onKeydown: withKeys(withModifiers(($event) => selectedPlanId.value = plan.id, ["prevent"]), ["space"]),
                      onClick: ($event) => selectedPlanId.value = plan.id
                    }, null, 40, _hoisted_7),
                    createBaseVNode("div", _hoisted_8, [
                      createBaseVNode("img", {
                        src: plan.icon,
                        alt: ""
                      }, null, 8, _hoisted_9),
                      createBaseVNode("div", _hoisted_10, [
                        createBaseVNode("span", null, toDisplayString(plan.name), 1),
                        createBaseVNode("span", null, toDisplayString(plan.slogan), 1)
                      ]),
                      _hoisted_11
                    ])
                  ]);
                }), 128))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_12, [
            createBaseVNode("div", _hoisted_13, [
              unref(selectedPlan) ? (openBlock(), createElementBlock("div", _hoisted_14, [
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("div", _hoisted_16, [
                    createBaseVNode("img", {
                      class: "light-image",
                      src: unref(selectedPlan).logo.light,
                      alt: ""
                    }, null, 8, _hoisted_17),
                    createBaseVNode("img", {
                      class: "dark-image",
                      src: unref(selectedPlan).logo.dark,
                      alt: ""
                    }, null, 8, _hoisted_18)
                  ]),
                  createBaseVNode("div", _hoisted_19, [
                    createBaseVNode("div", _hoisted_20, [
                      createBaseVNode("span", null, [
                        createBaseVNode("strong", null, toDisplayString(unref(selectedPlan).costs.monthly), 1),
                        _hoisted_21
                      ]),
                      createBaseVNode("span", null, " Billed " + toDisplayString(unref(selectedPlan).costs.yearly) + " yearly ", 1)
                    ]),
                    createBaseVNode("div", _hoisted_22, [
                      createBaseVNode("p", null, toDisplayString(unref(selectedPlan).intro), 1)
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_23, [
                  createBaseVNode("p", null, toDisplayString(unref(selectedPlan).summary), 1),
                  createBaseVNode("div", _hoisted_24, [
                    createBaseVNode("div", _hoisted_25, [
                      createBaseVNode("div", _hoisted_26, [
                        createBaseVNode("div", _hoisted_27, [
                          createBaseVNode("ul", null, [
                            createBaseVNode("li", null, toDisplayString(unref(selectedPlan).limits.seats) + " seats", 1),
                            createBaseVNode("li", null, toDisplayString(unref(selectedPlan).limits.projects) + " projects", 1),
                            createBaseVNode("li", null, toDisplayString(unref(selectedPlan).limits.storage) + " storage", 1)
                          ])
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_28, [
                        createBaseVNode("div", _hoisted_29, [
                          createBaseVNode("ul", null, [
                            _hoisted_30,
                            _hoisted_31,
                            createBaseVNode("li", null, toDisplayString(unref(selectedPlan).limits.addons) + " Addons", 1)
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_32, [
          createBaseVNode("div", _hoisted_33, [
            createBaseVNode("div", _hoisted_34, [
              _hoisted_35,
              createBaseVNode("div", _hoisted_36, [
                createVNode(_component_Tippy, {
                  class: "has-help-cursor",
                  interactive: "",
                  placement: "bottom-start"
                }, {
                  content: withCtx(() => [
                    createVNode(_component_UserPopoverContent, {
                      user: unref(popovers).user8
                    }, null, 8, ["user"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_VAvatar, { picture: "/images/avatars/svg/vuero-1.svg" })
                  ]),
                  _: 1
                }),
                createVNode(_component_Tippy, {
                  class: "has-help-cursor",
                  interactive: "",
                  placement: "bottom-start"
                }, {
                  content: withCtx(() => [
                    createVNode(_component_UserPopoverContent, {
                      user: unref(popovers).user122
                    }, null, 8, ["user"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_VAvatar, {
                      color: "warning",
                      initials: "BT"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_Tippy, {
                  class: "has-help-cursor",
                  interactive: "",
                  placement: "bottom"
                }, {
                  content: withCtx(() => [
                    createVNode(_component_UserPopoverContent, {
                      user: unref(popovers).user18
                    }, null, 8, ["user"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_VAvatar, { picture: "https://vuero.cssninja.io/demo/avatars/18.jpg" })
                  ]),
                  _: 1
                }),
                createVNode(_component_Tippy, {
                  class: "has-help-cursor",
                  interactive: "",
                  placement: "bottom"
                }, {
                  content: withCtx(() => [
                    createVNode(_component_UserPopoverContent, {
                      user: unref(popovers).user123
                    }, null, 8, ["user"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_VAvatar, {
                      color: "info",
                      initials: "JD"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_Tippy, {
                  class: "has-help-cursor",
                  interactive: "",
                  placement: "bottom"
                }, {
                  content: withCtx(() => [
                    createVNode(_component_UserPopoverContent, {
                      user: unref(popovers).user7
                    }, null, 8, ["user"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_VAvatar, { picture: "https://vuero.cssninja.io/demo/avatars/7.jpg" })
                  ]),
                  _: 1
                }),
                _hoisted_37
              ])
            ]),
            createBaseVNode("div", _hoisted_38, [
              _hoisted_39,
              createBaseVNode("div", _hoisted_40, [
                createVNode(_component_VSwitchBlock, {
                  modelValue: invoces.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => invoces.value = $event),
                  label: "Send new invoices to my inbox",
                  color: "primary"
                }, null, 8, ["modelValue"]),
                createVNode(_component_VSwitchBlock, {
                  modelValue: warnBilling.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => warnBilling.value = $event),
                  label: "Warn me before the end of the billing period",
                  color: "primary"
                }, null, 8, ["modelValue"])
              ])
            ]),
            createBaseVNode("div", _hoisted_41, [
              _hoisted_42,
              createBaseVNode("div", _hoisted_43, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VRadio, {
                          modelValue: selected.value,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selected.value = $event),
                          value: "value_1",
                          label: "Monthly",
                          name: "cycle_radio",
                          color: "primary"
                        }, null, 8, ["modelValue"]),
                        createVNode(_component_VRadio, {
                          modelValue: selected.value,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => selected.value = $event),
                          value: "value_2",
                          label: "Yearly",
                          name: "cycle_radio",
                          color: "primary"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_44, [
            createBaseVNode("div", _hoisted_45, [
              createBaseVNode("div", _hoisted_46, [
                _hoisted_47,
                createBaseVNode("span", {
                  tabindex: "0",
                  onKeydown: withKeys(withModifiers(randomCard, ["prevent"]), ["space"]),
                  onClick: randomCard
                }, " Randomize ", 40, _hoisted_48)
              ]),
              createVNode(_component_VCreditCard, {
                color: unref(creditcardColor),
                flipped: isCardFlipped.value,
                name: unref(creditcardInput).name,
                number: unref(creditcardInput).number,
                cvc: unref(creditcardInput).cvc,
                expiry: unref(creditcardInput).expiry,
                onFlip: _cache[4] || (_cache[4] = ($event) => isCardFlipped.value = !isCardFlipped.value)
              }, {
                default: withCtx(() => [
                  unref(creditcardLogo) ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    id: "ccsingle",
                    innerHTML: unref(creditcardLogo)
                  }, null, 8, _hoisted_49)) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["color", "flipped", "name", "number", "cvc", "expiry"]),
              createBaseVNode("div", _hoisted_50, [
                createBaseVNode("div", _hoisted_51, [
                  createBaseVNode("div", _hoisted_52, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_53,
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("input", {
                              id: "name",
                              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(creditcardInput).name = $event),
                              autocomplete: "cc-given-name",
                              class: "input",
                              maxlength: "20",
                              type: "text",
                              placeholder: "The name on the card",
                              onFocus: _cache[6] || (_cache[6] = ($event) => isCardFlipped.value = false)
                            }, null, 544), [
                              [vModelText, unref(creditcardInput).name]
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_54, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_55,
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_VIMaskInput, {
                              id: "cardnumber",
                              modelValue: unref(creditcardInput).number,
                              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(creditcardInput).number = $event),
                              autocomplete: "cc-number",
                              class: "input",
                              options: unref(creditcardMaskNumber),
                              placeholder: "Credit card number",
                              onFocus: _cache[8] || (_cache[8] = ($event) => isCardFlipped.value = false),
                              onAccept: unref(creditcardMaskNumberOnAccept)
                            }, null, 8, ["modelValue", "options", "onAccept"]),
                            createBaseVNode("div", {
                              id: "creditcardIcon",
                              class: "creditcardIcon",
                              innerHTML: unref(creditcardIcon)
                            }, null, 8, _hoisted_56)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_57, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_58,
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_VIMaskInput, {
                              id: "expirationdate",
                              modelValue: unref(creditcardInput).expiry,
                              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(creditcardInput).expiry = $event),
                              autocomplete: "cc-exp",
                              class: "input",
                              options: unref(creditcardMaskDate),
                              placeholder: "MM / YY",
                              onFocus: _cache[10] || (_cache[10] = ($event) => isCardFlipped.value = false)
                            }, null, 8, ["modelValue", "options"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_59, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_60,
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_VIMaskInput, {
                              id: "securitycode",
                              modelValue: unref(creditcardInput).cvc,
                              "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(creditcardInput).cvc = $event),
                              autocomplete: "cc-csc",
                              class: "input",
                              options: unref(creditcardMaskCVC),
                              placeholder: "3 digits code",
                              onFocus: _cache[12] || (_cache[12] = ($event) => isCardFlipped.value = true)
                            }, null, 8, ["modelValue", "options"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_61, [
                    createBaseVNode("div", _hoisted_62, [
                      createVNode(_component_VButton, {
                        color: "primary",
                        raised: "",
                        fullwidth: ""
                      }, {
                        default: withCtx(() => [
                          _hoisted_63
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "tabs-wrapper is-triple-slider is-squared is-inverted" };
const _hoisted_2 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Saas Billing");
    useHead({
      title: "Saas Billing - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_SaasBillingApp = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_SaasBillingApp)
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
