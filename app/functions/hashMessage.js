import bcrypt from 'bcrypt';

const saltRounds = 4;

export const hashMessage = async (message) => {
  return bcrypt.hash(message, saltRounds, function (err, hash) {
    console.log('THERE WAS AN ERROR HASHING MESSAGE!', err, hash);
  });
};
