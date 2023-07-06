import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai'
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState(null);


  // To remove card item.
  const removeItem = (ind) => {

    var newCartItems = cartItems.filter((item, index) => {
      return ind !== index
    })
    setCartItems(newCartItems)
    localStorage.setItem('cart', JSON.stringify(newCartItems))
  }



  useEffect(() => {
    const init = async () => {
      var cart = await JSON.parse(localStorage.getItem('cart'));
      setCartItems(cart);
    }
    init()
  }, []);

  return (
    <>
    <Link to="/" className="back-to-home"> Back to Home </Link>
    <div className='cart-container'>
      <h1 className='cart-heading'>Cart</h1>
      {cartItems ? (
        <>
          {cartItems.map((item, index) => {
            return (
              <section className="cart-card">
                <Link to={`/product/${item.id}`}>
                  <img src={item.image} alt={item.title} className="cart-card-img" />

                </Link>
                <div className="card-details">
                  <h3 className="card-title">{item.title}</h3>
                </div>
                <section className="card-price">
                  <div className="price">${item.price}</div>
                </section>
                <button className='cart-remove-btn' onClick={() => removeItem(index)} >
                  Remove{' '}
                  <AiFillCloseCircle className="bag-icon" />
                </button>
              </section>
            );
          })}
        </>
      ) : (
        <>No items in the cart.</>
      )}
    </div>
    </>
  );
};

export default Cart;
