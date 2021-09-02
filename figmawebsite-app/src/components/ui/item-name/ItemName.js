import classes from './ItemName.module.css'
const ItemName = props =>{
    const {name }=props;
    return(<label className={classes.ItemName}>{name}</label>)
};
export default ItemName;