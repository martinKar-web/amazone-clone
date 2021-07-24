import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAvN0w8EDkyo_xgInlq763IsIG-1_MIwQA',
  authDomain: 'clone-2ca52.firebaseapp.com',
  projectId: 'clone-2ca52',
  storageBucket: 'clone-2ca52.appspot.com',
  messagingSenderId: '578541027497',
  appId: '1:578541027497:web:1b85a6a7f78a49209429b8',
  measurementId: 'G-E5ZWL42RSM',
};

// initialise firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
