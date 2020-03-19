import axios from 'lwt-ts-axios'

const request = axios.create({
    baseURI: 'http://locahost:8081'
})

request.interceptors.request.use(config => {
    config.headers['content-type'] = 'application/json'
    return config
})

request.interceptors.response.use(response => {
    return response.data
})

export default request
