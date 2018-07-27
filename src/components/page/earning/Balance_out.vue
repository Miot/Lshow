<template>
    <div id="container">
        <!-- 顶部信息 -->
        <div class="frame_head">
            <div class="head_top">
                <img src="../../../../static/img/u3720.png" class="left">
            </div>
            <div class="head_msg">
                <p>每周二为收益提现日</p>
                <p>合作收益每周二 9:00 ~ 21:00 可提现到绑定银行卡</p>
                <p>每天最多可提现3次，每次最高提现额10,000元</p>
                <p>提现金额最迟24小时内到账提现指定账户</p>
                <p>提现仅支持体现到绑定同名银行卡或实名微信账户</p>
            </div>
        </div>
        <!-- 中间信息 -->
        <div class="deal_panel">
            <!-- 转出金额 -->
            <div v-if="!dealt">
                <div class="title" style="color:#FF4400">
                    <span>转出金额</span>
                    <span class="right">当前可提现余额{{money}}元</span>
                    <input type="number" class="text_box" :placeholder="'最小转出金额100元'" v-model="input" @keyup="moneyRule(input)">  
                </div>
               
                <div class="switch">
                    <div class="title" style="margin-top:0;color:#FF4400">
                        <span>到账账户</span>
                        <span class="right" @click="showBottomModel">
                            <span>微信账户余额</span>
                            <img src="../../../../static/img/u3771.png" class="arrow">
                        </span>
                    </div>
                </div>
                <!-- 底部弹出层 -->
                <mt-popup class="popup" v-model="showPop" position="bottom">
                    <div class="popup_title">
                        <span>选择转入来源</span>
                        <span @click="showPop=false" style="color:#FF4400">关闭</span>
                    </div>
                    <ul class="popup_list">
                        <li @click="dealWay('wechat')">
                            <div class="left popup_icon">
                                <img src="../../../../static/img/u4349.png">
                                <div class="right popup_trigon"></div> 
                            </div>
                            <span>转出到微信账户余额</span>
                        </li>
                        <li @click="dealWay('bankCard')">
                            <div class="left popup_icon">
                                <img src="../../../../static/img/u4429.png">
                                <div class="right popup_trigon"></div> 
                            </div>
                            <span>工商银行</span>
                        </li>
                    </ul>
                </mt-popup>

                <div class="panel_footer" @click="sureTransfer()" style="background:#FF4400">确认转出</div>
            </div>
            <!-- 转出结果 -->
            <div v-else>
                <div class="title" style="color:#FF4400">转出成功：</div>
                <div class="list">
                    <ul class="left_list">
                        <li>转出金额：</li>
                        <li>转出时间：</li>
                        <li>结算余额：</li>
                        <li>转出说明：</li>
                    </ul>
                    <ul class="right_list">
                        <li>100.00</li>
                        <li>2018.6.23 15:20:10</li>
                        <li>22.32</li>
                        <li>充值后未使用的广告金转出到账户余额。</li>
                    </ul>
                </div>
                <div class="panel_footer" style="background-color:rgba(174, 174, 174, 1)" @click="finishDeal">完成</div>
            </div>
        </div>
    </div>
</template>

<script>
import { Popup, Toast } from 'mint-ui';

export default {
    data(){
        return{
            dealt: false, // 是否完成转出操作
            showPop: false, // 底部弹出层
            input: '',
            money: '100.01'
        }
    },
    methods:{
        // 确认转出按钮
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
        // 选择转出方式
        dealWay(type){
            if(type == 'wechat'){
                
            }else if(type == 'bankCard'){
                Toast({
                    message: '暂不支持',
                    duration: 1500
                });
            };
            this.showPop=false;
        },
        // 金额验证
        moneyRule(value){
            let reg = /(^[1-9](\d+)?(\.\d{1,2})?$)|(^0$)|(^\d\.\d{1,2}$)/;
            let max = 100;
            if( value <= max ){
                if(!reg.test(value)){
                    this.input = '';
                }else{
                    this.input = value;
                }
            }else{
                this.input = '';
            }
        }
    },
    mounted(){
        window.flex(true);
    }
}
</script>

<style lang="less" scoped>
.frame_head{
    background: url('../../../../static/img/u3761.png');
    background-size: cover;
}
.head_msg{
    text-align: center;
    top: 0.5rem;
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
}
</style>
