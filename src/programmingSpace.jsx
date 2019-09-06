import React from 'React';
import Blocks from './blocks';
import Elements from './elements';
import { inject, observer } from 'mobx-react';

@inject(({ state }) => ({
  programmingSpaceCoordinates: state.programmingSpaceCoordinates,
  programmingSpaceSizes: state.programmingSpaceSizes
}))
@observer
export default class ProgrammingSpace extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Blocks name='circle'>◯</Blocks>
        <Blocks name='rect'>□</Blocks>
        <Blocks name='text'>text</Blocks>
        <svg
          id='programmingSpace'
          style={{
            position: 'absolute',
            left: this.props.programmingSpaceCoordinates.x,
            top: this.props.programmingSpaceCoordinates.y,
            width: this.props.programmingSpaceSizes.w,
            height: this.props.programmingSpaceSizes.h,
            backgroundColor: '#222'
          }}
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <Elements />
        </svg>
      </React.Fragment>
    );
  }
}
