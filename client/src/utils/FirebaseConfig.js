import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDxv5nyPtOZNsTl7KUdO2Vkf9X_QGJlXpw",
    authDomain: "whatsapp-clone-393af.firebaseapp.com",
    projectId: "whatsapp-clone-393af",
    storageBucket: "whatsapp-clone-393af.appspot.com",
    messagingSenderId: "324909886914",
    appId: "1:324909886914:web:ea3777462c4b73fcb17a5b",
    measurementId: "G-NPD4RFEQ33"
  };

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);