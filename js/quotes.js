const quotes = [
    {
        quote: "SNS is a waste of life.",
        author: "Alex Ferguson",
    },
    {
        quote: "But the earth is spinning.",
        author: "Galileo Galilei",
    },
    {
        quote: "If you don't get out of bed even though you open your eyes, you can never say it's awake.",
        author: "My father",
    },
    {
        quote: "Hey, did you eat all my ice cream?",
        author: "My sister",
    },
    {
        quote: "Let's look at life from the perspective of a traveler.",
        author: "A book-room owner I know",
    },
    {
        quote: "It's really late when you think it's late.",
        author: "Myung Soo Park",
    },
    {
        quote: "Just do it.",
        author: "NIKE",
    },
    {
        quote: "Your fame, My pride.",
        author: "woojinmath",
    },
    {
        quote: "Pain makes me stronger.",
        author: "Friedrich Wilhelm Nietzsche",
    },
    {
        quote: "Let's not put off till tomorrow what we have to do today",
        author: "My father",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;