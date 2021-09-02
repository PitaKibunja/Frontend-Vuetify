// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5hyw8Ae3JDp5C-QrkLowmhaIeEPOXOe8",
  authDomain: "todo-app-52f1e.firebaseapp.com",
  projectId: "todo-app-52f1e",
  storageBucket: "todo-app-52f1e.appspot.com",
  messagingSenderId: "784617573508",
  appId: "1:784617573508:web:e188478a05e3fee0bcc6d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
db.firestore.settings({timestampsInSnapshots: true})

export default db