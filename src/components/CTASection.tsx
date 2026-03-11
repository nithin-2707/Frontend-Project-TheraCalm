'use client';

import ScrollRevealText, { ScrollRevealElement } from './ScrollReveal';
import AnimatedButton from './AnimatedButton';

export default function CTASection() {
  return (
    <section className="w-full bg-gradient-to-br from-teal-dark to-teal-light py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollRevealText 
          as="h2" 
          className="text-3xl md:text-display font-medium text-white mb-6"
          enableBlur
          blurStrength={4}
        >
          Ready to get started?
        </ScrollRevealText>
        <ScrollRevealText 
          as="p" 
          className="text-body-lg text-white/90 mb-4 leading-relaxed font-normal"
          enableBlur
          blurStrength={3}
        >
          I believe therapy works best when clients feel respected, understood, and actively involved in the process.
        </ScrollRevealText>
        <ScrollRevealText 
          as="p" 
          className="text-body-lg text-white/90 mb-8 leading-relaxed font-normal"
          enableBlur
          blurStrength={3}
        >
          If you're ready to take the first step towards a calmer, more grounded you, I'd love to hear from you.
        </ScrollRevealText>
        <ScrollRevealElement enableBlur blurStrength={2}>
          <AnimatedButton href="/contact#booking-form" variant="white">
            BOOK A CONSULTATION →
          </AnimatedButton>
        </ScrollRevealElement>
      </div>
    </section>
  );
}
