import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.compon'
import { addItem } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'

const CollectionItem = ( {item, addItem} ) => {
    const {name, price, imageUrl} = item;
    return (
        <div className='collection-item'>
            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
            <div className='collection-footer'>
                <span className='name'>{ name }</span>
                <span className='price'>{ price }</span>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps) (CollectionItem);