import React from 'react';
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.compon'
import CartItem from '../cart-item/cart-item.compon'
import { connect } from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selectors'

const Cart = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className='cart-items'/>
            {
                cartItems.map(item => <CartItem key={item.id} item={item} />)
            }
            <CustomButton>CHECKOUT</CustomButton>
        </div>
    );
};

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps) (Cart); 