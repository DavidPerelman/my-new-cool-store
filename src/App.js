import React, { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart/Cart';
import CategoryContainer from './components/Layout/CategoryContainer/CategoryContainer';
import Header from './components/Layout/Header/Header';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const categories = [
    { id: 1, name: 'Clothes', color: 'red' },
    { id: 2, name: 'Shoes', color: 'blue' },
    { id: 3, name: 'Electronics', color: 'green' },
  ];

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
      <div
        style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column' }}
      >
        {categories.map((category) => {
          return <CategoryContainer key={category.id} category={category} />;
        })}
      </div>
    </Fragment>
  );
}

export default App;
