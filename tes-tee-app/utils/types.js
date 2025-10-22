/**
 * @typedef {object} Shirt
 * @property {string} id
 * @property {string} color
 * @property {string} image
 * @property {string} name
 * @property {string[]} sizes
 */

/**
 * @typedef {object} Item
 * @property {string} id
 * @property {string} name
 * @property {string} image
 * @property {string} size
 * @property {number} quantity
 * @property {number} totalPrice
 */

/**
 * @typedef {object} CartProps
 * @property {Item[]} items
 * @property {function} updateItem
 * @property {function} removeItem
 * @property {function} clear
 * @property {function} onClose
 */

/**
 * @typedef {object} ModalProps
 * @property {boolean} showModal
 * @property {string} productId
 * @property {string} productImage
 * @property {string} productName
 * @property {string[]} productSizes
 * @property {function} onClickAdd
 * @property {function} closeModal
 */

/**
 * @typedef {object} MenuProps
 * @property {function} onClose
 */

/**
 * @typedef {object} FilterProps
 * @property {function} filterColor
 * @property {function} filterSize
 */

/**
 * @typedef {object} CostPriceProps
 * @property {number} units
 * @property {string} size
 * @property {function} handleChange
 */

/**
 * @typedef {object} DrawerProps
 * @property {React.ReactNode} children
 * @property {boolean} open
 * @property {string} anchor
 * @property {function} onClose
 */

/**
 * @typedef {object} HeaderProps
 * @property {React.ReactNode} children
 * @property {function} onMenuClick
 * @property {function} onSearchClick
 * @property {function} onCartClick
 */

/**
 * @typedef {object} IconButtonProps
 * @property {React.ReactNode} children
 * @property {function} onClick
 * @property {boolean} disabled
 * @property {string} label
 */

/**
 * @typedef {object} ProductProps
 * @property {React.ReactNode} children
 * @property {string} name
 * @property {string} image
 * @property {string[]} sizes
 */

/**
 * @typedef {object} SearchProps
 * @property {boolean} focused
 * @property {string} value
 * @property {function} onChange
 */
