import { FeaturesGrid } from '@/components/Features/FeaturesGrid';
import { Welcome } from '../components/Welcome/Welcome';
import { HeroHeader } from '@/components/HeroHeader/HeroHeader';
import { MainHeader } from '@/components/MainHeader/MainHeader';
import { Footer } from '@/components/Footers/Footer';
import { CardsCarousel } from '@/components/Carousels/CardsCarousel';
import { Space } from '@mantine/core';

export default function HomePage() {
  return (
    <>
     
      <MainHeader />
      <HeroHeader />
      <Space h="lg" />
      <CardsCarousel />
      <FeaturesGrid />
      <Footer />
    </>
  );
}
