import React from 'react'
import whatsapp from '../images/whatsapp.jpeg'
import naijalogo from '../images/naijalogo.jpeg'

function Navbar() {

  return (
    
    <div className='nav'>
    <ul>
    <li>Corporate Pricing</li>
    <li>Discovers Stores</li>
    <li>Tracks Orders</li>
    </ul>

    <div className='word'>
    
    <p>Need Help? Call: </p>
     <h6> +2348091084333,  +2348091085333</h6>
     <div className='logo'>  <img src= {whatsapp}/></div>
     <div className='circle'></div>
     <div className='naijalogo'>  <img src= {naijalogo}/></div>
    </div>


    </div>

   
   
  )
}

export default Navbar