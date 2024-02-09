export const dateToNumber = (date: Date | number): number =>
    typeof date === 'number' ? date : date.getTime();
