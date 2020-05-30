<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1603/c5/c5e2b211d10d4bb90.img.jpg_600x330_7e602298.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">千岛湖天迹热气球</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe889;</span>
                    39
                    </div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show='showGallary' @close="handleGallaryClose"></common-gallary> 
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name:'DetailBanner',
    data (){
        return {
            showGallary:false,
            imgs:['http://img1.qunarzz.com/sight/p0/1603/33/33efe194fc42cebf90.img.jpg_r_800x800_22cb5919.jpg','http://img1.qunarzz.com/sight/p0/1603/61/61132f0daa5c437b90.img.jpg_r_800x800_4e768d42.jpg']
        }
    },
    components:{
        CommonGallary
    },
    methods:{
        handleBannerClick(){
            this.showGallary = true
        },
        handleGallaryClose(){
            this.showGallary = false
        }
    }
}
</script>

<style lang='stylus' scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
            .banner-title
                flex 1
                font size 0.32rem
                padding 0 .2rem
            .banner-number
                font size 0.14em
                margin-top .2rem
                padding 0 .4rem
                height .32rem
                line-height .32rem
                border-radius .2rem
                background rgba(0,0,0,.8)
                .banner-icon
                    font-size .28rem



</style>