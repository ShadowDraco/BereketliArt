'use client';

import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Title, Button, useMantineTheme, rem } from '@mantine/core';
import Link from 'next/link';
import classes from './CardsCarousel.module.css';
import Quantum1 from '/public/FrontArt/QuantumHollywood1.jpg';
import Quantum2 from '/public/FrontArt/QuantumHollywood2.jpg';
import Diversity2 from '/public/FrontArt/Diversity2.jpg';
import GoldenEagles from '/public/FrontArt/GoldenEagles.jpg';
interface CardProps {
  image: string;
  title: string;
  category: string;
  background?: boolean;
  url: string;
}

function Card({ image, title, category, background, url }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={`${classes.card}`}
    >
      <div>
        <Title
          order={3}
          className={classes.title}
          style={{
            backgroundColor: background ? 'rgba(0,0,0,0.7)' : 'transparent',

            padding: 8,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: '50%',
          }}
        >
          {title}
        </Title>
      </div>
      <Link href={url}>
        <Button variant="white" color="dark">
          See more
        </Button>
      </Link>
    </Paper>
  );
}

const data = [
  {
    image: Quantum1.src,
    title: 'Quantum Hollywood 1',
    url: '/work/quantum-hollywood-1',
    category: 'Inspired',
  },
  {
    image: Quantum2.src,
    title: 'Quantum Hollywood 2',
    url: '/work/quantum-hollywood-2',
    category: 'Inspired',
  },
  {
    image: Diversity2.src,
    title: 'Diversity 2',
    url: '/work/diversity-2',
    category: 'Diversity',
    background: true,
  },
  {
    image: GoldenEagles.src,
    title: 'Golden Eagles',
    url: '/work/golden-eagles',
    category: 'Nature',
    background: true,
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
