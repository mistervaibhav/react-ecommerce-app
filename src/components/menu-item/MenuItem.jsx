import React from 'react';

import './style.scss';

const MenuItem = ({ title, subtitle = 'Shop now', image, key, size }) => {
  const style = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className={`menu-item ${size}`} key={key}>
      <div style={style} className='background-image'></div>
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>{subtitle}</span>
      </div>
    </div>
  );
};

export default MenuItem;
