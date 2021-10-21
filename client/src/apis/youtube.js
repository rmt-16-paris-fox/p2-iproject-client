import axios from 'axios'
const KEY = 'AIzaSyCaInXLQg4bJ7byt6xNLi-HR-iObLR1itA'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 20,
    key: KEY
  }
})
