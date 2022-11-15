function Card() {
  return (
    <div className="card p-30 justify-center">
      <img className="unlikeItom" src="/img/unlike.svg" alt="unlike" />
      <img width={133} height={112} src="/img/image5.jpg" alt="" />
      <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
      <div className="downCard d-flex justify-between align-center">
        <div>
          <span>ЦЕНА</span>
          <p>12 999 руб.</p>
        </div>
        <button>
          <img src="/img/plus.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Card;
