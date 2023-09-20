

class Store {
  constructor() {
    this.map = new Map();
  }

  /**
   * Insert a key into the Store.
   * If the key is already in the store, its value is incremented,
   * indicating the frequency that the key has been added to the store.
   * @param {string} key - The key to insert.
   */
  addToStore(key) {
    if (this.map.has(key)) {
      this.map.set(key, this.map.get(key) + 1);
    } else {
      this.map.set(key, 1);
    }
  }

  /**
   * Transform the Store into a string that contains each key and its frequency.
   * @return {string} - A string in the specified format.
   */
  toString() {
    let result = '';
    for (const [key, value] of this.map.entries()) {
      result += `${key}:${value}\n`;
    }
    return result;
  }
}

// Export the Store class
module.exports = Store;