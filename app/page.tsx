import { Space } from '@mantine/core';

import { FeaturesGrid } from '@/components/Features/FeaturesGrid';
import { HeroHeader } from '@/components/HeroHeader/HeroHeader';
import { CardsCarousel } from '@/components/Carousels/CardsCarousel';
import FeaturedArt from '@/components/Features/FeaturedArt';

export default function HomePage() {
  return (
    <div className="FadeMeIn">
      <HeroHeader />
      <Space h={'xl'} />
      <FeaturedArt />
      <Space h={'xl'} />
      <CardsCarousel />

      <Space h="xl" />
      <FeaturesGrid />
    </div>
  );
}
