import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import PNRValidator from '@/components/PNRValidator'
import VoucherValidator from '@/components/VoucherValidator'
import ConfirmPage from '@/components/ConfirmPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    { path:"/pnr-validator",
      name:"PNRValidator",
      component: PNRValidator
    },
    {
      path: '/voucher-validator',
      name: 'VoucherValidator',
      component: VoucherValidator
    },
    {
      path: '/confirm-page',
      name: 'ConfirmPage',
      component: ConfirmPage
    }
  ]
})
