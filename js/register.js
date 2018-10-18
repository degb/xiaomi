var register = (function() {
	var i = true;
	return {
		init: function(ele) {
			this.$ele = document.querySelector(ele);
			this.$register = this.$ele['regisiter-btn'];
			this.$username = this.$ele['username'];
			this.$password = this.$ele['password'];
			this.$sp1 = document.querySelector('.sp1');
			this.$sp2 = document.querySelector('.sp2');
			this.$s2 = document.querySelector('.sp2').children[0];
			this.$s3 = document.querySelector('.sp3').children[0];
			this.$s4 = document.querySelector('.sp4').children[0];
			this.$sp3 = document.querySelector('.sp3');

			this.$sp4 = document.querySelector('.sp4');
			this.$checkP = document.querySelector('.checkP');
			this.event();
		},
		event: function() {
			var _this = this;
			// 注册按钮
			this.$register.onclick = function() {
				// 发送ajax，验证用户名和密码
				var params = {
					method: 'post',
					data: {
						username: _this.$username.value,
						password: _this.$password.value
					},
					success: function(data) {
						data = JSON.parse(data);
						_this.loginSuccess(data);
					}
				}
				_this.checkName();
				_this.checkPassword();
				console.log(typeof i);
				if(i == true) {
					console.log(i);
					sendAjax('http://localhost:8080/xiaomi/php/register.php', params);
				}

			}
			this.$username.oninput = function() {
				var params = {
					data: {
						username: _this.$username.value

					},
					success: function(data) {
						data = JSON.parse(data);
						_this.checkName();
					}
				}

				sendAjax('http://localhost:8080/xiaomi/php/check_username.php', params);
			}
           
			//             验证密码
			this.$password.onclick = function() {
				_this.$checkP.style.display = 'block';
				_this.$password.oninput = function() {
				_this.checkPassword();
				}
			}
		},
		
		//      检测用户名
		checkName: function() {
			var uReg = /[a-zA-Z_]{6,13}/;
			if(this.$username.value.trim().length == 0) {
				i=false;
				this.$sp1.style.display = 'block';
				this.$sp1.innerHTML = '用户名不能为空';
				this.$username.style.borderColor = 'red';
			}else if(uReg.test(this.$username.value) == false) {
				i=false;
				this.$sp1.style.display = 'block';
				this.$sp1.innerHTML = '用户名需为6-13位的字母或者下划线';
				this.$username.style.borderColor = 'red';
			}else {
				this.$sp1.style.display = 'none';
				this.$username.style.borderColor = '';
				i=true;
			}
		},
		//      检测密码
		checkPassword: function() {
				var pReg = /^[a-zA-Z0-9]{8,16}$/;
				var sReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+$/;
				if(this.$password.value.trim().length == 0) {
					i=false;
					this.$sp2.style.color = 'red';
					this.$checkP.style.display = 'block';
			    }else if(this.$password.value.trim().indexOf(" ") >= 0) {
			    	i=false;
					this.$sp2.style.color = 'red';
				} else {
					i=true;
					this.$sp2.style.color = 'green';
					this.$s2.style.color = 'green';
				}

				if(pReg.test(this.$password.value) == false) {
					this.$sp3.style.color = 'red';
					i=false;
				} else {
					i=true;
					this.$sp3.style.color = 'green';
					this.$s3.style.color = 'green';
				}

				if(sReg.test(this.$password.value) == false) {
					this.$sp4.style.color = 'red';
					i=false;
				} else {
					i=true;
					this.$sp4.style.color = 'green';
					this.$s4.style.color = 'green';

			}
		},
		loginSuccess: function(data) {
			console.log(i);
			if(data.code == 200 && i == true) {
				alert('注册成功');
				location.href = 'login.html';
			} else {
				alert(data.msg);
			}
		},
	}

}())