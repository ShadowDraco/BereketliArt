'use client';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, rem, Container } from '@mantine/core';
import classes from './CardsCarousel.module.css';
import Quantum1 from '/public/FrontArt/QuantumHollywood1.jpg';
import Quantum2 from '/public/FrontArt/QuantumHollywood2.jpg';
import Diversity2 from '/public/FrontArt/Diversity2.jpg';
import GoldenEagles from '/public/FrontArt/GoldenEagles.jpg';
interface CardProps {
  image: string;
  title: string;
  category: string;
  color?: string;
}

function Card({ image, title, category, color }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={`${classes.card} conic-border`}
    >
      <div>
        <Text className={classes.category} size="xs" style={{ color: color ? color : 'white' }}>
          {category}
        </Text>
        <Title order={3} className={classes.title} style={{ color: color ? color : 'white' }}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        See more
      </Button>
    </Paper>
  );
}

const data = [
  {
    image: Quantum1.src,
    title: 'Quantum Hollywood 1',
    category: 'Inspired',
  },
  {
    image: Quantum2.src,
    title: 'Quantum Hollywood 2',
    category: 'Inspired',
  },
  {
    image: Diversity2.src,
    title: 'Diversity 2',
    category: 'Diversity',
    color: 'black',
  },
  {
    image: GoldenEagles.src,
    title: 'Golden Eagles',
    category: 'Nature',
    color: 'black',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: rem(2), sm: 'xl' }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      loop
      dragFree
      draggable
    >
      {slides}
    </Carousel>
  );
}
