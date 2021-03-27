import Firebase from "firebase/app";

import "firebase/firestore";
import "firebase/storage";

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyDQsKp-yHVygrFvMhzt1VSBc_Y1FZPmtPo",
  authDomain: "superzorah.firebaseapp.com",
  projectId: "superzorah",
  storageBucket: 'gs://superzorah.appspot.com'
});

export const firebase = Firebase;
export const db = firebaseApp.firestore();
export const store = firebaseApp.storage();
