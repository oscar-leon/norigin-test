export const isCurrentTime = (now: Date, date: Date) =>
    now.getDay() === date.getDay() && now.getHours() === date.getHours() && now.getMinutes() === date.getMinutes();
