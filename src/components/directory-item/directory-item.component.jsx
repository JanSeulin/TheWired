import { useNavigate } from 'react-router-dom';

import './directory-item.styles.scss';

import { ReactComponent as ArrowIcon } from '../../assets/arrow-forward-outline.svg';

const DirectoryItem = ({ title, imageUrl }) => {
  const navigate = useNavigate();

  const goToPageHandler = () => {
    navigate(`shop/${title.toLowerCase()}`);
  };

  return (
    <div className="menu-item" onClick={goToPageHandler}>
      <div
        className="background-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">
          EXPLORE <ArrowIcon className="arrow-icon" />
        </span>
      </div>
    </div>
  );
};

export default DirectoryItem;
