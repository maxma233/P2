

class Parser {
  constructor(store) {
    this.store = store; // Pass the store as a parameter
  
  }

  /**
   * The parse method recursively traverses the JSON and adds values with the given tag to the store.
   * @param {object} obj - The JSON object to parse.
   * @param {string} tag - The tag to search for.
   */
  parseFunction(obj, tag) {
    if (typeof obj === 'object') {
      for (const key in obj) {
        if (key === tag) {
          this.store.addToStore(obj[key]);
        } else  {
          this.parseFunction(obj[key], tag); // Recursively traverse the JSON
        }
      }
    }
    else if (Array.isArray(obj)) {
      for (const item of obj) {
        this.parseFunction(item, tag); // Recursively traverse each element in the array
      }
    }
  
  }


}

// Export the Parser class
module.exports = Parser;