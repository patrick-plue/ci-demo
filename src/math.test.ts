import { describe, it, expect } from 'vitest';
import { add } from './math';

describe('math', () => {
	describe('add', () => {
		it('should add two positive numbers', () => {
			//arrange
			const a = 2;
			const b = 5;
			const expectedResult = 7;

			//act
			const result = add(a, b);

			//assert
			expect(result).toBe(expectedResult);
		});

		it('should add two negative numbers', () => {
			expect(add(-2, -3)).toBe(-5);
		});

		it('should throw an error when arguments cannot be parsed into a number', () => {
			expect(() => add('coding', 'world')).toThrow('not a number');
		});
	});
});
