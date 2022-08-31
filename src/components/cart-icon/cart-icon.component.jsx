import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCartStatus = () => {
    setIsCartOpen(!isCartOpen);
  };

  const clickOutsideHandler = event => {
    const isClicked = document
      .querySelector('.cart-icon-container')
      .contains(event.target);

    // console.log('clicked on icon?', isClicked);
    if (!isClicked) {
      setIsCartOpen(false);
    }
  };

  document.addEventListener('click', clickOutsideHandler);

  return (
    <div className="cart-icon-container" onClick={toggleCartStatus}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
