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

	var timeEvent = getTimeEvent(time, {
		noon: noon,
		evening: evening,
		wakeUpTime: wakeUpTime,
		lunchTime: lunchTime,
		partyTime: partyTime,
		napTime: napTime
	});
	messageText = timeEvent.messageText;

	timeEventJS.innerText = messageText;
	lolcat.src = timeEvent.image;

	var showCurrentTime = function() {
		var clock = document.getElementById("clock");
		var currentTime = new Date();

		clock.innerText = formatClockTime(
			currentTime.getHours(),
			currentTime.getMinutes(),
			currentTime.getSeconds(),
			noon
		);
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
