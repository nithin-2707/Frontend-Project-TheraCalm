'use client';

import Image from 'next/image';
import ScrollRevealText, { ScrollRevealElement } from './ScrollReveal';
import AnimatedButton from './AnimatedButton';

export default function AboutSection() {
  return (
    <section className="w-full bg-lilac-cream py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <ScrollRevealText 
              as="h2" 
              className="text-3xl md:text-display font-medium text-lilac-olive-dark mb-8 leading-[1.1]"
              enableBlur
              blurStrength={4}
            >
              Hi, I'm Dr. Aria.
            </ScrollRevealText>
            <ScrollRevealText 
              as="p" 
              className="text-body-lg text-lilac-olive mb-4 leading-relaxed font-normal"
              enableBlur
              blurStrength={3}
            >
              I'm a licensed clinical psychologist based in Austin, Texas, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
            </ScrollRevealText>
            <ScrollRevealText 
              as="p" 
              className="text-body-lg text-lilac-olive mb-8 leading-relaxed font-normal"
              enableBlur
              blurStrength={3}
            >
              I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth.
            </ScrollRevealText>
            <ScrollRevealElement enableBlur blurStrength={2}>
              <AnimatedButton href="/contact" variant="outline">
                LET'S CHAT →
              </AnimatedButton>
            </ScrollRevealElement>
          </div>

          {/* Images - Main arch photo and circular flower */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main arch-shaped image */}
            <ScrollRevealElement className="relative w-[280px] md:w-[350px] h-[400px] md:h-[500px] rounded-t-full overflow-hidden bg-lilac-sage/30" enableBlur blurStrength={4}>
              <Image
                src="/images/dr-aria-chen.png"
                alt="Dr. Aria Chen - Licensed Clinical Psychologist"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 280px, 350px"
              />
            </ScrollRevealElement>
            {/* Circular flower image - positioned bottom right */}
            <ScrollRevealElement className="absolute -bottom-8 -right-4 md:right-0 w-[140px] md:w-[180px] h-[140px] md:h-[180px] rounded-full overflow-hidden border-4 border-lilac-cream" enableBlur blurStrength={3} delay={0.2}>
              <Image
                src="/images/Gemini_Generated_Image_bao1c5bao1c5bao1.png"
                alt="Supportive hands reaching out symbolizing therapy connection"
                fill
                className="object-cover"
              />
            </ScrollRevealElement>
          </div>
        </div>
      </div>
    </section>
  );
}
