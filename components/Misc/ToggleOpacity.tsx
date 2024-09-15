import React from 'react';
import { Text, Flex } from '@mantine/core';
import { IconEye } from '@tabler/icons-react';
import { useHover } from '@mantine/hooks';
export default function ToggleOpacity({ x, y }) {
  const { hovered, ref } = useHover();

  return (
    <Flex
      ref={ref}
      style={{
        position: 'absolute',
        top: y - 1,
        left: x - 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        width: 'fit-content',
        opacity: hovered ? 1 : 0,
        padding: 2,
        zIndex: 3,
      }}
    >
      <IconEye color="white" />

      <Text c="white">Toggle</Text>
    </Flex>
  );
}
