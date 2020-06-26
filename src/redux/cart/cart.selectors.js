import { createSelector } from 'reselect';

// input selectors, 
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector (
    [selectCartItems],
    cartItems => cartItems.reduce( (sum, item) => sum + item.quantity, 0)
)