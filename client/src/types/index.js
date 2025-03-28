/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {number} price
 * @property {string} image
 * @property {string} category
 * @property {number} stock
 * @property {boolean} featured
 */

/**
 * @typedef {Product & { quantity: number }} CartItem
 */

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 */

/**
 * @typedef {Object} Order
 * @property {string} id
 * @property {CartItem[]} items
 * @property {number} total
 * @property {'pending' | 'confirmed' | 'delivered'} status
 * @property {string} date
 */