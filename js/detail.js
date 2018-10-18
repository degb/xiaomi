var detail=(function (){
	 var totalPrice;
	 var arr=[];
	 var data_name,data_name2,data_price,data_price2,data_value,src,data_src;
	 var data_id;
	return {
		init:function (){
				this.$top_menu=document.querySelector('.nav-bar-hidden');
				this.$pro_view=document.querySelector('.pro-view');
			 this.$step_list=document.querySelector('.step-list');
this.$ulClick=document.querySelector('.swiper-pagination');
this.$choseColor=document.querySelector('.step-one');
this.$swiper_slide=document.querySelectorAll('.swiper-slide');
this.$name=document.querySelectorAll('.name');
this.$agree=document.querySelectorAll('.agree');
this.data_name;
this.data_value;
this.$step=document.querySelector('.step');
this.$account=document.querySelector('.account');
this.$price=document.querySelectorAll('del')[1];
this.$nowprice=this.$price.nextElementSibling;
this.$liServe=this.$account.nextElementSibling;
this.$totalPrice=document.querySelector('.totlePrice');
this.$btn_primary=document.querySelector('.btn-primary');
this.$img=document.querySelectorAll('.img1');

		
			
			
			this.event();
			this.Choice();
			this.ChoseColor();
			this.ChoseServe();
			this.Push();
			
			
		
			
		},
	    event:function (){
	    	var _this=this;
	    	_this.$swiper_slide[2].children.src="img/details/slideBlue2.jpg";
	    	document.onscroll=function (){
	    		var t = document.documentElement.scrollTop || document.body.scrollTop;
//	    		头部菜单滚动
if(t > 165) {
	if(_this.$top_menu.className.indexOf('nav_fix')==-1) {
		_this.$top_menu.className = _this.$top_menu.className +' nav_fix';
	}
}else{
	_this.$top_menu.className=_this.$top_menu.className.replace('nav_fix', '');
}
//	    轮播图定位
if(t>274&&t<774){
	_this.$pro_view.style.position='fixed';
	_this.$pro_view.style.top='83';
}else if(t>774){
	_this.$pro_view.style.position='relative';
	_this.$pro_view.style.top='670';
}else{
	_this.$pro_view.style.position='static';
}
	   }
	    },
	   
	   Choice:function (){
	   	 var _this=this;
	   	 var src;
	   	 this.$step_list.onclick=function (e){
	   	 	e=e||window.event;
	   	 	var target=e.target||e.srcElementl;
	   	 	for(var i=0;i<3;i++){
	   	 			_this.$step_list.children[i].className="btn-biglarge";
	   	 	}
	   	 	if(target.nodeName=='A'){
	   	 		target.parentElement.className=target.parentElement.className+' acitve';
	   _this.$ulClick.children[0].click();
	  data_name='小米8 SE '+target.parentElement.getAttribute('data-name');
	data_price=target.parentElement.getAttribute('data-price');  
	   _this.$account.firstChild.data=data_name;
	   
	   _this.$nowprice.innerText=data_price;
	 _this.$price.innerText=parseInt(data_price)+100+'元';
	 _this.Account();
	   	 	}else if(target.nodeName=='SPAN'){
	   	 		target.parentElement.parentElement.className=target.parentElement.parentElement.className+' active';
	   	 		 _this.$ulClick.children[0].click();	 
	   	 		data_name='小米8 SE '+target.parentElement.parentElement.getAttribute('data-name');
	   	 		 data_price=target.parentElement.parentElement.getAttribute('data-price');
	   	 		_this.$account.firstChild.data=data_name;
	   	 		    _this.$nowprice.innerText=data_price;
	   	 		    _this.$price.innerText=parseInt(data_price)+100+'元';
	   	 _this.Account();
	    
	   	 	}
	   	 	
	   	 }
	   	 if(!data_name){
	   	 	data_name='小米8 SE '+'4GB+64GB 全网通 ';
	   	 	data_price='1699';
	   	 	data_value='红色';
	   	 }
	   },
	   ChoseColor:function (){
	   	var _this=this;
	   	var color;
	   	this.$choseColor.onclick=function (e){
	   		e=e||window.event;
	   	 	var target=e.target||e.srcElementl;
	   	 	for(var i=0;i<4;i++){
	   	 		_this.$choseColor.children[i].className="btn-biglarge";
	   	 	}
	   	 	if(target.nodeName=='A'){	   	 	 target.parentElement.className=target.parentElement.className+' active';	
		_this.$ulClick.children[0].click();
		data_value=target.parentElement.getAttribute('data-value');
		data_id=target.parentElement.getAttribute('data-id');
		_this.$account.innerHTML=_this.$account.innerHTML.replace('全网通',data_value);
		 
	  }else if(target.nodeName=='IMG'){	   	  target.parentElement.parentElement.className=target.parentElement.parentElement.className+' active';
		_this.$ulClick.children[0].click();
		data_value=target.parentElement.parentElement.getAttribute('data-value');
		data_id=target.parentElement.parentElement.getAttribute('data-id');
		_this.$account.innerHTML=_this.$account.innerHTML.replace('全网通',data_value);
	   	 	}
	         switch (data_id){
	         	case '2182100046':
	         	color='Red';
	         		break;
	         	case '2182100047':
	         	color='Blue';
	         		break;
	         	case '2182100048':
	         	color='Golden';
	         		break;
	         	case '2182100049':
	         	color='Gray';
	         		break;
	         }
	         for(var j=1;j<5;j++){
	         	_this.$img[j].src='img/details/slide'+color+j+'.jpg';
	         }
	         _this.$img[0].src='img/details/slide'+color+'4'+'.jpg';
	         _this.$img[5].src='img/details/slide'+color+'1'+'.jpg';
	         data_src= _this.$img[1].src;
	         
	   	}
	   },
	   ChoseServe:function (){
	   	
	   		var _this=this;
	   	this.$step.onclick=function (e){
	   	e=e||window.event;
	   	 var target=e.target||e.srcElementl;
	   	  _this.$name[3].style.color='#333';
	   	 _this.$name[4].style.color='#333';
	   	 _this.$agree[0].style.backgroundColor='#fff';
	   	 _this.$agree[1].style.backgroundColor='#fff';
	   	 for(var i=0;i<2;i++){
	   	 _this.$step.children[i].className='';
	   	 }
	   		if(target.nodeName=='I'||target.nodeName=='IMG'||target.nodeName=='DIV'){
	target.parentElement.className=target.parentElement.className+'active';
	target.parentElement.children[2].firstElementChild.style.color='#ff6700';
	if(target.parentElement.getAttribute('data-price')=='179'){
	_this.$agree[0].style.backgroundColor='#ff6700';	
	}else {
_this.$agree[1].style.backgroundColor='#ff6700';		
	}
	data_name2=target.parentElement.getAttribute('data-name');
	data_price2=target.parentElement.getAttribute('data-price');
	_this.$liServe.firstChild.data	=data_name2;
	_this.$liServe.children[0].innerHTML=data_price2+'元';
	_this.Account();
	   		}else if(target.nodeName=='LI'){   	 	target.className=target.className+'active';
	   	 target.children[2].firstElementChild.style.color='#ff6700';
	   	 if(target.getAttribute('data-price')=='179'){
	_this.$agree[0].style.backgroundColor='#ff6700';	
	}else {
_this.$agree[1].style.backgroundColor='#ff6700';		
	}
	data_name2=target.getAttribute('data-name');
	data_price2=target.getAttribute('data-price');
	_this.$liServe.firstChild.data	=data_name2;
	_this.$liServe.children[0].innerHTML=data_price2+'元';
	_this.Account();
	   	 }else if(target.nodeName=='P'||target.nodeName=='SPAN'){
	   	 target.parentElement.parentElement.children[2].firstElementChild.style.color='#ff6700';
	   	 target.parentElement.parentElement.className=target.parentElement.parentElement.className+'active';
	  if(target.parentElement.parentElement.getAttribute('data-price')=='179'){
	_this.$agree[0].style.backgroundColor='#ff6700';	
	}else {
_this.$agree[1].style.backgroundColor='#ff6700';		
	}
	data_name2=target.parentElement.parentElement.getAttribute('data-name');
	data_price2=target.parentElement.parentElement.getAttribute('data-price');
	_this.$liServe.firstChild.data	=data_name2;
	_this.$liServe.children[0].innerHTML=data_price2+'元';
	_this.Account();
	   	}
	   	}
	   
	   		
	   	
	   },
	   Account:function(){
	   	var _this=this;
	   		 if(!data_price2){
	  	totalPrice=parseInt(data_price);
	  }else{
	  	totalPrice=parseInt(data_price)+parseInt(data_price2);
	  }
	   	_this.$totalPrice.innerHTML='总计 :'+totalPrice+'元';
	   },
	   Push: function (){
	   	var _this=this;
	   	var $buy = document.querySelector(".btn-primary");
            var obj = {};
            $buy.onclick = function(){
	        var count = 1;
			 var obj = {
			   	data_name:data_name,
		   		data_name2:data_name2,
		   		data_price:data_price,
		   		data_price2:data_price2,
		   		data_value:data_value,
		   		data_src:data_src,
		   		count:count
			}
			console.log(obj);
		    _this.addShop(obj);
		    window.location.href='shopCar.html';
		    }
	   },
	  addShop: function(obj){ 	
	   	var shopcar =localStorage.shopcar || "[]";
	   	shopcar =JSON.parse(shopcar);
	   	if(shopcar.length > 0){
		  	console.log(shopcar)
		   	for(var j = 0 ; j < shopcar.length ; j++){ 
			   	var arr = [];
			   	arr = shopcar;
		   		if(shopcar[j].data_name == obj.data_name&&shopcar[j].data_value == obj.data_value){
					arr[j].count = Number(arr[j].count) + parseInt(obj.count);
					shopcar = arr;
					break;
		   		}
		   	}
		   	if(j == shopcar.length){
		   			console.log(1)
		 	        shopcar.unshift(obj);
		   		}
		 }else {
		 	   shopcar.unshift(obj);
		 }
	   localStorage.shopcar=JSON.stringify(shopcar);
}
	   }
	})()
	
	
	
	
	
	
