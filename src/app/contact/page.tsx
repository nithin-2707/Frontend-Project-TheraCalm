'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedButton from '@/components/AnimatedButton';
import ScrollRevealText, { ScrollRevealElement } from '@/components/ScrollReveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { name: '', email: '', message: '' };
    let valid = true;
    if (!formData.name.trim()) { newErrors.name = 'Name is required.'; valid = false; }
    if (!formData.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(formData.email)) { newErrors.email = 'A valid email is required.'; valid = false; }
    if (!formData.message.trim()) { newErrors.message = 'Please write a short message.'; valid = false; }
    if (!valid) { setErrors(newErrors); return; }
    const subject = encodeURIComponent(`Consultation Request from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:contact@theracalm.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

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
      <section id="booking-form" className="w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl mx-auto">
          <ScrollRevealText
            as="h2"
            className="text-3xl md:text-display font-medium text-lilac-olive-dark mb-4 text-center"
            enableBlur
            blurStrength={4}
          >
            Book an appointment.
          </ScrollRevealText>
          <ScrollRevealText
            as="p"
            className="text-body-lg text-lilac-olive mb-10 leading-relaxed font-normal text-center"
            enableBlur
            blurStrength={3}
          >
            Fill in your details below and I'll get back to you within 24 hours.
          </ScrollRevealText>

          {submitted ? (
            <div className="bg-lilac-sage rounded-lg p-10 text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-subheading font-medium text-lilac-olive-dark mb-2">Message sent!</h3>
              <p className="text-body text-lilac-olive">Your email client should have opened with your message. I'll be in touch soon.</p>
            </div>
          ) : (
            <ScrollRevealElement enableBlur blurStrength={3}>
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-body font-medium text-lilac-olive-dark mb-1">Full Name <span className="text-red-400">*</span></label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className={`w-full px-4 py-3 rounded-lg border text-body text-lilac-olive-dark placeholder:text-lilac-olive/50 bg-white outline-none transition-colors focus:border-[#306e78] ${
                      errors.name ? 'border-red-400' : 'border-lilac-sage'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-body font-medium text-lilac-olive-dark mb-1">Email Address <span className="text-red-400">*</span></label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className={`w-full px-4 py-3 rounded-lg border text-body text-lilac-olive-dark placeholder:text-lilac-olive/50 bg-white outline-none transition-colors focus:border-[#306e78] ${
                      errors.email ? 'border-red-400' : 'border-lilac-sage'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-body font-medium text-lilac-olive-dark mb-1">Phone <span className="text-lilac-olive/50 font-normal">(optional)</span></label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(512) 000-0000"
                    className="w-full px-4 py-3 rounded-lg border border-lilac-sage text-body text-lilac-olive-dark placeholder:text-lilac-olive/50 bg-white outline-none transition-colors focus:border-[#306e78]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-body font-medium text-lilac-olive-dark mb-1">What brings you here? <span className="text-red-400">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me a little about what you're experiencing and what you're hoping to work on..."
                    className={`w-full px-4 py-3 rounded-lg border text-body text-lilac-olive-dark placeholder:text-lilac-olive/50 bg-white outline-none transition-colors focus:border-[#306e78] resize-none ${
                      errors.message ? 'border-red-400' : 'border-lilac-sage'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-8 bg-[#306e78] text-white font-medium rounded-lg hover:bg-[#264f56] transition-colors duration-200 text-body tracking-wide"
                >
                  SEND MESSAGE →
                </button>

                <p className="text-xs text-lilac-olive text-center">
                  Submitting will open your email client with your message pre-filled.
                </p>
              </form>
            </ScrollRevealElement>
          )}
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
