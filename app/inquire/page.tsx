import React from 'react';
import { InquireForm } from '@/components/Inquire/InquireForm';

export default async function page() {
  async function submit(email: string, painting: string, name: string, text: string) {
    'use server';

    const response = await fetch(
      `${process.env.URL}/api/inquire/${email}/${painting}/${name}/${text}`,
      {
        method: 'POST',
      }
    );
    const res = await response.json();

    return res;
  }

  return (
    <div className="FadeMeIn">
      <InquireForm submit={submit} />
    </div>
  );
}
