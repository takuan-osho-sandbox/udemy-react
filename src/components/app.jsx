import React, { Component } from 'react';

import Greeting from './greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Bob',
    };
  }
  render() {
    return (
      <div>
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

export default App;
