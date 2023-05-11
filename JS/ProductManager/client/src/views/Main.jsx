import React, { useState } from 'react'
import ProductForm from '../components/Product';
import ProductList from '../components/ProductList';
const Main = () => {
    
    const [product, setProduct] = useState([]);
    
    const removeFromDom = (id) => {
        setProduct(product.filter(product => product._id !== id))
    }
    
    return (
        <div className="pt-5">
        <ProductForm product={product} setProduct={setProduct} />
        <hr className="m-5"/>
            <div className="flex justify-center">
                <ProductList product={product} setProduct={setProduct} removeFromDom={removeFromDom}/>
            </div>
        </div>
    )
}
export default Main;