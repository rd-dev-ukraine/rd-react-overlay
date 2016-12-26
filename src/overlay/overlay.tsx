import * as React from 'react';
import * as ReactDom from 'react-dom';
import { alignContainer } from './elementPosition';
import { Alignment } from './positioning';

type positionProperty = 'absolute' | 'fixed' | 'relative';

interface OverlayProps {
    target?: Element;
    children?: (top: number, left: number) => React.DOMElement<{style: {position: positionProperty, top: number, left: number}}, any>;
    onClickOutside?: (clickedOnContainer: boolean) => void;
    alignment?: Alignment;
    visible: boolean;
}

interface OverlayState {
    top: number;
    left: number;
}

export class Overlay extends React.Component<OverlayProps, OverlayState> {
    wrapper: HTMLElement;
    host: HTMLElement;
    target: HTMLElement;

    constructor(props) {
        super(props);

        this.state = {
            top: 0,
            left: 0
        };
    }

    /**
     * Rerender popup to get new top and left
     */
    private resizeHandler = () => this.renderPopup();

    /**
     * Close popup on click outside of popup and container
     */
    private closeOnClickHandler = (e: MouseEvent) => {
        if (e.target && e.target['nodeType'] === 1) {
            const targetElement = e.target as Element;
            if (!this.isDOMParent(targetElement, this.host)) {
                if (this.isDOMParent(targetElement, this.target)) {
                    this.props.onClickOutside(true);
                }
                this.props.onClickOutside(false);
                window.removeEventListener('mousedown', this.closeOnClickHandler);
            }
        }
    };

    /**
     * Gets the value indicating whether @{parent} is direct or indirect parent node of the specified @{element}.
     */
    private isDOMParent(element: Element, parent: Element): boolean {
        if (element !== null && !element) {
            throw new Error('Element is required.');
        }
        if (parent !== null && !parent) {
            throw new Error('Parent is required.');
        }

        if (element === parent) {
            return true;
        }

        if (!element.parentElement) {
            return false;
        }

        return this.isDOMParent(element.parentElement, parent);
    }

    private renderPopup(): void {
        if (this.props.visible !== false) {
            if (!this.wrapper) {
                this.wrapper = document.createElement('div');
                document.body.appendChild(this.wrapper);
                window.addEventListener('resize', this.resizeHandler);

                if (this.props.onClickOutside) {
                    window.addEventListener('mousedown', this.closeOnClickHandler);
                }
            }

            ReactDom.render(
                this.props.children(this.state.left, this.state.top),
                this.wrapper
            );

            this.host = this.wrapper.children[0] as HTMLElement;
            this.target = ReactDom.findDOMNode(this.props.target) as HTMLElement;

            const {top, left} = alignContainer(this.host, this.target, this.props.alignment);

            if (this.state.top !== top || this.state.left !== left) {
                this.setState({top, left});
            }
        } else if (this.props.visible === false && this.wrapper) {
            window.removeEventListener('resize', this.resizeHandler);
            window.removeEventListener('mousedown', this.closeOnClickHandler);

            document.body.removeChild(this.wrapper);
            ReactDom.unmountComponentAtNode(this.wrapper);
            this.wrapper = null;
        }
    }

    componentDidMount() {
        this.renderPopup();
    }

    componentDidUpdate() {
        this.renderPopup();
    }

    render() {
        return <noscript></noscript>
    }
}