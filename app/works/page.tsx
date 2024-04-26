'use client';

import React from 'react';
import { Gallery } from 'react-grid-gallery';

import { Box, Text } from '@mantine/core';
import Link from 'next/link';

import works from '../../public/works/works';
import { FavoriteWorks } from '@/components/TextHeaders/FavoriteWorks';

export default function page() {
  const galleryWorks = works.map((work) => ({
    src: work.image.src,
    width: work.image.width,
    height: work.image.height,
    caption: work.title,
    url: work.name,
    alt: 'Artwork by Metin Bereketli',
    thumbnailCaption: (
      <Link href={`/works/${work.name}`} style={{}}>
        <Box style={{ margin: 'auto' }}>
          <Text fz="lg" style={{ color: 'black', textAlign: 'center' }}>
            {work.title}
          </Text>
        </Box>
      </Link>
    ),
  }));

  return (
    <Box>
      <FavoriteWorks />
      <Box style={{ width: '70%', margin: 'auto' }}>
        <Gallery
          images={galleryWorks}
          enableImageSelection={false}
          margin={8}
          tileViewportStyle={{  }}
        />
      </Box>
    </Box>
  );
}
