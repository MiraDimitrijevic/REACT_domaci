import React from "react";
import { BsBasketFill } from "react-icons/bs";

function Header() {
  return (
    <div className="header">
      <a href="">Korpa</a>
      <div className="korpa">
        <BsBasketFill />
        <p className="brojProizvodaUKorpi">0</p>
      </div>
    </div>
  );
}

export default Header;