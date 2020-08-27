import React, { useState } from 'react';
import fakeData from '../../fakeData/Corse'
import './Corse.css';
import Product from '../Products/Product'
import Cart from '../Cart/Cart';

const Corse = () => {
    const first10 = fakeData.slice(0,10);
    
    const [products, setProducts] = useState(first10);

    const [cart, setCart] = useState([])
    const handleAddProduct = (pd) => {
        
        const newCart = [...cart, pd];
        setCart(newCart);
    }
    return (
        <div className="Corse-Container">
            <div className="product-container">
               
                    {
                        products.map(product => <Product
                            handleAddProduct={handleAddProduct} product={product}>{product.name}</Product>)
                    }
                
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Corse;