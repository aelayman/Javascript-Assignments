// imports
var input = require('readline-sync');


// define functions below here
var daysInMonth = function(month) {
	if (month == 4 || month == 6 || month == 9 || month == 11) {
		return 30;
	} else if (month == 2) {
		return 28; 
	} else {
		return 31;
	}
};

var obtainDates = function(datePhrase) {
	console.log("\nPlease enter " + datePhrase + ":");
	month = parseInt(input.question("What is the month (1-12)? "));
	day = parseInt(input.question("What is the day (1-" + daysInMonth(month) + ")? "));
	var absoluteDay = computeAbsoluteDay(day, month);
	console.log(month + "/" + day + " is day #" + absoluteDay + " of 365.");
	return absoluteDay;
};

var computeAbsoluteDay = function(day, month) {
	var absoluteDay = 0;

	for (var currentMonth = 1; currentMonth < month; currentMonth++) {
		absoluteDay += daysInMonth(currentMonth);
	}
	absoluteDay += day; 

	return absoluteDay;
};

var findNextBirthday = function(hoyAbsoluteDay, birthAbsoluteDay) {
	if (hoyAbsoluteDay < birthAbsoluteDay) {
		return birthAbsoluteDay - hoyAbsoluteDay;
	} else {
		var daysLeftYear = 365 - hoyAbsoluteDay;
		var totalDays = daysLeftYear + birthAbsoluteDay;
		return totalDays;
	}
};

var printNextBirthday = function(hoyAbsoluteDay, birthAbsoluteDay) {
	if (hoyAbsoluteDay == birthAbsoluteDay) {
		console.log("Happy birthday!");
	} else if (hoyAbsoluteDay == birthAbsoluteDay - 1 || (hoyAbsoluteDay == 365 && birthAbsoluteDay == 1)) {
		console.log("Wow, your birthday is tomorrow!");
	} else {
		var daysTillBirthday = findNextBirthday(hoyAbsoluteDay, birthAbsoluteDay);
		console.log("Your next birthday is in " + daysTillBirthday + " days.");
	}
};


// write "main program" below here
console.log("This program tells you how many days");
console.log("it will be until your next birthday."); 

var hoyAbsoluteDay = obtainDates("today's date");
var birthAbsoluteDay = obtainDates("your birthday");

console.log("");
printNextBirthday(hoyAbsoluteDay, birthAbsoluteDay);

console.log("\nDid you know that on April 5th, China celebrates " +
	"her Cold Food Festival throughout the country. People are " +
	"joyous and love the cold food!");

