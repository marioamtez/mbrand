import { asset } from '../utils/asset';

export type DoItem = {
  id: string;
  name: string;
  description: React.ReactNode;
  image: string;
  /** CSS object-position for the portrait crop of landscape photos. */
  imagePosition?: string;
  href?: string;
};

export const doItems: DoItem[] = [
  {
    id: 'bizbox',
    name: 'BizBox',
    image: asset('/bizbox.webp'),
    imagePosition: '100% center',
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
  {
    id: 'the-officer-connect',
    name: 'The Officer Connect',
    image: asset('/officer-connect.webp'),
    href: '#',
    description: (
      <>
        La verdad en el foco de la desinformación. Los MCP combaten la desinformación en el principal foco,{' '}
        <span className="underline decoration-1 underline-offset-[4px]">
          los LLM
        </span>. Ahora, conectas nuestros plugins y recibes información y productos informativos desde nuestra base de datos. Todas las respuestas,{' '}
        <span className="underline decoration-1 underline-offset-[4px]">
          de verdad y con verdad
        </span>, sin salir de tu IA favorita.
      </>
    ),
  },
];
