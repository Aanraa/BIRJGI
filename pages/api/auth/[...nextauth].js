// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";
// import firebase from "firebase/app";
// import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDUk4Y_DkdCYjAyAwpCWl0pwLC--rg8d3I",
//   authDomain: "birjgi.firebaseapp.com",
//   projectId: "birjgi",
//   storageBucket: "birjgi.appspot.com",
//   messagingSenderId: "677878599828",
//   appId: "1:677878599828:web:c1c1d0b44760ccabe52481",
// };

// // Initialize Firebase app
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export default NextAuth({
//   providers: [
//     Providers.Credentials({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         try {
//           const userCredential = await firebase
//             .auth()
//             .signInWithEmailAndPassword(
//               credentials.email,
//               credentials.password
//             );
//           const { user } = userCredential;
//           return Promise.resolve(user);
//         } catch (error) {
//           return Promise.reject(error);
//         }
//       },
//     }),
//   ],
// });
import Providers from "next-auth/providers";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUk4Y_DkdCYjAyAwpCWl0pwLC--rg8d3I",
  authDomain: "birjgi.firebaseapp.com",
  projectId: "birjgi",
  storageBucket: "birjgi.appspot.com",
  messagingSenderId: "677878599828",
  appId: "1:677878599828:web:c1c1d0b44760ccabe52481",
};

const options = {
  // your NextAuth options
  providers: [
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    // Add other providers you need
  ],
  adapter: FirebaseAdapter(firebaseConfig),
};

export default options;
