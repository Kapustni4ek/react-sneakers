import styles from './Drawer.module.scss';

function Drawer({onClose, items = [] }) {
  return (
    <div className="drawer">
      <div className={styles.opacityBlock}>
        <div className={styles.outBlock}>
          <div className="topCart d-flex justify-between mb-20">
            <h3>Корзина</h3>
            <img onClick={onClose} className="cu-p" src="/img/unbuy.svg" alt="unbuy" />
          </div>

          <div className={styles.cartItems}>

          {items.map((obj) => (
              <div className={styles.cardItem}>
              <img
                className="mr-20"
                width={80}
                height={70}
                src={obj.imageUrl}
                alt="sneaker"
              />
              <div>
                <p>{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img className="cu-p ml-20" src="/img/unbuy.svg" alt="unbuy" />
            </div>
            ))}

          </div>

          <div className={styles.totalCartBlock}>
            <ul>
              <li className="d-flex justify-between ">
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li className="d-flex justify-between">
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button>
              Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
