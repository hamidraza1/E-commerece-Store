import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyBZCZ3KJyuaAOAG04vJEouMaKkMDXbjddU',
  authDomain: 'baylor-bf5ed.firebaseapp.com',
  databaseURL: 'https://baylor-bf5ed.firebaseio.com',
  projectId: 'baylor-bf5ed',
  storageBucket: 'baylor-bf5ed.appspot.com',
  messagingSenderId: '567979480423',
  appId: '1:567979480423:web:daceb17a0a12c5386ccbc2',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
