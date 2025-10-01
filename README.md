Простая библиотека по работе с JSON.

Библиотка javascript/typescript (ES6) для node.js.

# Установка

```
npm install lib-json
```

или

```
yarn add lib-json
```

# Начало работы

Можно импортировать методы как с отдельные функции:

```
import { stringify } from 'lib-json';

const jsonString = stringify({ a: 1 });
```

или вызывать их как статические методы объекта:

```
import * as json from 'lib-json';

const jsonString = json.stringify({ a: 1 });
```

# Список методов

**parse(data, defaultValue: undefined)**

Преобразование json строки в объект.

Аргумент **data** передает строку.

Аргумент **defaultValue** необязательный. Задает значение по-умолчанию, если строка **data** пустая или является не валидной строкой json.

Есть третиий аргумент, в который можно передать функцию обработки ошибок.

**stringify(data, space: undefined)**

Преобразование объекта в json строку.

Аргумент **data** передает объект.

Аргумент **space** необязательный. Если передать число, то строка json будет отформатирована с указанным количеством пробелов.

Есть третиий аргумент, в который можно передать функцию обработки ошибок.

**fromJson**

Является алиасом метода **parse**.

**toJson**

Является алиасом метода **stringify**.

# Обработка ошибок

Основная задача библиотеки - сделать работу с json простой.

Поэтому мы включили обработчик ошибок, который по-умолчанию не прерывает выполнение, а выводит ошибку в консоль.

Вы можете переназначить обработку ошибок иным способом.

Для примера возьмем код, в котором будет переопределять функцию exceptionCallback:

```
const jsonString = 'is not valid json string';

parse(jsonString, undefined, exceptionCallback);
```

Пропустить обработку:

```
const exceptionCallback = () => {};
```

Вывести в консоль простое сообщение об ошибке:

```
function exceptionCallback (error) {
  console.log(error.message);
};
```

Выбросить исключение:

```
function exceptionCallback (error) {
  throw new Error(error);
};
```

Создать свое исключение:

```
function exceptionCallback () {
  throw new Error('invalid json');
};
```

# Лицензия

Лицензия MIT, 2025
