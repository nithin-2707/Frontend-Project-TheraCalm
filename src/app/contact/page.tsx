'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedButton from '@/components/AnimatedButton';
import ScrollRevealText, { ScrollRevealElement } from '@/components/ScrollReveal';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="h-20 md:h-24"></div>

      {/* Contact Hero */}
      <section className="w-full bg-lilac-sage py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <ScrollRevealText 
            as="h1" 
            className="text-4xl md:text-6xl lg:text-hero font-medium text-lilac-olive-dark mb-8"
            enableBlur
            blurStrength={4}
          >
            Let's Connect
          </ScrollRevealText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Left Column */}
            <div>
              <ScrollRevealText as="p" className="text-body-lg text-lilac-olive mb-4 font-normal" enableBlur blurStrength={3}>
                Taking the first step is often the hardest part.
              </ScrollRevealText>
              <ScrollRevealText as="p" className="text-body-lg text-lilac-olive mb-8 font-normal" enableBlur blurStrength={3}>
                Get in touch to schedule a consultation and see if we're the right fit for working together.
              </ScrollRevealText>
              
              <ScrollRevealElement enableBlur blurStrength={3}>
                <div className="relative w-48 h-48 mx-auto md:mx-0">
                  <Image
                    src="/images/dr-aria-chen.png"
                    alt="Dr. Aria Chen - Licensed Clinical Psychologist"
                    fill
                    className="object-cover object-top rounded-full"
                  />
                </div>
              </ScrollRevealElement>
            </div>

            {/* Right Column - Note */}
            <ScrollRevealElement enableBlur blurStrength={3}>
              <div className="bg-lilac-beige p-6 md:p-8">
                <p className="text-body text-lilac-olive leading-relaxed font-normal">
                  <span className="font-bold">OFFICE ADDRESS:</span> 200 W Cesar Chavez St, Austin, TX 78701. I offer both in-person therapy and secure telehealth sessions for clients located anywhere in Texas.
                </p>
              </div>
            </ScrollRevealElement>
          </div>
        </div>
      </section>

      {/* Book Appointment Section */}
      <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollRevealText 
            as="h2" 
            className="text-3xl md:text-display font-medium text-lilac-olive-dark mb-6"
            enableBlur
            blurStrength={4}
          >
            Book an appointment.
          </ScrollRevealText>
          <ScrollRevealText 
            as="p" 
            className="text-body-lg text-lilac-olive mb-8 leading-relaxed font-normal"
            enableBlur
            blurStrength={3}
          >
            I believe therapy works best when clients feel respected, understood, and actively involved in the process. Schedule a consultation to see if we're the right fit.
          </ScrollRevealText>
          
          <ScrollRevealElement enableBlur blurStrength={2}>
            <AnimatedButton href="mailto:contact@theracalm.com" variant="primary">
              EMAIL ME TO SCHEDULE →
            </AnimatedButton>
          </ScrollRevealElement>
        </div>
      </section>

      {/* Office Section */}
      <section className="w-full bg-gradient-to-br from-teal-dark to-teal-light py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Address Info */}
            <div>
              <ScrollRevealText 
                as="h2" 
                className="text-3xl md:text-display font-medium mb-6 text-white"
                enableBlur
                blurStrength={4}
              >
                My Office
              </ScrollRevealText>
              <ScrollRevealText as="p" className="text-body-lg mb-1 font-normal text-white" enableBlur>
                200 W Cesar Chavez St
              </ScrollRevealText>
              <ScrollRevealText as="p" className="text-body-lg mb-6 font-normal text-white" enableBlur>
                Austin, TX 78701
              </ScrollRevealText>
              
              <ScrollRevealText as="h3" className="text-subheading font-medium mb-4 text-white" enableBlur>
                Hours
              </ScrollRevealText>
              <ScrollRevealText as="p" className="text-body-lg mb-1 font-normal text-white" enableBlur>
                Monday – Friday
              </ScrollRevealText>
              <ScrollRevealText as="p" className="text-body-lg font-normal text-white" enableBlur>
                9am – 6pm
              </ScrollRevealText>
              
              <ScrollRevealText as="p" className="text-body mt-6 text-white/80 font-normal" enableBlur>
                Telehealth available for Texas residents
              </ScrollRevealText>
            </div>

            {/* Google Maps Embed */}
            <ScrollRevealElement enableBlur blurStrength={3}>
              <div className="relative w-full aspect-[4/3] bg-white overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110899.3290963434!2d-97.86027!3d30.267153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1706745600000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Theracalm Office Location - Austin, TX"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </ScrollRevealElement>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
