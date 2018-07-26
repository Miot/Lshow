<template>
    <div id="container">
        <!-- 顶部信息 -->
        <div class="frame_head">
            <div class="head_top">
                <img src="../../../../static/img/u3733.png" class="left">
            </div>
            <div class="head_msg">
                <p>广告账户余额仅用于邻客秀平台投放广告</p>
                <p>连续30天未使用可申请转出到会员账户</p>
                <p>系统赠送和收益结转不可转出</p>
            </div>
        </div>
        <!-- 中间信息 -->
        <div class="deal_panel">
            <!-- 转入金额 -->
            <div v-if="!dealt">
                <div class="title">
                    <span>转入金额</span>
                    <span class="right">当前余额{{money}}元</span>
                    <input type="number" class="text_box" :placeholder="'最小转入金额10元'" v-model="input" >  
                </div>

                <div class="switch">
                    <div class="title" style="margin-top:0">
                        <span v-if="!wechatPay">从收益账户转入</span>
                        <span v-else>通过微信支付充值</span>
                        <span class="right" @click="showBottomModel">
                            <span v-if="!wechatPay">可用余额{{money}}元</span>
                            <span v-else>支持信用卡支付</span>
                            <img src="../../../../static/img/u3771.png" class="arrow">
                        </span>
                    </div>
                </div>
                <!-- 底部弹出层 -->
                <mt-popup class="popup" v-model="showPop" position="bottom">
                    <div class="popup_title">
                        <span>选择转入来源</span>
                        <span @click="showPop=false">关闭</span>
                    </div>
                    <ul class="popup_list">
                        <li @click="dealWay('incomeAccount')">
                            <div class="left popup_icon">
                                <img src="../../../../static/img/u4347.png">
                                <div class="right popup_trigon"></div> 
                            </div>
                            <span>从邻客秀收益账户转入</span>
                        </li>
                        <li @click="dealWay('wechatPay')">
                            <div class="left popup_icon">
                                <img src="../../../../static/img/u4349.png">
                                <div class="right popup_trigon"></div> 
                            </div>
                            <span>使用微信支付充值</span>
                        </li>
                    </ul>
                </mt-popup>

                <div class="rule" @click="isRead()">
                    <div class="image" :class="read?'read':''"></div>
                    <span>我已阅读并同意《<span class="statement">邻客秀广告金账户使用及管理条例</span>》</span>
                </div>
                <div class="panel_footer" @click="sureTransfer()" style="background-color:rgba(41, 181, 39, 1)">确认转入</div>
            </div>

            <!-- 转出结果 -->
            <div v-else>
                <div class="title">转入成功：</div>
                <div class="list">
                    <ul class="left_list">
                        <li>转入金额：</li>
                        <li>转入时间：</li>
                        <li>结算余额：</li>
                        <li>转入说明：</li>
                    </ul>
                    <ul class="right_list">
                        <li>100.00</li>
                        <li>2018.6.23 15:20:10</li>
                        <li>2012.02</li>
                        <li>通过 邻客秀收益账户转入广告金</li>
                    </ul>
                </div>
                <div class="panel_footer" style="background-color:rgba(174, 174, 174, 1)" @click="finishDeal">完成</div>
            </div>
        </div>
    </div>
</template>

<script>
import { Popup } from 'mint-ui';

export default {
    data(){
        return{
            dealt: false, // 是否完成转入操作
            read: false, // 是否已读条款
            money: '927.03', // 余额
            showPop: false, // 底部弹出层
            input: '', // 输入框
            wechatPay: false, //是否使用微信支付
        }
    },
    methods:{
        // 确认转入按钮
        sureTransfer(){
            this.dealt = true;
        },
        // 完成按钮
        finishDeal(){
            this.dealt = false;
        },
        // 弹出底部选择
        showBottomModel(){
            this.showPop = !this.showPop;
        },
        // 点击同意条款
        isRead(){
            this.read = !this.read;
        },
        // 选择支付方式
        dealWay(type){
            if(type == 'incomeAccount'){
                this.wechatPay = false;
            }else if(type == 'wechatPay'){
                this.wechatPay = true;
            };
            this.showPop=false;
        }
    },
    mounted(){
        window.flex(true);
    },
    beforeRouteLeave(to, from, next) {
        to.meta.keepAlive = false;
        next();
    }
}
</script>

<style lang="less" scoped>
.frame_head{
    background: url('../../../../static/img/u3873.png');
    background-size: cover;
}
.deal_panel{
    .switch{
        border-top: 0.02rem solid #E4E4E4;
        border-bottom: 0.02rem solid #E4E4E4;
        height: 1rem;
        line-height: 1rem;
        .arrow{
            width: 0.16rem;
            height: 0.3rem;
            float: right;
            position: relative; 
            left: 0.1rem;
            top: 0.35rem;
        }
    }
    .rule{
        height: 0.8rem;
        line-height: 0.8rem;
        color: #999999;
        font-size: 0.24rem;
        text-align: left;
        margin: 0.02rem 0.25rem;
        .statement{
            color: #29ABE2;
        }
        .image{
            display: inline-block;
            width: 0.4rem;
            height: 0.4rem;
            border-radius: 50%;
            position: relative;
            top: 0.12rem;
            background: url('../../../../static/img/u4330.png');
            background-size: cover;
        }
        .read{
            background: url('../../../../static/img/u4327.png');
            background-size: cover;
        }
    }
}
</style>
