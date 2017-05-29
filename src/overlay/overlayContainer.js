"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropTypes = require("prop-types");
var OverlayContainer = (function (_super) {
    __extends(OverlayContainer, _super);
    function OverlayContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OverlayContainer.prototype.getChildContext = function () {
        return {
            target: this.target
        };
    };
    OverlayContainer.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", __assign({ ref: function (a) { return _this.target = a; } }, this.props), this.props.children));
    };
    return OverlayContainer;
}(React.Component));
OverlayContainer.childContextTypes = { target: PropTypes.any };
exports.OverlayContainer = OverlayContainer;
//# sourceMappingURL=overlayContainer.js.map