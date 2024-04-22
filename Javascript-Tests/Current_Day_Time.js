// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

var today = new Date();

var day = today.getDay();

// For Day

var dayList = [ 'Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log("Today is :" + '' + dayList[day] + '.');


// For Time

var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();

var perpand = (hour >= 12 ) ? " PM " : " AM ";

hour = (hour >= 12) ? hour - 12 : hour;

console.log("Current Time is : " + hour + perpand + ":" + minutes + ":" + seconds);