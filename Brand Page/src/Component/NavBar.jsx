const NavBar = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/Images/brand_logo.png" alt="" />
      </div>
      <ul>
        <li href="#">MENU</li>
        <li href="#">LOCATION</li>
        <li href="#">ABOUT</li>
        <li href="#">CONTACT</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};
export default NavBar;
