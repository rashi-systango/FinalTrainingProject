const TYPE = "ORDER_This_Product_From_Cart"

// order from  cart function for the action which tell reducer to add product to cart and order it

const OrderFromCart = () => {
    return {
        type: TYPE        
    };
};
export default OrderFromCart;
