import React from 'react';
// import logo from './logo.svg';
import Product from './Product'

class Products extends React.Component {
    constructor(props){
        super(props);

        this.products = this.getProduct();
    }
    getProduct(){
        return [
          { 
              imageUrl: "http://loremflickr.com/200/150?random=1",
              productName: "Cat 1",
              releasedDate: "May 31, 2018",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
              rating: 4,
              numOfReviews: 2
          },
          { 
              imageUrl: "http://loremflickr.com/200/150?random=2",
              productName: "Cat 2",
              releasedDate: "August 31, 2018",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
              rating: 2,
              numOfReviews: 12          
          },
          { 
              imageUrl: "http://loremflickr.com/200/150?random=3",
              productName: "Cat 3",
              releasedDate: "July 30, 2018",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
              rating: 5,
              numOfReviews: 2
          }];
      } 
  render() {
    
    const listProducts = this.products.map(product => {
    return <Product key={product.productName} data={product}/>   
});
    return (

        <div>
            <ul>
                {listProducts}
            </ul>
        </div>
    );
  }
}


export default Products;
