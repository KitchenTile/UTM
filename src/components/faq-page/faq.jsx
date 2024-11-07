import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('Booking and Payment');
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = {
    'Booking and Payment': [
      { question: 'Can I use Tax-Free Childcare Vouchers?', answer: 'Yes! We are Ofsted registered therefore you can use Tax-free Childcare Vouchers or claim 85% of the cost back through Universal Credit.  To use Universal Credit, first of all, you will need to make a booking to secure your spot and then you will receive an invoice with all the details you require to claim. Tax-Free Childcare Vouchers:We currently accept vouchers from the following providers:Care 4 - 36576238Computer Share Vouchers -  ID number 0026952560Childcare Grant Payment Scheme - CCG6342595Edenred - P21348300Kiddivoucher SodexoFideliti - UTE001CRG Childcare - 39774370089Caboodle' },
      { question: 'How do I book?', answer: 'Please click on the "TECH CLUB" OR "BREAKFAST CLUB"button at the top right of the screen or if you are on mobile then please click on the 3 lines and then click "TECH CLUB" or "BREAKFAST CLUB". If you are booking for our holiday camps then please click on the button that says "TECH CAMP" and follow the instructions.' },
      { question: 'Can I cancel my booking?', answer: 'Yes, cancellations are allowed up to 24 hours before the class.' },
      { question: 'What is the service fee for?', answer: 'Our service providers impose a 2.5% service fee on ticket sales, and I want to emphasise that this fee does not contribute to U Teach Mi Ltd but is directed to the service provider to cover their operational costs. We appreciate your understanding in this matter, and if you have any further questions or concerns, please do not hesitate to reach out.' },
    ],
    'Our Policies': [
      { question: 'What is your Safeguarding Policy?', answer: 'Please see below our Safeguarding Policy' },
      { question: 'What is your Data Protection Policy?', answer: 'Please see below our Data Protection Policy' },
      { question: 'What is your Internet Safety Policy?', answer: 'Please see below our Internet Safety Policy' },
    ],
    'Teaching Structure': [
      { question: 'Are the lessons always different?', answer: 'Yes our lessons are always different and usually project based - guiding our students from point A to point B. We believe in an holistic approach to education and therefore ensure that what we teach can be utilised in a real world setting.' },
      { question: 'When do the lessons start?', answer: 'Please refer to your particular school\'s booking page for the exact dates that Tech Club will be running at your school.' },
    ]
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setOpenQuestion(null);
  };

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="faq-body">
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-tabs">
          {Object.keys(faqData).map((tab) => (
            <div
              key={tab}
              className={`faq-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="faq-content">
          {faqData[activeTab].map((item, index) => (
            <div key={index} className="faq-question">
              <div
                className={`faq-question-header ${openQuestion === index ? 'open' : ''}`}
                onClick={() => toggleQuestion(index)}
              >
                <span className='faq-question'>{item.question}</span>
                <button className="faq-toggle-button">
                  {openQuestion === index ? '△' : '▽'}
                </button>
              </div>
              {openQuestion === index && <p className="faq-answer">{item.answer}</p>}
              {index < faqData[activeTab].length - 1 && <hr className='faq-hr'/>}
            </div>
          ))}
        </div>
        <hr className='faq-hr'/>
      </div>
    </div>
  );
};

export default FAQ;
