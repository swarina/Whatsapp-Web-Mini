import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBL70y-SMijTyOvMAiXpbRgLwYPrJmsvtA",
  authDomain: "whatsapp-web-clone-24be9.firebaseapp.com",
  projectId: "whatsapp-web-clone-24be9",
  storageBucket: "whatsapp-web-clone-24be9.appspot.com",
  messagingSenderId: "199990225392",
  appId: "1:199990225392:web:8967747d78182cb718d535",
  measurementId: "G-YRYLC9057J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
