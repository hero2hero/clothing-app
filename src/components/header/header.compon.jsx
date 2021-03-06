import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { auth } from "../../firebase/firebase.util";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CardIcon from '../card-icon/cart-icon.compon';
import CartDropdown from '../cart-dropdown/cart-dropdown.compon'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo=container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CardIcon />        
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};


const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
