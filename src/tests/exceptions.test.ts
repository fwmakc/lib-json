import { parse } from '../helpers/parse.helper';

describe('exceptions json', () => {
  const data = 'is not valid json string';

  it('Обработаем ошибку по-умолчанию', () => {
    parse(data);
    expect(true).toBeTruthy();
  });

  it('Обработаем ошибку без вывода в консоль', () => {
    const callback = () => {};
    parse(data, undefined, callback);
    expect(true).toBeTruthy();
  });

  it('Обработаем ошибку с выводом в консоль', () => {
    const toConsole = (e: any) => {
      console.log(e.message);
    };
    parse(data, undefined, toConsole);
    expect(true).toBeTruthy();
  });

  it('Обработаем ошибку с прерыванием процесса', () => {
    let result;
    const message = 'invalid json';

    const exception = (e: any) => {
      throw new Error(message);
    };

    try {
      parse(data, undefined, exception);
    } catch (e: any) {
      result = e.message;
    }

    expect(result).toBe(message);
  });
});
