import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function GrowSlide() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ['start end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.6, 0.9], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [0.15, 1, 1, 1.1]);
  const photosOpacity = useTransform(scrollYProgress, [0.42, 0.6, 0.8, 0.95], [0, 1, 1, 0]);
  const photosY = useTransform(scrollYProgress, [0.42, 0.65], [40, 0]);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="slide-2"
      className="relative w-full min-h-screen bg-[#222D33] overflow-hidden">
      <motion.div
        style={{ opacity, y }}
        className="relative w-full min-h-screen flex items-center justify-center">
        {/* Two creative videos slightly overlapping Grow */}
        <motion.video
          src="/01.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ opacity: photosOpacity, y: photosY }}
          className="absolute left-[3%] md:left-[7%] bottom-[2%] w-[38vw] max-w-[440px] object-contain rounded-md -rotate-3 shadow-2xl pointer-events-none z-0" />
        <motion.video
          src="/02.mov"
          autoPlay
          loop
          muted
          playsInline
          style={{ opacity: photosOpacity, y: photosY }}
          className="absolute right-[3%] md:right-[7%] top-[28%] w-[45vw] max-w-[550px] object-contain rounded-md rotate-3 shadow-2xl pointer-events-none z-0" />

        <motion.h2
          style={{ scale }}
          className="relative z-20 font-mozillaHeadline font-stretch-semi-expanded font-medium text-[18.7vw] md:text-[17vw] leading-[0.75] tracking-tighter text-center w-full text-white uppercase select-none origin-center">
          Grow
        </motion.h2>
      </motion.div>
    </section>);
}
