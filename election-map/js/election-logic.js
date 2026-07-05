var newPolitician = function (candidateName, partyColor) {
  var politician = {};
  politician.name = candidateName;
  politician.results = null;
  politician.votes = 0;
  politician.partyColor = partyColor;

  politician.totalVotes = function () {
    this.votes = 0;
    for (var i = 0; i < this.results.length; i++) {
      this.votes = this.votes + this.results[i];
    }
  };
  return politician;
};

var determineWinner = function (george, chris) {
  if (george.votes > chris.votes) {
    return george.name;
  } else if (george.votes < chris.votes) {
    return chris.name;
  }
  return "DRAW.";
};

var determineStateWinner = function (chris, george, state) {
  if (chris.results[state] > george.results[state]) {
    return chris;
  } else if (chris.results[state] < george.results[state]) {
    return george;
  }
  return null;
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    newPolitician: newPolitician,
    determineWinner: determineWinner,
    determineStateWinner: determineStateWinner
  };
}
