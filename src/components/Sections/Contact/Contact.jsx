import React from 'react'
import './contact.css'
import Card from '../Card';

import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';

const Contact = () => {
  return (
    <section id="contact">
        <h2 className='fader'>Get In Touch</h2>
        <p className='fader'>Send me a message via the links below</p>

        <div className="container contact_container">
          <Card className="fade-in contact_card"><a href="mailto:owusubk416@gmail.com" target='_blank' rel="noreferrer"><MdOutlineEmail/></a></Card>
          <Card className="fade-in contact_card"><a href="https://m.me/bismark.okyere.505" target='_blank' rel="noreferrer"><RiMessengerLine/></a></Card>
          <Card className="fade-in contact_card"><a href="https://api.whatsapp.com/send?phone=+233547270155" target='_blank' rel="noreferrer"><BsWhatsapp/></a></Card>
        </div>
        
    </section>
  )
}

export default Contact