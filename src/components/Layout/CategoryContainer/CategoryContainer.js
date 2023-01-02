import React from 'react';
import classes from './CategoryContainer.module.css';
import products from '../../../data/products/clothes.json';
import Card from '../../UI/Card/Card';

const CategoryContainer = ({ category }) => {
  console.log(products);
  return (
    <div
      className={classes.CategoryContainer}
      style={{ backgroundColor: `${category.color}` }}
    >
      <header>
        <h2>Our {category.name}</h2>
      </header>
      <main className={classes.main}>
        {products.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default CategoryContainer;
