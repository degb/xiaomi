var $close = document.querySelector('.close');
			var $box = document.querySelector('.modal-backdrop');
			var $cover = document.querySelector(".cover");
			var $play = document.querySelector(".play");
			var $video = document.getElementById("video");
			var $img = document.getElementById("video-img");
			var $title = document.querySelector(".title_h");
			var $videoTop = document.querySelector(".video-list");
		    var $i=document.querySelector('.icon-bofang');
			var $cover_src;
			var count = 0;
			var $cover_img;
			var $cover_title;
			var obj = {};
$videoTop.onclick = function(e) {
				e = e || window.event;
				var target = e.target || e.srcElement;
				var _this = this;
				if(target.nodeName == 'I' || target.nodeName == 'IMG') {
					
					_this.$cover_src = target.parentElement.getAttribute('data-video');
					_this.$cover_img = target.parentElement.getAttribute('data-video-poster');
					_this.$cover_title = target.parentElement.getAttribute('data-video-title');
				} else if(target.nodeName == 'A') {
					_this.$cover_src = target.getAttribute('data-video');
					_this.$cover_img = target.getAttribute('data-video-poster');
					_this.$cover_title = target.getAttribute('data-video-title');
				}
				obj.src=_this.$cover_src;
				obj.img=_this.$cover_img;
				obj.title=_this.$cover_title;
			display1(obj);
			
			}



			function play() {
					if(count == 0) {
					$video.play();
					$video.controls = "controls";
					$img.style.display = 'none';
					$i.style.display = 'none';
					count++;
				} else {
					$i.style.display = 'block';
					$i.className = "iconfont icon-bofang";
					$video.pause();
					count = 0;
				}
				
				}


			//		        关闭按钮
			$close.onclick = function() {
				$cover.style.display = 'none';
				$box.style.display = 'none';
			}
			//			弹窗
			function display1(obj) {
					$img.src = obj.img;
					$video.src = obj.src;
					$video.title = obj.title;
					$title.innerHTML = obj.title;
				$box.style.display = 'block';
				$box.style.opacity = '0.5';
				$cover.style.display = 'block';
			}