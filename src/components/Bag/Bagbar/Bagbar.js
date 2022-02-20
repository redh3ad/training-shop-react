import React from 'react';
import st from './Bagbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Bagbar = ({ purchases, handlerActivePage }) => {
  return (
    <div className={st.bagbar__wrapper}>
      <div className={st.bagbar__container}>
        <h2 className={st.bagbar__title}>Bag</h2>
        <div className={st.purchases__container}>
          {purchases.length === 0 ? (
            <h3>Your bag is empty, please select an item.</h3>
          ) : (
            purchases.map((purchase) => {
              return (
                <div key={purchase.id} className={st.purchase__container}>
                  <img
                    src={process.env.PUBLIC_URL + purchase.src}
                    alt={purchase.alt}
                    width={purchase.size ? '65px' : '55px'}
                  />
                  <FontAwesomeIcon
                    className={st.purchase__cross}
                    icon={faCircleXmark}
                  />
                </div>
              );
            })
          )}
        </div>

        <Link onClick={handlerActivePage} data-name="bag" to="/bag">
          <button className={st.bagbar__button} data-name="bag">
            <svg
              width="36"
              height="36"
              viewBox="4 4 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-name="bag"
            >
              <path
                d="M29.3117 16.6498C29.1727 16.5098 29.0073 16.3987 28.825 16.3231C28.6428 16.2475 28.4473 16.2087 28.25 16.2092H25.25V15.4592C25.25 14.0668 24.6969 12.7314 23.7123 11.7469C22.7277 10.7623 21.3924 10.2092 20 10.2092C18.6076 10.2092 17.2723 10.7623 16.2877 11.7469C15.3031 12.7314 14.75 14.0668 14.75 15.4592V16.2092H11.75C11.3522 16.2092 10.9706 16.3672 10.6893 16.6485C10.408 16.9298 10.25 17.3113 10.25 17.7092V27.8342C10.25 29.6623 11.7969 31.2092 13.625 31.2092H26.375C27.2593 31.2094 28.1086 30.8637 28.7413 30.2459C29.0596 29.9421 29.3132 29.577 29.4865 29.1726C29.6599 28.7682 29.7495 28.3328 29.75 27.8928V17.7092C29.7506 17.5124 29.7122 17.3174 29.637 17.1356C29.5617 16.9537 29.4512 16.7886 29.3117 16.6498ZM16.25 15.4592C16.25 14.4646 16.6451 13.5108 17.3483 12.8075C18.0516 12.1043 19.0054 11.7092 20 11.7092C20.9946 11.7092 21.9484 12.1043 22.6517 12.8075C23.3549 13.5108 23.75 14.4646 23.75 15.4592V16.2092H16.25V15.4592ZM25.25 19.9592C25.25 21.3516 24.6969 22.6869 23.7123 23.6715C22.7277 24.656 21.3924 25.2092 20 25.2092C18.6076 25.2092 17.2723 24.656 16.2877 23.6715C15.3031 22.6869 14.75 21.3516 14.75 19.9592V19.2092C14.75 19.0103 14.829 18.8195 14.9697 18.6788C15.1103 18.5382 15.3011 18.4592 15.5 18.4592C15.6989 18.4592 15.8897 18.5382 16.0303 18.6788C16.171 18.8195 16.25 19.0103 16.25 19.2092V19.9592C16.25 20.9537 16.6451 21.9076 17.3483 22.6108C18.0516 23.3141 19.0054 23.7092 20 23.7092C20.9946 23.7092 21.9484 23.3141 22.6517 22.6108C23.3549 21.9076 23.75 20.9537 23.75 19.9592V19.2092C23.75 19.0103 23.829 18.8195 23.9697 18.6788C24.1103 18.5382 24.3011 18.4592 24.5 18.4592C24.6989 18.4592 24.8897 18.5382 25.0303 18.6788C25.171 18.8195 25.25 19.0103 25.25 19.2092V19.9592Z"
                fill="white"
                data-name="bag"
              />
            </svg>
            View Bag
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Bagbar;
