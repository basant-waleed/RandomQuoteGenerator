//set array of objects to write the quotes in 
var quotes = [
    {
       quote: '  “So many books, so little time.”',
       author: '  ― Frank Zappa '
    },
    {
        quote: ' “A room without books is like a body without a soul.”',
        author: '― Marcus Tullius Cicero '
    },
    {
        quote: ' “You know you are in love when you can not fall asleep because reality is finally better than your dreams.”',
        author: '― Dr. Seuss'
    },
    {
        quote: ' “Be the change that you wish to see in the world.” ',
        author: ' ― Mahatma Gandhi '
    },
    {
        quote: ' “If you tell the truth, you don not have to remember anything.” ',
        author: ' ― Mark Twain '
    },
    {
        quote: '“A friend is someone who knows all about you and still loves you.”',
        author: ' ― Elbert Hubbard '
    },
 
   ];
   function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
   }
 
   function displayRandomQuote() {
    var randomIndex = getRandomIndex(quotes.length);
    var quote = quotes[randomIndex];
     
    document.getElementById('quote').textContent = quote.quote;
    document.getElementById('author').textContent = quote.author;
   }
    // displayRandomQuote();
   