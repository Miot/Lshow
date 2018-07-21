<template>
    <ul class="Lklist">
        <li @click="goDetail('earn')">
            <!-- 左边图标 -->
            <div class="left icon">
                <img :src="type=='earn'?'../../../static/img/u3770.png':'../../../static/img/u3883.png' ">
                <div class="trigon right"></div> 
            </div>
            <!-- 中间信息 -->
            <div class="data">
                <span class="left">
                    <p>设备收益</p>
                    <p>2018年5月11日 11:20</p>
                </span>
                <span class="right">
                    <p :style="{'color':type=='earn'?'green':'red'}">910.28</p>
                    <p>1183.24</p>
                </span>
            </div>
            <!-- 右边箭头 -->
            <img src="../../../static/img/u3771.png" class="arrow">
        </li>
        <li @click="goDetail('pay')">
            <!-- 左边图标 -->
            <div class="left icon">
                <img :src="type=='earn'?'../../../static/img/u3770.png':'../../../static/img/u3883.png' ">
                <div class="trigon right"></div> 
            </div>
            <!-- 中间信息 -->
            <div class="data">
                <span class="left">
                    <p>设备收益</p>
                    <p>2018年5月11日 11:20</p>
                </span>
                <span class="right">
                    <p :style="{'color':type=='earn'?'green':'red'}">910.28</p>
                    <p>1183.24</p>
                </span>
            </div>
            <!-- 右边箭头 -->
            <img src="../../../static/img/u3771.png" class="arrow">
        </li>
        <li>
            <!-- 左边图标 -->
            <div class="left icon">
                <img :src="type=='earn'?'../../../static/img/u3770.png':'../../../static/img/u3883.png' ">
                <div class="trigon right"></div> 
            </div>
            <!-- 中间信息 -->
            <div class="data">
                <span class="left">
                    <p>设备收益</p>
                    <p>2018年5月11日 11:20</p>
                </span>
                <span class="right">
                    <p :style="{'color':type=='earn'?'green':'red'}">910.28</p>
                    <p>1183.24</p>
                </span>
            </div>
            <!-- 右边箭头 -->
            <img src="../../../static/img/u3771.png" class="arrow">
        </li>
        <li>
            <!-- 左边图标 -->
            <div class="left icon">
                <img :src="type=='earn'?'../../../static/img/u3770.png':'../../../static/img/u3883.png' ">
                <div class="trigon right"></div> 
            </div>
            <!-- 中间信息 -->
            <div class="data">
                <span class="left">
                    <p>设备收益</p>
                    <p>2018年5月11日 11:20</p>
                </span>
                <span class="right">
                    <p :style="{'color':type=='earn'?'green':'red'}">910.28</p>
                    <p>1183.24</p>
                </span>
            </div>
            <!-- 右边箭头 -->
            <img src="../../../static/img/u3771.png" class="arrow">
        </li>
        <li>
            <!-- 左边图标 -->
            <div class="left icon">
                <img :src="type=='earn'?'../../../static/img/u3770.png':'../../../static/img/u3883.png' ">
                <div class="trigon right"></div> 
            </div>
            <!-- 中间信息 -->
            <div class="data">
                <span class="left">
                    <p>设备收益</p>
                    <p>2018年5月11日 11:20</p>
                </span>
                <span class="right">
                    <p :style="{'color':type=='earn'?'green':'red'}">910.28</p>
                    <p>1183.24</p>
                </span>
            </div>
            <!-- 右边箭头 -->
            <img src="../../../static/img/u3771.png" class="arrow">
        </li>
        <li>
            <!-- 左边图标 -->
            <div class="left icon">
                <img :src="type=='earn'?'../../../static/img/u3770.png':'../../../static/img/u3883.png' ">
                <div class="trigon right"></div> 
            </div>
            <!-- 中间信息 -->
            <div class="data">
                <span class="left">
                    <p>设备收益</p>
                    <p>2018年5月11日 11:20</p>
                </span>
                <span class="right">
                    <p :style="{'color':type=='earn'?'green':'red'}">910.28</p>
                    <p>1183.24</p>
                </span>
            </div>
            <!-- 右边箭头 -->
            <img src="../../../static/img/u3771.png" class="arrow">
        </li>
        <li>
            <!-- 左边图标 -->
            <div class="left icon">
                <img :src="type=='earn'?'../../../static/img/u3770.png':'../../../static/img/u3883.png' ">
                <div class="trigon right"></div> 
            </div>
            <!-- 中间信息 -->
            <div class="data">
                <span class="left">
                    <p>设备收益</p>
                    <p>2018年5月11日 11:20</p>
                </span>
                <span class="right">
                    <p :style="{'color':type=='earn'?'green':'red'}">910.28</p>
                    <p>1183.24</p>
                </span>
            </div>
            <!-- 右边箭头 -->
            <img src="../../../static/img/u3771.png" class="arrow">
        </li>
        <li>
            <!-- 左边图标 -->
            <div class="left icon">
                <img :src="type=='earn'?'../../../static/img/u3770.png':'../../../static/img/u3883.png' ">
                <div class="trigon right"></div> 
            </div>
            <!-- 中间信息 -->
            <div class="data">
                <span class="left">
                    <p>设备收益</p>
                    <p>2018年5月11日 11:20</p>
                </span>
                <span class="right">
                    <p :style="{'color':type=='earn'?'green':'red'}">910.28</p>
                    <p>1183.24</p>
                </span>
            </div>
            <!-- 右边箭头 -->
            <img src="../../../static/img/u3771.png" class="arrow">
        </li>
        <li>
            <!-- 左边图标 -->
            <div class="left icon">
                <img :src="type=='earn'?'../../../static/img/u3770.png':'../../../static/img/u3883.png' ">
                <div class="trigon right"></div> 
            </div>
            <!-- 中间信息 -->
            <div class="data">
                <span class="left">
                    <p>设备收益</p>
                    <p>2018年5月11日 11:20</p>
                </span>
                <span class="right">
                    <p :style="{'color':type=='earn'?'green':'red'}">910.28</p>
                    <p>1183.24</p>
                </span>
            </div>
            <!-- 右边箭头 -->
            <img src="../../../static/img/u3771.png" class="arrow">
        </li>
        <li>
            <!-- 左边图标 -->
            <div class="left icon">
                <img :src="type=='earn'?'../../../static/img/u3770.png':'../../../static/img/u3883.png' ">
                <div class="trigon right"></div> 
            </div>
            <!-- 中间信息 -->
            <div class="data">
                <span class="left">
                    <p>设备收益</p>
                    <p>2018年5月11日 11:20</p>
                </span>
                <span class="right">
                    <p :style="{'color':type=='earn'?'green':'red'}">910.28</p>
                    <p>1183.24</p>
                </span>
            </div>
            <!-- 右边箭头 -->
            <img src="../../../static/img/u3771.png" class="arrow">
        </li>
        <li>
            <!-- 左边图标 -->
            <div class="left icon">
                <img :src="type=='earn'?'../../../static/img/u3770.png':'../../../static/img/u3883.png' ">
                <div class="trigon right"></div> 
            </div>
            <!-- 中间信息 -->
            <div class="data">
                <span class="left">
                    <p>设备收益</p>
                    <p>2018年5月11日 11:20</p>
                </span>
                <span class="right">
                    <p :style="{'color':type=='earn'?'green':'red'}">910.28</p>
                    <p>1183.24</p>
                </span>
            </div>
            <!-- 右边箭头 -->
            <img src="../../../static/img/u3771.png" class="arrow">
        </li>
    </ul>
</template>

<script>
export default {
    props: ['type'],
    methods:{
        // 查看详情
        goDetail(type){
            if(type == 'earn'){
                this.$router.push('/earning/daily/detail');
            }else if(type == 'pay'){
                this.$router.push('/ad/daily/detail');
            }
        },
    }
}
</script>

<style lang="less" scoped>
.Lklist {
    width: 100%;
    overflow: auto;
    top: 0;
    position: absolute;
    z-index: 10;
    bottom: 1rem;
    li{
        height: 1.2rem;
        width: 100%;
        overflow: hidden;
        border-top: 0.02rem solid #E4E4E4;
        img{
            width: 0.64rem;
            height: 0.64rem;
            margin: 0.25rem;
        }
        .icon{
            border-right: 0.01rem solid #E4E4E4;
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
            margin: 0.1rem 0 0.1rem 0.2rem;
            float: left;
            height: 0.49rem;
            line-height: 0.49rem;
            // min-width: 64.5%;
            span:last-child{
                text-align: right;
                position: absolute;
                right: 0.7rem;
            }
            span p{
                &:first-child{
                    font-size:0.32rem;
                }
                &:last-child{
                    color: #AEAEAE;
                }
            }
        }
        .arrow{
            position: absolute;
            right: 0;
            width: 0.16rem;
            height: 0.28rem;
            margin: 0.45rem 0.2rem 0.45rem;
        }
    }
}
</style>


