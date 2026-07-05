const {
  newPolitician,
  determineWinner,
  determineStateWinner
} = require("./election-logic");

describe("newPolitician", () => {
  it("creates a politician with the given name and color", () => {
    const politician = newPolitician("Ada Lovelace", [1, 2, 3]);
    expect(politician.name).toBe("Ada Lovelace");
    expect(politician.partyColor).toEqual([1, 2, 3]);
    expect(politician.results).toBeNull();
    expect(politician.votes).toBe(0);
  });
});

describe("totalVotes", () => {
  it("sums a typical results array", () => {
    const politician = newPolitician("Ada Lovelace", [1, 2, 3]);
    politician.results = [5, 1, 7, 2, 33];
    politician.totalVotes();
    expect(politician.votes).toBe(48);
  });

  it("totals to 0 for an empty results array", () => {
    const politician = newPolitician("Ada Lovelace", [1, 2, 3]);
    politician.results = [];
    politician.totalVotes();
    expect(politician.votes).toBe(0);
  });

  it("resets votes to 0 before re-summing on repeated calls", () => {
    const politician = newPolitician("Ada Lovelace", [1, 2, 3]);
    politician.results = [10, 10];
    politician.totalVotes();
    expect(politician.votes).toBe(20);

    politician.results = [1];
    politician.totalVotes();
    expect(politician.votes).toBe(1);
  });
});

describe("determineWinner", () => {
  it("picks george when george has more votes", () => {
    const george = { name: "George Washington", votes: 100 };
    const chris = { name: "Christopher Columbus", votes: 50 };
    expect(determineWinner(george, chris)).toBe("George Washington");
  });

  it("picks chris when chris has more votes", () => {
    const george = { name: "George Washington", votes: 10 };
    const chris = { name: "Christopher Columbus", votes: 99 };
    expect(determineWinner(george, chris)).toBe("Christopher Columbus");
  });

  it("returns DRAW. when votes are equal", () => {
    const george = { name: "George Washington", votes: 42 };
    const chris = { name: "Christopher Columbus", votes: 42 };
    expect(determineWinner(george, chris)).toBe("DRAW.");
  });
});

describe("determineStateWinner", () => {
  const chris = { name: "Christopher Columbus", results: [5, 1, 7] };
  const george = { name: "George Washington", results: [4, 1, 9] };

  it("returns chris when chris's state result is higher", () => {
    expect(determineStateWinner(chris, george, 0)).toBe(chris);
  });

  it("returns george when george's state result is higher", () => {
    expect(determineStateWinner(chris, george, 2)).toBe(george);
  });

  it("returns null when the state result is tied", () => {
    expect(determineStateWinner(chris, george, 1)).toBeNull();
  });
});
