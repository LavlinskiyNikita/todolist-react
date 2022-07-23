import React from 'react';
import styles from './MyButton.module.scss';

const Mubutton = ({children, ...props}) => {
  return (
    <button className={styles.Bytton} {...props}>
      {children}
    </button>
  );
};

export default Mubutton;