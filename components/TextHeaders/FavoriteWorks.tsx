import { Title, Text } from '@mantine/core';
import classes from './FavoriteWorks.module.css';

export function FavoriteWorks() {
  return (
    <>
      <Title className={classes.title} ta="center" my={100}>
        Metin's
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          {' '}
          Favorite{' '}
        </Text>
        Works
      </Title>
    </>
  );
}
