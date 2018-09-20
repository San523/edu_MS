<!-- 登录页面 -->
<template>
  <div class="contain">
    <nav-bar></nav-bar>
    <div class="content">
      <div class="backhome">
        <a href="#">
          <div class="cccc">
            <img src="../assets/img/home.svg">
            <span>回到有爱</span>
          </div>
        </a>
      </div>
      <div class="loginBox" ref="loginBox">
        <div class="background">
          <el-carousel height="500px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="login" v-if="!forgetpag">
          <div class="title">账号登录</div>
          <div class="line"></div>
          <div class="username msg">
            <span>用户名</span>
            <span>|</span>
            <input v-model="username" type="text" name="" placeholder="请输入用户名">
          </div>
          <div class="password msg">
            <span>密</span>
            <span>码</span>
            <span>|</span>
            <input v-model="password" type="password" name="" placeholder="请输入您的密码">
          </div>
          <div class="error-mess" v-if="errorMsg!=''">
            <span class="error-icon"></span><span id="error-message">{{errorMsg}}</span>
          </div>
          <div class="forgetpas">
            <a href="#" @click="forgetpag=!forgetpag;unerrorMsg=''">忘记密码?</a>
          </div>
          <div class="loginBtn" @click="login">立即登录</div>
          <div class="loginBtn" @click="outlogin">退出登录</div>
          <div class="join">
            <span>还没加入有爱教育？</span>
            <a href="#">[立即加入]</a>
          </div>
        </div>
        <div class="login" v-if="forgetpag">
          <div class="title">忘记密码</div>
          <div class="line"></div>
          <div class="username msg">
            <span>用户名</span>
            <span>|</span>
            <input v-model="unusername" type="text" name="" placeholder="请输入用户名">
          </div>
          <div class="verificationCode">
            <span>验证码</span>
            <span>|</span>
            <input v-model="verificationCode" name="" placeholder="请输入验证码">
            <!-- <img src="../assets/img/code.png"> -->
            <img :src="verifyImgSrc" @click="verifycode">
          </div>
          <div class="error-mess" v-if="unerrorMsg!=''">
            <span class="error-icon"></span><span id="error-message">{{unerrorMsg}}</span>
          </div>
          <div class="submitBtn" @click="submit">提交</div>
          <div class="join">
            <span>想起来密码了？</span>
            <a href="#" @click="forgetpag=!forgetpag;errorMsg=''">[直接登录]</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script type="text/javascript">
import navBar from '@/components/navBar'; //顶部栏
import accountLogin from '@/components/account_login'; //顶部栏
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      screenWidth: document.documentElement.clientHeight, //页面高度
      username: "", //用户名
      password: "", //密码
      unusername: "", //忘记密码页用户名
      verificationCode: "", //验证码
      errorMsg: "", //错误信息
      unerrorMsg: "", //忘记密码页错误信息
      forgetpag: false, //是否进入忘记密码页
      //验证码图片
      verifyImgSrc: '',
    }
  },

  //父控件传过来的参数
  props: {

  },
  //监听函数
  watch: {
    screenWidth(curVal, oldVal) {　　　　　　　　　　　　　　　　　　},
  },
  //计算属性
  computed: {

  },
  //控件加载前执行的函数
  created() {

  },

  beforeCreate() {
    document.querySelector('body').setAttribute('style', 'background-color:#00C58C')
  },

  beforeDestroy() {
    //document.querySelector('body').removeAttribute('style', 'background-color:#ffffff')

  },

  //进入页面执行的函数
  mounted() {
    /*    let hei = document.documentElement.clientHeight
        this.loginBoxheight = (hei - 60) * 0.8
        this.loginBoxpaddingTop = hei * 0.15*/
    this.verifycode()
  },

  //定义函数
  methods: {
    //登录函数
    login() {
      //console.log( document.cookie.split(';')[1].substring(11))
      if (this.username == "") {
        this.errorMsg = "请输入用户名!"
      } else if (this.password == "") {
        this.errorMsg = "请输入您的密码!"
      } else {
        this.errorMsg = ""
        //alert(this.$store.state.text)
        let params = new URLSearchParams();
        params.append('username', this.username);
        params.append('password', this.password);
        // params.append('csrfmiddlewaretoken ', document.cookie.split(';')[1].substring(11));
        this.$store.dispatch('trainingAdminLogin', params).then((response) => {
          let res = response.data;
          if (response.statusText === 'OK' && response.status === 200) {
            console.log(res)
            if(res.resultcode==0){
                this.$message('登录成功')
            }else{
              this.$message(res.message)
            } 
          } else {
            this.$message.error("网络错误")
          }
        }).catch((err) => {
          console.log(err);
          this.$message.error("网络连接错误");
        });
      }
    },

    //退出登录
    outlogin() {
      let params = new URLSearchParams();
      params.append('username', this.username);
      this.$store.dispatch('outLogin', params).then((response) => {
        let res = response.data;
        if (response.statusText === 'OK' && response.status === 200) {
          console.log(res)
          this.$message(res)
        } else {
          this.$message.error("网络错误")
        }
      }).catch((err) => {
        console.log(err);
        this.$message.error("网络连接错误");
      });
    },

    //测试django后台
    djangoTest() {
      let params = new URLSearchParams();
      params.append('name', "名字1");
      params.append('email', "4@4.com");
      params.append('address', '武汉');
      params.append('message', '武汉');
      this.$store.dispatch('djangoTest', params).then((response) => {
        let res = response.data;
        if (response.statusText === 'OK' && response.status === 200) {
          console.log(res)
        } else {
          this.$message.error("网络错误")
        }
      }).catch((err) => {
        console.log(err);
        this.$message.error("网络连接错误");
      });
    },


    //忘记密码提交函数
    submit() {
      if (this.unusername == "") {
        this.unerrorMsg = "请输入用户名!"
      } else if (this.verificationCode == "") {
        this.unerrorMsg = "请输入验证码!"
      } else {
        let params = new URLSearchParams();
        params.append('vc', this.verificationCode);
        this.$store.dispatch('verifycodeValid', params).then((response) => {
          let res = response.data;
          if (response.statusText === 'OK' && response.status === 200) {
            if (res == "ok") {
              this.$message({
                message: '恭喜你，验证成功',
                type: 'success'
              });
            } else {
              this.$message.error("验证失败")
            }
          } else {
            this.$message.error("网络错误")
          }
        }).catch((err) => {
          console.log(err);
          this.$message.error("网络连接错误");
        });
      }
    },


    //获取验证码图片
    verifycode() {
      let params = new URLSearchParams();
      this.$store.dispatch('verifycode', params).then((response) => {
        let res = response.data;
        if (response.statusText === 'OK' && response.status === 200) {
          let key = new Buffer(res, 'binary').toString('base64')
          //console.log(key)
          this.verifyImgSrc = 'data:image/png;base64,' + key;
        } else {
          this.$message.error("网络错误")
        }
      }).catch((err) => {
        console.log(err);
        this.$message.error("网络连接错误");
      });
    }
  },

  //增加控件
  components: {
    navBar,
    accountLogin
  }
}

</script>
<style scoped>
.contain {}

.content {
  padding-top: 100px;
  text-align: center;
}

.loginBox {
  height: 500px;
  border-radius: 4px 4px 4px 4px;
  display: flex;
  justify-content: center;
}

.background {
  width: 640px;
  background: rgba(32, 160, 255, 1);
}

.login {
  width: 360px;
  background: #FFFFFF;
  padding: 22px 20px;
  position: relative;
}

.title {
  width: 360px;
  text-align: left;
  font-size: 20px;
  color: rgba(48, 44, 72, 1);
}

.line {
  width: 360px;
  height: 1px;
  background: rgba(224, 230, 237, 1);
  margin-top: 10px;
}

.username {
  margin-top: 40px;
}


.password {
  margin-top: 20px;
}

.verificationCode {
  margin-top: 20px;
  display: flex;
  align-items: center;
  width: 340px;
  height: 20px;
  padding: 10px 0 10px 20px;
  border-radius: 2px;
  border: 1px solid rgba(224, 230, 237, 1);
}

.verificationCode input {
  width: 154.2px;
  border: none;
  outline: none;
  box-shadow: 0 0 0px 1000px white inset;
}

.verificationCode span {
  margin-right: 20px;
  font-size: 14px;
  color: rgba(94, 109, 130, 1);
}

.verificationCode img {
  width: 100px;
  height: 42px;
}

.password span:nth-child(1) {
  margin-right: 15px;
}

.msg {
  display: flex;
  align-items: center;
  width: 320px;
  height: 20px;
  padding: 10px 20px;
  border-radius: 2px;
  border: 1px solid rgba(224, 230, 237, 1);
}

.msg span {
  margin-right: 20px;
  font-size: 14px;
  color: rgba(94, 109, 130, 1);
}

.msg input {
  width: 220px;
  border: none;
  outline: none;
  box-shadow: 0 0 0px 1000px white inset;
}

.error-mess {
  width: 350px;
  background: #fff0f0;
  border: 1px solid #ffd2d2;
  margin-top: 10px;
  color: #b74d46;
  font-size: 12px;
  line-height: 26px;
  height: 26px;
  padding-left: 10px;
  text-align: left;
}

.error-icon {
  display: inline-block;
  background: url(../assets/icon/login-logic-icons.png) no-repeat 0 0;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin: -4px 5px -2px 0px;
}

.backhome {
  display: flex;
  justify-content: center;
  margin-bottom: 23px;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
}


.backhome a {
  text-decoration: none;
  color: #ffffff;
  width: 1040px;
  text-align: right;
}

.forgetpas {
  margin-top: 10px;
  width: 360px;
  text-align: right;
}

.forgetpas a {
  text-decoration: none;
  color: #00C58C;
  font-size: 14px;
}

.loginBtn {
  margin-top: 40px;
  width: 360px;
  height: 40px;
  background: rgba(0, 197, 140, 1);
  border-radius: 2px;
  font-size: 16px;
  color: #ffffff;
  line-height: 40px;
}

.submitBtn {
  margin-top: 80px;
  width: 360px;
  height: 40px;
  background: rgba(0, 197, 140, 1);
  border-radius: 2px;
  font-size: 16px;
  color: #ffffff;
  line-height: 40px;
}

.join {
  clear: both;
  text-align: left;
  bottom: 20px;
  position: absolute;
  font-size: 14px;
  color: rgba(94, 109, 130, 1);
}

.join a {
  text-decoration: none;
  color: #00C58C;
  font-size: 14px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #20A0FF;
}

@media screen and (max-width: 769px) {}

</style>
