// Найдите сумму всех целых чисел от 1 до 100.

const function1 = () => {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);
};

function1();

// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.

const function2 = () => {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    console.log(sum);
};

function2();
