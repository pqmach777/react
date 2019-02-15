import React from 'react';
import {connect} from 'react-redux';
import addProduct from '../actions/addProduct'
import AddProduct from './AddProduct'

class Cart extends React.Component {


    render() {
        var product = this.props.productCart.map((product)=>{
            return <li key={product.productName}>{product.productName}</li>
        })
        return (
            <div>
                <AddProduct />
                cart component
                <br />
                {this.props.totalCost}
                <br/>
                <ul>
                    {product}
                </ul>
                <button onClick={()=>this.props.onAddProduct({productName: 'Lemons', productPrice: 2})}>hello</button>
            </div>
        );
    }
}


function mapStateToProps(state){
    return{
        totalCost: state.totalCost,
        productCart: state.productCart
    }
}

function mapDispatchToProps(dispatch){
    return{
        onAddProduct: (productData)=> {dispatch(addProduct(productData))},
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
