import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAng1NtdacdksgiSEtVDL65B959AyxfTQY",
  authDomain: "agno-webapp.firebaseapp.com",
  projectId: "agno-webapp",
  storageBucket: "agno-webapp.firebasestorage.app",
  messagingSenderId: "504211209734",
  appId: "1:504211209734:web:6e1caeb11cbd7d30ea8d87",
};

// Initialize Firebase
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
