
var deleteProduct = (id) => {

    return(
        {
            type: 'deleteProduct',
            productData: {
                productName: id.productName,
                productPrice: id.productPrice
            }
        }
    )
}

export default deleteProduct;