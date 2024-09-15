import { Container, Text, Button, Group } from '@mantine/core';
import Link from 'next/link';
import classes from './HeroTitle.module.css';
import HoverToggle from '../Misc/HoverToggle';

export function HeroTitle() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          <HoverToggle
            child1={
              <Text
                component="span"
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
                inherit
              >
                World Reknown
              </Text>
            }
            child2={
              <Text
                component="span"
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
                inherit
              >
                Healing Painter
              </Text>
            }
          />{' '}
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
          Metin is an artist of explosive colors, joyous forms, and a social conscience grounded in
          the universal values of diversity, tolerance, and individual freedoms. He is a creator who
          has transcended his time by focusing on global themes like courage, freedom, and love. You
          can witness his dedication to such core values in every canvass that his brush has
          touched.
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
