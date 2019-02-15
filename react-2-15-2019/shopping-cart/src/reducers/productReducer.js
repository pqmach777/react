
function productReducer(state,action){
    if(state === undefined){
        return {
            totalCost: 0,
            productCart:{
                productName: '',
                productPrice: 0
            }
        }
    }
    switch(action.type){
        case 'addProduct':
            console.log('Inside reducer'+ action.productData.productName)
            return {
                    ...state, 
                    totalCost: state.totalCost+ parseInt(action.productData.productPrice),
                    productCart: state.productCart.concat({
                        productName: action.productData.productName,
                        productPrice: action.productData.productPrice
                })
            }

        case 'deleteProduct':
        return state
        
        default:
        return state;
    }
}

export default productReducer;