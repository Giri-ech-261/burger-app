import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB0JM0es_YOekHhZEbTDmUdLhbBnvxTg0E',
  authDomain: 'dpf-dev.firebaseapp.com',
  databaseURL: 'https://dpf-dev-default-rtdb.firebaseio.com',
  projectId: 'dpf-dev',
  storageBucket: 'dpf-dev.appspot.com',
  messagingSenderId: '527312634082',
  appId: '1:527312634082:web:0b3a927a948a7654cd9ebb',
  measurementId: 'G-MN0XC73DS2',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
