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
            <!-- 转出金额 -->
            <div v-if="!dealt">
                <div class="title">
                    <span>当前可转出金额：</span>
                    <span style="font-size:0.48rem;margin-left:20%">{{money}}</span>
                </div>
                <div class="title" style="margin:0.4rem 0.5rem 0.5rem">  
                    <span>转出金额：</span>
                    <input type="number" class="text_box" :placeholder="'最大可转出金额'+money+'元'" v-model="input" @keyup="moneyRule(input)">  
                </div>
                <div class="panel_footer" @click="sureTransfer()" style="background-color:rgba(41, 181, 39, 1)">确认转出</div>
            </div>
            <!-- 转出结果 -->
            <div v-else>
                <div class="title">转出成功：</div>
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
export default {
    data(){
        return{
            dealt: false, // 是否完成转出操作
            money: '122.32',
            input: ''
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
    background: url('../../../../static/img/u3873.png');
    background-size: cover;
}
</style>

