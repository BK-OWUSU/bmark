import React from 'react';
import './header.css';
import HeaderProfile from '../../../assets/bk_v_small.jpg';

import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineDribbble} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'

 
const Header = () => {
  
  const socialsData = [
    {id: 1, link: 'https://instagram.com/owusu_bk', icon: <AiOutlineInstagram/>},
    {id: 2, link: 'https://twitter.com/owusu_bk', icon: <AiOutlineTwitter/>},
    {id: 3, link: 'https://dribbble.com/Bk_owusu', icon: <AiOutlineDribbble/>},
    {id: 4, link: 'https://bk-owusu.github.io', icon: <AiOutlineGithub/>}
]

  return (
    <section id="header">
        <div className="container header_container">

          <div className="header_profile">
            <img src={HeaderProfile} alt="profile" />
          </div>

          <h3 className='fader'>BismarK Kofi Owusu </h3>
          <p className='fade-in'>You are a click away from building your own amazing website. Just send me the details of your project for a quick morden and highly responsive web Apps today!
          </p>
          <div className="header_cta">
            <a href="#contact" className='btn primary fader'>Let's Talk</a>
            <a href="#portfolio" className='btn fader'>My Work</a>
          </div>
          <div className="header_socials">
            {
              socialsData.map((item)=> <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
            }
          </div>
        </div>
    </section>
  )
}

export default Header