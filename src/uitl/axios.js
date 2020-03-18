import axios from 'lwt-ts-axios'

const request = axios.create({
    baseURI: 'http://locahost:8081'
})

request.interceptors.response.use(response => {
    return response.data
})

export default request
