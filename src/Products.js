import "./styles.css";

export default function Products(props) {
  const { products } = props;
  return products.map((product, index) => (
    <div className="products">
      <div key={product.id} className="brand">
        {product.brand}
      </div>
      <div key={product.id} className="title">
        {product.title}
      </div>
      <img
        src={product.images[0]}
        alt={product.title}
        width="265"
        height="200"
      ></img>
      <div style={{ display: "flex" }}>
        <div key={product.id} className="price">
          {product.price}
        </div>
        <div key={product.id} className="rating">
          {product.rating}
        </div>
      </div>
    </div>
  ));
}
