const TYPE = "ADD_This_Product_To_Cart"

// add to cart function for the action which tell reducer to add product to cart
const AddToCartAction = (product, size) => {
    return {
        type: TYPE, 
        product: product,
        size: size
    };
};
export default AddToCartAction;
