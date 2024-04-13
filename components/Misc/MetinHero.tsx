import { Flex } from '@mantine/core';
import React from 'react';
import Image from 'next/image';

import HollywoodPainter from '../../public/Hero/HollyWoodPainter.webp';

export default function MetinHero() {
  return (
    <Flex justify={'center'} align={'center'} my={5}>
      <Image
        src={HollywoodPainter.src}
        width={HollywoodPainter.width / 2}
        height={HollywoodPainter.height / 2}
        placeholder="blur"
        blurDataURL={HollywoodPainter.blurDataURL}
        alt="Metin Bereketli posing with a smile, and covered in paint."
      />
    </Flex>
  );
}
