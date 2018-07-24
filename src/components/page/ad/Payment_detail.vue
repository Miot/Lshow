<template>
    <div>
        <!-- 顶部信息 -->
        <div class="frame_head">
            <div class="head_top">
                <img src="../../../../static/img/u3733.png" class="left">
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
        <ul class="frame_panel">
            <li class="each_row">
                <div class="each_row_left">交易时间：</div>
                <div class="each_row_right">{{outlayTime}}</div>
            </li>
            <li class="each_row">
                <div class="each_row_left">收支方向：</div>
                <div class="each_row_right">{{outlayOpt}}</div>
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
                <div class="each_row_right">{{outlayText}}</div>
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
            outlayTime:0,
            outlayOpt:'',
            outlayText:'',
            remake:''
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        },
        // 获取数据
        getData(){
            let _this = this;
            this.LKshow.api.account.getOutLog({
                id:sessionStorage.getItem('itemID'),
                success: function(data) {
                    _this.money = data.money;
                    _this.balance = data.balance;
                    _this.outlayTime = data.outlayTime;
                    _this.outlayOpt = data.outlayOpt;
                    _this.outlayText = data.outlayText;
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
    beforeRouteLeave(to, from, next) {
      if (to.path == "/ad/daily" || to.path == "/ad/daily/all") {
        to.meta.keepAlive = true;
      } else {
        to.meta.keepAlive = false;
      }
      next();
    }
}
</script>

<style lang="less" scoped>
.frame_head{
    background: url('../../../../static/img/u3873.png');
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
    background-color: rgba(96, 228, 13, 0.5);
    color: #FFFFFF;
    border-right: 0;
}
</style>


