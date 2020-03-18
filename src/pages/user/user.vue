<template>
    <div>
        <div class="blogTable">
            <template>
                <el-table
                        :data="blogList"
                        height="250"
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="日期"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="title"
                            label="博客"
                            >
                    </el-table-column>
                    <el-table-column
                            width="200"
                            label="操作">
                        <template>
                            <el-button type="primary" @click="goToEdit">编辑</el-button>
                            <el-button type="danger">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </div>
    </div>

</template>

<script>
    export default {
        name: "user",
        data(){
            return{
                blogList: [
                    {
                        date: '2020-03-18',
                        title: '博客标题'
                    },
                    {
                        date: '2020-03-18',
                        title: '博客标题'
                    },
                    {
                        date: '2020-03-18',
                        title: '博客标题'
                    }
                ]
            }
        },
        methods:{
            goToEdit(){
                this.$router.push({path: '/blog/edit'})
            }
        }
    }
</script>

<style lang="less" scoped>
.blogTable{
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
}
</style>