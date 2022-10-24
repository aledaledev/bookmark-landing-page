import React from 'react'

const Footer = () => {
  return (
    <footer>
      <ul>
        <li><img src="./icons/logo-bookmark-footer.svg" alt="bookmark" /></li>
        <li><a href="#features">features</a></li>
        <li><a href="#pricing">pricing</a></li>
        <li><a href="#contact">contact</a></li>
        <li className='social-media'>
          <a><img src="./icons/icon-facebook.svg" alt="facebook" /></a>
          <a><img src="./icons/icon-twitter.svg" alt="twitter" /></a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer