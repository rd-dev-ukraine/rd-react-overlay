import * as React from "react";

import { OverlayContainer, Overlay, Alignment, AlignType } from "./overlay";


export interface AppState {
    visible: boolean;
    alignment?: Alignment;
}

export default class App extends React.Component<{}, AppState> {

    constructor(props: {}) {
        super(props);

        this.state = {
            visible: false,
            alignment: {
                target: {
                    horizontal: AlignType.Left,
                    vertical: AlignType.Bottom
                },
                overlay: {
                    horizontal: AlignType.Left,
                    vertical: AlignType.Top
                }
            }
        };
    }

    public render(): React.ReactElement<{}> {
        return (
            <OverlayContainer>
                <div style={({ width: "100px" })} onClick={() => this.setState({ visible: true })}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    At ea expedita modi quis, ullam voluptatem?
                    Ab alias aperiam dolor doloribus, explicabo fugit,
                    ipsa ipsum laboriosam laudantium, minima optio quod sint?
                </div>
                <Overlay
                    visible={this.state.visible}
                    onClickOutside={(clickedOnContainer) => this.setState({ visible: clickedOnContainer })}
                    alignment={this.state.alignment}
                >
                    {
                        (left: string, top: string) =>
                            <div style={({ position: "absolute", zIndex: 1000, top, left })}>
                                Lorem ipsum dolor sit.
                            </div>
                    }
                </Overlay>
            </OverlayContainer>
        );
    }
}