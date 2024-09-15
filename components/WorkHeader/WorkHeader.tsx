'use client';

import { useToggle, useIdle } from '@mantine/hooks';
import { Overlay, Container, Title, Text, Box, Button } from '@mantine/core';
//import ToggleOpacity from '@/components/Misc/ToggleOpacity';

import Link from 'next/link';
import classes from './WorkHeader.module.css';

export function WorkHeader({ work }) {
  const idle = useIdle(6000);
  const [visible, toggle] = useToggle([true, false]);
  // const { ref, x, y } = useMouse();

  return (
    <Box
      className={`${classes.hero}`}
      onClick={() => {
        toggle();
      }}
      style={{ backgroundImage: `url(${work.image.src})` }}
    >
      {/* <ToggleOpacity x={x} y={y}/> */}
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, .85) 40%)"
        opacity={idle || !visible ? 0 : 1}
        zIndex={0}
      />
      <Container className={classes.container} size="md" opacity={idle || !visible ? 0 : 1}>
        <Title className={classes.title}>
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: 'pink', to: 'orange' }}
          >
            {work.title}
          </Text>
        </Title>
        <Text className={classes.description} size="xl" mt="xl">
          {work.description}
        </Text>
      </Container>
    </Box>
  );
}
