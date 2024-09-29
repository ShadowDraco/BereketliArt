import { Text, Container, Space, Group } from '@mantine/core';
import Image from 'next/image';
import Gallery from '@/components/Carousels/LazyGallery/Gallery';

import HollyWoodPainter from '@/public/Hero/HollyWoodPainterFull.webp';
import PaintingJFK from '@/public/Hero/PaintingJFK.webp';
import Peacelandia from '@/public/Hero/PEACELANDIA.webp';
import PaintedMetin from '@/public/Hero/metin-painted.webp';

import classes from './HeroTitle.module.css';
import { worldLeaders, charities, pressWorks, cities, diversity } from '@/public/works';

import LazyImage from '../Carousels/LazyGallery/LazyImage';

export function GridAsymmetrical() {
  const worldLeadersGallery = worldLeaders.map((work) => ({
    src: work.image.src,
    width: work.image.width,
    height: work.image.height,
    caption: work.title,
    url: work.name,
    noLink: true,
    alt: 'World Leaders Artwork by Metin Bereketli',
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

  const citiesGallery = cities.map((work) => ({
    src: work.image.src,
    width: work.image.width,
    height: work.image.height,
    caption: work.title,
    url: work.name,
    noLink: true,
    alt: 'Original "Cities" series by Metin Bereketli!',
  }));

  const diversityGallery = diversity.map((work) => ({
    src: work.image.src,
    width: work.image.width,
    height: work.image.height,
    caption: work.title,
    url: work.name,
    noLink: true,
    alt: "Metin Bereketli's Diversity collection",
  }));

  const PaintingJFKImage = {
    src: PaintingJFK.src,
    width: PaintingJFK.width,
    height: PaintingJFK.height,
    caption: 'Metin Painting JFK',
    noLink: true,
    alt: 'Metin Painting his JFK Painting',
  };
  const PeacelandiaImage = {
    src: Peacelandia.src,
    width: Peacelandia.width,
    height: Peacelandia.height,
    caption: 'Peacelandia by Metin Bereketli',
    noLink: true,
    alt: "Metin's Peacelandia painting,~ the healing power of Red White and Blue",
  };

  const PaintedMetinImage = {
    src: PaintedMetin.src,
    width: PaintedMetin.width,
    height: PaintedMetin.height,
    caption: 'Metin Bereketli',
    noLink: true,
    alt: "Metin's Passion for art, and compassion for others extends to no end.",
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
        <Space h="xl" />
        <Gallery images={worldLeadersGallery} />
        <Space h="xl" />

        <Group grow preventGrowOverflow={false} wrap="wrap">
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
        <Space h="xl" />
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
        <Group>
          <Text className={classes.description}>
            Not content with sharing his healing energies with children and art lovers of the world,
            Metin has also turned his energies to another area, and created his remarkable “Cities
            Series.” In each of these truly original canvases you can see a heart aching and caring
            not only for the living creatures of our planet but even for its pavements, buildings,
            avenues and waterways. That’s how complete is Metin’s dedication to the glory of our
            world.
          </Text>
          <Gallery images={citiesGallery} />
        </Group>
        <Space h="xl" />
        <Group grow preventGrowOverflow={false} visibleFrom="sm" wrap="nowrap">
          <Text className={classes.description} style={{ maxWidth: '50%' }}>
            One special category of creation that Metin has repeatedly portrayed in all its joy and
            effervescence is… birds! They represent peace, innocence, and freedom. That’s why they
            have graced many of Metin’s paintings like angels singing to us from another dimension.
          </Text>
          <LazyImage {...PeacelandiaImage} />
        </Group>
        <Group grow preventGrowOverflow={false} hiddenFrom="sm" wrap="wrap">
          <Text className={classes.description}>
            One special category of creation that Metin has repeatedly portrayed in all its joy and
            effervescence is… birds! They represent peace, innocence, and freedom. That’s why they
            have graced many of Metin’s paintings like angels singing to us from another dimension.
          </Text>
          <LazyImage {...PeacelandiaImage} />
        </Group>
        <Space h="xl" />

        <Group grow preventGrowOverflow={false} visibleFrom="sm" wrap="wrap">
          <Text className={classes.description} style={{}}>
            One cannot emphasize enough Metin’s special focus on diversity. His fervent wish is to
            bring together all peoples from all kinds of religious, ethnic and cultural backgrounds.
            That’s his definition of Heaven On Earth and it’s easy to see that dedication in over a
            dozen original works he has created in the past.
          </Text>
          <Gallery images={diversityGallery} />
        </Group>
        <Group grow preventGrowOverflow={false} hiddenFrom="sm" wrap="wrap">
          <Text className={classes.description}>
            One cannot emphasize enough Metin’s special focus on diversity. His fervent wish is to
            bring together all peoples from all kinds of religious, ethnic and cultural backgrounds.
            That’s his definition of Heaven On Earth and it’s easy to see that dedication in over a
            dozen original works he has created in the past.
          </Text>
          <Gallery images={diversityGallery} />
        </Group>
        <Space h="xl" />

        <Group grow preventGrowOverflow={false} wrap="wrap">
          <LazyImage {...PaintedMetinImage} />
        </Group>
        <Space h="xl" />

        <Text className={classes.description} style={{ fontWeight: 'bold' }}>
          Metin&apos;s artwork have appeared in the following MOVIES and TV shows:
        </Text>
        <Text className={classes.description} style={{ fontWeight: 'lighter', fontSize: '15px' }}>
          • IT&apos;S ALWAYS SUNNY IN PHILADELPHIA • CHIP &apos;N&apos; DALE:RESCUE RANGERS • UNITED
          STATES OF AL • THE NEIGHBORHOOD • SYDNEY TO THE MAX • THE KOMINSKY METHOD • GREY&apos;S
          ANATOMY • SNEAKY PETE • THE OPENING ACT • LUCIFER • CODE BLACK • SHUT EYE • TRANSPARENT •
          A TO Z • HARRY&apos;S LAW • HOMELAND • ARMY WIVES • SOUTH OF HELL • ROYAL PAINS • CSI: NY
          • HOW I MET YOUR MOTHER • NUMBERS • ER • HOUSE • FRIENDS • FRASIER • THE ASSISTANTS • THE
          DEFENDERS • THE APPRENTICE • GILMORE GIRLS • PRIVILEGED • WILL AND GRACE • BECKER • TWO
          AND A HALF MEN • DREW CAREY SHOW • SEVENTH HEAVEN • CHICAGO HOPE • PASSIONS • THE BOLD AND
          THE BEAUTIFUL • GENERAL HOSPITAL • PORT CHARLES • ALL OF US NOAH&apos;S ARK • SUNSET BEACH
          THE PRETENDER • JESSE PARTY OF FIVE • ANGEL • FELICITY • WASTELAND • VERONICA&apos;S
          CLOSET • SHASTA MCNASTY • MEN WHO STARE AT GOATS • POSEIDON • LANDSLIDE • KILLER FLOOD THE
          LITTLE DEATH • THE HEART OF CHRISTMAS • KATIE COURIC & MATT LAUER “TODAY” SHOW • AND MANY
          MORE…
        </Text>
        <Space h="xl" />
        <Text className={classes.description}>
          Metin was recently honored by the Academy of Television Arts and Sciences for his
          contribution to the Emmy Award winning achievement of the TV show “Transparent” and
          &quot;How I Met Your Mother&quot;
        </Text>
      </Container>
    </>
  );
}
