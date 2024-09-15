import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Analytics } from '@vercel/analytics/react';
import { theme } from '../theme';
import './globalcss.css';
import '@mantine/carousel/styles.css';
import { MainHeader } from '@/components/MainHeader/MainHeader';
import { MainFooter } from '@/components/Footers/Footer';

export const metadata = {
  title: 'The Hollywood Painter',
  description:
    "International painter Metin Bereketli's striking and unique paintings portraying the diversity and richness of human experience have helped raise precious funds in many charitable auctions and fundraisers in Hollywood and across the USA.",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <MainHeader />
          {children}
          <MainFooter />
        </MantineProvider>
        <Analytics />
      </body>
    </html>
  );
}
