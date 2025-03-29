import React from "react";
import style from "./style.module.scss";
import MainButton from "../MainButton/MainButton";
const ReferCards = () => {
  return (
    <div className={style.ReferCards_wrp}>
      <div className="container">
        <div className={style.ReferCards_inner}>
          <div className={`${style.ReferCard} ${style.ReferCard1}`}>
            <div className={style.cardContent}>
              <h2>Refer Your Friend and Earn Rewards!</h2>
              <p>
                Refer your friends and enjoy exclusive bonuses and discounts.
              </p>
              <MainButton size="small" variant="primary">
                Play Now
              </MainButton>
            </div>
          </div>
          <div className={`${style.ReferCard} ${style.ReferCard2}`}>
            <div className={style.cardContent}>
              <h2>Refer Your Friend and Earn Rewards!</h2>
              <p>
                Refer your friends and enjoy exclusive bonuses and discounts.
              </p>
              <MainButton
                size="small"
                variant="primary"
                className={style.womenBtn}
              >
                Play Now
              </MainButton>
            </div>
          </div>
        </div>
        <div className={style.playoffCta} >
        <MainButton size="large" variant="secondary" className={style.playoffBtn}>
      <span>Play Off Market Games</span>
              </MainButton>
        </div>
      </div>
    </div>
  );
};

export default ReferCards;
