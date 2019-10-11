const MAPBOX_KEY = require('../../apiKeys');

const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + MAPBOX_KEY 
    console.log(url)
    request({ url: url, json: true}, (error, {body}) => {
        
        if(error) {
            callback('Unable to Connect to Services Services', undefined)
        } else if (body.features.length === 0 ) {
            callback('Unable to find location, try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude:  body.features[0].center[0],
                location : body.features[0].place_name
            })
        }
        console.log(url)
    })
}


module.exports = geocode