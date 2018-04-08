import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const doCreateBook = (id, ISBN, price) =>
  db.ref(`books/${ISBN}`).set({
    id,
    price,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

// Other Entity APIs ...
// Books API should go here
