import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBPqdbyKPq-Ay5J_a2YGwMF-i-m074sBvo",
    authDomain: "fantqw2gv3.firebaseapp.com",
    projectId: "fantqw2gv3",
    storageBucket: "fantqw2gv3.appspot.com",
    messagingSenderId: "205303446139",
    appId: "1:205303446139:web:46fcfa5c40e03d454b00de",
    measurementId: "G-38TSV9FRNG"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);

// Експортуємо сервіси, які потрібні
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
