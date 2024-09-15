import { Text, Box, Stack, rem } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import Link from 'next/link';
import classes from './InquireIcons.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function InquireIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: 'MDAM Art', description: 'Private Art Museum', icon: IconAt, url: 'https://mdam.art' },
  {
    title: 'Phone',
    description: (
      <Link
        href="tel:7607999079"
        target="_blank"
        style={{ textDecoration: 'none', color: 'white' }}
      >
        (760) 799-9079
      </Link>
    ),
    icon: IconPhone,
  },
  {
    title: 'Address',
    description: '9800 Wilshire Blvd, Beverly Hills, CA 90212',
    icon: IconMapPin,
  },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) =>
    item.url ? (
      <Link href={item.url} key={index} target="_blank" style={{ textDecoration: 'none' }}>
        <InquireIcon {...item} />
      </Link>
    ) : (
      <InquireIcon key={index} {...item} />
    )
  );
  return <Stack>{items}</Stack>;
}
