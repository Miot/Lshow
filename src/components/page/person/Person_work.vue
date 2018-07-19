<template>
    <div>
        <!-- 顶部 -->
        <div class="pw_head">
            <div class="head_left">
                <img src="../../../../static/img/u3758.png" class="avatar">
                <div class="user">
                    <p style="font-size:0.35rem">Linker.林小七</p>
                    <p style="font-size:0.25rem">No.100101</p>
                </div>
            </div>
            <div class="head_right">
                <div class="hr_top">
                    <div class="wenhao"></div>
                    <div class="shezhi"></div>
                </div>
                <div class="hr_bottom"></div>
            </div>
        </div>
        <!-- 内容主体 -->
        <div class="pw_body">
            <!-- 顶部信息 -->
            <div class="pb_top">
                <ul>
                    <li>
                        <p>82.23</p>
                        今日收益
                    </li>
                     <li>
                         <p>2310.20</p>
                         累计收益
                     </li>
                     <li>
                         <p>82.23</p>
                         账户余额
                     </li>
                     <div class="arrow"></div>
                     <li>
                         <p @click="gotoEarnings"><img src="../../../../static/img/u3720.png"></p>
                         收益账户
                     </li>
                 </ul>
                 <img src="../../../../static/img/u3722.png" width="80%" style="margin:0 auto">
                 <ul>
                     <li>
                         <p>82.23</p>
                         今日支出
                     </li>
                     <li>
                         <p>2310.20</p>
                         累计支出
                     </li>
                     <li>
                         <p>2310.20</p>
                         账户余额
                     </li>
                     <div class="arrow"></div>
                     <li>
                         <p @click="gotoAD"><img src="../../../../static/img/u3733.png"></p>
                         广告账户
                     </li>
                 </ul>
            </div>
            <!-- tab页 -->
            <div class="pb_center">
                <ul>
                     <li>
                         <img src="../../../../static/img/u3744.svg">
                         我的场地
                     </li>
                     <li>
                         <img src="../../../../static/img/u3746.svg">
                         管理设备
                     </li>
                     <li>
                         <img src="../../../../static/img/u3748.svg">
                         我的广告
                     </li>
                     <div class="arrow"></div>
                     <li>
                         <img src="../../../../static/img/u3751.svg">
                         我的推荐
                     </li>
                </ul>
            </div>
            <!-- 底部 -->
            <img class="pb_footer" src="../../../../static/img/u3752.png">
        </div> 
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg: 'Welcome'
        }
    },
    methods:{
        // 跳转到收益账户页面
        gotoEarnings(){
            this.$router.push('/earning/daily');
        },
        // 跳转到广告账户页面
        gotoAD(){
            this.$router.push('/ad/daily');
        },
    },
    mounted(){
        window.flex(true);
    },
}
</script>
<style lang="less">
.pw_head{
    height: 2.76rem;
    background-image: url("../../../../static/img/u3704.png");
    background-size: cover;
    .head_left{
        float: left;
        margin-left: 0.6rem;
        margin-top: 0.9rem;
        color: #fff;
        .avatar{
            float: left;
            width: 0.96rem;
            height: 0.96rem;
        }
        .user{
            display: inline-block;
            margin-left: 10px;
            margin-top: 4px;
        }
    }
    .head_right{
        float: right;
        .hr_top{
            margin-top: 0.2rem;
            .wenhao{
                background: url("../../../../static/img/u3708.png");
                width: 0.5rem;
                height: 0.48rem;
                position: relative;
                right: 1rem;
            }
            .shezhi{
                background: url("../../../../static/img/u3709.png");
                width: 0.5rem;
                height: 0.48rem;
                position: relative;
                bottom: 0.48rem;
                right: 0.28rem;
            }
        }
        .hr_bottom{
            background: url("../../../../static/img/u3707.png");
            background-size: cover;
            width: 0.48rem;
            height: 0.48rem;
            position: relative;
            top: 0.9rem;
            right: 0.28rem;
        }
    }
}
.pw_body{
    min-height: 100%;
    padding: 0.4rem 0.4rem 0;
    .pb_top{
        width: 100%;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #E4E4E4;
        ul{
            display: flex;
            height: 1.4rem;
            color: #666666;
            margin-bottom: 0.3rem;
            &:first-child p{
                height: 0.15rem;
                color: #FF8C00;
                font-size: 0.36rem;
                margin-bottom: 0.25rem;
            }
            &:last-child{
                margin-top: 0.3rem;
                p{
                    height: 0.15rem;
                    color: green;
                    font-size: 0.36rem;
                    margin-bottom: 0.25rem;
                }
            }
        }
        li{
            flex: 1;
            line-height: 1rem;
            text-align: center;
            border-right: 1px solid #E4E4E4;
            &:nth-child(3){
                border-right: 1px solid #BCBCBC;
            }
            &:last-child{
                border-right: 0;
                p{
                    margin-top: 0.2rem;
                }
            }
            img{
                width: 0.6rem;
                height: 0.6rem;
                display: block;
                margin: 0 auto;
            }
        }
        .arrow{
            width: 0;
            height: 0;
            border-top: 6px dashed transparent;
            border-bottom: 6px dashed transparent;
            border-left: 5px solid #BCBCBC;
            margin-top: 28px;
        }
    }
    .pb_center{
        min-height: 100%;
        margin-top: 20px;
        ul{
            display: flex;
            height: 1.4rem;
            color: #666666;
            margin-bottom: 0.3rem;
        }
        li{
            flex: 1;
            line-height: 1rem;
            text-align: center;
            border-right: 1px solid #E4E4E4;
            &:last-child{
                border-right: 0;
                p{
                    margin-top: 0.2rem;
                }
            }
            img{
                width: 0.6rem;
                height: 0.6rem;
                display: block;
                margin: 0 auto;
            }
        }
        .arrow{
            width: 0;
            height: 0;
            border-top: 6px dashed transparent;
            border-bottom: 6px dashed transparent;
            border-left: 5px solid #ffffff;
            margin-top: 28px;
        }
    }
    .pb_footer{
        width: 100%;
        max-height: 2.8rem;
        position: absolute;
        bottom: 0;
        left: 0;
    }
}
</style>
