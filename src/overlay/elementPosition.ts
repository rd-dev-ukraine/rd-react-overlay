import { Alignment, Point, position, Rect, AlignType } from "./positioning";

const defaultAlignment: Alignment = {
    target: {
        horizontal: AlignType.Left,
        vertical: AlignType.Bottom
    },
    overlay: {
        horizontal: AlignType.Left,
        vertical: AlignType.Top
    }
};

export function alignContainer(
    element: HTMLElement,
    target: HTMLElement,
    alignment: Alignment = defaultAlignment
): {top: number, left: number} {
    const elementRect = rectFromElement(element);
    const targetRect = target ? rectFromElement(target) : rectFromWindow();

    if (!elementRect || !targetRect) {
        return {top: 0, left: 0};
    }

    const newElementRect = position(elementRect, targetRect, alignment);

    const offsetLeft = element.offsetLeft + newElementRect.left - elementRect.left;
    const offsetTop = element.offsetTop + newElementRect.top - elementRect.top;

    return {top: offsetTop, left: offsetLeft};
}

function rectFromElement(element: HTMLElement): Rect {
    if (!element) {
        throw new Error("Element is undefined.");
    }

    let position: Point = {
        left: 0,
        top: 0
    };

    let current = element;

    do {
        position.left += current.offsetLeft;
        position.top += current.offsetTop;
        current = current.offsetParent as HTMLElement;
    }
    while (current);

    return {
        left: position.left,
        top: position.top,
        width: element.offsetWidth,
        height: element.offsetHeight
    };
}

function rectFromWindow(): Rect {
    return {
        left: window.scrollX,
        top: window.scrollY,
        width: window.innerWidth,
        height: window.innerHeight
    };
}