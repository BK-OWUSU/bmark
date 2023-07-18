import React from 'react'
import './testimonials.css';
import testData from './testData'

// importing Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
// Importing Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
//importing required modules
import { EffectCoverflow, Autoplay} from 'swiper/modules';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2 className='fader'>What My Clients Say</h2>
      <p className='fade-in'>These are some few testimonials from some of my clients</p>
        <Swiper className="container test_container mySwiper"
          effect = {'coverflow'}
          spaceBetween={30}
          loop = {true}
          speed={2000}
          centeredSlides = {true}
          autoplay ={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate : 50,
            stretch : 0,
            depth : 100,
            modifier : 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay]}
          >
         
          {
            testData.map(item => (
            
              <SwiperSlide className="swpier_container" key ={item.id}>
                
                <p>{item.desc}</p>
                <div className="test_info">
                  <div className="test_img">
                    <img src={item.img} alt="Clients-Avatar"/>
                  </div>
                  <div className="test_details">
                    <h6>{item.name}</h6>
                    <small>{item.job}</small>
                  </div>
                </div>
      
              </SwiperSlide>
            ))
          }

        </Swiper>
    </section>
  )
}

export default Testimonials