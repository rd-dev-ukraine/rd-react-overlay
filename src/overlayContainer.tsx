import * as React from 'react';
import { Overlay } from './overlay';

export class OverlayContainer extends React.Component<void, void> {
    render() {
        const children = React.Children.map(
            this.props.children,
            (element: React.ReactElement<any>) => React.cloneElement(element)
        );
        const overlayRef = children.filter((item: React.ReactElement<{target: React.ReactInstance}>) => item.type === Overlay)[0];
        const content = children.filter((item: React.ReactElement<{}>) => item.type !== Overlay);

        return (
            <div ref="target">
                {content}
                {React.cloneElement(overlayRef, {target: this.refs['target']})}
            </div>
        )
    }
}
