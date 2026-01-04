const { add, subtract } = require('../src/math');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('multiply 5 * 2 to equal 10', () => {
  expect(subtract(5, 2)).toBe(10);
});
