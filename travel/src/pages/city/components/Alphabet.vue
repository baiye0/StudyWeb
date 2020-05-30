<template>
    <ul class="list">
        <li class="item" v-for="(item,key) of cities" :key="key"
            @click="handleLetterClick"
            @touchstart="hanleTouchStart"
            @touchmove="hanleTouchMove"
            @touchend="hanleTouchEnd"
        >{{key}}</li>
    </ul>
</template>

<script>
export default {
    name:'CityAlphabet',
    props:{
        cities:Object
    },
    data(){
        return{
            touchStatus:false
        }
    },
    methods:{
        handleLetterClick:function(e){
            this.$emit('change',e.target.innerText)
            // console.log(e.target.innerText)
        },
        hanleTouchStart(){
            this.touchStatus = true
        },
        hanleTouchMove(){
            if(this.touchStatus){
                
            }
        },
        hanleTouchEnd(){
            this.touchStatus = false
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        right 0
        top 1.58rem
        bottom 0
        width .4rem
        .item
            line-height .4rem
            text-align center
            color $bgColor
</style>