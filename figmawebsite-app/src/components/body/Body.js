import { useState } from 'react';
import productData from '../../assets/product-data/productData';
import Card from '../card/Card';
import ProductFilter from '../filters/productFilter';
import ProductSort from '../product-sort/ProductSort';
import classes from './Body.module.css';
//get the list of products from the json objects
const products = productData.data;

//body component to display filters and products on screen
const Body = props => {

    //get filters get all the types of product from @{products} 
    const getFilters = () => {
        const appFilter = Array.from(new Set(products.map((product) => product.type)));
        return appFilter;
    };

    //setting filters as state so that on change of filters filtered item can be shown
    const [filters, setNewFilters] = useState([]);

    //setting sort so that items can be sorted on price
    const [currentSort, changeSort] = useState("High to Low");

    //changeFilter function to update filters 
    const changeFilter = (filterInfo) => {
        const newFilter = JSON.parse(JSON.stringify(filters));
        const { type, filter } = filterInfo;
        if (type === "remove") {
            newFilter.pop(filter);
        }
        else {
            newFilter.push(filter);
        }        
        setNewFilters([...newFilter]);
    };

    //this function returns the list of products who pass the filter barrier
    const isProductApplicable = product => {

        return filters.includes(product.type);
    };

    //this function sort filtered product on their price 
    const sortProducts = productList => {
        if (currentSort === "High to Low") {
            return productList.sort((product1, product2) => product1.price < product2.price && 1 || -1);
        }
        else {
            return productList.sort((product1, product2) => product1.price > product2.price && 1 || -1);
        }
    };

    //this function returns list of sorted cards in which each card contain a filtered product
    const getProductList = () => {

        //if no filter is applied then products are only sorted 
        if (filters.length === 0) {
            return sortProducts(products).map((product) =>
                <Card key={product.id}
                    {...product} />);
        }
        return sortProducts(products.filter((product) => isProductApplicable(product))).map((product) =>
            <Card key={product.id}
                {...product} />);
    };

    return (<div className={classes.BodyDiv}>
         <ProductSort changeSort={changeSort} />
        <ProductFilter types={getFilters()} changeFilter={changeFilter} />
       
        <div className={classes.row}>
        {getProductList()}
        
        </div>
        
    </div>)
};
export default Body;