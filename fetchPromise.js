/*function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("peanut butter"), 1000);
  });
}

module.exports = fetchPromise;*/

const mockCallback = jest.fn((x) => 42 + x);
mockCallback(0);
mockCallback(1);
