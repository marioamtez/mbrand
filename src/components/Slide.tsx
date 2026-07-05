import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type SlideProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function Slide({ id, children, className = '' }: SlideProps) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ['start end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.55, 0.9], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -80]);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id={id}
      className={`relative w-full ${className}`}>
      <motion.div style={{ opacity, y }} className="relative w-full">
        {children}
      </motion.div>
    </section>
  );
}
