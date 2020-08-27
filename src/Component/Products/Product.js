import React from 'react';
import './Product.css'

const Product = (props) => {
    
    return (
        <div className="main">
            <div className="mainprops">
                <img className="Imaginary" src={props.product.image} alt=""/>
                <h1>{props.product.name}</h1>
                <h4>By:{props.product.by}</h4>
                <h1>${props.product.price}</h1>
                <button className="EnrollBTn"
                onClick={() => props.handleAddProduct(props.product)}
                >Enroll Now</button>
            </div>
        </div>
    );
};

export default Product;