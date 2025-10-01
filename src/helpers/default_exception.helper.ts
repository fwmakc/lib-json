/**
 * Default error exception.
 * Logs provided error object to console.
 *
 * @param {Error} error - Error object to log.
 * @returns {void} This function does not return a value.
 */
export function defaultException(error: Error): void {
  console.log(error);
}
