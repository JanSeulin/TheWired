import { useContext } from 'react';

import CustomButton from '../reusable/custom-button/custom-button.component';

import { CartContext } from '../../context/cart.context';
import { ReactComponent as ShopCart } from '../../assets/cart-outline.svg';

import './category-item.styles.scss';

const CategoryItem = ({ item }) => {
  const { addItemToCart, setIsCartOpen } = useContext(CartContext);
  const { name, price, imageUrl } = item;

  const addItemHandler = () => {
    addItemToCart(item);
    setIsCartOpen(true);
  };

  return (
    <div className="category-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton id="add-to-cart" onClick={addItemHandler}>
        Add to Cart
        <ShopCart className="shop-cart-icon" />
      </CustomButton>
    </div>
  );
};

export default CategoryItem;
