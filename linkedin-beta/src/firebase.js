import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAbpiihrXd_A_Cf99l6SuiaQw4u-KDjs4Q",
    authDomain: "linkedin-beta.firebaseapp.com",
    projectId: "linkedin-beta",
    storageBucket: "linkedin-beta.appspot.com",
    messagingSenderId: "790046212377",
    appId: "1:790046212377:web:03d3677176c31c0c484588"
  };

//   connects to firebase
  const firebaseApp =firebase.initializeApp(firebaseConfig);
//   get db (firestore)
  const db = firebaseApp.firestore();
//   get auth from firebase
  const auth = firebase.auth;

  export {db,auth};