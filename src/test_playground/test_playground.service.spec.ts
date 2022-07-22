import { add, isNull, beDefined, beThrow } from './test_playground.service';

describe('test-playground', () => {
  describe('number', () => {
    it('add', () => {
      expect(add(4, 4)).toEqual(8);
    });
  });

  describe('Truthiness', () => {
    it('case be null', () => {
      expect(isNull()).toBeNull();
    });

    it('defind or undefind', () => {
      expect(beDefined('SPACEX')).toBeDefined();
    });
  });

  describe('throw exception', () => {
    it('throw', () => {
      expect(() => beThrow()).toThrow(Error);
    });
  });
});
