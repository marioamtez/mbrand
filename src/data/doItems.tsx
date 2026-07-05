export type DoItem = {
  id: string;
  name: string;
  description: React.ReactNode;
  image: string;
  href?: string;
};

export const doItems: DoItem[] = [
  {
    id: 'bizbox',
    name: 'BizBox',
    image: '/Captura de pantalla 2026-05-31 a las 22.23.59.png',
    href: '#',
    description: (
      <>
        Si llegamos tarde, lo hacemos para{' '}
        <span className="underline decoration-1 underline-offset-[4px]">
          hackear
        </span>. Hay miles de personas produciendo podcast, ¿por qué ibas a elegirnos? Recorremos la trayectoria de líderes, en{' '}
        <span className="underline decoration-1 underline-offset-[4px]">
          álbumes y pistas
        </span>, de forma ordenada, como si fuera un vinilo. Y ha acabado siendo justo eso.
      </>
    ),
  },
  {
    id: 'the-good',
    name: 'The Good Initiative',
    image: '/Sala Luces 02.png',
    href: '#',
    description: (
      <>
        Un evento para generar{' '}
        <span className="underline decoration-1 underline-offset-[4px]">
          conversación y debate público
        </span>{' '}en torno a los usos de la IA. Premios, conversaciones por distintas ciudades del país y un evento de cierre para reivindicar una{' '}
        <span className="underline decoration-1 underline-offset-[4px]">
          inteligencia con propósito, responsable y para el desarrollo
        </span>.
      </>
    ),
  },
  {
    id: 'undersummit',
    name: 'Undersummit',
    image: '/hf_20260522_051919_1e0c5ee8-d683-41ba-a86b-37da5ca6ece1.png',
    href: '#',
    description: (
      <>
        Dos días de{' '}
        <span className="underline decoration-1 underline-offset-[4px]">
          inmersión en innovación y disrupción tecnológica
        </span>. Un congreso de{' '}
        <span className="underline decoration-1 underline-offset-[4px]">
          4.000 corporates
        </span>, con conversaciones interesantes y un networking de calidad alrededor del vino. La{' '}
        <span className="underline decoration-1 underline-offset-[4px]">
          narrativa del subsuelo
        </span>: las tendencias emergentes que afloran. La innovación como un trayecto.
      </>
    ),
  },
];
