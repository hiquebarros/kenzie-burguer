import CartProduct from "../CartProduct/CartProduct";
import "./styles.css";

function Cart({ currentSale, setCurrentSale }) {

  const totalValue = currentSale.reduce((a,b) => a + b.price , 0)
  
  return (
    <div className="cart">
      <div className="cart-title">
        <h2>Carrinho de compras</h2>
      </div>

      {currentSale.length === 0 ? (
        <div className="cart-emptybag">
          <h3>Sua sacola está vazia</h3>
          <span>Adicione itens</span>
        </div>
      ) : (
        <div className="cart-fullbag">
          {currentSale.map((product) => {
            return <CartProduct key={product.id} product={product} currentSale={currentSale} setCurrentSale={setCurrentSale}/>
          })}
          <div className="cart-payment">
            <div className="cart-totalprice">
              <h3>Total</h3>
              <h2>{totalValue.toFixed(2).replace('.', ',')}</h2>
            </div>
              <div className="cart-remove">
                <button className="cart-removeall" onClick={()=> {setCurrentSale([])}}>
                  <h2>Remover Todos</h2>
                </button>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
