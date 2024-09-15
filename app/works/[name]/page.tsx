'use client';

import { useParams } from 'next/navigation';
import React from 'react';
import { Button } from '@mantine/core';
import Link from 'next/link';
import quantumHollywood1 from '../../../public/works/quantum-hollywood-1.jpg';
import { WorkHeader } from '@/components/WorkHeader/WorkHeader';

const works = [
  {
    name: 'quantum-hollywood-1',
    title: 'Quantum Hollywood 1',
    image: quantumHollywood1,
    description:
      'Very large, 6 foot by 8 feet, Original Acrylic Painting. A most prized original painting, created for the Los Angeles Fashion Week of 2023.',
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
