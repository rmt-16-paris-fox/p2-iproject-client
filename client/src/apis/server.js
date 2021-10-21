const axios = require('axios')

export default axios.create({
  // baseURL: 'http://localhost:3000'
  baseURL: 'https://sports8-remainder.herokuapp.com'
})
