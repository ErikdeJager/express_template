/**
 * Returns the number of digits in a given number
 *
 * @param {number} num - The number to find the number of digits for
 * @returns {number} The number of digits in the given number
 *
 * @example
 * digitLength(123) // returns 3
 * digitLength(10001) // returns 5
 */
export function digitLength(num: number) {
    return num.toString().length
}