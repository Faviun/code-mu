// Дано некоторое число: 123456
// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее: 12 + 34 + 56

const function1 = (num) => {
    const arr = num.toString().split("");
    let sum = 0;
    for (let i = 0; i < arr.length; i += 2) {
        sum += +(arr[i] + arr[i + 1]);
    }
    console.log(sum);
};

function1(123456);

// Дан массив с числами: [1, 2, 3, 4, 5]
// Выведите в консоль элементы этого массива в обратном порядке.

const function2 = (arr) => {
    console.log(arr.reverse());
};

function2([1, 2, 3, 4, 5]);
