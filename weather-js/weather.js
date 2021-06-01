const https = require('https');
const api = require('./api.json');

//print out temp details
function printWeather(weather) {
    const message = `Current temperature in ${weather.location.city} is ${weather.current_observation.temp_f}F`;
    console.log(message);
}

//print out error message
function printError(error){
    console.error(error.message);
}

function get(query){
    //take out underscores for readability
    const readableQuery = query.replace('_',' ');
    //try{
    const request = 
    https.get(`https://api.wunderground.com/api/${api.key}/geolookup/conditions/q/${query}.json`, response => {
       
        //if(response.statusCode === 200) {
        let body = "";
        
        //read data
        response.on('body', chunk => {
            body += chunk;
        });

        response.on('end', () => {
            const weather = JSON.parse(body);
            // Print the data
            printWeather(weather);
            //Print the data
        });
    });
}

module.exports.get = get;

//TO DO: Handle any errors