import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyASLv6KeG7OuBQiEPv3eQhkMOUvXVqYh1E",
    authDomain: "linkedin-clone-839ae.firebaseapp.com",
    projectId: "linkedin-clone-839ae",
    storageBucket: "linkedin-clone-839ae.appspot.com",
    messagingSenderId: "917096503337",
    appId: "1:917096503337:web:fa0e21dc809177c9d6a438"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};