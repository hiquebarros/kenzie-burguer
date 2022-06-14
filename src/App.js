import { useState } from "react";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import "./App.css";

function App() {
  const [productList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterOn, setFilterOn] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProductList(response))
      .catch((error) => console.log(error));
  }, []);
  console.log(productList);

  function handleClick(product) {
    const found = currentSale.find((element) => {
      return element === product;
    });

    if (found === undefined) {
      setCurrentSale([...currentSale, product]);
    }
  }

  function handleChange(category) {
    setSearchItem(category);
    if (category.length === 0) {
      setFilterOn(false);
    }
  }

  function filterCards(text) {
    const filteredByCategory = productList.filter(({ name, category }) => {
      return (
        name.toLowerCase().includes(text.toLowerCase()) ||
        category.toLowerCase().includes(text.toLowerCase())
      );
    });

    setFilterCategory(text);
    setFilteredProducts(filteredByCategory);
    setFilterOn(true);
  }

  return (
    <div className="app">
      <Header
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        filterCards={filterCards}
        setFilterOn={setFilterOn}
        handleChange={handleChange}
      />
      <div className="content">
        <ProductList
          productList={productList}
          handleClick={handleClick}
          filterOn={filterOn}
          filteredProducts={filteredProducts}
          filterCategory={filterCategory}
        />
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </div>
    </div>
  );
}

export default App;
