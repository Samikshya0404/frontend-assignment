import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = ({ product }) => {

  const addtoCart = () => {
    if (localStorage.getItem('cart') === null) {
      var cart = [];
      cart[0] = product;
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    else {
      var cart = JSON.parse(localStorage.getItem('cart'))
      cart.push(product)
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    alert("Item has been added to Cart :)")
  }

  return (

    <section className="card" >
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{product.title}</h3>
       

        </div>
      </Link>
      <section className="card-price">
        <div className="price">${product.price}</div>
        <button onClick={() => addtoCart()}>
          Add to Cart{' '}
          <BsFillBagFill className="bag-icon" />
        </button>
      </section>
    </section >

  );
};

export default Card;


