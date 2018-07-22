<template>
    <div id="container">
        <!-- 顶部信息 -->
        <div class="frame_head">
            <div class="head_top">
                <img src="../../../../static/img/u3720.png" class="left">
                <div>
                    <div class="data">
                        <p>今日收益</p>
                        <p>250.25</p>
                    </div>
                </div>
                <img src="../../../../static/img/u3870.png" class="right" @click="goAll">
            </div>
            <div class="head_bottom">
                <div class="hyaline"></div>
                <span class="left">累计收益：777.77</span>
                <span class="right">账户余额：777.77</span>
            </div>
        </div>
        <!-- 列表 -->
        <div class="daily_list">
            <LKlist :type="type"></LKlist>
        </div>
        <!-- 底部按钮 -->
        <div class="frame_footer">
            <div style="background:#fff">转出为广告金</div>
            <div style="background:linear-gradient(45deg,rgba(255, 136, 0, 1) 0%,rgba(255, 136, 0, 1) 0%,rgba(255, 0, 0, 1) 100%,rgba(255, 0, 0, 1) 100%);color:#FFFFFF">转出到银行卡</div>
        </div>
    </div>
</template>

<script>
import LKlist from '../../component/LKlist'
export default {
    components: {
        LKlist
    },
    data(){
        return {
            type:'earn'
        }
    },
    methods:{
        // 跳转到全部收益记录页
        goAll(){
            this.$router.push('/earning/daily/all');
        }
    }
}
</script>

<style lang="less" scoped>
.frame_head{
    background: url('../../../../static/img/u3761.png');
    background-size: cover;
}

</style>


