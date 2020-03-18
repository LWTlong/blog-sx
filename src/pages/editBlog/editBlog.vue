<template>
    <div class="container">
        <div>编辑博客</div>
        <div class="newBlog">
            <div class="title">
                <div class="title-lable">标题：</div>
                <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
            <div class="content">
                <el-input
                        type="textarea"
                        placeholder="请输入内容"
                        v-model="textarea"
                        :autosize="{ minRows: 20}"
                        resize="none"
                />
            </div>
            <div class="btn">
                <el-button type="primary">更新博客</el-button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "editBlog",
        data(){
            return{
                input: '这是一篇博客的标题',
                textarea: '这是他的内容'
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