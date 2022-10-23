import React from 'react'

const Footer = () => {
  return (
    <footer>
      <ul>
        <li><img src="./src/assets/images/logo-bookmark-footer.svg" alt="bookmark" /></li>
        <li><a href="#">features</a></li>
        <li><a href="#">pricing</a></li>
        <li><a href="#">contact</a></li>
        <li className='social-media'>
          <a><img src="./src/assets/images/icon-facebook.svg" alt="facebook" /></a>
          <a><img src="./src/assets/images/icon-twitter.svg" alt="twitter" /></a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer