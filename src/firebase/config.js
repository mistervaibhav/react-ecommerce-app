import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth';

/**
 * * CONFIGURATION OBJECT FOR FIREBASE
 */
const firebaseConfig = {
  apiKey: 'AIzaSyALXjHsO4qZ_MMhTgj9_Klnl_BaBXjdQs8',
  authDomain: 'react-ecom-server.firebaseapp.com',
  databaseURL: 'https://react-ecom-server.firebaseio.com',
  projectId: 'react-ecom-server',
  storageBucket: 'react-ecom-server.appspot.com',
  messagingSenderId: '1093431363521',
  appId: '1:1093431363521:web:501c9ff983ed78e6ee9140',
};

/**
 * * INITIALIZING THE FIREBASE INSTANCE
 */
firebase.initializeApp(firebaseConfig);

/**
 * * INITIALIZING THE AUTH INSTANCE
 */
export const auth = firebase.auth();

/**
 * * INITIALIZING THE FIRESTORE INSTANCE
 */
export const firestore = firebase.firestore();

export default firebase;
