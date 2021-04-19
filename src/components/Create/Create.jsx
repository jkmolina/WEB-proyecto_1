import React from 'react'

import './create.css'

const Create = () => {
  let titles = ['Recommended', 'Social Media', 'Events', 'Marketing', 'Documents', 'Order Prints', 'Video', 'Education', 'Personal']
  // eslint-disable-next-line react/no-array-index-key
  titles = titles.map((title, index) => <button type="button" key={index}>{title}</button>)
  const types = [
    ['Presentation', 'https://static.canva.com/marketplace/contextualThumbnails/presentation%401x.png'],
    ['Video', 'https://static.canva.com/marketplace/contextualThumbnails/video%401x.png'],
    ['Instagram Post', 'https://static.canva.com/marketplace/contextualThumbnails/instagram_post%401x.png'],
    ['Facebook Post', 'https://static.canva.com/marketplace/contextualThumbnails/facebook_post%401x.png'],
    ['Poster', 'https://static.canva.com/marketplace/contextualThumbnails/poster%401x.png'],
    ['Logo', 'https://static.canva.com/marketplace/contextualThumbnails/logo%401x.png'],
  ].map((type) => (
    <div>
      <img src={type[1]} alt={type[0]} />
      <span>{type[0]}</span>
    </div>
  ))

  return (
    <div>
      <h2>Create a design</h2>
      <div className="categories">
        {titles}
      </div>
      <div className="designs">
        {types}
      </div>
    </div>
  )
}

export default Create
