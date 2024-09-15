'use client';

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      onClick={() => setColorScheme(colorScheme !== 'dark' ? 'dark' : 'light')}
      variant="subtle"
      size="input-sm"
      style={{ display: 'none' }}
    >
      {colorScheme === 'dark' ? (
        <IconSun size={28} color="white" />
      ) : (
        <IconMoon color="black" size={28} />
      )}
    </ActionIcon>
  );
}
