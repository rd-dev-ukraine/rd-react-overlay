"use strict";
var positioning_1 = require("./positioning");
var defaultAlignment = {
    target: {
        horizontal: 1 /* Left */,
        vertical: 3 /* Bottom */
    },
    overlay: {
        horizontal: 1 /* Left */,
        vertical: 1 /* Top */
    }
};
function alignContainer(element, target, alignment) {
    if (alignment === void 0) { alignment = defaultAlignment; }
    var elementRect = rectFromElement(element);
    var targetRect = target ? rectFromElement(target) : rectFromWindow();
    if (!elementRect || !targetRect) {
        return { top: 0, left: 0 };
    }
    var newElementRect = positioning_1.position(elementRect, targetRect, alignment);
    var offsetLeft = element.offsetLeft + newElementRect.left - elementRect.left;
    var offsetTop = element.offsetTop + newElementRect.top - elementRect.top;
    return { top: offsetTop, left: offsetLeft };
}
exports.alignContainer = alignContainer;
function rectFromElement(element) {
    if (!element) {
        throw new Error("Element is undefined.");
    }
    var position = {
        left: 0,
        top: 0
    };
    var current = element;
    do {
        position.left += current.offsetLeft;
        position.top += current.offsetTop;
        current = current.offsetParent;
    } while (current);
    return {
        left: position.left,
        top: position.top,
        width: element.offsetWidth,
        height: element.offsetHeight
    };
}
function rectFromWindow() {
    return {
        left: window.scrollX,
        top: window.scrollY,
        width: window.innerWidth,
        height: window.innerHeight
    };
}
//# sourceMappingURL=elementPosition.js.map