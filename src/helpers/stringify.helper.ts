import { defaultException } from './default_exception.helper';

/**
 * Converts JavaScript object or value to JSON string.
 * If input data is not an object or if an error occurs during stringification,
 * function returns an empty string.
 *
 * @param {any} data - JavaScript object or value to convert to a JSON string.
 * @param {number|string} [space=undefined] - A String or Number that's used to insert white space into output JSON string for readability.
 * It can be used to specify indentation level (default is `undefined`, which means no extra spaces).
 * @returns {string} JSON string representation of input data, or an empty string if input is not valid or an error occurs during stringification.
 */
export function stringify(
  data: any,
  space: number | undefined = undefined,
  errorException: (arg: Error) => void = defaultException,
): string {
  if (!data || typeof data !== 'object') {
    return '';
  }

  try {
    return JSON.stringify(data, undefined, space);
  } catch (error) {
    errorException(error as Error);
    return '';
  }
}
