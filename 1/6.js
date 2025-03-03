// Дан массив с числами. Найдите сумму квадратов элементов этого массива.

const function1 = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] ** 2;
    }
    console.log(sum);
};

function1([1, 2, 3, 4, 5]); // 55

// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

const function2 = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.sqrt(arr[i]);
    }
    console.log(sum);
};

function2([1, 4, 9, 16, 25]); // 15

// Дан массив с числами. Найдите сумму положительных элементов этого массива.

const function3 = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    console.log(sum);
};

function3([-1, 2, -3, 4, -5]); // 6

// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

const function4 = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] < 10) {
            sum += arr[i];
        }
    }
    console.log(sum);
};

function4([-1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 45
