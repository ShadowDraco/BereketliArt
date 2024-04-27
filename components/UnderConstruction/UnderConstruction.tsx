'use client';

import { Title, Text, Button, Container, Space } from '@mantine/core';
import Link from 'next/link';
import { Dots } from './Dots';
import classes from './HeroText.module.css';

export function UnderConstruction() {
  return (
    <div className="magicpattern">
      <Space h="lg" />
      <Space h="lg" />
      <Space h="lg" />
      <Space h="lg" />
      <Container className={`${classes.wrapper}`} size={1400}>
        <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
        <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

        <div className={classes.inner}>
          <Title className={`${classes.title} `}>
            This Page{' '}
            <Text component="span" className={classes.highlight} inherit>
              Is Still Being Painted
            </Text>{' '}
            For You
          </Title>

          <Container p={0} size={600}>
            <Text size="lg" c="dimmed" className={classes.description}>
              While the artists breath life into this dull canvas, try this:
            </Text>
          </Container>

          <div className={classes.controls}>
            <Link href="/">
              <Button className={classes.control} size="lg" variant="default" color="gray" mx="sm">
                Return to home
              </Button>
            </Link>
            <Link href="/works">
              <Button className={classes.control} size="lg" mx="sm">
                Admire finished works
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
