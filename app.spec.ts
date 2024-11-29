import { calculateDiscount } from './src/utils';

describe('App', () => {
    it('Should return correct discount', () => {
        const discount = calculateDiscount(100, 10);
        expect(discount).toBe(10);
    });
});
