import axios from 'axios'

const baseUrl = "https://api.scripture.api.bible/v1/bibles"
const apiKey = "1b566dda217480217ceac049b61d801c"
const axiosConfig =  axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
        "api-key": apiKey,
        "Access-Control-Allow-Credentials": true
    }
})


export default axiosConfig