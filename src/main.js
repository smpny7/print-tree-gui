import Vue from 'vue'
import App from './App.vue'
import router from './router'
// noinspection ES6CheckImport
import {Network} from "vue-vis-network";
import './assets/tailwind.css'
import 'remixicon/fonts/remixicon.css'

Vue.config.productionTip = false
Vue.component('network', Network);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
