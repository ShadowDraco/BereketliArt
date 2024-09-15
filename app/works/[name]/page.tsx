'use client';

import { useParams } from 'next/navigation';
import React from 'react';
import { Button } from '@mantine/core';
import Link from 'next/link';
import quantumHollywood1 from '../../../public/works/quantum-hollywood-1.jpg';
import quantumHollywood2 from '../../../public/works/quantum-hollywood-2.jpg';
import burlesqueParody from '../../../public/works/burlesque-parody.jpg';
import carnivalCurtain from '../../../public/works/carnival-curtain.jpg';
import { WorkHeader } from '@/components/WorkHeader/WorkHeader';

const works = [
  {
    name: 'quantum-hollywood-1',
    title: 'Quantum Hollywood 1',
    image: quantumHollywood1,
    description:
      'Very large, 6 by 8 foot, Original Acrylic Painting. A most prized original painting, created for the Los Angeles Fashion Week of 2023.',
  },
  {
    name: 'quantum-hollywood-2',
    title: 'Quantum Hollywood 2',
    image: quantumHollywood2,
    description:
      'Very large, 6 by 8 foot, Original Acrylic Painting. A most prized original painting, created for the Los Angeles Fashion Week of 2023.',
  },
  {
    name: 'burlesque-parody',
    title: 'Burlesque Parody',
    image: burlesqueParody,
    description:
      '22 by 28 inch, Original Oil Painting. This art, composed on museum quality hard paper, is elegant and complimentary to any environment.',
  },
  {
    name: 'carnival-curtain',
    title: 'Carnival-Curtain',
    image: carnivalCurtain,
    description: '4 by 4 foot, Original Acrylic Painting. A colorful and engaging masterpiece.',
  },
];

export default function page() {
  const params = useParams<{ name: string }>();

  const work = works.find((piece) => piece.name === params.name);

  return (
    <>
      {work ? <WorkHeader work={work} /> : 'That piece does not exist'}
      <Link href="/inquire">
        <Button variant="outline" color="blue" m="lg">
          Inquire
        </Button>
      </Link>
    </>
  );
}
