import firebase from './config';
import { auth, firestore } from './config';

/**
 * * GOOGLE ACCOUNT SIGN IN STRATEGY
 */
export const signInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  await auth.signInWithPopup(provider);
};

/**
 * * CREATE USER WITH EMAIL AND PASSWORD SIGN UP
 */
// export const createUserWithEmailAndPassword = async (displayName, email, password) => {
//   const { user } = await auth.createUserWithEmailAndPassword(email, password);

//   await user.updateProfile({
//     displayName,
//   });

//   console.log(user);
//   return user;
// };

/**
 * * STORING USER INFO FROM AUTH INTO FIRESTORE
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

/**
 * * SIGNING OUT
 */
export const signOut = () => {
  auth.signOut();
};
