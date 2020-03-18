import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        component: () => import('@/pages/home/home'),
        meta: {
            title: '博客首页'
        }
    },
    {
        path: '/blog/detail',
        component: () => import('@/pages/blogDetail/blogDetail'),
        meta: {
            title: '博客详情'
        }
    }
]

const router = new VueRouter({
    routes
})

export default router;
