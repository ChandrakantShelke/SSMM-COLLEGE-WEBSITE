// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC29cWk6Xl-tM-sGkeeuagYLIClUP-QVA",
  authDomain: "egdb-f23fd.firebaseapp.com",
  projectId: "egdb-f23fd",
  storageBucket: "egdb-f23fd.appspot.com",
  messagingSenderId: "682751326505",
  appId: "1:682751326505:web:71502f6c50ff263077df38",
  measurementId: "G-ZG2B67V984"
};

// use a different config for NodeJS, normal doesn't work

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

