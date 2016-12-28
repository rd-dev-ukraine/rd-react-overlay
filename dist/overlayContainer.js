"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require("react");
var overlay_1 = require("./overlay");
var OverlayContainer = (function (_super) {
    __extends(OverlayContainer, _super);
    function OverlayContainer() {
        return _super.apply(this, arguments) || this;
    }
    OverlayContainer.prototype.render = function () {
        var children = React.Children.map(this.props.children, function (element) { return React.cloneElement(element); });
        var overlayRef = children.filter(function (item) { return item.type === overlay_1.Overlay; })[0];
        var content = children.filter(function (item) { return item.type !== overlay_1.Overlay; });
        return (React.createElement("div", __assign({ ref: "target" }, this.props),
            content,
            React.cloneElement(overlayRef, { target: this.refs["target"] })));
    };
    return OverlayContainer;
}(React.Component));
exports.OverlayContainer = OverlayContainer;
//# sourceMappingURL=overlayContainer.js.map