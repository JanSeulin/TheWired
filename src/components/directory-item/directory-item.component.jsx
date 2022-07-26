import React from 'react';

import './directory-item.styles.scss';

const DirectoryItem = ({ title, imageUrl, linkUrl }) => {
  return (
    <div className="menu-item">
      <div
        className="background-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">
          EXPLORE <ion-icon name="arrow-redo-outline"></ion-icon>
        </span>
      </div>
    </div>
  );
};

export default DirectoryItem;
