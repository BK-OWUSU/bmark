import React, { useState } from 'react';
import './portfolio.css';
import Card from  '../Card';

import IMG1 from '../../../assets/bk_Intersect_obs.png'
import IMG2 from '../../../assets/bk_oams.png'
import IMG3 from '../../../assets/project1.png'
import IMG4 from '../../../assets/project3.png'
import IMG5 from '../../../assets/project4.png'
import IMG6 from '../../../assets/project5.png'



const Portfolio = () => {

  const portData = [
    {id: 1, class:'current_project', img: IMG1, title: 'Sample Portfolio Web', desc: 'A cool and highly responsive portfolio website created using HtML, JavaScipt and CSS',linkDemo: 'https://www.bk-owusu.githu.io/inter-obs',linkGit: 'https://www.github.com/BK-OWUSU/inter-obs'},
    {id: 2, class:'current_project', img: IMG2, title: 'School Website', desc: 'A single page school website design using react with user-friendly and beatifull user interface',linkDemo: 'https://www.bk-owusu.githu.io/oams',linkGit: 'https://www.github.com/BK-OWUSU/oams'},
    {id: 3, class:'current_project', img: IMG3, title: 'Mulipage Eduational Website', desc: 'A multipage and highly responsive educational website design using HtML, JavaScipt and CSS',linkDemo: 'https://www.bk-owusu.githu.io/bk-owusu.github.io',linkGit: 'https://www.github.com/BK-OWUSU/BK-OWUSU.github.io'},
    {id: 4, class:'upcoming_project', img: IMG4, title: 'Simple Parallax Effect', desc: 'This project is currently under development. You can visit my github repository for more updates',linkDemo: 'https://www.bk-owusu.githu.io',linkGit: 'https://www.bk-owusu.githu.io'},
    {id: 5, class:'upcoming_project', img: IMG5, title: '3D Website Design', desc: 'This project is currently under development. You can visit my github repository for more updates',linkDemo: 'https://www.bk-owusu.githu.io',linkGit: 'https://www.bk-owusu.githu.io'},
    {id: 6, class:'upcoming_project', img: IMG6, title: 'Dynamic Video Website', desc: 'This project is currently under development. You can visit my github repository for more updates',linkDemo: 'https://www.bk-owusu.githu.io',linkGit: 'https://www.bk-owusu.githu.io'},
]


  const [activeBtn, setBtn] = useState('#btn1');
  const current_projects = document.querySelectorAll('.current_project');
  const upcoming_projects = document.querySelectorAll('.upcoming_project');
  
  const currentProjects = () => {
    current_projects.forEach((element)=>{
      element.style.display = 'block';  
    })
    upcoming_projects.forEach((item)=>{
      item.style.display = 'none';
    })
  }

  const upcomingProjects = () => {
    current_projects.forEach((element)=>{
      element.style.display = 'none';  
    })
    upcoming_projects.forEach((item)=>{
      item.style.display = 'block';
    })
  }

  const allProjects = () => {
    current_projects.forEach((element)=>{
      element.style.display = 'block';  
    })
    upcoming_projects.forEach((item)=>{
      item.style.display = 'block';
    })
  }

  return (
    <section id="portfolio">
        <div className="container portfolio_container">
          <h2 className='fader'>Recent Projects</h2>
          <small className='fade-in'>Check out some of the projects I h've worked on recently. Use the buttons to toggle between the diferent categories</small>
          
          <div className="port_top_btns">
            <button onClick={()=> {setBtn('#btn1');currentProjects()}} className={`btn white ${activeBtn === "#btn1"? "primary" : " "}`}>Current</button>
            <button onClick={()=> {setBtn('#btn2'); upcomingProjects()}} className={`btn white ${activeBtn === "#btn2"? "primary" : " "}`}>Up Coming</button>
            <button onClick={()=> {setBtn('#btn3'); allProjects()}} className={`btn white ${activeBtn === "#btn3"? "primary" : " "}`}>All</button>
          </div>

          <div className="recent_projets">
              {
                portData.map(item => (
                  <Card className={`project_card fade-in ${item.class}`} key={item.id}>
                    <div className="project_img">
                      <img src={item.img} alt="Projects" />
                    </div>
                      <h5>{item.title}</h5>
                      <small>{item.desc}</small>
                      <div className="project_links">
                        <a className='btn first' href={item.linkDemo}>Demo</a>
                        <a className='btn primary' href={item.linkGit}>Github</a>
                      </div>
                  </Card>
                ))
              }  
          </div>
        </div>
    </section>
  )
}

export default Portfolio