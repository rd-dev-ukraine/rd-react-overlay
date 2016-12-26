# rd-react-overlay

Overlay component that allows open a component in popup for React.js.

## Installation

````shell
npm i rd-react-overlay --save
````

## Code Example

#### [Demo](https://rd-dev-ukraine.github.io/angular-io-overlay/)

First of all you'll need to add `OverlayContainer, Overlay, Alignment, AlignType` to your application module.

```typescript
import { OverlayContainer, Overlay, Alignment, AlignType } from 'rd-react-overlay';
```

After that import add `visible` and `alignment` states to your component. 

```typescript
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
}
```

Of course you need to add this states to your interface if you use TypeScript or PropTypes.

```typescript
interface ComponentState {
    visible?: boolean;
    alignment?: Alignment;
}
```

After that you should add this template to component render:

```html
<OverlayContainer>
    <button type="button" onClick={() => this.setState({visible: true})}>Open popup</button>
    <Overlay visible={this.state.visible}
             onClickOutside={(clickedOnContainer) => this.setState({visible: clickedOnContainer})}
             alignment={this.state.alignment}>
        {
            (left, top) =>
                <div style={({position: 'absolute', top: top, left: left})}>
                    <ComponentThatShouldBeInPopup/>
                </div>
        }
    </Overlay>
</OverlayContainer>
```

The first element `button` could be any other element or elements. This element or elements will be a target for `<ComponentThatShouldBeInPopup/>` that will align with.
Instead of `button` element there is can be `<div>hello, world</div><div>hello, again</div>` or whatever. Don't forget to add element that will triggering `visible` state.

This styles `<div style={({position: 'absolute', top: top, left: left})}>` generating depends on `alignment` state. You can position the popup whenever you want. In this case you dont need anymore `alignment` state.
`{position: 'absolute' | 'relative' | 'fixed', top: number, left: number}`

## API Reference

|Property        |Type                                   |Default                                                               |Description                                         |
| :------------- | :------------------------------------ | :------------------------------------------------------------------- | :------------------------------------------------- |
|`visible`       |boolean                                |`undefined`                                                           |Visible state for content in the <Overlay></Overlay>|
|`alignment`     |Alignment                              |`defaultAlign: Alignment = {element: {horizontal: AlignType.Left,vertical: AlignType.Top},target: {horizontal: AlignType.Left,vertical: AlignType.Bottom}};`|Align popup with |
|`onClickOutside`|`(ClickedOnContainer: boolean) => void`|`(clickedOnContainer) => this.setState({visible: clickedOnContainer})`|Close popup if clicked out of popup and container.  |


## License

This project is licensed under the MIT license. See the [LICENSE](https://github.com/rd-dev-ukraine/rd-react-overlay/blob/master/LICENSE) file for more info.