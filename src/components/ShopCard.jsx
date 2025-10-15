export default function ShopCard({ name, color, img, price }) {
  return (
    <div
      className="shop-card"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="card-header">
        <h2 className="card-title">{name.toUpperCase()}</h2>
        <p className="card-color">{color}</p>
      </div>
      <div className="card-footer">
        <span className="card-price">${price}</span>
        <button className="card-button">Add to cart</button>
      </div>
    </div>
  );
}