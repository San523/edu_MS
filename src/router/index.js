import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/page/login' /*登录页面*/
import LoginSuccess from '@/page/loginSuccess' /*登录成功页面*/
import Test1 from '@/page/test1'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/loginSuccess',
      name: 'LoginSuccess',
      component: LoginSuccess
    },{
      path: '/test1',
      name: 'test1',
      component: Test1
    },

  ]
})
