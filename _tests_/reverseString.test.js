const reverse = require('./utils/reverseString.js');

test('123 to equal 321', () => {
  expect(reverse(123)).toBe("321");
});