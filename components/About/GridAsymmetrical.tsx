import { Text, Box, Container, Space } from '@mantine/core';
import { Gallery } from 'react-grid-gallery';
import Link from 'next/link';
import Image from 'next/image';
import HollyWoodPainter from '@/public/Hero/HollyWoodPainterFull.webp';
import PaintingJFK from '@/public/Hero/PaintingJFK.jpg';
import classes from './HeroTitle.module.css';
import { worldLeaders, charities } from '@/public/works';
import { UnderConstruction } from '../UnderConstruction/UnderConstruction';

export function GridAsymmetrical() {
  const worldLeadersGallery = worldLeaders.map((work) => ({
    src: work.image.src,
    width: work.image.width,
    height: work.image.height,
    caption: work.title,
    url: work.name,
    alt: 'Artwork by Metin Bereketli',
    thumbnailCaption: (
      // <Link href={`/works/${work.name}`} style={{}}>
      <Box style={{ margin: 'auto', backgroundColor: 'rgba(100,155,255, 0.2)' }}>
        <Text fz="lg" style={{ color: 'black', textAlign: 'center' }}>
          {work.title}
        </Text>
      </Box>
      //</Link>
    ),
  }));

  const charitiesGallery = charities.map((work) => ({
    src: work.image.src,
    width: work.image.width,
    height: work.image.height,
    caption: work.title,
    url: work.name,
    alt: 'Artwork by Metin Bereketli',
    thumbnailCaption: (
      // <Link href={`/works/${work.name}`} style={{}}>
      <Box style={{ margin: 'auto', backgroundColor: 'rgba(200,50,50, 0.5)' }}>
        <Text fz="lg" style={{ color: 'black', textAlign: 'center' }}>
          {work.title}
        </Text>
      </Box>
      //</Link>
    ),
  }));

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

        <Gallery images={worldLeadersGallery} enableImageSelection={false} />

        <Space h="xl" />

        <Box style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
          <Text className={classes.description}>
            If all Metin did was paint in his studio in isolation from the world he would still be a
            great artist in his own right. But he is and has always been connected with his
            environment through many charitable programs he has supported to help those in need.
          </Text>
          <Image
            src={PaintingJFK.src}
            width={PaintingJFK.width}
            height={PaintingJFK.height}
            alt="Metin Bereketli"
            layout="responsive"
            style={{ margin: 'auto' }}
          />
        </Box>
        <Space h="xl" />
        <Text className={classes.description}>
          Especially worth remembering is Metin’s tireless advocacy on behalf of children with
          disabilities. Metin has led many painting workshops over the years to raise
          much-appreciated funds for children and adults in need. The list of the organizations he
          supported is a very long one, ranging from Shriner’s and autism organizations to Boys &
          Girls Clubs, museums, hospitals, organizations formed to fight cancer, police departments,
          etc
        </Text>
        <Gallery images={charitiesGallery} enableImageSelection={false} />

        <Space h="xl" />
      </Container>
      <UnderConstruction />
    </>
  );
}
