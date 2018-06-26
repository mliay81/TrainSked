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
var nextTrainArrival

$("#submit").on("click", function() {
    event.preventDefault();
    
    console.log("Submit is clicked.")
      trainName = $("#nameSubmit").val().trim()
      $("#nameSubmit").val("")
      console.log(trainName)
      trainDestination = $("#destinationSubmit").val().trim()
      console.log(trainDestination)
      trainFrequency = $("#frequencySubmit").val().trim()
      console.log(trainFrequency)
      firstTrain = $("#firstTrainSubmit").val().trim()
      console.log(firstTrain)
      nextTrainArrival = moment().add(minutes, "m").format("hh:mm A")
      var minutes = parsed - timeRemainder
      var parsed = parseInt(data[trainData].trainFrequency)
      var timeRemainder = moment().diff(moment(data[trainData].firstTrain, "HH:mm"), "minutes") % parsed;
      var data = childSnapshot.val()


    //   Ha, this works and is pushing to the DB.
      database.ref().push({
          trainName: trainName,
          trainDestination: trainDestination,
          trainFrequency: trainFrequency,
          firstTrain: firstTrain,
          nextTrainArrival: nextTrainArrival

        
        })
       
  })
  

  database.ref().on("value", function(childSnapshot) {
   $(".table > tbody").html("")
      console.log(childSnapshot.val())
      var data = childSnapshot.val()
      var nextTrainArrival = moment().add(minutes, "m").format("hh:mm A")
      for (var trainData in data) {
          console.log(trainData)
        
        var parsed = parseInt(data[trainData].trainFrequency)
        var parsedFirstTrain = parseInt(data[trainData].firstTrain)
     console.log("parsed: " + parsed)

        var diffTime = moment().diff(moment.unix(parsed), "minutes")
		var timeRemainder = moment().diff(moment(data[trainData].firstTrain, "HH:mm"), "minutes") % parsed;
		var minutes = parsed - timeRemainder
        // var nextTrainArrival = moment().add(minutes, "m").format("hh:mm A")
        $(".table > tbody").append("<tr><td>" + data[trainData].trainName + "</td><td>" + data[trainData].trainDestination + "</td><td>"+ data[trainData].trainFrequency + "mins" + "</td><td>" + nextTrainArrival + "</td><td>" + minutes + "</td")

		
        // Time testing
        
        console.log("parsedFirstTrain: " + parsedFirstTrain)
        // Correct in Console, just have to push it
        console.log("minutes: " + minutes)
        
        // Correct in Console, just have to push it
        console.log("nextTrainArrival: " + nextTrainArrival)
        
        // This is also just logging the current time
        console.log(moment().format("hh:mm A"))
        
        // Just logging NaN
        console.log("timeRemainder: " + timeRemainder)
        
        // Unix time?
        console.log(moment().format("X"))

        // Also just NaN
        console.log("diffTime: " + diffTime)
      }
      
  })

//   I've tried:
// return false and it kept things from populating at all; or just didn't do anything, depending on placement
// .clear() just threw an error and said it wasn't a function, then doesn't display anything
// .empty() clears it after Submit


// I'm not a Time Lord.
// I thought this made sense, but it won't do anything.

// var parsed = parseInt(trainFrequency)
//      console.log("parsed: " + parsed)

//         var diffTime = moment().diff(moment.unix(parsed), "minutes")
// 		var timeRemainder = moment().diff(moment.unix(firstTrain), "minutes") % parsed
// 		var minutes = parsed - timeRemainder
// 		var nextTrainArrival = moment().add(minutes, "m").format("hh:mm A")
		
//         // Time testing
        
//         // This is just logging NaN
//         console.log("minutes: " + minutes)
        
//         // This is just logging the current time
//         console.log("nextTrainArrival: " + nextTrainArrival)
        
//         // This is also just logging the current time
//         console.log(moment().format("hh:mm A"))
        
//         // Just logging NaN
//         console.log("timeRemainder: " + timeRemainder)
        
//         // Unix time?
//         console.log(moment().format("X"))

//         // Also just NaN
//         console.log("diffTime: " + diffTime)


// on submit, empty table, then append everything

















});