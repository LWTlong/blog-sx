<template>
    <div>
        <div class="home-title">博客首页</div>
        <div class="blog-list">
            <div v-for="(item, index) of list" :key="index" class="blog-list-item">
                <div class="blog-list-title" @click="goBlogDetail(item.id)">{{item.title}}</div>
                <div class="blog-list-info"><span class="author">{{item.author}}</span> {{item.createTime}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getBlogList} from '@/api/blog'

    export default {
        name: "home",
        data() {
            return {
                list: []
            }
        },
        created() {
            // this.getBlogData()
        },
        methods: {
            getBlogData() {
                getBlogList().then(res => {
                    this.list = res.data
                })
            },

            goBlogDetail(id) {
                this.$router.push({path: '/blog/detail', query: {id}})
            }
        }
    }
</script>

<style lang="less" scoped>
    .home-title {
        font-size: 38px;
        padding: 30px 10px;
        text-align: center;
    }

    .blog-list {
        padding: 10px 20px;
    }

    .blog-list-item {

    }

    .blog-list-title {
        font-size: 26px;
        color: #333;
        padding: 10px 0;
    }

    .blog-list-title:hover {
        cursor: pointer;
    }

    .blog-list-info {
        color: #667766;
    }

    .author:hover {
        cursor: pointer
    }

</style>
