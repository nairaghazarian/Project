# Project
Этот проект реализует шифр Вернама на JavaScript, позволяя пользователям шифровать и дешифровать сообщения с использованием симметричного ключа. Шифр Вернама является одним из самых простых и безопасных методов шифрования, при условии, что ключ используется только один раз и имеет такую же длину, как и сообщение.
## Использование
1. Откройте любой онлайн-компилятор JavaScript, который поддерживает асинхронный ввод, например [Repl.it](https://replit.com/languages/javascript) или [CodePen](https://codepen.io/).
2. Скопируйте и вставьте следующий код в редактор:
```javascript
// Функция для шифрования и дешифрования с использованием шифра Вернама
function vernamCipher(message, key) {
    if (message.length !== key.length) {
        throw new Error("Длина сообщения и ключа должна совпадать.");
    }
    
    let result = '';
    
    // Применяем XOR между символами сообщения и ключа
    for (let i = 0; i < message.length; i++) {
        const messageChar = message.charCodeAt(i);
        const keyChar = key.charCodeAt(i);
        const encryptedChar = messageChar ^ keyChar; // XOR
        result += String.fromCharCode(encryptedChar);
    }
    
    return result;
}
// Функция для чтения данных из стандартного ввода
async function main() {
    const message = await readInput("Введите сообщение для шифрования: ");
    const key = await readInput("Введите ключ (должен быть такой же длины, как и сообщение): ");
    
    if (message.length !== key.length) {
        console.error("Ошибка: Длина ключа должна совпадать с длиной сообщения.");
    } else {
        const encryptedMessage = vernamCipher(message, key);
        console.log("Зашифрованное сообщение:", encryptedMessage);
        
        const decryptedMessage = vernamCipher(encryptedMessage, key);
        console.log("Расшифрованное сообщение:", decryptedMessage);
    }
}
// Запуск основной функции
main().catch(err => console.error(err));

3.Запустите код в онлайн-компиляторе.
4.Введите сообщение и ключ, когда будет предложено. Обратите внимание, что длина ключа должна совпадать с длиной сообщения.
5.После шифрования программа выведет зашифрованное сообщение и расшифрованное сообщение (которое должно совпадать с оригинальным).

Ограничения
Длина ключа должна совпадать с длиной сообщения.
Ключ должен быть случайным и использован только один раз для обеспечения безопасности.

