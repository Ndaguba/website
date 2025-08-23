import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is your service about?",
      answer: "Our service provides comprehensive solutions to help businesses grow and succeed in the digital landscape. We offer personalized strategies tailored to your specific needs."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is simple! Just contact us through our contact form or give us a call. We'll schedule a free consultation to discuss your needs and create a customized plan."
    },
    {
      question: "What are your pricing plans?",
      answer: "We offer flexible pricing plans to suit businesses of all sizes. Our plans start from basic packages for small businesses to enterprise solutions for larger organizations. Contact us for detailed pricing."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes! We provide 24/7 customer support through multiple channels including email, phone, and live chat. Our dedicated support team is always ready to help you."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely! You can cancel your subscription at any time with no hidden fees or penalties. We believe in providing flexibility to our customers."
    },
    {
      question: "Is my data secure?",
      answer: "Data security is our top priority. We use industry-standard encryption and security measures to protect your information. All data is stored securely and we comply with relevant privacy regulations."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" style={{ marginBottom: 0 }}>
      <div className="faq-container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{item.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
