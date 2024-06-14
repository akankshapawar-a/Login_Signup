// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider ,signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCFYLhj0-864mS2H53a3RcHeNiPxgVTedU",
  authDomain: "reactjs-dd3e9.firebaseapp.com",
  projectId: "reactjs-dd3e9",
  storageBucket: "reactjs-dd3e9.appspot.com",
  messagingSenderId: "702129511741",
  appId: "1:702129511741:web:c327a82a575c781f7f3954"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)

const provider=new GoogleAuthProvider()


export const signInWithGoogle = () => {
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        resolve(result); 
      })
      .catch((error) => {
        console.log(error);
        reject(error); 
      });
  });
};
