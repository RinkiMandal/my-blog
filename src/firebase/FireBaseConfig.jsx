import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfkHCrOJdXoQ1s8v57iUj0BfD94Je1VNw",
  authDomain: "myblog-43608.firebaseapp.com",
  projectId: "myblog-43608",
  storageBucket: "myblog-43608.appspot.com",
  messagingSenderId: "805229821236",
  appId: "1:805229821236:web:c54365cf3e0fdb604ff961"
};


const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { fireDB, auth, storage };