'use client';

import { useRef, useState } from 'react';
import { Text, Title, SimpleGrid, TextInput, Textarea, Button, Group } from '@mantine/core';
import { ContactIconsList } from '../Inquire/InquireIcons';
import classes from '../Inquire/Inquire.module.css';

export function MessageForm(props: any) {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [success, setSuccess] = useState('');
  const [message, setMessage] = useState('');
  const [enabled, setEnabled] = useState(true);

  const secureSubmit = async () => {
    const email = emailRef.current?.value;
    const name = nameRef.current?.value;
    const text = messageRef.current?.value;

    const res = await props.submit(email, name, text);

    setSuccess(res.success);
    setMessage(res.statusText);
    setEnabled(false);
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
            placeholder="How do I get involved with Metin's charity?"
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group justify="flex-end" mt="md">
            <Text size="md" style={{ color: success === 'success' ? 'green' : 'red' }}>
              {message && message}
            </Text>
            <Button
              className={classes.control}
              disabled={!enabled}
              onClick={() => {
                secureSubmit();
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
