import React from 'react'
import hhhhhh from '../images/hhhhhh.svg'
import cart from '../images/cart.jpeg'
import handprintivo from '../images/handprintivo.jpeg'
import len from '../images/len.jpeg'

function Carousel() {
  return (
    
    <div>
    <div className='con'>
    <img src= {hhhhhh} />
    </div>
    
    <nav className='heronav'>
      <ul>
      <li>Home</li>
      <li>All Products</li>
      <li>Become a Reseller</li>
      <li>Cost Calculator</li>
      <li className='red'>Sign in</li>
      <li>Create Account</li>
      </ul>
    </nav>
    <img src={cart}/>

    <div className='heroflex'>
      <div className='box'>
      <p> Quality Prints</p>
      <h4>Shipped to your doorstep</h4>
      <h5>What would you like to print today</h5>
       <div className='curve' placeholder='seach'></div>
       <div className='lens'> 
       <img src={len}/>
       </div>
      </div>
      <div className='box'>
      <img src= {handprintivo}/>
      </div>
    </div>
     
    
    </div>
   
    
  )
}

export default Carousel