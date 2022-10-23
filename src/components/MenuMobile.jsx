import React from 'react'

const MenuMobile = ({showMenu, setShowMenu}) => {
  return (
    <section className='menu-mobile'>
      <ul>
        <li><img src="./src/assets/images/logo-bookmark-menu.svg" alt="bookmark" />
        <a href='#contact' onClick={e => setShowMenu(!showMenu)}><img src="./src/assets/images/icon-close.svg" alt="close"/></a>
        </li>
        <li><a href="#features">features</a></li>
        <li><a href="#pricing">pricing</a></li>
        <li><a href="#contact">contact</a></li>
        <li><a href="#">login</a></li>
        <li className='social-media'>
          <a><img src="./src/assets/images/icon-facebook.svg" alt="facebook" /></a>
          <a><img src="./src/assets/images/icon-twitter.svg" alt="twitter" /></a>
        </li>
      </ul>
    </section>
  )
}

export default MenuMobile