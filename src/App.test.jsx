import {describe , it , expect} from 'vitest';




describe('Something truthy and falsey', () => {
    it('True to be true', () => {
        expect(true).toBe(true);
    })


    it('false to be false', () => {
        expect(false).toBe(false);
    })
})