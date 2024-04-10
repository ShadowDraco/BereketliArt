import React from 'react';
import { Title, Text, Anchor, Box } from '@mantine/core';
import classes from './FeaturedArt.module.css';

export default function FeaturedArt() {
  return (
    <Box>
      <Title className={classes.title} ta="center">
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'rgba(255, 0, 187, 1)', to: 'rgba(0, 238, 255, 1)', deg: 0 }}
        >
          Featured
        </Text>{' '}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'rgba(255, 200, 0, 1)', to: 'rgba(255, 0, 0, 1)', deg: 0 }}
        >
          Art
        </Text>
      </Title>
    </Box>
  );
}
