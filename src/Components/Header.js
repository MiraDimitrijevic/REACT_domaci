import React from "react";
import { BsBasketFill } from "react-icons/bs";

function Header(props) {
  return (
    <div className="header">
      <a href="">Korpa</a>
      <div className="korpa">
      <BsBasketFill onClick={() => props.prikaziCenu()} />
     
        <p className="brojProizvodaUKorpi">{props.brProizvoda}</p>
      </div>
    </div>
  );
}

export default Header;