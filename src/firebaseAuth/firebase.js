import {initializeApp} from "firebase/app";
import { getAnalytics} from "firebase/analytics";
import {getAuth} from "@firebase/auth"
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBpXyPVK6ALtlLhGZpM0Chm7NrXH2ZEMv4",
  authDomain: "reduxapp-96d12.firebaseapp.com",
  projectId: "reduxapp-96d12",
  storageBucket: "reduxapp-96d12.appspot.com",
  messagingSenderId: "807415701038",
  appId: "1:807415701038:web:a12e037474b25c7535c9bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export const db =getFirestore(app)
export {auth}
