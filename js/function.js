// 1.解决通过类名获取元素的兼容问题
function getClass(classname,father){
	father=father||document;     //判断有么有father
	if(father.getElementsByClassName){    //判断浏览器类型
		return father.getElementsByClassName(classname);   //如果有，将值返回
	}else {                             //IE浏览器
		var all=father.getElementsByTagName("*") //声明所有标签
		var newarr=[];
		for (var i = 0; i < all.length; i++) {     //将所有标签遍历出来
			if(check(classname,all[i].className)){  //判断是否相等
               newarr.push(all[i]);           //如果相等将元素添加到新数组中
			}
		};
		return newarr;
	}
}

function check(val,string){
	var arr=string.split(" ")    //将有多个类名的元素转换为数组
	for (var i in arr) {         
		if(arr[i]==val){          //将遍历出来的与已有的进行比较
			return true;
		}
	}
	return false;
    
}

//2016.8.30
//获取样式的值得兼容函数
function getStyle(brr,att){
	if(brr.currentStyle){
        return  brr.currentStyle[att];
	}else{
        return  getComputedStyle(brr,null)[att];
	}
}

//2016.8.31
//获取元素的兼容函数（可以支持函数 id class）
function $(selector,father){
	father=father||document;
	if(typeof selector=="string"){
		selector=selector.replace(/^\s*|\s*$/g,"")
		if(selector.charAt(0)=="."){
			return getClass(selector.substring(1),father);
		}else if(selector.charAt(0)=="#"){
			return document.getElementById(selector.substring(1));
		}else if(/^[a-z][1-6a-z]*/g.test(selector)){
			return document.getElementsByTagName(selector);
		}
	}else if(typeof selector=="function"){
		window.onload=function(){
			selector();
		}
	}


}
















