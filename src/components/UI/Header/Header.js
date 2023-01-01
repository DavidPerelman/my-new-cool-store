import React, { Fragment } from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>MyCoolStore</h2>
        <button>Cart</button>
      </header>
    </Fragment>
  );
};

export default Header;
