import React from 'react';
import ProductCart from "../../Components/OneProduct/ProductCart";
import "./ProductDetails.css";
import { headset } from "../../images";
import ProductQuantity from "../../Components/ProductQuantity/ProductQuantity";
import AddCartButt from "../../Components/AddToCartButton/AddCartButt";
import AddWishlistButt from '../../Components/AddWishlistButton/AddWishlistButt';

const relatedProducts = [
  {
    id: 1,
    image: headset,
    title: 'Pc',
    price: 400,
    category: 'Electronics'
  },
  {
    id: 2,
    image: headset,
    title: 'Router',
    price: 300,
    category: 'Phones'
  },
  {
    id: 3,
    image: headset,
    title: 'Test',
    price: 200,
    category: 'Tablets'
  },
];

function ProductDetails() {
  const product = {
    id: 4,
    image: headset,
    title: 'Product Name',
    price: 4000.0,
    availability: 'Available',
    category: 'Electronics',
    shipping: 'Free Shipping'
  };

  return (
    <>
      <section className="product-details-container">
        <div className="product-details-image">
          <img src={product.image} alt={product.title} />
          <div>
            <div><img src={product.image} alt={product.title} /></div>
          </div>
        </div>
        <div className="product-details-info">
          <h3>{product.title}</h3>
          <hr />
          <p>{`${product.price} DZD`}</p>
          <p>Availability: {product.availability}</p>
          <p>Category: {product.category}</p>
          <p>Shipping: {product.shipping}</p>
          <form>
            <div className="radio-inputs">
              <label>Choose Color:</label>
              <input type="radio" name="color" />
              <input type="radio" name="color" />
              <input type="radio" name="color" />
              <input type="radio" name="color" />
            </div>
            <div className="product-quantity">
              <p>Quantity </p>
              <ProductQuantity />
            </div>
          </form>
          <div className="product-cta">
            <AddCartButt addCartStyle="custom-button" />
            <AddWishlistButt customAddToWishlist="addin-product" />
          </div>
        </div>
      </section>
      <div className="product-description">
        <p id="description-p">Description</p>
        <hr />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, voluptatibus distinctio laboriosam, modi dolor aperiam saepe suscipit dolorum ullam at adipisci veniam hic, assumenda necessitatibus maiores totam fugit mollitia natus!</p>
      </div>
      <section className="related-product-section">
        <h3>Related Products </h3>
        <div className="related-products-carousel">
          {relatedProducts.map(product => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
