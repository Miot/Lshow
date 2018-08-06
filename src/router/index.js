import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/person/Login.vue'], resolve)
    },
    {
      path: '/personcenter',
      component: resolve => require(['../components/page/person/Person_work.vue'], resolve)
    },
    {
      path: '/earning/daily',
      component: resolve => require(['../components/page/earning/Daily_earnings.vue'], resolve),
      meta: { keepAlive:true, isBack:false },
    },
    {
      path: '/earning/out',
      component: resolve => require(['../components/page/earning/Balance_out.vue'], resolve)
    },
    {
      path: '/earning/daily/all',
      component: resolve => require(['../components/page/earning/Earinings_all.vue'], resolve),
      meta: { keepAlive:true, isBack:false },
    },
    {
      path: '/earning/daily/detail',
      component: resolve => require(['../components/page/earning/Earinings_detail.vue'], resolve)
    },
    {
      path: '/ad/daily',
      component: resolve => require(['../components/page/ad/Daily_payment.vue'], resolve),
      meta: { keepAlive:true, isBack:false },
    },
    {
      path: '/ad/out',
      component: resolve => require(['../components/page/ad/Balance_out.vue'], resolve)
    },
    {
      path: '/ad/in',
      component: resolve => require(['../components/page/ad/Balance_in.vue'], resolve)
    },
    {
      path: '/ad/daily/all',
      component: resolve => require(['../components/page/ad/Payment_all.vue'], resolve),
      meta: { keepAlive:true, isBack:false },
    },
    {
      path: '/ad/daily/detail',
      component: resolve => require(['../components/page/ad/Payment_detail.vue'], resolve)
    },
  ]
})
