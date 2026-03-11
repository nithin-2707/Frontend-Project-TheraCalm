'use client';

import Image from 'next/image';
import { useState } from 'react';
import ScrollRevealText, { ScrollRevealElement } from './ScrollReveal';

const faqs = [
  {
    question: 'Do you offer in person or online therapy?',
    answer: 'Both. I offer in person sessions from my Austin office as well as secure telehealth sessions for clients located anywhere in Texas. Many clients appreciate having the flexibility to choose based on their schedule and preferences.'
  },
  {
    question: 'What issues do you specialize in?',
    answer: 'I specialize in anxiety, panic, trauma (both single incident and complex), and professional burnout. I work with high achieving adults who feel overwhelmed by stress or the lingering effects of past experiences. This includes entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through.'
  },
  {
    question: 'What is your therapeutic approach?',
    answer: 'I integrate evidence-based methods such as Cognitive-Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques. This allows me to address both the emotional and physiological aspects of what you\'re experiencing. Trauma work is paced carefully, with emphasis on safety, stabilization, and helping you feel more regulated.'
  },
  {
    question: 'How long does therapy typically take?',
    answer: 'The duration varies by individual and depends on your goals. My focus is on sustainable progress and helping you develop long-term resilience. Some clients find relief in a few months, while others benefit from longer term depth oriented work.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <ScrollRevealElement className="relative order-2 lg:order-1 flex items-center justify-center" enableBlur blurStrength={3}>
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              <Image
                src="/images/Gemini_Generated_Image_wdsze6wdsze6wdsz.png"
                alt="Calm therapy office space with comfortable seating"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </ScrollRevealElement>

          {/* FAQ Content */}
          <div className="order-1 lg:order-2">
            <ScrollRevealText 
              as="h2" 
              className="text-3xl md:text-display font-medium text-lilac-olive-dark mb-8 text-center lg:text-left"
              enableBlur
              blurStrength={4}
            >
              FAQs
            </ScrollRevealText>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <ScrollRevealElement 
                  key={index}
                  className="border-b border-lilac-sage"
                  enableBlur
                  blurStrength={2}
                  delay={index * 0.1}
                >
                  <button
                    className="w-full py-4 flex items-center justify-between text-left"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-body-lg font-medium text-lilac-olive-dark">
                      {faq.question}
                    </span>
                    <span className="text-2xl text-lilac-olive ml-4">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-body text-lilac-olive leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                </ScrollRevealElement>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
