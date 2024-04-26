'use client';

import { useParams } from 'next/navigation';
import React from 'react';
import { Button } from '@mantine/core';
import Link from 'next/link';
import works from '../../../public/works/works';
import { WorkHeader } from '@/components/WorkHeader/WorkHeader';

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
