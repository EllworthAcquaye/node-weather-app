const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url =  'http://api.openweathermap.org/data/2.5/weather?lat='+ latitude +'&lon='+ longitude +'&appid=b10c74b18fc7ed2c7111ec0296730fe9'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.weather[0].description +  ' It is currently ' + body.main.temp + ' degrees out. With humidity levels at ' +body.main.humidity+ ' with wind speeds at ' +body.wind.speed)
        }
    })
}

module.exports = forecast