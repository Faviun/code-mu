// Сделайте функцию, которая параметром будет принимать число, а возвращать количество его делителей.

const function1 = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    console.log(count);
};

function1(12);

// Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.

const function2 = (num) => {
    const arr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }
    console.log(arr);
};

function2(12);

// Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.

const function3 = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    count === 2 ? console.log("Простое") : console.log("Не простое");
};

function3(17);

// Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.

const function4 = (num) => {
    const str = String(num);
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] % 2 !== 0) {
            newStr += str[i];
        }
    }
    console.log(+newStr);
};

function4(1234567890);

// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.

const function5 = (n, min, max) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    console.log(arr);
};

function5(10, 1, 100);
