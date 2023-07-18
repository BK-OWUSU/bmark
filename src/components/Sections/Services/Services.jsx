import React from 'react'
import './services.css'
import Card from '../Card'

import {SiReact} from 'react-icons/si'
import {AiFillAppstore} from 'react-icons/ai'
import {SiReactos} from 'react-icons/si'
import {AiOutlineAntDesign} from 'react-icons/ai'


const Services = () => {

  const serviceData = [
    {id: 1, icon: <SiReact/>, title: 'Frontend Development', description:"Your application will look very good and easily accible on all devices such mobile phones tablets and etc."},
    {id: 2, icon: <AiFillAppstore/>, title: 'App Development', description:"Building an app that is cross platforms for both andriod and IOS without extra cost."},
    {id: 3, icon: <SiReactos/>, title: 'Backend Development', description:"The security of your business is my number one priority right from the start to the end of the project. Your business will be secure from attackers."},
    {id: 4, icon: <AiOutlineAntDesign/>, title: 'Graphic Design', description:"My intuitive and amazing designs will boost your business on the market platforms. I'm here for your posters, business cards, flyers and banner desgins."},
]

  return (
    <section id="services">
        <div className="container service_container">
          <h2 className='fader'>My Services</h2>
          <small className='fade-in'>I give the best in all the following services</small>

          <div className="services_cards">
            {
              serviceData.map(item=> (
                <Card className='light service_card fader' key={item.id}>
                  <span className="service_card_icon">{item.icon}</span>
                  <div className="service_card_info">
                    <h5>{item.title}</h5>
                    <small>{item.description}</small>
                  </div>
                </Card>
              ))
            }
          </div>

        </div>
    </section>
  )
}

export default Services