'use client';

import Image from 'next/image';
import ScrollRevealText, { ScrollRevealElement } from './ScrollReveal';
import AnimatedButton from './AnimatedButton';

const supportPoints = [
  'Constant worry or racing thoughts that won\'t quiet down',
  'Tension in your body, difficulty sleeping, or feeling on edge',
  'Bracing for something to go wrong even when things are okay',
  'Feeling "functional" on the outside while struggling internally',
  'Exhaustion from years of pushing through chronic stress'
];

export default function SupportSection() {
  return (
    <section className="w-full bg-lilac-sage">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image - extends to left edge */}
        <ScrollRevealElement className="relative min-h-[400px] lg:min-h-[600px]" enableBlur blurStrength={3}>
          <Image
            src="/images/2nd image.png"
            alt="Peaceful scene representing healing and mental wellness"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </ScrollRevealElement>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <div className="py-16 md:py-20 px-8 md:px-12 lg:px-16">
            <ScrollRevealText 
              as="h2" 
              className="text-3xl md:text-display font-medium text-lilac-olive-dark mb-6 leading-[1.1]"
              enableBlur
              blurStrength={4}
            >
              Expert care for anxiety, trauma & burnout.
            </ScrollRevealText>

            <ScrollRevealText 
              as="p" 
              className="text-body-lg text-lilac-olive mb-6 font-normal"
              enableBlur
              blurStrength={3}
            >
              If you are facing any of these, there's hope:
            </ScrollRevealText>

            <ul className="space-y-4 mb-6">
              {supportPoints.map((point, index) => (
                <ScrollRevealElement key={index} enableBlur blurStrength={2} delay={index * 0.05}>
                  <li className="flex items-start text-body-lg text-lilac-olive font-normal">
                    <span className="mr-3">•</span>
                    {point}
                  </li>
                </ScrollRevealElement>
              ))}
            </ul>

            <ScrollRevealText 
              as="p" 
              className="text-body-lg text-lilac-olive italic leading-relaxed font-normal mb-8"
              enableBlur
              blurStrength={3}
            >
              My goal is not just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself over time.
            </ScrollRevealText>

            {/* Button - directly under text */}
            <ScrollRevealElement enableBlur blurStrength={2}>
              <AnimatedButton href="/contact#booking-form" variant="primary">
                Schedule Consultation →
              </AnimatedButton>
            </ScrollRevealElement>
          </div>
        </div>
      </div>
    </section>
  );
}
