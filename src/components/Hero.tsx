import { Slide } from './Slide';
import { FadeIn, ScrollLit } from './Reveal';
import { motion } from 'framer-motion';

const scrollToNext = () => {
  document.getElementById('slide-2')?.scrollIntoView({ behavior: 'smooth' });
};

export function Hero() {
  return (
    <Slide id="slide-1" className="bg-[#222D33]">
      <div className="relative w-full min-h-screen pt-32 pb-24 px-4 md:px-8 flex flex-col items-center justify-center">
        {/* MBRAND Wordmark */}
        <div className="relative w-full max-w-[1600px] mx-auto flex flex-col items-center justify-center mb-12 md:mb-20">
          <div className="w-full relative px-4 md:px-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-8 md:-top-14 left-2 md:left-0 w-12 h-12 md:w-16 md:h-16">
              <img src="/sello.svg" alt="" className="w-full h-full" />
            </motion.div>
            <img
              src="/header.svg"
              alt="Mbrand"
              className="w-full h-auto" />
          </div>
        </div>

        {/* Editorial Paragraph */}
        <ScrollLit className="font-mozillaHeadline font-light text-[2.13rem] leading-[1.1] md:text-[3.83rem] lg:text-[5.1rem] md:leading-[1.05] text-center max-w-[1200px] mx-auto tracking-tight text-white px-4">
          Es un{' '}
          <span className="underline decoration-1 underline-offset-[6px] md:underline-offset-[10px]">
            venture builder
          </span>
          <sup className="text-[0.4em] ml-1 align-super">(1)</sup>{' '}
          y{' '}
          <span className="underline decoration-1 underline-offset-[6px] md:underline-offset-[10px]">
            supporter
          </span>
          <sup className="text-[0.4em] ml-1 align-super">(2)</sup>
          <br className="hidden md:block" />{' '}
          especializado en proyectos de{' '}
          <span className="underline decoration-1 underline-offset-[6px] md:underline-offset-[10px]">
            base tecnológica
          </span>
          <br className="hidden md:block" />{' '}
          que conectan personas,{' '}
          <img
            src="/personas.jpg"
            className="inline-block w-[64px] h-[27px] md:w-[180px] md:h-[77px] object-cover rounded-[4px] align-middle -mt-2 md:-mt-4 mx-1 md:mx-2"
            alt="" />{' '}
          ideas,{' '}
          <img
            src="/ideas.jpg"
            className="inline-block w-[64px] h-[27px] md:w-[180px] md:h-[77px] object-cover rounded-[4px] align-middle -mt-2 md:-mt-4 mx-1 md:mx-2"
            alt="" />{' '}
          propósitos{' '}
          <img
            src="/propositos.jpg"
            className="inline-block w-[64px] h-[27px] md:w-[180px] md:h-[77px] object-cover rounded-[4px] align-middle -mt-2 md:-mt-4 mx-1 md:mx-2"
            alt="" />
          {' '}y marcas{' '}
          <img
            src="/marcas.png"
            className="inline-block w-[64px] h-[27px] md:w-[180px] md:h-[77px] object-cover rounded-[4px] align-middle -mt-2 md:-mt-4 mx-1 md:mx-2"
            alt="" />
          {' '}entre sí para hacer crecer los{' '}
          <span className="underline decoration-1 underline-offset-[6px] md:underline-offset-[10px]">
            derechos humanos
          </span>
          <sup className="text-[0.4em] ml-1 align-super">(3)</sup>
        </ScrollLit>

        {/* Scroll Indicator */}
        <FadeIn immediate delay={0.6} className="mt-16 md:mt-24">
          <button
            type="button"
            onClick={scrollToNext}
            aria-label="Scroll to next section"
            className="font-mozillaHeadline font-stretch-semi-expanded font-normal text-[1.06rem] md:text-[1.275rem] text-white inline-flex flex-col items-center gap-3 animate-pulse cursor-pointer hover:opacity-80 transition-opacity">
            <span>Scroll</span>
            <svg
              width="22"
              height="36"
              viewBox="0 0 22 36"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden>
              <rect x="1" y="1" width="20" height="34" rx="10" />
              <line x1="11" y1="7" x2="11" y2="13" strokeLinecap="round">
                <animate
                  attributeName="y2"
                  values="13;17;13"
                  dur="1.5s"
                  repeatCount="indefinite" />
                <animate
                  attributeName="y1"
                  values="7;11;7"
                  dur="1.5s"
                  repeatCount="indefinite" />
              </line>
            </svg>
          </button>
        </FadeIn>

        {/* Postal Addresses */}
        <FadeIn
          immediate
          delay={0.8}
          className="absolute bottom-8 right-4 md:bottom-12 md:right-8 font-mozillaText font-normal text-[0.64rem] md:text-[0.74rem] text-white/70 grid grid-cols-3 gap-x-6 md:gap-x-10 text-right">
          <address className="not-italic leading-snug">
            Manoteras 38<br />
            Madrid (28050)
          </address>
          <address className="not-italic leading-snug">
            Chemin des mines 1<br />
            Genève (1807)
          </address>
          <address className="not-italic leading-snug">
            131 Continental Dr<br />
            Suite 305 (19713), USA.
          </address>
        </FadeIn>
      </div>
    </Slide>);
}
