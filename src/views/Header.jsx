import React from "react";

const Header = ({ showMenu, setShowMenu, roll}) => {

  return (
    <header className={`header ${roll}`}>
      <span>
        <img src="./icons/logo-bookmark.svg" alt="bookmark" />
      </span>
      <a
        id="hamburger"
        onClick={() => {setShowMenu(!showMenu)}}
      >
        <img src="./icons/icon-hamburger.svg" alt="menu" />
      </a>
      <nav className="principal-nav">
        <ul>
          <li><a href="#features">features</a></li>
          <li><a href="#pricing">pricing</a></li>
          <li><a href="#contact">contact</a></li>
          <li><button>login</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
