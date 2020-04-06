const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://samples.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=b6907d289e10d714a6e88b30761fae22'
   // https://samples.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=b6907d289e10d714a6e88b30761fae22
    request({ url, json: true }, (error, {body}) => {
        debugger
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            debugger
            callback(undefined,{
                forecastData : 'current temprature is : '+ body.main.temp + ' ferrenhit & current pressure is : ' + body.main.pressure + ' with ' +  body.wind.speed + ' mph of windspeed'
            })
        }
    })
}

module.exports = forecast