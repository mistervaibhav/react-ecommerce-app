import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import Button from '../custom-button/Button';

import './style.scss';

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;

  return (
    <div className='collection-item'>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className='image'
      ></div>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{'$'.concat(price)}</span>
      </div>
      <Button inverted onClick={() => addItem(item)}>
        ADD TO CART
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
