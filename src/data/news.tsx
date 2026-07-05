export type NewsItem = {
  id: string;
  image: string;
  category: string;
  date: string;
  headline: string;
  body: React.ReactNode;
  gallery?: string[];
  source?: string;
};

export const newsItems: NewsItem[] = [
  {
    id: 'mbrand-estrena-bizbox',
    image: '/mario-martinez-2026.jpg',
    category: 'MBRAND',
    date: '22.11.25',
    headline: 'Mbrand estrena BizBox, el podcast sobre liderazgo de Mario Martínez',
    body: (
      <>
        <p>
          Mbrand lanza <strong>BizBox</strong>, un nuevo podcast presentado por Mario Martínez que recorre las trayectorias de los founders y directivos más influyentes de la economía española. La conversación se organiza como un vinilo: en álbumes y pistas, sin guion corporativo.
        </p>
        <p>
          Los primeros invitados ya han grabado sus episodios y BizBox aterrizará en las principales plataformas en las próximas semanas. La intención es ofrecer una mirada de fondo sobre construir, decidir y liderar — lejos del formato declarativo habitual del management.
        </p>
        <p>
          BizBox se suma al ecosistema de iniciativas que Mbrand impulsa junto a Propós y The Officer para activar conversación pública alrededor del liderazgo corporativo.
        </p>
      </>
    ),
    gallery: [
      '/CEO ONU Empresas.jpg',
      '/Mario Legado Logroño 06.jpg',
    ],
  },
  {
    id: 'the-officer-popup-madrid',
    image: '/CEO ONU Empresas.jpg',
    category: 'THE OFFICER',
    date: '02.10.25',
    headline: 'The Officer abrirá un pop-up en el centro de Madrid con motivo de South Summit',
    body: (
      <>
        <p>
          Coincidiendo con la celebración de South Summit, <strong>The Officer</strong> abrirá un espacio efímero en el corazón de Madrid. Un punto físico de encuentro para founders, inversores y directivos asistentes al congreso, abierto durante toda la semana.
        </p>
        <p>
          El pop-up combinará un set de grabación en vivo, sala de conversaciones, biblioteca temática y agenda de eventos privados. Será también el escenario de algunos de los grandes anuncios editoriales de la temporada.
        </p>
        <p>
          La iniciativa se enmarca dentro de la estrategia de The Officer de pasar del medio digital al territorio físico, convirtiendo la marca en un espacio relacional para el mundo corporate.
        </p>
      </>
    ),
    gallery: [
      '/CEO Naciones Unidas.jpeg',
    ],
  },
  {
    id: 'dirigentes-cede-testigo-the-officer',
    image: '/CEO Naciones Unidas.jpeg',
    category: 'PROPÓS',
    date: '12.09.25',
    headline: 'Dirigentes cede el testigo a The Officer tras un proceso de reflexión estratégica',
    body: (
      <>
        <p>
          Tras un proceso de reflexión estratégica acompañado por Propós, la cabecera <strong>Dirigentes</strong> cede el testigo a <strong>The Officer</strong>. El paso supone una reconversión completa de un medio histórico en una propuesta editorial nueva, pensada para el mundo corporate del próximo ciclo.
        </p>
        <p>
          The Officer recoge el archivo, los contactos y la marca de referencia de Dirigentes, y los relanza con una identidad visual renovada, una redacción multidisciplinar y un modelo de distribución multicanal —web, newsletter, podcast y formatos presenciales.
        </p>
        <p>
          Innovación, inteligencia, modernidad y sociabilidad son las cuatro palancas que articulan la transformación.
        </p>
      </>
    ),
    source: 'https://wearepropos.es/dirigentes-cede-el-testigo-a-the-officer-tras-un-proceso-de-reflexion-estrategica/',
  },
  {
    id: 'the-officer-media-partner-south-summit-vds',
    image: '/CEO ONU Empresas.jpg',
    category: 'PROPÓS',
    date: '28.07.25',
    headline: 'The Officer, media partner en South Summit y VDS de 2025',
    body: (
      <>
        <p>
          <strong>The Officer</strong> ha sido confirmado como media partner oficial de las ediciones 2025 de <strong>South Summit</strong> y <strong>Valencia Digital Summit (VDS)</strong>, dos de los encuentros más importantes del ecosistema emprendedor del sur de Europa.
        </p>
        <p>
          Como parte del acuerdo, The Officer cubrirá ambos eventos en directo, producirá contenidos editoriales exclusivos y articulará un programa de entrevistas con los protagonistas del calendario. Habrá podcasts grabados in situ, reportajes en profundidad y resúmenes diarios.
        </p>
        <p>
          La alianza refuerza la posición de The Officer como referencia editorial para el ecosistema corporate y emprendedor en España.
        </p>
      </>
    ),
    source: 'https://wearepropos.es/the-officer-media-partner-en-south-summit-y-vds-de-2025/',
  },
  {
    id: 'ai-for-good-awards-20-proyectos',
    image: '/CEO Naciones Unidas.jpeg',
    category: 'THE OFFICER',
    date: '18.06.25',
    headline: 'AI for Good Awards: estos son los 20 proyectos que pasan a la siguiente fase',
    body: (
      <>
        <p>
          La primera edición de los <strong>AI for Good Awards</strong> ha seleccionado a 20 proyectos finalistas que pasan a la siguiente fase del proceso. Las candidaturas, llegadas desde toda España, demuestran el avance de la IA aplicada con propósito en sectores tan diversos como salud, educación, tercera edad, marketing o sostenibilidad.
        </p>
        <p>
          El jurado, formado por especialistas independientes en tecnología, ética y emprendimiento, ha valorado el impacto medible, la viabilidad técnica y la replicabilidad de cada proyecto. La ronda final tendrá lugar en la gala anual de The Good Initiative.
        </p>
      </>
    ),
    source: 'https://theofficer.es/ai-for-good-awards-estos-son-los-20-proyectos-que-pasan-a-la-siguiente-fase/',
    gallery: [
      '/mario-martinez-2026.jpg',
      '/CEO ONU Empresas.jpg',
    ],
  },
  {
    id: 'mario-martinez-brandpulse-2025',
    image: '/Mario Legado Logroño 06.jpg',
    category: 'PROPÓS',
    date: '15.05.25',
    headline: 'Mario Martínez participa en el BrandPulse de 2025',
    body: (
      <>
        <p>
          <strong>Mario Martínez</strong>, fundador de Mbrand, participa en la edición 2025 de <strong>BrandPulse</strong>, el encuentro anual de referencia para profesionales del branding y la comunicación corporativa en España.
        </p>
        <p>
          En su intervención, Martínez aborda el papel de las marcas como infraestructura social: por qué las políticas no financieras se han convertido en el principal activo intangible, cómo se gestionan desde un enfoque basado en derechos humanos (EBDH) y qué cambios esperar en los próximos años.
        </p>
        <p>
          BrandPulse reúne anualmente a directivos, agencias y consultoras para debatir el estado del sector y las tendencias emergentes.
        </p>
      </>
    ),
    source: 'https://wearepropos.es/mario-martinez-participa-en-el-brandpulse-de-2025/',
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.id === slug);
}
