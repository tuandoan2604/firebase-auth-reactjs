import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "dotenv/config";

// const firebaseConfig = {
//   apiKey: "AIzaSyCoZWBKJ3GYHA83MkHgAI-VV5NZMN3_HNg",
//   authDomain: "nha-hat.firebaseapp.com",
//   projectId: "nha-hat",
//   storageBucket: "nha-hat.appspot.com",
//   messagingSenderId: "575335041540",
//   appId: "1:575335041540:web:146b3cb84633599a690351",
//   measurementId: 'G-WN0QK8HWG4'
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
