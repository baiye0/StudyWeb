// 用于整合小组件
<template>
    <div>
        <!-- 使用局部组件 -->
      <home-header></home-header>   
      <home-swiper :list='swiperList'></home-swiper>
      <home-icons :list='iconList'></home-icons>
      <home-recommend :list='recommendList'></home-recommend>
      <home-weekend :list='weekendList'></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'  //引入局部组件
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
    name:'Home',
    components:{  //引入局部组件，注册到home组件里
        HomeHeader, //es6省略写法
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data (){
        return {
            lastCity:'',
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    computed:{
        ...mapState(['city'])
    },
    methods:{
        getHomeInfo(){
            axios.get('/api/index.json?city='+this.city)
            .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            res = res.data
            if(res.ret && res.data){
                const data = res.data
                this.swiperList = data.swiperList
                this.iconList = data.iconList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
            }
        }
    },
    mounted (){
        this.lastCity = this.city
        this.getHomeInfo()
    },
    activated(){
        if(this.lastCity !== this.city){
            this.lastCity = this.city
            this.getHomeInfo()
        }
    }
}
</script>

<style>
</style>