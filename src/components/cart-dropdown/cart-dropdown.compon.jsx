import React from 'react';
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.compon'

const Cart = () => {
    return (
        <div className="cart-dropdown">
            <div className='cart-items'/>
            <CustomButton>CHECKOUT</CustomButton>
        </div>
    );
};

export default Cart; 