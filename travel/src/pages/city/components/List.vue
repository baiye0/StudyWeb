<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.$store.state.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hot" :key="item.id"
                        @click='handleCityClick(item.name)'>
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key)  of cities" :key='key'
                :ref='key'>
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="item2 of item" :key="item2.id"
                        @click='handleCityClick(item2.name)'
                        >{{item2.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'CityList',
    props:{
        hot:Array,
        cities:Object,
        letter:String
    },
    methods:{
        handleCityClick(city){
            // 改变公有数据流程1调用dispatch 获取action 传入action的名字和要改变的值
            //没有异步操作可以直接调用commit
            this.$store.commit('changeCity',city)
            this.$router.push('/')
        }
    },
    mounted (){
        this.scroll = new Bscroll(this.$refs.wrapper,{click:true})
    },
    watch:{
        letter (){
            // 鼠标点击哪个字母，该字母区域显示
            if(this.letter){
                //获取dom节点
                const element = this.$refs[this.letter]
                // console.log(element[0])
                this.scroll.scrollToElement(element[0])
            }
            console.log(this.letter)
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .border-topbottom
        &:before
            border-color #777
        &:after
            border-color #777
    .border-bottom
        &:before
            border-color #777
    .list
        // 设置不滚动 用插件
        overflow hidden
        position absolute
        top 1.58rem
        left 0 
        right 0
        bottom 0
        .title
            line-height .54rem
            background #eee
            padding-left .2rem
            color #666
            font-size .26rem
        .button-list    
            overflow hidden
            padding .1rem .6rem .1rem .1rem
            .button-wrapper
                float left
                width 33.33%
                .button
                    padding .1rem 0
                    text-align center
                    margin .1rem
                    border .02rem solid #ccc
                    border-radius .06rem
        .item-list
            .item
                line-height .76rem
                padding-left .2rem
</style>