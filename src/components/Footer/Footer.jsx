import React from 'react'
import "../../style/Footer.css"

const Footer = () => {
  return (
    <div>
      <div className='footer-block'>
        <div className='footer-text'>
        <h3>Cat foods</h3>
        <h3>Dog foods</h3>
        <h3>Contact Us</h3>
        <h3>FAQ</h3>
        <h3>Ingredients</h3>
        <h3>Find a Story</h3>
        </div>
        <div className='footer-info'>
        <h6>Subscribe for our newsletter</h6>
      </div>
          <div className='footer-inp'> 
        <input type="text" placeholder='Your Email' />
        <button>Subscribe</button>
        </div>
        <div className='end'>
          <h4>© ABSOLUTE PETFOOD 2019</h4>
          <div className='footer-img'>
            <a href="">
              <img src="https://cdn-icons-png.flaticon.com/512/3670/3670274.png" alt="" />
            </a>
            <a href="">
              <img src="https://cdn-icons-png.flaticon.com/128/3670/3670279.png" alt="" />
            </a>
            <a href="">
              <img src="https://cdn-icons-png.flaticon.com/128/2175/2175193.png" alt="" />
            </a>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Footer