import axios from 'axios'
import cheerio from 'cheerio'
import fs from 'fs'

// request('https://www.bustle.com/articles/65244-25-harry-potter-characters-ranked-by-dateability', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   // console.log('body:', body); // Print the HTML for the Google homepage.
// });

const url = 'http://www.akc.org/dog-breeds/'

const characterData = []

axios.get(url).then((resp) => {
  const $ = cheerio.load(resp.data)
  // parse html and grab whats needed
}).catch((err) => {
  console.log("error", err)
})
