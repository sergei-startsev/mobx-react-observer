import React from 'react';
import { observer, inject } from 'mobx-react';

export class Foo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Test</div>
    );
  }
}

export default inject('store')(observer(Foo));