import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { asset } from '../utils/asset';

type Logo = { name: string; file: string };

const logos: Logo[] = [
  { name: 'El Corte Inglés', file: 'el-corte-ingles' },
  { name: 'Quirónsalud', file: 'quironsalud' },
  { name: 'Telefónica', file: 'telefonica' },
  { name: 'Naturgy', file: 'naturgy' },
  { name: 'CaixaBank', file: 'caixabank' },
  { name: 'Universidad de La Rioja', file: 'universidad-la-rioja' },
  { name: 'University of Westminster', file: 'university-westminster' },
  { name: 'Madrid', file: 'madrid' },
  { name: 'Cinfa', file: 'cinfa' },
  { name: 'UNIDO', file: 'unido' },
  { name: 'Santander', file: 'santander' },
  { name: 'Mapfre', file: 'mapfre' },
  { name: 'Barcelona', file: 'barcelona' },
  { name: 'UNESCO', file: 'unesco' },
  { name: 'AWS', file: 'aws' },
  { name: 'Julius Bär', file: 'julius-baer' },
  { name: 'PostFinance', file: 'postfinance' },
  { name: 'Comunidad de Madrid', file: 'comunidad-madrid' },
  { name: 'Generalitat de Catalunya', file: 'generalitat-catalunya' },
  { name: 'Gobierno de Aragón', file: 'gobierno-aragon' },
  { name: 'CEEI Aragón', file: 'ceei-aragon' },
  { name: 'Bilbao', file: 'bilbao' },
  { name: 'Universidad Complutense de Madrid', file: 'universidad-complutense' },
  { name: 'UIC Barcelona', file: 'uic-barcelona' },
  { name: 'Proeduca', file: 'proeduca' },
  { name: 'The Wave', file: 'the-wave' },
];

const CELLS = 10;
const SWAP_MS = 1600;
const STAGGER = 0.05;
const ENTER = 0.6;
const EASE = [0.22, 1, 0.36, 1] as const;

// Logos are drawn as a CSS mask so every SVG renders in plain white,
// whatever colours the source file uses.
function LogoMark({ logo }: { logo: Logo }) {
  const url = `url("${asset(`/logos/${logo.file}.svg`)}")`;
  return (
    <div
      role="img"
      aria-label={logo.name}
      className="w-full h-full bg-white"
      style={{
        WebkitMaskImage: url,
        maskImage: url,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }} />
  );
}

export function LogosSlide() {
  const [slots, setSlots] = useState(() => Array.from({ length: CELLS }, (_, i) => i % logos.length));
  const [inView, setInView] = useState(false);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // While visible, swap one random cell for a logo that isn't on screen.
  useEffect(() => {
    if (!inView) return;
    let interval: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        setSlots((prev) => {
          const shown = new Set(prev);
          const hidden = logos.map((_, i) => i).filter((i) => !shown.has(i));
          if (hidden.length === 0) return prev;
          const next = [...prev];
          next[Math.floor(Math.random() * CELLS)] = hidden[Math.floor(Math.random() * hidden.length)];
          return next;
        });
      }, SWAP_MS);
    }, (CELLS * STAGGER + ENTER) * 1000);
    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, [inView]);

  return (
    <section aria-label="Empresas con las que trabajamos" className="bg-[#45505B] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-px bg-white/10 rounded-lg overflow-hidden">
          {slots.map((logoIndex, cell) =>
            <div key={cell} className="bg-[#45505B] aspect-[5/3] relative overflow-hidden">
              <motion.div
                initial={false}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: ENTER, delay: inView ? cell * STAGGER : 0, ease: EASE }}
                className="absolute inset-4 md:inset-6">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={logoIndex}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 0.85, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ opacity: { duration: 0.9, ease: EASE }, scale: { duration: 1.1, ease: EASE } }}
                    className="absolute inset-0 flex items-center justify-center">
                    <LogoMark logo={logos[logoIndex]} />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
