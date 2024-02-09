export const numberToDate = (number: Date | number): Date =>
    typeof number === 'number' ? new Date(number) : number;
