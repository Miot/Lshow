<template>
    <v-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill="true" class="Lklist">
        <ul>
            <li v-for="item in list">
                <!-- 左侧图标 -->
                <div class="left icon">
                    <img :src="type=='earn'?'../../../static/img/u3770.png':'../../../static/img/u3883.png'">
                    <div class="trigon right"></div> 
                </div>
                <!-- 中间数据信息 -->
                <div class="data">
                    <div class="left" style="flex:3">
                        <p style="font-size:0.3rem">设备收益</p>
                        <p>2018年5月11日 11:20</p>
                    </div>
                    <div class="right" style="text-align:right;flex:1">
                        <p :style="{'color':type=='earn'?'green':'red'}" style="font-size:0.3rem">{{item}}</p>
                        <p>1183.24</p>
                    </div>
                </div>
                <!-- 右侧图标 -->
                <img src="../../../static/img/u3771.png" class="arrow">
            </li>
            <!-- 底部提示 -->
        </ul>
        <span class="noMoreMsg" v-if="noMore">没有更多了</span>
    </v-loadmore>
</template>

<script>
import { Loadmore } from 'mint-ui';

export default {
    props: ['type'],
    components: {  
        'v-loadmore':Loadmore
    },
    data(){
        return{
            noMore:false,
            allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
            list:[11111111111,222,11,2,6,3,2,4,9,1,444,44444],
            pageIndex:1, //第几页
            opt:0 //手指方向（0-收入 1-支出）
        }
    },
    methods:{
        // 查看详情
        goDetail(type){
            if(type == 'earn'){
                this.$router.push('/earning/daily/detail');
            }else if(type == 'pay'){
                this.$router.push('/ad/daily/detail');
            }
        },

        // 滚动区域上拉加载更多
        loadBottom(){  
            this.list.push("99999999999");
            this.allLoaded = true; // 全部数据加载完毕 无法拖动
            this.noMore = true; // 显示没有更多
            this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位  
        },

        // 获取数据
        getList(){
            let _this = this;
            if(this.type == 'earn'){
                this.LKshow.api.account.getInLogs({
                    data:{
                        size:15,
                        index:_this.pageIndex,
                    },
                    success: function(data) {
                        console.log(data);
                    },
                    fail: function(err) {
                        console.log(err);
                    }
                })
            }else{

            }
        }
    },
    mounted(){
        window.flex(true)
    }
}
</script>

<style lang="less" scoped>
.Lklist {
    ul{
        width: 100%;
        height: 100%;
        li{
            float: left;
            height: 1.2rem;
            width: 100%;
            border-bottom: 0.01rem solid #E4E4E4;
            img{
                width: 0.64rem;
                height: 0.64rem;
                margin: 0.25rem;
            }
            .icon{
                border-right: 0.01rem solid #E4E4E4;
                margin: auto;
                .trigon{
                    width: 0;
                    height: 0;
                    border-top: 0.12rem dashed transparent;
                    border-bottom: 0.12rem dashed transparent;
                    border-right: 0.12rem solid #E4E4E4;
                    margin-top: 0.45rem;
                }
            }
            .data{
                display: flex;
                margin-right: 0.4rem;
                div{
                    margin: 0.2rem 0 0 0.2rem;
                    height: 0.4rem;
                    line-height: 0.4rem;
                }
            }
            .arrow{
                width: 0.16rem;
                height: 0.28rem;
                float: right;
                position: relative;
                bottom: 0.4rem;
                margin-right: 0.12rem;
                margin-bottom: 0.12rem;
            }
        }
    }
}
.noMoreMsg{
    display: inline-block;
    height: 0.2rem;
    line-height: 0.2rem;
    width: 100%;
    margin: 0.3rem 0;
    font-size: 0.25rem;
    text-align: center;
    color:#424242;
}
</style>


