import React from 'react';
import { MessageForm } from '@/components/Message/MessageForm';

export default async function page() {
  const submit = async (email: string, name: string, text: string) => {
    'use server';

    const response = await fetch(`${process.env.URL}/api/message/${email}/${name}/${text}`, {
      method: 'POST',
    });
    const res = await response.json();

    return res;
  };

  return (
    <div>
      <MessageForm submit={submit} />
    </div>
  );
}
