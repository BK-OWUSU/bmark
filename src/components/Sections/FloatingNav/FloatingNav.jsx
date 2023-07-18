import React,{useState, useEffect, useRef} from 'react'
import './floating_nav.css'
import {AiOutlineUser, AiOutlineHome} from 'react-icons/ai';
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';


const FloatingNav = () => {
  const navRef = useRef();
  
  useEffect(()=>{
      let timer = undefined;
        const eventHandler = () => {
        navRef.current?.classList.add('show');

        timer && clearTimeout(timer);

        timer = setTimeout(()=>{
          navRef.current?.classList.remove('show');
        }, 3000);
      }

      window.addEventListener('scroll', eventHandler);
     
      return () => {
        timer && clearTimeout(timer);
        window.removeEventListener('scroll', eventHandler);
      }

  },[navRef])
  
  
    const [ activeNav, setActiveNav ] = useState('#header');

  return (
    <div className='float_nav' ref={navRef}>
      <a href="#header" onClick={()=> setActiveNav('#header')} className={activeNav === '#header'? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about'? 'active' : ''}><AiOutlineUser/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#experience'? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services'? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact'? 'active' : ''}><BiMessageSquareDetail/></a>
    </div>
  )
}

export default FloatingNav