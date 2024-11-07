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
function readInput(prompt) {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        readline.question(prompt, (input) => {
            readline.close();
            resolve(input);
        });
    });
}
// Основная функция
async function main() {
    // Ввод сообщения и ключа
    const message = await readInput("Введите сообщение для шифрования: ");
    const key = await readInput("Введите ключ (должен быть такой же длины, как и сообщение): ");
    // Проверка длины ключа
    if (message.length !== key.length) {
        console.error("Ошибка: Длина ключа должна совпадать с длиной сообщения.");
    } else {
        // Шифрование
        const encryptedMessage = vernamCipher(message, key);
        console.log("Зашифрованное сообщение:", encryptedMessage);

        // Дешифрование (используем ту же функцию, так как шифр Вернама симметричен)
        const decryptedMessage = vernamCipher(encryptedMessage, key);
        console.log("Расшифрованное сообщение:", decryptedMessage);
    }
}
// Запуск основной функции
main().catch(err => console.error(err));