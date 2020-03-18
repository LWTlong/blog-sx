<template>
    <div class="container">
        <div class="login">
            <div class="title">Hi,世界这么美好</div>
            <div class="input-info">
                <div class="input-lable">用户名：</div>
                <el-input v-model="username" placeholder="请输入内容"></el-input>
            </div>
            <div class="input-info">
                <div class="input-lable">密码：</div>
                <el-input v-model="password" placeholder="请输入内容"></el-input>
            </div>
            <div class="btn">
                <el-button type="primary">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                username: '',
                password: ''
            }
        }
    }
</script>

<style lang="less" scoped>
.container{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}
.login{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 300px;
    transform: translate(-50%,-50%);
}
    .input-info{
        display: flex;
        align-items: center;
        padding: 20px;
        .input-lable{
            width: 90px;
            font-size: 18px;
        }
    }
    .btn{
        margin-top: 10px;
        text-align: center;
        button{
            width: 120px;
        }
    }
    .title{
        padding: 15px 0;
        font-size: 22px;
        text-align: center;
    }
</style>