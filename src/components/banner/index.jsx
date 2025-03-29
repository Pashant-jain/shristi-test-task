import React from "react";
import style from "./style.module.scss";
import BannerImg from "../../assets/SlotMachine.png";
import Heading01 from "../../assets/DashboardHeading01.png";
import MainButton from "../MainButton/MainButton";
import downArrow from "../../assets/downarrowNew.png";
const Banner = () => {
  return (
    <>
      <div className={style.banner_wrp}>
        <div className="container">
          <div className={` ${style.banner_inner}`}>
            <div className={style.left}>
              <img src={Heading01} alt="Placeholder"  className={style.Heading1} />
              <h2 className={style.Heading2}>In Bitsky</h2>
              <div className={style.playNowBtn}>
                <MainButton size="medium" variant="primary">
                  Play Now
                </MainButton>
                {/* <MainButton text="Play Now" className="dashboard-main-btn" /> */}
              </div>
            </div>

            <div className={style.right}>
              <img src={BannerImg} alt="logo" className="Banner Image" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.advisment_wrp}>
        <marquee>
          <div className={style.welcomeTextBg}>
            <p>
              Welcome to <span>Bitsky</span>
            </p>
            <p>
              Welcome to <span>Bitsky</span>
            </p>
            <p>
              Welcome to <span>Bitsky</span>
            </p>
            <p>
              Welcome to <span>Bitsky</span>
            </p>
          </div>
        </marquee>
        <img src={downArrow} alt="Placeholder" className={style.downArrow} />
      </div>
    </>
  );
};

export default Banner;
