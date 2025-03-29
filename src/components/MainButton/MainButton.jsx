import React from 'react';
import style from './style.module.scss';

const MainButton = ({ size = 'medium', variant = 'primary', className="", children, ...props }) => {
  return (
    <button className={`${style.btn} ${style[size]} ${style[variant]} ${className}`} {...props}>

      {children}
    </button>
  );
};

export default MainButton;
