
import * as firebaseClient from 'firebase/app';
import 'firebase/auth';

if (typeof window !== 'undefined' && !firebaseClient.apps.length) {
  const CLIENT_CONFIG = {
    apiKey: "AIzaSyB2KSK1MklQuIadrWY3rWBlMbzvp9Fdj-U",
    authDomain: "serverless-application-dd27f.firebaseapp.com",
    databaseURL: "https://serverless-application-dd27f.firebaseio.com",
    projectId: "serverless-application-dd27f",
    storageBucket: "serverless-application-dd27f.appspot.com",
    messagingSenderId: "716518969771",
    appId: "1:716518969771:web:1acd45c62a61c61d8d02ee",
    measurementId: "G-8WWSWZEFB1"
  };

  firebaseClient.initializeApp(CLIENT_CONFIG);
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
  window.firebase = firebaseClient;
}

export { firebaseClient };