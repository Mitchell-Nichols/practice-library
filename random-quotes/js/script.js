/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Author: Mitchell Nichols
Complete Date: March 29, 2021
******************************************/

// Storing my 5 selected quotes.
const quotes = [
{quote: "Life is never fair, and perhaps it is a good thing for most of us that it is not.", source: "Oscar Wilde"},
{quote: "The only impossible journey is the one you never begin.", source: "Tony Robbins"},
{quote: "You only live once, but if you do it right, once is enough.", source: "Mae West", year:"August 17, 1893"},
{quote: "Life is really simple, but we insist on making it complicated.", source: "Confucius"},
{quote: "The way to get started is to quit talking and begin doing.", source: "Walt Disney", citation:"google.com"}
];


//Run the random function to random select a quote from quotes object. Return the selected quote.
function getRandomQuote (){
  let numR = Math.floor(Math.random() * quotes.length);
  let selected = quotes[numR];
  return selected;
};


//Run print function including call the getRandomQuote function after click on the button. Print output to the screen in HTML formats.
function printQuote(){

  //Call the get random quote function to get the object property and value.
  let strPrint = getRandomQuote();

  // Add quotes and sources object to printOut.
  let printOut = `<p class='quote'>"${strPrint.quote}"</p><p class='source'>${strPrint.source}`

  //Check to see if citation value is undefined/empty.If not, add it to printOut. Otherwise, don't print iundefined.
  if(typeof strPrint.citation !== 'undefined'){
  printOut +=  `<span class='citation'> ${strPrint.citation} </span>`;
  };

  //Check to see if year value is undefined/empty.If not, add it to printOut. Otherwise, don't print undefined.
  if(typeof strPrint.year !== 'undefined'){
  printOut +=  `<span class='year'> ${strPrint.year} </span>`;
  };

  printOut +=`</p>`;

  // add the printOut object and then feed it to index.html's quote box element for screen print.
  document.getElementById('quote-box').innerHTML = printOut;
}

//button function. Calls out the print quote function everytime the button is clicked.
document.getElementById('load-quote').addEventListener("click", printQuote, false);
