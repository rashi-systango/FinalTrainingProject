import classes from './BrandName.module.css'
const BrandName = props =>{
    const {name }= props;
    return(<label className={classes.BrandName}>{name}</label>)
};
export default BrandName;
