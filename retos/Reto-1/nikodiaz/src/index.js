const fibonacci = (n) => {
	const sequence = [0, 1];

	if (n <= 1) return '1';

	for (let i = 1; i < n; i++) {
		sequence.push(
			sequence[sequence.length - 1] + sequence[sequence.length - 2],
		);
	}
	return sequence.slice(1).toString();
};

module.exports = fibonacci;
console.log(fibonacci(6));
