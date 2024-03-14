// Function to calculate time based on distance and pace
function calculateTime() {
    var distance = parseFloat(document.getElementById("distanceInput").value);
    var pace = document.getElementById("paceInput").value;

    // Convert pace to seconds per meter
    var paceInSeconds = convertPaceToSecondsPerMeter(pace);

    // Calculate time in seconds
    var timeInSeconds = distance * paceInSeconds;

    // Convert time to HH:MM:SS format
    var timeFormatted = convertSecondsToHMS(timeInSeconds);

    displayResult("Time: " + timeFormatted);
}

// Function to calculate distance based on time and pace
function calculateDistance() {
    var time = document.getElementById("timeInput").value;
    var pace = document.getElementById("paceInput").value;

    // Convert pace to seconds per meter
    var paceInSeconds = convertPaceToSecondsPerMeter(pace);

    // Convert time to total seconds
    var timeInSeconds = convertTimeToSeconds(time);

    // Calculate distance in meters
    var distance = timeInSeconds / paceInSeconds;

    displayResult("Distance: " + distance.toFixed(2) + " meters");
}

// Function to calculate pace based on distance and time
function calculatePace() {
    var distance = parseFloat(document.getElementById("distanceInput").value);
    var time = document.getElementById("timeInput").value;

    // Convert time to total seconds
    var timeInSeconds = convertTimeToSeconds(time);

    // Calculate pace in seconds per meter
    var paceInSeconds = timeInSeconds / distance;

    // Convert pace to MM:SS per km format
    var paceFormatted = convertSecondsPerMeterToPace(paceInSeconds);

    displayResult("Pace: " + paceFormatted + " per kilometer");
}

// Function to convert pace from MM:SS per km to seconds per meter
function convertPaceToSecondsPerMeter(pace) {
    var paceParts = pace.split(":");
    var minutes = parseInt(paceParts[0]);
    var seconds = parseInt(paceParts[1]);

    // Convert pace to seconds per meter
    return (minutes * 60 + seconds) / 1000;
}

// Function to convert seconds to HH:MM:SS format
function convertSecondsToHMS(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var remainingSeconds = seconds % 60;

    return pad(hours) + ":" + pad(minutes) + ":" + pad(remainingSeconds);
}

// Function to convert time in HH:MM:SS format to total seconds
function convertTimeToSeconds(time) {
    var timeParts = time.split(":");
    var hours = parseInt(timeParts[0]);
    var minutes = parseInt(timeParts[1]);
    var seconds = parseInt(timeParts[2]);

    // Convert time to total seconds
    return hours * 3600 + minutes * 60 + seconds;
}

// Function to convert pace from seconds per meter to MM:SS per km format
function convertSecondsPerMeterToPace(secondsPerMeter) {
    var paceInSeconds = secondsPerMeter * 1000; // Convert to seconds per kilometer
    var minutes = Math.floor(paceInSeconds / 60);
    var seconds = Math.round(paceInSeconds % 60);

    return pad(minutes) + ":" + pad(seconds);
}

// Function to display the result
function displayResult(result) {
    document.getElementById("result").innerHTML = result;
}

// Function to pad single digits with leading zero
function pad(num) {
    return (num < 10) ? "0" + num : num;
}
