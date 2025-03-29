import React from "react";
import style from "./style.module.scss";
import bigOffMarketimg from "../../assets/NavLogo.png";
import bigwin_mobile from "../../assets/bigwin_mobile.png";

import usericon from "../../assets/profileIcon.png";

const PlusIcon = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.7695 5.76953H8.23047V1.23047C8.23047 0.550894 7.67957 0 7 0C6.32043 0 5.76953 0.550894 5.76953 1.23047V5.76953H1.23047C0.550894 5.76953 0 6.32043 0 7C0 7.67957 0.550894 8.23047 1.23047 8.23047H5.76953V12.7695C5.76953 13.4491 6.32043 14 7 14C7.67957 14 8.23047 13.4491 8.23047 12.7695V8.23047H12.7695C13.4491 8.23047 14 7.67957 14 7C14 6.32043 13.4491 5.76953 12.7695 5.76953Z"
        fill="black"
      />
    </svg>
  );
};
const DropdownArrow = () => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.954876 1.53825L9.04514 1.53825C9.41277 1.53825 9.74792 1.74959 9.90675 2.08157C9.9685 2.2127 10 2.35339 10 2.49312C10 2.70701 9.92744 2.91962 9.78835 3.09245L5.74321 8.10646C5.56211 8.33117 5.2887 8.46167 5.00001 8.46167C4.71132 8.46167 4.43791 8.33117 4.25681 8.10646L0.211672 3.09214C-0.0194058 2.80599 -0.0646028 2.41259 0.0932684 2.08061C0.252095 1.74959 0.586934 1.53825 0.954876 1.53825Z"
        fill="#8C8C8C"
      />
    </svg>
  );
};

const AccountNav = () => {
  const screeWidth = window.innerWidth;
  return (
    <div className={style.AccountNav_wrp}>
      <div className={style.logo_wrp}>
        <h1>In Bitsky</h1>
      </div>
      <div className={style.Accountnav_right}>
        <button className={style.bigOffMarket}>
          {screeWidth > 650 ? (
            <img src={bigOffMarketimg} alt="" />
          ) : (
            <img src={bigwin_mobile} alt="" />
          )}
        </button>
        <div className={style.amount_wrp}>
          <span className={style.amount}>10,000</span>
          <span className={style.currency}>USD</span>
          <button className={style.addBtn}>
            <PlusIcon />
          </button>
        </div>
        <div className={style.profile_wrp}>
          <img src={usericon} alt="" />
          <p>John123</p>
          <DropdownArrow />
        </div>
      </div>
    </div>
  );
};

export default AccountNav;
