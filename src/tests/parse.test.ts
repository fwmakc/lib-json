import { parse } from '../helpers/parse.helper';
import testCases from './parse.cases';

describe('parse from json', () => {
  testCases.forEach(({ data, ref, defaultValue, displayValue }) => {
    describe('Парсим объект из строки', () => {
      const result = parse(data, defaultValue);
      const resultType = typeof result;

      it(`${displayValue} -> ${ref}`, () => {
        if (resultType === 'object') {
          expect(result).toEqual(ref);
        } else {
          expect(result).toBe(ref);
        }
      });
    });
  });
});
