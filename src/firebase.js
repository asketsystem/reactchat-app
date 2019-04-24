import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var config = {
    apiKey: "AIzaSyCwf42LOyV7ym0_3iNfBtB51ZczShX-FIA",
    authDomain: "reactchat-app-42b22.firebaseapp.com",
    databaseURL: "https://reactchat-app-42b22.firebaseio.com",
    projectId: "reactchat-app-42b22",
    storageBucket: "reactchat-app-42b22.appspot.com",
    messagingSenderId: "905107932189"
  };
  firebase.initializeApp(config);


  export default firebase;