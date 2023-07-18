import React from 'react'
import './nav.css'
import logo from '../../../assets/bk_normal.jpg'
import {IoIosColorPalette} from 'react-icons/io'


const Nav = () => {

  const navData = [
    {id:1, link: '#', title: 'Home'},
    {id:2, link: '#about', title: 'About'},
    {id:3, link: '#services', title: 'Services'},
    {id:4, link: '#portfolio', title: 'Portfolio'},
    {id:5, link: '#contact', title: 'Contact'}
]

  const showTheme = () => {
    document.querySelector('.theme_container').classList.add('pop');
  }

  return (
    <nav id="nav">
      <div className="container nav_container">
        <a href="index.html">
          <img src={logo} alt="logo" className='nav_logo' />
        </a>
        <ul className="nav_menu">
          {
            navData.map((item)=>
              <li key={item.id}><a href={item.link}>{item.title}</a></li>
            )
          }
        </ul>
        <button onClick={showTheme} id='theme_icon'><IoIosColorPalette/></button>
      </div>
    </nav>
  )
}

export default Nav