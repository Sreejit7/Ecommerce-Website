import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAln-lVdCG-uHPHUGVNp1UM9YDKY6OvHmg",
  authDomain: "ecommerce-website-f8cb6.firebaseapp.com",
  databaseURL: "https://ecommerce-website-f8cb6.firebaseio.com",
  projectId: "ecommerce-website-f8cb6",
  storageBucket: "ecommerce-website-f8cb6.appspot.com",
  messagingSenderId: "532707057906",
  appId: "1:532707057906:web:b0868cfedac0c04c1a306b",
  measurementId: "G-CFT14DVKQ8"
};
  //initializes firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  //initializes firestore(real time DB)

 export const db= firebaseApp.firestore();

 export const auth= firebaseApp.auth();

 export const storage=firebaseApp.storage();

