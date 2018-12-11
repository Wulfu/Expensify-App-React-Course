import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyCZ9Ngwivc0muGMJLakkXsTSMDRyc7P8h0",
  authDomain: "react-tutorial-8bc3b.firebaseapp.com",
  databaseURL: "https://react-tutorial-8bc3b.firebaseio.com",
  projectId: "react-tutorial-8bc3b",
  storageBucket: "react-tutorial-8bc3b.appspot.com",
  messagingSenderId: "45630633985"
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });
//
// database.ref('expenses').push({
//   description: 'niggas',
//   amount: 20,
//   createdAt: 1239873456512
// });