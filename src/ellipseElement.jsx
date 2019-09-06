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
    mouseDownLeftUp: false,
    mouseDownRightUp: false,
    mouseDownLeftDown: false,
    mouseDownRightDown: false,
    mouseDownCenterUp: false,
    mouseDownLeftCenter: false,
    mouseDownRightCenter: false,
    mouseDownCenterDown: false
  };
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
  handleMouseDownLeftUp = e => {
    this.setState({
      mouseDownLeftUp: true
    });
    this.mouseDownLeftUpStartX = e.pageX;
    this.mouseDownLeftUpStartY = e.pageY;
    this.startWidth = this.props.element.w;
    this.startHeight = this.props.element.h;
    const elementCoordinates = this.props.element;
    this.elementCoordinatesStartX = elementCoordinates.x;
    this.elementCoordinatesStartY = elementCoordinates.y;
    window.addEventListener('mousemove', this.handleMouseMoveLeftUp);
    window.addEventListener('mouseup', this.handleMouseUpLeftUp);
  };
  handleMouseMoveLeftUp = e => {
    if (this.state.mouseDownLeftUp) {
      const deltaX = e.pageX - this.mouseDownLeftUpStartX;
      const deltaY = e.pageY - this.mouseDownLeftUpStartY;
      const width = Math.abs(this.startWidth - deltaX / 2);
      const height = Math.abs(this.startHeight - deltaY / 2);
      this.props.updateElement(
        this.props.num,
        this.elementCoordinatesStartX + deltaX / 2,
        this.elementCoordinatesStartY + deltaY / 2,
        width,
        height
      );
    }
  };
  handleMouseUpLeftUp = e => {
    this.setState({
      mouseDownLeftUp: false
    });
    window.removeEventListener('mousemove', this.handleMouseMoveLeftUp);
    window.removeEventListener('mouseup', this.handleMouseUpLeftUp);
  };
  handleMouseDownRightUp = e => {
    this.setState({
      mouseDownRightUp: true
    });
    this.mouseDownRightUpStartX = e.pageX;
    this.mouseDownRightUpStartY = e.pageY;
    this.startWidth = this.props.element.w;
    this.startHeight = this.props.element.h;
    const elementCoordinates = this.props.element;
    this.elementCoordinatesStartX = elementCoordinates.x;
    this.elementCoordinatesStartY = elementCoordinates.y;
    window.addEventListener('mousemove', this.handleMouseMoveRightUp);
    window.addEventListener('mouseup', this.handleMouseUpRightUp);
  };
  handleMouseMoveRightUp = e => {
    if (this.state.mouseDownRightUp) {
      const deltaX = e.pageX - this.mouseDownRightUpStartX;
      const deltaY = e.pageY - this.mouseDownRightUpStartY;
      const width = Math.abs(this.startWidth + deltaX / 2);
      const height = Math.abs(this.startHeight - deltaY / 2);
      this.props.updateElement(
        this.props.num,
        this.elementCoordinatesStartX + deltaX / 2,
        this.elementCoordinatesStartY + deltaY / 2,
        width,
        height
      );
    }
  };
  handleMouseUpRightUp = e => {
    this.setState({
      mouseDownRightUp: false
    });
    window.removeEventListener('mousemove', this.handleMouseMoveRightUp);
    window.removeEventListener('mouseup', this.handleMouseUpRightUp);
  };
  handleMouseDownLeftDown = e => {
    this.setState({
      mouseDownLeftDown: true
    });
    this.mouseDownLeftDownStartX = e.pageX;
    this.mouseDownLeftDownStartY = e.pageY;
    this.startWidth = this.props.element.w;
    this.startHeight = this.props.element.h;
    const elementCoordinates = this.props.element;
    this.elementCoordinatesStartX = elementCoordinates.x;
    this.elementCoordinatesStartY = elementCoordinates.y;
    window.addEventListener('mousemove', this.handleMouseMoveLeftDown);
    window.addEventListener('mouseup', this.handleMouseUpLeftDown);
  };
  handleMouseMoveLeftDown = e => {
    if (this.state.mouseDownLeftDown) {
      const deltaX = e.pageX - this.mouseDownLeftDownStartX;
      const deltaY = e.pageY - this.mouseDownLeftDownStartY;
      const width = Math.abs(this.startWidth - deltaX / 2);
      const height = Math.abs(this.startHeight + deltaY / 2);
      this.props.updateElement(
        this.props.num,
        this.elementCoordinatesStartX + deltaX / 2,
        this.elementCoordinatesStartY + deltaY / 2,
        width,
        height
      );
    }
  };
  handleMouseUpLeftDown = e => {
    this.setState({
      mouseDownLeftDown: false
    });
    window.removeEventListener('mousemove', this.handleMouseMoveLeftDown);
    window.removeEventListener('mouseup', this.handleMouseUpLeftDown);
  };
  handleMouseDownRightDown = e => {
    this.setState({
      mouseDownRightDown: true
    });
    this.mouseDownRightDownStartX = e.pageX;
    this.mouseDownRightDownStartY = e.pageY;
    this.startWidth = this.props.element.w;
    this.startHeight = this.props.element.h;
    const elementCoordinates = this.props.element;
    this.elementCoordinatesStartX = elementCoordinates.x;
    this.elementCoordinatesStartY = elementCoordinates.y;
    window.addEventListener('mousemove', this.handleMouseMoveRightDown);
    window.addEventListener('mouseup', this.handleMouseUpRightDown);
  };
  handleMouseMoveRightDown = e => {
    if (this.state.mouseDownRightDown) {
      const deltaX = e.pageX - this.mouseDownRightDownStartX;
      const deltaY = e.pageY - this.mouseDownRightDownStartY;
      const width = Math.abs(this.startWidth + deltaX / 2);
      const height = Math.abs(this.startHeight + deltaY / 2);
      this.props.updateElement(
        this.props.num,
        this.elementCoordinatesStartX + deltaX / 2,
        this.elementCoordinatesStartY + deltaY / 2,
        width,
        height
      );
    }
  };
  handleMouseUpRightDown = e => {
    this.setState({
      mouseDownRightDown: false
    });
    window.removeEventListener('mousemove', this.handleMouseMoveRightDown);
    window.removeEventListener('mouseup', this.handleMouseUpRightDown);
  };
  handleMouseDownCenterUp = e => {
    this.setState({
      mouseDownCenterUp: true
    });
    this.mouseDownCenterUpStartY = e.pageY;
    this.startWidth = this.props.element.w;
    this.startHeight = this.props.element.h;
    const elementCoordinates = this.props.element;
    this.elementCoordinatesStartX = elementCoordinates.x;
    this.elementCoordinatesStartY = elementCoordinates.y;
    window.addEventListener('mousemove', this.handleMouseMoveCenterUp);
    window.addEventListener('mouseup', this.handleMouseUpCenterUp);
  };
  handleMouseMoveCenterUp = e => {
    if (this.state.mouseDownCenterUp) {
      const deltaY = e.pageY - this.mouseDownCenterUpStartY;
      const height = Math.abs(this.startHeight - deltaY / 2);
      this.props.updateElement(
        this.props.num,
        this.elementCoordinatesStartX,
        this.elementCoordinatesStartY + deltaY / 2,
        this.startWidth,
        height
      );
    }
  };
  handleMouseUpCenterUp = e => {
    this.setState({
      mouseDownCenterUp: false
    });
    window.removeEventListener('mousemove', this.handleMouseMoveCenterUp);
    window.removeEventListener('mouseup', this.handleMouseUpCenterUp);
  };
  handleMouseDownLeftCenter = e => {
    this.setState({
      mouseDownLeftCenter: true
    });
    this.mouseDownLeftCenterStartX = e.pageX;
    this.startWidth = this.props.element.w;
    this.startHeight = this.props.element.h;
    const elementCoordinates = this.props.element;
    this.elementCoordinatesStartX = elementCoordinates.x;
    this.elementCoordinatesStartY = elementCoordinates.y;
    window.addEventListener('mousemove', this.handleMouseMoveLeftCenter);
    window.addEventListener('mouseup', this.handleMouseUpLeftCenter);
  };
  handleMouseMoveLeftCenter = e => {
    if (this.state.mouseDownLeftCenter) {
      const deltaX = e.pageX - this.mouseDownLeftCenterStartX;
      const width = Math.abs(this.startWidth - deltaX / 2);
      this.props.updateElement(
        this.props.num,
        this.elementCoordinatesStartX + deltaX / 2,
        this.elementCoordinatesStartY,
        width,
        this.startHeight
      );
    }
  };
  handleMouseUpLeftCenter = e => {
    this.setState({
      mouseDownLeftCenter: false
    });
    window.removeEventListener('mousemove', this.handleMouseMoveLeftCenter);
    window.removeEventListener('mouseup', this.handleMouseUpLeftCenter);
  };
  handleMouseDownRightCenter = e => {
    this.setState({
      mouseDownRightCenter: true
    });
    this.mouseDownRightCenterStartX = e.pageX;
    this.startWidth = this.props.element.w;
    this.startHeight = this.props.element.h;
    const elementCoordinates = this.props.element;
    this.elementCoordinatesStartX = elementCoordinates.x;
    this.elementCoordinatesStartY = elementCoordinates.y;
    window.addEventListener('mousemove', this.handleMouseMoveRightCenter);
    window.addEventListener('mouseup', this.handleMouseUpRightCenter);
  };
  handleMouseMoveRightCenter = e => {
    if (this.state.mouseDownRightCenter) {
      const deltaX = e.pageX - this.mouseDownRightCenterStartX;
      const width = Math.abs(this.startWidth + deltaX / 2);
      this.props.updateElement(
        this.props.num,
        this.elementCoordinatesStartX + deltaX / 2,
        this.elementCoordinatesStartY,
        width,
        this.startHeight
      );
    }
  };
  handleMouseUpRightCenter = e => {
    this.setState({
      mouseDownRightCenter: false
    });
    window.removeEventListener('mousemove', this.handleMouseMoveRightCenter);
    window.removeEventListener('mouseup', this.handleMouseUpRightCenter);
  };
  handleMouseDownCenterDown = e => {
    this.setState({
      mouseDownCenterDown: true
    });
    this.mouseDownCenterDownStartY = e.pageY;
    this.startWidth = this.props.element.w;
    this.startHeight = this.props.element.h;
    const elementCoordinates = this.props.element;
    this.elementCoordinatesStartX = elementCoordinates.x;
    this.elementCoordinatesStartY = elementCoordinates.y;
    window.addEventListener('mousemove', this.handleMouseMoveCenterDown);
    window.addEventListener('mouseup', this.handleMouseUpCenterDown);
  };
  handleMouseMoveCenterDown = e => {
    if (this.state.mouseDownCenterDown) {
      const deltaY = e.pageY - this.mouseDownCenterDownStartY;
      const height = Math.abs(this.startHeight + deltaY / 2);
      this.props.updateElement(
        this.props.num,
        this.elementCoordinatesStartX,
        this.elementCoordinatesStartY + deltaY / 2,
        this.startWidth,
        height
      );
    }
  };
  handleMouseUpCenterDown = e => {
    this.setState({
      mouseDownCenterDown: false
    });
    window.removeEventListener('mousemove', this.handleMouseMoveCenterDown);
    window.removeEventListener('mouseup', this.handleMouseUpCenterDown);
  };
  render() {
    return (
      <React.Fragment>
        <ellipse
          onMouseDown={this.handleMouseDown}
          cx={this.props.element.x}
          cy={this.props.element.y}
          rx={this.props.element.w}
          ry={this.props.element.h}
          fill='#ddd'
        />
        <rect
          x={this.props.element.x - this.props.element.w}
          y={this.props.element.y - this.props.element.h}
          width={this.props.element.w * 2}
          height={this.props.element.h * 2}
          fill='none'
          stroke='#fff'
          strokeDasharray='10'
        />
        <rect
          style={{
            cursor: 'nwse-resize'
          }}
          onMouseDown={this.handleMouseDownLeftUp}
          x={this.props.element.x - this.props.element.w - 2.5}
          y={this.props.element.y - this.props.element.h - 2.5}
          width={5}
          height={5}
          fill='#ddd'
          stroke='#000'
        />
        <rect
          style={{
            cursor: 'nesw-resize'
          }}
          onMouseDown={this.handleMouseDownRightUp}
          x={this.props.element.x + this.props.element.w - 2.5}
          y={this.props.element.y - this.props.element.h - 2.5}
          width={5}
          height={5}
          fill='#ddd'
          stroke='#000'
        />
        <rect
          style={{
            cursor: 'nesw-resize'
          }}
          onMouseDown={this.handleMouseDownLeftDown}
          x={this.props.element.x - this.props.element.w - 2.5}
          y={this.props.element.y + this.props.element.h - 2.5}
          width={5}
          height={5}
          fill='#ddd'
          stroke='#000'
        />
        <rect
          style={{
            cursor: 'nwse-resize'
          }}
          onMouseDown={this.handleMouseDownRightDown}
          x={this.props.element.x + this.props.element.w - 2.5}
          y={this.props.element.y + this.props.element.h - 2.5}
          width={5}
          height={5}
          fill='#ddd'
          stroke='#000'
        />
        <rect
          style={{
            cursor: 'ns-resize'
          }}
          onMouseDown={this.handleMouseDownCenterUp}
          x={this.props.element.x - 2.5}
          y={this.props.element.y - this.props.element.h - 2.5}
          width={5}
          height={5}
          fill='#ddd'
          stroke='#000'
        />
        <rect
          style={{
            cursor: 'ew-resize'
          }}
          onMouseDown={this.handleMouseDownLeftCenter}
          x={this.props.element.x - this.props.element.w - 2.5}
          y={this.props.element.y - 2.5}
          width={5}
          height={5}
          fill='#ddd'
          stroke='#000'
        />
        <rect
          style={{
            cursor: 'ew-resize'
          }}
          onMouseDown={this.handleMouseDownRightCenter}
          x={this.props.element.x + this.props.element.w - 2.5}
          y={this.props.element.y - 2.5}
          width={5}
          height={5}
          fill='#ddd'
          stroke='#000'
        />
        <rect
          style={{
            cursor: 'ns-resize'
          }}
          onMouseDown={this.handleMouseDownCenterDown}
          x={this.props.element.x - 2.5}
          y={this.props.element.y + this.props.element.h - 2.5}
          width={5}
          height={5}
          fill='#ddd'
          stroke='#000'
        />
      </React.Fragment>
    );
  }
}
