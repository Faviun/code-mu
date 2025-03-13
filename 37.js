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
