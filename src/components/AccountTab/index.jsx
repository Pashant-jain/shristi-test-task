import React, { useState } from "react";
import style from "./style.module.scss";
import activeBack from "../../assets/activetabBack.png";

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
          <div className={style.myAccount_wrp}>
            <div className={style.myAccount_inner}>
              <div className={style.formWrp}>
                <div className={style.formLft}>sdfd</div>
                <div className={style.formLRight}>
                  {[...Array(5)].map((_, index) => (
                    <div className={style.InputGroup} key={index}>
                      <input type="text" placeholder="asdf" />
                    </div>
                  ))}
                </div>
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
  );
};

export default AccountTab;
