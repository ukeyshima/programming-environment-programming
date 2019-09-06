import React from 'React';
import { inject, observer } from 'mobx-react';

@inject(({ state }) => ({
  programmingSpaceCoordinates: state.programmingSpaceCoordinates,
  programmingSpaceSizes: state.programmingSpaceSizes,
  appendElement: state.appendElement
}))
@observer
export default class Blocks extends React.Component {
  handleMouseDown = e => {
    this.props.appendElement({
      name: this.props.name,
      x: 100,
      y: 300,
      w: 100,
      h: 100
    });
  };
  render() {
    return (
      <div
        onMouseDown={this.handleMouseDown}
        style={{
          width: 100,
          height: 30,
          border: 'solid 1px #000000',
          textAlign: 'center',
          display: 'inline-block'
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
