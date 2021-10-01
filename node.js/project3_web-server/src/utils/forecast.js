const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2aee6695d33b3f8ff8c01b60ddcc3c44&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true}, (error, {body} ={}) => {
        if(error) {
            callback('Unable to connect to weather service! Try again soon.', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. There is a ' + body.current.precip + ' % chance of rain.')
        }
    })
}

module.exports = forecast