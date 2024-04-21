import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBtszhaIOn-8uDssIstE13N2jyucYwqo1Q",
  authDomain: "fir-form-da9f2.firebaseapp.com",
  databaseURL:
    "https://fir-form-da9f2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-form-da9f2",
  storageBucket: "fir-form-da9f2.appspot.com",
  messagingSenderId: "504389083445",
  appId: "1:504389083445:web:8790ff97c9e6718283ec7c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
