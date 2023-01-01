import classes from './CartIcon.module.css';

const CartIcon = ({ type, count, amount }) => {
  console.log(count);
  return (
    <div className={classes.cart}>
      {count && <span className={classes.count}>{amount}</span>}
      <i className={`fas ${type} fa-lg ${classes.cartIcon}`}></i>
    </div>
  );
};

export default CartIcon;
