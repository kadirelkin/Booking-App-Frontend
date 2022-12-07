// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {localeEN , localeTR} from './locales/locales';
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueI18n from 'vue-i18n'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate'
import validationMessages from 'vee-validate/dist/locale/en'
import trValidationMessages from 'vee-validate/dist/locale/tr'
import VueAxios from 'vue-axios'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueI18n);
Vue.use(Vuex);
Vue.use(VueAxios, axios);
Vue.use(VeeValidate,{
  i18nRootKey: 'validations',
  i18n,
  dictionary: {
    en: validationMessages,
    tr: trValidationMessages
  }
});


const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en:localeEN,
    tr:localeTR
  }
});


const store = new Vuex.Store({
  state () {
    return {
      userInfo: null,
      userPNRNo: null,
      userVoucherNo: null,
      isRedirected: false
    }
  },
  mutations: {
    setUserInfo(state,{userInfo}) {
      state.userInfo = userInfo;
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    },
    setUserPNRNo(state,{userPNRNo}) {
      state.userPNRNo = userPNRNo;
    },
    setUserVoucherNo(state,{userVoucherNo}) {
      state.userVoucherNo = userVoucherNo;
    },
    setIsRedirected(state,{isRedirected}) {
      state.isRedirected = isRedirected;
    }
  }
});

Vue.component('nav-bar', require('./components/Navbar.vue').default);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
