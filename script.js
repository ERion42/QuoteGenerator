// // This section is used when NOT using the local array of quotes
// let apiQuotes = [];

// Show New Quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    // // This next line is only needed when NOT using the local array of quotes
    // const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]; 
    console.log(quote);
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

newQuote();