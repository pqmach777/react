import React, { Component } from 'react';
import './App.css';
import MemoryCard from './MemoryCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Memory Game</h2>
          <p>Match cards to win</p>
        </header>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>

      </div>
    );
  }
}

export default App;
