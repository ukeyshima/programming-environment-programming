import React from 'React';
import { inject, observer } from 'mobx-react';

@inject(({ state }, props) => ({
  programmingSpaceCoordinates: state.programmingSpaceCoordinates,
  updateElement: state.updateElement,
  element: state.elements[props.num]
}))
@observer
export default class Element extends React.Component {
  state = {
    mouseDown: false,
    sentence: 'hello world!'
  };
  componentDidMount() {
    const textBoundingBox = this.text.getBBox();
    this.props.updateElement(
      this.props.num,
      textBoundingBox.x,
      textBoundingBox.y,
      textBoundingBox.width,
      textBoundingBox.height
    );
  }
  handleMouseDown = e => {
    this.setState({
      mouseDown: true
    });
    this.mouseDownStartX = e.pageX;
    this.mouseDownStartY = e.pageY;
    this.startWidth = this.props.element.w;
    this.startHeight = this.props.element.h;
    const elementCoordinates = this.props.element;
    this.elementCoordinatesStartX = elementCoordinates.x;
    this.elementCoordinatesStartY = elementCoordinates.y;
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  };
  handleMouseMove = e => {
    if (this.state.mouseDown) {
      this.props.updateElement(
        this.props.num,
        this.elementCoordinatesStartX + e.pageX - this.mouseDownStartX,
        this.elementCoordinatesStartY + e.pageY - this.mouseDownStartY,
        this.startWidth,
        this.startHeight
      );
    }
  };
  handleMouseUp = () => {
    this.setState({ mouseDown: false });
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  };
  handleClick = () => {
    console.log('click');
    document.addEventListener('keydown', this.handleKeyDown);
  };
  handleKeyDown = () => {};
  render() {
    return (
      <React.Fragment>
        <rect
          style={{
            cursor: 'all-scroll'
          }}
          onMouseDown={this.handleMouseDown}
          x={this.props.element.x - 3}
          y={this.props.element.y - 3}
          width={this.props.element.w + 6}
          height={this.props.element.h + 6}
          fill='none'
          pointerEvents='visible'
          stroke='none'
          strokeWidth='10'
        />
        <text
          ref={e => (this.text = e)}
          onClick={this.handleClick}
          x={this.props.element.x}
          y={this.props.element.y + this.props.element.h - 5}
          fontFamily='Verdana'
          fill='#ddd'
          fontSize='20'
        >
          {this.state.sentence}
        </text>
        <rect
          x={this.props.element.x}
          y={this.props.element.y}
          width={this.props.element.w}
          height={this.props.element.h}
          fill='none'
          stroke='#fff'
          strokeDasharray='10'
        />
      </React.Fragment>
    );
  }
}
