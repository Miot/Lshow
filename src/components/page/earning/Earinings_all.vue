<template>
    <div id="container">
        <div class="all_list">
            <LKlist :type="type"></LKlist> 
        </div>
        <div class="ed_footer">
            <div>收入</div>
            <div>支出</div>
            <div style="background:linear-gradient(225deg, rgba(255, 51, 0, 1) 0%, rgba(255, 51, 0, 1) 0%, rgba(255, 153, 0, 1) 100%, rgba(255, 153, 0, 1) 100%);color:#fff">全部</div>
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
            type:'earn'
        }
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
    border-top: 0.01rem solid #BCBCBC;
    div{
        background:#fff;
        flex: 1;
        &:first-child{
            border-right: 0.01rem solid #BCBCBC;
        }
    }
}
</style>
