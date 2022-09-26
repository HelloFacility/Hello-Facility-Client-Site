// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuhP2BkNziVlZNwXCSZNAndx4L4mioIKM",
  authDomain: "hello-facility-bd.firebaseapp.com",
  projectId: "hello-facility-bd",
  storageBucket: "hello-facility-bd.appspot.com",
  messagingSenderId: "846365497495",
  appId: "1:846365497495:web:f5af987bba2e2a75f1f1d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth (app)
export const storage = getStorage(app);
export default auth;