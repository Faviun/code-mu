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
