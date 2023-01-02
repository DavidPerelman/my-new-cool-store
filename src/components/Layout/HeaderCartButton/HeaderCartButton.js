import React, { Fragment } from 'react';
import HeaderIcon from '../HeaderIcon/HeaderIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }) => {
  return (
    <>
      <div className={classes.HeaderCartButton}>
        <HeaderIcon
          type='fa-shopping-cart'
          count={true}
          amount={4}
          onClick={onClick}
        />
        <HeaderIcon type='fa-user' />
      </div>
    </>
  );
};

export default HeaderCartButton;
