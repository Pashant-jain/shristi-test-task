import React, { useState } from "react";
import style from "./style.module.scss";
import activeBack from "../../assets/activetabBack.png";
import Skull from "../../assets/Skull.png"
import Account from "../../assets/Account.png"
import MainButton from "../MainButton/MainButton";

const tabs = ["My Account", "Wallet", "All Transactions", "My Affiliates"];

const AccountTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <div className='container'>
            <div className={style.myAccount_wrp}>
              <div className={style.myAccount_inner}>
                <img src={Account} alt='account' />
                <div className={style.formWrp}>
                  <div className={style.formLft}>
                    <img src={Skull} alt='account-img' />
                  </div>
                  <div className={style.formLRight}>
                    {[...Array(6)].map((_, index) => (
                      <div className={style.InputGroup} key={index}>
                        <input type='text' placeholder='First Name' />
                      </div>
                    ))}
                  </div>
                </div>
             
                  <MainButton size='medium' variant='primary' className={style.formBtn}>
                    Play Now
                  </MainButton>
                
              </div>
            </div>
          </div>
        );
      case 1:
        return <div>Wallet Content</div>;
      case 2:
        return <div>All Transactions Content</div>;
      case 3:
        return <div>My Affiliates Content</div>;
      default:
        return null;
    }
  };

  return (
     <div className='container'>
    <div className={style.tabWap}>
      <div className={style.tabHead}>
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={index === activeTab ? style.activeTab : ""}
              onClick={() => handleTabClick(index)}
            >
              {tab}
              {index === activeTab && <img src={activeBack} alt="active" />}
            </li>
          ))}
        </ul>
      </div>
      <div className={style.tabconent}>{renderTabContent()}</div>
      </div>
      </div>
  );
};

export default AccountTab;
