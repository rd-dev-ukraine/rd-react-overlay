/// <reference types="react" />
import * as React from "react";
import { Alignment } from "./positioning";
export declare type PositionProperty = "absolute" | "fixed" | "relative";
export interface OverlayProps {
    target?: Element;
    children: (top: number, left: number) => React.DOMElement<{
        style: {
            position: PositionProperty;
            top: number;
            left: number;
        };
    }, any>;
    onClickOutside?: (clickedOnContainer: boolean) => void;
    alignment?: Alignment;
    visible: boolean;
}
export interface OverlayState {
    top: number;
    left: number;
}
export declare class Overlay extends React.Component<OverlayProps, OverlayState> {
    wrapper: HTMLElement | null;
    host: HTMLElement | null;
    target: HTMLElement | null;
    constructor(props: OverlayProps);
    /**
     * Rerender popup to get new top and left
     */
    private resizeHandler;
    /**
     * Close popup on click outside of popup and container
     */
    private closeOnClickHandler;
    /**
     * Gets the value indicating whether parent is direct or indirect parent node of the specified element.
     */
    private isDOMParent(element, parent);
    private renderPopup();
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
