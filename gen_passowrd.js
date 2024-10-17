// Функция генерации паролья
function GenPassword(options) {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';

    // Собираем все возможные символы в один массив в зависимости от выбора пользователя
    let availableChars = '';

    if (options.useLowerCase) {
        availableChars += lowerCaseLetters;
    }
    if (options.useUpperCase) {
        availableChars += upperCaseLetters;
    }
    if (options.useDigits) {
        availableChars += digits;
    }
    if (options.useSpecialCharacters) {
        availableChars += specialCharacters;
    }

    // Если не выбрано ни одного типа символов
    if (availableChars.length === 0) {
        throw new Error('You must select at least one character type.');
    }

    // Генерация пароля
    let password = '';
    for (let i = 0; i < options.length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars[randomIndex];
    }

    console.log(password);
    return password;
};



// Пример использования:
const options = {
    length: 12,                // Длина пароля
    useLowerCase: true,        // Использовать нижний регистр
    useUpperCase: true,        // Использовать верхний регистр
    useDigits: true,           // Использовать цифры
    useSpecialCharacters: true // Использовать спецсимволы
}

// Функция отображения описани
function ViewDescription() {
    let str = "Use the GenPassword function call to generate a password."
    str = str + "You can set the generation conditions. length - the password length,"
    str = str + "useLowerCase (true / false) - use lowercase letters, useUpperCase (true / false)";
    str = str + "- use uppercase letters, useDigits (true / false) - use digits, useSpecialCharacters";
    str = str + "(true / false) - use special characters. Here is the translation: Use the options";
    str = str + "structure to set the generation parameters. Use the ViewDescription function to";
    str = str + "display the description.";
    str = str + "GitHub : https://github.com/rochdal/npm_exapmle.git";
    return str;
};

GenPassword(options);


module.exports = { GenPassword, ViewDescription, options };