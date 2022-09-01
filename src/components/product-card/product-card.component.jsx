import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import CustomButton from '../reusable/custom-button/custom-button.component';

import { CartContext } from '../../context/cart.context';
import { ReactComponent as ShopCart } from '../../assets/cart-outline.svg';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { addItemToCart, setIsCartOpen } = useContext(CartContext);
  const { name, price, imageUrl } = product;
  const location = useLocation();

  const addItemHandler = () => {
    addItemToCart(product);
    setIsCartOpen(true);
  };

  return (
    <div
      className={`${
        location.pathname === '/shop' ? 'applyClass' : ''
      } category-item`}
    >
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton id="add-to-cart " onClick={addItemHandler}>
        + <ShopCart className="shop-cart-icon" />
      </CustomButton>
    </div>
  );
};

export default ProductCard;
