import { useState } from 'react';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import './App.css';


function App() {
  
  const [productList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState('')
  const [filterOn, setFilterOn] = useState(false)
  const [searchItem, setSearchItem] = useState('')
  const [currentSale, setCurrentSale] = useState([])
  //const [cartTotal, setCartTotal] = useState(0)
  
  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then((response) => response.json())
    .then((response) => setProductList(response))
    .catch((error) => console.log(error))
  }, [])
  
  function handleClick(productId){
    const foundProduct = productList.find((product) => {
      return product.id === parseInt(productId)
    })

    const found = currentSale.find((product) => {
      return product.id === foundProduct.id
    })

    if (found === undefined){
      setCurrentSale([...currentSale, foundProduct])
    }
  }

  function handleChange(category){
    setSearchItem(category)
    if (category.length === 0){
      setFilterOn(false)
    }
  }

  function filterCards(category){
    const filteredByCategory = productList.filter(product => {
      return product.category === category
    })
    setFilterCategory(category)
    setFilteredProducts(filteredByCategory)
    setFilterOn(true)
  }

  return (
    <div className="app">
     <Header searchItem={searchItem} setSearchItem={setSearchItem} filterCards={filterCards} setFilterOn={setFilterOn} handleChange={handleChange}></Header>
     <div className='content'>
     <ProductList productList={productList} handleClick={handleClick} filterOn={filterOn} filteredProducts={filteredProducts} filterCategory={filterCategory}></ProductList>
     <Cart currentSale={currentSale} setCurrentSale={setCurrentSale}></Cart>
     </div>
    </div>
  );
}

export default App;
