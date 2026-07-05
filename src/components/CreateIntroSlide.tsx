import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, type MotionValue } from 'framer-motion';

const photos = {
  mario: '/foro.jpg',                          // top-left
  ceoUN: '/dat.jpg',                           // top-right
  logrono: '/Libro-Suelo.jpg',                 // bottom-left
  ceoONU: '/iaf-aragon-branding-logo-1.jpg',   // bottom-right
  extra: '/4db9dc83-ce8e-4dfb-8e76-17809dfba7da_alta-libre-aspect-ratio_default_0_x800y355.jpg', // bottom-center
};

const bgs = {
  ebdh: '/mario-martinez-rioja-derechos-humanos-05.webp',
  unesco: '/mario-martinez-larioja-2.jpg',
  aiforgood: '/Sala Luces 02.png',
};

const outlineNumberStyle: React.CSSProperties = {
  WebkitTextStrokeWidth: '1.2px',
  WebkitTextStrokeColor: '#ffffff',
  color: 'transparent',
};

const outlineWordStyle: React.CSSProperties = {
  WebkitTextStrokeWidth: '1.2px',
  WebkitTextStrokeColor: '#ffffff',
  color: 'transparent',
};

function Caption({ label, kind = 'project' }: { label: string; kind?: 'project' | 'tag' }) {
  return (
    <div className="font-mozillaText font-normal text-[9.35px] md:text-[0.64rem] tracking-[0.18em] uppercase text-white/60 flex items-center gap-1.5">
      {kind === 'project' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/70" />}
      {label}
    </div>
  );
}

function Plus({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <line x1="50" y1="8" x2="50" y2="92" stroke="currentColor" strokeWidth="6" strokeLinecap="square" />
      <line x1="8" y1="50" x2="92" y2="50" stroke="currentColor" strokeWidth="6" strokeLinecap="square" />
    </svg>
  );
}

type Principle = {
  n: string;
  image: string;
  numSide: 'left' | 'right';
  textSide: 'left' | 'right';
  text: React.ReactNode;
};

const principles: Principle[] = [
  {
    n: '01',
    image: bgs.ebdh,
    numSide: 'left',
    textSide: 'right',
    text: (
      <>
        Creemos en el{' '}
        <span className="underline decoration-1 underline-offset-[4px]">enfoque basado en derechos humanos (EBDH)</span>{' '}
        como marco global de diseño, acción y evaluación para el desarrollo inteligente, integrador y sostenible.
      </>
    ),
  },
  {
    n: '02',
    image: bgs.unesco,
    numSide: 'right',
    textSide: 'left',
    text: (
      <>
        Manejamos los programas intergubernamentales de{' '}
        <span className="underline decoration-1 underline-offset-[4px]">UNESCO en comunicación</span>{' '}
        para garantizar la interculturalidad, integridad, participación e innovación necesarios.
      </>
    ),
  },
  {
    n: '03',
    image: bgs.aiforgood,
    numSide: 'left',
    textSide: 'right',
    text: (
      <>
        Integramos la metodología de{' '}
        <span className="underline decoration-1 underline-offset-[4px]">AI for Good</span>{' '}
        en los usos y desarrollos inteligentes.
      </>
    ),
  },
];

// Original content (big outline number + paragraph), revealed by the vertical
// curtain (clip-path opens bottom → up, covering the previous slide).
function PrincipleSlide({ data, clipTop, z }: { data: Principle; clipTop: MotionValue<number>; z: string }) {
  const clip = useMotionTemplate`inset(${clipTop}% 0 0 0)`;
  return (
    <motion.div style={{ clipPath: clip }} className={`absolute inset-0 ${z} overflow-hidden`}>
      <img src={data.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/55" />

      <div
        style={outlineNumberStyle}
        className={`absolute top-1/2 -translate-y-1/2 ${data.numSide === 'left' ? 'left-[6%]' : 'right-[6%]'} font-bagoss-standard font-light text-[8.5rem] md:text-[13.6rem] lg:text-[17rem] leading-[0.85] tracking-tighter`}>
        {data.n}
      </div>

      <div className={`absolute bottom-[14%] ${data.textSide === 'left' ? 'left-[6%]' : 'right-[6%]'} max-w-[440px] md:max-w-[520px] text-white`}>
        <p className="font-mozillaText font-light text-[0.85rem] md:text-[0.96rem] lg:text-[1.06rem] leading-[1.4] tracking-tight">
          {data.text}
        </p>
      </div>
    </motion.div>
  );
}

export function CreateIntroSlide() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ['start start', 'end end'],
  });
  // Approach progress: 0 → 1 as the section rises into view, BEFORE it pins.
  // Drives the photos' entrance so they're already on screen by the time
  // Stage 1 is in view (matching how the headline appears).
  const { scrollYProgress: enter } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ['start end', 'start start'],
  });

  // 5 stages spread evenly across the scroll; stage 1 starts immediately (no empty lead-in)
  const s1 = useTransform(scrollYProgress, [0, 0.18, 0.22], [1, 1, 0]);
  const s2 = useTransform(scrollYProgress, [0.18, 0.22, 0.38, 0.42], [0, 1, 1, 0]);
  // Principle slides 01/02/03 reveal as a vertical curtain (cover from bottom → up).
  const reveal01 = useTransform(scrollYProgress, [0.36, 0.48], [100, 0]);
  const reveal02 = useTransform(scrollYProgress, [0.56, 0.68], [100, 0]);
  const reveal03 = useTransform(scrollYProgress, [0.76, 0.88], [100, 0]);

  const s1Y = useTransform(scrollYProgress, [0.18, 0.22], [0, -40]);
  const s2Y = useTransform(scrollYProgress, [0.18, 0.22, 0.38, 0.42], [40, 0, 0, -40]);

  const plusRotate1 = useTransform(scrollYProgress, [0, 1], [0, 720]);

  // Photos in Stage 1: enter from below (rise + fade in) as the section starts,
  // then keep drifting upward (parallax) toward Stage 2.
  // Top photos rise FASTER than the bottom one in their column, so the gap
  // between them only grows — they can never overlap.
  // Entrance (driven by approach): fade in + rise from below as the section enters.
  const pFade = useTransform(enter, [0.15, 0.65], [0, 1]);
  const e1 = useTransform(enter, [0.15, 0.9], [190, 0]); // top-left
  const e2 = useTransform(enter, [0.15, 0.9], [150, 0]); // top-right
  const e3 = useTransform(enter, [0.15, 0.9], [210, 0]); // bottom-left
  const e4 = useTransform(enter, [0.15, 0.9], [160, 0]); // bottom-right
  const e5 = useTransform(enter, [0.15, 0.9], [175, 0]); // bottom-center
  // Parallax drift (driven by pinned scroll): keep rising toward Stage 2.
  // Top photos drift FASTER than the bottom one in their column → never overlap.
  const p1 = useTransform(scrollYProgress, [0, 0.22], [0, -460]);
  const p2 = useTransform(scrollYProgress, [0, 0.22], [0, -440]);
  const p3 = useTransform(scrollYProgress, [0, 0.22], [0, -300]);
  const p4 = useTransform(scrollYProgress, [0, 0.22], [0, -280]);
  const p5 = useTransform(scrollYProgress, [0, 0.22], [0, -290]);
  // Combined vertical offset = entrance + parallax.
  const y1 = useTransform([e1, p1], ([e, p]: number[]) => e + p);
  const y2 = useTransform([e2, p2], ([e, p]: number[]) => e + p);
  const y3 = useTransform([e3, p3], ([e, p]: number[]) => e + p);
  const y4 = useTransform([e4, p4], ([e, p]: number[]) => e + p);
  const y5 = useTransform([e5, p5], ([e, p]: number[]) => e + p);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="slide-create-intro"
      data-transparent-header
      className="relative w-full bg-[#222D33]"
      style={{ height: '180vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* STAGE 1 — Tagline with rising photos */}
        <motion.div style={{ opacity: s1, y: s1Y }} className="absolute inset-0 z-10">
          <motion.img
            src={photos.mario}
            alt=""
            style={{ y: y1, opacity: pFade }}
            className="absolute top-[1%] left-[6%] h-[28vh] md:h-[34vh] w-auto rounded-md" />
          <motion.img
            src={photos.ceoUN}
            alt=""
            style={{ y: y2, opacity: pFade }}
            className="absolute top-[1%] right-[6%] h-[26vh] md:h-[30vh] w-auto rounded-md" />
          <motion.img
            src={photos.logrono}
            alt=""
            style={{ y: y3, opacity: pFade }}
            className="absolute bottom-[7%] left-[6%] h-[26vh] md:h-[30vh] w-auto rounded-md" />
          <motion.img
            src={photos.ceoONU}
            alt=""
            style={{ y: y4, opacity: pFade }}
            className="absolute bottom-[7%] right-[6%] h-[28vh] md:h-[34vh] w-auto rounded-md" />
          <motion.img
            src={photos.extra}
            alt=""
            style={{ y: y5, x: '-50%', opacity: pFade }}
            className="absolute bottom-[7%] left-1/2 h-[24vh] md:h-[28vh] w-auto rounded-md" />

          <motion.div style={{ rotate: plusRotate1 }} className="absolute top-[8%] left-1/2 w-10 h-10 text-white/70">
            <Plus className="w-full h-full" />
          </motion.div>
          <span className="absolute top-[22%] left-[44%] w-2 h-2 rounded-full bg-white/60" />

          <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mozillaHeadline font-stretch-semi-expanded font-normal text-[2.13rem] md:text-[3.83rem] lg:text-[5.1rem] leading-[1.02] tracking-tight text-white text-center max-w-[640px] md:max-w-[760px]">
            Solo es{' '}
            <span
              style={outlineWordStyle}
              className="underline decoration-1 underline-offset-[6px] md:underline-offset-[10px]">
              disruptivo
            </span>{' '}si crecemos{' '}
            <span
              style={outlineWordStyle}
              className="underline decoration-1 underline-offset-[6px] md:underline-offset-[10px]">
              todos
            </span>.
          </h2>
        </motion.div>

        {/* STAGE 2 — Editorial body (text only) */}
        <motion.div style={{ opacity: s2, y: s2Y }} className="absolute inset-0 z-10">
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mozillaText font-light text-[1.28rem] md:text-[1.91rem] lg:text-[2.34rem] leading-[1.2] tracking-tight text-white text-center max-w-[680px] md:max-w-[820px]">
            Creamos, impulsamos y gestionamos{' '}
            <span className="underline decoration-1 underline-offset-[4px]">
              iniciativas propias
            </span>{' '}que generan negocio, conexiones y futuro sin comprometer las vidas, el planeta y la sostenibilidad de la economía.
          </p>
        </motion.div>

        {/* SLIDES 01 / 02 / 03 — vertical curtain reveal, Floema-style */}
        <PrincipleSlide data={principles[0]} clipTop={reveal01} z="z-20" />
        <PrincipleSlide data={principles[1]} clipTop={reveal02} z="z-30" />
        <PrincipleSlide data={principles[2]} clipTop={reveal03} z="z-40" />

      </div>
    </section>
  );
}
