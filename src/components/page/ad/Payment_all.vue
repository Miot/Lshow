<template>
    <div>
        <LKlist :type="type"></LKlist>
        <div class="ed_footer">
            <div>收入</div>
            <div>支出</div>
            <div style="background:linear-gradient(225deg, rgba(0, 153, 0, 1) 0%, rgba(0, 153, 0, 1) 0%, rgba(51, 255, 51, 1) 100%, rgba(51, 255, 51, 1) 100%);color:#fff">全部</div>
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
}
</script>

<style lang="less" scoped>
.ed_footer{
    z-index: 20;
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
        flex: 1;
        &:first-child{
            border-right: 0.01rem solid #BCBCBC;
        }
    }
}
</style>
