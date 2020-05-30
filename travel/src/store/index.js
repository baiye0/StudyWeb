// 引用vuex 第一步

import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)
let defaultCity = '上海'
try{
    if(localStorage.city){
        defaultCity = localStorage.city
    }
}catch(e){

}

//改变公有数据流程
export default new Vuex.Store({
    state,
    //2.创建actions 这里的方法与改变的地方一致
    mutations 
        //4. 使用该方法盖面state里的值
    
})