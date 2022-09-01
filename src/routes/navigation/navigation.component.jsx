import { Fragment, useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import MobileNavDropdown from '../../components/mobile-nav-dropdown/mobile-nav-dropdown.component';

import { ReactComponent as Logo } from '../../assets/cpu-logo.svg';
import { ReactComponent as HamburguerIcon } from '../../assets/menu-outline.svg';
import { ReactComponent as SignInIcon } from '../../assets/log-in-outline.svg';
import { ReactComponent as SignOutIcon } from '../../assets/log-out-outline.svg';
// import { ReactComponent as SignInIcon } from '../../assets/login-circle-line.svg';
// import { ReactComponent as SignOutIcon } from '../../assets/logout-circle-line.svg';

import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { SignOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  const [navColor, setNavColor] = useState(false);
  const [mobileNavStatus, setMobileNavStatus] = useState(false);
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  // console.log(currentUser);

  const changeNavColor = () => {
    if (window.scrollY > 50) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  const handleMobileIconClick = () => {
    setMobileNavStatus(!mobileNavStatus);
  };

  const handleOutsideMenuItemCLick = event => {
    const isClick = document
      .querySelector('.mobile-nav')
      .contains(event.target);

    if (!isClick) {
      setMobileNavStatus(false);
    }
  };

  window.addEventListener('scroll', changeNavColor);
  window.addEventListener('click', handleOutsideMenuItemCLick);

  return (
    <Fragment>
      <div className={`header ${navColor && 'nav-color'}`}>
        {/* MOBILE NAV */}
        <div className="mobile-nav mobile-only">
          <HamburguerIcon
            className="hamburguer-icon"
            onClick={handleMobileIconClick}
          />
          {mobileNavStatus && (
            <MobileNavDropdown
              navStatus={mobileNavStatus}
              setNavStatus={setMobileNavStatus}
            />
          )}
        </div>

        <Link className="logo-container" to="/">
          <Logo className="logo" />
          <h1 className="logo-text">THE WIRED</h1>
        </Link>

        <div className="menu-options">
          <Link className="option desktop-only" to="/shop">
            SHOP
          </Link>
          <Link className="option desktop-only" to="/contact">
            CONTACT
          </Link>
          {currentUser ? (
            <span className="option desktop-only" onClick={SignOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="option desktop-only" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
          {!currentUser ? (
            <Link className="mobile-auth-link" to="/auth">
              <SignInIcon className="mobile-only auth-icons sign-in-icon" />
            </Link>
          ) : (
            <SignOutIcon
              className="mobile-only auth-icons sign-out-icon"
              onClick={SignOutUser}
            />
          )}
        </div>

        {isCartOpen && <CartDropdown />}
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
