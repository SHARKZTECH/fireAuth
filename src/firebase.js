import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7_YvgEPCh0AmyZ_vEHf0uCyUZ2Xx2H5w",
  authDomain: "fireauth-fcb63.firebaseapp.com",
  projectId: "fireauth-fcb63",
  storageBucket: "fireauth-fcb63.appspot.com",
  messagingSenderId: "296873824465",
  appId: "1:296873824465:web:ffdb392471bc26064e75f0"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
