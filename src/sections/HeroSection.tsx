import React from 'react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import Magnet from '../components/Magnet';

const navLinks = ['About', 'Price', 'Projects', 'Contact'];

const PORTRAIT_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

const HeroSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col relative" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="px-6 md:px-10 pt-6 md:pt-8 relative z-20">
        <nav className="flex justify-between">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40} className="overflow-hidden relative z-20 flex-shrink-0">
        <h1
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center mt-6 sm:mt-4 md:-mt-5 text-[9.5vw] sm:text-[10vw] md:text-[10.5vw] lg:text-[11vw]"
        >
          Hi, i&apos;m qadeer
        </h1>
      </FadeIn>

      {/* Hero Portrait - Centered Absolute */}
      <div
        className="absolute left-1/2 -translate-x-1/2 z-10
          w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]
          top-1/2 -translate-y-1/2
          sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <FadeIn delay={0.6} y={30} className="w-full h-full">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full h-full"
          >
            <img
              src={PORTRAIT_URL}
              alt="Qadeer - 3D Creator Portrait"
              className="w-full h-auto object-contain pointer-events-none select-none"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom Bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
