import React from 'react'
import FooterLogo from '../../assets/FooterLogo.png';
import styles from './style.module.scss';
import telegram from '../../assets/telegram.png';
import discord from '../../assets/discord.png';
import YoutubeFooter from '../../assets/YoutubeFooter.png';
import twitter from '../../assets/twitter.png';
import InstagramFooter from '../../assets/InstagramFooter.png';

const index = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={`${styles.footerSection} ${styles.logoSection}`}>
              <img src={FooterLogo} alt='footer-logo' className={styles.footerLogo} />
              <p className={styles.footerDescription}>
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout.
              </p>
            </div>
            <div className={styles.footerSection}>
              <h1>Platform</h1>
              <p>Casino</p>
              <p>Sportsbook</p>
              <p>FAQ</p>
            </div>
            <div className={styles.footerSection}>
              <h1>About Us</h1>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              <p>How To Play</p>
            </div>
            <div className={`${styles.footerSection} ${styles.contactSection}`}>
              <h1>Contact</h1>
              <p>
                Support: <span>support@bitsky.com</span>
              </p>
              <p>
                Partners: <span>partners@bitsky.com</span>
              </p>
              <p>
                Legal: <span>legal@bitsky.com</span>
              </p>
              <div className={styles.socialIcons}>
                <img src={telegram} alt='telegram' />
                <img src={discord} alt='discord' />
                <img src={twitter} alt='twitter' />
                <img src={InstagramFooter} alt='instagram' />
                <img src={YoutubeFooter} alt='youtube' />
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>2024 Bitsky.bet, All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default index