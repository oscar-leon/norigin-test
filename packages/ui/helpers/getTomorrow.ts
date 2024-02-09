export function getTomorrow(): Date {
    return new Date(new Date().setDate(new Date().getDate() + 1));
}
