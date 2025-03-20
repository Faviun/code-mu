arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.

const function1 = (arr) => {
    console.log(arr[Math.floor(Math.random() * arr.length)]);
};

function1(arr);

// Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива.

const function2 = (arr, n) => {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[Math.floor(Math.random() * arr.length)]);
    }
    console.log(newArr);
};

function2(arr, 5);

// Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подряд.

const function3 = (arr) => {
    function getRandomNumber(arr) {
        return Math.floor(Math.random() * arr.length);
    }
    let lastNumber = null;

    return function () {
        let randomNumber;
        do {
            randomNumber = getRandomNumber(arr);
        } while (arr[randomNumber] === lastNumber);

        lastNumber = arr[randomNumber];
        return arr[randomNumber];
    };
};

const generateRandomNumber = function3(arr);

console.log(generateRandomNumber());
console.log(generateRandomNumber());
console.log(generateRandomNumber());

// Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.

const function4 = (min, max) => {
    let arr = [];
    for (let i = min; i <= max; i++) {
        let isSimple = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isSimple = false;
                break;
            }
        }
        if (isSimple) {
            arr.push(i);
        }
    }
    console.log(arr);
};

function4(1, 100);

// Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвращать их сумму.

const function5 = (...numbers) => {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    console.log(sum);
};

function5(1, 2, 3, 4, 5);

// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел.

const function6 = (min, max, n) => {
    let arr = [];
    let lastNumber = null;
    for (let i = 0; i < n; i++) {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (randomNumber === lastNumber);
        arr.push(randomNumber);
        lastNumber = randomNumber;
    }
    console.log(arr);
};

function6(1, 10, 10);

// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись.

const function7 = (min, max, n) => {
    let arr = [];
    if (max - min + 1 < n) {
        console.log(
            "Невозможно заполнить массив N случайными числами из заданного промежутка так, чтобы числа не повторялись"
        );
        return;
    } else {
        for (let i = 0; i < n; i++) {
            let randomNumber;
            do {
                randomNumber =
                    Math.floor(Math.random() * (max - min + 1)) + min;
            } while (arr.includes(randomNumber));
            arr.push(randomNumber);
        }
        console.log(arr);
    }
};

function7(1, 10, 10);
