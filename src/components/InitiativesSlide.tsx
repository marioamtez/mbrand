import { Slide } from './Slide';
import { RiseIn } from './Reveal';

export type Initiative = {
  id: string;
  name: string;
  description: React.ReactNode;
  image: string;
};

export const initiatives: Initiative[] = [
  {
    id: 'propos',
    name: 'Propós',
    image: 'https://picsum.photos/seed/propos/800/1000',
    description: (
      <>
        Fundada en 2019, Propós es una{' '}
        <span className="underline decoration-1 underline-offset-[4px]">
          consultora de branding, desarrollo corporativo y thought leadership
        </span>. Trabaja con marcas y líderes en la creación, activación y gestión de marcas. En 2023 fue incluida entre las{' '}
        <span className="underline decoration-1 underline-offset-[4px]">
          100 mejores del mundo
        </span>{' '}
        por el ranking internacional Veredictas.
        <br /><br />
        Ha sido galardonada con diversos premios internacionales, como el{' '}
        <span className="underline decoration-1 underline-offset-[4px]">
          Napolitan Victory Award
        </span>. Está reconocida ante la{' '}
        <span className="underline decoration-1 underline-offset-[4px]">
          ONU y la Comisión Europea
        </span>{' '}
        por la excelencia de sus proyectos.
      </>
    ),
  },
  {
    id: 'the-officer',
    name: 'The Officer',
    image: '/the-offic4r.jpg',
    description: (
      <>
        La{' '}
        <span className="underline decoration-1 underline-offset-[4px]">
          última apuesta de Mbrand
        </span>: reconvertir Dirigentes, un medio en declive, en la próxima referencia del mundo corporate.{' '}
        <span className="underline decoration-1 underline-offset-[4px]">
          Innovación, inteligencia, modernidad y sociabilidad
        </span>{' '}
        son las palancas de transformación de The Officer.
      </>
    ),
  },
];

export function InitiativesSlide() {
  return (
    <Slide id="slide-3" className="bg-[#222D33]">
      <div className="relative w-full px-4 md:px-16 pt-20 md:pt-24 pb-10 md:pb-12 flex flex-col items-center text-white max-w-[1500px] mx-auto gap-12 md:gap-16">
        <RiseIn
          as="p"
          className="font-mozillaText font-normal text-[1.7rem] md:text-[2.76rem] lg:text-[3.83rem] leading-[1.05] tracking-tight text-center max-w-[1300px]">
          Estamos involucrados en el crecimiento de las{' '}
          <span className="underline decoration-1 underline-offset-[6px] md:underline-offset-[10px]">
            dos grandes iniciativas
          </span>{' '}
          que pusimos en marcha desde MBrand.
        </RiseIn>

      </div>
    </Slide>);
}
