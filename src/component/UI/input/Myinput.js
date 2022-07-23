import React from 'react';
import stylesa from './MyInput.module.scss';

const Myinput = ({...props}) => {
  return (
    <input className={stylesa.myInput} {...props}/>
  );
};


export default Myinput;