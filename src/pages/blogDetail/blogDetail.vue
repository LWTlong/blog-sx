<template>
    <div class="container">
        <div class="detail-title">{{title}}</div>
        <div class="detail-content">{{content}}</div>
    </div>
</template>

<script>
    import {getBlogDetail} from '@/api/blog'
    export default {
        name: "blogDetail",
        data(){
            return{
                title: '',
                content: ''
            }
        },
        created() {
            this.getDetail()
        },
        methods:{
            getDetail(){
                const id = this.$route.query.id
                getBlogDetail({id}).then(res =>{
                    console.log(res)
                    this.title = res.data.title
                    this.content = res.data.content
                })
            }
        }
    }
</script>

<style scoped>
    .container{
        padding: 30px;
    }
    .detail-title{
        padding: 10px;
        font-size: 32px;
        text-align: center;
        color: #333;
    }
    .detail-content{
        font-size: 18px;
        line-height: 1.6;
        color: #666;
    }
</style>
