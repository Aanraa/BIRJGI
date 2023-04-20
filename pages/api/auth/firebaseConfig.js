import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUk4Y_DkdCYjAyAwpCWl0pwLC--rg8d3I",
  authDomain: "birjgi.firebaseapp.com",
  projectId: "birjgi",
  storageBucket: "birjgi.appspot.com",
  messagingSenderId: "677878599828",
  appId: "1:677878599828:web:c1c1d0b44760ccabe52481",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore;
const storage = getStorage;

export { app, db, storage };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
