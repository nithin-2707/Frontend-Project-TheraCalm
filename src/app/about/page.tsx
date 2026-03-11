'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedButton from '@/components/AnimatedButton';
import ScrollRevealText, { ScrollRevealElement } from '@/components/ScrollReveal';

const credentials = [
  {
    title: 'Education',
    content: 'Doctor of Psychology (PsyD) from an accredited clinical psychology program. Completed extensive training in trauma-informed care, cognitive behavioral therapy, and evidence-based therapeutic approaches for anxiety and stress-related conditions.'
  },
  {
    title: 'Licensure',
    content: 'Licensed Clinical Psychologist in the state of Texas. I maintain all required continuing education credits and stay current with the latest research in trauma treatment, anxiety management, and burnout prevention.'
  },
  {
    title: 'Certifications',
    content: 'Certified in EMDR (Eye Movement Desensitization and Reprocessing) therapy for trauma treatment. Additional specialized training in Cognitive Behavioral Therapy (CBT), mindfulness-based interventions, and body-oriented therapeutic techniques.'
  }
];

const approaches = [
  {
    title: 'Cognitive Behavioral Therapy (CBT)',
    description: 'Evidence based approach to identify and change negative thought patterns that contribute to anxiety and stress.'
  },
  {
    title: 'EMDR Therapy',
    description: 'Specialized trauma treatment that helps process and heal from distressing experiences and memories.'
  },
  {
    title: 'Mindfulness Based Practices',
    description: 'Techniques to cultivate present moment awareness and develop a healthier relationship with your thoughts and emotions.'
  },
  {
    title: 'Body-Oriented Techniques',
    description: 'Somatic approaches that address the physical manifestations of stress and trauma stored in the body.'
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="h-20 md:h-24"></div>

      {/* About Hero */}
      <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Image */}
            <ScrollRevealElement className="relative" enableBlur blurStrength={3}>
              <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[3/4] rounded-t-full overflow-hidden">
                <Image
                  src="/images/dr-aria-chen.png"
                  alt="Dr. Aria Chen - Licensed Clinical Psychologist in Austin, TX specializing in anxiety, trauma, and burnout therapy"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </ScrollRevealElement>

            {/* Content */}
            <div>
              <ScrollRevealText 
                as="h1" 
                className="text-4xl md:text-6xl lg:text-hero font-medium text-lilac-olive-dark mb-6 leading-[1.04]"
                enableBlur
                blurStrength={4}
              >
                About Dr. Aria
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
                className="text-body-lg text-lilac-olive mb-4 leading-relaxed font-normal"
                enableBlur
                blurStrength={3}
              >
                Many of the people I work with are high achieving, thoughtful, and self aware, but internally feel exhausted, stuck in overthinking, or emotionally on edge. They may be entrepreneurs, creatives, or professionals who have been pushing through stress for years and are finally ready for something different.
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
                <AnimatedButton href="/contact" variant="primary">
                  SCHEDULE A CONSULTATION →
                </AnimatedButton>
              </ScrollRevealElement>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="w-full bg-lilac-cream py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <ScrollRevealText 
            as="h2" 
            className="text-3xl md:text-display font-medium text-lilac-olive-dark text-center mb-6"
            enableBlur
            blurStrength={4}
          >
            My Therapeutic Approach
          </ScrollRevealText>
          <ScrollRevealText 
            as="p" 
            className="text-body-lg text-lilac-olive text-center max-w-3xl mx-auto mb-12 leading-relaxed font-normal"
            enableBlur
            blurStrength={3}
          >
            I integrate evidence based methods to address both the emotional and physiological aspects of what you're experiencing. This allows for deep, lasting change.
          </ScrollRevealText>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {approaches.map((approach, index) => (
              <ScrollRevealElement 
                key={index}
                className="bg-white p-8 rounded-lg border-2 border-[#306e78]/30"
                enableBlur
                blurStrength={3}
                delay={index * 0.1}
              >
                <h3 className="text-subheading font-medium text-lilac-olive-dark mb-3">
                  {approach.title}
                </h3>
                <p className="text-body text-lilac-olive leading-relaxed font-normal">
                  {approach.description}
                </p>
              </ScrollRevealElement>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="w-full bg-gradient-to-br from-teal-dark to-teal-light py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollRevealText 
            as="h2" 
            className="text-3xl md:text-display font-medium text-white mb-8"
            enableBlur
            blurStrength={4}
          >
            My Philosophy
          </ScrollRevealText>
          <ScrollRevealText 
            as="p" 
            className="text-body-lg text-white/90 mb-6 leading-relaxed font-normal"
            enableBlur
            blurStrength={3}
          >
            I believe therapy works best when clients feel respected, understood, and actively involved in the process.
          </ScrollRevealText>
          <ScrollRevealText 
            as="p" 
            className="text-body-lg text-white/90 mb-6 leading-relaxed font-normal"
            enableBlur
            blurStrength={3}
          >
            My goal is not just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself over time.
          </ScrollRevealText>
          <ScrollRevealText 
            as="p" 
            className="text-body-lg text-white italic leading-relaxed font-normal"
            enableBlur
            blurStrength={3}
          >
            "If you're looking for a therapist who combines practical tools with depth oriented work and who understands the realities of living in a fast-paced environment, I may be a good fit."
          </ScrollRevealText>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <ScrollRevealText 
            as="h2" 
            className="text-3xl md:text-display font-medium text-lilac-olive-dark text-center mb-12"
            enableBlur
            blurStrength={4}
          >
            Professional Background
          </ScrollRevealText>

          <div className="space-y-8">
            {credentials.map((credential, index) => (
              <ScrollRevealElement 
                key={index}
                className="border-b border-lilac-sage pb-8 last:border-b-0"
                enableBlur
                blurStrength={3}
                delay={index * 0.1}
              >
                <h3 className="text-subheading font-medium text-lilac-olive-dark mb-3">
                  {credential.title}
                </h3>
                <p className="text-body-lg text-lilac-olive leading-relaxed font-normal">
                  {credential.content}
                </p>
              </ScrollRevealElement>
            ))}
          </div>
        </div>
      </section>

      {/* Who I Work With Section */}
      <section className="w-full bg-lilac-sage py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <ScrollRevealText 
                as="h2" 
                className="text-3xl md:text-display font-medium text-lilac-olive-dark mb-6"
                enableBlur
                blurStrength={4}
              >
                Who I Work With
              </ScrollRevealText>
              <ScrollRevealText 
                as="p" 
                className="text-body-lg text-lilac-olive mb-4 leading-relaxed font-normal"
                enableBlur
                blurStrength={3}
              >
                I specialize in working with high achieving adults who are dealing with:
              </ScrollRevealText>
              <ul className="space-y-3 mb-8">
                {[
                  'Anxiety and panic attacks',
                  'Trauma (single-incident and complex)',
                  'Professional burnout and chronic stress',
                  'Overthinking and perfectionism',
                  'Difficulty slowing down or relaxing'
                ].map((item, index) => (
                  <ScrollRevealElement key={index} enableBlur blurStrength={2} delay={index * 0.05}>
                    <li className="flex items-start text-body-lg text-lilac-olive font-normal">
                      <span className="mr-3 text-lilac-olive-dark">•</span>
                      {item}
                    </li>
                  </ScrollRevealElement>
                ))}
              </ul>
              <ScrollRevealElement enableBlur blurStrength={2}>
                <AnimatedButton href="/contact" variant="primary">
                  GET IN TOUCH →
                </AnimatedButton>
              </ScrollRevealElement>
            </div>

            <ScrollRevealElement className="relative" enableBlur blurStrength={3}>
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <Image
                  src="/images/Gemini_Generated_Image_wdsze6wdsze6wdsz.png"
                  alt="Calm therapy office environment"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </ScrollRevealElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollRevealText 
            as="h2" 
            className="text-3xl md:text-display font-medium text-lilac-olive-dark mb-6"
            enableBlur
            blurStrength={4}
          >
            Ready to Begin?
          </ScrollRevealText>
          <ScrollRevealText 
            as="p" 
            className="text-body-lg text-lilac-olive mb-8 leading-relaxed font-normal"
            enableBlur
            blurStrength={3}
          >
            If you're ready to take the first step towards a calmer, more grounded you, I'd love to hear from you. I offer both in-person sessions in Austin and telehealth for Texas residents.
          </ScrollRevealText>
          <ScrollRevealElement enableBlur blurStrength={2}>
            <AnimatedButton href="/contact" variant="primary">
              SCHEDULE A CONSULTATION →
            </AnimatedButton>
          </ScrollRevealElement>
        </div>
      </section>

      <Footer />
    </main>
  );
}
