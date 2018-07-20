<template>
    <div>
        <!-- 顶部信息 -->
        <div class="frame_head">
            <div class="head_top">
                <img src="../../../../static/img/u3733.png" class="left">
                <div>
                    <div class="data">
                        <p>交易金额</p>
                        <p>23.02</p>
                    </div>
                </div>
            </div>
            <div class="head_bottom">
                <div class="hyaline"></div>
                <span>结算余额：777.77</span>
            </div>
        </div>

        <!-- 详细信息 -->
        <ul class="frame_panel">
            <li class="each_row">
                <div class="each_row_left">交易时间：</div>
                <div class="each_row_right">2018年5月12日 12:39:10</div>
            </li>
            <li class="each_row">
                <div class="each_row_left">收支方向：</div>
                <div class="each_row_right">支出</div>
            </li>
            <li class="each_row">
                <div class="each_row_left">交易金额：</div>
                <div class="each_row_right">23.02</div>
            </li>
            <li class="each_row">
                <div class="each_row_left">结算余额：</div>
                <div class="each_row_right">777.77</div>
            </li>
            <li class="each_row">
                <div class="each_row_left">交易内容：</div>
                <div class="each_row_right">广告扣费</div>
            </li>
            <li class="each_row">
                <div class="each_row_left">收支说明：</div>
                <div class="each_row_right">20183023 在设备 TL100202 上播放广告 2018220 所产生的扣费。</div>
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
    methods:{
        goBack(){
            this.$router.go(-1)
        }
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
    background-color: rgba(255, 133, 0, 0.5);
    color: #FFFFFF;
    border-right: 0;
}
</style>


