'use strict';

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuote = document.getElementById('new-quote');

const quotes = [
    {text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde"},
    {text: "That it will never come again is what makes life so sweet", author: "Emily Dickinson"},
    {text: "It is never too late to be what you might have been.", author: "George Eliot"},
    {text: "All the world's a stage, and all the men and women merely players.", author: " William Shakespeare"},
    {text: "Be kind, for everyone you meet is fighting a hard battle", author: "Plato"},
    {text: "Unable are the loved to die for love is immortality.", author: "Emily Dickinson"},
    {text: "Let me live, love, and say it well in good sentences.", author: "Sylvia Plath"}
];
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote(){
    const quote = getRandomQuote();
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `— ${quote.author}`;
}

newQuote.addEventListener('click', displayQuote);
displayQuote();