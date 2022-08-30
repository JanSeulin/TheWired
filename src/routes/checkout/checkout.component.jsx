import { useContext } from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CartContext } from '../../context/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block-image">
            <span>Product</span>
          </div>
          <div className="header-block header-block-description">
            <span>Description</span>
          </div>
          <div className="header-block header-block-quantity">
            <span>Quantity</span>
          </div>
          <div className="header-block header-block-price">
            <span>Price</span>
          </div>
          <div className="header-block header-block-remove">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map(item => (
          <CheckoutItem key={item.id} cartItem={item} />
        ))}
        <span className="total">Total: ${cartTotal}</span>
      </div>
    </div>
  );
};

export default Checkout;
