'use client';

import React from 'react';

import { Box } from '@mantine/core';

import Gallery from '@/components/Carousels/LazyGallery/Gallery';

import { works } from '../../public/works';
import { FavoriteWorks } from '@/components/TextHeaders/FavoriteWorks';

export default function page() {
  const galleryWorks = works.map((work) => ({
    src: work.image.src,
    width: work.image.width,
    height: work.image.height,
    caption: work.title,
    url: work.name,
    alt: 'Artwork by Metin Bereketli',
  }));

  return (
    <Box className="FadeMeIn darker">
      <FavoriteWorks />
      <Box pb="xl" style={{ width: '90%', margin: 'auto' }}>
        <Gallery images={galleryWorks} />
      </Box>
    </Box>
  );
}
