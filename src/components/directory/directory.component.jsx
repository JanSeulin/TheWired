import React from 'react';

import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';
import { HOMEPAGE_DATA } from './directory.data';

const Directory = () => {
  return (
    <div className="directory-menu">
      {HOMEPAGE_DATA.map(({ id, ...otherProps }) => (
        <DirectoryItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Directory;
