import { getApp, getApps } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCkkRrd0DUZqdlHew7PBX8YZUBPFxX_seY",
  authDomain: "delivery-130b6.firebaseapp.com",
  databaseURL:
    "https://delivery-130b6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "delivery-130b6",
  storageBucket: "delivery-130b6.appspot.com",
  messagingSenderId: "49143041746",
  appId: "1:49143041746:web:032876265c8246cfaba70b",
  measurementId: "G-YDMX99HRVF",
};

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
