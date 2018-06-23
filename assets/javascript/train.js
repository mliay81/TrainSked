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

    //   Ha, this works and is pushing to the DB.
      database.ref().push({
          trainName: trainName,
          trainDestination: trainDestination,
          trainFrequency: trainFrequency,
          firstTrain: firstTrain
        //   nextArrival: nextArrival
        //   minutesAway: minutesAway

        
        })
       // Here it doesn't do anything: return false
  })
  
//   Here it fails: return false
  database.ref().on("value", function(childSnapshot) {
   
      console.log(childSnapshot.val())
      var data = childSnapshot.val()
      for (var trainData in data) {
          console.log(trainData)
        $(".table > tbody").append("<tr><td>" + data[trainData].trainName + "</td><td>" + data[trainData].trainDestination + "</td><td>"+ data[trainData].trainFrequency + "</td><td>" + data[trainData].firstTrain + " mins" + "</td>")
      }
      
  })

//   I've tried:
// return false and it kept things from populating at all; or just didn't do anything, depending on placement
// .clear() just threw an error and said it wasn't a function, then doesn't display anything
// .empty() clears it after Submit


// I'm not a Time Lord.
// I thought this made sense, but it won't do anything.

var parsed = parseInt(trainFrequency = $("#frequencySubmit").val().trim())
     console.log("parsed: " + parsed)

        var diffTime = moment().diff(moment.unix(parsed), "minutes")
		var timeRemainder = moment().diff(moment.unix(firstTrain), "minutes") % parsed
		var minutes = parsed - timeRemainder
		var nextTrainArrival = moment().add(minutes, "m").format("hh:mm A")
		
        // Time testing
        
        // This is just logging NaN
        console.log("minutes: " + minutes)
        
        // This is just logging the current time
        console.log("nextTrainArrival: " + nextTrainArrival)
        
        // This is also just logging the current time
        console.log(moment().format("hh:mm A"))
        
        // Just logging NaN
        console.log("timeRemainder: " + timeRemainder)
        
        // Unix time?
        console.log(moment().format("X"))

        // Also just NaN
        console.log("diffTime: " + diffTime)


// on submit, empty table, then append everything

















});