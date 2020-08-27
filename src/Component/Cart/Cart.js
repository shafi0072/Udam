import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    console.log(cart);
    //const total= cart.reduce((total, prd)=> total + prd.price, 0);
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }
    let Shipping = 0;
    if(total > 0){
        Shipping = 12.33;
    }
    if(total > 100){
        Shipping = 1.99;
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Shipping Cost: ${Shipping}</p>
            <p>TotalPrice: ${total + Shipping}</p>
        </div>
    );
};

export default Cart;