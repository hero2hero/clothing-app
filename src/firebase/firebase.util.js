import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBwFuQLePjMHDaGRBhq4xDRkc2mFNq1cDs",
    authDomain: "clothing-db-b5327.firebaseapp.com",
    databaseURL: "https://clothing-db-b5327.firebaseio.com",
    projectId: "clothing-db-b5327",
    storageBucket: "clothing-db-b5327.appspot.com",
    messagingSenderId: "246300448982",
    appId: "1:246300448982:web:a22065787f0f01cc511177"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const {displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set( {
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

