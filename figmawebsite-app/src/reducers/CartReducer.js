

const cartState = { totalAmount: 0, products: {} };
const calculateDiscountedPrice = (price, discount) => {

    return Number((price - ((price * discount) * .01))?.toFixed(2));
};
const removeProductFromCart = (currentState, values) => {

    const { productId, size } = values;
    const { quantity, discountedPrice  } = currentState.products[productId][size];
    let { totalAmount } = currentState;
    if (quantity === 1) {
        totalAmount -= discountedPrice;
        delete currentState.products[productId][size];

        if (Object.keys(currentState.products[productId]).length == 0) {
            delete currentState.products[productId];
        }
        currentState.totalAmount = totalAmount;
        return currentState;
    }
    totalAmount -= discountedPrice;
    currentState.products[productId][size].quantity -= 1;
    currentState.totalAmount = totalAmount;
    return currentState;



};
const addProductToCart = (currentState, values) => {


    const { size, product } = values;
    const PRODUCT_ID = product.id;
    const totalAmount = Number(currentState.totalAmount);
    if (PRODUCT_ID in currentState.products && size in currentState.products[PRODUCT_ID]) {
        const current_product_detail = currentState.products[PRODUCT_ID][size]
        current_product_detail.quantity += 1;
        currentState.products[PRODUCT_ID][size] = current_product_detail;
        currentState.totalAmount = totalAmount + Number(current_product_detail.discountedPrice);
        return currentState;
    }

    if (PRODUCT_ID in currentState.products && !(size in currentState.products[PRODUCT_ID])) {
        const discountedPrice = calculateDiscountedPrice(Number(product.price), Number(product.discount));
        currentState.products[PRODUCT_ID][size] = { ...product, quantity: 1, discountedPrice: discountedPrice };
        currentState.totalAmount += discountedPrice;
        return currentState;
    }

    currentState.products[PRODUCT_ID] = { [size]: {} };
    const discountedPrice = calculateDiscountedPrice(Number(product.price), Number(product.discount));
    currentState.products[PRODUCT_ID][size] = { ...product, quantity: 1, discountedPrice: discountedPrice };
    currentState.totalAmount += discountedPrice;


    return currentState;

};

const CartReducer = (state = cartState, action) => {

    switch (action.type) {
        case "ADD_This_Product_To_Cart":
            return addProductToCart(state, action);
            
        case  "ORDER_This_Product_From_Cart":
                return { totalAmount: 0, products: {} };

        case "REMOVE_This_Product_From_Cart":
            return removeProductFromCart(state, action);

       
        default:
            return state;

    };

};
export default CartReducer