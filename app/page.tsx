import { Space } from '@mantine/core';

import { FeaturesGrid } from '@/components/Features/FeaturesGrid';
import { HeroHeader } from '@/components/HeroHeader/HeroHeader';
import { MainHeader } from '@/components/MainHeader/MainHeader';
import { Footer } from '@/components/Footers/Footer';
import { CardsCarousel } from '@/components/Carousels/CardsCarousel';
import FeaturedArt from '@/components/Features/FeaturedArt';

export default function HomePage() {
  return (
    <>
      <MainHeader />
      <HeroHeader />
     
      <FeaturedArt />

      <CardsCarousel />
      <Space h={'xl'} />
      <FeaturesGrid />
      <Footer />
    </>
  );
}
