import React from "react";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = ({ handleInputChange, query, handleSearch }) => {
  const handleSearchClick = () => {
    handleSearch(query);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(query);
    }
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            value={query}
            placeholder="Search Here."
          />
          <AiOutlineSearch className="search-icon" onClick={handleSearchClick} />
        </div>
      </div>
      <div className="profile-container">
        <Link to="/cart">
          <AiOutlineShoppingCart className="nav-icons" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

