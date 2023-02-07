const fibonacci = require('../src');

describe('fibonacci sequence', () => {
	test('6 values', () => {
		expect(fibonacci(6)).toBe('1,1,2,3,5,8');
	});

	test('0 value', () => {
		expect(fibonacci(0)).toBe('1');
	});

	test('1 value ', () => {
		expect(fibonacci(1)).toBe('1');
	});
});
