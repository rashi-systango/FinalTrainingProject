import { Fragment } from "react";
import BrandName from "../ui/brand-name/BrandName";

import ItemName from "../ui/item-name/ItemName";
import classes from './CardItem.module.css'

//card item component to show items in card
const CardItem = props => {
    const { name, brand, price, discount } = props;
    const priceTag = () => {
        if (!isNaN(discount) && Number(discount) > 0) {
            let originalPrize = Number(price);
            const discountOnProduct = Number(discount);
            const discountedAmount = ((originalPrize * discountOnProduct) / 100);
            const finalPrice = originalPrize - discountedAmount;
            return (<div>
                <label className={classes.dcPriceTag}>${finalPrice} </label>
                <label className={classes.PriceTag}>${price}</label>
                <label className={classes.discount}>({discount}% OFF On This Product)</label>
            </div>);
        }
        return (<label>${price}</label>);
    }
    return (<Fragment>
        <BrandName name={brand} />
        <ItemName name={name} />
        {priceTag()}
    </Fragment>);
};
export default CardItem;