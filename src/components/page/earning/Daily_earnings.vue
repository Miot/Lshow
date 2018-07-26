<template>
    <div id="container">
        <!-- 顶部信息 -->
        <div class="frame_head">
            <div class="head_top">
                <img src="../../../../static/img/u3720.png" class="left">
                <div>
                    <div class="data">
                        <p>今日收益</p>
                        <p>{{accData.accTodayIn}}</p>
                    </div>
                </div>
                <img src="../../../../static/img/u3870.png" class="right" @click="goAll">
            </div>
            <div class="head_bottom" @click="test()">
                <div class="hyaline"></div>
                <span class="left">累计收益：{{accData.accTotalIn}}</span>
                <span class="right">账户余额：{{accData.accBlance}}</span>
            </div>
        </div>
        <!-- 列表 -->
        <div class="daily_list" ref="scroll"> 
            <LKlist :type="type"></LKlist>
        </div>
        <!-- 底部按钮 -->
        <div class="frame_footer">
            <div @click="goBalanceIn" style="background:#fff">转出为广告金</div>
            <div @click="goBalanceOut" style="background:linear-gradient(45deg,rgba(255, 136, 0, 1) 0%,rgba(255, 136, 0, 1) 0%,rgba(255, 0, 0, 1) 100%,rgba(255, 0, 0, 1) 100%);color:#FFFFFF">余额转出</div>
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
            type:'earn',
            accData:{
                accTodayIn:0,
                accTotalIn:0,
                accBlance:0,
            }
        }
    },
    methods:{
        test(){
            this.$refs.scroll.scrollTop = 720.7999877929688
        },
        // 跳转到全部收益记录页
        goAll(){
            this.$router.push('/earning/daily/all');
        },
        // 跳转到转出为广告金页
        goBalanceIn(){
            this.$router.push('/ad/in');
        },
        // 跳转到余额转出页
        goBalanceOut(){
            this.$router.push('/earning/out');
        },
        // 获取总栏数据
        getData(){
            let _this = this;
            this.LKshow.api.account.getAccount({
                success:function(data){
                    _this.accData.accTodayIn = data.accTodayIn;
                    _this.accData.accTotalIn = data.accTotalIn;
                    _this.accData.accBlance = data.accBlance;
                },
                fail:function(err){
                    console.log('获取总栏数据',err);
                }
            })
        }
    },
    mounted(){
        // this.getData();
        console.log('刷新了');
    },
    beforeRouteLeave(to, from, next) {
        let _this = this;
        from.meta.keepAlive = false;
        if(to.path == '/personcenter'){
            _this.$destroy();
        }
        next();
    }
}
</script>

<style lang="less" scoped>
.frame_head{
    background: url('../../../../static/img/u3761.png');
    background-size: cover;
}
</style>


