document.getElementById('generate').addEventListener('click', () => {
    let authors = Object.keys(quotes);

    let author  = authors[Math.floor(Math.random() * authors.length)];

    let quote = quotes[author];

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
});

const next = document.querySelector("#next");
const back = document.querySelector("#back");

let current = 0;


const quotes = {
        "-Walt Disney": '"Трудности преодолимы"',
        "-Winston Churchill": '"Я люблю JavaScript"',
        "-Will Rogers": '"Учите JavaScript"',
        "-Albert Einstein": '"Стремитесь не к успеху, а к ценностям, которые он дает"',
        "-Steve Jobs": '"Ваше время ограничено, не тратьте его, живя чужой жизнью"',
        "-Napoleon Bonaparte": '"В моем словаре нет слова «невозможно»"',
        "-Muhammad Ali": '"Не считай дни, извлекай из них пользу"',
        "-Aristotle": '"Счастье зависит от нас самих"',
        "-Charlie Chaplin": '"Вы никогда не увидите радугу, если будете смотреть вниз"',
        "-Henry Ford": '"Неудача – это просто возможность начать снова, но уже более мудро"',
        "-Theodore Roosevelt": '"Делай, что можешь, с тем, что у тебя есть, и там, где ты находишься"',
        "-Richard Bach": '"Каждая мечта тебе дается вместе с силами, необходимыми для ее осуществления"',
        "-Mark Twain": '"Никогда не жалейте о том, что заставило вас улыбнуться"',
        "-Thomas Eliot": '"Каждый момент - это новое начало"',
        "-Nelson Mandela": '"Это всегда выглядит невозможным, пока вы не сделаете это"',
};


next.addEventListener("click", () => {
    current += 1;
    if (current > 15) {
        return false;
    }
    let authors = Object.keys(quotes);
    let author = authors[current];
    let quote = quotes[author];
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
});
back.addEventListener("click", () => {
    current -= 1;
    if (current < 0) {
        return false;
    }
    let authors = Object.keys(quotes);
    let author = authors[current];
    let quote = quotes[author];
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
});

