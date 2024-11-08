
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACcq3X_zYAbeA0ShQzioQch-glhy9CIz4",
  authDomain: "ecotrade-40d5e.firebaseapp.com",
  projectId: "ecotrade-40d5e",
  storageBucket: "ecotrade-40d5e.firebasestorage.app",
  messagingSenderId: "997085895327",
  appId: "1:997085895327:web:b0f0841941be745e0fa0aa",
  measurementId: "G-1QVXQZQ42V"
};


const app = initializeApp(firebaseConfig);
const db =getFirestore (app);

export {db};