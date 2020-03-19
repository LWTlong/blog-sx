import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
    {
        path: '/login',
        component: ()=>import('@/pages/login/login'),
        meta: {
            title: '随行博客'
        }
    },
    {
        path: '/',
        redirect: '/blog/index',
        component: () => import('@/pages/pages'),
        meta: {
            title: ''
        },
        children:[
            {
                path: '/blog/index',
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
            },
            {
                path: '/blog/user',
                component: () => import('@/pages/user/user'),
                meta: {
                    title: '我的'
                }
            },
            {
                path: '/blog/edit',
                component: () => import('@/pages/editBlog/editBlog'),
                meta: {
                    title: '编辑博客'
                }
            },
            {
                path: '/blog/new',
                component: () => import('@/pages/newBlog/newBlog'),
                meta: {
                    title: '写博客'
                }
            }
        ]
    },
]

const router = new VueRouter({
    routes
})

router.beforeEach((to,from,next)=>{
    console.log('router to is',to)
    console.log('router from is',from)
    document.title = to.meta.title
    next()
})

export default router;
