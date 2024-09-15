import { Box, Tooltip } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Gallery(props: any) {
  return (
    <Box className="flexbox">
      {props.images.map((item: any, index: number) => (
        <Tooltip label={item.caption}>
          <Link href={`/works/${item.url}`}>
            <Image
              className="LazyImage"
              src={item.src}
              key={index}
              width={item.width}
              height={item.height}
              alt={item.alt}
              style={{
                borderRadius: 10,
                display: 'block',
                width: '100%',
                height: '100%',
                minHeight: '400px',
                objectFit: 'cover',
              }}
            />
          </Link>
        </Tooltip>
      ))}
    </Box>
  );
}