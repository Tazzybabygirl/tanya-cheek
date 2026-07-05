const {
  TIME_EVENTS,
  getTimeEvent,
  padTwoDigits,
  formatClockTime
} = require("./lolcat-logic");

describe("getTimeEvent", () => {
  const times = {
    noon: 12,
    evening: 18,
    wakeUpTime: 9,
    lunchTime: 13,
    partyTime: 17,
    napTime: 15
  };

  it("returns the party event when time matches partyTime", () => {
    expect(getTimeEvent(17, times)).toBe(TIME_EVENTS.partyTime);
  });

  it("returns the nap event when time matches napTime", () => {
    expect(getTimeEvent(15, times)).toBe(TIME_EVENTS.napTime);
  });

  it("returns the lunch event when time matches lunchTime", () => {
    expect(getTimeEvent(13, times)).toBe(TIME_EVENTS.lunchTime);
  });

  it("returns the wake up event when time matches wakeUpTime", () => {
    expect(getTimeEvent(9, times)).toBe(TIME_EVENTS.wakeUpTime);
  });

  it("returns the morning event when time is before noon", () => {
    expect(getTimeEvent(8, times)).toBe(TIME_EVENTS.morning);
  });

  it("returns the evening event when time is after the evening hour", () => {
    expect(getTimeEvent(19, times)).toBe(TIME_EVENTS.evening);
  });

  it("returns the afternoon event when time falls between noon and evening with no other match", () => {
    expect(getTimeEvent(14, times)).toBe(TIME_EVENTS.afternoon);
  });

  it("prioritizes lunchTime over the plain noon/afternoon check when they collide (default app config)", () => {
    var defaultTimes = {
      noon: 12,
      evening: 18,
      wakeUpTime: 9,
      lunchTime: 12,
      partyTime: 17,
      napTime: 14
    };
    expect(getTimeEvent(12, defaultTimes)).toBe(TIME_EVENTS.lunchTime);
  });
});

describe("padTwoDigits", () => {
  it("prefixes a zero for single digit values", () => {
    expect(padTwoDigits(5)).toBe("05");
    expect(padTwoDigits(0)).toBe("00");
  });

  it("leaves double digit values unchanged", () => {
    expect(padTwoDigits(45)).toBe("45");
    expect(padTwoDigits(10)).toBe("10");
  });
});

describe("formatClockTime", () => {
  it("formats a morning time as AM without altering the hour", () => {
    expect(formatClockTime(9, 5, 3, 12)).toBe("9:05:03 AM!");
  });

  it("formats noon as 12 PM", () => {
    expect(formatClockTime(12, 0, 0, 12)).toBe("12:00:00 PM!");
  });

  it("converts afternoon hours to 12-hour PM format", () => {
    expect(formatClockTime(13, 45, 30, 12)).toBe("1:45:30 PM!");
    expect(formatClockTime(23, 9, 9, 12)).toBe("11:09:09 PM!");
  });

  it("displays midnight hour as 0 AM (pre-existing app behavior, not converted to 12)", () => {
    expect(formatClockTime(0, 0, 0, 12)).toBe("0:00:00 AM!");
  });
});
