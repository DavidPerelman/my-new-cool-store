import React, { Fragment, useEffect, useState } from 'react';
import Cart from './components/Cart/Cart/Cart';
import CategoryContainer from './components/Layout/CategoryContainer/CategoryContainer';
import Header from './components/Layout/Header/Header';
// import products from './data/products.json';
import categories from './data/categories.json';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  // console.log(products);
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  // console.log(document.getElementById('categoriesContainers').childNodes);

  return (
    <Fragment>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}

      <Header onShowCart={showCartHandler} onHideCart={hideCartHandler} />
      <div
        id='categoriesContainers'
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
