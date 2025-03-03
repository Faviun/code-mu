// Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.

const function1 = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " " && str[i] === str[i].toUpperCase()) {
            count++;
        }
    }
    count <= 2
        ? console.log("Все ок")
        : console.log("Больше двух заглавных букв");
};

function1("a bWc def ghAij");

// Дана некоторая строка: '1 22 333 4444 22 5555 1'
// Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее: '1 22 333 22 1'

const function2 = (str) => {
    const arr = str.split(" ");
    const result = arr.filter((item) => item.length <= 3);
    console.log(result.join(" "));
};

function2("1 22 333 4444 222 5555 1");

// Даны два массива: [1, 2, 3] и ['a', 'b', 'c'];
// Слейте эти массивы в новый массив следующим образом: [1, 2, 'a', 'b', 'c', 3]

const function3 = (arr1, arr2) => {
    const newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (i === 2) {
            for (let j = 0; j < arr2.length; j++) {
                newArr.push(arr2[j]);
            }
        }
        newArr.push(arr1[i]);
    }
    console.log(newArr);
};

function3([1, 2, 3], ["a", "b", "c"]);
