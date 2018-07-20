<template>
    <div>
        <!-- 顶部信息 -->
        <div class="frame_head">
            <div class="head_top">
                <img src="../../../../static/img/u3733.png" class="left">
                <div>
                    <div class="data">
                        <p>今日支出</p>
                        <p>250.25</p>
                    </div>
                </div>
                <img src="../../../../static/img/u3870.png" class="right" @click="goAll">
            </div>
            <div class="head_bottom">
                <div class="hyaline"></div>
                <span class="left">累计支出：777.77</span>
                <span class="right">账户余额：777.77</span>
            </div>
        </div>
        <!-- 列表 -->
        <LKlist :type="type" style="top:2.76rem"></LKlist>
        <!-- 底部按钮 -->
        <div class="frame_footer">
            <div>余额转出</div>
            <div style="background:linear-gradient(225deg,rgba(0, 145, 60, 1) 0%,rgba(0, 145, 60, 1) 0%,rgba(124, 252, 0, 1) 100%,rgba(124, 252, 0, 1) 100%);color:#FFFFFF">账户充值</div>
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
            type:'pay'
        }
    },
    methods:{
        // 跳转到全部支出记录页
        goAll(){
            this.$router.push('/ad/daily/all');
        }
    }
}
</script>

<style lang="less" scoped>
.frame_head{
    background: url('../../../../static/img/u3873.png');
    background-size: cover;
}
</style>
