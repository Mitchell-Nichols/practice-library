const profile = require("./profile.js");

//getProfile("chalkers");
const users = ["chalkers", "alenaholligan"];
//getProfile("alenaholligan");

//users.forEach(username => {
//    getProfile(username);
//});

users.forEach(profile.get);
