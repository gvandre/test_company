const https = require('https');
module.exports = {
    getTotalResultsGoogle (search) {
        return new Promise((resolve, reject) => {
            // Info: https://developers.google.com/custom-search/v1/using_rest
            // Rest APi: https://www.googleapis.com/customsearch/v1?key=${key}&cx=${CustomsearchengineID}&q=${wordKey}'
            // Result: JSON
            
            https.get(`https://www.googleapis.com/customsearch/v1?key=${search.key}&cx=${search.util}&q=${search.word}'`, resp => {
            let data = ''
            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk
            })
            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                resolve({'word': search.word, 'resultSearch': parseInt(JSON.parse(data).searchInformation.totalResults), 'engine': search.name})
            })
            }).on('error', (err) => {
                reject({'message': err.message})
            });
        })
    },
    getTotalResultsBing (search) {
        // Info: https://docs.microsoft.com/en-us/azure/cognitive-services/bing-web-search/quickstarts/nodejs
        // Rest APi: https://www.api.cognitive.microsoft.com/bing/v7.0/search?q=${wordKey}'
        // Headers: {'Ocp-Apim-Subscription-Key': ${key} }
        // Result: JSON

        return new Promise((resolve, reject) => {
            https.get({
                hostname: 'api.cognitive.microsoft.com',
                path:     '/bing/v7.0/search?q=' + search.word,
                headers:  { 'Ocp-Apim-Subscription-Key': search.key },
            }, resp => {
            let data = ''
            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk
            })
            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                resolve({'word': search.word, 'resultSearch': JSON.parse(data).webPages.totalEstimatedMatches, 'engine': search.name})
            })
            }).on('error', (err) => {
                reject({'message': err.message})
            });
        })
    }
}