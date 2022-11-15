


function App() {
  return (
    <div className="wrapper clear">

      <div className="cartBlock">
        <div style={{display: 'none'}} className="opacityBlock">
          <div className="outBlock">

            <div className="topCart d-flex justify-between mb-20"> 
              <h3>Корзина</h3>
              <img className="cu-p" src="/img/unbuy.svg" alt="unbuy" />
            </div>  

            <div className="cartItems">
              <div className="cardItem d-flex justify-berween align-center">
                <img className="mr-20" width={80} height={70} src="/img/image6.jpg" alt="sneaker" />
                <div>
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 руб.</b>
                </div>
                <img className="cu-p ml-20" src="/img/unbuy.svg" alt="unbuy" />
              </div>

              <div className="cardItem d-flex justify-berween align-center">
                <img className="mr-20" width={80} height={70} src="/img/image7.jpg" alt="sneaker" />
                <div>
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 руб.</b>
                </div>
                <img className="cu-p ml-20" src="/img/unbuy.svg" alt="unbuy" />
              </div>

              <div className="cardItem d-flex justify-berween align-center">
                <img className="mr-20" width={80} height={70} src="/img/image7.jpg" alt="sneaker" />
                <div>
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 руб.</b>
                </div>
                <img className="cu-p ml-20" src="/img/unbuy.svg" alt="unbuy" />
              </div>
            </div>

            
            <div className="totalCartBlock">
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
              <button>Оформить заказ <img src="/img/arrow.svg" alt="arrow" /></button>
            </div>
          </div>
        </div>      
      </div>

      <header className="d-flex justify-between p-40">
        <div className="headerLeft d-flex align-center">
        <img width={40} height={40} src="./img/logo.png" alt="" />
          <div className="ml-15">
            <h3>REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight d-flex align-center">
          <li>
            <img width={20} height={19} className="mr-10" src="/img/cassa.svg" alt="" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={21} height={19} src="/img/heart.svg" alt="" />
          </li>
          <li>
          <img width={20} height={20} src="/img/user.svg" alt="" />
          </li>
        </ul>
      </header>  
      <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
          <div className="d-flex justify-between">
            <div className="card p-30 justify-center">
              <img className="unlikeItom" src="/img/unlike.svg" alt="unlike" />
              <img width={133} height={112}  src="/img/image5.jpg" alt="" />
              <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
              <div className="downCard d-flex justify-between align-center">
                <div>
                <span>ЦЕНА</span>
                <p>12 999 руб.</p>
                </div>
                <button><img src="/img/plus.svg" alt="" /></button>
              </div>
            </div>

            <div className="card p-30 justify-center">
              <img width={133} height={112}  src="/img/image6.jpg" alt="" />
              <h4>Мужские Кроссовки Nike Air Max 270</h4>
              <div className="downCard d-flex justify-between align-center">
                <div>
                <span>ЦЕНА</span>
                <p>12 999 руб.</p>
                </div>
                <button><img src="/img/plus.svg" alt="" /></button>
              </div>
            </div>

            <div className="card p-30 justify-center">
              <img width={133} height={112}  src="/img/image7.jpg" alt="" />
              <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
              <div className="downCard d-flex justify-between align-center">
                <div>
                <span>ЦЕНА</span>
                <p>8 499 руб.</p>
                </div>
                <button><img src="/img/plus.svg" alt="" /></button>
              </div>
            </div>

            <div className="card p-30 justify-center">
              <img width={133} height={112}  src="/img/image8.jpg" alt="" />
              <h4>Кроссовки Puma X Aka Boku Future Rider</h4>
              <div className="downCard d-flex justify-between align-center">
                <div>
                <span>ЦЕНА</span>
                <p>8 999 руб.</p>
                </div>
                <button><img src="/img/plus.svg" alt="" /></button>
              </div>
            </div>
          </div> 
        </div>

    </div>
  );
}

export default App;
