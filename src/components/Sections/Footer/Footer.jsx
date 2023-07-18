import React from 'react';
import './footer.css';
import Card from '../Card';

import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineDribbble} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'

const Footer = () => {

  const footerData = [
    {id:1, link: '#', title: 'Home'},
    {id:2, link: '#about', title: 'About'},
    {id:3, link: '#services', title: 'Services'},
    {id:4, link: '#portfolio', title: 'Portfolio'},
    {id:5, link: '#contact', title: 'Contact'}
]

  const socialsData = [
    {id: 1, link: 'https://instagram.com/owusu_bk', icon: <AiOutlineInstagram/>},
    {id: 2, link: 'https://twitter.com/owusu_bk', icon: <AiOutlineTwitter/>},
    {id: 3, link: 'https://dribbble.com/Bk_owusu', icon: <AiOutlineDribbble/>},
    {id: 4, link: 'https://bk-owusu.github.io', icon: <AiOutlineGithub/>}
]


  return (
    <footer id='footer'>
        <div className="container footer_container">
          <ul className="footer_links">
            {
              footerData.map(item => <li key={item.id}><a className='fade-in' href={item.link}>{item.title}</a></li>)
            }
          </ul>
          <ul className="footer_socials">
            {
              socialsData.map(element =>(
                <Card className ="fade-in footer_card" key={element.id}>
                  <a href={element.link} target='_blank' rel='noopener noreferrer'>{element.icon}</a>
                </Card>
              ))
            }
          </ul>
          <div className="footer_copyright">
            <small>copyright &copy; Bi-Marks-K Designs</small>
          </div>
        </div>
    </footer>
  )
}

export default Footer