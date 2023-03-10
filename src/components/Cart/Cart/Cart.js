import React from 'react';
import Modal from '../../UI/Modal/Modal';
import classes from './Cart.module.css';

const Cart = ({ onCloseCart }) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[
        {
          id: 'c1',
          name: 'Sushi',
          description: 'Sushi',
          category: 'Sushi',
          images: 'Sushi',
          amount: 2,
          price: 12.99,
        },
      ].map((item) => {
        <li>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal onClose={onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
