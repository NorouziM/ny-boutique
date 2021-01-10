import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDQWGf7WQS185rCp2_-Zko24cTyCQnPHcw",
  authDomain: "ny-boutique.firebaseapp.com",
  databaseURL:
    "https://ny-boutique-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ny-boutique",
  storageBucket: "ny-boutique.appspot.com",
  messagingSenderId: "718445559882",
  appId: "1:718445559882:web:b3bc634164e4045d5d66b3",
  measurementId: "G-NGXT2SR1T0",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized
}
firebase.analytics();
export const auth = firebase.auth();
export const db = firebase.firestore();

export const createUser = async (user, additionalData) => {
  if (!user) return;

  const { displayName, email } = user;

  const userRef = db.doc(`users/${user.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    var createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  return userRef;
};

export const addShopDataToDB = async (collectionKey, collectionsToAdd) => {
  const batch = db.batch();

  collectionsToAdd.forEach((itemsToAdd) => {
    const collectionRef = db.collection(collectionKey);
    const docRef = collectionRef.doc(itemsToAdd.title);
    batch.set(docRef, itemsToAdd);
  });
  return batch.commit();
};

const provider = new firebase.auth.GoogleAuthProvider();
export const signinWithGoogle = () => auth.signInWithPopup(provider);
