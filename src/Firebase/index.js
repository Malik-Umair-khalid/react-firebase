import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  addDoc,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDA3G9Cgx510wOrV_YYKYWnymblUdu64Fc",
  authDomain: "react-firebase-19393.firebaseapp.com",
  projectId: "react-firebase-19393",
  storageBucket: "react-firebase-19393.appspot.com",
  messagingSenderId: "171129853530",
  appId: "1:171129853530:web:b70b6de39de6f116ef2a63",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export {
  db,
  auth,
  getDocs,
  query,
  where,
  serverTimestamp,
  updateDoc,
  setDoc,
  doc,
  getDoc,
  collection,
  addDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
