import React,{Component, Fragment } from 'react';

class TodoList extends Component{

    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        //定义数据 固定语法
        this.state = {
            inputValue:'',
            list:[]
        }
    }
    handleInputChange(e){
        // 要改值需要调用该对象
        this.setState({
            inputValue : e.target.value
        })
        
        
    }
    hanleKeyUp(e){
        if(e.keyCode === 13){
            // this.state.inputValue
            const list = [...this.state.list,this.state.inputValue];
            this.setState({
                list,
                inputValue:''
            })

        }
    }
    handleItemclick(index){
        const list = [...this.state.list]
        list.splice(index,1);
        this.setState({
            list
        });
        console.log(index);
    }
    render(){
        return(
            <Fragment>
                <input type='text' 
                    value={this.state.inputValue }
                    //将this的指向设置为当前组件
                    onChange={this.handleInputChange}
                    onKeyUp={this.hanleKeyUp.bind(this)}
                    ></input>
                <ul>
                    {
                        // map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
                        this.state.list.map((value,index)=>{
                            return (
                            <li 
                                key={index} 
                                onClick={this.handleItemclick.bind(this,index)}
                            >{value}</li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        );
    }
}

//暴露出去
export default TodoList;