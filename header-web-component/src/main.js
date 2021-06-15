import Vue from 'vue'
//import App from './App.vue'

//Vue.config.productionTip = false

//new Vue({
//  render: h => h(App),
//}).$mount('#app')

import wrap from '@vue/web-component-wrapper';
import HeaderWebComponent from './components/HeaderWebComponent';

const CustomElement = wrap (Vue, HeaderWebComponent);
window.customElements.define('header-web-component', CustomElement);