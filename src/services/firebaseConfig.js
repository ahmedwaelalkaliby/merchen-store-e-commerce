import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA5wsxyzHnYKiTwPih_MSzxm1EZRnn6HFg",
  authDomain: "pull-and-bear-60342.firebaseapp.com",
  projectId: "pull-and-bear-60342",
  storageBucket: "pull-and-bear-60342.appspot.com",
  messagingSenderId: "854240651832",
  appId: "1:854240651832:web:d5b90598c47540543d94cd",
  measurementId: "G-YXP59CWT0X",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
