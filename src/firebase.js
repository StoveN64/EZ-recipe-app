import firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA8sEG7AlGgGyL9VdyXZxgUOADFqJyUYfs",
    authDomain: "ez-recipes.firebaseapp.com",
    projectId: "ez-recipes",
    storageBucket: "ez-recipes.appspot.com",
    messagingSenderId: "659421575481",
    appId: "1:659421575481:web:993ff12b0176d0da5910e8"
  };

  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

export const signInWithGoogle = async () =>{
    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
}