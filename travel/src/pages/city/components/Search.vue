<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
        </div>
        <div class="search-content" ref='search' v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id"
                    @click="handleCityClick(item.name)">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'CitySearch',
    props:{
        cities:Object
    },
    data (){
        return{
            keyword:'',
            list:[],
            timer:null
        }
    },
    computed:{
        hasNoData(){
            return !this.list.length
        }
    },
    methods:{
        handleCityClick(city){
            // 改变公有数据流程1调用dispatch 获取action 传入action的名字和要改变的值
            //没有异步操作可以直接调用commit
            this.$store.commit('changeCity',city)
            this.$router.push('/')
        }
    },
    watch:{
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list =[]
                return
            }
            this.timer = setTimeout(()=>{
                const result = []
                for(let i in this.cities){
                    this.cities[i].forEach((value)=>{
                        if(value.spell.indexOf(this.keyword)>-1 || value.name.indexOf(this.keyword)>-1){
                            result.push(value)
                        }
                    })
                }
                this.list = result
            },100)
        }
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.search)
    },
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        position relative
        height .72rem
        padding 0 .1rem
        background $bgColor
        .search-input
            position absolute
            left 0
            right 0
            margin 0 auto
            height .62rem
            line-height .62rem
            width 90%
            border-radius .06rem
            color #666
            padding 0 .3rem
            box-sizing border-box
            text-align center
    .search-content
        z-index 1
        overflow hidden
        position absolute
        top:1.58rem
        left 0
        right 0
        bottom 0 
        background #eee
        .search-item
            line-height .62rem
            padding-left .2rem
            color:#666
            background #fff
        
</style>