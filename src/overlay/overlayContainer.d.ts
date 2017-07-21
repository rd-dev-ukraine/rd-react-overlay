/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
export declare class OverlayContainer extends React.Component<React.HTMLProps<HTMLDivElement>, {}> {
    static childContextTypes: {
        target: PropTypes.Requireable<any>;
    };
    private target;
    getChildContext(): {
        target: HTMLDivElement | null;
    };
    render(): JSX.Element;
}
