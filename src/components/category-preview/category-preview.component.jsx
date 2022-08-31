import CategoryItem from '../category-item/category-item.component';
import { Link } from 'react-router-dom';

import './category-preview.styles.scss';

import { ReactComponent as ArrowRight } from '../../assets/arrow-forward-outline.svg';

const CategoryPreview = ({ title, items }) => {
  // console.log(items);
  return (
    <div className="category-preview">
      <div className="text-container">
        <h1 className="title">{title.toUpperCase()}</h1>
        <Link to="/shop" className="see-all">
          All Items <ArrowRight className="arrow-right" />
        </Link>
      </div>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map(item => (
            <CategoryItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
