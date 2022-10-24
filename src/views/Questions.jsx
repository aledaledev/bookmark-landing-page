import React from 'react'

const Questions = () => {
  return (
    <section className='questions'>
      <article>
      <h2>Frequently Asked Questions</h2>
      <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
      </article>
      <div className='asked-questions'>
        <details>
          <summary>Whats is Bookmark?<img src='./icons/icon-arrow.svg'/></summary>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi rem repellat unde quidem pariatur similique? Animi facilis odio distinctio ad praesentium amet laboriosam eius, saepe eveniet veniam repellat modi!
        </details>
        <details>
          <summary>How can I request a new browser?<img src='./icons/icon-arrow.svg'/></summary>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi numquam ut repellat culpa obcaecati possimus quasi dolore dignissimos ipsum consequatur minima amet aut deleniti alias, voluptates a cumque molestias officiis.
        </details>
        <details>
          <summary>Is there a mobile app?<img src='./icons/icon-arrow.svg'/></summary>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus repellendus impedit est porro nam laboriosam adipisci, eveniet sequi reiciendis optio libero doloribus eaque natus nesciunt incidunt architecto voluptates harum!
        </details>
        <details>
          <summary>What about other Chromium browsers?<img src='./icons/icon-arrow.svg'/></summary>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi numquam ut repellat culpa obcaecati possimus quasi dolore dignissimos ipsum consequatur minima amet aut deleniti alias, voluptates a cumque molestias officiis.
        </details>
        <button className='button-info'>More Info</button>
      </div>
    </section>
  )
}

export default Questions