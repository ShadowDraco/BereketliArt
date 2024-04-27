'use client';

import { useParams } from 'next/navigation';
import React from 'react';
import { Button, Box, Text } from '@mantine/core';
import Link from 'next/link';
import { works } from '@/public/works';
import { WorkHeader } from '@/components/WorkHeader/WorkHeader';

export default function page() {
  const params = useParams<{ name: string }>();

  const work = works.find((piece) => piece.name === params.name);

  return (
    <div className="FadeMeIn">
      <Box style={{ margin: 'auto', textAlign: 'center' }}>
        {work ? (
          <WorkHeader work={work} />
        ) : (
          <Text fz="xl" mt="md">
            That piece does not exist
          </Text>
        )}
        <Link href="/inquire">
          <Button variant="outline" color="blue" m="lg" size="lg">
            Inquire
          </Button>
        </Link>
      </Box>
    </div>
  );
}
