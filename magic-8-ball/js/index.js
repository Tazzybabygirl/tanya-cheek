$(document).ready(function() {
	var magic8ball = {};
	$("#answer").hide();
	magic8ball.listOfAnswers = listOfAnswers;

	magic8ball.question = function(question) {
		var answer = pickAnswer(Math.random(), this.listOfAnswers);
		$("#answer").text(answer);

		console.log(question);
		console.log(answer);
	};
	var onClick = function() {
		$("#answer").hide();
		$("#8ball").attr(
			"src",
			"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png"
		);
		setTimeout(function() {
			var question = prompt("ASK A YES/NO QUESTION!");
			magic8ball.question(question);
			$("#answer").fadeIn(4000);
			$("#8ball").effect("shake");
			$("#8ball").attr(
				"src",
				"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png"
			);
		}, 500);
	};
	$("#questionButton").click(onClick);
});