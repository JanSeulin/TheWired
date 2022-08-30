import { Fragment, useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/cpu-logo.svg';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { SignOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  const [navColor, setNavColor] = useState(false);
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const changeNavColor = () => {
    if (window.scrollY > 50) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener('scroll', changeNavColor);

  return (
    <Fragment>
      <div className={`header ${navColor && 'nav-color'}`}>
        <Link className="logo-container" to="/">
          <Logo className="logo" />
          <h1 className="logo-text">THE WIRED</h1>
        </Link>

        <div className="menu-options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/contact">
            CONTACT
          </Link>
          {currentUser ? (
            <span className="option" onClick={SignOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="option" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
