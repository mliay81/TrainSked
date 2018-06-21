$( document ).ready(function() {
    console.log( "ready!" );

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAwcCWLLgfGDnYe3RjLong-he8z2SjRMBg",
    authDomain: "trainsked.firebaseapp.com",
    databaseURL: "https://trainsked.firebaseio.com",
    projectId: "trainsked",
    storageBucket: "",
    messagingSenderId: "160246075908"
  };
  firebase.initializeApp(config);

  var database = firebase.database()
  console.log(database)

























});