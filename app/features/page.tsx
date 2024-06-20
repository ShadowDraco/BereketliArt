import React from 'react';
import { Box} from '@mantine/core';

import { expositions } from '@/public/works'
import Gallery from '@/components/Carousels/LazyGallery/Gallery';
import { HeroTitle } from '@/components/Features/HeroTitle';

export default function page() {
  const expositionsGallery = expositions.map((work) => ({
    src: work.image.src,
    width: work.image.width,
    height: work.image.height,
    caption: work.title,
    url: work.name,
    noLink: true,
    zoom: true,
    alt: 'Expositions of Metin\'s artwork!',
  }));

  return (
    <div className="FadeMeIn">
      <HeroTitle />
      <Box style={{ margin: 'auto', width: '80vw', my: 'lg', mx: 'lg' }}><Gallery images={expositionsGallery} /></Box>

    </div>
  );
}
