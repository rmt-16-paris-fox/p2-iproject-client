const axios = require('axios')

export default axios.create({
  baseURL: 'https://chatnonymous-server.herokuapp.com/'
})
