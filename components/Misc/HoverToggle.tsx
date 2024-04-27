'use client';

import React from 'react';
import { useHover } from '@mantine/hooks';

export default function HoverToggle(props: any) {
  const { hovered, ref } = useHover();
  return (
    <div ref={ref} style={{ display: 'flex', width: 'fit-content' }}>
      {hovered ? props.child2 : props.child1}
    </div>
  );
}
