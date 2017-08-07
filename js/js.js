/*分页显示*/
window.onload=function (){
   var zhong1_l_bot=getClass("zhong1_l_bot")//获取元素
   var zhong1_l_con1=getClass("zhong1_l_con1")
   var sanjiao=getClass("sanjiao")
   for(var i=0;i<zhong1_l_con1.length;i++){
   //遍历数组
   	 zhong1_l_con1[i].name=i //解决小标
   	 zhong1_l_con1[i].onmouseover=function(){
   	 	//添加移入事件
   	 	for(j=0;j<zhong1_l_bot.length;j++){
   	 		//添加相同属性，取不同下标
   	 	 zhong1_l_bot[j].className="zhong1_l_bot"
   	 	 //未选中的清除类名
   	 	 zhong1_l_con1[j].className="zhong1_l_con1"
       sanjiao[j].className="sanjiao"

 	   }
 	   zhong1_l_bot[this.name].className="zhong1_l_bot qingchu"
 	   //选中的加类名
 	   zhong1_l_con1[this.name].className="zhong1_l_con1 zhuse"
     sanjiao[this.name].className="sanjiao cang"
   	 } 
    }
    var zhong2_right_t1=getClass("zhong2_right_t1")
    var zhong2_kuang=getClass("zhong2_kuang")
    var sanjiao1=getClass("sanjiao1")
    for(var i=0;i<zhong2_right_t1.length;i++){
   //遍历数组
   	 zhong2_right_t1[i].name=i //解决小标
   	 zhong2_right_t1[i].onmouseover=function(){
   	 	//添加移入事件
   	 	for(j=0;j<zhong2_kuang.length;j++){
   	 		//添加相同属性，取不同下标
   	 	 zhong2_kuang[j].className="zhong2_kuang"
   	 	 //未选中的清除类名
   	 	 zhong2_right_t1[j].className="zhong2_right_t1"
       sanjiao1[j].className="sanjiao1"
 	   }
 	   zhong2_kuang[this.name].className="zhong2_kuang qingchu1"
 	   //选中的加类名
 	   zhong2_right_t1[this.name].className="zhong2_right_t1 zhuy"
     sanjiao1[this.name].className="sanjiao1 cang1"
   	 }
    }
    /*轮播图*/
    var banner_xia=$(".banner_xia")[0]
    var lbd=$(".lbd",$(".lunbodian")[0])
    var banner_bottu1=$(".banner_bottu1",$(".banner_bottom1")[0])
    var num=0;
    //操作自动轮播
    var bgimg=["url(img/bei1.jpg)","url(img/bei4.jpg)","url(img/bei3.jpg)","url(img/bei2.jpg)"]
    function lunbo(type){
      type=type||"right"
      if(type=="right"){
        num++;
        if(num>=lbd.length){
          num=0;
        }
      }
      if(type=="left"){
        num--;
        if(num<=-1){
          num=lbd.length-1;
        }
      }
      
      for(var i=0;i<lbd.length;i++){
          banner_bottu1[i].style.opacity=0;
          lbd[i].className="lbd"
        }
      animate(banner_bottu1[num],{opacity:1})
      lbd[num].className="lbd bsk"
      animate(bgimg[num],{opacity:1})
      banner_xia.style.backgroundImage=bgimg[num]
    }
    var t=setInterval(lunbo,2000)
    var rights=$(".jiant")[0]
    var lefts=$(".jiant a2")[0]
    banner_xia.onmouseover=function(){
        clearInterval(t)
        lefts.style.display="block"
        rights.style.display="block"        
    }
    banner_xia.onmouseout=function(){
        t=setInterval(lunbo,2000)
        lefts.style.display="none"
        rights.style.display="none"
    }
    lefts.onclick=function(){
         lunbo(type="left")
    }
    rights.onclick=function(){
         lunbo(type="right")
    }
    for(var i=0;i<lbd.length;i++){
      lbd[i].aa=i
      lbd[i].onclick=function(){
        for(var j=0;j<banner_bottu1.length;j++){
          banner_bottu1[j].style.opacity=0
          lbd[j].className="lbd";
        }
      banner_xia.style.backgroundImage=bgimg[this.aa]
      animate(banner_bottu1[this.aa],{opacity:1})
      lbd[this.aa].className="lbd bsk";
      num=i

      }
    }
    //************边框线************
    var box=$(".box1");
    var tops=$(".top");
    var leftss=$(".left");
    var bottoms=$(".bottom");
    var rightss=$(".right");
    for (var i = 0; i < box.length; i++) {
        box[i].aa=i;
        box[i].onmouseover=function(){
          var w=parseInt(getStyle(this,"width"));
          var h=parseInt(getStyle(this,"height"));
          animate(tops[this.aa],{width:w+2});
          animate(leftss[this.aa],{height:h+2});
          animate(bottoms[this.aa],{width:w+2});
          animate(rightss[this.aa],{height:h+2});
        }
        box[i].onmouseout=function(){ 
          animate(tops[this.aa],{width:0});
          animate(leftss[this.aa],{height:0});
          animate(bottoms[this.aa],{width:0});
          animate(rightss[this.aa],{height:0});
        }
    }
    //*************轮播图**********
    var bot=$(".bot",$(".gdlbt1")[0])
    var lbd2=$(".lbd2",$(".lunbodian2")[0])
    var gdlbt1=$(".gdlbt1")[0]
    var right2=$(".jiant2")[0]
    var left2=$(".jiant2 a22")[0]
    for(i=1;i<bot.length;i++){
      bot[i].style.left="388px"
    }
    var next=0;
    var now=0;
    function tiao(type){
        type=type||"right"
        if(type=="right"){
            next++
            if(next>=bot.length){
               next=0
            }
        }else if(type=="left"){
            next--
            if(next<=-1){
               next=bot.length-1
            }
        }  
        bot[next].style.left="388px";
        animate(bot[now],{left:-388})
        lbd2[now].style.background="#666";
        lbd2[next].style.background="#E5004F";
        animate(bot[next],{left:0})
        now=next
      }
      var t2=setInterval(tiao,6000)
      gdlbt1.onmouseover=function(){
          clearInterval(t2) 
          left2.style.display="block"      
          right2.style.display="block"      
      }
      gdlbt1.onmouseout=function(){
          t2=setInterval(tiao,6000)
          left2.style.display=""      
          right2.style.display=""
      }
      left2.onclick=function(){
           tiao(type="left")
      }
      right2.onclick=function(){
           tiao(type="right")
      }
      for(var i=0;i<lbd2.length;i++){
        lbd2[i].name=i
        lbd2[i].onclick=function(){
          next=this.name;
          bot[next].style.left="388px";
          animate(bot[now],{left:-388})
          lbd2[now].style.background="#666666";
          lbd2[next].style.background="#E5004F";
          animate(bot[next],{left:0})
          now=next
        }
      } 
    //***********2图****************
      var bot2=$(".bot2",$(".gdlbt2")[0])
      var gdlbt2=$(".gdlbt2")[0]
      var right3=$(".jiant3")[0]
      var left3=$(".jiant3 a23")[0]
      var lbd3=$(".lbd3",$(".lunbodian3")[0])
      for(i=1;i<bot2.length;i++){
        bot2[i].style.left="388px"
      }
      var next1=0;
      var now1=0;
      function tiao1(type){
          type=type||"right"
          if(type=="right"){
              next1++
              if(next1>=bot2.length){
                 next1=0
              }
          }else if(type=="left"){
              next1--
              if(next1<=-1){
                 next1=bot2.length-1
              }
        }  
        bot2[next1].style.left="388px";
        animate(bot2[now1],{left:-388})
        lbd3[now1].style.background="#666666";
        lbd3[next1].style.background="#E5004F";
        animate(bot2[next1],{left:0})
        now1=next1
      }
      var t3=setInterval(tiao1,5000)
      gdlbt2.onmouseover=function(){
          clearInterval(t3) 
          left3.style.display="block"      
          right3.style.display="block"      
      }
      gdlbt2.onmouseout=function(){
          t3=setInterval(tiao1,5000)
          left3.style.display=""      
          right3.style.display=""
      }
      left3.onclick=function(){
           tiao1(type="left")
      }
      right3.onclick=function(){
           tiao1(type="right")
      }
      for(var i=0;i<lbd3.length;i++){
        lbd3[i].name=i
        lbd3[i].onclick=function(){
          next1=this.name;
          bot2[next1].style.left="388px";
          animate(bot2[now1],{left:-388})
          lbd3[now1].style.background="#666";
          lbd3[next1].style.background="#E5004F";
          animate(bot2[next1],{left:0})
          now1=next1
        }
      } 
    //************3图***********************
    var bot3=$(".bot3",$(".gdlbt3")[0])
    var gdlbt3=$(".gdlbt3")[0]
    var right4=$(".jiant4")[0]
    var left4=$(".jiant4 a24")[0]
    var lbd4=$(".lbd4",$(".lunbodian4")[0])
    for(i=1;i<bot3.length;i++){
      bot3[i].style.left="388px"
    }
    var next2=0;
    var now2=0;
    function tiao2(type){
      type=type||"right"
      if(type=="right"){
          next2++
          if(next2>=bot3.length){
             next2=0
          }
      }else if(type=="left"){
          next2--
          if(next2<=-1){
             next2=bot3.length-1
          }
      }  
      bot3[next2].style.left="388px";
      animate(bot3[now2],{left:-388})
      lbd4[now2].style.background="#666";
      lbd4[next2].style.background="#E5004F";
      animate(bot3[next2],{left:0})
      now2=next2
    }
    var t4=setInterval(tiao2,4000)
    gdlbt3.onmouseover=function(){
        clearInterval(t4) 
        left4.style.display="block"      
        right4.style.display="block"      
    }
    gdlbt3.onmouseout=function(){
        t4=setInterval(tiao2,4000)
        left4.style.display=""      
        right4.style.display=""
    }
    left4.onclick=function(){
         tiao2(type="left")
    }
    right4.onclick=function(){
         tiao2(type="right")
    }
    for(var i=0;i<lbd4.length;i++){
      lbd4[i].name=i
      lbd4[i].onclick=function(){
        next2=this.name;
        bot3[next2].style.left="388px";
        animate(bot3[now2],{left:-388})
        lbd4[now2].style.background="#211616";
        lbd4[next2].style.background="#E5004F";
        animate(bot3[next2],{left:0})
        now2=next2
      }
    }
    //************图4******************
    var bot4=$(".bot4",$(".gdlbt4")[0])
    var gdlbt4=$(".gdlbt4")[0]
    var right5=$(".jiant5")[0]
    var left5=$(".jiant5 a25")[0]
    var lbd5=$(".lbd5",$(".lunbodian5")[0])
    for(i=1;i<bot4.length;i++){
      bot4[i].style.left="388px"
    }
    var next3=0;
    var now3=0;
    function tiao3(type){
      type=type||"right"
      if(type=="right"){
          next3++
          if(next3>=bot4.length){
             next3=0
          }
      }else if(type=="left"){
          next3--
          if(next3<=-1){
             next3=bot4.length-1
          }
      }  
      bot4[next3].style.left="388px";
      animate(bot4[now3],{left:-388})
      lbd5[now3].style.background="#666";
      lbd5[next3].style.background="#E5004F";
      animate(bot4[next3],{left:0})
      now3=next3
    }
    var t5=setInterval(tiao3,3000)
    gdlbt4.onmouseover=function(){
        clearInterval(t5) 
        left5.style.display="block"      
        right5.style.display="block"      
    }
    gdlbt4.onmouseout=function(){
        t5=setInterval(tiao3,3000)
        left5.style.display=""      
        right5.style.display=""
    }
    left5.onclick=function(){
         tiao3(type="left")
    }
    right5.onclick=function(){
         tiao3(type="right")
    }
    for(var i=0;i<lbd5.length;i++){
      lbd5[i].name=i
      lbd5[i].onclick=function(){
        next3=this.name;
        bot4[next3].style.left="388px";
        animate(bot4[now3],{left:-388})
        lbd5[now3].style.background="#211616";
        lbd5[next3].style.background="#E5004F";
        animate(bot4[next3],{left:0})
        now3=next3
      }
    }
    //********图5******************
    var bot5=$(".bot5",$(".gdlbt5")[0])
    var gdlbt5=$(".gdlbt5")[0]
    var right6=$(".jiant6")[0]
    var left6=$(".jiant6 a26")[0]
    var lbd6=$(".lbd6",$(".lunbodian6")[0])
    for(i=1;i<bot5.length;i++){
      bot5[i].style.left="388px"
    }
    var next4=0;
    var now4=0;
    function tiao4(type){
      type=type||"right"
      if(type=="right"){
          next4++
          if(next4>=bot5.length){
             next4=0
          }
      }else if(type=="left"){
          next4--
          if(next4<=-1){
             next4=bot5.length-1
          }
      }  
      bot5[next4].style.left="388px";
      animate(bot5[now4],{left:-388})
      lbd6[now4].style.background="#666";
      lbd6[next4].style.background="#E5004F";
      animate(bot5[next4],{left:0})
      now4=next4
    }
    var t6=setInterval(tiao4,4000)
    gdlbt5.onmouseover=function(){
        clearInterval(t6) 
        left6.style.display="block"      
        right6.style.display="block"      
    }
    gdlbt5.onmouseout=function(){
        t6=setInterval(tiao4,4000)
        left6.style.display=""      
        right6.style.display=""
    }
    left6.onclick=function(){
         tiao4(type="left")
    }
    right6.onclick=function(){
         tiao4(type="right")
    }
    for(var i=0;i<lbd6.length;i++){
      lbd6[i].name=i
      lbd6[i].onclick=function(){
        next4=this.name;
        bot5[next4].style.left="388px";
        animate(bot5[now4],{left:-388})
        lbd6[now4].style.background="#211616";
        lbd6[next4].style.background="#E5004F";
        animate(bot5[next4],{left:0})
        now4=next4
      }
    }
    //*********图6****************
    var bot6=$(".bot6",$(".gdlbt6")[0])
    var gdlbt6=$(".gdlbt6")[0]
    var right7=$(".jiant7")[0]
    var left7=$(".jiant7 a27")[0]
    var lbd7=$(".lbd7",$(".lunbodian7")[0])
    for(i=1;i<bot6.length;i++){
      bot6[i].style.left="388px"
    }
    var next5=0;
    var now5=0;
    function tiao5(type){
      type=type||"right"
      if(type=="right"){
          next5++
          if(next5>=bot6.length){
             next5=0
          }
      }else if(type=="left"){
          next5--
          if(next5<=-1){
             next5=bot6.length-1
          }
      }  
      bot6[next5].style.left="388px";
      animate(bot6[now5],{left:-388})
      lbd7[now5].style.background="#666";
      lbd7[next5].style.background="#E5004F";
      animate(bot6[next5],{left:0})
      now5=next5
    }
    var t7=setInterval(tiao5,5000)
    gdlbt6.onmouseover=function(){
        clearInterval(t7) 
        left7.style.display="block"      
        right7.style.display="block"      
    }
    gdlbt6.onmouseout=function(){
        t7=setInterval(tiao5,5000)
        left7.style.display=""      
        right7.style.display=""
    }
    left7.onclick=function(){
         tiao5(type="left")
    }
    right7.onclick=function(){
         tiao5(type="right")
    }
    for(var i=0;i<lbd7.length;i++){
      lbd7[i].name=i
      lbd7[i].onclick=function(){
        next5=this.name;
        bot6[next5].style.left="388px";
        animate(bot6[now5],{left:-388})
        lbd7[now5].style.background="#211616";
        lbd7[next5].style.background="#E5004F";
        animate(bot6[next5],{left:0})
        now5=next5
      }
    }
} 

