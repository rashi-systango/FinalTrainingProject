import { useState } from 'react';
import CardItem from '../card-item/CardItem';
import { useDispatch } from 'react-redux';
import AddToCartAction from '../../actions/AddToCartAction';
import classes from './Card.module.css'
//card component which holds the details of each product
const Card = props => {
 

  //state to show buttons of card or not
  const [areButtonsVisible, setShowButton] = useState(false);

  const dispatch = useDispatch();

  //function to set current selected size of the product on click of size button
  const changeSelectedSizeHandler = newSize => {

    changeSelectedSize({
      currentSize: newSize,
      allSizeButtons: props.availableSizes.map((size) =>
        <button
          onClick={changeSelectedSizeHandler.bind(null, size)}
          id={size}
          className={newSize === size ? classes.selectedSize : classes.unSelectedSize}>
          {size}</button>)
    });
  };


  const [selectedSize, changeSelectedSize] = useState({
    currentSize: props.defaultSize,
    allSizeButtons: props.availableSizes.map((size) => <button
      onClick={changeSelectedSizeHandler.bind(null, size)}
      id={size}
      className={props.defaultSize === size ? classes.selectedSize : classes.unSelectedSize}
    >
      {size}
    </button>)
  });


  //function to show buttons when show details button is clicked
  const setButtonsAccessible = () => {
    setShowButton(true);
  };
  //function to hide button on mouse leave
  const setButtonsInvisible= () => {
    setShowButton(false);
  };

  //calling action function to add/update selected size product to cart
  const addProductToCart = () => {

    dispatch(AddToCartAction(props, selectedSize.currentSize));
  };

  return (
  
  <div className={classes.Card} 
    
    onMouseLeave={setButtonsInvisible}>
      <button className={classes.addToCartButton} onClick={setButtonsAccessible}>Show Details</button>
    <img src={props.imageSource} className={classes.productImage} alt="" />
    <CardItem {...props} />
    <div style={{marginLeft:"12%"}}>
      
    {areButtonsVisible && selectedSize.allSizeButtons}
    <br />
    {areButtonsVisible && <button className={classes.addToCartButton} onClick={addProductToCart}>Add this product to cart</button>}
    </div>
    
  </div>
);
};

export default Card;
