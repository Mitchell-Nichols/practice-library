const https = require(`https`);
//const username = `chalkers`;

function printMessage(username, badgeCount, point){
    const message = `${username} has ${badgeCount} total badge(s) and ${point} points in JavaScript`;
    console.log(message);
}

//printMessage("Chalkers", 100, 2000000);

function get(username){
    //define request
    const req = https.get(`https://teamtreehouse.com/${username}.json`, response =>{
        let body = "";
    
        //read the data
        response.on('data', data =>{
            body += data.toString();
        });

        //end of buffer but in string from toString() above
        response.on('end', () => {

            //pare the data
            const profile = JSON.parse(body);
            //check list of json
            //console.dir(profile);

            //print the data
            printMessage(username, profile.badges.length, profile.points.JavaScript);

            //to double check the object
            //console.log(typeof body);
        })

    });
    //response.on("error", error => console.error(`Problem with request: ${error.message}`));

}

module.exports.get = get;