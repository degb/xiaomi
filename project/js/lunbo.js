var swiper = (function() {
			var timer = null;
			return {
				init: function(ele) {
					if(typeof ele == 'string') {
						ele = document.querySelector(ele);
					}
					this.$ele = ele;
					this.$Box = ele.querySelector('.pe');
					this.$liAll = this.$Box.children;
					this.$leftBtn = ele.querySelector('.left-btn');
					this.$rightBtn = ele.querySelector('.right-btn');
					this.$peBox = ele.querySelector('.pe-image');
					this.$peLiAll = this.$peBox.children;
					var first = this.$peLiAll[0];
					var last = this.$peBox.lastElementChild;
					this.$peBox.appendChild(first.cloneNode(true));
					this.$peBox.insertBefore(last.cloneNode(true), first);
					this.$peBox.style.left = '-1226px';
					for(var i = 0; i < this.$liAll.length; i++) {
						this.$liAll[i].index = i;
					}
					this.index = 0;
					this.event();
					this.autoPlay();
				},
				event: function() {
					var _this = this;
					this.$Box.onclick = function(e) {
						e = e || window.event;
						var target = e.target || e.srcElement;
						if(target.nodeName == 'LI') {
							_this.showImage(target.index);
							_this.autoPlay(target.index);
						}
					};
					this.$leftBtn.onclick = function() {
						clearInterval(timer);
						_this.showImage(--_this.index);
						_this.autoPlay();
					}
					this.$rightBtn.onclick = function() {
						clearInterval(timer);
						_this.showImage(++_this.index);
						_this.autoPlay();
					}
				},
				showImage: function(index) {
					var maxIndex = this.$liAll.length - 1;
					if(index > maxIndex) {
						index = 0;
						this.$peBox.style.left = 0;
					} else if(index < 0) {
						index = maxIndex;
						this.$peBox.style.left = -1226 * (maxIndex + 2) + 'px';
					}
					this.index = index;
					for(var i = 0; i < this.$liAll.length; i++) {
						this.$liAll[i].removeAttribute('class');
					}
					this.$liAll[index].className = 'active';
					move(this.$peBox, 'left', -1226 * (index + 1));
				},
				autoPlay(index) {
					clearInterval(timer);
					index = index || 0;
					timer = setInterval(() => {
						index++;
						if(index > 5) {
							index = 0;
						}
						this.showImage(index);
					}, 9000)
				}
			}
		}())

		function move(ele, attr, target) {
			if(typeof ele == 'string') {
				ele = document.querySelector(ele);
			}
			clearInterval(ele.timer);
			var init = parseFloat(getStyle(ele, attr));
			ele.timer = setInterval(function() {
				var speed = (target - init) / 1;
				if(speed > 0) {
					speed = Math.ceil(speed);
				} else {
					speed = Math.floor(speed);
				}
				init += speed
				if((speed >= 0 && init >= target) || (speed <= 0 && init <= target)) {
					init = target;
					clearInterval(ele.timer);
				}
				ele.style[attr] = init + 'px';
			}, 1)

		}

		function getStyle(ele, attr) {
			if(window.getComputedStyle) {
				return window.getComputedStyle(ele, null)[attr];
			}
			return ele.currentStyle[attr];
		}