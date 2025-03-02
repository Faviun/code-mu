// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

const function1 = (a) => {
    if (a < 0) {
        console.log("Отрицательное");
    } else {
        console.log("Положительное");
    }
};

function1(1);

// Дана строка. Выведите в консоль длину этой строки.

const function2 = (str) => {
    console.log("Длина строки - " + str.length);
};

function2("Hello");

// Дана строка. Выведите в консоль последний символ строки.

const function3 = (str) => {
    console.log("Последний символ строки - " + str[str.length - 1]);
};

function3("Hello");

// Дано число. Проверьте, четное оно или нет.

const function4 = (a) => {
    if (a % 2 === 0) {
        console.log("Четное");
    } else {
        console.log("Нечетное");
    }
};

function4(2);
function4(3);

// Даны два слова. Проверьте, что первые буквы этих слов совпадают.

const function5 = (str1, str2) => {
    if (str1[0] === str2[0]) {
        console.log("Первые буквы совпадают");
    } else {
        console.log("Первые буквы не совпадают");
    }
};

function5("Hello", "World");

// Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

const function6 = (str) => {
    if (str[str.length - 1] === "ь") {
        console.log("Предпоследняя буква - " + str[str.length - 2]);
    } else {
        console.log("Последняя буква - " + str[str.length - 1]);
    }
};

function6("Приветь");
