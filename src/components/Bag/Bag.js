import React from 'react';
import Bagbar from './Bagbar/Bagbar';
import st from './Bag.module.scss';

const Bag = ({ purchases, handlerActivePage }) => {
  return (
    <div className={st.bag__wrapper}>
      <div className={st.bag__content}>Bag</div>
      <Bagbar purchases={purchases} handlerActivePage={handlerActivePage} />
    </div>
  );
};

export default Bag;
