const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// // This section is used when NOT using the local array of quotes
// let apiQuotes = [];

// show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// hide loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show New Quote
function newQuote() {
    loading();
    // Pick a random quote from apiQuotes array
    // // This next line is only needed when NOT using the local array of quotes
    // const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]; 
    // Check if Author is Null and replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    };
    // Check Quote Length
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // Set Quote, hide loader
    quoteText.textContent = quote.text;
    complete();
};


// // This section is used when NOT using the local array of quotes
// // Get Quotes From API
// // ASYNC can function at any time without stopping the loading of the page
// async function getQuotes() {
//     const apiUrl = "https://type.fit/api/quotes";
//     // try catch attempts to complete a fetch request- if it doesn't work it catches the error info
//     try {
//         // constant won't be populated until the URL is fetched
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {
//         // handle error here
//     }
// };

// // On Load
// getQuotes();


// Tweet Quote
function tweetQuote() {
    loading();
    // Set URL with quote and author name
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    // Open new window using set URL
    window.open(twitterUrl, '_blank');
}


// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
newQuote();
