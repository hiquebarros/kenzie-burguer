import "./styles.css";

function CartProduct({ product, currentSale, setCurrentSale}) {

  function removeFromCard(itemId){
    const filteredSale = currentSale.filter(saleItem => {
      return saleItem.id !== parseInt(itemId)
    })
    setCurrentSale(filteredSale)
  }
    
  return (
    <div className="cart-product">
      <div className="cart-product--content">
        <div className="cart-product--img">
            <img src={product.img} alt="."></img>
        </div>
        <div className="cart-product--description">
          <h3>{product.name}</h3>
          <span>{product.category}</span>
        </div>
      </div>
      <div className="cart-product--remove">
        <button id={product.id} onClick={(evt)=> removeFromCard(evt.target.id)}>Remover</button>
      </div>
    </div>
  );
}

export default CartProduct;
