import React from 'react'

import Drop from '../Drop'
import Input from '../Input'
import logo from './canva_logo.png'
import question from './question.png'
import './header.css'

const Header = () => (
  <header>
    <img src={logo} alt="canva logo" />
    <div>
      <a href=".">Home</a>
      <Drop text="Templates" />
      <Drop text="Features" />
      <Drop text="Learn" />
      <Drop text="Plans" />
    </div>
    <div className="input">
      <Input />
    </div>
    <a href="."><img src={question} alt="question" /></a>
    <button type="button">Log in</button>
    <button type="button" className="signup">Sign up</button>
  </header>
)

export default Header
