import * as React from "react";
import * as PropTypes from "prop-types";


export class OverlayContainer extends React.Component<React.HTMLProps<HTMLDivElement>, void> {
    public static childContextTypes = { target: PropTypes.any };
    private target: Element;

    public getChildContext() {
        return {
            target: this.target
        };
    }

    public render(): React.ReactElement<React.HTMLProps<HTMLDivElement>> {
        return (
            <div ref={a => this.target = a} {...this.props}>
                {this.props.children}
            </div>
        );
    }
}
