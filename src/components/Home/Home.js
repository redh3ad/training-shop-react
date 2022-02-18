import React from 'react';
import st from './Home.module.scss';
import uniqid from 'uniqid';

const Index = () => {
  const images = [
    '/assets/watch-apple.png',
    '/assets/headphones-sony.png',
    '/assets/apple-iphone-12-black.png',
    '/assets/apple-iphone-12-green.png',
    '/assets/apple-macbook.png',
    '/assets/apple-iphone-12-red.png',
    '/assets/apple-iphone-12-white.png',
    '/assets/apple-iphone-12-pro-pink.png',
    '/assets/apple-iphone-12-pro-blue.png',
    '/assets/dell-xps-13-black.png',
    '/assets/apple-iphone-13-pro-blue.png',
    '/assets/apple-iphone-13-pro-black.png',
    '/assets/samsung-note21-pinl-green.png',
    '/assets/samsung-s21-purple.png',
    '/assets/dell-xps-13-white.png',
    '/assets/dell-xps-15-black.png',
  ];
  return (
    <div className={st.home__container}>
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
