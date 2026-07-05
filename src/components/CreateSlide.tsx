import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

export function CreateSlide() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ['start end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 0.9], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -80]);
  // Outline reveals left → right as user scrolls into the slide
  const drawInset = useTransform(scrollYProgress, [0.2, 0.5], [100, 0]);
  const outlineClip = useMotionTemplate`inset(0 ${drawInset}% 0 0)`;
  // Fill fades in after the outline finishes drawing
  const fillOpacity = useTransform(scrollYProgress, [0.5, 0.62], [0, 1]);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="slide-create"
      className="relative w-full min-h-[75vh] overflow-hidden">
      <motion.div
        style={{ opacity, y }}
        className="relative w-full min-h-[75vh] flex items-center justify-center">
        <div className="relative w-full">
          {/* Layer 1: outline (silhouette) drawn left → right with scroll */}
          <motion.h2
            className="font-mozillaHeadline font-stretch-semi-expanded font-medium text-[17vw] md:text-[15.3vw] uppercase select-none leading-[0.75] tracking-tighter text-center w-full"
            style={{
              WebkitTextStrokeWidth: '1.5px',
              WebkitTextStrokeColor: '#ffffff',
              color: 'transparent',
              clipPath: outlineClip,
            }}>
            Create
          </motion.h2>

          {/* Layer 2: fill comes in after the outline */}
          <motion.h2
            aria-hidden
            className="absolute inset-0 font-mozillaHeadline font-stretch-semi-expanded font-medium text-[17vw] md:text-[15.3vw] uppercase select-none leading-[0.75] tracking-tighter text-center w-full text-white"
            style={{ opacity: fillOpacity }}>
            Create
          </motion.h2>
        </div>
      </motion.div>
    </section>);
}
