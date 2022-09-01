import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../context/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  // console.log(products);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} items={products} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
