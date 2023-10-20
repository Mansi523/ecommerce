import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDNre2blwCWIwErP8h80CR0Y1RjoX4MRJ8",
  authDomain: "ecommerce-55e3f.firebaseapp.com",
  projectId: "ecommerce-55e3f",
  storageBucket: "ecommerce-55e3f.appspot.com",
  messagingSenderId: "306849406442",
  appId: "1:306849406442:web:9c2fe5e8b7b288460ae693"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
export {app,db,auth};