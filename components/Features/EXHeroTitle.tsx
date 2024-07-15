import { Container, Text, Button, Group } from '@mantine/core';
import Link from 'next/link';
import classes from './HeroTitle.module.css';

export function HeroTitle() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            World Reknown{" "}
          </Text>
          <br></br>
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: 'orange', to: 'cyan' }}
            inherit
          >
            Metin Bereketli
          </Text>
        </h1>

        <Text className={classes.description} color="dimmed">
          Metin&#39;s famous art precedes him. The art&#39;s attraction begs famous names
          to admire it. Explore the various expositions Metin and his artwork
          have met and eternalized.
        </Text>

        <Group className={classes.controls}>
          <Link href="/works">
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
            >
              Works
            </Button>
          </Link>

          <Link href="/inquire">
            <Button size="xl" variant="default" className={classes.control}>
              Inquire
            </Button>
          </Link>
        </Group>
      </Container>
    </div>
  );
}
