import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { DoItem } from '../data/doItems';

type Props = { items: DoItem[] };

export function DoItemsSlider({ items }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLDivElement>,
    offset: ['start start', 'end end'],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0vw', `-${(items.length - 1) * 100}vw`]
  );

  return (
    <section
      ref={ref}
      data-light-bg
      className="relative text-black"
      style={{ height: `${items.length * 80}vh` }}>
      <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">
        <motion.div style={{ x }} className="flex h-full w-max">
          {items.map((item) =>
            <article
              key={item.id}
              className="w-screen h-full flex-shrink-0 pl-16 md:pl-32 pr-8 md:pr-16 pt-28 md:pt-36 pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-10 md:gap-20">
              <Link to={item.href ?? '#'} className="block group">
                <motion.img
                  src={item.image}
                  alt=""
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-[260px] md:w-[340px] lg:w-[420px] aspect-[3/4] object-cover rounded-md group-hover:opacity-90 transition-opacity" />
              </Link>
              <div className="flex flex-col gap-6 max-w-[700px]">
                <h2 className="font-mozillaHeadline font-light text-[1.59rem] md:text-[2.55rem] lg:text-[3.19rem] leading-[0.95] tracking-tight">
                  {item.name}
                </h2>
                <p className="font-mozillaText font-light text-[1.7rem] leading-[2.4rem] tracking-tight">
                  {item.description}
                </p>
                {item.href && (
                  <Link
                    to={item.href}
                    className="inline-flex items-center gap-2 font-bagoss-condensed font-normal text-[0.74rem] tracking-[0.2em] uppercase text-black/80 hover:text-black transition-colors">
                    Saber más
                    <span className="text-[0.85rem]">→</span>
                  </Link>
                )}
              </div>
            </article>
          )}
        </motion.div>
      </div>
    </section>
  );
}
