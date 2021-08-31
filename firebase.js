import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBCrLD8I5mWQ3JJhXvfLeJxU6c740vv_r0",
    authDomain: "my-test-app-29a43.firebaseapp.com",
    projectId: "my-test-app-29a43",
    storageBucket: "my-test-app-29a43.appspot.com",
    messagingSenderId: "848998702477",
    appId: "1:848998702477:web:1c207bccc0c1de84c571c4"
  };
  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth };