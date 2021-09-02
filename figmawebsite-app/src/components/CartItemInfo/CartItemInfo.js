import classes from './CartItemInfo.module.css';

const CartItemInfo = (props) => {
    const price = `$${props.discountedPrice}`;
    const quantity = props.quantity;
    const totalAmount = props.discountedPrice * quantity;
    const {size} = props;

    return (
        <li className={classes['cart-item']}>
            
                <div className={classes.summary}>
                <span className={classes.price}>Size {size} </span>
              
                    <span className={classes.price}>Price Of The Product{price}</span>
   
                    <span className={classes.price}>Total Payable Amount{totalAmount}</span>
                
                    <span className={classes.amount}>x {quantity}</span>
                <button className={classes.button} onClick={props.onRemove}>−</button>
                <button className={classes.button} onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItemInfo;