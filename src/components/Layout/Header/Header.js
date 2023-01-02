import React, { Fragment } from 'react';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';
import classes from './Header.module.css';

const Header = ({ onShowCart }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>MyCoolStore</h2>
        <HeaderCartButton onClick={onShowCart} />
      </header>
    </Fragment>
  );
};

export default Header;
