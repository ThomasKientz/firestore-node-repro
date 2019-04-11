var firebase = require("firebase");

firebase.initializeApp({
  apiKey: "AIzaSyCzRT16spzxaM62uXw2lQ48GT5zncQ8sss",
  authDomain: "issue-repro.firebaseapp.com",
  databaseURL: "https://issue-repro.firebaseio.com",
  projectId: "issue-repro",
  storageBucket: "issue-repro.appspot.com",
  messagingSenderId: "765316448809"
});

var db = firebase.firestore();
var citiesRef = db.collection("cities");

console.log("adding a doc...");

citiesRef
  .add({
    name: "Tokyo",
    date: new Date()
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);

    citiesRef
      .where("date", ">", new Date())
      .get()
      .then(() => {
        console.log("ok");
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
