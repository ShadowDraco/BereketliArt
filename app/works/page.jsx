'use client';

import React from 'react';
import Gallery from 'react-image-gallery';
import { Box } from '@mantine/core';
import works from '../../public/works/works';
import { FavoriteWorks } from '@/components/TextHeaders/FavoriteWorks';

export default function page() {
  const galleryWorks = works.map((image) => ({
    original: image.src,
    thumbnail: image.src,
    alt: 'A car worked on by Islas!',
  }));

  return (
    <Box>
      <FavoriteWorks />
      <Gallery items={galleryWorks} />
    </Box>
  );
}
