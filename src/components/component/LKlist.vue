<template>
    <v-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill="false" class="LKlist">
        <ul>
            <li v-for="(item,index) in mainList" :key="index" @click="type == 'earn'?goAll(item.incomeDate):goAll(item.outlayDate)" :class=" type == 'earn'?'each_li':'each_li paymentstyle' ">
                <ul :class="item.isToday?'highlight':''">
                    <li>{{type == 'earn'?item.incomeDate:item.outlayDate}}</li>
                    <li>{{type == 'earn'?item.inMoney:item.outMoney}}</li>
                    <li>{{type !== 'earn'?item.inMoney:item.outMoney}}</li>
                    <li>{{item.balance}}</li>
                </ul>
            </li>
        </ul>
        <!-- 底部提示 -->
        <span class="noMoreMsg" v-if="noMore">没有更多了</span>
    </v-loadmore>
</template>

<script>
import { Loadmore, Indicator } from 'mint-ui';

export default {
    props: ['type'],
    components: {  
        'v-loadmore':Loadmore
    },
    data(){
        return{
            noMore:false, //是否是最后一页
            allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
            mainList:[],//存放数据
            pageIndex:1, //第几页
            pageSize:20, //一页多少条数据
        }
    },
    methods:{
        // 跳转到指定日期详细收益/支出页面
        goAll(date){
            if( date == '今日' ){
                var temp = new Date(new Date());
                var mon = temp.getMonth() + 1;
                var day = temp.getDate();
                var currentDate = temp.getFullYear() + "-" + (mon<10?"0"+mon:mon) + "-" +(day<10?"0"+day:day);
                sessionStorage.setItem('currentDate',currentDate);
            }else{
                sessionStorage.setItem('currentDate',date);
            }
            if(this.type == 'earn'){
                this.$router.push('/earning/daily/all');
            }else if(this.type == 'pay'){
                this.$router.push('/ad/daily/all');
            }
        },

        // 滚动区域上拉加载更多
        loadBottom(){  
            this.pageIndex = this.pageIndex + 1;
            this.getList();
            this.$refs.loadmore.onBottomLoaded(); // 固定方法，查询完要调用一次，用于重新定位  
        },

        // 获取数据
        getList(){
            let _this = this;
            Indicator.open();
            if(_this.type == 'earn'){
                _this.LKshow.api.account.getInDailyLogs({
                    data:{
                        size:_this.pageSize,
                        index:_this.pageIndex,
                    },
                    success: function(data) {
                        Indicator.close();
                        _this.noMore = data.last;
                        _this.allLoaded = data.last?true:false;
                        var temp = new Date();
                        var mon = temp.getMonth() + 1;
                        var day = temp.getDate();
                        var tody = temp.getFullYear() + "-" + (mon<10?"0"+mon:mon) + "-" +(day<10?"0"+day:day);
                        for(var i of data.list){
                            if(i.incomeDate == tody){
                                i.isToday = true;
                                i.incomeDate = '今日';
                            }else{
                                i.isToday = false;
                            }
                        }
                        _this.mainList = _this.mainList.concat( data.list );
                    },
                    fail: function(err) {
                        Indicator.close();
                        console.log(err);
                    }
                })
            }else{
                _this.LKshow.api.account.getOutDailyLogs({
                    data:{
                        size:_this.pageSize,
                        index:_this.pageIndex,
                    },
                    success: function(data) {
                        Indicator.close();
                        _this.noMore = data.last;
                        _this.allLoaded = data.last?true:false;
                        var temp = new Date();
                        var mon = temp.getMonth() + 1;
                        var day = temp.getDate();
                        var tody = temp.getFullYear() + "-" + (mon<10?"0"+mon:mon) + "-" +(day<10?"0"+day:day);
                        for(var i of data.list){
                            if(i.incomeDate == tody){
                                i.isToday = true;
                                i.incomeDate = '今日';
                            }else{
                                i.isToday = false;
                            }
                        }
                        _this.mainList = _this.mainList.concat( data.list );
                    },
                    fail: function(err) {
                        Indicator.close();
                        console.log(err);
                    }
                })
            }
        }
    },
    activated(){
        window.flex(true);
        if(!this.$route.meta.isBack){
            this.mainList = [];
            this.noMore = false; 
            this.allLoaded = false; 
            this.pageIndex = 1;
            this.getList();
        }
    },
}
</script>
