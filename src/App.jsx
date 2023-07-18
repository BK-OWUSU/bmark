import React,{useEffect} from 'react';
import Nav from '../src/components/Sections/Nav/Nav';
import Header from '../src/components/Sections/Header/Header';
import About from '../src/components/Sections/About/About';
import Services from '../src/components/Sections/Services/Services';
import Portfolio from '../src/components/Sections/Portfolio/Portfolio';
import Testimonials from '../src/components/Sections/Testimonials/Testimonials';
import Faqs from '../src/components/Sections/Faqs/Faqs';
import Contact from '../src/components/Sections/Contact/Contact';
import Footer from '../src/components/Sections/Footer/Footer';
import FloatingNav from '../src/components/Sections/FloatingNav/FloatingNav';

//Theme
import Theme from '../src/theme/Theme';


const App = () => {

useEffect(() => {
    const all_sectionTowHeaders = document.querySelectorAll('h2');
    const all_Cards = document.querySelectorAll(".card");
    const all_P = document.querySelectorAll('p');
    const all_ALinks = document.querySelectorAll('a');
    const all_h3s = document.querySelectorAll('h3');
    const all_h2s = document.querySelectorAll('h2');
    const all_smalls = document.querySelectorAll('small');
    
    //const all_buttons = document.querySelectorAll('button');

    const fadersObjects = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if (entry.isIntersecting === true){
          entry.target.classList.add('appear');
          /* console.log(entry.target); */
        } else {
        entry.target.classList.remove('appear');
        } 

      });
    },
    {
      root: null,
      threshold: 0,
      rootMargin: '0px',
    });

    all_sectionTowHeaders.forEach((header_two)=>{
      fadersObjects.observe(header_two);
    });

    all_Cards.forEach((card)=>{
    fadersObjects.observe(card);
    });

    all_P.forEach((pS)=>{
      fadersObjects.observe(pS)
    })

    all_ALinks.forEach(aLink => {
      fadersObjects.observe(aLink)
    })

    all_h3s.forEach(h_item => {
      fadersObjects.observe(h_item)
    })

    all_h2s.forEach(h_item => {
      fadersObjects.observe(h_item)
    })

    all_smalls.forEach(small => {
      fadersObjects.observe(small)
    })


    /* all_buttons.forEach(btn => {
      fadersObjects.observe(btn)
    }) */

 },[])

  return (
    <main>
      <Theme/>
      <Nav/>
      <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Faqs/>
      <Contact/>
      <Footer/>
      <FloatingNav/>
    </main>
  )
}

export default App