

class Store {
    constructor() {
      this.map = null;
  
      this.map = new HashMap();
    }
     /**
     * Insert a key into the Store.
     * If the key is already in the store, its value is incremented,
     * indicating the frequency that the key has been added to the store.
     *
     * @param key - the key to insert
     *
     *     If called in this succession:
     *     "bhietsch"
     *     "ottwiz"
     *     "ottwiz"
     *
     *     The map will contain:
     *     "bhietsch" 1
     *     "ottwiz"   2
     *
     */
    addToStore(key) {
      if (this.map.containsKey(key)) {
        let num = this.map.get(key);
        this.map.replace(key, num + 1);
      } else {
        this.map.put(key, 1);
      }
    }

    /**
     * Transform the Store into a
     * @return a String the contains each value, in the following format
     *
     *
     *     If the map contains:
     *     "bhietsch" 1
     *     "ottwiz"   2
     *
     *     The string produced will be:
     *     "bhietsch:1
     *     ottwiz:2
     *     "
     */
    toString() {
      let sb = new StringBuilder();
      let keys = this.map.keySet();
      for (const key of keys) {
        let value = this.map.get(key);
        sb.append(key).append(':').append(value).append('\n');
      }
      return sb.toString();
    }
  }