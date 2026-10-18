import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RiseIn, FadeIn } from './Reveal';

type Props = {
  id: string;
  name: string;
  description: React.ReactNode;
  image: string;
  href?: string;
};

export function InitiativeSlide({ id, name, description, image, href }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ['start end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.6, 0.9], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -80]);
  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.55, 1, 0.55]);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id={id}
      className="relative w-full bg-[#45505B] overflow-hidden">
      <motion.div
        style={{ opacity, y }}
        className="relative w-full px-4 md:px-16 py-6 md:py-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-14 text-white max-w-[1500px] mx-auto">
        <motion.div style={{ scale: photoScale }} className="origin-center">
          <motion.img
            src={image}
            alt={name}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-auto rounded-md" />
        </motion.div>
        <div className="flex flex-col gap-6">
          <RiseIn
            as="h3"
            className="font-mozillaHeadline font-medium text-[1.59rem] md:text-[2.55rem] lg:text-[3.19rem] leading-[0.95] tracking-tight">
            {name}
          </RiseIn>
          <FadeIn delay={0.4}>
            <p className="font-mozillaText font-normal text-[1.7rem] leading-[2.4rem] tracking-tight">
              {description}
            </p>
          </FadeIn>
          {href && (
            <FadeIn delay={0.5}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bagoss-condensed font-normal text-[0.74rem] tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors">
                Saber más
                <span className="text-[0.85rem]">→</span>
              </a>
            </FadeIn>
          )}
        </div>
      </motion.div>
    </section>);
}
