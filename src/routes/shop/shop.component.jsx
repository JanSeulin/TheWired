import { useState, useContext } from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import { SHOP_DATA } from './shop.data';
import { ProductsContext } from '../../context/products.context';

import './shop.styles.scss';

const Shop = () => {
  const [categories, setCategories] = useState(SHOP_DATA);
  const { products } = useContext(ProductsContext);

  return (
    <div className="shop-page">
      {products.map(({ id, ...otherCategoryProps }) => (
        <CategoryPreview key={id} {...otherCategoryProps} />
      ))}
    </div>
  );
};

export default Shop;
