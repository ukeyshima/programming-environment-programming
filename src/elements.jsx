import React from 'React';
import EllipseElement from './ellipseElement.jsx';
import RectElement from './rectElement.jsx';
import TextElement from './textElement.jsx';
import { inject, observer } from 'mobx-react';

@inject(({ state }) => ({
  elements: state.elements
}))
@observer
export default class Elements extends React.Component {
  render() {
    return this.props.elements.map((e, i) => {
      return e.name === 'circle' ? (
        <EllipseElement key={i} num={i} />
      ) : e.name === 'rect' ? (
        <RectElement key={i} num={i} />
      ) : (
        <TextElement key={i} num={i} />
      );
    });
  }
}
