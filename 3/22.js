// Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.

const function1 = (start, end) => {
    for (let i = start; i <= end; i++) {
        if (
            +String(i)[String(i).length - 2] % 2 === 0 &&
            +String(i)[String(i).length - 2] !== 0
        ) {
            console.log(i);
        }
    }
    console.log(arr);
};

// function1(10, 1000);

// Дан массив. Удалите из него каждый пятый элемент.

const function2 = (arr) => {
    let newArr = arr.filter((item, index) => (index + 1) % 5 !== 0);
    console.log(newArr);
};

function2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Дана некоторая переменная с числом
// Сделайте строку, содержащую столько нулей, сколько указано в переменной.

const function3 = (num) => {
    let str = "0".repeat(num);
    console.log(str);
};

function3(5);

// Дана некоторая строка со словами: 'aaa bbb ccc eee fff'
// Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее: 'aaa ccc fff'

const function4 = (str) => {
    let newArr = str.split(" ").filter((item, index) => (index + 1) % 2 !== 0);
    console.log(newArr.join(" "));
};

function4("aaa bbb ccc eee fff");

// Дан массив: [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Найдите сумму элементов этого массива.

const function5 = (arr) => {
    let sum = arr.flat().reduce((acc, item) => acc + item, 0);
    console.log(sum);
};

function5([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]);
