import classes from './CartIcon.module.css';

const CartIcon = () => {
  return (
    <div className={classes.cart}>
      <span className={classes.count}>1</span>
      <i className={`fas fa-shopping-cart fa-xl ${classes.cartIcon}`}></i>
    </div>
  );
};

export default CartIcon;
