import React from 'react';
import style from './style.module.scss';
import MainButton from "../MainButton/MainButton";
import YouTube from '../../assets/YouTube.png';
import Instagram from '../../assets/Instagram.png';
import Twitch from '../../assets/Twitch.png';
import Facebook from '../../assets/Facebook.png';
import WhatsApp from '../../assets/WhatsApp.png';
import TikTok from '../../assets/TikTok.png';



const index = () => {
  return (
    <div className={style.socialMediaWrapper}>
      <div className='container'>
        <div className={style.socialMediaInner}>
          <MainButton size='medium' variant='secondary' className={style.playoffBtn}>
            <span>Social Media</span>
          </MainButton>

          <div className={style.socialMediaContainer}>
            <h2 className={style.socialMediaTitle}>FOLLOW US ON &gt;&gt;</h2>

            <div className={style.socialMediaGrid}>
              <div className={style.socialMediaItem}>
                <button className={style.socialMediaButton}>
                  <img src={YouTube} alt='YouTube' className={style.socialMediaIcons} />
                  <span>YouTube</span>
                </button>
              </div>

              <div className={style.socialMediaItem}>
                <button className={style.socialMediaButton}>
                  <img src={Instagram} alt='Instagram' className={style.socialMediaIcons} />
                  <span>Instagram</span>
                </button>
              </div>

              <div className={style.socialMediaItem}>
                <button className={style.socialMediaButton}>
                  <img src={Twitch} alt='Twitch' className={style.socialMediaIcons} />
                  <span>Twitch</span>
                </button>
              </div>

              <div className={style.socialMediaItem}>
                <button className={style.socialMediaButton}>
                  <img src={Facebook} alt='Facebook' className={style.socialMediaIcons} />
                  <span>Facebook</span>
                </button>
              </div>

              <div className={style.socialMediaItem}>
                <button className={style.socialMediaButton}>
                  <img src={WhatsApp} alt='WhatsApp' className={style.socialMediaIcons} />
                  <span>WhatsApp</span>
                </button>
              </div>

              <div className={style.socialMediaItem}>
                <button className={style.socialMediaButton}>
                  <img src={TikTok} alt='TikTok' className={style.socialMediaIcons} />
                  <span>TikTok</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
