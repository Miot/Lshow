import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

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
      path: '/earning/daily',
      component: resolve => require(['../components/page/earning/Daily_earnings.vue'], resolve)
    },
    {
      path: '/ad/daily',
      component: resolve => require(['../components/page/ad/Daily_payment.vue'], resolve)
    }
    
  ]
})
