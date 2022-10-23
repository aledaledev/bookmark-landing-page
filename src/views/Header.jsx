import React from "react";

const Header = ({showMenu, setShowMenu}) => {
  return (
    <header className="header">
      <span><img src="./src/assets/images/logo-bookmark.svg" alt="bookmark" /></span>
      <a id="hamburger" href="#blocking-body" onClick={e => setShowMenu(!showMenu)}><img src="./src/assets/images/icon-hamburger.svg" alt="menu"/></a>
      <nav className="principal-nav">
        <ul>
          <li><a href="#">features</a></li>
          <li><a href="#">pricing</a></li>
          <li><a href="#">contact</a></li>
          <li><button>login</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
