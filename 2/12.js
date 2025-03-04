// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.

const function1 = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    console.log("Количество отрицательных чисел - " + count);
};

function1([1, -2, 3, -4, 5, -6, 7, -8, 9, -10]);

// Дан массив с числами. Оставьте в нем только положительные числа.

const function2 = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
};

function2([1, -2, 3, -4, 5, -6, 7, -8, 9, -10]);

// Дана строка. Удалите предпоследний символ из этой строки.

const function3 = (str) => {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (i !== str.length - 2) {
            arr.push(str[i]);
        }
    }
    console.log(arr.join(""));
};

function3("Hello");

// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.

const function4 = (arr) => {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length / 2) {
            sum1 += arr[i];
        } else {
            sum2 += arr[i];
        }
    }
    console.log(sum1 / sum2);
};

function4([1, 2, 3, 4, 5, 6]); // 6 / 15 = 0.4
