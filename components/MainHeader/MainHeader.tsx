'use client';

import { Menu, Group, Center, Burger, Container, Flex, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { IconHome } from '@tabler/icons-react';
import Link from 'next/link';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import classes from './MainHeader.module.css';

const links = [
  { link: '/works', label: 'Works' },
  { link: '/about', label: 'About' },
  {
    link: '#1',
    label: 'Features',
    links: [
      { link: '/press', label: 'Press' },
      { link: '/features', label: 'Features' },
      { link: '/charity', label: 'Charity' },
      { link: '/store', label: 'Store' },
      { link: '/more', label: 'More!' },
    ],
  },
  {
    link: '#2',
    label: 'Contact',
    links: [
      { link: '/contact', label: 'Contact' },
      { link: '/inquire', label: 'Inquire' },
    ],
  },
];

export function MainHeader() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Link href={item.link} key={link.label}>
        <Menu.Item key={item.link}>{item.label}</Menu.Item>
      </Link>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <Link
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => (link.link[0] === '#' ? event.preventDefault() : '')}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Flex gap={'lg'} justify={'center'} align="center">
            <ActionIcon variant="subtle" size="input-sm">
              <Link href="/" style={{ textDecoration: 'none', color: 'black' }}>
                <IconHome size={28} />
              </Link>
            </ActionIcon>
            <ColorSchemeToggle />
          </Flex>
          <Group gap={'md'} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}
