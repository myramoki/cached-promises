import Cache from "./Cache.js";

let cacheKeyCount = 0;

function createRandomNumber() {
  return Math.random();
}

function createRandomNumberPromise() {
  return new Promise((resolve) =>
    setTimeout(() => resolve(createRandomNumber()), 500)
  );
}

class RandomNumberCache {
  constructor() {
    this.cache = new Cache();
    this.cacheKey = Symbol(`RandomNumberPromise-${++cacheKeyCount}`);
  }

  get() {
    let promise = this.cache.get(this.cacheKey);

    if (!promise) {
      promise = createRandomNumberPromise();
      this.cache.put(this.cacheKey, promise);
    }

    return promise;
  }

  getNew() {
    let promise = createRandomNumberPromise();
    this.cache.put(this.cacheKey, promise);
    return promise;
  }
}

export default RandomNumberCache;
