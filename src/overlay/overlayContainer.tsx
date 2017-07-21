import * as React from "react";
import * as PropTypes from "prop-types";


export class OverlayContainer extends React.Component<React.HTMLProps<HTMLDivElement>, {}> {
    public static childContextTypes = { target: PropTypes.any };
    private target: HTMLDivElement | null;

    public getChildContext() {
        return {
            target: this.target
        };
    }

    public render() {
        return (
            <div ref={a => this.target = a} {...this.props}>
                {this.props.children}
            </div>
        );
    }
}
