import React from 'react';
import {connect} from 'react-redux';
import addProduct from '../actions/addProduct'

class AddProduct extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            productName: '',
            productPrice : 0
        }
    }
    productNameChange(e){
        this.setState({
            
        })
    }

    render() {
        return (
                <div>
                    <input type='text'
                    placeholder='Product Name' 
                    onChange={this.productNameChange.bind(this)}
                    />

                    <input type='text'
                    placeholder='Product Price'
                    />

                    <button onClick={()=>onAddProduct({
                        productName: this.state.productName
                    })}>Add Product</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)