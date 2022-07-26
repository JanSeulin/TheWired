import { useState } from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import { SHOP_DATA } from './shop.data';

import './shop.styles.scss';

const Shop = () => {
  const [categories, setCategories] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {categories.map(({ id, ...otherCategoryProps }) => (
        <CategoryPreview key={id} {...otherCategoryProps} />
      ))}
    </div>
  );
};

export default Shop;
