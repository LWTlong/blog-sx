<template>
    <div class="nav-box">
        <div v-for="(item, index) of navList"
             :key="index"
             @click="goTo(item)"
             class="nav-item"
             :class="[nowPath == item.path ? 'nav-item-active' : '']"
        >{{item.name}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "navBar",
        data() {
            return {
                nowPath: '',
                navList: [
                    {
                        path: '/blog/index',
                        name: '首页'
                    },
                    {
                        path: '/blog/new',
                        name: '写博客'
                    },
                    {
                        path: '/blog/user',
                        name: '我的'
                    }
                ]
            }
        },
        watch:{
            $route:{
              handler(route){
                  console.log(route.path)
                  this.nowPath = route.path
              },
              deep:true
          }
        },
        created() {
            console.log(this.$route.path)
            this.nowPath = this.$route.path
        },
        methods: {
            goTo(item) {
                const path = item.path
                this.$router.push({path})
            }
        },
    }
</script>

<style lang="less" scoped>
    .nav-box {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 30px;

        .nav-item {
            font-size: 30px;
            width: 300px;
            text-align: center;
        }

        .nav-item:hover {
            cursor: pointer;
        }

        .nav-item-active {
            color: #409EFF;
        }
    }
</style>