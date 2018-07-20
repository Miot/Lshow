import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/personcenter'
    },
    {
      path: '/personcenter',
      component: resolve => require(['../components/page/person/Person_work.vue'], resolve)
    },
    {
      path: '/personcenter/test',
      component: resolve => require(['../components/page/person/Test.vue'], resolve)
    },
    {
      path: '/earning/daily',
      component: resolve => require(['../components/page/earning/Daily_earnings.vue'], resolve)
    },
    {
      path: '/earning/daily/all',
      component: resolve => require(['../components/page/earning/Earinings_all.vue'], resolve)
    },
    {
      path: '/earning/daily/detail',
      component: resolve => require(['../components/page/earning/Earinings_detail.vue'], resolve)
    },
    {
      path: '/ad/daily',
      component: resolve => require(['../components/page/ad/Daily_payment.vue'], resolve)
    },
    {
      path: '/ad/daily/all',
      component: resolve => require(['../components/page/ad/Payment_all.vue'], resolve)
    }
  ]
})
