
const DARK_SKY_KEY = require('../../apiKeys')

const request = require('request')


const forecast = ( latitude, longitude, callback) => {
   const url = 'https://api.darksky.net/forecast/' + DARK_SKY_KEY + '/' + latitude + ',' + longitude

    request({ url: url, json: true}, (error, {body}) => {
       console.log(url)
        if(error) {
            callback('Unable to Connect to Services Services', undefined)
        } else if(body.error) {
            callback('Unable to find location, try another search', undefined)
        } else {
            callback(undefined, 
               body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + ' chance of rain.' ,
               
            )
        }
    })
}

module.exports = forecast