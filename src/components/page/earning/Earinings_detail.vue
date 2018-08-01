<template>
    <div>
        <!-- 顶部信息 -->
        <div class="frame_head">
            <div class="head_top">
                <img src="../../../../static/img/u3720.png" class="left">
                <div>
                    <div class="data">
                        <p>交易金额</p>
                        <p>{{money}}</p>
                    </div>
                </div>
            </div>
            <div class="head_bottom">
                <div class="hyaline"></div>
                <span>结算余额：{{balance}}</span>
            </div>
        </div>

        <!-- 详细信息 -->
        <ul class="detail_panel">
            <li class="each_row">
                <div class="each_row_left">交易时间：</div>
                <div class="each_row_right">{{incomeTime}}</div>
            </li>
            <li class="each_row">
                <div class="each_row_left">收支方向：</div>
                <div class="each_row_right">{{incomeOpt}}</div>
            </li>
            <li class="each_row">
                <div class="each_row_left">交易金额：</div>
                <div class="each_row_right">{{money}}</div>
            </li>
            <li class="each_row">
                <div class="each_row_left">结算余额：</div>
                <div class="each_row_right">{{balance}}</div>
            </li>
            <li class="each_row">
                <div class="each_row_left">交易内容：</div>
                <div class="each_row_right">{{incomeText}}</div>
            </li>
            <li class="each_row">
                <div class="each_row_left">收支说明：</div>
                <div class="each_row_right">{{remake}}</div>
            </li>
        </ul>

        <!-- 底部按钮 -->
        <div class="frame_footer" @click="goBack">
            <div>返回</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            money:0,
            balance:0,
            incomeTime:0,
            incomeOpt:'',
            incomeText:'',
            remake:''
        }
    },
    methods:{
        // 返回
        goBack(){
            this.$router.go(-1);
        },
        // 获取数据
        getData(){
            let _this = this;
            this.LKshow.api.account.getInLog({
                    id:sessionStorage.getItem('itemID'),
                    success: function(data) {
                        _this.money = data.money;
                        _this.balance = data.balance;
                        _this.incomeTime = data.incomeTime;
                        _this.incomeOpt = data.incomeOpt;
                        _this.incomeText = data.incomeText;
                        _this.remake = data.remake;
                    },
                    fail: function(err) {
                        console.log(err);
                    }
                })
        }
    },
    mounted(){
        this.getData();
    },
    beforeRouteLeave(to,from,next){
        to.meta.isBack = false;
        next();
    }
}
</script>

<style lang="less" scoped>
.frame_head{
    background: url('../../../../static/img/u3761.png');
    background-size: cover;
    .head_bottom{
        text-align: center;
        span{
            position: relative;
            bottom: 0.55rem;
        }
    }
}   
.frame_footer{
    border-top: 0;
    background-color: rgba(255, 133, 0, 0.5);
    color: #FFFFFF;
    border-right: 0;
}
</style>


