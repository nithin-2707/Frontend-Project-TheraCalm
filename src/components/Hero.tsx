'use client';

import Image from 'next/image';
import ScrollRevealText, { ScrollRevealElement } from './ScrollReveal';
import AnimatedButton from './AnimatedButton';

export default function Hero() {
  return (
    <section className="w-full bg-white py-8 md:py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Hero Image */}
          <ScrollRevealElement className="relative" enableBlur blurStrength={3}>
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto md:mx-0 rounded-[40%_40%_40%_40%/30%_30%_30%_30%] overflow-hidden">
              <Image
                src="/images/dr-aria-chen.png"
                alt="Dr. Aria Chen - Licensed Clinical Psychologist specializing in anxiety and trauma therapy in Austin, TX"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </ScrollRevealElement>

          {/* Hero Content */}
          <div className="text-center md:text-left">
            <ScrollRevealText 
              as="h1" 
              className="text-4xl md:text-6xl lg:text-hero font-medium text-lilac-olive-dark mb-6 leading-[1.04]"
              enableBlur
              blurStrength={4}
            >
              Rediscover calm in the chaos
            </ScrollRevealText>
            <ScrollRevealText 
              as="p" 
              className="text-body-lg text-lilac-olive mb-8 max-w-md font-normal"
              enableBlur
              blurStrength={3}
            >
              Anxiety, Trauma & Burnout Therapy in Austin, TX.
            </ScrollRevealText>
            <ScrollRevealElement enableBlur blurStrength={2}>
              <AnimatedButton href="/contact" variant="primary">
                SCHEDULE CONSULTATION →
              </AnimatedButton>
            </ScrollRevealElement>
          </div>
        </div>
      </div>
    </section>
  );
}
