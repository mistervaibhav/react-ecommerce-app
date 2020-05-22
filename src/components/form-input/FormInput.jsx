import React from 'react';

import './style.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className='group'>
      <input type='text' onChange={handleChange} {...otherProps} className='form-input' />
      {label ? (
        <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
