import { useState } from 'react';

const contractForms = {
  conferencia: { label: 'Contratar conferencia', title: 'Proponer conferencia', subject: 'Propuesta de conferencia' },
  bizbox: { label: 'Contratar BizBox', title: 'Contratar BizBox', subject: 'Propuesta para BizBox' },
  podcast: { label: 'Contratar Podcast', title: 'Contratar Podcast', subject: 'Propuesta para Podcast' },
} as const;

type ContractKind = keyof typeof contractForms;

type Work = {
  id: string;
  image: string;
  downloads?: { low: string; high: string };
  bullets: React.ReactNode[];
};

const works: Work[] = [
  {
    id: '01',
    image: '/2311Mario_0017-Alta.jpg',
    downloads: { low: '/2311Mario_0017-Alta.jpg', high: '/2311Mario_0017-Alta_.jpg' },
    bullets: [
      <>Es <strong className="font-mozillatext-bold">consultor de branding</strong>, reputación y gestión de intangibles.</>,
      <>Está especializado en <strong className="font-mozillatext-bold">políticas no financieras</strong> y en el <strong className="font-mozillatext-bold">enfoque basado en derechos humanos</strong> (EBDH) en empresas.</>,
      <>Premio <strong className="font-mozillatext-bold">Napolitan Victory Award</strong> 2023 por la <strong className="font-mozillatext-bold">Washington Academy of Political Arts and Sciences</strong>.</>,
    ],
  },
  {
    id: '02',
    image: '/CEO Nueva York.png',
    bullets: [
      <>Fundó Propós en Barcelona, en 2019.</>,
      <>Ha trabajado en <strong className="font-mozillatext-bold">políticas de marca</strong> para administraciones públicas, como el Gobierno de España, el Gobierno de Aragón o Ayuntamiento de Madrid y con large y middle caps.</>,
      <>Propós fue reconocida en 2023 como una de las <strong className="font-mozillatext-bold">100 mejores consultoras del mundo,</strong> según el ranking Veredictas.</>,
    ],
  },
  {
    id: '03',
    image: '/mario-martinez-larioja-2.jpg',
    bullets: [
      <>Es <strong className="font-mozillatext-bold">Senior Advisor</strong> de la Cátedra UNESCO.</>,
      <>Fue director del <strong className="font-mozillatext-bold">Gabinete de Presidencia,</strong> Relaciones Institucionales y Acción Exterior del Gobierno de La Rioja.</>,
      <>Allí <strong className="font-mozillatext-bold">lideró las políticas</strong> de <strong className="font-mozillatext-bold">marca</strong>, comunicación corporativa, dirección creativa, <strong className="font-mozillatext-bold">publicidad</strong> institucional y <strong className="font-mozillatext-bold">derechos humanos</strong>.</>,
      <>Fue <strong className="font-mozillatext-bold">Chief Corporate Officer (director de comunicación) de la Cátedra UNESCO</strong>, entre 2013 y 2015.</>,
    ],
  },
  {
    id: '04',
    image: '/CEO ONU Empresas.jpg',
    bullets: [
      <>Fue personal investigador en la <strong className="font-mozillatext-bold">Universidad de La Rioja y la Cátedra UNESCO,</strong> en materia de comunicación y derechos humanos, investigando los sistemas mediáticos de la <strong className="font-mozillatext-bold">región del Magreb</strong>.</>,
      <>Ha desarrollado <strong className="font-mozillatext-bold">estancias profesionales</strong> en Reino Unido, Italia, Argelia, Túnez y Marruecos.</>,
      <>Ha sido miembro del <strong className="font-mozillatext-bold">Consejo de Gobierno</strong> de la Universidad de La Rioja.</>,
      <>Ha recibido diferentes <strong className="font-mozillatext-bold">premios internacionales</strong> de comunicación.</>,
      <>La <strong className="font-mozillatext-bold">Comisión Europea</strong> lo reconoció, en el proyecto Abdem, por la excelencia comunicativa en proyectos europeos.</>,
    ],
  },
  {
    id: '05',
    image: '/mario-martinez-2026.jpg',
    bullets: [
      <>En 2023, su <strong className="font-mozillatext-bold">sociedad adquirió Dirigentes</strong>, la revista económica más antigua en español (1986).</>,
      <>Tras una redefinición estratégica, la revista pasó a llamarse <strong className="font-mozillatext-bold">The Officer.</strong></>,
      <>The Officer es hoy el <strong className="font-mozillatext-bold">nativo digital independiente más leído</strong> en su segmento.</>,
      <>Actualmente es su <strong className="font-mozillatext-bold">editor y director ejecutivo.</strong></>,
    ],
  },
];

export function MarioBrandSlide() {
  const [activeForm, setActiveForm] = useState<ContractKind | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const closeForm = () => {
    setActiveForm(null);
    setFormStatus('idle');
  };
  return (
    <section
      id="slide-mario-brand"
      data-light-bg
      data-bg="#FEFCEE"
      className="relative w-full text-[#222D33]">
      <div className="grid grid-cols-1 md:grid-cols-2 relative">
        {/* LEFT — Scrolling list of works */}
        <div className="md:col-span-1 px-4 md:px-10 lg:px-16 pt-32 pb-24 flex flex-col gap-24 md:gap-32">
          {works.map((w) =>
            <article key={w.id} className="flex flex-col gap-5">
              <img
                src={w.image}
                alt=""
                className="w-full aspect-[16/10] object-cover rounded-md" />
              {w.downloads &&
                <div className="flex justify-end items-center gap-2 -mt-3 font-mozillaText font-normal text-[0.74rem] tracking-tight text-[#222D33]/70">
                  <span aria-hidden>↓</span>
                  <a href={w.downloads.low} download className="hover:text-[#222D33] transition-colors">
                    LOW
                  </a>
                  <span>|</span>
                  <a href={w.downloads.high} download className="hover:text-[#222D33] transition-colors">
                    HIGH
                  </a>
                </div>}
              <ul className="flex flex-col gap-3 max-w-[560px]">
                {w.bullets.map((bullet, i) =>
                  <li
                    key={i}
                    className="flex items-start gap-2.5 font-mozillaText font-light text-[0.85rem] md:text-[0.96rem] lg:text-[1.06rem] leading-[1.5] text-[#222D33]/85">
                    <span aria-hidden className="shrink-0 mt-[0.2em]">•</span>
                    <span>{bullet}</span>
                  </li>
                )}
              </ul>
            </article>
          )}
        </div>

        {/* RIGHT — Sticky Mario Brand identity */}
        <div className="md:col-span-1">
          <div className="md:sticky md:top-0 md:h-screen flex flex-col justify-between gap-12 p-8 md:p-12 lg:p-16">
            <div className="hidden md:block" />
            <div className="flex flex-col items-center gap-10 md:gap-12">
              <div className="flex flex-col items-center gap-3">
                <h2 className="font-mozillaHeadline font-stretch-semi-expanded font-light text-[2.98rem] lg:text-[4.25rem] xl:text-[5.53rem] leading-[0.95] tracking-tight text-center text-[#222D33]">
                  Mario<br />Martínez
                </h2>
                <p className="mt-[12px] font-mozillaText font-normal text-[0.85rem] md:text-[0.96rem] leading-[1.5] text-center max-w-[420px] text-[#222D33]/85">
                  Emprendedor español. Chairman en Mbrand y editor de The Officer. Es consultor de branding y reputación, especializado en empresa y derechos humanos.
                </p>
                <p className="font-mozillaText font-normal text-[0.74rem] md:text-[0.85rem] leading-[1.5] text-center max-w-[420px] text-[#222D33]/70">
                  Premio Napolitan Victory Award 2023 por la Washington Academy of Political Arts and Sciences.
                </p>
              </div>
              <div className="flex flex-row items-center justify-center gap-3 md:gap-4">
                <div className="group relative">
                  <a
                    href="mailto:head@mbrand.es"
                    aria-label="Contactar"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#222D33]/70 text-[#222D33] hover:bg-[#222D33] hover:text-[#FEFCEE] transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                      <rect x="2.5" y="5" width="19" height="14" rx="2" />
                      <polyline points="3,7 12,13 21,7" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-bagoss-standard font-light text-[0.74rem] tracking-tight text-[#222D33]">
                    Contactar
                  </span>
                </div>

                <div className="group relative">
                  <a
                    href="https://www.linkedin.com/in/marioemartinez"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#222D33]/70 text-[#222D33] hover:bg-[#222D33] hover:text-[#FEFCEE] transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-bagoss-standard font-light text-[0.74rem] tracking-tight text-[#222D33]">
                    LinkedIn
                  </span>
                </div>

                <div className="group relative">
                  <a
                    href="https://www.instagram.com/mariomartinezm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#222D33]/70 text-[#222D33] hover:bg-[#222D33] hover:text-[#FEFCEE] transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-bagoss-standard font-light text-[0.74rem] tracking-tight text-[#222D33]">
                    Instagram
                  </span>
                </div>
              </div>

              <div className="flex flex-row flex-wrap items-center justify-center gap-3">
                {(Object.keys(contractForms) as ContractKind[]).map((kind) =>
                  <button
                    key={kind}
                    type="button"
                    onClick={() => setActiveForm(kind)}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#222D33]/70 font-mozillaText font-normal text-[0.85rem] tracking-tight text-[#222D33] hover:bg-[#222D33] hover:text-[#FEFCEE] transition-colors">
                    {contractForms[kind].label}
                  </button>
                )}
              </div>
            </div>

            <div className="hidden md:block" />

          </div>
        </div>

      </div>

      <iframe
        name="formsubmit-target"
        title="Envío de formulario"
        style={{ display: 'none' }}
        onLoad={() => {
          setFormStatus((s) => (s === 'sending' ? 'success' : s));
        }} />

      {activeForm &&
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#222D33]/60 px-4">
          <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-[#FEFCEE] rounded-md p-8 md:p-10">
            <button
              type="button"
              aria-label="Cerrar"
              onClick={closeForm}
              className="absolute top-4 right-4 w-8 h-8 inline-flex items-center justify-center rounded-full hover:bg-[#222D33]/10 transition-colors text-[#222D33]">
              ✕
            </button>

            {formStatus === 'success' ?
              <div className="flex flex-col items-center text-center gap-4 py-6">
                <svg viewBox="0 0 52 52" className="w-16 h-16">
                  <circle cx="26" cy="26" r="24" fill="none" stroke="#222D33" strokeWidth="2" className="tick-circle" />
                  <path d="M14 27l8 8 16-16" fill="none" stroke="#222D33" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="tick-check" />
                </svg>
                <h3 className="font-mozillaHeadline font-medium text-2xl tracking-tight text-[#222D33]">
                  ¡Enviado con éxito!
                </h3>
                <p className="font-mozillaText font-normal text-[0.85rem] leading-[1.5] text-[#222D33]/70">
                  Estudiaremos tu propuesta lo antes posible y te daremos una respuesta en el email indicado.
                </p>
              </div>
              :
              <>
                <h3 className="font-mozillaHeadline font-medium text-2xl tracking-tight text-[#222D33] mb-3">
                  {contractForms[activeForm].title}
                </h3>
                <p className="font-mozillaText font-normal text-[0.85rem] leading-[1.5] text-[#222D33]/70 mb-6">
                  Estudiaremos tu propuesta lo antes posible y te daremos una respuesta en el email indicado.
                </p>
                <form
                  action="https://formsubmit.co/head@mbrand.es"
                  method="POST"
                  target="formsubmit-target"
                  onSubmit={(e) => {
                    setFormStatus('sending');
                    const form = e.currentTarget;
                    const subjectInput = form.elements.namedItem('_subject') as HTMLInputElement;
                    subjectInput.value = `${contractForms[activeForm].subject}: ${(form.elements.namedItem('titulo') as HTMLInputElement).value}`;
                  }}
                  className="flex flex-col gap-4">
                  <input type="hidden" name="_subject" />
                  <input type="hidden" name="_captcha" value="false" />
                  <label className="flex flex-col gap-1.5 font-mozillaText font-normal text-[0.85rem] text-[#222D33]">
                    Nombre
                    <input
                      type="text"
                      name="nombre"
                      required
                      className="px-3 py-2 rounded border border-[#222D33]/30 bg-transparent font-mozillaText text-[0.9rem] text-[#222D33] focus:outline-none focus:border-[#222D33]" />
                  </label>
                  <label className="flex flex-col gap-1.5 font-mozillaText font-normal text-[0.85rem] text-[#222D33]">
                    Apellidos
                    <input
                      type="text"
                      name="apellidos"
                      required
                      className="px-3 py-2 rounded border border-[#222D33]/30 bg-transparent font-mozillaText text-[0.9rem] text-[#222D33] focus:outline-none focus:border-[#222D33]" />
                  </label>
                  <label className="flex flex-col gap-1.5 font-mozillaText font-normal text-[0.85rem] text-[#222D33]">
                    Email
                    <input
                      type="email"
                      name="email"
                      required
                      className="px-3 py-2 rounded border border-[#222D33]/30 bg-transparent font-mozillaText text-[0.9rem] text-[#222D33] focus:outline-none focus:border-[#222D33]" />
                  </label>
                  <label className="flex flex-col gap-1.5 font-mozillaText font-normal text-[0.85rem] text-[#222D33]">
                    Teléfono
                    <input
                      type="tel"
                      name="telefono"
                      required
                      className="px-3 py-2 rounded border border-[#222D33]/30 bg-transparent font-mozillaText text-[0.9rem] text-[#222D33] focus:outline-none focus:border-[#222D33]" />
                  </label>
                  <label className="flex flex-col gap-1.5 font-mozillaText font-normal text-[0.85rem] text-[#222D33]">
                    Título de la propuesta
                    <input
                      type="text"
                      name="titulo"
                      required
                      className="px-3 py-2 rounded border border-[#222D33]/30 bg-transparent font-mozillaText text-[0.9rem] text-[#222D33] focus:outline-none focus:border-[#222D33]" />
                  </label>
                  <label className="flex flex-col gap-1.5 font-mozillaText font-normal text-[0.85rem] text-[#222D33]">
                    Describe la propuesta
                    <textarea
                      name="descripcion"
                      required
                      rows={4}
                      className="px-3 py-2 rounded border border-[#222D33]/30 bg-transparent font-mozillaText text-[0.9rem] text-[#222D33] focus:outline-none focus:border-[#222D33] resize-none" />
                  </label>
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#222D33]/70 font-mozillaText font-normal text-[0.85rem] tracking-tight text-[#222D33] hover:bg-[#222D33] hover:text-[#FEFCEE] transition-colors disabled:opacity-50 disabled:pointer-events-none">
                    {formStatus === 'sending' ? 'Enviando...' : 'Enviar'}
                  </button>
                </form>
              </>}
          </div>
        </div>}
    </section>
  );
}
