import React from 'react';
// import logo from './logo.svg';
import {Media} from 'react-bootstrap'
import Rating from './Rating'

class Product extends React.Component {

  render() {
    return (
        <div >
            <Media>
            <img width={64} height={64} alt="" src={this.props.data.imageUrl} />   
                <Media.Body>
                <h5>{this.props.data.productName}</h5>
                <Rating rating={this.props.data.rating} />
                <p>{this.props.data.description}</p>
                </Media.Body>
            </Media>
        </div>
    );
  }
}

export default Product;
