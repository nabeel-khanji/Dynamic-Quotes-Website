const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const newQuote = document.getElementById('newQuote');
const tweetMe = document.getElementById('tweetMe');
let realData = '';
let quotesData = '';
const getNewQuotes =
    () => {
        let rnum = Math.floor(Math.random(1000) * realData.length);
        // console.log(rnum);
        quotesData = realData[rnum];
        quotes.innerText = `${quotesData.text}`;
        quotesData.author == null ?
            author.innerText = `unKhnown` :
            author.innerText = `${quotesData.author}`;
    };
const getQuotes = async() => {
    const api = 'https://type.fit/api/quotes';
    try {
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes();
        // console.log(realData[10].text);
        // console.log(realData[10].author);
    } catch (error) {

    }
};
const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;
    window.open(tweetPost);
};
newQuote.addEventListener('click', getNewQuotes);
tweetMe.addEventListener('click', tweetNow);
getQuotes();