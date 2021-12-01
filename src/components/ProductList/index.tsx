import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Product from './Product';
import { useSelector } from 'react-redux';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    // get sub categoryId from store
    const subCategoryId = useSelector((state:any) => state.categories.subCategoryId);

    useEffect(()=> {
        // get all items of the subcategory:
        axios.get('https://apolis-grocery.herokuapp.com/api/products/sub/' + subCategoryId)
        .then(response => {
            // update the state with the products:
            setProducts(response.data.data);
        })
        .catch(error => console.error(error));
    })

    // display products in a grid:
    return (
        <div className = "container">
            <div className = "row">
                {products.map(product => <Product data = {product} />)}
            </div>
        </div>
    )
}

export default ProductList;
