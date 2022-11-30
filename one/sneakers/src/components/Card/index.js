import React from 'react';
import styles from './Card.module.scss';


function Card({title, price, imageUrl, onPlus}) {

  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    onPlus({title, price, imageUrl});
    setIsAdded(!isAdded);
  }


  return (
    <div className={styles.card}>
      <img className={styles.unlikeItom} src="/img/unlike.svg" alt="unlike" />
      <img width={133} height={112} src={imageUrl} alt="" />
      <h4>{title}</h4>
      <div className={styles.downCard}>
        <div>
          <span>ЦЕНА</span>
          <p>{price}</p>
        </div>       
        <img onClick={onClickPlus} className={styles.plus} src={isAdded ? "/img/plusAdded.svg" : "/img/plus.svg"} alt="" />
      </div>
    </div>
  );
}

export default Card;
