import React from 'react';
import cart from './assets/cart-svg.svg'
const CartWidget = () => {
    return (
        <div>
             <img src={cart} width="70" height="50" alt="cart-widget"/>
             0
        </div>
    );
};

export default CartWidget;