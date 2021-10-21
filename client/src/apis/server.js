const axios = require('axios')

export default axios.create({
  baseURL: 'http://localhost:3000'
  // baseURL: 'https://todoin-h8.herokuapp.com'
})
