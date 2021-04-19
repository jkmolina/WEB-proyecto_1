import React from 'react'
import propTypes from 'prop-types'

import './category.css'

const Category = ({ title, items }) => {
  // eslint-disable-next-line react/no-array-index-key
  const comps = items.map((item, index) => <li key={index}><a className="catItem" href=".">{item}</a></li>)
  return (
    <div>
      <div>{title}</div>
      <ul>{comps}</ul>
    </div>
  )
}

Category.propTypes = {
  title: propTypes.string.isRequired,
  items: propTypes.arrayOf(propTypes.string).isRequired,
}

export default Category
