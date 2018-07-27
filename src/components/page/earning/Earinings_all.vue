<template>
    <div id="container">
        <div class="all_list" ref="scroll">
            <v-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill="false" class="Lklist">
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
import { Loadmore, Indicator } from 'mint-ui';

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
            opt:'' //支出还是收入，置空为显示全部
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
                    opt:opt
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
            })
        },

        // 查看详情
        goDetail(id){
            sessionStorage.setItem('itemID',id);
            this.$router.push('/earning/daily/detail');
        }
    },
    mounted(){
        window.flex(true);
        Indicator.open();
        this.getList();
    },
    activated(){
        // 还原滚动位置
        this.$refs.scroll.scrollTop = this.$store.state.allPageYOffset;
        this.$store.commit('setAllPageYOffset', 0);
    },
    beforeRouteLeave(to, from, next) {
        // 记录滚动位置
        this.$store.commit('setAllPageYOffset', this.$refs.scroll.scrollTop);
        from.meta.keepAlive = false;
        next();
    }
    
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
    border-top: 0.02rem solid #BCBCBC;
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
