import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function DoSlide() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ['start end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.6, 0.9], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -80]);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="slide-do"
      data-light-bg
      className="relative w-full min-h-screen overflow-hidden">
      <motion.div
        style={{ opacity, y }}
        className="relative w-full min-h-screen flex items-center justify-center">
        <h2 className="do-text font-mozillaHeadline font-stretch-semi-expanded font-medium text-[18.7vw] md:text-[17vw] leading-[0.75] tracking-tighter text-center w-full uppercase select-none flex items-center justify-center">
          <span>D</span>
          <motion.span
            className="inline-block origin-center"
            animate={{ rotate: 360 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'linear',
            }}>
            o
          </motion.span>
        </h2>
      </motion.div>
    </section>);
}
