// Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.

const function1 = (text) => {
    console.log(
        text
            .split(" ")
            .sort((a, b) => a.localeCompare(b))
            .join(" ")
    );
};

function1("hi world press");

// Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.

const function2 = (arr1, arr2) => {
    const newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                newArr.push(arr1[i]);
            }
        }
    }
    console.log(newArr);
};

function2([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);

// Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.

// const function3 = () => {
//     let arr = [];
//     let last;
//     for (let i = 0; i < 10; i++) {
//         let numb = getRandomNumber(1, 3);
//         if (last === numb) {
//             do {
//                 numb = getRandomNumber(1, 3);
//             } while (numb === last);
//         } else {
//             arr.push(numb);
//         }
//         last = numb;
//     }
//     console.log(arr);
// };

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function function3(min, max) {
    let lastNumber = null;

    return function () {
        let randomNumber;
        do {
            randomNumber = getRandomNumber(min, max);
        } while (randomNumber === lastNumber);

        lastNumber = randomNumber;
        return randomNumber;
    };
}

const generateRandomNumber = function3(1, 3);

// console.log(generateRandomNumber());
// console.log(generateRandomNumber());
// console.log(generateRandomNumber());
// console.log(generateRandomNumber());
// console.log(generateRandomNumber());

// Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:
// let arr = [1, 2, 3, 4, 5];
// func(arr, 1); // 2
// func(arr, 4); // 5
// func(arr, 5); // 1

const function4 = (arr, number) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            i === arr.length - 1
                ? console.log(arr[0])
                : console.log(arr[i + 1]);
        }
    }

    // console.log(nextNumber);
};

function4([1, 2, 3, 4, 5], 5);
