"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDom = require("react-dom");
var elementPosition_1 = require("./elementPosition");
var Overlay = (function (_super) {
    __extends(Overlay, _super);
    function Overlay(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Rerender popup to get new top and left
         */
        _this.resizeHandler = function () { return _this.renderPopup(); };
        /**
         * Close popup on click outside of popup and container
         */
        _this.closeOnClickHandler = function (e) {
            if (e.target && (e.target["nodeType"]) === 1) {
                var targetElement = e.target;
                if (!_this.isDOMParent(targetElement, _this.host)) {
                    if (_this.isDOMParent(targetElement, _this.target)) {
                        if (_this.props.onClickOutside) {
                            _this.props.onClickOutside(true);
                        }
                    }
                    if (_this.props.onClickOutside) {
                        _this.props.onClickOutside(false);
                    }
                    window.removeEventListener("mousedown", _this.closeOnClickHandler);
                }
            }
        };
        _this.state = {
            top: 0,
            left: 0
        };
        return _this;
    }
    Overlay.prototype.componentDidMount = function () {
        this.renderPopup();
    };
    Overlay.prototype.componentDidUpdate = function () {
        this.renderPopup();
    };
    Overlay.prototype.componentWillUnmount = function () {
        this.removePopup();
    };
    Overlay.prototype.render = function () {
        return null;
    };
    /**
     * Gets the value indicating whether parent is direct or indirect parent node of the specified element.
     */
    Overlay.prototype.isDOMParent = function (element, parent) {
        if (!element || !parent) {
            return false;
        }
        if (element === parent) {
            return true;
        }
        if (!element.parentElement) {
            return false;
        }
        return this.isDOMParent(element.parentElement, parent);
    };
    Overlay.prototype.renderPopup = function () {
        var _this = this;
        var renderChildren = function (left, top) { return _this.props.children(left, top); };
        if (this.props.visible !== false) {
            if (!this.wrapper) {
                this.wrapper = document.createElement("div");
                document.body.appendChild(this.wrapper);
                window.addEventListener("resize", this.resizeHandler);
                if (this.props.onClickOutside) {
                    window.addEventListener("mousedown", this.closeOnClickHandler);
                }
            }
            ReactDom.render(renderChildren(this.state.left, this.state.top), this.wrapper);
            this.host = this.wrapper.children[0];
            // props.target is set by OverlayContainer
            this.target = ReactDom.findDOMNode(this.props["target"]);
            var _a = elementPosition_1.alignContainer(this.host, this.target, this.props.alignment), top_1 = _a.top, left = _a.left;
            if (this.state.top !== top_1 || this.state.left !== left) {
                this.setState({ top: top_1, left: left });
            }
        }
        else if (this.props.visible === false && this.wrapper) {
            this.removePopup();
        }
    };
    Overlay.prototype.removePopup = function () {
        window.removeEventListener("resize", this.resizeHandler);
        window.removeEventListener("mousedown", this.closeOnClickHandler);
        if (this.wrapper) {
            document.body.removeChild(this.wrapper);
            ReactDom.unmountComponentAtNode(this.wrapper);
            this.wrapper = null;
        }
    };
    return Overlay;
}(React.Component));
exports.Overlay = Overlay;
//# sourceMappingURL=overlay.js.map