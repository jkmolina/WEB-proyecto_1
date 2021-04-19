import React from 'react'
import Category from '../Category/Category'

import pinterest from './pinterest.png'
import instagram from './instagram.png'

import './footer.css'

const Footer = () => {
  const discoveryItems = ['Logos', 'Posters', 'Business Cards', 'Flyers', 'Resumes', 'Presentations']
  const exploreItems = ['Design Types', 'Templates', 'Graphs & Charts', 'Photo Editing', 'Print', 'Apps']
  const learnItems = ['Blog', 'Design school']
  const resourcesItems = ['Font combinations', 'Photo editor', 'Color wheel', 'Palette generator', 'Logo maker', 'Colors', 'Design size guide', 'Support', 'Ideas']
  const productItems = ['Download App', 'Pro', 'Enterprise', 'Education', 'Nonprofits', 'Newsrooms', 'Pricing', 'What\'s new']
  const companyItems = ['About', 'Terms and Privacy', 'Careers', 'Affiliates Program', 'Partnerships', 'Media', 'Contributors', 'Developers', 'Security', 'Request a Demo', 'Sustainability']

  return (
    <footer>
      <nav>
        <Category title="Discover" items={discoveryItems} />
        <Category title="Explore" items={exploreItems} />
        <Category title="Learn" items={learnItems} />
        <Category title="Resources" items={resourcesItems} />
        <Category title="Product" items={productItems} />
        <Category title="Company" items={companyItems} />
      </nav>

      <div className="copyright">
        <button type="button" className="lang">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3.8 14.25h3.81a21.9 21.9 0 0 1 0-4.5h-3.8a8.5 8.5 0 0 0 0 4.5zm.57 1.5c1 2.04 2.8 3.61 4.98 4.33-.68-1.1-1.2-2.6-1.52-4.33H4.37zm15.83-1.5a8.5 8.5 0 0 0 0-4.5h-3.81a21.9 21.9 0 0 1 0 4.5h3.8zm-.57 1.5h-3.46a12.78 12.78 0 0 1-1.52 4.33 8.53 8.53 0 0 0 4.98-4.33zm-10.5-1.5h5.74a20.12 20.12 0 0 0 0-4.5H9.13a20.12 20.12 0 0 0 0 4.5zm.23 1.5c.56 2.84 1.69 4.75 2.64 4.75.95 0 2.08-1.9 2.64-4.75H9.36zm-4.99-7.5h3.46c.31-1.74.84-3.24 1.52-4.33a8.53 8.53 0 0 0-4.98 4.33zm15.26 0a8.53 8.53 0 0 0-4.98-4.33c.68 1.1 1.2 2.6 1.52 4.33h3.46zm1.64 0h.04v.1a10 10 0 1 1-.04-.1zm-11.91 0h5.28C14.08 5.41 12.95 3.5 12 3.5c-.95 0-2.08 1.9-2.64 4.75z" /></svg>
          <span>English (US)</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M11.71 6.47l-3.53 3.54c-.1.1-.26.1-.36 0L4.3 6.47a.75.75 0 1 0-1.06 1.06l3.53 3.54c.69.68 1.8.68 2.48 0l3.53-3.54a.75.75 0 0 0-1.06-1.06z" /></svg>
        </button>
        <div>
          &#169; 2021 All Rights Reserved, Canva
          <sup>&#174;</sup>
        </div>
        <div>
          <a href="." className="social">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="facebook" d="M21.5 12.058c0-5.28-4.253-9.558-9.5-9.558s-9.5 4.279-9.5 9.558c0 4.771 3.473 8.725 8.016 9.442v-6.68H8.104v-2.762h2.412V9.952c0-2.395 1.417-3.718 3.588-3.718 1.04 0 2.126.186 2.126.186v2.352h-1.198c-1.18 0-1.548.738-1.548 1.494v1.792h2.635l-.421 2.763h-2.214V21.5c4.543-.717 8.016-4.67 8.016-9.442z" fill="currentColor" /></svg>
          </a>
          <a href="." className="social">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="twitter" fill="currentColor" d="M19.74 6.69a4.26 4.26 0 0 0 1.7-2.38c-.75.5-1.58.85-2.46 1.05A3.73 3.73 0 0 0 16.13 4c-2.15 0-3.89 1.92-3.89 4.3 0 .33.04.66.1.97a10.75 10.75 0 0 1-8.02-4.48 4.61 4.61 0 0 0 1.2 5.73 3.6 3.6 0 0 1-1.76-.54v.05c0 2.08 1.34 3.82 3.12 4.21a3.56 3.56 0 0 1-1.75.07 3.97 3.97 0 0 0 3.63 2.98A7.36 7.36 0 0 1 3 19.07 10.29 10.29 0 0 0 8.97 21c7.16 0 11.07-6.54 11.07-12.21l-.01-.56a8.4 8.4 0 0 0 1.94-2.22c-.7.34-1.45.57-2.23.68z" /></svg>
          </a>
          <a href="." className="social">
            <img src={pinterest} alt="pinterest" />
          </a>
          <a href="." className="social">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
