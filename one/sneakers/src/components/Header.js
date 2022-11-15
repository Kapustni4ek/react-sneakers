function Header() {
  return (
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
          <img
            width={20}
            height={19}
            className="mr-10"
            src="/img/cassa.svg"
            alt=""
          />
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
  );
}

export default Header;
