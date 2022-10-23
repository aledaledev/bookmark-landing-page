import React from 'react'

const MenuMobile = ({showMenu, setShowMenu}) => {
  return (
    <section className='menu-mobile'>
      <ul>
        <li><img src="./public/icons/logo-bookmark-menu.svg" alt="bookmark" />
        <a href='#contact' onClick={e => setShowMenu(!showMenu)}><img src="./public/icons/icon-close.svg" alt="close"/></a>
        </li>
        <li><a href="#features">features</a></li>
        <li><a href="#pricing">pricing</a></li>
        <li><a href="#contact">contact</a></li>
        <li><a href="#">login</a></li>
        <li className='social-media'>
          <a><img src="./public/icons/icon-facebook.svg" alt="facebook" /></a>
          <a><img src="./public/icons/icon-twitter.svg" alt="twitter" /></a>
        </li>
      </ul>
    </section>
  )
}

export default MenuMobile