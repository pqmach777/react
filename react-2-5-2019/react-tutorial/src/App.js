import React, { Component } from 'react';
import Game from './Game'
// or 
// import Game from './tikTacToe'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
