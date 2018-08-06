<template>
    <div>
        <!-- 顶部信息 -->
        <div class="frame_head">
            <div class="head_top">
                <img src="../../../../static/img/u3733.png" class="left">
                <div>
                    <div class="data">
                        <p>今日支出</p>
                        <p>{{adaccData.adaccTodayOut}}</p>
                    </div>
                </div>
                <img src="../../../../static/img/u3870.png" class="right" @click="goAll">
            </div>
            <div class="head_bottom">
                <div class="hyaline"></div>
                <span class="left">累计支出：{{adaccData.adaccTotalOut}}</span>
                <span class="right">账户余额：{{adaccData.adaccBlance}}</span>
            </div>
        </div>
        <!-- 列表 -->
        <ul class="list_head">
            <li>日期</li>
            <li>支出</li>
            <li>收益</li>
            <li>余额</li>
        </ul>
        <div class="daily_list scroller" ref="scroll">
            <LKlist :type="type"></LKlist>
        </div>
        <!-- 底部按钮 -->
        <div class="frame_footer">
            <div @click="goBalanceOut">余额转出</div>
            <div @click="goBalanceIn" style="background:linear-gradient(225deg,rgba(0, 145, 60, 1) 0%,rgba(0, 145, 60, 1) 0%,rgba(124, 252, 0, 1) 100%,rgba(124, 252, 0, 1) 100%);color:#FFFFFF">账户充值</div>
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
            type:'pay',
            adaccData:{
                adaccTodayOut:0,
                adaccTotalOut:0,
                adaccBlance:0
            }
        }
    },
    methods:{
        // 跳转到全部支出记录页
        goAll(){
            // 设置真实日期
            var temp = new Date(new Date());
            var mon = temp.getMonth() + 1;
            var day = temp.getDate();
            var currentDate = temp.getFullYear() + "-" + (mon<10?"0"+mon:mon) + "-" +(day<10?"0"+day:day);
            sessionStorage.setItem('currentDate',currentDate);
            this.$router.push('/ad/daily/all');
        },
        // 跳转到余额转出页
        goBalanceOut(){
            this.$router.push('/ad/out');
        },
        // 跳转到余额转入页
        goBalanceIn(){
            this.$router.push('/ad/in');
        },

        // 获取总栏数据
        getData(){
            let _this = this;
            this.LKshow.api.account.getAccount({
                success:function(data){
                    _this.adaccData.adaccTodayOut = data.adaccTodayOut;
                    _this.adaccData.adaccTotalOut = data.adaccTotalOut;
                    _this.adaccData.adaccBlance = data.adaccBlance;
                },
                fail:function(err){
                    console.log('获取总栏数据',err);
                }
            })
        },
    },
    beforeRouteEnter(to, from, next) {
        if( from.path == '/ad/daily/all' ){
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
    background: url('../../../../static/img/u3873.png');
    background-size: cover;
}
.list_head{
    color: #059637;
    border-bottom: 0.01rem solid #059637;
    li{
        border-color: #059637;
    }
}
</style>
