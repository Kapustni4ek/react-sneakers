import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
 

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    fetch('https://6375561208104a9c5f97b635.mockapi.io/Items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      }, [])
  });

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">

      {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} />  : null }

      <Header onClickCart={() => setCartOpened(true)}/>

      <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..." />
            {searchValue && (
              <img onClick={()=> setSearchValue('')} className="searchdel cu-p ml-20" src="/img/unbuy.svg" alt="unbuy" />
            )}
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((obj, index) => (
            <Card 
            key={index}
            title={obj.title} 
            price={obj.price} 
            imageUrl={obj.imageUrl} 
            onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
