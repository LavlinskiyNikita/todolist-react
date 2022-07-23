import React from 'react';

const ButtonItem = ({ children , ...props}) => {
  return (
    <button className="btn-delete" {...props}>
      {children}
    </button>
  );
};


export default ButtonItem;