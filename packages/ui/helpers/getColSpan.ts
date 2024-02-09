import { dateToNumber } from "./dateToNumber";

export const getColSpan = (start: Date | number, end: Date | number): number =>
    ((dateToNumber(end) - dateToNumber(start)) / (1000 * 60));
