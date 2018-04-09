import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const doCreateBook = (ISBN, price, number) =>
  db.ref(`books/${ISBN}`).set({
    price, number
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const onceGetBooks = () =>
  db.ref('books').once('value');

// Other Entity APIs ...
// Books API should go here
