// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import NextAuth from "next-auth";
import FirebaseAdapter from "@next-auth/firebase-adapter";
import EmailProvider from "next-auth/providers/email";
import { cert } from "firebase-admin/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUk4Y_DkdCYjAyAwpCWl0pwLC--rg8d3I",
  authDomain: "birjgi.firebaseapp.com",
  projectId: "birjgi",
  storageBucket: "birjgi.appspot.com",
  messagingSenderId: "677878599828",
  appId: "1:677878599828:web:c1c1d0b44760ccabe52481",
};

export default NextAuth({
  providers: [EmailProvider({ server: { host: process.env } })],
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
