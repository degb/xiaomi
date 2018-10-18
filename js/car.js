var $cart_mini = document.querySelector(".cart-mini");
			var $cart_menu = document.querySelector(".cart-menu");
			$cart_mini.onmouseover = function() {
				$cart_mini.style.backgroundColor = '#fff';
				$cart_mini.style.color = '#ff6700';
				timer = setTimeout(function() {
					$cart_menu.style.display = 'block';
				}, 500)
			}
			$cart_mini.onmouseout = function() {
				$cart_menu.style.display = 'none';
				$cart_mini.style.backgroundColor = '#424242';
				$cart_mini.style.color = '#b0b0b0';

			}
			