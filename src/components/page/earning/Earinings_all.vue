<template>
    <div id="container">
        <div class="timePicker">
            <div class="side" @click="preDate()">
                <img src="../../../../static/img/arrow_left.png">
                前一天
            </div>
            <span>{{showDate}}</span>
            <div class="side" @click="nextDate()">
                后一天
                <img src="../../../../static/img/arrow_right.png">
            </div>
        </div>
        <div class="all_list scroller" ref="scroll">
            <v-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill="false" class="dailyList">
                <ul>
                    <li v-for="(item,index) in mainList" :key="index" @click="goDetail(item.id)">
                        <!-- 左侧图标 -->
                        <div class="left icon">
                            <img src="../../../../static/img/u3770.png">
                            <div class="trigon right"></div> 
                        </div>
                        <!-- 中间数据信息 -->
                        <div class="data">
                            <div class="left" style="flex:3">
                                <p style="font-size:0.3rem">{{item.incomeText}}</p>
                                <p>{{item.incomeTime}}</p>
                            </div>
                            <div class="right" style="text-align:right;flex:1">
                                <p style="font-size:0.3rem;color:green">{{item.money}}</p>
                                <p>{{item.balance}}</p>
                            </div>
                        </div>
                        <!-- 右侧图标 -->
                        <img src="../../../../static/img/u3771.png" class="arrow">
                    </li>
                    <!-- 底部提示 -->
                </ul>
                <span class="noMoreMsg" v-if="noMore">没有更多了</span>
            </v-loadmore>
        </div>
        <div class="ed_footer">
            <div @click="pageIndex=1;mainList=[];getList(0);activeTag=0" :class="activeTag == 0? 'active' : '' ">收入</div>
            <div @click="pageIndex=1;mainList=[];getList(1);activeTag=1" :class="activeTag == 1? 'active' : '' ">支出</div>
            <div @click="pageIndex=1;mainList=[];getList();activeTag=2" :class="activeTag == 2? 'active' : '' ">全部</div>
        </div>
    </div>
</template>

<script>
import { Loadmore, Indicator, Toast } from 'mint-ui';



export default {
    components: {  
        'v-loadmore':Loadmore
    },
    data(){
        return {
            activeTag:2,
            noMore:false, //是否是最后一页
            allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
            mainList:[],//存放数据
            pageIndex:1, //第几页
            pageSize:20, //一页多少条数据
            opt:'', //支出还是收入，置空为显示全部
            currentDate:'', // 传数据时用的日期
            showDate:'', // 前端显示的日期
            preIndex:1, // 后退了几天
            nextIndex:1, // 前进了几天
            dDate:0, // 传入日期之差
        }
    },
    methods:{
        // 滚动区域上拉加载更多
        loadBottom(){  
            this.pageIndex = this.pageIndex + 1;
            this.getList(this.opt);
            this.$refs.loadmore.onBottomLoaded(); // 固定方法，查询完要调用一次，用于重新定位  
        },

        // 获取数据
        getList(opt){
            let _this = this;
            this.opt = opt;
            Indicator.open();
            this.LKshow.api.account.getInLogs({
                data:{
                    size:_this.pageSize,
                    index:_this.pageIndex,
                    opt:opt,
                    incomeDate:_this.currentDate
                },
                success: function(data) {
                    Indicator.close();
                    _this.noMore = data.last;
                    _this.allLoaded = data.last?true:false;
                    _this.mainList = _this.mainList.concat( data.list );
                },
                fail: function(err) {
                    console.log(err);
                }
            });
        },

        // 查看详情
        goDetail(id){
            sessionStorage.setItem('itemID',id);
            this.$router.push('/earning/daily/detail');
        },

        // 获取“当前”日期
        getDate(){
            // 获取“当前”日期与真实日期的差值
            var s1 = sessionStorage.getItem('currentDate');
            s1 = new Date(s1.replace(/-/g, "/"));
            this.dDate = parseInt( (new Date().getTime() - s1.getTime()) / (1000 * 60 * 60 * 24));
            var date = new Date();
            date.setDate(date.getDate() - this.dDate);
            // 格式化标准时间
            this.formatDate(date);
        },

        // 前一天
        preDate(){
            if( sessionStorage.getItem('startDate') == this.currentDate ){
                Toast({
                    message: '无更早数据了',
                    duration: 1500
                })
            }else{
                var temp = new Date();
                temp.setDate(temp.getDate()-this.preIndex+this.nextIndex-1-this.dDate);  
                this.formatDate(temp);
                this.preIndex += 1;
                this.pageIndex = 1;
                this.mainList = [];
                this.getList();
            }
        },

        // 后一天
        nextDate(){
            var temp = new Date();
            var mon = temp.getMonth() + 1;
            var day = temp.getDate();
            var tempDate = temp.getFullYear() + "-" + (mon<10?"0"+mon:mon) + "-" +(day<10?"0"+day:day);
            if( tempDate == this.currentDate ){
                Toast({
                    message: '已是最新一天了',
                    duration: 1500
                })
            }else{
                temp.setDate(temp.getDate()+this.nextIndex-this.preIndex+1-this.dDate); 
                this.formatDate(temp);
                this.nextIndex += 1;
                this.pageIndex = 1;
                this.mainList = [];
                this.getList();
            }
        },
        
        // 把标准时间转换为 yyyy-mm-dd
        formatDate(date){
            var temp = new Date(date);
            var mon = temp.getMonth() + 1;
            var day = temp.getDate();
            this.currentDate = temp.getFullYear() + "-" + (mon<10?"0"+mon:mon) + "-" +(day<10?"0"+day:day);
            this.showDate =  temp.getFullYear() + "年" + mon + "月" + day + "日";
        }
    },
    beforeRouteEnter(to, from, next) {
        if( from.path == '/earning/daily/detail' ){
            to.meta.isBack = true;
        }
        next();
    },
    activated(){
        window.flex(true);
        if(!this.$route.meta.isBack) {
            this.activeTag = 2;
            this.noMore = false; 
            this.allLoaded = false;
            this.mainList = [];
            this.pageIndex = 1; 
            this.opt = '';
            this.getDate();
            this.getList();
            // 重置滚动位置
            this.$store.commit('setAllPageYOffset', 0);
        }else{
            // 还原滚动位置
            this.$refs.scroll.scrollTop = this.$store.state.allPageYOffset;
        }
        this.$route.meta.isBack = false;
    },
    beforeRouteLeave(to, from, next) {
        // 记录滚动位置
        this.$store.commit('setAllPageYOffset', this.$refs.scroll.scrollTop);
        next();
    },
}
</script>

<style lang="less" scoped>
.ed_footer{
    height: 1rem;
    line-height: 1rem;
    font-size: 0.32rem;
    color: #A1A1A1;
    position: absolute;
    bottom: 0;
    left:0;
    width: 100%;
    display: flex;
    text-align: center;
    border-top: 0.01rem solid #BCBCBC;
    div{
        background:#fff;
        flex: 1;
        &:nth-child(2){
            border-left: 0.01rem solid #BCBCBC;
            border-right: 0.01rem solid #BCBCBC;
        }
    }
    .active{
        background:linear-gradient(225deg, rgba(255, 51, 0, 1) 0%, rgba(255, 51, 0, 1) 0%, rgba(255, 153, 0, 1) 100%, rgba(255, 153, 0, 1) 100%);
        color:#fff;
    }
}
</style>
