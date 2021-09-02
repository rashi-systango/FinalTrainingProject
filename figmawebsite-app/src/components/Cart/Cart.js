
import Modal from '../ui/Modal/Modal';
import classes from './Cart.module.css'
import CartItem from '../CartItem/CartItem'
import { useSelector, useDispatch } from 'react-redux';
import AddToCartAction from '../../actions/AddToCartAction';
import RemoveFromCartAction from '../../actions/RemoveFromCartAction';
import { useState } from 'react';
import CartItemInfo from '../CartItemInfo/CartItemInfo';
import OrderFromCart from '../../actions/OrderFromCart';


const Cart = props => {

    const CartDetails = useSelector(state => state.CartReducer);
    const { totalAmount, products } = CartDetails;
    const cartItemRemoveHandler = (id, size) => {
        dispatch(RemoveFromCartAction(id, size));
        setCartItems(updateCartItems(products));
    };
    const cartItemAddHandler = (product, size) => {
        
        dispatch(AddToCartAction(product, size));
        setCartItems(updateCartItems(products));

    };
    const updateCartItems = (products) => {


        return (
            <ul
                className={classes['cart-items']}>
                {Object.keys(products).map((product) => <li className={classes['cart-item']}>
                    <CartItem
                        key={product}

                        name={products[product][Object.keys(products[product])[0]].name} />
                    {
                        Object.keys(products[product]).map((size) => <CartItemInfo
                            price={products[product][size].price}
                            discountedPrice={products[product][size].discountedPrice}
                            size={size}
                            discount={products[product][size].discount}
                            quantity={products[product][size].quantity}
                            onRemove={cartItemRemoveHandler.bind(null, product, size)}
                            onAdd={cartItemAddHandler.bind(null, products[product][size], size)}
                        />)
                    }
                </li>)}
            </ul>
        );
    };
    const [cartItems, setCartItems] = useState(updateCartItems(products));
    const dispatch = useDispatch();

    const orderItems = () => {
        dispatch(OrderFromCart());
        props.hideCart();
    };


    return (<Modal hideCart={props.hideCart}>
        {cartItems}
       {Number(totalAmount)>0 &&  <div className={classes.total}>
            <span>Total Amount</span>
            <span>${totalAmount}</span>
        </div>}
        {
            Number(totalAmount)===0 && <div className={classes.total}>
            <span>Cart Empty</span>
            
        </div>
        }
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.hideCart}>Close</button>
            {Number(totalAmount)> 0 && <button className={classes.button} onClick={orderItems}>Order</button>}
        </div>
    </Modal>);
};
export default Cart;