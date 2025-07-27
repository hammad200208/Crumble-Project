import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqData = [
  {
    question: 'Are there allergens in Crumble cookies?',
    answer:
      'Yes, our cookies may contain allergens such as nuts, gluten, and dairy. Please check individual product descriptions.',
  },
  {
    question: 'How should I store Crumble cookies?',
    answer:
      'Store them in an airtight container at room temperature for up to 5 days, or refrigerate to extend freshness.',
  },
  {
    question: 'What is the shipping time of the order?',
    answer:
      'Orders are typically delivered within 2–4 business days, depending on your location.',
  },
  {
    question: 'What if the recipient is unavailable to take the delivery?',
    answer:
      'Our delivery partners will attempt redelivery or contact you for alternate instructions.',
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-4 md:p-8 flex justify-center md:pb-20">
      <div className="w-full max-w-2xl rounded-md">
        <h2 className="text-center text-xl md:text-2xl font-bold text-blue-900 py-4">FAQs</h2>
        <div className="divide-y divide-blue-900">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="px-4 py-3 cursor-pointer text-blue-900"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <p className="text-sm md:text-base">{faq.question}</p>
                <span className="text-xl">
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-sm text-black">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
