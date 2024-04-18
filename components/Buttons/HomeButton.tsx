import React from 'react'
import { useMantineColorScheme } from '@mantine/core'
import { ActionIcon } from '@mantine/core'
import { IconHome } from '@tabler/icons-react';
import Link from 'next/link';
export default function HomeButton() {
   const { colorScheme} = useMantineColorScheme();
  return (
    <ActionIcon variant="subtle" size="input-sm">
      <Link href="/" style={{ textDecoration: 'none', color: 'black' }}>
        {colorScheme === 'dark' ? (
          <IconHome size={28} color="white" />
        ) : (
          <IconHome color="black" size={28} />
        )}
      </Link>
    </ActionIcon>
  );
}
