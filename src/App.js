import React, { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart/Cart';
import Header from './components/Layout/Header/Header';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} onHideCart={hideCartHandler} />
      <main></main>
    </Fragment>
  );
}

export default App;
