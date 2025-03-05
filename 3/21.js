// Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.

const function1 = (num) => {
    let str = num.toString().split("").sort().join("");
    console.log(str);
};

function1(3214);

// Дан массив: [1, '', 2, 3, '', 5] Удалите из массива все пустые строки.

const function2 = (arr) => {
    let newArr = arr.filter((item) => item !== "");
    console.log(newArr);
};

function2([1, "", 2, 3, "", 5]);

// Дан массив:
// [
// 	[2, 1, 4, 3, 5],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ]
// Отсортируйте элементы в каждом подмассиве.

const function3 = (arr) => {
    let newArr = arr.map((item) => item.sort());
    console.log(newArr);
};

function3([
    [2, 1, 4, 3, 5],
    [3, 5, 2, 4, 1],
    [4, 3, 1, 5, 2],
]);

// Даны два массива: [1, 2, 3] и [1, 2, 3, 4, 5];
// Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.

const function4 = (arr1, arr2) => {
    let min = Math.min(arr1.length, arr2.length);
    let newArr = [];
    for (let i = 0; i < min; i++) {
        newArr.push(arr1[i]);
    }
    console.log(newArr);
};

function4([1, 2, 3], [1, 2, 3, 4, 5, 6]);
