import React from 'react'

const Hero = () => {
  return (
      <section className='hero'>
        <span>
          <img src='./images/illustration-hero.svg' alt='hero'/>
        </span>
        <article>
          <h1>A simple Bookmark Manager</h1>
          <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
          <div className='get-buttons'>
            <button className='button-chrome'>Get it on Chrome</button>
            <button className='button-firefox'>Get it on Firefox</button>
          </div>
        </article>
      </section>
  )
}

export default Hero