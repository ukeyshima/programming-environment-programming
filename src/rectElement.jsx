import React from 'React';
import { inject, observer } from 'mobx-react';

@inject(({ state }) => ({
  programmingSpaceCoordinates: state.programmingSpaceCoordinates,
  updateElementCoordinates: state.updateElementCoordinates,
  elements: state.elements
}))
@observer
export default class Element extends React.Component {   
    state = {
      mouseDown: false    
    }
  handleMouseDown = e => {
    this.setState({
      mouseDown: true
    });
    this.mouseDownX = e.pageX;
    this.mouseDownY = e.pageY;
    const elementCoordinates = this.props.elements[this.props.num];
    this.elementStartX = elementCoordinates.x;
    this.elementStartY = elementCoordinates.y;
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  };
  handleMouseMove = e => {
    if (this.state.mouseDown) {
      this.props.updateElementCoordinates(
        this.props.num,
        this.elementStartX + e.pageX - this.mouseDownX,
        this.elementStartY + e.pageY - this.mouseDownY
      );
    }
  };
  handleMouseUp = () => {
    this.setState({ mouseDown: false });
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  };
  render() {
    return (            
      <rect
      onMouseDown={this.handleMouseDown}
      x={this.props.x}
      y={this.props.y}
      width={this.props.w}
      height={this.props.h}
      fill='#999'
    />
    );
  }
}
