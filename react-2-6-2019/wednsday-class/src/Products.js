import React from 'react';

class Products extends React.Component {
  render() {
      // let products = ['milk','cheese','bread', 'egss', 'chicken']
      let productsList = this.props.product.map((product)=>{
        return <li>{product}</li>
      })
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>
          {productsList}
        </ul>
      </div>
    );
  }
}

export default Products;
