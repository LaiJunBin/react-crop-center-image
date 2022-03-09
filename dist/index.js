"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _excluded = ["width", "height", "src", "axis", "autofill", "onDrawEnd"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CropImage(props, ref) {
  var width = props.width,
      height = props.height,
      src = props.src,
      _props$axis = props.axis,
      axis = _props$axis === void 0 ? 'x' : _props$axis,
      _props$autofill = props.autofill,
      autofill = _props$autofill === void 0 ? true : _props$autofill,
      _props$onDrawEnd = props.onDrawEnd,
      onDrawEnd = _props$onDrawEnd === void 0 ? function (ctx) {} : _props$onDrawEnd,
      rest = _objectWithoutProperties(props, _excluded);

  if (axis !== 'x' && axis !== 'y') {
    throw new Error("The axis must be 'x' or 'y'!");
  }

  if (!ref) {
    ref = (0, _react.useRef)();
  }

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      image = _useState2[0],
      setImage = _useState2[1];

  var render = function render() {
    var ctx = ref.current.getContext('2d');

    if (autofill) {
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, width, height);
    }

    var params = [];

    if (axis === 'x') {
      var scale = image.width / width;
      params = [0, image.height / 2 - height * scale / 2, image.width, height * scale, 0, 0, width, height];
    } else {
      var _scale = image.height / height;

      params = [image.width / 2 - width * _scale / 2, 0, width * _scale, image.height, 0, 0, width, height];
    }

    ctx.drawImage.apply(ctx, [image].concat(_toConsumableArray(params)));
    onDrawEnd(ctx);
  };

  (0, _react.useEffect)(function () {
    if (ref.current) {
      if (!src) {
        return;
      }

      if ((image === null || image === void 0 ? void 0 : image.src) === src) {
        return render();
      }

      var img = new Image();
      img.src = src;

      img.onload = function () {
        return setImage(img);
      };
    }
  }, [ref, width, height, src, axis, autofill]);
  (0, _react.useEffect)(function () {
    if (image) {
      render();
    }
  }, [image]);
  return /*#__PURE__*/_react["default"].createElement("canvas", _extends({
    ref: ref,
    width: width,
    height: height
  }, rest));
}

var _default = /*#__PURE__*/(0, _react.forwardRef)(CropImage);

exports["default"] = _default;