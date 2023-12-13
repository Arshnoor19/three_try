import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import {arrow } from '../assets/icons'

const InfoBox= ({text,link,btntext}) =>(
    <div className='info-box'>
     <p className='font-medium sm:text-xl text-center'>{text}</p>
     <Link to={link} className='neo-brutalism-white neo-btn'>
        {btntext}
        <img src={arrow} className='w-4 h-4 object-contain'/>
     </Link>
    </div>
) 

const renderContent ={
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-4 text-white mx-5'>
         Hi! I am <span className='font-semibold'>Arshnoor Singh</span> 👋
          <br/>
          A Software Engineer from <span className='font-semibold'>India</span>.
        </h1>
    ),
    2:(
        <InfoBox 
          text='Wanna know more about me here is a peek '
          link='/about'
          btntext='Lets Go!'
        
        />
    ),
    3:(
        <InfoBox 
          text='Worked on multiple projects here Look '
          link='/Projects'
          btntext='Take me there '
        
        />
    ),
    4:(
        <InfoBox 
          text='Wanna contact Me?'
          link='/Contacts'
          btntext='Yes!'
        
        />
    )
}
 


function HomeInfo({currentStage }) {
  return renderContent[currentStage] || null;
}

export default HomeInfo