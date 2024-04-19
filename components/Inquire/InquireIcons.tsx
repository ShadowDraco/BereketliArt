import { Text, Box, Stack, rem } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
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
  { title: 'Email', description: 'metinart@gmail.com', icon: IconAt },
  { title: 'Phone', description: '(323) 856-4789', icon: IconPhone },
  { title: 'P.O. Box', description: 'Beverly Hills, CA 90213', icon: IconMapPin },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <InquireIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}
