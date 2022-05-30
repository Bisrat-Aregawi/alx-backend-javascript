/**
 * 1-stdin module
 * @module 1-stdin
 */

// Set expected input buffer encoding
process.stdin.setEncoding('utf8');

// A prompt to the user to input text
process.stdout.write(
  'Welcome to Holberton School, what is your name?\n',
);

/*
 * Add a `readable` event listener on `stdin` to read the buffer
 * to a variable. Upon success write it to stdout.
 */
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk != null) process.stdout.write(`Your name is: ${chunk}`);
});

// Upon an event loop exit print a farewell mesage
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
