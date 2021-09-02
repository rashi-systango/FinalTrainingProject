import { useState } from "react";
import classes from './ProductSort.module.css'

const ProductSort = props => {
    const changeSort=newSort=>{
        setCurrentSort(newSort);
        props.changeSort(newSort);
    };
    const [currentSort, setCurrentSort] = useState("High to Low");
    return (<div className={classes.dropdown}>
        <button className={classes.droplabel} disabled={true}>Sort price - {currentSort}</button>
        <div className={classes["dropdown-content"]}>
            <button onClick={changeSort.bind(null,"High to Low")}>High to Low</button>
            <button onClick={changeSort.bind(null,"Low to High")}>Low to High</button>
            
        </div>
    </div>);
};
export default ProductSort;