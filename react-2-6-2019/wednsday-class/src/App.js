import React, { Component } from 'react';
import Products from './Products'
import State from './State'

class App extends Component {
  render() {

  let products = ['milk','cheese','bread', 'egss', 'chicken']

    return (
      <div>
        hello world
        <Products title='My List' product={products}/>
        <State />
      </div>
    );
  }
}

export default App;
