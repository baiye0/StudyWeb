

//哪些元素有动画
var ScreenAnimateElements = {
	'.screen-1' : [
		'.screen-1__heading',
		'.screen-1__phone',
		'.screen-1__shadow',
	],
	'.screen-2':[
		'.screen-2__heading',
		'.screen-2__phone',
		'.screen-2__subheading',
		'.screen-2__point',
		'.screen-2__point_i_1',
		'.screen-2__point_i_2',
		'.screen-2__point_i_3',
	],
	'.screen-3' : [
		'.screen-3__heading',
		'.screen-3__phone',
		'.screen-3__subheading',
		'.screen-3__features',
	],
	'.screen-4' : [
		'.screen-4__heading',
		'.screen-4__subheading',
		'.screen-4__type__item__i_1',
		'.screen-4__type__item__i_2',
		'.screen-4__type__item__i_3',
		'.screen-4__type__item__i_4',

	],
	'.screen-5' : [
		'.screen-5__heading',
		'.screen-5__subheading',
		'.screen-5__bg',
	],

};


// querySelector是返回css选择器中的元素 如querySelector('.css'),是返回类名为css的元素

function setScreenAnimate(screenCls){
	var screen = document.querySelector(screenCls); //获取当前屏 ，传入的是类名
	var animateElements = ScreenAnimateElements[screenCls];  //需要设置动画的元素
	var isSetAnimateClass = false; //是否有初始化子元素的样式
	var isAnimateDone = false; //当前屏幕下所有子元素的状态是否为done

	screen.onclick = function(){

		//初始化样式 A A__init
		if(isSetAnimateClass == false){
			for(var i=0;i<animateElements.length;i++){
				var element = document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute('class');
				element.setAttribute('class',baseCls + ' '+animateElements[i].substr(1)+'_animate_init');

			}
			isSetAnimateClass = true;
			return ;
		}


		//切换所有 animateElements 的 init ————> done
		if(isAnimateDone == false){
			for(var i=0;i<animateElements.length;i++){
				var element =document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute('class');
				element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
			}
			isAnimateDone = true;
			return ;
		}

		//切换所有 animateElements 的 done ————> init
		if(isAnimateDone == true){
			for(var i=0;i<animateElements.length;i++){
				var element = document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute('class');
				element.setAttribute('class',baseCls.replace('_animate_done','_animate_init'));
			}
			isAnimateDone = false;
			return ;
		}
	}
}

for(k in ScreenAnimateElements){
	setScreenAnimate(k);
}
