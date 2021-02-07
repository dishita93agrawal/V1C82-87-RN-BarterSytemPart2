import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyC8pHCpzMeIWJzy_BAWfYRrSN7OuR2aqSM",
  authDomain: "finalbartersytem.firebaseapp.com",
  projectId: "finalbartersytem",
  storageBucket: "finalbartersytem.appspot.com",
  messagingSenderId: "773368690760",
  appId: "1:773368690760:web:333b1397c3615f979cc07d",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
