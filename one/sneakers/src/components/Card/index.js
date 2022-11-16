import styles from './Card.module.scss';


function Card(props) {
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
        <button>
          <img src="/img/plus.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Card;
