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
  firebase.app(); // if already initialized, use that one
}
firebase.analytics();
export const auth = firebase.auth();
export const db = firebase.firestore();

export const createUser = async (user) => {
  if (!user) return;
  const { displayName, email } = user;
  const userRef = db.doc(`users/${user.uid}`);
  const snapShot = await userRef.onSnapshot();
  if (!snapShot.exists) {
    try {
      userRef.set({
        displayName: displayName,
        email: email,
        createdAt: new Date(),
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
export const signinWithGoogle = () => auth.signInWithPopup(provider);
