'use client';

import { useToggle, useIdle } from '@mantine/hooks';
import { Overlay, Container, Title, Text, Box, Button } from '@mantine/core';
//import ToggleOpacity from '@/components/Misc/ToggleOpacity';

import Link from 'next/link';
import classes from './HeroHeader.module.css';

export function HeroHeader() {
  const idle = useIdle(6000);
  const [visible, toggle] = useToggle([true, false]);
  // const { ref, x, y } = useMouse();

  return (
    <Box
      className={`${classes.hero} click-me`}
      onClick={() => {
        idle ? toggle(true) : toggle();
      }}
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
            The Hollywood Painter
          </Text>
        </Title>
        <Text className={classes.description} size="xl" mt="xl">
          Metin is an artist who has dedicated himself to the evolution of mankind with his themes.
          His paintings are not only a display of vivid colors and powerful imagery, but also a
          celebration of oneness with the Human Family in the Circle of Life.
        </Text>
      </Container>
      <Link href="/works/burlesque-parody">
        <Button variant="outline" color="white" m="lg">
          Burlesque Parody
        </Button>
      </Link>
    </Box>
  );
}
