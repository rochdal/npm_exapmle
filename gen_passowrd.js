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
    return "Use the GenPassword function call to generate a password. You can set the generation conditions. `length` - the password length, `useLowerCase` (true / false) - use lowercase letters, `useUpperCase` (true / false) - use uppercase letters, `useDigits` (true / false) - use digits, `useSpecialCharacters` (true / false) - use special characters."
};

    GenPassword(options);


module.exports = { GenPassword, ViewDescription, options };