import Firebase from "firebase/app";

import "firebase/firestore";
import "firebase/storage";
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyDQsKp-yHVygrFvMhzt1VSBc_Y1FZPmtPo",
  authDomain: "superzorah.firebaseapp.com",
  projectId: "superzorah",
  storageBucket: 'gs://superzorah.appspot.com'
});

export const firebase = Firebase;
export const db = firebaseApp.firestore();
export const store = firebaseApp.storage();

const ui = new firebaseui.auth.AuthUI(Firebase.auth());

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      console.log(authResult)
      console.log(redirectUrl)
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '/home',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    Firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    Firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};

ui.start('#firebaseui-auth-container', uiConfig);
