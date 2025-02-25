import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUikulVpu6nlL8Q9cJY_PwsYJhTDz7rf4",
  authDomain: "fir-login-4404d.firebaseapp.com",
  projectId: "fir-login-4404d",
  storageBucket: "fir-login-4404d.firebasestorage.app",
  messagingSenderId: "188641350785",
  appId: "1:188641350785:web:b14f80c5d58cc1a3b12980",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
