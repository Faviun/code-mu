// Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.

const function1 = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i], arr[i]);
    }
    console.log(newArr);
};

function1([1, 2, 3, 4, 5]);

// Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.

const function2 = (arr, num) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (num % arr[i] === 0) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
};

function2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);

// Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.

const function3 = (num1, num2) => {
    const arr1 = String(num1).split("");
    const arr2 = String(num2).split("");
    const newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            newArr.push(+arr1[i]);
        }
    }
    console.log(newArr);
};

function3(123456, 56789);

// Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.

const function4 = (num) => {
    const arr = String(num).split("");
    let count = 0;
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "3") {
            count++;
            if (count > 1) {
                newArr.push(i);
            }
        }
    }
    newArr && newArr.pop();
    newArr.length ? console.log(newArr) : console.log("No");
};

function4(1331331);

// Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.

const function5 = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let tmp = String(arr[i]).split("");
        let count = 0;
        for (let j = 1; j < tmp.length; j++) {
            if (tmp[0] === tmp[j]) {
                count++;
            }
        }
        if (count !== tmp.length - 1) {
            newArr.push(+tmp.join(""));
        }
    }
    console.log(newArr);
};

function5([123, 11, 1234, 222, 123, 456, 33, 1234567]);

// Дан массив:
// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Слейте элементы этого массива в один одномерный массив:
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

const function6 = (arr) => {
    const newArr = arr.flat();
    console.log(newArr);
};

function6([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]);
