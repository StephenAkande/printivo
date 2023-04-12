import React from 'react'
import crown from '../images/crown.jpeg'
import iroko from '../images/iroko.jpeg'
import  hand from '../images/hand.jpeg'
import  twitter from '../images/twitter.jpeg'

function Iroko() {
  return (
    <div>
      <div className='print'>
      <p>Nigeria's No. 1 online print shop</p>
      <img src = {crown}/>
      <h4>Our print services and solutions are trusted by these brands and <br/>over 15,000 other businesses in Nigeria.</h4>
      </div>
       <div className='irokoimage'>
       <img src = {iroko}/>
       </div>
       
       <div className='blue'>
       </div>
       <p className='sam'>What Customers Say About Us </p>
       <div className='hand'>
       <img src = {hand}/>
       </div>

        <div className='parent'>
        <div className='child'>
            <img src={twitter}/>
            <h5>Amina Ebele @DeliciousAmina</h5>
            <h6>I am now the unofficial @Printivo <br/>ambassador. What these guys just <br/> pulled to ensure I got my menu cards <br/>today is stunning!</h6>
        </div>
        <div className='child'>
        <img src={twitter}/>
            <h5>Amina Ebele @DeliciousAmina</h5>
            <h6>I am now the unofficial @Printivo <br/>ambassador. What these guys just <br/> pulled to ensure I got my menu cards <br/>today is stunning!</h6>
        </div>
        <div className='child'>
        <img src={twitter}/>
            <h5>Amina Ebele @DeliciousAmina</h5>
            <h6>I am now the unofficial @Printivo <br/>ambassador. What these guys just <br/> pulled to ensure I got my menu cards <br/>today is stunning!</h6>
        </div>
        </div>      

    
    
    </div>
  )
}

export default Iroko