import { asset } from '../utils/asset';

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
    image: asset('/Captura de pantalla 2026-05-31 a las 22.23.59.png'),
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
    id: 'tickiz',
    name: 'Tickiz',
    image: asset('/tickiz.webp'),
    href: '#',
    description: (
      <>
        La primera plataforma para la{' '}
        <span className="underline decoration-1 underline-offset-[4px]">
          gestión de accesos y ticketing
        </span>{' '}pensada para que cualquier organizador la use sin fricción. Nada de integraciones eternas ni curvas de aprendizaje: es{' '}
        <span className="underline decoration-1 underline-offset-[4px]">
          plug and play
        </span>, lista para funcionar desde el primer minuto. Control de accesos, venta de entradas y datos del evento, todo en un solo lugar, tan{' '}
        <span className="underline decoration-1 underline-offset-[4px]">
          fácil de usar
        </span>{' '}que se convierte en una extensión natural de cualquier equipo.
      </>
    ),
  },
  {
    id: 'undersummit',
    name: 'Undersummit',
    image: asset('/hf_20260522_051919_1e0c5ee8-d683-41ba-a86b-37da5ca6ece1.png'),
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
