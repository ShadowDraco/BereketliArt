import React from 'react';

import Link from 'next/link';
import Image from 'next/Image';

import { Tooltip } from '@mantine/core';

export default function LazyImage(props: any) {
  return (
    <Tooltip label={props.caption} key={props.caption}>
      {props.noLink ? (
        <Image
          className="LazyImage"
          src={props.src}
          width={props.width}
          height={props.height}
          alt={props.alt}
          style={{
            borderRadius: 10,
            objectFit: 'cover',
          }}
          layout="responsive"
        />
      ) : (
        <Link href={`/works/${props.url}`}>
          <Image
            className="LazyImage"
            src={props.src}
            width={props.width}
            height={props.height}
            alt={props.alt}
            style={{
              borderRadius: 10,
              objectFit: 'cover',
            }}
            layout="responsive"
          />
        </Link>
      )}
    </Tooltip>
  );
}
