import React from "react";
import Input from "../../Components/Input";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <div className="category-container">
          <h2 className="sidebar-title">Category</h2>
          <div>
            <label className="sidebar-label-container">
              <input onChange={handleChange} type="radio" value="" name="test" />
              <span className="checkmark"></span>All
            </label>
            <Input
              handleChange={handleChange}
              value="electronics"
              title="Electronics"
              name="test"
              className="input"
            />
            <Input
              handleChange={handleChange}
              value="jewelery"
              title="Jewelery"
              name="test"
              className="input"
            />
            <Input
              handleChange={handleChange}
              value="men's clothing"
              title="Men's Clothing"
              name="test"
              className="input"
            />
            <Input
              handleChange={handleChange}
              value="women's clothing"
              title="Women's Clothing"
              name="test"
              className="input"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
