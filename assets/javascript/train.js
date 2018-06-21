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


var trainName
var trainDestination
var trainFrequency
var firstTrain

// var newTrain = {
//     name: trainName.value,
//     destination: trainDestination.value,
//     frequency: trainFrequency.value
// }

$("#submit").on("click", function() {
    event.preventDefault();
  
    console.log("Submit is clicked.")
      trainName = $("#nameSubmit").val().trim()
      console.log(trainName)
      trainDestination = $("#destinationSubmit").val().trim()
      console.log(trainDestination)
      trainFrequency = $("#frequencySubmit").val().trim()
      console.log(trainFrequency)
      firstTrain = $("#firstTrainSubmit").val().trim()
      console.log(firstTrain)

    //   Ha, this works and is pushing to the DB.
      database.ref().push({
          trainName: trainName,
          trainDestination: trainDestination,
          trainFrequency: trainFrequency,
          firstTrain: firstTrain
          //employeeMonths: employeeMonths
        //   employeeRate: employeeRate
        })
        // This is overwriting the headers
        // $(cell0).text(trainName)
        // $("#destinationDisplay").html(trainDestination)
        // console.log(trainDestination)
        // $("#frequencyDisplay").html(trainFrequency)
        // console.log(trainFrequency)
        // $("#eMonths").html(employeeMonths)
        // $("#eRate").html(employeeRate)
  })

//   var cell0 = row.insertCell(0)




















});