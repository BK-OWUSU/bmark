import React from 'react'
import './about.css'
import {AiOutlineDownload} from 'react-icons/ai';
import CV from '../../../assets/cv.pdf'
import BK from '../../../assets/bk_owusu.jpg'

import Card from '../Card';
//import aboutData from './aboutData';

import {FaAward} from 'react-icons/fa'
import {TbBooks} from 'react-icons/tb'
import {BiHappyHeartEyes} from 'react-icons/bi'


const About = () => {
  
  const aboutData = [
    {id: 1, icon: <FaAward/>, title: 'Expereince', description:'1.5+ Years Working'},
    {id: 2, icon: <TbBooks/>, title: 'Projects', description:'15+ Completed'},
    {id: 3, icon: <BiHappyHeartEyes/>, title: 'Clients', description:'12+ clients'}
  ]

  return (
    <section id="about">
      <div className="container about_container">

        <div className="about_left">
          <div className="about_profile">
            <img src={BK} alt="Bk Profile" />
          </div>
        </div>

        <div className="about_right">
          <h2 className='fader'>About Me</h2>
          <div className="about_right_cards">
              {
                aboutData.map(item => (
                  <Card className='fade-in about_card
                  ' key={item.id}>
                      <span className='about_card_icon'>{item.icon}</span>
                      <h5>{item.title}</h5>
                      <small>{item.description}</small>
                  </Card>
                ))
              }
          </div>
          <p className='fade-in'>
          Building projects my clients love has always been one of my by passions. Beign in the web development industry for a year and serving a lot of clients worldwide, I'm always motivated to do exceedenly more.
          </p>
          
          <p className='fade-in'>
          Hi, my name is Bismark Kofi Owusu from Accra, Ghana. I'm a full-stack web developer and continuing Computer Science student of KTU. My top priority is to get your business online the right way, giving you industry-standard design and all the functionality you need to operate smoothly online. Get in touch today with me today and let's start your project.  
          </p>
          <a href={CV} download className='btn primary fade-in'>Download CV <AiOutlineDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About