'use client';

import { Title, Text, Button, Container, Space } from '@mantine/core';
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
              Is still being painted
            </Text>{' '}
            for you
          </Title>

          <Container p={0} size={600}>
            <Text size="lg" c="dimmed" className={classes.description}>
              While the artists breath life into this dull canvas, try this:
            </Text>
          </Container>

          <div className={classes.controls}>
            <Button className={classes.control} size="lg" variant="default" color="gray">
              Return to home
            </Button>
            <Button className={classes.control} size="lg">
              Admire finished works
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
