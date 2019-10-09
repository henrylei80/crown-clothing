import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBz5RcTOhPpMQ8FqN4eMXa5de2krP6g4Go",
  authDomain: "crown-db-2019.firebaseapp.com",
  databaseURL: "https://crown-db-2019.firebaseio.com",
  projectId: "crown-db-2019",
  storageBucket: "",
  messagingSenderId: "18088429473",
  appId: "1:18088429473:web:2515714b6c207aa424ade0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
