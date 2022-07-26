import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/cpu-logo.svg';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className="header">
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
          <Link className="option" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
