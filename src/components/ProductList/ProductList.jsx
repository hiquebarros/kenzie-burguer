import "./styles.css";
import Product from "../Product/Product";

function ProductList({
  productList,
  handleClick,
  filterOn,
  filteredProducts,
  filterCategory,
}) {
  return (
    <div>
      {filterOn === false ? (
        <div className="container-padrao">
          <div className="container">
          {productList.map((product, index) => {
            return (
              <Product
                key={index}
                product={product}
                handleClick={handleClick}
              />
            );
          })}
          </div>
        </div>
      ) : (
        <div className="container-filtrado">
          <div className="filter-details">
            <h3>Resultados para:</h3>
            <h4>{filterCategory}</h4>
          </div>
          <div className="container2">
            {filteredProducts.map((product, index) => {
              return (
                <Product
                  key={index}
                  product={product}
                  handleClick={handleClick}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
