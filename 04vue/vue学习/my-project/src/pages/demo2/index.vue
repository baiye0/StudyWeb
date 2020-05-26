<template>
    <div>
        <div>选项数据</div>
        <div>——-------------------------------------------------------------</div>
        <div>{{msg}}</div>
        <div>——-------------------------------------------------------------</div>
        <div>computed:{{aDouble}}</div>
        <div>——-------------------------------------------------------------</div>
        <div @click="say('hi')">点击我</div>        
    </div>
</template>

<script>
export default {
    data(){  //定义变量
        return{
            msg:'helloworld',
            num:1
        }
    },
    computed:{  //定义函数
        aDouble(){
            return this.num*2;
        }
    },
    methods:{ //事件函数
        say(h){
            alert(h);
        }
    }
}
</script>