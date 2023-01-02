import React from 'react';
import classes from './CategoryContainer.module.css';
import products from '../../../data/products/clothes.json';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

const CategoryContainer = ({ category }) => {
  return (
    <div
      className={classes.CategoryContainer}
      //   style={{ backgroundColor: `${category.color}` }}
    >
      <header>
        <Button>
          <>
            Our {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
          </>
        </Button>
      </header>
      <main className={classes.main}>
        {products.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </main>
      {/* <footer>footer</footer> */}
    </div>
  );
};

export default CategoryContainer;
