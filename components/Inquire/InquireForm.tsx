'use client';

import { useRef, useState } from 'react';
import { Text, Title, SimpleGrid, TextInput, Textarea, Button, Group, Select } from '@mantine/core';
import { ContactIconsList } from './InquireIcons';
import classes from './Inquire.module.css';

export function InquireForm() {
  const emailRef = useRef(null);
  const selectRef = useRef(null);
  const nameRef = useRef(null);
  const messageRef = useRef(null);

  const [message, setMessage] = useState('');

  const submit = async () => {
    console.log(messageRef.current.value);
    const response = await fetch(
      `/api/inquire/${emailRef.current.value}/${selectRef.current.value}/${nameRef.current.value}/${messageRef.current.value}`,
      { method: 'POST' }
    );
    const res = await response.json();

    setMessage(res.success);
  };

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Let us know what you are looking for! We will be in touch promptly!
          </Text>

          <ContactIconsList />
        </div>
        <div className={classes.form}>
          <TextInput
            ref={emailRef}
            label="Email"
            placeholder="your@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Select
            ref={selectRef}
            required
            label="Which Piece?"
            placeholder="Hollywood 1"
            data={['Hollywood 1', 'Hollywood 2', 'BurlesqueParody', 'Other']}
            mt="md"
          />
          <TextInput
            ref={nameRef}
            required
            label="Name"
            placeholder="John Doe"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            ref={messageRef}
            required
            label="Your message"
            placeholder="How much is Hollywood 1?"
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group justify="flex-end" mt="md">
            <Text style={{ color: message === 'success' ? 'green' : 'red' }}></Text>
            <Button
              className={classes.control}
              onClick={() => {
                submit();
              }}
            >
              Send message
            </Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}
