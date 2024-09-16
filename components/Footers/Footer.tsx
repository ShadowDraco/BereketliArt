'use client';

import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import {
  IconBrandX,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';

import { SiImdb } from 'react-icons/si';

import Link from 'next/link';
import classes from './Footer.module.css';

const data = [
  {
    title: 'About',
    links: [
      { label: 'Bio', link: '/about' },
      { label: 'Works', link: '/works' },
      //{ label: 'Features', link: '/features' },
      //{ label: 'More', link: '/more' },
    ],
  },
  {
    title: 'Involvement',
    links: [
      //{ label: 'Charity', link: '/charity' },
      { label: 'Press', link: '/press' },
      //{ label: 'Store', link: '/store' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Message us', link: '/contact' },
      { label: 'Inquire', link: '/inquire' },
    ],
  },
];

export function MainFooter() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'> key={index} className={classes.link} component="a" href={link.link}>
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Text size="md" className={classes.description}>
            Metin Bereketli, the world renowned Hollywood Painter.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text size="sm">
          All works are created by Metin Bereketli. Please inquire if you have interest in his
          works.
          <br></br>
          <br></br>
          Web Services by{' '}
          <Link href="https://github.com/shadowdraco" target="_blank">
            Ethan Storm
          </Link>
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <Link href="https://twitter.com/healingpainter" target="_blank">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandX style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
          </Link>
          <Link href="https://www.youtube.com/@metinbereketli7681" target="_blank">
            {' '}
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
          </Link>
          <Link href="https://www.instagram.com/healingpainter" target="_blank">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
          </Link>
          <Link href="https://www.linkedin.com/in/metinbereketli/" target="_blank">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
          </Link>

          <Link href="https://m.imdb.com/name/nm0073484/" target="_blank">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <SiImdb style={{ width: rem(18), height: rem(18), border: '1px #aaaaaa solid' }} />
            </ActionIcon>
          </Link>
        </Group>
      </Container>
    </footer>
  );
}
