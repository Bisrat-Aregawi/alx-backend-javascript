// eslint-disable-next-line import/extensions
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((res) => {
      /* eslint-disable no-console */
      console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
  /* eslint-disable no-console */
}
