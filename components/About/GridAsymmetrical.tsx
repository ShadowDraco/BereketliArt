import { Text, Container, Space, Group } from '@mantine/core';
import Image from 'next/image';
import Gallery from '@/components/Carousels/LazyGallery/Gallery';

import HollyWoodPainter from '@/public/Hero/HollyWoodPainterFull.webp';
import PaintingJFK from '@/public/Hero/PaintingJFK.jpg';
import classes from './HeroTitle.module.css';
import { worldLeaders, charities, pressWorks } from '@/public/works';
import { UnderConstruction } from '../UnderConstruction/UnderConstruction';
import LazyImage from '../Carousels/LazyGallery/LazyImage';

export function GridAsymmetrical() {
  const worldLeadersGallery = worldLeaders.map((work) => ({
    src: work.image.src,
    width: work.image.width,
    height: work.image.height,
    caption: work.title,
    url: work.name,
    noLink: true,
    alt: 'Artwork by Metin Bereketli',
  }));

  const charitiesGallery = charities.map((work) => ({
    src: work.image.src,
    width: work.image.width,
    height: work.image.height,
    caption: work.title,
    url: work.name,
    noLink: true,
    alt: 'Metin Bereketli in charitable action',
  }));

  const pressGallery = pressWorks.map((work) => ({
    src: work.image.src,
    width: work.image.width,
    height: work.image.height,
    caption: work.title,
    url: work.name,
    noLink: true,
    alt: 'Press featuring Metin Bereketli',
  }));

  const PaintingJFKImage = {
    src: PaintingJFK.src,
    width: PaintingJFK.width,
    height: PaintingJFK.height,
    caption: 'Metin Painting JFK',
    noLink: true,
    alt: 'Metin Painting his JFK Painting',
  };

  return (
    <>
      <Container my="md">
        <Image
          src={HollyWoodPainter.src}
          width={HollyWoodPainter.width}
          height={HollyWoodPainter.height}
          layout="responsive"
          alt="Metin Bereketli"
        />
        <Text className={classes.description}>
          Starting his career on the shores of Mediterranean, home to dozens of civilizations in
          history, Metin has painted children playing under open blue skies, animals and all kinds
          of fascinating forms teeming with spiritual energy, and world leaders like Martin Luther
          King Jr. and JFK portrayed on the kind of backgrounds that conveyed the historic narrative
          with fascinating vigor and economy.
        </Text>

        <Space h="md" />

        <Gallery images={worldLeadersGallery} />

        <Space h="xl" />

        <Group grow preventGrowOverflow={false} visibleFrom="sm" wrap="nowrap">
          <Text className={classes.description} style={{ maxWidth: '50%' }}>
            If all Metin did was paint in his studio in isolation from the world he would still be a
            great artist in his own right. But he is and has always been connected with his
            environment through many charitable programs he has supported to help those in need.
          </Text>
          <LazyImage {...PaintingJFKImage} />
        </Group>

        <Group grow preventGrowOverflow={false} hiddenFrom="sm" wrap="wrap">
          <Text className={classes.description}>
            If all Metin did was paint in his studio in isolation from the world he would still be a
            great artist in his own right. But he is and has always been connected with his
            environment through many charitable programs he has supported to help those in need.
          </Text>
          <LazyImage {...PaintingJFKImage} />
        </Group>

        <Space h="xl" />
        <Text className={classes.description}>
          Especially worth remembering is Metin’s tireless advocacy on behalf of children with
          disabilities. Metin has led many painting workshops over the years to raise
          much-appreciated funds for children and adults in need. The list of the organizations he
          supported is a very long one, ranging from Shriner’s and autism organizations to Boys &
          Girls Clubs, museums, hospitals, organizations formed to fight cancer, police departments,
          etc
        </Text>
        <Gallery images={charitiesGallery} />

        <Space h="xl" />
        <Group grow preventGrowOverflow={false} visibleFrom="sm" wrap="nowrap">
          <Text className={classes.description} style={{ maxWidth: '50%' }}>
            Metin’s vibrant and irresistible art has been the subject of many media features. His
            paintings as well as his charitable work have been covered by dozens of TV shows,
            interviews, and newspaper and magazine articles in English, Turkish, and Spanish. One
            such newspaper feature headlined his work “Amor en Accion”. What can summarize Metin’s
            career better than those two simple yet powerful and beautiful words: “Love and Action.”
          </Text>
          <LazyImage {...pressGallery[0]} />
        </Group>

        <Group grow preventGrowOverflow={false} hiddenFrom="sm" wrap="wrap">
          <Text className={classes.description}>
            Metin’s vibrant and irresistible art has been the subject of many media features. His
            paintings as well as his charitable work have been covered by dozens of TV shows,
            interviews, and newspaper and magazine articles in English, Turkish, and Spanish. One
            such newspaper feature headlined his work “Amor en Accion”. What can summarize Metin’s
            career better than those two simple yet powerful and beautiful words: “Love and Action.”
          </Text>
          <LazyImage {...pressGallery[0]} />
        </Group>

        <Space h="xl" />
      </Container>
      <UnderConstruction />
    </>
  );
}
