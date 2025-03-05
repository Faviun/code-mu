// Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.

const function1 = (arr) => {
    let newArr = arr.filter((item) => item.length <= 3);
    console.log(newArr);
};

function1(["hello", "world", "hi", "bye", "good", "bad"]);

// Дано некоторое число. Проверьте, что все цифры этого числа являются нечетными.

const function2 = (num) => {
    let str = num.toString().split("");
    if (str.every((item) => +item % 2 !== 0)) {
        console.log("All digits are odd");
    } else {
        console.log("Not all digits are odd");
    }
};

function2(13579);

// Дано некоторое слово.Проверьте, что это слово читается одинаково с любой стороны.

const function3 = (str) => {
    let strReverse = str.split("").reverse().join("");
    if (str === strReverse) {
        console.log("The word is a palindrome");
    } else {
        console.log("The word is not a palindrome");
    }
};

function3("level");

// Дан массив. Найдите сумму элементов этого массива.

const function4 = (arr) => {
    let sum = arr.flat(2).reduce((acc, item) => acc + item, 0);
    console.log(sum);
};

function4([
    [
        [11, 12, 13],
        [14, 15, 16],
        [17, 17, 19],
    ],
    [
        [21, 22, 23],
        [24, 25, 26],
        [27, 27, 29],
    ],
    [
        [31, 32, 33],
        [34, 35, 36],
        [37, 37, 39],
    ],
]);
