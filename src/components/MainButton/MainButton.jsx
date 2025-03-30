import React from 'react';
import style from './style.module.scss';
import { Link } from 'react-router-dom';

const MainButton = ({ size = 'medium', variant = 'primary', className = '', children, ...props }) => {
  return (
    <Link to='/account' style={{ textDecoration: 'none' }}>
      <button className={`${style.btn} ${style[size]} ${style[variant]} ${className}`} {...props}>
        {children}
      </button>
    </Link>
  );
};

export default MainButton;
