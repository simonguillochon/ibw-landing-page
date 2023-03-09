const MAX_DAYS: number = 365;
const MAX_HOURS: number = 24;
const MAX_MINUTES: number = 60;
const MAX_SECONDS: number = MAX_MINUTES;

const possibleDays = [...Array(MAX_DAYS + 1).keys()] as const;
export type Day = typeof possibleDays[number];

const possibleHours = [...Array(MAX_HOURS + 1).keys()] as const;
export type Hour = typeof possibleHours[number];

const possibleMinutes = [...Array(MAX_MINUTES + 1).keys()] as const;
export type Minute = typeof possibleMinutes[number];

const possibleSeconds = [...Array(MAX_SECONDS + 1).keys()] as const;
export type Second = typeof possibleSeconds[number];
