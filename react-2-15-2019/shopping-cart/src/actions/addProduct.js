function addProduct(item){

    console.log(`adding product ${item.productName} ${item.productPrice}`)
    return {
        type: 'addProduct',
        productData: {
            productName: item.productName,
            productPrice: item.productPrice
        }
    }
}


export default addProduct;