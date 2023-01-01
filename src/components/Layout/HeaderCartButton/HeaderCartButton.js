import React, { Fragment } from 'react';
import CartIcon from '../../Cart/CartIcon/CartIcon';
import Popover from '../../UI/Popover/Popover';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
  return (
    <div className={classes.HeaderCartButton}>
      <Popover
        icon={<CartIcon type='fa-shopping-cart' count={true} amount={4} />}
      ></Popover>
      <Popover icon={<CartIcon type='fa-user' />}></Popover>
    </div>
  );
};

export default HeaderCartButton;
