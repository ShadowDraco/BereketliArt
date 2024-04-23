'use client';
import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from '@mantine/core';
import {
  IconHealthRecognition,
  IconUser,
  IconPalette,
  IconBulb,
  IconNews,
  IconAddressBook,
} from '@tabler/icons-react';
import classes from './FeaturesGrid.module.css';
import Link from 'next/link';
import MetinHero from '../Misc/MetinHero';

const data = [
  {
    title: 'About',
    description:
      'Metin Bereketli is an internationally acclaimed Los Angeles based painter. His contemporary works have been featured in museums, galleries, and exhibitions worldwide including...',
    icon: IconUser,
    url: '/about',
  },
  {
    title: 'Works',
    description:
      'Metin is an artist who has dedicated himself to the evolution of mankind with his themes. His paintings are not only a display of vivid colors and powerful imagery, but also...',
    icon: IconPalette,
    url: '/works',
  },
  {
    title: 'Features',
    description:
      'Metin was recently honored by the Academy of Television Arts and Sciences for his contribution to the Emmy Award winning achievement...',
    icon: IconBulb,
    url: '/features',
  },
  {
    title: 'Charity',
    description:
      'To promote healing through giving, Metin has generously supported many charities with his art, including...',
    icon: IconHealthRecognition,
    url: '/charity',
  },
  {
    title: 'Press',
    description:
      'Metin and his intentive style have earned the esteem of many American Leaders and received critical acclaim in articles published...',
    icon: IconNews,
    url: '/press',
  },
  {
    title: 'Contact / Inquire',
    description:
      "If you want to learn more, make an inquiry, or feature Metin's art, please make contact.",
    icon: IconAddressBook,
    url: '/contact',
  },
];

export function FeaturesGrid() {
  const theme = useMantineTheme();
  const features = data.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={`${classes.card} hover-expand`}
      padding="xl"
    >
      <Link href={feature.url} style={{ textDecoration: 'none', color: 'inherit' }}>
        <feature.icon
          style={{ width: rem(50), height: rem(50) }}
          stroke={2}
          color={theme.colors.blue[6]}
        />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Link>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Highly Featured
        </Badge>

        <Badge variant="filled" size="lg">
          Internationally acclaimed
        </Badge>
        <Badge variant="filled" size="lg">
          Powerful imagery
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Why is Metin's art important and valuable?
      </Title>

      <MetinHero />

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Metin believes divine inspiration plays a great part in the creation of his paintings. His
        art appeals to the eyes and the heart. His images communicate important human messages about
        healing and the promotion of world peace.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
