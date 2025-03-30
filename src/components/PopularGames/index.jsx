import React from "react";
import style from "./style.module.scss";
import PopularGame01 from "../../assets/PopularGame01.png";
import PopularGame02 from '../../assets/PopularGame02.png';
import PopularGame03 from '../../assets/PopularGame03.png';
import PopularGame04 from '../../assets/PopularGame04.png';
import PopularGame05 from '../../assets/PopularGame05.png';
import PopularGame06 from '../../assets/PopularGame06.png';
import PopularGame07 from '../../assets/PopularGame07.png';
import PopularGame08 from '../../assets/PopularGame08.png';
import PopularGame09 from '../../assets/PopularGame09.png';
import PopularGame10 from '../../assets/PopularGame10.png';
import EmptyHeart from "../../assets/EmptyHeart.png"
import MainButton from "../MainButton/MainButton";

const PopularGames = () => {

  const games = [
    { id: 1, image: PopularGame01 },
    { id: 2, image: PopularGame02 },
    { id: 3, image: PopularGame03 },
    { id: 4, image: PopularGame04 },
    { id: 5, image: PopularGame05 },
    { id: 6, image: PopularGame06 },
    { id: 7, image: PopularGame07 },
    { id: 8, image: PopularGame08 },
    { id: 9, image: PopularGame09 },
    { id: 10, image: PopularGame10 },
  ];  
  return (
    <div className={style.PopularGames_wrp}>
      <div className='container'>
        <div className={style.heading}>Popular Games</div>
        <div className={style.card_wrp}>
          {games.map((game) => (
            <div className={style.card}>
              <div className={style.imageContainer}>
                <img src={game.image} alt='PopularGame01' />
                <img src={EmptyHeart} alt='Wishlist' className={style.heartIcon} />
              </div>
              <MainButton size='small' variant='primary' className={style.playBtn}>
                Play Now
              </MainButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularGames;
