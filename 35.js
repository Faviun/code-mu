// Дана переменная со строкой. Проверьте, что в эта строка представляет собой число, то есть состоит только из цифр.

const function1 = (str) => {
    /^\d+$/.test(str) ? console.log("Yes") : console.log("No");
};

function1("12345");
function1("12345a");

// Дана переменная со строкой. Проверьте, что в эта строка представляет собой дробь.

const function2 = (str) => {
    /^\d+\.\d+$/.test(str) ? console.log("Yes") : console.log("No");
};

function2("123.45");
function2("123");

// Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число.

const function3 = (arr) => {
    console.log(arr.sort((a, b) => b - a)[1]);
};

function3([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив, заполненный целыми числами от минимального параметра до максимального.

const function4 = (min, max) => {
    const arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    console.log(arr);
};

function4(1, 10);

// Сделайте функцию, которая заполнит массив случайными латинскими буквами.

const function5 = (n) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(String.fromCharCode(65 + Math.floor(Math.random() * 26)));
    }
    console.log(arr);
};

function5(10);

// Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи.

const function6 = (n) => {
    const arr = [0, 1];
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    console.log(arr.reduce((acc, item) => acc + item));
};

function6(10);
