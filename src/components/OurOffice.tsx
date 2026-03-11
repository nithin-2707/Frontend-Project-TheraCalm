'use client';

import Image from 'next/image';
import { ScrollRevealText, ScrollRevealElement } from './ScrollReveal';

export default function OurOffice() {
  return (
    <section className="w-full bg-lilac-cream py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <ScrollRevealText 
            as="h2" 
            className="text-3xl md:text-display font-medium text-lilac-olive-dark mb-6"
            enableBlur={true}
          >
            A Calm Space for Healing
          </ScrollRevealText>
          <ScrollRevealText 
            as="p" 
            className="text-body-lg text-lilac-olive max-w-2xl mx-auto leading-relaxed font-normal"
            enableBlur={true}
          >
            My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. It's designed to feel like a retreat from the outside world.
          </ScrollRevealText>
        </div>

        {/* Office Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Office Image 1 - Main therapy room */}
          <ScrollRevealElement 
            className="relative aspect-[4/3] overflow-hidden rounded-lg"
            enableBlur={true}
          >
            <Image
              src="/images/office1.jpeg"
              alt="Theracalm therapy office - comfortable seating area with natural light in Austin, TX"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </ScrollRevealElement>
          
          {/* Office Image 2 - Waiting area */}
          <ScrollRevealElement 
            className="relative aspect-[4/3] overflow-hidden rounded-lg"
            enableBlur={true}
          >
            <Image
              src="/images/office2.jpeg"
              alt="Welcoming therapy space with large windows and warm atmosphere in Austin, TX"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </ScrollRevealElement>
        </div>

        {/* Office Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Feature 1 */}
          <ScrollRevealElement 
            className="text-center md:text-left"
            enableBlur={true}
          >
            <div className="w-12 h-12 mx-auto md:mx-0 mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 text-lilac-olive">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            </div>
            <h3 className="text-subheading font-medium text-lilac-olive-dark mb-2">Natural Light</h3>
            <p className="text-body text-lilac-olive leading-relaxed font-normal">
              Bright, airy spaces with plenty of natural light to create a warm and welcoming atmosphere.
            </p>
          </ScrollRevealElement>

          {/* Feature 2 */}
          <ScrollRevealElement 
            className="text-center md:text-left"
            enableBlur={true}
          >
            <div className="w-12 h-12 mx-auto md:mx-0 mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 text-lilac-olive">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h3 className="text-subheading font-medium text-lilac-olive-dark mb-2">Private & Secure</h3>
            <p className="text-body text-lilac-olive leading-relaxed font-normal">
              A confidential, safe environment where your privacy is respected and protected at all times.
            </p>
          </ScrollRevealElement>

          {/* Feature 3 */}
          <ScrollRevealElement 
            className="text-center md:text-left"
            enableBlur={true}
          >
            <div className="w-12 h-12 mx-auto md:mx-0 mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 text-lilac-olive">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <h3 className="text-subheading font-medium text-lilac-olive-dark mb-2">Austin, TX Location</h3>
            <p className="text-body text-lilac-olive leading-relaxed font-normal">
              Conveniently located at 200 W Cesar Chavez St, Austin, TX 78701. Telehealth also available.
            </p>
          </ScrollRevealElement>
        </div>

        {/* Quote */}
        <div className="mt-12 md:mt-16 text-center">
          <ScrollRevealText 
            as="blockquote" 
            className="text-subheading md:text-heading font-medium text-lilac-olive-dark italic max-w-3xl mx-auto"
            enableBlur={true}
          >
            "Clients often share that the space itself helps them feel more at ease when they arrive."
          </ScrollRevealText>
          <ScrollRevealText 
            as="p" 
            className="text-body text-lilac-olive mt-4 font-normal"
            enableBlur={true}
          >
            — Dr. Aria Chen
          </ScrollRevealText>
        </div>
      </div>
    </section>
  );
}
