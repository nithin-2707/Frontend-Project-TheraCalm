'use client';

import { useState } from 'react';
import { ScrollRevealText, ScrollRevealElement } from './ScrollReveal';

const backgrounds = [
  {
    title: 'Education',
    content: 'Doctor of Psychology (PsyD) from an accredited clinical psychology program. Completed extensive training in trauma informed care, cognitive behavioral therapy, and evidence based therapeutic approaches for anxiety and stress related conditions.'
  },
  {
    title: 'Licensure',
    content: 'Licensed Clinical Psychologist in the state of Texas. I maintain all required continuing education credits and stay current with the latest research in trauma treatment, anxiety management, and burnout prevention.'
  },
  {
    title: 'Certifications',
    content: 'Certified in EMDR (Eye Movement Desensitization and Reprocessing) therapy for trauma treatment. Additional specialized training in Cognitive Behavioral Therapy (CBT), mindfulness based interventions, and body oriented therapeutic techniques.'
  }
];

export default function BackgroundSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#306e78] to-[#49838d] py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto">
        <ScrollRevealText 
          as="h2" 
          className="text-3xl md:text-display font-medium text-white text-center mb-12"
          enableBlur={true}
        >
          My Professional Background
        </ScrollRevealText>

        <div className="space-y-0">
          {backgrounds.map((item, index) => (
            <ScrollRevealElement 
              key={index}
              className="border-t border-white/20 last:border-b"
              enableBlur={true}
            >
              <button
                className="w-full py-5 flex items-center justify-between text-left"
                onClick={() => toggleItem(index)}
              >
                <span className="text-body-lg text-white font-medium">
                  {item.title}
                </span>
                <span className="text-xl text-white ml-4">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-body text-white/90 leading-relaxed font-normal">
                  {item.content}
                </p>
              </div>
            </ScrollRevealElement>
          ))}
        </div>
      </div>
    </section>
  );
}
