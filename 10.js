// Заполните массив случайными числами из промежутка от 1 до 100.

const function1 = () => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1);
    }
    console.log(arr);
};

function1();

// Дано некоторое число: 12345 Выведите в консоль все его символы с конца.

const function2 = (num) => {
    const arr = num.toString().split("");
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
};

function2(12345);

// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] По очереди выведите в консоль подмассивы из двух элементов нашего массива:
// [1, 2]
// [3, 4]
// [5, 6]

const function3 = (arr) => {
    for (let i = 0; i < arr.length; i += 2) {
        console.log(arr.slice(i, i + 2));
    }
};

function3([1, 2, 3, 4, 5, 6]); // [ 1, 2 ] [ 3, 4 ] [ 5, 6 ]

// Даны два массива: let arr1 = [1, 2, 3]; let arr2 = [4, 5, 6];
// Слейте эти массивы в новый массив: [1, 2, 3, 4, 5, 6]

const function4 = (arr1, arr2) => {
    console.log(arr1.concat(arr2));
};

function4([1, 2, 3], [4, 5, 6]); // [ 1, 2, 3, 4, 5, 6 ]
