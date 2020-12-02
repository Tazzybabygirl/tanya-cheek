var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
var isPartyTime = false;
var partyButton = document.getElementById("partyTimeButton");
var updateClock = function() {
	var timeEventJS = document.getElementById("timeEvent");
	var lolcat = document.getElementById("lolcat");
	var image =
		"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

	if (time == partyTime) {
		image =
			"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
		messageText = "IZ PARTEE TIME!!";
	} else if (time == napTime) {
		image =
			"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
		messageText = "IZ NAP TIME...";
	} else if (time == lunchTime) {
		image =
			"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
		messageText = "IZ NOM NOM NOM TIME!!";
	} else if (time == wakeUpTime) {
		image =
			"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
		messageText = "IZ TIME TO GETTUP.";
	} else if (time < noon) {
		image =
			"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
		messageText = "Good morning!";
	} else if (time > evening) {
		image =
			"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
		messageText = "Good Evening!";
	} else {
		image =
			"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
		messageText = "Good afternoon!";
	}

	timeEventJS.innerText = messageText;
	lolcat.src = image;

	var showCurrentTime = function() {
		var clock = document.getElementById("clock");

		var currentTime = new Date();

		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();
		var meridian = "AM";

		if (hours >= noon) {
			meridian = "PM";
		}
		if (hours > noon) {
			hours = hours - 12;
		}

		if (minutes < 10) {
			minutes = "0" + minutes;
		}

		if (seconds < 10) {
			seconds = "0" + seconds;
		}

		var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

		clock.innerText = clockTime;
	};
	showCurrentTime();
};
updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);
var partyEvent = function() {
	if (isPartyTime === false) {
		isPartyTime = true;
		time = partyTime;
		partyButton.innerText = "PARTY TIME!";
		partyButton.style.backgroundColor = "#0A8DAB";
	} else {
		isPartyTime = false;
		time = new Date().getHours();
		partyButton.innerText = "PARTY OVER";
		partyButton.style.backgroundColor = "#222";
	}
};
partyButton.addEventListener("click", partyEvent);
var wakeUpEvent = function() {
	wakeUpTime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
var lunchEvent = function() {
	lunchTime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener("change", lunchEvent);
var napEvent = function() {
	napTime = napTimeSelector.value;
};
napTimeSelector.addEventListener("change", napEvent);
