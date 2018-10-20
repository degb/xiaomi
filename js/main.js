var swiper2 = (function() {
	return {
		init: function() {
			this.$search_btn = document.querySelector('.search-btn');
			this.$search_hot_words = document.querySelector('.search-hot-words');
			this.$search_ch = document.querySelector('.search_ch');
			this.$search = document.querySelector('.search-text');
			//			头部导航
			this.$ul = document.querySelector('.nav-list');
			this.$li = this.$ul.children;
			this.$menu = document.querySelectorAll('.li_details');
			this.$me = document.querySelector('.menu');
			this.$head = document.querySelector('.header');
			this.$slider_list = document.querySelector('.slider_list');
			this.$brick_list = document.querySelectorAll('.brick-list');
			this.$tab_list = document.querySelectorAll('.tab-list');
			this.$slider_menu=document.querySelectorAll('.slider_menu');
			this.event();
			this.Tab();
		},
		event: function() {
			var _this = this;
			this.$search.onfocus = function() {
					_this.$search_ch.style.display = 'block';
					_this.$search_hot_words.style.display = 'none';
					_this.$search_btn.style.borderColor = '#ff6700';
					_this.$search.style.borderColor = '#ff6700';
				},
				this.$search.onblur = function() {
					_this.$search_ch.style.display = 'none';
					_this.$search_hot_words.style.display = 'block';
					_this.$search_btn.style.borderColor = '#e0e0e0';
					_this.$search.style.borderColor = '#e0e0e0';
				}
		},
		
		//		家电tab选项卡
		Tab: function() {
			var _this = this;
				_this.$tab_list[0].onmouseover = function(e) {
				e = e || window.event;
				var target = e.target || e.srcElement;
				if(target.nodeName == 'LI') {
					for(var i = 0; i < 4; i++) {
						_this.$tab_list[0].children[i].className = '';
						_this.$tab_list[0].children[i].index = i;
					}
					target.className = "tab-active";
					for(var j = 1; j < 5; j++) {
						_this.$brick_list[j].className = _this.$brick_list[j].className.replace('brick-list-active', '');
						if(_this.$brick_list[j].className.indexOf('brick-list-hide') == -1) {
							_this.$brick_list[j].className = _this.$brick_list[j].className + ' brick-list-hide';
						}
					}
						_this.$brick_list[target.index + 1].className = _this.$brick_list[target.index + 1].className + ' brick-list-active';
				}
			}, 
			
//			智能
			_this.$tab_list[1].onmouseover = function(e) {
				e = e || window.event;
				var target = e.target || e.srcElement;
				console.log(target);
				if(target.nodeName == 'LI') {
					for(var m = 0; m < 4; m++) {
						_this.$tab_list[1].children[m].className = '';
						_this.$tab_list[1].children[m].index = m;
					}
					target.className = "tab-active";
					for(var n = 5; n<10; n++) {
						console.log(_this.$brick_list);
						_this.$brick_list[n].className = _this.$brick_list[n].className.replace('brick-list-active', '');
						if(_this.$brick_list[n].className.indexOf('brick-list-hide') == -1) {
							_this.$brick_list[n].className = _this.$brick_list[n].className + ' brick-list-hide';
						}
					}
						_this.$brick_list[target.index + 5].className = _this.$brick_list[target.index + 5].className + ' brick-list-active';
				}
			},
//			搭配
			this.$tab_list[2].onmouseover = function(e) {
				e = e || window.event;
				var target = e.target || e.srcElement;
				if(target.nodeName == 'LI') {
					for(var i = 0; i < 4; i++) {
						_this.$tab_list[2].children[i].className = '';
						_this.$tab_list[2].children[i].index = i;
					}
					target.className = "tab-active";
					for(var j = 10; j <14 ; j++) {
						_this.$brick_list[j].className = _this.$brick_list[j].className.replace('brick-list-active', '');
						if(_this.$brick_list[j].className.indexOf('brick-list-hide') == -1) {
							_this.$brick_list[j].className = _this.$brick_list[j].className + ' brick-list-hide';
						}
					}
						_this.$brick_list[target.index + 10].className = _this.$brick_list[target.index + 10].className + ' brick-list-active';
				}
			},
//			配件
			this.$tab_list[3].onmouseover = function(e) {
				e = e || window.event;
				var target = e.target || e.srcElement;
				if(target.nodeName == 'LI') {
					for(var i = 0; i < 4; i++) {
						_this.$tab_list[3].children[i].className = '';
						_this.$tab_list[3].children[i].index = i;
					}
					target.className = "tab-active";
					for(var j = 14; j < 18; j++) {
						_this.$brick_list[j].className = _this.$brick_list[j].className.replace('brick-list-active', '');
						if(_this.$brick_list[j].className.indexOf('brick-list-hide') == -1) {
							_this.$brick_list[j].className = _this.$brick_list[j].className + ' brick-list-hide';
						}
					}
						_this.$brick_list[target.index + 14].className = _this.$brick_list[target.index + 14].className + ' brick-list-active';
				}
			},
//			周边
			this.$tab_list[4].onmouseover = function(e) {
				e = e || window.event;
				var target = e.target || e.srcElement;
				if(target.nodeName == 'LI') {
					for(var i = 0; i < _this.$tab_list[4].children.length; i++) {
						_this.$tab_list[4].children[i].className = '';
						_this.$tab_list[4].children[i].index = i;
					}
					target.className = "tab-active";
					for(var j = 18; j < 23; j++) {
						_this.$brick_list[j].className = _this.$brick_list[j].className.replace('brick-list-active', '');
						if(_this.$brick_list[j].className.indexOf('brick-list-hide') == -1) {
							_this.$brick_list[j].className = _this.$brick_list[j].className + ' brick-list-hide';
						}
					}
						_this.$brick_list[target.index + 18].className = _this.$brick_list[target.index + 18].className + ' brick-list-active';
				}
			}
			
	}
		}
})()
//闪购
$(".more").children(".icon-you").click(function() {
	if(Math.round($(".flash").eq(1).position().left) == 0) {
		$(".flash").eq(1).css({
			'left': '-978px'
		})
	} else if(Math.round($(".flash").eq(1).position().left) == -978) {
		$(".flash").eq(1).css({
			'left': '-1478px'
		})

	}
});
$(".more").children(".icon-icon--").click(function() {
	if(Math.round($(".flash").eq(1).position().left) == -978) {
		$(".flash").eq(1).css({
			'left': '0px'
		})
	} else if(Math.round($(".flash").eq(1).position().left) == -1478) {
		$(".flash").eq(1).css({
			'left': '-978px'
		})

	};
});







	$(".icon_control").children(".icon-icon--").eq(0).click(function() {
		
	if(Math.round($(".item-list").eq(0).position().left) == -296) {
		$(".item-list").eq(0).css({
			'left': '0px'
		})
	} else if(Math.round($(".item-list").eq(0).position().left) == -592) {
		$(".item-list").eq(0).css({
			'left': '-296px'
		})
	}
});


$(".icon_control").children(".icon-you").eq(0).click(function() {
	if(Math.round($(".item-list").eq(0).position().left) == 0) {
		$(".item-list").eq(0).css({
			'left': '-296px'
		})
	} else if(Math.round($(".item-list").eq(0).position().left) == -296) {
		$(".item-list").eq(0).css({
			'left': '-592px'
		})
	}
});



var $dot=document.querySelectorAll('.con-pagers');
var $dot_li=document.querySelectorAll('.pager');
var $item_cho=document.querySelectorAll('.item-list');

	

		
	
	
	

