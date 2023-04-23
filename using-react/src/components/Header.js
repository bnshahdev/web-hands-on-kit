import { useContext } from "react";
import { Link } from "react-router-dom";
import SearchContext from "../utils/SearchContext";

export const Header = () => {
  const { searchFor } = useContext(SearchContext);
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"
        />
      </div>
      <h2>{searchFor}</h2>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <Link to={"/about"}>About</Link>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
