import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, push } from 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyAhGbuOdvoNvnkAVe-ITMvcnOpWPoukPiU",
    authDomain: "smartcart-21430.firebaseapp.com",
    databaseURL: "https://smartcart-21430-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "smartcart-21430",
    storageBucket: "smartcart-21430.appspot.com",
    messagingSenderId: "645231468541",
    appId: "1:645231468541:web:fb8b7b924c08ce99930394",
    measurementId: "G-DK1TBFFXRR"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
export { database, ref, set, push };
