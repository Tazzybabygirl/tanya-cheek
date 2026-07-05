const { listOfAnswers, pickAnswer } = require("./magic8ball-logic");

describe("pickAnswer", () => {
  it("picks the first answer when the random value is 0", () => {
    expect(pickAnswer(0, listOfAnswers)).toBe(listOfAnswers[0]);
  });

  it("picks the last answer just under 1", () => {
    const justUnderOne = 0.999999999;
    expect(pickAnswer(justUnderOne, listOfAnswers)).toBe(
      listOfAnswers[listOfAnswers.length - 1]
    );
  });

  it("picks a middle answer for a mid-range random value", () => {
    expect(pickAnswer(0.5, listOfAnswers)).toBe(
      listOfAnswers[Math.floor(0.5 * listOfAnswers.length)]
    );
  });

  it("never returns undefined for any value in [0, 1)", () => {
    for (let i = 0; i < 100; i++) {
      const randomValue = i / 100;
      expect(pickAnswer(randomValue, listOfAnswers)).not.toBeUndefined();
    }
  });

  it("can reach every answer in the list across the full [0, 1) range", () => {
    const reached = new Set();
    for (let i = 0; i < listOfAnswers.length * 10; i++) {
      reached.add(pickAnswer(i / (listOfAnswers.length * 10), listOfAnswers));
    }
    expect(reached.size).toBe(listOfAnswers.length);
  });
});

describe("listOfAnswers", () => {
  it("contains 21 unique, non-empty answers", () => {
    expect(listOfAnswers.length).toBe(21);
    expect(new Set(listOfAnswers).size).toBe(listOfAnswers.length);
    listOfAnswers.forEach((answer) => {
      expect(typeof answer).toBe("string");
      expect(answer.length).toBeGreaterThan(0);
    });
  });
});
