import axios from '../util/axios'

export function getBlogList(params) {
    return axios({
        url: '/api/blog/list',
        method: 'get',
        params
    })
}

export function loginTest() {
    return axios({
        url: '/api/user/login-test',
        method: 'get',
    })
}

export function getBlogDetail(params) {
    return axios({
        url: '/api/blog/detail',
        method: 'get',
        params
    })
}

export function publishBlog(data) {
    return axios({
        url: '/api/blog/new',
        method: 'post',
        data
    })
}

export function login(data) {
    return axios({
        method: 'post',
        url: '/api/user/login',
        data: data
    })
}

export function updateBlog(data,params) {
    return axios({
        method: 'post',
        url: '/api/blog/update',
        data,
        params,
    })
}

export function deleteBlog(params) {
    return axios({
        method: 'post',
        url: '/api/blog/del',
        params,
    })
}
