import { motion } from 'framer-motion';

type Props = {
  src: string;
  alt?: string;
  className?: string;
  delay?: number;
  floatDelay?: number;
  floatDistance?: number;
  floatDuration?: number;
};

export function FloatImg({
  src,
  alt = '',
  className,
  delay = 0,
  floatDelay = 0,
  floatDistance = 12,
  floatDuration = 4.5,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}>
      <motion.img
        src={src}
        alt={alt}
        className={className}
        animate={{ y: [0, -floatDistance, 0] }}
        transition={{
          duration: floatDuration,
          delay: floatDelay,
          repeat: Infinity,
          ease: 'easeInOut',
        }} />
    </motion.div>);
}
