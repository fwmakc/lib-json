import { stringify } from '../helpers/stringify.helper';
import testCases from './stringify.cases';

describe('stringify from json', () => {
  testCases.forEach(({ data, ref, spaces, displayValue }) => {
    describe('Преобразовываем объект в строку', () => {
      const result = stringify(data, spaces);

      it(`${displayValue} -> ${ref}`, () => {
        expect(result).toBe(ref);
      });
    });
  });
});
