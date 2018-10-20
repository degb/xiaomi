var detail=(function (){
	 var name1,name2,price1,price2,value,src,count;
     var $totalPrice=document.querySelector('.totalPrice');
	  var $ul_body=document.querySelector('.ul_body');
	  var  total=0;
	  var $number=document.querySelectorAll('.number');
	return {
		init:function (){


      


			this.Event();
			
		},
		Event:function (){
			var _this=this;
			for(var i = 0; i < JSON.parse(localStorage.shopcar).length; i++){
               name1=JSON.parse(localStorage.shopcar)[i]['data_name'];
               name2=JSON.parse(localStorage.shopcar)[i]['data_name2'];
               price1=parseInt(JSON.parse(localStorage.shopcar)[i]['data_price']);
               price2=JSON.parse(localStorage.shopcar)[i]['data_price2'];
               value=JSON.parse(localStorage.shopcar)[i]['data_value'];
               src=JSON.parse(localStorage.shopcar)[i]['data_src'];
               count=JSON.parse(localStorage.shopcar)[i]['count'];
                   var $node=document.createElement('div');
	 
           $node.innerHTML=`<ul class="list">
							<li class="check_all">
								<i class="iconfont icon-checkbox"></i>
							</li>
							<li class="img">
								<img src="${src}" alt="" style="width:80px;heigth:80px">
							</li>
							<li class="name">${name1+' '+value}</li>
							<li class="unit_price">${price1}</li>
							<li class="num">
								<a href="javascript:void(0)" class="reduce"><i class="iconfont icon-jian"></i></a>
								<input type="text" value="${count}">
								<a href="javascript:void(0)" class="plus"><i class="iconfont icon-jia"></i></a>
							</li>
							<li class="total">${price1*count+'元'}</li>
							<li class="active">
								<a class='close' onclick="close()">×</a>
							</li>

							<ul class="sub-box">
								<i class="arrow"></i>
								<li class="img">
									<a href="#"><img src="img/shopCar/zp.jpg" alt=""></a>
								</li>
								<li class="name">
									<span>赠品</span>
									<p>
										<a href="#">米粉卡日租卡</a>
									</p>
								</li>
								<li class="unit_price"></li>
								<li class="num">1</li>
								<li class="total"></li>
							</ul>
							
							<ul class="sub-box2">
								<i class="arrow"></i>
								<li class="img">
									<a href="#"><img src="img/details/zb.jpg" alt=""></a>
								</li>
								<li class="name">
									<p>
										<a href="#">${name2}</a>
									</p>
								</li>
								<li class="unit_price">${price2}</li>
								<li class="num">${count}</li>
								<li class="total">${price2*count+'元'}</li>
							</ul>
							<p class="extend-buy">
								<i class="iconfont icon-plus2"></i>意外保障服务 99元
								<a href="#">了解保障服务 ></a>
							</p>
							<p class="extend-buy">
								<i class="iconfont icon-plus2"></i>碎屏保障服务 59元
								<a href="#">了解保障服务 ></a>
							</p>
						</ul>`;
			 $ul_body.appendChild($node);
			 total=total+price1*count+price2*count;
			  
			$totalPrice.innerHTML=total;
			for(var j=0;j<2;j++){
		     $number[j].innerHTML=JSON.parse(localStorage.shopcar).length;
		         	
		         	}
			var $sub=document.querySelectorAll('.sub-box2');
			if(!JSON.parse(localStorage.shopcar)[i]['data_name2']){
				
				$sub[i].style.display='none';
			}
			}
			
		         	var $close=document.querySelectorAll('.close');
		         	var $reduce=document.querySelectorAll('.reduce');
                    var $plus=document.querySelectorAll('.plus');
                    var $num=document.querySelectorAll('.num')[3];
					 var $Zb=document.querySelectorAll('.sub-box')[1];
					
		         	for(var k=0;k<$close.length;k++){
		         		$close[k].onclick=function (e){
		         			e=e||window.event;
		         			var target=e.target||e.srcElement;
		         		
		         			target.parentElement.parentElement.style.display='none';
		         			 var shopcar =localStorage.shopcar || "[]";
						   	shopcar =JSON.parse(shopcar);  
							   	for(var j = 0 ; j < shopcar.length ; j++){ 
							   		if(target.parentElement.parentElement.children[2].innerHTML.indexOf(shopcar[j].data_name>0)){
										shopcar.splice(j,1);
										localStorage.shopcar=JSON.stringify(shopcar);
										break;
										
		   		}
		   		
		   		}
		        	}
		             }
		         	
		         	for(var i=0;i<$plus.length;i++){
		         		
		         		$plus[i].onclick=function (e){
		         			e=e||window.event;
		         			var target=e.target||e.srcElement;
		         			if(target.nodeName=='I'){
		         				target=target.parentElement;
		         			}
		         			target.previousElementSibling.value++;
		         			target.parentElement.nextElementSibling.innerHTML=parseInt(target.parentElement.previousElementSibling.innerHTML)*target.previousElementSibling.value+'元';
		         			target.parentElement.parentElement.children[8].children[4].innerHTML=target.previousElementSibling.value;
		         			target.parentElement.parentElement.children[8].children[5].innerHTML=target.previousElementSibling.value*target.parentElement.parentElement.children[8].children[3].innerHTML;
		         			$totalPrice.innerHTML=parseInt(target.parentElement.nextElementSibling.innerHTML)+parseInt(target.parentElement.parentElement.children[8].children[5].innerHTML);
		         		}
		         		$reduce[i].onclick=function (e){
		         			e=e||window.event;
		         			var target=e.target||e.srcElement;
		         			if(target.nodeName=='I'){
		         				target=target.parentElement;
		         			}
		         			if(target.nextElementSibling.value>1){
		         				target.nextElementSibling.value--;
		         			target.parentElement.nextElementSibling.innerHTML=parseInt(target.parentElement.previousElementSibling.innerHTML)*target.nextElementSibling.value+'元';
		         			target.parentElement.parentElement.children[8].children[4].innerHTML=target.nextElementSibling.value;
		         			target.parentElement.parentElement.children[8].children[5].innerHTML=target.nextElementSibling.value*target.parentElement.parentElement.children[8].children[3].innerHTML+'元';
		         			$totalPrice.innerHTML=parseInt(target.parentElement.nextElementSibling.innerHTML)+parseInt(target.parentElement.parentElement.children[8].children[5].innerHTML);	
		         			
		         			}

		         		}
		         		
		         	}
		         
	}
		}
      })()


