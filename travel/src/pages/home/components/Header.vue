
<template>
 <!-- 在这里就可以进行header组件的开发了 -->
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市景点游玩主题
        </div>
        <!-- 点击跳转 -->
        <router-link to='/city'>
            <div class="header-right">
                <!-- 第三步使用vuex -->
                {{this.city}}
                <span class="iconfont arrow-icon">&#xe6aa;</span>
                </div>
        </router-link>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'HomeHeader',
    //映射
    computed:{
        ...mapState(['city'])
    }
}
</script>

// 只对当前组件有效scoped
<style lang="stylus" scoped>
// 因为图片给的是2倍像素所以86要改成43px
// 1rem = html font-size =50px;
    @import '~styles/varibles.styl';
    .header
        background:$bgColor
        display:flex
        line-height: $headerHeight
        color :#fff;
        .header-left
            width:.64rem
            float:left
            .back-icon
                text-align:center
                font-size:.4rem
        .header-input
            flex:1
            height :.64rem
            line-height :.64rem
            margin-top :.12rem
            margin-left :.2rem
            padding-left:.2rem
            background :#fff;
            border-radius:.1rem
            color:#ccc
        .header-right
            min-width :1.04rem
            padding:0 .1rem
            float:right
            text-align:center
            color:#fff
            .arrow-icon
                margin-left:-.04rem
                font-size:.24rem
</style>