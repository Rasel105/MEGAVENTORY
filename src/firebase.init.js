import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJRbdaeIFCY6bfbfbAJX4FUmL6nUzM-78",
  authDomain: "assignment-0011.firebaseapp.com",
  projectId: "assignment-0011",
  storageBucket: "assignment-0011.appspot.com",
  messagingSenderId: "881264038225",
  appId: "1:881264038225:web:3e2e6d21d1742866a70370"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;