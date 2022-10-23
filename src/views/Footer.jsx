import React from 'react'

const Footer = () => {
  return (
    <footer>
      <ul>
        <li><img src="./public/icons/logo-bookmark-footer.svg" alt="bookmark" /></li>
        <li><a href="#">features</a></li>
        <li><a href="#">pricing</a></li>
        <li><a href="#">contact</a></li>
        <li className='social-media'>
          <a><img src="./public/icons/icon-facebook.svg" alt="facebook" /></a>
          <a><img src="./public/icons/icon-twitter.svg" alt="twitter" /></a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer