import Vue from 'vue';
import axios from 'axios';
import store from './store';
import router from '../router';
import config from './config'


/*解决django  csrf验证*/
axios.interceptors.request.use((config) => {
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  let regex = /.*csrftoken=([^;.]*).*$/; // 用于从cookie中匹配 csrftoken值
  config.headers['X-CSRFToken'] = document.cookie.match(regex) === null ? null : document.cookie.match(regex)[1];
  return config
});

export default {
  /**
    登录部分
  **/
  //测试接口 category_name
  test({ commit, state }, params) {
    return axios({
      //url: urltitle + '/Mesapp/test',
      url: "http://192.168.4.166:8080/prj-gzjd/appProjectController!getEquip.m",
      method: 'post',
      data: params,
    });
  },

  //django测试接口 
  djangoTest({ commit, state }, params) {
    return axios({
      //url: urltitle + '/Mesapp/test',
      url: "/django/form/",
      method: 'post',
      data: params,
    });
  },

  //机构管理员登录验证接口 
  trainingAdminLogin({ commit, state }, params) {
    return axios({
      //url: urltitle + '/Mesapp/test',
      url: "/django/users/trainingAdminLogin",
      method: 'post',
      data: params,
    });
  },

   //系统管理员登录验证接口 
  administratorLogin({ commit, state }, params) {
    return axios({
      //url: urltitle + '/Mesapp/test',
      url: "/django/users/administratorLogin",
      method: 'post',
      data: params,
    });
  },

 //系统管理员注册
  adminRegister({ commit, state }, params) {
    return axios({
      //url: urltitle + '/Mesapp/test',
      url: "/django/users/adminRegister",
      method: 'post',
      data: params,
    });
  },


  //退出登录
  outLogin({ commit, state }, params) {
    return axios({
      //url: urltitle + '/Mesapp/test',
      url: "/django/users/outLogin",
      method: 'post',
      data: params,
    });
  },

  //获取验证码
  verifycode({ commit, state }, params) {
    return axios({
      //url: urltitle + '/Mesapp/test',
      url: "/django/users/verifycode/",
      method: 'post',
      responseType: 'arraybuffer',
      data: params,
    });
  },

  //验证验证码
  verifycodeValid({ commit, state }, params) {
    return axios({
      //url: urltitle + '/Mesapp/test',
      url: "/django/users/verifycodeValid/",
      method: 'post',
      data: params,
    });
  },


}
