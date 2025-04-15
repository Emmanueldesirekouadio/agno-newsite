import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAng1NtdacdksgiSEtVDL65B959AyxfTQY",
  authDomain: "agno-webapp.firebaseapp.com",
  projectId: "agno-webapp",
  storageBucket: "agno-webapp.firebasestorage.app",
  messagingSenderId: "504211209734",
  appId: "1:504211209734:web:6e1caeb11cbd7d30ea8d87",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, db, provider };
