<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
                <router-link tag='li' :to="'/detail/'+item.id" class="item border-bottom" v-for='item of list' :key='item.id'>
                    <img class="item-img" :src='item.imgUrl' alt="">
                    <div class="item-info">
                        <p class="item-title">{{item.title}}</p>
                        <p class="item-desc">{{item.desc}}</p>
                        <button class="item-button">查看详情</button>
                    </div>
                    
                </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeRecommend',
    props:{
        list:Array
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        line-height .8rem
        background #eee
        text-indent:.2rem
    .item
        overflow hidden
        display flex
        height 2.2rem
        .item-img
            width 2rem
            height 2rem
            padding: .1rem
        .item-info
            flex:1
            padding:.2rem
            min-width:0
            .item-title
                line-height .54rem
                font-size 0.32rem
                ellipsis()
            .item-desc
                line-height .4rem
                color:#ccc  
                ellipsis()
            .item-button
                line-height .3rem
                margin-top:.2rem
                background #ff9300
                padding:.13rem
                border-radius:.06rem
                color:#fff

</style>