
export default{
    //4. 使用该方法盖面state里的值
    changeCity(state,city){
        state.city = city 
        //默认值
        try {
            localStorage.city = city
        }catch(e){

        }
        
    }
}