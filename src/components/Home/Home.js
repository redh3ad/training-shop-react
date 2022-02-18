import React from 'react';
import st from './Home.module.scss';
import uniqid from 'uniqid';
import { images } from '../../data/data';

const Index = () => {
  return (
    <div className={st.home__container}>
      <div className={st.home__description}>
        <h1>Welcome to the Tech Shop !</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          fugit at, labore perferendis aut praesentium nisi sed facere
          voluptatibus similique ullam iusto libero beatae molestias pariatur
          voluptatum? Nobis ut facere aliquid voluptate reiciendis vero nesciunt
          sequi, neque voluptates cupiditate quisquam, aut omnis! Ad ut non
          commodi delectus, provident tenetur obcaecati.
        </h2>
      </div>
      <div className={st.img__container}>
        {images.map((image) => {
          return (
            <img
              key={uniqid()}
              src={`${process.env.PUBLIC_URL}${image}`}
              alt={image.split('/')[3]}
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
