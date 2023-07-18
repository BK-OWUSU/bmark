import React from 'react'
import './faqs.css'
import {FaHandPointDown} from 'react-icons/fa'
import {FaHandPointUp} from 'react-icons/fa'
import Card from '../Card'

const Faqs = () => {
  const upHand = <FaHandPointUp/> 
   const downHand = <FaHandPointDown/> 
  const faqData = [
    {id: 1, question:"How long will my project take to complete?", answer: "This depends of the complexity of your project, your availability and payment. Once you have sorted this out, I will give you a complete date.", icon: downHand},
    {id: 2, question:"What do you need tko start working on my project?", answer:"It mostly depends on the type of project. But in general, you need a fair idea of what you want, then we can take it from there.", icon: downHand},
    {id: 3, question:"Is hosting a domain registration inclusive in your pricing?", answer:"No! Hosting a domain is taken care of separatly. You can pay it or take of it on your own.", icon: downHand},
    {id: 4, question:"How much do you charge for an average project or web app?", answer:"Once again, it wll depends on the type of project and its complexity. But my prices are affordable so youa are good.", icon: downHand},
    {id: 5, question:"What is your payment plan?", answer:"Payment is divided into 3 parts. An initial 30% upffont to get me started, 40% once the project is completed and 30% on delivery.", icon: downHand},
    {id: 6, question:"What is the project doesnt turn out good?", answer:"You will be a part of the whole project form start to end. I'll make sure to give you my ultimate best.", icon: downHand}
  ]

  return (
    <section id="faqs">
        <h2 className='fader'>Frequently Asked Questions</h2>
        <p className='fader'>Here are some questions that I normally get. Clik to toggle through the answers, if you still have some more questions, send me message through the contact section below</p>
      
        <div className="container faq_container">
          {
            faqData.map(item =>(
              <Card key = {item.id} className = {`fade-in faq_card`}
              onClick = {(e)=>{e.target.classList.toggle('open')}}>
                  <div className="faq_icon">
                    {item.icon} 
                  </div>
                  <div className="faq_info" >
                    <h6 className="faq_question">{item.question}</h6>
                    <p className="faq_answer">{item.answer}</p>
                  </div>
              </Card>  
            ))
          }
        </div>
    </section>
  )
}

export default Faqs