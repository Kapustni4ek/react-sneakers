import React from 'react';
import styles from './Card.module.scss';


function Card(props) {

  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    setIsAdded(!isAdded);
  }


  return (
    <div className={styles.card}>
      <img className={styles.unlikeItom} src="/img/unlike.svg" alt="unlike" />
      <img width={133} height={112} src={props.imageUrl} alt="" />
      <h4>{props.title}</h4>
      <div className={styles.downCard}>
        <div>
          <span>ЦЕНА</span>
          <p>{props.price}</p>
        </div>       
        <img onClick={onClickPlus} className={styles.plus} src={isAdded ? "/img/plusAdded.svg" : "/img/plus.svg"} alt="" />
      </div>
    </div>
  );
}

export default Card;
