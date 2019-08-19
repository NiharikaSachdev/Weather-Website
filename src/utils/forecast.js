const request = require('request')

const forecast = (longitude, latitude, callback) => {

    const url = 'https://api.darksky.net/forecast/4453fceb0a61760be8fac077e227acbf/' + longitude + ',' + latitude + '?units=si'


    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const d = body.currently
            callback(undefined, body.daily.data[0].summary + " It is currently " + d.temperature + " degrees out. There is a " + d.precipProbability + "% chance of rain.")
        }
    })
}

module.exports = forecast



// const url = 'https://api.darksky.net/forecast/4453fceb0a61760be8fac077e227acbf/37.8267,-122.4233?units=si'


// request({ url: url, json: true }, (error, response) => {
//     //const data = JSON.parse(response.body)
//     //console.log(data.currently)
//     //console.log(response.body.currently)
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         const d = response.body.currently
//         console.log(response.body.daily.data[0].summary + " It is currently " + d.temperature + " degrees out. There is a " + d.precipProbability + "% chance of rain.")
//     }
// })
