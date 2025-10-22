import { AUTH_TOKEN } from "./constants";
import { getStorageItem } from "./storage";

/**
 * Get auth token from localStorage
 * @returns {string|null}
 */
export function getAuthToken() {
  return getStorageItem(AUTH_TOKEN);
}
