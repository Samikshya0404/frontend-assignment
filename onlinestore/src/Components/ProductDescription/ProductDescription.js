import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDescription.css";

const ProductDescription = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => {
        console.log("Error fetching product:", error);
        setProduct(null);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Link to="/" className="back-to-home"> Back to Home </Link>
    <div className="product-container">
      <div className="product-card">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>

      </div>
    </div>
    </>
  );
};

export default ProductDescription;
