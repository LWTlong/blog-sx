import axios from '../uitl/axios'

export function getBlogList(params) {
    return axios({
        url: '/api/blog/list',
        method: 'get',
        params
    })
}

export function getBlogDetail(params){
    return axios({
        url: '/api/blog/detail',
        method: 'get',
        params
    })
}
