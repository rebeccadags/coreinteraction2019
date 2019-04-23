var quotes = [
  'okay',
  'ugh',
  'dumb',
  'word1',
  'word2',
  'word3',
  'word4',
  'word5',
  'word6',
  'word7',
]

var randomNumber = Math.floor(Math.random() * 20);

function newQuote() {
  var randomNumber = Math.floor(Math.random() = (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
