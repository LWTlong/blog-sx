<template>
    <div v-if="show">

        <div v-if="isLogin" class="blogTable">
            <div class="my-name">
                {{myName}}
            </div>
            <template>
                <el-table
                        :data="blogList"
                        height="250"
                        style="width: 100%">
                    <el-table-column
                            prop="createTime"
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
                        <template slot-scope="{row}">
                            <el-button type="primary" @click="goToEdit(row.id)">编辑</el-button>
                            <el-button type="danger" @click="delBlog(row.id)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </div>
        <div v-else class="noLogin">
            <div class="noLogin-title">尚未登录，请登录</div>
            <div>
                <el-button type="primary" @click="goToLogin">登录</el-button>
            </div>
        </div>
    </div>

</template>

<script>
    import {loginTest, getBlogList, deleteBlog} from '@/api/blog'

    export default {
        name: "user",
        data() {
            return {
                show: false,
                isLogin: false,
                myName: '',
                blogList: []
            }
        },
        created() {
            this.loginTest()
        },
        methods: {
            loginTest() {
                loginTest().then(res => {
                    console.log(res)
                    if (res.code === 0) {
                        this.isLogin = true
                        this.myName = res.data.realname
                        this.getMyBlog()
                    }
                    this.show = true
                })
            },

            getMyBlog() {
                const params = {
                    author: this.myName
                }
                getBlogList(params).then(res => {
                    console.log(res)
                    this.blogList = res.data
                })
            },

            goToEdit(id) {
                this.$router.push({path: '/blog/edit', query: {id}})
            },

            goToLogin() {
                this.$router.push({path: '/login'})
            },

            delBlog(id) {
                console.log(id)
                deleteBlog({id}).then(res => {
                    console.log(res)
                    if (res.code === 0 && res.data === true) {
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        })
                        this.getMyBlog()
                        return
                    }
                    this.$message.error(res.message)
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .blogTable {
        width: 100%;
        padding: 30px;
        box-sizing: border-box;

        .my-name {
            padding: 30px 0;
            font-size: 26px;
        }
    }

    .noLogin {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .noLogin-title {
            padding: 20px;
            font-size: 20px;
            color: #666;
        }
    }
</style>