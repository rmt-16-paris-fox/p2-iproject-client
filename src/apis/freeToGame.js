import axios from 'axios'

const freeToGame = axios.create({
  baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api'
})
export default freeToGame