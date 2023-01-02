import React, { Fragment } from 'react';
import HeaderIcon from '../HeaderIcon/HeaderIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
  return (
    <>
      <div className={classes.HeaderCartButton}>
        <HeaderIcon type='fa-shopping-cart' count={true} amount={4} />
        <HeaderIcon type='fa-user' />
      </div>
    </>
  );
};

export default HeaderCartButton;
