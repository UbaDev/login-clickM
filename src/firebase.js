import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXoSNmkmUIX0sKNyNh6wK3B8W4NLT22Mg",
  authDomain: "prueb-fd56a.firebaseapp.com",
  projectId: "prueb-fd56a",
  storageBucket: "prueb-fd56a.appspot.com",
  messagingSenderId: "205338753623",
  appId: "1:205338753623:web:aa1efc5e5148461655c112",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
