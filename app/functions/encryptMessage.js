import crypto, { privateDecrypt, privateEncrypt } from 'crypto';

export async function encryptMessage(message) {
  const encryptionKey = process.env.MESSAGE_ENCRYPTION_KEY;
  const encrypted = privateEncrypt(encryptionKey, message);
  console.log('encrypted.');
  return encrypted;
}

export async function decryptMessage(message) {
  const encryptionKey = process.env.MESSAGE_ENCRYPTION_KEY;
  const decrypted = privateDecrypt(encryptionKey, message);
  return decrypted;
}
