# React学习笔记

## 1.重要概念

### 虚拟dom

概念：用JS对象的形式，来模拟页面上dom嵌套关系。

目的：dom元素的高效更新

![1590933899370](C:\Users\baiye\AppData\Roaming\Typora\typora-user-images\1590933899370.png)

![1590934555096](C:\Users\baiye\AppData\Roaming\Typora\typora-user-images\1590934555096.png)

### diff算法



## 2.脚手架工具

### 安装

```
npx create-react-app my-app
cd my-app
npm start
```

### 工程目录

```
package.json  项目说明
.gitignore 不想传到git上的文件目录
node_modules 第三方模块
public 项目文件内容
src  最重要的  index.js 入口文件
	App.js 渲染内容
```



## 3.JSX语法

  JSX，是一个 JavaScript 的语法扩展。我们建议在 React 中配合使用 JSX，JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式。JSX 可能会使人联想到模版语言，但它具有 JavaScript 的全部功能。 

有两种标签：

1.普通的html标签

2.组件标签 首字母要大写

```
Fragment
```



## 4.数据驱动的设计思想和事件绑定

```
基于数据驱动，所有操作都不直接操作dom，而是操作数据。

组件被创建的最初始的时间，constructor（一个类的构造函数）会最先被执行，在constructor中定义需要的数据。
super是关键字，它指代父类的实例（即父类的this对象），子类必须在constructor方法中调用super方法，否则新建实例时会报错，因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工，如果不调用super方法，子类就得不到this对象。

constructor(props){
super(props);【写constructor函数时，前两行（constructor和super）是固定写法】
this.state = {
inputValue: "Hello world",
list: []
};【定义组件的数据，必须写在this.state里面】
}

在onChange={this.handleInputChange.bind(this)}  函数执行时将this指向改为当前组件

在JSX语法里，如果属性等于一个js变量或js表达式的时候，表达式和变量的外面一定要包裹一个花括号=》<input type="text" value={this.state.inputValue}/>
```