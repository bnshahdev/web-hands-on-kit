export const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"
        />
      </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
