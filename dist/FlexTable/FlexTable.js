"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexTable = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _helpers = require("../helpers");

var FlexTable = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(FlexTable, _React$Component);

  function FlexTable() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FlexTable.prototype;

  _proto.render = function render() {
    var className = this.props.className;
    var classNames = (0, _classnames["default"])({
      'FlexTable': true
    }, className);
    return /*#__PURE__*/_react["default"].createElement(this.props.component, (0, _extends2["default"])({
      className: classNames
    }, (0, _helpers.excludeProps)(this)));
  };

  return FlexTable;
}(_react["default"].Component);

exports.FlexTable = FlexTable;
FlexTable.propTypes = {
  component: _propTypes["default"].oneOfType([_propTypes["default"].string.isRequired, _propTypes["default"].func.isRequired, _propTypes["default"].object.isRequired]).isRequired,
  className: _propTypes["default"].oneOfType([_propTypes["default"].string.isRequired, _propTypes["default"].object.isRequired, _propTypes["default"].array.isRequired])
};
FlexTable.defaultProps = {
  component: 'div'
};