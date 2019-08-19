const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibmloYXJpa2FzYWNoZGV2IiwiYSI6ImNqejJrcG11bzAxMG8zbnBtZWx0bHZkY2sifQ.Bb72NUN4Uxf0qi1T0YwxHA&limit=1'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                longitude: body.features[0].center[1],
                latitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports=geocode



// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoibmloYXJpa2FzYWNoZGV2IiwiYSI6ImNqejJrcG11bzAxMG8zbnBtZWx0bHZkY2sifQ.Bb72NUN4Uxf0qi1T0YwxHA&limit=1'
// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services')
//     }else if(response.body.features.length === 0){
//         console.log('Unable to find location. Try another search')
//     } else {
//         const longitude = response.body.features[0].center[0]
//         const latitude = response.body.features[0].center[1]
//         console.log(latitude, longitude)
//     }
// })