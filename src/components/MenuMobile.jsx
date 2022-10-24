import React from 'react'

const MenuMobile = ({showMenu, setShowMenu, rollMenu}) => {

  return (
    <section className='menu-mobile'>
      <ul>
        <li><img src="./icons/logo-bookmark-menu.svg" alt="bookmark" />
        <a onClick={e => setShowMenu(!showMenu)}><img src="./icons/icon-close.svg" alt="close"/></a>
        </li>
        <li><a onClick={e => {setShowMenu(!showMenu);window.removeEventListener("scroll", rollMenu)}} href="#features">features</a></li>
        <li><a onClick={e => {setShowMenu(!showMenu);window.removeEventListener("scroll", rollMenu)}} href="#pricing">pricing</a></li>
        <li><a onClick={e => {setShowMenu(!showMenu);window.removeEventListener("scroll", rollMenu)}} href="#contact">contact</a></li>
        <li><a href="#">login</a></li>
        <li className='social-media'>
          <a><img src="./icons/icon-facebook.svg" alt="facebook" /></a>
          <a><img src="./icons/icon-twitter.svg" alt="twitter" /></a>
        </li>
      </ul>
    </section>
  )
}

export default MenuMobile