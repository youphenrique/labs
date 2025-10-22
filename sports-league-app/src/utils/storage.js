/**
 * Set localStorage item
 * @param {string} key
 * @param {string|object} item
 */
export function setStorageItem(key, item) {
  window.localStorage.setItem(key, typeof item === "string" ? item : JSON.stringify(item));
}

/**
 * Get localStorage item
 * @param {string} key
 * @param {boolean} parse
 * @returns {null|string}
 */
export function getStorageItem(key, parse = false) {
  const value = window.localStorage.getItem(key);
  return parse && value ? JSON.parse(value) : value;
}
