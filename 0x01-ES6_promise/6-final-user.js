// eslint-disable-next-line import/extensions
import signUpUser from './4-user-promise.js';
// eslint-disable-next-line import/extensions
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signup = await signUpUser(firstName, lastName)
    .then((data) => ({ status: 'fulfilled', value: data }))
    .catch((err) => ({ status: 'rejected', value: err }));
  const photo = await uploadPhoto(fileName)
    .then((data) => ({ status: 'fulfilled', value: data }))
    .catch((err) => ({ status: 'rejected', value: err.toString() }));

  return [signup, photo];
}
