import { defaultException } from './default_exception.helper';

/**
 * Parses JSON string and returns corresponding JavaScript object.
 * If input data is not a valid JSON string or if an error occurs during parsing,
 * function returns provided default value.
 *
 * @param {string} data - JSON string to parse.
 * @param {any} [defaultValue=undefined] - Default value to return if parsing fails or input is invalid.
 * @returns {any} Parsed JavaScript object, or default value if parsing fails or input is not a valid JSON string.
 */
export function parse(
  data: any,
  defaultValue: any = undefined,
  errorException: (arg: Error) => void = defaultException,
): any {
  if (!data || typeof data !== 'string') {
    return defaultValue;
  }
  try {
    return JSON.parse(data);
  } catch (error) {
    errorException(error as Error);
    return defaultValue;
  }
}
