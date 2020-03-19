<template>
    <div class="container">
        <div>编辑博客</div>
        <div class="newBlog">
            <div class="title">
                <div class="title-lable">标题：</div>
                <el-input v-model="title" placeholder="请输入内容"></el-input>
            </div>
            <div class="content">
                <el-input
                        type="textarea"
                        placeholder="请输入内容"
                        v-model="content"
                        :autosize="{ minRows: 20}"
                        resize="none"
                />
            </div>
            <div class="btn">
                <el-button type="primary" @click="update">更新博客</el-button>
            </div>
        </div>

    </div>
</template>

<script>
    import {getBlogDetail, updateBlog} from '@/api/blog'
    import jump from '@/util/jump'

    export default {
        name: "editBlog",
        data(){
            return{
                title: '',
                content: '',
                blogId: null
            }
        },
        created() {
            this.blogId = this.$route.query.id
            this.getBlog()
        },
        methods:{
            getBlog(){
                if (this.blogId) {
                    getBlogDetail({id: this.blogId}).then(res => {
                        console.log(res)
                        const data = res.data
                        this.title = data.title
                        this.content = data.content
                    })
                }
            },

            update(){
                const data = {
                    title: this.title,
                    content: this.content
                }
                const params = {
                    id: this.blogId
                }
                updateBlog(data, params).then(res => {
                    console.log(res)
                    if(res.code === -1) {
                        this.$message.error(res.message)
                        return
                    }
                    this.$message({
                        message: '更新成功',
                        type: 'success'
                    })
                    jump.goHome(this)
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .container{
        padding: 30px;
    }
    .newBlog {
        padding-top: 30px;
        .title {
            display: flex;
            align-items: center;

            .title-lable {
                width: 80px;
                font-size: 22px;
            }
        }
        .content{
            margin-top: 30px;
        }
        .btn{
            margin-top: 30px;
            text-align: right;
        }
    }
</style>