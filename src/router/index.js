import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
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
      path: '/test',
      component: resolve => require(['../components/page/Test.vue'], resolve)
    },
    {
      path: '/earning/daily',
      component: resolve => require(['../components/page/earning/Daily_earnings.vue'], resolve),
      meta: {keepAlive: true}
    },
    {
      path: '/earning/out',
      component: resolve => require(['../components/page/earning/Balance_out.vue'], resolve),
      meta: {keepAlive: false}
    },
    {
      path: '/earning/daily/all',
      component: resolve => require(['../components/page/earning/Earinings_all.vue'], resolve),
      meta: {keepAlive: true}
    },
    {
      path: '/earning/daily/detail',
      component: resolve => require(['../components/page/earning/Earinings_detail.vue'], resolve)
    },
    {
      path: '/ad/daily',
      component: resolve => require(['../components/page/ad/Daily_payment.vue'], resolve),
      meta: {keepAlive: true}
    },
    {
      path: '/ad/out',
      component: resolve => require(['../components/page/ad/Balance_out.vue'], resolve),
      meta: {keepAlive: false}
    },
    {
      path: '/ad/in',
      component: resolve => require(['../components/page/ad/Balance_in.vue'], resolve),
      meta: {keepAlive: false}
    },
    {
      path: '/ad/daily/all',
      component: resolve => require(['../components/page/ad/Payment_all.vue'], resolve),
      meta: {keepAlive: true}
    },
    {
      path: '/ad/daily/detail',
      component: resolve => require(['../components/page/ad/Payment_detail.vue'], resolve)
    },
  ]
})
