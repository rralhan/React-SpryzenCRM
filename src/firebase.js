import firebase from "firebase/app";
import {getAuth,connectAuthEmulator} from "firebase/auth"
import { getFunctions } from "firebase-functions";

const app = firebase.initializeApp({
/*   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID */

  apiKey: 'AIzaSyAzGSF7sR0eTOGOi_LiCjaajBBYqmniAKQ',
  authDomain: 'tcsfl-lms.firebaseapp.com',
  projectId: 'tcsfl-lms',
  storageBucket: 'tcsfl-lms.appspot.com',
  messagingSenderId: '942687408036',
  appId: '1:942687408036:web:acdcf2c1cb1d788cd3bb31',
  measurementId: 'G-J2F37CDHMF'
});

const fnc = getFunctions(app);
const auth = app.auth();
//connectFunctionsEmulator(fnc, "localhost", 5001);
//connectAuthEmulator(auth, "http://localhost:9099");

export {fnc, auth, app}; 




