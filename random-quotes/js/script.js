/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
const quotes = [
{quote: "Life is never fair, and perhaps it is a good thing for most of us that it is not.", source: "Oscar Wilde"},
{quote: "The only impossible journey is the one you never begin.", source: "Tony Robbins"},
{quote: "You only live once, but if you do it right, once is enough.", source: "Mae West"},
{quote: "Life is really simple, but we insist on making it complicated.", source: "Confucius"},
{quote: "The way to get started is to quit talking and begin doing.", source: "Walt Disney"}
];



/***
 * `getRandomQuote` function
***/
let strPrint = ``;
function getRandomQuote (){


    let numR = Math.floor(Math.random() * quotes.length);
    let selected = quotes[numR];

    strPrint += `
      <h1>${selected.quote}</h1>
      <h3>${selected.source}</h3>
    `;
    return strPrint;
};
console.log(getRandomQuote())
/***
 * `printQuote` function
***/
function printQuote(){
getRandomQuote();
//document.querySelector('load-quote').innerHTML = getRandomQuote();
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
