import classes from './ProductFilter.module.css'
const ProductFilter = props => {

    
    const { types } = props;
    const setUnsetType = (event) => {

        if (event.target.className === classes.selected) {
            event.target.className = classes.notSelected;
            props.changeFilter({
                type: "remove",
                filter: event.target.id
            });

        }
        else {
            event.target.className = classes.selected;
            props.changeFilter({
                type: "add",
                filter: event.target.id
            });

        }
    };
    const buttonType = types.map((type) => <button id={type} key={type} className={classes.notSelected} onClick={setUnsetType}>{type}</button>)
    return (<div className={classes.div}>
        {buttonType}
    </div>)
};
export default ProductFilter;