const TYPE = "REMOVE_This_Product_From_Cart"
// remove from  cart function for the action which tell reducer to remove product from cart

const RemoveFromCartAction = (productId, size) => {
    return { type: TYPE, 
        productId: productId, 
        size: size };
};
export default RemoveFromCartAction;
