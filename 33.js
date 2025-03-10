// Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.

const function1 = (arr) => {
    console.log([...new Set(arr)]);
};

function1([1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9]);

// Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз.

const function2 = (arr) => {
    let count = 0;
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count <= 3) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
};

function2([1, 2, 2, 3, 3, 3, 4, 5, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9]);
