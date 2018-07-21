<template>
    <div style="overflow:hidden;background-color:#ccc;width:100%;height:100%;padding-top:50%">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-button type="primary" @click="login()" size="large" style="margin-top:0.5rem">Enter</mt-button>
    </div>
</template>

<script>
import { Toast, Field } from 'mint-ui';

export default {
    data(){
        return{
            show: false,
            username: '',
            password: ''
        }
    },
    methods:{
        login(){
            let _this = this;
            if(this.username == '' || this.password == ''){
                Toast({
                    message: '请输入用户名/密码',
                    position: 'middle',
                    duration: 1500
                });
                return;
            }else{
                this.LKshow.login({
                    data:{
                        username:this.username,
                        password:this.password
                    },
                    success:function(data){
                        Toast({
                            message: '登陆成功',
                            position: 'middle',
                            duration: 1500
                        });
                        _this.$router.push('/personcenter/');
                    },
                    fail:function(err){
                        console.log('获取用户信息出错');
                    }
                })
            }
        },
        test(){
            this.LKshow.login({
                data:{
                    username:'admin',
                    password:'123456'
                },
                success:function(data){
                    // this.$router.push('/personcenter/test');
                },
                fail:function(err){
                    console.log('获取用户信息出错');
                }
            })
        }
    },
    mounted(){
        window.flex(true);
    }
}
</script>

<style>

</style>
