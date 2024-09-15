'use client';

import { isMobile } from 'react-device-detect';
import { Menu, Group, Center, Burger, Container, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';

import Link from 'next/link';
import { ColorSchemeToggle } from '../Buttons/ColorSchemeToggle';
import classes from './MainHeader.module.css';
import HomeButton from '../Buttons/HomeButton';

let links = [
  { link: '/works', label: 'Works' },
  { link: '/about', label: 'About' },
  {
    link: '#',
    label: 'Spotlight',
    links: [
      { link: '/press', label: 'Press' },
      { link: '/features', label: 'Expositions' },
      //{ link: '/charity', label: 'Charity' },
      //{ link: '/store', label: 'Store' },
      //{ link: '/more', label: 'More!' },
    ],
  },
  {
    link: '#',
    label: 'Contact Us',
    links: [
      { link: '/contact', label: 'Contact' },
      { link: '/inquire', label: 'Inquire' },
    ],
  },
];

if (isMobile) {
  links = [
    { link: '/works', label: 'Works' },
    { link: '/about', label: 'About' },
    { link: '/press', label: 'Press' },
    { link: '/features', label: 'Expositions' },
    { link: '/contact', label: 'Contact' },
    { link: '/inquire', label: 'Inquire' },
  ];
}

export function MainHeader() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Link href={item.link} key={`${link.label}-menu-item`}>
        <Menu.Item key={item.link}>{item.label}</Menu.Item>
      </Link>
    ));

    if (menuItems) {
      return (
        <Menu
          key={`${link.label}-menu-label`}
          trigger="click-hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
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
        key={`${link.label}-menu-link`}
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
            <HomeButton />
            <ColorSchemeToggle />
          </Flex>
          <Group gap={'md'} visibleFrom="sm">
            {items}
          </Group>

          <Menu width={200} shadow="md">
            <Menu.Target>
              <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
            </Menu.Target>
            <Menu.Dropdown>
              {items.map((item) => (
                <Menu.Item
                  onClick={() => {
                    close;
                  }}
                >
                  {item}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </div>
      </Container>
    </header>
  );
}
