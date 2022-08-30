import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCartStatus = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={toggleCartStatus} />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
