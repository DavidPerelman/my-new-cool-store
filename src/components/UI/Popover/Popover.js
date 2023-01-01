import React from 'react';
import classes from './Popover.module.css';

const Popover = ({ icon, children }) => {
  return (
    <div className={classes.popover__wrapper}>
      <h2 className={classes.popover__title}>{icon}</h2>
      <div className={classes.popover__content}>{children}</div>
    </div>
  );
};

export default Popover;
