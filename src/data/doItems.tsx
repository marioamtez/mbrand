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
    image: asset('/bizbox.webp'),
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
    image: asset('/undersummit.webp'),
    href: 'https://undersummit.es',
    description: (
      <>
        El evento de management y dirección más influyente de Europa. Un congreso de dos días que reúne anualmente a 1.000 CEOs para ganar criterio y conocimientos.
      </>
    ),
  },
];
