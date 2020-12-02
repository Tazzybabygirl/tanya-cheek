var newPolitician = function (candidateName, partyColor)
  {
  var politician = {};
  politician.name = candidateName;
  politician.results = null;
  politician.votes = 0;
  politician.partyColor = partyColor;


  politician.totalVotes = function()
{
  this.votes = 0;
  for (var i = 0; i < this.results.length; i++)
  {
    this.votes = this.votes + this.results[i];
  }
  };
    return politician;
  };
  var chris = newPolitician("Christopher Columbus", [132, 17, 11]);
  var george = newPolitician("George Washington", [245, 141, 136]);

chris.results = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

george.results = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

george.results[9] = 28;
chris.results[9] = 1;
george.results[4] = 38;
chris.results[4] = 17;
george.results[43] = 27;
chris.results[43] = 11;

george.totalVotes();
chris.totalVotes();

console.log("Welcome candidate " +chris.name);
console.log(chris.results);
console.log(chris.votes);
console.log("Chris's color is: "+ chris.partyColor);

console.log("Welcome candidate " +george.name);
console.log(george.results);
console.log(george.votes);
console.log("George's color is: "+ george.partyColor);

var winner = "???";

  if (george.votes > chris.votes)
  {
    winner = george.name;
  }
else if (george.votes < chris.votes)
{
  winner = chris.name;
}
else
{
  winner = "DRAW."
}
console.log("And the Winner is..." + winner + "!!!");

var setStateResults = function (state)
{
  theStates[state].winner = null;
  if (chris.results[state] > george.results[state])
  {
    theStates[state].winner = chris;
  }
  else if (chris.results[state] < george.results[state])
  {
    theStates[state].winner = george;
  }

var stateTable = document.getElementById('stateResults');
var header = stateTable.children[0];
var body = stateTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];

stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

candidate1Name.innerText = chris.name;
candidate2Name.innerText = george.name;

candidate1Results.innerText = chris.results[state];
candidate2Results.innerText = george.results[state];

if (theStates[state].winner === null)
{
  winnersName.innerText = "DRAW";
}
  else
  {
    winnersName.innerText = theStates[state].winner.name;
  }

  var stateWinner = theStates[state].winner;
    if (stateWinner !==null)
    {
      theStates[state].rgbColor = stateWinner.partyColor;
    }
    else
    {
      theStates[state].rgbColor = [11,32,57];
    }
}


var countryTable = document.getElementById('countryResults');
var row = countryTable.children[0].children[0];
row.children[0].innerText = chris.name;
row.children[1].innerText = chris.votes;
row.children[2].innerText = george.name;
row.children[3].innerText = george.votes;
row.children[5].innerText = winner;
