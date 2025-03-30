import React from 'react'
import style from './style.module.scss';
import MainButton from '../MainButton/MainButton';

const index = () => {
  return (
    <div className={style.SubscribeCards_wrp}>
      <div className='container'>
        <div className={style.SubscribeCards_inner}>
          <div className={`${style.SubscribeCard} ${style.SubscribeCard2}`}>
            <div className={style.cardContent}>
              <h2>Refer Your Friend and Earn Rewards!</h2>
              <p>Refer your friends and enjoy exclusive bonuses and discounts.</p>
              <MainButton size='small' variant='primary'>
                Play Now
              </MainButton>
            </div>
          </div>
          <div className={`${style.SubscribeCard} ${style.SubscribeCard1}`}>
            <div className={style.cardContent}>
              <h2>Refer Your Friend and Earn Rewards!</h2>
              <p>Refer your friends and enjoy exclusive bonuses and discounts.</p>
              <MainButton size='small' variant='primary' className={style.subCardBtn}>
                Play Now
              </MainButton>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default index