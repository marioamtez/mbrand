import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, type MotionValue, type Variants } from 'framer-motion';
type CommonProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** If true, animate on mount instead of on scroll-into-view. */
  immediate?: boolean;
  as?: keyof JSX.IntrinsicElements;
  duration?: number;
  /** Delay between successive lines (seconds). */
  lineStagger?: number;
};
const fadeVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8
  },
  visible: {
    opacity: 1,
    y: 0
  }
};
type LineRect = {
  top: number;
  bottom: number;
};
/**
 * Headline reveal — text grows upward from its baseline like a plant,
 * per visual line of the headline. Uses runtime measurement to detect
 * line breaks (handles both <br> tags and natural word wrap).
 */
export function RiseIn({
  children,
  delay = 0,
  className,
  immediate = false,
  as: Tag = 'div',
  duration = 0.55,
  lineStagger = 0.08
}: CommonProps) {
  const wrapRef = useRef<HTMLElement | null>(null);
  const measureRef = useRef<HTMLSpanElement | null>(null);
  const [lines, setLines] = useState<LineRect[]>([]);
  const [containerHeight, setContainerHeight] = useState(0);
  const [measured, setMeasured] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(immediate);
  // Measure line positions after layout (and on resize)
  useLayoutEffect(() => {
    const node = measureRef.current;
    if (!node) return;
    const measure = () => {
      const range = document.createRange();
      range.selectNodeContents(node);
      const rects = Array.from(range.getClientRects());
      const nodeRect = node.getBoundingClientRect();
      // Group rects into visual lines, bucketing by top position
      const lineGroups = new Map<number, LineRect>();
      rects.forEach((r) => {
        if (r.height === 0 || r.width === 0) return;
        const top = r.top - nodeRect.top;
        const bottom = r.bottom - nodeRect.top;
        // Bucket rects whose tops are within 4px of each other
        const key = Math.round(top / 4) * 4;
        const existing = lineGroups.get(key);
        if (existing) {
          lineGroups.set(key, {
            top: Math.min(existing.top, top),
            bottom: Math.max(existing.bottom, bottom)
          });
        } else {
          lineGroups.set(key, {
            top,
            bottom
          });
        }
      });
      const sorted = Array.from(lineGroups.values()).sort(
        (a, b) => a.top - b.top
      );
      setLines(sorted);
      setContainerHeight(node.offsetHeight);
      setMeasured(true);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(node);
    return () => ro.disconnect();
  }, []);
  // Trigger play when in view (unless immediate)
  useEffect(() => {
    if (immediate) {
      setShouldPlay(true);
      return;
    }
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldPlay(true);
            io.disconnect();
          }
        });
      },
      {
        rootMargin: '-80px 0px -80px 0px'
      }
    );
    io.observe(el as Element);
    return () => io.disconnect();
  }, [immediate]);
  const TagAny = Tag as any;
  return (
    <TagAny
      ref={wrapRef as any}
      className={className}
      style={{
        position: 'relative'
      }}>
      
      {/* Invisible measurement copy — preserves layout and keeps content accessible. */}
      <span
        ref={measureRef}
        style={{
          display: 'block',
          opacity: 0
        }}>
        
        {children}
      </span>

      {/* Animated per-line copies, stacked over the measurement node */}
      {measured && lines.length > 0 &&
      <>
          {lines.map((line, i) => {
          const bottomInset = Math.max(0, containerHeight - line.bottom);
          const collapsed = `inset(${line.bottom}px 0 ${bottomInset}px 0)`;
          const open = `inset(${line.top}px 0 ${bottomInset}px 0)`;
          return (
            <motion.span
              key={i}
              aria-hidden
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                display: 'block',
                pointerEvents: 'none',
                willChange: 'clip-path'
              }}
              initial={{
                clipPath: collapsed
              }}
              animate={{
                clipPath: shouldPlay ? open : collapsed
              }}
              transition={{
                duration,
                delay: delay + i * lineStagger,
                ease: [0.65, 0, 0.35, 1]
              }}>
              
                {children}
              </motion.span>);

        })}
        </>
      }
    </TagAny>);

}
/**
 * Per-word scroll-driven illumination. Words start dim and brighten as the
 * element scrolls through the viewport. Walks children recursively so nested
 * elements (spans, sup, img, svg, br) are preserved — only string nodes get
 * split into animated word spans.
 */
function Word({
  progress,
  range,
  children
}: {
  progress: MotionValue<number>;
  range: [number, number];
  children: React.ReactNode;
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity, display: 'inline' }}>{children}</motion.span>);

}
type ScrollLitProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};
export function ScrollLit({
  children,
  className,
  as: Tag = 'div'
}: ScrollLitProps) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ['start 0.85', 'end 0.35']
  });
  const countWords = (node: React.ReactNode): number => {
    if (typeof node === 'string') {
      return node.split(/\s+/).filter(Boolean).length;
    }
    if (Array.isArray(node)) {
      return node.reduce<number>((sum, n) => sum + countWords(n), 0);
    }
    if (React.isValidElement(node)) {
      return countWords((node.props as any).children);
    }
    return 0;
  };
  const total = Math.max(1, countWords(children));
  let idx = 0;
  const transform = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === 'string') {
      const parts = node.split(/(\s+)/);
      return parts.map((part, i) => {
        if (!part) return null;
        if (!part.trim()) return <React.Fragment key={`s-${i}`}>{part}</React.Fragment>;
        const myIdx = idx++;
        const start = myIdx / total;
        const end = Math.min(1, (myIdx + 1.5) / total);
        return (
          <Word
            key={`w-${myIdx}`}
            progress={scrollYProgress}
            range={[start, end]}>

            {part}
          </Word>);

      });
    }
    if (Array.isArray(node)) {
      return node.map((n, i) =>
      <React.Fragment key={`a-${i}`}>{transform(n)}</React.Fragment>
      );
    }
    if (React.isValidElement(node)) {
      return React.cloneElement(
        node,
        { key: (node as any).key },
        transform((node.props as any).children)
      );
    }
    return node;
  };
  const TagAny = Tag as any;
  return (
    <TagAny ref={ref as any} className={className}>
      {transform(children)}
    </TagAny>);

}
/**
 * Body / paragraph fade-in.
 */
export function FadeIn({
  children,
  delay = 0,
  className,
  immediate = false,
  as: Tag = 'div'
}: CommonProps) {
  const MotionTag = motion(Tag as any);
  return (
    <MotionTag
      className={className}
      variants={fadeVariants}
      initial="hidden"
      {...immediate ?
      {
        animate: 'visible'
      } :
      {
        whileInView: 'visible',
        viewport: {
          once: true,
          margin: '-60px'
        }
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}>
      
      {children}
    </MotionTag>);

}