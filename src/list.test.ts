import { test, expect, it, describe } from 'vitest';
import { addToList } from './list';

describe('lists', () => {
    it('should add a new item to the end of the list', () => {
        // arrange
        const newItem = 'world';
        const list = ['cucumber', 'fish'];

        const expectedResult = ['cucumber', 'fish', 'world'];

        // act
        const result = addToList(list, newItem);
        //assert
        //
        expect(result).toEqual(expectedResult);
    });

    it('should not mutate the original list', () => {
        const newItem = 'world';
        const list = ['cucumber', 'fish'];

        const expectedResult = ['cucumber', 'fish', 'world'];

        const result = addToList(list, newItem);

        expect(list).not.contain('world');
        expect(list).toHaveLength(2);
    });
});
