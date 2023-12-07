import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const app = firebase.initializeApp({
  apiKey: "AIzaSyCgoFyWRSNGo4ZsYLMKi8WXsLJ1a9-7HOU",
  authDomain: "webprog-95d0b.firebaseapp.com",
  projectId: "webprog-95d0b",
  storageBucket: "webprog-95d0b.appspot.com",
  messagingSenderId: "639637009429",
  appId: "1:639637009429:web:bfa6a88d87420367408a1c",
  measurementId: "G-RF3RGX8BJP",
});

export const auth = app.auth();
export default app;
