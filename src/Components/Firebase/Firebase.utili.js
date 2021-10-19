import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const App = {
  apiKey: "AIzaSyDstOMmY4JUb56xZHHbUiPZbkYTVLktpXs",
  authDomain: "e-clone-39043.firebaseapp.com",
  databaseURL: "https://e-clone-39043-default-rtdb.firebaseio.com",
  projectId: "e-clone-39043",
  storageBucket: "e-clone-39043.appspot.com",
  messagingSenderId: "592645641658",
  appId: "1:592645641658:web:904145fccba541da983983",
};

firebase.initializeApp(App);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
