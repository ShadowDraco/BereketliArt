'use client';

import { Carousel } from '@mantine/carousel';
import { useMediaQuery, useIdle, useToggle } from '@mantine/hooks';
import { Paper, Title, Button, useMantineTheme, Text, rem } from '@mantine/core';
import Link from 'next/link';
import classes from './CardsCarousel.module.css';
import Quantum1 from '/public/FrontArt/QuantumHollywood1.jpg';
import Quantum2 from '/public/FrontArt/QuantumHollywood2.jpg';
import BurlesqueParody from '/public/FrontArt/BurlesqueParody.webp';
import Carnival from '/public/FrontArt/CarnivalCurtain.jpg';

interface CardProps {
  image: string;
  title: string;
  category: string;
  background?: boolean;
  url: string;
}

function Card({ image, title, category, background, url }: CardProps) {
  const idle = useIdle(6000);
  const [visible, toggle] = useToggle([true, false]);
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={`${classes.card} click-me`}
      onClick={() => {
        idle ? toggle(true) : toggle();
      }}
    >
      <div style={{ opacity: idle || !visible ? 0 : 1 }}>
        <Title
          p={3}
          order={3}
          className={classes.title}
          style={{
            backgroundColor: background ? 'rgba(0,0,0,0.7)' : 'transparent',
          }}
        >
          {title}
        </Title>
        <Text
          color="white"
          p={3}
          style={{
            width: 'fit-content',
            backgroundColor: background ? 'rgba(0,0,0,0.7)' : 'transparent',

            borderRadius: '5px',
          }}
        >
          {category}
        </Text>
      </div>
      <Link href={url}>
        <Button variant="white" color="dark">
          {category === 'AVAILABLE' ? 'Inquire' : 'See More'}
        </Button>
      </Link>
    </Paper>
  );
}

const data = [
  {
    image: Quantum1.src,
    title: 'Quantum Hollywood 1',
    url: '/works/quantum-hollywood-1',
    category: 'AVAILABLE',
    background: true,
  },
  {
    image: Quantum2.src,
    title: 'Quantum Hollywood 2',
    url: '/works/quantum-hollywood-2',
    category: 'AVAILABLE',
    background: true,
  },
  {
    image: BurlesqueParody.src,
    title: 'Burlesque Parody',
    url: '/works/burlesque-parody',
    category: 'AVAILABLE',
    background: true,
  },
  {
    image: Carnival.src,
    title: 'Carnival Curtain',
    url: '/works/carnival-curtain',
    category: 'AVAILABLE',
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
      slidesToScroll={mobile ? 1 : 1}
      loop
      dragFree
      draggable
    >
      {slides}
    </Carousel>
  );
}
