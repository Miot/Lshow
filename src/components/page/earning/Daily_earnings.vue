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
            <div class="head_bottom">
                <div class="hyaline"></div>
                <span class="left">累计收益：{{accData.accTotalIn}}</span>
                <span class="right">账户余额：{{accData.accBlance}}</span>
            </div>
        </div>
        <!-- 列表 -->
        <ul class="list_head">
            <li>日期</li>
            <li>收益</li>
            <li>支出</li>
            <li>余额</li>
        </ul>
        <div class="daily_list scroller" ref="scroll"> 
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
        // 跳转到当日详细收益页面
        goAll(){
            // 设置真实日期
            var temp = new Date(new Date());
            var mon = temp.getMonth() + 1;
            var day = temp.getDate();
            var currentDate = temp.getFullYear() + "-" + (mon<10?"0"+mon:mon) + "-" +(day<10?"0"+day:day);
            sessionStorage.setItem('currentDate',currentDate);
            this.$router.push('/earning/daily/all');
        },
        // 跳转到转出为广告金页
        goBalanceIn(){
            // location.href = '/ad/in';
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
        },
    },
    beforeRouteEnter(to, from, next) {
        if( from.path == '/earning/daily/all' ){
            to.meta.isBack = true;
        }
        next();
    },
    activated(){
        if(!this.$route.meta.isBack) {
            this.getData();
            // 重置滚动位置
            this.$store.commit('setDailyPageYOffset', 0);
        }else{
            // 还原滚动位置
            this.$refs.scroll.scrollTop = this.$store.state.dailyPageYOffset;
        }
        this.$route.meta.isBack = false;
    },
    beforeRouteLeave(to, from, next) {
        // 记录滚动位置
        this.$store.commit('setDailyPageYOffset', this.$refs.scroll.scrollTop);
        next();
    },
}
</script>

<style lang="less" scoped>
.frame_head{
    background: url('../../../../static/img/u3761.png');
    background-size: cover;
}
</style>


