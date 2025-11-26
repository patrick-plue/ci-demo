export function add(a: number | string, b: number | string) {
    if (typeof a === 'string') a = Number(a);
    if (typeof b === 'string') b = Number(b);

    if (isNaN(b) || isNaN(a))
        throw new Error('one or bothe arguments are not a number');

    return a + b;
}
