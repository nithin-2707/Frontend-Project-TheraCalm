'use client';

import Image from 'next/image';
import ScrollRevealText, { ScrollRevealElement } from './ScrollReveal';
import AnimatedButton from './AnimatedButton';

export default function AboutPreview() {
  return (
    <section className="w-full bg-lilac-sage">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Content */}
        <div className="order-2 md:order-1 flex flex-col justify-center">
          {/* Text Content */}
          <div className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-xl ml-auto">
              <ScrollRevealText 
                as="h2" 
                className="text-3xl md:text-display font-medium text-lilac-olive-dark mb-6 leading-[1.1]"
                enableBlur
                blurStrength={4}
              >
                Find relief from anxiety and stress.
              </ScrollRevealText>
              <ScrollRevealText 
                as="p" 
                className="text-body-lg text-lilac-olive mb-4 leading-relaxed font-normal"
                enableBlur
                blurStrength={3}
              >
                Many of the people I work with are high achieving, thoughtful, and self-aware but internally feel exhausted, stuck in overthinking, or emotionally on edge.
              </ScrollRevealText>
              <ScrollRevealText 
                as="p" 
                className="text-body-lg text-lilac-olive mb-8 leading-relaxed font-normal"
                enableBlur
                blurStrength={3}
              >
                If you're looking for a therapist who combines practical tools with depth oriented work and who understands the realities of living in a fast-paced environment. I may be a good fit.
              </ScrollRevealText>
              
              {/* Button - directly under text */}
              <ScrollRevealElement enableBlur blurStrength={2}>
                <AnimatedButton href="/contact#booking-form" variant="primary">
                  GET IN TOUCH →
                </AnimatedButton>
              </ScrollRevealElement>
            </div>
          </div>
        </div>

        {/* Image - extends to right edge and bottom */}
        <ScrollRevealElement className="order-1 md:order-2 relative min-h-[300px] md:min-h-full" enableBlur blurStrength={3}>
          <Image
            src="/images/meditation.png"
            alt="Peaceful meditation representing calm and mental wellness"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </ScrollRevealElement>
      </div>
    </section>
  );
}
