import { useContext } from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import { CategoriesContext } from '../../context/categories.context';

import './shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="shop-page">
      {Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} items={products} />;
      })}
    </div>
  );
};

export default Shop;
