import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { NewsItem } from '../data/news';

type Props = {
  title?: string;
  items: NewsItem[];
};

export function NewsSlider({ title = 'Noticias', items }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLDivElement>,
    offset: ['start start', 'end end'],
  });

  // Translate the card row horizontally based on item count.
  // Approx: items.length × card width (22vw) + gaps − viewport.
  const scrollDistance = Math.max(0, items.length * 22 + (items.length - 1) * 2.5 + 12 - 100);
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', `-${scrollDistance}vw`]);

  return (
    <section
      ref={ref}
      className="relative w-full"
      style={{ height: `${Math.max(200, items.length * 55)}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        {/* Title */}
        <div className="px-4 md:px-16 pt-32 pb-10 flex items-end justify-between gap-6">
          <h2 className="font-mozillaHeadline font-stretch-semi-expanded font-light text-[2.55rem] md:text-[4.25rem] lg:text-[5.53rem] leading-none tracking-tight text-white">
            {title}
          </h2>
          <a
            href="https://theofficer.es/canal/mbrand/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mozillaText font-normal text-[0.85rem] md:text-[1rem] text-white/70 hover:text-white transition-colors whitespace-nowrap">
            Ir a sala de prensa →
          </a>
        </div>

        {/* Horizontal cards row */}
        <motion.div
          style={{ x }}
          className="flex gap-6 md:gap-10 px-4 md:px-16 items-start flex-1 pb-12">
          {items.map((item) =>
            <article
              key={item.id}
              className="flex-shrink-0 w-[55vw] md:w-[26vw] lg:w-[22vw] flex flex-col gap-4">
              <a href={item.href ?? '#'} target="_blank" rel="noopener noreferrer" className="block group">
                <img
                  src={item.image}
                  alt=""
                  className="w-full aspect-square object-cover rounded-md group-hover:opacity-90 transition-opacity" />
              </a>
              <a
                href={item.href ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mozillaText font-normal text-[1.06rem] md:text-[1.275rem] lg:text-[1.57rem] leading-[1.15] tracking-tight text-white hover:opacity-80 transition-opacity">
                {item.headline}
              </a>
              <div className="flex items-center gap-3 font-mozillaText font-normal text-[0.64rem] md:text-[0.74rem] tracking-[0.25em] uppercase text-white/60">
                <span className="text-white/50">{item.date}</span>
                <span className="text-white/30">|</span>
                <span>{item.category}</span>
              </div>
            </article>
          )}
        </motion.div>
      </div>
    </section>
  );
}
