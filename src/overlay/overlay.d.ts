/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import { Alignment } from "./positioning";
export interface OverlayProps {
    onClickOutside?: (clickedOnContainer: boolean) => void;
    alignment?: Alignment;
    visible: boolean;
}
export interface OverlayState {
    top: number;
    left: number;
}
export interface OverlayContext {
    target: React.ReactInstance;
}
export declare class Overlay extends React.Component<OverlayProps, OverlayState> {
    static contextTypes: {
        target: PropTypes.Requireable<any>;
    };
    wrapper: HTMLElement | null;
    host: HTMLElement | null;
    target: HTMLElement | null;
    context: OverlayContext;
    constructor(props: OverlayProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): null;
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
    private removePopup();
}
