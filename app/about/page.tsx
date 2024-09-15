'use client';

import React from 'react';

import { HeroTitle } from '../../components/About/HeroTitle';
import { GridAsymmetrical } from '@/components/About/GridAsymmetrical';

export default function page() {
  return (
    <div className=" FadeMeIn">
      <HeroTitle />
      <GridAsymmetrical />
    </div>
  );
}
