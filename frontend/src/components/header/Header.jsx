import React from "react";
import style from "./Header.module.scss";
import { Link } from "react-router";
import { SlArrowDown } from "react-icons/sl";

const Header = () => {
  return (
    <div className={style.main}>
      <div className={style.imgbox}>
        <img
          src="https://preview.colorlib.com/theme/robotics/img/logo.png"
          alt=""
        />
      </div>

      <div className={style.pages}>
        <Link to={"/"}>Home</Link>
        <p>About us</p>
        <p>Services</p>
        <p>Products</p>
        <ul className={style.blog}>
          <li>
            Blog <SlArrowDown/>
            <ul className={style.blogs}>
              <li>Blog Home</li>
              <li>Blog Single</li>
            </ul>
          </li>
        </ul>
        <p>Contact</p>
        <ul className={style.dropdown}>
          <li>
            Dropdown <SlArrowDown/>
            <ul className={style.ele}>
              <li>Elements</li>
              <li>Product Details</li>
              <li>
                Level 2
                <ul className={style.item}>
                  <li>Item 1</li>
                  <li>Item 2</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <Link to={"/admin"}>Admin</Link>
      </div>
    </div>
  );
};

export default Header;
