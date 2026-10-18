import { Hero } from '../components/Hero';
import { CreateSlide } from '../components/CreateSlide';
import { CreateIntroSlide } from '../components/CreateIntroSlide';
import { GrowSlide } from '../components/GrowSlide';
import { InitiativesSlide, initiatives } from '../components/InitiativesSlide';
import { InitiativeSlide } from '../components/InitiativeSlide';
import { DoSlide } from '../components/DoSlide';
import { DoItemsSlider } from '../components/DoItemsSlider';
import { doItems } from '../data/doItems';
import { NewsSlider } from '../components/NewsSlider';
import { useOfficerMbrandNews } from '../hooks/useOfficerMbrandNews';
import { MarioBrandSlide } from '../components/MarioBrandSlide';

export function Home() {
  const officerNews = useOfficerMbrandNews();
  return (
    <>
      <Hero />
      <CreateSlide />
      <CreateIntroSlide />
      <GrowSlide />
      <InitiativesSlide />
      {initiatives.map((item) =>
        <InitiativeSlide
          key={item.id}
          id={`initiative-${item.id}`}
          name={item.name}
          description={item.description}
          image={item.image} />
      )}
      <DoSlide />
      <DoItemsSlider items={doItems} />
      <NewsSlider title="Noticias" items={officerNews} />
      <MarioBrandSlide />
    </>);
}
