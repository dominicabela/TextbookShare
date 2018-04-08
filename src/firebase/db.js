import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const doCreateBook = (ISBN, price) =>
  db.ref(`books/${ISBN}`).set({
    price,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const onceGetBooks = () =>
  db.ref('books').once('value');

// Other Entity APIs ...
// Books API should go here
