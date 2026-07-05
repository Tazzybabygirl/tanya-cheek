var TIME_EVENTS = {
	partyTime: {
		image:
			"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg",
		messageText: "IZ PARTEE TIME!!"
	},
	napTime: {
		image:
			"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg",
		messageText: "IZ NAP TIME..."
	},
	lunchTime: {
		image:
			"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg",
		messageText: "IZ NOM NOM NOM TIME!!"
	},
	wakeUpTime: {
		image:
			"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg",
		messageText: "IZ TIME TO GETTUP."
	},
	morning: {
		image:
			"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg",
		messageText: "Good morning!"
	},
	evening: {
		image:
			"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg",
		messageText: "Good Evening!"
	},
	afternoon: {
		image:
			"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg",
		messageText: "Good afternoon!"
	}
};

var getTimeEvent = function (time, times) {
	var key;
	if (time == times.partyTime) {
		key = "partyTime";
	} else if (time == times.napTime) {
		key = "napTime";
	} else if (time == times.lunchTime) {
		key = "lunchTime";
	} else if (time == times.wakeUpTime) {
		key = "wakeUpTime";
	} else if (time < times.noon) {
		key = "morning";
	} else if (time > times.evening) {
		key = "evening";
	} else {
		key = "afternoon";
	}
	return TIME_EVENTS[key];
};

var padTwoDigits = function (value) {
	return value < 10 ? "0" + value : "" + value;
};

var formatClockTime = function (hours, minutes, seconds, noon) {
	var meridian = "AM";
	var displayHours = hours;

	if (hours >= noon) {
		meridian = "PM";
	}
	if (hours > noon) {
		displayHours = hours - 12;
	}

	return (
		displayHours +
		":" +
		padTwoDigits(minutes) +
		":" +
		padTwoDigits(seconds) +
		" " +
		meridian +
		"!"
	);
};

if (typeof module !== "undefined" && module.exports) {
	module.exports = {
		TIME_EVENTS: TIME_EVENTS,
		getTimeEvent: getTimeEvent,
		padTwoDigits: padTwoDigits,
		formatClockTime: formatClockTime
	};
}
