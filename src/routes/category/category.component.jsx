import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../context/categories.context';
import { ReactComponent as ReturnIcon } from '../../assets/caret-back-outline.svg';

import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      <div className="category-text-container">
        <h1 className="category-title">{category.toUpperCase()}</h1>
        <Link to="/shop" className="return">
          <ReturnIcon className="return-icon" /> Return
        </Link>
      </div>
      <div className="category-item-container">
        {products &&
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Category;
