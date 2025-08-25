import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Who is Mossy AI built for?",
      answer: "Mossy AI is designed for solopreneurs, freelancers, and small business owners who don’t have time (or interest) to learn accounting. It keeps your books clean and organized while you focus on running your business."
    },
    {
      question: "How does Mossy AI save me time?",
      answer: "No more manual data entry. Upload a receipt, forward a bank statement, or just type what happened—Mossy does the rest. It automatically matches receipts, categorizes expenses, and even gives you quick health check insights like “you spent 20% more on ads this month"
    },
    {
      question: "Can Mossy connect directly to my bank?",
      answer: "Yes. Mossy connects securely to your bank so transactions flow in automatically. You’re always in control—you can choose which accounts to link or disconnect anytime."
    },
    {
      question: "What about bank statements?",
      answer: "You can upload PDF, Excel, or CSV bank statements. Mossy will read them, organize them, and sort your transactions."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely! You can cancel your subscription at any time with no hidden fees or penalties. We believe in providing flexibility to our customers."
    },
    {
      question: "How much does it cost?",
      answer: "Mossy has a Free Plan for testing the basics, and a Pro Plan at $10/month that unlocks unlimited entries, receipt uploads, and full AI support. You can try Pro free for 14 days—no strings attached."
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
