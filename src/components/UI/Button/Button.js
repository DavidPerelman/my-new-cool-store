import React from 'react';
import './Button.css';

const Button = ({ children }) => {
  console.log(children);
  return <button className='button'>{children}</button>;
};

export default Button;
