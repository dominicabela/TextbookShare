import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCnGDYNEuUcnLddY80aua3EWqH6TB_4yL8",
  authDomain: "textbookshare-6e322.firebaseapp.com",
  databaseURL: "https://textbookshare-6e322.firebaseio.com",
  projectId: "textbookshare-6e322",
  storageBucket: "textbookshare-6e322.appspot.com",
  messagingSenderId: "776441400150"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
