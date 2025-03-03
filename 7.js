// Дана строка: 'abcde' Получите массив букв этой строки.

const function1 = (str) => {
    console.log(str.split(""));
};

function1("abcde"); // [ 'a', 'b', 'c', 'd', 'e' ]

// Дано некоторое число: 12345 Получите массив цифр этого числа.

const function2 = (num) => {
    console.log(num.toString().split(""));
};

function2(12345); // [ '1', '2', '3', '4', '5' ]

// Дано некоторое число: 12345 Переверните его

const function3 = (num) => {
    console.log(num.toString().split("").reverse().join(""));
};

function3(12345); // 54321

// Дано некоторое число: 12345 Найдите сумму цифр этого числа.

const function4 = (num) => {
    console.log(
        num
            .toString()
            .split("")
            .reduce((acc, el) => acc + +el, 0)
    );
};

function4(12345); // 15
