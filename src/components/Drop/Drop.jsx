import React from 'react'
import propTypes from 'prop-types'

import arrow from './dropArrow.png'

const Drop = ({ text }) => (
  <a href=".">
    <span>{text}</span>
    <img src={arrow} alt="tiny arrow" />
  </a>
)

Drop.propTypes = {
  text: propTypes.string.isRequired,
}

export default Drop
