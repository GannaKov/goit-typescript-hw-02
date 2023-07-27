/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<TKey, TValue> {
  key: TKey;
  value: TValue;
}

let A: KeyValuePair<string, number> = { key: "10", value: 10 };
export {};
