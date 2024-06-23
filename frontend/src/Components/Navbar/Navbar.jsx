import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, Setmenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => Setmenu("home")}
          className={menu === "home" && "active"}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => Setmenu("menu")}
          className={menu === "menu" && "active"}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => Setmenu("mobile-app")}
          className={menu === "mobile-app" && "active"}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => Setmenu("contact us")}
          className={menu === "contact us" && "active"}
        >
          contact us
        </a>
      </ul>
      <div class="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div class="navbar-basket-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div class={getTotalCartAmount() && "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul class="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li>
                <img src={assets.logout_icon} alt="" />
                <p onClick={logout}>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
