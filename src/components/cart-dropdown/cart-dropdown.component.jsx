import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/cart.context';
import { UserContext } from '../../context/user.context';
import CartItem from '../cart-item/cart-item.component';

import CustomButton from '../reusable/custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems, cartTotal, setIsCartOpen } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    setIsCartOpen(false);

    navigate('/checkout');
  };

  const goToSignInHandler = () => {
    setIsCartOpen(false);

    navigate('/auth');
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          ''
        ) : (
          <span className="empty-cart">Your cart is empty.</span>
        )}
        {cartItems.map(item => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        {cartTotal > 0 && (
          <span className="cart-total-dropdown">Total: ${cartTotal}</span>
        )}
      </div>
      {currentUser ? (
        <CustomButton onClick={goToCheckoutHandler}>
          GO TO CHECKOUT
        </CustomButton>
      ) : (
        <CustomButton onClick={goToSignInHandler}>
          &#128274; SIGN IN TO CHECKOUT
        </CustomButton>
      )}
    </div>
  );
};

export default CartDropdown;
