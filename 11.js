// Дана некоторая строка. Найдите позицию первого нуля в строке.

const function1 = (str) => {
    str.indexOf("0") === -1
        ? console.log("zero not found")
        : console.log(str.indexOf("0"));
};

function1("1234567890"); // 9

// Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.

const function2 = () => {
    for (let i = 1; i <= 1000; i++) {
        if (i.toString().length > 1) {
            if (+i.toString()[0] + +i.toString()[1] === 5) {
                console.log(i);
            }
        }
    }
};

function2();

// Дан массив. Удалите из него элементы с заданным значением.

const function3 = (arr, val) => {
    console.log(arr.filter((el) => el !== val));
};

function3([1, 2, 3, 4, 5, 6], 3); // [ 1, 2, 4, 5, 6 ]

// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Найдите сумму первой половины элементов этого массива.

const function4 = (arr) => {
    console.log(arr.slice(0, arr.length / 2).reduce((acc, el) => acc + el, 0));
};

function4([1, 2, 3, 4, 5, 6]); // 6
