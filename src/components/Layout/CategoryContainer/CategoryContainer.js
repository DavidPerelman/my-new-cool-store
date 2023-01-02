import React from 'react';
import classes from './CategoryContainer.module.css';

const CategoryContainer = ({ category }) => {
  console.log(category);
  return (
    <div
      className={classes.CategoryContainer}
      style={{ backgroundColor: `${category.color}` }}
    >
      <header>
        <h2>Our {category.name}</h2>
      </header>
      <main className={classes.main}>
        <h2>main</h2>
        <h2>main</h2>
        <h2>main</h2>
        <h2>main</h2>
        <h2>main</h2>
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default CategoryContainer;
