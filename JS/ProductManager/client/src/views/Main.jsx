import React, { useState } from 'react'
import ProductForm from '../components/Product';
import ProductList from '../components/ProductList';
const Main = (props) => {
    
    const [product, setProduct] = useState([]);
    
    return (
        <div className="pt-5">
        <ProductForm product={product} setProduct={setProduct} />
        <hr className="m-5"/>
        <ProductList product={product} setProduct={setProduct} />
        </div>
    )
}
export default Main;