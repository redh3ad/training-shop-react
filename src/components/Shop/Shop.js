import React from 'react';
import Bagbar from '../Bag/Bagbar/Bagbar';
import st from './Shop.module.scss';

const Shop = ({ purchases, handlerActivePage }) => {
  return (
    <div className={st.shop__wrapper}>
      <div className={st.shop__content}>Shop</div>
      <Bagbar purchases={purchases} handlerActivePage={handlerActivePage} />
    </div>
  );
};

export default Shop;
