

import { useEffect, useState } from 'react';
import { useSelector, } from 'react-redux';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
    const CartDetails = useSelector(state => Object.keys(state.CartReducer.products).length);
    
    const [numberOfCartItems,setnumberOfCartItems] = useState(CartDetails);
    useEffect(()=>{
        setnumberOfCartItems(CartDetails);
    },[CartDetails])
    return (
      
        <button className={classes.button} onClick={props.onClick}>
            
            <span>Your Cart       </span>
         
            <span className={classes.icon}>
            <CartIcon></CartIcon>
             </span>
            
            <span className={classes.badge}>
                {numberOfCartItems} 
            </span>
        </button>
      
    );
};
export default HeaderCartButton;