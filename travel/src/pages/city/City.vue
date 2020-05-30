<template>
    <!-- 必须由一个外层标签包裹 -->
    <div>
        <city-header></city-header>
        <city-search :cities='cities'></city-search>
        <city-list :cities='cities' :hot='hotCities' :letter='letter'></city-list>
        <city-alphabet :cities='cities' @change="handleLeterChange"></city-alphabet>
    </div>
    
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
    name:'City',
    components:{
        CityHeader,  //名字必须与子组件的name一致
        CitySearch,
        CityList,
        CityAlphabet
    },
    data (){
        return{
            cities:{},
            hotCities:[],
            letter:'',
        }
    },
    methods:{
        getCityInfo (){
            axios.get('/api/city.json')
            .then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc(res){
            console.log(res)
            const re =res.data
            if(re.ret && re.data){
                const data = re.data
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
        },
        handleLeterChange(letter){
            this.letter = letter
        }
    },
    mounted (){
        this.getCityInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>