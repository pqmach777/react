import React, {Component} from 'react';
import Name from "./Name"

class Products extends Component {
    printProduct(product){
        return "Product Name: " + product.itemName+ ' '+ product.model
    }
    render(){
        let myProduct = {itemName: 'MacBook', model: 'Pro-Touch'}
        let myMessage = 'My Product List'
        return(
            <div class="products">
                <h3> New items in stock.</h3>
                <h4><u>{myMessage}</u></h4>
                {this.printProduct(myProduct)}
                <p>{this.props.productName} {this.props.productID}</p>
                <p><Name /></p>
            </div>
        )
    }
}
export default Products;