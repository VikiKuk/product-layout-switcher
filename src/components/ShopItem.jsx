export default function ShopItem({ name, color, img, price }) {
  return (
    <div className="shop-item">
      <img src={img} alt={name} className="item-image" />
      <h2 className="item-title">{name.toUpperCase()}</h2>
      <p className="item-color">{color}</p>
      <span className="item-price">${price}</span>
      <button className="item-button">Add to cart</button>
    </div>
  );
}