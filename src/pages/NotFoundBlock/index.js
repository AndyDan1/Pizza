import React, {memo} from 'react';
import classes from './styles.module.scss';


const NotFoundBlock = () => {
  return (
    <div className={classes.root}>
      <span>😕</span>
      <br/>
      <h1>Ничего не найдено</h1>
      <p>Страница отсутствует</p>
    </div>
  );
};

export default memo(NotFoundBlock);