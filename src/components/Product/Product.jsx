import "./styles.css";

function Product({ product, handleClick }) {
  return (
    <div className="card">
      <div className="img">
        <img src={product.img} alt="."></img>
      </div>
      <div className="product-info">
        <div className="product-info--content">
          <h3>{product.name}</h3>
          <span>{product.category}</span>
          <h5>R${product.price.toFixed(2).replace(".", ",")}</h5>
          <button id={product.id} onClick={(evt) => handleClick(evt.target.id)}>
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
