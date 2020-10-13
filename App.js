import React from 'react';
import FadeAnimation from './src/FadeAnimation';
import MoveAnimation from './src/MoveAnimation';
import MultiAnimated from './src/MultiAnimated';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      // <FadeAnimation></FadeAnimation>
      // <MoveAnimation></MoveAnimation>
      <MultiAnimated></MultiAnimated>
    );
  }
}

export default App;