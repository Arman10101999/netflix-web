import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    //it will listen every time the scroll is there and call the function transitionNavBar , adding cleanup function too .

    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    //show in usestate above - render nav__black only when show is 'true';
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          className="nav__avtaar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLO7XSN_taND9qG586sXzN9LtnGir6w8TEOmrKcj86fDOLVmv2FlMy5EyEW0pXNx--pE&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
