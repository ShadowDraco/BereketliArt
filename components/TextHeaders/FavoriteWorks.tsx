import { Title, Text } from '@mantine/core';
import classes from './FavoriteWorks.module.css';

export function FavoriteWorks() {
  return (
    <>
      <Title className={classes.title} ta="center" my={50}>
        Metin's
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          {' '}
          Featured{' '}
        </Text>
        Works
      </Title>
    </>
  );
}
