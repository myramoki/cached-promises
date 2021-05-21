class Cache {
  constructor() {
    this.store = {};
  }

  get(key) {
    return this.store[key];
  }

  put(key, value) {
    this.store[key] = value;
  }
}

export default Cache;
