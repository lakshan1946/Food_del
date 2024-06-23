import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div class="footer-content">
        <div class="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rem
            beatae aperiam aliquid eveniet doloribus incidunt, obcaecati tempora
            nemo hic, ab aut pariatur, nisi nesciunt vero asperiores
            exercitationem minus ipsam.
          </p>
          <div class="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div class="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div class="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+94771946130</li>
            <li>laskhan@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p class="footer-copyright">
        Copyright 2024 @ Tomato.com -All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
