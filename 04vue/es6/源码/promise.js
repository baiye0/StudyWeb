//动画

// function moveTo(el,x,y,cb){
//     el.style.transform = `translate(${x}px,${y}px)`;
//     setTimeout(() => {
//         cb && cb();
//     },1000);
// }

// let el =document.querySelector('div');
// document.querySelector('button').addEventListener('click',e => {
//     moveTo(el,100,100,() => {
//         console.log(1);
//     })
// });

//promise实现

function moveTo(el,x,y){
    return new Promise(resolve =>{
        console.log('开始执行');
        el.style.transform =`translate(${x}px,${y}px)`;
        setTimeout(() =>{
            resolve();
        },1000);
    });
}
let el = document.querySelector('div');
document.querySelector('button').addEventListener('click',()=>{
    moveTo(el,100,100)
    .then(()=>{
        console.log('第一次执行');
        return moveTo(el,300,100);
    })
    .then(()=>{
        console.log('第二次执行');
    });
});