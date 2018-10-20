var register = (function(){

    return {
        init: function(ele) {
            this.$ele = document.querySelector(ele);
            this.$loginBtn = this.$ele['regisiter-btn'];
            this.$username =   this.$ele['username'];
            this.$password =   this.$ele['password'];
            this.$sp1=document.querySelector('.sp1');
            this.$sp2=document.querySelector('.sp2');
            this.$s2=document.querySelector('.sp2').children[0];
            this.$s3=document.querySelector('.sp3').children[0];
            this.$s4=document.querySelector('.sp4').children[0];
            this.$sp3=document.querySelector('.sp3');
            
            this.$sp4=document.querySelector('.sp4');
            this.$checkP=document.querySelector('.checkP');
           this.event();
        },
        event: function() {
            var _this = this;
            // 注册按钮
            this.$loginBtn.onclick = function() {
                // 发送ajax，验证用户名和密码
                var params = {
                    method: 'post',
                    data: {
                        username: _this.$username.value,
                         password: _this.$passwordInp.value
                    },
                    success: function(data) {
                        data = JSON.parse(data);
                        _this.loginSuccess(data);
                    }
                }

                sendAjax('http://localhost:8080/xiaomi/php/register.php', params);
            }
            this.$username.oninput = function(){
                var params = {
                    data: {
                        username: _this.$username.value
                        
                    },
                    success: function(data) {
                        data = JSON.parse(data);
                        _this.checkName(data);
                    }
                }
                sendAjax('http://localhost:8080/xiaomi/php/check_username.php', params);
            }
           
//             验证密码
               this.$password.onfocus=function(data){
             _this.$checkP.style.display='block';
              _this.$password.oninput = function(){
           var pReg = /^[a-zA-Z0-9]{8,16}$/
;
        	var rReg=/^[^ ]{6,16}$/;
        	var sReg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+$/;
        	
       if(_this.$password.value.indexOf(" ")>=0){
       	
        	_this.$sp2.style.color='red';
        }else{
        		_this.$sp2.style.color='green';
        		_this.$s2.style.color='green';
        }
        	
        if(pReg.test(_this.$password.value)==false){
        	_this.$sp3.style.color='red';
        	}else{
        	_this.$sp3.style.color='green';
        	_this.$s3.style.color='green';
        	}
        	if(sReg.test(_this.$password.value)==false){
        	_this.$sp4.style.color='red';
        	}else{
        	_this.$sp4.style.color='green';
        	_this.$s4.style.color='green';
        	}
            	
            }
        	
        }
//             密码输入规则显示
          this.$password.onblur=function(data){
             _this.$checkP.style.display='none';  	
        }
        },
//      检测用户名
        checkName: function(data) {
        	var uReg = /[a-zA-Z_]{6,13}/;
        	
        	if(uReg.test(this.$username.value)==false){
        	this.$sp1.style.display='block';
        	this.$username.style.borderColor='red';
        	}else{
        		this.$sp1.style.display='none';
        	this.$username.style.borderColor='';
        	}
        },
        loginSuccess: function(data) {
            if(data.code == 200) {
               alert('注册成功');
                location.href = 'login.html';
            } else {
                alert(data.msg);
            }
        },
    }

}())
