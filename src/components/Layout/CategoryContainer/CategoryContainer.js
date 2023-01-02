import React from 'react';
import classes from './CategoryContainer.module.css';

const CategoryContainer = ({ category }) => {
  console.log(category);
  return (
    <main
      className={classes.CategoryContainer}
      style={{ backgroundColor: `${category.color}` }}
    >
      {category.name}
    </main>
  );
};

export default CategoryContainer;
