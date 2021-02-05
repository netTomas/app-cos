import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductNewPage.css';

const products = ["car", "bike", "motocycle"];
const ProductNewPage = () => {

    const list = products.map(product => (
        <li key={product}>
            <Link to={`/product/${product}`}>{product}</Link>
        </li>
    ))
    return ( 
        <div className="products">
            <h2>Lista produktów</h2>
            <div>
                <ul>
                   {list} 
                </ul>
            </div>
        </div>
     );
}
 
export default ProductNewPage;