// Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.

const function1 = (arr) => {
    console.log(arr.filter((el) => el.toString().length <= 3));
};

function1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 1000, 10000]);

// Дано число. Проверьте, что все цифры этого числа больше нуля.

const function2 = (num) => {
    console.log(
        num
            .toString()
            .split("")
            .every((el) => el > 0)
    );
};

function2(123);

// Дан некоторый массив, например, вот такой: [123, 456, 789]
// Слейте все элементы этого массива в один массив, разбив их посимвольно: [1, 2, 3, 4, 5, 6, 7, 8, 9]

const function3 = (arr) => {
    console.log(
        arr
            .join("")
            .split("")
            .map((el) => +el)
    );
};

function3([123, 456, 789]);

// Дан следующая структура:

// [
// 	{
// 		1: 11, 2: 12, 3: 13,
// 	},
// 	{
// 		1: 21, 2: 22, 3: 23,
// 	},
// 	{
// 		1: 24, 2: 25, 3: 26,
// 	},
// ];
// Найдите сумму элементов этой структуры.

const function4 = (obj) => {
    let sum = 0;
    for (let key in obj) {
        for (let key2 in obj[key]) {
            sum += obj[key][key2];
        }
    }
    console.log(sum);
};

function4([
    {
        1: 11,
        2: 12,
        3: 13,
    },
    {
        1: 21,
        2: 22,
        3: 23,
    },
    {
        1: 24,
        2: 25,
        3: 26,
    },
]);
