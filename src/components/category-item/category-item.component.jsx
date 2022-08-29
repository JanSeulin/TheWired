import React from 'react';

import './category-item.styles.scss';

import CustomButton from '../reusable/custom-button/custom-button.component';

import { ReactComponent as ShopCart } from '../../assets/cart-outline.svg';

const CategoryItem = ({ item }) => {
  const { name, price, imageUrl } = item;
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
      <CustomButton>
        Add to Cart
        <ShopCart className="shop-cart-icon" />
      </CustomButton>
    </div>
  );
};

export default CategoryItem;
