m
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDtTH7cCUTt3zGNWv4X2mwJkU3H_nYm38k",
  authDomain: "election-management-95b84.firebaseapp.com",
  projectId: "election-management-95b84",
  storageBucket: "election-management-95b84.appspot.com",
  messagingSenderId: "35690645715",
  appId: "1:35690645715:web:9f5f237f3074c0bf15ec26",
  measurementId: "G-JT3WJ4TWPB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)