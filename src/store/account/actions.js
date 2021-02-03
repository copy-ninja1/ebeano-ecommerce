import { Cookies } from "quasar";
// import { Notify } from "quasar";

// warn: Do not use arrow function
// arror functions don't bind to this

/**
 *
 * @param {object} {} - store context { commit, state }
 * @param {object} userData - user email and password
 * @returns {Promise} axios
 */
export function signup({}, userData) {
  // axios returns a promise
  return this.$axios.post("/sign-up", userData);
}

/**
 *
 * @param {object} {} - store context { commit, state }
 * @param {string} jwt - JWT Token
 */
export function saveJwtSecret({}, jwt) {
  Cookies.set("kudibase-key", jwt);
}

/**
 *
 * @param {object} {} - store context { commit, state }
 * @param {object} userData - user email and password
 * @returns {Promise} axios
 */
export function login({}, userData) {
  return this.$axios.post("/sign-in", userData);
}

/**
 *
 * @param {object} {} - store context { commit, state }
 */
export function deleteJwtSecret({}) {
  Cookies.remove("kudibase-key");
}
